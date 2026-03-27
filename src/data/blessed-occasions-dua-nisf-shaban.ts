import {
  DhikrEntryModel,
  DhikrModel,
  QuranDhikrEntryModel,
  WirdModel,
} from "@/models/recitation";

export default [
  new WirdModel({
    title: "Dua Nisf Shaban",
    entries: [
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيم",
            translit: "Bismillāhi'r-Raḥmāni'r-Rahīm.",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَصَلَّى اللَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَآلِهِ وَصَحْبِهِ وَسَلَّم",
            translit:
              "wa ṣallallāhu ‛alā sayyidinā Muḥammadin wa ālihi wa ṣaḥbihi wa sallam.",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ يَا ذَا الْمَنِّ",
            translit: "Allāhumma yā dha'l-manni",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَلَا يُمَنُّ عَلَيْهِ",
            translit: "wa lā yumannu ‛alayhi.",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
            translit: "yā Dha'l-Jalāli wa'l-Ikrām.",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "يَا ذَا الطَّوْلِ وَالْإِنْعَامِ",
            translit: "yā Dha'ṭ-ṭawli wa'l-In‛ām.",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "لَا إِلَهَ إِلَّا أَنْتَ",
            translit: "Lā ilāha illā anta",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "ظَهْرَ اللَّاجِئِينَ",
            translit: "ẓahra'l-lāji'īna",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَجَارَ الْمُسْتَجِيرِينَ",
            translit: "wa jāra'l-mustajīrīna",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَمَأْمَنَ الْخَائِفِينَ",
            translit: "wa amāna'l-khā'ifīna.",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ إِنْ كُنْتَ كَتَبْتَنِي عِنْدَكَ فِي أُمِّ الْكِتَابِ شَقِيًّا أَوْ مَحْرُومًا أَوْ مَطْرُودًا أَوْ مُقَتَّرًا عَلَيَّ فِي الرِّزْقِ فَامْحُ اللَّهُمَّ بِفَضْلِكَ شَقَاوَتِي وَحِرْمَانِي وَطَرْدِي وَإِقْتَارَ رِزْقِي",
            translit:
              "Allāhumma in kunta katabtanī ‛indaka fī ummil-kitābi shaqiyyan aw maḥrūman aw maṭrūdan aw muqattaran ‛alayya fir-rizqi, famḥu-llāhumma bifaḍlika shaqāwatī wa ḥirmānī wa ṭardī wa iqtāra rizqī",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَأَثْبِتْنِي عِنْدَكَ فِي أُمِّ الْكِتَابِ سَعِيدًا مَرْزُوقًا مُوَفَّقًا لِلْخَيْرَاتِ",
            translit:
              "wa athbitnī ‛indaka fī ummil-kitābi sa‛īdan marzūqan muwaffaqan lil-khayrāt.",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "فَإِنَّكَ قُلْتَ وَقَوْلُكَ الْحَقُّ فِي كِتَابِكَ الْمُنْزَلِ عَلَى لِسَانِ نَبِيِّكَ الْمُرْسَلِ:",
            translit:
              "Fa innaka qulta wa qawluka'l-ḥaqqu fī Kitābika'l-Munzal ‛alā lisāni Nabiyyika'l-Mursal:",
            translation: "",
          }),
          new QuranDhikrEntryModel({
            arabic: "يَمْحُوا۟ ٱللَّهُ مَا يَشَآءُ وَيُثْبِتُ ۖ وَعِندَهُۥٓ أُمُّ ٱلْكِتَٰبِ",
            translit:
              "yamḥu'llāhu mā yashā'u wa yuthbitu wa `indahu Ummu'l-Kitāb",
            translation: "",
            verse: 39,
            surah: 13,
          }),
          new DhikrEntryModel({
            arabic: "إِلَهِي بِالتَّجَلِّي الْأَعْظَمِ فِي لَيْلَةِ النِّصْفِ مِنْ شَعْبَانَ الْمُكَرَّمِ",
            translit: "",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "الَّتِي يُفْرَقُ فِيهَا كُلُّ أَمْرٍ حَكِيمٍ وَيُبْرَمُ",
            translit: "",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic:
              "نَسْأَلُكَ أَنْ تَكْشِفَ عَنَّا مِنَ الْبَلَاءِ مَا نَعْلَمُ وَمَا لَا نَعْلَمُ وَمَا أَنْتَ بِهِ أَعْلَمُ",
            translit: "",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "إِنَّكَ أَنْتَ الْأَعَزُّ الْأَكْرَمُ",
            translit: "",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَصَلَّى ٱللَّهُ تَعَٰلَى عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلَّمَ",
            translit: "",
            translation: "",
          }),
        ],
      }),
    ],
  }),
];
