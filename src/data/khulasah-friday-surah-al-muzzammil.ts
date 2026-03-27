import { muzzammil } from "@/data/shared/quran";
import { WirdModel } from "@/models/recitation";

export default [
  new WirdModel({
    title: "Surah al-Muzzammil",
    entries: [muzzammil(1, "", true)],
  }),
];
