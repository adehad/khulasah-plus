/**
 * The one add/edit dialog for favourites; every kp-favourite-star opens it through FAVOURITE_OPEN.
 * A single instance lives in BaseLayout so hundreds of stars don't each carry a dialog.
 */

import { css, html, LitElement, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@shoelace-style/shoelace/dist/components/color-picker/color-picker.js";
import "@shoelace-style/shoelace/dist/components/dialog/dialog.js";
import "@shoelace-style/shoelace/dist/components/input/input.js";
import "@shoelace-style/shoelace/dist/components/option/option.js";
import "@shoelace-style/shoelace/dist/components/select/select.js";

import {
  FAVOURITE_OPEN,
  type FavouriteOpenDetail,
} from "@/components/favourite-star";
import {
  type FavouriteFolder,
  favourites,
  isFolder,
} from "@/services/favourites-store";
import { LifecycleRegistry } from "@/utils/storage";

/** The first swatch is the default colour for new folders. */
export const FOLDER_SWATCHES = [
  "#7aa8a5",
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#ec4899",
  "#64748b",
] as const;

/** sl-select treats an empty value as "nothing selected", so the top level needs a real option value. */
const TOP_LEVEL = "top-level";

@customElement("kp-favourite-dialog")
export class FavouriteDialog extends LitElement {
  @state() private _open = false;
  @state() private _href = "";
  @state() private _title = "";
  @state() private _existingId: string | null = null;
  @state() private _parentId = TOP_LEVEL;
  @state() private _folders: { folder: FavouriteFolder; depth: number }[] = [];
  @state() private _creatingFolder = false;
  @state() private _newFolderTitle = "";
  @state() private _newFolderColor: string = FOLDER_SWATCHES[0];

  private _originalParentId = TOP_LEVEL;
  private _hiding = false;
  private _reopenAfterHide = false;
  private _lifecycle = new LifecycleRegistry<"openRequests">();

  static styles = css`
    form {
      display: flex;
      flex-direction: column;
      gap: var(--sl-spacing-medium);
    }

    .new-folder {
      display: flex;
      align-items: flex-end;
      gap: var(--sl-spacing-small);
    }

    .new-folder sl-input {
      flex: 1;
    }

    .folder-swatch {
      display: inline-block;
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 50%;
    }

    .toggle-new-folder {
      align-self: flex-start;
    }

    .footer {
      display: flex;
      justify-content: flex-end;
      gap: var(--sl-spacing-small);
    }

    .remove {
      margin-inline-end: auto;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    const onOpen = (event: CustomEvent<FavouriteOpenDetail>) =>
      this._show(event.detail);
    this._lifecycle.register("openRequests", {
      setup: () => window.addEventListener(FAVOURITE_OPEN, onOpen),
      cleanup: () => window.removeEventListener(FAVOURITE_OPEN, onOpen),
    });
  }

  disconnectedCallback() {
    this._lifecycle.cleanupAll();
    super.disconnectedCallback();
  }

  private _show({ href, title }: FavouriteOpenDetail) {
    const existing = favourites.findByHref(href);
    this._href = href;
    this._existingId = existing?.id ?? null;
    this._title = existing?.title ?? title;
    this._folders = favourites.folders();
    this._originalParentId = existing
      ? (this._parentOf(existing.id) ?? TOP_LEVEL)
      : TOP_LEVEL;
    this._parentId = this._originalParentId;
    this._creatingFolder = false;
    this._newFolderTitle = "";
    this._newFolderColor = FOLDER_SWATCHES[0];
    // sl-dialog loses an open request made mid-hide (its hide animation ends by hiding the panel again).
    if (this._hiding) this._reopenAfterHide = true;
    else this._open = true;
  }

  private _parentOf(id: string): string | undefined {
    return this._folders.find(({ folder }) =>
      folder.children.some((child) => child.id === id),
    )?.folder.id;
  }

  private _childCount(parentId: string | null): number {
    if (parentId === null) return favourites.getTree().length;
    const parent = favourites.find(parentId);
    return parent && isFolder(parent) ? parent.children.length : 0;
  }

  private _save(event: Event) {
    event.preventDefault();
    const title = this._title.trim();
    if (!title) return;

    let parentId: string | null =
      this._parentId === TOP_LEVEL ? null : this._parentId;
    const newFolderTitle = this._newFolderTitle.trim();
    if (this._creatingFolder && newFolderTitle) {
      parentId = favourites.addFolder(
        { title: newFolderTitle, color: this._newFolderColor },
        parentId,
      ).id;
    }

    if (this._existingId) {
      favourites.update(this._existingId, { title });
      const originalParent =
        this._originalParentId === TOP_LEVEL ? null : this._originalParentId;
      // Only a change of folder moves it, so re-saving a title never reorders the user's list.
      if (parentId !== originalParent) {
        favourites.move(this._existingId, parentId, this._childCount(parentId));
      }
    } else {
      favourites.add({ title, href: this._href }, parentId);
    }
    this._open = false;
  }

  private _remove() {
    if (this._existingId) favourites.remove(this._existingId);
    this._open = false;
  }

  /** The select and colour picker emit sl-hide and sl-after-hide too, and both bubble up to the dialog. */
  private _onHide(event: Event) {
    if (event.target !== event.currentTarget) return;
    this._open = false;
    this._hiding = true;
  }

  private _onAfterHide(event: Event) {
    if (event.target !== event.currentTarget) return;
    this._hiding = false;
    if (this._reopenAfterHide) {
      this._reopenAfterHide = false;
      this._open = true;
    }
  }

  private _renderNewFolder() {
    if (!this._creatingFolder) return nothing;
    return html`
      <div class="new-folder">
        <sl-input
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
      </div>
    `;
  }

  render() {
    const editing = this._existingId !== null;
    return html`
      <sl-dialog
        label=${editing ? "Edit favourite" : "Add to favourites"}
        ?open=${this._open}
        @sl-hide=${this._onHide}
        @sl-after-hide=${this._onAfterHide}
      >
        <form id="favourite-form" @submit=${this._save}>
          <sl-input
            label="Title"
            required
            .value=${this._title}
            @sl-input=${(e: Event) => {
              this._title = (e.target as HTMLInputElement).value;
            }}
          ></sl-input>
          <sl-select
            label=${this._creatingFolder ? "Create the new folder in" : "Folder"}
            hoist
            .value=${this._parentId}
            @sl-change=${(e: Event) => {
              this._parentId = (e.target as HTMLSelectElement).value;
            }}
          >
            <sl-option value=${TOP_LEVEL}>Top level</sl-option>
            ${this._folders.map(
              ({ folder, depth }) => html`
                <sl-option
                  value=${folder.id}
                  style=${styleMap({ paddingInlineStart: `${depth * 1.25}rem` })}
                >
                  <span
                    slot="prefix"
                    class="folder-swatch"
                    style=${styleMap({ background: folder.color })}
                  ></span>
                  ${folder.title}
                </sl-option>
              `,
            )}
          </sl-select>
          ${this._renderNewFolder()}
          <sl-button
            class="toggle-new-folder"
            size="small"
            @click=${() => {
              this._creatingFolder = !this._creatingFolder;
            }}
          >
            ${this._creatingFolder ? "Cancel new folder" : "New folder"}
          </sl-button>
        </form>
        <div slot="footer" class="footer">
          ${
            editing
              ? html`<sl-button class="remove" variant="danger" outline @click=${this._remove}>
                Remove
              </sl-button>`
              : nothing
          }
          <sl-button variant="primary" type="submit" form="favourite-form">
            Save
          </sl-button>
        </div>
      </sl-dialog>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-favourite-dialog": FavouriteDialog;
  }
}
