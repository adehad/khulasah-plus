import { expect, test } from "@playwright/test";

// One spec for the gallery, run per engine:
//   1. capture a full-page screenshot into the report (expiring CI artifact —
//      no committed baseline, no pixel diff), and
//   2. assert the behavioural regression gate: every kp-sticky-button's text
//      inherits the page colour. WebKit otherwise defaults native <button> text
//      to a system colour (blue on iOS), so this catches the bug on every engine.
test("component gallery: capture full-page screenshot + sticky-button colour invariant", async ({
  page,
}, testInfo) => {
  await page.goto("/component-gallery");
  await page.evaluate(() => document.fonts.ready);
  await page.waitForLoadState("networkidle"); // Shoelace icons load from CDN
  await page.waitForFunction(() => {
    const els = [...document.querySelectorAll("kp-sticky-button")];
    return (
      els.length > 0 && els.every((e) => e.shadowRoot?.querySelector("button.sticky"))
    );
  });

  // Capture first so the artifact exists even if the assertions below fail.
  const image = await page.screenshot({ fullPage: true });
  await testInfo.attach(`gallery-${testInfo.project.name}`, {
    body: image,
    contentType: "image/png",
  });

  // Gate: every sticky-button variant inherits the page colour, not the engine's
  // native-button default.
  const results = await page.evaluate(() => {
    const hosts = [...document.querySelectorAll("kp-sticky-button")];
    return hosts.map((host) => ({
      variant: host.getAttribute("variant"),
      buttonColor: getComputedStyle(
        host.shadowRoot!.querySelector("button.sticky")!,
      ).color,
      pageColor: getComputedStyle(host).color,
    }));
  });
  expect(results.length).toBeGreaterThan(0);
  for (const { variant, buttonColor, pageColor } of results) {
    expect(buttonColor, `variant ${variant}`).toBe(pageColor);
  }
});
