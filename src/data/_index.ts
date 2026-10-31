import { NavModel } from "@/models/nav";

const homeContent = [
  new NavModel({ href: "khulasah", title: "Khulasah" }),
  new NavModel({ href: "mawlids", title: "Mawlids" }),
  new NavModel({ href: "the-burdah", title: "The Burdah" }),
  new NavModel({ href: "salawat-compilations", title: "Salawat Compilations" }),
  new NavModel({
    href: "dua-khatm-al-quran-al-karim",
    title: "Dua Khatm Al-Quran",
  }),
  new NavModel({ href: "hadrahs", title: "Hadrahs" }),
  new NavModel({ href: "blessed-occasions", title: "Blessed Occasions" }),
  new NavModel({ href: "ziyarahs", title: "Ziyarahs" }),
  new NavModel({
    href: "prayers-for-palestine",
    title: "Prayers for Victory in Masjid al-Aqsa and Palestine",
  }),
];

export default homeContent;
