import { DhikrEntryModel, DhikrModel, WirdModel } from "@/models/recitation";

export default [
  new WirdModel({
    title: "Intention for Learning & Specific times to say Salawat",
    entries: [
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِين",
            translit: "Alḥamdulillāhi rabbil āālamīn",
            translation: "All praise to Allāh, Lord of all the Worlds.",
          }),
          new DhikrEntryModel({
            arabic: "نَوَيْتُ التَّعَلُّمَ وَالتَّعْلِيمَ",
            translit: "nawaytut ta‛alluma watta‛līm",
            translation: "I intend to learn and to teach;",
          }),
          new DhikrEntryModel({
            arabic: "وَالتَّذَكُّرَ وَالتَّذْكِيرَ",
            translit: "wattadhakkura wattadhkīra",
            translation: "to remember and to remind;",
          }),
          new DhikrEntryModel({
            arabic: "وَالنَّفْعَ وَالِانْتِفَاعَ",
            translit: "wannaf‛a wal’intifā‛a",
            translation: "to benefit (myself) and to benefit others;",
          }),
          new DhikrEntryModel({
            arabic: "وَالْإِفَادَةَ وَالِاسْتِفَادَةَ",
            translit: "wal’ifādata wal’istifādata",
            translation: "to take and give advantage;",
          }),
          new DhikrEntryModel({
            arabic: "وَالْحَثَّ عَلَى التَّمَسُّكِ بِكِتَابِ اللَّهِ",
            translit: "wal ḥath-tha ‛alattamassuki bikitābillāhi",
            translation: "to encourage observance of the Book of Allāh",
          }),
          new DhikrEntryModel({
            arabic: "وَسُنَّةِ رَسُولِهِ",
            translit: "wa sunnati rasūlihī",
            translation: "and the Sunnah of His Messenger;",
          }),
          new DhikrEntryModel({
            arabic: "وَالدُّعَاءَ إِلَى الْهُدَى",
            translit: "waddu‛ā’a ilal hudā",
            translation: "to call towards guidance;",
          }),
          new DhikrEntryModel({
            arabic: "وَالدَّلَالَةَ عَلَى الْخَيْرِ",
            translit: "waddalālata ‛alal khayri",
            translation: "to direct towards the good;",
          }),
          new DhikrEntryModel({
            arabic: "ابْتِغَاءَ وَجْهِ اللَّهِ وَمَرْضَاتِهِ وَقُرْبِهِ وَثَوَابِهِ سُبْحَانَهُ وَتَعَالَى",
            translit:
              "ibtighā’a wajhillāhi wa marḍātihī wa qurbihī wa thawābihī subḥānahū wa ta‛ālā.",
            translation:
              "to seek (thereby) the Countenance of Allāh and His satisfaction, proximity and reward. Transcendent and Exalted is He.",
          }),
        ],
      }),
    ],
  }),
];
