/**
 * There are certain characters that the 'Uthmanic Hafs' font doesn't render properly
 * This may manifest itself in the Quranic entries and then that would imply the
 * entries need to be copied from the source document again.
 */
import { promises as fs } from "fs";

// Map of characters/sequences to be replaced.
// Keys are what to find, values are what to replace with.
// Using unicode escape sequences for clarity and to avoid editor/encoding issues.
const transformationMap: Record<string, string> = {
  // Replace Tatweel (ـ) with nothin.
  "\u0640": "", // 'ـ'->''
};

async function normalizeFile(filePath: string) {
  try {
    const originalContent = await fs.readFile(filePath, "utf-8");
    let newContent = originalContent;

    for (const [find, replace] of Object.entries(transformationMap)) {
      newContent = newContent.replaceAll(find, replace);
    }

    if (originalContent !== newContent) {
      await fs.writeFile(filePath, newContent, "utf-8");
      console.log(`Normalized: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
    process.exit(1);
  }
}

async function main() {
  const files = process.argv.slice(2);
  if (files.length === 0) {
    console.log("No files to process.");
    return;
  }

  await Promise.all(files.map(normalizeFile));
}

main().catch((error) => {
  console.error("An unexpected error occurred:", error);
  process.exit(1);
});
