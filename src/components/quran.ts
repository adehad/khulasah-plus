import { css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { html } from "lit/static-html.js";
import { BaseRecitation } from "@/components/base-recitation";
import type { QuranModel } from "@/models/recitation.ts";
import "@/components/quran-entry.ts";

import { textStyles } from "@/styles/shared-styles.ts";

@customElement("kp-mushaf")
export class Quran extends BaseRecitation {
  @property({ type: Object }) recitation!: QuranModel;

  static styles = [
    textStyles,
    css`
      .entry {
        margin-bottom: 1em;
      }

      .arabic {
        font-family: 'Uthmanic Hafs', serif;
        font-size: 2.2em;
        text-align: right;
      }
    `,
  ];

  render() {
    const firstVerse = this.recitation.entries[0]?.verse;
    const lastVerse =
      this.recitation.entries[this.recitation.entries.length - 1]?.verse;

    return html`
      <div class="quran-container">
        <h2>${this.recitation.title}</h2>
        <p>${this.recitation.instruction}</p>
        <span class="arabic">﴿</span>
        ${this.recitation.entries.map(
          (entry) => html`<kp-mushaf-entry .entry=${entry}></kp-mushaf-entry>`,
        )}
        <span class="arabic">﴾</span>
        <kp-footnote type="quran">Surah ${this.recitation.title} (${this.recitation.surah}):${firstVerse}-${lastVerse}</kp-footnote>
      </div>
    `;
  }
}
