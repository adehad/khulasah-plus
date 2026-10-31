import { readFile } from "node:fs/promises";
import { expect, test } from "@playwright/test";
import type {
  FavouriteNode,
  FavouritesData,
} from "../../src/services/favourites-store";
import { readFavourites, seedFavourites } from "./helpers/favourites";

const SEED: FavouritesData = {
  version: 1,
  items: [
    { id: "burdah", title: "The Burdah", href: "the-burdah" },
    { id: "mawlids", title: "Mawlids", href: "mawlids" },
    {
      id: "morning",
      title: "Morning",
      color: "#10b981",
      children: [
        { id: "fajr", title: "After Fajr", href: "khulasah/after-fajr" },
      ],
    },
    { id: "evening", title: "Evening", color: "#8b5cf6", children: [] },
  ],
};

/** Ids are regenerated on import, so trees are compared by what the user sees: titles, links and nesting. */
function shape(nodes: FavouriteNode[]): unknown[] {
  return nodes.map((node) =>
    "children" in node
      ? { title: node.title, color: node.color, children: shape(node.children) }
      : { title: node.title, href: node.href },
  );
}

test("dragging a tile by its handle reorders favourites", async ({ page }) => {
  await seedFavourites(page, SEED);
  await page.goto("/favourites/");
  await page.getByRole("button", { name: "Edit" }).click();

  const handle = page.getByRole("button", { name: "Reorder The Burdah" });
  const target = page.getByRole("button", { name: "Reorder Morning" });
  const from = await handle.boundingBox();
  const to = await target.boundingBox();
  if (!from || !to) throw new Error("handles are not on screen");

  await page.mouse.move(from.x + from.width / 2, from.y + from.height / 2);
  await page.mouse.down();
  // Below Morning's midpoint, so the drop lands after it.
  await page.mouse.move(from.x + from.width / 2, to.y + to.height * 0.75, {
    steps: 10,
  });
  await page.mouse.up();

  await expect
    .poll(async () => (await readFavourites(page)).items.map((n) => n.title))
    .toEqual(["Mawlids", "Morning", "The Burdah", "Evening"]);
});

test("dragging a tile to the bottom edge scrolls the list so it can drop beyond the screen", async ({
  page,
}) => {
  const items = Array.from({ length: 40 }, (_, i) => ({
    id: `item-${i}`,
    title: `Item ${i}`,
    href: "the-burdah",
  }));
  await seedFavourites(page, { version: 1, items });
  await page.goto("/favourites/");
  await page.getByRole("button", { name: "Edit" }).click();
  // The scroller is whichever element scrolls (main today, the document later), so both are reset and summed
  const scrolled = () =>
    page.evaluate(
      () => (document.querySelector("main")?.scrollTop ?? 0) + window.scrollY,
    );
  await page.evaluate(() => {
    document.querySelector("main")?.scrollTo(0, 0);
    window.scrollTo(0, 0);
  });

  const handles = page.getByRole("button", { name: /^Reorder / });
  const viewportHeight = page.viewportSize()?.height ?? 0;
  const onScreen = await handles.evaluateAll(
    (els, bottom) =>
      els.filter((el) => el.getBoundingClientRect().bottom <= bottom).length,
    viewportHeight,
  );
  const from = await handles.first().boundingBox();
  if (!from) throw new Error("the first handle is not on screen");

  await page.mouse.move(from.x + from.width / 2, from.y + from.height / 2);
  await page.mouse.down();
  await page.mouse.move(from.x + from.width / 2, viewportHeight - 2, {
    steps: 10,
  });
  // Held at the edge until the list has scrolled at least a screen
  await expect.poll(scrolled).toBeGreaterThan(viewportHeight);
  await page.mouse.up();

  await expect
    .poll(async () =>
      (await readFavourites(page)).items.findIndex((n) => n.id === "item-0"),
    )
    .toBeGreaterThan(onScreen);
});

test("an exported file imports back: merge adds nothing new and replace restores it", async ({
  page,
}) => {
  await seedFavourites(page, SEED);
  // Playwright cannot answer Chromium's File System Access picker, so the file input fallback is driven instead
  await page.addInitScript(() => {
    delete (window as { showOpenFilePicker?: unknown }).showOpenFilePicker;
  });
  await page.goto("/favourites/");

  const downloading = page.waitForEvent("download");
  await page.getByRole("button", { name: "Export" }).click();
  const download = await downloading;
  const file = {
    name: download.suggestedFilename(),
    mimeType: "application/json",
    buffer: await readFile(await download.path()),
  };

  const importFile = async (mode: "Merge" | "Replace") => {
    const choosing = page.waitForEvent("filechooser");
    await page.getByRole("button", { name: "Import" }).click();
    await (await choosing).setFiles(file);
    await page.getByRole("button", { name: mode }).click();
  };

  await importFile("Merge");
  await expect
    .poll(async () => shape((await readFavourites(page)).items))
    .toEqual(shape(SEED.items));

  // A change after exporting, so Replace has something to undo.
  await page.getByLabel("Add a link").fill("/hadrahs/");
  await page.getByRole("button", { name: "Add", exact: true }).click();
  await expect(page.getByRole("link", { name: "Hadrahs" })).toBeVisible();

  await importFile("Replace");
  await expect
    .poll(async () => shape((await readFavourites(page)).items))
    .toEqual(shape(SEED.items));
});
