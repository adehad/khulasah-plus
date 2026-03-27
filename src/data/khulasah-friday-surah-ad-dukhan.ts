import { dukhan } from "@/data/shared/quran";
import { WirdModel } from "@/models/recitation";

export default [
  new WirdModel({
    title: "Surah ad-Dukhan",
    entries: [dukhan(1, "", true)],
  }),
];
