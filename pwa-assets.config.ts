/* Run this using bun run pwa-assets-generator  */
import {
  defineConfig,
  minimal2023Preset as preset,
} from "@vite-pwa/assets-generator/config";

export default defineConfig({
  preset,
  images: ["assets/logo/Khulasah_plus_logo.png"],
});
