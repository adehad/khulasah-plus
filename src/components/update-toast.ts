import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import "@shoelace-style/shoelace/dist/components/button/button.js";
import { audioPlayerService } from "@/services/audio-player-service";
import {
  type Countdown,
  type CountdownConditions,
  isPaused,
  startCountdown,
  tickCountdown,
} from "@/utils/update-countdown";

export const UPDATE_APPLY_EVENT = "kp-update-apply";

@customElement("kp-update-toast")
export class UpdateToast extends LitElement {
  @state() private _countdown: Countdown = startCountdown(currentConditions());
  @state() private _applying = false;
  @state() private _audioPlaying = audioPlayerService.state.isPlaying;

  private _intervalId: number | undefined;

  static styles = css`
    :host {
      position: fixed;
      left: 50%;
      bottom: calc(
        var(--border-inset, 0px) + env(safe-area-inset-bottom, 0px) + 0.5rem
      );
      transform: translateX(-50%);
      z-index: 1000;
      width: max-content;
      max-width: calc(100vw - 2 * var(--border-inset, 0px) - 1rem);
    }

    .toast {
      display: flex;
      align-items: center;
      gap: var(--sl-spacing-medium);
      padding: var(--sl-spacing-small) var(--sl-spacing-small)
        var(--sl-spacing-small) var(--sl-spacing-medium);
      background: var(--sl-color-neutral-0);
      color: var(--sl-color-neutral-950);
      border: 1px solid var(--sl-color-primary-300);
      border-radius: var(--sl-border-radius-large);
      box-shadow: var(--sl-shadow-large);
      font-size: var(--sl-font-size-small);
    }

    .text {
      display: flex;
      flex-direction: column;
    }

    .title {
      font-weight: var(--sl-font-weight-semibold);
    }

    .countdown {
      color: var(--sl-color-neutral-600);
      font-variant-numeric: tabular-nums;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this._intervalId = window.setInterval(() => this._tick(), 1000);
    audioPlayerService.addEventListener("state-changed", this._onConditions);
    document.addEventListener("visibilitychange", this._onConditions);
  }

  disconnectedCallback() {
    window.clearInterval(this._intervalId);
    audioPlayerService.removeEventListener("state-changed", this._onConditions);
    document.removeEventListener("visibilitychange", this._onConditions);
    super.disconnectedCallback();
  }

  // Reflects a pause the moment audio starts rather than on the next tick. Audio reports every
  // time update, so the countdown is only replaced when the pause actually changes.
  private _onConditions = () => {
    const conditions = currentConditions();
    this._audioPlaying = conditions.audioPlaying;
    const paused = isPaused(conditions);
    if (paused === this._countdown.paused) return;
    this._countdown = { ...this._countdown, paused };
  };

  private _tick() {
    this._countdown = tickCountdown(this._countdown, currentConditions());
    if (this._countdown.due) this._apply();
  }

  private _apply() {
    if (this._applying) return;
    this._applying = true;
    window.clearInterval(this._intervalId);
    this.dispatchEvent(
      new CustomEvent(UPDATE_APPLY_EVENT, { bubbles: true, composed: true }),
    );
  }

  private _statusText() {
    if (this._applying) return "Updating…";
    // A hidden page holds the countdown too, but it is visible again by the time anyone reads this.
    if (this._countdown.paused && this._audioPlaying)
      return "Waiting until audio stops";
    return `Updating in ${this._countdown.remaining}s`;
  }

  render() {
    return html`
      <div class="toast" role="status" aria-live="polite">
        <div class="text">
          <span class="title">New version available</span>
          <span class="countdown">${this._statusText()}</span>
        </div>
        <sl-button
          variant="primary"
          size="small"
          ?loading=${this._applying}
          @click=${this._apply}
        >
          Update
        </sl-button>
      </div>
    `;
  }
}

function currentConditions(): CountdownConditions {
  return {
    audioPlaying: audioPlayerService.state.isPlaying,
    hidden: document.hidden,
  };
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-update-toast": UpdateToast;
  }
}
