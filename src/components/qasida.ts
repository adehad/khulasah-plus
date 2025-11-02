/*
For the sticky elements to work correctly we need:
1. Qasida Parent Element
2. Chapter Element
3. Verse Element

all at the same level.

*/
import { css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
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

  @state()
  private _activeChorusId: string | null = null;

  static styles = [
    textStyles,
    css`
    .qasida-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end; /* aligns child to the right */
        position: relative; /* needed for sticky to work properly */
        container-type: inline-size; /* Make this a query container */
    }

    .chapter-header {
      text-align: center;
    }

    .verses {
      padding: 20px 30px; // Top-Bottom [for visual separation], Right-Left prevent overlap with Chapter/Verse
      display: flex;
      flex-direction: column; // Mobile-first: single column
    }

    .verses > kp-qasida-entry {
      flex: 1 1 100%; // Full width on mobile
      box-sizing: border-box;
    }

    .verses > kp-qasida-entry:only-child {
      flex-basis: 100%; // When only a single item in the column, take all the space
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

    .chorus-toggle-button {
        position: sticky;
        top: 7rem; /* Positioned below chapter and verse numbers */
        width: 4ch;
        writing-mode: sideways-rl;
        padding: 8px 5px;
        border-radius: 5px 15px 15px 5px;
        z-index: 11;
        cursor: pointer;
        transition: transform 0.3s ease-in-out;
        background-color: var(--sl-color-primary-700);
        color: var(--sl-color-primary-50);
        border: none;
      }

      .sticky-chorus {
        transition: max-height 0.5s ease-out;
        background-color: hsl(from var(--sl-color-primary-700) h s l / 90%);
        color: var(--sl-color-primary-50);
        top: 30px;
        z-index: 9;
        flex-basis: 100% !important; /* Take full width when active */
      }

      .sticky-chorus.is-active {
        position: sticky;
        max-height: 70vh;
        overflow-y: auto;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
        animation: slideIn 0.4s ease-out forwards;
        padding: 20px;
      }

      @keyframes slideIn {
        from {
            transform: translateY(-50px);
            opacity: 0.8;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
      }

      .chorus {
        background-color: hsla(0, 0%, 78%, 50%);
      }
    `,
    css`
      @container (width > 600px) {
        .verses {
          display: flex; /* TODO: why is this needed when we have it already? */
          flex-direction: row-reverse; // 2 columns on wider screens
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .verses > kp-qasida-entry {
          flex: 0 1 48%; // 2 column layout
        }
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

  private toggleChorus(verseId: string) {
    if (this._activeChorusId === verseId) {
      this._activeChorusId = null;
    } else {
      this._activeChorusId = verseId;
    }
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
      const verseId = prefix
        ? `verse-${prefix}-${index + 1}`
        : `verse-${index + 1}`;

      if (entry.chorus) {
        const isActive = this._activeChorusId === verseId;
        return html`
          <button
            class="chorus-toggle-button"
            @click=${() => this.toggleChorus(verseId)}
          >
            Chorus
          </button>
          <div
            class="verses sticky-chorus ${isActive ? "is-active" : ""}"
            id="${verseId}"
          >
            ${verse.entries.map(
              (verseEntry) =>
                html`<kp-qasida-entry .entry=${verseEntry}></kp-qasida-entry>`,
            )}
          </div>
        `;
      } else {
        return html`
          <button class="sticky verse-num" @click=${() => this.setWindowHash(verseId)}>${index + 1}</button>
          <div class="verses" id="${verseId}">
            ${verse.entries.map(
              (verseEntry) =>
                html`<kp-qasida-entry .entry=${verseEntry}></kp-qasida-entry>`,
            )}
          </div>
        `;
      }
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
