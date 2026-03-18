/**
 * Convert a string to a URL-safe slug.
 * Replaces non-alphanumeric characters with hyphens and removes leading/trailing hyphens.
 *
 * @example "The TAHAJJUD PRAYER" → "the-tahajjud-prayer"
 * @example "Hizb al-Bahr" → "hizb-al-bahr"
 * @example "/khulasah/after-fajr" → "khulasah-after-fajr"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
