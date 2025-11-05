import { readFileSync, writeFileSync } from "node:fs";

/**
 * @module vite-local-dev
 * @description Prepares a development-specific service worker.
 *
 * The Problem:
 * When running the Vite dev server, the `define` config from `vite.config.ts`
 * is not applied to the service worker file. This means that placeholders
 * like `${__WORKBOX_VERSION__}` are not replaced, causing the service worker
 * to fail during initialization.
 *
 * The Solution:
 * This script manually creates a development-specific version of the service
 * worker. It reads the source service worker, replaces the necessary
 * placeholders with their actual values, and saves the result to a new file
 * (`public/sw.dev.js`). This new file is used by `vite-plugin-pwa` only
 * during development and should be added to `.gitignore`.
 *
 * @param workboxVersion The version of 'workbox-build' to inject.
 */
export const prepareDevServiceWorker = (workboxVersion: string) => {
  const swTemplate = readFileSync("public/sw.js", "utf-8");
  const swDevContent = swTemplate.replace(
    // biome-ignore lint/suspicious/noTemplateCurlyInString: Find & replace of this line
    "${__WORKBOX_VERSION__}",
    workboxVersion,
  );
  writeFileSync("public/sw.dev.js", swDevContent);
  console.log("Generated public/sw.dev.js for development.");
};
