import { cp, mkdtemp, readFile, rm, stat, writeFile } from "node:fs/promises";
import { createServer, type Server } from "node:http";
import type { AddressInfo } from "node:net";
import { tmpdir } from "node:os";
import { extname, join, normalize, resolve } from "node:path";
import { expect, test } from "@playwright/test";

// Playwright runs from the project root, where `bun run build` writes dist/.
const DIST = resolve("dist");

const CONTENT_TYPES: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".svg": "image/svg+xml",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
};

async function isFile(path: string) {
  return (await stat(path).catch(() => null))?.isFile() ?? false;
}

// Mirrors the static host closely enough for the precache: /dir/ and /page resolve to their HTML,
// and nothing is HTTP-cached so every update check sees the latest files.
async function resolveFile(root: string, urlPath: string) {
  const relative = normalize(decodeURIComponent(urlPath)).replace(/^[/]+/, "");
  const base = join(root, relative);
  if (!base.startsWith(root)) return null;
  for (const candidate of [base, `${base}.html`, join(base, "index.html")]) {
    if (await isFile(candidate)) return candidate;
  }
  return null;
}

function serve(root: string): Promise<Server> {
  const server = createServer(async (req, res) => {
    const file = await resolveFile(
      root,
      new URL(req.url ?? "/", "http://x").pathname,
    );
    if (!file) {
      res.writeHead(404).end();
      return;
    }
    res.writeHead(200, {
      "Content-Type":
        CONTENT_TYPES[extname(file)] ?? "application/octet-stream",
      "Cache-Control": "no-cache",
    });
    res.end(await readFile(file));
  });
  return new Promise((resolve) =>
    server.listen(0, "127.0.0.1", () => resolve(server)),
  );
}

async function deployNewVersion(root: string) {
  const indexPath = join(root, "index.html");
  const html = await readFile(indexPath, "utf-8");
  await writeFile(
    indexPath,
    html.replace(/<title>(.*?)<\/title>/, "<title>$1 (new deploy)</title>"),
  );

  // Workbox only refetches a precached page whose revision changed, which is what a real
  // deploy does for every edited page; this also makes sw.js itself byte-different.
  const swPath = join(root, "sw.js");
  const sw = await readFile(swPath, "utf-8");
  const indexEntry = /\{"revision":"[0-9a-f]+","url":"\/"\}/;
  expect(sw, "built sw.js should precache / with a revision").toMatch(
    indexEntry,
  );
  await writeFile(
    swPath,
    sw.replace(indexEntry, '{"revision":"new-deploy","url":"/"}'),
  );
}

let root: string;
let server: Server;

test.beforeEach(async () => {
  root = await mkdtemp(join(tmpdir(), "kp-pwa-"));
  await cp(DIST, root, { recursive: true });
  server = await serve(root);
});

test.afterEach(async () => {
  // The page still holds keep-alive connections at this point, which would stall close().
  server.closeAllConnections();
  await new Promise((resolve) => server.close(resolve));
  await rm(root, { recursive: true, force: true });
});

test("regression: users needed a hard refresh after a deploy; an open page now updates itself", async ({
  page,
}) => {
  const { port } = server.address() as AddressInfo;
  let loads = 0;
  page.on("load", () => loads++);
  await page.goto(`http://localhost:${port}/`);
  await page.waitForFunction(
    () => navigator.serviceWorker.controller !== null,
    null,
    {
      timeout: 120_000,
    },
  );
  const oldTitle = await page.title();

  await deployNewVersion(root);
  await page.evaluate(async () => {
    const registration = await navigator.serviceWorker.getRegistration();
    await registration?.update();
  });

  await expect(page.locator("kp-update-toast")).toBeVisible({
    timeout: 60_000,
  });
  await expect(page).toHaveTitle(`${oldTitle} (new deploy)`, {
    timeout: 60_000,
  });

  // The new worker taking over must settle the page, not set off another reload or toast.
  await expect(page.locator("kp-update-toast")).toHaveCount(0);
  // The new title is parsed before the reloaded page finishes loading.
  await page.waitForLoadState("load");
  const loadsAfterUpdate = loads;
  await page.waitForTimeout(5_000);
  expect(loads).toBe(loadsAfterUpdate);
});

test("regression: offline, /page/ addresses showed the browser's error page", async ({
  page,
  context,
}) => {
  const { port } = server.address() as AddressInfo;
  const origin = `http://localhost:${port}`;
  // The host redirects /page to /page/, so that is the address bookmarks and reloads use.
  await page.goto(`${origin}/khulasah/`);
  const pageTitle = await page.title();
  await page.waitForFunction(() => navigator.serviceWorker.controller !== null);

  await context.setOffline(true);
  await page.goto(`${origin}/khulasah/`);
  await expect(page).toHaveTitle(pageTitle);
});
