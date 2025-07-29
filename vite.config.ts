import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

import { readFileSync } from "fs";
import { resolve } from "path";

const packageJson = JSON.parse(readFileSync(resolve(__dirname, "package.json"), "utf-8"));

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  build: {
    sourcemap: true,
    assetsDir: "code",
    target: ["esnext"],
    cssMinify: true,
    lib: false,
  },
  define: {
    __SHOELACE_VERSION__: JSON.stringify(packageJson.dependencies["@shoelace-style/shoelace"]),
  },
  plugins: [
    VitePWA({
      strategies: "injectManifest",
      injectManifest: {
        swSrc: "public/sw.js",
        swDest: "dist/sw.js",
        globDirectory: "dist",
        globPatterns: ["**/*.{html,js,css,json,png}"],
      },
      injectRegister: false,
      manifest: false,
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
