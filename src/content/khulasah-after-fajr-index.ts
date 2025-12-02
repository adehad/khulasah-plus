import { NavModel } from "@/models/nav";

export const afterFajrContent = [
  new NavModel({
    title: "Initial adhkar",
    href: "/",
  }),
  new NavModel({
    title: "Wird of Shaykh Abu Bakr bin Salim",
    href: "/",
  }),
  new NavModel({
    title: "al-Wird al-Latif",
    href: "khulasah/after-fajr/wird-al-latif",
  }),
  new NavModel({
    title: "Surah Yasin",
    href: "khulasah/after-fajr/surah-yasin",
  }),
  new NavModel({
    title: "Dua after Surah Yasin",
    href: "/",
  }),
  new NavModel({
    title: "Wird of Imam Abu Bakr as-Sakran",
    href: "/",
  }),
  new NavModel({
    title: "Wird of Imam an-Nawawi",
    href: "/",
  }),
];

export default afterFajrContent;
