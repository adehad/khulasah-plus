import { DhikrEntryModel, DhikrModel, WirdModel } from "@/models/recitation";

export default [
  new WirdModel({
    title: "Istighfar",
    entries: [
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "أَسْتَغْفِرُ اللَّهَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الرَّحْمَنَ الرَّحِيمَ الْحَيَّ الْقَيُّومَ الَّذِي لَا يَمُوتُ",
            translit: "",
            translation:
              "I ask forgiveness of Allāh; there is no god but Him, the Most Compassionate, the Most Merciful, the Ever-Living, the Self-Subsisting, who never dies.",
          }),
          new DhikrEntryModel({
            arabic: "وَأَتُوبُ إِلَيْهِ",
            translit: "",
            translation: "I repent to Him.",
          }),
          new DhikrEntryModel({
            arabic: "رَبِّ اغْفِرْ لِي (27)",
            translit: "",
            translation: "O Lord forgive me! (27 times)",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "أَسْتَغْفِرُ اللَّهَ لِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ (27)",
            translit: "Astaghfirullāha lilmu’minīna wal mu’mināt. (27 times)",
            translation:
              "I ask Allāh’s forgiveness for all believing men and women. (27 times)",
          }),
        ],
      }),
    ],
  }),
];
