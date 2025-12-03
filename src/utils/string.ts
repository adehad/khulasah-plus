/**
 * Convert a string to a URL-safe slug.
 * Replaces non-alphanumeric characters with hyphens and removes trailing hyphens.
 *
 * @example "The TAHAJJUD PRAYER" → "the-tahajjud-prayer"
 * @example "Hizb al-Bahr" → "hizb-al-bahr"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(-|-)+$/, "");
}
