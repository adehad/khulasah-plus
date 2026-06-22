import { defineConfig, devices } from "@playwright/test";

// Per-engine visual regression. Cross-engine pixel diffing is intentionally not done
// (antialiasing/fonts always differ); engines are compared by eye via their baselines.
export default defineConfig({
  testDir: "./tests/visual",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  reporter: "html",
  use: {
    baseURL: "http://localhost:4321",
    colorScheme: "light",
    reducedMotion: "reduce",
  },
  projects: [
    { name: "webkit", use: { ...devices["iPhone 13"] } },
    { name: "chromium", use: { ...devices["Pixel 5"] } },
  ],
  webServer: {
    command: "bun run build && bun run preview",
    url: "http://localhost:4321",
    env: { INCLUDE_GALLERY: "1" },
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});
