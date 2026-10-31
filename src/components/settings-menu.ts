/**
 * Settings dialog component for display preferences and audio cache management.
 *
 * Display settings control text visibility and font sizing for Arabic,
 * transliteration, and translation content. Changes are persisted to
 * localStorage and applied directly to CSS custom properties via
 * applySingleSettingToCSS().
 *
 * Audio cache management provides visibility into IndexedDB-stored offline
 * audio files with sortable columns, individual deletion, and bulk clear.
 */

import type SlRange from "@shoelace-style/shoelace/dist/components/range/range.js";
import type SlSwitch from "@shoelace-style/shoelace/dist/components/switch/switch.js";
import { css, html, LitElement, nothing, type TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";

import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@shoelace-style/shoelace/dist/components/dialog/dialog.js";
import "@shoelace-style/shoelace/dist/components/icon/icon.js";
import "@shoelace-style/shoelace/dist/components/range/range.js";
import "@shoelace-style/shoelace/dist/components/switch/switch.js";
import "@shoelace-style/shoelace/dist/components/tab/tab.js";
import "@shoelace-style/shoelace/dist/components/tab-group/tab-group.js";
import "@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js";

import { applySingleSettingToCSS } from "@/context/settings-context";
import { audioCache, type CachedAudio } from "@/services/audio-cache";
import { circleButtonStyles } from "@/styles/shared-styles";
import {
  currentInstallHint,
  INSTALL_PROMPT_CHANGED,
  type InstallHint,
  isStandalone,
} from "@/utils/install";
import {
  LifecycleRegistry,
  type SettingsModel,
  type SettingsTab,
  storage,
} from "@/utils/storage";

type SettingName = keyof SettingsModel;

type TextSettingKey = "arabic" | "translation" | "transliteration";

interface TextSetting {
  key: TextSettingKey;
  label: string;
  min: number;
  max: number;
}

/**
 * Configuration for the three text display settings.
 * Arabic has a larger max font size since it's typically the primary display.
 * Transliteration/translation have smaller ranges as supplementary text.
 */
const TEXT_SETTINGS: readonly TextSetting[] = [
  { key: "arabic", label: "Arabic", min: 1, max: 5 },
  { key: "transliteration", label: "Transliteration", min: 0.5, max: 2 },
  { key: "translation", label: "Translation", min: 0.5, max: 2 },
] as const;

const INSTALL_HINTS: Record<InstallHint, TemplateResult> = {
  ios: html`Tap <sl-icon name="box-arrow-up" label="Share"></sl-icon> Share, then
    <strong>Add to Home Screen</strong>.`,
  "mac-safari": html`Choose <strong>File → Add to Dock</strong>.`,
  "firefox-android": html`Open the <strong>⋮</strong> menu, then
    <strong>More → Add app to Home screen</strong>.`,
  "firefox-windows": html`Look for the <strong>Add tab to taskbar</strong> button
    in the address bar. If it isn't there, this browser can't install apps.`,
  "firefox-unsupported": html`This browser can't install apps.`,
  samsung: html`Look for the install icon in the address bar, or open the menu
    and choose <strong>Add page to → Home screen</strong>.`,
  chromium: html`Open the browser menu and choose <strong>Install app</strong> or
    <strong>Add to Home screen</strong>. If neither is there, it may already be
    installed.`,
  other: html`Open the browser menu and look for <strong>Install</strong> or
    <strong>Add to Home screen</strong>.`,
};

type SortColumn = "title" | "size" | "cachedAt";
type SortDirection = "asc" | "desc";

@customElement("settings-menu")
export class SettingsMenu extends LitElement {
  /** Controls sl-dialog visibility */
  @state()
  private isDialogOpen = false;

  /**
   * Cached audio files loaded from IndexedDB when dialog opens.
   * Reloaded after each delete/clear operation to reflect changes.
   */
  @state()
  private _cachedAudioFiles: CachedAudio[] = [];

  /**
   * Pre-computed total size displayed in cache summary.
   * Calculated separately from file list using memory-efficient cursor.
   */
  @state()
  private _totalCacheSize = 0;

  /** Shows loading state while fetching cache data from IndexedDB */
  @state()
  private _isLoadingCache = false;

  /** Displays error message if IndexedDB operations fail */
  @state()
  private _cacheError: string | null = null;

  /** Current sort column for cache table - defaults to date (most recent first) */
  @state()
  private _sortColumn: SortColumn = "cachedAt";

  /** Sort direction - date defaults desc (newest first), others default asc */
  @state()
  private _sortDirection: SortDirection = "desc";

  @state()
  private _settings: SettingsModel = storage.get("settings");

  // Stored values are not validated on read, so anything unknown falls back to the text tab.
  private _tab: SettingsTab =
    storage.get("settingsTab") === "audio" ? "audio" : "text";

  @state()
  private _hasInstallPrompt = Boolean(window.__installPrompt);

  @state()
  private _showInstallHint = false;

  private _lifecycle = new LifecycleRegistry<"installPrompt">();

  static styles = [
    circleButtonStyles,
    css`
      sl-dialog::part(panel) {
        width: 90dvw;
      }

      /* Tighter than Shoelace's defaults so the whole dialog fits a phone screen. */
      sl-dialog {
        --header-spacing: 0.5rem 1rem;
        --body-spacing: 0 1rem 0.75rem;
        --footer-spacing: 0.5rem 1rem 0.75rem;
      }

      /* Title, install button and close share one midline. */
      sl-dialog::part(header),
      sl-dialog::part(header-actions) {
        align-items: center;
      }

      /* Shoelace pads the actions with "0 var(--header-spacing)", which turns a
         two-value spacing into a bottom padding that pushes the actions off the
         title's midline. */
      sl-dialog::part(header-actions) {
        gap: 0.25rem;
        padding: 0 1rem 0 0;
      }

      /* Closing is the dialog's main exit, so it is larger and in the danger colour. */
      sl-dialog::part(close-button) {
        color: var(--sl-color-danger-600);
        font-size: 1.5rem;
      }

      sl-dialog::part(close-button__base) {
        padding: 0.625rem;
      }

      sl-dialog::part(close-button__base):hover,
      sl-dialog::part(close-button__base):focus-visible {
        color: var(--sl-color-danger-700);
        background-color: var(--sl-color-danger-100);
      }

      @media (min-width: 768px) {
        sl-dialog::part(panel) {
          width: 60dvw;
          max-width: 600px;
        }
      }

      /* Display Settings Grid */
      .display-settings {
        display: grid;
        grid-template-columns: auto auto 1fr;
        gap: 0.5rem 1rem;
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

      sl-tab-group {
        --indicator-color: var(--sl-color-primary-600);
      }

      /* Tabs keep a 44px touch target. */
      sl-tab::part(base) {
        min-height: 2.75rem;
        padding-block: 0;
      }

      sl-tab-panel {
        --padding: 0.75rem 0 0.25rem;
      }

      /* Group labels match the column headers: small and muted, so groups
         read as distinct without the height of a full heading. */
      .group-label {
        margin: 0 0 0.5rem 0;
        font-size: 0.7rem;
        font-weight: 600;
        color: var(--sl-color-neutral-500);
        text-transform: uppercase;
        letter-spacing: 0.05em;
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
        max-height: 50dvh;
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

      /* A small filled button; padding on the host still gives it a 44px touch target. */
      .install-btn {
        padding-block: calc((2.75rem - var(--sl-input-height-small)) / 2);
      }

      /* The same deep teal in both themes (light primary-700 = dark primary-300)
         so the white label keeps 5.2:1 contrast; Shoelace's dark theme would
         otherwise invert it to a light fill with dark text. */
      .install-btn::part(base) {
        background-color: rgb(83 114 112);
        border-color: rgb(83 114 112);
        color: rgb(255 255 255);
      }

      .install-btn::part(base):hover {
        background-color: rgb(68 94 92);
        border-color: rgb(68 94 92);
        color: rgb(255 255 255);
      }

      .install-hint {
        margin: 0 0 0.5rem;
        font-size: 0.875rem;
        color: var(--sl-color-neutral-600);
      }

      .install-hint:empty {
        display: none;
      }

      .cache-error {
        color: var(--sl-color-danger-600);
        margin: 0;
        font-size: 0.875rem;
      }
    `,
  ];

  connectedCallback(): void {
    super.connectedCallback();
    this._lifecycle.register("installPrompt", {
      setup: () =>
        window.addEventListener(
          INSTALL_PROMPT_CHANGED,
          this._refreshInstallPrompt,
        ),
      cleanup: () =>
        window.removeEventListener(
          INSTALL_PROMPT_CHANGED,
          this._refreshInstallPrompt,
        ),
    });
  }

  disconnectedCallback(): void {
    this._lifecycle.cleanupAll();
    super.disconnectedCallback();
  }

  private _refreshInstallPrompt = () => {
    this._hasInstallPrompt = Boolean(window.__installPrompt);
    if (this._hasInstallPrompt) this._showInstallHint = false;
  };

  // A captured prompt can only be shown once, so it is dropped whatever the
  // user chooses; the browser fires beforeinstallprompt again if still installable.
  // Without one (Safari, Firefox, or Chromium before it is eligible) the button
  // explains the browser's own install route instead.
  private async _install(): Promise<void> {
    const prompt = window.__installPrompt;
    if (!prompt) {
      this._showInstallHint = !this._showInstallHint;
      return;
    }
    window.__installPrompt = null;
    try {
      await prompt.prompt();
      await prompt.userChoice;
    } finally {
      this._refreshInstallPrompt();
    }
  }

  // Sits beside the dialog title so installing costs no extra row.
  private _renderInstallButton() {
    if (isStandalone()) return nothing;
    return html`
      <sl-button
        slot="header-actions"
        class="install-btn"
        variant="primary"
        size="small"
        @click=${this._install}
      >
        <sl-icon slot="prefix" name="download"></sl-icon>
        Install app
      </sl-button>
    `;
  }

  // A live region so its reveal is announced; Shoelace buttons do not forward
  // aria-expanded to their inner button.
  private _renderInstallHint() {
    if (isStandalone()) return nothing;
    return html`<p class="install-hint" role="status">${
      this._showInstallHint && !this._hasInstallPrompt
        ? INSTALL_HINTS[currentInstallHint()]
        : nothing
    }</p>`;
  }

  private _rememberTab = (event: CustomEvent<{ name: string }>) => {
    this._tab = event.detail.name === "audio" ? "audio" : "text";
    storage.set("settingsTab", this._tab);
  };

  private _updateSetting<K extends keyof SettingsModel>(
    key: K,
    value: SettingsModel[K],
  ): void {
    this._settings = { ...this._settings, [key]: value };
    storage.set("settings", this._settings);
    applySingleSettingToCSS(key, value);
  }

  openDialog(toOpen: boolean) {
    this.isDialogOpen = toOpen;
    if (toOpen) {
      this._refreshInstallPrompt();
      this._showInstallHint = false;
      this._loadCachedAudio();
    }
  }

  /**
   * Loads cached audio metadata from IndexedDB for display in the cache table.
   * Fetches both the file list (for display) and total size (for summary).
   */
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

  /**
   * Toggles sort direction or changes sort column.
   * Date column defaults to descending (newest first);
   * other columns default to ascending (A-Z, smallest first).
   */
  private _toggleSort(column: SortColumn): void {
    if (this._sortColumn === column) {
      this._sortDirection = this._sortDirection === "asc" ? "desc" : "asc";
    } else {
      this._sortColumn = column;
      this._sortDirection = column === "cachedAt" ? "desc" : "asc";
    }
  }

  /**
   * Returns cached files sorted by current column and direction.
   * Creates a new array to avoid mutating the source data.
   */
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
      arabic: this._settings.showArabic,
      translation: this._settings.showTranslation,
      transliteration: this._settings.showTransliteration,
    };
    return map[key];
  }

  private _getFontSizeValue(key: TextSettingKey): number {
    const map = {
      arabic: this._settings.arabicFontSize,
      translation: this._settings.translationFontSize,
      transliteration: this._settings.transliterationFontSize,
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
                this._updateSetting(
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
                this._updateSetting(
                  this._getFontSizeSettingName(setting.key),
                  (e.target as SlRange).value,
                )}
            ></sl-range>
          `;
        })}
      </div>
    `;
  }

  /**
   * Handles keyboard activation of sortable column headers.
   * Enables Enter/Space to toggle sort for accessibility.
   */
  private _handleHeaderKeydown(e: KeyboardEvent, column: SortColumn): void {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      this._toggleSort(column);
    }
  }

  private _renderCacheTableHeader(column: SortColumn, label: string) {
    const isActive = this._sortColumn === column;
    return html`
      <span
        class="cache-header ${isActive ? "active" : ""}"
        tabindex="0"
        role="button"
        aria-label="Sort by ${label}"
        @click=${() => this._toggleSort(column)}
        @keydown=${(e: KeyboardEvent) => this._handleHeaderKeydown(e, column)}
      >
        ${label}
        <span aria-hidden="true">${this._getSortIndicator(column)}</span>
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
      <button class="circle-btn" aria-label="Settings" @click=${() => this.openDialog(true)}>
        <sl-icon name="gear"></sl-icon>
      </button>

      <sl-dialog
        ?open=${this.isDialogOpen}
        @sl-hide=${() => this.openDialog(false)}
        label="Settings"
      >
        ${this._renderInstallButton()}
        ${this._renderInstallHint()}
        <sl-tab-group @sl-tab-show=${this._rememberTab}>
          <sl-tab slot="nav" panel="text" ?active=${this._tab === "text"}>Text</sl-tab>
          <sl-tab slot="nav" panel="audio" ?active=${this._tab === "audio"}>Audio</sl-tab>

          <sl-tab-panel name="text">${this._renderDisplaySettings()}</sl-tab-panel>
          <sl-tab-panel name="audio">
            <h3 class="group-label">Offline audio cache</h3>
            ${this._renderAudioCacheManager()}
          </sl-tab-panel>
        </sl-tab-group>
        <sl-button slot="footer" @click=${() => this.openDialog(false)}>Close</sl-button>
      </sl-dialog>
    `;
  }
}
