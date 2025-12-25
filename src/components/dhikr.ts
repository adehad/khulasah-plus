import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BaseRecitation } from "@/components/base-recitation";
import type { DhikrModel } from "@/models/recitation.ts";
import "@/components/dhikr-entry.ts";
import "@/components/dhikr-counter.ts";
import { textStyles } from "@/styles/shared-styles.ts";
import { makeDhikrCounterKey } from "@/utils/storage.ts";

const COUNTER_THRESHOLD = 50;

@customElement("kp-dhikr")
export class Dhikr extends BaseRecitation {
  @property({ type: Object }) recitation!: DhikrModel;

  /** Element ID from the parent sticky button, used for unique storage keys */
  @property({ type: String }) elementId = "";

  static styles = [
    textStyles,
    css`
      .dhikr-repeat {
        text-align: center;
        margin-top: 0.5em;
        font-style: italic;
      }
    `,
  ];

  render() {
    const instruction = this.recitation.instruction
      ? html`<p class="instruction">${this.recitation.instruction}</p>`
      : "";

    const modelRepeat = this.recitation.repeat ?? 1;
    const showModelCounter = modelRepeat > COUNTER_THRESHOLD;
    const showModelRepeatText = modelRepeat > 1;

    return html`
      <div class="dhikr-container">
        ${instruction}
        ${showModelRepeatText ? html`<p class="instruction dhikr-repeat">(Repeat the following x${modelRepeat})</p>` : ""}
        ${this.recitation.entries?.map(
          (dhikrEntry, dhikrIndex) => html`
            <kp-dhikr-entry
              .entry=${dhikrEntry}
              .storageKey=${makeDhikrCounterKey(this.elementId, dhikrIndex)}
            ></kp-dhikr-entry>
          `,
        )}
        ${
          showModelCounter
            ? html`
            <kp-dhikr-counter
              .target=${modelRepeat}
              .storageKey=${makeDhikrCounterKey(this.elementId)}
            ></kp-dhikr-counter>
          `
            : ""
        }
      </div>
    `;
  }
}
