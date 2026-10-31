/**
 * Favourites: a user-ordered tree of page links and colour-coded folders, kept in localStorage.
 *
 * Every read returns a deep copy, so UI code can hold or tweak what it gets without corrupting the store;
 * the tree is small enough that copying is cheaper than the bugs shared references would invite.
 */

import {
  isSiteFavouriteHref,
  normaliseFavouriteHref,
} from "@/utils/favourite-href";

export const FAVOURITES_KEY = "kp-favourites";
export const FAVOURITES_CHANGED = "favourites-changed";
export const DEFAULT_FOLDER_COLOUR = "#7aa8a5";

/**
 * Folder colours end up in inline styles, so only plain hex is trusted: anything else in an imported file,
 * such as url(...), could make the browser fetch a third-party URL whenever the folder is drawn.
 */
const HEX_COLOUR = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;

export interface FavouriteItem {
  id: string;
  title: string;
  /** Base-relative page path plus optional "#anchor"; see src/utils/favourite-href.ts. */
  href: string;
}

export interface FavouriteFolder {
  id: string;
  title: string;
  color: string;
  children: FavouriteNode[];
}

export type FavouriteNode = FavouriteItem | FavouriteFolder;

export interface FavouritesData {
  version: 1;
  items: FavouriteNode[];
}

export type ImportMode = "merge" | "replace";

export type FavouritesBackend = Pick<Storage, "getItem" | "setItem">;

export interface FavouritesStoreOptions {
  /** null keeps favourites in memory only, e.g. when storage is blocked. */
  backend?: FavouritesBackend | null;
  events?: EventTarget;
  newId?: () => string;
}

export class FavouritesFormatError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "FavouritesFormatError";
  }
}

export function isFolder(node: FavouriteNode): node is FavouriteFolder {
  return "children" in node;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/** When given, a bad node is reported and dropped instead of failing the whole document. */
type OnInvalidNode = (error: FavouritesFormatError) => void;

function validateNodes(
  value: unknown,
  where: string,
  onInvalid?: OnInvalidNode,
): FavouriteNode[] {
  if (!Array.isArray(value)) {
    throw new FavouritesFormatError(`${where} must be a list.`);
  }
  const nodes: FavouriteNode[] = [];
  for (const [index, node] of value.entries()) {
    try {
      nodes.push(validateNode(node, `${where}[${index}]`, onInvalid));
    } catch (error) {
      if (!(onInvalid && error instanceof FavouritesFormatError)) throw error;
      onInvalid(error);
    }
  }
  return nodes;
}

function validateNode(
  value: unknown,
  where: string,
  onInvalid?: OnInvalidNode,
): FavouriteNode {
  if (!isRecord(value)) {
    throw new FavouritesFormatError(`${where} must be an object.`);
  }
  const { id, title } = value;
  if (typeof id !== "string" || !id) {
    throw new FavouritesFormatError(`${where} is missing its id.`);
  }
  if (typeof title !== "string") {
    throw new FavouritesFormatError(`${where} must have a text title.`);
  }
  if ("children" in value) {
    if (typeof value.color !== "string") {
      throw new FavouritesFormatError(`${where} is a folder without a colour.`);
    }
    return {
      id,
      title,
      // A bad colour is cosmetic, so it falls back rather than losing the folder and everything in it.
      color: HEX_COLOUR.test(value.color) ? value.color : DEFAULT_FOLDER_COLOUR,
      children: validateNodes(value.children, `${where}.children`, onInvalid),
    };
  }
  if (typeof value.href !== "string") {
    throw new FavouritesFormatError(`${where} is a favourite without a link.`);
  }
  const href = normaliseFavouriteHref(value.href);
  if (!isSiteFavouriteHref(href)) {
    throw new FavouritesFormatError(`${where} links outside this site.`);
  }
  return { id, title, href };
}

/** Validates untrusted JSON (imports, storage) and keeps only known fields. */
export function parseFavourites(
  text: string,
  onInvalid?: OnInvalidNode,
): FavouritesData {
  let raw: unknown;
  try {
    raw = JSON.parse(text);
  } catch {
    throw new FavouritesFormatError("The file is not valid JSON.");
  }
  if (!isRecord(raw)) {
    throw new FavouritesFormatError("The file is not a favourites export.");
  }
  if (raw.version !== 1) {
    throw new FavouritesFormatError(
      `Unsupported favourites version: ${String(raw.version)}.`,
    );
  }
  return { version: 1, items: validateNodes(raw.items, "items", onInvalid) };
}

function defaultNewId(): string {
  return globalThis.crypto?.randomUUID
    ? globalThis.crypto.randomUUID()
    : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}

interface NodeLocation {
  siblings: FavouriteNode[];
  index: number;
  node: FavouriteNode;
}

function locate(nodes: FavouriteNode[], id: string): NodeLocation | undefined {
  for (const [index, node] of nodes.entries()) {
    if (node.id === id) return { siblings: nodes, index, node };
    if (isFolder(node)) {
      const found = locate(node.children, id);
      if (found) return found;
    }
  }
  return undefined;
}

function* walk(nodes: FavouriteNode[]): Generator<FavouriteNode> {
  for (const node of nodes) {
    yield node;
    if (isFolder(node)) yield* walk(node.children);
  }
}

function findItemByHref(
  nodes: FavouriteNode[],
  href: string,
): FavouriteItem | undefined {
  for (const node of walk(nodes)) {
    if (!isFolder(node) && node.href === href) return node;
  }
  return undefined;
}

function contains(folder: FavouriteFolder, id: string): boolean {
  return locate(folder.children, id) !== undefined;
}

function clone<T>(value: T): T {
  return structuredClone(value);
}

export function createFavouritesStore({
  backend = null,
  events = new EventTarget(),
  newId = defaultNewId,
}: FavouritesStoreOptions = {}) {
  /** Cleared when stored favourites could not be read in full and could not be backed up either. */
  let writable = true;
  let saved = true;
  let tree: FavouriteNode[] = load();

  /**
   * Stored favourites that cannot be read in full (corrupt, from a newer version, or with a bad item) are
   * copied aside before anything is written, because the next change overwrites the key with what was read.
   */
  function load(): FavouriteNode[] {
    writable = true;
    let raw: string | null | undefined;
    try {
      raw = backend?.getItem(FAVOURITES_KEY);
    } catch {
      return [];
    }
    if (!raw) return [];
    let incomplete = false;
    let items: FavouriteNode[] = [];
    try {
      items = parseFavourites(raw, () => {
        incomplete = true;
      }).items;
    } catch {
      incomplete = true;
    }
    if (incomplete) writable = backUp(raw);
    return items;
  }

  function backUp(raw: string): boolean {
    try {
      backend?.setItem(`${FAVOURITES_KEY}.backup-${Date.now()}`, raw);
      return true;
    } catch {
      return false;
    }
  }

  function commit(): void {
    saved = false;
    if (backend && writable) {
      try {
        backend.setItem(FAVOURITES_KEY, exportJson());
        saved = true;
      } catch {
        // Quota or privacy-mode failures keep the change in memory for this page view rather than losing it.
      }
    }
    events.dispatchEvent(new Event(FAVOURITES_CHANGED));
  }

  /**
   * An unknown parent (e.g. deleted in another tab), or a parentId naming an item rather than a folder,
   * falls back to the top level so the user's addition survives.
   */
  function childrenOf(parentId?: string | null): FavouriteNode[] {
    if (parentId == null) return tree;
    const found = locate(tree, parentId);
    return found && isFolder(found.node) ? found.node.children : tree;
  }

  function withFreshIds(node: FavouriteNode): FavouriteNode {
    return isFolder(node)
      ? { ...node, id: newId(), children: node.children.map(withFreshIds) }
      : { ...node, id: newId() };
  }

  function mergeInto(
    target: FavouriteNode[],
    incoming: FavouriteNode[],
    knownHrefs: Set<string>,
  ): void {
    for (const node of incoming) {
      if (!isFolder(node)) {
        if (knownHrefs.has(node.href)) continue;
        knownHrefs.add(node.href);
        target.push({ id: newId(), title: node.title, href: node.href });
        continue;
      }
      let folder = target.find(
        (existing): existing is FavouriteFolder =>
          isFolder(existing) && existing.title === node.title,
      );
      if (!folder) {
        folder = {
          id: newId(),
          title: node.title,
          color: node.color,
          children: [],
        };
        target.push(folder);
      }
      mergeInto(folder.children, node.children, knownHrefs);
    }
  }

  function exportJson(): string {
    const data: FavouritesData = { version: 1, items: tree };
    return JSON.stringify(data, null, 2);
  }

  return {
    getTree(): FavouriteNode[] {
      return clone(tree);
    },

    /** False when the last change could not be stored, so it lasts only until the page is closed. */
    isSaved(): boolean {
      return saved;
    },

    /** An unknown parent counts as empty. */
    childCount(parentId: string | null): number {
      if (parentId === null) return tree.length;
      const found = locate(tree, parentId);
      return found && isFolder(found.node) ? found.node.children.length : 0;
    },

    add(
      item: { title: string; href: string },
      parentId?: string | null,
    ): FavouriteItem {
      const created: FavouriteItem = {
        id: newId(),
        title: item.title,
        href: item.href,
      };
      childrenOf(parentId).push(created);
      commit();
      return clone(created);
    },

    addFolder(
      folder: { title: string; color: string },
      parentId?: string | null,
    ): FavouriteFolder {
      const created: FavouriteFolder = {
        id: newId(),
        title: folder.title,
        color: folder.color,
        children: [],
      };
      childrenOf(parentId).push(created);
      commit();
      return clone(created);
    },

    remove(id: string): boolean {
      const found = locate(tree, id);
      if (!found) return false;
      found.siblings.splice(found.index, 1);
      commit();
      return true;
    },

    /**
     * Index is the drop gap in the destination list as the user sees it before the move (0 = before the
     * first item, length = after the last), so a drag-and-drop UI can pass the gap it drew without
     * compensating for the node leaving its old place.
     */
    move(id: string, parentId: string | null, index: number): boolean {
      const found = locate(tree, id);
      if (!found) return false;
      let destination = tree;
      if (parentId !== null) {
        const parent = locate(tree, parentId);
        if (!parent || !isFolder(parent.node)) return false;
        if (
          isFolder(found.node) &&
          (parent.node.id === id || contains(found.node, parentId))
        ) {
          return false;
        }
        destination = parent.node.children;
      }
      const sameListDownwards =
        destination === found.siblings && index > found.index;
      found.siblings.splice(found.index, 1);
      const target = sameListDownwards ? index - 1 : index;
      const clamped = Math.max(0, Math.min(target, destination.length));
      destination.splice(clamped, 0, found.node);
      commit();
      return true;
    },

    /** Colour only applies to folders and is ignored for items. */
    update(id: string, changes: { title?: string; color?: string }): boolean {
      const found = locate(tree, id);
      if (!found) return false;
      if (changes.title !== undefined) found.node.title = changes.title;
      if (changes.color !== undefined && isFolder(found.node)) {
        found.node.color = changes.color;
      }
      commit();
      return true;
    },

    find(id: string): FavouriteNode | undefined {
      const found = locate(tree, id);
      return found && clone(found.node);
    },

    findByHref(href: string): FavouriteItem | undefined {
      const found = findItemByHref(tree, href);
      return found && clone(found);
    },

    isFavourite(href: string): boolean {
      return findItemByHref(tree, href) !== undefined;
    },

    /** One copy of the tree is shared by every entry, instead of a copy of each folder's whole subtree. */
    folders(): { folder: FavouriteFolder; depth: number }[] {
      const result: { folder: FavouriteFolder; depth: number }[] = [];
      const visit = (nodes: FavouriteNode[], depth: number) => {
        for (const node of nodes) {
          if (!isFolder(node)) continue;
          result.push({ folder: node, depth });
          visit(node.children, depth + 1);
        }
      };
      visit(clone(tree), 0);
      return result;
    },

    exportJson,

    /**
     * Throws FavouritesFormatError before touching the tree, so a bad file never loses existing favourites.
     * Imported nodes always get fresh ids so they cannot collide with ids already in use.
     */
    importJson(text: string, mode: ImportMode): void {
      const incoming = parseFavourites(text).items;
      if (mode === "replace") {
        tree = incoming.map(withFreshIds);
      } else {
        const knownHrefs = new Set<string>();
        for (const node of walk(tree)) {
          if (!isFolder(node)) knownHrefs.add(node.href);
        }
        mergeInto(tree, incoming, knownHrefs);
      }
      commit();
    },

    /** Re-reads storage after another tab changed it. */
    reload(): void {
      tree = load();
      events.dispatchEvent(new Event(FAVOURITES_CHANGED));
    },
  };
}

export type FavouritesStore = ReturnType<typeof createFavouritesStore>;

/** Even reading the localStorage global throws SecurityError where storage is blocked, so all of it is guarded. */
function browserStorage(): FavouritesBackend | null {
  try {
    const storage = globalThis.localStorage;
    if (!storage) return null;
    const probeKey = "__storage_test__";
    storage.setItem(probeKey, probeKey);
    storage.removeItem(probeKey);
    return storage;
  } catch {
    return null;
  }
}

const hasWindow = typeof window !== "undefined";

export const favourites = createFavouritesStore({
  backend: browserStorage(),
  events: hasWindow ? window : undefined,
});

if (hasWindow) {
  window.addEventListener("storage", (event) => {
    // A null key means another tab cleared all storage.
    if (event.key === FAVOURITES_KEY || event.key === null) {
      favourites.reload();
    }
  });
}
