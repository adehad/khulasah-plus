import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BaseRecitation } from "@/components/base-recitation";
import type { DhikrModel } from "@/models/recitation.ts";
import "@/components/dhikr-entry.ts";
import { textStyles } from "@/styles/shared-styles.ts";
import { makeDhikrCounterKey } from "@/utils/storage.ts";

@customElement("kp-dhikr")
export class Dhikr extends BaseRecitation {
  @property({ type: Object }) recitation!: DhikrModel;

  /** Element ID from the parent sticky button, used for unique storage keys */
  @property({ type: String }) elementId = "";

  static styles = [textStyles];

  render() {
    const instruction = this.recitation.instruction
      ? html`<p class="instruction">${this.recitation.instruction}</p>`
      : "";
    return html`
      <div class="dhikr-container">
        ${instruction}
        ${this.recitation.entries?.map(
          (dhikrEntry, dhikrIndex) => html`
            <kp-dhikr-entry
              .entry=${dhikrEntry}
              .storageKey=${makeDhikrCounterKey(this.elementId, dhikrIndex)}
            ></kp-dhikr-entry>
          `,
        )}
      </div>
    `;
  }
}
