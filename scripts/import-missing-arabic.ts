/**
 * Lists Arabic text from the original pages (content-making branch) that our data does not contain.
 * Both sides are reduced to a consonant skeleton, so harakat, Uthmani marks, alif and hamza-seat spellings
 * and Persian letter forms do not count as differences; a segment is found when its 3-word runs are.
 * Run with: bun scripts/import-missing-arabic.ts   (full list: scripts/output/import-missing-arabic.json)
 * It also flags blocks of lines written out twice in a row, which the missing check cannot see.
 */

import { execFileSync } from "node:child_process";
import { mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = resolve(import.meta.dir, "..");
const DATA = resolve(ROOT, "src/data");
const ORIGINAL_BRANCH = "content-making";
// the placeholder Afdal page was dropped on purpose
const SKIP_PAGES = [/Afdal as-Salawat/];
// share of a segment's 3-word runs that must be found for it to count as present
const FOUND = 0.8;
// written-in counts like (ثلاثًا) or (٣) became repeat fields, so they are not text to find
const COUNT_MARKER = /\([^)]*(ثلاث|مرتين|مرات|[0-9٠-٩])[^)]*\)/g;
// reviewed: the same words in another spelling (Uthmani 7:196 via the shared Quran, a hamza seat in Dalail)
const ACCEPTED = new Set([
  "﴿إِنَّ وَلِيِّيَ ٱللَّهُ ٱلَّذِى نَزَّلَ ٱلْكِتَـٰبَ ۖ وَهُوَ يَتَوَلَّى ٱلصَّـٰلِحِينَ﴾",
]);
// headings and captions: pages keep English-only headings (user, 2026-10-31)
const ARABIC_HEADINGS = [
  "هذه قصيدة للإمام عمر المحضار",
  "وهذه القصيدة أيضا للإمام عمر المحضار",
  "وهذه قصيدة للإمام أبي بكر العدني العيدروس",
  "هذه القصيدة للشيخ أبي بكر بن سالم",
  "وللشيخ أبي بكر بن سالم أيضا هذه القصيدة",
  "هذه القصيدة للحبيب عبد الله بن علوي الحداد",
  "قالها رضي الله عنه في سنة ١١٢٤هـ",
  "هذه القصيدة للحبيب علي بن محمد الحبشي",
  'من منظومة "هدية الصديق"',
  "للحبيب عبد اللّه بن حسين بن طاهر",
  "الشَّرَاب الطَّهُور",
  "مِن مَولِد وَسِيرَةِ بَدرِ البُدُور",
  "مَوْضِعُ القِيَام",
  "بِذِكرِ مَولِدِ النَّبِيِّ الشَّافِع",
  "مَحَلُّ الْمَقَام",
  "ابتداء الربع الثاني",
  "ابتداء الثلث الثاني",
  "ابتداء الربع الثالث",
  "ابتداء الثلث الثالث",
  "ابتداء الربع الرابع",
  "دعاء يقرأ عقيب دلائل الخيرات",
  "رَوْضَةُ المَحَبَّة",
  "فِي الصَّلَاةِ عَلَى سَيِّدِ الأَحِبَّة",
];
const ACCEPTED_PREFIXES = ["45 - "];
// reviewed: the original writes these blocks out twice as well
const ACCEPTED_DOUBLED = new Set([
  "khulasah-after-fajr-wird-of-imam-an-nawawi.ts",
  "khulasah-after-isha-wird-of-imam-an-nawawi.ts",
]);

const git = (...args: string[]) =>
  execFileSync("git", args, { cwd: ROOT, encoding: "utf8", maxBuffer: 1e8 });
const cp = (...codes: number[]) => String.fromCharCode(...codes);
const range = (a: number, b: number) => `${cp(a)}-${cp(b)}`;
const MARKS = new RegExp(
  `[${range(0x064b, 0x065f)}${cp(0x0670)}${range(0x06d6, 0x06ed)}${cp(0x0640)}]`,
  "g",
);
const LETTER_FORMS: [string, string][] = [
  [cp(0x06cc), cp(0x064a)], // Persian yeh
  [cp(0x06a9), cp(0x0643)], // keheh
  [cp(0x06c1), cp(0x0647)], // heh goal
  [cp(0x06be), cp(0x0647)], // heh doachashmee
  [cp(0x0649), cp(0x064a)], // alif maqsura
  [cp(0x0629), cp(0x0647)], // ta marbuta
  [cp(0x0624), cp(0x0648)], // waw hamza
  [cp(0x0626), cp(0x064a)], // yeh hamza
];
// alifs and bare hamzas are spelled differently between scripts, so the skeleton drops them
const ALIFS = new RegExp(
  `[${cp(0x0621, 0x0622, 0x0623, 0x0625, 0x0627, 0x0671)}]`,
  "g",
);
const NOT_LETTER = new RegExp(`[^${range(0x0621, 0x064a)} ]+`, "g");
const ARABIC = new RegExp(`[${range(0x0621, 0x064a)}]`);

const skeleton = (s: string) => {
  let t = s.normalize("NFC").replace(MARKS, "");
  for (const [from, to] of LETTER_FORMS) t = t.replaceAll(from, to);
  return t
    .replace(ALIFS, "")
    .replace(NOT_LETTER, " ")
    .replace(/\s+/g, " ")
    .trim();
};
// typed here, the accepted text may differ from the page in mark order, so it is compared by skeleton
const acceptedSkeletons = new Set(
  [...ACCEPTED, ...ARABIC_HEADINGS].map(skeleton),
);
const runs = (words: string[]) =>
  words.length < 3
    ? [words.join(" ")]
    : words.slice(0, -2).map((_, i) => words.slice(i, i + 3).join(" "));

// our Arabic in reading order, so runs that cross an entry boundary still match
const ours: string[] = [];
// a block of lines written out twice in a row is a copy slip: real repeats use the repeat field
const MIN_BLOCK = 3;
const doubled: Record<string, string[]> = {};
for (const f of readdirSync(DATA).filter((f) => f.endsWith(".ts"))) {
  const lines: string[] = [];
  const seen = new Set<object>();
  const collect = (o: unknown) => {
    if (!o || typeof o !== "object" || seen.has(o)) return;
    seen.add(o);
    const arabic = (o as { arabic?: unknown }).arabic;
    if (typeof arabic === "string" && arabic.trim())
      lines.push(skeleton(arabic));
    for (const v of Object.values(o)) collect(v);
  };
  collect((await import(pathToFileURL(resolve(DATA, f)).href)).default);
  ours.push(...lines);
  for (let i = 0; i < lines.length; i++)
    for (let n = MIN_BLOCK; i + 2 * n <= lines.length; n++)
      if (
        lines.slice(i, i + n).join("|") ===
        lines.slice(i + n, i + 2 * n).join("|")
      ) {
        if (!ACCEPTED_DOUBLED.has(f)) {
          doubled[f] ??= [];
          doubled[f].push(`${n} lines from line ${i + 1}: ${lines[i]}`);
        }
        i += 2 * n - 1;
        break;
      }
}
const corpus = ` ${ours.join(" ")} `;

const report: Record<string, { text: string; found: number }[]> = {};
for (const path of git(
  "ls-tree",
  "-r",
  "--name-only",
  ORIGINAL_BRANCH,
  "--",
  "WebsiteBase",
)
  .split("\n")
  .filter(
    (p) => p.endsWith("-content.html") && !SKIP_PAGES.some((r) => r.test(p)),
  )) {
  const segments = git("show", `${ORIGINAL_BRANCH}:${path}`)
    .replace(/<wbr>/g, "")
    .split(/<[^>]+>/)
    .map((t) => t.replace(/&nbsp;/g, " ").trim())
    // long prose pages hold a whole day in one block; checked sentence by sentence a dropped passage cannot hide
    .flatMap((t) => t.split(/\n|(?<=\.)\s+/))
    .map((t) => t.trim())
    .filter((t) => ARABIC.test(t));
  const missing: { text: string; found: number }[] = [];
  for (const text of segments) {
    if (
      acceptedSkeletons.has(skeleton(text)) ||
      ACCEPTED_PREFIXES.some((p) => text.startsWith(p))
    )
      continue;
    const words = skeleton(text.replace(MARKS, "").replace(COUNT_MARKER, ""))
      .split(" ")
      .filter(Boolean);
    if (!words.length) continue;
    const parts = runs(words);
    const found =
      parts.filter((r) => corpus.includes(` ${r} `)).length / parts.length;
    if (found < FOUND)
      missing.push({ text, found: Math.round(found * 100) / 100 });
  }
  if (missing.length) report[path.replace(/^WebsiteBase\//, "")] = missing;
}

mkdirSync(resolve(ROOT, "scripts/output"), { recursive: true });
writeFileSync(
  resolve(ROOT, "scripts/output/import-missing-arabic.json"),
  JSON.stringify(report, null, 2),
);
const blocks = Object.values(doubled).flat().length;
console.log(`Blocks written out twice in a row: ${blocks}`);
for (const [file, found] of Object.entries(doubled))
  console.log(`  ${file}\n    - ${found.join("\n    - ")}`);
const total = Object.values(report).flat().length;
console.log(
  `Missing Arabic: ${total} segments on ${Object.keys(report).length} pages`,
);
for (const [page, missing] of Object.entries(report)) {
  console.log(`\n${page}`);
  for (const m of missing)
    console.log(
      `  - ${String(Math.round(m.found * 100)).padStart(3)}% found: ${m.text.length > 90 ? `${m.text.slice(0, 90)}…` : m.text}`,
    );
}
