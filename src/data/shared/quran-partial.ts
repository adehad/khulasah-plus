/**
 * Partial Qur'anic verses quoted inside duas and adhkar.
 * An ellipsis marks the end of the verse that is cut off; `verse` is the verse the quote starts in.
 * Each is a factory so a page can set its own repeat without sharing a mutable instance.
 */
import { QuranDhikrEntryModel } from "@/models/recitation";

/** start of Al-Baqarah 2:186 — used in salawat-compilations-majma-al-lataif-6---Wednesday */
export function baqarah_186(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "وَإِذَا سَأَلَكَ عِبَادِى عَنِّى فَإِنِّى قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ ٱلدَّاعِ إِذَا دَعَانِ …",
    translit:
      "Wa idhā sa’alaka ‛ibādī ‛annī fa innī qarībun ujību da‛watad dā‛i idhā da‛ān …",
    translation:
      "And when My servants ask you, [O Muḥammad], concerning Me - indeed I am near. I respond to the invocation of the supplicant when he calls upon Me …",
    surah: 2,
    verse: 186,
    repeat,
    enableCounter,
  });
}

/** end of Al-Baqarah 2:201 — used in khulasah-last-part-of-night-adhkar-before-dawn, visiting-the-beloved */
export function baqarah_201(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… رَبَّنَآ ءَاتِنَا فِى ٱلدُّنْيَا حَسَنَةً وَفِى الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ ٱلنَّارِ",
    translit:
      "… Rabbanā ātinā fiddunyā ḥasanatan wa fil ākhirati ḥasanatan wa qinā ‛adhāban nār.",
    translation:
      "… Our Lord! Grant us the good of this world and the Hereafter, and protect us from the torment of the Fire.",
    surah: 2,
    verse: 201,
    repeat,
    enableCounter,
  });
}

/** end of Al-Baqarah 2:250 — used in prayers-for-palestine */
export function baqarah_250(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    translit:
      "… Rabbanā afrigh ‛alaynā ṣabran wathabbit aqdāmanā wanṣurnā ‛alal qawmil kāfirīn.",
    translation:
      "… Our Lord, pour upon us patience and plant firmly our feet and give us victory over the disbelieving people.",
    surah: 2,
    verse: 250,
    repeat,
    enableCounter,
  });
}

/** end of Al-Baqarah 2:285-286 — used in khulasah-maghrib-ratib-al-attas */
export function baqarah_285_286(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "… غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ ٱلْمَصِيرُ ۝ لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَآ إِن نَّسِينَآ أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَآ إِصْرًا كَمَا حَمَلْتَهُۥ عَلَى ٱلَّذِينَ مِن قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِۦ ۖ وَٱعْفُ عَنَّا وَٱغْفِرْ لَنَا وَٱرْحَمْنَآ ۚ أَنتَ مَوْلَىٰنَا فَٱنصُرْنَا عَلَى ٱلْقَوْمِ ٱلْكَٰفِرِينَ",
    translit:
      "… Ghufrānaka rabbanā wa ilaykal maṣīr. Lā yukalliful lāhu nafsan illā wus’ahā, lahā mā kasabat wa ‘alaihā maktasabat, rabbanā lā tu-ākhidhnā in nasīnā aw akhṭa’nā, rabbanā walā taḥmil ‘alainā iṣran kamā ḥamaltahū ‘alal ladhīna min qablinā, rabbanā walā tuḥammilnā mā lā ṭāqata lanā bihī, wa’fu ‘annā, waghfir lanā, warḥamnā, anta mawlanā fanṣurnā ‘alal qawmil kāfirīn.",
    translation:
      "… [We seek] Your forgiveness, our Lord, and to You is the [final] destination. Allāh does not charge a soul except [with that within] its capacity. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. Our Lord, do not impose blame upon us if we have forgotten or erred. Our Lord, and lay not upon us a burden like that which You laid upon those before us. Our Lord, and burden us not with that which we have no ability to bear. And pardon us; and forgive us; and have mercy upon us. You are our protector, so give us victory over the disbelieving people.",
    surah: 2,
    verse: 285,
    repeat,
    enableCounter,
  });
}

/** end of Al-Baqarah 2:286 — used in khulasah-last-part-of-night-adhkar-before-dawn */
export function baqarah_286(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "… رَبَّنَا لَا تُؤَاخِذْنَآ إِن نَّسِينَآ أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَآ إِصْرًا كَمَا حَمَلْتَهُۥ عَلَى ٱلَّذِينَ مِن قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِۦ ۖ وَٱعْفُ عَنَّا وَٱغْفِرْ لَنَا وَٱرْحَمْنَآ ۚ أَنتَ مَوْلَىٰنَا فَٱنصُرْنَا عَلَى ٱلْقَوْمِ ٱلْكَٰفِرِينَ",
    translit:
      "… Rabbanā lā tu'ākhidhnā in nasīnā aw akhṭa'nā, rabbanā walā taḥmil ‛alaynā iṣran kamā ḥamaltahū ‛alalladhīna min qablinā, rabbanā walā tuḥammilnā mā lā ṭāqata lanā bihī, wa‛fu ‛annā, waghfir lanā, warḥamnā, anta mawlanā fanṣurnā ‛alal qawmil kāfirīn.",
    translation:
      "… Our Lord, do not impose blame upon us if we have forgotten or erred. Our Lord, and lay not upon us a burden like that which You laid upon those before us. Our Lord, and burden us not with that which we have no ability to bear. And pardon us; and forgive us; and have mercy upon us. You are our protector, so give us victory over the disbelieving people.",
    surah: 2,
    verse: 286,
    repeat,
    enableCounter,
  });
}

/** start of Aal-Imran 3:19 — used in khulasah-friday-opening-supplications */
export function imran_19(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "إِنَّ ٱلدِّينَ عِندَ ٱللَّهِ ٱلْإِسْلَٰمُ …",
    translit: "Innad dīna ‛indallāhil islām …",
    translation: "Indeed, the religion in the sight of Allāh is Islām …",
    surah: 3,
    verse: 19,
    repeat,
    enableCounter,
  });
}

/** end of Aal-Imran 3:45 — used in khulasah-dhuhr-adhkar */
export function imran_45(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… وَجِيهًا فِى ٱلدُّنْيَا وَالآخِرَةِ وَمِنَ ٱلْمُقَرَّبِينَ",
    translit: "… Wajīhan fiddunyā wal ākhirati  wa minal muqarrabīn.",
    translation:
      "… Held in honour in this world and in the Hereafter, and he will be one of those who are granted nearness to Allāh.",
    surah: 3,
    verse: 45,
    repeat,
    enableCounter,
  });
}

/** end of Aal-Imran 3:147 — used in prayers-for-palestine */
export function imran_147(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "… رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    translit:
      "… Rabbanā ighfir lanā dhunūbanā wa isrāfanā fī amrinā wathabbit aqdāmanā wanṣurnā ‛alal qawmil kāfirīn.",
    translation:
      "… Our Lord, forgive us our sins and the excess [committed] in our affairs and plant firmly our feet and give us victory over the disbelieving people.",
    surah: 3,
    verse: 147,
    repeat,
    enableCounter,
  });
}

/** end of An-Nisa 4:64 — used in khulasah-last-part-of-night-adhkar-on-waking-up, visiting-the-beloved */
export function nisa_64(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "… وَلَوْ أَنَّهُمْ إِذ ظَّلَمُوٓا۟ أَنفُسَهُمْ جَآءُوكَ فَٱسْتَغْفَرُوا۟ ٱللَّهَ وَٱسْتَغْفَرَ لَهُمُ ٱلرَّسُولُ لَوَجَدُوا۟ ٱللَّهَ تَوَّابًا رَّحِيمًا",
    translit:
      "… Wa law annahum idhẓalamū anfusahum jā'ūka fastaghfarul lāha wastaghfara lahumurrasūlu lawajadullāha tawwābar raḥīmā.",
    translation:
      "… If they had come to you (O Prophet) and sought forgiveness from Allāh whenever they wronged themselves, and (you) the Messenger had prayed for forgiveness for them, they would have found that Allāh is Oft-Forgiving, Most Merciful.",
    surah: 4,
    verse: 64,
    repeat,
    enableCounter,
  });
}

/** start of Al-An'am 6:79 — used in khulasah-dhuhr-adhkar */
export function an_am_79(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "وَجَّهْتُ وَجْهِىَ لِلَّذِى فَطَرَ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ …",
    translit: "Wajjahtu wajhiya lilladhī faṭaras samāwāti wal'arḍ …",
    translation:
      '"I have turned my face with single-minded devotion, towards Him Who has created the Heavens and the earth." …',
    surah: 6,
    verse: 79,
    repeat,
    enableCounter,
  });
}

/** start of Al-An'am 6:153 — used in salawat-compilations-majma-al-lataif-4---Monday */
export function an_am_153(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "وَأَنَّ هَٰذَا صِرَٰطِى مُسْتَقِيمًا …",
    translit: "Wa anna hādhā ṣirāṭī mustaqīmā …",
    translation: "And, [moreover], this is My path, which is straight …",
    surah: 6,
    verse: 153,
    repeat,
    enableCounter,
  });
}

/** middle of Al-A'raf 7:43 — used in khulasah-various-supplications-duas-for-travel */
export function a_raf_43(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… ٱلْحَمْدُ لِلَّهِ ٱلَّذِى هَدَىٰنَا لِهَٰذَا وَمَا كُنَّا لِنَهْتَدِىَ لَوْلَآ أَنْ هَدَىٰنَا ٱللَّهُ …",
    translit:
      "… Alḥamdu lillāhilladhī hadānā lihādhā wa mā kunnā linahtadiya lawlā an hadānallāhu …",
    translation:
      "… All Praise belongs to Allāh, Who has guided us to this. Had Allāh not guided us, we would never have found the way …",
    surah: 7,
    verse: 43,
    repeat,
    enableCounter,
  });
}

/** end of At-Tawbah 9:128 — used in salawat-compilations-majma-al-lataif-4---Monday */
export function tawbah_128(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… حَرِيصٌ عَلَيْكُم بِٱلْمُؤْمِنِينَ رَءُوفٌ رَّحِيمٌ",
    translit: "… Ḥarīṣun ‛alaykum bilmu’minīna ra’ūfur raḥīm.",
    translation:
      "… [he is] concerned over you [i.e., your guidance] and to the believers is kind and merciful.",
    surah: 9,
    verse: 128,
    repeat,
    enableCounter,
  });
}

/** end of At-Tawbah 9:129 — used in khulasah-after-fajr-wird-latif */
export function tawbah_129(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… حَسْبِىَ ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ ٱلْعَرْشِ ٱلْعَظِيم",
    translit:
      "… Ḥasbī Allāhu lā ilāha illā Huwa ʿalayhi tawakkaltu wa Huwa Rabb ul-ʿarsh il-ʿaẓīm.",
    translation:
      "… Allah is enough for me: there is no god but Him; I put my trust in Him; He is Lord of the Mighty Throne.",
    surah: 9,
    verse: 129,
    repeat,
    enableCounter,
  });
}

/** end of Al-Kahf 18:10 — used in salawat-compilations-the-garden-of-love */
export function kahf_10(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… رَبَّنَآ ءَاتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا",
    translit:
      "… Rabbanā ātinā min ladunka raḥmatan wahayyi’ lanā min amrinā rashadā.",
    translation:
      "… O our Lord! Grant us a mercy from You, and grant us rectitude in our affair.",
    surah: 18,
    verse: 10,
    repeat,
    enableCounter,
  });
}

/** end of Al-Anbiya 21:87 — used in blessed-occasions-rajab-istighfar, dalail-khayrat-6---Saturday */
export function anbiya_87(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… لَا إِلَٰهَ إِلَّا أَنتَ سُبْحَٰنَكَ إِنِّى كُنتُ مِنَ ٱلظَّٰلِمِينَ",
    translit: "… lā ilāha illā anta subḥānaka innī kuntu minaẓ ẓālimīna.",
    translation:
      "… there is no deity but You, transcendent are You, truly I am amongst the wrongdoers.",
    surah: 21,
    verse: 87,
    repeat,
    enableCounter,
  });
}

/** start of Al-Qasas 28:85 — used in khulasah-various-supplications-duas-for-travel, salawat-compilations-the-garden-of-love */
export function qasas_85(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "إِنَّ ٱلَّذِى فَرَضَ عَلَيْكَ ٱلْقُرْءَانَ لَرَآدُّكَ إِلَىٰ مَعَادٍ …",
    translit: "Innalladhī faraḍa ‘alaykal qur’āna larādduka ilā ma‘ād …",
    translation:
      "Verily, He Who gave you the Qur’ān will bring you back to the Place of Return …",
    surah: 28,
    verse: 85,
    repeat,
    enableCounter,
  });
}

/** end of Al-Ahzab 33:33 — used in dalail-khayrat-allahs-most-beautiful-names */
export function ahzab_33(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… إِنَّمَا يُرِيدُ اللَّهُ لِيُذْهِبَ عَنكُمُ الرِّجْسَ أَهْلَ الْبَيْتِ وَيُطَهِّرَكُمْ تَطْهِيرًا",
    translit:
      "… innamā yurīduLlāhu liyudh-hiba ʿankumur rijsa ahlal bayti wa yuṭahhirakum taṭhīran.",
    translation:
      "… Allah desires to remove all impurity from you, People of the House, and to purify you completely.",
    surah: 33,
    verse: 33,
    repeat,
    enableCounter,
  });
}

/** end of Al-Ahzab 33:69 — used in khulasah-dhuhr-adhkar */
export function ahzab_69(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… وَكَانَ عِندَ ٱللَّهِ وَجِيهًا",
    translit: "… Wa kāna ‛indallāhi wajīhā.",
    translation: "… And he was honourable in the sight of Allāh.",
    surah: 33,
    verse: 69,
    repeat,
    enableCounter,
  });
}

/** end of Ghafir 40:44 — used in khulasah-after-fajr-wird-of-imam-an-nawawi, prayers-for-palestine */
export function ghafir_44(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… وَأُفَوِّضُ أَمْرِىٓ إِلَى ٱللَّهِ ۚ إِنَّ ٱللَّهَ بَصِيرٌۢ بِٱلْعِبَادِ",
    translit: "… Wa ufawwiḍu amrī ilallāh, innallāha baṣīrum bil ‛ibād.",
    translation:
      "… and I entrust my affair to Allāh. Indeed, Allāh is Seeing of [His] servants.",
    surah: 40,
    verse: 44,
    repeat,
    enableCounter,
  });
}

/** end of Az-Zukhruf 43:13 — used in khulasah-various-supplications-duas-for-travel */
export function zukhruf_13(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… سُبْحَٰنَ ٱلَّذِى سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُۥ مُقْرِنِينَ",
    translit:
      "… Subḥānalladhī sakh-khara lanā hādhā wa mā kunnā lahū muqrinīna.",
    translation:
      "… Glory to Him Who has subjected these (creatures) to us; we would never on our own have accomplished it.",
    surah: 43,
    verse: 13,
    repeat,
    enableCounter,
  });
}

/** start of Al-Fath 48:10 — used in visiting-the-beloved */
export function fath_10(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "إِنَّ ٱلَّذِينَ يُبَايِعُونَكَ إِنَّمَا يُبَايِعُونَ ٱللَّهَ يَدُ ٱللَّهِ فَوْقَ أَيْدِيهِمْ …",
    translit:
      "Inna alladhīna yubāyi‛ūnaka innamā yubāyi‛ūna Allāha yadu Allāhi fawqa aydīhim …",
    translation:
      "Indeed, those who pledge allegiance to you, [O Beloved], are actually pledging allegiance to Allah. The hand of Allah is over theirs …",
    surah: 48,
    verse: 10,
    repeat,
    enableCounter,
  });
}

/** end of Al-Hashr 59:10 — used in dalail-khayrat-4---Thursday */
export function hashr_10(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "… اغْفِرْ لَنَا وَلِإِخْوَٰنِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَٰنِ وَلَا تَجْعَلْ فِى قُلُوبِنَا غِلًّا لِّلَّذِينَ ءَامَنُواْ رَبَّنَآ إِنَّكَ رَؤُوفٌ رَّحِيمٌ",
    translit:
      "… waghfīrlanā wa li ikhwānalladhīna sabaqūna bil īmani walā tajʿal fī qulūbinā ghillan lilladhīna āmanū. Rabbanā innaka raʾūfun raḥīm.",
    translation:
      "… and forgive us and our brothers who preceded us in faith, and do not place rancour in our hearts towards those who believe, Our Lord. You are Compassionate, Merciful.",
    surah: 59,
    verse: 10,
    repeat,
    enableCounter,
  });
}

/** end of Al-Hashr 59:24 — used in khulasah-last-part-of-night-adhkar-before-dawn */
export function hashr_24(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "… لَهُ ٱلْأَسْمَآءُ ٱلْحُسْنَىٰ ۚ يُسَبِّحُ لَهُۥ مَا فِى ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ ۖ وَهُوَ ٱلْعَزِيزُ ٱلْحَكِيمُ",
    translit:
      "… Lahul asmā’ul ḥusnā, yusabbiḥu lahū mā fissamāwāti wal’arḍ, wa huwal ‛azīzul ḥakīm.",
    translation:
      "… to Him belong the best names. Whatever is in the heavens and earth is exalting Him. And He is the Exalted in Might, the Wise.",
    surah: 59,
    verse: 24,
    repeat,
    enableCounter,
  });
}

/** middle of As-Saff 61:13-14 — used in khulasah-dhuhr-adhkar */
export function saff_13_14(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "… نَصْرٌ مِّنَ ٱللَّهِ وَفَتْحٌ قَرِيبٌ ۗ وَبَشِّرِ ٱلْمُؤْمِنِينَ ۝ يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ كُونُوٓا۟ أَنصَارَ ٱللَّهِ كَمَا قَالَ عِيسَى ٱبْنُ مَرْيَمَ لِلْحَوَارِيِّـۧنَ مَنْ أَنصَارِىٓ إِلَى ٱللَّهِ ۖ قَالَ ٱلْحَوَارِيُّونَ نَحْنُ أَنصَارُ ٱللَّهِ …",
    translit:
      "…naṣrum minallāhi wa fatḥun qarīb, wa bash-shiril mu'minīn. Yā ayyuhalladhīna āmanū kūnū anṣārallāhi kamā qāla ‛īsabnu maryama lil ḥawāriyyīna man anṣārī ilallāh, qālal ḥawāriyyūna naḥnu anṣārullāh…",
    translation:
      '… help from Allāh (against your enemies) and an imminent victory; and give glad tidings (O Prophet) to the believers. O you who believe, be Allāh\'s Helpers as Jesus, son of Mary, said to the desciples: "Who will be my helpers in the cause of Allah? They said: "We are Allāh\'s helpers..." …',
    surah: 61,
    verse: 13,
    repeat,
    enableCounter,
  });
}
