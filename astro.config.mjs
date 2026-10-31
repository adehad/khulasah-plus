import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import sitemap from "@astrojs/sitemap";
import AstroPWA from "@vite-pwa/astro";
import { defineConfig } from "astro/config";
import { shoelaceIcons } from "./src/integrations/shoelace-icons";

const bunLock = readFileSync(resolve(import.meta.dirname, "bun.lock"), "utf-8");

const getVersion = (pkg) => {
  const match = bunLock.match(new RegExp(`"${pkg}@([^"]+)"`));
  const version = match ? match[1].match(/\d+\.\d+\.\d+/)?.[0] : null;
  if (!version) throw new Error(`Version for ${pkg} not found in bun.lock`);
  console.log(`Version string for ${pkg} = '${version}'`);
  return version;
};

const SHOELACE_VERSION = getVersion("@shoelace-style/shoelace");

export default defineConfig({
  site: "https://khulasah-plus.adehad.workers.dev",
  base: process.env.ASTRO_BASE || undefined,
  output: "static",
  integrations: [
    // Gallery route lives in tests/visual/ and is injected only when Playwright asks for it,
    // so normal `bun run build` never emits it.
    ...(process.env.INCLUDE_GALLERY === "1"
      ? [
          {
            name: "inject-gallery",
            hooks: {
              "astro:config:setup": ({ injectRoute }) => {
                injectRoute({
                  pattern: "/component-gallery",
                  entrypoint: "./tests/visual/component-gallery.astro",
                });
              },
            },
          },
        ]
      : []),
    sitemap({
      filter: (page) => !page.includes("/component-gallery"),
    }),
    shoelaceIcons(),
    AstroPWA({
      strategies: "injectManifest",
      // The build bundles the worker's workbox imports into dist/sw.js, so installing it needs no CDN.
      srcDir: "src",
      filename: "sw.ts",
      injectManifest: {
        minify: true,
        globPatterns: ["**/*.{html,js,css,json,png,ico,svg,woff,woff2}"],
        globIgnores: [
          "search-index.json", // Too large for precache — runtime cached via StaleWhileRevalidate in sw.js
          "assets/screenshots/**", // Store listing only; the app never shows them
        ],
      },
      injectRegister: false,
      manifest: false,
      devOptions: {
        enabled: true,
        // Dev serves the worker unbundled, so its workbox imports need a module worker.
        type: "module",
      },
    }),
  ],
  vite: {
    resolve: {
      alias: {
        "@": resolve(import.meta.dirname, "./src"),
      },
    },
    define: {
      "import.meta.env.SHOELACE_VERSION": JSON.stringify(SHOELACE_VERSION),
    },
    plugins: [
      {
        name: "reload-data-files",
        handleHotUpdate({ file, server }) {
          if (file.replace(/\\/g, "/").includes("/src/data/")) {
            // hot-reloading when the content files changes does not re-render the DOM
            // as it is cached, this forces a full restart server.restart()
            // which forces Astro to re-run getStaticPaths()
            // and re-evaluate all import.meta.glob calls from scratch.
            server.restart();
            return [];
          }
        },
      },
    ],
  },
});
