import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import AstroPWA from "@vite-pwa/astro";

const bunLock = readFileSync(resolve(import.meta.dirname, "bun.lock"), "utf-8");

const getVersion = (pkg) => {
  const match = bunLock.match(new RegExp(`"${pkg}@([^"]+)"`));
  const version = match ? match[1].match(/\d+\.\d+\.\d+/)?.[0] : null;
  if (!version) throw new Error(`Version for ${pkg} not found in bun.lock`);
  console.log(`Version string for ${pkg} = '${version}'`);
  return JSON.stringify(version);
};

export default defineConfig({
  site: "https://khulasah-plus.adehad.workers.dev",
  base: process.env.ASTRO_BASE || undefined,
  output: "static",
  integrations: [
    sitemap(),
    AstroPWA({
      strategies: "injectManifest",
      injectManifest: {
        swSrc: "public/sw.js",
        swDest: "dist/sw.js",
        globDirectory: "dist",
        globPatterns: ["**/*.{html,js,css,json,png,ico,svg,woff,woff2}"],
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
      __WORKBOX_VERSION__: getVersion("workbox-build"),
    },
  },
});
