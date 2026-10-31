import { copyFile, mkdir, readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { AstroIntegration } from "astro";
import { SHOELACE_BASE_PATH, SHOELACE_ICONS } from "../config/shoelace-icons";

// Shoelace's exports do not include package.json, so its icons are located from a file it does export.
const SOURCE_DIR = join(
  dirname(
    createRequire(import.meta.url).resolve(
      "@shoelace-style/shoelace/dist/shoelace.js",
    ),
  ),
  "assets",
  "icons",
);
const ICONS_PATH = `${SHOELACE_BASE_PATH}assets/icons/`;
const ICON_URL = new RegExp(`/${ICONS_PATH}([a-z0-9-]+).svg$`);

// Serves the used icons from the site itself rather than Shoelace's CDN, so the service worker
// can precache them. Runs before the PWA integration, whose build step precaches what is in dist.
export function shoelaceIcons(): AstroIntegration {
  return {
    name: "shoelace-icons",
    hooks: {
      "astro:server:setup": ({ server }) => {
        server.middlewares.use(async (req, res, next) => {
          const name = new URL(req.url ?? "/", "http://x").pathname.match(
            ICON_URL,
          )?.[1];
          if (!name || !SHOELACE_ICONS.includes(name)) return next();
          res.setHeader("Content-Type", "image/svg+xml");
          res.end(await readFile(join(SOURCE_DIR, `${name}.svg`)));
        });
      },
      "astro:build:done": async ({ dir }) => {
        const outDir = join(fileURLToPath(dir), ICONS_PATH);
        await mkdir(outDir, { recursive: true });
        await Promise.all(
          SHOELACE_ICONS.map((name) =>
            copyFile(
              join(SOURCE_DIR, `${name}.svg`),
              join(outDir, `${name}.svg`),
            ),
          ),
        );
      },
    },
  };
}
