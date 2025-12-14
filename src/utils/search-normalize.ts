/**
 * Search text normalization utilities.
 * Handles Arabic diacritics (tashkeel) and transliteration special characters.
 */

import {
  hasArabic,
  hasTashkeel,
  normalizeArabic,
  normalizeHamza,
  stripTashkeel,
  stripTatweel,
} from "./arabic-normalize";

// Re-export Arabic normalization functions
export {
  hasArabic,
  hasTashkeel,
  normalizeArabic,
  normalizeHamza,
  stripTashkeel,
  stripTatweel,
};

/**
 * Unicode combining diacritical marks range (U+0300 - U+036F).
 * These are the marks that get separated when using NFD normalization.
 * Includes: accents, macrons, dots above/below, cedillas, etc.
 */
const COMBINING_DIACRITICS_REGEX = /[\u0300-\u036f]/g;

/**
 * Special transliteration characters that don't decompose via NFD.
 * These need explicit mapping (ayn, hamza markers, quote variants).
 */
const SPECIAL_TRANSLIT_CHARS: Record<string, string> = {
  // Ayn and hamza markers (modifier letters, not decomposable)
  ʿ: "'", // U+02BF Modifier Letter Left Half Ring
  ʾ: "'", // U+02BE Modifier Letter Right Half Ring
  // Curly quotes to straight
  "\u2018": "'", // Left single quotation mark
  "\u2019": "'", // Right single quotation mark
};

/**
 * Normalize transliteration text using Unicode NFD decomposition.
 * This decomposes characters like "ṣ" into "s" + combining dot below,
 * then strips all combining marks to get the base letter.
 *
 * @example
 * normalizeTranslit("Ṣād") // "sad"
 * normalizeTranslit("ḥadīda") // "hadida"
 * normalizeTranslit("ʿazīzu") // "'azizu"
 */
export function normalizeTranslit(text: string): string {
  // First handle special characters that don't decompose
  let result = text;
  for (const [char, replacement] of Object.entries(SPECIAL_TRANSLIT_CHARS)) {
    result = result.replaceAll(char, replacement);
  }

  // NFD normalize to decompose diacritics, then strip combining marks
  return result
    .normalize("NFD")
    .replace(COMBINING_DIACRITICS_REGEX, "")
    .toLowerCase();
}

/**
 * Check if text contains transliteration diacritics.
 * Uses NFD normalization to detect any combining marks.
 */
export function hasTranslitDiacritics(text: string): boolean {
  const normalized = text.normalize("NFD");
  return (
    COMBINING_DIACRITICS_REGEX.test(normalized) ||
    Object.keys(SPECIAL_TRANSLIT_CHARS).some((char) => text.includes(char))
  );
}

/**
 * Normalize text for search based on its content type.
 * Applies Arabic normalization for Arabic text, transliteration normalization otherwise.
 *
 * @example
 * normalizeForSearch("بِسْمِ اللَّهِ") // "بسم الله" (Arabic normalized)
 * normalizeForSearch("Ṣalātu") // "salatu" (transliteration normalized)
 */
export function normalizeForSearch(text: string): string {
  if (hasArabic(text)) {
    return normalizeArabic(text);
  }
  return normalizeTranslit(text);
}
