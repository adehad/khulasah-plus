import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { resolveRouterPath } from "@/router";

import "@shoelace-style/shoelace/dist/components/card/card.js";
import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@shoelace-style/shoelace/dist/components/tab/tab.js";
import "@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js";

import "@/components/dhikr.ts";
import "@/components/dhikr-entry.ts";
import "@/components/quran.ts";
import "@/components/quran-entry";
import "@/components/footnote.ts";

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
      <app-header></app-header>

      <main>
        <kp-dhikr title="Dhikr Example">
          <kp-instruction>Read the following aloud.</kp-instruction>
          <kp-dhikr-entry repeat="3">
            <span slot="arabic">سُبْحَانَ اللَّهِ</span>
            <span slot="translit">Subhanallah</span>
            <span slot="translation">Glory be to Allah</span>
          </kp-dhikr-entry>
          <kp-dhikr-entry>
            <span slot="arabic">الْحَمْدُ لِلَّهِ</span>
            <span slot="translit">Alhamdulillah</span>
            <span slot="translation">Praise be to Allah</span>
          </kp-dhikr-entry>
        </kp-dhikr>

        <hr>

        <kp-mushaf surah="2" title="Quran Example">
          <kp-instruction>Recite the following verses from Surah Al-Baqarah.</kp-instruction>
          <kp-mushaf-entry verse="255">
            <span slot="arabic">اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ...</span>
            <span slot="translit">Allahu la ilaha illa Huwa al-Hayyul-Qayyum...</span>
            <span slot="translation">Allah - there is no deity except Him, the Ever-Living, the Sustainer of [all] existence...</span>
          </kp-mushaf-entry>
          <kp-mushaf-entry verse="256">
            <span slot="arabic">لَا إِكْرَاهَ فِي الدِّينِ...</span>
            <span slot="translit">La ikraha fid-din...</span>
            <span slot="translation">There shall be no compulsion in [acceptance of] the religion...</span>
          </kp-mushaf-entry>
        </kp-mushaf>

        <hr>

        <p>
          Here is a footnote: <kp-footnote type="book">See al-Ghazali, Ihya Ulum al-Din</kp-footnote>
        </p>
        <p>
          Another footnote: <kp-footnote type="hadith">Sahih al-Bukhari 1</kp-footnote>
        </p>
        <p>
          And one more: <kp-footnote type="question">What does this mean?</kp-footnote>
        </p>

        <sl-button href="${resolveRouterPath("about")}" variant="primary">Navigate to About</sl-button>
      </main>
    `;
  }
}
