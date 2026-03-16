/**
 * Settings CSS helpers — applies settings values to CSS custom properties.
 * The mapping itself lives in src/config/settings-css-map.ts (single source of truth).
 */

import { SETTINGS_CSS_MAP } from "@/config/settings-css-map";
import type { SettingsModel } from "@/utils/storage";

export { SETTINGS_CSS_MAP };

function resolveCSSValue<K extends keyof SettingsModel>(
  key: K,
  value: SettingsModel[K],
): string {
  const { transform } = SETTINGS_CSS_MAP[key];
  if (transform === "rem") return `${value}rem`;
  return value ? "block" : "none";
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
  document.documentElement.style.setProperty(
    SETTINGS_CSS_MAP[key].cssVar,
    resolveCSSValue(key, value),
  );
}
