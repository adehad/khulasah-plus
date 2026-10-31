/**
 * Fails when navigation is broken: a link to a page or anchor that does not exist, a placeholder
 * link, or a page nothing links to. Pages meant to be reached by URL only set `unlisted: true`
 * in page-config. Links to pages that are planned but not written yet go in PENDING_PAGES.
 * Run with: bun scripts/check-nav.ts
 */

import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import {
  type PageConfig,
  pageConfigs,
  pagePathOf,
} from "../src/config/page-config.ts";
import { NavModel } from "../src/models/nav.ts";
import { slugify } from "../src/utils/string.ts";

/**
 * Suppressions: hrefs allowed to point at a page that does not exist yet (NavGrid shows them as
 * disabled tiles). An entry fails the check once its page exists or nothing links to it.
 */
const PENDING_PAGES = new Set<string>([
  // months of the Islamic year with no blessed occasions written up yet
  "blessed-occasions/2-safar",
  "blessed-occasions/3-rabi-al-awwal",
  "blessed-occasions/4-rabi-al-thani",
  "blessed-occasions/5-jumada-al-ula",
  "blessed-occasions/6-jumada-al-thaniyah",
  "blessed-occasions/9-ramadan",
  "blessed-occasions/10-shawwal",
  "blessed-occasions/11-dhul-qadah",
]);

const dataDir = resolve(import.meta.dir, "../src/data");

async function loadContent(config: PageConfig): Promise<unknown[]> {
  const module = await import(
    pathToFileURL(resolve(dataDir, `${config.contentImportPath}.ts`)).href
  );
  return module.default;
}

/** Walks a content tree, handing every object to the visitor once */
function walk(node: unknown, visit: (o: Record<string, unknown>) => void) {
  const seen = new Set<object>();
  const step = (n: unknown) => {
    if (!n || typeof n !== "object" || seen.has(n)) return;
    seen.add(n);
    visit(n as Record<string, unknown>);
    for (const child of Object.values(n)) step(child);
  };
  step(node);
}

const byPath = new Map(pageConfigs.map((c) => [c.path, c]));
const links = new Map<string, NavModel[]>();
const anchors = new Map<string, Set<string>>();
for (const config of pageConfigs) {
  const content = await loadContent(config);
  const navs: NavModel[] = [];
  // headings render with slugified ids, which is what in-page links can target
  const ids = new Set<string>();
  walk(content, (o) => {
    if (o instanceof NavModel) navs.push(o);
    else if (typeof o.title === "string" && o.title) ids.add(slugify(o.title));
  });
  links.set(config.path, navs);
  anchors.set(config.path, ids);
}

const problems: string[] = [];
for (const [from, navs] of links) {
  for (const nav of navs) {
    const target = pagePathOf(nav.href);
    const anchor = nav.href.split("#")[1];
    if (nav.href === "/" || nav.href === "")
      problems.push(
        `"${from}": "${nav.title}" links to a placeholder "${nav.href}"`,
      );
    else if (!byPath.has(target) && !PENDING_PAGES.has(nav.href))
      problems.push(
        `"${from}": "${nav.title}" links to unknown page "${nav.href}"`,
      );
    else if (anchor && !anchors.get(target)?.has(anchor))
      problems.push(
        `"${from}": "${nav.title}" links to missing anchor "${nav.href}"`,
      );
  }
}

const linked = new Set([...links.values()].flat().map((nav) => nav.href));
for (const href of PENDING_PAGES) {
  if (byPath.has(pagePathOf(href)))
    problems.push(
      `PENDING_PAGES: "${href}" now has a page; stale ignore, remove it`,
    );
  else if (!linked.has(href))
    problems.push(
      `PENDING_PAGES: nothing links to "${href}"; unused ignore, remove it`,
    );
}

const reachable = new Set<string>([""]);
const queue = [""];
while (queue.length) {
  for (const nav of links.get(queue.shift() as string) ?? []) {
    const target = pagePathOf(nav.href);
    if (byPath.has(target) && !reachable.has(target)) {
      reachable.add(target);
      queue.push(target);
    }
  }
}
for (const config of pageConfigs)
  if (!reachable.has(config.path) && !config.unlisted)
    problems.push(
      `"${config.path}" is not reachable from the home page (link it, or set unlisted: true)`,
    );

if (problems.length) {
  console.error(`Navigation check failed:\n- ${problems.join("\n- ")}`);
  process.exit(1);
}
console.log(`Navigation check passed: ${pageConfigs.length} pages`);
