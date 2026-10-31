import { NavModel } from "@/models/nav";
import { only_instruction } from "@/models/recitation";

export const afterIshaContent = [
  new NavModel({
    title: "Wird of Imam Abu Bakr as-Sakran",
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
    title: "Surah as-Sajdah",
    href: "khulasah/after-isha/surah-as-sajdah",
  }),
  new NavModel({
    title: "Surah al-Mulk",
    href: "khulasah/after-isha/surah-al-mulk",
  }),
  new NavModel({
    title: "Etiquettes and supplications of sleep",
    href: "khulasah/after-isha/etiquettes-of-sleep",
  }),
  new NavModel({
    title: "Dua after sajda tilawa or sajda shukr",
    href: "khulasah/after-isha/dua-after-sajda",
  }),
];

export default afterIshaContent;
