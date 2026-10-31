#!/usr/bin/env bun
/**
 * Extracts the King Fahd Qur'an Complex (KFQC) Uthmanic Hafs text from quran.docx
 * into a "surah:verse" → text map, so shared Qur'an content can be checked against
 * (or refreshed from) the same text the site's Qur'an font is built for.
 *
 * Usage: bun scripts/parse-quran-docx.ts [quran.docx] [scripts/data/quran-kfqc.json]
 */
import { readFileSync, writeFileSync } from "node:fs";
import { inflateRawSync } from "node:zlib";

const [input = "quran.docx", output = "scripts/data/quran-kfqc.json"] =
  process.argv.slice(2);

/** reads one member of a zip (a .docx is a zip) via the central directory */
function readZipEntry(zip: Buffer, name: string): string {
  const eocd = zip.lastIndexOf(Buffer.from([0x50, 0x4b, 0x05, 0x06]));
  const count = zip.readUInt16LE(eocd + 10);
  let p = zip.readUInt32LE(eocd + 16);
  for (let i = 0; i < count; i++) {
    const method = zip.readUInt16LE(p + 10);
    const size = zip.readUInt32LE(p + 20);
    const nameLen = zip.readUInt16LE(p + 28);
    const extraLen = zip.readUInt16LE(p + 30);
    const commentLen = zip.readUInt16LE(p + 32);
    const local = zip.readUInt32LE(p + 42);
    if (zip.toString("utf8", p + 46, p + 46 + nameLen) === name) {
      const start =
        local +
        30 +
        zip.readUInt16LE(local + 26) +
        zip.readUInt16LE(local + 28);
      const data = zip.subarray(start, start + size);
      return (method === 8 ? inflateRawSync(data) : data).toString("utf8");
    }
    p += 46 + nameLen + extraLen + commentLen;
  }
  throw new Error(`${name} not found in ${input}`);
}

const xml = readZipEntry(readFileSync(input), "word/document.xml");
const paragraphs = [...xml.matchAll(/<w:p[ >][\s\S]*?<\/w:p>/g)]
  .map((m) =>
    [...m[0].matchAll(/<w:t[^>]*>([^<]*)<\/w:t>/g)].map((t) => t[1]).join(""),
  )
  .filter((t) => t.trim());

// letters only, without alifs: the KFQC basmala writes ٱلرَّحۡمَٰن with a dagger alif
const skeleton = (t: string) =>
  t
    .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED\u0640]/g, "")
    .replace(/[^\u0621-\u064A\u0671]/g, "")
    .replace(/[\u0627\u0671]/g, "");
const BASMALA = skeleton("بسم الله الرحمن الرحيم");
const ARABIC_DIGITS = "٠١٢٣٤٥٦٧٨٩";

const surahs: string[] = [];
let atHeading = false;
for (const t of paragraphs) {
  if (t.startsWith("سُورَةُ")) {
    surahs.push("");
    atHeading = true;
    continue;
  }
  // the unnumbered basmala under each heading is not verse text (al-Fatihah's is numbered as 1:1)
  const headingBasmala =
    atHeading && skeleton(t) === BASMALA && !/[٠-٩]/.test(t);
  atHeading = false;
  if (!headingBasmala) surahs[surahs.length - 1] += ` ${t}`;
}

const verses: Record<string, string> = {};
surahs.forEach((text, i) => {
  // each verse ends with a no-break space and its number in Arabic-Indic digits
  const parts = text.split(/\u00A0([٠-٩]+)/);
  for (let j = 0; j + 1 < parts.length; j += 2) {
    const n = Number(
      [...parts[j + 1]].map((d) => ARABIC_DIGITS.indexOf(d)).join(""),
    );
    verses[`${i + 1}:${n}`] = parts[j].trim();
  }
});

const total = Object.keys(verses).length;
if (surahs.length !== 114 || total !== 6236)
  throw new Error(
    `expected 114 surahs / 6236 verses, got ${surahs.length} / ${total}`,
  );
writeFileSync(output, `${JSON.stringify(verses, null, 0)}\n`);
console.log(`wrote ${total} verses to ${output}`);
