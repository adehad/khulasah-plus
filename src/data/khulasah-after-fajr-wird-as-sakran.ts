import {
  baqarah_255,
  fatihah_1,
  fatihah_2,
  fatihah_3,
  fatihah_4,
  fatihah_5,
  fatihah_6,
  fatihah_7,
  saffat_180,
  saffat_181,
  saffat_182,
} from "@/data/shared/quran-partial";
import { DhikrEntryModel, DhikrModel, WirdModel } from "@/models/recitation";

export default [
  new WirdModel({
    title: "Wird of Imam Abu Bakr as-Sakran",
    instruction:
      "Wird of Imam Abu Bakr as-Sakran bin Shaykh Abdur Rahman as-Saqqaf",
    entries: [
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ. اللَّهُمَّ إِنِّي احْتَطْتُ بِدَرْبِ اللَّهِ",
            translit:
              "Bismillāhir raḥmānir raḥīm Allāhumma inniḥ taṭtu bidarbillāh",
            translation:
              "In the Name of Allāh, the Most Compassionate, the Most Merciful. O Allāh! I have protected myself with the fortification of Allāh",
          }),
          new DhikrEntryModel({
            arabic: "طُولُهُ مَا شَاءَ اللَّهُ",
            translit: "ṭūluhū māshā'allāh",
            translation:
              "the length of which is māshā'Allāh (what Allāh has willed)",
          }),
          new DhikrEntryModel({
            arabic: "قُفْلُهُ لَا إِلَهَ إِلَّا اللَّهُ",
            translit: "qufluhū lā ilāha illallāh",
            translation:
              "its lock is lā ilāha illallāh (there is no god but Allāh)",
          }),
          new DhikrEntryModel({
            arabic: "بَابُهُ مُحَمَّدٌ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَآلِهِ وَسَلَّمَ",
            translit:
              "bābuhū Muḥammadur rasūlullāhi ṣallallāhu ‛alayhi wa ālihī wa sallam",
            translation:
              "its door is Muḥammadur rasulullāh (Muḥammad is the Messenger of Allāh), may the blessings and peace of Allāh be upon him and his family",
          }),
          new DhikrEntryModel({
            arabic: "سَقْفُهُ لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ ؛ أَحَاطَ بِنَا مِنْ",
            translit:
              "saqfuhū lā ḥawla wa lā quwwata illā billāhil ‛aliyyil ‛aẓīm; aḥāṭa binā min",
            translation:
              "its roof is la hawla wa la quwata illā billāhil ‛aliyyil ‛aẓīm (there is no power nor strength except with Allāh, the Most Exalted, the Mighty). It has completely enveloped us with:",
          }),
          fatihah_1(),
          fatihah_2(),
          fatihah_3(),
          fatihah_4(),
          fatihah_5(),
          fatihah_6(),
          fatihah_7(),
          new DhikrEntryModel({
            arabic: "آمِين",
            translit: "Aamin",
            translation: "Amen.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "سُورٌ سُورٌ سُورٌ، وَآيَةُ",
            translit: "Sūrun Sūrun Sūrun wa āyatu:",
            translation:
              "With His Wall (of Protection), with His Wall (of Protection), with His Wall (of Protection). And the Qur'ānic Verse:",
          }),
          baqarah_255(),
          new DhikrEntryModel({
            arabic: "بِنَا اسْتَدَارَتْ كَمَا اسْتَدَارَتِ الْمَلَائِكَةُ بِمَدِينَةِ الرَّسُولِ",
            translit:
              "Binastadārat kamastadāratil malā'ikatu bi madīnatir rasūl",
            translation:
              "This verse will protect us the way the Angels have protected the Prophetic city",
          }),
          new DhikrEntryModel({
            arabic: "بِلَا خَنْدَقٍ وَلَا سُورٍ",
            translit: "bilā khandaqin wa lā sūr",
            translation: "with no trench or walls",
          }),
          new DhikrEntryModel({
            arabic: "مِنْ كُلِّ قَدَرٍ مَقْدُورٍ",
            translit: "min kulli qadarin maqdūr",
            translation: "from every decreed ordainment",
          }),
          new DhikrEntryModel({
            arabic: "وَحَذَرٍ مَحْذُورٍ",
            translit: "wa ḥadharin maḥdhūr",
            translation: "and from every warned-about threat",
          }),
          new DhikrEntryModel({
            arabic: "وَمِنْ جَمِيعِ الشُّرُورِ",
            translit: "wa min jamī‛ish shurūr",
            translation: "and from all evils",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "تَتَرَّسْنَا بِاللَّهِ",
            translit: "tatarrasnā billāh",
            translation: "Allāh is our shield",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "مِنْ عَدُوِّنَا وَعَدُوِّ اللَّهِ مِنْ سَاقِ عَرْشِ اللَّهِ",
            translit: "Min ‛aduwwinā wa ‛aduwwillāh, min sāqi ‛arshillāh,",
            translation:
              "against our enemy and the enemy of Allāh, from the pillar of Allāh's Throne",
          }),
          new DhikrEntryModel({
            arabic: "إِلَى قَاعِ أَرْضِ اللَّهِ",
            translit: "ilā qā‛i arḍillāh,",
            translation: "to the depths of Allāh's earth",
          }),
          new DhikrEntryModel({
            arabic: "بِمِائَةِ أَلْفِ أَلْفِ أَلْفِ لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
            translit:
              "bi mi’ati alfi alfi alfi lā ḥawla wa lā quwwata illā billāhil ‛aliyyil ‛aẓīm;",
            translation:
              "with one hundred billion of: There is no power nor strength except with Allāh, the Exalted, the Mighty",
          }),
          new DhikrEntryModel({
            arabic:
              "صِنْعَتُهُ لَا تَنْقَطِعُ بِمِائَةِ أَلْفِ أَلْفِ أَلْفِ لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
            translit:
              "ṣin‛atuhū lā tanqaṭi‛u bi mi’ati alfi alfi alfi lā ḥawla wa lā quwwata illā billāhil ‛aliyyil ‛aẓīm;",
            translation:
              "Its composition will never break with one hundred billion of: There is no power nor strength except with Allāh, the Exalted, the Mighty",
          }),
          new DhikrEntryModel({
            arabic:
              "عَزِيمَتُهُ لَا تَنْشَقُّ بِمِائَةِ أَلْفِ أَلْفِ أَلْفِ لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيم",
            translit:
              "‛azīmatuhū lā tanshaqqu bi mi’ati alfi alfi alfi lā ḥawla wa lā quwwata illā billāhil ‛aliyyil ‛aẓīm",
            translation:
              "Its fortification will never shatter with one hundred billion of: There is no power nor strength except with Allāh, the Exalted, the Mighty.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ إِنْ أَحَدٌ أَرَادَنِي بِسُوءٍ مِنَ الْجِنِّ وَالْإِنْسِ وَالْوُحُوشِ وَغَيْرِهِمْ مِنْ سَائِرِ الْمَخْلُوقَاتِ",
            translit:
              "Allāhumma in aḥadun arādanī bi sū’in minal jinni wal insi wal wuḥūshi wa ghayrihim min sā’iril makhlūqāt;",
            translation:
              "O Allāh! If someone from the jinn, humans, beasts or anything else from the rest of creation",
          }),
          new DhikrEntryModel({
            arabic: "مِنْ بَشَرٍ أَوْ شَيْطَانٍ أَوْ سُلْطَانٍ أَوْ وَسْوَاسٍ",
            translit: "min basharin aw shayṭānin aw sulṭānin aw waswāsin,",
            translation: "of humankind, the devil, a ruler or evil whisperer",
          }),
          new DhikrEntryModel({
            arabic: "فَارْدُدْ نَظَرَهُمْ فِي انْتِكَاسٍ",
            translit: "fardud naẓarahum fintikāsin,",
            translation:
              "plots to cause me any harm, then cause their (evil) gazes to relapse",
          }),
          new DhikrEntryModel({
            arabic: "وَقُلُوبَهُمْ فِي وَسْوَاسٍ",
            translit: "wa qulūbahum fī waswāsin,",
            translation: "and instill trouble in their hearts",
          }),
          new DhikrEntryModel({
            arabic: "وَأَيْدِيَهُمْ فِي إِفْلَاسٍ",
            translit: "wa aydiyahim fī iflāsin,",
            translation: "and make them bankrupt",
          }),
          new DhikrEntryModel({
            arabic: "وَأَوْبِقْهُمْ مِنَ الرِّجْلِ إِلَى الرَّأْسِ",
            translit: "wa awbiqhum minar rijli ilar ra‛si,",
            translation: "and disable them from head to toe",
          }),
          new DhikrEntryModel({
            arabic: "لَا فِي سَهْلٍ يَقْطَع",
            translit: "lā fī sahlin yaqṭa‛u,",
            translation: "so that they can neither cross a plane",
          }),
          new DhikrEntryModel({
            arabic: "وَلَا فِي جَبَلٍ يَطْلَع",
            translit: "wa lā fī jabalin yaṭlu‛u,",
            translation: "nor climb a mountain",
          }),
          new DhikrEntryModel({
            arabic: "بِمِائَةِ أَلْفِ أَلْفِ أَلْفِ لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
            translit:
              "bi mi’ati alfi alfi alfi lā ḥawla wa lā quwwata illā billāhil ‛aliyyil ‛aẓīm",
            translation:
              "with one hundred billion of: There is no power nor strength except with Allāh, the Exalted, the Mighty.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "وَصَلَّى اللَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلَّمَ",
            translit:
              "Wa ṣallallāhu ‛alā sayyidinā Muḥammadin, wa ‛alā ālihī wa sallam.",
            translation:
              "And may the blessings and peace of Allāh be upon our master Muḥammad, and upon his family.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          saffat_180(),
          saffat_181(),
          saffat_182(),
          new DhikrEntryModel({
            arabic: "فِي كُلِّ لَحْظَةٍ أَبَدًا عَدَدَ خَلْقِهِ وَرِضَى نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ",
            translit:
              "Fī kulli laḥẓatin abadan, ‛adada khalqihī, wa riḍā nafsihī, wa zinata ‛arshihī, wa midāda kalimātihī.",
            translation:
              "in every moment forever, to the number of His creation, to the extent of His pleasure, to the weight of His Throne, and the ink that it would take to write His Words.",
          }),
        ],
      }),
    ],
  }),
];
