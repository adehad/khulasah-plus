import type { TemplateResult } from "lit";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BaseRecitation } from "@/components/base-recitation";
import { DhikrModel, QuranModel, type WirdModel } from "@/models/recitation.ts";
import "@/components/dhikr.ts";
import "@/components/sticky-button.ts";
import "@/components/quran.ts";
import { textStyles } from "@/styles/shared-styles.ts";

@customElement("kp-wird")
export class Wird extends BaseRecitation {
  @property({ type: Object }) recitation!: WirdModel;

  static styles = [...BaseRecitation.styles, textStyles];

  updated(changedProperties: Map<string | symbol, unknown>) {
    if (changedProperties.has("recitation")) {
      this.handleHashChange();
      this.updateToc();
    }
  }

  renderEntry(entry: DhikrModel | QuranModel, index: number): TemplateResult {
    const entry_num = index + 1;
    const elementId = `${entry_num}`;
    if (entry instanceof DhikrModel) {
      return html`
        <kp-sticky-button
          label=${entry_num}
          elementId=${elementId}
          variant="entry"
        ></kp-sticky-button>
        <kp-dhikr .recitation=${entry}></kp-dhikr>
      `;
    } else if (entry instanceof QuranModel) {
      return html`
        <kp-sticky-button
          label=${entry_num}
          elementId=${elementId}
          variant="entry"
        ></kp-sticky-button>
        <kp-mushaf .recitation=${entry}></kp-mushaf>
      `;
    }
    throw new Error(`Unhandled entry type`); // 'entry'
  }

  render() {
    const instruction = this.recitation.instruction
      ? html`<p class="instruction">${this.recitation.instruction}</p>`
      : "";
    return html`
      <div class="wird-container">
        ${instruction}
        ${this.recitation.entries.map((entry, i) => this.renderEntry(entry, i))}
      </div>
    `;
  }
}
