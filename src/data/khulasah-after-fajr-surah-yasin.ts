import { yasin } from "@/data/shared/quran";
import { WirdModel } from "@/models/recitation";

export default [
  new WirdModel({ title: "Surat Yasin", entries: [yasin(1, "", true)] }),
];
