import { css, LitElement } from "lit";

export class BaseRecitation extends LitElement {
  private boundHandleHashChange = () => this.handleHashChange();

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
    window.addEventListener("hashchange", this.boundHandleHashChange);
  }

  disconnectedCallback() {
    window.removeEventListener("hashchange", this.boundHandleHashChange);
    super.disconnectedCallback();
  }

  handleHashChange() {
    queueMicrotask(() => {
      const hash = window.location.hash;
      if (hash) {
        const elementId = hash.substring(1);
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
