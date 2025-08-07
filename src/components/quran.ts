import { css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { html } from "lit/static-html.js";
import { BaseRecitation } from "./base-recitation";

@customElement("kp-mushaf")
export class Quran extends BaseRecitation {
  @property({ type: Number }) surah = 0;

  static styles = css`
      .entry {
        margin-bottom: 1em;
      }

      .arabic {
        font-family: 'Uthmanic Hafs', serif;
        font-size: 2.2em;
        text-align: right;
      }
    `;

  render() {
    const entries = Array.from(this.querySelectorAll("kp-mushaf-entry"));
    const firstVerse = entries[0]?.getAttribute("verse");
    const lastVerse = entries[entries.length - 1]?.getAttribute("verse");

    return html`
      <div class="quran-container">
        <span class="arabic">﴿</span>
        <slot></slot>
        <span class="arabic">﴾</span>
        <kp-footnote type="quran">Surah ${this.title} (${this.surah}):${firstVerse}-${lastVerse}</kp-footnote>
      </div>
    `;
  }
}
