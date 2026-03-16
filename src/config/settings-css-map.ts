/**
 * Shared settings → CSS custom property mapping.
 *
 * Used in two places:
 * 1. BaseLayout.astro inline script — injected via define:vars at build time,
 *    applied before first paint to prevent FOUCE.
 * 2. settings-context.ts — used at runtime when the user changes settings.
 *
 * The map is intentionally JSON-serializable (string descriptors instead of functions)
 * so Astro's define:vars can serialize it into the inline script.
 */

import type { SettingsModel } from "@/utils/storage";

/** Maps SettingsModel value types to their CSS transform descriptor */
type TransformFor<T> = T extends number
  ? "rem"
  : T extends boolean
    ? "display"
    : never;

interface SettingsCSSEntry<K extends keyof SettingsModel> {
  cssVar: string;
  transform: TransformFor<SettingsModel[K]>;
}

/**
 * Single source of truth for settings → CSS custom property mapping.
 * JSON-serializable (no functions) so it can be injected into inline scripts via define:vars.
 *
 * Type safety: TransformFor<T> ensures number fields use "rem" and boolean fields use "display".
 * Completeness: mapped type ensures every SettingsModel key has an entry (compile error if missing).
 */
export const SETTINGS_CSS_MAP: {
  [K in keyof SettingsModel]: SettingsCSSEntry<K>;
} = {
  arabicFontSize: { cssVar: "--arabic-font-size", transform: "rem" },
  translationFontSize: {
    cssVar: "--translation-font-size",
    transform: "rem",
  },
  transliterationFontSize: {
    cssVar: "--transliteration-font-size",
    transform: "rem",
  },
  showArabic: { cssVar: "--show-arabic", transform: "display" },
  showTranslation: { cssVar: "--show-translation", transform: "display" },
  showTransliteration: {
    cssVar: "--show-transliteration",
    transform: "display",
  },
};
