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

      .basmallah {
        font-family: 'Amiri', 'Uthmanic Hafs', serif;
        font-size: calc(var(--arabic-font-size)*0.7);
      }
    `,
  ];

  render() {
    const firstVerse = this.recitation.entries[0]?.verse;
    const lastVerse =
      this.recitation.entries[this.recitation.entries.length - 1]?.verse;

    const instruction = this.recitation.instruction
      ? html`<p class="instruction">${this.recitation.instruction}</p>`
      : "";

    const basmallah = this.recitation.basmallah
      ? html`<p class="arabic basmallah">﷽</p>`
      : "";

    return html`
      <div class="quran-container">
        ${instruction}
        ${basmallah}
        ${this.recitation.entries.map(
          (entry, i) =>
            html`<kp-mushaf-entry
                  .entry=${entry}
                  .openingBrace=${i === 0}
                  .closingBrace=${i === this.recitation.entries.length - 1}>
                </kp-mushaf-entry>`,
        )}
        <kp-footnote type="quran">Surah ${this.recitation.title} (${this.recitation.surah}):${firstVerse}-${lastVerse}</kp-footnote>
      </div>
    `;
  }
}
