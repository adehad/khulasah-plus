import { expect, test } from "@playwright/test";
import { readFavourites, seedFavourites } from "./helpers/favourites";

test("favouriting a numbered entry stores its anchor and keeps the gold star after reload", async ({
  page,
}) => {
  await page.goto("/khulasah/after-fajr/wird-al-latif/");
  const number = page.locator("kp-sticky-button#wird-al-latif-3");
  const star = page
    .locator("#wird-al-latif-3 > kp-favourite-star")
    .getByRole("button");

  await number.locator("button.sticky").click();
  await expect(star).toHaveAccessibleName(/^Add favourite/);

  await star.click();
  await expect(
    page.getByRole("dialog", { name: "Add to favourites" }),
  ).toBeVisible();
  // The footer is slotted into the dialog, so it is not inside the dialog role's subtree.
  await page.getByRole("button", { name: "Save" }).click();
  await expect(star).toHaveAccessibleName(/^Edit favourite/);

  // The stored href shape is a contract: exported files and other deployments depend on it.
  const stored = await readFavourites(page);
  expect(stored.items).toEqual([
    expect.objectContaining({
      href: "khulasah/after-fajr/wird-al-latif#wird-al-latif-3",
    }),
  ]);

  await page.reload();
  await expect(star).toHaveAccessibleName(/^Edit favourite/);
});

test("a favourited entry's star does not stick over later entries", async ({
  page,
}) => {
  await seedFavourites(page, {
    version: 1,
    items: [
      {
        id: "a",
        title: "x",
        href: "khulasah/after-fajr/wird-al-latif#wird-al-latif-4",
      },
    ],
  });
  await page.goto("/khulasah/after-fajr/wird-al-latif/");
  const star = page.locator("#wird-al-latif-4 > kp-favourite-star");
  await expect(star).toBeAttached();

  // Bringing a much later entry up to the sticky numbers scrolls entry 4 itself out of view
  await page.locator("div#wird-al-latif-10").evaluate((el) => {
    el.scrollIntoView({ block: "start" });
  });
  await expect(page.locator("div#wird-al-latif-4")).not.toBeInViewport();
  await expect(
    page.locator("kp-sticky-button#wird-al-latif-4"),
  ).toBeInViewport();
  await expect(star).not.toBeInViewport();
});
