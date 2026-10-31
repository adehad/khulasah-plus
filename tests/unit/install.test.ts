import { expect, test } from "bun:test";
import { type InstallHint, installHint } from "@/utils/install";

const cases: [string, string, number, InstallHint][] = [
  [
    "iPhone Safari",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    5,
    "ios",
  ],
  [
    "iPhone Chrome",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/120.0 Mobile/15E148 Safari/604.1",
    5,
    "ios",
  ],
  [
    "iPad Safari with a desktop user agent",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
    5,
    "ios",
  ],
  [
    "Mac Safari",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
    0,
    "mac-safari",
  ],
  [
    "Mac Chrome",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
    0,
    "chromium",
  ],
  [
    "Firefox Android",
    "Mozilla/5.0 (Android 14; Mobile; rv:131.0) Gecko/131.0 Firefox/131.0",
    5,
    "firefox-android",
  ],
  [
    "Samsung Internet",
    "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/26.0 Chrome/122.0.0.0 Mobile Safari/537.36",
    5,
    "samsung",
  ],
  [
    "Firefox Windows",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:143.0) Gecko/20100101 Firefox/143.0",
    0,
    "firefox-windows",
  ],
  [
    "Firefox Linux",
    "Mozilla/5.0 (X11; Linux x86_64; rv:143.0) Gecko/20100101 Firefox/143.0",
    0,
    "firefox-unsupported",
  ],
  [
    "Chrome Windows",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
    0,
    "chromium",
  ],
  [
    "Chrome Android",
    "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36",
    5,
    "chromium",
  ],
];

test.each(
  cases,
)("%s gets its own install instructions", (_browser, userAgent, maxTouchPoints, hint) => {
  expect(installHint(userAgent, maxTouchPoints)).toBe(hint);
});
