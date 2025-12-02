import { css, html, LitElement, type TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";

/* We have to import all components here for stuff to work */
import "@/components/dhikr-wird";
import "@/components/dhikr.ts";
import "@/components/quran.ts";
import "@/components/settings-menu";
import "@/components/border-frame";
import "@/components/theme-switcher";
import "@shoelace-style/shoelace/dist/components/card/card.js";
import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@/components/nav-button.ts";
import "@/components/qasida.ts";
import "@/components/qasida-entry.ts";
import type { BaseRecitationModel } from "@/models/recitation";
/* end magic imports */

@customElement("page-renderer")
export class PageRenderer extends LitElement {
  @property({ type: String }) contentImportPath: string = "";

  @state() private _isLoading = true;
  @state() private _error: string | null = null;
  @state() private _content: TemplateResult | null = null;

  // Track current load to handle race conditions
  private _currentLoadId = 0;

  static styles = css`
    .loading, .error {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 200px;
      text-align: center;
      padding: 2rem;
    }

    .error {
      color: var(--sl-color-danger-600);
    }

    .error-details {
      font-size: 0.875rem;
      color: var(--sl-color-neutral-500);
      margin-top: 0.5rem;
    }

    .retry-button {
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      background: var(--sl-color-primary-600);
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .retry-button:hover {
      background: var(--sl-color-primary-700);
    }
  `;

  willUpdate(changedProperties: Map<string | number | symbol, unknown>): void {
    if (changedProperties.has("contentImportPath") && this.contentImportPath) {
      this._loadContent();
    }
  }

  async _loadContent(): Promise<void> {
    // Increment load ID to invalidate any in-flight requests
    const loadId = ++this._currentLoadId;

    this._isLoading = true;
    this._error = null;
    this._content = null;

    try {
      const module = await import(`../content/${this.contentImportPath}.ts`);

      // Check if this load is still the current one (handles race condition)
      if (loadId !== this._currentLoadId) {
        return; // A newer load has started, discard this result
      }

      if (module?.default) {
        this._content = html`
          ${module.default.map((item: BaseRecitationModel) => item.render())}
        `;
      } else {
        this._error = "Content not found or invalid module format.";
      }
    } catch (error) {
      // Check if this load is still the current one
      if (loadId !== this._currentLoadId) {
        return;
      }

      console.error("Failed to load content:", error);
      this._error =
        error instanceof Error ? error.message : "Failed to load content.";
    } finally {
      if (loadId === this._currentLoadId) {
        this._isLoading = false;
      }
    }
  }

  private _handleRetry() {
    this._loadContent();
  }

  render() {
    if (this._isLoading) {
      return html`
        <div class="loading">
          <p>Loading content...</p>
        </div>
      `;
    }

    if (this._error) {
      return html`
        <div class="error">
          <p>Error loading content</p>
          <p class="error-details">${this._error}</p>
          <button class="retry-button" @click=${this._handleRetry}>
            Retry
          </button>
        </div>
      `;
    }

    return this._content;
  }
}
