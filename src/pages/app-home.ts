import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { resolveRouterPath } from "../router";

import "@shoelace-style/shoelace/dist/components/card/card.js";
import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@shoelace-style/shoelace/dist/components/tab/tab.js";
import "@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js";

import { styles } from "../styles/shared-styles";

@customElement("app-home")
export class AppHome extends LitElement {
  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
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
      <app-header></app-header>

      <main>
        <div id="welcomeBar">
          <sl-card id="welcomeCard">
            <div slot="header">
              <h2>${this.message}</h2>
            </div>

            <p>
              For more information on the PWABuilder pwa-starter, check out the
              <a href="https://docs.pwabuilder.com/#/starter/quick-start">
                documentation</a>.
            </p>

            <p id="mainInfo">
              Welcome to the
              <a href="https://pwabuilder.com">PWABuilder</a>
              pwa-starter! Be sure to head back to
              <a href="https://pwabuilder.com">PWABuilder</a>
              when you are ready to ship this PWA to the Microsoft Store, Google Play
              and the Apple App Store!
            </p>

            ${
              "share" in navigator
                ? html`<sl-button slot="footer" variant="default" @click="${this.share}">
                        <sl-icon slot="prefix" name="share"></sl-icon>
                        Share this Starter!
                      </sl-button>`
                : null
            }
          </sl-card>

          <sl-tab-group>
            <sl-tab slot="nav" panel="general">General</sl-tab>
            <sl-tab slot="nav" panel="custom">Custom</sl-tab>
            <sl-tab slot="nav" panel="advanced">Advanced</sl-tab>
            <sl-tab slot="nav" panel="disabled" disabled>Disabled</sl-tab>

            <sl-tab-panel name="general">This is the general tab panel.</sl-tab-panel>
            <sl-tab-panel name="custom">This is the custom tab panel.</sl-tab-panel>
            <sl-tab-panel name="advanced">This is the advanced tab panel.</sl-tab-panel>
            <sl-tab-panel name="disabled">This is a disabled tab panel.</sl-tab-panel>
          </sl-tab-group>


          <sl-card id="infoCard">
            <h2>Technology Used</h2>

            <ul>
              <li>
                <a href="https://www.typescriptlang.org/">TypeScript</a>
              </li>

              <li>
                <a href="https://lit.dev">lit</a>
              </li>

              <li>
                <a href="https://shoelace.style/">Shoelace</a>
              </li>

              <li>
                <a href="https://github.com/thepassle/app-tools/blob/master/router/README.md"
                  >App Tools Router</a>
              </li>
            </ul>
          </sl-card>

          <sl-button href="${resolveRouterPath("about")}" variant="primary">Navigate to About</sl-button>
        </div>
      </main>
    `;
  }
}
