import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import "@shoelace-style/shoelace/dist/components/card/card.js";
import "@shoelace-style/shoelace/dist/components/button/button.js";

import "@/components/nav-button.ts";

import { styles } from "@/styles/shared-styles";

@customElement("app-home")
export class AppHome extends LitElement {
  @property() message = "Welcome!";

  static styles = [
    styles,
    css`
    #welcomeBar {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    #welcomeCard,
    #infoCard {
      padding: 18px;
      padding-top: 0px;
    }

    sl-card::part(footer) {
      display: flex;
      justify-content: flex-end;
    }

    @media(min-width: 750px) {
      sl-card {
        width: 70vw;
      }
    }


    @media (horizontal-viewport-segments: 2) {
      #welcomeBar {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
      }

      #welcomeCard {
        margin-right: 64px;
      }
    }
  `,
  ];

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log("This is your home page");
  }

  share() {
    if (navigator.share) {
      navigator.share({
        title: "PWABuilder pwa-starter",
        text: "Check out the PWABuilder pwa-starter!",
        url: "https://github.com/pwa-builder/pwa-starter",
      });
    }
  }

  render() {
    return html`
        <h1>Khulasah Plus</h1>

        <p>A web app for the Khulasah and other Islamic texts.</p>

        <nav-button href="khulasah/the-khulasah/after-asr/hizb-al-bahr">
          Hizb al-Bahr
        </nav-button>
    `;
  }
}
