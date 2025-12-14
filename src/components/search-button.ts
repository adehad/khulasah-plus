import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";

import "@shoelace-style/shoelace/dist/components/icon/icon.js";
import "@/components/search-modal";
import { LifecycleRegistry } from "@/utils/storage";

@customElement("kp-search-button")
export class SearchButton extends LitElement {
  @state()
  private isModalOpen = false;

  private _lifecycle = new LifecycleRegistry<"keydown">();

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
    }

    .search-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      border: 1px solid transparent;
      background-color: transparent;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    }

    .search-button:hover {
      background-color: var(--sl-color-primary-100);
      border-color: var(--sl-color-primary-300);
    }

    .search-button sl-icon {
      font-size: 1.5rem;
      color: var(--sl-color-primary-500);
    }
  `;

  connectedCallback(): void {
    super.connectedCallback();

    // Register keyboard shortcut listener (Ctrl/Cmd + K)
    this._lifecycle.register("keydown", {
      setup: () => window.addEventListener("keydown", this.handleGlobalKeyDown),
      cleanup: () =>
        window.removeEventListener("keydown", this.handleGlobalKeyDown),
    });
  }

  disconnectedCallback(): void {
    this._lifecycle.cleanupAll();
    super.disconnectedCallback();
  }

  private handleGlobalKeyDown = (e: KeyboardEvent) => {
    // Ctrl+K or Cmd+K to open search
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      this.openModal();
    }
  };

  private emitBorderStateChange(isBackground: boolean) {
    const event = new CustomEvent("border-state-change", {
      bubbles: true,
      composed: true,
      detail: { background: isBackground },
    });
    this.dispatchEvent(event);
  }

  private openModal() {
    this.isModalOpen = true;
    this.emitBorderStateChange(true);
  }

  private closeModal() {
    this.isModalOpen = false;
    this.emitBorderStateChange(false);
  }

  render() {
    return html`
      <button class="search-button" @click=${this.openModal} title="Search (Ctrl+K)">
        <sl-icon name="search"></sl-icon>
      </button>

      <kp-search-modal
        .open=${this.isModalOpen}
        @close=${this.closeModal}
      ></kp-search-modal>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-search-button": SearchButton;
  }
}
