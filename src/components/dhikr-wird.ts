import type { TemplateResult } from "lit";
import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import "@shoelace-style/shoelace/dist/components/icon-button/icon-button.js";

import { BaseRecitation } from "@/components/base-recitation";
import "@/components/dhikr.ts";
import "@/components/expand.ts";
import "@/components/quran.ts";
import { StickyButton } from "@/components/sticky-button.ts";
import {
  DhikrModel,
  ExpandModel,
  QuranModel,
  type WirdModel,
} from "@/models/recitation.ts";
import { audioPlayerService } from "@/services/audio-player-service";
import { circleButtonStyles, textStyles } from "@/styles/shared-styles.ts";
import { slugify } from "@/utils/string.ts";

@customElement("kp-wird")
export class Wird extends BaseRecitation {
  @property({ type: Object }) recitation!: WirdModel;

  static styles = [
    ...BaseRecitation.styles,
    textStyles,
    circleButtonStyles,
    css`
      .wird-title {
        text-align: center;
      }

      .wird-title-row {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
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

  renderEntry(
    entry: DhikrModel | QuranModel | ExpandModel,
    index: number,
  ): TemplateResult {
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
          .elementId=${elementId}
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
    if (entry instanceof ExpandModel) {
      return html`
        <kp-sticky-button
          label=${entry_num}
          elementId=${elementId}
          variant="entry"
        ></kp-sticky-button>
        <kp-expand id="${elementId}" .model=${entry}></kp-expand>
      `;
    }
    throw new Error(
      `Unhandled entry type: ${(entry as object).constructor.name}`,
    );
  }

  private _handlePlayAudio(): void {
    if (this.recitation.audio) {
      audioPlayerService.play(this.recitation.audio);
    }
  }

  render() {
    const instruction = this.recitation.instruction
      ? html`<p class="instruction">${this.recitation.instruction}</p>`
      : "";
    const titleId = this.recitation.title ? slugify(this.recitation.title) : "";
    const hasAudio = !!this.recitation.audio?.url;

    const titleContent = this.recitation.title
      ? html`
          <div class="wird-title-row">
            <h1 id="${titleId}" class="wird-title">${this.recitation.title}</h1>
            ${
              hasAudio
                ? html`
                  <sl-icon-button
                    class="circle-btn"
                    name="play-circle"
                    label="Play audio"
                    @click=${this._handlePlayAudio}
                  ></sl-icon-button>
                `
                : ""
            }
          </div>
        `
      : "";

    return html`
      <div class="wird-container">
        ${titleContent}
        ${instruction}
        ${this.recitation.entries.map((entry, i) => this.renderEntry(entry, i))}
      </div>
    `;
  }
}
