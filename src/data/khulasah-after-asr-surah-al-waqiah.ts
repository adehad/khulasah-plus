import { waqiah } from "@/data/shared/quran";
import { WirdModel } from "@/models/recitation";

export default [
  new WirdModel({ title: "Surat Al-Waqi'ah", entries: [waqiah(1, "", true)] }),
];
