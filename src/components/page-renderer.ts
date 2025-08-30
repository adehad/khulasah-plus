import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

/* We have to import all components here for stuff to work */
import "@/components/dhikr.ts";
import "@/components/quran.ts";
import "@/components/settings-menu";
import "@/components/border-frame";
import "@/components/theme-switcher";
import "@shoelace-style/shoelace/dist/components/card/card.js";
import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@/components/nav-button.ts";
import { styles } from "@/styles/shared-styles";
/* end magic imports */

@customElement("page-renderer")
export class PageRenderer extends LitElement {
  @property({ type: String }) contentImportPath: string = "";

  private _content: unknown = html`<p>Loading content...</p>`;

  willUpdate(changedProperties: Map<string | number | symbol, unknown>): void {
    if (changedProperties.has("contentImportPath") && this.contentImportPath) {
      this._loadContent();
    }
  }

  async _loadContent(): Promise<void> {
    try {
      const module = await import(`../content/${this.contentImportPath}.ts`);
      if (module?.default) {
        this._content = module.default;
        this._content = html`
          ${module.default.map((item) => item.render())}
        `;
      } else {
        this._content = html`<p>Error: Content not found or invalid module format.</p>`;
      }
    } catch (error) {
      console.error("Failed to load content:", error);
      this._content = html`<p>Error loading content.</p>`;
    }
    this.requestUpdate();
  }

  render() {
    return html`
        ${this._content}
    `;
  }
}
