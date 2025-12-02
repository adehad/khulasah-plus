import { css, html, LitElement } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import "@shoelace-style/shoelace/dist/components/tooltip/tooltip.js";
import type SlTooltip from "@shoelace-style/shoelace/dist/components/tooltip/tooltip.js";
import { LifecycleRegistry } from "@/utils/storage";

export type StickyButtonVariant = "chapter" | "verse" | "entry";

@customElement("kp-sticky-button")
export class StickyButton extends LitElement {
  @property({ type: String }) label: string | number = "";
  @property({ type: String }) elementId = "";
  @property({ type: String, reflect: true }) variant: StickyButtonVariant =
    "verse";

  @state() private _tooltipContent = "Copy link";
  @query("sl-tooltip") private _tooltip!: SlTooltip;

  // Registry for lifecycle management (setup/cleanup pairs)
  private _lifecycle = new LifecycleRegistry<"tooltipTimer">();
  private _timerId: number | undefined;

  static styles = css`
    :host {
      display: inline-block;
      position: sticky;
      z-index: 10;
    }

    :host([variant="verse"]) {
      top: 4rem;
    }

    :host([variant="chapter"]),
    :host([variant="entry"]) {
      top: 1rem;
    }

    .sticky {
      width: 4ch;
      text-align: center;
      border-radius: 4px;
      padding: 0.3rem 1ch;
      font-size: 0.9rem;
      cursor: pointer;
    }

    .sticky.verse {
      background: var(--sl-color-primary-400);
      border-color: var(--sl-color-primary-400);
    }

    .sticky.chapter,
    .sticky.entry {
      background: var(--sl-color-primary-300);
      border-color: var(--sl-color-primary-300);
      padding: 0.5rem 1ch;
      font-weight: bold;
    }
  `;

  private getFullUrl(): string {
    return `${window.location.origin}${window.location.pathname}#${this.elementId}`;
  }

  disconnectedCallback() {
    this._lifecycle.cleanupAll();
    super.disconnectedCallback();
  }

  private async handleClick() {
    // Set the hash for navigation
    window.location.hash = this.elementId;

    try {
      await navigator.clipboard.writeText(this.getFullUrl());
      this._tooltipContent = "Copied!";
    } catch {
      this._tooltipContent = "Failed to copy";
    }

    // Auto-dismiss after 1.5 seconds - re-register runs cleanup first if exists
    this._lifecycle.register("tooltipTimer", {
      setup: () => {
        this._timerId = window.setTimeout(() => {
          this._tooltip?.hide();
          this._tooltipContent = "Copy link";
        }, 1500);
      },
      cleanup: () => clearTimeout(this._timerId),
    });
  }

  render() {
    return html`
      <sl-tooltip content=${this._tooltipContent} trigger="click" placement="right">
        <button class="sticky ${this.variant}" @click=${this.handleClick}>
          ${this.label}
        </button>
      </sl-tooltip>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-sticky-button": StickyButton;
  }
}
