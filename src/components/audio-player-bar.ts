/**
 * Global audio player bar component.
 * Appears in header when audio is playing, persists across navigation.
 * Reads all state from audioPlayerService - no props needed.
 */

import { css, html, LitElement, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";

import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@shoelace-style/shoelace/dist/components/dropdown/dropdown.js";
import "@shoelace-style/shoelace/dist/components/icon-button/icon-button.js";
import "@shoelace-style/shoelace/dist/components/icon/icon.js";
import "@shoelace-style/shoelace/dist/components/menu-item/menu-item.js";
import "@shoelace-style/shoelace/dist/components/menu/menu.js";
import "@shoelace-style/shoelace/dist/components/progress-bar/progress-bar.js";
import "@shoelace-style/shoelace/dist/components/progress-ring/progress-ring.js";
import "@shoelace-style/shoelace/dist/components/spinner/spinner.js";
import "@shoelace-style/shoelace/dist/components/tooltip/tooltip.js";

import { audioCache } from "@/services/audio-cache";
import {
  type AudioPlayerState,
  audioPlayerService,
} from "@/services/audio-player-service";
import { LifecycleRegistry } from "@/utils/storage";

/** Available playback speed options shown in the speed dropdown */
const PLAYBACK_RATES = [0.5, 0.75, 1, 1.25, 1.5, 2] as const;

/**
 * Formats seconds into "M:SS" display format.
 * Guards against NaN/Infinity from unloaded audio duration.
 */
function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

@customElement("kp-audio-player")
export class AudioPlayerBar extends LitElement {
  /** Mirror of audioPlayerService state - triggers re-render on playback changes */
  @state() private _state: AudioPlayerState = audioPlayerService.state;

  /** Whether current audio is saved in IndexedDB for offline playback */
  @state() private _isCached = false;

  /** True during opus→MP3 conversion to show progress UI and prevent re-clicks */
  @state() private _isConverting = false;

  /** 0-100 progress of MP3 encoding for the progress ring display */
  @state() private _conversionProgress = 0;

  /**
   * Collapsed mode minimizes player to just play/pause + time.
   * Reflected as host attribute for parent CSS targeting.
   */
  @state() private _isCollapsed = false;

  private _lifecycle = new LifecycleRegistry<"stateChange">();

  /**
   * Memoizes last checked URL to avoid redundant IndexedDB lookups.
   * Cache status only needs re-checking when audio source changes.
   */
  private _lastCheckedUrl: string | undefined;

  static styles = css`
    :host {
      display: block;
    }

    .player-container {
      background: var(--sl-color-neutral-0);
      border-radius: var(--sl-border-radius-medium);
      box-shadow: var(--sl-shadow-medium);
      padding: 0.5rem 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-top: 0.5rem;
      -webkit-app-region: no-drag;
    }

    .player-row {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .title {
      flex: 1;
      font-size: var(--sl-font-size-medium);
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-width: 0;
    }

    .time {
      font-size: var(--sl-font-size-small);
      color: var(--sl-color-neutral-600);
      white-space: nowrap;
      font-variant-numeric: tabular-nums;
    }

    .speed-btn {
      font-size: var(--sl-font-size-small);
      min-width: 3rem;
    }

    .progress-container {
      width: 100%;
      cursor: pointer;
      padding: 0.25rem 0;
    }

    .progress-container sl-progress-bar {
      --height: 6px;
      --indicator-color: var(--sl-color-primary-600);
      --track-color: var(--sl-color-neutral-200);
    }

    .progress-container sl-progress-bar::part(indicator) {
      transition: width 0.1s linear;
    }

    sl-icon-button {
      font-size: var(--sl-font-size-large);
    }

    sl-icon-button::part(base) {
      padding: 0.25rem;
    }

    .play-pause-btn {
      font-size: var(--sl-font-size-x-large);
    }

    .download-progress {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .download-progress sl-progress-ring {
      --size: 2rem;
      --track-width: 3px;
      --indicator-width: 3px;
      --indicator-color: var(--sl-color-primary-600);
    }

    .download-progress .progress-text {
      position: absolute;
      font-size: var(--sl-font-size-small);
      font-weight: 700;
      color: var(--sl-color-neutral-700);
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    /* Smooth transitions for collapse/expand */
    .player-container {
      transition: width 0.3s ease, padding 0.3s ease, margin 0.3s ease;
    }

    .close-btn,
    .title,
    .progress-container,
    .actions,
    sl-dropdown {
      transition: opacity 0.2s ease, max-width 0.3s ease;
      overflow: hidden;
    }

    /* Collapsed state */
    .player-collapsed {
      flex-direction: row;
      padding: 0.25rem 0.5rem;
      gap: 0.5rem;
      width: fit-content;
      margin-left: auto;
    }

    .player-collapsed .close-btn,
    .player-collapsed .title,
    .player-collapsed .actions,
    .player-collapsed sl-dropdown {
      opacity: 0;
      max-width: 0;
      pointer-events: none;
    }

    .player-collapsed .progress-container {
      opacity: 0;
      max-height: 0;
      padding: 0;
      pointer-events: none;
    }

    .player-collapsed .play-pause-btn {
      margin-right: 15px;
    }

    .player-collapsed .time {
      font-size: var(--sl-font-size-small);
    }

    .collapse-btn {
      transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
      transform: rotateZ(-90deg);
    }

    .collapse-btn.collapsed {
      transform: rotateZ(90deg);
    }

    @media (max-width: 480px) {
      .player-container {
        padding: 0.375rem 0.5rem;
      }

      .title {
        font-size: var(--sl-font-size-small);
      }

      .time {
        font-size: var(--sl-font-size-x-small);
      }

      .speed-btn {
        display: none;
      }
    }
  `;

  connectedCallback(): void {
    super.connectedCallback();

    const handler = (e: Event) => {
      this._state = (e as CustomEvent<AudioPlayerState>).detail;
      this._checkCacheStatus();
    };

    this._lifecycle.register("stateChange", {
      setup: () => {
        audioPlayerService.addEventListener("state-changed", handler);
        this._state = audioPlayerService.state;
        this._checkCacheStatus();
      },
      cleanup: () => {
        audioPlayerService.removeEventListener("state-changed", handler);
      },
    });
  }

  disconnectedCallback(): void {
    this._lifecycle.cleanupAll();
    super.disconnectedCallback();
  }

  /**
   * Derives display title from config or URL.
   * Falls back to URL filename extraction when title not explicitly provided,
   * which handles legacy content that predates the title metadata field.
   */
  private _getTitle(): string {
    const config = this._state.config;
    if (!config) return "Audio";

    if (config.title) return config.title;

    // Extract filename from URL as fallback
    try {
      const url = new URL(config.url);
      const filename = url.pathname.split("/").pop() ?? "Audio";
      return decodeURIComponent(filename.replace(/\.[^.]+$/, ""));
    } catch {
      return "Audio";
    }
  }

  /**
   * Calculates display time relative to the audio section being played.
   * Supports partial audio playback where startTime/endTime define a subsection
   * of a larger file (e.g., specific ayah within a surah recording).
   */
  private _getEffectiveTime(): { current: number; duration: number } {
    const config = this._state.config;
    const startTime = config?.startTime ?? 0;
    const endTime = config?.endTime ?? this._state.duration;

    // Calculate effective times relative to the section
    const current = this._state.currentTime - startTime;
    const duration = endTime - startTime;

    return {
      current: Math.max(0, current),
      duration: Math.max(0, duration),
    };
  }

  private _handlePlayPause(): void {
    audioPlayerService.toggle();
  }

  private _handleClose(): void {
    audioPlayerService.stop();
  }

  /**
   * Toggles player between expanded and collapsed modes.
   * Sets host attribute so parent components (header) can style based on state
   * using CSS selectors like `kp-audio-player:not([collapsed])`.
   */
  private _toggleCollapse(): void {
    this._isCollapsed = !this._isCollapsed;
  }

  /**
   * Handles click-to-seek on the progress bar.
   * Converts click position to absolute audio time, accounting for
   * startTime/endTime section bounds when playing partial audio.
   */
  private _handleSeek(e: MouseEvent): void {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));

    const config = this._state.config;
    const startTime = config?.startTime ?? 0;
    const endTime = config?.endTime ?? this._state.duration;
    const effectiveDuration = endTime - startTime;

    // Convert percent to absolute time
    const newTime = startTime + percent * effectiveDuration;
    audioPlayerService.seek(newTime);
  }

  private _handleSpeedChange(rate: number): void {
    audioPlayerService.setPlaybackRate(rate);
  }

  /**
   * Converts opus audio to MP3 and triggers browser download.
   * Uses dynamic import for the converter to avoid loading the heavy
   * WASM-based encoding library until actually needed.
   * Preserves Arabic characters in filename for user-friendly downloads.
   */
  private async _handleDownload(): Promise<void> {
    if (this._isConverting || !this._state.config) return;

    this._isConverting = true;
    this._conversionProgress = 0;
    try {
      //  we only import the expensive import when needed
      const { convertOpusToMp3, downloadBlob } = await import(
        "@/services/audio-converter"
      );
      const blob = await convertOpusToMp3(
        this._state.config.url,
        (progress) => {
          this._conversionProgress = Math.round(progress.percent);
        },
      );
      const title = this._getTitle();
      const sanitized = title
        .replace(/[^a-zA-Z0-9\u0600-\u06FF\s-]/g, "")
        .trim();
      const filename = sanitized ? `${sanitized}.mp3` : "audio.mp3";
      downloadBlob(blob, filename);
    } catch (err) {
      console.error("Failed to convert audio:", err);
    } finally {
      this._isConverting = false;
      this._conversionProgress = 0;
    }
  }

  /**
   * Toggles offline caching for current audio.
   * Stores in IndexedDB for offline playback support.
   * Updates UI state immediately on success to provide feedback.
   */
  private async _handleCacheToggle(): Promise<void> {
    if (!this._state.config) return;

    const url = this._state.config.url;
    if (this._isCached) {
      try {
        await audioCache.delete(url);
        this._isCached = false;
      } catch (err) {
        console.error("Failed to remove from cache:", err);
      }
    } else {
      try {
        await audioCache.cache(url, { title: this._getTitle() });
        this._isCached = true;
      } catch (err) {
        console.error("Failed to cache audio:", err);
      }
    }
  }

  /**
   * Checks if current audio is cached for offline use.
   * Uses URL memoization to avoid redundant IndexedDB lookups
   * when state updates don't change the audio source.
   */
  private async _checkCacheStatus(): Promise<void> {
    const url = this._state.config?.url;
    if (!url) {
      this._isCached = false;
      this._lastCheckedUrl = undefined;
      return;
    }

    // Skip if URL hasn't changed
    if (url === this._lastCheckedUrl) return;
    this._lastCheckedUrl = url;

    try {
      this._isCached = await audioCache.isCached(url);
    } catch {
      this._isCached = false;
    }
  }

  render() {
    // Hide player when no config (dismissed or never started)
    if (!this._state.config) {
      return nothing;
    }

    const { current, duration } = this._getEffectiveTime();
    const progress = duration > 0 ? (current / duration) * 100 : 0;
    const title = this._getTitle();

    const containerClasses = this._isCollapsed
      ? "player-container player-collapsed"
      : "player-container";

    return html`
      <div class="${containerClasses}">
        <div class="player-row">
          <sl-icon-button
            class="close-btn"
            name="x-lg"
            label="Close player"
            @click=${this._handleClose}
          ></sl-icon-button>

          <sl-icon-button
            class="collapse-btn ${this._isCollapsed ? "collapsed" : ""}"
            name="chevron-double-down"
            label=${this._isCollapsed ? "Expand player" : "Collapse player"}
            @click=${this._toggleCollapse}
          ></sl-icon-button>

          <span class="title">${title}</span>

          <span class="time">
            ${formatTime(current)} / ${formatTime(duration)}
          </span>

          ${
            this._state.isLoading
              ? html`<sl-spinner></sl-spinner>`
              : html`
                <sl-icon-button
                class="play-pause-btn ${this._isCollapsed ? "collapsed" : ""}"
                  name=${this._state.isPlaying ? "pause-fill" : "play-fill"}
                  label=${this._state.isPlaying ? "Pause" : "Play"}
                  @click=${this._handlePlayPause}
                ></sl-icon-button>
              `
          }

          <sl-dropdown>
            <sl-button slot="trigger" size="small" class="speed-btn">
              ${this._state.playbackRate}x
            </sl-button>
            <sl-menu @sl-select=${(e: CustomEvent) => {
              const rate = Number.parseFloat(
                (e.detail.item as HTMLElement).dataset.rate ?? "1",
              );
              this._handleSpeedChange(rate);
            }}>
              ${PLAYBACK_RATES.map(
                (rate) => html`
                  <sl-menu-item
                    type="checkbox"
                    data-rate=${rate}
                    ?checked=${this._state.playbackRate === rate}
                  >
                    ${rate}x
                  </sl-menu-item>
                `,
              )}
            </sl-menu>
          </sl-dropdown>

          <div class="actions">
            ${
              this._isConverting
                ? html`
                <div class="download-progress">
                  <sl-progress-ring value=${this._conversionProgress}></sl-progress-ring>
                  <span class="progress-text">${this._conversionProgress}</span>
                </div>
              `
                : html`
                <sl-tooltip content="Download as MP3">
                  <sl-icon-button
                    name="download"
                    label="Download as MP3"
                    @click=${this._handleDownload}
                  ></sl-icon-button>
                </sl-tooltip>
              `
            }

            <sl-tooltip content=${this._isCached ? "Remove from offline" : "Save for offline"}>
              <sl-icon-button
                name=${this._isCached ? "cloud-check-fill" : "cloud-arrow-down"}
                label=${this._isCached ? "Remove from offline" : "Save for offline"}
                @click=${this._handleCacheToggle}
              ></sl-icon-button>
            </sl-tooltip>
          </div>
        </div>

        <div class="progress-container" @click=${this._handleSeek}>
          <sl-progress-bar value=${progress}></sl-progress-bar>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-audio-player": AudioPlayerBar;
  }
}
