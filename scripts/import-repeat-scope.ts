/**
 * Checks that repeat counts from the original pages (content-making branch) sit at the right level in our data.
 * A passage ending in a count like "(3)" repeats as a whole: if we split it into several lines, the count belongs
 * on the group holding exactly those lines, not on its last line. Also lists groups written out several times
 * in a row, which should be one group with a repeat.
 * Run with: bun scripts/import-repeat-scope.ts
 */

import { execFileSync } from "node:child_process";
import { mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = resolve(import.meta.dir, "..");
const DATA = resolve(ROOT, "src/data");
const ORIGINAL_BRANCH = "content-making";

const git = (...args: string[]) =>
  execFileSync("git", args, { cwd: ROOT, encoding: "utf8", maxBuffer: 1e8 });
const cp = (...codes: number[]) => String.fromCharCode(...codes);
const range = (a: number, b: number) => `${cp(a)}-${cp(b)}`;
const MARKS = new RegExp(
  `[${range(0x064b, 0x065f)}${cp(0x0670)}${range(0x06d6, 0x06ed)}${cp(0x0640)}]`,
  "g",
);
const ALIFS = new RegExp(
  `[${cp(0x0621, 0x0622, 0x0623, 0x0625, 0x0627, 0x0671)}]`,
  "g",
);
const NOT_LETTER = new RegExp(`[^${range(0x0621, 0x064a)} ]+`, "g");
const skeleton = (s: string) =>
  s
    .normalize("NFC")
    .replace(MARKS, "")
    .replaceAll(cp(0x0649), cp(0x064a))
    .replaceAll(cp(0x0629), cp(0x0647))
    .replace(ALIFS, "")
    .replace(NOT_LETTER, " ")
    .replace(/\s+/g, " ")
    .trim();
const DIGITS = "0123456789";
const ARABIC_DIGITS = "٠١٢٣٤٥٦٧٨٩";
const WORD_COUNTS: Record<string, number> = { ثلاث: 3, مرتين: 2, سبع: 7 };
// a count written after a passage: (3), (٣), (ثلاثًا), (7 times)
const TRAILING_COUNT = /\(\s*([^)]{1,20})\)\s*[.،]?\s*$/;
const countOf = (marker: string) => {
  const bare = marker.replace(MARKS, "");
  const digits = [...bare]
    .map((c) =>
      ARABIC_DIGITS.includes(c) ? DIGITS[ARABIC_DIGITS.indexOf(c)] : c,
    )
    .join("");
  const n = Number.parseInt(digits.replace(/\D/g, ""), 10);
  if (n > 1) return n;
  for (const [word, count] of Object.entries(WORD_COUNTS))
    if (bare.includes(word)) return count;
  return 0;
};

type Entry = { arabic?: string; repeat?: number };
type Group = {
  file: string;
  repeat: number;
  entries: Entry[];
  skeletons: string[];
  kind: string;
};
const groups: Group[] = [];
for (const file of readdirSync(DATA).filter((f) => f.endsWith(".ts"))) {
  const seen = new Set<object>();
  const walk = (o: unknown) => {
    if (!o || typeof o !== "object" || seen.has(o)) return;
    seen.add(o);
    const r = o as {
      constructor: { name: string };
      entries?: Entry[];
      repeat?: number;
    };
    const kind = r.constructor.name;
    if (
      (kind === "DhikrModel" || kind === "QasidaVerseModel") &&
      Array.isArray(r.entries)
    )
      groups.push({
        file,
        kind,
        repeat: r.repeat ?? 1,
        entries: r.entries,
        skeletons: r.entries.map((e) => skeleton(e.arabic ?? "")),
      });
    for (const v of Object.values(o)) walk(v);
  };
  walk((await import(pathToFileURL(resolve(DATA, file)).href)).default);
}

const runs = (s: string) => {
  const w = s.split(" ").filter(Boolean);
  return w.slice(0, -2).map((_, i) => w.slice(i, i + 3).join(" "));
};
const runsByFile = new Map<string, Set<string>>();
for (const g of groups) {
  const set = runsByFile.get(g.file) ?? new Set<string>();
  for (const r of runs(g.skeletons.join(" "))) set.add(r);
  runsByFile.set(g.file, set);
}

const problems: string[] = [];
const fixable: { file: string; count: number; group: string[] }[] = [];
for (const path of git(
  "ls-tree",
  "-r",
  "--name-only",
  ORIGINAL_BRANCH,
  "--",
  "WebsiteBase",
)
  .split("\n")
  .filter((p) => p.endsWith("-content.html"))) {
  const segments = git("show", `${ORIGINAL_BRANCH}:${path}`)
    .replace(/<wbr>/g, "")
    .split(/<[^>]+>/)
    .map((t) => t.replace(/&nbsp;/g, " ").trim())
    .filter((t) => /[ء-ي]/.test(t) && !t.includes("﴿"));
  // compare a page only with the data file that shares most of its text, so short phrases do not match site-wide
  // scored by distinct 3-word runs, so large files with many common words do not win
  const pageRuns = new Set(segments.flatMap((t) => runs(skeleton(t))));
  const fileScore = new Map<string, number>();
  for (const [file, fileRuns] of runsByFile) {
    let shared = 0;
    for (const r of pageRuns) if (fileRuns.has(r)) shared++;
    fileScore.set(file, shared);
  }
  const [best, score] = [...fileScore].sort((a, b) => b[1] - a[1])[0] ?? [];
  // pages with no Arabic of their own (indexes) match nothing
  if (!best || !score) continue;
  if (process.env.SHOW_MATCH) console.log(`${path} -> ${best}`);
  const pageGroups = groups.filter((g) => g.file === best);
  for (const text of segments) {
    const marker = text.match(TRAILING_COUNT);
    if (!marker) continue;
    const count = countOf(marker[1]);
    if (!count) continue;
    // several counts inside one passage belong to its separate phrases, not to the whole
    if ((text.match(/\(\s*[0-9٠-٩]/g) ?? []).length > 1) continue;
    const passage = skeleton(text.slice(0, marker.index));
    if (passage.split(" ").length < 2) continue;
    // a passage can occur in several places; it is fine if any of them shows the count at the right level
    const findings: {
      issue: string;
      lines: number;
      detail: string;
      whole: boolean;
      group: string[];
    }[] = [];
    for (const g of pageGroups) {
      if (g.skeletons.some((s) => !s)) continue;
      const joined = g.skeletons.join(" ");
      const at = joined.indexOf(passage);
      if (at < 0) continue;
      // which of the group's lines the passage covers
      let pos = 0;
      const covered: number[] = [];
      g.skeletons.forEach((s, i) => {
        const end = pos + s.length;
        if (end > at && pos < at + passage.length) covered.push(i);
        pos = end + 1;
      });
      let issue = "";
      if (covered.length === 1) {
        const line = g.entries[covered[0]];
        const shown = (line.repeat ?? 1) > 1 ? line.repeat : g.repeat;
        if (shown !== count) issue = `one line, shows x${shown}`;
      } else if (g.repeat !== count) {
        const onLast = g.entries[covered.at(-1) as number].repeat;
        issue = `${covered.length} lines, group shows x${g.repeat}${(onLast ?? 1) > 1 ? `, last line x${onLast}` : ""}`;
      } else if (covered.length !== g.entries.length) {
        issue = `group x${count} also repeats ${g.entries.length - covered.length} lines outside the passage`;
      }
      findings.push({
        issue,
        lines: covered.length,
        detail: `lines ${covered[0] + 1}-${(covered.at(-1) as number) + 1} of ${g.entries.length}`,
        whole: covered.length === g.entries.length,
        group: g.skeletons,
      });
    }
    if (findings.length && findings.every((f) => f.issue)) {
      const worst = findings.sort((a, b) => b.lines - a.lines)[0];
      problems.push(
        `${best}: "${text.slice(0, 60)}…" (${count}): ${worst.issue} [${worst.detail}]`,
      );
      // a passage that is exactly one group can be fixed by moving the count onto the group
      if (worst.whole && worst.lines > 1)
        fixable.push({ file: best, count, group: worst.group });
    }
  }
}

// consecutive identical groups: written out instead of repeated
const copies: string[] = [];
for (let i = 1; i < groups.length; i++) {
  const a = groups[i - 1];
  const b = groups[i];
  if (
    a.file !== b.file ||
    a.skeletons.length < 2 ||
    a.skeletons.some((s) => !s)
  )
    continue;
  const same = (x: string[], y: string[]) =>
    x.length === y.length && x.every((s, k) => s === y[k]);
  // the first copy may carry an opening line the others lack
  if (same(a.skeletons, b.skeletons) || same(a.skeletons.slice(1), b.skeletons))
    copies.push(
      `${a.file}: "${b.skeletons[0]}…" written out again (${b.skeletons.length} lines)`,
    );
}

mkdirSync(resolve(ROOT, "scripts/output"), { recursive: true });
writeFileSync(
  resolve(ROOT, "scripts/output/import-repeat-scope.json"),
  JSON.stringify(fixable, null, 2),
);
console.log(`Repeat counts at the wrong level: ${problems.length}`);
for (const p of problems) console.log(`  - ${p}`);
console.log(`\nGroups written out again instead of repeated: ${copies.length}`);
for (const c of copies) console.log(`  - ${c}`);
