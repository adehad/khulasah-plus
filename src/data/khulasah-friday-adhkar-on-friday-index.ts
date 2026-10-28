import { NavModel } from "@/models/nav";
import { only_instruction } from "@/models/recitation";

export const adhkarOnFridayContent = [
  new NavModel({
    title: "Opening supplications",
    href: "khulasah/friday/adhkar-on-friday/opening-supplications",
  }),
  only_instruction("Then the following surahs are read:"),
  new NavModel({
    title: "Surah al-Kahf",
    href: "khulasah/friday/adhkar-on-friday/surah-al-kahf",
  }),
  new NavModel({
    title: "Surah ad-Dukhan",
    href: "khulasah/friday/adhkar-on-friday/surah-ad-dukhan",
  }),
  new NavModel({
    title: "Surah al-Muzzammil",
    href: "khulasah/friday/adhkar-on-friday/surah-al-muzzammil",
  }),
  new NavModel({
    title: "Short Surahs",
    href: "khulasah/friday/adhkar-on-friday/short-surahs",
  }),
  new NavModel({
    title: "Poem: God, we ask You by the Greatest Name",
    href: "khulasah/last-part-of-night/before-fajr-adhan/poem-of-imam-al-aydarus",
  }),
  // Qad Kafani has no page of its own; it is a titled poem inside Adhkar before dawn
  new NavModel({
    title: "Poem: My Lord's knowledge suffices me",
    href: "khulasah/last-part-of-night/adhkar-before-dawn/#poem-of-imam-al-haddad-qad-kafani",
  }),
  new NavModel({
    title: "Salawat",
    href: "khulasah/friday/adhkar-on-friday/salawat",
  }),
  only_instruction("Then read:"),
  new NavModel({
    title: "Wird of Shaykh Abu Bakr bin Salim",
    href: "khulasah/friday/adhkar-on-friday/wird-of-shaykh-abu-bakr-bin-salim",
  }),
  only_instruction("Then read the following poem:"),
  new NavModel({
    title: "Qasidah",
    href: "khulasah/friday/adhkar-on-friday/qasidah",
  }),
];

export default adhkarOnFridayContent;
