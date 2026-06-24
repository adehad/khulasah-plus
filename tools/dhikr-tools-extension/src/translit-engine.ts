import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

export interface TranslitOptions {
  romanizeTanwin: boolean;
  assimilateSunLetters: boolean;
}

export type Transliterator = (text: string, opts: TranslitOptions) => string;

/** Prefer a local junction override if present, else the committed vendor copy. */
export function resolvePkgDir(
  extensionPath: string,
  exists: (p: string) => boolean = existsSync,
): string {
  const local = join(extensionPath, "vendor", "ar-transliteration.local");
  if (exists(local)) return local;
  return join(extensionPath, "vendor", "ar-transliteration");
}

/**
 * Load the WASM package from `pkgDir` and return a synchronous transliterate
 * function. The glue is ESM and this extension emits CommonJS, so it is loaded
 * via a runtime dynamic import; the wasm is instantiated synchronously from raw
 * bytes (no fetch / no import.meta.url path).
 */
export async function createTransliterator(pkgDir: string): Promise<Transliterator> {
  const jsPath = join(pkgDir, "ar_transliteration.js");
  const wasmPath = join(pkgDir, "ar_transliteration_bg.wasm");
  if (!existsSync(jsPath) || !existsSync(wasmPath)) {
    throw new Error(
      `ar-transliteration not found in ${pkgDir}. Run "bun run update-vendor" or "bun run link-local".`,
    );
  }
  const mod = await import(pathToFileURL(jsPath).href);
  mod.initSync({ module: readFileSync(wasmPath) });
  return (text, opts) =>
    mod.arabic_to_latin(text, opts.romanizeTanwin, opts.assimilateSunLetters);
}
