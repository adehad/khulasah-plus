import { customElement, property } from "lit/decorators.js";
import { html } from "lit/static-html.js";
import { BaseRecitation } from "@/components/base-recitation";
import type { DhikrModel } from "@/models/recitation.ts";
import "@/components/dhikr-entry.ts";
import { textStyles } from "@/styles/shared-styles.ts";

@customElement("kp-dhikr")
export class Dhikr extends BaseRecitation {
  @property({ type: Object }) recitation!: DhikrModel;

  static styles = [textStyles];

  render() {
    return html`
      <div class="dhikr-container">
        <h2>${this.recitation.title}</h2>
        <p>${this.recitation.instruction}</p>
        ${this.recitation.entries.map(
          (entry) => html`<kp-dhikr-entry .entry=${entry}></kp-dhikr-entry>`,
        )}
      </div>
    `;
  }
}
