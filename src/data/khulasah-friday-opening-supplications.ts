import { falaq, fatihah, ikhlas, nas } from "@/data/shared/quran";
import {
  baqarah_1,
  baqarah_2,
  baqarah_3,
  baqarah_4,
  baqarah_5,
  baqarah_163,
  baqarah_255,
  baqarah_284,
  baqarah_285,
  baqarah_286_verse,
  imran_18,
  imran_19,
  imran_26,
  imran_27,
} from "@/data/shared/quran-partial";
import { DhikrEntryModel, DhikrModel, WirdModel } from "@/models/recitation";

export default [
  new WirdModel({
    title: "Opening supplications",
    entries: [
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
            translit: "Bismillāhir raḥmānir raḥīm.",
            translation:
              "In the name of Allah, the Most Gracious, the Most Merciful.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          baqarah_1(),
          baqarah_2(),
          baqarah_3(),
          baqarah_4(),
          baqarah_5(),
        ],
      }),
      new DhikrModel({
        entries: [baqarah_163()],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ إِنِّي أُقَدِّمُ إِلَيْكَ بَيْنَ يَدَي كُلِّ نَفَسٍ وَلَمْحَةٍ وَلَحْظَةٍ وَخَطْرَةٍ وَطَرْفَةٍ يَطْرِفُ بِهَا أَهْلُ السَّمَوَاتِ وَالْأَرْضِ",
            translit:
              "Allāhumma innī uqaddimu ilayka bayna yaday kulli nafasin wa lamḥatin wa laḥẓatin wa khaṭratin wa ṭarfatin yaṭrifu bihā ahlus samāwāti wal arḍ",
            translation:
              "O Allah, I present to You, before every breath, glimpse, moment, passing thought and blink with which the inhabitants of the heavens and the earth blink,",
          }),
          new DhikrEntryModel({
            arabic: "وَكُلِّ شَيْءٍ هُوَ فِي عِلْمِكَ كَائِنٌ أَوْ قَدْ كَانَ",
            translit: "Wa kulli shay’in huwa fī ‛ilmika kā’inun aw qad kān",
            translation:
              "and before everything that is, in Your knowledge, existing or has already existed,",
          }),
          new DhikrEntryModel({
            arabic: "أُقَدِّمُ إِلَيْكَ بَيْنَ يَدَي ذَلِكَ كُلِّهِ:",
            translit: "Uqaddimu ilayka bayna yaday dhālika kullih:",
            translation: "I present to You, before all of that:",
          }),
        ],
      }),
      new DhikrModel({
        entries: [baqarah_255()],
      }),
      new DhikrModel({
        entries: [baqarah_284(), baqarah_285(), baqarah_286_verse()],
      }),
      new DhikrModel({
        entries: [
          imran_18(),
          new DhikrEntryModel({
            arabic: "وَأَنَا أَشْهَدُ بِمَا شَهِدَ اللَّهُ بِهِ وَأُشْهِدُ اللَّهَ عَلَى ذَلِكَ",
            translit:
              "Wa ana ash-hadu bimā shahidallāhu bihī wa ush-hidullāha ‛alā dhālika",
            translation:
              "I bear witness to what Allah has borne witness to, and I call Allah to witness to that,",
          }),
          new DhikrEntryModel({
            arabic: "وَأَسْتَوْدِعُ اللَّهَ هَذِهِ الشَّهَادَةَ",
            translit: "wa astawdi‛ullāha hādhihish-shahādah",
            translation: "and I entrust this testimony to Allah,",
          }),
          new DhikrEntryModel({
            arabic: "وَهِيَ لِي عِنْدَ اللَّهِ وَدِيعَةٌ",
            translit: "wa hiya lī ‛indallāhi wadī‛atun",
            translation: "and it is, with Allah, a trust for me.",
          }),
          new DhikrEntryModel({
            arabic: "أَسْأَلُهُ حِفْظَهَا حَتَّى يَتَوَفَّانِي عَلَيْهَا",
            translit: "as'aluhū ḥifẓahā ḥattā yatawaffānī ‛alayhā",
            translation:
              "I ask Him to preserve it until He takes me in death upon it.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [imran_19(), imran_26(), imran_27()],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "رَحْمَٰنَ الدُّنْيَا وَالْآخِرَةِ وَرَحِيمَهُمَا",
            translit: "Raḥmānad dunyā wal ākhirati wa raḥīmahumā",
            translation:
              "the Most Merciful of this world and the Hereafter, and the Compassionate to both,",
          }),
          new DhikrEntryModel({
            arabic: "تُعْطِي مَنْ تَشَاءُ مِنْهُمَا وَتَمْنَعُ مَنْ تَشَاءُ",
            translit: "Tu‛ṭī man tashā’u minhumā wa tamna‛u man tashā’",
            translation:
              "You give of them to whom You will and You withhold from whom You will.",
          }),
          new DhikrEntryModel({
            arabic: "أَنْتَ تَرْحَمُنَا فَارْحَمْنَا رَحْمَةً تُغْنِينَا بِهَا عَنْ رَحْمَةِ مَنْ سِوَاكَ",
            translit:
              "Anta tarḥamunā farḥamnā raḥmatan tughnīnā bihā ‛an raḥmati man siwāk",
            translation:
              "You have mercy on us, so have mercy on us with a mercy that makes us independent of the mercy of anyone other than You.",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ اقْضِ عَنَّا الدَّيْنَ وَاغْنِنَا مِنَ الْفَقْرِ",
            translit: "Allāhummaqḍi ‛annad dayna waghninā minal faqr",
            translation:
              "O Allah, settle our debts for us and enrich us against poverty,",
          }),
          new DhikrEntryModel({
            arabic: "وَتَوَفَّنَا عَلَى طَاعَتِكَ وَالْجِهَادِ فِي سَبِيلِكَ",
            translit: "Wa tawaffanā ‛alā ṭā‛atika wal jihādi fī sabīlik",
            translation:
              "and take us in death while obedient to You and striving in Your way.",
          }),
        ],
      }),
      ikhlas(
        11,
        "Then recite: Sūrah Al-Ikhlāṣ 11 times, and Sūrah Al-Falaq, Sūrah Al-Nās and Sūrah Al-Fātiḥah once each.",
        true,
      ),
      falaq(1, "", true),
      nas(1, "", true),
      fatihah(1, "", true),
    ],
  }),
];
