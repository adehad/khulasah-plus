import type SlRange from "@shoelace-style/shoelace/dist/components/range/range.js";
import type SlSwitch from "@shoelace-style/shoelace/dist/components/switch/switch.js";
import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@shoelace-style/shoelace/dist/components/dialog/dialog.js";
import "@shoelace-style/shoelace/dist/components/divider/divider.js";
import "@shoelace-style/shoelace/dist/components/icon/icon.js";
import "@shoelace-style/shoelace/dist/components/range/range.js";
import "@shoelace-style/shoelace/dist/components/switch/switch.js";

import { audioCache, type CachedAudio } from "@/services/audio-cache";
import { circleButtonStyles } from "@/styles/shared-styles";
import { type SettingsModel, storage } from "@/utils/storage";

export type SettingName = keyof SettingsModel;

export class SettingsChangeEvent extends CustomEvent<{
  name: SettingName;
  // biome-ignore lint/suspicious/noExplicitAny: setting can be any JSON-serializable
  value: any;
}> {
  // biome-ignore lint/suspicious/noExplicitAny: setting can be any JSON-serializable
  constructor(detail: { name: SettingName; value: any }) {
    super("settings-change", { detail, bubbles: true, composed: true });
  }
}

type TextSettingKey = "arabic" | "translation" | "transliteration";

interface TextSetting {
  key: TextSettingKey;
  label: string;
  min: number;
  max: number;
}

const TEXT_SETTINGS: readonly TextSetting[] = [
  { key: "arabic", label: "Arabic", min: 1, max: 5 },
  { key: "transliteration", label: "Transliteration", min: 0.5, max: 2 },
  { key: "translation", label: "Translation", min: 0.5, max: 2 },
] as const;

type SortColumn = "title" | "size" | "cachedAt";
type SortDirection = "asc" | "desc";

@customElement("settings-menu")
export class SettingsMenu extends LitElement {
  @state()
  private isDialogOpen = false;

  @state()
  private _cachedAudioFiles: CachedAudio[] = [];

  @state()
  private _totalCacheSize = 0;

  @state()
  private _isLoadingCache = false;

  @state()
  private _cacheError: string | null = null;

  @state()
  private _sortColumn: SortColumn = "cachedAt";

  @state()
  private _sortDirection: SortDirection = "desc";

  @property({ type: Number })
  arabicFontSize = 2;

  @property({ type: Number })
  translationFontSize = 1;

  @property({ type: Number })
  transliterationFontSize = 1;

  @property({ type: Boolean })
  showArabic = true;

  @property({ type: Boolean })
  showTranslation = true;

  @property({ type: Boolean })
  showTransliteration = true;

  static styles = [
    circleButtonStyles,
    css`
      sl-dialog::part(panel) {
        width: 90dvw;
      }

      @media (min-width: 768px) {
        sl-dialog::part(panel) {
          width: 60dvw;
          max-width: 600px;
        }
      }

      .settings-container {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      /* Display Settings Grid */
      .display-settings {
        display: grid;
        grid-template-columns: auto auto 1fr;
        gap: 0.75rem 1rem;
        align-items: center;
      }

      .settings-header {
        font-size: 0.7rem;
        color: var(--sl-color-neutral-500);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        text-align: center;
      }

      .setting-label {
        font-weight: 500;
      }

      sl-range[disabled] {
        opacity: 0.4;
        pointer-events: none;
      }

      /* Audio Cache Section */
      .audio-cache-section h3 {
        margin: 0 0 0.75rem 0;
        font-size: 1rem;
      }

      .cache-empty {
        color: var(--sl-color-neutral-500);
        font-style: italic;
        margin: 0;
      }

      .cache-summary {
        margin: 0 0 0.75rem 0;
        font-size: 0.875rem;
        color: var(--sl-color-neutral-600);
      }

      /* Cache Table Grid */
      .cache-table {
        display: grid;
        grid-template-columns: 1fr auto auto auto;
        gap: 0.5rem 1rem;
        align-items: center;
        max-height: 200px;
        overflow-y: auto;
        margin-bottom: 1rem;
      }

      .cache-header {
        font-weight: 600;
        font-size: 0.7rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--sl-color-neutral-600);
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }

      .cache-header:hover {
        color: var(--sl-color-primary-600);
      }

      .cache-header.active {
        color: var(--sl-color-primary-700);
      }

      .cache-cell {
        font-size: 0.875rem;
      }

      .cache-cell.title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 500;
      }

      .cache-cell.size,
      .cache-cell.date {
        color: var(--sl-color-neutral-600);
        white-space: nowrap;
      }

      .cache-error {
        color: var(--sl-color-danger-600);
        margin: 0;
        font-size: 0.875rem;
      }
    `,
  ];

  connectedCallback() {
    super.connectedCallback();
    this.loadSettings();
  }

  loadSettings() {
    const settings = storage.get("settings");
    this.arabicFontSize = settings.arabicFontSize;
    this.translationFontSize = settings.translationFontSize;
    this.transliterationFontSize = settings.transliterationFontSize;
    this.showArabic = settings.showArabic;
    this.showTranslation = settings.showTranslation;
    this.showTransliteration = settings.showTransliteration;
  }

  saveSetting<K extends SettingName>(name: K, value: SettingsModel[K]) {
    storage.update("settings", (s) => ({ ...s, [name]: value }));
    this.dispatchEvent(new SettingsChangeEvent({ name, value }));
  }

  emitBorderStateChange(isBackground: boolean) {
    const event = new CustomEvent("border-state-change", {
      bubbles: true,
      composed: true,
      detail: { background: isBackground },
    });
    this.dispatchEvent(event);
  }

  openDialog(toOpen: boolean) {
    this.isDialogOpen = toOpen;
    if (toOpen) {
      this._loadCachedAudio();
    }
  }

  private async _loadCachedAudio(): Promise<void> {
    this._isLoadingCache = true;
    this._cacheError = null;
    try {
      this._cachedAudioFiles = await audioCache.getAll();
      this._totalCacheSize = await audioCache.getTotalSize();
    } catch (err) {
      console.error("Failed to load cached audio:", err);
      this._cacheError = "Failed to load cached audio files.";
      this._cachedAudioFiles = [];
      this._totalCacheSize = 0;
    } finally {
      this._isLoadingCache = false;
    }
  }

  private async _deleteAudioFile(url: string): Promise<void> {
    try {
      await audioCache.delete(url);
      await this._loadCachedAudio();
    } catch (err) {
      console.error("Failed to delete audio file:", err);
    }
  }

  private async _clearAllAudio(): Promise<void> {
    if (!confirm("Are you sure you want to delete all cached audio files?")) {
      return;
    }
    try {
      await audioCache.clearAll();
      await this._loadCachedAudio();
    } catch (err) {
      console.error("Failed to clear audio cache:", err);
    }
  }

  private _formatBytes(bytes: number): string {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${Number.parseFloat((bytes / k ** i).toFixed(1))} ${sizes[i]}`;
  }

  private _formatDate(timestamp: number): string {
    return new Date(timestamp).toLocaleDateString();
  }

  private _toggleSort(column: SortColumn): void {
    if (this._sortColumn === column) {
      this._sortDirection = this._sortDirection === "asc" ? "desc" : "asc";
    } else {
      this._sortColumn = column;
      this._sortDirection = column === "cachedAt" ? "desc" : "asc";
    }
  }

  private get _sortedCacheFiles(): CachedAudio[] {
    return [...this._cachedAudioFiles].sort((a, b) => {
      const dir = this._sortDirection === "asc" ? 1 : -1;
      if (this._sortColumn === "title")
        return dir * a.title.localeCompare(b.title);
      if (this._sortColumn === "size") return dir * (a.size - b.size);
      return dir * (a.cachedAt - b.cachedAt);
    });
  }

  private _getSortIndicator(column: SortColumn): string {
    if (this._sortColumn !== column) return "";
    return this._sortDirection === "asc" ? "▲" : "▼";
  }

  private _getShowValue(key: TextSettingKey): boolean {
    const map = {
      arabic: this.showArabic,
      translation: this.showTranslation,
      transliteration: this.showTransliteration,
    };
    return map[key];
  }

  private _getFontSizeValue(key: TextSettingKey): number {
    const map = {
      arabic: this.arabicFontSize,
      translation: this.translationFontSize,
      transliteration: this.transliterationFontSize,
    };
    return map[key];
  }

  private _getShowSettingName(key: TextSettingKey): SettingName {
    const map: Record<TextSettingKey, SettingName> = {
      arabic: "showArabic",
      translation: "showTranslation",
      transliteration: "showTransliteration",
    };
    return map[key];
  }

  private _getFontSizeSettingName(key: TextSettingKey): SettingName {
    const map: Record<TextSettingKey, SettingName> = {
      arabic: "arabicFontSize",
      translation: "translationFontSize",
      transliteration: "transliterationFontSize",
    };
    return map[key];
  }

  private _renderDisplaySettings() {
    return html`
      <div class="display-settings">
        <!-- Header row -->
        <span></span>
        <span class="settings-header">Show</span>
        <span class="settings-header">Font Size</span>

        <!-- Setting rows -->
        ${TEXT_SETTINGS.map((setting) => {
          const isVisible = this._getShowValue(setting.key);
          return html`
            <span class="setting-label">${setting.label}</span>
            <sl-switch
              ?checked=${isVisible}
              @sl-change=${(e: Event) =>
                this.saveSetting(
                  this._getShowSettingName(setting.key),
                  (e.target as SlSwitch).checked,
                )}
            ></sl-switch>
            <sl-range
              min=${setting.min}
              max=${setting.max}
              step="0.1"
              value=${this._getFontSizeValue(setting.key)}
              ?disabled=${!isVisible}
              @sl-change=${(e: Event) =>
                this.saveSetting(
                  this._getFontSizeSettingName(setting.key),
                  (e.target as SlRange).value,
                )}
            ></sl-range>
          `;
        })}
      </div>
    `;
  }

  private _renderCacheTableHeader(column: SortColumn, label: string) {
    const isActive = this._sortColumn === column;
    return html`
      <span
        class="cache-header ${isActive ? "active" : ""}"
        @click=${() => this._toggleSort(column)}
      >
        ${label}
        <span>${this._getSortIndicator(column)}</span>
      </span>
    `;
  }

  private _renderCacheTableRow(file: CachedAudio) {
    return html`
      <span class="cache-cell title">${file.title}</span>
      <span class="cache-cell size">${this._formatBytes(file.size)}</span>
      <span class="cache-cell date">${this._formatDate(file.cachedAt)}</span>
      <sl-button size="small" variant="danger" @click=${() => this._deleteAudioFile(file.url)}>
        Delete
      </sl-button>
    `;
  }

  private _renderAudioCacheManager() {
    if (this._isLoadingCache) {
      return html`<p>Loading...</p>`;
    }

    if (this._cacheError) {
      return html`<p class="cache-error">${this._cacheError}</p>`;
    }

    if (this._cachedAudioFiles.length === 0) {
      return html`<p class="cache-empty">No audio files cached for offline use.</p>`;
    }

    return html`
      <p class="cache-summary">
        ${this._cachedAudioFiles.length} file(s) cached
        (${this._formatBytes(this._totalCacheSize)} total)
      </p>
      <div class="cache-table">
        <!-- Header row -->
        ${this._renderCacheTableHeader("title", "Name")}
        ${this._renderCacheTableHeader("size", "Size")}
        ${this._renderCacheTableHeader("cachedAt", "Date")}
        <span></span>

        <!-- Data rows -->
        ${this._sortedCacheFiles.map((file) => this._renderCacheTableRow(file))}
      </div>
      <sl-button variant="danger" outline @click=${this._clearAllAudio}>
        Clear All Cached Audio
      </sl-button>
    `;
  }

  render() {
    return html`
      <button class="circle-btn" @click=${() => this.openDialog(true)}>
        <sl-icon name="gear"></sl-icon>
      </button>

      <sl-dialog
        ?open=${this.isDialogOpen}
        @sl-show=${() => this.emitBorderStateChange(true)}
        @sl-hide=${() => {
          this.openDialog(false);
          this.emitBorderStateChange(false);
        }}
        label="Settings"
      >
        <div class="settings-container">
          ${this._renderDisplaySettings()}

          <sl-divider></sl-divider>

          <div class="audio-cache-section">
            <h3>Offline Audio Cache</h3>
            ${this._renderAudioCacheManager()}
          </div>
        </div>
        <sl-button slot="footer" @click=${() => this.openDialog(false)}>Close</sl-button>
      </sl-dialog>
    `;
  }
}
