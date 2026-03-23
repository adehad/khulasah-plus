import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import sitemap from "@astrojs/sitemap";
import AstroPWA from "@vite-pwa/astro";
import { defineConfig } from "astro/config";

const bunLock = readFileSync(resolve(import.meta.dirname, "bun.lock"), "utf-8");

const getVersion = (pkg) => {
  const match = bunLock.match(new RegExp(`"${pkg}@([^"]+)"`));
  const version = match ? match[1].match(/\d+\.\d+\.\d+/)?.[0] : null;
  if (!version) throw new Error(`Version for ${pkg} not found in bun.lock`);
  console.log(`Version string for ${pkg} = '${version}'`);
  return version;
};

const WORKBOX_VERSION = getVersion("workbox-build");
const SHOELACE_VERSION = getVersion("@shoelace-style/shoelace");

const isDev = process.argv.includes("dev");

if (isDev) {
  const swTemplate = readFileSync(
    resolve(import.meta.dirname, "public/sw.js"),
    "utf-8",
  );
  const swDev = swTemplate
    // biome-ignore lint/suspicious/noTemplateCurlyInString: intentional find-and-replace of template literal placeholders in sw.js
    .replace("${__WORKBOX_VERSION__}", WORKBOX_VERSION)
    .replace(
      // biome-ignore lint/suspicious/noTemplateCurlyInString: intentional find-and-replace of template literal placeholders in sw.js
      "${__SHOELACE_VERSION__}",
      SHOELACE_VERSION,
    );
  writeFileSync(resolve(import.meta.dirname, "public/sw.dev.js"), swDev);
  console.log("Generated public/sw.dev.js for development.");
}

export default defineConfig({
  site: "https://khulasah-plus.adehad.workers.dev",
  base: process.env.ASTRO_BASE || undefined,
  output: "static",
  integrations: [
    sitemap(),
    AstroPWA({
      strategies: "injectManifest",
      injectManifest: {
        swSrc: isDev ? "public/sw.dev.js" : "public/sw.js",
        swDest: "dist/sw.js",
        globDirectory: "dist",
        globPatterns: ["**/*.{html,js,css,json,png,ico,svg,woff,woff2}"],
        globIgnores: ["sw.dev.js"],
      },
      injectRegister: false,
      manifest: false,
      devOptions: {
        enabled: true,
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
      __WORKBOX_VERSION__: JSON.stringify(WORKBOX_VERSION),
      __SHOELACE_VERSION__: JSON.stringify(SHOELACE_VERSION),
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
