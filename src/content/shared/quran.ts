import { QuranEntryModel, QuranModel } from "@/models/recitation";

export function fatihah(
  repeat: number = 1,
  instruction: string = "",
  basmallah: boolean = true,
) {
  return new QuranModel(
    "Fatihah",
    1,

    [
      new QuranEntryModel({
        arabic: "ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ ",
        translit: "Alḥamdulillāhi rabbil ‛ālamīn.",
        translation: "All Praise be to Allāh, Lord of the Universe",
        verse: 1,
      }),
      new QuranEntryModel({
        arabic: "ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ ",
        translit: "Arraḥmānir raḥīm",
        translation: "The Most Compassionate, Most Merciful",
        verse: 2,
      }),
      new QuranEntryModel({
        arabic: "مَٰلِكِ يَوۡمِ ٱلدِّينِ",
        translit: "Māliki yawmid dīn.",
        translation: "Lord of the Day of Judgement",
        verse: 3,
      }),
      new QuranEntryModel({
        arabic: "إِيَّاكَ نَعۡبُدُ وَإِيَّاكَ نَسۡتَعِينُ ",
        translit: "Iyyāka na‛budu wa iyyāka nasta‛īn.",
        translation:
          "You alone do we worship, and to You alone do we turn for help.",
        verse: 4,
      }),
      new QuranEntryModel({
        arabic: "ٱهۡدِنَا ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ ",
        translit: "Ihdinaṣ ṣirāṭal mustaqīm.",
        translation: "Guide us to the Straight Way.",
        verse: 5,
      }),
      new QuranEntryModel({
        arabic: "صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ وَلَا ٱلضَّآلِّينَ (آمِين)",
        translit:
          "Ṣirāṭalladhīna an‛amta ‛alayhim, ghayril maghḍūbi ‛alayhim walaḍ ḍāllīn. Āmīn",
        translation:
          "The Way of those on whom You have bestowed Your grace; not the way of those who have earned Your anger, nor of those who went astray. Āmīn",
        verse: 6,
      }),
    ],
    instruction,
    basmallah,
    repeat,
  );
}

export function baqarah_ayat_al_kursi(
  repeat: number = 1,
  instruction: string = "",
) {
  return new QuranModel(
    "Al-Baqarah",
    2,
    [
      new QuranEntryModel({
        arabic:
          "ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلۡحَيُّ ٱلۡقَيُّومُۚ لَا تَأۡخُذُهُۥ سِنَةٞ وَلَا نَوۡمٞۚ لَّهُۥ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلۡأَرۡضِۗ مَن ذَا ٱلَّذِي يَشۡفَعُ عِندَهُۥٓ إِلَّا بِإِذۡنِهِۦۚ يَعۡلَمُ مَا بَيۡنَ أَيۡدِيهِمۡ وَمَا خَلۡفَهُمۡۖ وَلَا يُحِيطُونَ بِشَيۡءٖ مِّنۡ عِلۡمِهِۦٓ إِلَّا بِمَا شَآءَۚ وَسِعَ كُرۡسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَۖ وَلَا يَـُٔودُهُۥ حِفۡظُهُمَاۚ وَهُوَ ٱلۡعَلِيُّ ٱلۡعَظِيمُ ",
        translit:
          "Allāhu lā ilāha illā huwa al-ḥayyu al-qayyūmu lā ta’khudhuhu sinatun wa lā nawmun lahu mā fī al-samāwāti wa mā fī al-arḍi man dhā alladhī yashfa‘u ‘indahu illā bi-idhnihi ya‘lamu mā bayna aydīhim wa mā khalfahum wa lā yuḥīṭūna bi-shay’in min ‘ilmihi illā bi-mā shā’a wasi‘a kursīyuhu al-samāwāti wa al-arḍa wa lā ya’ūduhu ḥifẓuhumā wa huwa al-‘alīyu al-‘aẓīmu",
        translation:
          "Allah! There is no deity except Him, the Ever-Living, the Sustainer of [all] existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is [presently] before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi (Throne) extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
        verse: 255,
      }),
    ],
    instruction,
    false,
    repeat,
  );
}

export function baqarah_amana_rasul(
  repeat: number = 1,
  instruction: string = "",
) {
  return new QuranModel(
    "Al-Baqarah",
    2,
    [
      new QuranEntryModel({
        arabic:
          "ءَامَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيۡهِ مِن رَّبِّهِۦ وَٱلۡمُؤۡمِنُونَۚ كُلٌّ ءَامَنَ بِٱللَّهِ وَمَلَٰٓئِكَتِهِۦ وَكُتُبِهِۦ وَرُسُلِهِۦ لَا نُفَرِّقُ بَيۡنَ أَحَدٖ مِّن رُّسُلِهِۦۚ وَقَالُواْ سَمِعۡنَا وَأَطَعۡنَاۖ غُفۡرَانَكَ رَبَّنَا وَإِلَيۡكَ ٱلۡمَصِيرُ",
        translit:
          "Āmanarrasūlu bimā unzila ilayhi mirrabbihī wal mu’minūn, kullun āmana billāhi wa malā’ikatihī wa kutubihī wa rusulihī, lā nufarriqu bayna aḥadim mirrusulih, wa qālū sami‛nā wa aṭa‛nā, ghufrānaka rabbanā wa ilaykal maṣīr.",
        translation:
          "The Messenger believes in what has been revealed to him from his Lord, and (so do) the believers. They all believe in His Angels, His Books and His Messengers. They say: “We do not differentiate between any of His Messengers. We hear and we obey. We ask You forgiveness our Lord, and to You will we all return.",
        verse: 285,
      }),
      new QuranEntryModel({
        arabic:
          "لَا يُكَلِّفُ ٱللَّهُ نَفۡسًا إِلَّا وُسۡعَهَاۚ لَهَا مَا كَسَبَتۡ وَعَلَيۡهَا مَا ٱكۡتَسَبَتۡۗ رَبَّنَا لَا تُؤَاخِذۡنَآ إِن نَّسِينَآ أَوۡ أَخۡطَأۡنَاۚ رَبَّنَا وَلَا تَحۡمِلۡ عَلَيۡنَآ إِصۡرٗا كَمَا حَمَلۡتَهُۥ عَلَى ٱلَّذِينَ مِن قَبۡلِنَاۚ رَبَّنَا وَلَا تُحَمِّلۡنَا مَا لَا طَاقَةَ لَنَا بِهِۦۖ وَٱعۡفُ عَنَّا وَٱغۡفِرۡ لَنَا وَٱرۡحَمۡنَآۚ أَنتَ مَوۡلَىٰنَا فَٱنصُرۡنَا عَلَى ٱلۡقَوۡمِ ٱلۡكَٰفِرِينَ (آمِين)",
        translit:
          "Lā yukallifullāhu nafsan illā wus‛ahā, lahā mā kasabat wa ‛alayhā maktasabat, rabbanā lā tu’ākhidhnā innasīnā aw akhṭa’nā, rabbanā walā taḥmil ‛alaynā iṣran kamā ḥamaltahū ‛alalladhīna min  qablinā, rabbanā walā tuḥammilnā mā lā ṭāqata lanā bihī, wa‛fu ‛annā, waghfir lanā, warḥamnā, anta mawlanā fanṣurnā ‛alal qawmil kāfirīn. (Āmīn)",
        translation:
          "Allāh will not burden any soul with more than what it can bear. It has [the good] it has earned, and [the evil] it has incurred. “Our Lord! Do not take us to task if we forget or make a mistake. Our Lord, do not place on us a burden like that which you have placed on those before us! Our Lord, do not place on us a burden that we do not have the strength to bear! Pardon us, and grant us forgiveness; and have mercy on us. You are our Protector; so grant us victory over the disbelieving people.” [Āmīn]",
        verse: 286,
      }),
    ],
    instruction,
    false,
    repeat,
  );
}

export function ikhlas(
  repeat: number = 1,
  instruction: string = "",
  basmallah: boolean = true,
) {
  return new QuranModel(
    "Ikhlas",
    112,
    [
      new QuranEntryModel({
        arabic: "قُلۡ هُوَ ٱللَّهُ أَحَدٌ ",
        translit: "Qul HuwaLlāhu aḥad.",
        translation: "Say, ‘He is God the One, ",
        verse: 1,
      }),
      new QuranEntryModel({
        arabic: "ٱللَّهُ ٱلصَّمَدُ ",
        translit: "Allāhus-Ṣamad.",
        translation: "God the eternally Besought.",
        verse: 2,
      }),
      new QuranEntryModel({
        arabic: "لَمۡ يَلِدۡ وَلَمۡ يُولَدۡ ",
        translit: "Lam yalid wa lam yūlad.",
        translation: "He begot no one nor was He begotten.",
        verse: 3,
      }),
      new QuranEntryModel({
        arabic: "وَلَمۡ يَكُن لَّهُۥ كُفُوًا أَحَدُۢ ",
        translit: "Wa lam yakun lahu kufuwan aḥad. (3x)",
        translation: "No one is comparable to Him.’",
        verse: 4,
      }),
    ],
    instruction,
    basmallah,
    repeat,
  );
}

export function falaq(
  repeat: number = 1,
  instruction: string = "",
  basmallah: boolean = true,
) {
  return new QuranModel(
    "Falaq",
    113,
    [
      new QuranEntryModel({
        arabic: "قُلۡ أَعُوذُ بِرَبِّ ٱلۡفَلَقِ",
        translit: "Qul aʿūdhu bi rabb il-falaq.",
        translation: "Say, ‘I take refuge with the Lord of daybreak",
        verse: 1,
      }),
      new QuranEntryModel({
        arabic: "مِن شَرِّ مَا خَلَقَ",
        translit: " Min sharri mā khalaq.",
        translation: "against the harm in what He has created,",
        verse: 2,
      }),
      new QuranEntryModel({
        arabic: "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
        translit: "Wa min sharri ghāsiqin idhā waqab.",
        translation: "the harm in the night when darkness gathers,",
        verse: 3,
      }),
      new QuranEntryModel({
        arabic: "وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِي ٱلۡعُقَدِ",
        translit: "Wa min sharri in-naffathāti fil ʿuqad.",
        translation: "the harm in witches when they blow on knots,",
        verse: 4,
      }),
      new QuranEntryModel({
        arabic: "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
        translit: "Wa min sharri ḥāsidin idhā ḥasad.",
        translation: "the harm in the envier when he envies.’",
        verse: 5,
      }),
    ],
    instruction,
    basmallah,
    repeat,
  );
}

export function nas(
  repeat: number = 1,
  instruction: string = "",
  basmallah: boolean = true,
) {
  return new QuranModel(
    "Nas",
    114,
    [
      new QuranEntryModel({
        arabic: "قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ ",
        translit: "Qul aʿūdhu bi rabb in-nās.",
        translation: "Say, ‘I seek refuge with the Lord of people,",
        verse: 1,
      }),
      new QuranEntryModel({
        arabic: "مَلِكِ ٱلنَّاسِ",
        translit: "Malik in-nās.",
        translation: " the King of people,",
        verse: 2,
      }),
      new QuranEntryModel({
        arabic: "إِلَٰهِ ٱلنَّاسِ",
        translit: "Ilāh in-nās.",
        translation: "the God of people,",
        verse: 3,
      }),
      new QuranEntryModel({
        arabic: "مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ",
        translit: " Min sharril waswāsil khannās.",
        translation: "against the harm of the slinking whisperer",
        verse: 4,
      }),
      new QuranEntryModel({
        arabic: "ٱلَّذِي يُوَسۡوِسُ فِي صُدُورِ ٱلنَّاسِ",
        translit: "Al-ladhī yuwaswisu fī ṣudūr in-nās.",
        translation: "—who whispers into the hearts of people—",
        verse: 5,
      }),
      new QuranEntryModel({
        arabic: "مِنَ ٱلۡجِنَّةِ وَٱلنَّاسِ",
        translit: "Min aljinnati wan-nās.",
        translation: "whether they be jinn or people.’",
        verse: 6,
      }),
    ],
    instruction,
    basmallah,
    repeat,
  );
}
