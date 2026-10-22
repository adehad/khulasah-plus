import { DhikrEntryModel, DhikrModel, WirdModel } from "@/models/recitation";

export default [
  new WirdModel({
    title: "Istighfar",
    entries: [
      new DhikrModel({
        repeat: 27,
        entries: [
          new DhikrEntryModel({
            arabic:
              "أَسْتَغْفِرُ اللَّهَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الرَّحْمَنَ الرَّحِيمَ الْحَيَّ الْقَيُّومَ الَّذِي لَا يَمُوتُ",
            translit:
              "Astaghfirullāhal ladhī lā ilāha illā huwar raḥmānar raḥīmal ḥayyal qayyūmal ladhī lā yamūt.",
            translation:
              "I ask forgiveness of Allāh; there is no god but Him, the Most Compassionate, the Most Merciful, the Ever-Living, the Self-Subsisting, who never dies.",
          }),
          new DhikrEntryModel({
            arabic: "وَأَتُوبُ إِلَيْهِ",
            translit: "Wa atūbu ilayh.",
            translation: "I repent to Him.",
          }),
          new DhikrEntryModel({
            arabic: "رَبِّ اغْفِرْ لِي",
            translit: "Rabbigh fir lī",
            translation: "O Lord forgive me!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "أَسْتَغْفِرُ اللَّهَ لِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ",
            translit: "Astaghfirullāha lilmu’minīna wal mu’mināt.",
            translation:
              "I ask Allāh’s forgiveness for all believing men and women.",
            repeat: 27,
          }),
        ],
      }),
    ],
  }),
];
