import { cpSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = process.env.AR_TRANSLITERATION_PKG ?? "C:/dev/ar-transliteration/pkg";
const dest = join(here, "..", "vendor", "ar-transliteration");
const files = ["ar_transliteration.js", "ar_transliteration_bg.wasm", "ar_transliteration.d.ts"];

if (!existsSync(src)) {
  console.error(`Source pkg not found: ${src}. Set AR_TRANSLITERATION_PKG.`);
  process.exit(1);
}
for (const f of files) cpSync(join(src, f), join(dest, f));
console.log(`Vendored ${files.length} files from ${src}`);
