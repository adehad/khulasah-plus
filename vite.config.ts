import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { prepareDevServiceWorker } from "./vite-local-dev.ts";

const bunLock = readFileSync(resolve(__dirname, "bun.lock"), "utf-8");

const getVersion = (pkg: string) => {
  const match = bunLock.match(new RegExp(`"${pkg}@([^"]+)"`));
  const version = match ? match[1].match(/\d+\.\d+\.\d+/)?.[0] : null;
  if (!version) throw new Error(`Version for ${pkg} not found in bun.lock`);
  console.log(`Version string for ${pkg} = '${version}'`);
  return JSON.stringify(version);
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  if (isDev) {
    const workboxVersion = JSON.parse(getVersion("workbox-build"));
    prepareDevServiceWorker(workboxVersion);
  }

  return {
    base: "/",
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    build: {
      sourcemap: true,
      assetsDir: "code",
      target: ["esnext"],
      cssMinify: true,
      lib: false,
      manifest: "vite-manifest.json", // Required for the page revision plugin
    },
    define: {
      __SHOELACE_VERSION__: getVersion("@shoelace-style/shoelace"),
      __WORKBOX_VERSION__: getVersion("workbox-build"),
    },
    plugins: [
      VitePWA({
        strategies: "injectManifest",
        injectManifest: {
          swSrc: isDev ? "public/sw.dev.js" : "public/sw.js",
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
  };
});
