import { DhikrEntryModel, DhikrModel, WirdModel } from "@/models/recitation";

export const wird = [
  new WirdModel({
    title: "Afdal as-Salawat",
    entries: [
      new DhikrModel({ entries: [] }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "prayer one",
            translit: "",
            translation: "1. Salat al-Ibrahimiyya",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "prayer one",
            translit: "",
            translation: "1. Salat al-Ibrahimiyya",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "prayer one",
            translit: "",
            translation: "1. Salat al-Ibrahimiyya",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "prayer one",
            translit: "",
            translation: "",
          }),
        ],
      }),
    ],
  }),
];

export default wird;
