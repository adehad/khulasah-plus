import {
  baqarah_201,
  baqarah_286,
  hashr_24,
} from "@/data/shared/quran-partial";
import {
  DhikrEntryModel,
  DhikrModel,
  QasidaEntryModel,
  QasidaModel,
  QasidaVerseModel,
  QuranDhikrEntryModel,
  WirdModel,
} from "@/models/recitation";

export default [
  new WirdModel({
    title: "Adhkar before dawn",
    entries: [
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "سُبْحَانَ الْمَلِكِ الْقُدُّوسِ",
            translit: "Subḥānal Malikil Quddūs.",
            translation: "Glory be to the King, the Most Holy.",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "سُبُّوحٌ قُدُّوسٌ رَبُّ الْمَلَائِكَةِ وَالرُّوحِ",
            translit: "Subbūḥun quddūsun rabbul malā’ikati warrūḥ",
            translation:
              "Glorified, Most Holy, Lord of the angels and the Spirit,",
          }),
          new DhikrEntryModel({
            arabic: "جَلَّلتَ السَّمَوَاتِ وَالْأَرْضَ بِالْعِزَّةِ وَالْجَبَرُوتِ",
            translit: "Jallaltas samāwāti wal arḍa bil ‛izzati wal jabarūt",
            translation:
              "You have enveloped the heavens and the earth with might and dominion,",
          }),
          new DhikrEntryModel({
            arabic: "وَتَعَزَّزتَ بِالْقُدْرَةِ",
            translit: "Wa ta‛azzazta bil qudrati",
            translation: "and You have exalted Yourself with power,",
          }),
          new DhikrEntryModel({
            arabic: "وَقَهَرتَ الْعِبَادَ بِالْمَوْتِ",
            translit: "Wa qahhartal ‛ibāda ‛alal mawt.",
            translation: "and You have subdued Your servants with death.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِرِضَاكَ مِنْ سَخَطِكَ",
            translit: "Allāhumma innī a‛ūdhu biriḍāka min sakhaṭik",
            translation:
              "O Allah, I seek refuge in Your pleasure from Your displeasure,",
          }),
          new DhikrEntryModel({
            arabic: "وَبِمُعَافَاتِكَ مِنْ عُقُوبَتِكَ",
            translit: "wa bimu‛āfātika min ‛uqūbatik",
            translation: "and in Your pardon from Your punishment,",
          }),
          new DhikrEntryModel({
            arabic: "وَأَعُوذُ بِكَ مِنْكَ",
            translit: "wa a‛ūdhu bika minka",
            translation: "and I seek refuge in You from You.",
          }),
          new DhikrEntryModel({
            arabic: "لَا أُحْصِي ثَنَاءً عَلَيْكَ أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ",
            translit: "Lā uḥṣī thanā’an ‛alayk, anta kamā athnayta ‛alā nafsik",
            translation:
              "I cannot count Your praise; You are as You have praised Yourself.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new QuranDhikrEntryModel({
            arabic:
              "وَذَا ٱلنُّونِ إِذ ذَّهَبَ مُغَٰضِبًۭا فَظَنَّ أَن لَّن نَّقْدِرَ عَلَيْهِ فَنَادَىٰ فِى ٱلظُّلُمَٰتِ أَن لَّآ إِلَٰهَ إِلَّآ أَنتَ سُبْحَٰنَكَ إِنِّى كُنتُ مِنَ ٱلظَّٰلِمِينَ",
            translit:
              "wa dhān-nūni idh dhahaba mughāḍiban faẓanna an lan naqdira ʿalayhi fanādā fīẓ-ẓulumāti an lā ilāha illā anta sub'ḥānaka innī kuntu minaẓ-ẓālimīn",
            translation:
              'And [mention] the man of the fish [i.e., Jonah], when he went off in anger and thought that We would not decree [anything] upon him. And he called out within the darknesses, "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers."',
            verse: 87,
            surah: 21,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا حَيُّ يَا قَيُّومُ لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
            translit:
              "Yā ḥayyu yā qayyūmu lā ilāha illā anta subḥānaka innī kuntu minaẓẓālimīn.",
            translation:
              "O Ever-Living, O Self-Sustaining, there is no god but You; glory be to You, I have been among the wrongdoers.",
            repeat: 40,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "فِي كُلِّ لَحْظَةٍ أَبَدًا، عَدَدَ خَلقِكَ، وَرِضَى نَفْسِكَ، وَزِنَةَ عَرْشِكَ، وَمِدَادَ كَلِمَاتِكَ",
            translit:
              "Fī kulli laḥẓatin abadan, ‛adada khalqika, wa riḍā nafsika, wa zinata ‛arshika, wa midāda kalimātika.",
            translation: "Supplications Using Allah’s Most Beautiful Names",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
            translit: "Bismillāhir raḥmānir raḥīm",
            translation:
              "In the name of Allah, the Most Gracious, the Most Merciful.",
          }),
          new DhikrEntryModel({
            arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
            translit: "Alḥamdulillāhi rabbil ‛ālamīn",
            translation: "All praise is due to Allah, Lord of the worlds.",
          }),
          new DhikrEntryModel({
            arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
            translit: "Lā ilāha illallāhu waḥdahū lā sharīka lah",
            translation: "There is no god but Allah, alone, without partner;",
          }),
          new DhikrEntryModel({
            arabic: "لَهُ الْمُلكُ وَلَهُ الْحَمْدُ",
            translit: "Lahul mulku wa lahul ḥamd",
            translation: "His is the dominion and His is the praise;",
          }),
          new DhikrEntryModel({
            arabic: "بِيَدِهِ الْخَيْرُ",
            translit: "Biyadihil khayr",
            translation: "in His hand is all good,",
          }),
          new DhikrEntryModel({
            arabic: "وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
            translit: "Wa huwa ‛alā kulli shay’in qadīr",
            translation: "and He has power over all things.",
          }),
          new DhikrEntryModel({
            arabic: "لَا إِلَهَ إِلَّا اللَّهُ",
            translit: "Lā ilāha illallāh",
            translation: "There is no god but Allah.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [hashr_24()],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "صَلِّ وَسَلِّم فِي كُلِّ لَحْظَةٍ أَبَدًا عَدَدَ مَعْلُومَاتِكَ عَلَى سَيِّدِنَا مُحَمَّدٍ وَآلِهِ",
            translit:
              "Ṣalli wa sallim fī kulli laḥẓatin abadan ‛adada ma‛lūmātika ‛alā sayyidinā Muḥammadin wa ālih",
            translation:
              "Bestow blessings and peace, at every moment, forever, to the number of Your knowns, upon our master Muhammad and his family,",
          }),
          new DhikrEntryModel({
            arabic: "وَارْحَمنَا وَالْمُسْلِمِينَ",
            translit: "warḥamnā wal muslimīn",
            translation: "and have mercy on us and on the Muslims,",
          }),
          new DhikrEntryModel({
            arabic: "وَاحْفَظْنَا وَالْمُسْلِمِينَ",
            translit: "waḥfaẓnā wal muslimīn",
            translation: "and protect us and the Muslims,",
          }),
          new DhikrEntryModel({
            arabic: "وَانْصُرْنَا وَالْمُسْلِمِينَ",
            translit: "wanṣurnā wal muslimīn",
            translation: "and grant victory to us and the Muslims,",
          }),
          new DhikrEntryModel({
            arabic: "وَفَرِّج عَنَّا وَالْمُسْلِمِينَ",
            translit: "wa farrij ‛annā wal muslimīn",
            translation: "and relieve us and the Muslims,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَجِّل بِإِهْلَاكِ أَعْدَاءِ الدِّينِ",
            translit: "wa ‛ajjil bi’ihlāki a‛dā’id dīn",
            translation:
              "and hasten the destruction of the enemies of the religion,",
          }),
          new DhikrEntryModel({
            arabic:
              "وَهَبْ لَنَا وَلِأَحْبَابِنَا فِي هَذِهِ السَّاعَةِ وَفِي كُلِّ حِينٍ أَبَدًا مَا وَهَبْتَهُ لِعِبَادِكَ الصَّالِحِينَ فِي كُلِّ حِينٍ أَبَدًا مَعَ الْعَافِيَةِ التَّامَّةِ فِي الدَّارَينِ",
            translit:
              "wa hab lanā wa li’aḥbābinā fī hādhihis sā‛ati wa fī kulli ḥīnin abadan mā wahabtahū li‛ibādikaṣ ṣāliḥīna fī kulli ḥīnin abadan ma‛al ‛āfiyatit tāmmati fid dārayn",
            translation:
              "and grant us and our loved ones, at this hour and at every time forever, what You have granted Your righteous servants at every time forever, together with complete well-being in both abodes,",
          }),
          new DhikrEntryModel({
            arabic: "وَافْتَحْ عَلَيْنَا فَتُوحَ الْعَارِفِينَ",
            translit: "waftaḥ ‛alaynā futūḥal ‛ārifīn",
            translation: "and open for us the openings of the knowers,",
          }),
          new DhikrEntryModel({
            arabic: "وَاغْنِنَا بِحَلَالِكَ عَنْ حَرَامِكَ",
            translit: "waghninā biḥalālika ‛an ḥarāmik",
            translation:
              "and enrich us with what You have made lawful instead of what You have forbidden,",
          }),
          new DhikrEntryModel({
            arabic: "وَبِطَاعَتِكَ عَنْ مَعْصِيَتِكَ",
            translit: "wa biṭā‛atika ‛an ma‛ṣiyatik",
            translation:
              "and with obedience to You instead of disobedience to You,",
          }),
          new DhikrEntryModel({
            arabic: "وَبِفَضْلِكَ عَمَّنْ سِوَاكَ",
            translit: "wa bifaḍlika ‛amman siwāk",
            translation:
              "and with Your bounty instead of anyone other than You,",
          }),
          new DhikrEntryModel({
            arabic: "وَاهْدِنَا لِأَحْسَنِ الْأَعمَالِ وَالْأَخْلَاقِ لَا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ",
            translit:
              "wahdinā li’aḥsanil a‛māli wal akhlāqi lā yahdī li’aḥsanihā illā ant",
            translation:
              "and guide us to the best of deeds and character; none guides to the best of them except You,",
          }),
          new DhikrEntryModel({
            arabic: "وَاصْرِفْ عَنَّا سَيِّئَهَا لَا يَصْرِفُ عَنَّا سَيِّئَهَا إِلَّا أَنْتَ",
            translit:
              "waṣrif ‛annā sayyi’ahā lā yaṣrifu ‛annā sayyi’ahā illā ant",
            translation:
              "and turn away from us the worst of them; none turns away the worst of them from us except You.",
          }),
          new DhikrEntryModel({
            arabic: "وَارْحَمنَا وَالْمُسْلِمِينَ",
            translit: "warḥamnā wal muslimīn",
            translation: "and have mercy on us and on the Muslims,",
          }),
          new DhikrEntryModel({
            arabic: "وَاحْفَظْنَا وَالْمُسْلِمِينَ",
            translit: "waḥfaẓnā wal muslimīn",
            translation: "and protect us and the Muslims,",
          }),
          new DhikrEntryModel({
            arabic: "وَانْصُرْنَا وَالْمُسْلِمِينَ",
            translit: "wanṣurnā wal muslimīn",
            translation: "and grant victory to us and the Muslims,",
          }),
          new DhikrEntryModel({
            arabic: "وَفَرِّج عَنَّا وَالْمُسْلِمِينَ",
            translit: "wa farrij ‛annā wal muslimīn",
            translation: "and relieve us and the Muslims,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَجِّل بِإِهْلَاكِ أَعْدَاءِ الدِّينِ",
            translit: "wa ‛ajjil bi’ihlāki a‛dā’id dīn",
            translation:
              "and hasten the destruction of the enemies of the religion,",
          }),
          new DhikrEntryModel({
            arabic:
              "وَهَبْ لَنَا وَلِأَحْبَابِنَا فِي هَذِهِ السَّاعَةِ وَفِي كُلِّ حِينٍ أَبَدًا مَا وَهَبْتَهُ لِعِبَادِكَ الصَّالِحِينَ فِي كُلِّ حِينٍ أَبَدًا مَعَ الْعَافِيَةِ التَّامَّةِ فِي الدَّارَينِ",
            translit:
              "wa hab lanā wa li’aḥbābinā fī hādhihis sā‛ati wa fī kulli ḥīnin abadan mā wahabtahū li‛ibādikaṣ ṣāliḥīna fī kulli ḥīnin abadan ma‛al ‛āfiyatit tāmmati fid dārayn",
            translation:
              "and grant us and our loved ones, at this hour and at every time forever, what You have granted Your righteous servants at every time forever, together with complete well-being in both abodes,",
          }),
          new DhikrEntryModel({
            arabic: "وَافْتَحْ عَلَيْنَا فَتُوحَ الْعَارِفِينَ",
            translit: "waftaḥ ‛alaynā futūḥal ‛ārifīn",
            translation: "and open for us the openings of the knowers,",
          }),
          new DhikrEntryModel({
            arabic: "وَاغْنِنَا بِحَلَالِكَ عَنْ حَرَامِكَ",
            translit: "waghninā biḥalālika ‛an ḥarāmik",
            translation:
              "and enrich us with what You have made lawful instead of what You have forbidden,",
          }),
          new DhikrEntryModel({
            arabic: "وَبِطَاعَتِكَ عَنْ مَعْصِيَتِكَ",
            translit: "wa biṭā‛atika ‛an ma‛ṣiyatik",
            translation:
              "and with obedience to You instead of disobedience to You,",
          }),
          new DhikrEntryModel({
            arabic: "وَبِفَضْلِكَ عَمَّنْ سِوَاكَ",
            translit: "wa bifaḍlika ‛amman siwāk",
            translation:
              "and with Your bounty instead of anyone other than You,",
          }),
          new DhikrEntryModel({
            arabic: "وَاهْدِنَا لِأَحْسَنِ الْأَعمَالِ وَالْأَخْلَاقِ لَا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ",
            translit:
              "wahdinā li’aḥsanil a‛māli wal akhlāqi lā yahdī li’aḥsanihā illā ant",
            translation:
              "and guide us to the best of deeds and character; none guides to the best of them except You,",
          }),
          new DhikrEntryModel({
            arabic: "وَاصْرِفْ عَنَّا سَيِّئَهَا لَا يَصْرِفُ عَنَّا سَيِّئَهَا إِلَّا أَنْتَ",
            translit:
              "waṣrif ‛annā sayyi’ahā lā yaṣrifu ‛annā sayyi’ahā illā ant",
            translation:
              "and turn away from us the worst of them; none turns away the worst of them from us except You.",
          }),
          new DhikrEntryModel({
            arabic: "وَارْحَمنَا وَالْمُسْلِمِينَ",
            translit: "warḥamnā wal muslimīn",
            translation: "and have mercy on us and on the Muslims,",
          }),
          new DhikrEntryModel({
            arabic: "وَاحْفَظْنَا وَالْمُسْلِمِينَ",
            translit: "waḥfaẓnā wal muslimīn",
            translation: "and protect us and the Muslims,",
          }),
          new DhikrEntryModel({
            arabic: "وَانْصُرْنَا وَالْمُسْلِمِينَ",
            translit: "wanṣurnā wal muslimīn",
            translation: "and grant victory to us and the Muslims,",
          }),
          new DhikrEntryModel({
            arabic: "وَفَرِّج عَنَّا وَالْمُسْلِمِينَ",
            translit: "wa farrij ‛annā wal muslimīn",
            translation: "and relieve us and the Muslims,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَجِّل بِإِهْلَاكِ أَعْدَاءِ الدِّينِ",
            translit: "wa ‛ajjil bi’ihlāki a‛dā’id dīn",
            translation:
              "and hasten the destruction of the enemies of the religion,",
          }),
          new DhikrEntryModel({
            arabic:
              "وَهَبْ لَنَا وَلِأَحْبَابِنَا فِي هَذِهِ السَّاعَةِ وَفِي كُلِّ حِينٍ أَبَدًا مَا وَهَبْتَهُ لِعِبَادِكَ الصَّالِحِينَ فِي كُلِّ حِينٍ أَبَدًا مَعَ الْعَافِيَةِ التَّامَّةِ فِي الدَّارَينِ",
            translit:
              "wa hab lanā wa li’aḥbābinā fī hādhihis sā‛ati wa fī kulli ḥīnin abadan mā wahabtahū li‛ibādikaṣ ṣāliḥīna fī kulli ḥīnin abadan ma‛al ‛āfiyatit tāmmati fid dārayn",
            translation:
              "and grant us and our loved ones, at this hour and at every time forever, what You have granted Your righteous servants at every time forever, together with complete well-being in both abodes,",
          }),
          new DhikrEntryModel({
            arabic: "وَافْتَحْ عَلَيْنَا فَتُوحَ الْعَارِفِينَ",
            translit: "waftaḥ ‛alaynā futūḥal ‛ārifīn",
            translation: "and open for us the openings of the knowers,",
          }),
          new DhikrEntryModel({
            arabic: "وَاغْنِنَا بِحَلَالِكَ عَنْ حَرَامِكَ",
            translit: "waghninā biḥalālika ‛an ḥarāmik",
            translation:
              "and enrich us with what You have made lawful instead of what You have forbidden,",
          }),
          new DhikrEntryModel({
            arabic: "وَبِطَاعَتِكَ عَنْ مَعْصِيَتِكَ",
            translit: "wa biṭā‛atika ‛an ma‛ṣiyatik",
            translation:
              "and with obedience to You instead of disobedience to You,",
          }),
          new DhikrEntryModel({
            arabic: "وَبِفَضْلِكَ عَمَّنْ سِوَاكَ",
            translit: "wa bifaḍlika ‛amman siwāk",
            translation:
              "and with Your bounty instead of anyone other than You,",
          }),
          new DhikrEntryModel({
            arabic: "وَاهْدِنَا لِأَحْسَنِ الْأَعمَالِ وَالْأَخْلَاقِ لَا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ",
            translit:
              "wahdinā li’aḥsanil a‛māli wal akhlāqi lā yahdī li’aḥsanihā illā ant",
            translation:
              "and guide us to the best of deeds and character; none guides to the best of them except You,",
          }),
          new DhikrEntryModel({
            arabic: "وَاصْرِفْ عَنَّا سَيِّئَهَا لَا يَصْرِفُ عَنَّا سَيِّئَهَا إِلَّا أَنْتَ",
            translit:
              "waṣrif ‛annā sayyi’ahā lā yaṣrifu ‛annā sayyi’ahā illā ant",
            translation:
              "and turn away from us the worst of them; none turns away the worst of them from us except You.",
          }),
          new DhikrEntryModel({
            arabic: "وَارْحَمنَا وَالْمُسْلِمِينَ",
            translit: "warḥamnā wal muslimīn",
            translation: "and have mercy on us and on the Muslims,",
          }),
          new DhikrEntryModel({
            arabic: "وَاحْفَظْنَا وَالْمُسْلِمِينَ",
            translit: "waḥfaẓnā wal muslimīn",
            translation: "and protect us and the Muslims,",
          }),
          new DhikrEntryModel({
            arabic: "وَانْصُرْنَا وَالْمُسْلِمِينَ",
            translit: "wanṣurnā wal muslimīn",
            translation: "and grant victory to us and the Muslims,",
          }),
          new DhikrEntryModel({
            arabic: "وَفَرِّج عَنَّا وَالْمُسْلِمِينَ",
            translit: "wa farrij ‛annā wal muslimīn",
            translation: "and relieve us and the Muslims,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَجِّل بِإِهْلَاكِ أَعْدَاءِ الدِّينِ",
            translit: "wa ‛ajjil bi’ihlāki a‛dā’id dīn",
            translation:
              "and hasten the destruction of the enemies of the religion,",
          }),
          new DhikrEntryModel({
            arabic:
              "وَهَبْ لَنَا وَلِأَحْبَابِنَا فِي هَذِهِ السَّاعَةِ وَفِي كُلِّ حِينٍ أَبَدًا مَا وَهَبْتَهُ لِعِبَادِكَ الصَّالِحِينَ فِي كُلِّ حِينٍ أَبَدًا مَعَ الْعَافِيَةِ التَّامَّةِ فِي الدَّارَينِ",
            translit:
              "wa hab lanā wa li’aḥbābinā fī hādhihis sā‛ati wa fī kulli ḥīnin abadan mā wahabtahū li‛ibādikaṣ ṣāliḥīna fī kulli ḥīnin abadan ma‛al ‛āfiyatit tāmmati fid dārayn",
            translation:
              "and grant us and our loved ones, at this hour and at every time forever, what You have granted Your righteous servants at every time forever, together with complete well-being in both abodes,",
          }),
          new DhikrEntryModel({
            arabic: "وَافْتَحْ عَلَيْنَا فَتُوحَ الْعَارِفِينَ",
            translit: "waftaḥ ‛alaynā futūḥal ‛ārifīn",
            translation: "and open for us the openings of the knowers,",
          }),
          new DhikrEntryModel({
            arabic: "وَاغْنِنَا بِحَلَالِكَ عَنْ حَرَامِكَ",
            translit: "waghninā biḥalālika ‛an ḥarāmik",
            translation:
              "and enrich us with what You have made lawful instead of what You have forbidden,",
          }),
          new DhikrEntryModel({
            arabic: "وَبِطَاعَتِكَ عَنْ مَعْصِيَتِكَ",
            translit: "wa biṭā‛atika ‛an ma‛ṣiyatik",
            translation:
              "and with obedience to You instead of disobedience to You,",
          }),
          new DhikrEntryModel({
            arabic: "وَبِفَضْلِكَ عَمَّنْ سِوَاكَ",
            translit: "wa bifaḍlika ‛amman siwāk",
            translation:
              "and with Your bounty instead of anyone other than You,",
          }),
          new DhikrEntryModel({
            arabic: "وَاهْدِنَا لِأَحْسَنِ الْأَعمَالِ وَالْأَخْلَاقِ لَا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ",
            translit:
              "wahdinā li’aḥsanil a‛māli wal akhlāqi lā yahdī li’aḥsanihā illā ant",
            translation:
              "and guide us to the best of deeds and character; none guides to the best of them except You,",
          }),
          new DhikrEntryModel({
            arabic: "وَاصْرِفْ عَنَّا سَيِّئَهَا لَا يَصْرِفُ عَنَّا سَيِّئَهَا إِلَّا أَنْتَ",
            translit:
              "waṣrif ‛annā sayyi’ahā lā yaṣrifu ‛annā sayyi’ahā illā ant",
            translation:
              "and turn away from us the worst of them; none turns away the worst of them from us except You.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ إِنَّا نَسْأَلُكَ بِأَسْمَائِكَ الْحُسْنَى وَكَلِمَاتِكَ التَّامَّاتِ مَا عَلِمنَا مِنْهَا وَمَا لَمْ نَعْلَمْ أَنْ تَغْفِرَ لَنَا وَلِأَحْبَابِنَا أَبْدًا وَلِلْمُسْلِمِينَ كُلَّ ذَنْبٍ",
            translit:
              "Allāhumma innā nas’aluka bi’asmā’ikal ḥusnā wa kalimātikat tāmmāti mā ‛alimnā minhā wa mā lam na‛lam an taghfira lanā wa li’aḥbābinā abadan wa lilmuslimīna kulla dhanb",
            translation:
              "O Allah, we ask You by Your most beautiful names and Your perfect words, those we know of them and those we do not know, to forgive us, our loved ones forever, and the Muslims every sin,",
          }),
          new DhikrEntryModel({
            arabic: "وَتَستُرَ لَنَا كُلَّ عَيْبٍ",
            translit: "wa tastura lanā kulla ‛ayb",
            translation: "and to conceal every fault of ours,",
          }),
          new DhikrEntryModel({
            arabic: "وَتَكْشِفَ عَنَّا كُلَّ كَرْبٍ",
            translit: "wa takshifa ‛annā kulla karb",
            translation: "and to remove every distress from us,",
          }),
          new DhikrEntryModel({
            arabic: "وَتَصرِفَ وَتَرْفَعَ عَنَّا كُلَّ بَلَاءٍ",
            translit: "wa taṣrifa wa tarfa‛a ‛annā kulla balā’",
            translation: "and to avert and lift every affliction from us,",
          }),
          new DhikrEntryModel({
            arabic: "وتُعَافِيَنَا مِنْ كُلِّ مِحْنَةٍ وَفِتْنَةٍ وَشِدَّةٍ فِي الدَّارَيْنِ",
            translit:
              "wa tu‛āfiyanā min kulli miḥnatin wa fitnatin wa shiddatin fid dārayn",
            translation:
              "and to keep us safe from every trial, tribulation and hardship in both abodes,",
          }),
          new DhikrEntryModel({
            arabic: "وَتَقْضِيَ لَنَا كُلَّ حَاجَةٍ فِيهِمَا. يَا مَنْ هُوَ اللَّهُ الَّذِي لَا إِلَهَ إِلَّا هُو",
            translit:
              "wa taqḍiya lanā kulla ḥājatin fīhimā. Yā man huwallāhul ladhī lā ilāha illā hū",
            translation:
              "and to fulfil for us every need in both. O He who is Allah, besides whom there is no god.",
          }),
          new DhikrEntryModel({
            arabic: "يَا عَالِمَ الْغَيْبِ وَالشَّهَادَةِ",
            translit: "Yā ‛ālimal ghaybi wash shahādah",
            translation: "O Knower of the unseen and the seen,",
          }),
          new DhikrEntryModel({
            arabic: "سُبْحَانَكَ لَا إِلَهَ إِلَّا أَنْتَ",
            translit: "Subḥānaka lā ilāha illā ant",
            translation: "glory be to You, there is no god but You,",
          }),
          new DhikrEntryModel({
            arabic: "يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
            translit: "Yā dhal jalāli wal ikrām",
            translation: "O Possessor of majesty and honour,",
          }),
          new DhikrEntryModel({
            arabic: "أَسْأَلُكَ بِاسْمِكَ الْأَعْلَى الْأَعَزِّ الْأَجَلِّ الْأَكْرَمِ",
            translit: "As’aluka bismikal a‛lal a‛azzil ajallil akram",
            translation:
              "I ask You by Your name, the Most High, the Most Mighty, the Most Majestic, the Most Generous,",
          }),
          new DhikrEntryModel({
            arabic: "يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
            translit: "Yā dhal jalāli wal ikrām",
            translation: "O Possessor of majesty and honour,",
          }),
          new DhikrEntryModel({
            arabic: "وَالْمَوَاهِبِ الْعِظَامِ",
            translit: "wal mawāhibil ‛iẓām",
            translation: "and of the mighty gifts.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا اللَّهُ",
            translit: "Yā Allāh",
            translation:
              "[Repeat more or less 200 times, and intend with each repetition that Allāh will fulfill all one's needs.]",
            repeat: 200,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "يَا اللَّهُ يَا رَحْمَٰنُ يَا رَحِيمُ يَا مَلِكُ يَا قُدُّوسُ يَا سَلَامُ يَا مُؤْمِنُ يَا مُهَيمِنُ يَا عَزِيزُ يَا جَبَّارُ يَا مُتَكَبِّرُ يَا خَالِقُ يَا بَارِئُ يَا مُصَوِّرُ يَا غَفَّارُ يَا قَهَّارُ يَا وَهَّابُ يَا رَزَّاقُ يَا فَتَّاحُ يَا عَلِيمُ يَا قَابِضُ يَا بَاسِطُ يَا خَافِضُ يَا رَافِعُ يَا مُعِزُّ يَا مُذِلُّ يَا سَمِيعُ يَا بَصِيرُ يَاحَكَمُ يَا عَدْلُ يَا لَطِيفُ يَا خَبِيرُ يَا حَلِيمُ يَا عَظِيمُ يَا غَفُورُ يَا شَكُورُ يَا عَلِيُّ يَا كَبِيرُ يَا حَفِيظُ يَا مُقِيتُ يَا حَسِيبُ يَا جَلِيلُ يَا كَرِيمُ يَا رَقِيبُ يَا مُجِيبُ يَا وَاسِعُ يَا حَكِيمُ يَا وَدُودُ يَا مَجِيدُ يَا بَاعِثُ يَا شَهِيدُ يَا حَقُّ يَا وَكِيلُ يَا قَوِيُّ يَا مَتِينُ يَا وَلِيُّ يَا حَمِيدُ يَا مُحْصِي يَا مُبْدِئُ يَا مُعِيدُ يَا مُحْيِي يَا مُمِيتُ يَا حَيُّ يَا قَيُّومُ يَا وَاجِدُ يَا مَاجِدُ يَا وَاحِدُ يَا أَحَدُ يَا فَردُ يَا صَمَدُ يَا قَادِرُ يَا مُقتَدِرُ يَا مُقَدِّمُ يَا مُؤَخِّرُ يَا أَوَّلُ يَا آخِرُ يَاظَاهِرُ يَا بَاطِنُ يَا وَالِي يَا مُتَعَالِي يَا بَرُّ يَا تَوَّابُ يَا مُنْتَقِمُ يَا عَفُوُّ يَا رَؤُوفُ يَا مَالِكَ الْمُلكِ",
            translit:
              "Yā Allāhu yā raḥmānu yā raḥīmu yā maliku yā quddūsu yā salāmu yā mu’minu yā muhayminu yā ‛azīzu yā jabbāru yā mutakabbiru yā khāliqu yā bāri’u yā muṣawwiru yā ghaffāru yā qahhār yā wahhābu yā razzāqu yā fattāḥu yā ‛alīmu yā qābiḍu yā bāsiṭu yā khāfiḍu yā rāfi‛u yā mu‛izzu yā mudhillu yā samī‛u yā baṣīru yā ḥakamu yā ‛adlu yā laṭīfu yā khabīru yā ḥalīmu yā ‛aẓīmu yā ghafūru yā shakūru yā ‛aliyyu yā kabīru yā ḥafīẓu yā muqītu yā ḥasību yā jalīlu yā karīmu yā raqību yā mujību yā wāsi‛u yā ḥakīmu yā wadūdu yā majīdu yā bā‛ithu yā shahīdu yā ḥaqqu yā wakīlu yā qawiyyu yā matīnu yā waliyyu yā ḥamīdu yā muḥṣī yā mubdi’u yā mu‛īdu yā muḥyī yā mumītu yā ḥayyu yā qayyūmu yā wājidu yā mājidu yā wāḥidu yā aḥadu yā faradu yā ṣamadu yā qādiru yā muqtadiru yā muqaddimu yā mu’akh-khiru yā awwalu yā ākhiru yā ẓāhiru yā bāṭinu yā wāli yā muta‛ālu yā barru yā tawwābu yā muntaqimu yā ‛afuwwu yā ra’ūfu yā mālikal mulki",
            translation:
              "O Allah, O Most Gracious, O Most Merciful, O King, O Most Holy, O Source of Peace, O Granter of Security, O Guardian, O Almighty, O Compeller, O Supreme, O Creator, O Originator, O Fashioner, O Most Forgiving, O Subduer, O Bestower, O Provider, O Opener, O All-Knowing, O Withholder, O Expander, O Abaser, O Exalter, O Honourer, O Humbler, O All-Hearing, O All-Seeing, O Judge, O Just, O Subtle, O All-Aware, O Forbearing, O Magnificent, O Oft-Forgiving, O Appreciative, O Most High, O Great, O Preserver, O Sustainer, O Reckoner, O Majestic, O Generous, O Watchful, O Responsive, O Vast, O All-Wise, O Loving, O Glorious, O Resurrector, O Witness, O Truth, O Trustee, O Strong, O Firm, O Protecting Friend, O Praiseworthy, O Counter, O Originator, O Restorer, O Giver of life, O Giver of death, O Ever-Living, O Self-Sustaining, O Finder, O Noble, O One, O Unique, O Singular, O Eternal Refuge, O All-Powerful, O Determiner, O Expediter, O Delayer, O First, O Last, O Manifest, O Hidden, O Governor, O Most Exalted, O Source of Goodness, O Accepter of Repentance, O Avenger, O Pardoner, O Compassionate, O Owner of all sovereignty.",
          }),
          new DhikrEntryModel({
            arabic: "يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
            translit: "yā dhal jalāli wal ikrām",
            translation: "O Possessor of majesty and honour,",
          }),
          new DhikrEntryModel({
            arabic:
              "يَا مُقسِطُ يَا جَامِعُ يَا غَنِيُّ يَا مُغنِي يَا مَانِعُ يَا ضَارُّ يَا نَافِعُ يَا نُورُ يَا هَادِي يَا بَدِيعُ يَا بَاقِي يَا وَارِثُ يَا رَشِيدُ يَا صَبُورُ",
            translit:
              "yā muqsiṭu yā jāmi‛u yā ghaniyyu yā mughnī yā māni‛u yā ḍārru yā nāfi‛u yā nūru yā hādi yā badī‛u yā bāqi yā wārithu yā rashīdu yā ṣabūru.",
            translation:
              "O Equitable, O Gatherer, O Self-Sufficient, O Enricher, O Preventer, O Distresser, O Benefiter, O Light, O Guide, O Incomparable Originator, O Everlasting, O Inheritor, O Guide to the right path, O Patient.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "صَلِّ وَسَلِّم فِي كُلِّ لَحْظَةٍ أَبَدًا عَدَدَ مَعْلُومَاتِكَ عَلَى سَيِّدِنَا مُحَمَّدٍ وَآلِهِ، وَارْحَمنَا وَالْمُسْلِمِينَ، وَاحْفَظْنَا وَالْمُسْلِمِينَ، وَانْصُرْنَا وَالْمُسْلِمِينَ، وَفَرِّج عَنَّا وَالْمُسْلِمِينَ، وَعَجِّل بِإِهْلَاكِ أَعْدَاءِ الدِّينِ، وَهَبْ لَنَا وَلِأَحْبَابِنَا فِي هَذِهِ السَّاعَةِ وَفِي كُلِّ حِينٍ أَبَدًا مَا وَهَبْتَهُ لِعِبَادِكَ الصَّالِحِينَ فِي كُلِّ حِينٍ أَبَدًا مَعَ الْعَافِيَةِ التَّامَّةِ فِي الدَّارَينِ، وَافْتَحْ عَلَيْنَا فَتُوحَ الْعَارِفِينَ، وَاغْنِنَا بِحَلَالِكَ عَنْ حَرَامِكَ، وَبِطَاعَتِكَ عَنْ مَعْصِيَتِكَ، وَبِفَضْلِكَ عَمَّنْ سِوَاكَ، وَاهْدِنَا لِأَحْسَنِ الْأَعمَالِ وَالْأَخْلَاقِ لَا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ، وَاصْرِفْ عَنَّا سَيِّئَهَا لَا يَصْرِفُ عَنَّا سَيِّئَهَا إِلَّا أَنْتَ",
            translit:
              "Ṣalli wa sallim fī kulli laḥẓatin abadan ‛adada ma‛lūmātika ‛alā sayyidinā Muḥammadin wa ālihī, warḥamnā wal muslimīna waḥfaẓnā wal muslimīna wanṣurnā wal muslimīna wa farrij ‛annā wal muslimīna, wa ‛ajjil bi’ihlāki a‛dā’id-dīn, wa hab lanā wa li’aḥbābinā fī hadhihis sā‛ati wa fī kulli ḥīnin abadam mā wahabtahū li‛ibādikaṣṣāliḥīna fī kulli ḥīnin abadan ma‛al ‛āfiyatit tāmmati fiddārayn, waftaḥ ‛alaynā futūḥal ‛ārifīn, waghninā biḥalālika ‛an ḥarāmika, wa bi ṭā‛atika ‛am ma‛ṣiyatika, wa bifaḍlika ‛amman siwāka, wahdinā li’aḥsanil a‛māli wal akhlāqi lā yahdī li’aḥsanihā illā anta. Waṣrif ‛annā sayyi’ahā lā yaṣrifu ‛annā sayyi’ahā illā anta.",
            translation:
              "Bestow blessings and peace, at every moment, forever, to the number of Your knowns, upon our master Muhammad and his family; have mercy on us and the Muslims, protect us and the Muslims, grant victory to us and the Muslims, relieve us and the Muslims, and hasten the destruction of the enemies of the religion; grant us and our loved ones, at this hour and at every time forever, what You have granted Your righteous servants at every time forever, together with complete well-being in both abodes; open for us the openings of the knowers; enrich us with what You have made lawful instead of what You have forbidden, with obedience to You instead of disobedience to You, and with Your bounty instead of anyone other than You; guide us to the best of deeds and character, none guides to the best of them except You, and turn away from us the worst of them, none turns away the worst of them from us except You.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ إِنَّا نَسْأَلُكَ كَمَالَ الْعَفْوِ وَالْعَافِيَةِ",
            translit: "Allāhumma innā nas’aluka kamālal ‛afwi wal ‛āfiyah",
            translation:
              "O Allah, we ask You for complete pardon and well-being,",
          }),
          new DhikrEntryModel({
            arabic: "وَالْمُعَافَاةِ الدَّائِمَةِ",
            translit: "wal mu‛āfātid dā’imah",
            translation: "and lasting safety,",
          }),
          new DhikrEntryModel({
            arabic: "فِي دِينِنَا وَدُنْيَانَا وَأَهْلِينَا وَأَمْوَالِنَا",
            translit: "fī dīninā wa dunyānā wa ahlīnā wa amwālinā",
            translation:
              "in our religion, our worldly life, our families and our wealth.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ اسْتُرْ عَوْرَاتِنَا",
            translit: "Allāhummastur ‛awrātinā",
            translation: "O Allah, conceal our faults,",
          }),
          new DhikrEntryModel({
            arabic: "وَآمِنْ رَوْعَاتِنَا",
            translit: "wa āmin raw‛ātinā",
            translation: "and calm our fears,",
          }),
          new DhikrEntryModel({
            arabic: "وَاكْفِنَا كُلَّ هَوْلٍ دُونَ الْجَنَّةِ",
            translit: "wakfinā kulla hawlin dūnal jannati",
            translation:
              "and suffice us against every terror short of Paradise,",
          }),
          new DhikrEntryModel({
            arabic: "وَارْزُقْنَا وَأَحْبَابَنَا أَبَدًا سَعَادَةَ الدَّارَيْنِ",
            translit: "warzuqnā wa aḥbābinā abadan sa‛ādatad dārayni.",
            translation:
              "and grant us and our loved ones forever the happiness of both abodes.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ يَا سَابِقَ الْفَوْت",
            translit: "Allāhumma yā sābiqal fawti,",
            translation: "O Allah, O You who forestall what would be missed,",
          }),
          new DhikrEntryModel({
            arabic: "وَيَا سَامِعَ الصَّوْت",
            translit: "wa yā sāmi‛aṣ ṣawti,",
            translation: "and O Hearer of every voice,",
          }),
          new DhikrEntryModel({
            arabic: "وَيَا كَاسِيَ الْعِظَامِ لَحْمًا وَمُنْشِرَهَا بَعْدَ الْمَوْتِ",
            translit: "wa yā kāsiyal ‛iẓāmi laḥman wa munshirahā ba‛dal mawti;",
            translation:
              "and O Clother of bones with flesh and Raiser of them after death;",
          }),
          new DhikrEntryModel({
            arabic:
              "صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَآلِهِ وَسَلِّم وَاجْعَلْ لَنَا وَلِلْمُسْلِمِينَ مِنْ كُلِّ هَمٍّ فَرَجًا",
            translit:
              "ṣalli ‛alā sayyidinā Muḥammadin wa ālihī wa sallim waj‛al lanā wa lil muslimīna min kulli hammin farajan,",
            translation:
              "bestow blessings upon our master Muhammad and his family and grant them peace, and make for us and the Muslims a relief from every worry,",
          }),
          new DhikrEntryModel({
            arabic: "وَمِنْ كُلِّ ضِيقٍ مَخْرَجًا",
            translit: "wa min kulli ḍīqin makhrajan,",
            translation: "and a way out of every hardship,",
          }),
          new DhikrEntryModel({
            arabic: "وَارْزُقْنَا مِنْ حَيْثُ لَا نَحْتَسِبُ",
            translit: "warzuqnā min ḥaythu lā naḥtasib.",
            translation: "and provide for us from where we do not expect.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا أَوَّلَ الْأَوَّلِينَ وَيَا آخِرَ الْآخِرِينَ",
            translit: "Allāhumma yā awwalal awwalīna wa yā ākhiral ākhirīn",
            translation:
              "O Allah, O First of the first and O Last of the last,",
          }),
          new DhikrEntryModel({
            arabic: "وَيَا ذَا الْقُوَّةِ الْمَتِين",
            translit: "wa yā dhal quwwatil matīn",
            translation: "and O Possessor of firm strength,",
          }),
          new DhikrEntryModel({
            arabic: "وَيَا رَاحِمَ الْمَسَاكِين",
            translit: "wa yā rāḥimal masākīn",
            translation: "and O Merciful to the poor,",
          }),
          new DhikrEntryModel({
            arabic: "وَيَا أَرْحَمَ الرَّاحِمِين",
            translit: "wa yā arḥamar rāḥimīn",
            translation: "and O Most Merciful of the merciful,",
          }),
          new DhikrEntryModel({
            arabic: "أَنْجِزْ لَنَا رَحْمَةً مِنْ عِنْدِكَ نَسْعَد بِهَا فِي الدُّنْيَا وَالْآخِرَةِ",
            translit:
              "anjiz lanā raḥmatam min ‛indika nas‛adu bihā fiddunyā wal ākhirah",
            translation:
              "bring to us a mercy from You by which we are made happy in this world and the Hereafter,",
          }),
          new DhikrEntryModel({
            arabic: "وَتَقضِ لَنَا كُلَّ حَاجَةٍ فِيهِمَا وَلِلْمُسْلِمِينَ",
            translit: "wa taqḍī lanā kulla ḥājatin fīhimā wa lil muslimīn",
            translation:
              "and fulfil for us and for the Muslims every need in both,",
          }),
          new DhikrEntryModel({
            arabic: "وَتَهَب لَنَا بِهَا مَا وَهَبْتَهُ لِلْمَحْبُوبِينَ",
            translit: "Wa tahabu lanā bihā mā wahabtahū lil maḥbūbīn",
            translation:
              "and grant us by it what You have granted the beloved,",
          }),
          new DhikrEntryModel({
            arabic:
              "وَتَرْزُقنَا بِهَا كَمَالَ الْمَعْرِفَةِ وَالْمَحَبَّةِ وَالْهُدَى وَالتَّوْفِيقِ وَالتُّقَى وَالْعَفَافِ وَالْعَافِيَةِ وَالْغِنَى وَالرِّضَا وَالْيَقِين",
            translit:
              "wa tarzuqnā bihā kamālal ma‛rifati wal maḥabbati wal hudā wattawfīqi wattuqā wal ‛afāfi wal ‛āfiyati wal ghinā warriḍā wal yaqīn",
            translation:
              "and provide us by it with the perfection of knowledge, love, guidance, success, God-consciousness, chastity, well-being, sufficiency, contentment and certainty,",
          }),
          new DhikrEntryModel({
            arabic: "وَتَجْمَع لَنَا بِهَا بَيْنَ خَيْرَاتِ الدُّنْيَا وَالدِّينِ",
            translit: "wa tajma‛u lanā bihā bayna khayrātid dunyā waddīn",
            translation:
              "and gather for us by it the good things of this world and the religion,",
          }),
          new DhikrEntryModel({
            arabic:
              "مَعَ كَمَالِ السَّلَامَةِ مِنَ الْفِتَنِ وَالْمِحَنِ وَمِنْ كُلِّ شَرٍّ وَغَفلَةٍ وَكَرْبٍ وَضُرٍّ وَذَنْبٍ وَعَيْبٍ وَسِحْرٍ وَعَينٍ",
            translit:
              "ma‛a kamālis salāmati minal fitani wal miḥani wa min kulli sharrin wa ghaflatin wa karbin wa ḍurrin wa dhambin wa ‛aybin wa siḥrin wa ‛aynin.",
            translation:
              "together with complete safety from trials and tribulations, and from every evil, heedlessness, distress, harm, sin, fault, sorcery and evil eye.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ إِنَّا نَسْأَلُكَ لَنَا وَلِأَحْبَابِنَا أَبَدًا وَلِلْمُسْلِمِينَ إِلَى يَوْمِ الدِّينِ فِي كُلِّ لَحْظَةٍ أَبَدًا مِنْ خَيْرِ مَا سَأَلَكَ مِنْهُ عَبْدُكَ وَنَبِيُّكَ مُحَمَّدٌ صَلَّى اللَّهُ عَلَيْهِ وَآلِهِ وَسَلَّمَ وَعِبَادُكَ الصَّالِحُونَ",
            translit:
              "Allāhumma innā nas’aluka lanā wa li’aḥbābinā abadan wa lilmuslimīna ilā yawmid dīn fī kulli laḥẓatin abadan min khayri mā sa’alaka minhu ‛abduka wa nabiyyuka Muḥammadun ṣallallāhu ‛alayhi wa ālihī wa sallama wa ‛ibādukaṣṣāliḥūn",
            translation:
              "O Allah, we ask You, for ourselves, for our loved ones forever, and for the Muslims until the Day of Judgement, at every moment forever, for the best of what Your servant and Prophet Muhammad, may Allah bless him and his family and grant them peace, and Your righteous servants asked of You,",
          }),
          new DhikrEntryModel({
            arabic:
              "وَنَعُوذُ بِكَ مِمَّا اسْتَعَاذَكَ مِنْهُ عَبْدُكَ وَنَبِيُّكَ مُحَمَّدٌ صَلَّى اللَّهُ عَلَيْهِ وَآلِهِ وَسَلَّمَ وَعِبَادُكَ الصَّالِحُونَ",
            translit:
              "wa na‛ūdhu bika mimmas ta‛ādhaka minhu ‛abduka wa nabiyyuka Muḥammadun ṣallallāhu ‛alayhi wa ālihī wa sallama wa ‛ibādukaṣṣāliḥūn",
            translation:
              "and we seek refuge in You from what Your servant and Prophet Muhammad, may Allah bless him and his family and grant them peace, and Your righteous servants sought refuge in You from.",
          }),
          new DhikrEntryModel({
            arabic: "وَأَنْتَ الْمُسْتَعَانُ وَعَلَيْكَ الْبَلَاغُ",
            translit: "wa antal musta‛ānu wa ‛alaykal balāgh",
            translation:
              "You are the One whose help is sought, and upon You rests the delivery.",
          }),
          new DhikrEntryModel({
            arabic: "ولَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
            translit: "wa lā ḥawla wa lā quwwata illā billāh",
            translation:
              "and there is no power and no strength except with Allah.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ هَب لَنَا وَلَهُمْ كُلَّ خَيْرٍ عَاجِلٍ وَآجِلٍ ظَاهِرٍ وَبَاطِنٍ أَحَاطَ بِهِ عِلْمُكَ فِي الدِّينِ وَالدُّنْيَا وَالْآخِرَةِ",
            translit:
              "Allāhumma hab lanā wa lahum kulla khayrin ‛ājilin wa ājilin ẓāhirin wa bāṭinin aḥāṭa bihī ‛ilmuka fid dīni wad dunyā wal ākhirah",
            translation:
              "O Allah, grant us and them every good, immediate and future, outward and inward, that Your knowledge encompasses, in religion, in this world and in the Hereafter,",
          }),
          new DhikrEntryModel({
            arabic:
              "وَاصْرِفْ وَارْفَعْ عَنَّا وَعَنْهُمْ كُلَّ سُوءٍ عَاجِلٍ وَآجِلٍ ظَاهِرٍ وَبَاطِنٍ أَحَاطَ بِهِ عِلْمُكَ فِي الدِّينِ وَالدُّنْيَا وَالْآخِرَةِ",
            translit:
              "waṣrif warfa‛ ‛annā wa ‛anhum kulla sū’in ‛ājilin wa ājilin ẓāhirin wa bāṭinin aḥāṭa bihī ‛ilmuka fid dīni wad dunyā wal ākhirah",
            translation:
              "and avert and remove from us and from them every evil, immediate and future, outward and inward, that Your knowledge encompasses, in religion, in this world and in the Hereafter,",
          }),
          new DhikrEntryModel({
            arabic: "يَا مَالِكَ الدِّينِ وَالدُّنْيَا وَالْآخِرَة",
            translit: "Yā mālikad dīni wad dunyā wal ākhirah",
            translation: "O Owner of religion, this world and the Hereafter.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ",
            translit: "Allāhumma",
            translation: "O Allah,",
          }),
          baqarah_201(),
          baqarah_286(),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "وَصَلِّ اللَّهُمَّ عَلَى عَبْدِكَ وَرَسُولِكَ سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلِّم",
            translit:
              "wa ṣalli Allāhumma ‛alā ‛abdika wa rasūlika sayyidinā Muḥammadin wa ‛alā ālihī wa ṣaḥbihī wa sallim",
            translation:
              "and bestow blessings, O Allah, upon Your servant and Messenger, our master Muhammad, and upon his family and companions, and grant them peace,",
          }),
          new DhikrEntryModel({
            arabic:
              "وَارْزُقنَا كَمَالَ الْمُتَابَعَةِ لَهُ ظَاهِرًا وَبَاطِنًا فِي عَافِيَةٍ وَسَلَامَةٍ بِرَحْمَتِكَ",
            translit:
              "warzuqnā kamālal mutābi‛ati lahū ẓāhiran wa bāṭinan fī ‛āfiyatin wa salāmatin biraḥmatik",
            translation:
              "and grant us perfect following of him, outwardly and inwardly, in well-being and safety, by Your mercy.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا أَرْحَمَ الرَّاحِمِينَ",
            translit: "Yā arḥamar rāḥimīn.",
            translation:
              "Poem of Imam Abu Bakr bin Abdullah al-Aydarus - Ilahi Nas`aluk",
            repeat: 3,
          }),
        ],
      }),
    ],
  }),
  new QasidaModel({
    title: "",
    entries: [
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "إِلَهِي نَسْأَلُك بِالْاِسْمِ الْأَعْظَم",
            translit: "Ilāhī nas’aluka bil’ismil a‛ẓam,",
            translation: "O my God, we ask You by the Greatest Name,",
          }),
          new QasidaEntryModel({
            arabic: "وَجَاهِ الْمُصْطَفَى فَرِّجْ عَلَيْنَا",
            translit: "wa jāhil Muṣṭafā farrij ‛alaynā.",
            translation:
              "and by the standing of the Chosen One, grant us relief.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "بِبِسْمِ اللَّهِ مَوْلَانَا ابْتَدَيْنَا",
            translit: "Bi-bismillāhi mawlānabtadaynā,",
            translation: "In the name of Allah, our Master, we begin,",
          }),
          new QasidaEntryModel({
            arabic: "وَنَحْمَدُهُ عَلَى نَعمَاهُ فِينَا",
            translit: "wa naḥmaduhū ‛alā na‛māhu fīnā.",
            translation: "and we praise Him for His blessings upon us.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "تَوَسَّلنَا بِهِ فِي كُلِّ أَمْرٍ",
            translit: "Tawassalnā bihī fī kulli amrin,",
            translation: "We have sought a means to Him in every matter,",
          }),
          new QasidaEntryModel({
            arabic: "غِيَاثِ الْخَلْقِ رَبِّ الْعَالَمِينَا",
            translit: "ghiyāthil khalqi rabbil ‛ālamīnā.",
            translation: "Succour of creation, Lord of the worlds.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَبِالْأَسْمَاءِ مَا وَرَدَتْ بِنَصٍّ",
            translit: "Wa bil’asmā’i mā waradat binaṣṣin,",
            translation: "And by the names that have come in the texts,",
          }),
          new QasidaEntryModel({
            arabic: "وَمَا فِي الْغَيْبِ مَخْزُونًا مَصُونا",
            translit: "wa mā filghaybi makhzūnan maṣūnā.",
            translation: "and by what is stored and guarded in the unseen,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "بِكُلِّ كِتَابٍ أَنْزَلَهُ تَعَالَى",
            translit: "Bikulli kitābin anzalahū ta‛ālā,",
            translation: "by every book that the Exalted sent down,",
          }),
          new QasidaEntryModel({
            arabic: "وَقُرْآنٍ شِفَا لِلْمُؤْمِنِينَا",
            translit: "wa qur’ānin shifā lilmu’minīnā.",
            translation: "and a Qur'an that is a healing for the believers.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَبِالْهَادِي تَوَسَّلنَا وَلُذْنَا",
            translit: "Wa bilhādī tawassalnā waludhnā,",
            translation:
              "And through the Guide we seek a means and take refuge,",
          }),
          new QasidaEntryModel({
            arabic: "وَكُلِّ الْأَنْبِيَا وَالْمُرْسَلِينَا",
            translit: "wa kullil ambiyā wal mursalīnā.",
            translation: "and through all the prophets and messengers.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَآلِهِمُ مَعَ الْأَصْحَابِ جَمْعًا",
            translit: "Wa ālihimu ma‛al aṣḥābi jam‛ā,",
            translation:
              "And through their families together with the companions,",
          }),
          new QasidaEntryModel({
            arabic: "تَوَسَّلْنَا وَكُلِّ التَّابِعِينَا",
            translit: "tawassalnā wa kullit-tābi‛īnā.",
            translation: "we seek a means, and through all the followers.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "بِكُلِّ طَوَائِفِ الْأَمْلَاكِ نَدْعُو",
            translit: "Bikulli ṭawā’ifil amlāki nad‛ū,",
            translation: "By all the hosts of angels we call,",
          }),
          new QasidaEntryModel({
            arabic: "بِمَا فِي غَيبِ رَبِّي أَجْمَعِينَا",
            translit: "bimā fī ghaybi rabbī ajma‛īnā.",
            translation: "by all that is in my Lord's unseen.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَبِالْعُلَمَا بِأَمْرِ اللَّهِ طُرًّا",
            translit: "Wa bil‛ulamā bi’amrillāhi turrān,",
            translation:
              "And by the scholars who act by Allah's command, all of them,",
          }),
          new QasidaEntryModel({
            arabic: "وَكُلِّ الْأَوْلِيَا وَالصَّالِحِينَا",
            translit: "wa kullil awliyā waṣṣāliḥīnā.",
            translation: "and all the saints and the righteous.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "أَخُصُّ بِهِ الْإِمَامَ الْقُطْبَ حَقًّا",
            translit: "Akhuṣṣu bihil imāmal quṭba ḥaqqan,",
            translation: "I single out by it the Imam, the Pole in truth,",
          }),
          new QasidaEntryModel({
            arabic: "وَجِيهَ الدِّينِ تَاجَ الْعَارِفِينَا",
            translit: "wa jīhaddīni tājal ‛ārifīnā.",
            translation: "Wajih ad-Din, crown of the knowers.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "رَقَى فِي رُتْبَةِ التَّمْكِينِ مَرَقَى",
            translit: "Raqā fī rutbatittamkīni marqā,",
            translation:
              "He ascended to a lofty ascent in the rank of firm establishment,",
          }),
          new QasidaEntryModel({
            arabic: "وَقَدْ جَمَعَ الشَّرِيعَةَ وَالْيَقِينَا",
            translit: "wa qad jama‛ash-sharī‛ata wal yaqīnā.",
            translation: "and he gathered the Sacred Law and certainty.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَذِكرُ الْعَيْدَرُوسِ الْقُطْبِ أَجْلَى",
            translit: "Wa dhikrul ‛aydarūsil quṭbi ajlā,",
            translation:
              "And the remembrance of al-Aydarus, the Pole, best polishes away",
          }),
          new QasidaEntryModel({
            arabic: "عَنِ الْقَلْبِ الصَّدَى لِلصَّادِقِينَا",
            translit: "‛anil qalbiṣṣadā liṣṣādiqīnā.",
            translation: "the rust from the heart for the truthful.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "عَفِيفِ الدِّينِ مُحْيِي الدِّينِ حَقًّا",
            translit: "‛Afīfiddīni muḥḥīyiddīni ḥaqqan,",
            translation: "Afif ad-Din, Muhyi ad-Din, in truth,",
          }),
          new QasidaEntryModel({
            arabic: "لَهُ تَحْكِيمُنَا وَبِهِ اقْتَدَيْنَا",
            translit: "lahū taḥkīmunā wa bihiqtadaynā.",
            translation:
              "to him we refer our judgement and him we have followed.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَلَا نَنْسَى كَمَالَ الدِّينِ سَعْدًا",
            translit: "Wa lā nansā kamāladdīni sa‛dan,",
            translation: "And we do not forget Kamal ad-Din Sa'd,",
          }),
          new QasidaEntryModel({
            arabic: "عَظِيمَ الْحَالِ تَاجَ الْعَابِدِينَا",
            translit: "‛aẓīmal ḥāl tājal ‛ābidīnā.",
            translation: "of great spiritual state, crown of the worshippers.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "(وَنَاظِمَهَا أَبَا بَكْرٍ إِمَامًا",
            translit: "(Wa nāẓimahā abā bakrin imāman,",
            translation:
              "*This line was added by al-Ḥabīb Ibrāhīm bin ʽUmar bin ʽAqīl bin Yahya,",
          }),
          new QasidaEntryModel({
            arabic: "حَبَاهُ إِلَهُهُ جَاهًا مَكِينًا)*",
            translit: "ḥabāhu ilāhuhū jāhan makīnā).",
            translation: "who was the Muftī of Taiz",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "بِهِمْ نَدْعُو إِلَى الْمَوْلَى تَعَالَى",
            translit: "Bi him nad‛ū ilal mawlā ta‛ālā,",
            translation: "By them we call upon the Master, Exalted,",
          }),
          new QasidaEntryModel({
            arabic: "بِغُفْرَانٍ يَعُمُّ الْحَاضِرِينَا",
            translit: "bi-ghufrānin ya‛ummul ḥāḍirīnā.",
            translation:
              "for a forgiveness that encompasses all those present,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَلُطْفٍ شَامِلٍ وَدَوَامِ سَتْرٍ",
            translit: "Wa luṭfin shāmilin wa dawāmi satrin,",
            translation:
              "and a pervasive gentleness and continual concealment,",
          }),
          new QasidaEntryModel({
            arabic: "وَغُفْرَانٍ لِكُلِّ الْمُذْنِبِينَا",
            translit: "wa ghufrānin likullil mudhnibīnā.",
            translation: "and forgiveness for all sinners.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَنَخْتِمُهَا بِتَحْصِينٍ عَظِيمٍ",
            translit: "Wa nakhtimuhā bitaḥṣīnin ‛aẓīmin,",
            translation: "And we conclude it with a mighty protection,",
          }),
          new QasidaEntryModel({
            arabic: "بِحَوْلِ اللَّهِ لَا يُقدَر عَلَيْنَا",
            translit: "biḥawlillāhi lā yuqdar ‛alaynā.",
            translation: "by the power of Allah, none can overcome us.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَسَتْرُ اللَّهِ مَسْبُولٌ عَلَيْنَا",
            translit: "Wa sitrullāhi masbūlun ‛alaynā,",
            translation: "And Allah's veil is lowered over us,",
          }),
          new QasidaEntryModel({
            arabic: "وَعَينُ اللَّهِ نَاظِرَةٌ إِلَيْنَا",
            translit: "wa ‛aynullāhi nāẓiratun ilaynā.",
            translation: "and Allah's eye is looking upon us,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَنَخْتِمُ بِالصَّلَاةِ عَلَى مُحَمَّدْ",
            translit: "Wa nakhtimu biṣṣalāti ‛alā Muḥammad,",
            translation:
              "Imam Abdullah bin Alawi al-Haddad’s Poem - Ya 'Alim as-sirri",
          }),
          new QasidaEntryModel({
            arabic: "إِمَامِ الْكُلِّ خَيْرِ الشَّافِعِينَا",
            translit: "imāmil kulli khayrish-shāfi‛īnā.",
            translation: "the Imam of all, the best of intercessors.",
          }),
        ],
      }),
    ],
  }),
  new QasidaModel({
    title: "",
    entries: [
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا عَالِمَ السِّرِّ مِنَّا",
            translit: "Yā ‛ālimas sirri minnā",
            translation: "O Knower of our secrets,",
          }),
          new QasidaEntryModel({
            arabic: "لَا تَهتِكِ السَّتْرَ عَنَّا",
            translit: "lā tahtikis sitra ‛annā",
            translation: "do not tear the veil from us,",
          }),
          new QasidaEntryModel({
            arabic: "وَعَافِنَا وَاعْفُ عَنَّا",
            translit: "Wa ‛āfinā wa‛fu ‛annā",
            translation: "and grant us well-being and pardon us,",
          }),
          new QasidaEntryModel({
            arabic: "وَكُنْ لَنَا حَيْثُ كُنَّا",
            translit: "wa kullanā ḥaythu kunnā",
            translation: "and be for us wherever we are.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا رَبِّ يَا عَالِمَ الْحَال",
            translit: "Yā rabbi yā ‛ālimal ḥāl",
            translation: "O Lord, O Knower of our state,",
          }),
          new QasidaEntryModel({
            arabic: "إِلَيْكَ وَجَّهتُ الْآمَال",
            translit: "ilayka wajjahtul āmāl",
            translation: "to You I have directed my hopes,",
          }),
          new QasidaEntryModel({
            arabic: "فَامْنُنْ عَلَيْنَا بِالْإِقْبَال",
            translit: "Famnun ‛alaynā bil’iqbāl",
            translation: "so favour us with Your turning towards us,",
          }),
          new QasidaEntryModel({
            arabic: "وَكُنْ لَنَا وَاصْلِحِ الْبَال",
            translit: "wa kullanā waṣliḥil bāl",
            translation: "and be for us and set our affairs right.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا رَبِّ يَا رَبَّ الْأَرْبَاب",
            translit: "Yā rabbi yā rabbal arbāb",
            translation: "O my Lord, O Lord of lords,",
          }),
          new QasidaEntryModel({
            arabic: "عَبْدُك فَقِيرُك عَلَى الْبَاب",
            translit: "‛abduk faqīruk ‛alal bāb",
            translation: "Your servant, Your poor one, is at the door;",
          }),
          new QasidaEntryModel({
            arabic: "أَتَى وَقَدْ بَتَّ الْأَسْبَاب",
            translit: "Atā wa qad battal asbāb",
            translation: "he has come with all means exhausted,",
          }),
          new QasidaEntryModel({
            arabic: "مُسْتَدْرِكًا بَعْدَ مَا مَال",
            translit: "mustadrikan ba‛da mā māl",
            translation: "making amends after having strayed.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا وَاسِعَ الْجُودِ جُودَك",
            translit: "Yā wasi‛al jūdi jūduk",
            translation: "O You of vast generosity, Your generosity,",
          }),
          new QasidaEntryModel({
            arabic: "اَلْخَيْرُ خَيْرُك وَعِنْدَك",
            translit: "alkhayru khayruk wa ‛indak",
            translation: "all good is Yours and with You,",
          }),
          new QasidaEntryModel({
            arabic: "فَوْقَ الَّذِي رَامَ عَبْدُك",
            translit: "Fawqalladhī rāma ‛abduk",
            translation: "beyond what Your servant aspires to,",
          }),
          new QasidaEntryModel({
            arabic: "فَادْرِك بِرَحْمَتِك فِي الْحَالِ",
            translit: "fadrik biraḥmatik fil ḥāl",
            translation: "so reach me with Your mercy right now.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا مُوجِدَ الْخَلقِ طُرًّا",
            translit: "Yā mūjidal khalqi ṭurrā",
            translation: "O Originator of all creation,",
          }),
          new QasidaEntryModel({
            arabic: "وَمُوسِعَ الْكُلِّ بِرًّا",
            translit: "wa mūsi‛al kulli birrā",
            translation: "and Expander of all with goodness,",
          }),
          new QasidaEntryModel({
            arabic: "أَسْأَلُكَ إسْبَال سَتْرًا",
            translit: "As’aluk asbāla sitrā",
            translation: "I ask You to draw a veil",
          }),
          new QasidaEntryModel({
            arabic: "عَلَى الْقَبَائِح وَالْأَخْطَالْ",
            translit: "‛alal qabā’iḥ wal akhṭāl",
            translation: "over the shameful deeds and the errors.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا مَنْ يَرَى سِرَّ قَلْبِي",
            translit: "Yā man yarā sirra qalbī",
            translation: "O You who see the secret of my heart,",
          }),
          new QasidaEntryModel({
            arabic: "حَسْبِي اطِّلَاعُكَ حَسْبِي",
            translit: "ḥasbiṭṭilā‛uka ḥasbī",
            translation:
              "Your knowledge of it is enough for me, enough for me;",
          }),
          new QasidaEntryModel({
            arabic: "فَامْحُ بِعَفْوِكَ ذَنْبِي",
            translit: "Famḥu bi‛afwika dhambī",
            translation: "so erase my sin with Your pardon,",
          }),
          new QasidaEntryModel({
            arabic: "وَاصْلِح قُصُودِي وَالْأَعْمَال",
            translit: "waṣliḥ quṣūdī wal a‛māl",
            translation: "and set right my intentions and my deeds.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "رَبِّي عَلَيْكَ اعْتِمَادِي",
            translit: "Rabbi ‛alayka‛timādī",
            translation: "My Lord, upon You is my reliance,",
          }),
          new QasidaEntryModel({
            arabic: "كَمَا إِلَيْكَ اسْتِنَادِي",
            translit: "kamā ilaykastinādī",
            translation: "just as to You is my recourse,",
          }),
          new QasidaEntryModel({
            arabic: "صِدْقًا وَأَقْصَى مُرَادِي",
            translit: "Ṣidqan wa aqṣā murādī",
            translation: "in sincerity, and the utmost of my desire",
          }),
          new QasidaEntryModel({
            arabic: "رِضَاؤُكَ الدَّائِمُ الْحَال",
            translit: "riḍā’ukad dā’imul ḥāl",
            translation: "is Your pleasure at all times.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا رَبِّ يَا رَبِّ إِنِّي",
            translit: "Yā rabbi yā rabbi innī",
            translation: "O Lord, O Lord, I",
          }),
          new QasidaEntryModel({
            arabic: "أَسْأَلُكَ الْعَفْوَ عَنِّي",
            translit: "as’alukal ‛afwa ‛annī",
            translation: "ask You to pardon me,",
          }),
          new QasidaEntryModel({
            arabic: "وَلَمْ يَخِبْ فِيكَ ظَنِّي",
            translit: "Wa lam yakhib fīka ẓannī",
            translation: "and my hope in You has not been disappointed.",
          }),
          new QasidaEntryModel({
            arabic: "يَا مَالِكَ الْمُلكِ يَا وَال",
            translit: "yā mālikal mulki yā wāl",
            translation: "O Owner of sovereignty, O Governor,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "أَشْكُو إِلَيْكَ وَأَبْكِي",
            translit: "Ashkū ilayka wa abkī",
            translation: "I complain to You and I weep",
          }),
          new QasidaEntryModel({
            arabic: "مِنْ شُؤْمِ ظُلْمِي وَإِفْكِي",
            translit: "min shu’mi ẓulmī wa ifkī",
            translation:
              "because of the ill omen of my wrongdoing and my falsehood,",
          }),
          new QasidaEntryModel({
            arabic: "وَسُوءِ فِعْلِي وَتَرْكِي",
            translit: "Wa sū’i fi‛lī wa tarkī",
            translation: "and my evil deeds and my neglect,",
          }),
          new QasidaEntryModel({
            arabic: "وَشَهْوَةِ الْقِيلِ وَالْقَال",
            translit: "wa shahwatil qīli wal qāl",
            translation: "and the desire for idle gossip,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَحُبِّ دُنْيَا ذَمِيمَهْ",
            translit: "Wa ḥubbi dunyā dhamīmah",
            translation: "and the love of a blameworthy world,",
          }),
          new QasidaEntryModel({
            arabic: "مِنْ كُلِّ خَيْرٍ عَقِيمَهْ",
            translit: "min kulli khayrin ‛aqīmah",
            translation: "barren of all good,",
          }),
          new QasidaEntryModel({
            arabic: "فِيهَا الْبَلَايَا مُقِيمَهْ",
            translit: "Fīhal balāyā muqīmah",
            translation: "in which trials abide,",
          }),
          new QasidaEntryModel({
            arabic: "وَحَشْوُهَا آفَات وَاشْغَال",
            translit: "wa ḥashwuhā āfāt washghāl",
            translation: "and whose filling is afflictions and distractions.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا وَيْحَ نَفْسِي الْغَوِيَّهْ",
            translit: "Yā wayḥa nafsil ghawiyyah",
            translation: "Woe to my misguided soul,",
          }),
          new QasidaEntryModel({
            arabic: "عَنِ السَّبِيلِ السَّوِيَّهْ",
            translit: "‛anis sabīlis sawiyyah",
            translation: "which has strayed from the straight path;",
          }),
          new QasidaEntryModel({
            arabic: "أَضْحَتْ تُرَوِّج عَلَيَّهْ",
            translit: "Aḍḥat turawwij ‛alayyah",
            translation: "it has taken to deceiving me,",
          }),
          new QasidaEntryModel({
            arabic: "وَقَصْدُهَا الْجَاهُ وَالْمَال",
            translit: "wa qaṣduhal jāhu wal māl",
            translation: "and its aim is status and wealth.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا رَبِّ قَدْ غَلَبَتْنِي",
            translit: "Yā rabbi qad ghalabatnī",
            translation: "O Lord, it has overcome me,",
          }),
          new QasidaEntryModel({
            arabic: "وَبِالْأَمَانِي سَبَتْنِي",
            translit: "wa bil’amānī sabatnī",
            translation: "and captivated me with wishful hopes,",
          }),
          new QasidaEntryModel({
            arabic: "وَفِي الْحُظُوظِ كَبَتنِي",
            translit: "Wa fil ḥuẓūẓi kabatnī",
            translation: "and humiliated me through worldly shares,",
          }),
          new QasidaEntryModel({
            arabic: "وَقَيَّدَتْنِي بِالْاِكْبَالْ",
            translit: "wa qayyadatnī bil’ikbāl",
            translation: "and shackled me with fetters.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "قَدِ اسْتَعَنْتُكَ رَبِّي",
            translit: "Qadista‛intuka rabbī",
            translation: "I have sought Your help, my Lord,",
          }),
          new QasidaEntryModel({
            arabic: "عَلَى مُدَاوَاةِ قَلْبِي",
            translit: "‛alā mudāwāti qalbī",
            translation: "to heal my heart,",
          }),
          new QasidaEntryModel({
            arabic: "وَحَلِّ عُقْدَةِ كَربِي",
            translit: "Wa ḥalli ‛uqdati karbī",
            translation: "and to loosen the knot of my distress;",
          }),
          new QasidaEntryModel({
            arabic: "فَانْظُرْ إِلَى الْغَمِّ يَنْجَالْ",
            translit: "fanẓur ilal ghammi yanjāl",
            translation: "so look upon the sorrow that it may be lifted.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا رَبِّ يَا خَيْرَ كَافِي",
            translit: "Yā rabbi yā khayra kāfī",
            translation: "O Lord, O best of those who suffice,",
          }),
          new QasidaEntryModel({
            arabic: "أَحلِل عَلَيْنَا الْعَوَافِي",
            translit: "aḥlil ‛alaynal ‛awāfī",
            translation: "bring well-being down upon us,",
          }),
          new QasidaEntryModel({
            arabic: "فَلَيْسَ شَي ثَمَّ خَافِي",
            translit: "Falaysa shay’un thamma khāfī",
            translation: "for nothing is hidden",
          }),
          new QasidaEntryModel({
            arabic: "عَلَيْك تَفْصِيل وَاجْمَال",
            translit: "‛alayka tafṣīl wajmāl",
            translation: "from You, in detail or in sum.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا رَبِّ عَبدُك بِبَابِك",
            translit: "Yā rabbi ‛abduk bibābik",
            translation: "O Lord, Your servant is at Your door,",
          }),
          new QasidaEntryModel({
            arabic: "يَخْشَى أَلِيمَ عَذَابِك",
            translit: "yakhshā alīma ‛adhābik",
            translation: "fearing Your painful punishment,",
          }),
          new QasidaEntryModel({
            arabic: "وَيَرْتَجِي لِثَوَابِك",
            translit: "Wa yartajī lithawābik",
            translation: "and hoping for Your reward,",
          }),
          new QasidaEntryModel({
            arabic: "وَغَيْثُ رَحْمَتِك هَطَّالْ",
            translit: "wa ghaythu raḥmatik haṭṭāl",
            translation: "while the rain of Your mercy pours down.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَقَدْ أَتَاكَ بِعُذْرِه",
            translit: "Wa qad atāka bi‛udhrihī",
            translation: "He has come to You with his excuse,",
          }),
          new QasidaEntryModel({
            arabic: "وَبِانْكِسَارِه وَفَقْرِه",
            translit:
              "wa binkisārihī wa faqrihī, Fahzim biyusrika ‛usrihī, bimaḥḍi jūdik wal’afḍāl",
            translation: "with his brokenness and his poverty;",
          }),
          new QasidaEntryModel({
            arabic: "فَاهْزِمْ بِيُسْرِكَ عُسْرِه",
            translit: "Fahzim biyusrika ‛usrih",
            translation: "so defeat his hardship with Your ease,",
          }),
          new QasidaEntryModel({
            arabic: "بِمَحْضِ جُودِك وَالْاِفْضَال",
            translit: "bimaḥḍi jūdika wal ifḍāl",
            translation: "out of Your sheer generosity and bounty.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَامْنُن عَلَيْهِ بِتَوْبَهْ",
            translit: "Wamnun ‛alayhi bitawbah",
            translation: "and favour him with repentance",
          }),
          new QasidaEntryModel({
            arabic: "تَغْسِلْهُ مِنْ كُلِّ حَوْبَهْ",
            translit: "taghsilhu min kulli ḥawbah",
            translation: "that washes him of every sin,",
          }),
          new QasidaEntryModel({
            arabic: "وَاعْصِمْهُ مِنْ شَرِّ أَوبَهْ",
            translit: "Wa‛ṣimhu min sharri awbah",
            translation: "and protect him from the evil of relapse",
          }),
          new QasidaEntryModel({
            arabic: "لِكُلِّ مَا عَنْهُ قَدْ حَالْ",
            translit: "likulli mā ‛anhu qad ḥāl",
            translation: "into all that he has turned away from.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "فَأَنْتَ مَوْلَى الْمَوَالِي",
            translit: "Fa’anta mawlal mawālī",
            translation: "For You are the Master of masters,",
          }),
          new QasidaEntryModel({
            arabic: "الْمُنْفَرِد بِالْكَمَالِ",
            translit: "al-munfaridu bil kamāl",
            translation: "alone in perfection,",
          }),
          new QasidaEntryModel({
            arabic: "وَبِالْعُلَا وَالتَّعَالِي",
            translit: "wa bil ‛ulā wat ta‛ālī",
            translation: "and in loftiness and exaltedness;",
          }),
          new QasidaEntryModel({
            arabic: "عَلَوْتَ عَنْ ضَرْبِ الْاَمْثَال",
            translit:
              "Fa’anta mawlal mawālī, almunfarid bilkamāl. Wa bil‛ulā watta‛ālī, ‛alawta ‛an ḍarbil amthāl.",
            translation: "You are exalted above any likeness being struck.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "جُودُك وَفَضْلُك وَبِرُّك",
            translit: "Jūduk wa faḍluk wa birruk",
            translation: "Your generosity, Your bounty and Your kindness",
          }),
          new QasidaEntryModel({
            arabic: "يُرْجَى وَبَطْشُك وَقَهْرُك",
            translit: "yurjā wa baṭshuk wa qahruk",
            translation: "are hoped for, and Your might and Your subduing",
          }),
          new QasidaEntryModel({
            arabic: "يُخْشَى وَذِكْرُك وَشُكْرُك",
            translit: "Yukhshā wa dhikruk wa shukruk",
            translation: "are feared, and remembrance of You and thanks to You",
          }),
          new QasidaEntryModel({
            arabic: "لَازِم وَحَمْدُك وَالْإِجْلَال",
            translit: "lāzim wa ḥamduk wal’ijlāl",
            translation:
              "are obligatory, as are praise of You and veneration of You.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا رَبِّ أَنْتَ نَصِيرِي",
            translit: "Yā rabbi anta naṣīrī",
            translation: "O Lord, You are my Helper,",
          }),
          new QasidaEntryModel({
            arabic: "فَلَقِّنِي كُلَّ خَيرِ",
            translit: "falaqqinī kulla khayr",
            translation: "so grant me every good,",
          }),
          new QasidaEntryModel({
            arabic: "وَاجْعَلْ جِنَانَك مَصِيرِي",
            translit: "Waj‛al jinānak maṣīrī",
            translation: "and make Your Gardens my destination,",
          }),
          new QasidaEntryModel({
            arabic: "وَاخْتِمْ بِالْإِيمَانِ الْآجَالْ",
            translit: "wakhtim bil’īmānil ājāl",
            translation: "and seal my last hours with faith.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَصَلِّ فِي كُلِّ حَالَهْ",
            translit: "Wa ṣalli fī kulli ḥālah",
            translation: "And send blessings in every state",
          }),
          new QasidaEntryModel({
            arabic: "عَلَى مُزِيلِ الضَّلَالَهْ",
            translit: "‛alā mazīliḍ ḍalālah",
            translation: "upon the remover of misguidance,",
          }),
          new QasidaEntryModel({
            arabic: "مَنْ كَلَّمَتهُ الْغَزَالَهْ",
            translit: "Man kullamathul ghazālah",
            translation: "to whom the gazelle spoke,",
          }),
          new QasidaEntryModel({
            arabic: "مُحَمَّدِ الْهَادِي الدَّالْ",
            translit: "Muḥammadinil hādid dāl",
            translation: "Muhammad, the guide and the pointer.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَالْحَمْدُ لِلَّهِ شُكْرا",
            translit: "Walḥamdu lillāhi shukrā",
            translation: "And praise is to Allah in gratitude",
          }),
          new QasidaEntryModel({
            arabic: "عَلَى نِعَم مِنْهُ تَتْرَى",
            translit: "‛alā ni‛ami minhu tatrā",
            translation: "for His blessings that come in succession;",
          }),
          new QasidaEntryModel({
            arabic: "نَحْمَدهُ سِرًّا وَجَهْرا",
            translit: "Naḥmadhu sirran wa jahrā",
            translation: "we praise Him secretly and openly,",
          }),
          new QasidaEntryModel({
            arabic: "وَبِالْغَدَايَا وَالْآصَالْ",
            translit: "wa bilghadāyā wal’āṣāl",
            translation: "in the mornings and the evenings.",
          }),
        ],
      }),
    ],
  }),
  new QasidaModel({
    title: "",
    entries: [
      new QasidaVerseModel({
        chorus: true,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا أَرْحَمَ ٱلرَّٰحِمِينَ",
            translit: "Yā arḥamar rāḥimīn.",
            translation: "O Most Merciful of the merciful.",
          }),
          new QasidaEntryModel({
            arabic: "يَا أَرْحَمَ ٱلرَّٰحِمِينَ",
            translit: "Yā arḥamar rāḥimīn.",
            translation: "O Most Merciful of the merciful.",
          }),
          new QasidaEntryModel({
            arabic: "يَا أَرْحَمَ ٱلرَّٰحِمِينَ",
            translit: "Yā arḥamar rāḥimīn.",
            translation: "O Most Merciful of the merciful.",
          }),
          new QasidaEntryModel({
            arabic: "فَرِّجْ عَلَى الْمُسْلِمِين",
            translit: "farrij ‛alal muslimīn.",
            translation: "Relieve the Muslims.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا رَبَّنَا يَا كَرِيمْ",
            translit: "Yā rabbanā yā karīm",
            translation: "O our Lord, O Generous,",
          }),
          new QasidaEntryModel({
            arabic: "يَا رَبَّنَا يَا رَحِيمْ",
            translit: "yā rabbanā yā raḥīm",
            translation: "O our Lord, O Merciful,",
          }),
          new QasidaEntryModel({
            arabic: "أَنْتَ الْجَوَادُ الْحَلِيمْ",
            translit: "Antal jawādul ḥalīm",
            translation: "You are the Bountiful, the Forbearing,",
          }),
          new QasidaEntryModel({
            arabic: "وَأَنْتَ نِعْمَ الْمُعِين",
            translit: "wa anta ni‛mal mu‛īn",
            translation: "and You are the best of helpers,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَلَيْسَ نَرْجُو سِوَاك",
            translit: "Wa laysa narjū siwāk",
            translation: "and we hope for none other than You;",
          }),
          new QasidaEntryModel({
            arabic: "فَادْرِك إِلَهِي دَرَاكْ",
            translit: "fadrik ilāhī darāk",
            translation: "so reach us, my God, swiftly,",
          }),
          new QasidaEntryModel({
            arabic: "قَبْلَ الْفَنَا وَالْهَلَاك",
            translit: "Qablal fanā wal halāk",
            translation: "before annihilation and destruction,",
          }),
          new QasidaEntryModel({
            arabic: "يَعُمُّ دُنْيَا وَدِين",
            translit: "ya‛ummu dunyā wa dīn",
            translation: "which would engulf this world and the religion.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَمَا لَنَا رَبَّنَا",
            translit: "Wa mā lanā rabbanā",
            translation: "And we have nothing, our Lord,",
          }),
          new QasidaEntryModel({
            arabic: "سِوَاكَ يَا حَسْبَنَا",
            translit: "siwāka yā ḥasbanā",
            translation: "besides You, O our Sufficiency,",
          }),
          new QasidaEntryModel({
            arabic: "يَا ذَا الْعُلَا وَالْغِنَى",
            translit: "Yā dhal ‛ulā wal ghinā",
            translation: "O Possessor of loftiness and sufficiency,",
          }),
          new QasidaEntryModel({
            arabic: "وَيَا قَوِي يَا مَتِينْ",
            translit: "wa yā qawiyyu yā matīn",
            translation: "and O Strong, O Firm,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "نَسْأَلك وَالِي يُقِيم",
            translit: "Nas’aluka wālī yuqīm",
            translation: "we ask You for a ruler who establishes",
          }),
          new QasidaEntryModel({
            arabic: "اَلْعَدْلَ كَيْ نَسْتَقِيم",
            translit: "al‛adla kay nastaqīm",
            translation: "justice so that we may stay upright",
          }),
          new QasidaEntryModel({
            arabic: "عَلَى هُدَاكَ الْقَوِيم",
            translit: "‛Alā hudākal qawīm",
            translation: "on Your straight guidance,",
          }),
          new QasidaEntryModel({
            arabic: "وَلَا نُطِيعُ اللَّعِين",
            translit: "wa lā nuṭī‛ul la‛īn",
            translation: "and not obey the accursed one.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا رَبَّنَا يَا مُجِيبْ",
            translit: "Yā rabbanā yā mujīb",
            translation: "O our Lord, O Responder,",
          }),
          new QasidaEntryModel({
            arabic: "أَنْتَ السَّمِيعُ الْقَرِيب",
            translit: "antas samī‛ul qarīb",
            translation: "You are the All-Hearing, the Near;",
          }),
          new QasidaEntryModel({
            arabic: "ضَاقَ الْوَسِيعُ الرَّحِيب",
            translit: "Ḍāqal wasī‛ur raḥīb",
            translation: "the vast and spacious has become narrow,",
          }),
          new QasidaEntryModel({
            arabic: "فَانْظُرْ إِلَى الْمُؤْمِنِين",
            translit: "fanẓur ilal mu’minīn",
            translation: "so look upon the believers,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "نَظرَه تُزِيلُ الْعَنَا",
            translit: "Naẓrahū tuzīlul ‛anā",
            translation: "with a look that removes hardship",
          }),
          new QasidaEntryModel({
            arabic: "عَنَّا وَتُدْنِي الْمُنَى",
            translit: "‛annā wa tudnil munā",
            translation: "from us and brings closer the hopes",
          }),
          new QasidaEntryModel({
            arabic: "مِنَّا وَكُلَّ الْهَنَا",
            translit: "Minnā wa kullal hanā",
            translation: "to us, and all happiness,",
          }),
          new QasidaEntryModel({
            arabic: "نُعْطَاه فِي كُلِّ حِين",
            translit: "nu‛ṭāhu fī kulli ḥīn",
            translation: "that we are given at every time.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "سَالَكْ بِجَاهِ الْجُدُود",
            translit: "Sālak bi jāhil judūd",
            translation: "I ask You, by the honour of the forefathers,",
          }),
          new QasidaEntryModel({
            arabic: "وَالِي يُقِيمُ الْحُدُود",
            translit: "wālī yuqīmul ḥudūd",
            translation: "for a ruler who establishes the limits,",
          }),
          new QasidaEntryModel({
            arabic: "عَنَّا وَيَكْفِي الْحَسُود",
            translit: "‛Annā wa yakfil ḥusūd",
            translation: "and who wards off the envier from us,",
          }),
          new QasidaEntryModel({
            arabic: "وَيَدْفَعُ الظَّالِمِين",
            translit: "wa yadfa‛uẓ ẓālimīn",
            translation: "and repels the wrongdoers,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يُزِيلُ لِلْمُنْكَرَات",
            translit: "Yuzīlu lil munkarāt",
            translation: "who removes the abominations,",
          }),
          new QasidaEntryModel({
            arabic: "يُقِيمُ لِلصَّلَوَات",
            translit: "yuqīmu lil ṣalawāt",
            translation: "who establishes the prayers,",
          }),
          new QasidaEntryModel({
            arabic: "يَأْمُرُ بِالصَّالِحَات",
            translit: "Ya’muru bil ṣāliḥāt",
            translation: "who commands righteous deeds,",
          }),
          new QasidaEntryModel({
            arabic: "مُحِبٌّ لِلصَّالِحِين",
            translit: "muḥibbun lil ṣāliḥīn",
            translation: "and loves the righteous,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يُزِيحُ كُلَّ الْحَرَام",
            translit: "Yuzīḥu kullal ḥarām",
            translation: "who clears away all that is forbidden,",
          }),
          new QasidaEntryModel({
            arabic: "يَقْهَرُ كُلَّ الطَّغَامْ",
            translit: "yaqharu kullal ṭaghām",
            translation: "who subdues all the rabble,",
          }),
          new QasidaEntryModel({
            arabic: "يَعدِلُ بَيْنَ الْأَنَام",
            translit: "Ya‛dilu baynal anām",
            translation: "who is just among the people,",
          }),
          new QasidaEntryModel({
            arabic: "وَيُؤْمِنُ الْخَائِفِين",
            translit: "wa yu’minul khā’ifīn",
            translation: "and who gives security to the fearful.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "رَبِّ اسْقِنَا غَيْث عَام",
            translit: "Rabbisqinā ghaytha ‛ām",
            translation: "My Lord, send down upon us a general rain,",
          }),
          new QasidaEntryModel({
            arabic: "نَافِع مُبَارَك دَوَام",
            translit: "nāfi‛ mubāraka dawām",
            translation: "beneficial, blessed, lasting,",
          }),
          new QasidaEntryModel({
            arabic: "يَدُومُ فِي كُلِّ عَام",
            translit: "Yadūmu fī kulli ‛ām",
            translation: "continuing in every year",
          }),
          new QasidaEntryModel({
            arabic: "عَلَى مَمَرِّ السِّنِين",
            translit: "‛alā mamarris sinīn",
            translation: "through the passing of the years.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "رَبِّ احْيِنَا شَاكِرِين",
            translit: "Rabbiḥyinā shākirīn",
            translation: "My Lord, keep us alive grateful,",
          }),
          new QasidaEntryModel({
            arabic: "وَتَوَفَّنَا مُسْلِمِين",
            translit: "wa tawaffanā muslimīn",
            translation: "and take us in death as Muslims,",
          }),
          new QasidaEntryModel({
            arabic: "نُبْعَث مِنَ الْآمِنِين",
            translit: "Nub‛ath minal āminīn",
            translation: "that we may be raised among those secure,",
          }),
          new QasidaEntryModel({
            arabic: "فِي زُمْرَةِ السَّابِقِين",
            translit: "fī zumratis sābiqīn",
            translation: "in the company of the foremost,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "بِجَاهِ طَهَ الرَّسُول",
            translit: "Bijāhi ṭāharrasūl",
            translation: "by the honour of Taha, the Messenger.",
          }),
          new QasidaEntryModel({
            arabic: "جُدْ رَبَّنَا بِالْقَبُول",
            translit: "jud rabbanā bil qabūl",
            translation: "Our Lord, be generous with acceptance,",
          }),
          new QasidaEntryModel({
            arabic: "وَهَبْ لَنَا كُلَّ سُول",
            translit: "Wa hab lanā kulla sūl",
            translation: "and grant us every request;",
          }),
          new QasidaEntryModel({
            arabic: "رَبِّ اسْتَجِبْ لِي أَمِين",
            translit: "rabbistajib lī amīn",
            translation: "my Lord, answer me, Amen.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "عَطَاكَ رَبِّي جَزِيل",
            translit: "‛Aṭāka rabbī jazīl",
            translation: "Your gift, my Lord, is abundant,",
          }),
          new QasidaEntryModel({
            arabic: "وَكُلُّ فِعْلِك جَمِيل",
            translit: "wa kullu fi‛lika jamīl",
            translation: "and all Your actions are beautiful,",
          }),
          new QasidaEntryModel({
            arabic: "وَفِيك أَمَلنَا طَوِيل",
            translit: "Wa fīka amalnā ṭawīl",
            translation: "and our hope in You is long,",
          }),
          new QasidaEntryModel({
            arabic: "فَجُدْ عَلَى الطَّامِعِين",
            translit: "fajud ‛alal ṭāmi‛īn",
            translation: "so be generous to those who aspire.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا رَبِّ ضَاقَ الْخِنَاق",
            translit: "Yā rabbi ḍāqal khanāq",
            translation: "O Lord, we are in dire straits,",
          }),
          new QasidaEntryModel({
            arabic: "مِنْ فِعْلِ مَا لَا يُطَاق",
            translit: "min fi‛li mā lā yuṭāq",
            translation: "from doing what cannot be borne,",
          }),
          new QasidaEntryModel({
            arabic: "فَامْنُنْ بِفَكِّ الْغَلَاقْ",
            translit: "Fa’amnun bifakkigh-ghilāq",
            translation: "so favour us with the releasing of the lock",
          }),
          new QasidaEntryModel({
            arabic: "لِمَنْ بِذَنْبِه رَهِين",
            translit: "liman bidhambihī rahīn",
            translation: "for one who is held hostage by his sin.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَاغْفِرْ لِكُلِّ الذُّنُوب",
            translit: "Waghfir likullidh-dhunūb",
            translation: "And forgive all sins,",
          }),
          new QasidaEntryModel({
            arabic: "وَاسْتُرْ لِكُلِّ الْعُيُوب",
            translit: "wastur likullil ‛uyūb",
            translation: "conceal all faults,",
          }),
          new QasidaEntryModel({
            arabic: "وَاكْشِفْ لِكُلِّ الْكُرُوب",
            translit: "Wakshif likullil kurūb",
            translation: "remove all distresses,",
          }),
          new QasidaEntryModel({
            arabic: "وَاكْفِ أَذَى الْمُؤْذِيين",
            translit: "wakfi adhal mu’dhīn",
            translation: "and ward off the harm of those who cause harm.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَاخْتِمْ بِأَحْسَن خِتَام",
            translit: "Wakhtim bi’aḥsan khitām",
            translation: "And seal with the best of endings",
          }),
          new QasidaEntryModel({
            arabic: "إِذَا دَنَا الْإِنْصِرَامْ",
            translit: "idhā danal inṣirām",
            translation: "when the end draws near,",
          }),
          new QasidaEntryModel({
            arabic: "وَحَانَ حِينُ الْحِمَام",
            translit: "Wa ḥāna ḥīnul ḥimām",
            translation: "and the time of death arrives,",
          }),
          new QasidaEntryModel({
            arabic: "وَزَادَ رَشحُ الْجَبِين",
            translit: "wa zāda rash-ḥul jabīn",
            translation: "and the sweat on the forehead increases.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "ثُمَّ الصَّلَاة وَالسَّلَام",
            translit: "Thummaṣṣalātu wassalām",
            translation: "Then blessings and peace",
          }),
          new QasidaEntryModel({
            arabic: "عَلَى شَفِيعِ الْأَنَام",
            translit: "‛alā shafī‛il anām",
            translation: "upon the intercessor of mankind,",
          }),
          new QasidaEntryModel({
            arabic: "وَالْآلِ نِعْمَ الْكِرَام",
            translit: "wal āli ni‛mal kirām",
            translation: "and upon the family, how excellent the noble ones.",
          }),
          new QasidaEntryModel({
            arabic: "وَالصَّحْبِ وَالتَّابِعِين",
            translit:
              "Thummaṣṣalātu wassalām, ‛alā shafī‛il anām. Wal’āli ni‛mal kirām, waṣṣaḥḥibi wattābi‛īn.",
            translation:
              "Poem of al-Habib Ali bin Muhammad al-Habashi - Rabbi inni",
          }),
        ],
      }),
    ],
  }),
  new QasidaModel({
    title: "",
    entries: [
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "رَبِّ إِنِّي يَا ذَا الصِّفَاتِ الْعَلِيَّهْ",
            translit: "Rabbi innī yā dhaṣṣifātil ‛aliyyah,",
            translation: "My Lord, O Possessor of the lofty attributes,",
          }),
          new QasidaEntryModel({
            arabic: "قَائِمٌ بِالفِنَا أُرِيدُ عَطِيَّهْ",
            translit: "Qā’imun bilfinā urīdu ‛aṭiyyah.",
            translation: "I stand at Your threshold, desiring a gift.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "تَحْتَ بَابِ الرَّجَا وَقَفتُ بِذُلِّي",
            translit: "Taḥta bābirrajā waqaftu bidhullī,",
            translation:
              "Beneath the door of hope I have stood in my lowliness,",
          }),
          new QasidaEntryModel({
            arabic: "فَأَغِثْنِي بِالْقَصْدِ قَبْلَ الْمَنِيَّهْ",
            translit: "fa aghithnī bilqaṣdi qablal maniyyah.",
            translation: "so help me, with sincere intent, before death comes.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَالرَّسُولُ الْكَرِيمُ بَابُ رَجَائِي",
            translit: "Warrasūlul karīmu bābu raja’ī,",
            translation: "And the noble Messenger is the door of my hope,",
          }),
          new QasidaEntryModel({
            arabic: "فَهوَ غَوْثِي وَغَوْثُ كُلِّ الْبَرِيَّهْ",
            translit: "Fa huwa ghawthī wa ghawthu kullil bariyyah.",
            translation:
              "for he is my succour and the succour of all creation.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "فَأَغِثْنِي بِهِ وَبَلِّغ فُؤَادِي",
            translit: "Fa aghthanī bihī wa balligh fu’ādī,",
            translation: "So help me through him, and bring to my heart",
          }),
          new QasidaEntryModel({
            arabic: "كُلَّ مَا يَرْتَجِيهِ مِنْ أُمُنِيَّهْ",
            translit: "Kulla mā yartajīhi min umuniyyah.",
            translation: "everything it hopes for of aspirations.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَاجْمَعِ الشَّمْلَ فِي سُرُورٍ وَنُورٍ",
            translit: "Wajma‛ish shamla fī surūrin wa nūrin,",
            translation:
              "And bring together my scattered affairs in joy and light,",
          }),
          new QasidaEntryModel({
            arabic: "وَابْتِهَاجٍ بِالطَّلْعَةِ الْهَاشِمِيَّهْ",
            translit: "Wabtihājin biṭṭal‛atil hāshamiyyah",
            translation: "and delight in the Hashimite countenance,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "مَعَ صِدْقِ الْإِقْبَالِ فِي كُلِّ أَمْرٍ",
            translit: "Ma‛a ṣidqil’iqbāli fī kulli amrin,",
            translation: "with sincere devotion in every matter,",
          }),
          new QasidaEntryModel({
            arabic: "قَدْ قَصَدْنَا وَالصِّدْقِ فِي كُلِّ نِيَّهْ",
            translit: "Qad qaṣadnā waṣṣidqi fī kulli niyyah.",
            translation:
              "that we have intended, and sincerity in every intention.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "رَبِّ فَاسْلُكْ بِنَا سَبِيلَ رِجَالٍ",
            translit: "Rabbi fasluk binā sabīla rijālin,",
            translation: "My Lord, lead us along the path of men",
          }),
          new QasidaEntryModel({
            arabic: "سَلَكُوا فِي التُّقَى طَرِيقًا سَوِيَّهْ",
            translit: "Salakū fīttuqā ṭarīqan sawiyyah.",
            translation: "who walked a straight way in God-consciousness.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَاهْدِنَا رَبَّنَا لِمَا قَدْ هَدَيْتَ الــ",
            translit: "Wahdinā rabbanā limā qad hadaytas,",
            translation:
              "And guide us, our Lord, to that to which You guided the",
          }),
          new QasidaEntryModel({
            arabic: "ــسَّادَةَ الْعَارِفِينَ أَهْلَ الْمَزِيَّهْ",
            translit: "Sādatal ‛ārifīna ahlal maziyyah",
            translation: "masters, the knowers, the people of distinction.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَاجْعَلِ الْعِلمَ مُقتَدَانَا بِحُكْمِ الْذَّ",
            translit: "Waj‛alil ‛ilma muqtadānā biḥukmidh,",
            translation: "And make knowledge our guide, by the rule of",
          }),
          new QasidaEntryModel({
            arabic: "وْقِ فِي فَهْمِ سِرِّ مَعْنَى الْمَعِيَّهْ",
            translit: "Dhawqi fī fahmi sirri ma‛nal ma‛iyyah.",
            translation:
              "spiritual taste, in understanding the secret meaning of Your closeness.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَاحْفَظِ الْقَلْبَ أَنْ يُلِمَّ بِهِ الشَّيــ",
            translit: "Waḥfaẓil qalba an yulimma bihish,",
            translation: "Poem of Imam al-Haddad - Qad Kafani",
          }),
          new QasidaEntryModel({
            arabic: "ــطَانُ وَالنَّفْسُ وَالْهَوَى وَالدَّنِيَّهْ",
            translit: "Shayṭānu wal nafsu wal hawā waddaniyyah.",
            translation: "the devil, the self, desire and the base world.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "قَدْ كَفَانِي عِلْمُ رَبِّي",
            translit: "Qad kafānī ‛ilmu rabbī,",
            translation: "Enough for me is my Lord's knowledge",
          }),
          new QasidaEntryModel({
            arabic: "مِنْ سُؤَالِي وَاخْتِيَارِي",
            translit: "Min su’ālī wakhtiyārī.",
            translation: "to spare me my asking and my choosing.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "فَدُعَائِي وابْتِهَالِي",
            translit: "Fadu‛ā’ī wabtihālī,",
            translation: "So my supplication and my pleading",
          }),
          new QasidaEntryModel({
            arabic: "شَاهِدٌ لِي بِافْتِقَارِي",
            translit: "Shāhidun lī biftiqārī.",
            translation: "bear witness to my neediness.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "فَلِهَذَا السِّرِّ أَدْعُو",
            translit: "Falihādhas sirri ad‛ū,",
            translation: "For this secret I call upon You,",
          }),
          new QasidaEntryModel({
            arabic: "فِي يَسَارِي وَعَسَارِي",
            translit: "Fī yasārī wa ‛asārī.",
            translation: "in my ease and in my hardship.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "أَنَا عَبْدٌ صَارَ فَخْرِي",
            translit: "Ana ‛abdun ṣāra fakhrī,",
            translation: "I am a servant whose pride has become",
          }),
          new QasidaEntryModel({
            arabic: "ضِمْنَ فَقْرِي وَاضْطِرَارِي",
            translit: "Ḍimna faqrī waḍṭirārī.",
            translation: "my poverty and my dire need.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "قَدْ كَفَانِي عِلْمُ رَبِّي",
            translit: "Qad kafānī ‛ilmu rabbī,",
            translation: "=339",
          }),
          new QasidaEntryModel({
            arabic: "مِنْ سُؤَالِي وَاخْتِيَارِي",
            translit: "Min su’ālī wakhtiyārī.",
            translation: "=340",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا إِلَهِي وَمَلِيْكِي",
            translit: "Yā Ilāhī wa Malīkī,",
            translation: "O my God and my King,",
          }),
          new QasidaEntryModel({
            arabic: "أنْتَ تَعْلَم كَيْفَ حَالِي",
            translit: "Anta ta‛lam kayfa ḥālī.",
            translation: "You know how I am.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَبِمَا قَدْ حَلَّ قَلْبِي",
            translit: "Wa bimā qad ḥalla qalbī,",
            translation: "And of what has befallen my heart",
          }),
          new QasidaEntryModel({
            arabic: "مِنْ هُمُوْمٍ وَاشْتِغَالِ",
            translit: "Min humūmin washtighālin.",
            translation: "of worries and preoccupations,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "فَتَدَارَكْنِي بِلُطْفٍ",
            translit: "Fatadāraknī biluṭfin,",
            translation: "so rescue me with kindness",
          }),
          new QasidaEntryModel({
            arabic: "مِنْكَ يَا مَوْلَى الْمَوَالِي",
            translit: "Minka yā mawlal mawālī.",
            translation: "from You, O Master of masters.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا كَرِيْمَ الْوَجْهِ غِثْنِي",
            translit: "Yā karīmal wajhi ghithnī,",
            translation: "O Generous of Countenance, help me",
          }),
          new QasidaEntryModel({
            arabic: "قَبْلَ أنْ يَفْنَى اصْطِبَارِي",
            translit: "Qabla an yafnaṣṭibārī.",
            translation: "before my patience runs out.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "قَدْ كَفَانِي عِلْمُ رَبِّي",
            translit: "Qad kafānī ‛ilmu rabbī,",
            translation: "=339",
          }),
          new QasidaEntryModel({
            arabic: "مِنْ سُؤَالِي وَاخْتِيَارِي",
            translit: "Min su’ālī wakhtiyārī.",
            translation: "=340",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا سَرِيْعَ الْغَوْثِ غَوْثًا",
            translit: "Yā sarī‛al ghawthi ghawthan,",
            translation: "O Swift in aid, a help",
          }),
          new QasidaEntryModel({
            arabic: "مِنْكَ يُدْرِكْنِي سَرِيْعًا",
            translit: "Minka yudriknī sarī‛an.",
            translation: "from You that reaches me quickly,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَهْزِمُ الْعُسْرَ وَيَأْتِي",
            translit: "Yahzimul ‛usra wa ya’tī,",
            translation: "defeating hardship and bringing",
          }),
          new QasidaEntryModel({
            arabic: "بِالَّذِي أَرْجُو جَمِيْعًا",
            translit: "Billadhī arjū jamī‛an.",
            translation: "all that I hope for.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يا قَرِيْبًا يا مُجِيْبًا",
            translit: "Yā qarīban yā mujīban,",
            translation: "O Near One, O Responsive One,",
          }),
          new QasidaEntryModel({
            arabic: "يا عَلِيْمًا يا سَمِيْعًا",
            translit: "Yā ‛alīman yā samī‛an.",
            translation: "O All-Knowing, O All-Hearing,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "قَدْ تَحَقَّقْتُ بِعَجْزِي",
            translit: "Qad taḥaqqaqtu bi‛ajzī,",
            translation: "I have become certain of my helplessness,",
          }),
          new QasidaEntryModel({
            arabic: "وَخُضُوْعِي وانْكِسَارِي",
            translit: "Wa khuḍū‛ī wankisārī.",
            translation: "my humility and my brokenness.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "قَدْ كَفَانِي عِلْمُ رَبِّي",
            translit: "Qad kafānī ‛ilmu rabbī,",
            translation: "=339",
          }),
          new QasidaEntryModel({
            arabic: "مِنْ سُؤَالِي وَاخْتِيَارِي",
            translit: "Min su’ālī wakhtiyārī.",
            translation: "=340",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "لَمْ أَزَلْ بِالْبَابِ وَاقِفْ",
            translit: "Lam azal bilbābi wāqif,",
            translation: "I have not ceased standing at the door,",
          }),
          new QasidaEntryModel({
            arabic: "فَارْحَمَنْ رَبِّي وُقُوْفِي",
            translit: "Farḥaman rabbī wuqūfī.",
            translation: "so have mercy, my Lord, on my standing,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وبِوَادِي الْفَضْلِ عَاكِفْ",
            translit: "Wa biwādil faḍli ‛ākif,",
            translation: "and I remain devoted in the valley of bounty,",
          }),
          new QasidaEntryModel({
            arabic: "فَأَدِمْ ربِّي عُكُوْفِي",
            translit: "Fa’adim rabbī ‛ukūfī.",
            translation: "so keep my devotion constant, my Lord.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "ولِحُسْنِ الظَّن أُلَازِم",
            translit: "Wa liḥusniẓ ẓanni ulāzim,",
            translation: "And I hold fast to a good opinion of You,",
          }),
          new QasidaEntryModel({
            arabic: "فَهوَ خِلِّي وَحَلِيْفِي",
            translit: "Fahwa khillī wa ḥalīfī.",
            translation: "for it is my intimate and my ally,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَأَنِيْسِي وَجَلِيْسِي",
            translit: "Wa anīsī wa jalīsī,",
            translation: "and my companion and my confidant,",
          }),
          new QasidaEntryModel({
            arabic: "طُوْلَ لَيْلِي وَنَهَارِي",
            translit: "Ṭūla laylī wa nahārī.",
            translation: "all through my night and my day.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "قَدْ كَفَانِي عِلْمُ رَبِّي",
            translit: "Qad kafānī ‛ilmu rabbī,",
            translation: "=339",
          }),
          new QasidaEntryModel({
            arabic: "مِنْ سُؤَالِي وَاخْتِيَارِي",
            translit: "Min su’ālī wakhtiyārī.",
            translation: "=340",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "حَاجَةً فِي النَّفْسِ يَا رَبّ",
            translit: "Ḥājatan finnafsi yā rab,",
            translation: "A need in my soul, O Lord,",
          }),
          new QasidaEntryModel({
            arabic: "فَاقْضِهَا يَا خَيْرَ قَاضِي",
            translit: "faqḍihā yā khayra qāḍī.",
            translation: "so fulfil it, O best of those who fulfil,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَأَرِحْ سِرِّي وَقَلْبِي",
            translit: "Wa ariḥ sirrī wa qalbī,",
            translation: "and relieve my inner self and my heart",
          }),
          new QasidaEntryModel({
            arabic: "مِنْ لَظَاهَا وَالشُّوَاظِ",
            translit: "Min laẓāhā wash-shuwāḍi.",
            translation: "from its flames and its blazing fire,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "فِي سُرُورٍ وَحُبُورٍ",
            translit: "Fī surūrin wa ḥubūrin,",
            translation: "in joy and delight,",
          }),
          new QasidaEntryModel({
            arabic: "وَإِذَا مَا كُنْتَ رَاضِي",
            translit: "Wa idhā mā kunta rāḍī.",
            translation: "when You are pleased.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "فَالْهَنَا وَالْبَسْطُ حَالِي",
            translit: "Falhanā wal basṭu ḥālī,",
            translation: "Then happiness and expansion are my state,",
          }),
          new QasidaEntryModel({
            arabic: "وَشِعَارِي وَدِثَارِي",
            translit: "Wa shi‛ārī wa dithārī.",
            translation: "and my inner and outer garment.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "قَدْ كَفَانِي عِلْمُ رَبِّي",
            translit: "Qad kafānī ‛ilmu rabbī,",
            translation:
              "Supplications of al-Habib Muhammad bin Abdullah al-Haddar",
          }),
          new QasidaEntryModel({
            arabic: "مِنْ سُؤَالِي وَاخْتِيَارِي",
            translit: "Min su’ālī wakhtiyārī.",
            translation: "=340",
          }),
        ],
      }),
    ],
  }),
  new WirdModel({
    title: "",
    entries: [
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "فَقُل مَعِي نَسْتَغْفِرُ اللَّه مِنْ جَمِيعِ السَّيِّئَات",
            translit: "Faqul ma‛ī nastaghfirullāha min jamī‛is sayyi’āt",
            translation:
              "So say with me: we seek forgiveness of Allah for all evil deeds.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "تُبْنَا إِلَى اللّه مِنَ الذُّنُوبِ وَمِنَ الْعُيُوبِ وَالتَّبِعَات",
            translit:
              "Tubnā ilallāhi minadh-dhunūbi wa minal ‛uyūbi wattabi‛āt.",
            translation:
              "We have repented to Allah from sins, faults and their consequences.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "تُبنَا إِلَى اللَّهِ مِنَ الْكَلَام وَالْحَرَكَات وَالسَّكَنَات",
            translit: "Tubnā ilallāhi minal kalāmi wal ḥarakāti wassakanāt",
            translation:
              "We have repented to Allah from speech, movements and stillnesses.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "نَسْتَغْفِرُ اللَّهَ الْعَظِيمَ عَدَدَ جَمِيعِ الْخَطَرَات",
            translit: "Nastaghfirullāhal ‛aẓīma ‛adada jamī‛il khaṭarāt",
            translation:
              "We seek forgiveness of Allah, the Magnificent, to the number of all passing thoughts,",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "فِي كُلِّ خَطرَةٍ عَدَدَ الْأَشْيَا مَعَ الْمُضَاعَفَات",
            translit: "Fī kulli khaṭaratin ‛adadal ashyā ma‛al muḍā‛afāt",
            translation:
              "in every thought, to the number of all things, multiplied,",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "لَنَا وَلِلْأَحْبَابِ وَاهْلِ الدِّين مَاضِيهِمْ وَآت",
            translit: "Lanā wa lil’aḥbābi wa-’ahliddīni māḍīhum wa-‘āt",
            translation:
              "for ourselves, our loved ones and the people of the religion, past and to come,",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "لِمَا عَلِمنَا أَوْ جَهِلنَا وَلِجَمِيعِ الْغَفَلَات",
            translit: "Limā ‛alimnā aw jahilnā wa lijamī‛il ghafalāt",
            translation:
              "for what we knew and what we did not know, and for all heedlessness,",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "وَلِحَرَامٍ أَوْ نَدْبٍ أَوْ مُبَاحٍ وَمَكْرُوهٍ وَوَاجِبَات",
            translit:
              "Wa liḥarāmin aw nadbin aw mubāḥin wa makrūhin wa wājibāt",
            translation:
              "and for the forbidden, the recommended, the permissible, the disliked and the obligatory,",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "وَلِكُلِّ مَا يَعْلَمهُ اللَّهُ مَاضِيَات أَوْ مُقبِلَاتْ",
            translit: "Wa likulli mā ya‛lamuhullāhu māḍiyātin aw muqbilāt",
            translation: "and for all that Allah knows, past or coming.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "نَسْتَغْفِرُ اللَّهَ الْعَظِيمَ لِلْمُؤْمِنِينَ وَالْمُؤْمِنَات",
            translit: "Nastaghfirullāhal ‛aẓīma lil mu’minīna wal mu’mināt",
            translation:
              "We seek forgiveness of Allah, the Magnificent, for the believing men and believing women.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا اللَّهُ بِهَا يَا اللَّهُ بِهَا يَا اللَّهُ بِحُسْنِ الْخَاتِمَات",
            translit:
              "Yā Allāhu bihā yā Allāhu bihā yā Allāhu biḥusnil khātimāt",
            translation:
              "O Allah, by it, O Allah, by it, O Allah, with a good ending.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا حَافَظُ احْفَظْنَا وَثَبِّتنَا مَعَ أَهْلِ الثَّبَات",
            translit: "Yā ḥāfiẓu iḥfaẓnā wa thabbitnā ma‛a ahlil thabāt",
            translation:
              "O Preserver, preserve us and keep us firm with the people of steadfastness,",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "وَاغْفِرْ لَنَا مَا تَعلَمُهْ وَهَب لَنَا كُلَّ الْهِبَات",
            translit: "Waghfir lanā mā ta‛lamuh wa hab lanā kullal hibāt",
            translation: "forgive us what You know, and grant us all gifts.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا اللَّه بَدِّل ذُنُوبَنَا حَسَنَات حَتَى التَّابِعَات",
            translit: "Yā Allāhu baddil dhunūbanā ḥasanātin ḥattat tābi‛āt",
            translation:
              "O Allah, change our sins into good deeds, even those that follow,",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا اللَّه سَمِعْنَا وَأَطَعْنَا فَاهْدِنَا لِلصَّالِحَات",
            translit: "Yā Allāhu sami‛nā wa aṭa‛nā fahdinā liṣṣāliḥāt",
            translation:
              "O Allah, we have heard and obeyed, so guide us to righteous deeds,",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "وَآتِنَا يَا رَبَّنَا فِي ذِهْ وَالْأُخْرَى حَسَنَات",
            translit: "Wa ātinā yā Rabbanā fī dhih wal ukhrā ḥasanāt",
            translation:
              "and give us, our Lord, good things in this world and the next,",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "وَأعْطِنَا حُسْنَ الْيَقِينِ مَعَ كَمَالِ الْعَافِيَات",
            translit: "Wa a‛ṭinā ḥusnal yaqīni ma‛a kamālil ‛āfiyāt",
            translation: "and give us good certainty with perfect well-being",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "دَائِم وَأَصْلِح مَا فَسَد وَارْفَعْ لِكُلِّ الْمُؤْذِيَات",
            translit: "Dā’imun wa aṣliḥ mā fasad warfa‛ likullil mu’dhiyāt",
            translation:
              "that lasts, and mend what is corrupt, and remove all that harms,",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "مِنْكَ الْهِدَايَة وَالْعِنَايَة وَالنَّعَائِمْ سَابِغَات",
            translit: "Minkal hidāyah wal‛ināyah wanna‛ā’im sābighāt",
            translation:
              "from You is guidance and care and abundant blessings,",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "وَمَا تَشَاؤُه كَانَ فَانْظُرْ بِالْعُيُونِ الرَّاحِمَات",
            translit: "Wa mā tashā’uh kāna fanẓur bil ‛uyūnir rāḥimāt",
            translation:
              "and whatever You will comes to be, so look upon us with merciful eyes,",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "وَامْنُنْ إِلَهِي بِالْقَبُول لِأَعْمَالِنَا وَالدَّعَوَات",
            translit: "Wamnun ilāhī bilqabūli li a‛mālinā wadda‛awāt",
            translation:
              "and favour us, my God, with the acceptance of our deeds and supplications,",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "نَدْخُل مَعَ طَهَ وَآلِه فِي الصُّفُوفِ الْأَوَّلَات",
            translit: "Nadkhul ma‛a ṭāhā wa ālihī fiṣṣufūfil awwalāt",
            translation:
              "that we may enter with Ta Ha and his family in the first rows,",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "مَعهُمْ وَفِيهِمْ دَائِمًا فِي الدَّارِ ذِهْ وَالْآخِرَات",
            translit: "Ma‛ahum wa fīhim dā’iman fiddāri dhih wal’ākhirāt",
            translation:
              "with them and among them always, in this abode and the hereafters,",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "وَاغْفِرْ لِنَاظِمِهَا وَلِلقَارِيْن هُمْ وَالْقَارِيَاتْ",
            translit: "Waghfir lināẓimhā wa lilqārīna hum walqāriyāt",
            translation:
              "and forgive its composer and its readers, men and women,",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "وَمَنْ سَمِعهَا أَوْ نَشَرهَا وَكَاتِبِين وَكَاتِبَات",
            translit: "Wa man sami‛hā aw nasharhā wa kātibīna wa kātibāt",
            translation:
              "and whoever hears it or spreads it, and the writers, men and women,",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "وَارْحَمْ وَوَفِّق أُمَّةَ احْمَد وَاهْدِ وَاصْلِحْ لِلنِّيَّات",
            translit: "Warḥam wa waffiq ummataḥmad wahdi waṣliḥ lil niyāt",
            translation:
              "and have mercy on the community of Ahmad, grant them success, guide them and set right their intentions;",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "عَلَيْهِ صَلَّى اللَّهُ وَسَلَّم عَدَّ ذَرِّ الْكَائِنَات",
            translit: "‛Alayhi ṣallallāhu wa sallim ‛adda dharril kā’ināt",
            translation:
              "may Allah bless him and grant him peace, to the number of the atoms of creation,",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "وَآلِه وَكُلِّ الْأَنْبِيَا وَالصَّالِحِين وَالصَّالِحَات",
            translit: "Wa ālihī wa kullil ambiyā waṣṣāliḥīna waṣṣāliḥāt",
            translation:
              "and his family and all the prophets and the righteous, men and women,",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "فِي كُلِّ لَحْظَةٍ أَبَدًا عَلَى عِدَادِ اللَّحَظَات",
            translit: "Fī kulli laḥẓatin abadan ‛alā ‛idādal laḥaẓāt",
            translation: "at every moment, forever, to the number of moments,",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "وَالْحَمْدُ لِلَّه كَمَا يُحِبُّ عَدَّ النِّعَمَات",
            translit: "Walḥamdu lillāhi kamā yuḥibbu ‛addan ni‛amāt",
            translation:
              "and praise is for Allah as He loves, to the count of blessings,",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "عَدَدَ خَلقِهِ، وَرِضَى نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ",
            translit:
              "‛Adada khalqihī wa riḍā nafsihī wa zinata ‛arshihī wa midāda kalimātihī.",
            translation:
              "to the number of His creation, the pleasure of Himself, the weight of His Throne and the ink of His words.",
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
            arabic: "عَدَدَ خَلقِهِ، وَرِضَى نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ",
            translit:
              "‛Adada khalqihī wa riḍā nafsihī wa zinata ‛arshihī wa midāda kalimātihī.",
            translation: "Wird of Sayyidina al-Shaykh Abu Bakr bin Salim",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
            translit: "Bismillāhir raḥmānir raḥīm.",
            translation:
              "In the name of Allah, the Most Gracious, the Most Merciful.",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ يَا عَظِيمَ السُّلْطَانِ",
            translit: "Allāhumma yā ‛aẓīmas sulṭān,",
            translation: "O Allah, O Mighty in sovereignty,",
          }),
          new DhikrEntryModel({
            arabic: "يَا قَدِيمَ الْإِحْسَانِ",
            translit: "yā qadīmal iḥsān,",
            translation: "O Eternal in beneficence,",
          }),
          new DhikrEntryModel({
            arabic: "يَا دَائِمَ النِّعَمِ",
            translit: "yā dā’iman ni‛am,",
            translation: "O Constant in blessings,",
          }),
          new DhikrEntryModel({
            arabic: "يَا كَثِيرَ الْجُودِ",
            translit: "yā kathīral jūd,",
            translation: "O Abundant in generosity,",
          }),
          new DhikrEntryModel({
            arabic: "يَا وَاسِعَ الْعَطَاءِ",
            translit: "yā wāsi‛al ‛aṭā’,",
            translation: "O Vast in giving,",
          }),
          new DhikrEntryModel({
            arabic: "يَا خَفِيَّ اللُّطْفِ",
            translit: "yā khafiyyal luṭf,",
            translation: "O Hidden in kindness,",
          }),
          new DhikrEntryModel({
            arabic: "يَا جَمِيلَ الصُّنْعِ",
            translit: "yā jamīlaṣ ṣun‛i,",
            translation: "O Beautiful in handiwork,",
          }),
          new DhikrEntryModel({
            arabic: "يَا حَلِيمًا لَا يَعْجَل",
            translit: "yā ḥalīman lā ya‛jal,",
            translation: "O Forbearing One who does not hasten,",
          }),
          new DhikrEntryModel({
            arabic: "صَلِّ يَا رَبِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَآلِهِ وَسَلِّمْ وَارْضَ عَنِ الصَّحَابَةِ أَجْمَعِينَ",
            translit:
              "ṣalli yā rabbi ‛alā sayyidinā Muḥammadin wa ālihī wa sallim warḍa ‛aniṣṣaḥābati ajma‛īn",
            translation:
              "bestow blessings, O Lord, upon our master Muhammad and his family and grant them peace, and be pleased with all the companions.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ لَكَ الْحَمْدُ شُكْرًا",
            translit: "Allāhumma lakal ḥamdu shukrā",
            translation: "O Allah, to You is praise in gratitude,",
          }),
          new DhikrEntryModel({
            arabic: "وَلَكَ الْمَنُّ فَضْلًا",
            translit: "wa lakal mannu faḍlā",
            translation: "and Yours is the favour, by grace,",
          }),
          new DhikrEntryModel({
            arabic: "وَأَنْتَ رَبُّنَا حَقًّا",
            translit: "wa anta rabbunā ḥaqqā",
            translation: "and You are truly our Lord,",
          }),
          new DhikrEntryModel({
            arabic: "وَنَحْنُ عَبِيدُكَ رِقًّا",
            translit: "wa naḥnu ‛ibāduka riqqā",
            translation: "and we are Your servants in true bondage,",
          }),
          new DhikrEntryModel({
            arabic: "وَأَنْتَ لَمْ تَزَلْ لِذَلِكَ أَهْلًا ؛ يَا مُيَسِّرَ كُلِّ عَسِيرٍ",
            translit: "wa anta lam tazal lidhālika ahlā",
            translation:
              "and You have always been worthy of that; O Facilitator of every difficulty,",
          }),
          new DhikrEntryModel({
            arabic: "وَيَا جَابِرَ كُلِّ كَسِيرٍ",
            translit: "yā muyassira kulli ‛asīr",
            translation: "and O Mender of every broken one,",
          }),
          new DhikrEntryModel({
            arabic: "وَيَا صَاحِبَ كُلِّ فَرِيدٍ",
            translit: "wa yā jābira kulli kasīr",
            translation: "and O Companion of every solitary one,",
          }),
          new DhikrEntryModel({
            arabic: "وَيَا مُغْنِيَ كُلِّ فَقِيرٍ",
            translit: "wa yā ṣāḥiba kulli farīd",
            translation: "and O Enricher of every poor one,",
          }),
          new DhikrEntryModel({
            arabic: "وَيَا مُقَوِّيَ كُلِّ ضَعِيفٍ",
            translit: "wa yā mughniya kulli faqīr",
            translation: "and O Strengthener of every weak one,",
          }),
          new DhikrEntryModel({
            arabic: "وَيَا مَأْمَنَ كُلِّ مَخِيفٍ",
            translit: "wa yā muqawwiya kulli ḍa‛īf",
            translation: "and O Refuge of every fearful one,",
          }),
          new DhikrEntryModel({
            arabic: "يَسِّر عَلَيْنَا كُلَّ عَسِيرٍ",
            translit: "wa yā ma’mana kulli makhīf",
            translation: "make easy for us every difficulty,",
          }),
          new DhikrEntryModel({
            arabic: "فَتَيْسِيرُ الْعَسِيرِ عَلَيْكَ يَسِيرٌ",
            translit:
              "yassir ‛alaynā kulla ‛asīr, fataysīrul ‛asīri ‛alayka yasīr.",
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
              "O Allah, You who need no explanation or interpretation, our needs are many, and You know them and are aware of them.",
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
              "and shelter us with Your shelter that cannot be assailed,",
          }),
          new DhikrEntryModel({
            arabic: "وَارْحَمْنَا بِقُدْرَتِكَ عَلَيْنَا فَلَا نَهْلِكُ وَأَنْتَ ثِقَتُنَا وَرَجَاؤُنَا",
            translit:
              "warḥamnā biqudratika ‛alaynā falā nahliku wa anta thiqatunā wa raja’unā",
            translation:
              "and have mercy on us by Your power over us so that we do not perish, for You are our trust and our hope.",
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
              "And may Allah bless our master Muhammad and his family and companions and grant them peace,",
          }),
          new DhikrEntryModel({
            arabic: "والْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
            translit: "Walḥamdu lillāhi rabbil ‛ālamīn",
            translation: "and all praise is due to Allah, Lord of the worlds,",
          }),
          new DhikrEntryModel({
            arabic: "عَدَدَ خَلْقِهِ",
            translit: "‛adada khalqih",
            translation: "to the number of His creation,",
          }),
          new DhikrEntryModel({
            arabic: "وَرِضَى نَفْسِهِ",
            translit: "wa riḍā nafsih",
            translation: "and the pleasure of Himself,",
          }),
          new DhikrEntryModel({
            arabic: "وَزِنَةَ عَرْشِهِ",
            translit: "wa zinata ‛arshih",
            translation: "and the weight of His Throne,",
          }),
          new DhikrEntryModel({
            arabic: "وَمِدَادَ كَلِمَاتِهِ",
            translit: "wa midāda kalimātih",
            translation: "and the ink of His words.",
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
            translation: "breadth in provision,",
          }),
          new DhikrEntryModel({
            arabic: "وَتَوْبَةً قَبْلَ الْمَوْتِ",
            translit: "wa tawbatan qablal mawt",
            translation: "repentance before death,",
          }),
          new DhikrEntryModel({
            arabic: "وَشَهَادَةً عِنْدَ الْمَوْتِ",
            translit: "wa shahādatan ‛indal mawt",
            translation: "bearing witness at death,",
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
            translation: "a share of Paradise,",
          }),
          new DhikrEntryModel({
            arabic: "وَارْزُقْنَا النَّظَرَ إِلَى وَجْهِكَ الْكَرِيمِ",
            translit: "warzuqnan naẓra ilā wajhikal karīm",
            translation: "and grant us the sight of Your noble Face.",
          }),
          new DhikrEntryModel({
            arabic: "وَصَلَّى ٱللَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَآلِهِ وَصَحْبِهِ وَسَلَّمَ",
            translit:
              "wa ṣallallāhu ‛alā sayyidinā Muḥammadin wa ālihī wa ṣaḥbihī wa sallam.",
            translation:
              "And may Allah bless our master Muhammad and his family and companions and grant them peace.",
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
            translation: "Verses of poetry by al-Habib Umar bin Hafiz",
          }),
        ],
      }),
    ],
  }),
  new QasidaModel({
    title: "",
    entries: [
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا عُمْدَتِي يَا عُدَّتِي",
            translit: "Yā 'Umdati yā 'Uddati yā Munqidhi min shiddati⁣",
            translation: "O my support, O my provision,",
          }),
          new QasidaEntryModel({
            arabic: "يَا مُنْقِذِي مِنْ شِدَّتِي",
            translit: "Yā munqidhī min shiddatī",
            translation: "O Rescuer from my distress,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَجَّهْتُ لَكَ وِجْهَتِي",
            translit: "Wajjahtu laka wijhati 'ajjil bighauthi yā 'aẓīm⁣",
            translation: "I have turned my face toward You,",
          }),
          new QasidaEntryModel({
            arabic: "عَجِّلْ بِغَوْثِي يَا عَظِيم",
            translit: "‛Ajjil bighawthī yā ‛aẓīm",
            translation: "hasten my relief, O Magnificent One.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَسَخِّرِ الْأَسبَابَا",
            translit: "Wa sakh-khiril asbābā wa dhalliliṣ ṣi'ābā⁣",
            translation: "And subjugate the means,",
          }),
          new QasidaEntryModel({
            arabic: "وَذَلِّلِ الصِّعَابَا",
            translit: "wa dhalliliṣ ṣi‛ābā",
            translation: "and make the difficulties easy.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَافْتَحْ لَنَا الْأَبْوَابَا",
            translit: "Waftaḥ lanal abwābā bin naṣri minka yā Karīm⁣",
            translation: "And open for us the doors",
          }),
          new QasidaEntryModel({
            arabic: "بِالنَّصْرِ مِنْكَ يَا كَرِيم",
            translit: "bin naṣri minka yā karīm",
            translation: "with victory from You, O Generous One.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَرُدَّ كَيْدَ الْكَائِدِ",
            translit: "Wa rudda kaidal kā-idi wa kulla ṭāghin māridi⁣",
            translation: "And repel the scheme of the schemer",
          }),
          new QasidaEntryModel({
            arabic: "وَكُلَّ طَاغٍ مَارِدِ",
            translit: "wa kulla ṭāghin mārid",
            translation: "and of every rebellious tyrant,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَحَاسِدٍ مُعَانِدِ",
            translit: "wa ḥāsidin mu'ānidi bi ḥaqqi sirri (Ṭā sīn mīm)⁣",
            translation: "Istighfar",
          }),
          new QasidaEntryModel({
            arabic: "بِحَقِّ سِرِّ (طسٓمٓ)",
            translit: "Biḥaqqi sirri Ṭā Sīn Mīm",
            translation: "by the right of the secret of Ta Sin Mim.",
          }),
        ],
      }),
    ],
  }),
  new WirdModel({
    title: "",
    entries: [
      new DhikrModel({
        repeat: 27,
        entries: [
          new DhikrEntryModel({
            arabic:
              "أَسْتَغْفِرُ اللَّهَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الرَّحْمَنَ الرَّحِيمَ الْحَيَّ الْقَيُّومَ الَّذِي لَا يَمُوتُ",
            translit:
              "Astaghfirullāhal ladhī lā ilāha illā huwar raḥmānar raḥīmal ḥayyal qayyūmal ladhī lā yamūt",
            translation:
              "I seek forgiveness of Allah, besides whom there is no god, the Most Gracious, the Most Merciful, the Ever-Living, the Self-Sustaining, who does not die,",
          }),
          new DhikrEntryModel({
            arabic: "وَأَتُوبُ إِلَيْهِ",
            translit: "wa atūbu ilayh",
            translation: "and I repent to Him.",
          }),
          new DhikrEntryModel({
            arabic: "رَبِّ اغْفِرْ لِي",
            translit: "Rabbighfir lī",
            translation: "My Lord, forgive me",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "أَسْتَغْفِرُ اللَّهَ لِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ",
            translit: "Astaghfirullāha lil mu’minīna wal mu’mināt",
            translation:
              "I seek forgiveness of Allah for the believing men and believing women.",
            repeat: 27,
          }),
        ],
      }),
    ],
  }),
];
