import { existsSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const link = join(here, "..", "vendor", "ar-transliteration.local");
if (existsSync(link)) {
  rmSync(link, { recursive: true, force: true });
  console.log(`Removed ${link}`);
} else {
  console.log("No local link to remove.");
}
