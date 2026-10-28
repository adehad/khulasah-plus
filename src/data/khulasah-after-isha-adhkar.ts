import { NavModel } from "@/models/nav";
import { only_instruction } from "@/models/recitation";

// The original page is a set of links to the Isha wirds and surahs with one reminder between them
export const wird = [
  new NavModel({
    title: "Wird of Imam as-Sakran",
    href: "khulasah/after-isha/wird-as-sakran",
  }),
  new NavModel({
    title: "Wird of Imam an-Nawawi",
    href: "khulasah/after-isha/wird-of-imam-an-nawawi",
  }),
  only_instruction(
    "Remember to read Sūrah Sajdah and Sūrah Tabārak (Al Mulk). It is better to read them in the two rak’āts after the ‘Ishā prayer.",
  ),
  new NavModel({
    title: "Surah Sajdah",
    href: "khulasah/after-isha/surah-as-sajdah",
  }),
  new NavModel({
    title: "Surah Mulk",
    href: "khulasah/after-isha/surah-al-mulk",
  }),
  new NavModel({
    title:
      "Supplication made after a prostration of recital or a prostration of thankfulness",
    href: "khulasah/after-isha/dua-after-sajda",
  }),
  new NavModel({
    title: "Etiquettes and supplications of sleep",
    href: "khulasah/after-isha/etiquettes-of-sleep",
  }),
];

export default wird;
