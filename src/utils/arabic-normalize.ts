/**
 * Arabic text normalization utilities for search functionality.
 * Handles diacritics (tashkeel) stripping and character normalization.
 */

/**
 * Arabic diacritical marks (tashkeel) Unicode ranges:
 *
 * Standard tashkeel (U+064B-U+065F):
 * - U+064B: Fathatan (ً)
 * - U+064C: Dammatan (ٌ)
 * - U+064D: Kasratan (ٍ)
 * - U+064E: Fatha (َ)
 * - U+064F: Damma (ُ)
 * - U+0650: Kasra (ِ)
 * - U+0651: Shadda (ّ)
 * - U+0652: Sukun (ْ)
 * - U+0653: Maddah (ٓ)
 * - U+0654: Hamza Above (ٔ)
 * - U+0655: Hamza Below (ٕ)
 * - U+0656-U+065F: Additional marks
 *
 * Other marks:
 * - U+0670: Superscript Alef (ٰ)
 *
 * Quranic annotation marks (U+06D6-U+06ED):
 * - U+06D6-U+06DC: Small high marks (صلى, قلى, etc.)
 * - U+06DD: End of Ayah (۝)
 * - U+06DE: Start of Rub El Hizb (۞)
 * - U+06DF-U+06E4: Various small marks
 * - U+06E5-U+06E6: Small waw/yeh
 * - U+06E7-U+06E8: More small marks
 * - U+06EA-U+06ED: Additional marks
 *
 * Extended Arabic marks (U+08D3-U+08E1):
 * - Additional diacritics used in some Quran editions
 */
const TASHKEEL_REGEX = /[\u064B-\u065F\u0670\u06D6-\u06ED\u08D3-\u08E1]/g;

/**
 * Tatweel (kashida) - the Arabic text elongation character
 */
const TATWEEL_REGEX = /\u0640/g;

/**
 * Hamza variant mappings to base alef
 */
const HAMZA_NORMALIZATIONS: Record<string, string> = {
  أ: "ا", // Alef with Hamza Above
  إ: "ا", // Alef with Hamza Below
  آ: "ا", // Alef with Madda Above
  ٱ: "ا", // Alef Wasla
  ؤ: "و", // Waw with Hamza Above
  ئ: "ي", // Yeh with Hamza Above
  ى: "ي", // Alef Maksura to Yeh
  ة: "ه", // Teh Marbuta to Heh
};

/**
 * Strip Arabic diacritical marks (tashkeel) from text.
 * This preserves the base characters while removing vowel marks.
 *
 * @example
 * stripTashkeel("بِسْمِ اللَّهِ") // "بسم الله"
 */
export function stripTashkeel(text: string): string {
  return text.replace(TASHKEEL_REGEX, "");
}

/**
 * Remove tatweel (kashida) elongation characters from text.
 *
 * @example
 * stripTatweel("الـلـه") // "الله"
 */
export function stripTatweel(text: string): string {
  return text.replace(TATWEEL_REGEX, "");
}

/**
 * Normalize hamza variants and similar characters to their base forms.
 * This helps match text regardless of hamza placement.
 *
 * @example
 * normalizeHamza("أحمد إبراهيم") // "احمد ابراهيم"
 */
export function normalizeHamza(text: string): string {
  let result = text;
  for (const [variant, base] of Object.entries(HAMZA_NORMALIZATIONS)) {
    result = result.replaceAll(variant, base);
  }
  return result;
}

/**
 * Fully normalize Arabic text for search indexing.
 * Applies all normalizations: strips tashkeel, tatweel, and normalizes hamza variants.
 *
 * @example
 * normalizeArabic("بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ") // "بسم الله الرحمن الرحيم"
 */
export function normalizeArabic(text: string): string {
  return normalizeHamza(stripTatweel(stripTashkeel(text)));
}

/**
 * Check if a string contains Arabic diacritical marks (tashkeel).
 *
 * @example
 * hasTashkeel("بِسْمِ") // true
 * hasTashkeel("بسم") // false
 */
export function hasTashkeel(text: string): boolean {
  return TASHKEEL_REGEX.test(text);
}

/**
 * Check if a string contains Arabic characters.
 */
export function hasArabic(text: string): boolean {
  return /[\u0600-\u06FF]/.test(text);
}
