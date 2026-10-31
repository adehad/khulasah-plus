/**
 * The /favourites page: browses the favourites tree one folder at a time and adds links and folders to it.
 */

import { css, html, LitElement, nothing, svg } from "lit";
import { customElement, query, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@shoelace-style/shoelace/dist/components/color-picker/color-picker.js";
import "@shoelace-style/shoelace/dist/components/input/input.js";

import type SlButton from "@shoelace-style/shoelace/dist/components/button/button.js";
import type SlInput from "@shoelace-style/shoelace/dist/components/input/input.js";
import { FOLDER_SWATCHES } from "@/components/favourite-dialog";
import {
  FolderNavigation,
  folderUrl,
} from "@/components/favourites-navigation";
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

/** Bootstrap Icons "folder-fill", inlined for the same reason as the star icons in favourite-star.ts. */
const FOLDER_ICON = svg`<path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3m-8.322.12q.322-.119.684-.12h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981z"/>`;

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

  @query(".new-folder-name") private _newFolderInput?: SlInput;
  @query(".toggle-new-folder") private _newFolderToggle?: SlButton;

  private _knownPages = new Map<string, string>();
  private _trail: FavouriteFolder[] = [];
  private _lifecycle = new LifecycleRegistry<"favouritesChanged">();
  private _navigation = new FolderNavigation(this, () => {
    this._linkError = "";
    this._creatingFolder = false;
  });

  static styles = css`
    :host {
      display: block;
    }

    /* Modest because the header breadcrumb already names the page; it mainly gives the folder a heading */
    h1 {
      margin: 8px;
      font-size: var(--sl-font-size-large);
      font-weight: var(--sl-font-weight-semibold);
      text-align: center;
    }

    .crumbs ol {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--sl-spacing-2x-small);
      margin: 8px;
      padding: 0;
      list-style: none;
    }

    .crumbs li:not(:last-child)::after {
      content: "/";
      margin-inline-start: var(--sl-spacing-2x-small);
      color: var(--sl-color-neutral-500);
    }

    .crumbs a {
      color: var(--sl-color-primary-700);
    }

    .crumbs [aria-current] {
      font-weight: var(--sl-font-weight-semibold);
    }

    /* NavGrid's 8px tile margins collapse to an 8px gap; matching it makes this page read like the other menus */
    .tiles {
      display: grid;
      gap: 8px;
      margin: 0;
      padding: 8px;
      list-style: none;
    }

    .tile {
      box-sizing: border-box;
      height: 100%;
      padding: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: var(--sl-spacing-x-small);
      text-align: center;
      background-color: var(--sl-color-primary-100);
      color: var(--sl-color-neutral-950);
      text-decoration: none;
      border-radius: 4px;
      transition: background-color 0.2s;
    }

    .tile:hover {
      background-color: var(--sl-color-primary-200);
    }

    .tile:focus-visible {
      outline: var(--sl-focus-ring);
      outline-offset: 2px;
    }

    /*
     * The accent is mixed into the page background rather than used solid, so neutral text stays readable on
     * any user-picked colour in both themes; the solid colour is kept for the icon and edge.
     */
    .folder {
      background-color: color-mix(
        in srgb,
        var(--folder-color) 28%,
        var(--sl-color-neutral-0)
      );
      border-inline-start: 4px solid var(--folder-color);
    }

    .folder:hover {
      background-color: color-mix(
        in srgb,
        var(--folder-color) 42%,
        var(--sl-color-neutral-0)
      );
    }

    .folder svg {
      flex: none;
      width: 1.25rem;
      height: 1.25rem;
      fill: var(--folder-color);
    }

    .empty {
      margin: 16px 8px;
      text-align: center;
      color: var(--sl-color-neutral-700);
    }

    .tools {
      display: flex;
      flex-direction: column;
      gap: var(--sl-spacing-medium);
      margin: var(--sl-spacing-large) 8px;
    }

    .row {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
      gap: var(--sl-spacing-small);
    }

    /* The basis lets the controls beside a field drop to their own line on phones instead of squashing it */
    .row sl-input {
      flex: 1 1 14rem;
      min-width: 0;
    }

    .error {
      color: var(--sl-color-danger-600);
      font-size: var(--sl-font-size-small);
    }

    .toggle-new-folder {
      align-self: flex-start;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this._knownPages = this._readKnownPages();
    this._tree = favourites.getTree();

    const onChanged = () => {
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

  private _addLink(event: Event, parentId: string | null) {
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
    favourites.add({ title: defaultTitle(pageTitle, href), href }, parentId);
    this._link = "";
    this._linkError = "";
  }

  private _addFolder(event: Event, parentId: string | null) {
    event.preventDefault();
    const title = this._newFolderTitle.trim();
    if (!title) return;
    favourites.addFolder({ title, color: this._newFolderColor }, parentId);
    void this._setCreatingFolder(false);
    this._newFolderTitle = "";
    this._newFolderColor = FOLDER_SWATCHES[0];
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
    return html`
      <ul class="tiles">
        ${nodes.map((node) => html`<li>${this._renderTile(node)}</li>`)}
      </ul>
    `;
  }

  private _renderAddLink(parentId: string | null) {
    return html`
      <form @submit=${(e: Event) => this._addLink(e, parentId)}>
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

  private _renderNewFolder(parentId: string | null) {
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
      <form class="row" @submit=${(e: Event) => this._addFolder(e, parentId)}>
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
    const current = trail.length ? trail[trail.length - 1] : null;
    const nodes = current ? current.children : this._tree;
    const parentId = current?.id ?? null;
    return html`
      ${this._renderCrumbs(trail)}
      <h1>${current?.title ?? "Favourites"}</h1>
      ${this._renderTiles(nodes, current !== null)}
      <div class="tools">
        ${this._renderAddLink(parentId)} ${this._renderNewFolder(parentId)}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-favourites-page": FavouritesPage;
  }
}
