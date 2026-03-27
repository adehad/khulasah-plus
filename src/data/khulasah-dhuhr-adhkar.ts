import {
  DhikrEntryModel,
  DhikrModel,
  QuranDhikrEntryModel,
  WirdModel,
} from "@/models/recitation";

export default [
  new WirdModel({
    title: "Dhuhr Adhkar",
    entries: [
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "لَا إِلَهَ إِلَّا اللَّهُ الْمَلِكُ الْحَقُّ الْمُبِينُ (100)",
            translit: "Lā ilāha illallāhul malikul ḥaqqul mubīn. (100 times)",
            translation: "Audio",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
            translit: "Bismillāhir raḥmānir raḥīm.",
            translation:
              "In the Name of Allāh, the Most Compassionate, the Most Merciful.",
          }),
          new QuranDhikrEntryModel({
            arabic:
              "إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا ۝ لِّيَغْفِرَ لَكَ ٱللَّهُ مَا تَقَدَّمَ مِن ذَنۢبِكَ وَمَا تَأَخَّرَ وَيُتِمَّ نِعْمَتَهُۥ عَلَيْكَ وَيَهْدِيَكَ صِرَٰطًا مُّسْتَقِيمًا ۝ وَيَنصُرَكَ ٱللَّهُ نَصْرًا عَزِيزًا",
            translit:
              "Innā fataḥnā laka fatḥam mubīnā. Liyaghfira lakallāhu mā taqaddama min dhambika wa mā ta'akh-khara wa yutimmu ni‛matahū ‛alayka wa yahdiyaka ṣirāṭam mustaqīmā. Wa yanṣurakallāhu naṣran ‛azīzā.",
            translation:
              "Verily, We have given you a clear (manifest) victory. That Allāh may forgive you your sins of the past and the future and complete His Favour on you and guide you on the Straight Path. So that Allāh might bestow on you His Mighty Help.",
            surah: 48,
            verse: 1,
          }),
          new QuranDhikrEntryModel({
            arabic: "وَكَانَ عِندَ ٱللَّهِ وَجِيهًا",
            translit: "Wa kāna ‛indallāhi wajīhā.",
            translation: "And he was honourable in the sight of Allāh.",
            surah: 33,
            verse: 69,
          }),
          new QuranDhikrEntryModel({
            arabic: "وَجِيهًا فِى ٱلدُّنْيَا وَالآخِرَةِ وَمِنَ ٱلْمُقَرَّبِينَ",
            translit: "Wajīhan fiddunyā wal ākhirati  wa minal muqarrabīn.",
            translation:
              "Held in honour in this world and in the Hereafter, and he will be one of those who are granted nearness to Allāh.",
            surah: 3,
            verse: 45,
          }),
          new QuranDhikrEntryModel({
            arabic: "وَجَّهْتُ وَجْهِىَ لِلَّذِى فَطَرَ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ",
            translit: "Wajjahtu wajhiya lilladhī faṭaras samāwāti wal'arḍ.",
            translation:
              '"I have turned my face with single-minded devotion, towards Him Who has created the Heavens and the earth."',
            surah: 6,
            verse: 79,
          }),
          new DhikrEntryModel({
            arabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
            translit: "Bismillāhir raḥmānir raḥīm.",
            translation:
              "In the Name of Allāh, the Most Compassionate, the Most Merciful…",
          }),
          new QuranDhikrEntryModel({
            arabic:
              "نَصْرٌ مِّنَ ٱللَّهِ وَفَتْحٌ قَرِيبٌ ۗ وَبَشِّرِ ٱلْمُؤْمِنِينَ ۝ يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ كُونُوٓا۟ أَنصَارَ ٱللَّهِ كَمَا قَالَ عِيسَى ٱبْنُ مَرْيَمَ لِلْحَوَارِيِّـۧنَ مَنْ أَنصَارِىٓ إِلَى ٱللَّهِ ۖ قَالَ ٱلْحَوَارِيُّونَ نَحْنُ أَنصَارُ ٱللَّهِ",
            translit:
              "…naṣrum minallāhi wa fatḥun qarīb, wa bash-shiril mu'minīn. Yā ayyuhalladhīna āmanū kūnū anṣārallāhi kamā qāla ‛īsabnu maryama lil ḥawāriyyīna man anṣārī ilallāh, qālal ḥawāriyyūna naḥnu anṣārullāh…",
            translation:
              'help from Allāh (against your enemies) and an imminent victory; and give glad tidings (O Prophet) to the believers. O you who believe, be Allāh\'s Helpers as Jesus, son of Mary, said to the desciples: "Who will be my helpers in the cause of Allah? They said: "We are Allāh\'s helpers..."',
            surah: 61,
            verse: 13,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new QuranDhikrEntryModel({
            arabic:
              "ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ۚ لَا تَأْخُذُهُۥ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُۥ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ مَن ذَا ٱلَّذِى يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَىْءٍ مِّنْ عِلْمِهِۦٓ إِلَّا بِمَا شَآءَ ۚ وَسِعَ كُرْسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ ۖ وَلَا يَـُٔودُهُۥ حِفْظُهُمَا ۚ وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ",
            translit:
              "Allāhu lā ilāha illā huwal ḥayyul qayyūm; lā ta’khudhuhū sinatuw wa lā nawm; lahū mā fissamāwāti wa mā fil arḍ, man dhalladhī yashfa‛u ‛indahū illā bi’idhnihī, ya‛lamu mā bayna aydīhim wa mā khalfahum, wa lā yuḥīṭūna bishay’im min ‛ilmihī illā bimā shā’, wasi‛a kursiy yuhus samāwāti wal arḍ, wa lā ya’ūduhū ḥifẓuhumā, wa huwal ‛aliyyul ‛aẓīm.",
            translation:
              "{Allāh! There is no deity but Him; the Ever-Living, the Self Subsisting, the Eternal One. Neither slumber nor sleep can overtake Him. To Him belongs whatsoever is in the Heavens and whatsoever is on the earth. Who is there that can intercede in His Presence, except by His permission? He knows what will happen to them (His creatures) in this world, and what will happen to them in the Hereafter; nor shall they comprehend anything at all of His Knowledge except as He Wills. His Throne extends over the Heavens and the earth, and guarding and preserving it, does not exhaust Him, for He is the Exalted, the All-Mighty.} [Sūrah Al-Baqarah (2), Verse 255]",
            surah: 2,
            verse: 255,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
            translit: "Bismillāhir raḥmānir raḥīm.",
            translation: "",
          }),
          new QuranDhikrEntryModel({
            arabic:
              "لَوْ أَنزَلْنَا هَٰذَا ٱلْقُرْءَانَ عَلَىٰ جَبَلٍ لَّرَأَيْتَهُۥ خَٰشِعًا مُّتَصَدِّعًا مِّنْ خَشْيَةِ ٱللَّهِ ۚ وَتِلْكَ ٱلْأَمْثَٰلُ نَضْرِبُهَا لِلنَّاسِ لَعَلَّهُمْ يَتَفَكَّرُونَ ۝ هُوَ ٱللَّهُ ٱلَّذِى لَآ إِلَٰهَ إِلَّا هُوَ ۖ عَٰلِمُ ٱلْغَيْبِ وَٱلشَّهَٰدَةِ ۖ هُوَ ٱلرَّحْمَٰنُ ٱلرَّحِيمُ ۝ هُوَ ٱللَّهُ ٱلَّذِى لَآ إِلَٰهَ إِلَّا هُوَ ٱلْمَلِكُ ٱلْقُدُّوسُ ٱلسَّلَٰمُ ٱلْمُؤْمِنُ ٱلْمُهَيْمِنُ ٱلْعَزِيزُ ٱلْجَبَّارُ ٱلْمُتَكَبِّرُ ۚ سُبْحَٰنَ ٱللَّهِ عَمَّا يُشْرِكُونَ ۝ هُوَ ٱللَّهُ ٱلْخَٰلِقُ ٱلْبَارِئُ ٱلْمُصَوِّرُ ۖ لَهُ ٱلْأَسْمَآءُ ٱلْحُسْنَىٰ ۚ يُسَبِّحُ لَهُۥ مَا فِى ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ ۖ وَهُوَ ٱلْعَزِيزُ ٱلْحَكِيمُ",
            translit:
              "Law anzalnā hādhal qur’āna ‛alā jabalil lara’aytahū khāshi‛am mutaṣaddi‛am min khashyatillāh, wa tilkal amthālu naḍribuhā linnāsi la‛Allāhum yatafakkarūn, Huwallāhulladhī lā ilāha illā huwa ‛ālimul ghaybi wash shahādati huwar raḥmānur raḥīm. Huwallāhulladhī lā ilāha illā huwal malikul quddūsus salāmul muʾminul muhayminul ‛azīzul jabbārul mutakabbir, subhānallāhi ‛ammā yushrikūn. Huwallāhul khāliqul bāri’ul musawwiru lahul asmā’ul ḥusnā, yusabbiḥu lahū mā fissamāwāti wal arḍi wa huwal ‛azīzul ḥakīm.",
            translation: "",
            surah: 59,
            verse: 21,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "أُعِيذُ نَفْسِي بِٱللَّهِ تَعَالَى مِنْ كُلِّ مَا يَسْمَعُ بِأُذُنَيْنِ",
            translit: "",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَيُبْصِرُ بِعَيْنَيْنِ",
            translit: "",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَيَمْشِي بِرِجْلَيْنِ",
            translit: "",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَيَبْطِشُ بِيَدَيْنِ",
            translit: "",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَيَتَكَلَّمُ بِشَفَتَيْنِ",
            translit: "",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "حَصَّنْتُ نَفْسِي بِٱللَّهِ الْخَالِقِ الْأَكْبَر",
            translit: "",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "مِنْ شَرِّ مَا أَخَافُ وَأَحْذَر",
            translit: "",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "مِنَ الْجِنِّ وَالْإِنْسِ وَأَنْ يَحْضُرُون",
            translit: "",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "عَزَّ جَارُهُ وَجَلَّ ثَنَاؤُهُ وَتَقَدَّسَتْ أَسْمَاؤُهُ وَلَا إِلَٰهَ غَيْرُهُ",
            translit: "",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ إِنِّي أَجْعَلُكَ فِي نُحُورِ أَعْدَائِي",
            translit: "",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَأَعُوذُ بِكَ مِنْ شُرُورِهِم وَتَحَيُّلِهِم وَمَكْرِهِم وَمَكَائِدِهِم",
            translit: "",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "أَطْفِئ نَارَ مَنْ أَرَادَ بِي عَدَاوَةً مِنَ الْجِنِّ وَالْإِنْسِ",
            translit: "",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "يَا حَافِظُ يَا حَفِيظُ، يَا كَافِي يَا مُحِيطُ، سُبْحَانَكَ يَا رَبِّ مَا أَعْظَمَ شَأنَكَ وَأَعَزَّ سُلْطَانَكَ",
            translit:
              "Yā ḥāfiẓu yā ḥafīẓ, yā kāfī yā muḥīṭ; subḥānaka yā rabbi; mā a‛ẓama sha’nuka wa a‛azza sulṭānuka.",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "تَحَصَّنْتُ بِٱللَّهِ وَبِأَسْمَاءِ ٱللَّهِ وَبِآيَاتِ ٱللَّهِ وَمَلَائِكَةِ ٱللَّهِ وَأَنْبِيَاءِ ٱللَّهِ وَرُسُلِ ٱللَّهِ وَالصَّالِحِينَ مِن عِبَادِ ٱللَّهِ",
            translit: "Taḥaṣṣantu billāh, wa bi’asmā’illāh",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic:
              "حَصَّنْتُ نَفْسِي بِـ( لَا إِلَهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ ٱللَّهِ صَلَّى اللَّهُ عَلَيهِ وَآلِهِ وَسَلَّم )",
            translit:
              "wa bi’āyātillāh, wa malā’ikatillāh, wa ambiyā’illāh, wa rusulillāh, waṣṣāliḥīna min ‛ibādillāh; Ḥaṣṣantu nafsī bi (lā ilāha illallāh, Muḥammadur rasūlullāhi ṣallallāhu ‛alayhi wa ālihī wa sallam).",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ احْرُسْنِي بِعَيْنِكَ الَّتِي لَا تَنَامُ",
            translit: "Allāhummaḥrisnī bi‛aynikallatī lā tanām",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَاكْنُفْنِي بِكَنَفِكَ الَّذِي لَا يُرَامُ",
            translit: "waknufnī bikanafikalladhī lā yurām",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَارْحَمْنِي بِقُدْرَتِكَ عَلَيَّ فَلَا أَهْلِكُ وَأَنْتَ ثِقَتِي وَرَجَائِي",
            translit:
              "warḥamnī biqudratika ‛alayya falā ahlika wa anta thiqatī wa rajā’ī.",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا غِيَاثَ الْمُسْتَغِيثِينَ (3)",
            translit: "Yā ghiyāthal mustaghīthīna. (3 times)",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا دَرَكَ الْهَالِكِينَ (3)",
            translit: "Yā darkal hālikīna. (3 times)",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اِكْفِنِي شَرَّ كُلِّ طَارِقٍ يَطْرُقُ بِلَيْلٍ أَوْ نَهَارٍ إِلَّا طَارِقًا يَطْرُقُ بِخَيْرٍ إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
            translit:
              "Ikfinī sharra kulli ṭāriqin yaṭruqu bilaylin aw nahārin, illā ṭāriqan yaṭruqu bikhayrin innaka ‛alā kulli shay’in qadīr.",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "بِسْمِ ٱللَّهِ أَرْقِي نَفْسِي مِنْ كُلِّ مَا يُؤْذِي وَمِنْ كُلِّ حَاسِدٍ",
            translit: "",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُ شِفَائِي",
            translit: "",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "بِسْمِ ٱللَّهِ رُقِيتُ",
            translit: "",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَأْسَ",
            translit: "",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "اِشْفِ أَنْتَ الشَّافِي",
            translit: "",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَعَافِ أَنْتَ الْمُعَافِي",
            translit: "",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "لَا شِفَاءَ إِلَّا شِفَاؤُكَ",
            translit: "",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "شِفَاءً لَا يُغَادِرُ سَقَمًا وَلَا أَلَمًا",
            translit: "",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا كَافِي يَا وَافِي يَا حَمِيدُ يَا مَجِيدُ",
            translit: "Yā kāfī yā wāfī yā ḥamīdu yā majīd",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "اِرْفَعْ عَنِّي كُلَّ تَعَبٍ شَدِيدٍ",
            translit: "irfa‛ ‛annī kulla ta‛abin shadīd",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَاكْفِنِي مِنَ الْحَدِّ وَالْحَدِيدِ",
            translit: "wakfinī minal ḥaddi wal ḥadīd",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَالْمَرَضِ الشَّدِيدِ",
            translit: "wal maraḍish shadīd",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَالْجَيْشِ الْعَدِيدِ",
            translit: "wal jayshil ‛adīd",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَاجْعَلْ لِي نُورًا مِنْ نُورِكَ",
            translit: "Waj‛al lī nūram min nūrika",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَعِزًّا مِنْ عِزِّكَ",
            translit: "wa ‛izzam min ‛izzika",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَنَصْرًا مِنْ نَصْرِكَ",
            translit: "wa naṣram min naṣrika",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَبَهَاءً مِنْ بَهَائِكَ",
            translit: "wa bahā’am min bahā’ika",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَعَطَاءً مِنْ عَطَاءِكَ",
            translit: "wa ‛aṭā’am min ‛aṭā’ika",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَحِرَاسَةً مِنْ حِرَاسَتِكَ",
            translit: "wa ḥirāsatam min ḥirāsatika",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَتَأْيِيدًا مِنْ تَأْيِيدِكَ",
            translit: "wa ta’yīdam min ta’yīdika.",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
            translit: "Yā dhal jalāli wal ikrām",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَالْمَوَاهِبِ الْعِظَامِ",
            translit: "wal mawāhibil ‛iẓām",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "أَسْأَلُكَ أَنْ تَكْفِيَنِي مِنْ شَرِّ كُلِّ ذِي شَرٍّ",
            translit: "as’aluka an takfiyanī min sharri kulli dhī sharrin",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "إِنَّكَ أَنْتَ اللَّهُ الْخَالِقُ الْأَكْبَرُ",
            translit: "innaka antallāhul khāliqul akbar.",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "وَصَلَّى اللَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَآلِهِ وَصَحْبِهِ وَسَلَّمَ تَسْلِيمًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ",
            translit:
              "Wa ṣallallāhu ‛alā sayyidinā Muḥammadin wa ālihī wa ṣaḥbihī wa sallama taslīman kathīran ṭayyiban mubārakan fīhi.",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "والْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ظَاهِرًا وَبَاطِنًا وَعَلَى كُلِّ حَالٍ، يَا أَرحَمَ الرَّاحِمِينَ",
            translit:
              "Wal ḥamdu lillāhi rabbil ‛ālamīna ẓāhiraw wa bāṭinaw wa ‛alā kulli ḥālin yā arḥamar rāḥimīn.",
            translation: "",
          }),
        ],
      }),
    ],
  }),
];
