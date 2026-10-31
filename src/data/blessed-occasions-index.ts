import { NavModel } from "@/models/nav";

// Every month is listed so the calendar reads in order; months without a page yet are in check-nav's PENDING_PAGES
export const blessedOccasionsContent = [
  new NavModel({
    title: "1 - Muharram",
    href: "blessed-occasions/1-muharram",
  }),
  new NavModel({
    title: "2 - Safar",
    href: "blessed-occasions/2-safar",
  }),
  new NavModel({
    title: "3 - Rabi al-Awwal",
    href: "blessed-occasions/3-rabi-al-awwal",
  }),
  new NavModel({
    title: "4 - Rabi al-Thani",
    href: "blessed-occasions/4-rabi-al-thani",
  }),
  new NavModel({
    title: "5 - Jumada al-Ula",
    href: "blessed-occasions/5-jumada-al-ula",
  }),
  new NavModel({
    title: "6 - Jumada al-Thaniyah",
    href: "blessed-occasions/6-jumada-al-thaniyah",
  }),
  new NavModel({
    title: "7 - Rajab",
    href: "blessed-occasions/7-rajab",
  }),
  new NavModel({
    title: "8 - Shaban",
    href: "blessed-occasions/8-shaban",
  }),
  new NavModel({
    title: "9 - Ramadan",
    href: "blessed-occasions/9-ramadan",
  }),
  new NavModel({
    title: "10 - Shawwal",
    href: "blessed-occasions/10-shawwal",
  }),
  new NavModel({
    title: "11 - Dhul Qadah",
    href: "blessed-occasions/11-dhul-qadah",
  }),
  new NavModel({
    title: "12 - Dhul Hijjah",
    href: "blessed-occasions/12-dhul-hijjah",
  }),
];

export default blessedOccasionsContent;
