import { defineConfig, devices } from "@playwright/test";

// Service worker behaviour against a built copy of dist/; the spec serves it itself because each
// test rewrites files in its copy to simulate a deploy.
export default defineConfig({
  testDir: "./tests/pwa",
  forbidOnly: !!process.env.CI,
  reporter: "list",
  timeout: 180_000,
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
