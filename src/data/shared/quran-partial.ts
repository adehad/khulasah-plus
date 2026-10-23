/**
 * Partial Qur'anic verses quoted inside duas and adhkar.
 * An ellipsis marks the end of the verse that is cut off; `verse` is the verse the quote starts in.
 * Each is a factory so a page can set its own repeat without sharing a mutable instance.
 */
import {
  QuranDhikrEntryModel,
  QuranEntryModel,
  QuranModel,
} from "@/models/recitation";

/** end of Al-Baqarah 2:127 — used in khulasah-after-every-prayer-adkhar */
export function baqarah_127(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… رَبَّنَا تَقَبَّلۡ مِنَّآۖ إِنَّكَ أَنتَ ٱلسَّمِيعُ ٱلۡعَلِيمُ",
    translit: "… Rabbanā taqabbal minnā innaka antas samī‛ul ‛alīm.",
    translation:
      "… Our Lord, accept [this] from us. Indeed, You are the Hearing, the Knowing.",
    surah: 2,
    verse: 127,
    repeat,
    enableCounter,
  });
}

/** end of Al-Baqarah 2:128 — used in khulasah-after-every-prayer-adkhar, khulasah-maghrib-ratib-al-haddad */
export function baqarah_128(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… وَتُبۡ عَلَيۡنَآۖ إِنَّكَ أَنتَ ٱلتَّوَّابُ ٱلرَّحِيمُ",
    translit: "… wa tub ‛alaynā innaka antat tawwābur raḥīm.",
    translation:
      "… and accept our repentance. Indeed, You are the Accepting of Repentance, the Merciful.",
    surah: 2,
    verse: 128,
    repeat,
    enableCounter,
  });
}

/** start of Al-Baqarah 2:186 — used in salawat-compilations-majma-al-lataif-6---Wednesday */
export function baqarah_186(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌۖ أُجِيبُ دَعۡوَةَ ٱلدَّاعِ إِذَا دَعَانِۖ …",
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

/** end of Al-Baqarah 2:201 — used in khulasah-last-part-of-night-adhkar-before-dawn, visiting-the-beloved, dua-khatm-al-quran-al-karim */
export function baqarah_201(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… رَبَّنَآ ءَاتِنَا فِي ٱلدُّنۡيَا حَسَنَةٗ وَفِي ٱلۡأٓخِرَةِ حَسَنَةٗ وَقِنَا عَذَابَ ٱلنَّارِ",
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
    arabic: "… رَبَّنَآ أَفۡرِغۡ عَلَيۡنَا صَبۡرٗا وَثَبِّتۡ أَقۡدَامَنَا وَٱنصُرۡنَا عَلَى ٱلۡقَوۡمِ ٱلۡكَٰفِرِينَ",
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

/** end of Al-Baqarah 2:256 — used in khulasah-after-fajr-wird-latif */
export function baqarah_256(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… بِٱلۡعُرۡوَةِ ٱلۡوُثۡقَىٰ لَا ٱنفِصَامَ لَهَاۗ وَٱللَّهُ سَمِيعٌ عَلِيمٌ",
    translit: "… bil ‛urwatil wuthqā lanfiṣāma lahā wallāhu samī‛un ‛alīm.",
    translation:
      "… the most trustworthy handhold with no break in it. And Allāh is Hearing and Knowing.",
    surah: 2,
    verse: 256,
    repeat,
    enableCounter,
  });
}

/** end of Al-Baqarah 2:285, then 2:286, one entry per verse — used in khulasah-maghrib-ratib-al-attas */
export function baqarah_285_286(repeat = 1, enableCounter?: boolean) {
  return [
    new QuranDhikrEntryModel({
      arabic: "… غُفۡرَانَكَ رَبَّنَا وَإِلَيۡكَ ٱلۡمَصِيرُ",
      translit: "… Ghufrānaka rabbanā wa ilaykal maṣīr.",
      translation:
        "… [We seek] Your forgiveness, our Lord, and to You is the [final] destination.",
      verse: 285,
      surah: 2,
      repeat,
      enableCounter,
    }),
    new QuranDhikrEntryModel({
      arabic:
        "لَا يُكَلِّفُ ٱللَّهُ نَفۡسًا إِلَّا وُسۡعَهَاۚ لَهَا مَا كَسَبَتۡ وَعَلَيۡهَا مَا ٱكۡتَسَبَتۡۗ رَبَّنَا لَا تُؤَاخِذۡنَآ إِن نَّسِينَآ أَوۡ أَخۡطَأۡنَاۚ رَبَّنَا وَلَا تَحۡمِلۡ عَلَيۡنَآ إِصۡرٗا كَمَا حَمَلۡتَهُۥ عَلَى ٱلَّذِينَ مِن قَبۡلِنَاۚ رَبَّنَا وَلَا تُحَمِّلۡنَا مَا لَا طَاقَةَ لَنَا بِهِۦۖ وَٱعۡفُ عَنَّا وَٱغۡفِرۡ لَنَا وَٱرۡحَمۡنَآۚ أَنتَ مَوۡلَىٰنَا فَٱنصُرۡنَا عَلَى ٱلۡقَوۡمِ ٱلۡكَٰفِرِينَ",
      translit:
        "Lā yukallifullāhu nafsan illā wus‛ahā, lahā mā kasabat wa ‛alayhā maktasabat, rabbanā lā tu’ākhidhnā in nasīnā aw akhṭa’nā, rabbanā walā taḥmil ‛alaynā iṣran kamā ḥamaltahū ‛alalladhīna min qablinā, rabbanā walā tuḥammilnā mā lā ṭāqata lanā bihī, wa‛fu ‛annā, waghfir lanā, warḥamnā, anta mawlānā fanṣurnā ‛alal qawmil kāfirīn.",
      translation:
        'Allāh does not charge a soul except [with that within] its capacity. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. "Our Lord, do not impose blame upon us if we have forgotten or erred. Our Lord, and lay not upon us a burden like that which You laid upon those before us. Our Lord, and burden us not with that which we have no ability to bear. And pardon us; and forgive us; and have mercy upon us. You are our protector, so give us victory over the disbelieving people."',
      verse: 286,
      surah: 2,
      repeat,
      enableCounter,
    }),
  ];
}

/** end of Al-Baqarah 2:286 — used in khulasah-last-part-of-night-adhkar-before-dawn */
export function baqarah_286(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "… رَبَّنَا لَا تُؤَاخِذۡنَآ إِن نَّسِينَآ أَوۡ أَخۡطَأۡنَاۚ رَبَّنَا وَلَا تَحۡمِلۡ عَلَيۡنَآ إِصۡرٗا كَمَا حَمَلۡتَهُۥ عَلَى ٱلَّذِينَ مِن قَبۡلِنَاۚ رَبَّنَا وَلَا تُحَمِّلۡنَا مَا لَا طَاقَةَ لَنَا بِهِۦۖ وَٱعۡفُ عَنَّا وَٱغۡفِرۡ لَنَا وَٱرۡحَمۡنَآۚ أَنتَ مَوۡلَىٰنَا فَٱنصُرۡنَا عَلَى ٱلۡقَوۡمِ ٱلۡكَٰفِرِينَ",
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
    arabic: "إِنَّ ٱلدِّينَ عِندَ ٱللَّهِ ٱلۡإِسۡلَٰمُۗ …",
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
    arabic: "… وَجِيهٗا فِي ٱلدُّنۡيَا وَٱلۡأٓخِرَةِ وَمِنَ ٱلۡمُقَرَّبِينَ",
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
      "… رَبَّنَا ٱغۡفِرۡ لَنَا ذُنُوبَنَا وَإِسۡرَافَنَا فِيٓ أَمۡرِنَا وَثَبِّتۡ أَقۡدَامَنَا وَٱنصُرۡنَا عَلَى ٱلۡقَوۡمِ ٱلۡكَٰفِرِينَ",
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

/** end of Aal-Imran 3:193 — used in visiting-the-beloved */
export function imran_193(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… ذُنُوبَنَا وَكَفِّرۡ عَنَّا سَيِّـَٔاتِنَا وَتَوَفَّنَا مَعَ ٱلۡأَبۡرَارِ",
    translit:
      "… dhunūbanā wa kaffir ‛annā sayyi’ātinā wa tawaffanā ma‛al abrār.",
    translation:
      "… our sins and remove from us our misdeeds and cause us to die among the righteous.",
    surah: 3,
    verse: 193,
    repeat,
    enableCounter,
  });
}

/** end of An-Nisa 4:64 — used in khulasah-last-part-of-night-adhkar-on-waking-up, visiting-the-beloved */
export function nisa_64(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "… ٱللَّهِۚ وَلَوۡ أَنَّهُمۡ إِذ ظَّلَمُوٓاْ أَنفُسَهُمۡ جَآءُوكَ فَٱسۡتَغۡفَرُواْ ٱللَّهَ وَٱسۡتَغۡفَرَ لَهُمُ ٱلرَّسُولُ لَوَجَدُواْ ٱللَّهَ تَوَّابٗا رَّحِيمٗا",
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

/** end of An-Nisa 4:69 — used in dalail-khayrat-4---Thursday */
export function nisa_69(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… مِّنَ ٱلنَّبِيِّـۧنَ وَٱلصِّدِّيقِينَ وَٱلشُّهَدَآءِ وَٱلصَّٰلِحِينَۚ وَحَسُنَ أُوْلَٰٓئِكَ رَفِيقٗا",
    translit:
      "… minan nabiyyīna waṣ ṣiddīqīna wash shuhadā’i waṣ ṣāliḥīna wa ḥasuna ulā’ika rafīqā.",
    translation:
      "… among the prophets, the steadfast affirmers of truth, the martyrs and the righteous. And excellent are those as companions.",
    surah: 4,
    verse: 69,
    repeat,
    enableCounter,
  });
}

/** start of Al-An'am 6:79 — used in khulasah-dhuhr-adhkar */
export function an_am_79(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… وَجَّهۡتُ وَجۡهِيَ لِلَّذِي فَطَرَ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَ …",
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
    arabic: "وَأَنَّ هَٰذَا صِرَٰطِي مُسۡتَقِيمٗا …",
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
    arabic: "… ٱلۡحَمۡدُ لِلَّهِ ٱلَّذِي هَدَىٰنَا لِهَٰذَا وَمَا كُنَّا لِنَهۡتَدِيَ لَوۡلَآ أَنۡ هَدَىٰنَا ٱللَّهُۖ …",
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
    arabic: "… حَرِيصٌ عَلَيۡكُم بِٱلۡمُؤۡمِنِينَ رَءُوفٞ رَّحِيمٞ",
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
    arabic: "… حَسۡبِيَ ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَۖ عَلَيۡهِ تَوَكَّلۡتُۖ وَهُوَ رَبُّ ٱلۡعَرۡشِ ٱلۡعَظِيمِ",
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

/** end of Hud 11:56 — used in khulasah-after-fajr-wird-of-imam-an-nawawi */
export function hud_56(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… إِنَّ رَبِّي عَلَىٰ صِرَٰطٖ مُّسۡتَقِيمٖ",
    translit: "… inna rabbī ‛alā ṣirāṭim mustaqīm.",
    translation: "… Indeed, my Lord is on a path [that is] straight.",
    surah: 11,
    verse: 56,
    repeat,
    enableCounter,
  });
}

/** end of Hud 11:73 — used in dalail-khayrat-allahs-most-beautiful-names */
export function hud_73(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… رَحۡمَتُ ٱللَّهِ وَبَرَكَٰتُهُۥ عَلَيۡكُمۡ أَهۡلَ ٱلۡبَيۡتِۚ إِنَّهُۥ حَمِيدٞ مَّجِيدٞ",
    translit:
      "… Raḥmatullāhi wa barakātuhū ‛alaykum ahlal bayti innahū ḥamīdum majīd.",
    translation:
      "… May the mercy of Allāh and His blessings be upon you, people of the house. Indeed, He is Praiseworthy and Honorable.",
    surah: 11,
    verse: 73,
    repeat,
    enableCounter,
  });
}

/** end of Al-Hijr 15:87 — used in dalail-khayrat-7---Sunday */
export function hijr_87(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… سَبۡعٗا مِّنَ ٱلۡمَثَانِي وَٱلۡقُرۡءَانَ ٱلۡعَظِيمَ",
    translit: "… sab‛an minal mathānī wal qur’ānal ‛aẓīm.",
    translation: "… seven of the often repeated [verses] and the great Qur’ān.",
    surah: 15,
    verse: 87,
    repeat,
    enableCounter,
  });
}

/** end of Al-Kahf 18:10 — used in salawat-compilations-the-garden-of-love */
export function kahf_10(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… رَبَّنَآ ءَاتِنَا مِن لَّدُنكَ رَحۡمَةٗ وَهَيِّئۡ لَنَا مِنۡ أَمۡرِنَا رَشَدٗا",
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

/** Al-Anbiya 21:20 — used in dalail-khayrat-7---Sunday */
export function anbiya_20(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "يُسَبِّحُونَ ٱلَّيۡلَ وَٱلنَّهَارَ لَا يَفۡتُرُونَ",
    translit: "Yusabbiḥūnal layla wan nahāra lā yafturūn.",
    translation: "They exalt [Him] night and day [and] do not slacken.",
    surah: 21,
    verse: 20,
    repeat,
    enableCounter,
  });
}

/** end of Al-Anbiya 21:87 — used in blessed-occasions-rajab-istighfar, dalail-khayrat-6---Saturday, khulasah-last-part-of-night-adhkar-before-dawn */
export function anbiya_87(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… ٱلظُّلُمَٰتِ أَن لَّآ إِلَٰهَ إِلَّآ أَنتَ سُبۡحَٰنَكَ إِنِّي كُنتُ مِنَ ٱلظَّٰلِمِينَ",
    translit: "… lā ilāha illā anta subḥānaka innī kuntu minaẓ ẓālimīna.",
    translation:
      "… there is no deity but You, transcendent are You, truly I am amongst the wrongdoers.",
    surah: 21,
    verse: 87,
    repeat,
    enableCounter,
  });
}

/** end of Al-Mu'minun 23:97 — used in khulasah-after-fajr-wird-latif */
export function mu_minun_97(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… رَّبِّ أَعُوذُ بِكَ مِنۡ هَمَزَٰتِ ٱلشَّيَٰطِينِ",
    translit: "… rabbi a‛ūdhu bika min hamazātish shayāṭīn.",
    translation:
      "… my Lord, I seek refuge in You from the incitements of the devils.",
    surah: 23,
    verse: 97,
    repeat,
    enableCounter,
  });
}

/** Al-Mu'minun 23:98 — used in khulasah-after-fajr-wird-latif */
export function mu_minun_98(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "وَأَعُوذُ بِكَ رَبِّ أَن يَحۡضُرُونِ",
    translit: "Wa a‛ūdhu bika rabbi ay yaḥḍurūn.",
    translation:
      "And I seek refuge in You, my Lord, lest they be present with me.",
    surah: 23,
    verse: 98,
    repeat,
    enableCounter,
  });
}

/** middle of An-Nur 24:61 — used in khulasah-various-supplications-duas-for-travel */
export function nur_61(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… تَحِيَّةٗ مِّنۡ عِندِ ٱللَّهِ مُبَٰرَكَةٗ طَيِّبَةٗۚ …",
    translit: "… taḥiyyatam min ‛indillāhi mubārakatan ṭayyibatan …",
    translation: "… a greeting from Allāh, blessed and good …",
    surah: 24,
    verse: 61,
    repeat,
    enableCounter,
  });
}

/** start of Al-Qasas 28:85 — used in khulasah-various-supplications-duas-for-travel, salawat-compilations-the-garden-of-love */
export function qasas_85(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "إِنَّ ٱلَّذِي فَرَضَ عَلَيۡكَ ٱلۡقُرۡءَانَ لَرَآدُّكَ إِلَىٰ مَعَادٖۚ …",
    translit: "Innalladhī faraḍa ‘alaykal qur’āna larādduka ilā ma‘ād …",
    translation:
      "Verily, He Who gave you the Qur’ān will bring you back to the Place of Return …",
    surah: 28,
    verse: 85,
    repeat,
    enableCounter,
  });
}

/** start of Ar-Rum 30:25 — used in dalail-khayrat-allahs-most-beautiful-names */
export function rum_25(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "وَمِنۡ ءَايَٰتِهِۦٓ أَن تَقُومَ ٱلسَّمَآءُ وَٱلۡأَرۡضُ بِأَمۡرِهِۦۚ …",
    translit: "Wa min āyātihī an taqūmas samā’u wal arḍu bi’amrihī …",
    translation:
      "And of His signs is that the heaven and earth stand [i.e., remain] by His command …",
    surah: 30,
    verse: 25,
    repeat,
    enableCounter,
  });
}

/** end of Al-Ahzab 33:33 — used in dalail-khayrat-allahs-most-beautiful-names */
export function ahzab_33(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… إِنَّمَا يُرِيدُ ٱللَّهُ لِيُذۡهِبَ عَنكُمُ ٱلرِّجۡسَ أَهۡلَ ٱلۡبَيۡتِ وَيُطَهِّرَكُمۡ تَطۡهِيرٗا",
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
    arabic: "… وَكَانَ عِندَ ٱللَّهِ وَجِيهٗا",
    translit: "… Wa kāna ‛indallāhi wajīhā.",
    translation: "… And he was honourable in the sight of Allāh.",
    surah: 33,
    verse: 69,
    repeat,
    enableCounter,
  });
}

/** middle of Az-Zumar 39:46 — used in dalail-khayrat-8---Monday */
export function zumar_46(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… ٱللَّهُمَّ فَاطِرَ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ عَٰلِمَ ٱلۡغَيۡبِ وَٱلشَّهَٰدَةِ …",
    translit:
      "… allāhumma fāṭiras samāwāti wal arḍi ‛ālimal ghaybi wash shahādah …",
    translation:
      "… O Allāh, Creator of the heavens and the earth, Knower of the unseen and the witnessed …",
    surah: 39,
    verse: 46,
    repeat,
    enableCounter,
  });
}

/** end of Ghafir 40:44 — used in khulasah-after-fajr-wird-of-imam-an-nawawi, prayers-for-palestine */
export function ghafir_44(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… وَأُفَوِّضُ أَمۡرِيٓ إِلَى ٱللَّهِۚ إِنَّ ٱللَّهَ بَصِيرُۢ بِٱلۡعِبَادِ",
    translit: "… Wa ufawwiḍu amrī ilallāh, innallāha baṣīrum bil ‛ibād.",
    translation:
      "… and I entrust my affair to Allāh. Indeed, Allāh is Seeing of [His] servants.",
    surah: 40,
    verse: 44,
    repeat,
    enableCounter,
  });
}

/** end of Ash-Shura 42:11 — used in dalail-khayrat-allahs-most-beautiful-names */
export function shura_11(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… لَيۡسَ كَمِثۡلِهِۦ شَيۡءٞۖ وَهُوَ ٱلسَّمِيعُ ٱلۡبَصِيرُ",
    translit: "… laysa kamithlihī shay’un wa huwas samī‛ul baṣīr.",
    translation:
      "… There is nothing like unto Him, and He is the Hearing, the Seeing.",
    surah: 42,
    verse: 11,
    repeat,
    enableCounter,
  });
}

/** end of Az-Zukhruf 43:13 — used in khulasah-various-supplications-duas-for-travel */
export function zukhruf_13(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… سُبۡحَٰنَ ٱلَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُۥ مُقۡرِنِينَ",
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
    arabic: "إِنَّ ٱلَّذِينَ يُبَايِعُونَكَ إِنَّمَا يُبَايِعُونَ ٱللَّهَ يَدُ ٱللَّهِ فَوۡقَ أَيۡدِيهِمۡۚ …",
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

/** middle of Al-Fath 48:29 — used in salawat-compilations-majma-al-lataif-7---Thursday */
export function fath_29(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… سِيمَاهُمۡ فِي وُجُوهِهِم مِّنۡ أَثَرِ ٱلسُّجُودِۚ …",
    translit: "… sīmāhum fī wujūhihim min atharis sujūd …",
    translation:
      "… their sign is in their faces from the effect of prostration [i.e., prayer] …",
    surah: 48,
    verse: 29,
    repeat,
    enableCounter,
  });
}

/** end of Qaf 50:35 — used in salawat-compilations-majma-al-lataif-4---Monday */
export function qaf_35(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… وَلَدَيۡنَا مَزِيدٞ",
    translit: "… wa ladaynā mazīd.",
    translation: "… and with Us is more.",
    surah: 50,
    verse: 35,
    repeat,
    enableCounter,
  });
}

/** end of Al-Hashr 59:10 — used in dalail-khayrat-4---Thursday */
export function hashr_10(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "… ٱغۡفِرۡ لَنَا وَلِإِخۡوَٰنِنَا ٱلَّذِينَ سَبَقُونَا بِٱلۡإِيمَٰنِ وَلَا تَجۡعَلۡ فِي قُلُوبِنَا غِلّٗا لِّلَّذِينَ ءَامَنُواْ رَبَّنَآ إِنَّكَ رَءُوفٞ رَّحِيمٌ",
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
      "… لَهُ ٱلۡأَسۡمَآءُ ٱلۡحُسۡنَىٰۚ يُسَبِّحُ لَهُۥ مَا فِي ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِۖ وَهُوَ ٱلۡعَزِيزُ ٱلۡحَكِيمُ",
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

/** middle of As-Saff 61:13, then 61:14 cut at its end, one entry per verse — used in khulasah-dhuhr-adhkar */
export function saff_13_14(repeat = 1, enableCounter?: boolean) {
  return [
    new QuranDhikrEntryModel({
      arabic: "… نَصۡرٞ مِّنَ ٱللَّهِ وَفَتۡحٞ قَرِيبٞۗ وَبَشِّرِ ٱلۡمُؤۡمِنِينَ",
      translit: "… naṣrum minallāhi wa fatḥun qarīb, wa bash-shiril mu'minīn.",
      translation:
        "… help from Allāh (against your enemies) and an imminent victory; and give glad tidings (O Prophet) to the believers.",
      verse: 13,
      surah: 61,
      repeat,
      enableCounter,
    }),
    new QuranDhikrEntryModel({
      arabic:
        "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ كُونُوٓاْ أَنصَارَ ٱللَّهِ كَمَا قَالَ عِيسَى ٱبۡنُ مَرۡيَمَ لِلۡحَوَارِيِّـۧنَ مَنۡ أَنصَارِيٓ إِلَى ٱللَّهِۖ قَالَ ٱلۡحَوَارِيُّونَ نَحۡنُ أَنصَارُ ٱللَّهِۖ …",
      translit:
        "Yā ayyuhalladhīna āmanū kūnū anṣārallāhi kamā qāla ‛īsabnu maryama lil ḥawāriyyīna man anṣārī ilallāh, qālal ḥawāriyyūna naḥnu anṣārullāh …",
      translation:
        'O you who believe, be Allāh\'s Helpers as Jesus, son of Mary, said to the desciples: "Who will be my helpers in the cause of Allah? They said: "We are Allāh\'s helpers..." …',
      verse: 14,
      surah: 61,
      repeat,
      enableCounter,
    }),
  ];
}

/** end of At-Talaq 65:12 — used in khulasah-after-fajr-wird-latif */
export function talaq_12(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… أَنَّ ٱللَّهَ عَلَىٰ كُلِّ شَيۡءٖ قَدِيرٞ وَأَنَّ ٱللَّهَ قَدۡ أَحَاطَ بِكُلِّ شَيۡءٍ عِلۡمَۢا",
    translit:
      "… annallāha ‛alā kulli shay’in qadīr wa annallāha qad aḥāṭa bikulli shay’in ‛ilmā.",
    translation:
      "… that Allāh is over all things competent and that Allāh has encompassed all things in knowledge.",
    surah: 65,
    verse: 12,
    repeat,
    enableCounter,
  });
}

/** end of At-Tahrim 66:6 — used in dalail-khayrat-7---Sunday */
export function tahrim_6(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… لَّا يَعۡصُونَ ٱللَّهَ مَآ أَمَرَهُمۡ وَيَفۡعَلُونَ مَا يُؤۡمَرُونَ",
    translit: "… lā ya‛ṣūnallāha mā amarahum wa yaf‛alūna mā yu’marūn.",
    translation:
      "… they do not disobey Allāh in what He commands them but do what they are commanded.",
    surah: 66,
    verse: 6,
    repeat,
    enableCounter,
  });
}

/** Al-Ikhlas 112:3 — used in dalail-khayrat-8---Monday */
export function ikhlas_3(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "لَمۡ يَلِدۡ وَلَمۡ يُولَدۡ",
    translit: "Lam yalid wa lam yūlad.",
    translation: "He neither begets nor is born,",
    surah: 112,
    verse: 3,
    repeat,
    enableCounter,
  });
}

/** Al-Ikhlas 112:4 — used in dalail-khayrat-8---Monday */
export function ikhlas_4(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "وَلَمۡ يَكُن لَّهُۥ كُفُوًا أَحَدُۢ",
    translit: "Wa lam yakun lahū kufuwan aḥad.",
    translation: "Nor is there to Him any equivalent.",
    surah: 112,
    verse: 4,
    repeat,
    enableCounter,
  });
}

// ---- verse selections recited as their own section ----

/** Al-Baqarah 2:137, one entry per verse */
export function baqarah_137(
  repeat = 1,
  instruction = "",
  basmallah = false,
  title = "Al-Baqarah",
) {
  return new QuranModel({
    title,
    surah: 2,
    entries: [
      new QuranEntryModel({
        arabic: "… فَسَيَكۡفِيكَهُمُ ٱللَّهُۚ وَهُوَ ٱلسَّمِيعُ ٱلۡعَلِيمُ",
        translit: "fa-sayakfīkahumu-llāhu wa huwa-s-samīʿu-l-ʿalīm",
        translation:
          "And Allah will be sufficient for you against them, and He is the Hearing, the Knowing.",
        verse: 137,
      }),
    ],
    instruction,
    basmallah,
    repeat,
  });
}

/** Al-A'raf 7:196, one entry per verse */
export function a_raf_196(
  repeat = 1,
  instruction = "",
  basmallah = false,
  title = "Al-A'ra",
) {
  return new QuranModel({
    title,
    surah: 7,
    entries: [
      new QuranEntryModel({
        arabic: "إِنَّ وَلِـِّۧيَ ٱللَّهُ ٱلَّذِي نَزَّلَ ٱلۡكِتَٰبَۖ وَهُوَ يَتَوَلَّى ٱلصَّٰلِحِينَ",
        translit:
          "inna waliyyiya-llāhu-lladhī nazzala-l-kitāba wa huwa yatawalla-ṣ-ṣāliḥīn",
        translation:
          "Indeed, my protector is Allah, who has sent down the Book; and He is an ally to the righteous.",
        verse: 196,
      }),
    ],
    instruction,
    basmallah,
    repeat,
  });
}

/** At-Tawbah 9:129, one entry per verse */
export function tawbah_129_section(
  repeat = 1,
  instruction = "",
  basmallah = false,
  title = "At-Tawbah",
) {
  return new QuranModel({
    title,
    surah: 9,
    entries: [
      new QuranEntryModel({
        arabic: "… حَسۡبِيَ ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَۖ عَلَيۡهِ تَوَكَّلۡتُۖ وَهُوَ رَبُّ ٱلۡعَرۡشِ ٱلۡعَظِيمِ",
        translit:
          "ḥasbiya-llāhu lā ilāha illā huwa ʿalayhi tawakkaltu wa huwa rabbu-l-ʿarshi-l-ʿaẓīm",
        translation:
          "Sufficient for me is Allah; there is no deity except Him. On Him I have relied, and He is the Lord of the Great Throne.",
        verse: 129,
      }),
    ],
    instruction,
    basmallah,
    repeat,
  });
}

/** Yusuf 12:64, one entry per verse */
export function yusuf_64(
  repeat = 1,
  instruction = "",
  basmallah = false,
  title = "Yusuf",
) {
  return new QuranModel({
    title,
    surah: 12,
    entries: [
      new QuranEntryModel({
        arabic: "… فَٱللَّهُ خَيۡرٌ حَٰفِظٗاۖ وَهُوَ أَرۡحَمُ ٱلرَّٰحِمِينَ",
        translit: "fa-llāhu khayrun ḥāfiẓan wa huwa arḥamu-r-rāḥimīn",
        translation:
          "For Allah is the best guardian, and He is the most merciful of the merciful.",
        verse: 64,
      }),
    ],
    instruction,
    basmallah,
    repeat,
  });
}

/** Taha 20:111, one entry per verse */
export function taha_111(
  repeat = 1,
  instruction = "",
  basmallah = false,
  title = "Taha",
) {
  return new QuranModel({
    title,
    surah: 20,
    entries: [
      new QuranEntryModel({
        arabic: "۞ وَعَنَتِ ٱلۡوُجُوهُ لِلۡحَيِّ ٱلۡقَيُّومِۖ وَقَدۡ خَابَ مَنۡ حَمَلَ ظُلۡمٗا",
        translit:
          "wa ʿanati-l-wujūhu li-l-ḥayyi-l-qayyūm, wa qad khāba man ḥamala ẓulmā",
        translation:
          "And faces shall be humbled before the Ever-Living, the Self-Sustaining. And he will have failed who carries injustice.",
        verse: 111,
      }),
    ],
    instruction,
    basmallah,
    repeat,
  });
}

/** Al-Mu'minun 23:115-118, one entry per verse */
export function mu_minun_115_118(
  repeat = 1,
  instruction = "",
  basmallah = false,
  title = "Al-Mu'minun",
) {
  return new QuranModel({
    title,
    surah: 23,
    entries: [
      new QuranEntryModel({
        arabic: "أَفَحَسِبۡتُمۡ أَنَّمَا خَلَقۡنَٰكُمۡ عَبَثٗا وَأَنَّكُمۡ إِلَيۡنَا لَا تُرۡجَعُونَ",
        translit:
          "Afaḥasibtum annamā khalaqnākum ʿabathan wa annakum ilaynā lā turjaʿūn.",
        translation:
          "Did you think We had created you in vain, and that you would not be brought back to Us?",
        verse: 115,
      }),
      new QuranEntryModel({
        arabic: "فَتَعَٰلَى ٱللَّهُ ٱلۡمَلِكُ ٱلۡحَقُّۖ لَآ إِلَٰهَ إِلَّا هُوَ رَبُّ ٱلۡعَرۡشِ ٱلۡكَرِيمِ",
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
    instruction,
    basmallah,
    repeat,
  });
}

/** An-Naml 27:1, one entry per verse */
export function naml_1(
  repeat = 1,
  instruction = "",
  basmallah = false,
  title = "An-Naml",
) {
  return new QuranModel({
    title,
    surah: 27,
    entries: [
      new QuranEntryModel({
        arabic: "طسٓۚ …",
        translit: "Ṭā Sīn",
        translation: "Ta Sin.",
        verse: 1,
      }),
    ],
    instruction,
    basmallah,
    repeat,
  });
}

/** Ar-Rum 30:17-19, one entry per verse */
export function rum_17_19(
  repeat = 1,
  instruction = "",
  basmallah = false,
  title = "Ar-Rum",
) {
  return new QuranModel({
    title,
    surah: 30,
    entries: [
      new QuranEntryModel({
        arabic: "فَسُبۡحَٰنَ ٱللَّهِ حِينَ تُمۡسُونَ وَحِينَ تُصۡبِحُونَ",
        translit: "Fasubḥān Allāhi ḥīna tumsūna wa ḥīna tuṣbiḥūn.",
        translation: "So celebrate God’s glory in the evening, in the morning—",
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
    instruction,
    basmallah,
    repeat,
  });
}

/** Al-Ahzab 33:11-12, one entry per verse */
export function ahzab_11_12(
  repeat = 1,
  instruction = "",
  basmallah = false,
  title = "Al-Ahzab",
) {
  return new QuranModel({
    title,
    surah: 33,
    entries: [
      new QuranEntryModel({
        arabic: "… ٱبۡتُلِيَ ٱلۡمُؤۡمِنُونَ وَزُلۡزِلُواْ زِلۡزَالٗا شَدِيدٗا",
        translit: "(Faqad)i-btuliya-l-mu'minūna wa zulzilū zilzālan shadīdan",
        translation:
          "(There,) the believers were tried and shaken with a mighty shaking.",
        verse: 11,
      }),
      new QuranEntryModel({
        arabic:
          "وَإِذۡ يَقُولُ ٱلۡمُنَٰفِقُونَ وَٱلَّذِينَ فِي قُلُوبِهِم مَّرَضٞ مَّا وَعَدَنَا ٱللَّهُ وَرَسُولُهُۥٓ إِلَّا غُرُورٗا",
        translit:
          "Wa idh yaqūlu-l-munāfiqūna wa-lladhīna fī qulūbihim maraḍun mā waʿadanā-llāhu wa rasūluhū illā ghurūran",
        translation:
          "And when the hypocrites and those in whose hearts is a disease said, ‘Allah and His Messenger did not promise us except delusion.’",
        verse: 12,
      }),
    ],
    instruction,
    basmallah,
    repeat,
  });
}

/** Al-Ahzab 33:56, one entry per verse */
export function ahzab_56(
  repeat = 1,
  instruction = "",
  basmallah = false,
  title = "Al-Ahzab",
) {
  return new QuranModel({
    title,
    surah: 33,
    entries: [
      new QuranEntryModel({
        arabic:
          "إِنَّ ٱللَّهَ وَمَلَٰٓئِكَتَهُۥ يُصَلُّونَ عَلَى ٱلنَّبِيِّۚ يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ صَلُّواْ عَلَيۡهِ وَسَلِّمُواْ تَسۡلِيمًا",
        translit:
          "Inna Allāha wa malā’ikatahu yuṣallūna ‘alā al-nabīyi yā ayyuhā alladhīna āmanū ṣallū ‘alayhi wa sallimū taslīman.",
        translation:
          "Indeed, Allah confers blessing upon the Prophet, and His angels [ask Him to do so]. O you who have believed, ask [Allah to confer] blessing upon him and ask [Allah to grant him] peace.",
        verse: 56,
      }),
    ],
    instruction,
    basmallah,
    repeat,
  });
}

/** Ya-Sin 36:1-9, one entry per verse */
export function ya_sin_1_9(
  repeat = 1,
  instruction = "",
  basmallah = false,
  title = "Ya-Sin",
) {
  return new QuranModel({
    title,
    surah: 36,
    entries: [
      new QuranEntryModel({
        arabic: "يسٓ",
        translit: "Yā Sīn",
        translation: "Ya Sin.",
        verse: 1,
      }),
      new QuranEntryModel({
        arabic: "وَٱلۡقُرۡءَانِ ٱلۡحَكِيمِ",
        translit: "wa-l-qur'āni-l-ḥakīm",
        translation: "By the wise Qur'an.",
        verse: 2,
      }),
      new QuranEntryModel({
        arabic: "إِنَّكَ لَمِنَ ٱلۡمُرۡسَلِينَ",
        translit: "innaka lamina-l-mursalīn",
        translation: "Indeed, you are from among the messengers.",
        verse: 3,
      }),
      new QuranEntryModel({
        arabic: "عَلَىٰ صِرَٰطٖ مُّسۡتَقِيمٖ",
        translit: "ʿalā ṣirāṭin mustaqīm",
        translation: "On a straight path.",
        verse: 4,
      }),
      new QuranEntryModel({
        arabic: "تَنزِيلَ ٱلۡعَزِيزِ ٱلرَّحِيمِ",
        translit: "tanzīla-l-ʿazīzi-r-raḥīm",
        translation: "A revelation of the Exalted in Might, the Merciful.",
        verse: 5,
      }),
      new QuranEntryModel({
        arabic: "لِتُنذِرَ قَوۡمٗا مَّآ أُنذِرَ ءَابَآؤُهُمۡ فَهُمۡ غَٰفِلُونَ",
        translit: "li-tundhira qawman mā undhira ābā'uhum fahum ghāfilūn",
        translation:
          "That you may warn a people whose forefathers were not warned, so they are unaware.",
        verse: 6,
      }),
      new QuranEntryModel({
        arabic: "لَقَدۡ حَقَّ ٱلۡقَوۡلُ عَلَىٰٓ أَكۡثَرِهِمۡ فَهُمۡ لَا يُؤۡمِنُونَ",
        translit: "laqad ḥaqqa-l-qawlu ʿalā aktharihim fahum lā yu'minūn",
        translation:
          "The word has come into effect upon most of them, so they do not believe.",
        verse: 7,
      }),
      new QuranEntryModel({
        arabic: "إِنَّا جَعَلۡنَا فِيٓ أَعۡنَٰقِهِمۡ أَغۡلَٰلٗا فَهِيَ إِلَى ٱلۡأَذۡقَانِ فَهُم مُّقۡمَحُونَ",
        translit:
          "innā jaʿalnā fī aʿnāqihim aghlālan fa-hiya ilā-l-adhqāni fahum muqmaḥūn",
        translation:
          "Indeed, We have put shackles on their necks, and they are to their chins, so they are with heads aloft.",
        verse: 8,
      }),
      new QuranEntryModel({
        arabic: "وَجَعَلۡنَا مِنۢ بَيۡنِ أَيۡدِيهِمۡ سَدّٗا وَمِنۡ خَلۡفِهِمۡ سَدّٗا فَأَغۡشَيۡنَٰهُمۡ فَهُمۡ لَا يُبۡصِرُونَ",
        translit:
          "wa jaʿalnā min bayni aydīhim saddan wa min khalfihim saddan fa-aghshaynāhum fahum lā yubṣirūn",
        translation:
          "And We have put before them a barrier and behind them a barrier and covered them, so they do not see.",
        verse: 9,
      }),
    ],
    instruction,
    basmallah,
    repeat,
  });
}

/** Ya-Sin 36:66-67, one entry per verse */
export function ya_sin_66_67(
  repeat = 1,
  instruction = "",
  basmallah = false,
  title = "Ya-Sin",
) {
  return new QuranModel({
    title,
    surah: 36,
    entries: [
      new QuranEntryModel({
        arabic: "وَلَوۡ نَشَآءُ لَطَمَسۡنَا عَلَىٰٓ أَعۡيُنِهِمۡ فَٱسۡتَبَقُواْ ٱلصِّرَٰطَ فَأَنَّىٰ يُبۡصِرُونَ",
        translit:
          "wa law nashā'u la-ṭamasnā ʿalā aʿyunihim fa-stabaqū-ṣ-ṣirāṭa fa-annā yubṣirūn",
        translation:
          "And if We willed, We could have obliterated their eyes, then they would race to the path, but how would they see?",
        verse: 66,
      }),
      new QuranEntryModel({
        arabic: "وَلَوۡ نَشَآءُ لَمَسَخۡنَٰهُمۡ عَلَىٰ مَكَانَتِهِمۡ فَمَا ٱسۡتَطَٰعُواْ مُضِيّٗا وَلَا يَرۡجِعُونَ",
        translit:
          "wa law nashā'u la-masakhnāhum ʿalā makānatihim fa-mā-staṭāʿū muḍiyyan wa lā yarjiʿūn",
        translation:
          "And if We willed, We could have transfigured them in their places, so they would not be able to proceed, nor would they return.",
        verse: 67,
      }),
    ],
    instruction,
    basmallah,
    repeat,
  });
}

/** As-Saffat 37:79-81, one entry per verse */
export function saffat_79_81(
  repeat = 1,
  instruction = "",
  basmallah = false,
  title = "As-Saffat",
) {
  return new QuranModel({
    title,
    surah: 37,
    entries: [
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
    instruction,
    basmallah,
    repeat,
  });
}

/** As-Saffat 37:180-182, one entry per verse */
export function saffat_180_182(
  repeat = 1,
  instruction = "",
  basmallah = false,
  title = "As-Saffat",
) {
  return new QuranModel({
    title,
    surah: 37,
    entries: [
      new QuranEntryModel({
        arabic: "سُبۡحَٰنَ رَبِّكَ رَبِّ ٱلۡعِزَّةِ عَمَّا يَصِفُونَ",
        translit: "Subḥāna rabbika rabbil ‛izzati ‛ammā yaṣifūn.",
        translation:
          "Glory be to your Lord; the Lord of Honour and Power Who is far above what they attribute to Him;",
        verse: 180,
      }),
      new QuranEntryModel({
        arabic: "وَسَلَٰمٌ عَلَى ٱلۡمُرۡسَلِينَ",
        translit: "Wa salāmun ‛alal mursalīn.",
        translation: "And peace be on the Messengers;",
        verse: 181,
      }),
      new QuranEntryModel({
        arabic: "وَٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ",
        translit: "Walḥamdu lillāhi rabbil ‛ālamīn.",
        translation:
          "And praise be to Allāh, the Lord and Cherisher of the Worlds. [Sūrah Al-Ṣāffāt (37), Verses 180-182]",
        verse: 182,
      }),
    ],
    instruction,
    basmallah,
    repeat,
  });
}

/** Ghafir 40:1-3, one entry per verse */
export function ghafir_1_3(
  repeat = 1,
  instruction = "",
  basmallah = false,
  title = "Ghafir",
) {
  return new QuranModel({
    title,
    surah: 40,
    entries: [
      new QuranEntryModel({
        arabic: "حمٓ",
        translit: "Ḥā Mīm.",
        translation: "Ḥā, Meem.",
        verse: 1,
      }),
      new QuranEntryModel({
        arabic: "تَنزِيلُ ٱلۡكِتَٰبِ مِنَ ٱللَّهِ ٱلۡعَزِيزِ ٱلۡعَلِيمِ",
        translit: "Tanzīlul kitābi minallāhil ‛azīzil ‛alīm.",
        translation:
          "The revelation of the Book [i.e., the Qur’ān] is from Allāh, the Exalted in Might, the Knowing,",
        verse: 2,
      }),
      new QuranEntryModel({
        arabic:
          "غَافِرِ ٱلذَّنۢبِ وَقَابِلِ ٱلتَّوۡبِ شَدِيدِ ٱلۡعِقَابِ ذِي ٱلطَّوۡلِۖ لَآ إِلَٰهَ إِلَّا هُوَۖ إِلَيۡهِ ٱلۡمَصِيرُ",
        translit:
          "Ghāfiridh dhambi wa qābilit tawbi shadīdil ‛iqābi dhiṭ ṭawl, lā ilāha illā huwa ilayhil maṣīr.",
        translation:
          "The forgiver of sin, acceptor of repentance, severe in punishment, owner of abundance. There is no deity except Him; to Him is the destination.",
        verse: 3,
      }),
    ],
    instruction,
    basmallah,
    repeat,
  });
}

/** Ash-Shura 42:1-2, one entry per verse */
export function shura_1_2(
  repeat = 1,
  instruction = "",
  basmallah = false,
  title = "Ash-Shura",
) {
  return new QuranModel({
    title,
    surah: 42,
    entries: [
      new QuranEntryModel({
        arabic: "حمٓ",
        translit: "Ḥā Mīm",
        translation: "Ha Mim.",
        verse: 1,
      }),
      new QuranEntryModel({
        arabic: "عٓسٓقٓ",
        translit: "ʿAyn Sīn Qāf",
        translation: "Ayn Sin Qaf.",
        verse: 2,
      }),
    ],
    instruction,
    basmallah,
    repeat,
  });
}

/** Ar-Rahman 55:19-20, one entry per verse */
export function rahman_19_20(
  repeat = 1,
  instruction = "",
  basmallah = false,
  title = "Ar-Rahman",
) {
  return new QuranModel({
    title,
    surah: 55,
    entries: [
      new QuranEntryModel({
        arabic: "مَرَجَ ٱلۡبَحۡرَيۡنِ يَلۡتَقِيَانِ",
        translit: "maraja-l-baḥrayni yaltaqiyān",
        translation: "He released the two seas, meeting side by side.",
        verse: 19,
      }),
      new QuranEntryModel({
        arabic: "بَيۡنَهُمَا بَرۡزَخٞ لَّا يَبۡغِيَانِ",
        translit: "baynahumā barzakhun lā yabghiyān",
        translation: "Between them is a barrier which they do not transgress.",
        verse: 20,
      }),
    ],
    instruction,
    basmallah,
    repeat,
  });
}

/** Al-Hashr 59:21-24, one entry per verse */
export function hashr_21_24(
  repeat = 1,
  instruction = "",
  basmallah = false,
  title = "Al-Hashr",
) {
  return new QuranModel({
    title,
    surah: 59,
    entries: [
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
        arabic: "هُوَ ٱللَّهُ ٱلَّذِي لَآ إِلَٰهَ إِلَّا هُوَۖ عَٰلِمُ ٱلۡغَيۡبِ وَٱلشَّهَٰدَةِۖ هُوَ ٱلرَّحۡمَٰنُ ٱلرَّحِيمُ",
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
    instruction,
    basmallah,
    repeat,
  });
}

/** Al-Buruj 85:20-22, one entry per verse */
export function buruj_20_22(
  repeat = 1,
  instruction = "",
  basmallah = false,
  title = "Al-Buruj",
) {
  return new QuranModel({
    title,
    surah: 85,
    entries: [
      new QuranEntryModel({
        arabic: "وَٱللَّهُ مِن وَرَآئِهِم مُّحِيطُۢ",
        translit: "wa-llāhu min warā'ihim muḥīṭ",
        translation: "And Allah, from behind them, is encompassing.",
        verse: 20,
      }),
      new QuranEntryModel({
        arabic: "بَلۡ هُوَ قُرۡءَانٞ مَّجِيدٞ",
        translit: "bal huwa qur'ānun majīd",
        translation: "But it is a glorious Qur'an.",
        verse: 21,
      }),
      new QuranEntryModel({
        arabic: "فِي لَوۡحٖ مَّحۡفُوظِۭ",
        translit: "fī lawḥin maḥfūẓ",
        translation: "In a Preserved Tablet.",
        verse: 22,
      }),
    ],
    instruction,
    basmallah,
    repeat,
  });
}
