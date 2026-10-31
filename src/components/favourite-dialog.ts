/**
 * The one add/edit dialog for favourites; every kp-favourite-star opens it through FAVOURITE_OPEN.
 * A single instance lives in BaseLayout so hundreds of stars don't each carry a dialog.
 */

import { css, html, LitElement, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";

import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@shoelace-style/shoelace/dist/components/color-picker/color-picker.js";
import "@shoelace-style/shoelace/dist/components/dialog/dialog.js";
import "@shoelace-style/shoelace/dist/components/input/input.js";
import "@shoelace-style/shoelace/dist/components/select/select.js";

import { DialogOpenState } from "@/components/dialog-open-state";
import {
  FOLDER_SWATCHES,
  type FolderEntry,
  folderSwatchStyles,
  parentIdFromOption,
  parentOptionOf,
  renderFolderOptions,
  TOP_LEVEL,
} from "@/components/favourite-folders";
import {
  FAVOURITE_OPEN,
  type FavouriteOpenDetail,
} from "@/components/favourite-star";
import { favourites } from "@/services/favourites-store";
import { LifecycleRegistry } from "@/utils/storage";

@customElement("kp-favourite-dialog")
export class FavouriteDialog extends LitElement {
  @state() private _href = "";
  @state() private _title = "";
  @state() private _existingId: string | null = null;
  @state() private _parentId = TOP_LEVEL;
  @state() private _folders: FolderEntry[] = [];
  @state() private _creatingFolder = false;
  @state() private _newFolderTitle = "";
  @state() private _newFolderColor: string = FOLDER_SWATCHES[0];
  @state() private _error = "";

  private _originalParentId = TOP_LEVEL;
  private _dialog = new DialogOpenState(this);
  private _lifecycle = new LifecycleRegistry<"openRequests">();

  static styles = [
    folderSwatchStyles,
    css`
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

    .error {
      margin: 0;
      color: var(--sl-color-danger-600);
      font-size: var(--sl-font-size-small);
    }
  `,
  ];

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
      ? parentOptionOf(this._folders, existing.id)
      : TOP_LEVEL;
    this._parentId = this._originalParentId;
    this._creatingFolder = false;
    this._newFolderTitle = "";
    this._newFolderColor = FOLDER_SWATCHES[0];
    this._error = "";
    this._dialog.show();
  }

  /**
   * A change the browser would not store stays in memory, so the dialog is re-read from the store (saving
   * again then retries rather than adding a second copy) and stays open to say so.
   */
  private _closeUnlessUnsaved(title: string) {
    if (favourites.isSaved()) {
      this._dialog.hide();
      return;
    }
    this._show({ href: this._href, title });
    this._error =
      "This browser could not store the change, so it will be gone once the page is closed.";
  }

  private _save(event: Event) {
    event.preventDefault();
    const title = this._title.trim();
    if (!title) return;

    let parentId = parentIdFromOption(this._parentId);
    const newFolderTitle = this._newFolderTitle.trim();
    if (this._creatingFolder && newFolderTitle) {
      parentId = favourites.addFolder(
        { title: newFolderTitle, color: this._newFolderColor },
        parentId,
      ).id;
    }

    // Removed in another tab since the dialog opened, the favourite is added again rather than the edit lost.
    if (this._existingId && favourites.update(this._existingId, { title })) {
      const originalParent = parentIdFromOption(this._originalParentId);
      // Only a change of folder moves it, so re-saving a title never reorders the user's list.
      if (parentId !== originalParent) {
        favourites.move(
          this._existingId,
          parentId,
          favourites.childCount(parentId),
        );
      }
    } else {
      favourites.add({ title, href: this._href }, parentId);
    }
    this._closeUnlessUnsaved(title);
  }

  private _remove() {
    if (this._existingId) favourites.remove(this._existingId);
    this._closeUnlessUnsaved(this._title);
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
        ?open=${this._dialog.open}
        @sl-hide=${this._dialog.onHide}
        @sl-after-hide=${this._dialog.onAfterHide}
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
            ${renderFolderOptions(this._folders)}
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
          ${this._error ? html`<p class="error" role="alert">${this._error}</p>` : nothing}
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
