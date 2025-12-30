/**
 * Audio player service with event-based state management.
 * Provides a singleton wrapper around HTMLAudioElement for recitation playback.
 */

import type { AudioConfig } from "@/models/recitation";

export interface AudioPlayerState {
  config: AudioConfig | null;
  isPlaying: boolean;
  isLoading: boolean;
  currentTime: number;
  duration: number;
  playbackRate: number;
  error: Error | null;
}

export type AudioPlayerEventType = "state-changed";

const DEFAULT_STATE: AudioPlayerState = {
  config: null,
  isPlaying: false,
  isLoading: false,
  currentTime: 0,
  duration: 0,
  playbackRate: 1,
  error: null,
};

/**
 * Singleton audio player service.
 * Emits 'state-changed' events when playback state changes.
 */
class AudioPlayerService extends EventTarget {
  private _audio = new Audio();
  private _state: AudioPlayerState = { ...DEFAULT_STATE };
  // Stored so we can remove it when rapidly switching tracks before metadata loads
  private _pendingSeekHandler: (() => void) | null = null;

  constructor() {
    super();
    this._setupAudioEventListeners();
  }

  private _setupAudioEventListeners(): void {
    const audio = this._audio;

    audio.addEventListener("loadstart", () => {
      this._updateState({ isLoading: true, error: null });
    });

    audio.addEventListener("loadedmetadata", () => {
      this._updateState({
        duration: audio.duration,
        isLoading: false,
      });
    });

    audio.addEventListener("loadeddata", () => {
      this._updateState({ isLoading: false });
    });

    audio.addEventListener("play", () => {
      this._updateState({ isPlaying: true });
    });

    audio.addEventListener("pause", () => {
      this._updateState({ isPlaying: false });
    });

    audio.addEventListener("ended", () => {
      const startTime = this._state.config?.startTime ?? 0;
      this._updateState({ isPlaying: false, currentTime: startTime });
    });

    audio.addEventListener("timeupdate", () => {
      const config = this._state.config;
      const currentTime = audio.currentTime;

      // Pause if we've reached the endTime boundary
      if (config?.endTime !== undefined && currentTime >= config.endTime) {
        audio.pause();
        this._updateState({ currentTime: config.endTime, isPlaying: false });
        return;
      }

      this._updateState({ currentTime });
    });

    audio.addEventListener("ratechange", () => {
      this._updateState({ playbackRate: audio.playbackRate });
    });

    audio.addEventListener("error", () => {
      const error = new Error(
        audio.error?.message ?? "Unknown audio error occurred",
      );
      this._updateState({ error, isLoading: false, isPlaying: false });
    });

    audio.addEventListener("waiting", () => {
      this._updateState({ isLoading: true });
    });

    audio.addEventListener("canplay", () => {
      this._updateState({ isLoading: false });
    });
  }

  private _updateState(partial: Partial<AudioPlayerState>): void {
    this._state = { ...this._state, ...partial };
    this.dispatchEvent(
      new CustomEvent("state-changed", { detail: this._state }),
    );
  }

  get state(): AudioPlayerState {
    return { ...this._state };
  }

  get audio(): HTMLAudioElement {
    return this._audio;
  }

  /**
   * Play a new track or resume current track.
   * If config has startTime, seeks to that position before playing.
   */
  play(config?: AudioConfig): void {
    if (config) {
      const isNewTrack = this._state.config?.url !== config.url;
      if (isNewTrack) {
        // Remove any pending seek handler from previous track
        if (this._pendingSeekHandler) {
          this._audio.removeEventListener(
            "loadedmetadata",
            this._pendingSeekHandler,
          );
          this._pendingSeekHandler = null;
        }

        this._audio.src = config.url;
        const startTime = config.startTime ?? 0;
        const targetUrl = config.url;
        this._updateState({
          config,
          currentTime: startTime,
          duration: 0,
          error: null,
        });

        // Seek to startTime once metadata is loaded
        if (startTime > 0) {
          this._pendingSeekHandler = () => {
            // Verify this is still the intended track before seeking
            if (this._state.config?.url === targetUrl) {
              this._audio.currentTime = startTime;
            }
            this._pendingSeekHandler = null;
          };
          this._audio.addEventListener(
            "loadedmetadata",
            this._pendingSeekHandler,
            { once: true },
          );
        }
      }
    } else if (!this._state.config) {
      // No track loaded, nothing to play
      return;
    }
    this._audio.play().catch((err) => {
      this._updateState({
        error: err instanceof Error ? err : new Error(String(err)),
        isPlaying: false,
      });
    });
  }

  /**
   * Pause playback.
   */
  pause(): void {
    this._audio.pause();
  }

  /**
   * Toggle play/pause.
   */
  toggle(): void {
    if (this._state.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  /**
   * Seek to a specific time in seconds.
   * If config has startTime/endTime, clamps to those boundaries.
   */
  seek(time: number): void {
    if (!Number.isFinite(time) || time < 0) return;
    const config = this._state.config;
    const minTime = config?.startTime ?? 0;
    const maxTime =
      config?.endTime !== undefined
        ? config.endTime
        : Number.isFinite(this._audio.duration)
          ? this._audio.duration
          : time;
    const clampedTime = Math.max(minTime, Math.min(time, maxTime));
    this._audio.currentTime = clampedTime;
  }

  /**
   * Restart playback from the beginning (startTime or 0).
   */
  restart(): void {
    const startTime = this._state.config?.startTime ?? 0;
    this._audio.currentTime = startTime;
    this.play();
  }

  /**
   * Set playback rate (speed).
   * Clamp as browsers mute audio outside the ~0.5–4.0 range to maintain quality.
   */
  setPlaybackRate(rate: number): void {
    if (rate > 0 && rate <= 4) {
      this._audio.playbackRate = rate;
    }
  }

  /**
   * Stop playback and reset state (clears config, hides player).
   */
  stop(): void {
    this._audio.pause();
    this._audio.currentTime = 0;
    this._audio.src = "";
    this._updateState({ ...DEFAULT_STATE });
  }
}

export const audioPlayerService = new AudioPlayerService();
