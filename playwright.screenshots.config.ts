import { defineConfig } from "@playwright/test";

// Generates the manifest's store screenshots rather than asserting anything.
// It always builds and serves its own copy (own port, never reusing a running
// server) so the committed images can't come from a stale or different build.
export default defineConfig({
  testDir: "./tests/screenshots",
  reporter: "list",
  use: {
    baseURL: "http://localhost:4331",
    browserName: "chromium",
    colorScheme: "light",
    reducedMotion: "reduce",
  },
  webServer: {
    command: "bun run build && bun run preview --port 4331",
    url: "http://localhost:4331",
    reuseExistingServer: false,
    timeout: 180_000,
  },
});
