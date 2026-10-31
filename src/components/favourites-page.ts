/**
 * The /favourites page: browses the favourites tree one folder at a time, adds links and folders to it, and in
 * edit mode reorders, moves, renames, recolours and deletes them.
 *
 * Folder navigation, dragging, the per-node edit dialog and export/import each live in their own module so
 * this element only composes them.
 */

import { html, LitElement, nothing, svg } from "lit";
import { customElement, query, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { repeat } from "lit/directives/repeat.js";
import { styleMap } from "lit/directives/style-map.js";

import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@shoelace-style/shoelace/dist/components/color-picker/color-picker.js";
import "@shoelace-style/shoelace/dist/components/input/input.js";
import "@/components/favourites-node-dialog";
import "@/components/favourites-transfer";

import type SlButton from "@shoelace-style/shoelace/dist/components/button/button.js";
import type SlInput from "@shoelace-style/shoelace/dist/components/input/input.js";
import { FOLDER_SWATCHES } from "@/components/favourite-folders";
import { TileDrag } from "@/components/favourites-drag";
import {
  FolderNavigation,
  folderUrl,
} from "@/components/favourites-navigation";
import type { FavouritesNodeDialog } from "@/components/favourites-node-dialog";
import { favouritesPageStyles } from "@/components/favourites-page.styles";
import {
  FAVOURITES_CHANGED,
  type FavouriteFolder,
  type FavouriteNode,
  favourites,
  isFolder,
} from "@/services/favourites-store";
import { hrefToUrl, toFavouriteHref } from "@/utils/favourite-href";
import { resolveBasePath } from "@/utils/paths";
import { LifecycleRegistry } from "@/utils/storage";

/** Bootstrap Icons "folder-fill", "grip-vertical" and "pencil", inlined like the stars in favourite-star.ts. */
const FOLDER_ICON = svg`<path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3m-8.322.12q.322-.119.684-.12h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981z"/>`;
const GRIP_ICON = svg`<path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>`;
const PENCIL_ICON = svg`<path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>`;

interface KnownPage {
  path: string;
  title: string;
}

/** Percent-escapes are undone (malformed ones left as they are) so non-ASCII anchors read as text. */
function decodeAnchor(anchor: string): string {
  try {
    return decodeURIComponent(anchor);
  } catch {
    return anchor;
  }
}

/**
 * Numbered entries have ids ending in their number (e.g. "wird-al-latif-3"), which reads better than the raw
 * anchor; section anchors are slugs of their heading, so de-slugging them gets close to the original title.
 */
function defaultTitle(pageTitle: string, href: string): string {
  const anchor = decodeAnchor(href.split("#")[1] ?? "");
  if (!anchor) return pageTitle;
  const number = anchor.match(/-(\d+)$/)?.[1];
  return `${pageTitle} · ${number ?? anchor.replaceAll("-", " ")}`;
}

@customElement("kp-favourites-page")
export class FavouritesPage extends LitElement {
  @state() private _tree: FavouriteNode[] = [];
  @state() private _link = "";
  @state() private _linkError = "";
  @state() private _creatingFolder = false;
  @state() private _newFolderTitle = "";
  @state() private _newFolderColor: string = FOLDER_SWATCHES[0];
  @state() private _editing = false;

  @query(".new-folder-name") private _newFolderInput?: SlInput;
  @query(".toggle-new-folder") private _newFolderToggle?: SlButton;
  @query("kp-favourites-node-dialog")
  private _nodeDialog?: FavouritesNodeDialog;
  @query("h1") private _heading?: HTMLElement;

  private _knownPages = new Map<string, string>();
  private _trail: FavouriteFolder[] = [];
  /** The folder whose contents are shown (null = top level), resolved once per update. */
  private _levelId: string | null = null;
  /** Position of the tile whose edit dialog is open, for placing focus once its tile may be gone. */
  private _editedIndex = 0;
  private _lifecycle = new LifecycleRegistry<"favouritesChanged">();
  private _navigation = new FolderNavigation(this, () => {
    this._linkError = "";
    this._creatingFolder = false;
  });
  private _drag = new TileDrag(this, {
    tiles: () => [
      ...this.renderRoot.querySelectorAll<HTMLElement>(".tiles > li"),
    ],
    onDrop: (id, gap) => favourites.move(id, this._levelId, gap),
  });

  static styles = favouritesPageStyles;

  connectedCallback() {
    super.connectedCallback();
    this._knownPages = this._readKnownPages();
    this._tree = favourites.getTree();

    const onChanged = () => {
      this._drag.abort();
      this._tree = favourites.getTree();
    };
    this._lifecycle.register("favouritesChanged", {
      setup: () => window.addEventListener(FAVOURITES_CHANGED, onChanged),
      cleanup: () => window.removeEventListener(FAVOURITES_CHANGED, onChanged),
    });
  }

  disconnectedCallback() {
    this._lifecycle.cleanupAll();
    super.disconnectedCallback();
  }

  /** FavouritesSection.astro inlines the site's pages as JSON in the light DOM. */
  private _readKnownPages(): Map<string, string> {
    const json = this.querySelector('script[type="application/json"]');
    try {
      const pages = JSON.parse(json?.textContent ?? "[]") as KnownPage[];
      return new Map(pages.map(({ path, title }) => [path, title]));
    } catch {
      return new Map();
    }
  }

  willUpdate() {
    this._trail = this._navigation.resolve(this._tree);
    this._levelId = this._trail.at(-1)?.id ?? null;
    // With nothing left there is nothing to edit, and the toggle that would end edit mode is hidden.
    if (!this._tree.length) this._editing = false;
  }

  private _openFolder(event: MouseEvent, id: string | null) {
    this._navigation.open(event, id);
  }

  /** Cleared and re-rendered first, so a repeat of the same mistake is announced again rather than ignored. */
  private async _showLinkError(message: string) {
    this._linkError = "";
    await this.updateComplete;
    this._linkError = message;
  }

  private async _setCreatingFolder(creating: boolean) {
    this._creatingFolder = creating;
    await this.updateComplete;
    if (creating) this._newFolderInput?.focus();
    else this._newFolderToggle?.focus();
  }

  private _addLink(event: Event) {
    event.preventDefault();
    const href = toFavouriteHref(this._link, {
      origin: window.location.origin,
      base: resolveBasePath(),
    });
    const pageTitle =
      href === null ? undefined : this._knownPages.get(href.split("#")[0]);
    if (href === null || pageTitle === undefined) {
      void this._showLinkError("That link is not a page on this site.");
      return;
    }
    if (favourites.isFavourite(href)) {
      void this._showLinkError("That link is already in your favourites.");
      return;
    }
    favourites.add(
      { title: defaultTitle(pageTitle, href), href },
      this._levelId,
    );
    this._link = "";
    this._linkError = "";
  }

  private _addFolder(event: Event) {
    event.preventDefault();
    const title = this._newFolderTitle.trim();
    if (!title) return;
    favourites.addFolder({ title, color: this._newFolderColor }, this._levelId);
    void this._setCreatingFolder(false);
    this._newFolderTitle = "";
    this._newFolderColor = FOLDER_SWATCHES[0];
  }

  /** Arrow keys on a handle give keyboard users the same reordering as dragging. */
  private async _onHandleKey(
    event: KeyboardEvent,
    id: string,
    index: number,
    count: number,
  ) {
    if (event.key === "Escape" && this._drag.active) {
      event.preventDefault();
      this._drag.abort();
      return;
    }
    let gap: number | null = null;
    if (event.key === "ArrowUp" && index > 0) gap = index - 1;
    if (event.key === "ArrowDown" && index < count - 1) gap = index + 2;
    if (gap === null) return;
    event.preventDefault();
    favourites.move(id, this._levelId, gap);
    // Reordering moves the handle's element, which drops focus, so it is put back on the moved tile.
    await this.updateComplete;
    this.renderRoot
      .querySelector<HTMLElement>(`[data-handle="${CSS.escape(id)}"]`)
      ?.focus();
  }

  private _editNode(node: FavouriteNode, index: number) {
    this._editedIndex = index;
    this._nodeDialog?.show(node);
  }

  /**
   * Focus goes back to the edited tile's button. A moved or deleted node takes its tile with it, so the tile
   * that slid into its place (or the last one, or the heading when the level is empty) gets focus instead.
   */
  private async _onNodeDialogClosed() {
    await this.updateComplete;
    const editButtons = [
      ...this.renderRoot.querySelectorAll<HTMLElement>(".edit-button"),
    ];
    const next =
      editButtons[Math.min(this._editedIndex, editButtons.length - 1)];
    if (next) next.focus();
    else this._heading?.focus();
  }

  private _renderCrumbs(trail: FavouriteFolder[]) {
    if (!trail.length) return nothing;
    const ancestors = trail.slice(0, -1);
    const current = trail[trail.length - 1];
    return html`
      <nav class="crumbs" aria-label="Folders">
        <ol>
          <li>
            <a
              href=${folderUrl(null)}
              @click=${(e: MouseEvent) => this._openFolder(e, null)}
              >Favourites</a
            >
          </li>
          ${ancestors.map(
            (folder) => html`
              <li>
                <a
                  href=${folderUrl(folder.id)}
                  @click=${(e: MouseEvent) => this._openFolder(e, folder.id)}
                  >${folder.title}</a
                >
              </li>
            `,
          )}
          <li><span aria-current="page">${current.title}</span></li>
        </ol>
      </nav>
    `;
  }

  private _renderTile(node: FavouriteNode) {
    if (isFolder(node)) {
      return html`
        <a
          class="tile folder"
          href=${folderUrl(node.id)}
          style=${styleMap({ "--folder-color": node.color })}
          @click=${(e: MouseEvent) => this._openFolder(e, node.id)}
        >
          <svg viewBox="0 0 16 16" aria-hidden="true">${FOLDER_ICON}</svg>
          <span>${node.title}</span>
        </a>
      `;
    }
    return html`<a class="tile" href=${hrefToUrl(node.href)}>${node.title}</a>`;
  }

  /** Not a link while editing, so a slip of the finger while rearranging never navigates away. */
  private _renderEditableTile(
    node: FavouriteNode,
    index: number,
    count: number,
  ) {
    const folder = isFolder(node);
    return html`
      <div
        class=${classMap({ tile: true, editable: true, folder })}
        style=${styleMap(folder ? { "--folder-color": node.color } : {})}
      >
        <button
          type="button"
          class="tile-button handle"
          data-handle=${node.id}
          aria-label=${`Reorder ${node.title}`}
          title="Drag, or use the arrow keys, to reorder"
          @pointerdown=${(e: PointerEvent) => this._drag.start(e, node.id, index)}
          @pointermove=${(e: PointerEvent) => this._drag.move(e)}
          @pointerup=${(e: PointerEvent) => this._drag.end(e)}
          @pointercancel=${(e: PointerEvent) => this._drag.cancel(e)}
          @lostpointercapture=${(e: PointerEvent) => this._drag.cancel(e)}
          @keydown=${(e: KeyboardEvent) =>
            this._onHandleKey(e, node.id, index, count)}
        >
          <svg viewBox="0 0 16 16" aria-hidden="true">${GRIP_ICON}</svg>
        </button>
        <span class="label">
          ${
            folder
              ? html`<svg viewBox="0 0 16 16" aria-hidden="true">
                  ${FOLDER_ICON}
                </svg>`
              : nothing
          }
          <span>${node.title}</span>
        </span>
        <button
          type="button"
          class="tile-button edit-button"
          aria-label=${`Edit ${node.title}`}
          aria-haspopup="dialog"
          @click=${() => this._editNode(node, index)}
        >
          <svg viewBox="0 0 16 16" aria-hidden="true">${PENCIL_ICON}</svg>
        </button>
      </div>
    `;
  }

  private _renderTiles(nodes: FavouriteNode[], inFolder: boolean) {
    if (!nodes.length) {
      return html`
        <p class="empty">
          ${
            inFolder
              ? "This folder is empty."
              : "No favourites yet. Tap the star beside a page, section or numbered entry to save it here, or paste a link below."
          }
        </p>
      `;
    }
    const drag = this._drag;
    const gap = drag.dropGap;
    const last = nodes.length - 1;
    return html`
      <ul class=${classMap({ tiles: true, dragging: drag.draggingId !== null })}>
        ${repeat(
          nodes,
          (node) => node.id,
          (node, index) => {
            const dragged = node.id === drag.draggingId;
            return html`
              <li
                class=${classMap({
                  "drop-before": gap === index,
                  "drop-after": gap === nodes.length && index === last,
                  dragged,
                })}
                style=${styleMap(
                  dragged ? { transform: `translateY(${drag.offsetY}px)` } : {},
                )}
              >
                ${
                  this._editing
                    ? this._renderEditableTile(node, index, nodes.length)
                    : this._renderTile(node)
                }
              </li>
            `;
          },
        )}
      </ul>
    `;
  }

  private _renderEditToggle() {
    if (!this._tree.length) return nothing;
    return html`
      <sl-button
        variant=${this._editing ? "primary" : "default"}
        @click=${() => {
          this._editing = !this._editing;
        }}
        >${this._editing ? "Done" : "Edit"}</sl-button
      >
    `;
  }

  private _renderAddLink() {
    return html`
      <form @submit=${this._addLink}>
        <div class="row">
          <sl-input
            label="Add a link"
            placeholder="Paste a link to a page"
            inputmode="url"
            autocomplete="off"
            .value=${this._link}
            @sl-input=${(e: Event) => {
              this._link = (e.target as HTMLInputElement).value;
              this._linkError = "";
            }}
          >
            ${
              this._linkError
                ? html`<span slot="help-text" class="error" role="alert"
                    >${this._linkError}</span
                  >`
                : nothing
            }
          </sl-input>
          <sl-button type="submit" variant="primary">Add</sl-button>
        </div>
      </form>
    `;
  }

  private _renderNewFolder() {
    if (!this._creatingFolder) {
      return html`
        <sl-button
          class="toggle-new-folder"
          @click=${() => this._setCreatingFolder(true)}
        >
          New folder
        </sl-button>
      `;
    }
    return html`
      <form class="row" @submit=${this._addFolder}>
        <sl-input
          class="new-folder-name"
          label="New folder name"
          required
          .value=${this._newFolderTitle}
          @sl-input=${(e: Event) => {
            this._newFolderTitle = (e.target as HTMLInputElement).value;
          }}
        ></sl-input>
        <sl-color-picker
          label="Folder colour"
          hoist
          no-format-toggle
          .swatches=${[...FOLDER_SWATCHES]}
          .value=${this._newFolderColor}
          @sl-change=${(e: Event) => {
            this._newFolderColor = (e.target as HTMLInputElement).value;
          }}
        ></sl-color-picker>
        <sl-button type="submit" variant="primary">Create</sl-button>
        <sl-button @click=${() => this._setCreatingFolder(false)}>
          Cancel
        </sl-button>
      </form>
    `;
  }

  render() {
    const trail = this._trail;
    const current = trail.at(-1) ?? null;
    return html`
      ${this._renderCrumbs(trail)}
      <h1 tabindex="-1">${current?.title ?? "Favourites"}</h1>
      ${this._renderTiles(current ? current.children : this._tree, current !== null)}
      <div class="tools">
        ${this._renderAddLink()} ${this._renderNewFolder()}
        <div class="actions">
          ${this._renderEditToggle()}
          <kp-favourites-transfer></kp-favourites-transfer>
        </div>
      </div>
      <kp-favourites-node-dialog
        @kp-node-dialog-closed=${this._onNodeDialogClosed}
      ></kp-favourites-node-dialog>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-favourites-page": FavouritesPage;
  }
}
