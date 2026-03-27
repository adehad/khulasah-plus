import { kahf } from "@/data/shared/quran";
import { WirdModel } from "@/models/recitation";

export default [
  new WirdModel({
    title: "Surah al-Kahf",
    entries: [kahf(1, "", true)],
  }),
];
