import { DhikrEntryModel, DhikrModel, WirdModel } from "@/models/recitation";

export default [
  new WirdModel({
    title: "Supplication After Ablution",
    entries: [
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
            translit: "Ash-hadu allā ilāha illallāh waḥdahū lā sharīka lahū",
            translation:
              "I bear witness that there is no god but Allāh alone. He has no partner.",
          }),
          new DhikrEntryModel({
            arabic: "وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
            translit: "wa ash-hadu anna Muḥammadan ‛abduhū wa rasūluh",
            translation:
              "And I bear witness that Muḥammad is His servant and Messenger.",
          }),
          new DhikrEntryModel({
            arabic:
              "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ",
            translit:
              "subḥānakallāhumma wa biḥamdika ash-hadu allā ilāha illāanta astaghfiruka wa atūbu ilayka.",
            translation:
              "Glory be to You and praise be to You. I bear witness that there is no god, but You; and I ask You for forgiveness and turn to You in repentance.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ، وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ، وَاجْعَلْنِي مِنْ عِبَادِكَ الصَّالِحِينَ",
            translit:
              "Allāhum maj‛alnī minat tawwābīna, waj‛alnī minal mutaṭahhirīna, wal‛alnī min ‛ibādikaṣṣāliḥīn.",
            translation:
              "O Allāh! Place me among those who return to You, and place me among those who are purified, and place me among Your righteous servants.",
          }),
        ],
      }),
    ],
  }),
];
