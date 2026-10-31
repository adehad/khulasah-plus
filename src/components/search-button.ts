import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";

import "@shoelace-style/shoelace/dist/components/icon/icon.js";
import "@/components/search-modal";
import { LifecycleRegistry } from "@/utils/storage";

export const SEARCH_PARAM = "search";
// Lets a launch into an already-open window open search without a reload.
export const OPEN_SEARCH_EVENT = "kp-open-search";

@customElement("kp-search-button")
export class SearchButton extends LitElement {
  @state()
  private isModalOpen = false;

  private _lifecycle = new LifecycleRegistry<"keydown" | "openSearch">();

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
    }

    .search-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--kp-circle-btn-size, 2.5rem);
      height: var(--kp-circle-btn-size, 2.5rem);
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

    this._lifecycle.register("openSearch", {
      setup: () => window.addEventListener(OPEN_SEARCH_EVENT, this.openModal),
      cleanup: () =>
        window.removeEventListener(OPEN_SEARCH_EVENT, this.openModal),
    });

    this.openFromSearchParam();
  }

  // The manifest's Search shortcut launches "/?search"; the param is dropped
  // afterwards so a reload or shared link doesn't reopen the dialog.
  private openFromSearchParam() {
    const url = new URL(window.location.href);
    if (!url.searchParams.has(SEARCH_PARAM)) return;
    url.searchParams.delete(SEARCH_PARAM);
    history.replaceState(history.state, "", url);
    this.openModal();
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

  private openModal = () => {
    this.isModalOpen = true;
  };

  private closeModal() {
    this.isModalOpen = false;
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
