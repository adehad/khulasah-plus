import { test, expect } from "bun:test";
import { join } from "node:path";
import { createTransliterator, resolvePkgDir } from "./translit-engine";

const VENDOR = join(import.meta.dir, "..", "vendor", "ar-transliteration");

test("resolvePkgDir prefers .local when it exists", () => {
  const fakeExists = (p: string) => p.endsWith(".local");
  const dir = resolvePkgDir("/ext", fakeExists);
  expect(dir.endsWith("ar-transliteration.local")).toBe(true);
});

test("resolvePkgDir falls back to committed vendor", () => {
  const dir = resolvePkgDir("/ext", () => false);
  expect(dir.endsWith("ar-transliteration")).toBe(true);
  expect(dir.includes(".local")).toBe(false);
});

test("createTransliterator transliterates known ALA-LC vectors", async () => {
  const t = await createTransliterator(VENDOR);
  const opts = { romanizeTanwin: false, assimilateSunLetters: false };
  expect(t("كَتَبَ", opts)).toBe("kataba");
  expect(t("كَاتِب", opts)).toBe("kātib");
  expect(t("نُور", opts)).toBe("nūr");
  expect(t("", opts)).toBe("");
});
