import { readFileSync } from "node:fs";
import { basename, extname, resolve } from "node:path";
import type { ManifestTransform } from "workbox-build";
import type { PageConfig } from "./src/pages/page-config";

/**
 * @module dynamic-import-vite-config
 * @description This module provides a Vite PWA manifest transform to solve an issue
 * with dynamically loaded pages and service worker caching.
 *
 * The Problem:
 * The application uses a dynamic routing system where page content is loaded
 * based on a `contentImportPath` defined in `page-config.ts`. This means that
 * the routes themselves (e.g., `/khulasah`) do not directly map to a single,
 * static file that Workbox (the library used by VitePWA) can hash for revisioning.
 * As a result, when the content of a page changes (e.g., `khulasah-index.ts` is updated),
 * the service worker doesn't detect a change because the revision hash for the route remains null.
 * This prevents the cache from being updated, and users will not see the new content
 * until they clear their cache or a full service worker update is triggered.
 *
 * The Solution:
 * This manifest transform links the dynamically generated page routes to their
 * corresponding content files. It does this by:
 * 1.  Enabling the Vite build manifest (`manifest: true` in `vite.config.ts`), which
 *     creates a `manifest.json` file mapping source files to their hashed output files.
 * 2.  During the PWA build process, this transform reads the `page-config.ts` and the
 *     `dist/manifest.json`.
 * 3.  For each page configuration, it finds the corresponding content module in the
 *     Vite manifest and extracts its unique hash from the output filename.
 * 4.  It then injects a new entry into the service worker's precache manifest for each page.
 *     This entry uses the page's path as the `url` and the content module's hash as the `revision`.
 *
 * This ensures that any change to a content module will result in a new revision hash
 * for the corresponding page route, prompting the service worker to update the cache
 * and ensuring users always have the latest content.
 */

export const createPageRevisionTransform = (
  pageConfigs: PageConfig[],
): ManifestTransform => {
  return async (entries) => {
    const manifest = JSON.parse(
      readFileSync(resolve(process.cwd(), "dist/vite-manifest.json"), "utf-8"),
    );

    const revisionMap = new Map<string, string>();
    // biome-ignore lint/suspicious/noExplicitAny: Any JSON.
    for (const manifestEntry of Object.values(manifest) as any[]) {
      // Process the main file (usually JS)
      if (manifestEntry.file) {
        const revision = basename(
          manifestEntry.file,
          extname(manifestEntry.file),
        )
          .split("-")
          .pop();
        if (revision) {
          revisionMap.set(manifestEntry.file, revision);
        }
      }
      // Process associated CSS files
      if (manifestEntry.css && Array.isArray(manifestEntry.css)) {
        for (const cssFile of manifestEntry.css) {
          const revision = basename(cssFile, extname(cssFile)).split("-").pop();
          if (revision) {
            revisionMap.set(cssFile, revision);
          }
        }
      }
    }

    const updatedEntries = entries.map((entry) => {
      if (entry.revision === null) {
        const rev = revisionMap.get(entry.url);
        if (rev != null) {
          return { ...entry, revision: rev };
        }
      }
      return entry;
    });

    const pageEntries = pageConfigs.map((config) => {
      const contentSrcPath = `src/content/${config.contentImportPath}.ts`;
      const manifestEntry = manifest[contentSrcPath];

      if (!manifestEntry) {
        return null; // Warning is already handled in the next step
      }

      const revision = revisionMap.get(manifestEntry.file);
      if (!revision) {
        console.warn(
          `[page-revision-plugin] Could not find revision for ${manifestEntry.file} in revisionMap`,
        );
        return null;
      }

      return {
        // When running in GitHub pages, all requests get prepended with 'khulasah-plus/'
        // and for some these URLs additionally get a `/` prepended.
        // So here the '.' ensures that the right URL is cached!
        url: config.path === "" ? "." : `/khulasah-plus/${config.path}`,
        revision: revision,
      };
    });

    const validPageEntries = pageEntries.filter(
      (entry): entry is { url: string; revision: string } => entry !== null,
    );

    return { manifest: [...updatedEntries, ...validPageEntries] };
  };
};
