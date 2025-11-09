import { falaq, ikhlas, nas } from "@/content/shared/quran";
import {
  DhikrEntryModel,
  DhikrModel,
  QuranEntryModel,
  QuranModel,
  WirdModel,
} from "@/models/recitation";

export const wird = [
  new WirdModel("Wird al Latif", [
    ikhlas(3),
    falaq(3),
    nas(3),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic: "رَبِّ أَعُوذُ بِكَ مِنْ هَمَزَٰتِ ٱلشَّيَٰطِينِ وَأَعُوذُ بِكَ رَبِّ أَن يَحْضُرُونِ",
        translit:
          "Rabbī ʿaudhu bika min hamāzat ash-shayaṭīni wa ʿaudhu bika Rabbī an yaḥdurūn.",
        translation:
          "‘Lord, I take refuge with You from the goadings of the satans; I seek refuge with You, Lord, so that they may not come near me.’",
        repeat: 3,
      }),
    ]),
    new QuranModel(
      "Al-Mu'minun",
      23,
      [
        new QuranEntryModel({
          arabic: "أَفَحَسِبْتُمْ أَنَّمَا خَلَقْنَٰكُمْ عَبَثًا وَأَنَّكُمْ إِلَيْنَا لَا تُرْجَعُونَ",
          translit:
            "Afaḥasibtum annamā khalaqnākum ʿabathan wa annakum ilaynā lā turjaʿūn.",
          translation:
            "Did you think We had created you in vain, and that you would not be brought back to Us?",
          verse: 115,
        }),
        new QuranEntryModel({
          arabic: "فَتَعَٰلَى ٱللَّهُ ٱلْمَلِكُ ٱلْحَقُّ ۖ لَآ إِلَٰهَ إِلَّا هُوَ رَبُّ ٱلْعَرْشِ ٱلْكَرِيمِ",
          translit:
            "Fa taʿālā Allāh ul-Malik ul-Ḥaqq, lā ilāha illā Huwa Rabb ul-ʿArsh il-Karīm.",
          translation:
            "Exalted be God, the true King, there is no god but Him, the Lord of the Glorious Throne!",
          verse: 116,
        }),
        new QuranEntryModel({
          arabic:
            "وَمَن يَدۡعُ مَعَ ٱللَّهِ إِلَٰهًا ءَاخَرَ لَا بُرۡهَٰنَ لَهُۥ بِهِۦ فَإِنَّمَا حِسَابُهُۥ عِندَ رَبِّهِۦٓۚ إِنَّهُۥ لَا يُفۡلِحُ ٱلۡكَٰفِرُونَ",
          translit:
            "Wa man yadʿu maʿ Allāhi ilāhan ākhara lā burhāna lahu bihi, faʾinnamā ḥisābuhu ʿinda Rabbih, innahu lā yufliḥ ul-kāfirūn.",
          translation:
            "Whoever prays to another god alongside Him—he has no proof of this—will face his reckoning with his Lord. Those who reject the truth will not prosper.",
          verse: 117,
        }),
        new QuranEntryModel({
          arabic: "وَقُل رَّبِّ ٱغۡفِرۡ وَٱرۡحَمۡ وَأَنتَ خَيۡرُ ٱلرَّٰحِمِينَ",
          translit: "Wa qul Rabb ighfir warḥam wa anta khayr ur-rāḥimīn.",
          translation:
            "Say, ‘Lord, forgive and have mercy: You are the most merciful of all.’",
          verse: 118,
        }),
      ],
      "",
      false,
      1,
    ),
    new QuranModel(
      "Ar-Rum",
      30,
      [
        new QuranEntryModel({
          arabic: "فَسُبۡحَٰنَ ٱللَّهِ حِينَ تُمۡسُونَ وَحِينَ تُصۡبِحُونَ",
          translit: "Fasubḥān Allāhi ḥīna tumsūna wa ḥīna tuṣbiḥūn.",
          translation:
            "So celebrate God’s glory in the evening, in the morning—",
          verse: 17,
        }),
        new QuranEntryModel({
          arabic: "وَلَهُ ٱلۡحَمۡدُ فِي ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ وَعَشِيّٗا وَحِينَ تُظۡهِرُونَ",
          translit:
            "Wa lahu ulḥamdu fis-samāwāti wal-arḍi wa ʿashīyyan wa ḥīna tuẓhirūn.",
          translation:
            "praise is due to Him in the heavens and the earth—in the late afternoon, and at midday.",
          verse: 18,
        }),
        new QuranEntryModel({
          arabic:
            "يُخۡرِجُ ٱلۡحَيَّ مِنَ ٱلۡمَيِّتِ وَيُخۡرِجُ ٱلۡمَيِّتَ مِنَ ٱلۡحَيِّ وَيُحۡيِ ٱلۡأَرۡضَ بَعۡدَ مَوۡتِهَاۚ وَكَذَٰلِكَ تُخۡرَجُونَ",
          translit:
            "Yukhrij ul-ḥayya min al-mayyiti wa yukhrij ul-mayyita min al-ḥayyi wa yuḥyī il-arḍa baʿda mawtihā, wa kathālika tukhrajūn.",
          translation:
            "He brings the living out of the dead and the dead out of the living. He gives life to the earth after death, and you will be brought out in the same way.",
          verse: 19,
        }),
      ],
      "",
      false,
      1,
    ),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic: "أَعُوذُ بِٱللَّهِ ٱلسَّمِيعِ ٱلْعَلِيمِ مِنَ ٱلشَّيْطَانِ ٱلرَّجِيم",
        translit: "Aʿūdhu billāhi as-Samīʿ al-ʿAlīm min ash-shayṭān ar-rajīm.",
        translation:
          "I seek refuge in Allah, the All-Hearing, the All-Knowing, from the rejected Devil.",
        repeat: 3,
      }),
    ]),
    new QuranModel(
      "Al-Hashr",
      59,
      [
        new QuranEntryModel({
          arabic:
            "لَوۡ أَنزَلۡنَا هَٰذَا ٱلۡقُرۡءَانَ عَلَىٰ جَبَلٖ لَّرَأَيۡتَهُۥ خَٰشِعٗا مُّتَصَدِّعٗا مِّنۡ خَشۡيَةِ ٱللَّهِۚ وَتِلۡكَ ٱلۡأَمۡثَٰلُ نَضۡرِبُهَا لِلنَّاسِ لَعَلَّهُمۡ يَتَفَكَّرُونَ",
          translit:
            "Lau anzalnā hādhā al-Qurʾāna ʿalā jabalin laraʾāytahu khāshiʿan mutaṣaddiʿan min khashyat Illāh, wa tilk al-amthālu naḍribuhā liʾn-nāsi laʿalahum yatafakkarūn.",
          translation:
            "If We had sent this Qur’an down on a mountain, you would have seen it humbled and split apart in its awe of God: We offer people such illustrations so that they may reflect.",
          verse: 21,
        }),
        new QuranEntryModel({
          arabic:
            "هُوَ ٱللَّهُ ٱلَّذِي لَآ إِلَٰهَ إِلَّا هُوَۖ عَٰلِمُ ٱلۡغَيۡبِ وَٱلشَّهَٰدَةِۖ هُوَ ٱلرَّحۡمَٰنُ ٱلرَّحِيمُ",
          translit:
            "Huwa Allāhu alladhī lā ilāha illā Hu, ʿālim ul-ghaybi wa ash-shahādati Huwa ar-Raḥmān ur-Raḥīm.",
          translation:
            "He is God: there is no god other than Him. It is He who knows what is hidden as well as what is in the open, He is the Lord of Mercy, the Giver of Mercy.",
          verse: 22,
        }),
        new QuranEntryModel({
          arabic:
            "هُوَ ٱللَّهُ ٱلَّذِي لَآ إِلَٰهَ إِلَّا هُوَ ٱلۡمَلِكُ ٱلۡقُدُّوسُ ٱلسَّلَٰمُ ٱلۡمُؤۡمِنُ ٱلۡمُهَيۡمِنُ ٱلۡعَزِيزُ ٱلۡجَبَّارُ ٱلۡمُتَكَبِّرُۚ سُبۡحَٰنَ ٱللَّهِ عَمَّا يُشۡرِكُونَ",
          translit:
            "Huwa Allāhu alladhī lā ilāha illā Huwa al-Malik ul-Quddūs us-Salām ulMuʾmin ul-Muhaymin ul-ʿAzīz ul-Jabbār ul-Mutakabbir, subḥān Allāhi ʿammā yushrikūn.",
          translation:
            "He is God: there is no god other than Him, the Controller, the Holy One, Source of Peace, Granter of Security, Guardian over all, the Almighty, the Compeller, the Truly Great; God is far above anything they consider to be His partner.",
          verse: 23,
        }),
        new QuranEntryModel({
          arabic:
            "هُوَ ٱللَّهُ ٱلۡخَٰلِقُ ٱلۡبَارِئُ ٱلۡمُصَوِّرُۖ لَهُ ٱلۡأَسۡمَآءُ ٱلۡحُسۡنَىٰۚ يُسَبِّحُ لَهُۥ مَا فِي ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِۖ وَهُوَ ٱلۡعَزِيزُ ٱلۡحَكِيمُ",
          translit:
            "Huwa Allāh ul-Khāliq ul-Bāriʾ ulMuṣawwir, lahu ul-asmāʾ ul-ḥusnā, yusabbiḥu lahu ma fīs-samāwāti wal-arḍi wa Huwa al-ʿAzīz ul-Ḥakīm.",
          translation:
            "He is God: the Creator, the Originator, the Shaper. The best names belong to Him. Everything in the heavens and earth glorifies Him: He is the Almighty, the Wise.",
          verse: 24,
        }),
      ],
      "",
      false,
      1,
    ),
    new QuranModel(
      "As-Saffat",
      37,
      [
        new QuranEntryModel({
          arabic: "سَلَٰمٌ عَلَىٰ نُوحٖ فِي ٱلۡعَٰلَمِينَ",
          translit: "Salāmun ʿalā Nūḥin fil-ʿālamīn.",
          translation: "‘Peace be upon Noah among all the nations!’",
          verse: 79,
        }),
        new QuranEntryModel({
          arabic: "إِنَّا كَذَٰلِكَ نَجۡزِي ٱلۡمُحۡسِنِينَ",
          translit: "Innā kadhalika najzil-muḥsinīn.",
          translation: "This is how We reward those who do good:",
          verse: 80,
        }),
        new QuranEntryModel({
          arabic: "إِنَّهُۥ مِنۡ عِبَادِنَا ٱلۡمُؤۡمِنِينَ",
          translit: "Innahu min ʿibādina al-muʾminīn.",
          translation: "he was truly one of Our faithful servants.",
          verse: 81,
        }),
      ],
      "",
      false,
      1,
    ),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic: "أَعُوذُ بِكَلِمَاتِ ٱللَّهِ ٱلتَّامَّاتِ مِنْ شَرِّ مَا خَلَق",
        translit: "Aʿūdhu bikalimāt Illāhi at-tāmmāti min sharri mā khalaq.",
        translation:
          "I take refuge in the complete words of Allah from the evil in what He has created.",
        repeat: 3,
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic:
          "بِسْمِ ٱللَّهِ ٱلَّذِي لَا يَضُرُّ مَعَ ٱسْمِهِ شَيْءٌ فِي ٱلْأَرْضِ وَلَا فِي ٱلسَّمَاءِ وَهُوَ ٱلسَّمِيعُ ٱلْعَلِيم",
        translit:
          "Bismillāh alladhī lā yaḍuru maʿ ismihi shayyʾun fil-arḍi wa lā fīs-samāʾi wa Huwa as-Samīʿ ul-ʿAlīm.",
        translation:
          "In the Name of Allah, with whose Name nothing on earth or in heaven can harm, and He is the All-Hearing, the All-Knowing.",
        repeat: 3,
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic:
          "ٱللَّهُمَّ إِنِّي أَصْبَحْتُ مِنْكَ فِي نِعْمَةٍ وَعَافِيَةٍ وَسَتْرٍ فَأَتْمِمْ نِعْمَتَكَ عَلَيَّ وَعَافِيَتَكَ وَسَتْرَكَ فِي ٱلدُّنْيَا وَٱلْآخِرَة",
        translit:
          "Allāhumma innī aṣbaḥtu minka fī niʿmatin wa ʿāfiyatin wa satr, faʾatmim niʿmataka ʿalayya wa ʿāfiyataka wa satraka fid-dunyā wal-ākhīrah.",
        translation:
          "O Allah! As morning comes upon me, I dwell in Your favor, well-being and protection; so complete Your favor upon me, Your well-being, and Your protection, in this world and the next.",
        repeat: 3,
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic:
          "ٱللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ وَمَلَائِكَتَكَ وَجَمِيعَ خَلْقِكَ أَنَّكَ أَنْتَ ٱللَّهُ لَا إِلَهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ وَأَنَّ سَيِّدَنَا مُحَمَّدًا عَبْدُكَ وَرَسُولُك",
        translit:
          "Allāhumma innī aṣbaḥtu ushhiduka, wa ushhidu ḥamalata ʿarshika wa malāʾikataka wa jamīʿa khalqika, annaka antaLlāhu lā ilāha illā anta waḥdaka lā sharīka laka, wa anna Sayyidanā Muḥammadan ʿabduka wa rasūluk.",
        translation:
          "O Allah! As morning comes upon me, I bear witness before You, the Bearers of Your Throne, Your angels, and all Your creation—that You are Allah, there is no god but You, alone with no partners, and that our master Muhammad is Your slave and messenger.",
        repeat: 4,
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic: "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ حَمْدًا يُوَافِي نِعَمَهُ وَيُكَافِئُ مَزِيدَه",
        translit:
          "Al-ḥamdu lillāhi Rabb il-ʿālamīn, ḥamdan yuwāfī niʿamahu wa yukāfiʾu mazīdah.",
        translation:
          "Praise belongs to Allah, Lord of the Worlds—praise that is adequate to His favors and equal to His increase.",
        repeat: 3,
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic:
          "آمَنْتُ بِٱللَّهِ ٱلْعَظِيمِ وَكَفَرْتُ بِٱلْجِبْتِ وَٱلطَّاغُوتِ وَٱسْتَمْسَكْتُ بِٱلْعُرْوَةِ ٱلْوُثْقَىٰ لَا ٱنفِصَامَ لَهَا وَٱللَّهُ سَمِيعٌ عَلِيمٌ",
        translit:
          "Āmantu billāh il-ʿAẓīm, wa kafartu bil jibti wat-ṭāghūt, wastamsaktu bil ʿurwat il-wuthqā, lanfiṣāma lahā wa Allāhu Samīʿun ʿAlīm.",
        translation:
          "I believe in Allah the Almighty, and I denounce all idols and false gods, and I grasp the firmest handhold that never breaks, and Allah is All-Hearing, All-Knowing.",
        repeat: 3,
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic:
          "رَضِيتُ بِٱللَّهِ رَبًّا وَبِٱلْإِسْلَامِ دِينًا وَبِسَيِّدِنَا مُحَمَّدٍ صَلَّى ٱللَّهُ عَلَيْهِ وَآلِهِ وَسَلَّمَ نَبِيًّا وَرَسُولًا",
        translit:
          "Raḍītu billāhi Rabba, wa bil Islāmi dīnā, wa bi Sayyidinā Muḥammadin ṣallā Allāhu ʿalayhi wa ālihi wa sallama nabīyyan wa rasūlā.",
        translation:
          "I am content with Allah as Lord, with Islam as religion, and with our master Muhammad (Allah’s peace and blessings be upon him and his family) as Prophet and Messenger.",
        repeat: 3,
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic: "حَسْبِىَ ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ ٱلْعَرْشِ ٱلْعَظِيم",
        translit:
          "Ḥasbī Allāhu lā ilāha illā Huwa ʿalayhi tawakkaltu wa Huwa Rabb ul-ʿarsh il-ʿaẓīm.",
        translation:
          "Allah is enough for me: there is no god but Him; I put my trust in Him; He is Lord of the Mighty Throne.",
        repeat: 7,
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic: "ٱللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَآلِهِ وَصَحْبِهِ وَسَلِّمْ",
        translit:
          "Allāhumma ṣalli ʿalā Sayyidinā Muḥammadin wa ālihi wa ṣaḥbihi wa sallim.",
        translation:
          "O Allah, send blessings upon our master Muhammad, his Family and Companions, and grant them peace.",
        repeat: 10,
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic: "ٱللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فُجَاءَةِ ٱلْخَيْرِ وَأَعُوذُ بِكَ مِنْ فُجَاءَةِ ٱلشَّرِّ",
        translit:
          "Allāhumma innī asʾaluka min fujāʾat il-khayr, wa aʿūdhu bika min fujāʾat ish-sharr.",
        translation:
          "O Allah! I ask You for sudden good and seek Your protection from sudden evil.",
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic:
          "ٱللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي، وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا ٱسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَٱغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ ٱلذُّنُوبَ إِلَّا أَنْتَ",
        translit:
          "Allāhumma anta Rabbī lā ilāha illā anta, khalaqtanī wa anā ʿabduka, wa anā ʿalā ʿahdika wa waʿdika ma astaṭaʿtu, aʿūdhu bika min sharri mā ṣanaʿtu, abūʾu laka bi niʿmatika ʿalayya wa abūʾu bi dhanbī, faghfir lī, faʾinnahu lā yaghfir udh-dhunūba illā anta.",
        translation:
          "O Allah! You are my Lord, there is no god but You, You created me and I am Your slave. I uphold Your pledge and promise as well as I can; I seek Your protection against the evil that I have done; I acknowledge Your favors upon me and I acknowledge my sin, so forgive me, for none forgives sin except You.",
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic: "ٱللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ عَلَيْكَ تَوَكَّلْتُ وَأَنْتَ رَبُّ ٱلْعَرْشِ ٱلْعَظِيم",
        translit:
          "Allāhumma anta Rabbī lā ilāha illā anta, ʿalayka tawakkaltu wa anta Rabb ul-ʿarsh il-ʿaẓīm.",
        translation:
          "O Allah! You are my Lord, there is no god but You. Upon You I rely, and You are the Lord of the Glorious Throne.",
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic:
          "مَا شَاءَ ٱللَّهُ كَانَ وَمَا لَمْ يَشَأْ لَمْ يَكُنْ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّهِ ٱلْعَلِيِّ ٱلْعَظِيم",
        translit:
          "Mā shāʾ Allāhu kāna, wa mā lam yashaʾ lam yakun, wa lā ḥawla wa lā quwwata illā billāh il-ʿAlīyy il-ʿĀẓīm.",
        translation:
          "Whatever Allah wills is, and what He does not will is not; and there is no power or ability except by Allah, the Most High, the Almighty.",
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic: "أَعْلَمُ أَنَّ ٱللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ وَأَنَّ ٱللَّهَ قَدْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا",
        translit:
          "Aʿlamu annaLlāha ʿalā kulli shayyʾin qadīr wa annaLlāha qad aḥāṭa bi kulli shayyʾin ʿilmā.",
        translation:
          "I know that Allah has power over all things and that Allah encompasses all things in His knowledge.",
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic:
          "ٱللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي وَمِنْ شَرِّ كُلِّ دَابَّةٍ أَنْتَ آخِذٌ بِنَاصِيَتِهَا إِنَّ رَبِّى عَلَىٰ صِرَٰطٍ مُّسْتَقِيم",
        translit:
          "Allāhumma innī aʿūdhu bika min sharri nafsī, wa min sharri kulli dābbatin anta ākhidhun bi-nāṣīyatiha, inna Rabbī ʿalā ṣirāṭin mustaqīm.",
        translation:
          "O Allah! I seek Your protection from the evil of my own self and from the evil of every creature on earth You have taken by the forelock. My Lord’s way is straight.",
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic:
          "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، وَمِنْ عَذَابِكَ أَسْتَجِيرُ، أَصْلِح لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي وَلَا إِلَى أَحَدٍ مِنْ خَلْقِكَ طَرْفَةَ عَيْن",
        translit:
          "Yā Ḥayyu yā Qayyūm, bi-raḥmatika astaghīth, wa min ʿadhābika astajīr, aṣliḥ lī shaʾnī kullahu, wa lā takilnī ilā nafsī wa lā ilā aḥadin min khalqika ṭarfata ʿayn.",
        translation:
          "O Ever-Living, O Sustainer! I  seek help through Your Mercy and  protection from Your Punishment. Rectify all my affairs and do not entrust me to myself or to any of Your creation for even the blink of an eye.",
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic:
          "ٱللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ ٱلْهَمِّ وَٱلحَزَنِ، وَأَعُوذُ بِكَ مِنَ ٱلْعَجْزِ وَٱلْكَسَلِ، وَأَعُوذُ بِكَ مِنَ ٱلْجُبْنِ وَٱلْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ ٱلدَّينِ وَقَهْرِ ٱلرِّجَالِ",
        translit:
          "Allāhumma innī aʿūdhu bika min al-hammi wa al-ḥazan, wa aʿūdhu bika min al-ʿajzi wa al-kasal, wa aʿūdhu bika min al-jubni wa al-bukhl, wa aʿūdhu bika min ghalabat id-dayni wa qahr ir-rijāl.",
        translation:
          "O Allah! I seek Your protection from sorrow and grief, from incapacity and sloth, from cowardice and miserliness, and I seek Your protection from overwhelming debt and the tyranny of men.",
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic: "ٱللَّهُمَّ إِنِّي أَسْأَلُكَ ٱلْعَافِيَةَ فِي ٱلدُّنْيَا وَٱلْآخِرَة",
        translit: "Allāhumma innī asʾaluk al-ʿāfiyata fīd-dunyā wa al-ākhīrah.",
        translation:
          "O Allah! I ask You for well-being in this world and the hereafter.",
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic:
          "ٱللَّهُمَّ إِنِّي أَسْأَلُكَ ٱلْعَفْوَ وَٱلْعَافِيَةَ وَٱلْمُعَافَاةَ ٱلدَّائِمَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي",
        translit:
          "Allāhumma innī asʾaluk al-ʿafwa wal-ʿāfiyata wal-muʿāfāt ad-dāʾimah fī dīnī wa dunyāya wa ahlī wa mālī.",
        translation:
          "O Allah! I ask You for pardoning, well-being, and constant safety in my religion, worldly life, family, and possessions.",
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic: "ٱللَّهُمَّ اسْتُرْ عَوْرَاتِيِ وَآمِنْ رَوْعَاتِي",
        translit: "Allāhumma ustur ʿawrātī wa āmin rawʿātī.",
        translation: "O Allah! Cover my shame and calm my fears.",
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic:
          "ٱللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي",
        translit:
          "Allāhumma iḥfaẓnī min bayni yadayya wa min khalfī, wa ʿan yamīnī wa ʿan shimālī wa min fawqī, wa aʿūdhu bi-ʿaẓamatika an ughtāla min taḥtī.",
        translation:
          "O Allah! Protect me from [the evil] in front of me and behind me, on my right and my left, and from above me—and I take refuge in Your Greatness from the unexpected harm from below me.",
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic:
          "ٱللَّهُمَّ أَنْتَ خَلَقْتَنِي وَأَنْتَ تَهْدِينِي وَأَنْتَ تُطْعِمُنِي وَأَنْتَ تَسْقِينِي وَأَنْتَ تُمِيتُنِي وَأَنْتَ تُحْيِينِي وَأَنْتَ عَلَى كُلِّ شَيْءٍ قَدِير",
        translit:
          "Allāhumma anta khalaqtanī wa anta tahdīnī wa anta tuṭʿimunī wa anta tasqīnī wa anta tumītunī wa anta tuḥyīnī, wa anta ʿalā kulli shayyʾin qadīr.",
        translation:
          "O Allah! You created me and You guide me, and You feed me and provide me with drink, and You cause me to die and You give me life, and You have power over all things.",
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic:
          "أَصْبَحْنَا عَلَى فِطْرَةِ ٱلْإِسْلَامِ وَعَلَى كَلِمَةِ ٱلْإِخْلَاصِ وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى ٱللَّهُ عَلَيْهِ وَآلِهِ وَسَلَّمَ وَعَلَى مِلَّةِ أَبِينَا إِبْرَٰهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ ٱلْمُشْرِكِينَ",
        translit:
          "Aṣbaḥnā ʿalā fiṭrat il-Islām wa ʿalā kalimat il-ikhlāṣ wa ʿalā dīni nabīyyinā Muḥammadin ṣallā Allāhu ʿalayhi wa ālihi wa sallim, wa ʿalā millati abīnā Ibrāhīma ḥanīfan musliman wa mā kāna min almushrikīn.",
        translation:
          "We have risen this morning on the original pattern of Islam, upon the Word of Sincerity, on the religion of our Prophet Muhammad (Allah’s blessings and peace be upon him and his family), and upon the confession of Ibrāhīm, who was upright, a Muslim, and not an idolator.",
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic:
          "ٱللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَعَلَيْكَ نَتَوَكَّلُ وَإِلَيْكَ ٱلنُّشُور",
        translit:
          "Allāhumma bika aṣbaḥnā wa bika amsaynā wa bika naḥyā wa bika namūtu wa ʿalayka natawakkalu wa ilayk an-nushūr.",
        translation:
          "O Allah! By You we live to morning, and by You we live to evening, and by You we live and by You we die, and upon You we rely, and to You is the Resurrection.",
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic: "أَصْبَحْنَا وَأَصْبَحَ ٱلْمُلْكُ لِلَّهِ وَٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِين",
        translit:
          "Aṣbaḥnā wa aṣbaḥ al-mulku lillāhi, wal-ḥamdu lillāhi Rabb ilʿālamīn.",
        translation:
          "Morning has risen upon us and all sovereignty is Allah’s, and all praise belongs to Allah, Lord of the Worlds.",
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic: "ٱللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا ٱلْيَوْمِ فَتْحَهُ وَنَصْرَهُ وَنُورَهُ وَبَرَكَتَهُ وَهُدَاهُ",
        translit:
          "Allāhumma innī asʾaluka khayra hādhā al-youm, fatḥahu wa naṣrahu wa nūrahu wa barakatahu wa hudāhu.",
        translation:
          "O Allah! I ask You for the good of this day, its openings, victories, lights, blessings, and right-guidance.",
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic:
          "ٱللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا ٱلْيَوْمِ وَخَيْرَ مَا فِيهِ وَخَيْرَ مَا قَبْلَهُ وَخَيْرَ مَا بَعْدَهُ وَأَعُوذُ بِكَ مِنْ شَرِّ هَذَا ٱلْيَوْمِ وَشَرِّ مَا فِيهِ وَشَرِّ مَا قَبْلَهُ وَشَرِّ مَا بَعْدَهُ",
        translit:
          "Allāhumma innī asʾaluka khayra hādhā al-youmi wa khayra mā fīhi, wa khayra mā qablahu wa khayra mā baʿdahu, wa aʿūdhu bika min sharri hādhā al-youmi wa sharri mā fīhi, wa sharri mā qablahu wa sharri mā baʿdahu.",
        translation:
          "O Allah! I ask You for the good of this day and the best of what is in it, and the best of what came before it and the best of what comes after it;  and I seek refuge in You from the evil of this day and the worst of what is in it, and the worst of what came before it and the worst of what comes after it.",
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic:
          "ٱللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ فَلَكَ ٱلْحَمْدُ وَلَكَ ٱلشُّكْرُ عَلَى ذَلِكَ",
        translit:
          "Allāhumma mā aṣbaḥa bī min niʿmatin aw bi-aḥadin min khalqika, fa minka waḥdaka lā sharīka laka, falakal-ḥamdu wa lakash-shukru ʿalā dhālik.",
        translation:
          "O Allah! Whatever favors I, or any of Your creatures, received this morning, they come only from You; You have no partners, so to You belongs all praise and to You belongs all thanks.",
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic: "سُبْحَٰنَ ٱللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ وَرِضَى نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ",
        translit:
          "Subḥān Allāhi wa bi-ḥamdihi ʿadada khalqihi wa ridāʾ nafsihi wa zinata ʿarshihi wa midāda kalimātih.",
        translation:
          "Transcendent is Allah and praise belongs to Him—equal to the number of His creation, the degree of His good pleasure, the weight of His Throne, and the number of His words.",
        repeat: 3,
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic:
          "سُبْحَٰنَ ٱللَّهِ ٱلْعَظِيمِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ وَرِضَى نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ",
        translit:
          "Subḥān Allāhi al-ʿAẓīmi wa bi-ḥamdihi ʿadada khalqihi wa ridāʾ nafsihi wa zinata ʿarshihi wa midāda kalimātih.",
        translation:
          "Transcendent is Allah the Almighty, and praise belongs to Him— equal to the number of His creation, the degree of His good pleasure, the weight of His Throne, and the number of His words.",
        repeat: 3,
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic:
          "سُبْحَٰنَ ٱللَّهِ عَدَدَ مَا خَلَقَ فِي ٱلسَّمَاءِ، سُبْحَٰنَ ٱللَّهِ عَدَدَ مَا خَلَقَ فِي ٱلْأَرْضِ، سُبْحَٰنَ ٱللَّهِ عَدَدَ مَا بَيْنَ ذَلِك، سُبْحَٰنَ ٱللَّهِ عَدَدَ مَا هُوَ خَالِقٌ",
        translit:
          "Subḥān Allāhi ʿadada mā khalaqa fīs-samāʾ, subḥān Allāhi ʿadada mā khalaqa fil-arḍ, subḥān Allāhi ʿadada mā bayna dhālik, subḥān Allāhi ʿadada mā Huwa khāliq.",
        translation:
          "“Transcendent is Allah” equal to what He created in the heavens; “transcendent is Allah” equal to what He created on earth; “transcendent is Allah” equal to what is between them both; “transcendent is Allah” equal to whatever He creates.",
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic:
          "ٱلْحَمْدُ لِلَّهِ عَدَدَ مَا خَلَقَ فِي ٱلسَّمَاءِ، ٱلْحَمْدُ لِلَّهِ عَدَدَ مَا خَلَقَ فِي ٱلْأَرْضِ، ٱلْحَمْدُ لِلَّهِ عَدَدَ مَا بَيْنَ ذَلِك، ٱلْحَمْدُ لِلَّهِ عَدَدَ مَا هُوَ خَالِقٌ",
        translit:
          "Al-ḥamdu lillāhi ʿadada mā khalaqa fis-samāʾ, al-ḥamdu lillāhi ʿadada mā khalaqa fil-arḍ, al-ḥamdu lillāhi ʿadada mā bayna dhālik, al-ḥamdu lillāhi ʿadada mā Huwa khāliq.",
        translation:
          "“All praise belongs to Allah” equal to what He created in the heavens; “all praise belongs to Allah” equal to what He created on earth; “all praise belongs to Allah” equal to what is between them both; “all praise belongs to Allah” equal to whatever He creates.",
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic:
          "لَآ إِلَٰهَ إِلَّا ٱللَّهُ عَدَدَ مَا خَلَقَ فِي ٱلسَّمَاءِ، لَآ إِلَٰهَ إِلَّا ٱللَّهُ عَدَدَ مَا خَلَقَ فِي ٱلْأَرْضِ، لَآ إِلَٰهَ إِلَّا ٱللَّهُ عَدَدَ مَا بَيْنَ ذَلِك، لَآ إِلَٰهَ إِلَّا ٱللَّهُ عَدَدَ مَا هُوَ خَالِقٌ",
        translit:
          "Lā ilāha illā Allāhu ʿadada mā khalaqa fis-samāʾ, lā ilāha illā Allāhu ʿadada mā khalaqa fil-arḍ, lā ilāha illā Allāhu ʿadada mā bayna dhālik, lā ilāha illā Allāhu ʿadada mā Huwa khāliq.",
        translation:
          "“There is no god except Allah” equal to what He created in the heavens; “there is no god except Allah” equal to what He created on earth; “there is no god except Allah” equal to what is between them both; “there is no god except Allah” equal to whatever He creates.",
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic:
          "ٱللَّهُ أَكْبَرُ عَدَدَ مَا خَلَقَ فِي ٱلسَّمَاءِ، ٱللَّهُ أَكْبَرُ عَدَدَ مَا خَلَقَ فِي ٱلْأَرْضِ، ٱللَّهُ أَكْبَرُ عَدَدَ مَا بَيْنَ ذَلِك، ٱللَّهُ أَكْبَرُ عَدَدَ مَا هُوَ خَالِقٌ",
        translit:
          "Allāhu akbar ʿadada mā khalaqa fis-samāʾ, Allāhu akbar ʿadada mā khalaqa fil-arḍ, Allāhu akbar ʿadada mā bayna dhālik, Allāhu akbar ʿadada mā Huwa khāliq.",
        translation:
          "“Allah is Greater” equal to what He created in the heavens; “Allah is Greater” equal to what He created on earth; “Allah is Greater” equal to what is between them both; “Allah is Greater” equal to whatever He creates.",
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic:
          "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّهِ ٱلْعَلِيِّ ٱلْعَظِيمِ عَدَدَ مَا خَلَقَ فِي ٱلسَّمَاءِ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّهِ ٱلْعَلِيِّ ٱلْعَظِيمِ عَدَدَ مَا خَلَقَ فِي ٱلْأَرْضِ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّهِ ٱلْعَلِيِّ ٱلْعَظِيمِ عَدَدَ مَا بَيْنَ ذَلِك، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّهِ ٱلْعَلِيِّ ٱلْعَظِيمِ عَدَدَ مَا هُوَ خَالِقٌ",
        translit:
          "Lā ḥawla wa lā quwwata illā billāh il-ʿAlīyy il-ʿAẓīm ʿadada mā khalaqa fis-samāʾ, lā ḥawla wa lā quwwata illā billāh il-ʿAlīyy ilʿAẓīm ʿadada mā khalaqa fil-arḍ, lā ḥawla wa lā quwwata illā billāh il-ʿAlīyy il-ʿAẓīm ʿadada mā bayna dhālik, lā ḥawla wa lā quwwata illā billāh il-ʿAlīyy il-ʿAẓīm ʿadada mā Huwa khāliq.",
        translation:
          "“There is no power or ability except by Allah, the Most High, the Almighty” equal to what He created in the heavens; “There is no power or ability except by Allah, the Most High, the Almighty” equal to what He created on earth; “There is no power or ability except by Allah, the Most High, the Almighty” equal to what is between them both; “There is no power or ability except by Allah, the Most High, the Almighty” equal to whatever He creates.",
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic:
          "لَآ إِلَٰهَ إِلَّا ٱللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ ٱلْمُلْكُ وَلَهُ ٱلْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ عَدَدَ كُلِّ ذَرَّةٍ أَلْفَ مَرَّة",
        translit:
          "Lā ilāha illāLlāhu waḥdahu lā sharīka lahu, lahul-mulku wa lahul-ḥamdu, yuḥyī wa yumītu wa Huwa ʿalā kulli shayyʾin qadīr, ʿadada kulli dharratin alfa marrah.",
        translation:
          "“There is no god except Allah, One without partner, all control and praise belong to Him, He gives life and death, and He has power over all things”—equal to every atom one thousand times over.",
        repeat: 3,
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic:
          "ٱللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ مِفْتَاحِ بَابِ رَحْمَةِ ٱللَّهِ عَدَدَ مَا فِي عِلْمِ ٱللَّهِ صَلَاةً وَسَلَامًا دَائِمَيْنِ بِدَوَامِ مُلْكِ ٱللَّهِ وَعَلَى آلِهِ وَصَحْبِهِ عَدَدَ كُلِّ ذَرَّةٍ أَلْفَ مَرَّة",
        translit:
          "Allāhumma ṣalli wa sallim ʿalā Sayyidinā Muḥammadin miftāḥi bābi raḥmatillāh, ʿadada mā fī ʿilmillāh, ṣalātan wa salāman dāʾiymayni bi dawāmi mulkillāh, wa ʿalā ālihi wa ṣaḥbihi ʿadada kulli dharratin alfa marrah.",
        translation:
          "“O Allah! Send blessings and peace upon our master Muhammad, the key to Allah’s Gates of Mercy—equal to that which is in Allah’s knowledge—blessings and peace that last as eternally as Allah’s sovereignty, and upon his family and companions”—equal to every atom one thousand times over.",
        repeat: 3,
      }),
    ]),
  ]),
];

export default wird;
