import { defineConfig, devices } from "@playwright/test";

// Per-engine visual regression. Cross-engine pixel diffing is intentionally not done
// (antialiasing/fonts always differ); engines are compared by eye via their baselines.
// Functional behaviour runs once on desktop Chrome, since it does not vary by engine.
export default defineConfig({
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  reporter: "html",
  use: {
    baseURL: "http://localhost:4321",
    colorScheme: "light",
    reducedMotion: "reduce",
  },
  projects: [
    {
      name: "webkit",
      testDir: "./tests/visual",
      use: { ...devices["iPhone 13"] },
    },
    {
      name: "chromium",
      testDir: "./tests/visual",
      use: { ...devices["Pixel 5"] },
    },
    {
      name: "functional",
      testDir: "./tests/e2e",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: "bun run build && bun run preview",
    url: "http://localhost:4321",
    env: { INCLUDE_GALLERY: "1" },
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});
