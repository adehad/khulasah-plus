import { describe, expect, test } from "bun:test";
import {
  createFavouritesStore,
  DEFAULT_FOLDER_COLOUR,
  FAVOURITES_CHANGED,
  FAVOURITES_KEY,
  type FavouriteFolder,
  FavouritesFormatError,
  parseFavourites,
} from "../../src/services/favourites-store";
import { favouriteHrefToUrl } from "../../src/utils/favourite-href";

function memoryBackend(initial: Record<string, string> = {}) {
  const data = new Map(Object.entries(initial));
  return {
    data,
    getItem: (key: string) => data.get(key) ?? null,
    setItem: (key: string, value: string) => {
      data.set(key, value);
    },
  };
}

function sequentialIds(prefix = "id") {
  let n = 0;
  return () => `${prefix}${++n}`;
}

function newStore(backend = memoryBackend(), events = new EventTarget()) {
  return createFavouritesStore({ backend, events, newId: sequentialIds() });
}

const titles = (nodes: { title: string }[]) => nodes.map((n) => n.title);

describe("favourites store", () => {
  test("nested items persist and are read back by a new store", () => {
    const backend = memoryBackend();
    const store = newStore(backend);
    const folder = store.addFolder({ title: "Daily", color: "#f00" });
    const inner = store.addFolder(
      { title: "Morning", color: "#0f0" },
      folder.id,
    );
    store.add({ title: "Wird", href: "khulasah/wird" }, inner.id);

    const reloaded = newStore(backend);
    const [daily] = reloaded.getTree() as FavouriteFolder[];
    const [morning] = daily.children as FavouriteFolder[];
    expect(daily.title).toBe("Daily");
    expect(morning.children).toEqual([
      expect.objectContaining({ title: "Wird", href: "khulasah/wird" }),
    ]);
  });

  test("move into a folder", () => {
    const store = newStore();
    const a = store.add({ title: "A", href: "a" });
    store.add({ title: "B", href: "b" });
    const folder = store.addFolder({ title: "F", color: "#000" });

    expect(store.move(a.id, folder.id, 0)).toBe(true);
    expect(titles(store.getTree())).toEqual(["B", "F"]);
    expect(titles((store.getTree()[1] as FavouriteFolder).children)).toEqual([
      "A",
    ]);
  });

  test("move index is the gap seen before the move, in either direction", () => {
    const store = newStore();
    const a = store.add({ title: "A", href: "a" });
    store.add({ title: "B", href: "b" });
    const c = store.add({ title: "C", href: "c" });

    expect(store.move(a.id, null, 2)).toBe(true);
    expect(titles(store.getTree())).toEqual(["B", "A", "C"]);

    expect(store.move(c.id, null, 0)).toBe(true);
    expect(titles(store.getTree())).toEqual(["C", "B", "A"]);
  });

  test("move rejects cycles and unknown ids without changing the tree", () => {
    const store = newStore();
    const outer = store.addFolder({ title: "Outer", color: "#000" });
    const inner = store.addFolder({ title: "Inner", color: "#000" }, outer.id);
    const before = JSON.stringify(store.getTree());

    expect(store.move(outer.id, outer.id, 0)).toBe(false);
    expect(store.move(outer.id, inner.id, 0)).toBe(false);
    expect(store.move("missing", null, 0)).toBe(false);
    expect(store.move(inner.id, "missing", 0)).toBe(false);
    expect(JSON.stringify(store.getTree())).toBe(before);
  });

  test("remove deletes a nested node", () => {
    const store = newStore();
    const folder = store.addFolder({ title: "F", color: "#000" });
    const item = store.add({ title: "A", href: "a" }, folder.id);
    expect(store.remove(item.id)).toBe(true);
    expect(store.find(item.id)).toBeUndefined();
    expect(store.isFavourite("a")).toBe(false);
  });

  test("isFavourite and findByHref search nested folders", () => {
    const store = newStore();
    const folder = store.addFolder({ title: "F", color: "#000" });
    store.add({ title: "A", href: "page#anchor" }, folder.id);
    expect(store.isFavourite("page#anchor")).toBe(true);
    expect(store.isFavourite("page")).toBe(false);
    expect(store.findByHref("page#anchor")?.title).toBe("A");
  });

  test.each([
    ["no storage", null],
    [
      "storage that throws",
      {
        getItem: () => {
          throw new Error("denied");
        },
        setItem: () => {
          throw new Error("quota");
        },
      },
    ],
  ])("starts empty, still works and reports changes unsaved with %s", (_name, backend) => {
    const store = createFavouritesStore({ backend });
    expect(store.getTree()).toEqual([]);
    store.add({ title: "A", href: "a" });
    expect(store.isFavourite("a")).toBe(true);
    expect(store.isSaved()).toBe(false);
  });

  test.each([
    ["corrupt", "{not json"],
    ["from a newer version", JSON.stringify({ version: 2, items: [] })],
    [
      "partly invalid",
      JSON.stringify({
        version: 1,
        items: [{ id: "a", title: "A", href: "a" }, { id: "b" }],
      }),
    ],
  ])("stored favourites that are %s survive the next change", (_name, raw) => {
    const backend = memoryBackend({ [FAVOURITES_KEY]: raw });
    newStore(backend).add({ title: "New", href: "new" });
    expect([...backend.data.values()]).toContain(raw);
  });

  test("a bad stored item is dropped without losing the rest", () => {
    const backend = memoryBackend({
      [FAVOURITES_KEY]: JSON.stringify({
        version: 1,
        items: [{ id: "a", title: "A", href: "a" }, { id: "b" }],
      }),
    });
    expect(titles(newStore(backend).getTree())).toEqual(["A"]);
  });

  test("mutations announce changes after persisting", () => {
    const backend = memoryBackend();
    const events = new EventTarget();
    const store = newStore(backend, events);
    let persistedAtEvent: unknown;
    events.addEventListener(FAVOURITES_CHANGED, () => {
      persistedAtEvent = parseFavourites(
        backend.getItem(FAVOURITES_KEY) ?? "",
      ).items;
    });
    store.add({ title: "A", href: "a" });
    expect(persistedAtEvent).toEqual([expect.objectContaining({ href: "a" })]);
  });
});

describe("parseFavourites", () => {
  test("replaces a non-hex folder colour so it cannot load a URL from inline styles", () => {
    const data = parseFavourites(
      JSON.stringify({
        version: 1,
        items: [
          {
            id: "f",
            title: "F",
            color: "url(https://tracker.example/x)",
            children: [],
          },
        ],
      }),
    );
    expect((data.items[0] as FavouriteFolder).color).toBe(
      DEFAULT_FOLDER_COLOUR,
    );
  });

  test.each([
    "\\evil.com",
    "\t/evil.com",
    "\n/evil.com",
  ])("an imported href %j cannot lead to another site", (href) => {
    const text = JSON.stringify({
      version: 1,
      items: [{ id: "a", title: "A", href }],
    });
    expect(() => parseFavourites(text)).toThrow(FavouritesFormatError);
    const origin = "https://site.example";
    expect(new URL(favouriteHrefToUrl(href, "/"), origin).origin).toBe(origin);
  });

  test.each([
    ["invalid JSON", "{"],
    ["wrong version", JSON.stringify({ version: 2, items: [] })],
    ["missing items", JSON.stringify({ version: 1 })],
    [
      "item without href",
      JSON.stringify({ version: 1, items: [{ id: "a", title: "A" }] }),
    ],
    [
      "bad node deep in a folder",
      JSON.stringify({
        version: 1,
        items: [
          {
            id: "f",
            title: "F",
            color: "#000",
            children: [{ id: "x", title: 3, href: "x" }],
          },
        ],
      }),
    ],
  ])("rejects %s", (_name, text) => {
    expect(() => parseFavourites(text)).toThrow(FavouritesFormatError);
  });
});

describe("importJson", () => {
  const exported = (build: (s: ReturnType<typeof newStore>) => void) => {
    const source = createFavouritesStore({
      backend: null,
      newId: sequentialIds("src"),
    });
    build(source);
    return source.exportJson();
  };

  test("replace swaps the whole tree", () => {
    const store = newStore();
    store.add({ title: "Old", href: "old" });
    store.importJson(
      exported((s) => s.add({ title: "New", href: "new" })),
      "replace",
    );
    expect(titles(store.getTree())).toEqual(["New"]);
  });

  test("merge skips known hrefs, merges same-titled folders and assigns fresh ids", () => {
    const store = newStore();
    const daily = store.addFolder({ title: "Daily", color: "#000" });
    store.add({ title: "Wird", href: "wird" }, daily.id);

    const text = exported((s) => {
      const f = s.addFolder({ title: "Daily", color: "#fff" });
      s.add({ title: "Wird copy", href: "wird" }, f.id);
      s.add({ title: "Ratib", href: "ratib" }, f.id);
      s.add({ title: "Home", href: "" });
    });
    store.importJson(text, "merge");

    const tree = store.getTree();
    expect(titles(tree)).toEqual(["Daily", "Home"]);
    expect(titles((tree[0] as FavouriteFolder).children)).toEqual([
      "Wird",
      "Ratib",
    ]);
    expect(JSON.stringify(tree)).not.toContain('"id":"src');
  });

  test("hrefs differing only in slashes count as the same page", () => {
    const store = newStore();
    store.add({ title: "Fajr", href: "khulasah/after-fajr" });
    store.importJson(
      exported((s) => {
        s.add({ title: "Fajr again", href: "/khulasah/after-fajr/" });
        s.add({ title: "Section", href: "/khulasah/after-fajr/#wird-3" });
      }),
      "merge",
    );
    expect(store.getTree().map((n) => (n as { href: string }).href)).toEqual([
      "khulasah/after-fajr",
      "khulasah/after-fajr#wird-3",
    ]);
  });

  test("invalid import leaves the tree untouched", () => {
    const store = newStore();
    store.add({ title: "A", href: "a" });
    expect(() => store.importJson("{}", "replace")).toThrow(
      FavouritesFormatError,
    );
    expect(titles(store.getTree())).toEqual(["A"]);
  });
});
