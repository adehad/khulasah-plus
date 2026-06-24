import { existsSync, rmSync, symlinkSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const target = process.env.AR_TRANSLITERATION_PKG ?? "C:/dev/ar-transliteration/pkg";
const link = join(here, "..", "vendor", "ar-transliteration.local");

if (!existsSync(target)) {
  console.error(`Target pkg not found: ${target}. Set AR_TRANSLITERATION_PKG.`);
  process.exit(1);
}
if (existsSync(link)) rmSync(link, { recursive: true, force: true });
symlinkSync(target, link, "junction");
console.log(`Linked ${link} -> ${target}`);
