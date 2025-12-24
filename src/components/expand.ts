import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import type { ExpandModel } from "@/models/recitation";
import { styles } from "@/styles/shared-styles";
import { LifecycleRegistry } from "@/utils/storage";

/**
 * A collapsible content wrapper component.
 *
 * Renders a button (styled like NavButton) with a rotating chevron indicator.
 * Clicking toggles visibility of the child content.
 *
 * @element kp-expand
 * @prop {ExpandModel} model - The expand model containing title, entries, and startExpanded state.
 */
@customElement("kp-expand")
export class Expand extends LitElement {
  @property({ attribute: false }) model!: ExpandModel;
  @state() private expanded = false;

  private _lifecycle = new LifecycleRegistry<"hashChange">();

  static styles = [
    styles,
    css`
      :host {
        padding: 8px;
        display: flex;
        flex-direction: column;
      }

      .expand-button {
        width: 100%;
        border: none;
        background-color: var(--sl-color-primary-100);
        color: var(--sl-color-neutral-950);
        padding: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        border-radius: var(--sl-border-radius-medium);
        font-size: 1rem;
        font-family: inherit;
      }

      .expand-button:hover {
        background-color: var(--sl-color-primary-200);
      }

      .chevron {
        transition: transform 0.2s ease;
      }

      .chevron.expanded {
        transform: rotate(180deg);
      }

      .content {
        display: none;
      }

      .content.expanded {
        display: block;
      }
    `,
  ];

  connectedCallback() {
    super.connectedCallback();
    this.expanded = this.model.startExpanded;

    // Listen for hash changes
    const handler = () => this._checkHashAndExpand();
    this._lifecycle.register("hashChange", {
      setup: () => window.addEventListener("hashchange", handler),
      cleanup: () => window.removeEventListener("hashchange", handler),
    });
  }

  firstUpdated() {
    // Check initial hash after first render completes
    this._checkHashAndExpand();
  }

  disconnectedCallback() {
    this._lifecycle.cleanupAll();
    super.disconnectedCallback();
  }

  /**
   * Check if the URL hash points to an element inside this expand,
   * and if so, expand to reveal it.
   */
  private _checkHashAndExpand() {
    const hash = window.location.hash;
    if (!hash || hash.length <= 1) return;

    const elementId = this._extractElementIdFromHash(hash);
    if (!elementId) return;

    // Use queueMicrotask to allow render to complete
    queueMicrotask(() => {
      const target = this._findElementById(elementId);
      if (target && !this.expanded) {
        this.expanded = true;
      }
    });
  }

  /**
   * Recursively searches for an element by ID within this component's
   * shadow DOM and all nested shadow DOMs.
   */
  private _findElementById(elementId: string): Element | null {
    const escapedId = CSS.escape(elementId);
    return this._searchShadowRoot(this.renderRoot, escapedId);
  }

  private _searchShadowRoot(
    root: ParentNode,
    escapedId: string,
  ): Element | null {
    // Direct query in this shadow root
    const direct = root.querySelector(`#${escapedId}`);
    if (direct) return direct;

    // Search nested shadow roots
    const allElements = root.querySelectorAll("*");
    for (const el of allElements) {
      if (el.shadowRoot) {
        const found = this._searchShadowRoot(el.shadowRoot, escapedId);
        if (found) return found;
      }
    }
    return null;
  }

  /**
   * Extracts the element ID from a URL hash, handling text fragment directive syntax.
   * "#elementId:~:text=foo" → "elementId"
   */
  private _extractElementIdFromHash(hash: string): string {
    const fragment = hash.substring(1);
    const delimiterIndex = fragment.indexOf(":~:");
    return delimiterIndex !== -1
      ? fragment.substring(0, delimiterIndex)
      : fragment;
  }

  private toggle() {
    this.expanded = !this.expanded;
  }

  render() {
    return html`
      <button class="expand-button" @click=${this.toggle}>
        ${this.model.title}
        <sl-icon
          name="chevron-down"
          class="chevron ${this.expanded ? "expanded" : ""}"
        ></sl-icon>
      </button>
      <div class="content ${this.expanded ? "expanded" : ""}">
        ${this.model.entries.map((entry) => entry.render())}
      </div>
    `;
  }
}
