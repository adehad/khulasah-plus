import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BaseRecitation } from "@/components/base-recitation";
import { DhikrModel, QuranModel, type WirdModel } from "@/models/recitation.ts";
import "@/components/dhikr.ts";
import type { TemplateResult } from "lit";
import "@/components/quran.ts";
import { textStyles } from "@/styles/shared-styles.ts";

@customElement("kp-wird")
export class Wird extends BaseRecitation {
  @property({ type: Object }) recitation!: WirdModel;

  static styles = [
    textStyles,
    css`

    button.sticky {
      position: sticky;
      width: 4ch;
      text-align: center;
      border-radius: 4px;
      padding: 0.3rem 1ch;
      font-size: 0.9rem;
      cursor: pointer;
      z-index: 10;
    }

    button.sticky.entry-num {
      top: 1rem;
      background: var(--sl-color-primary-300);
      border-color: var(--sl-color-primary-300);
      padding: 0.5rem 1ch;
      font-weight: bold;
    }
    `,
  ];

  firstUpdated() {
    window.addEventListener("hashchange", () => this.handleHashChange());
  }

  updated(changedProperties: Map<string | symbol, unknown>) {
    if (changedProperties.has("qasida")) {
      this.handleHashChange();
      this.updateToc();
    }
  }

  disconnectedCallback() {
    window.removeEventListener("hashchange", () => this.handleHashChange());
    super.disconnectedCallback();
  }

  handleHashChange() {
    queueMicrotask(() => {
      const hash = window.location.hash;
      if (hash) {
        const elementId = hash.substring(1);
        const element = this.renderRoot.querySelector(`#${elementId}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  }

  setWindowHash(hash: string) {
    window.location.hash = hash;
  }

  private updateToc() {
    queueMicrotask(() => {
      const headers = this.renderRoot.querySelectorAll("h1, h2, h3");
      const tocItems = Array.from(headers).map((header) => {
        return { text: header.textContent || "", id: header.id };
      });

      const event = new CustomEvent("toc-updated", {
        detail: { tocItems },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(event);
    });
  }

  renderEntry(entry: DhikrModel | QuranModel, index: number): TemplateResult {
    const entry_num = index + 1;
    const button_entry = html`<button class="sticky entry-num" @click=${() => this.setWindowHash(`${entry_num}`)}>${entry_num}</button>`;
    if (entry instanceof DhikrModel) {
      return html`${button_entry}
          <kp-dhikr .recitation=${entry}></kp-dhikr>
       `;
    } else if (entry instanceof QuranModel) {
      return html`${button_entry}
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
