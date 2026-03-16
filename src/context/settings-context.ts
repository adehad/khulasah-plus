/**
 * Settings CSS Variable Mapping
 *
 * Type-safe CSS variable transforms for user settings.
 * Tightly coupled to SettingsModel — changing a setting requires updating both.
 *
 * NOTE: The inline <script> in BaseLayout.astro duplicates this mapping
 * (must run before first paint, so it can't import this module).
 * Keep both in sync when adding or changing settings.
 */

import type { SettingsModel } from "@/utils/storage";

/**
 * Defines how a setting value transforms into a CSS custom property.
 * Each mapping specifies the CSS variable name and a transform function.
 */
type CSSVariableMapping<T> = {
  /** The CSS custom property name (e.g., '--arabic-font-size') */
  cssVar: string;
  /** Transform the TypeScript value into a CSS value string */
  toCSSValue: (value: T) => string;
};

/**
 * Explicit mapping eliminates the brittle string manipulation in the old updateStyles().
 * TypeScript's mapped type ensures every SettingsModel key has a corresponding CSS mapping -
 * adding a new setting without its CSS mapping is a compile-time error.
 *
 * The transform functions handle the semantic translation: TypeScript booleans become
 * CSS display values, numbers become rem units. This indirection allows components
 * to use CSS variables for reactive styling without JavaScript property binding.
 */
export const SETTINGS_CSS_MAP: {
  [K in keyof SettingsModel]: CSSVariableMapping<SettingsModel[K]>;
} = {
  arabicFontSize: {
    cssVar: "--arabic-font-size",
    toCSSValue: (v) => `${v}rem`,
  },
  translationFontSize: {
    cssVar: "--translation-font-size",
    toCSSValue: (v) => `${v}rem`,
  },
  transliterationFontSize: {
    cssVar: "--transliteration-font-size",
    toCSSValue: (v) => `${v}rem`,
  },
  showArabic: {
    cssVar: "--show-arabic",
    toCSSValue: (v) => (v ? "block" : "none"),
  },
  showTranslation: {
    cssVar: "--show-translation",
    toCSSValue: (v) => (v ? "block" : "none"),
  },
  showTransliteration: {
    cssVar: "--show-transliteration",
    toCSSValue: (v) => (v ? "block" : "none"),
  },
};

/**
 * Apply all settings to :root on initial page load.
 */
export function applySettingsToCSS(settings: SettingsModel): void {
  const root = document.documentElement;
  for (const key of Object.keys(settings) as (keyof SettingsModel)[]) {
    const mapping = SETTINGS_CSS_MAP[key];
    root.style.setProperty(
      mapping.cssVar,
      mapping.toCSSValue(settings[key] as never),
    );
  }
}

/**
 * Apply a single setting change to CSS.
 * Called on each user interaction to provide immediate visual feedback
 * without re-applying all settings.
 */
export function applySingleSettingToCSS<K extends keyof SettingsModel>(
  key: K,
  value: SettingsModel[K],
): void {
  const mapping = SETTINGS_CSS_MAP[key];
  document.documentElement.style.setProperty(
    mapping.cssVar,
    mapping.toCSSValue(value as never),
  );
}
