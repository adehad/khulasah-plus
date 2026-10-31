import { css, html, LitElement } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import "@shoelace-style/shoelace/dist/components/tooltip/tooltip.js";
import type SlTooltip from "@shoelace-style/shoelace/dist/components/tooltip/tooltip.js";
import type { FavouriteStar } from "@/components/favourite-star";
import "@/components/favourite-star";
import {
  FAVOURITES_CHANGED,
  type FavouriteNode,
  favourites,
  isFolder,
} from "@/services/favourites-store";
import { currentPageHref, pageTitle } from "@/utils/favourite-href";
import { LifecycleRegistry } from "@/utils/storage";

/** sl-tooltip's own default gap between the tooltip and its anchor, in px */
const TOOLTIP_DEFAULT_DISTANCE = 8;

export type StickyButtonVariant = "chapter" | "verse" | "entry";

/*
 * A page can hold hundreds of numbers, so they share one store listener and one set of favourite hrefs,
 * rebuilt lazily after each change, instead of every button walking the tree on every change.
 */
let pageHref: string | undefined;
let pageLabel: string | undefined;
let favouriteHrefs: Set<string> | undefined;
const favouriteSubscribers = new Set<() => void>();

function collectHrefs(nodes: FavouriteNode[], into = new Set<string>()) {
  for (const node of nodes) {
    if (isFolder(node)) collectHrefs(node.children, into);
    else into.add(node.href);
  }
  return into;
}

function anchorHref(elementId: string): string {
  pageHref ??= currentPageHref();
  return `${pageHref}#${elementId}`;
}

function anchorLabel(label: string | number): string {
  pageLabel ??= pageTitle();
  return `${pageLabel} · ${label}`;
}

function isFavouriteAnchor(href: string): boolean {
  favouriteHrefs ??= collectHrefs(favourites.getTree());
  return favouriteHrefs.has(href);
}

window.addEventListener(FAVOURITES_CHANGED, () => {
  favouriteHrefs = undefined;
  for (const notify of favouriteSubscribers) notify();
});

@customElement("kp-sticky-button")
export class StickyButton extends LitElement {
  @property({ type: String }) label: string | number = "";
  @property({ type: String }) elementId = "";
  @property({ type: String, reflect: true }) variant: StickyButtonVariant =
    "verse";

  willUpdate(changedProperties: Map<string, unknown>) {
    if (changedProperties.has("elementId") && this.elementId) {
      this.id = this.elementId; // set the expected `id` parameter for HTML
      this._refreshFavourite();
    }
  }

  /**
   * Waits for all sticky buttons within a render root to complete their updates.
   * This ensures element IDs are set before navigation/scrolling occurs.
   *
   * @param renderRoot - The render root to search for sticky buttons (shadow root, document, or element)
   */
  static async waitForElementIds(renderRoot: ParentNode): Promise<void> {
    const stickyButtons = renderRoot.querySelectorAll("kp-sticky-button");
    await Promise.all(
      Array.from(stickyButtons).map(
        (btn) => (btn as LitElement).updateComplete,
      ),
    );
  }

  @state() private _tooltipContent = "Copy link";
  /** The star is offered once the user engages with a number, and stays for numbers already favourited. */
  @state() private _starOffered = false;
  @state() private _isFavourite = false;
  @query("sl-tooltip") private _tooltip!: SlTooltip;
  @query("button.sticky") private _button!: HTMLButtonElement;

  /**
   * The star lives in the light DOM at the top of the number's own entry, not in this shadow DOM: everything
   * inside the sticky number travels with it past later entries, so a star there made them look favourited.
   */
  private _star: FavouriteStar | undefined;

  private _lifecycle = new LifecycleRegistry<
    "tooltipTimer" | "favouritesChanged"
  >();
  private _timerId: number | undefined;

  static styles = css`
    /* A block, not inline-block: no line-box gap opens under the number, so its entry starts exactly one
       number height below it, which is where the entry's star (global.css) expects it. Only as wide as the
       number so the star beside it stays clickable. */
    :host {
      display: block;
      width: fit-content;
      position: sticky;
      z-index: 10;
    }

    :host([variant="verse"]) {
      top: var(--kp-verse-number-top);
    }

    .number {
      display: inline-block;
    }

    :host([variant="chapter"]),
    :host([variant="entry"]) {
      top: var(--kp-number-top);
    }

    .sticky {
      inline-size: var(--kp-number-width);
      block-size: var(--kp-number-height);
      text-align: center;
      border-radius: 4px;
      padding: 0;
      font-size: 0.9rem;
      cursor: pointer;
      /* WebKit gives native <button> text a system color (blue on iOS) instead of inheriting;
         force inherit so the number matches the page color on every engine. */
      color: inherit;
      -webkit-text-fill-color: currentColor;
    }

    .sticky.verse {
      block-size: var(--kp-verse-number-height);
      background: var(--sl-color-primary-400);
      border-color: var(--sl-color-primary-400);
    }

    .sticky.chapter,
    .sticky.entry {
      background: var(--sl-color-primary-300);
      border-color: var(--sl-color-primary-300);
      font-weight: bold;
    }
  `;

  private getFullUrl(): string {
    return `${window.location.origin}${window.location.pathname}#${this.elementId}`;
  }

  connectedCallback() {
    super.connectedCallback();
    const refresh = () => this._refreshFavourite();
    this._lifecycle.register("favouritesChanged", {
      setup: () => favouriteSubscribers.add(refresh),
      cleanup: () => favouriteSubscribers.delete(refresh),
    });
    // A reconnected number has to put back the star it took away on disconnect, and may have missed
    // favourite changes while it was detached.
    if (this.hasUpdated) {
      this._refreshFavourite();
      this.requestUpdate();
    }
  }

  private _refreshFavourite() {
    this._isFavourite = isFavouriteAnchor(anchorHref(this.elementId));
  }

  disconnectedCallback() {
    this._lifecycle.cleanupAll();
    this._star?.remove();
    super.disconnectedCallback();
  }

  private async handleClick() {
    window.location.hash = this.elementId;
    this._starOffered = true;
    // Measured here, once the star is placed, rather than in updated(), which would force a layout for
    // every favourited number on the page each time it renders.
    void this.updateComplete.then(() => this._alignTooltip());

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

  updated() {
    this._placeStar();
  }

  /** Only offered or favourited numbers get a star element, so a page of hundreds of numbers stays light */
  private _placeStar() {
    if (!(this._starOffered || this._isFavourite)) {
      this._star?.remove();
      return;
    }
    this._star ??= Object.assign(document.createElement("kp-favourite-star"), {
      className: "number-star",
    });
    this._star.href = anchorHref(this.elementId);
    this._star.label = anchorLabel(this.label);
    // Every section renders a number just before the element it anchors; inside it, the star can stick
    // beside the number but only for as long as its own entry is on screen.
    const entry = this.nextElementSibling;
    if (entry?.id === this.elementId) {
      if (entry.firstElementChild !== this._star) entry.prepend(this._star);
    } else if (this.nextElementSibling !== this._star) {
      this.after(this._star);
    }
  }

  /**
   * "Copied!" stays to the right, where no entry text is, and opens past the star now sharing that row.
   * Placements above or below collided with the header and the qasida chorus tab.
   */
  private _alignTooltip() {
    if (!this._star) return;
    this._tooltip.distance =
      this._star.getBoundingClientRect().right -
      this._button.getBoundingClientRect().right +
      TOOLTIP_DEFAULT_DISTANCE;
  }

  render() {
    return html`
      <span class="number">
        <sl-tooltip content=${this._tooltipContent} trigger="click" placement="right">
          <button class="sticky ${this.variant}" @click=${this.handleClick}>
            ${this.label}
          </button>
        </sl-tooltip>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-sticky-button": StickyButton;
  }
}
