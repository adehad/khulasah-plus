import { css, LitElement } from "lit";
import { LifecycleRegistry } from "@/utils/storage";

export class BaseRecitation extends LitElement {
  private _lifecycle = new LifecycleRegistry<"hashChange">();

  static styles = [
    css`
      button.sticky {
        position: sticky;
        width: 4ch;
        text-align: center;
        border-radius: 4px;
        padding: 0.3rem 1ch;
        font-size: 0.9rem;
        cursor: pointer;
        z-index: 10;
      }

      button.sticky.verse-num {
        top: 4rem;
        right: 0;
        background: var(--sl-color-primary-400);
        border-color: var(--sl-color-primary-400);
      }

      button.sticky.chapter-num {
        top: 1rem;
        background: var(--sl-color-primary-300);
        border-color: var(--sl-color-primary-300);
        padding: 0.5rem 1ch;
        font-weight: bold;
      }

      button.sticky.entry-num {
        top: 1rem;
        background: var(--sl-color-primary-300);
        border-color: var(--sl-color-primary-300);
        padding: 0.5rem 1ch;
        font-weight: bold;
      }
    `,
  ];

  firstUpdated() {
    const handler = () => this.handleHashChange();
    this._lifecycle.register("hashChange", {
      setup: () => window.addEventListener("hashchange", handler),
      cleanup: () => window.removeEventListener("hashchange", handler),
    });
  }

  disconnectedCallback() {
    this._lifecycle.cleanupAll();
    super.disconnectedCallback();
  }

  /**
   * Extracts the element ID from a URL hash, handling text fragment directive syntax.
   *
   * URL format: #elementId:~:text=searchterm
   * - The :~: delimiter separates element ID from text fragment
   * - Browser handles text fragment natively; we only scroll to element ID
   *
   * @example
   * "#wird-31" → "wird-31"
   * "#wird-31:~:text=bismillah" → "wird-31"
   * "#:~:text=searchterm" → "" (no element ID)
   */
  protected extractElementIdFromHash(hash: string): string {
    if (!hash || hash.length <= 1) return "";

    // Remove leading #
    const fragment = hash.substring(1);

    // Check for text fragment delimiter :~:
    const delimiterIndex = fragment.indexOf(":~:");
    if (delimiterIndex !== -1) {
      // Return only the element ID portion (before the delimiter)
      return fragment.substring(0, delimiterIndex);
    }

    return fragment;
  }

  handleHashChange() {
    queueMicrotask(() => {
      const hash = window.location.hash;
      const elementId = this.extractElementIdFromHash(hash);

      if (elementId) {
        const element = this.renderRoot.querySelector(`#${elementId}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  }

  setWindowHash(hash: string) {
    window.location.hash = hash;
  }

  protected updateToc() {
    queueMicrotask(() => {
      const headers = this.renderRoot.querySelectorAll("h1, h2, h3");
      const tocItems = Array.from(headers).map((header) => {
        return { text: header.textContent || "", id: header.id };
      });

      const event = new CustomEvent("toc-updated", {
        detail: { tocItems },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(event);
    });
  }
}
