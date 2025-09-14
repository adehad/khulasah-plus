/*
For the sticky elements to work correctly we need:
1. Qasida Parent Element
2. Chapter Element
3. Verse Element

all at the same level.

*/
import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BaseRecitation } from "@/components/base-recitation";
import {
  QasidaChapterModel,
  type QasidaModel,
  QasidaVerseModel,
} from "@/models/recitation.ts";
import "@/components/qasida.ts";
import "@/components/qasida-verse.ts";
import "@/components/qasida-entry.ts";
import type { TemplateResult } from "lit";
import { textStyles } from "@/styles/shared-styles.ts";

@customElement("kp-qasida")
export class Qasida extends BaseRecitation {
  @property({ type: Object }) qasida!: QasidaModel;

  static styles = [
    textStyles,
    css`
      .qasida-container {
          display: flex;
          flex-direction: column;
          justify-content: flex-end; /* aligns child to the right */
          position: relative; /* needed for sticky to work properly */
      }

      .chapter-header {
        text-align: center;
      }

      .verses {
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        flex-direction: row-reverse;
        flex-wrap: wrap;
        justify-content: space-between;
      }

      .verses > kp-qasida-entry {
        flex: 0 1 48%; // 2 column layout
        box-sizing: border-box;
      }

      .verses > kp-qasida-entry:only-child {
        flex-basis: 100%; // When only a single item in the column, take all the space
      }

      @media (max-width: 768px) {
        .verses {
          flex-direction: column; // narrow screens don't have two columns
        }
      }
      .chorus {
        background-color: hsla(0, 0%, 78%, 50%);
      }

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

    button.sticky.verse-num {
      top: 4rem;
      right: 0;
      background: var(--sl-color-primary-400);
      border-color: var(--sl-color-primary-400);
    }

    button.sticky.chapter-num {
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

  renderEntry(
    entry: QasidaChapterModel | QasidaVerseModel,
    index: number,
    prefix: string,
  ): TemplateResult {
    if (entry instanceof QasidaChapterModel) {
      const chapter = entry;
      const chapterId = prefix ? `${prefix}-${index + 1}` : `${index + 1}`;
      const fullChapterId = `chapter-${chapterId}`;
      return html`
        <button class="sticky chapter-num" @click=${() => this.setWindowHash(fullChapterId)}>${index + 1}</button>
          <h1 class="chapter-header" id="${fullChapterId}">${chapter.title}</h1>
            ${chapter.entries.map((chapterOrVerse, i) =>
              this.renderEntry(chapterOrVerse, i, chapterId),
            )}
        `;
    } else if (entry instanceof QasidaVerseModel) {
      const verse = entry;
      const chorusClassAdd = entry.chorus ? " chorus" : "";
      const verseId = prefix
        ? `verse-${prefix}-${index + 1}`
        : `verse-${index + 1}`;
      return html`
        <button class="sticky verse-num" @click=${() => this.setWindowHash(verseId)}>${index + 1}</button>
        <div class="verses${chorusClassAdd}" id="${verseId}">
          ${verse.entries.map(
            (verseEntry) =>
              html`<kp-qasida-entry .entry=${verseEntry}></kp-qasida-entry>`,
          )}
        </div>
      `;
    }
    throw new Error(`Unhandled entry type`); // 'entry'
  }

  render() {
    return html`
      <div class="qasida-container">
      ${this.qasida.entries.map((entry, i) => this.renderEntry(entry, i, ""))}
      </div>
    `;
  }
}
