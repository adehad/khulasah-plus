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
      .settings-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .setting {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .audio-cache-section h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1rem;
      }

      .cache-empty {
        color: var(--sl-color-neutral-500);
        font-style: italic;
        margin: 0;
      }

      .cache-summary {
        margin: 0 0 0.5rem 0;
        font-size: 0.875rem;
        color: var(--sl-color-neutral-600);
      }

      .cached-files-list {
        list-style: none;
        padding: 0;
        margin: 0 0 1rem 0;
        max-height: 200px;
        overflow-y: auto;
      }

      .cached-file {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem;
        border-bottom: 1px solid var(--sl-color-neutral-200);
      }

      .cached-file:last-child {
        border-bottom: none;
      }

      .file-info {
        display: flex;
        flex-direction: column;
        min-width: 0;
        flex: 1;
      }

      .file-title {
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .file-meta {
        font-size: 0.75rem;
        color: var(--sl-color-neutral-500);
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
    try {
      this._cachedAudioFiles = await audioCache.getAll();
      this._totalCacheSize = await audioCache.getTotalSize();
    } catch (err) {
      console.error("Failed to load cached audio:", err);
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

  private _renderDisplaySettings() {
    return html`
      <div class="setting">
        <label for="arabic-font-size">Arabic Font Size</label>
        <sl-range
          id="arabic-font-size"
          min="1"
          max="5"
          step="0.1"
          value=${this.arabicFontSize}
          @sl-change=${(e: Event) => this.saveSetting("arabicFontSize", (e.target as SlRange).value)}
        ></sl-range>
      </div>
      <div class="setting">
        <label for="translation-font-size">Translation Font Size</label>
        <sl-range
          id="translation-font-size"
          min="0.5"
          max="2"
          step="0.1"
          value=${this.translationFontSize}
          @sl-change=${(e: Event) => this.saveSetting("translationFontSize", (e.target as SlRange).value)}
        ></sl-range>
      </div>
      <div class="setting">
        <label for="transliteration-font-size">Transliteration Font Size</label>
        <sl-range
          id="transliteration-font-size"
          min="0.5"
          max="2"
          step="0.1"
          value=${this.transliterationFontSize}
          @sl-change=${(e: Event) => this.saveSetting("transliterationFontSize", (e.target as SlRange).value)}
        ></sl-range>
      </div>
      <div class="setting">
        <label for="show-arabic">Show Arabic</label>
        <sl-switch
          id="show-arabic"
          ?checked=${this.showArabic}
          @sl-change=${(e: Event) => this.saveSetting("showArabic", (e.target as SlSwitch).checked)}
        ></sl-switch>
      </div>
      <div class="setting">
        <label for="show-translation">Show Translation</label>
        <sl-switch
          id="show-translation"
          ?checked=${this.showTranslation}
          @sl-change=${(e: Event) => this.saveSetting("showTranslation", (e.target as SlSwitch).checked)}
        ></sl-switch>
      </div>
      <div class="setting">
        <label for="show-transliteration">Show Transliteration</label>
        <sl-switch
          id="show-transliteration"
          ?checked=${this.showTransliteration}
          @sl-change=${(e: Event) => this.saveSetting("showTransliteration", (e.target as SlSwitch).checked)}
        ></sl-switch>
      </div>
    `;
  }

  private _renderCachedFileItem(file: CachedAudio) {
    return html`
      <li class="cached-file">
        <span class="file-info">
          <span class="file-title">${file.title}</span>
          <span class="file-meta">
            ${this._formatBytes(file.size)} - ${this._formatDate(file.cachedAt)}
          </span>
        </span>
        <sl-button
          size="small"
          variant="danger"
          @click=${() => this._deleteAudioFile(file.url)}
        >
          Delete
        </sl-button>
      </li>
    `;
  }

  private _renderAudioCacheManager() {
    if (this._isLoadingCache) {
      return html`<p>Loading...</p>`;
    }

    if (this._cachedAudioFiles.length === 0) {
      return html`<p class="cache-empty">No audio files cached for offline use.</p>`;
    }

    return html`
      <p class="cache-summary">
        ${this._cachedAudioFiles.length} file(s) cached
        (${this._formatBytes(this._totalCacheSize)} total)
      </p>
      <ul class="cached-files-list">
        ${this._cachedAudioFiles.map((file) => this._renderCachedFileItem(file))}
      </ul>
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
