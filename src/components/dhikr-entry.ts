import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { DhikrEntryModel } from "@/models/recitation.ts";
import { textStyles } from "@/styles/shared-styles.ts";
import "@/components/dhikr-counter.ts";

const COUNTER_THRESHOLD = 50;

@customElement("kp-dhikr-entry")
export class DhikrEntry extends LitElement {
  @property({ type: Object }) entry!: DhikrEntryModel;

  /** Storage key for persisting dhikr counter state, computed by parent component */
  @property({ type: String }) storageKey = "";

  static styles = [
    textStyles,
    css`
      .entry {
        margin-bottom: 1em;
      }
    `,
  ];

  private _shouldShowCounter(): boolean {
    return (
      this.entry.repeat > COUNTER_THRESHOLD || this.entry.enableCounter === true
    );
  }

  render() {
    const repeatText = this.entry.repeat > 1 ? ` (x${this.entry.repeat})` : "";
    const showCounter = this._shouldShowCounter();

    return html`
      <div class="entry">
        <div class="arabic">${this.entry.arabic}${repeatText}</div>
        <div class="translit">${this.entry.translit}${repeatText}</div>
        <div class="translation">${this.entry.translation}${repeatText}</div>
        ${
          showCounter
            ? html`
              <kp-dhikr-counter
                .target=${this.entry.repeat}
                .storageKey=${this.storageKey}
              ></kp-dhikr-counter>
            `
            : ""
        }
      </div>
    `;
  }
}
