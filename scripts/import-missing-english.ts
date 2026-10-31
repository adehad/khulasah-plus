/**
 * Lists English text from the original pages (content-making branch) that appears nowhere in our data:
 * headings, rubrics, introductions and captions that the import dropped. Text we already have is removed,
 * so what is left is for a human to place.
 * Run with: bun scripts/import-missing-english.ts   (full list: scripts/output/import-missing-english.json)
 */

import { execFileSync } from "node:child_process";
import { mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = resolve(import.meta.dir, "..");
const DATA = resolve(ROOT, "src/data");
const ORIGINAL_BRANCH = "content-making";
// Dalail came from a separate source, and the placeholder Afdal page was dropped on purpose
const SKIP_PAGES = [/\/Dalail Khayrat\//, /Afdal as-Salawat/];
// reviewed and placed in reworded form: nav labels, page titles, and rubrics split around shared surahs
const ACCEPTED = new Set([
  "Wird of Imam as-Sakran",
  "Supplication made after a prostration of recital or a prostration of thankfulness",
  "*The audio above is a recitation of the dua by al-Habib Ahmad Mashhur al-Haddad (may Allah be pleased with him).",
  "PRAYERS FOR VICTORY IN MASJID AL-AQSA AND PALESTINE",
  "INVOCATIONS (ADHKĀR) AFTER THE OBLIGATORY ṢALĀH:",
  "Surah al-Dukhan",
  "O Allāh! We are here to answer Your call [labbayk…]:",
  "It will be good if he adds Ayat al-Kursi once, then Surah Alam Nashrah (seven times), then Surah Qadr (seven times), then Surah Quraysh.",
  "he should read Sūrah Quraysh, and say:",
  "Dua After Wudhu",
  "Dua Before Departing for the Mosque",
  "Intention for Learning and Teaching",
  "What to Recite Abundantly During Hardships",
  "The Most Wholesome Drink (Al-Mashrab Al-Ahna)",
  "MAJMA AL-LATAIF AL-ARSHIYYAH",
  "AFDAL AS-SALAWAT",
  "*The lines above in English have been added by the translator and are not part of the original Burdah.",
]);
// page controls and labels from the old site's editor, not content
const UI_TEXT =
  /^(arabic|translation|transliteration|audio|counter|change the (font )?size( of the (arabic|translation|transliteration))?)$/;

const git = (...args: string[]) =>
  execFileSync("git", args, { cwd: ROOT, encoding: "utf8", maxBuffer: 1e8 });
const latin = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9 ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
const ARABIC = /[؀-ۿ]/;
// transliteration is restyled and regenerated, so it is not compared
const TRANSLIT = /[āīūḥṣṭẓḍ‛ʿ]/g;

const strings: string[] = [];
const seen = new Set<object>();
const collect = (o: unknown) => {
  if (typeof o === "string") strings.push(o);
  if (!o || typeof o !== "object" || seen.has(o)) return;
  seen.add(o);
  for (const v of Object.values(o)) collect(v);
};
for (const f of readdirSync(DATA).filter((f) => f.endsWith(".ts")))
  collect((await import(pathToFileURL(resolve(DATA, f)).href)).default);
const ours = ` ${strings.map(latin).join(" | ")} `;

const report: Record<string, string[]> = {};
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
    .map((t) =>
      t
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .trim(),
    )
    .filter(Boolean);
  const missing: string[] = [];
  // translit and translation follow their Arabic, up to two lines per Arabic line in a run
  let arabicRun = 0;
  let sinceArabic = 0;
  for (const s of segments) {
    if (ARABIC.test(s)) {
      arabicRun = sinceArabic === 0 ? arabicRun + 1 : 1;
      sinceArabic = 0;
      continue;
    }
    sinceArabic++;
    if (arabicRun > 0 && sinceArabic <= 2 * arabicRun) continue;
    const text = latin(s);
    const words = text.split(" ");
    if (
      words.length < 3 ||
      UI_TEXT.test(text) ||
      (s.match(TRANSLIT)?.length ?? 0) >= 3
    )
      continue;
    // a solid run from the middle survives later edits to a sentence's ends
    const probe = words.length > 12 ? words.slice(2, 12).join(" ") : text;
    if (!ours.includes(probe) && !ACCEPTED.has(s)) missing.push(s);
  }
  if (missing.length) report[path.replace(/^WebsiteBase\//, "")] = missing;
}

mkdirSync(resolve(ROOT, "scripts/output"), { recursive: true });
writeFileSync(
  resolve(ROOT, "scripts/output/import-missing-english.json"),
  JSON.stringify(report, null, 2),
);
const total = Object.values(report).flat().length;
console.log(
  `Missing English: ${total} segments on ${Object.keys(report).length} pages`,
);
for (const [page, missing] of Object.entries(report)) {
  console.log(`\n${page}`);
  for (const m of missing)
    console.log(`  - ${m.length > 140 ? `${m.slice(0, 140)}…` : m}`);
}
