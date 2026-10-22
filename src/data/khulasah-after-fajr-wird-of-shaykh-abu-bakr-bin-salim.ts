import {
  DhikrEntryModel,
  DhikrModel,
  QuranDhikrEntryModel,
  WirdModel,
} from "@/models/recitation";

export default [
  new WirdModel({
    title: "Wird of Shaykh Abu Bakr bin Salim",
    entries: [
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
            translit: "Bismillāhir raḥmānir raḥīm",
            translation:
              "In the name of Allah, the Most Gracious, the Most Merciful.",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ يَا عَظِيمَ السُّلْطَانِ",
            translit: "Allāhumma yā ‛aẓīmas sulṭān",
            translation: "O Allah, O Possessor of mighty authority,",
          }),
          new DhikrEntryModel({
            arabic: "يَا قَدِيمَ الْإِحْسَانِ",
            translit: "Yā qadīmal iḥsān",
            translation: "O Eternal in beneficence,",
          }),
          new DhikrEntryModel({
            arabic: "يَا دَائِمَ النِّعَمِ",
            translit: "Yā dā’iman ni‛am",
            translation: "O Everlasting in blessings,",
          }),
          new DhikrEntryModel({
            arabic: "يَا كَثِيرَ الْجُودِ",
            translit: "Yā kathīral jūd",
            translation: "O Abundant in generosity,",
          }),
          new DhikrEntryModel({
            arabic: "يَا وَاسِعَ الْعَطَاءِ",
            translit: "Yā wāsi‛al ‛aṭā’",
            translation: "O Vast in giving,",
          }),
          new DhikrEntryModel({
            arabic: "يَا خَفِيَّ اللُّطْفِ",
            translit: "Yā khafiyyal luṭf",
            translation: "O Subtle in kindness,",
          }),
          new DhikrEntryModel({
            arabic: "يَا جَمِيلَ الصُّنْعِ",
            translit: "Yā jamīlaṣ ṣun‛",
            translation: "O Beautiful in Your doing,",
          }),
          new DhikrEntryModel({
            arabic: "يَا حَلِيمًا لَا يَعْجَل",
            translit: "Yā ḥalīman lā ya‛jal",
            translation: "O Forbearing One who does not hasten.",
          }),
          new DhikrEntryModel({
            arabic: "صَلِّ يَا رَبِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَآلِهِ وَسَلِّمْ وَارْضَ عَنِ الصَّحَابَةِ أَجْمَعِينَ",
            translit:
              "Ṣalli yā Rabbi ‛alā sayyidinā Muḥammadin wa ālihī wa sallim, warḍa ‛aniṣ ṣaḥābati ajma‛īn",
            translation:
              "O my Lord, bestow blessings and peace upon our master Muhammad and his family, and be pleased with all the Companions.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ لَكَ الْحَمْدُ شُكْرًا",
            translit: "Allāhumma lakal ḥamdu shukrā",
            translation: "O Allah, to You belongs all praise, in gratitude,",
          }),
          new DhikrEntryModel({
            arabic: "وَلَكَ الْمَنُّ فَضْلًا",
            translit: "wa lakal mannu faḍlā",
            translation: "and Yours is the favour, out of bounty.",
          }),
          new DhikrEntryModel({
            arabic: "وَأَنْتَ رَبُّنَا حَقًّا",
            translit: "wa anta rabbunā ḥaqqā",
            translation: "You are truly our Lord,",
          }),
          new DhikrEntryModel({
            arabic: "وَنَحْنُ عَبِيدُكَ رِقًّا",
            translit: "wa naḥnu ‛ibāduka riqqā",
            translation: "and we are Your servants in true bondage,",
          }),
          new DhikrEntryModel({
            arabic: "وَأَنْتَ لَمْ تَزَلْ لِذَلِكَ أَهْلًا",
            translit: "wa anta lam tazal lidhālika ahlā",
            translation: "and You have ever been worthy of that.",
          }),
          new DhikrEntryModel({
            arabic: "يَا مُيَسِّرَ كُلِّ عَسِيرٍ",
            translit: "yā muyassira kulli ‛asīr",
            translation: "O Easer of every difficulty,",
          }),
          new DhikrEntryModel({
            arabic: "وَيَا جَابِرَ كُلِّ كَسِيرٍ",
            translit: "wa yā jābira kulli kasīr",
            translation: "O Mender of every broken one,",
          }),
          new DhikrEntryModel({
            arabic: "وَيَا صَاحِبَ كُلِّ فَرِيدٍ",
            translit: "wa yā ṣāḥiba kulli farīd",
            translation: "O Companion of every lonely one,",
          }),
          new DhikrEntryModel({
            arabic: "وَيَا مُغْنِيَ كُلِّ فَقِيرٍ",
            translit: "wa yā mughniya kulli faqīr",
            translation: "O Enricher of every poor one,",
          }),
          new DhikrEntryModel({
            arabic: "وَيَا مُقَوِّيَ كُلِّ ضَعِيفٍ",
            translit: "wa yā muqawwiya kulli ḍa‛īf",
            translation: "O Strengthener of every weak one,",
          }),
          new DhikrEntryModel({
            arabic: "وَيَا مَأْمَنَ كُلِّ مَخِيفٍ",
            translit: "wa yā ma’mana kulli makhīf",
            translation: "O Refuge of every fearful one,",
          }),
          new DhikrEntryModel({
            arabic: "يَسِّرْ عَلَيْنَا كُلَّ عَسِيرٍ",
            translit: "yassir ‛alaynā kulla ‛asīr",
            translation: "make every difficulty easy for us,",
          }),
          new DhikrEntryModel({
            arabic: "فَتَيْسِيرُ الْعَسِيرِ عَلَيْكَ يَسِيرٌ",
            translit: "fataysīrul ‛asīri ‛alayka yasīr.",
            translation: "for making the difficult easy is simple for You.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ يَا مَنْ لَا يَحْتَاجُ إِلَى الْبَيَانِ وَالتَّفْسِيرِ حَاجَاتُنَا كَثِيرٌ، وَأَنْتَ عَالِمٌ بِهَا وَخَبِيرٌ",
            translit:
              "Allāhumma yā man lā yaḥtāju ilal bayāni wattafsīr; ḥājātunā kathīr, wa anta ‛alimun bihā wa khabīr.",
            translation:
              "O Allah, O You who have no need of explanation or elaboration, our needs are many, and You know them and are aware of them.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ إِنِّي أَخَافُ مِنْكَ، وَأَخَافُ مِمَّنْ يَخَافُ مِنْكَ، وَأَخَافُ مِمَّنْ لَا يَخَافُ مِنْكَ",
            translit:
              "Allāhumma innī akhāfu minka, wa akhāfu mimman yakhāfu minka, wa akhāfu mimman lā yakhāfu minka.",
            translation:
              "O Allah, I fear You, and I fear those who fear You, and I fear those who do not fear You.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ بِحَقِّ مَنْ يَخَافُ مِنْكَ نَجِّنَا مِمَّنْ لَا يَخَافُ مِنْكَ",
            translit:
              "Allāhumma biḥaqqi mayyakhāfu minka; najjinā mimman lā yakhāfu minka.",
            translation:
              "O Allah, by the right of those who fear You, save us from those who do not fear You.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ بِحَقِّ سَيِّدِنَا مُحَمَّدٍ احْرُسْنَا بِعَيْنِكَ الَّتِي لَا تَنَام",
            translit:
              "Allāhumma biḥaqqi sayyidinā Muḥammadin iḥrisnā bi‛aynikallatī lā tanām",
            translation:
              "O Allah, by the right of our master Muhammad, guard us with Your eye that never sleeps,",
          }),
          new DhikrEntryModel({
            arabic: "وَاكْنُفْنَا بِكَنَفِكَ الَّذِي لَا يُرَام",
            translit: "waknufnā bikanafikalladhī lā yurām",
            translation:
              "and shelter us in Your protection that cannot be breached,",
          }),
          new DhikrEntryModel({
            arabic: "وَارْحَمْنَا بِقُدْرَتِكَ عَلَيْنَا فَلَا نَهْلِكُ وَأَنْتَ ثِقَتُنَا وَرَجَاؤُنَا",
            translit:
              "warḥamnā biqudratika ‛alaynā falā nahliku wa anta thiqatunā wa raja’unā",
            translation:
              "and have mercy on us through Your power over us, so that we are not destroyed, for You are our trust and our hope.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "وَصَلَّى ٱللَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَآلِهِ وَصَحْبِهِ وَسَلَّمَ",
            translit:
              "Wa ṣallallāhu ‛alā sayyidinā Muḥammadin wa ālihī wa ṣaḥbihī wa sallam",
            translation:
              "May Allah bestow blessings and peace upon our master Muhammad, his family and his Companions.",
          }),
          new DhikrEntryModel({
            arabic: "والْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
            translit: "Walḥamdu lillāhi rabbil ‛ālamīn",
            translation: "And all praise belongs to Allah, Lord of the worlds,",
          }),
          new DhikrEntryModel({
            arabic: "عَدَدَ خَلْقِهِ",
            translit: "‛Adada khalqih",
            translation: "as many as the number of His creation,",
          }),
          new DhikrEntryModel({
            arabic: "وَرِضَى نَفْسِهِ",
            translit: "wa riḍā nafsih",
            translation: "as much as pleases Him,",
          }),
          new DhikrEntryModel({
            arabic: "وَزِنَةَ عَرْشِهِ",
            translit: "wa zinata ‛arshih",
            translation: "as much as the weight of His Throne,",
          }),
          new DhikrEntryModel({
            arabic: "وَمِدَادَ كَلِمَاتِهِ",
            translit: "wa midāda kalimātih",
            translation: "and as much as the ink of His words.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ إِنَّا نَسْأَلُكَ زِيَادَةً فِي الدِّينِ",
            translit: "Allāhumma innā nas’aluka ziyādatan fiddīn",
            translation: "O Allah, we ask You for increase in religion,",
          }),
          new DhikrEntryModel({
            arabic: "وَبَرَكَةً فِي الْعُمْرِ",
            translit: "wa barakatan fil ‛umri",
            translation: "blessing in life,",
          }),
          new DhikrEntryModel({
            arabic: "وَصِحَّةً فِي الْجَسَدِ",
            translit: "wa ṣiḥḥatan fil jasadi",
            translation: "health in the body,",
          }),
          new DhikrEntryModel({
            arabic: "وَسِعَةً فِي الرِّزْقِ",
            translit: "wasi‛atan firrizqi",
            translation: "abundance in provision,",
          }),
          new DhikrEntryModel({
            arabic: "وَتَوْبَةً قَبْلَ الْمَوْتِ",
            translit: "wa tawbatan qablal mawt",
            translation: "repentance before death,",
          }),
          new DhikrEntryModel({
            arabic: "وَشَهَادَةً عِنْدَ الْمَوْتِ",
            translit: "wa shahādatan ‛indal mawt",
            translation: "martyrdom at death,",
          }),
          new DhikrEntryModel({
            arabic: "وَمَغْفِرَةً بَعْدَ الْمَوْتِ",
            translit: "wa maghfiratan ba‛dal mawt",
            translation: "forgiveness after death,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَفْوًا عِنْدَ الْحِسَابِ",
            translit: "wa ‛afwan ‛indal ḥisāb",
            translation: "pardon at the reckoning,",
          }),
          new DhikrEntryModel({
            arabic: "وَأَمَانًا مِنَ الْعَذَابِ",
            translit: "wa amānan minal ‛adhāb",
            translation: "safety from the punishment,",
          }),
          new DhikrEntryModel({
            arabic: "وَنَصِيبًا مِنَ الْجَنَّةِ",
            translit: "wa naṣīban minal jannah",
            translation: "and a share of Paradise.",
          }),
          new DhikrEntryModel({
            arabic: "وَارْزُقْنَا النَّظَرَ إِلَى وَجْهِكَ الْكَرِيمِ",
            translit: "warzuqnan naẓra ilā wajhikal karīm",
            translation: "Grant us the sight of Your Noble Face.",
          }),
          new DhikrEntryModel({
            arabic: "وَصَلَّى ٱللَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَآلِهِ وَصَحْبِهِ وَسَلَّمَ",
            translit:
              "wa ṣallallāhu ‛alā sayyidinā Muḥammadin wa ālihī wa ṣaḥbihī wa sallam.",
            translation:
              "May Allah bestow blessings and peace upon our master Muhammad, his family and his Companions.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new QuranDhikrEntryModel({
            arabic: "سُبْحَٰنَ رَبِّكَ رَبِّ ٱلْعِزَّةِ عَمَّا يَصِفُونَ",
            translit: "Subḥāna rabbika rabbil ‛izzati ‛ammā yaṣifūn.",
            translation:
              "Exalted is your Lord, the Lord of might, above what they describe.",
            verse: 180,
            surah: 37,
          }),
          new QuranDhikrEntryModel({
            arabic: "وَسَلَٰمٌ عَلَى ٱلْمُرْسَلِينَ",
            translit: "Wa salāmun ‛alal mursalīn.",
            translation: "And peace upon the messengers.",
            verse: 181,
            surah: 37,
          }),
          new QuranDhikrEntryModel({
            arabic: "وَٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ",
            translit: "Walḥamdu lillāhi rabbil ‛ālamīn.",
            translation: "And praise to Allāh, Lord of the worlds.",
            verse: 182,
            surah: 37,
          }),
          new DhikrEntryModel({
            arabic: "عَدَدَ خَلْقِهِ، وَرِضَى نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ",
            translit:
              "‛Adada khalqihī wa riḍā nafsihī wa zinata ‛arshihī wa midāda kalimātihī.",
            translation:
              "As many as the number of His creation, as much as pleases Him, as much as the weight of His Throne, and as much as the ink of His words.",
          }),
        ],
      }),
    ],
  }),
];
