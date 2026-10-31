/**
 * Favourite hrefs are base-relative page paths with no leading or trailing slash plus an optional "#anchor",
 * the same shape as PageConfig.path, so they survive a change of deployment base or origin.
 */

import { resolveBasePath } from "@/utils/paths";

const SITE_TITLE_SUFFIX = " | Khulasah Plus";

function withTrailingSlash(base: string): string {
  return base.endsWith("/") ? base : `${base}/`;
}

function trimSlashes(path: string): string {
  return path.replace(/^\/+|\/+$/g, "");
}

/** Canonical form for stored hrefs, so "/khulasah/after-fajr/" and "khulasah/after-fajr" are the same favourite. */
export function normaliseFavouriteHref(href: string): string {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return trimSlashes(href);
  return `${trimSlashes(href.slice(0, hashIndex))}${href.slice(hashIndex)}`;
}

/**
 * Normalises a pasted link or path into a favourite href, or null when it cannot be one.
 * Any origin is accepted so links copied from another deployment (or localhost) still resolve to the same page.
 * Relative input is resolved against the base, so "khulasah/after-fajr" means the same page as the full URL.
 */
export function toFavouriteHref(
  input: string,
  { origin, base }: { origin: string; base: string },
): string | null {
  const trimmed = input.trim();
  if (!trimmed) return null;

  const siteBase = withTrailingSlash(base);
  let url: URL;
  try {
    url = new URL(trimmed, new URL(siteBase, origin));
  } catch {
    return null;
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") return null;

  let path = url.pathname;
  if (path.startsWith(siteBase)) {
    path = path.slice(siteBase.length);
  } else if (`${path}/` === siteBase) {
    path = "";
  }

  return `${trimSlashes(path)}${url.hash}`;
}

const SITE_PROBE = { origin: "https://site.invalid", base: "/" };

/**
 * Stored hrefs are joined onto the site base, where a URL parser reads "\evil.com" or "<tab>/evil.com" as another
 * host. A path is only trusted if resolving it as a pasted link gives it back unchanged.
 */
export function isSiteFavouriteHref(href: string): boolean {
  const hashIndex = href.indexOf("#");
  const path = hashIndex === -1 ? href : href.slice(0, hashIndex);
  return path === "" || toFavouriteHref(path, SITE_PROBE) === path;
}

/** Builds the site URL for a favourite href; pages always get the trailing slash Astro's static output uses. */
export function favouriteHrefToUrl(href: string, base: string): string {
  const hashIndex = href.indexOf("#");
  const rawPath = hashIndex === -1 ? href : href.slice(0, hashIndex);
  // Defence in depth behind isSiteFavouriteHref: URL parsers drop control characters and read a backslash
  // as a slash, either of which could otherwise turn the joined path into "//other-host".
  const path = trimSlashes(
    // biome-ignore lint/suspicious/noControlCharactersInRegex: stripping control characters is the point
    rawPath.replace(/[\u0000-\u001f\u007f]/g, "").replace(/^[\\/]+/, ""),
  );
  const hash = hashIndex === -1 ? "" : href.slice(hashIndex);
  const siteBase = withTrailingSlash(base);
  return `${path ? `${siteBase}${path}/` : siteBase}${hash}`;
}

/** Local date rather than UTC, so the file name matches the day the user exported on. */
export function exportFileName(date: Date): string {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}.khulasah.favourites.json`;
}

/**
 * Href of the page being viewed. The location hash is deliberately ignored: callers pass the anchor they mean
 * (e.g. a section id) so a stale scroll position never ends up in a favourite.
 */
export function currentPageHref(anchor?: string): string {
  const path =
    toFavouriteHref(window.location.pathname, {
      origin: window.location.origin,
      base: resolveBasePath(),
    }) ?? "";
  const cleanAnchor = anchor?.replace(/^#/, "");
  return cleanAnchor ? `${path}#${cleanAnchor}` : path;
}

export function hrefToUrl(href: string): string {
  return favouriteHrefToUrl(href, resolveBasePath());
}

/** Mirrors the " | Khulasah Plus" suffix BaseLayout.astro appends to every <title>. */
export function pageTitle(): string {
  const title = document.title;
  return title.endsWith(SITE_TITLE_SUFFIX)
    ? title.slice(0, -SITE_TITLE_SUFFIX.length)
    : title;
}
