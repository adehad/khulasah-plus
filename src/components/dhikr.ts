import { customElement, property } from "lit/decorators.js";
import { html } from "lit/static-html.js";
import { BaseRecitation } from "./base-recitation";
import { DhikrModel } from "../../types/recitation";
import "./dhikr-entry.ts";

@customElement("kp-dhikr")
export class Dhikr extends BaseRecitation {
  @property({ type: Object }) recitation!: DhikrModel;

  render() {
    return html`
      <div class="dhikr-container">
        <h2>${this.recitation.title}</h2>
        <p>${this.recitation.instruction}</p>
        ${this.recitation.entries.map(
          (entry) => html`<kp-dhikr-entry .entry=${entry}></kp-dhikr-entry>`
        )}
      </div>
    `;
  }
}

