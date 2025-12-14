import { css, html, LitElement, type PropertyValues } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { resolveRouterPath } from "@/router";
import { type SearchResult, searchService } from "@/services/search-service";

import "@shoelace-style/shoelace/dist/components/dialog/dialog.js";
import "@shoelace-style/shoelace/dist/components/input/input.js";
import "@shoelace-style/shoelace/dist/components/spinner/spinner.js";
import "@shoelace-style/shoelace/dist/components/icon/icon.js";
import type SlDialog from "@shoelace-style/shoelace/dist/components/dialog/dialog.js";
import type SlInput from "@shoelace-style/shoelace/dist/components/input/input.js";

@customElement("kp-search-modal")
export class SearchModal extends LitElement {
  @property({ type: Boolean, reflect: true })
  open = false;

  @state()
  private searchQuery = "";

  @state()
  private results: SearchResult[] = [];

  @state()
  private isSearching = false;

  @state()
  private selectedIndex = -1;

  @state()
  private hasSearched = false;

  @query("sl-dialog")
  private dialog!: SlDialog;

  @query("sl-input")
  private searchInput!: SlInput;

  private debounceTimer: ReturnType<typeof setTimeout> | null = null;

  static styles = css`
    sl-dialog::part(panel) {
      max-width: 600px;
      width: 90vw;
    }

    sl-dialog::part(body) {
      padding-top: 0;
    }

    .search-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .search-input-wrapper {
      position: sticky;
      top: 0;
      background: var(--sl-panel-background-color);
      padding-bottom: 0.5rem;
      z-index: 1;
    }

    sl-input::part(base) {
      font-size: 1.1rem;
    }

    .results-container {
      max-height: 60vh;
      overflow-y: auto;
    }

    .result-item {
      display: block;
      padding: 0.75rem;
      margin-bottom: 0.5rem;
      border-radius: 4px;
      cursor: pointer;
      text-decoration: none;
      color: inherit;
      border: 1px solid var(--sl-color-neutral-200);
      transition: background-color 0.15s, border-color 0.15s;
    }

    .result-item:hover,
    .result-item.selected {
      background-color: var(--sl-color-primary-50);
      border-color: var(--sl-color-primary-300);
    }

    .result-item:focus {
      outline: 2px solid var(--sl-color-primary-500);
      outline-offset: 2px;
    }

    .result-title {
      font-weight: 600;
      font-size: 1rem;
      margin-bottom: 0.25rem;
      color: var(--sl-color-primary-700);
    }

    .result-path {
      font-size: 0.75rem;
      color: var(--sl-color-neutral-500);
      margin-bottom: 0.5rem;
    }

    .result-snippet {
      font-size: 0.875rem;
      color: var(--sl-color-neutral-700);
      line-height: 1.4;
    }

    .result-snippet[dir="rtl"] {
      text-align: right;
    }

    .result-snippet mark {
      background-color: var(--sl-color-warning-200);
      color: inherit;
      padding: 0 2px;
      border-radius: 2px;
    }

    .result-field {
      display: inline-block;
      font-size: 0.65rem;
      padding: 0.15rem 0.4rem;
      background: var(--sl-color-neutral-100);
      border-radius: 3px;
      margin-left: 0.5rem;
      text-transform: capitalize;
    }

    .loading-container,
    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      color: var(--sl-color-neutral-500);
      text-align: center;
    }

    .empty-state sl-icon {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }

    .keyboard-hints {
      display: flex;
      gap: 1rem;
      justify-content: center;
      padding-top: 0.75rem;
      border-top: 1px solid var(--sl-color-neutral-200);
      font-size: 0.75rem;
      color: var(--sl-color-neutral-500);
    }

    .keyboard-hint {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    kbd {
      display: inline-block;
      padding: 0.15rem 0.4rem;
      font-size: 0.7rem;
      font-family: inherit;
      background: var(--sl-color-neutral-100);
      border: 1px solid var(--sl-color-neutral-300);
      border-radius: 3px;
    }

    @media (prefers-color-scheme: dark) {
      .result-item:hover,
      .result-item.selected {
        background-color: var(--sl-color-primary-950);
        border-color: var(--sl-color-primary-700);
      }

      .result-title {
        color: var(--sl-color-primary-400);
      }
    }
  `;

  protected updated(changedProperties: PropertyValues): void {
    if (changedProperties.has("open")) {
      if (this.open) {
        this.dialog?.show();
        // Focus input after dialog animation
        setTimeout(() => {
          this.searchInput?.focus();
        }, 100);
      } else {
        this.dialog?.hide();
      }
    }
  }

  private handleDialogHide() {
    this.open = false;
    this.dispatchEvent(new CustomEvent("close"));
    // Reset state
    this.searchQuery = "";
    this.results = [];
    this.selectedIndex = -1;
    this.hasSearched = false;
  }

  private handleInput(e: Event) {
    const target = e.target as SlInput;
    this.searchQuery = target.value;
    this.selectedIndex = -1;

    // Debounce search
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }

    if (this.searchQuery.trim().length >= 2) {
      this.debounceTimer = setTimeout(() => {
        this.performSearch();
      }, 200);
    } else {
      this.results = [];
      this.hasSearched = false;
    }
  }

  private async performSearch() {
    if (!this.searchQuery.trim()) return;

    this.isSearching = true;
    this.hasSearched = true;

    try {
      this.results = await searchService.search(this.searchQuery, 20);
    } catch (error) {
      console.error("Search error:", error);
      this.results = [];
    } finally {
      this.isSearching = false;
    }
  }

  private handleKeyDown(e: KeyboardEvent) {
    if (this.results.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        this.selectedIndex = Math.min(
          this.selectedIndex + 1,
          this.results.length - 1,
        );
        this.scrollToSelected();
        break;
      case "ArrowUp":
        e.preventDefault();
        this.selectedIndex = Math.max(this.selectedIndex - 1, -1);
        this.scrollToSelected();
        break;
      case "Enter":
        e.preventDefault();
        if (this.selectedIndex >= 0) {
          this.navigateToResult(this.results[this.selectedIndex]);
        }
        break;
    }
  }

  private scrollToSelected() {
    if (this.selectedIndex < 0) return;
    const container = this.shadowRoot?.querySelector(".results-container");
    const selected = container?.querySelector(".result-item.selected");
    selected?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  private navigateToResult(result: SearchResult) {
    this.handleDialogHide();

    // Use text fragment for automatic highlighting and scrolling
    // Text fragments only work with user-initiated navigation (real <a> click)
    const textFragment = encodeURIComponent(this.searchQuery);
    const basePath = resolveRouterPath(`/${result.document.id}`);
    const url = `${basePath}#:~:text=${textFragment}`;

    // Create and click a real <a> element to trigger user-initiated navigation
    // This is required because text fragments don't work with programmatic navigation
    const link = document.createElement("a");
    link.href = url;
    link.click();
  }

  private handleResultClick(result: SearchResult, e: Event) {
    e.preventDefault();
    this.navigateToResult(result);
  }

  private isArabicField(field: string): boolean {
    return field === "arabic";
  }

  private handleResultHover(index: number) {
    this.selectedIndex = index;
  }

  /**
   * Render snippet with highlighted match
   */
  private renderHighlightedSnippet(result: SearchResult) {
    const { snippet, highlightStart, highlightEnd } = result;

    // If no valid highlight positions, return plain snippet
    if (
      highlightStart <= 0 ||
      highlightEnd <= highlightStart ||
      highlightEnd > snippet.length
    ) {
      return snippet;
    }

    const before = snippet.substring(0, highlightStart);
    const match = snippet.substring(highlightStart, highlightEnd);
    const after = snippet.substring(highlightEnd);

    return html`${before}<mark>${match}</mark>${after}`;
  }

  render() {
    return html`
      <sl-dialog
        label="Search"
        @sl-after-hide=${this.handleDialogHide}
        @keydown=${this.handleKeyDown}
      >
        <div class="search-container">
          <div class="search-input-wrapper">
            <sl-input
              placeholder="Search for prayers, duas, surahs..."
              clearable
              autofocus
              size="large"
              @sl-input=${this.handleInput}
              .value=${this.searchQuery}
            >
              <sl-icon name="search" slot="prefix"></sl-icon>
            </sl-input>
          </div>

          <div class="results-container">
            ${
              this.isSearching
                ? html`
                  <div class="loading-container">
                    <sl-spinner></sl-spinner>
                    <span>Searching...</span>
                  </div>
                `
                : this.results.length > 0
                  ? this.results.map(
                      (result, index) => html`
                      <a
                        class="result-item ${index === this.selectedIndex ? "selected" : ""}"
                        href="${resolveRouterPath(`/${result.document.id}`)}"
                        @click=${(e: Event) => this.handleResultClick(result, e)}
                        @mouseenter=${() => this.handleResultHover(index)}
                      >
                        <div class="result-title">
                          ${result.document.title}
                          <span class="result-field">${result.matchedField}</span>
                        </div>
                        <div class="result-path">/${result.document.id}</div>
                        <div
                          class="result-snippet"
                          dir=${this.isArabicField(result.matchedField) ? "rtl" : "ltr"}
                        >
                          ${this.renderHighlightedSnippet(result)}
                        </div>
                      </a>
                    `,
                    )
                  : this.hasSearched
                    ? html`
                      <div class="empty-state">
                        <sl-icon name="search"></sl-icon>
                        <span>No results found for "${this.searchQuery}"</span>
                      </div>
                    `
                    : html`
                      <div class="empty-state">
                        <sl-icon name="search"></sl-icon>
                        <span>Type at least 2 characters to search</span>
                      </div>
                    `
            }
          </div>

          ${
            this.results.length > 0
              ? html`
                <div class="keyboard-hints">
                  <span class="keyboard-hint">
                    <kbd>↑</kbd><kbd>↓</kbd> Navigate
                  </span>
                  <span class="keyboard-hint">
                    <kbd>Enter</kbd> Select
                  </span>
                  <span class="keyboard-hint">
                    <kbd>Esc</kbd> Close
                  </span>
                </div>
              `
              : null
          }
        </div>
      </sl-dialog>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kp-search-modal": SearchModal;
  }
}
