import {
  DhikrEntryModel,
  DhikrModel,
  QuranDhikrEntryModel,
  WirdModel,
} from "@/models/recitation";

export default [
  new WirdModel({
    title: "Supplication when awakening from sleep",
    entries: [
      new DhikrModel({
        instruction:
          "Remember my brother/sister, the etiquette and supplications for awakening from sleep, ablution and prayer.",
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
            translit: "",
            translation:
              "Praise be to Allāh, Who has given us life after causing us to die",
          }),
          new DhikrEntryModel({
            arabic: "الْحَمْدُ لِلَّهِ الَّذِي رَدَّ عَلَيَّ رُوحِي",
            translit: "",
            translation:
              "and unto Him is the resurrection. Praise be to Allāh Who has returned my soul",
          }),
          new DhikrEntryModel({
            arabic: "وَعَافَانِي فِي جَسَدِي",
            translit: "",
            translation: "given strength to my body",
          }),
          new DhikrEntryModel({
            arabic: "وَأَذِنَ لِي بِذِكْرِهِ",
            translit: "",
            translation: "and allowed me to remember Him.",
          }),
        ],
        title: "Supplication when awakening from sleep",
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
            translit: "",
            translation: "There is no god but Allāh alone, He has no partner;",
          }),
          new DhikrEntryModel({
            arabic: "لَهُ الْمُلكُ وَلَهُ الْحَمْدُ",
            translit: "",
            translation:
              "to Him belongs all authority and to Him belongs all praise;",
          }),
          new DhikrEntryModel({
            arabic: "وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
            translit: "",
            translation: "and He is capable of all things.",
          }),
          new DhikrEntryModel({
            arabic: "الْحَمْدُ لِلَّهِ الَّذِي خَلَقَ النَّوْمَ وَالْيَقَظَةَ",
            translit: "",
            translation:
              "Praise be to Allāh Who has created sleep and wakefulness.",
          }),
          new DhikrEntryModel({
            arabic: "الْحَمْدُ لِلَّهِ الَّذِي بَعَثَنِي سَالِمًا سَوِيًّا",
            translit: "",
            translation:
              "Praise be to Allāh Who has revived me with a sound and healthy body.",
          }),
          new DhikrEntryModel({
            arabic: "أَشْهَدُ أَنَّ اللَّهَ يُحْيِي الْمَوْتَى",
            translit: "",
            translation:
              "I bear witness that only Allāh can bring the dead to life;",
          }),
          new DhikrEntryModel({
            arabic: "وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
            translit: "",
            translation: "and He is capable of all things.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ",
            translit: "Aṣbaḥnā wa aṣbaḥal mulku lillāh",
            translation:
              "We have entered a new day, and the kingdom belongs to Allāh,",
          }),
          new DhikrEntryModel({
            arabic: "وَالْعَظَمَةُ وَالسُّلطَانُ لِلَّهِ",
            translit: "wal ‛aẓamatu wassulṭānu lillāh",
            translation: "and the majesty and the power belong to Allāh,",
          }),
          new DhikrEntryModel({
            arabic: "وَالْعِزَّةُ وَالْقُدْرَةُ لِلَّهِ. أَصْبَحْنَا عَلَى فِطْرَةِ الْإِسْلَامِ",
            translit:
              "wal ‛izzatu wal qudratu lillāh. Aṣbaḥnā ‛alā fiṭratil islām",
            translation:
              "and the honour and the might belong to Allāh. We have entered a new day upon the natural disposition of Islam,",
          }),
          new DhikrEntryModel({
            arabic:
              "وَعَلَى كَلِمَةِ الْإِخْلَاصِ وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَآلِهِ وَسَلَّمَ وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا",
            translit:
              "wa ‛alā kalimatil ikhlāṣ wa ‛alā dīni nabiyyinā Muḥammadin ṣallallāhu ‛alayhi wa sallam, wa ‛alā millati abīnā Ibrāhīm, ḥanīfan musliman",
            translation:
              "and the absolute word of faith, and the religion of our Prophet Muḥammad, may the blessings and peace of Allāh be upon him, and the religion of our father Ibrāhīm, who is pure in faith and submission,",
          }),
          new DhikrEntryModel({
            arabic: "وَمَا كَانَ مِنَ الْمُشْرِكِين",
            translit: "wa mā kāna minal mushrikīn.",
            translation: "and who never associated partners with Allāh.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ",
            translit:
              "Allāhumma bika aṣbaḥnā wa bika amsaynā, wa bika naḥyā wa bika namūt, wa ilaykan nushūr.",
            translation:
              "O Allāh! By You do we enter the morning, and by You do we enter the evening; and by You do we live, and by You do we die; and by You is the resurrection.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ إِنَّا نَسْأَلُكَ أَنْ تَبْعَثَنَا فِي هَذَا الْيَوْمِ إِلَى كُلِّ خَيْر",
            translit:
              "Allāhumma innā nas'aluka an tab‛athanā fī hādhal yawmi ilā kulli khayr",
            translation:
              "O Allāh! We beseech You today to imbue us with whatever is good;",
          }),
          new DhikrEntryModel({
            arabic: "وَنَعُوذُ بِكَ أَنْ نَجْتَرِحَ فِيهِ سُوءًا",
            translit: "wa na‛ūdhu bika an najtariḥa fīhi sū'an",
            translation:
              "and we seek refuge with You from doing any evil deeds during it;",
          }),
          new DhikrEntryModel({
            arabic: "أَوْ نَجُرَّهُ إِلَى مُسْلِم",
            translit: "aw najurrahū ilā muslimin",
            translation: "or causing others harm;",
          }),
          new DhikrEntryModel({
            arabic: "أَوْ يَجُرَّهُ أَحَدٌ إِلَيْنَا",
            translit: "aw yajurrahū aḥadun ilaynā.",
            translation: "or from anyone causing us harm.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "نَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ وَخَيْرَ مَا فِيهِ، وَنَعُوذُ بِكَ مِنْ شَرِّهِ وَشَرِّ مَا فِيهِ",
            translit:
              "Nas'aluka khayra hādhal yawm wa khayra mā fīhi, wa na‛ūdhu bika min sharrihī wa sharri mā fīhi.",
            translation:
              "We beseech You for the good of  this day, and the best of the  goodness it may impart on us;  and we seek refuge in You from  the evil of this day, and the worst  of the evil that it may contain.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "أَعُوْذُ باِللَّهِ مِنَ الشَّيْطَانِ الرَّجِيْمِ",
            translit: "",
            translation: "",
          }),
        ],
        instruction: "Then recite the last verses of Surah Aal Imran:",
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ",
            translit: "",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new QuranDhikrEntryModel({
            arabic:
              "إِنَّ فِى خَلْقِ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ وَٱخْتِلَٰفِ ٱلَّيْلِ وَٱلنَّهَارِ لَـَٔايَٰتٍ لِّأُو۟لِى ٱلْأَلْبَٰبِ",
            translit: "",
            translation: "",
            verse: 190,
            surah: 3,
          }),
          new QuranDhikrEntryModel({
            arabic:
              "ٱلَّذِينَ يَذْكُرُونَ ٱللَّهَ قِيَٰمًا وَقُعُودًا وَعَلَىٰ جُنُوبِهِمْ وَيَتَفَكَّرُونَ فِى خَلْقِ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ رَبَّنَا مَا خَلَقْتَ هَٰذَا بَٰطِلًا سُبْحَٰنَكَ فَقِنَا عَذَابَ ٱلنَّارِ",
            translit: "",
            translation: "",
            verse: 191,
            surah: 3,
          }),
          new QuranDhikrEntryModel({
            arabic: "رَبَّنَآ إِنَّكَ مَن تُدْخِلِ ٱلنَّارَ فَقَدْ أَخْزَيْتَهُۥ ۖ وَمَا لِلظَّٰلِمِينَ مِنْ أَنصَارٍ",
            translit: "",
            translation: "",
            verse: 192,
            surah: 3,
          }),
          new QuranDhikrEntryModel({
            arabic:
              "رَّبَّنَآ إِنَّنَا سَمِعْنَا مُنَادِيًا يُنَادِى لِلْإِيمَٰنِ أَنْ ءَامِنُوا۟ بِرَبِّكُمْ فَـَٔامَنَّا ۚ رَبَّنَا فَٱغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّـَٔاتِنَا وَتَوَفَّنَا مَعَ ٱلْأَبْرَارِ",
            translit: "",
            translation: "",
            verse: 193,
            surah: 3,
          }),
          new QuranDhikrEntryModel({
            arabic:
              "رَبَّنَا وَءَاتِنَا مَا وَعَدتَّنَا عَلَىٰ رُسُلِكَ وَلَا تُخْزِنَا يَوْمَ ٱلْقِيَٰمَةِ ۗ إِنَّكَ لَا تُخْلِفُ ٱلْمِيعَادَ",
            translit: "",
            translation: "",
            verse: 194,
            surah: 3,
          }),
          new QuranDhikrEntryModel({
            arabic:
              "فَٱسْتَجَابَ لَهُمْ رَبُّهُمْ أَنِّى لَآ أُضِيعُ عَمَلَ عَٰمِلٍ مِّنكُم مِّن ذَكَرٍ أَوْ أُنثَىٰ ۖ بَعْضُكُم مِّنۢ بَعْضٍ ۖ فَٱلَّذِينَ هَاجَرُوا۟ وَأُخْرِجُوا۟ مِن دِيَٰرِهِمْ وَأُوذُوا۟ فِى سَبِيلِى وَقَٰتَلُوا۟ وَقُتِلُوا۟ لَأُكَفِّرَنَّ عَنْهُمْ سَيِّـَٔاتِهِمْ وَلَأُدْخِلَنَّهُمْ جَنَّٰتٍ تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَٰرُ ثَوَابًا مِّنْ عِندِ ٱللَّهِ ۗ وَٱللَّهُ عِندَهُۥ حُسْنُ ٱلثَّوَابِ",
            translit: "",
            translation: "",
            verse: 195,
            surah: 3,
          }),
          new QuranDhikrEntryModel({
            arabic: "لَا يَغُرَّنَّكَ تَقَلُّبُ ٱلَّذِينَ كَفَرُوا۟ فِى ٱلْبِلَٰدِ",
            translit: "",
            translation: "",
            verse: 196,
            surah: 3,
          }),
          new QuranDhikrEntryModel({
            arabic: "مَتَٰعٌ قَلِيلٌ ثُمَّ مَأْوَىٰهُمْ جَهَنَّمُ ۚ وَبِئْسَ ٱلْمِهَادُ",
            translit: "",
            translation: "",
            verse: 197,
            surah: 3,
          }),
          new QuranDhikrEntryModel({
            arabic:
              "لَٰكِنِ ٱلَّذِينَ ٱتَّقَوْا۟ رَبَّهُمْ لَهُمْ جَنَّٰتٌ تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَٰرُ خَٰلِدِينَ فِيهَا نُزُلًا مِّنْ عِندِ ٱللَّهِ ۗ وَمَا عِندَ ٱللَّهِ خَيْرٌ لِّلْأَبْرَارِ",
            translit: "",
            translation: "",
            verse: 198,
            surah: 3,
          }),
          new QuranDhikrEntryModel({
            arabic:
              "وَإِنَّ مِنْ أَهْلِ ٱلْكِتَٰبِ لَمَن يُؤْمِنُ بِٱللَّهِ وَمَآ أُنزِلَ إِلَيْكُمْ وَمَآ أُنزِلَ إِلَيْهِمْ خَٰشِعِينَ لِلَّهِ لَا يَشْتَرُونَ بِـَٔايَٰتِ ٱللَّهِ ثَمَنًا قَلِيلًا ۗ أُو۟لَٰٓئِكَ لَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ ۗ إِنَّ ٱللَّهَ سَرِيعُ ٱلْحِسَابِ",
            translit: "",
            translation: "",
            verse: 199,
            surah: 3,
          }),
          new QuranDhikrEntryModel({
            arabic:
              "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱصْبِرُوا۟ وَصَابِرُوا۟ وَرَابِطُوا۟ وَٱتَّقُوا۟ ٱللَّهَ لَعَلَّكُمْ تُفْلِحُونَ",
            translit: "",
            translation: "",
            verse: 200,
            surah: 3,
          }),
        ],
      }),
    ],
  }),
  new WirdModel({
    title: "The TAHAJJUD PRAYER",
    entries: [
      new DhikrModel({
        entries: [
          new QuranDhikrEntryModel({
            arabic:
              "وَلَوْ أَنَّهُمْ إِذ ظَّلَمُوٓا۟ أَنفُسَهُمْ جَآءُوكَ فَٱسْتَغْفَرُوا۟ ٱللَّهَ وَٱسْتَغْفَرَ لَهُمُ ٱلرَّسُولُ لَوَجَدُوا۟ ٱللَّهَ تَوَّابًا رَّحِيمًا",
            translit:
              "Wa law annahum idhẓalamū anfusahum jā'ūka fastaghfarul lāha wastaghfara lahumurrasūlu lawajadullāha tawwābar raḥīmā.",
            translation:
              "If they had come to you (O Prophet) and sought forgiveness from Allāh whenever they wronged themselves, and (you) the Messenger had prayed for forgiveness for them, they would have found that Allāh is Oft-Forgiving, Most Merciful.",
            verse: 64,
            surah: 4,
          }),
        ],
        instruction:
          "Two short raka‛āt. • In the FIRST RAKAʽAH, after Sūrah al-Fātiḥah recite:",
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "أَسْتَغْفِرُ اللَّهَ",
            translit: "Astaghfirullāh",
            translation: "I ask Allāh's Forgiveness",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({ instruction: "Then recite: Sūrah al-Kāfirūn" }),
      new DhikrModel({
        entries: [
          new QuranDhikrEntryModel({
            arabic:
              "وَمَن يَعْمَلْ سُوٓءًا أَوْ يَظْلِمْ نَفْسَهُۥ ثُمَّ يَسْتَغْفِرِ ٱللَّهَ يَجِدِ ٱللَّهَ غَفُورًا رَّحِيمًا",
            translit:
              "Wa may ya‛mal sū'an aw yaẓlim nafsahū, thumma yastaghfirillāha yajidillāha ghafūrarraḥīmā.",
            translation:
              "If any one commits an evil deed or has been unjust to his soul, but afterwards ask Allāh for forgiveness, he will find Allāh Oft-Forgiving, Most Merciful.",
            verse: 110,
            surah: 4,
          }),
        ],
        instruction: "In the SECOND RAKAʽAH, after Sūrah al-Fātiḥah recite:",
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "أَسْتَغْفِرُ اللَّهَ",
            translit: "Astaghfirullāh",
            translation: "I ask Allāh's Forgiveness",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({ instruction: "Then recite: Sūrah Al-Ikhlāṣ" }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُ أَكْبَرُ (10) الْحَمْدُ لِلَّهِ (10) سُبْحَانَ اللَّهِ وَبِحَمْدِهِ (10) سُبْحَانَ الْمَلِكِ الْقُدُّوسِ (10) أَسْتَغْفِرُ اللَّهَ (10) لَا إِلَهَ إِلَّا اللَّهُ (10)",
            translit: "",
            translation:
              "Allāh is the Greatest (10 times); All Praise be to Allāh (10 times); Glory and praise be to Allāh (10 times); Glory be to the Most Pure One (10 times); I ask Allāh's forgiveness (10 times); There is no god",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ ضِيقِ الدُّنْيَا وَضِيقِ يَوْمِ الْقِيَامَةِ (10)",
            translit: "",
            translation:
              "but Allāh (10 times); O Allāh! I seek refuge in You from the distress of this world, and the distress of the Day of Judgement. (10 times).",
          }),
        ],
        instruction: "Say afterwards:",
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "لَا إِلَهَ إِلَّا أَنْتَ",
            translit: "Lā ilāha illā anta",
            translation: "There is no god, but You alone.",
          }),
          new DhikrEntryModel({
            arabic: "سُبْحَانَكَ",
            translit: "subḥānaka",
            translation: "Glory be to You;",
          }),
          new DhikrEntryModel({
            arabic: "أَسْتَغْفِرُكَ لِذَنْبِي",
            translit: "astaghfiruka li dhambī",
            translation: "forgive my sins;",
          }),
          new DhikrEntryModel({
            arabic: "وَأَسْأَلُكَ رَحْمَتَكَ",
            translit: "wa as'aluka raḥmataka",
            translation: "I beseech Your mercy.",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ زِدْنِي عِلْمًا",
            translit: "Allāhumma zidnī ‛ilman",
            translation: "O Allāh, expand my knowledge,",
          }),
          new DhikrEntryModel({
            arabic: "وَلَا تُزِغْ قَلْبِي بَعْدَ إِذْ هَدَيتَنِي",
            translit: "wa lā tuzigh qalbī ba‛da idh hadaytanī",
            translation:
              "and do not mislead my heart after You have guided me to the Truth,",
          }),
          new DhikrEntryModel({
            arabic: "وَهَب لِي مِنْ لَدُنْكَ رَحْمَةً إِنَّكَ أَنْتَ الْوَهَّابُ",
            translit: "wa hab lī mil ladunka raḥmatan innaka antal wahhāb.",
            translation:
              "and grant me Your mercy; You are the Giver of Bounties.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ قَيِّمُ السَّمَوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ",
            translit:
              "Allāhumma laka alḥamdu Anta qayyimu assamawāti wal-arḍi waman fīhinna",
            translation:
              "O Allah! All praise is for You; You are the Holder of the heavens and the earth and whatever is in them.",
          }),
          new DhikrEntryModel({
            arabic: "وَلَكَ الْحَمْدُ لَكَ مُلكُ السَّمَوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ",
            translit:
              "walaka alḥamdu laka mulku assamawāti wal-arḍi waman fīhinna",
            translation:
              "All praise is for You; You are the Lord of the heavens and the earth and whatever is in them.",
          }),
          new DhikrEntryModel({
            arabic: "وَلَكَ الْحَمْدُ أَنْتَ نُورُ السَّمَوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ",
            translit:
              "walaka alḥamdu Anta Nūru assamawāti wal-arḍi waman fīhinna",
            translation:
              "All praise is for You; You are the Light of the heavens and the earth and whatever is in them.",
          }),
          new DhikrEntryModel({
            arabic: "وَلَكَ الْحَمْدُ أَنْتَ مَلِكُ السَّمَوَاتِ وَالْأَرْضِ",
            translit: "walaka alḥamdu Anta Maliku assamawāti wal-arḍi",
            translation:
              "All the praises are for You; You are the Sovereign of the heavens and the earth and whatever is in them.",
          }),
          new DhikrEntryModel({
            arabic: "وَلَكَ الْحَمْدُ أَنْتَ الْحَقُّ",
            translit: "walaka alḥamdu Anta Alḥaqqu",
            translation: "You are the Truth,",
          }),
          new DhikrEntryModel({
            arabic: "وَوَعْدُكَ الْحَقُّ",
            translit: "wawaʻduka alḥaqqu",
            translation: "and Your promise is true,",
          }),
          new DhikrEntryModel({
            arabic: "وَلِقَاؤُكَ حَقٌّ",
            translit: "waliqā-uka ḥaqqun",
            translation: "and the meeting with You is true,",
          }),
          new DhikrEntryModel({
            arabic: "وَقَوْلُكَ حَقٌّ",
            translit: "waqawluka ḥaqqun",
            translation: "Your Word is the Truth,",
          }),
          new DhikrEntryModel({
            arabic: "وَالْجَنَّةُ حَقٌّ",
            translit: "waljannatu ḥaqqun",
            translation: "Paradise is true,",
          }),
          new DhikrEntryModel({
            arabic: "وَالنَّارُ حَقٌّ",
            translit: "wannāru ḥaqqun",
            translation: "and the (Hell) Fire is true,",
          }),
          new DhikrEntryModel({
            arabic: "وَالنَّبِيُّونَ حَقٌّ",
            translit: "wannabīyūna ḥaqqun",
            translation: "and all the Prophets (peace be upon them) are true,",
          }),
          new DhikrEntryModel({
            arabic: "وَمُحَمَّدٌ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ حَقٌّ",
            translit: "wa Muḥammadun ṣallallāhu ʻalayhi wasallama ḥaqqun",
            translation:
              "and Muhammad (peace and blessings of Allah be upon him) is true,",
          }),
          new DhikrEntryModel({
            arabic: "وَالسَّاعَةُ حَقٌّ",
            translit: "wassāʻatu ḥaqqun",
            translation: "and the Day of Resurrection is true.",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ لَكَ أَسْلَمتُ",
            translit: "Allāhumma laka aslamtu",
            translation: "O Allah, to You I submit,",
          }),
          new DhikrEntryModel({
            arabic: "وَبِكَ آمَنتُ",
            translit: "wa bika āmantu",
            translation: "in You I believe,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَلَيْكَ تَوَكَّلتُ",
            translit: "wa ʻalayka tawakkaltu",
            translation: "in You I put my trust,",
          }),
          new DhikrEntryModel({
            arabic: "وَإِلَيْكَ أَنَبتُ",
            translit: "wa ilayka anabtu",
            translation: "to You I turn in repentance,",
          }),
          new DhikrEntryModel({
            arabic: "وَبِكَ خَاصَمتُ",
            translit: "wa bika khāṣamtu",
            translation: "and with Your Help I contend my adversaries,",
          }),
          new DhikrEntryModel({
            arabic: "وَإِلَيْكَ حَاكَمتُ",
            translit: "wa ilayka ḥākamtu",
            translation: "and to You I refer my case.",
          }),
          new DhikrEntryModel({
            arabic: "فَاغْفِرْ لِي مَا قَدَّمتُ وَمَا أَخَّرتُ وَمَا أَسْرَرْتُ وَمَا أَعْلَنتُ",
            translit:
              "faghfir lī mā qaddamtu wa mā akhkhartu wa mā asrartu wa mā aʻlantu",
            translation:
              "Forgive me my past and future sins, what I have done in secret and what I have done openly.",
          }),
          new DhikrEntryModel({
            arabic: "أَنْتَ الْمُقَدِّمُ",
            translit: "Anta almuqaddimu",
            translation: "You are the One Who brings forward,",
          }),
          new DhikrEntryModel({
            arabic: "وَأَنْتَ الْمُؤَخِّرُ لَا إِلَهَ إِلَّا أَنْتَ",
            translit: "wa Anta almu-akhkhiru. Lā ilāha illā Anta",
            translation: "and puts back. There is no god but You.",
          }),
        ],
        instruction: "The following can be part of your adhkar:",
      }),
    ],
  }),
];
