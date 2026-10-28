/**
 * Qur'anic verses quoted inside duas, adhkar and qasidas; pages import these instead of building Qur'an models inline.
 * Single-verse factories are named <surah>_<verse>; a "_verse" suffix marks the whole verse where the plain name is already a partial quote or a section.
 * An ellipsis marks the end of the verse that is cut off; `verse` is the verse the quote starts in.
 * Each is a factory so a page can set its own repeat without sharing a mutable instance.
 */
import {
  QuranDhikrEntryModel,
  QuranEntryModel,
  QuranModel,
} from "@/models/recitation";

/** Al-Fatihah 1:1 — used in khulasah-after-fajr-wird-as-sakran, khulasah-maghrib-ratib-al-attas */
export function fatihah_1(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ",
    translit: "Bismillāhir raḥmānir raḥīm.",
    translation: "In the Name of Allāh, Most Compassionate, Most Merciful.",
    surah: 1,
    verse: 1,
    repeat,
    enableCounter,
  });
}

/** Al-Fatihah 1:2 — used in khulasah-after-fajr-wird-as-sakran, khulasah-maghrib-ratib-al-attas */
export function fatihah_2(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ",
    translit: "Alḥamdulillāhi rabbil ‛ālamīn.",
    translation: "All Praise be to Allāh, Lord of the Universe.",
    surah: 1,
    verse: 2,
    repeat,
    enableCounter,
  });
}

/** Al-Fatihah 1:3 — used in khulasah-after-fajr-wird-as-sakran, khulasah-maghrib-ratib-al-attas */
export function fatihah_3(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ",
    translit: "Arraḥmānir raḥīm.",
    translation: "Most Compassionate, Most Merciful.",
    surah: 1,
    verse: 3,
    repeat,
    enableCounter,
  });
}

/** Al-Fatihah 1:4 — used in khulasah-after-fajr-wird-as-sakran, khulasah-maghrib-ratib-al-attas */
export function fatihah_4(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "مَٰلِكِ يَوۡمِ ٱلدِّينِ",
    translit: "Māliki yawmid dīn.",
    translation: "Lord of the Day of Judgement.",
    surah: 1,
    verse: 4,
    repeat,
    enableCounter,
  });
}

/** Al-Fatihah 1:5 — used in khulasah-after-fajr-wird-as-sakran, khulasah-maghrib-ratib-al-attas */
export function fatihah_5(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "إِيَّاكَ نَعۡبُدُ وَإِيَّاكَ نَسۡتَعِينُ",
    translit: "Iyyāka na‛budu wa iyyāka nasta‛īn.",
    translation:
      "You alone do we worship, and to You alone do we turn for help.",
    surah: 1,
    verse: 5,
    repeat,
    enableCounter,
  });
}

/** Al-Fatihah 1:6 — used in khulasah-after-fajr-wird-as-sakran, khulasah-maghrib-ratib-al-attas */
export function fatihah_6(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "ٱهۡدِنَا ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ",
    translit: "Ihdinaṣ ṣirāṭal mustaqīm.",
    translation: "Guide us to the Straight Way.",
    surah: 1,
    verse: 6,
    repeat,
    enableCounter,
  });
}

/** Al-Fatihah 1:7 — used in khulasah-after-fajr-wird-as-sakran, khulasah-maghrib-ratib-al-attas */
export function fatihah_7(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ وَلَا ٱلضَّآلِّينَ",
    translit:
      "Ṣirāṭal ladhīna an‛amta ‛alayhim, ghayril maghḍūbi ‛alayhim walaḍ ḍāllīn.",
    translation:
      "The Way of those on whom You have bestowed Your Grace; not the way of those who have earned your anger, nor of those who went astray.",
    surah: 1,
    verse: 7,
    repeat,
    enableCounter,
  });
}

/** Al-Baqarah 2:1 — used in khulasah-friday-opening-supplications */
export function baqarah_1(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "الٓمٓ",
    translit: "Alif Lām Mīm.",
    translation: "Alif, Lām, Meem.",
    surah: 2,
    verse: 1,
    repeat,
    enableCounter,
  });
}

/** Al-Baqarah 2:2 — used in khulasah-friday-opening-supplications */
export function baqarah_2(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "ذَٰلِكَ ٱلۡكِتَٰبُ لَا رَيۡبَۛ فِيهِۛ هُدٗى لِّلۡمُتَّقِينَ",
    translit: "Dhālikal kitābu lā rayba fīhi hudallil muttaqīn.",
    translation:
      "This is the Book about which there is no doubt, a guidance for those conscious of Allāh -",
    surah: 2,
    verse: 2,
    repeat,
    enableCounter,
  });
}

/** Al-Baqarah 2:3 — used in khulasah-friday-opening-supplications */
export function baqarah_3(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "ٱلَّذِينَ يُؤۡمِنُونَ بِٱلۡغَيۡبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقۡنَٰهُمۡ يُنفِقُونَ",
    translit:
      "Alladhīna yu'minūna bil ghaybi wa yuqīmūnaṣ ṣalāta wa mimmā razaqnāhum yunfiqūn.",
    translation:
      "Who believe in the unseen, establish prayer, and spend out of what We have provided for them,",
    surah: 2,
    verse: 3,
    repeat,
    enableCounter,
  });
}

/** Al-Baqarah 2:4 — used in khulasah-friday-opening-supplications */
export function baqarah_4(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "وَٱلَّذِينَ يُؤۡمِنُونَ بِمَآ أُنزِلَ إِلَيۡكَ وَمَآ أُنزِلَ مِن قَبۡلِكَ وَبِٱلۡأٓخِرَةِ هُمۡ يُوقِنُونَ",
    translit:
      "Walladhīna yu'minūna bimā unzila ilayka wa mā unzila min qablika wa bil ākhirati hum yūqinūn.",
    translation:
      "And who believe in what has been revealed to you, [O Muḥammad], and what was revealed before you, and of the Hereafter they are certain [in faith].",
    surah: 2,
    verse: 4,
    repeat,
    enableCounter,
  });
}

/** Al-Baqarah 2:5 — used in khulasah-friday-opening-supplications */
export function baqarah_5(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "أُوْلَٰٓئِكَ عَلَىٰ هُدٗى مِّن رَّبِّهِمۡۖ وَأُوْلَٰٓئِكَ هُمُ ٱلۡمُفۡلِحُونَ",
    translit: "Ulā'ika ‛alā hudammir rabbihim wa ulā'ika humul mufliḥūn.",
    translation:
      "Those are upon [right] guidance from their Lord, and it is those who are the successful.",
    surah: 2,
    verse: 5,
    repeat,
    enableCounter,
  });
}

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

/** Al-Baqarah 2:163 — used in khulasah-after-every-prayer-adkhar, khulasah-friday-opening-supplications */
export function baqarah_163(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "وَإِلَٰهُكُمۡ إِلَٰهٞ وَٰحِدٞۖ لَّآ إِلَٰهَ إِلَّا هُوَ ٱلرَّحۡمَٰنُ ٱلرَّحِيمُ",
    translit: "Wa ilāhukum ilāhun wāḥidullā ilāha illā huwar raḥmānur raḥīm.",
    translation:
      "And your god is one God. There is no deity [worthy of worship] except Him, the Entirely Merciful, the Especially Merciful.",
    surah: 2,
    verse: 163,
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

/** Al-Baqarah 2:255 — used in khulasah-after-every-prayer-adkhar, khulasah-after-fajr-wird-as-sakran, khulasah-dhuhr-adhkar, khulasah-friday-opening-supplications, khulasah-various-supplications-duas-for-travel */
export function baqarah_255(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلۡحَيُّ ٱلۡقَيُّومُۚ لَا تَأۡخُذُهُۥ سِنَةٞ وَلَا نَوۡمٞۚ لَّهُۥ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلۡأَرۡضِۗ مَن ذَا ٱلَّذِي يَشۡفَعُ عِندَهُۥٓ إِلَّا بِإِذۡنِهِۦۚ يَعۡلَمُ مَا بَيۡنَ أَيۡدِيهِمۡ وَمَا خَلۡفَهُمۡۖ وَلَا يُحِيطُونَ بِشَيۡءٖ مِّنۡ عِلۡمِهِۦٓ إِلَّا بِمَا شَآءَۚ وَسِعَ كُرۡسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَۖ وَلَا يَـُٔودُهُۥ حِفۡظُهُمَاۚ وَهُوَ ٱلۡعَلِيُّ ٱلۡعَظِيمُ",
    translit:
      "Allāhu lā ilāha illā huwal ḥayyul qayyūm; lā ta’khudhuhū sinatuw walā nawm; lahū mā fissamāwāti wa mā fil’arḍ, Man dhalladhī yashfa‛u ‛indahū illā bi’idhnihī, ya‛lamu mā bayna aydīhim wa mā khalfahum, wa lā yuḥīṭūna bishay’im min ‛ilmihī illā bimā shā’, wasi‛a kursiyyuhus samāwāti wal arḍ, wa lā ya’ūduhū ḥifẓuhumā, wa huwal ‛aliyyul ‛aẓīm.",
    translation:
      "Allāh - there is no deity except Him, the Ever-Living, the Self-Sustaining. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is [presently] before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursī extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
    surah: 2,
    verse: 255,
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

/** Al-Baqarah 2:284 — used in khulasah-friday-opening-supplications */
export function baqarah_284(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "لِّلَّهِ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلۡأَرۡضِۗ وَإِن تُبۡدُواْ مَا فِيٓ أَنفُسِكُمۡ أَوۡ تُخۡفُوهُ يُحَاسِبۡكُم بِهِ ٱللَّهُۖ فَيَغۡفِرُ لِمَن يَشَآءُ وَيُعَذِّبُ مَن يَشَآءُۗ وَٱللَّهُ عَلَىٰ كُلِّ شَيۡءٖ قَدِيرٌ",
    translit:
      "Lillāhi mā fissamāwāti wamā fil arḍ, wa'in tubdū mā fī anfusikum aw tukhfūhu yuḥāsibkum bihillāh; fayaghfiru limayyashā'u wa yu‛adh-dhibu mayyashā, wallāhu ‛alā kulli shay'in qadīr.",
    translation:
      "To Allāh belongs whatever is in the heavens and whatever is in the earth. Whether you show what is within yourselves or conceal it, Allāh will bring you to account for it. Then He will forgive whom He wills and punish whom He wills, and Allāh is over all things competent.",
    surah: 2,
    verse: 284,
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

/** Al-Baqarah 2:285 — used in khulasah-friday-opening-supplications */
export function baqarah_285(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "ءَامَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيۡهِ مِن رَّبِّهِۦ وَٱلۡمُؤۡمِنُونَۚ كُلٌّ ءَامَنَ بِٱللَّهِ وَمَلَٰٓئِكَتِهِۦ وَكُتُبِهِۦ وَرُسُلِهِۦ لَا نُفَرِّقُ بَيۡنَ أَحَدٖ مِّن رُّسُلِهِۦۚ وَقَالُواْ سَمِعۡنَا وَأَطَعۡنَاۖ غُفۡرَانَكَ رَبَّنَا وَإِلَيۡكَ ٱلۡمَصِيرُ",
    translit:
      "Ᾱmanarrasūlu bimā unzila ilayhi mirrabbihī wal mu'minūn, kullun āmana billāhi wa malā'ikatihī wa kutubihī wa rusulih, lā nufarriqu bayna aḥadim mirrusulihī Wa qālū sami‛nā wa aṭa‛nā ghufrānaka rabbanā wa ilaykal maṣīr.",
    translation:
      'The Messenger has believed in what was revealed to him from his Lord, and [so have] the believers. All of them have believed in Allāh and His angels and His books and His messengers, [saying], "We make no distinction between any of His messengers." And they say, "We hear and we obey. [We seek] Your forgiveness, our Lord, and to You is the [final] destination."',
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

/** Al-Baqarah 2:286 — used in khulasah-friday-opening-supplications */
export function baqarah_286_verse(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "لَا يُكَلِّفُ ٱللَّهُ نَفۡسًا إِلَّا وُسۡعَهَاۚ لَهَا مَا كَسَبَتۡ وَعَلَيۡهَا مَا ٱكۡتَسَبَتۡۗ رَبَّنَا لَا تُؤَاخِذۡنَآ إِن نَّسِينَآ أَوۡ أَخۡطَأۡنَاۚ رَبَّنَا وَلَا تَحۡمِلۡ عَلَيۡنَآ إِصۡرٗا كَمَا حَمَلۡتَهُۥ عَلَى ٱلَّذِينَ مِن قَبۡلِنَاۚ رَبَّنَا وَلَا تُحَمِّلۡنَا مَا لَا طَاقَةَ لَنَا بِهِۦۖ وَٱعۡفُ عَنَّا وَٱغۡفِرۡ لَنَا وَٱرۡحَمۡنَآۚ أَنتَ مَوۡلَىٰنَا فَٱنصُرۡنَا عَلَى ٱلۡقَوۡمِ ٱلۡكَٰفِرِينَ",
    translit:
      "Lā yukallifullāhu nafsan illā wus‛ahā, lahā mā kasabat wa ‛alayhā maktasabat, rabbanā lā tu'ākhidhnā innasīnā aw akhṭa'nā, rabbanā walā taḥmil ‛alaynā iṣran kamā ḥamaltahū ‛alalladhīna min qablinā, rabbanā walā tuḥammilnā mā lā ṭāqata lanā bihī, wa‛fu ‛annā, waghfir lanā, warḥamnā, anta mawlanā fanṣurnā ‛alal qawmil kāfirīn.",
    translation:
      'Allāh does not charge a soul except [with that within] its capacity. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. "Our Lord, do not impose blame upon us if we have forgotten or erred. Our Lord, and lay not upon us a burden like that which You laid upon those before us. Our Lord, and burden us not with that which we have no ability to bear. And pardon us; and forgive us; and have mercy upon us. You are our protector, so give us victory over the disbelieving people."',
    surah: 2,
    verse: 286,
    repeat,
    enableCounter,
  });
}

/** Aal-Imran 3:18 — used in khulasah-friday-opening-supplications */
export function imran_18(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "شَهِدَ ٱللَّهُ أَنَّهُۥ لَآ إِلَٰهَ إِلَّا هُوَ وَٱلۡمَلَٰٓئِكَةُ وَأُوْلُواْ ٱلۡعِلۡمِ قَآئِمَۢا بِٱلۡقِسۡطِۚ لَآ إِلَٰهَ إِلَّا هُوَ ٱلۡعَزِيزُ ٱلۡحَكِيمُ",
    translit:
      "Shahidallāhu annahū lā ilāha illā huwa wal malā'ikatu wa ulul ‛ilmi qā'imam bilqisṭi, lā ilāha illā huwal ‛azīzul ḥakīm.",
    translation:
      "Allāh witnesses that there is no deity except Him, and [so do] the angels and those of knowledge - [that He is] maintaining [creation] in justice. There is no deity except Him, the Exalted in Might, the Wise.",
    surah: 3,
    verse: 18,
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

/** Aal-Imran 3:26 — used in khulasah-friday-opening-supplications */
export function imran_26(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "قُلِ ٱللَّهُمَّ مَٰلِكَ ٱلۡمُلۡكِ تُؤۡتِي ٱلۡمُلۡكَ مَن تَشَآءُ وَتَنزِعُ ٱلۡمُلۡكَ مِمَّن تَشَآءُ وَتُعِزُّ مَن تَشَآءُ وَتُذِلُّ مَن تَشَآءُۖ بِيَدِكَ ٱلۡخَيۡرُۖ إِنَّكَ عَلَىٰ كُلِّ شَيۡءٖ قَدِيرٞ",
    translit:
      "Qulillāhumma mālikal mulki tu'til mulka man tashā'u wa tanzi‛ul mulka mimman tashā'u wa tu‛izzu man tashā'u wa tudhillu man tashā'u biyadikal khayru, innaka ‛alā kulli shay'in qadīr.",
    translation:
      'Say, "O Allāh, Owner of Sovereignty, You give sovereignty to whom You will and You take sovereignty away from whom You will. You honor whom You will and You humble whom You will. In Your hand is [all] good. Indeed, You are over all things competent.',
    surah: 3,
    verse: 26,
    repeat,
    enableCounter,
  });
}

/** Aal-Imran 3:27 — used in khulasah-friday-opening-supplications */
export function imran_27(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "تُولِجُ ٱلَّيۡلَ فِي ٱلنَّهَارِ وَتُولِجُ ٱلنَّهَارَ فِي ٱلَّيۡلِۖ وَتُخۡرِجُ ٱلۡحَيَّ مِنَ ٱلۡمَيِّتِ وَتُخۡرِجُ ٱلۡمَيِّتَ مِنَ ٱلۡحَيِّۖ وَتَرۡزُقُ مَن تَشَآءُ بِغَيۡرِ حِسَابٖ",
    translit:
      "Tūlijullayla finnahāri wa tūlijun nahāra fillayli, wa tukhrijul ḥayya minal mayyiti wa tukhrijul mayyita minal ḥayyi wa tarzuqu man tashā'u bighayri ḥisāb.",
    translation:
      'You cause the night to enter the day, and You cause the day to enter the night; and You bring the living out of the dead, and You bring the dead out of the living. And You give provision to whom You will without account [i.e., limit or measure]."',
    surah: 3,
    verse: 27,
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

/** Aal-Imran 3:190 — used in khulasah-last-part-of-night-adhkar-on-waking-up */
export function imran_190(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "إِنَّ فِي خَلۡقِ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ وَٱخۡتِلَٰفِ ٱلَّيۡلِ وَٱلنَّهَارِ لَأٓيَٰتٖ لِّأُوْلِي ٱلۡأَلۡبَٰبِ",
    translit:
      "Inna fī khalqis samāwāti wal arḍi wakhtilāfil layli wan nahāri la’āyātin li’ulil albāb,",
    translation:
      "Indeed, in the creation of the heavens and the earth and the alternation of the night and the day are signs for those of understanding -",
    surah: 3,
    verse: 190,
    repeat,
    enableCounter,
  });
}

/** Aal-Imran 3:191 — used in khulasah-last-part-of-night-adhkar-on-waking-up */
export function imran_191(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "ٱلَّذِينَ يَذۡكُرُونَ ٱللَّهَ قِيَٰمٗا وَقُعُودٗا وَعَلَىٰ جُنُوبِهِمۡ وَيَتَفَكَّرُونَ فِي خَلۡقِ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ رَبَّنَا مَا خَلَقۡتَ هَٰذَا بَٰطِلٗا سُبۡحَٰنَكَ فَقِنَا عَذَابَ ٱلنَّارِ",
    translit:
      "alladhīna yadhkurūnallāha qiyāmaw wa qu‛ūdaw wa ‛alā junūbihim wa yatafakkarūna fī khalqis samāwāti wal arḍ, rabbanā mā khalaqta hādhā bāṭilā, subḥānaka faqinā ‛adhāban nār.",
    translation:
      'Who remember Allāh while standing or sitting or [lying] on their sides and give thought to the creation of the heavens and the earth, [saying], "Our Lord, You did not create this aimlessly; exalted are You [above such a thing]; then protect us from the punishment of the Fire.',
    surah: 3,
    verse: 191,
    repeat,
    enableCounter,
  });
}

/** Aal-Imran 3:192 — used in khulasah-last-part-of-night-adhkar-on-waking-up */
export function imran_192(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "رَبَّنَآ إِنَّكَ مَن تُدۡخِلِ ٱلنَّارَ فَقَدۡ أَخۡزَيۡتَهُۥۖ وَمَا لِلظَّٰلِمِينَ مِنۡ أَنصَارٖ",
    translit:
      "Rabbanā innaka man tudkhilin nāra faqad akhzaytah, wa mā liẓẓālimīna min anṣār.",
    translation:
      "Our Lord, indeed whoever You admit to the Fire - You have disgraced him, and for the wrongdoers there are no helpers.",
    surah: 3,
    verse: 192,
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

/** Aal-Imran 3:193 — used in khulasah-last-part-of-night-adhkar-on-waking-up */
export function imran_193_verse(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "رَّبَّنَآ إِنَّنَا سَمِعۡنَا مُنَادِيٗا يُنَادِي لِلۡإِيمَٰنِ أَنۡ ءَامِنُواْ بِرَبِّكُمۡ فَـَٔامَنَّاۚ رَبَّنَا فَٱغۡفِرۡ لَنَا ذُنُوبَنَا وَكَفِّرۡ عَنَّا سَيِّـَٔاتِنَا وَتَوَفَّنَا مَعَ ٱلۡأَبۡرَارِ",
    translit:
      "Rabbanā innanā sami‛nā munādiyay yunādī lil īmāni an āminū birabbikum fa āmannā, rabbanā faghfir lanā dhunūbanā wa kaffir ‛annā sayyi’ātinā wa tawaffanā ma‛al abrār.",
    translation:
      "Our Lord, indeed we have heard a caller [i.e., Prophet Muḥammad (ﷺ)] calling to faith, [saying], 'Believe in your Lord,' and we have believed. Our Lord, so forgive us our sins and remove from us our misdeeds and cause us to die among the righteous.",
    surah: 3,
    verse: 193,
    repeat,
    enableCounter,
  });
}

/** Aal-Imran 3:194 — used in khulasah-last-part-of-night-adhkar-on-waking-up, visiting-the-beloved */
export function imran_194(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "رَبَّنَا وَءَاتِنَا مَا وَعَدتَّنَا عَلَىٰ رُسُلِكَ وَلَا تُخۡزِنَا يَوۡمَ ٱلۡقِيَٰمَةِۖ إِنَّكَ لَا تُخۡلِفُ ٱلۡمِيعَادَ",
    translit:
      "Rabbanā wa ātinā mā wa‛adttanā ‛alā rusulika wa lā tukhzinā yawmal qiyāmah, innaka lā tukhliful mī‛ād.",
    translation:
      'Our Lord, and grant us what You promised us through Your messengers and do not disgrace us on the Day of Resurrection. Indeed, You do not fail in [Your] promise."',
    surah: 3,
    verse: 194,
    repeat,
    enableCounter,
  });
}

/** Aal-Imran 3:195 — used in khulasah-last-part-of-night-adhkar-on-waking-up */
export function imran_195(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "فَٱسۡتَجَابَ لَهُمۡ رَبُّهُمۡ أَنِّي لَآ أُضِيعُ عَمَلَ عَٰمِلٖ مِّنكُم مِّن ذَكَرٍ أَوۡ أُنثَىٰۖ بَعۡضُكُم مِّنۢ بَعۡضٖۖ فَٱلَّذِينَ هَاجَرُواْ وَأُخۡرِجُواْ مِن دِيَٰرِهِمۡ وَأُوذُواْ فِي سَبِيلِي وَقَٰتَلُواْ وَقُتِلُواْ لَأُكَفِّرَنَّ عَنۡهُمۡ سَيِّـَٔاتِهِمۡ وَلَأُدۡخِلَنَّهُمۡ جَنَّٰتٖ تَجۡرِي مِن تَحۡتِهَا ٱلۡأَنۡهَٰرُ ثَوَابٗا مِّنۡ عِندِ ٱللَّهِۚ وَٱللَّهُ عِندَهُۥ حُسۡنُ ٱلثَّوَابِ",
    translit:
      "Fastajāba lahum rabbuhum annī lā uḍī‛u ‛amala ‛āmilim minkum min dhakarin aw unthā, ba‛ḍukum mim ba‛ḍ, fal ladhīna hājarū wa ukhrijū min diyārihim wa ūdhū fī sabīlī wa qātalū wa qutilū la ukaffiranna ‛anhum sayyi’ātihim wa la udkhilannahum jannātin tajrī min taḥtihal anhāru thawābam min ‛indillāh, wallāhu ‛indahū ḥusnuth thawāb.",
    translation:
      'And their Lord responded to them, "Never will I allow to be lost the work of [any] worker among you, whether male or female; you are of one another. So those who emigrated or were evicted from their homes or were harmed in My cause or fought or were killed - I will surely remove from them their misdeeds, and I will surely admit them to gardens beneath which rivers flow as reward from Allāh, and Allāh has with Him the best reward."',
    surah: 3,
    verse: 195,
    repeat,
    enableCounter,
  });
}

/** Aal-Imran 3:196 — used in khulasah-last-part-of-night-adhkar-on-waking-up */
export function imran_196(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "لَا يَغُرَّنَّكَ تَقَلُّبُ ٱلَّذِينَ كَفَرُواْ فِي ٱلۡبِلَٰدِ",
    translit: "Lā yaghurrannaka taqallubul ladhīna kafarū fil bilād,",
    translation:
      "Be not deceived by the [uninhibited] movement of the disbelievers throughout the land.",
    surah: 3,
    verse: 196,
    repeat,
    enableCounter,
  });
}

/** Aal-Imran 3:197 — used in khulasah-last-part-of-night-adhkar-on-waking-up */
export function imran_197(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "مَتَٰعٞ قَلِيلٞ ثُمَّ مَأۡوَىٰهُمۡ جَهَنَّمُۖ وَبِئۡسَ ٱلۡمِهَادُ",
    translit: "matā‛un qalīl, thumma ma’wāhum jahannam, wa bi’sal mihād.",
    translation:
      "[It is but] a small enjoyment; then their [final] refuge is Hell, and wretched is the resting place.",
    surah: 3,
    verse: 197,
    repeat,
    enableCounter,
  });
}

/** Aal-Imran 3:198 — used in khulasah-last-part-of-night-adhkar-on-waking-up */
export function imran_198(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "لَٰكِنِ ٱلَّذِينَ ٱتَّقَوۡاْ رَبَّهُمۡ لَهُمۡ جَنَّٰتٞ تَجۡرِي مِن تَحۡتِهَا ٱلۡأَنۡهَٰرُ خَٰلِدِينَ فِيهَا نُزُلٗا مِّنۡ عِندِ ٱللَّهِۗ وَمَا عِندَ ٱللَّهِ خَيۡرٞ لِّلۡأَبۡرَارِ",
    translit:
      "Lākinil ladhīnat taqaw rabbahum lahum jannātun tajrī min taḥtihal anhāru khālidīna fīhā nuzulam min ‛indillāh, wa mā ‛indallāhi khayrul lil abrār.",
    translation:
      "But those who feared their Lord will have gardens beneath which rivers flow, abiding eternally therein, as accommodation from Allāh. And that which is with Allāh is best for the righteous.",
    surah: 3,
    verse: 198,
    repeat,
    enableCounter,
  });
}

/** Aal-Imran 3:199 — used in khulasah-last-part-of-night-adhkar-on-waking-up */
export function imran_199(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "وَإِنَّ مِنۡ أَهۡلِ ٱلۡكِتَٰبِ لَمَن يُؤۡمِنُ بِٱللَّهِ وَمَآ أُنزِلَ إِلَيۡكُمۡ وَمَآ أُنزِلَ إِلَيۡهِمۡ خَٰشِعِينَ لِلَّهِ لَا يَشۡتَرُونَ بِـَٔايَٰتِ ٱللَّهِ ثَمَنٗا قَلِيلًاۚ أُوْلَٰٓئِكَ لَهُمۡ أَجۡرُهُمۡ عِندَ رَبِّهِمۡۗ إِنَّ ٱللَّهَ سَرِيعُ ٱلۡحِسَابِ",
    translit:
      "Wa inna min ahlil kitābi laman yu’minu billāhi wa mā unzila ilaykum wa mā unzila ilayhim khāshi‛īna lillāhi lā yashtarūna bi āyātillāhi thamanan qalīlā, ulā’ika lahum ajruhum ‛inda rabbihim, innallāha sarī‛ul ḥisāb.",
    translation:
      "And indeed, among the People of the Scripture are those who believe in Allāh and what was revealed to you and what was revealed to them, [being] humbly submissive to Allāh. They do not exchange the verses of Allāh for a small price. Those will have their reward with their Lord. Indeed, Allāh is swift in account.",
    surah: 3,
    verse: 199,
    repeat,
    enableCounter,
  });
}

/** Aal-Imran 3:200 — used in khulasah-last-part-of-night-adhkar-on-waking-up */
export function imran_200(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ ٱصۡبِرُواْ وَصَابِرُواْ وَرَابِطُواْ وَٱتَّقُواْ ٱللَّهَ لَعَلَّكُمۡ تُفۡلِحُونَ",
    translit:
      "Yā ayyuhal ladhīna āmanuṣ birū wa ṣābirū wa rābiṭū wattaqullāha la‛allakum tufliḥūn.",
    translation:
      "O you who have believed, persevere and endure and remain stationed and fear Allāh that you may be successful.",
    surah: 3,
    verse: 200,
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

/** An-Nisa 4:110 — used in khulasah-last-part-of-night-adhkar-on-waking-up */
export function nisa_110(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "وَمَن يَعۡمَلۡ سُوٓءًا أَوۡ يَظۡلِمۡ نَفۡسَهُۥ ثُمَّ يَسۡتَغۡفِرِ ٱللَّهَ يَجِدِ ٱللَّهَ غَفُورٗا رَّحِيمٗا",
    translit:
      "Wa may ya‛mal sū'an aw yaẓlim nafsahū, thumma yastaghfirillāha yajidillāha ghafūrarraḥīmā.",
    translation:
      "If any one commits an evil deed or has been unjust to his soul, but afterwards ask Allāh for forgiveness, he will find Allāh Oft-Forgiving, Most Merciful.",
    surah: 4,
    verse: 110,
    repeat,
    enableCounter,
  });
}

/** Al-An'am 6:13 — used in khulasah-various-supplications-duas-for-travel */
export function an_am_13(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "۞ وَلَهُۥ مَا سَكَنَ فِي ٱلَّيۡلِ وَٱلنَّهَارِۚ وَهُوَ ٱلسَّمِيعُ ٱلۡعَلِيمُ",
    translit: "Wa lahū mā sakana fillayli wan nahār, wa huwas samī‘ul ‘alīm.",
    translation:
      "And to Him belongs whatever exists in the night and the day, and He is the All-Hearing, the All-Knowing.",
    surah: 6,
    verse: 13,
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

/** Al-A'raf 7:196 — used in khulasah-after-fajr-wird-of-imam-an-nawawi */
export function a_raf_196_verse(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "إِنَّ وَلِـِّۧيَ ٱللَّهُ ٱلَّذِي نَزَّلَ ٱلۡكِتَٰبَۖ وَهُوَ يَتَوَلَّى ٱلصَّٰلِحِينَ",
    translit:
      "Inna waliyyi yallāhul ladhī nazzalal kitāb, wa huwa yatawallaṣ ṣāliḥīn.",
    translation:
      "Indeed, my protector is Allāh, who has sent down the Book; and He is an ally to the righteous.",
    surah: 7,
    verse: 196,
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

/** At-Tawbah 9:128 — used in blessed-occasions-rajab-istighfar */
export function tawbah_128_verse(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "لَقَدۡ جَآءَكُمۡ رَسُولٞ مِّنۡ أَنفُسِكُمۡ عَزِيزٌ عَلَيۡهِ مَا عَنِتُّمۡ حَرِيصٌ عَلَيۡكُم بِٱلۡمُؤۡمِنِينَ رَءُوفٞ رَّحِيمٞ",
    translit:
      "Laqad jā’akum rasūlun min anfusikum ‛azīzun ‛alayhi mā ‛anittum ḥarīṣun ‛alaykum bil-mu’minīna ra’ūfur-raḥīm",
    translation:
      "There has come to you a Messenger from among yourselves, grievous to whom is your burden, concerned (is he) for you; for the believers (he is) full of compassion, merciful. If they turn away then say: Allah is sufficient for me; there is no god but He. On Him do I rely; He is the Lord of the Awesome Throne.",
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

/** At-Tawbah 9:129 — used in blessed-occasions-rajab-istighfar, khulasah-after-fajr-wird-of-imam-an-nawawi */
export function tawbah_129_verse(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "فَإِن تَوَلَّوۡاْ فَقُلۡ حَسۡبِيَ ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَۖ عَلَيۡهِ تَوَكَّلۡتُۖ وَهُوَ رَبُّ ٱلۡعَرۡشِ ٱلۡعَظِيمِ",
    translit:
      "Fa in tawallaw faqul ḥasbiyallāhu lā ilāha illā huw, ‛alayhi tawakkaltu wa huwa rabbul-‛arshil-‛aẓīm",
    translation:
      'But if they turn away, [O Muḥammad], say, "Sufficient for me is Allāh; there is no deity except Him. On Him I have relied, and He is the Lord of the Great Throne."',
    surah: 9,
    verse: 129,
    repeat,
    enableCounter,
  });
}

/** Hud 11:41 — used in khulasah-various-supplications-duas-for-travel */
export function hud_41(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "۞ وَقَالَ ٱرۡكَبُواْ فِيهَا بِسۡمِ ٱللَّهِ مَجۡر۪ىٰهَا وَمُرۡسَىٰهَآۚ إِنَّ رَبِّي لَغَفُورٞ رَّحِيمٞ",
    translit:
      "Wa qālar kabū fīhā bismillāhi majréhā wa mursāhā, inna rabbi laghafūrur raḥīm.",
    translation:
      "Embark on it. In the Name of Allāh it shall set sail and cast anchor. Verily, my Lord is Ever Forgiving, Most Merciful.",
    surah: 11,
    verse: 41,
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

/** Ar-Ra'd 13:9 — used in dalail-khayrat-8---Monday */
export function ra_d_9(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "عَٰلِمُ ٱلۡغَيۡبِ وَٱلشَّهَٰدَةِ ٱلۡكَبِيرُ ٱلۡمُتَعَالِ",
    translit: "ʿalimul ghaybi wash shahādatil kabīrul mutaʿāli",
    translation:
      "the Knower of the Unseen and the Visible, the Great, the Self-Exalted.'",
    surah: 13,
    verse: 9,
    repeat,
    enableCounter,
  });
}

/** Ar-Ra'd 13:19 — used in salawat-compilations-majma-al-lataif-4---Monday */
export function ra_d_19(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "۞ أَفَمَن يَعۡلَمُ أَنَّمَآ أُنزِلَ إِلَيۡكَ مِن رَّبِّكَ ٱلۡحَقُّ كَمَنۡ هُوَ أَعۡمَىٰٓۚ إِنَّمَا يَتَذَكَّرُ أُوْلُواْ ٱلۡأَلۡبَٰبِ",
    translit:
      "Afaman ya‛lamu annamā unzila ilayka mir rabbikal ḥaqqu kaman huwa a‛mā, innamā yatadhakkaru ulul albāb",
    translation:
      "Then is he who knows that what has been revealed to you from your Lord is the truth like one who is blind? They will only be reminded who are people of understanding -",
    surah: 13,
    verse: 19,
    repeat,
    enableCounter,
  });
}

/** Ar-Ra'd 13:28 — used in khulasah-after-every-prayer-adkhar */
export function ra_d_28(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "ٱلَّذِينَ ءَامَنُواْ وَتَطۡمَئِنُّ قُلُوبُهُم بِذِكۡرِ ٱللَّهِۗ أَلَا بِذِكۡرِ ٱللَّهِ تَطۡمَئِنُّ ٱلۡقُلُوبُ",
    translit:
      "Alladhīna āmanū wa taṭma’innu qulūbuhum bi dhikrillāh, alā bi dhikrillāhi taṭma’innul qulūb.",
    translation:
      'Those who have believed and whose hearts are assured by the remembrance of Allāh. Unquestionably, by the remembrance of Allāh hearts are assured."',
    surah: 13,
    verse: 28,
    repeat,
    enableCounter,
  });
}

/** Ar-Ra'd 13:39 — used in blessed-occasions-dua-nisf-shaban */
export function ra_d_39(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "يَمۡحُواْ ٱللَّهُ مَا يَشَآءُ وَيُثۡبِتُۖ وَعِندَهُۥٓ أُمُّ ٱلۡكِتَٰبِ",
    translit: "yamḥu'llāhu mā yashā'u wa yuthbitu wa `indahu Ummu'l-Kitāb",
    translation:
      "Allāh eliminates what He wills or confirms, and with Him is the Mother of the Book.",
    surah: 13,
    verse: 39,
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

/** Al-Isra 17:45 — used in khulasah-after-fajr-wird-of-imam-an-nawawi */
export function isra_45(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "وَإِذَا قَرَأۡتَ ٱلۡقُرۡءَانَ جَعَلۡنَا بَيۡنَكَ وَبَيۡنَ ٱلَّذِينَ لَا يُؤۡمِنُونَ بِٱلۡأٓخِرَةِ حِجَابٗا مَّسۡتُورٗا",
    translit:
      "Wa'idhā qara'tal qur'āna ja‛alnā baynaka wa baynal ladhīna lā yu'minūna bil'ākhirati ḥijābam mastūrā.",
    translation:
      "And when you recite the Qur’ān, We put between you and those who do not believe in the Hereafter a concealed partition.",
    surah: 17,
    verse: 45,
    repeat,
    enableCounter,
  });
}

/** Al-Isra 17:46 — used in khulasah-after-fajr-wird-of-imam-an-nawawi */
export function isra_46(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "وَجَعَلۡنَا عَلَىٰ قُلُوبِهِمۡ أَكِنَّةً أَن يَفۡقَهُوهُ وَفِيٓ ءَاذَانِهِمۡ وَقۡرٗاۚ وَإِذَا ذَكَرۡتَ رَبَّكَ فِي ٱلۡقُرۡءَانِ وَحۡدَهُۥ وَلَّوۡاْ عَلَىٰٓ أَدۡبَٰرِهِمۡ نُفُورٗا",
    translit:
      "Wa ja‛alnā ‛alā qulūbihim akinnatan ayyafqahūhu wa fī ādhānihim waqrā. Wa'idhā dhakarta rabbaka fil qur'āni waḥdahū wallaw ‛alā adbārihim nufūrā.",
    translation:
      "And We have placed over their hearts coverings, lest they understand it, and in their ears deafness. And when you mention your Lord alone in the Qur’ān, they turn back in aversion.",
    surah: 17,
    verse: 46,
    repeat,
    enableCounter,
  });
}

/** end of Al-Isra 17:80 — used in khulasah-various-supplications-duas-for-travel */
export function isra_80(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "… رَّبِّ أَدۡخِلۡنِي مُدۡخَلَ صِدۡقٖ وَأَخۡرِجۡنِي مُخۡرَجَ صِدۡقٖ وَٱجۡعَل لِّي مِن لَّدُنكَ سُلۡطَٰنٗا نَّصِيرٗا",
    translit:
      "… Rabbi adkhilnī mudkhala ṣidqiw wa akhrijnī mukhraja ṣidqiw waj‘al lī milladunka sulṭānan naṣīrā.",
    translation:
      "… O my Lord! Grant me an honourable entrance and an honourable exit and sustain me with Your Power.",
    surah: 17,
    verse: 80,
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
    arabic: "لَآ إِلَٰهَ إِلَّآ أَنتَ سُبۡحَٰنَكَ إِنِّي كُنتُ مِنَ ٱلظَّٰلِمِينَ",
    translit: "Lā ilāha illā anta subḥānaka innī kuntu minaẓ ẓālimīn.",
    translation:
      "There is no deity but You, transcendent are You, truly I am amongst the wrongdoers.",
    surah: 21,
    verse: 87,
    repeat,
    enableCounter,
  });
}

/** Al-Anbiya 21:87 — used in khulasah-last-part-of-night-adhkar-before-dawn */
export function anbiya_87_verse(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "وَذَا ٱلنُّونِ إِذ ذَّهَبَ مُغَٰضِبٗا فَظَنَّ أَن لَّن نَّقۡدِرَ عَلَيۡهِ فَنَادَىٰ فِي ٱلظُّلُمَٰتِ أَن لَّآ إِلَٰهَ إِلَّآ أَنتَ سُبۡحَٰنَكَ إِنِّي كُنتُ مِنَ ٱلظَّٰلِمِينَ",
    translit:
      "wa dhān-nūni idh dhahaba mughāḍiban faẓanna an lan naqdira ʿalayhi fanādā fīẓ-ẓulumāti an lā ilāha illā anta sub'ḥānaka innī kuntu minaẓ-ẓālimīn",
    translation:
      'And [mention] the man of the fish [i.e., Jonah], when he went off in anger and thought that We would not decree [anything] upon him. And he called out within the darknesses, "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers."',
    surah: 21,
    verse: 87,
    repeat,
    enableCounter,
  });
}

/** Al-Anbiya 21:88 — used in blessed-occasions-rajab-istighfar */
export function anbiya_88(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "فَٱسۡتَجَبۡنَا لَهُۥ وَنَجَّيۡنَٰهُ مِنَ ٱلۡغَمِّۚ وَكَذَٰلِكَ نُـۨجِي ٱلۡمُؤۡمِنِينَ",
    translit:
      "Fastajabnā lahū wa najjaynāhu minal-ghamm, wa kadhālika nunjil-mu’minīn",
    translation:
      "So We responded to him and delivered him from distress; thus do We deliver those who have faith.",
    surah: 21,
    verse: 88,
    repeat,
    enableCounter,
  });
}

/** Al-Anbiya 21:89 — used in blessed-occasions-rajab-istighfar */
export function anbiya_89(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "وَزَكَرِيَّآ إِذۡ نَادَىٰ رَبَّهُۥ رَبِّ لَا تَذَرۡنِي فَرۡدٗا وَأَنتَ خَيۡرُ ٱلۡوَٰرِثِينَ",
    translit:
      "Wa zakariyyā idh nādā rabbahū rabbi lā tadharnī fardā wa anta khayrul-wārithīn",
    translation:
      'And remember Zakariyya, when he cried to his Lord: "O my Lord! Leave me not without offspring, for You are the best of bestowers."',
    surah: 21,
    verse: 89,
    repeat,
    enableCounter,
  });
}

/** Al-Anbiya 21:107 — used in visiting-the-beloved */
export function anbiya_107(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "وَمَآ أَرۡسَلۡنَٰكَ إِلَّا رَحۡمَةٗ لِّلۡعَٰلَمِينَ",
    translit: "Wa mā arsalnāka illā raḥmatan lil ‛ālamīn",
    translation:
      "We have sent you, [O Beloved], only as a mercy to the worlds.",
    surah: 21,
    verse: 107,
    repeat,
    enableCounter,
  });
}

/** end of Al-Mu'minun 23:29 — used in khulasah-various-supplications-duas-for-travel */
export function mu_minun_29(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… رَّبِّ أَنزِلۡنِي مُنزَلٗا مُّبَارَكٗا وَأَنتَ خَيۡرُ ٱلۡمُنزِلِينَ",
    translit: "… Rabbi anzilnī munzalan mubārakan wa anta khayrul munzilīn.",
    translation:
      "… My Lord! Let me land with Your blessings in a blessed landing place. For You alone can provide the best of landings.",
    surah: 23,
    verse: 29,
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

/** end of Al-Mu'minun 23:118 — used in blessed-occasions-rajab-istighfar, dalail-khayrat-4---Thursday */
export function mu_minun_118(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "… رَّبِّ ٱغۡفِرۡ وَٱرۡحَمۡ وَأَنتَ خَيۡرُ ٱلرَّٰحِمِينَ",
    translit: "… Rabbigh-fir war-ḥam wa anta khayrur-rāḥimīn",
    translation:
      '… "My Lord! Forgive and have mercy, for You are the Best of those who show mercy."',
    surah: 23,
    verse: 118,
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

/** Al-Ahzab 33:56 — used in dalail-khayrat-1---Monday, dalail-khayrat-4---Thursday, dalail-khayrat-allahs-most-beautiful-names, dalail-khayrat-names-of-prophet, khulasah-friday-salawat, khulasah-last-part-of-night-names-of-prophet, salawat-compilations-the-garden-of-love */
export function ahzab_56_verse(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "إِنَّ ٱللَّهَ وَمَلَٰٓئِكَتَهُۥ يُصَلُّونَ عَلَى ٱلنَّبِيِّۚ يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ صَلُّواْ عَلَيۡهِ وَسَلِّمُواْ تَسۡلِيمًا",
    translit:
      "InnAllaha wa malāʾikatahu yuṣallūna ʿalan nabiyyi yā ayyuhalladhīna āmanū ṣallū ʿalayhi wa sallimū taslīman.",
    translation:
      "Allah and His angels call down blessings on the Prophet. O you who believe call down blessings on him and ask for complete peace and safety for him.",
    surah: 33,
    verse: 56,
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

/** As-Saffat 37:96 — used in dalail-khayrat-6---Saturday */
export function saffat_96(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "وَٱللَّهُ خَلَقَكُمۡ وَمَا تَعۡمَلُونَ",
    translit: "wAllahu khalaqakum wa mā taʿmalūna",
    translation: "And Allah created you and what you do",
    surah: 37,
    verse: 96,
    repeat,
    enableCounter,
  });
}

/** As-Saffat 37:180 — used in khulasah-after-every-prayer-adkhar, khulasah-after-fajr-wird-as-sakran, khulasah-after-fajr-wird-of-shaykh-abu-bakr-bin-salim, khulasah-last-part-of-night-adhkar-before-dawn, khulasah-maghrib-ratib-al-attas, khulasah-various-supplications-dua-end-of-gatherings, salawat-compilations-the-garden-of-love */
export function saffat_180(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "سُبۡحَٰنَ رَبِّكَ رَبِّ ٱلۡعِزَّةِ عَمَّا يَصِفُونَ",
    translit: "Subḥāna rabbika rabbil ‛izzati ‛ammā yaṣifūn.",
    translation:
      "Exalted is your Lord, the Lord of might, above what they describe.",
    surah: 37,
    verse: 180,
    repeat,
    enableCounter,
  });
}

/** As-Saffat 37:181 — used in khulasah-after-every-prayer-adkhar, khulasah-after-fajr-wird-as-sakran, khulasah-after-fajr-wird-of-shaykh-abu-bakr-bin-salim, khulasah-last-part-of-night-adhkar-before-dawn, khulasah-maghrib-ratib-al-attas, khulasah-various-supplications-dua-end-of-gatherings, salawat-compilations-the-garden-of-love */
export function saffat_181(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "وَسَلَٰمٌ عَلَى ٱلۡمُرۡسَلِينَ",
    translit: "Wa salāmun ‛alal mursalīn.",
    translation: "And peace upon the messengers.",
    surah: 37,
    verse: 181,
    repeat,
    enableCounter,
  });
}

/** As-Saffat 37:182 — used in khulasah-after-every-prayer-adkhar, khulasah-after-fajr-wird-as-sakran, khulasah-after-fajr-wird-of-shaykh-abu-bakr-bin-salim, khulasah-last-part-of-night-adhkar-before-dawn, khulasah-maghrib-ratib-al-attas, khulasah-various-supplications-dua-end-of-gatherings, salawat-compilations-the-garden-of-love */
export function saffat_182(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "وَٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ",
    translit: "Walḥamdu lillāhi rabbil ‛ālamīn.",
    translation: "And praise to Allāh, Lord of the worlds.",
    surah: 37,
    verse: 182,
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

/** Az-Zumar 39:67 — used in khulasah-various-supplications-duas-for-travel */
export function zumar_67(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "وَمَا قَدَرُواْ ٱللَّهَ حَقَّ قَدۡرِهِۦ وَٱلۡأَرۡضُ جَمِيعٗا قَبۡضَتُهُۥ يَوۡمَ ٱلۡقِيَٰمَةِ وَٱلسَّمَٰوَٰتُ مَطۡوِيَّٰتُۢ بِيَمِينِهِۦۚ سُبۡحَٰنَهُۥ وَتَعَٰلَىٰ عَمَّا يُشۡرِكُونَ",
    translit:
      "Wa mā qadarullāha ḥaqqa qadrihī, wal arḍu jamī‘an qabḍatuhū yawmal qiyāmati was samāwātu maṭwiyyātum biyamīnihī, subḥānahū wa ta‘ālā ‘ammā yushrikūn.",
    translation:
      "They have not made a just appraisal of Allāh, such as He deserves. And on the Day of Resurrection the whole earth will be grasped by His Hand, with the Heavens folded up in His Right Hand. Glory be to Him! High is He above all that they associate as partners with Him!",
    surah: 39,
    verse: 67,
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

/** Ash-Shura 42:25 — used in visiting-the-beloved */
export function shura_25(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "وَهُوَ ٱلَّذِي يَقۡبَلُ ٱلتَّوۡبَةَ عَنۡ عِبَادِهِۦ وَيَعۡفُواْ عَنِ ٱلسَّيِّـَٔاتِ وَيَعۡلَمُ مَا تَفۡعَلُونَ",
    translit:
      "Wa huwal ladhī yaqbalut tawbata ‛an ‛ibādihī wa ya‛fū ‛anis sayyi’āti wa ya‛lamu mā taf‛alūn",
    translation:
      "It is He who accepts repentance for His servants and pardons evil deeds. He knows everything you do.",
    surah: 42,
    verse: 25,
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

/** Az-Zukhruf 43:14 — used in khulasah-various-supplications-duas-for-travel */
export function zukhruf_14(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "وَإِنَّآ إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ",
    translit: "wa innā ilā rabbinā lamunqalibūn",
    translation: "And to our Lord shall we surely return.",
    surah: 43,
    verse: 14,
    repeat,
    enableCounter,
  });
}

/** Al-Fath 48:1 — used in khulasah-dhuhr-adhkar */
export function fath_1(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "إِنَّا فَتَحۡنَا لَكَ فَتۡحٗا مُّبِينٗا",
    translit: "Innā fataḥnā laka fatḥam mubīnā.",
    translation: "Indeed, We have given you, [O Muḥammad], a clear conquest",
    surah: 48,
    verse: 1,
    repeat,
    enableCounter,
  });
}

/** Al-Fath 48:2 — used in khulasah-dhuhr-adhkar */
export function fath_2(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "لِّيَغۡفِرَ لَكَ ٱللَّهُ مَا تَقَدَّمَ مِن ذَنۢبِكَ وَمَا تَأَخَّرَ وَيُتِمَّ نِعۡمَتَهُۥ عَلَيۡكَ وَيَهۡدِيَكَ صِرَٰطٗا مُّسۡتَقِيمٗا",
    translit:
      "Liyaghfira lakallāhu mā taqaddama min dhambika wa mā ta'akh-khara wa yutimmu ni‛matahū ‛alayka wa yahdiyaka ṣirāṭam mustaqīmā.",
    translation:
      "That Allāh may forgive for you what preceded of your sin [i.e., errors] and what will follow and complete His favor upon you and guide you to a straight path",
    surah: 48,
    verse: 2,
    repeat,
    enableCounter,
  });
}

/** Al-Fath 48:3 — used in khulasah-dhuhr-adhkar, salawat-compilations-the-garden-of-love */
export function fath_3(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "وَيَنصُرَكَ ٱللَّهُ نَصۡرًا عَزِيزًا",
    translit: "Wa yanṣurakallāhu naṣran ‛azīzā.",
    translation: "And [that] Allāh may aid you with a mighty victory.",
    surah: 48,
    verse: 3,
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

/** Al-Hashr 59:21 — used in khulasah-dhuhr-adhkar, khulasah-maghrib-ratib-al-attas */
export function hashr_21(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "لَوۡ أَنزَلۡنَا هَٰذَا ٱلۡقُرۡءَانَ عَلَىٰ جَبَلٖ لَّرَأَيۡتَهُۥ خَٰشِعٗا مُّتَصَدِّعٗا مِّنۡ خَشۡيَةِ ٱللَّهِۚ وَتِلۡكَ ٱلۡأَمۡثَٰلُ نَضۡرِبُهَا لِلنَّاسِ لَعَلَّهُمۡ يَتَفَكَّرُونَ",
    translit:
      "Law anzalnā hādhal qur’āna ‛alā jabalil lara’aytahū khāshi‛am mutaṣaddi‛am min khashyatillāh, wa tilkal amthālu naḍribuhā linnāsi la‛Allāhum yatafakkarūn.",
    translation:
      "If We had sent down this Qur’ān upon a mountain, you would have seen it humbled and splitting from fear of Allāh. And these examples We present to the people that perhaps they will give thought.",
    surah: 59,
    verse: 21,
    repeat,
    enableCounter,
  });
}

/** Al-Hashr 59:22 — used in khulasah-dhuhr-adhkar, khulasah-maghrib-ratib-al-attas */
export function hashr_22(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "هُوَ ٱللَّهُ ٱلَّذِي لَآ إِلَٰهَ إِلَّا هُوَۖ عَٰلِمُ ٱلۡغَيۡبِ وَٱلشَّهَٰدَةِۖ هُوَ ٱلرَّحۡمَٰنُ ٱلرَّحِيمُ",
    translit:
      "Huwallāhulladhī lā ilāha illā huwa ‛ālimul ghaybi wash shahādati huwar raḥmānur raḥīm.",
    translation:
      "He is Allāh, other than whom there is no deity, Knower of the unseen and the witnessed. He is the Entirely Merciful, the Especially Merciful.",
    surah: 59,
    verse: 22,
    repeat,
    enableCounter,
  });
}

/** Al-Hashr 59:23 — used in khulasah-dhuhr-adhkar, khulasah-maghrib-ratib-al-attas */
export function hashr_23(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "هُوَ ٱللَّهُ ٱلَّذِي لَآ إِلَٰهَ إِلَّا هُوَ ٱلۡمَلِكُ ٱلۡقُدُّوسُ ٱلسَّلَٰمُ ٱلۡمُؤۡمِنُ ٱلۡمُهَيۡمِنُ ٱلۡعَزِيزُ ٱلۡجَبَّارُ ٱلۡمُتَكَبِّرُۚ سُبۡحَٰنَ ٱللَّهِ عَمَّا يُشۡرِكُونَ",
    translit:
      "Huwallāhulladhī lā ilāha illā huwal malikul quddūsus salāmul muʾminul muhayminul ‛azīzul jabbārul mutakabbir, subhānallāhi ‛ammā yushrikūn.",
    translation:
      "He is Allāh, other than whom there is no deity, the Sovereign, the Pure, the Perfection, the Grantor of Security, the Overseer, the Exalted in Might, the Compeller, the Superior. Exalted is Allāh above whatever they associate with Him.",
    surah: 59,
    verse: 23,
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

/** Al-Hashr 59:24 — used in khulasah-dhuhr-adhkar, khulasah-maghrib-ratib-al-attas */
export function hashr_24_verse(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic:
      "هُوَ ٱللَّهُ ٱلۡخَٰلِقُ ٱلۡبَارِئُ ٱلۡمُصَوِّرُۖ لَهُ ٱلۡأَسۡمَآءُ ٱلۡحُسۡنَىٰۚ يُسَبِّحُ لَهُۥ مَا فِي ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِۖ وَهُوَ ٱلۡعَزِيزُ ٱلۡحَكِيمُ",
    translit:
      "Huwallāhul khāliqul bāri’ul musawwiru lahul asmā’ul ḥusnā, yusabbiḥu lahū mā fissamāwāti wal arḍi wa huwal ‛azīzul ḥakīm.",
    translation:
      "He is Allāh, the Creator, the Producer, the Fashioner; to Him belong the best names. Whatever is in the heavens and earth is exalting Him. And He is the Exalted in Might, the Wise.",
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

/** Al-Qalam 68:1 — used in salawat-compilations-majma-al-lataif-1---Friday */
export function qalam_1(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "نٓۚ وَٱلۡقَلَمِ وَمَا يَسۡطُرُونَ",
    translit: "Nūn. Wal qalami wa mā yasṭurūn",
    translation: "Nūn. By the pen and what they inscribe,",
    surah: 68,
    verse: 1,
    repeat,
    enableCounter,
  });
}

/** Al-Qalam 68:4 — used in salawat-compilations-majma-al-lataif-4---Monday, visiting-the-beloved */
export function qalam_4(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٖ",
    translit: "Wa innaka la‛alā khuluqin ‛aẓīm",
    translation: "And indeed, you are of a great moral character.",
    surah: 68,
    verse: 4,
    repeat,
    enableCounter,
  });
}

/** Al-Mursalat 77:23 — used in khulasah-various-supplications-duas-for-travel */
export function mursalat_23(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "فَقَدَرۡنَا فَنِعۡمَ ٱلۡقَٰدِرُونَ",
    translit: "Faqadarnā fani‘mal qādirūn.",
    translation:
      "Thus have We determined (the stages of development); and indeed Our power to determine is excellent.",
    surah: 77,
    verse: 23,
    repeat,
    enableCounter,
  });
}

/** Ad-Duha 93:4 — used in salawat-compilations-majma-al-lataif-4---Monday */
export function duha_4(repeat = 1, enableCounter?: boolean) {
  return new QuranDhikrEntryModel({
    arabic: "وَلَلۡأٓخِرَةُ خَيۡرٞ لَّكَ مِنَ ٱلۡأُولَىٰ",
    translit: "Wa lal ākhiratu khayrul laka minal ūlā",
    translation: "And the Hereafter is better for you than the first [life].",
    surah: 93,
    verse: 4,
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
        translit: "… ibtuliya-l-mu'minūna wa zulzilū zilzālan shadīdan",
        translation:
          "… the believers were tried and shaken with a mighty shaking.",
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

// ---- verses quoted inside a qasida, as QuranEntryModel ----
// A qasida verse has no parent QuranModel, so each factory carries its own surah.
// Naming: <surah>_<verse>_q, one entry per verse, no arguments (a qasida line has no repeat).
// A "_verse" suffix on the dhikr factories above marks the whole verse where the plain name is a partial quote or a section.

/** Al-Fatihah 1:1 — used in mawlids-shimmering-light */
export function fatihah_1_q() {
  return new QuranEntryModel({
    arabic: "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ",
    translit: "bismi-llāhi r-raḥmāni r-raḥīm",
    translation: "In the name of Allah, Most Compassionate, Ever-Merciful",
    verse: 1,
    surah: 1,
  });
}

/** end of Al-Baqarah 2:201 — used in hadrahs-hadrah-badriyyah */
export function baqarah_201_q() {
  return new QuranEntryModel({
    arabic: "… رَبَّنَآ ءَاتِنَا فِي ٱلدُّنۡيَا حَسَنَةٗ وَفِي ٱلۡأٓخِرَةِ حَسَنَةٗ وَقِنَا عَذَابَ ٱلنَّارِ",
    translit:
      "… Rabbanā ātinā fid dunyā ḥasanatan wa fil ākhirati ḥasanatan wa qinā ‛adhāban nār",
    translation:
      "… Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.",
    verse: 201,
    surah: 2,
  });
}

/** At-Tawbah 9:128 — used in mawlids-mawlid-dayba-i, mawlids-shimmering-light */
export function tawbah_128_q() {
  return new QuranEntryModel({
    arabic:
      "لَقَدۡ جَآءَكُمۡ رَسُولٞ مِّنۡ أَنفُسِكُمۡ عَزِيزٌ عَلَيۡهِ مَا عَنِتُّمۡ حَرِيصٌ عَلَيۡكُم بِٱلۡمُؤۡمِنِينَ رَءُوفٞ رَّحِيمٞ",
    translit:
      "Laqad jā’akum rasūlum min anfusikum ‛azīzun ‛alayhi mā ‛anittum ḥarīṣun ‛alaykum bil mu’minīna ra’ūfur raḥīm.",
    translation:
      "There has certainly come to you a Messenger from among yourselves. Grievous to him is what you suffer; [he is] concerned over you [i.e., your guidance] and to the believers is kind and merciful.",
    verse: 128,
    surah: 9,
  });
}

/** At-Tawbah 9:129 — used in mawlids-mawlid-dayba-i, mawlids-shimmering-light */
export function tawbah_129_q() {
  return new QuranEntryModel({
    arabic:
      "فَإِن تَوَلَّوۡاْ فَقُلۡ حَسۡبِيَ ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَۖ عَلَيۡهِ تَوَكَّلۡتُۖ وَهُوَ رَبُّ ٱلۡعَرۡشِ ٱلۡعَظِيمِ",
    translit:
      "Fa in tawallaw faqul ḥasbiyallāhu lā ilāha illā huwa, ‛alayhi tawakkaltu, wa huwa rabbul ‛arshil ‛aẓīm.",
    translation:
      'But if they turn away, [O Muḥammad], say, "Sufficient for me is Allāh; there is no deity except Him. On Him I have relied, and He is the Lord of the Great Throne."',
    verse: 129,
    surah: 9,
  });
}

/** Al-Anbiya 21:101 — used in hadrahs-hadrah-ba-sawdan */
export function anbiya_101_q() {
  return new QuranEntryModel({
    arabic: "إِنَّ ٱلَّذِينَ سَبَقَتۡ لَهُم مِّنَّا ٱلۡحُسۡنَىٰٓ أُوْلَٰٓئِكَ عَنۡهَا مُبۡعَدُونَ",
    translit:
      "Inna alladhīna sabaqat lahum minnal-ḥusnā ulā’ika ‛anhā mub‛adūn.",
    translation:
      "Indeed, those for whom the best [reward] has preceded from Us - they are from it far removed.",
    verse: 101,
    surah: 21,
  });
}

/** Al-Anbiya 21:102 — used in hadrahs-hadrah-ba-sawdan */
export function anbiya_102_q() {
  return new QuranEntryModel({
    arabic: "لَا يَسۡمَعُونَ حَسِيسَهَاۖ وَهُمۡ فِي مَا ٱشۡتَهَتۡ أَنفُسُهُمۡ خَٰلِدُونَ",
    translit: "Lā yasma‛ūna ḥasīsahā wa hum fī mashtahat anfusuhum khālidūn.",
    translation:
      "They will not hear its sound, while they are, in that which their souls desire, abiding eternally.",
    verse: 102,
    surah: 21,
  });
}

/** Al-Anbiya 21:103 — used in hadrahs-hadrah-ba-sawdan */
export function anbiya_103_q() {
  return new QuranEntryModel({
    arabic:
      "لَا يَحۡزُنُهُمُ ٱلۡفَزَعُ ٱلۡأَكۡبَرُ وَتَتَلَقَّىٰهُمُ ٱلۡمَلَٰٓئِكَةُ هَٰذَا يَوۡمُكُمُ ٱلَّذِي كُنتُمۡ تُوعَدُونَ",
    translit:
      "Lā yaḥzunuhumul-faza‛ul-akbaru wa tatalaqqāhumul-malā’ikatu hādhā yawmukumul-ladhī kuntum tū‛adūn.",
    translation:
      'They will not be grieved by the greatest terror, and the angels will meet them, [saying], "This is your Day which you have been promised" -',
    verse: 103,
    surah: 21,
  });
}

/** Al-Anbiya 21:104 — used in hadrahs-hadrah-ba-sawdan */
export function anbiya_104_q() {
  return new QuranEntryModel({
    arabic:
      "يَوۡمَ نَطۡوِي ٱلسَّمَآءَ كَطَيِّ ٱلسِّجِلِّ لِلۡكُتُبِۚ كَمَا بَدَأۡنَآ أَوَّلَ خَلۡقٖ نُّعِيدُهُۥۚ وَعۡدًا عَلَيۡنَآۚ إِنَّا كُنَّا فَٰعِلِينَ",
    translit:
      "Yawma naṭwis-samā’a kaṭayyis-sijilli lil-kutub, kamā bada’nā awwala khalqin nu‛īduh, wa‛dan ‛alaynā, innā kunnā fā‛ilīn.",
    translation:
      "The Day when We will fold the heaven like the folding of a [written] sheet for the records. As We began the first creation, We will repeat it. [That is] a promise binding upon Us. Indeed, We will do it.",
    verse: 104,
    surah: 21,
  });
}

/** Al-Anbiya 21:105 — used in hadrahs-hadrah-ba-sawdan */
export function anbiya_105_q() {
  return new QuranEntryModel({
    arabic: "وَلَقَدۡ كَتَبۡنَا فِي ٱلزَّبُورِ مِنۢ بَعۡدِ ٱلذِّكۡرِ أَنَّ ٱلۡأَرۡضَ يَرِثُهَا عِبَادِيَ ٱلصَّٰلِحُونَ",
    translit:
      "Wa laqad katabnā fiz-zabūri min ba‛dhidh-dhikri annal-arḍa yarithuhā ‛ibādiyaṣ-ṣāliḥūn.",
    translation:
      "And We have already written in the book [of Psalms] after the [previous] mention that the land [of Paradise] is inherited by My righteous servants.",
    verse: 105,
    surah: 21,
  });
}

/** Al-Anbiya 21:106 — used in hadrahs-hadrah-ba-sawdan */
export function anbiya_106_q() {
  return new QuranEntryModel({
    arabic: "إِنَّ فِي هَٰذَا لَبَلَٰغٗا لِّقَوۡمٍ عَٰبِدِينَ",
    translit: "Inna fī hādhā labalāghan liqawmin ‛ābidīn.",
    translation:
      "Indeed, in this [Qur’ān] is notification for a worshipping people.",
    verse: 106,
    surah: 21,
  });
}

/** Al-Anbiya 21:107 — used in hadrahs-hadrah-ba-sawdan */
export function anbiya_107_q() {
  return new QuranEntryModel({
    arabic: "وَمَآ أَرۡسَلۡنَٰكَ إِلَّا رَحۡمَةٗ لِّلۡعَٰلَمِينَ",
    translit: "Wa mā arsalnāka illā raḥmatan lil-‛ālamīn.",
    translation:
      "And We have not sent you, [O Muḥammad], except as a mercy to the worlds.",
    verse: 107,
    surah: 21,
  });
}

/** Al-Anbiya 21:108 — used in hadrahs-hadrah-ba-sawdan */
export function anbiya_108_q() {
  return new QuranEntryModel({
    arabic: "قُلۡ إِنَّمَا يُوحَىٰٓ إِلَيَّ أَنَّمَآ إِلَٰهُكُمۡ إِلَٰهٞ وَٰحِدٞۖ فَهَلۡ أَنتُم مُّسۡلِمُونَ",
    translit:
      "Qul innamā yūḥā ilayya annamā ilāhukum ilāhun wāḥid, fahal antum muslimūn.",
    translation:
      'Say, "It is only revealed to me that your god is but one God; so will you be Muslims [in submission to Him]?"',
    verse: 108,
    surah: 21,
  });
}

/** Al-Anbiya 21:109 — used in hadrahs-hadrah-ba-sawdan */
export function anbiya_109_q() {
  return new QuranEntryModel({
    arabic: "فَإِن تَوَلَّوۡاْ فَقُلۡ ءَاذَنتُكُمۡ عَلَىٰ سَوَآءٖۖ وَإِنۡ أَدۡرِيٓ أَقَرِيبٌ أَم بَعِيدٞ مَّا تُوعَدُونَ",
    translit:
      "Fa in tawallaw faqul ādhantukum ‛alā sawā’, wa in adrī a qarībun am ba‛īdun mā tū‛adūn.",
    translation:
      'But if they turn away, then say, "I have announced to [all of] you equally. And I know not whether near or far is that which you are promised.',
    verse: 109,
    surah: 21,
  });
}

/** Al-Anbiya 21:110 — used in hadrahs-hadrah-ba-sawdan */
export function anbiya_110_q() {
  return new QuranEntryModel({
    arabic: "إِنَّهُۥ يَعۡلَمُ ٱلۡجَهۡرَ مِنَ ٱلۡقَوۡلِ وَيَعۡلَمُ مَا تَكۡتُمُونَ",
    translit: "Innahū ya‛lamul-jahra minal-qawli wa ya‛lamu mā taktumūn.",
    translation:
      "Indeed, He knows what is declared of speech, and He knows what you conceal.",
    verse: 110,
    surah: 21,
  });
}

/** Al-Anbiya 21:111 — used in hadrahs-hadrah-ba-sawdan */
export function anbiya_111_q() {
  return new QuranEntryModel({
    arabic: "وَإِنۡ أَدۡرِي لَعَلَّهُۥ فِتۡنَةٞ لَّكُمۡ وَمَتَٰعٌ إِلَىٰ حِينٖ",
    translit: "Wa in adrī la‛allahū fitnatun lakum wa matā‛un ilā ḥīn.",
    translation:
      'And I know not; perhaps it is a trial for you and enjoyment for a time."',
    verse: 111,
    surah: 21,
  });
}

/** Al-Anbiya 21:112 — used in hadrahs-hadrah-ba-sawdan */
export function anbiya_112_q() {
  return new QuranEntryModel({
    arabic: "قَٰلَ رَبِّ ٱحۡكُم بِٱلۡحَقِّۗ وَرَبُّنَا ٱلرَّحۡمَٰنُ ٱلۡمُسۡتَعَانُ عَلَىٰ مَا تَصِفُونَ",
    translit:
      "Qāla rabbiḥ-kum bil-ḥaqq, wa rabbunar-raḥmānul-musta‛ānu ‛alā mā taṣifūn.",
    translation:
      '[The Prophet (ﷺ)] has said, "My Lord, judge [between us] in truth. And our Lord is the Most Merciful, the one whose help is sought against that which you describe."',
    verse: 112,
    surah: 21,
  });
}

/** Al-Ahzab 33:56 — used in mawlids-mawlid-dayba-i, mawlids-shimmering-light */
export function ahzab_56_q() {
  return new QuranEntryModel({
    arabic:
      "إِنَّ ٱللَّهَ وَمَلَٰٓئِكَتَهُۥ يُصَلُّونَ عَلَى ٱلنَّبِيِّۚ يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ صَلُّواْ عَلَيۡهِ وَسَلِّمُواْ تَسۡلِيمًا",
    translit:
      "Innallāha wa malā’ikatahū yuṣallūna ‛alan nabiyy, yā ayyuhal ladhīna āmanū ṣallū ‛alayhi wa sallimū taslīmā.",
    translation:
      "Indeed, Allāh confers blessing upon the Prophet, and His angels [ask Him to do so]. O you who have believed, ask [Allāh to confer] blessing upon him and ask [Allāh to grant him] peace.",
    verse: 56,
    surah: 33,
  });
}

/** As-Saffat 37:180 — used in khulasah-friday-qasidah, mawlids-mawlid-barzanji, mawlids-mawlid-dayba-i, mawlids-shimmering-light, mawlids-the-pure-drink */
export function saffat_180_q() {
  return new QuranEntryModel({
    arabic: "سُبۡحَٰنَ رَبِّكَ رَبِّ ٱلۡعِزَّةِ عَمَّا يَصِفُونَ",
    translit: "Subḥāna rabbika rabbil ‛izzati ‛ammā yaṣifūn.",
    translation:
      "Exalted is your Lord, the Lord of might, above what they describe.",
    verse: 180,
    surah: 37,
  });
}

/** As-Saffat 37:181 — used in khulasah-friday-qasidah, mawlids-mawlid-barzanji, mawlids-mawlid-dayba-i, mawlids-shimmering-light, mawlids-the-pure-drink */
export function saffat_181_q() {
  return new QuranEntryModel({
    arabic: "وَسَلَٰمٌ عَلَى ٱلۡمُرۡسَلِينَ",
    translit: "Wa salāmun ‛alal mursalīn.",
    translation: "And peace upon the messengers.",
    verse: 181,
    surah: 37,
  });
}

/** As-Saffat 37:182 — used in khulasah-friday-qasidah, mawlids-mawlid-barzanji, mawlids-mawlid-dayba-i, mawlids-shimmering-light, mawlids-the-pure-drink */
export function saffat_182_q() {
  return new QuranEntryModel({
    arabic: "وَٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ",
    translit: "Walḥamdu lillāhi rabbil ‛ālamīn.",
    translation: "And praise to Allāh, Lord of the worlds.",
    verse: 182,
    surah: 37,
  });
}

/** Al-Fath 48:1 — used in mawlids-mawlid-dayba-i, mawlids-shimmering-light */
export function fath_1_q() {
  return new QuranEntryModel({
    arabic: "إِنَّا فَتَحۡنَا لَكَ فَتۡحٗا مُّبِينٗا",
    translit: "Innā fataḥnā laka fatḥam mubīnā.",
    translation: "Indeed, We have given you, [O Muḥammad], a clear conquest",
    verse: 1,
    surah: 48,
  });
}

/** Al-Fath 48:2 — used in mawlids-mawlid-dayba-i, mawlids-shimmering-light */
export function fath_2_q() {
  return new QuranEntryModel({
    arabic:
      "لِّيَغۡفِرَ لَكَ ٱللَّهُ مَا تَقَدَّمَ مِن ذَنۢبِكَ وَمَا تَأَخَّرَ وَيُتِمَّ نِعۡمَتَهُۥ عَلَيۡكَ وَيَهۡدِيَكَ صِرَٰطٗا مُّسۡتَقِيمٗا",
    translit:
      "Liyaghfira lakallāhu mā taqaddama min dhanbika wa mā ta’akhkhara wa yutimma ni‛matahū ‛alayka wa yahdiyaka ṣirāṭam mustaqīmā.",
    translation:
      "That Allāh may forgive for you what preceded of your sin [i.e., errors] and what will follow and complete His favor upon you and guide you to a straight path",
    verse: 2,
    surah: 48,
  });
}

/** Al-Fath 48:3 — used in mawlids-mawlid-dayba-i, mawlids-shimmering-light */
export function fath_3_q() {
  return new QuranEntryModel({
    arabic: "وَيَنصُرَكَ ٱللَّهُ نَصۡرًا عَزِيزًا",
    translit: "Wa yanṣurakallāhu naṣran ‛azīzā.",
    translation: "And [that] Allāh may aid you with a mighty victory.",
    verse: 3,
    surah: 48,
  });
}
