/**
 * Scores the migrated content against the original pages on the content-making branch.
 * Each check ranks pages so a human looks at the worst first; none proves a page right or wrong.
 * Run with: bun scripts/import-scorecard.ts   (full report: scripts/output/import-scorecard.json)
 */

import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = resolve(import.meta.dir, "..");
const DATA = resolve(ROOT, "src/data");
const ORIGINAL_BRANCH = "content-making";

// ---------- Arabic normalisation
// character classes are built from code points so the source stays plain ASCII
const chars = (...ranges: [number, number?][]) =>
  ranges
    .map(([a, b]) =>
      b
        ? `${String.fromCharCode(a)}-${String.fromCharCode(b)}`
        : String.fromCharCode(a),
    )
    .join("");
const cls = (...ranges: [number, number?][]) =>
  new RegExp(`[${chars(...ranges)}]`, "g");
const HARAKAT = cls([0x064b, 0x0652]);
const QURANIC_MARKS = cls(
  [0x0653, 0x065f],
  [0x06d6, 0x06dc],
  [0x06df, 0x06e8],
  [0x06ea, 0x06ed],
  [0x0640],
);
const ARABIC_LETTER = new RegExp(`[${chars([0x0621, 0x064a])}]`);
const NON_ARABIC = new RegExp(
  `[^${chars([0x0621, 0x064a], [0x064b, 0x0652])} ]+`,
  "g",
);
const replaceAll = (s: string, pairs: [number[], number][]) =>
  pairs.reduce(
    (t, [from, to]) =>
      t.replace(
        cls(...from.map((c) => [c] as [number])),
        String.fromCharCode(to),
      ),
    s,
  );

const UTHMANI_HAMZA_MADDA = new RegExp(
  String.fromCharCode(0x0623, 0x0653),
  "g",
);

/**
 * Letter-form variants that do not change the reading: Persian letter shapes used by the old pages,
 * alif wasla, Uthmani small marks, and the Quranic sukun/open-tanwin glyphs. These are accepted silently.
 */
const letterForms = (s: string) =>
  replaceAll(
    s
      .normalize("NFC")
      .replace(UTHMANI_HAMZA_MADDA, String.fromCharCode(0x0622)),
    [
      [[0x06cc], 0x064a], // Persian yeh
      [[0x06a9], 0x0643], // keheh
      [[0x06c1, 0x06be], 0x0647], // heh goal, heh doachashmee
      [[0x0671], 0x0627], // alif wasla
      [[0x06e1], 0x0652], // Quranic sukun
      [[0x08f0], 0x064b],
      [[0x08f1], 0x064c],
      [[0x08f2], 0x064d],
    ],
  )
    .replace(cls([0x0670]), "")
    .replace(QURANIC_MARKS, "")
    .replace(NON_ARABIC, " ")
    .replace(/\s+/g, " ")
    .trim();

/** Consonant skeleton for matching: also drops harakat, alifs and hamza seats, which the two scripts spell differently */
const skeleton = (s: string) =>
  replaceAll(letterForms(s).replace(HARAKAT, ""), [
    [[0x0649], 0x064a],
    [[0x0629], 0x0647],
    [[0x0624], 0x0648],
    [[0x0626], 0x064a],
  ])
    .replace(cls([0x0621, 0x0623], [0x0625], [0x0627]), "")
    .replace(/\s+/g, " ")
    .trim();

const latin = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
const grams = (s: string, n = 3) => {
  const w = s.split(" ").filter(Boolean);
  return Array.from({ length: Math.max(0, w.length - n + 1) }, (_, i) =>
    w.slice(i, i + n).join(" "),
  );
};

// ---------- data side
type Entry = {
  arabic: string;
  translit: string;
  translation: string;
  repeat?: number;
  surah?: number;
  verse?: number;
  isQuran: boolean;
};
type Page = {
  file: string;
  entries: Entry[];
  quranModels: { surah: number; verses: number[] }[];
};
const pages: Page[] = [];
for (const file of readdirSync(DATA).filter((f) => f.endsWith(".ts"))) {
  const page: Page = { file, entries: [], quranModels: [] };
  const seen = new Set<object>();
  const walk = (o: unknown, surah?: number) => {
    if (!o || typeof o !== "object" || seen.has(o)) return;
    seen.add(o);
    const r = o as Record<string, unknown>;
    if (o.constructor?.name === "QuranModel")
      page.quranModels.push({
        surah: r.surah as number,
        verses: (r.entries as { verse: number }[]).map((e) => e.verse),
      });
    const s = typeof r.surah === "number" ? r.surah : surah;
    if (typeof r.arabic === "string")
      page.entries.push({
        arabic: r.arabic,
        translit: (r.translit as string) ?? "",
        translation: (r.translation as string) ?? "",
        repeat: r.repeat as number | undefined,
        surah: s,
        verse: r.verse as number | undefined,
        isQuran: typeof r.verse === "number",
      });
    for (const v of Object.values(r)) walk(v, s);
  };
  for (const v of Object.values(
    await import(pathToFileURL(resolve(DATA, file)).href),
  ))
    walk(v);
  pages.push(page);
}

// ---------- original side, read straight from git so the check needs no extracted copy
const git = (...args: string[]) => {
  const p = Bun.spawnSync(["git", ...args], { cwd: ROOT });
  if (p.exitCode !== 0)
    throw new Error(`git ${args.join(" ")}: ${p.stderr.toString()}`);
  return p.stdout.toString();
};
const decode = (s: string) =>
  s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/<wbr>/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
type Original = { path: string; arabic: string[]; latin: string[] };
const originals: Original[] = [];
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
  const html = git("show", `${ORIGINAL_BRANCH}:${path}`);
  const o: Original = {
    path: path.replace(/^WebsiteBase\//, ""),
    arabic: [],
    latin: [],
  };
  // only Latin text right after Arabic or translit is recitation text; the rest is headings and rubrics
  let prev = "";
  for (const m of html.matchAll(
    /<div class="_reset_zpttl_1"[^>]*style="([^"]*)"[^>]*>((?:(?!<div)[\s\S])*?)<\/div>/g,
  )) {
    const t = decode(m[2]);
    if (!t) continue;
    const ar = [...t].filter((c) => ARABIC_LETTER.test(c)).length;
    const lat = (t.match(/[A-Za-z]/g) ?? []).length;
    const kind =
      ar > lat ? "AR" : /font-style: italic/.test(m[1]) ? "TL" : "EN";
    if (kind === "AR") o.arabic.push(t);
    else if (prev === "AR" || prev === "TL") o.latin.push(latin(t));
    prev = kind;
  }
  if (o.arabic.length) originals.push(o);
}

// ---------- 1. coverage both ways, and 2. order
const fileText = new Map(
  pages.map((p) => [
    p.file,
    p.entries.map((e) => skeleton(e.arabic)).join(" "),
  ]),
);
const fileGrams = new Map(
  [...fileText].map(([f, t]) => [f, new Set(grams(t))]),
);
const allGrams = new Set([...fileGrams.values()].flatMap((s) => [...s]));
const allLatin = new Set(
  pages.flatMap((p) => [
    ...grams(p.entries.map((e) => latin(e.translation)).join(" ")),
    ...grams(p.entries.map((e) => latin(e.translit)).join(" ")),
  ]),
);

const perPage = originals.map((o) => {
  const g = o.arabic.flatMap((l) => grams(skeleton(l)));
  const best = pages
    .map((p) => ({
      file: p.file,
      hit: g.filter((x) => fileGrams.get(p.file)?.has(x)).length,
    }))
    .sort((a, b) => b.hit - a.hit)[0];
  const lg = o.latin.flatMap((l) => grams(l));
  // repeated refrains defeat a plain lookup, so each original line is searched forward from the last match
  const skel =
    pages
      .find((p) => p.file === best.file)
      ?.entries.map((e) => skeleton(e.arabic)) ?? [];
  let pos = 0,
    matched = 0,
    ahead = 0;
  for (const line of o.arabic) {
    const key = skeleton(line).split(" ").slice(0, 3).join(" ");
    if (key.split(" ").length < 3) continue;
    const fwd = skel.findIndex((s, i) => i >= pos && s.includes(key));
    const any = fwd >= 0 ? fwd : skel.findIndex((s) => s.includes(key));
    if (any < 0) continue;
    matched++;
    if (fwd >= 0) ahead++;
    pos = any;
  }
  return {
    page: o.path,
    file: best.file,
    arabicCoverage: +(
      g.filter((x) => allGrams.has(x)).length / Math.max(1, g.length)
    ).toFixed(3),
    latinCoverage:
      lg.length > 30
        ? +(lg.filter((x) => allLatin.has(x)).length / lg.length).toFixed(3)
        : null,
    inOrder: matched ? +(ahead / matched).toFixed(3) : null,
  };
});

// ---------- 3. harakat differences on words whose letters agree (Qur'an excluded: it is checked against KFQC)
/**
 * Differences written or left out by convention without changing the reading: sukun, the kasra under
 * hamza-below, a long alif written in full or as a dagger, and where fathatan sits relative to its alif
 */
const optionalMarks = (w: string) =>
  w
    .replace(cls([0x0652]), "")
    .replace(
      new RegExp(
        `${String.fromCharCode(0x0625)}${String.fromCharCode(0x0650)}`,
        "g",
      ),
      String.fromCharCode(0x0625),
    )
    .replace(
      new RegExp(
        `${String.fromCharCode(0x0627)}${String.fromCharCode(0x064b)}`,
        "g",
      ),
      `${String.fromCharCode(0x064b)}${String.fromCharCode(0x0627)}`,
    )
    .replace(cls([0x0627]), "")
    .replace(cls([0x0649]), String.fromCharCode(0x064a));
const FINAL_MARK = new RegExp(`[${chars([0x064b, 0x0652])}]$`);
/** An unvowelled original word, or one read in pause, says nothing about the harakat we chose */
const sameReading = (original: string, ours: string) => {
  if (!HARAKAT.test(original)) return true;
  HARAKAT.lastIndex = 0;
  const o = optionalMarks(original),
    u = optionalMarks(ours);
  return o === u || (!FINAL_MARK.test(o) && u.replace(FINAL_MARK, "") === o);
};
type Word = { skel: string; form: string };
const words = (s: string): Word[] =>
  letterForms(s)
    .split(" ")
    .filter(Boolean)
    .map((w) => ({ skel: skeleton(w), form: w }))
    .filter((w) => w.skel);
const harakat: { page: string; original: string; ours: string }[] = [];
for (const o of originals) {
  const file = perPage.find((p) => p.page === o.path)?.file;
  const stream = (pages.find((p) => p.file === file)?.entries ?? [])
    .filter((e) => !e.isQuran)
    .flatMap((e) => words(e.arabic));
  let pos = 0;
  for (const line of o.arabic) {
    const w = words(line);
    if (w.length < 3) continue;
    const start = stream.findIndex(
      (x, i) =>
        i >= pos &&
        x.skel === w[0].skel &&
        stream[i + 1]?.skel === w[1].skel &&
        stream[i + 2]?.skel === w[2].skel,
    );
    if (start < 0) continue;
    let i = 0;
    for (; i < w.length && stream[start + i]?.skel === w[i].skel; i++)
      if (!sameReading(w[i].form, stream[start + i].form))
        harakat.push({
          page: o.path,
          original: w[i].form,
          ours: stream[start + i].form,
        });
    pos = start + i;
  }
}

// ---------- 4. per-entry checks
const kfqc: Record<string, string> = JSON.parse(
  readFileSync(resolve(ROOT, "scripts/data/quran-kfqc.json"), "utf8"),
);
const saheeh: Record<string, string> = JSON.parse(
  readFileSync(resolve(ROOT, "scripts/data/quran-saheeh.json"), "utf8"),
);
const sameText = (a: string, b: string) =>
  latin(a.replace(/…/g, "")) === latin(b.replace(/…/g, ""));
const flags: Record<string, { file: string; text: string }[]> = {
  quranArabicNotKfqc: [],
  quranTranslationNotSaheeh: [],
  quranVerseGap: [],
  placeholder: [],
  emptyField: [],
  duplicateNeighbourTranslation: [],
  repeatWrittenInText: [],
  sentenceBreakFragment: [],
  arabicFieldNotArabic: [],
};
const add = (k: string, file: string, text: string) =>
  flags[k].push({ file, text: text.slice(0, 120) });
for (const p of pages) {
  for (const q of p.quranModels)
    if (q.verses.slice(1).some((v, i) => v !== q.verses[i] + 1))
      add("quranVerseGap", p.file, `${q.surah}: ${q.verses.join(",")}`);
  p.entries.forEach((e, i) => {
    const key = `${e.surah}:${e.verse}`;
    const fragment = e.arabic.includes("…");
    if (
      e.isQuran &&
      !fragment &&
      kfqc[key] &&
      skeleton(kfqc[key]) !== skeleton(e.arabic)
    )
      add("quranArabicNotKfqc", p.file, key);
    if (
      e.isQuran &&
      saheeh[key] &&
      !(fragment
        ? latin(saheeh[key]).includes(latin(e.translation))
        : sameText(saheeh[key], e.translation))
    )
      add("quranTranslationNotSaheeh", p.file, `${key} ${e.translation}`);
    for (const t of [e.translit, e.translation])
      if (/^=\d+$|undefined|\[object/.test(t.trim()))
        add("placeholder", p.file, t);
    const hasArabic = ARABIC_LETTER.test(e.arabic);
    if (e.arabic.trim() && !hasArabic)
      add("arabicFieldNotArabic", p.file, e.arabic);
    if (hasArabic && (!e.translit.trim() || !e.translation.trim()))
      add("emptyField", p.file, e.arabic);
    const prev = p.entries[i - 1];
    if (
      prev &&
      e.translation.split(" ").length > 3 &&
      e.translation.trim() === prev.translation.trim() &&
      skeleton(e.arabic) !== skeleton(prev.arabic)
    )
      add("duplicateNeighbourTranslation", p.file, e.translation);
    if (
      !e.isQuran &&
      (e.repeat ?? 1) === 1 &&
      /\(\s*\d+\s*(times)?\s*\)|\b\d+\s+times\b|\b(three|seven|ten) times\b/i.test(
        `${e.translit} ${e.translation}`,
      )
    )
      add("repeatWrittenInText", p.file, e.translation || e.translit);
    // a full stop with a short fragment on one side often means the line was cut in the wrong place
    for (const t of [e.translit, e.translation]) {
      const parts = t.split(/(?<=[a-z\])"”’][.?])\s+(?=["“(]?[A-Z])/);
      const short = (s: string) => s.split(/\s+/).filter(Boolean).length <= 4;
      if (
        !e.isQuran &&
        parts.length > 1 &&
        !/^(O|Ya|Yā)\b/.test(parts[0]) &&
        (short(parts[0]) || short(parts[parts.length - 1]))
      )
        add("sentenceBreakFragment", p.file, t);
    }
  });
}

// ---------- report
const summary = {
  originalPages: perPage.length,
  arabicCoverageBelow90: perPage.filter((p) => p.arabicCoverage < 0.9).length,
  latinCoverageBelow60: perPage.filter(
    (p) => p.latinCoverage !== null && p.latinCoverage < 0.6,
  ).length,
  orderBelow95: perPage.filter((p) => p.inOrder !== null && p.inOrder < 0.95)
    .length,
  harakatDifferences: harakat.length,
  ...Object.fromEntries(Object.entries(flags).map(([k, v]) => [k, v.length])),
};
mkdirSync(resolve(ROOT, "scripts/output"), { recursive: true });
writeFileSync(
  resolve(ROOT, "scripts/output/import-scorecard.json"),
  JSON.stringify(
    {
      summary,
      perPage: perPage.sort((a, b) => a.arabicCoverage - b.arabicCoverage),
      harakat,
      flags,
    },
    null,
    1,
  ),
);
console.table(summary);
