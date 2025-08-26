import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { hizbAlBahrContent } from "@/content/hizb-al-bahr-content";

import "@/components/dhikr.ts";
import "@/components/quran.ts";

@customElement("hizb-al-bahr")
export class HizbAlBahr extends LitElement {
  render() {
    return html`
      ${hizbAlBahrContent.map((item) => item.render())}
    `;
  }
}
