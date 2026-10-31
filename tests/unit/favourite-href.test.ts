import { expect, test } from "bun:test";
import {
  exportFileName,
  favouriteHrefToUrl,
  toFavouriteHref,
} from "../../src/utils/favourite-href";

const site = { origin: "https://khulasah.example", base: "/plus/" };

test.each([
  [
    "a full URL from another origin",
    "https://other.example/plus/khulasah/after-fajr/",
    "khulasah/after-fajr",
  ],
  [
    "a path with an anchor",
    "/plus/khulasah/wird-al-latif/#wird-al-latif-3",
    "khulasah/wird-al-latif#wird-al-latif-3",
  ],
  ["a bare relative path", "khulasah/after-fajr/", "khulasah/after-fajr"],
  [
    "a path that merely starts with the base text",
    "/plusplus/page",
    "plusplus/page",
  ],
  ["the home URL", "https://khulasah.example/plus/", ""],
  ["the base without its trailing slash", "/plus", ""],
])("toFavouriteHref normalises %s", (_name, input, expected) => {
  expect(toFavouriteHref(input, site)).toBe(expected);
});

test("toFavouriteHref strips a root base", () => {
  expect(
    toFavouriteHref("/khulasah/", { origin: site.origin, base: "/" }),
  ).toBe("khulasah");
});

test.each([
  "",
  "   ",
  "http://",
  "javascript:alert(1)",
])("toFavouriteHref rejects %p", (input) => {
  expect(toFavouriteHref(input, site)).toBeNull();
});

test.each([
  ["", "/plus/", "/plus/"],
  ["khulasah/wird#s-3", "/plus", "/plus/khulasah/wird/#s-3"],
  ["#top", "/", "/#top"],
])("favouriteHrefToUrl(%p, %p) is %p", (href, base, expected) => {
  expect(favouriteHrefToUrl(href, base)).toBe(expected);
});

// toISOString() would name a late-evening export after the next day in timezones west of UTC.
test("exportFileName uses the local date", () => {
  expect(exportFileName(new Date(2026, 0, 5, 23, 59))).toBe(
    "2026-01-05.khulasah.favourites.json",
  );
});
