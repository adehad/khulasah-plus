import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import "@shoelace-style/shoelace/dist/components/dialog/dialog.js";
import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@shoelace-style/shoelace/dist/components/input/input.js";
import type SlInput from "@shoelace-style/shoelace/dist/components/input/input.js";
import { storage } from "@/utils/storage";

/**
 * Interactive counter component for tracking dhikr repetitions.
 * Displays increment/decrement buttons, current count, and celebrates when target is reached.
 */
@customElement("kp-dhikr-counter")
export class DhikrCounter extends LitElement {
  /** Target number of repetitions for this dhikr */
  @property({ type: Number }) target = 0;

  /** Unique key for persisting this counter's value in localStorage */
  @property({ type: String }) storageKey = "";

  /** User's current count progress toward the target */
  @state() private _userCount = 0;

  /** Controls visibility of the manual count input dialog */
  @state() private _isManualCountInputDialogOpen = false;

  /** Controls visibility of the reset confirmation dialog */
  @state() private _isResetConfirmationDialogOpen = false;

  /** Temporary value in the manual count input dialog, saved on confirm */
  @state() private _manualCountInput = "";

  static styles = css`
    :host {
      display: block;
      margin-top: 1rem;
    }

    .counter-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .counter-btn {
      min-width: 2.5rem;
      padding: 0.4rem 0.6rem;
      border: 1px solid var(--sl-color-primary-400);
      background: var(--sl-color-primary-50);
      color: var(--sl-color-primary-700);
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.2s ease;
      font-size: 0.85rem;
    }

    .counter-btn:hover {
      background: var(--sl-color-primary-100);
      border-color: var(--sl-color-primary-500);
    }

    .counter-btn:active {
      transform: scale(0.95);
    }

    .count-display {
      min-width: 5rem;
      padding: 0.4rem 0.8rem;
      border: 2px solid var(--sl-color-primary-300);
      background: var(--sl-color-neutral-0);
      border-radius: 8px;
      text-align: center;
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .count-display:hover {
      border-color: var(--sl-color-primary-500);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .count-display.completed {
      border-color: var(--sl-color-success-500);
      background: var(--sl-color-success-50);
      color: var(--sl-color-success-700);
    }

    .celebration {
      margin-left: 0.3rem;
    }

    .reset-btn {
      padding: 0.4rem 0.6rem;
      border: 1px solid var(--sl-color-danger-400);
      background: var(--sl-color-danger-50);
      color: var(--sl-color-danger-700);
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.2s ease;
      font-size: 0.85rem;
    }

    .reset-btn:hover {
      background: var(--sl-color-danger-100);
      border-color: var(--sl-color-danger-500);
    }

    :host(.bounce) .count-display {
      animation: bounce 0.6s ease;
    }

    @keyframes bounce {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-10px);
      }
      60% {
        transform: translateY(-5px);
      }
    }

    .dialog-actions {
      display: flex;
      gap: 0.5rem;
      justify-content: flex-end;
      margin-top: 1rem;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this._loadUserCountFromStorage();
  }

  // ===========================================================================
  // Storage Operations
  // ===========================================================================

  private _loadUserCountFromStorage() {
    const counters = storage.get("dhikrCounters");
    this._userCount = counters[this.storageKey] ?? 0;
  }

  private _saveUserCountToStorage() {
    storage.update("dhikrCounters", (counters) => ({
      ...counters,
      [this.storageKey]: this._userCount,
    }));
  }

  // ===========================================================================
  // Counter Operations
  // ===========================================================================

  private _incrementUserCount(amount: number) {
    const wasUnderTarget = this._userCount < this.target;
    this._userCount += amount;
    this._saveUserCountToStorage();

    if (wasUnderTarget && this._userCount >= this.target) {
      this._triggerCelebrationBounce();
    }
  }

  private _decrementUserCount(amount: number) {
    this._userCount = Math.max(0, this._userCount - amount);
    this._saveUserCountToStorage();
  }

  /** Plays a bounce animation when user reaches or exceeds target */
  private _triggerCelebrationBounce() {
    this.classList.add("bounce");
    setTimeout(() => this.classList.remove("bounce"), 600);
  }

  // ===========================================================================
  // Manual Count Input Dialog - Allows user to manually set their count
  // ===========================================================================

  private _openManualCountInputDialog() {
    this._manualCountInput = String(this._userCount);
    this._isManualCountInputDialogOpen = true;
  }

  private _closeManualCountInputDialog() {
    this._isManualCountInputDialogOpen = false;
  }

  private _updateManualCountInput(e: Event) {
    this._manualCountInput = (e.target as SlInput).value;
  }

  private _saveManualCountInput() {
    const newValue = Number.parseInt(this._manualCountInput, 10);
    if (!Number.isNaN(newValue) && newValue >= 0) {
      this._userCount = newValue;
      this._saveUserCountToStorage();
    }
    this._closeManualCountInputDialog();
  }

  private _renderManualCountInputDialog() {
    return html`
      <sl-dialog
        ?open=${this._isManualCountInputDialogOpen}
        @sl-hide=${this._closeManualCountInputDialog}
        label="Edit Count"
      >
        <sl-input
          type="number"
          min="0"
          value=${this._manualCountInput}
          @sl-input=${this._updateManualCountInput}
        ></sl-input>
        <div slot="footer" class="dialog-actions">
          <sl-button
            variant="default"
            @click=${this._closeManualCountInputDialog}
          >
            Cancel
          </sl-button>
          <sl-button variant="primary" @click=${this._saveManualCountInput}>
            Save
          </sl-button>
        </div>
      </sl-dialog>
    `;
  }

  // ===========================================================================
  // Reset Confirmation Dialog - Confirms before resetting count to zero
  // ===========================================================================

  private _openResetConfirmationDialog() {
    this._isResetConfirmationDialogOpen = true;
  }

  private _closeResetConfirmationDialog() {
    this._isResetConfirmationDialogOpen = false;
  }

  private _confirmResetToZero() {
    this._userCount = 0;
    this._saveUserCountToStorage();
    this._closeResetConfirmationDialog();
  }

  private _renderResetConfirmationDialog() {
    return html`
      <sl-dialog
        ?open=${this._isResetConfirmationDialogOpen}
        @sl-hide=${this._closeResetConfirmationDialog}
        label="Reset Counter"
      >
        <p>Are you sure you want to reset the counter to 0?</p>
        <div slot="footer" class="dialog-actions">
          <sl-button
            variant="default"
            @click=${this._closeResetConfirmationDialog}
          >
            Cancel
          </sl-button>
          <sl-button variant="danger" @click=${this._confirmResetToZero}>
            Reset
          </sl-button>
        </div>
      </sl-dialog>
    `;
  }

  // ===========================================================================
  // Main Counter UI
  // ===========================================================================

  private _renderCounterControls() {
    const hasReachedTarget = this._userCount >= this.target;

    return html`
      <div class="counter-container">
        <button
          class="counter-btn"
          @click=${() => this._decrementUserCount(10)}
        >
          -10
        </button>
        <button class="counter-btn" @click=${() => this._decrementUserCount(1)}>
          -1
        </button>

        <div
          class="count-display ${hasReachedTarget ? "completed" : ""}"
          @click=${this._openManualCountInputDialog}
          title="Click to edit"
        >
          ${this._userCount}/${this.target}
          ${hasReachedTarget ? html`<span class="celebration">🎉</span>` : ""}
        </div>

        <button class="counter-btn" @click=${() => this._incrementUserCount(1)}>
          +1
        </button>
        <button
          class="counter-btn"
          @click=${() => this._incrementUserCount(10)}
        >
          +10
        </button>

        <button class="reset-btn" @click=${this._openResetConfirmationDialog}>
          ↺
        </button>
      </div>
    `;
  }

  render() {
    return html`
      ${this._renderCounterControls()}
      ${this._renderManualCountInputDialog()}
      ${this._renderResetConfirmationDialog()}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-dhikr-counter": DhikrCounter;
  }
}
