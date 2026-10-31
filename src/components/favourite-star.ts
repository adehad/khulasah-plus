/**
 * Star toggle for one favourite href. It never edits favourites itself: clicking asks the single
 * kp-favourite-dialog to open, so every placement shares one add/edit/remove flow.
 */

import { css, html, LitElement, type PropertyValues, svg } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { FAVOURITES_CHANGED, favourites } from "@/services/favourites-store";
import { LifecycleRegistry } from "@/utils/storage";

export const FAVOURITE_OPEN = "kp-favourite-open";

export interface FavouriteOpenDetail {
  href: string;
  title: string;
}

/**
 * Bootstrap Icons "star" and "star-fill", inlined so the star never waits on the icon CDN. They duplicate
 * InlineIcon.astro's paths because a Lit component cannot render an Astro component.
 */
const STAR_OUTLINE = svg`<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>`;
const STAR_FILL = svg`<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>`;

@customElement("kp-favourite-star")
export class FavouriteStar extends LitElement {
  @property({ type: String }) href = "";
  @property({ type: String }) label = "";

  @state() private _isFavourite = false;

  /** sl-dialog hands focus back to this host when it closes; delegating passes it on to the button. */
  static shadowRootOptions: ShadowRootInit = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  private _lifecycle = new LifecycleRegistry<"favouritesChanged">();

  static styles = css`
    :host {
      display: inline-flex;
      vertical-align: middle;
    }

    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      /* A placement can widen the hit area around an unchanged icon */
      padding: var(--kp-favourite-star-padding, 0.25rem);
      border: none;
      border-radius: 50%;
      /* A placement that overlaps text gives the star an opaque backdrop */
      background: var(--kp-favourite-star-background, none);
      cursor: pointer;
      color: inherit;
      -webkit-text-fill-color: currentColor;
      transition: background-color 0.2s ease-in-out;
    }

    button:hover {
      background-color: var(--sl-color-primary-100);
    }

    button:focus-visible {
      outline: var(--sl-focus-ring);
      outline-offset: 1px;
    }

    button.favourited {
      color: var(--kp-favourite-color);
    }

    svg {
      /* Sized from outside so each placement can scale the star to its neighbours */
      width: var(--kp-favourite-star-size, 1.25rem);
      height: var(--kp-favourite-star-size, 1.25rem);
      fill: currentColor;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    const refresh = () => {
      this._isFavourite = favourites.isFavourite(this.href);
    };
    this._lifecycle.register("favouritesChanged", {
      setup: () => window.addEventListener(FAVOURITES_CHANGED, refresh),
      cleanup: () => window.removeEventListener(FAVOURITES_CHANGED, refresh),
    });
  }

  disconnectedCallback() {
    this._lifecycle.cleanupAll();
    super.disconnectedCallback();
  }

  willUpdate(changed: PropertyValues<this>) {
    if (changed.has("href")) {
      this._isFavourite = favourites.isFavourite(this.href);
    }
  }

  private _open() {
    window.dispatchEvent(
      new CustomEvent<FavouriteOpenDetail>(FAVOURITE_OPEN, {
        detail: { href: this.href, title: this.label },
      }),
    );
  }

  render() {
    // The state is in the label, not aria-pressed: the button opens a dialog rather than toggling.
    const action = this._isFavourite ? "Edit favourite" : "Add favourite";
    return html`
      <button
        type="button"
        class=${this._isFavourite ? "favourited" : ""}
        aria-label=${this.label ? `${action}: ${this.label}` : action}
        aria-haspopup="dialog"
        @click=${this._open}
      >
        <svg viewBox="0 0 16 16" aria-hidden="true">
          ${this._isFavourite ? STAR_FILL : STAR_OUTLINE}
        </svg>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-favourite-star": FavouriteStar;
  }
  interface WindowEventMap {
    [FAVOURITE_OPEN]: CustomEvent<FavouriteOpenDetail>;
  }
}
