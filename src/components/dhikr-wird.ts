import type { TemplateResult } from "lit";
import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BaseRecitation } from "@/components/base-recitation";
import { DhikrModel, QuranModel, type WirdModel } from "@/models/recitation.ts";
import "@/components/dhikr.ts";
import { StickyButton } from "@/components/sticky-button.ts";
import "@/components/quran.ts";
import { textStyles } from "@/styles/shared-styles.ts";
import { slugify } from "@/utils/string.ts";

@customElement("kp-wird")
export class Wird extends BaseRecitation {
  @property({ type: Object }) recitation!: WirdModel;

  static styles = [
    ...BaseRecitation.styles,
    textStyles,
    css`
    .wird-title {
      text-align: center;
    }
    `,
  ];

  async updated(changedProperties: Map<string | symbol, unknown>) {
    if (changedProperties.has("recitation")) {
      // Wait for this component's update to complete
      await this.updateComplete;

      // Wait for all child sticky buttons to finish their updates (setting IDs)
      await StickyButton.waitForElementIds(this.renderRoot);

      this.handleHashChange();
      this.updateToc();
    }
  }

  renderEntry(entry: DhikrModel | QuranModel, index: number): TemplateResult {
    const entry_num = index + 1;
    const wirdSlug = this.recitation.title
      ? slugify(this.recitation.title)
      : `${index}`;
    const elementId = `${wirdSlug}-${entry_num}`;

    if (entry instanceof DhikrModel) {
      return html`
        <kp-sticky-button
          label=${entry_num}
          elementId=${elementId}
          variant="entry"
        ></kp-sticky-button>
        <kp-dhikr
          id="${elementId}"
          .recitation=${entry}
          .wirdEntryIndex=${index}
        ></kp-dhikr>
      `;
    }
    if (entry instanceof QuranModel) {
      return html`
        <kp-sticky-button
          label=${entry_num}
          elementId=${elementId}
          variant="entry"
        ></kp-sticky-button>
        <kp-mushaf id="${elementId}" .recitation=${entry}></kp-mushaf>
      `;
    }
    throw new Error("Unhandled entry type");
  }

  render() {
    const instruction = this.recitation.instruction
      ? html`<p class="instruction">${this.recitation.instruction}</p>`
      : "";
    const titleId = this.recitation.title ? slugify(this.recitation.title) : "";
    const title = this.recitation.title
      ? html`<h1 id="${titleId}" class="wird-title">${this.recitation.title}</h1>`
      : "";
    return html`
      <div class="wird-container">
        ${title}
        ${instruction}
        ${this.recitation.entries.map((entry, i) => this.renderEntry(entry, i))}
      </div>
    `;
  }
}
