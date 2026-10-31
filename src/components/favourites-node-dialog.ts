/**
 * Edits one favourite or folder from the favourites page's edit mode: rename, recolour (folders), move to
 * another folder, or delete. One dialog covers all four so each tile needs only a single edit button, which
 * keeps tiles uncluttered on phones.
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
  type FavouriteFolder,
  type FavouriteNode,
  favourites,
  isFolder,
} from "@/services/favourites-store";

export const NODE_DIALOG_CLOSED = "kp-node-dialog-closed";

function folderIdsWithin(node: FavouriteNode): Set<string> {
  const ids = new Set<string>();
  const visit = (current: FavouriteNode) => {
    if (!isFolder(current)) return;
    ids.add(current.id);
    current.children.forEach(visit);
  };
  visit(node);
  return ids;
}

function countWithin(folder: FavouriteFolder): number {
  return folder.children.reduce(
    (total, child) => total + 1 + (isFolder(child) ? countWithin(child) : 0),
    0,
  );
}

@customElement("kp-favourites-node-dialog")
export class FavouritesNodeDialog extends LitElement {
  @state() private _node: FavouriteNode | null = null;
  @state() private _title = "";
  @state() private _color = "";
  @state() private _parentId = TOP_LEVEL;
  @state() private _confirmingDelete = false;
  @state() private _error = "";

  private _originalParentId = TOP_LEVEL;
  /** Folders the node could live in; its own subtree is left out because a folder cannot move into itself. */
  private _destinations: FolderEntry[] = [];
  /**
   * Announced once fully closed, so the page can place focus: sl-dialog would hand it back to the page's
   * host, which cannot take it.
   */
  private _dialog = new DialogOpenState(this, () => {
    this.dispatchEvent(new Event(NODE_DIALOG_CLOSED));
  });

  static styles = [
    folderSwatchStyles,
    css`
      form {
        display: flex;
        flex-direction: column;
        gap: var(--sl-spacing-medium);
      }

      .colour {
        display: flex;
        align-items: center;
        gap: var(--sl-spacing-small);
      }

      .confirm {
        margin: 0;
      }

      .footer {
        display: flex;
        justify-content: flex-end;
        gap: var(--sl-spacing-small);
      }

      .delete {
        margin-inline-end: auto;
      }

      .error {
        margin: 0;
        color: var(--sl-color-danger-600);
        font-size: var(--sl-font-size-small);
      }
    `,
  ];

  show(node: FavouriteNode) {
    const folders = favourites.folders();
    const excluded = folderIdsWithin(node);
    this._node = node;
    this._title = node.title;
    this._color = isFolder(node) ? node.color : "";
    this._destinations = folders.filter(
      ({ folder }) => !excluded.has(folder.id),
    );
    this._originalParentId = parentOptionOf(folders, node.id);
    this._parentId = this._originalParentId;
    this._confirmingDelete = false;
    this._error = "";
    this._dialog.show();
  }

  private _save(event: Event) {
    event.preventDefault();
    const node = this._node;
    const title = this._title.trim();
    if (!node || !title) return;
    const recoloured = isFolder(node) && this._color !== node.color;
    let applied = true;
    // Each store write re-renders every listener, so unchanged fields are not written.
    if (title !== node.title || recoloured) {
      applied = favourites.update(node.id, {
        title,
        ...(recoloured ? { color: this._color } : {}),
      });
    }
    // Only a change of folder moves it, so saving a rename never reorders the list.
    if (applied && this._parentId !== this._originalParentId) {
      const parentId = parentIdFromOption(this._parentId);
      applied = favourites.move(
        node.id,
        parentId,
        favourites.childCount(parentId),
      );
    }
    // The destinations already rule out cycles, so a refusal means another tab deleted the node or its folder.
    if (!applied) {
      this._error = `This ${isFolder(node) ? "folder" : "favourite"}, or the folder chosen for it, was deleted in another tab.`;
      return;
    }
    this._dialog.hide();
  }

  private _delete() {
    if (this._node) favourites.remove(this._node.id);
    this._dialog.hide();
  }

  private _renderConfirm(node: FavouriteNode) {
    const contents = isFolder(node) ? countWithin(node) : 0;
    return html`
      <p class="confirm">
        Delete <strong>${node.title}</strong>?
        ${
          contents
            ? html`Everything inside it (${contents} ${contents === 1 ? "item" : "items"}) is deleted too.`
            : nothing
        }
      </p>
      <div slot="footer" class="footer">
        <sl-button
          @click=${() => {
            this._confirmingDelete = false;
          }}
          >Keep</sl-button
        >
        <sl-button variant="danger" @click=${this._delete}>Delete</sl-button>
      </div>
    `;
  }

  private _renderForm(node: FavouriteNode) {
    return html`
      <form id="node-form" @submit=${this._save}>
        <sl-input
          label="Title"
          required
          .value=${this._title}
          @sl-input=${(e: Event) => {
            this._title = (e.target as HTMLInputElement).value;
          }}
        ></sl-input>
        ${
          isFolder(node)
            ? html`
              <div class="colour">
                <sl-color-picker
                  label="Folder colour"
                  hoist
                  no-format-toggle
                  .swatches=${[...FOLDER_SWATCHES]}
                  .value=${this._color}
                  @sl-change=${(e: Event) => {
                    this._color = (e.target as HTMLInputElement).value;
                  }}
                ></sl-color-picker>
                <span>Colour</span>
              </div>
            `
            : nothing
        }
        <sl-select
          label="Folder"
          hoist
          .value=${this._parentId}
          @sl-change=${(e: Event) => {
            this._parentId = (e.target as HTMLSelectElement).value;
          }}
        >
          ${renderFolderOptions(this._destinations)}
        </sl-select>
        ${this._error ? html`<p class="error" role="alert">${this._error}</p>` : nothing}
      </form>
      <div slot="footer" class="footer">
        <sl-button
          class="delete"
          variant="danger"
          outline
          @click=${() => {
            this._confirmingDelete = true;
          }}
          >Delete</sl-button
        >
        <sl-button variant="primary" type="submit" form="node-form"
          >Save</sl-button
        >
      </div>
    `;
  }

  render() {
    const node = this._node;
    const kind = node && isFolder(node) ? "folder" : "favourite";
    return html`
      <sl-dialog
        label=${this._confirmingDelete ? `Delete ${kind}` : `Edit ${kind}`}
        ?open=${this._dialog.open}
        @sl-hide=${this._dialog.onHide}
        @sl-after-hide=${this._dialog.onAfterHide}
      >
        ${
          node === null
            ? nothing
            : this._confirmingDelete
              ? this._renderConfirm(node)
              : this._renderForm(node)
        }
      </sl-dialog>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-favourites-node-dialog": FavouritesNodeDialog;
  }
}
