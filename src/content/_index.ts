import "@/components/nav-button";
import { NavModel } from "@/models/nav";

const homeContent = [
  new NavModel({ href: "khulasah", title: "Khulasah" }),
  new NavModel({ href: "mawlids", title: "Mawlids" }),
  // new NavModel({ href: "the-burdah", title: "The Burdah" }),
  // new NavModel({ href: "salawat-compilations", title: "Salawat Compilations" }),
  // new NavModel({
  //   href: "dua-khatm-al-quran-al-karim",
  //   title: "Dua Khatm Al-Quran",
  // }),
  // new NavModel({ href: "hadrahs", title: "Hadrahs" }),
  new NavModel({ href: "blessed-occasions", title: "Blessed Occasions" }),
  // new NavModel({ href: "", title: "Visiting the Beloved ﷺ" }),
  // new NavModel({
  //   href: "",
  //   title: "Prayers for the Victoring in Masjid Al-Aqsa and Palenstine",
  // }),
];

export default homeContent;
