/**
 * Export and import of favourites as a JSON file, so they can move between browsers and devices; there is no
 * account or sync, so the file is the only way to carry them.
 */

import { css, html, LitElement, nothing } from "lit";
import { customElement, query, state } from "lit/decorators.js";

import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@shoelace-style/shoelace/dist/components/dialog/dialog.js";

import { DialogOpenState } from "@/components/dialog-open-state";
import {
  type FavouriteNode,
  FavouritesFormatError,
  favourites,
  type ImportMode,
  isFolder,
  parseFavourites,
} from "@/services/favourites-store";
import { exportFileName } from "@/utils/favourite-href";

/** The File System Access picker, where the browser has it (Chromium); lib.dom does not declare it yet. */
type OpenFilePicker = (options: {
  id: string;
  startIn: string;
  types: { description: string; accept: Record<string, string[]> }[];
}) => Promise<{ getFile(): Promise<File> }[]>;

/**
 * Safari and iOS can still be resolving a blob URL well after click() returns, so it is kept alive for a while
 * rather than revoked straight away; one small JSON blob held for 40 s costs nothing.
 */
const REVOKE_EXPORT_URL_AFTER_MS = 40_000;

function countItems(nodes: FavouriteNode[]): number {
  return nodes.reduce(
    (total, node) => total + (isFolder(node) ? countItems(node.children) : 1),
    0,
  );
}

@customElement("kp-favourites-transfer")
export class FavouritesTransfer extends LitElement {
  @state() private _error = "";
  @state() private _status = "";
  @state() private _pendingName = "";

  private _pendingText: string | null = null;
  /** sl-dialog would hand focus back to this component's host, which cannot take it. */
  private _dialog = new DialogOpenState(this, () =>
    this._importButton?.focus(),
  );

  @query('input[type="file"]') private _fileInput?: HTMLInputElement;
  @query("sl-button.import") private _importButton?: HTMLElement;

  static styles = css`
    :host {
      display: block;
    }

    .buttons {
      display: flex;
      flex-wrap: wrap;
      gap: var(--sl-spacing-small);
    }

    input[type="file"] {
      display: none;
    }

    .error,
    .status {
      margin: var(--sl-spacing-x-small) 0 0;
      font-size: var(--sl-font-size-small);
    }

    .error {
      color: var(--sl-color-danger-600);
    }

    .status {
      color: var(--sl-color-success-700);
    }

    .status:empty {
      display: none;
    }

    sl-dialog p {
      margin: 0 0 var(--sl-spacing-small);
    }

    .footer {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: var(--sl-spacing-small);
    }

    .cancel {
      margin-inline-end: auto;
    }
  `;

  private _export() {
    const blob = new Blob([favourites.exportJson()], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = exportFileName(new Date());
    // Firefox ignores clicks on links that are not in the document.
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), REVOKE_EXPORT_URL_AFTER_MS);
  }

  /** Cleared and re-rendered first, so a repeat of the same mistake is announced again. */
  private async _showError(message: string) {
    this._error = "";
    this._status = "";
    await this.updateComplete;
    this._error = message;
  }

  /**
   * The File System Access picker reopens in the folder last used for this id, which is usually where the
   * export was saved; elsewhere the plain file input is used.
   */
  private async _chooseFile() {
    const picker = (window as { showOpenFilePicker?: OpenFilePicker })
      .showOpenFilePicker;
    if (!picker) {
      this._fileInput?.click();
      return;
    }
    let file: File;
    try {
      const [handle] = await picker({
        id: "kp-favourites",
        startIn: "downloads",
        types: [
          {
            description: "Favourites export",
            accept: { "application/json": [".json"] },
          },
        ],
      });
      file = await handle.getFile();
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      throw error;
    }
    await this._readFile(file);
  }

  private async _onFileChosen() {
    const input = this._fileInput;
    const file = input?.files?.[0];
    // Reset so choosing the same file again (e.g. after fixing it) still fires a change.
    if (input) input.value = "";
    if (file) await this._readFile(file);
  }

  /** Any file name is accepted: the content's schema check is what keeps other JSON out. */
  private async _readFile(file: File) {
    let text: string;
    try {
      text = await file.text();
    } catch {
      void this._showError("That file could not be read.");
      return;
    }
    try {
      parseFavourites(text);
    } catch (error) {
      if (!(error instanceof FavouritesFormatError)) throw error;
      void this._showError(`That file could not be imported. ${error.message}`);
      return;
    }
    this._error = "";
    this._status = "";
    this._pendingName = file.name;
    this._pendingText = text;
    this._dialog.show();
  }

  private _import(mode: ImportMode) {
    const text = this._pendingText;
    this._dialog.hide();
    if (text === null) return;
    const before = countItems(favourites.getTree());
    favourites.importJson(text, mode);
    const after = countItems(favourites.getTree());
    if (!favourites.isSaved()) {
      void this._showError(
        "Imported, but this browser could not store favourites, so they will be gone once the page is closed.",
      );
    } else if (mode === "replace") {
      this._status = "Favourites replaced.";
    } else {
      const added = after - before;
      this._status =
        added === 0
          ? // Only links are counted, and a merge can still add folders, so this must not claim nothing changed.
            "No new links to import: you already have all of them."
          : `Imported ${added} new ${added === 1 ? "favourite" : "favourites"}.`;
    }
  }

  private _cancelImport() {
    this._pendingText = null;
    this._dialog.hide();
  }

  render() {
    return html`
      <div class="buttons">
        <sl-button @click=${this._export}>Export</sl-button>
        <sl-button class="import" @click=${this._chooseFile}
          >Import</sl-button
        >
        <input
          type="file"
          accept=".json,application/json"
          @change=${this._onFileChosen}
        />
      </div>
      ${this._error ? html`<p class="error" role="alert">${this._error}</p>` : nothing}
      <p class="status" role="status">${this._status}</p>
      <sl-dialog
        label="Import favourites"
        ?open=${this._dialog.open}
        @sl-hide=${this._dialog.onHide}
        @sl-after-hide=${this._dialog.onAfterHide}
      >
        <p>Import <strong>${this._pendingName}</strong>:</p>
        <p>
          <strong>Merge</strong> adds its favourites to yours, skipping links you
          already have.
        </p>
        <p>
          <strong>Replace</strong> deletes all your current favourites and uses
          the file's instead.
        </p>
        <div slot="footer" class="footer">
          <sl-button
            class="cancel"
            @click=${this._cancelImport}
            >Cancel</sl-button
          >
          <sl-button variant="danger" outline @click=${() => this._import("replace")}
            >Replace</sl-button
          >
          <sl-button variant="primary" @click=${() => this._import("merge")}
            >Merge</sl-button
          >
        </div>
      </sl-dialog>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-favourites-transfer": FavouritesTransfer;
  }
}
