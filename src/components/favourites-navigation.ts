/**
 * Which favourites folder is being viewed. It lives in the URL (?folder=<id>) so it survives reloads and the
 * back button, but moving between folders is a history push rather than a page load: the whole tree is already
 * in memory.
 */

import type { ReactiveController, ReactiveControllerHost } from "lit";
import {
  type FavouriteFolder,
  type FavouriteNode,
  isFolder,
} from "@/services/favourites-store";

const FOLDER_PARAM = "folder";

/** Empty for the top level and for ids that no longer exist. */
export function folderTrail(
  nodes: FavouriteNode[],
  id: string | null,
): FavouriteFolder[] {
  if (id === null) return [];
  for (const node of nodes) {
    if (!isFolder(node)) continue;
    if (node.id === id) return [node];
    const below = folderTrail(node.children, id);
    if (below.length) return [node, ...below];
  }
  return [];
}

function folderIdFromLocation(): string | null {
  return new URLSearchParams(window.location.search).get(FOLDER_PARAM);
}

export function folderUrl(id: string | null): string {
  const url = new URL(window.location.href);
  url.hash = "";
  if (id === null) url.searchParams.delete(FOLDER_PARAM);
  else url.searchParams.set(FOLDER_PARAM, id);
  return `${url.pathname}${url.search}`;
}

/** Modified clicks keep the browser's open-in-new-tab behaviour. */
function isPlainClick(event: MouseEvent): boolean {
  return (
    !event.defaultPrevented &&
    event.button === 0 &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey
  );
}

export class FolderNavigation implements ReactiveController {
  private _folderId: string | null = null;

  constructor(
    private readonly _host: ReactiveControllerHost,
    /** Runs whenever the viewed folder changes, so the host can drop state that belonged to the old folder. */
    private readonly _onShow: () => void,
  ) {
    _host.addController(this);
  }

  hostConnected() {
    this._folderId = folderIdFromLocation();
    window.addEventListener("popstate", this._onPopState);
  }

  hostDisconnected() {
    window.removeEventListener("popstate", this._onPopState);
  }

  private _onPopState = () => this._show(folderIdFromLocation());

  private _show(id: string | null) {
    this._folderId = id;
    this._onShow();
    this._host.requestUpdate();
  }

  /** Click handler for links to a folder (null = top level). */
  open(event: MouseEvent, id: string | null) {
    if (!isPlainClick(event)) return;
    event.preventDefault();
    history.pushState(null, "", folderUrl(id));
    this._show(id);
  }

  /**
   * A folder deleted since the URL was made (or in another tab) falls back to the top level, and the URL is
   * corrected in place so reloading or sharing it doesn't point at the missing folder again.
   */
  resolve(tree: FavouriteNode[]): FavouriteFolder[] {
    const trail = folderTrail(tree, this._folderId);
    if (this._folderId !== null && !trail.length) {
      this._folderId = null;
      history.replaceState(history.state, "", folderUrl(null));
    }
    return trail;
  }
}
