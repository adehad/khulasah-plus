import { expect, test } from "@playwright/test";

// Regression: content used to scroll inside <main> (body was fixed at 100dvh),
// so the document never scrolled and mobile browsers never collapsed their
// address bar. The document must be the scroll container.
test("the document, not <main>, scrolls (mobile address bar can collapse)", async ({
  page,
}) => {
  await page.goto("/component-gallery");

  const scrolled = await page.evaluate(() => {
    window.scrollTo(0, 400);
    return {
      windowY: window.scrollY,
      mainOverflowY: getComputedStyle(document.querySelector("main")!).overflowY,
    };
  });

  expect(scrolled.windowY).toBeGreaterThan(0);
  expect(scrolled.mainOverflowY).toBe("visible");
});
