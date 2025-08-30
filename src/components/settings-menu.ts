import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import "@shoelace-style/shoelace/dist/components/dialog/dialog.js";
import "@shoelace-style/shoelace/dist/components/icon/icon.js";
import type SlRange from "@shoelace-style/shoelace/dist/components/range/range.js";
import "@shoelace-style/shoelace/dist/components/range/range.js";
import type SlSwitch from "@shoelace-style/shoelace/dist/components/switch/switch.js";
import "@shoelace-style/shoelace/dist/components/switch/switch.js";

export type SettingName =
  | "arabicFontSize"
  | "translationFontSize"
  | "transliterationFontSize"
  | "showArabic"
  | "showTranslation"
  | "showTransliteration";

export class SettingsChangeEvent extends CustomEvent<{
  name: SettingName;
  value: any;
}> {
  constructor(detail: { name: SettingName; value: any }) {
    super("settings-change", { detail, bubbles: true, composed: true });
  }
}

@customElement("settings-menu")
export class SettingsMenu extends LitElement {
  @state()
  private isDialogOpen = false;

  @property({ type: Number })
  arabicFontSize = 2;

  @property({ type: Number })
  translationFontSize = 1;

  @property({ type: Number })
  transliterationFontSize = 1;

  @property({ type: Boolean })
  showArabic = true;

  @property({ type: Boolean })
  showTranslation = true;

  @property({ type: Boolean })
  showTransliteration = true;

  static styles = css`
    .settings-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      border: 1px solid transparent;
      background-color: transparent;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    }

    .settings-button:hover {
      background-color: var(--sl-color-primary-100);
      border-color: var(--sl-color-primary-300);
    }

    .settings-button sl-icon {
      font-size: 1.5rem;
      color: var(--sl-color-primary-500);
    }

    .settings-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .setting {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.loadSettings();
  }

  loadSettings() {
    const settings = JSON.parse(localStorage.getItem("settings") || "{}");
    this.arabicFontSize = settings.arabicFontSize || 2;
    this.translationFontSize = settings.translationFontSize || 1;
    this.transliterationFontSize = settings.transliterationFontSize || 1;
    this.showArabic =
      settings.showArabic === undefined ? true : settings.showArabic;
    this.showTranslation =
      settings.showTranslation === undefined ? true : settings.showTranslation;
    this.showTransliteration =
      settings.showTransliteration === undefined
        ? true
        : settings.showTransliteration;
  }

  saveSetting(name: SettingName, value: any) {
    const settings = JSON.parse(localStorage.getItem("settings") || "{}");
    settings[name] = value;
    localStorage.setItem("settings", JSON.stringify(settings));
    this.dispatchEvent(new SettingsChangeEvent({ name, value }));
  }

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('isDialogOpen')) {
      this.dispatchEvent(new CustomEvent('dialog-open-change', {
        detail: { isOpen: this.isDialogOpen },
        bubbles: true,
        composed: true
      }));
    }
  }

  render() {
    return html`
      <button class="settings-button" @click=${() => (this.isDialogOpen = true)}>
        <sl-icon name="gear"></sl-icon>
      </button>

      <sl-dialog ?open=${this.isDialogOpen} @sl-hide=${() => (this.isDialogOpen = false)} label="Settings">
        <div class="settings-container">
          <div class="setting">
            <label for="arabic-font-size">Arabic Font Size</label>
            <sl-range
              id="arabic-font-size"
              min="1"
              max="5"
              step="0.1"
              .value=${this.arabicFontSize}
              @sl-change=${(e: Event) => this.saveSetting("arabicFontSize", (e.target as SlRange).value)}
            ></sl-range>
          </div>
          <div class="setting">
            <label for="translation-font-size">Translation Font Size</label>
            <sl-range
              id="translation-font-size"
              min="0.5"
              max="2"
              step="0.1"
              .value=${this.translationFontSize}
              @sl-change=${(e: Event) => this.saveSetting("translationFontSize", (e.target as SlRange).value)}
            ></sl-range>
          </div>
          <div class="setting">
            <label for="transliteration-font-size">Transliteration Font Size</label>
            <sl-range
              id="transliteration-font-size"
              min="0.5"
              max="2"
              step="0.1"
              .value=${this.transliterationFontSize}
              @sl-change=${(e: Event) => this.saveSetting("transliterationFontSize", (e.target as SlRange).value)}
            ></sl-range>
          </div>
          <div class="setting">
            <label for="show-arabic">Show Arabic</label>
            <sl-switch
              id="show-arabic"
              ?checked=${this.showArabic}
              @sl-change=${(e: Event) => this.saveSetting("showArabic", (e.target as SlSwitch).checked)}
            ></sl-switch>
          </div>
          <div class="setting">
            <label for="show-translation">Show Translation</label>
            <sl-switch
              id="show-translation"
              ?checked=${this.showTranslation}
              @sl-change=${(e: Event) => this.saveSetting("showTranslation", (e.target as SlSwitch).checked)}
            ></sl-switch>
          </div>
          <div class="setting">
            <label for="show-transliteration">Show Transliteration</label>
            <sl-switch
              id="show-transliteration"
              ?checked=${this.showTransliteration}
              @sl-change=${(e: Event) => this.saveSetting("showTransliteration", (e.target as SlSwitch).checked)}
            ></sl-switch>
          </div>
        </div>
        <sl-button slot="footer" @click=${() => (this.isDialogOpen = false)}>Close</sl-button>
      </sl-dialog>
    `;
  }
}
