import {
  DhikrEntryModel,
  DhikrModel,
  QuranDhikrEntryModel,
  WirdModel,
} from "@/models/recitation";

export default [
  new WirdModel({
    title: "Wird of Imam Abu Bakr as-Sakran",
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
          new QuranDhikrEntryModel({
            arabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
            translit: "Bismillāhir raḥmānir raḥīm.",
            translation:
              "In the Name of Allāh, Most Compassionate, Most Merciful.",
            surah: 1,
            verse: 1,
          }),
          new QuranDhikrEntryModel({
            arabic: "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ",
            translit: "Alḥamdulillāhi rabbil ‛ālamīn.",
            translation: "All Praise be to Allāh, Lord of the Universe.",
            surah: 1,
            verse: 2,
          }),
          new QuranDhikrEntryModel({
            arabic: "ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
            translit: "Arraḥmānir raḥīm.",
            translation: "Most Compassionate, Most Merciful.",
            surah: 1,
            verse: 3,
          }),
          new QuranDhikrEntryModel({
            arabic: "مَٰلِكِ يَوْمِ ٱلدِّينِ",
            translit: "Māliki yawmid dīn.",
            translation: "Lord of the Day of Judgement.",
            surah: 1,
            verse: 4,
          }),
          new QuranDhikrEntryModel({
            arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
            translit: "Iyyāka na‛budu wa iyyāka nasta‛īn.",
            translation:
              "You alone do we worship, and to You alone do we turn for help.",
            surah: 1,
            verse: 5,
          }),
          new QuranDhikrEntryModel({
            arabic: "ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ",
            translit: "Ihdinaṣ ṣirāṭal mustaqīm.",
            translation: "Guide us to the Straight Way.",
            surah: 1,
            verse: 6,
          }),
          new QuranDhikrEntryModel({
            arabic: "صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ",
            translit:
              "Ṣirāṭal ladhīna an‛amta ‛alayhim, ghayril maghḍūbi ‛alayhim walaḍ ḍāllīn.",
            translation:
              "The Way of those on whom You have bestowed Your Grace; not the way of those who have earned your anger, nor of those who went astray.",
            surah: 1,
            verse: 7,
          }),
          new DhikrEntryModel({
            arabic: "آمِين",
            translit: "Aamin",
            translation: "",
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
          new QuranDhikrEntryModel({
            arabic:
              "ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ۚ لَا تَأْخُذُهُۥ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُۥ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ مَن ذَا ٱلَّذِى يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَىْءٍ مِّنْ عِلْمِهِۦٓ إِلَّا بِمَا شَآءَ ۚ وَسِعَ كُرْسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ ۖ وَلَا يَـُٔودُهُۥ حِفْظُهُمَا ۚ وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ",
            translit:
              "Allāhu lā ilāha illā huwal ḥayyul qayyūm; lā ta'khudhuhū sinatuw wa lā nawm; lahū mā fis samāwāti wa mā fil'arḍ, man dhalladhī yashfa‛u ‛indahū illā bi'idhnihī, ya‛lamu mā bayna aydīhim wa mā khalfahum, wa lā yuḥīṭūna bishay'im min ‛ilmihī illā bimā shā', wasi‛a kursiy yuhus samāwāti wal arḍ, wa lā ya'ūduhū ḥifẓuhumā, wa huwal ‛aliyyul ‛aẓīm.",
            translation:
              "Allāh! There is no deity but Him; the Ever-Living, the Self Subsisting, the Eternal One. Neither slumber nor sleep can overtake Him. To Him belongs whatsoever is in the Heavens and whatsoever is on the earth. Who is there that can intercede in His Presence except by His permission? He Knows what will happen to them (His creatures) in this world and what will happen to them in the Hereafter; nor shall they comprehend anything at all of His Knowledge except as He Wills. His Throne extends over the Heavens and the earth, and guarding and preserving it, does not exhaust Him, for He is the Exalted, the All-Mighty.",
            surah: 2,
            verse: 255,
          }),
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
            arabic: "تَتَرَّسْنَا بِاللَّهِ (3)",
            translit: "tatarrasnā billāh (3 times)",
            translation: "Allāh is our shield (3 times)",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "مِنْ عَدُوِّنَا وَعَدُوِّ اللَّهِ مِنْ سَاقِ عَرْشِ اللَّهِ",
            translit: "",
            translation:
              "against our enemy and the enemy of Allāh, from the pillar of Allāh's Throne",
          }),
          new DhikrEntryModel({
            arabic: "إِلَى قَاعِ أَرْضِ اللَّهِ",
            translit: "",
            translation: "to the depths of Allāh's earth",
          }),
          new DhikrEntryModel({
            arabic: "بِمِائَةِ أَلْفِ أَلْفِ أَلْفِ لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
            translit: "",
            translation:
              "with one hundred billion of: There is no power nor strength except with Allāh, the Exalted, the Mighty",
          }),
          new DhikrEntryModel({
            arabic:
              "صِنْعَتُهُ لَا تَنْقَطِعُ بِمِائَةِ أَلْفِ أَلْفِ أَلْفِ لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
            translit: "",
            translation:
              "Its composition will never break with one hundred billion of: There is no power nor strength except with Allāh, the Exalted, the Mighty",
          }),
          new DhikrEntryModel({
            arabic:
              "عَزِيمَتُهُ لَا تَنْشَقُّ بِمِائَةِ أَلْفِ أَلْفِ أَلْفِ لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيم",
            translit: "",
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
            translit: "",
            translation:
              "O Allāh! If someone from the jinn, humans, beasts or anything else from the rest of creation",
          }),
          new DhikrEntryModel({
            arabic: "مِنْ بَشَرٍ أَوْ شَيْطَانٍ أَوْ سُلْطَانٍ أَوْ وَسْوَاسٍ",
            translit: "",
            translation: "of humankind, the devil, a ruler or evil whisperer",
          }),
          new DhikrEntryModel({
            arabic: "فَارْدُدْ نَظَرَهُمْ فِي انْتِكَاسٍ",
            translit: "",
            translation:
              "plots to cause me any harm, then cause their (evil) gazes to relapse",
          }),
          new DhikrEntryModel({
            arabic: "وَقُلُوبَهُمْ فِي وَسْوَاسٍ",
            translit: "",
            translation: "and instill trouble in their hearts",
          }),
          new DhikrEntryModel({
            arabic: "وَأَيْدِيَهُمْ فِي إِفْلَاسٍ",
            translit: "",
            translation: "and make them bankrupt",
          }),
          new DhikrEntryModel({
            arabic: "وَأَوْبِقْهُمْ مِنَ الرِّجْلِ إِلَى الرَّأْسِ",
            translit: "",
            translation: "and disable them from head to toe",
          }),
          new DhikrEntryModel({
            arabic: "لَا فِي سَهْلٍ يَقْطَع",
            translit: "",
            translation: "so that they can neither cross a plane",
          }),
          new DhikrEntryModel({
            arabic: "وَلَا فِي جَبَلٍ يَطْلَع",
            translit: "",
            translation: "nor climb a mountain",
          }),
          new DhikrEntryModel({
            arabic: "بِمِائَةِ أَلْفِ أَلْفِ أَلْفِ لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
            translit: "",
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
          new QuranDhikrEntryModel({
            arabic: "سُبْحَٰنَ رَبِّكَ رَبِّ ٱلْعِزَّةِ عَمَّا يَصِفُونَ",
            translit: "Subḥāna rabbika rabbil ‛izzati ‛ammā yaṣifūn.",
            translation:
              "Glory be to your Lord; the Lord of Honour and Power Who is far above what they attribute to Him.",
            surah: 37,
            verse: 180,
          }),
          new QuranDhikrEntryModel({
            arabic: "وَسَلَٰمٌ عَلَى ٱلْمُرْسَلِينَ",
            translit: "Wa salāmun ‛alal mursalīn.",
            translation: "And peace be on the Messengers.",
            surah: 37,
            verse: 181,
          }),
          new QuranDhikrEntryModel({
            arabic: "وَٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ",
            translit: "Walḥamdu lillāhi rabbil ‛ālamīn.",
            translation:
              "And praise be to Allāh, the Lord and Cherisher of the Worlds.",
            surah: 37,
            verse: 182,
          }),
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
