import { once } from "node:events";
import { writeFileSync } from "node:fs";
import {
  createServer,
  type IncomingMessage,
  type ServerResponse,
} from "node:http";
import type { AddressInfo } from "node:net";
import { join } from "node:path";
import { expect, type Locator, type Page, test } from "@playwright/test";
import type { FavouritesData } from "../../src/services/favourites-store";
import { seedFavourites } from "../e2e/helpers/favourites";

// Store screenshots for the manifest's screenshots[]. A generator, not a test:
// the only expectations are that the elements each shot needs exist.

const OUTPUT_DIR = join(__dirname, "../../public/assets/screenshots");

// Store listings want 9:16 phone and 16:9 desktop shots at 1080p.
const formFactors = [
  {
    name: "narrow",
    use: {
      viewport: { width: 360, height: 640 },
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
    },
  },
  {
    name: "wide",
    use: { viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1.5 },
  },
] as const;

const CONTENT_PAGE = "/khulasah/after-fajr/wird-al-latif/";
const FONT_PAGE = "/khulasah/after-fajr/initial-adhkar/";
const QURAN_PAGE = "/khulasah/friday/adhkar-on-friday/short-surahs/";
const PERMALINK_PAGE = "/khulasah/maghrib/ratib-al-haddad/";

const AUDIO_CDN =
  "https://cdn.jsdelivr.net/gh/adehad/khulasah-plus-cdn@main/audio/**";
const SILENT_TRACK = silentWav(14 * 60);

// 8 kHz 8-bit mono keeps a recitation-length track to a few megabytes.
function silentWav(seconds: number): Buffer {
  const rate = 8000;
  const samples = rate * seconds;
  const wav = Buffer.alloc(44 + samples, 0x80);
  wav.write("RIFF", 0);
  wav.writeUInt32LE(36 + samples, 4);
  wav.write("WAVEfmt ", 8);
  wav.writeUInt32LE(16, 16);
  wav.writeUInt16LE(1, 20);
  wav.writeUInt16LE(1, 22);
  wav.writeUInt32LE(rate, 24);
  wav.writeUInt32LE(rate, 28);
  wav.writeUInt16LE(1, 32);
  wav.writeUInt16LE(8, 34);
  wav.write("data", 36);
  wav.writeUInt32LE(samples, 40);
  return wav;
}

// Chromium cannot seek in media fulfilled by page.route, so the CDN request is
// redirected to a local server that answers range requests like the CDN does.
function serveSilentTrack(request: IncomingMessage, response: ServerResponse) {
  const range = /bytes=(\d+)-(\d*)/.exec(request.headers.range ?? "");
  const start = range ? Number(range[1]) : 0;
  const end = range?.[2] ? Number(range[2]) : SILENT_TRACK.length - 1;
  response.writeHead(range ? 206 : 200, {
    "Access-Control-Allow-Origin": "*",
    "Accept-Ranges": "bytes",
    "Content-Type": "audio/wav",
    "Content-Length": end - start + 1,
    ...(range && {
      "Content-Range": `bytes ${start}-${end}/${SILENT_TRACK.length}`,
    }),
  });
  response.end(SILENT_TRACK.subarray(start, end + 1));
}

// Folders in distinct swatch colours plus loose items, all real pages, so the
// shot shows how a reader would organise their own collection.
const SAMPLE_FAVOURITES: FavouritesData = {
  version: 1,
  items: [
    {
      id: "daily",
      title: "Daily awrad",
      color: "#3b82f6",
      children: [
        {
          id: "latif",
          title: "Wird al Latif",
          href: "khulasah/after-fajr/wird-al-latif",
        },
        {
          id: "ratib",
          title: "Ratib Al-Haddad",
          href: "khulasah/maghrib/ratib-al-haddad",
        },
        {
          id: "istighfar",
          title: "Istighfar",
          href: "khulasah/maghrib/istighfar",
        },
      ],
    },
    {
      id: "friday",
      title: "Friday",
      color: "#f59e0b",
      children: [
        {
          id: "surahs",
          title: "Short Surahs",
          href: "khulasah/friday/adhkar-on-friday/short-surahs",
        },
        {
          id: "salawat",
          title: "Salawat",
          href: "khulasah/friday/adhkar-on-friday/salawat",
        },
      ],
    },
    {
      id: "mawlids",
      title: "Mawlids",
      color: "#ec4899",
      children: [
        { id: "simt", title: "Simt ad-Durar", href: "mawlids/simt-ad-durar" },
        { id: "burdah", title: "The Burdah", href: "the-burdah" },
      ],
    },
    {
      id: "bahr",
      title: "Hizb Al Bahr",
      href: "khulasah/after-asr/hizb-al-bahr",
    },
    {
      id: "selected",
      title: "Selected Salawat",
      href: "khulasah/various-supplications/selected-salawat",
    },
  ],
};

async function settle(page: Page) {
  // Shoelace and its icons come from the CDN, so the network has to go quiet
  // before every custom element and glyph is really on screen.
  await page.waitForLoadState("networkidle");
  await page.evaluate(() => document.fonts.ready);
  await page.waitForFunction(
    () => document.querySelectorAll(":not(:defined)").length === 0,
  );
}

// Shoelace dialogs fade in even under reduced motion, and the animations live
// in the dialog's shadow root where document.getAnimations() cannot see them,
// so a capture taken too early shows a translucent panel.
async function dialogShown(panel: Locator) {
  await expect(panel).toBeVisible();
  await panel.evaluate((el) =>
    Promise.all(
      [...(el.getRootNode() as ShadowRoot).querySelectorAll("*")]
        .flatMap((part) => part.getAnimations())
        .map((animation) => animation.finished),
    ),
  );
}

async function open(page: Page, path: string) {
  await page.goto(path);
  await settle(page);
}

function save(name: string, png: Buffer) {
  writeFileSync(join(OUTPUT_DIR, `${name}.png`), png);
}

async function captureIn(
  page: Page,
  colorScheme: "light" | "dark",
  path: string,
) {
  // The theme is picked by an inline script at load from prefers-color-scheme,
  // so each scheme needs a fresh load rather than a live media switch.
  await page.emulateMedia({ colorScheme });
  await open(page, path);
  return page.screenshot();
}

// Light top-left, dark bottom-right, split along the top-right to bottom-left
// diagonal so one image shows the app follows the system theme.
async function diagonal(page: Page, path: string) {
  const light = await captureIn(page, "light", path);
  const dark = await captureIn(page, "dark", path);
  await page.emulateMedia({ colorScheme: "light" });

  const dataUrl = await page.evaluate(
    async ([lightUrl, darkUrl]) => {
      const load = (src: string) =>
        new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = src;
        });
      const [lightImg, darkImg] = await Promise.all([
        load(lightUrl),
        load(darkUrl),
      ]);
      const { width, height } = lightImg;
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

      ctx.drawImage(lightImg, 0, 0);
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(width, 0);
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(darkImg, 0, 0);
      ctx.restore();

      ctx.beginPath();
      ctx.moveTo(width, 0);
      ctx.lineTo(0, height);
      ctx.strokeStyle = "rgba(128, 128, 128, 0.8)";
      ctx.lineWidth = Math.max(2, width / 540);
      ctx.stroke();

      return canvas.toDataURL("image/png");
    },
    [
      `data:image/png;base64,${light.toString("base64")}`,
      `data:image/png;base64,${dark.toString("base64")}`,
    ],
  );
  return Buffer.from(dataUrl.split(",")[1], "base64");
}

for (const formFactor of formFactors) {
  test.describe(formFactor.name, () => {
    test.use({
      ...formFactor.use,
      permissions: ["clipboard-read", "clipboard-write"],
    });

    const shot = (name: string) => `${name}-${formFactor.name}`;

    test("home in light and dark", async ({ page }) => {
      save(shot("home"), await diagonal(page, "/"));
    });

    test("content page in light and dark", async ({ page }) => {
      save(shot("content"), await diagonal(page, CONTENT_PAGE));
    });

    test("enlarged arabic font with settings open", async ({ page }) => {
      await page.addInitScript(() => {
        localStorage.setItem(
          "settings",
          JSON.stringify({
            arabicFontSize: 3.5,
            translationFontSize: 1,
            transliterationFontSize: 1,
            showArabic: true,
            showTranslation: true,
            showTransliteration: true,
          }),
        );
      });
      await open(page, FONT_PAGE);
      if (formFactor.name === "narrow") {
        // The narrow dialog covers all but a strip at the bottom, so bring
        // an Arabic line into that strip to show the enlarged text. Scrolling
        // has to happen first: the open dialog locks scrolling. The second
        // line, because the first already sits at the top of the page.
        await page
          .locator("div.arabic")
          .nth(1)
          .evaluate((el) => el.scrollIntoView({ block: "end" }));
      }
      // Narrow headers keep settings behind the menu toggle.
      const settings = page.getByRole("button", { name: "Settings" });
      if (!(await settings.isVisible())) {
        await page.locator("header .menu-toggle").click();
      }
      await settings.click();
      await dialogShown(page.locator("settings-menu sl-dialog [part=panel]"));
      await settle(page);
      save(shot("font-size"), await page.screenshot());
    });

    test("qur'an with its reference", async ({ page }) => {
      await open(page, QURAN_PAGE);
      const reference = page.locator(".quran-container kp-footnote").last();
      await expect(reference).toBeAttached();
      // Closing verses with the reference just above the bottom edge; the
      // page scrolls inside <main>, not the window.
      await reference.evaluate((el) => {
        el.scrollIntoView({ block: "end" });
        el.closest("main")?.scrollBy(0, window.innerHeight / 8);
      });
      await settle(page);
      save(shot("quran"), await page.screenshot());
    });

    test("search with results", async ({ page }) => {
      await open(page, "/?search");
      await dialogShown(page.locator("kp-search-modal sl-dialog [part=panel]"));
      await page.locator("kp-search-modal sl-input input").fill("mercy");
      await expect(
        page.locator("kp-search-modal .result-item").nth(2),
      ).toBeVisible();
      await settle(page);
      save(shot("search"), await page.screenshot());
    });

    test("permalink copied", async ({ page }) => {
      await open(page, PERMALINK_PAGE);
      // The third entry's number: far enough down that the jump to it
      // scrolls the page, leaving the text above to scroll back into view.
      const button = page.locator("kp-sticky-button").nth(2);
      // Frozen timers keep the tooltip from auto-dismissing mid-capture.
      await page.clock.install();
      await button.locator("button").click();
      await expect(button.locator("sl-tooltip [part=body]")).toBeVisible();
      // Clicking jumps to the entry; the page then starts exactly where the
      // previous entry ends, so no line is clipped at the top edge and that
      // entry's sticky number is out of view instead of stacked on this one.
      await button.evaluate((el) => {
        const main = el.closest("main");
        const previousEntry = el.previousElementSibling;
        if (!main || !previousEntry)
          throw new Error("permalink layout changed");
        main.scrollBy(
          0,
          previousEntry.getBoundingClientRect().bottom -
            main.getBoundingClientRect().top,
        );
      });
      await page.clock.runFor(100);
      save(shot("permalink"), await page.screenshot());
    });

    test("audio playing and saved offline", async ({ page }) => {
      // The recitation comes from the CDN; a local silent track of realistic
      // length keeps the shot offline-safe while the player stays genuine.
      const server = createServer(serveSilentTrack).listen(0);
      await once(server, "listening");
      const { port } = server.address() as AddressInfo;
      await page.route(AUDIO_CDN, (route) =>
        route.fulfill({
          status: 302,
          headers: { Location: `http://localhost:${port}/track.wav` },
        }),
      );
      await open(page, PERMALINK_PAGE);
      await page.locator(".audio-play-btn").first().click();

      const player = page.locator("kp-audio-player");
      await player.locator('[label="Save for offline"]').click();
      await expect(
        player.locator('[label="Remove from offline"]'),
      ).toBeVisible();

      // Seek about a third of the way in so the shot reads as mid-recitation.
      const progress = player.locator(".progress-container");
      const box = await progress.boundingBox();
      if (!box) throw new Error("audio progress bar not rendered");
      await progress.click({
        position: { x: box.width * 0.35, y: box.height / 2 },
      });
      await expect
        .poll(async () =>
          Number(await player.locator("sl-progress-bar").getAttribute("value")),
        )
        .toBeGreaterThan(25);
      await settle(page);
      save(shot("audio"), await page.screenshot());
      server.closeAllConnections();
      server.close();
    });

    test("favourites", async ({ page }) => {
      await seedFavourites(page, SAMPLE_FAVOURITES);
      await open(page, "/favourites/");
      await expect(page.locator("kp-favourites-page")).toBeVisible();
      save(shot("favourites"), await page.screenshot());
    });
  });
}
