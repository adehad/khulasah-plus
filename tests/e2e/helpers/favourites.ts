import type { Page } from "@playwright/test";
import type { FavouritesData } from "../../../src/services/favourites-store";

/**
 * Mirrors FAVOURITES_KEY: importing the store at runtime would load src/utils/paths.ts, whose import.meta.env
 * Playwright's CommonJS transform cannot run (on any Node version).
 */
const FAVOURITES_KEY = "kp-favourites";

/**
 * Seeds favourites before any page script runs. The init script re-runs on every navigation, so it only writes
 * when nothing is stored yet: a reload inside a test then keeps whatever the test changed since seeding.
 */
export async function seedFavourites(
  page: Page,
  data: FavouritesData,
): Promise<void> {
  await page.addInitScript(
    ({ key, json }) => {
      if (localStorage.getItem(key) === null) localStorage.setItem(key, json);
    },
    { key: FAVOURITES_KEY, json: JSON.stringify(data) },
  );
}

/** Reads what the app persisted, so tests assert on stored data rather than on rendering. */
export async function readFavourites(page: Page): Promise<FavouritesData> {
  const raw = await page.evaluate(
    (key) => localStorage.getItem(key),
    FAVOURITES_KEY,
  );
  return raw ? (JSON.parse(raw) as FavouritesData) : { version: 1, items: [] };
}
