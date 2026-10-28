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
    title: "Surah Buruj",
    entries: [buruj(1, "", true)],
  }),
  new WirdModel({
    title: "Surah Tariq",
    entries: [tariq(1, "", true)],
  }),
  new WirdModel({
    title: "Surah Duha",
    entries: [duha(1, "", true)],
  }),
  new WirdModel({
    title: "Surah Sharh",
    entries: [sharh(1, "", true)],
  }),
  new WirdModel({
    title: "Surah Qadr",
    entries: [qadr(1, "", true)],
  }),
  new WirdModel({
    title: "Surah Quraysh",
    entries: [quraysh(1, "", true)],
  }),
  new WirdModel({
    title: "Surah Kawthar",
    entries: [kawthar(1, "", true)],
  }),
  new WirdModel({
    title: "Surah Kafirun",
    entries: [kafirun(1, "", true)],
  }),
  new WirdModel({
    title: "Surah Nasr",
    entries: [nasr(1, "", true)],
  }),
  new WirdModel({
    title: "Surah Masad",
    entries: [masad(1, "", true)],
  }),
  new WirdModel({
    title: "Surah Ikhlas",
    entries: [ikhlas(1, "", true)],
  }),
  new WirdModel({
    title: "Surah Falaq",
    entries: [falaq(1, "", true)],
  }),
  new WirdModel({
    title: "Surah Nas",
    entries: [nas(1, "", true)],
  }),
];
