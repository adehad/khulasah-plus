import {
  buruj,
  duha,
  falaq,
  ikhlas,
  kafirun,
  kawthar,
  masad,
  nas,
  nasr,
  qadr,
  quraysh,
  sharh,
  tariq,
} from "@/data/shared/quran";
import { WirdModel } from "@/models/recitation";

export default [
  new WirdModel({
    title: "Short Surahs",
    entries: [
      buruj(1, "", true),
      tariq(1, "", true),
      duha(1, "", true),
      sharh(1, "", true),
      qadr(1, "", true),
      quraysh(1, "", true),
      kawthar(1, "", true),
      kafirun(1, "", true),
      nasr(1, "", true),
      masad(1, "", true),
      ikhlas(1, "", true),
      falaq(1, "", true),
      nas(1, "", true),
    ],
  }),
];
