/**
 * Build-time script to generate a search index from all content files.
 * Run with: bun scripts/build-search-index.ts
 */

import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

// Polyfill browser globals for Node.js environment (required by router)
if (typeof globalThis.window === "undefined") {
  globalThis.document = {
    title: "",
    // @ts-ignore
    startViewTransition: (cb: () => void) => cb(),
  };
  globalThis.window = {
    // @ts-ignore
    location: { href: "http://localhost" },
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true,
    // @ts-ignore
    history: { pushState: () => {}, replaceState: () => {} },
    document: globalThis.document,
  };
}

// Import model types
import type {
  BaseRecitationModel,
  DhikrEntryModel,
  DhikrModel,
  QasidaChapterModel,
  QasidaEntryModel,
  QasidaModel,
  QasidaVerseModel,
  QuranEntryModel,
  QuranModel,
  RecitationEntry,
  WirdModel,
} from "../src/models/recitation.ts";
// Import page configurations
import { pageConfigs } from "../src/pages/page-config.ts";

// Import normalization utilities
import { normalizeArabic } from "../src/utils/arabic-normalize.ts";
import { normalizeTranslit } from "../src/utils/search-normalize.ts";

/**
 * Search document structure for the index
 */
interface SearchDocument {
  id: string; // page path (used as unique identifier)
  title: string; // page title
  arabic: string; // concatenated Arabic text (normalized)
  arabicOriginal: string; // original Arabic text with tashkeel
  translit: string; // concatenated transliteration (normalized)
  translitOriginal: string; // original transliteration with diacritics
  translation: string; // concatenated translation
  contentType: string; // type identifier for the content
}

/**
 * Extract text content from RecitationEntry objects
 */
function extractEntryText(entry: RecitationEntry): {
  arabic: string;
  translit: string;
  translation: string;
} {
  return {
    arabic: entry.arabic || "",
    translit: entry.translit || "",
    translation: entry.translation || "",
  };
}

/**
 * Extract text from DhikrEntryModel array
 */
function extractDhikrEntries(entries: DhikrEntryModel[]): {
  arabic: string[];
  translit: string[];
  translation: string[];
} {
  const arabic: string[] = [];
  const translit: string[] = [];
  const translation: string[] = [];

  for (const entry of entries) {
    const text = extractEntryText(entry);
    if (text.arabic) arabic.push(text.arabic);
    if (text.translit) translit.push(text.translit);
    if (text.translation) translation.push(text.translation);
  }

  return { arabic, translit, translation };
}

/**
 * Extract text from QuranEntryModel array
 */
function extractQuranEntries(entries: QuranEntryModel[]): {
  arabic: string[];
  translit: string[];
  translation: string[];
} {
  const arabic: string[] = [];
  const translit: string[] = [];
  const translation: string[] = [];

  for (const entry of entries) {
    const text = extractEntryText(entry);
    if (text.arabic) arabic.push(text.arabic);
    if (text.translit) translit.push(text.translit);
    if (text.translation) translation.push(text.translation);
  }

  return { arabic, translit, translation };
}

/**
 * Extract text from QasidaEntryModel array
 */
function extractQasidaEntries(entries: QasidaEntryModel[]): {
  arabic: string[];
  translit: string[];
  translation: string[];
} {
  const arabic: string[] = [];
  const translit: string[] = [];
  const translation: string[] = [];

  for (const entry of entries) {
    const text = extractEntryText(entry);
    if (text.arabic) arabic.push(text.arabic);
    if (text.translit) translit.push(text.translit);
    if (text.translation) translation.push(text.translation);
  }

  return { arabic, translit, translation };
}

/**
 * Extract text from QasidaVerseModel or QasidaChapterModel recursively
 */
function extractQasidaContent(
  items: (QasidaVerseModel | QasidaChapterModel)[],
): {
  arabic: string[];
  translit: string[];
  translation: string[];
} {
  const arabic: string[] = [];
  const translit: string[] = [];
  const translation: string[] = [];

  for (const item of items) {
    if ("entries" in item && Array.isArray(item.entries)) {
      // Check if it's a QasidaVerseModel (has QasidaEntryModel entries)
      if (
        item.entries.length > 0 &&
        "arabic" in item.entries[0] &&
        typeof item.entries[0].arabic === "string"
      ) {
        // QasidaVerseModel with QasidaEntryModel entries
        const extracted = extractQasidaEntries(
          item.entries as QasidaEntryModel[],
        );
        arabic.push(...extracted.arabic);
        translit.push(...extracted.translit);
        translation.push(...extracted.translation);
      } else {
        // QasidaChapterModel with nested content
        const extracted = extractQasidaContent(
          item.entries as (QasidaVerseModel | QasidaChapterModel)[],
        );
        arabic.push(...extracted.arabic);
        translit.push(...extracted.translit);
        translation.push(...extracted.translation);
      }
    }
  }

  return { arabic, translit, translation };
}

/**
 * Determine the type of a model based on its properties
 */
function getModelType(
  model: BaseRecitationModel,
): "dhikr" | "quran" | "qasida" | "wird" | "unknown" {
  if ("surah" in model) return "quran";
  if ("entries" in model) {
    const entries = (model as DhikrModel | WirdModel | QasidaModel).entries;
    if (Array.isArray(entries) && entries.length > 0) {
      const firstEntry = entries[0];
      if ("verse" in firstEntry) return "quran";
      if ("chorus" in firstEntry || "number" in firstEntry) return "qasida";
      if ("surah" in firstEntry) return "wird";
      if ("repeat" in firstEntry) return "dhikr";
    }
  }
  return "unknown";
}

/**
 * Extract all text from a content model
 */
function extractContentText(content: BaseRecitationModel[]): {
  arabic: string[];
  translit: string[];
  translation: string[];
  contentType: string;
} {
  const arabic: string[] = [];
  const translit: string[] = [];
  const translation: string[] = [];
  const types = new Set<string>();

  for (const item of content) {
    const modelType = getModelType(item);
    types.add(modelType);

    // Add title if present
    if (item.title) {
      translation.push(item.title);
    }

    // Add instruction if present
    if (item.instruction) {
      translation.push(item.instruction);
    }

    // Handle different model types
    if ("entries" in item) {
      const entries = (
        item as DhikrModel | QuranModel | WirdModel | QasidaModel
      ).entries;

      if (Array.isArray(entries)) {
        // Check if entries are DhikrEntryModel or QuranEntryModel (have arabic property directly)
        if (
          entries.length > 0 &&
          "arabic" in entries[0] &&
          typeof entries[0].arabic === "string"
        ) {
          if ("verse" in entries[0]) {
            // QuranEntryModel
            const extracted = extractQuranEntries(entries as QuranEntryModel[]);
            arabic.push(...extracted.arabic);
            translit.push(...extracted.translit);
            translation.push(...extracted.translation);
          } else {
            // DhikrEntryModel
            const extracted = extractDhikrEntries(entries as DhikrEntryModel[]);
            arabic.push(...extracted.arabic);
            translit.push(...extracted.translit);
            translation.push(...extracted.translation);
          }
        } else if (
          entries.length > 0 &&
          ("entries" in entries[0] || "chorus" in entries[0])
        ) {
          // QasidaVerseModel or QasidaChapterModel
          const extracted = extractQasidaContent(
            entries as (QasidaVerseModel | QasidaChapterModel)[],
          );
          arabic.push(...extracted.arabic);
          translit.push(...extracted.translit);
          translation.push(...extracted.translation);
        } else if (entries.length > 0 && "surah" in entries[0]) {
          // WirdModel with QuranModel entries
          for (const wirdEntry of entries as (DhikrModel | QuranModel)[]) {
            const nestedResult = extractContentText([wirdEntry]);
            arabic.push(...nestedResult.arabic);
            translit.push(...nestedResult.translit);
            translation.push(...nestedResult.translation);
          }
        }
      }
    }
  }

  return {
    arabic,
    translit,
    translation,
    contentType: Array.from(types).join(",") || "unknown",
  };
}

/**
 * Main function to build the search index
 */
async function buildSearchIndex() {
  console.log("Building search index...");
  console.log(`Processing ${pageConfigs.length} pages...`);

  const documents: SearchDocument[] = [];
  let successCount = 0;
  let errorCount = 0;

  for (const config of pageConfigs) {
    try {
      // Skip index pages that just have navigation
      if (config.contentImportPath.endsWith("-index")) {
        console.log(`  Skipping index page: ${config.path}`);
        continue;
      }

      // Dynamically import the content module
      const contentPath = `../src/content/${config.contentImportPath}.ts`;
      const contentModule = await import(contentPath);
      const content = contentModule.default || contentModule.wird || [];

      if (!Array.isArray(content) || content.length === 0) {
        console.log(`  No content found for: ${config.path}`);
        continue;
      }

      // Extract text from content
      const extracted = extractContentText(content);

      // Create search document
      const translitText = extracted.translit.join(" ");
      const doc: SearchDocument = {
        id: config.path || "/",
        title: config.title,
        arabicOriginal: extracted.arabic.join(" "),
        arabic: normalizeArabic(extracted.arabic.join(" ")),
        translitOriginal: translitText,
        translit: normalizeTranslit(translitText),
        translation: extracted.translation.join(" "),
        contentType: extracted.contentType,
      };

      // Only add if there's actual searchable content
      if (doc.arabic || doc.translit || doc.translation) {
        documents.push(doc);
        successCount++;
        console.log(`  Indexed: ${config.path} (${extracted.contentType})`);
      }
    } catch (error) {
      errorCount++;
      console.error(`  Error processing ${config.path}:`, error);
    }
  }

  // Ensure public directory exists
  const outputDir = resolve(import.meta.dir, "../public");
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  // Write the index to a JSON file
  const outputPath = resolve(outputDir, "search-index.json");
  writeFileSync(outputPath, JSON.stringify(documents, null, 2));

  console.log("\nSearch index build complete!");
  console.log(`  Total pages processed: ${pageConfigs.length}`);
  console.log(`  Successfully indexed: ${successCount}`);
  console.log(`  Errors: ${errorCount}`);
  console.log(`  Output: ${outputPath}`);
  console.log(
    `  Index size: ${(JSON.stringify(documents).length / 1024).toFixed(2)} KB`,
  );
}

// Run the build
buildSearchIndex().catch(console.error);
