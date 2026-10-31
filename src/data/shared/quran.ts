import { quran as buruj_source } from "@/data/shared/quran-buruj";
import { quran as duha_source } from "@/data/shared/quran-duha";
import { quran as dukhan_source } from "@/data/shared/quran-dukhan";
import { quran as kafirun_source } from "@/data/shared/quran-kafirun";
import { quran as kahf_source } from "@/data/shared/quran-kahf";
import { quran as kawthar_source } from "@/data/shared/quran-kawthar";
import { quran as masad_source } from "@/data/shared/quran-masad";
import { quran as mulk_source } from "@/data/shared/quran-mulk";
import { quran as muzzammil_source } from "@/data/shared/quran-muzzammil";
import { quran as nasr_source } from "@/data/shared/quran-nasr";
import { quran as qadr_source } from "@/data/shared/quran-qadr";
import { quran as quraysh_source } from "@/data/shared/quran-quraysh";
import { quran as sajdah_source } from "@/data/shared/quran-sajdah";
import { quran as sharh_source } from "@/data/shared/quran-sharh";
import { quran as tariq_source } from "@/data/shared/quran-tariq";
import { quran as waqiah_source } from "@/data/shared/quran-waqiah";
import { quran as yasin_source } from "@/data/shared/quran-yasin";
import {
  DhikrEntryModel,
  DhikrModel,
  QuranEntryModel,
  QuranModel,
} from "@/models/recitation";

export function taawwudh() {
  return new DhikrModel({
    entries: [
      new DhikrEntryModel({
        arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
        translit: "Aʿūdhu biLlāhi minash shayṭānir rajīm.",
        translation: "I seek refuge in Allah from the accursed Satan.",
      }),
    ],
  });
}

export function fatihah(
  repeat: number = 1,
  instruction: string = "",
  basmallah: boolean = true,
) {
  return new QuranModel({
    title: "Fatihah",
    surah: 1,
    entries: [
      new QuranEntryModel({
        arabic: "ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ",
        translit: "Alḥamdulillāhi rabbil ‛ālamīn.",
        translation: "[All] praise is [due] to Allāh, Lord of the worlds -",
        verse: 2,
      }),
      new QuranEntryModel({
        arabic: "ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ",
        translit: "Arraḥmānir raḥīm",
        translation: "The Entirely Merciful, the Especially Merciful,",
        verse: 3,
      }),
      new QuranEntryModel({
        arabic: "مَٰلِكِ يَوۡمِ ٱلدِّينِ",
        translit: "Māliki yawmid dīn.",
        translation: "Sovereign of the Day of Recompense.",
        verse: 4,
      }),
      new QuranEntryModel({
        arabic: "إِيَّاكَ نَعۡبُدُ وَإِيَّاكَ نَسۡتَعِينُ",
        translit: "Iyyāka na‛budu wa iyyāka nasta‛īn.",
        translation: "It is You we worship and You we ask for help.",
        verse: 5,
      }),
      new QuranEntryModel({
        arabic: "ٱهۡدِنَا ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ",
        translit: "Ihdinaṣ ṣirāṭal mustaqīm.",
        translation: "Guide us to the straight path -",
        verse: 6,
      }),
      new QuranEntryModel({
        arabic: "صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ وَلَا ٱلضَّآلِّينَ",
        translit:
          "Ṣirāṭalladhīna an‛amta ‛alayhim, ghayril maghḍūbi ‛alayhim walaḍ ḍāllīn.",
        translation:
          "The path of those upon whom You have bestowed favor, not of those who have earned [Your] anger or of those who are astray.",
        verse: 7,
      }),
    ],
    instruction,
    basmallah,
    repeat: repeat,
  });
}

export function baqarah_opening_1to5(
  repeat: number = 1,
  instruction: string = "",
  basmallah: boolean = true,
) {
  return new QuranModel({
    title: "Al-Baqarah",
    surah: 2,
    entries: [
      new QuranEntryModel({
        arabic: "الٓمٓ",
        translit: "Alif Lām Mīm.",
        translation: "Alif, Lām, Meem.",
        verse: 1,
      }),
      new QuranEntryModel({
        arabic: "ذَٰلِكَ ٱلۡكِتَٰبُ لَا رَيۡبَۛ فِيهِۛ هُدٗى لِّلۡمُتَّقِينَ",
        translit: "Dhālikal kitābu lā rayba fīhi hudan lilmuttaqīn.",
        translation:
          "This is the Book about which there is no doubt, a guidance for those conscious of Allāh -",
        verse: 2,
      }),
      new QuranEntryModel({
        arabic: "ٱلَّذِينَ يُؤۡمِنُونَ بِٱلۡغَيۡبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقۡنَٰهُمۡ يُنفِقُونَ",
        translit:
          "Alladhīna yuʾminūna bilghaybi wa yuqīmūnaṣ ṣalāta wa mimmā razaqnāhum yunfiqūn.",
        translation:
          "Who believe in the unseen, establish prayer, and spend out of what We have provided for them,",
        verse: 3,
      }),
      new QuranEntryModel({
        arabic:
          "وَٱلَّذِينَ يُؤۡمِنُونَ بِمَآ أُنزِلَ إِلَيۡكَ وَمَآ أُنزِلَ مِن قَبۡلِكَ وَبِٱلۡأٓخِرَةِ هُمۡ يُوقِنُونَ",
        translit:
          "Walladhīna yuʾminūna bimā unzila ilayka wa mā unzila min qablika wa bilākhirati hum yūqinūn.",
        translation:
          "And who believe in what has been revealed to you, [O Muḥammad], and what was revealed before you, and of the Hereafter they are certain [in faith].",
        verse: 4,
      }),
      new QuranEntryModel({
        arabic: "أُوْلَٰٓئِكَ عَلَىٰ هُدٗى مِّن رَّبِّهِمۡۖ وَأُوْلَٰٓئِكَ هُمُ ٱلۡمُفۡلِحُونَ",
        translit: "Ulāʾika ʿalā hudan mir rabbihim wa ulāʾika humul mufliḥūn.",
        translation:
          "Those are upon [right] guidance from their Lord, and it is those who are the successful.",
        verse: 5,
      }),
    ],
    instruction,
    basmallah,
    repeat,
  });
}

export function baqarah_ayat_al_kursi(
  repeat: number = 1,
  instruction: string = "",
) {
  return new QuranModel({
    title: "Al-Baqarah",
    surah: 2,
    entries: [
      new QuranEntryModel({
        arabic:
          "ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلۡحَيُّ ٱلۡقَيُّومُۚ لَا تَأۡخُذُهُۥ سِنَةٞ وَلَا نَوۡمٞۚ لَّهُۥ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلۡأَرۡضِۗ مَن ذَا ٱلَّذِي يَشۡفَعُ عِندَهُۥٓ إِلَّا بِإِذۡنِهِۦۚ يَعۡلَمُ مَا بَيۡنَ أَيۡدِيهِمۡ وَمَا خَلۡفَهُمۡۖ وَلَا يُحِيطُونَ بِشَيۡءٖ مِّنۡ عِلۡمِهِۦٓ إِلَّا بِمَا شَآءَۚ وَسِعَ كُرۡسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَۖ وَلَا يَـُٔودُهُۥ حِفۡظُهُمَاۚ وَهُوَ ٱلۡعَلِيُّ ٱلۡعَظِيمُ",
        translit:
          "Allāhu lā ilāha illā huwa al-ḥayyu al-qayyūmu lā ta’khudhuhu sinatun wa lā nawmun lahu mā fī al-samāwāti wa mā fī al-arḍi man dhā alladhī yashfa‘u ‘indahu illā bi-idhnihi ya‘lamu mā bayna aydīhim wa mā khalfahum wa lā yuḥīṭūna bi-shay’in min ‘ilmihi illā bi-mā shā’a wasi‘a kursīyuhu al-samāwāti wa al-arḍa wa lā ya’ūduhu ḥifẓuhumā wa huwa al-‘alīyu al-‘aẓīmu",
        translation:
          "Allāh - there is no deity except Him, the Ever-Living, the Self-Sustaining. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is [presently] before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursī extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
        verse: 255,
      }),
    ],
    instruction,
    basmallah: false,
    repeat: repeat,
  });
}

export function baqarah_amana_rasul(
  repeat: number = 1,
  instruction: string = "",
) {
  return new QuranModel({
    title: "Al-Baqarah",
    surah: 2,
    entries: [
      new QuranEntryModel({
        arabic:
          "ءَامَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيۡهِ مِن رَّبِّهِۦ وَٱلۡمُؤۡمِنُونَۚ كُلٌّ ءَامَنَ بِٱللَّهِ وَمَلَٰٓئِكَتِهِۦ وَكُتُبِهِۦ وَرُسُلِهِۦ لَا نُفَرِّقُ بَيۡنَ أَحَدٖ مِّن رُّسُلِهِۦۚ وَقَالُواْ سَمِعۡنَا وَأَطَعۡنَاۖ غُفۡرَانَكَ رَبَّنَا وَإِلَيۡكَ ٱلۡمَصِيرُ",
        translit:
          "Āmanarrasūlu bimā unzila ilayhi mirrabbihī wal mu’minūn, kullun āmana billāhi wa malā’ikatihī wa kutubihī wa rusulihī, lā nufarriqu bayna aḥadim mirrusulih, wa qālū sami‛nā wa aṭa‛nā, ghufrānaka rabbanā wa ilaykal maṣīr.",
        translation:
          'The Messenger has believed in what was revealed to him from his Lord, and [so have] the believers. All of them have believed in Allāh and His angels and His books and His messengers, [saying], "We make no distinction between any of His messengers." And they say, "We hear and we obey. [We seek] Your forgiveness, our Lord, and to You is the [final] destination."',
        verse: 285,
      }),
      new QuranEntryModel({
        arabic:
          "لَا يُكَلِّفُ ٱللَّهُ نَفۡسًا إِلَّا وُسۡعَهَاۚ لَهَا مَا كَسَبَتۡ وَعَلَيۡهَا مَا ٱكۡتَسَبَتۡۗ رَبَّنَا لَا تُؤَاخِذۡنَآ إِن نَّسِينَآ أَوۡ أَخۡطَأۡنَاۚ رَبَّنَا وَلَا تَحۡمِلۡ عَلَيۡنَآ إِصۡرٗا كَمَا حَمَلۡتَهُۥ عَلَى ٱلَّذِينَ مِن قَبۡلِنَاۚ رَبَّنَا وَلَا تُحَمِّلۡنَا مَا لَا طَاقَةَ لَنَا بِهِۦۖ وَٱعۡفُ عَنَّا وَٱغۡفِرۡ لَنَا وَٱرۡحَمۡنَآۚ أَنتَ مَوۡلَىٰنَا فَٱنصُرۡنَا عَلَى ٱلۡقَوۡمِ ٱلۡكَٰفِرِينَ",
        translit:
          "Lā yukallifullāhu nafsan illā wus‛ahā, lahā mā kasabat wa ‛alayhā maktasabat, rabbanā lā tu’ākhidhnā innasīnā aw akhṭa’nā, rabbanā walā taḥmil ‛alaynā iṣran kamā ḥamaltahū ‛alalladhīna min  qablinā, rabbanā walā tuḥammilnā mā lā ṭāqata lanā bihī, wa‛fu ‛annā, waghfir lanā, warḥamnā, anta mawlanā fanṣurnā ‛alal qawmil kāfirīn.",
        translation:
          'Allāh does not charge a soul except [with that within] its capacity. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. "Our Lord, do not impose blame upon us if we have forgotten or erred. Our Lord, and lay not upon us a burden like that which You laid upon those before us. Our Lord, and burden us not with that which we have no ability to bear. And pardon us; and forgive us; and have mercy upon us. You are our protector, so give us victory over the disbelieving people."',
        verse: 286,
      }),
    ],
    instruction,
    basmallah: false,
    repeat: repeat,
  });
}

export function ikhlas(
  repeat: number = 1,
  instruction: string = "",
  basmallah: boolean = true,
) {
  return new QuranModel({
    title: "Ikhlas",
    surah: 112,
    entries: [
      new QuranEntryModel({
        arabic: "قُلۡ هُوَ ٱللَّهُ أَحَدٌ",
        translit: "Qul HuwaLlāhu aḥad.",
        translation: 'Say, "He is Allāh, [who is] One,',
        verse: 1,
      }),
      new QuranEntryModel({
        arabic: "ٱللَّهُ ٱلصَّمَدُ",
        translit: "Allāhus-Ṣamad.",
        translation: "Allāh, the Eternal Refuge.",
        verse: 2,
      }),
      new QuranEntryModel({
        arabic: "لَمۡ يَلِدۡ وَلَمۡ يُولَدۡ",
        translit: "Lam yalid wa lam yūlad.",
        translation: "He neither begets nor is born,",
        verse: 3,
      }),
      new QuranEntryModel({
        arabic: "وَلَمۡ يَكُن لَّهُۥ كُفُوًا أَحَدُۢ",
        translit: "Wa lam yakun lahu kufuwan aḥad.",
        translation: 'Nor is there to Him any equivalent."',
        verse: 4,
      }),
    ],
    instruction,
    basmallah,
    repeat: repeat,
  });
}

export function falaq(
  repeat: number = 1,
  instruction: string = "",
  basmallah: boolean = true,
) {
  return new QuranModel({
    title: "Falaq",
    surah: 113,
    entries: [
      new QuranEntryModel({
        arabic: "قُلۡ أَعُوذُ بِرَبِّ ٱلۡفَلَقِ",
        translit: "Qul aʿūdhu bi rabb il-falaq.",
        translation: 'Say, "I seek refuge in the Lord of daybreak',
        verse: 1,
      }),
      new QuranEntryModel({
        arabic: "مِن شَرِّ مَا خَلَقَ",
        translit: " Min sharri mā khalaq.",
        translation: "From the evil of that which He created",
        verse: 2,
      }),
      new QuranEntryModel({
        arabic: "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
        translit: "Wa min sharri ghāsiqin idhā waqab.",
        translation: "And from the evil of darkness when it settles",
        verse: 3,
      }),
      new QuranEntryModel({
        arabic: "وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِي ٱلۡعُقَدِ",
        translit: "Wa min sharri in-naffathāti fil ʿuqad.",
        translation: "And from the evil of the blowers in knots",
        verse: 4,
      }),
      new QuranEntryModel({
        arabic: "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
        translit: "Wa min sharri ḥāsidin idhā ḥasad.",
        translation: 'And from the evil of an envier when he envies."',
        verse: 5,
      }),
    ],
    instruction,
    basmallah,
    repeat: repeat,
  });
}

export function nas(
  repeat: number = 1,
  instruction: string = "",
  basmallah: boolean = true,
) {
  return new QuranModel({
    title: "Nas",
    surah: 114,
    entries: [
      new QuranEntryModel({
        arabic: "قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ",
        translit: "Qul aʿūdhu bi rabb in-nās.",
        translation: 'Say, "I seek refuge in the Lord of mankind,',
        verse: 1,
      }),
      new QuranEntryModel({
        arabic: "مَلِكِ ٱلنَّاسِ",
        translit: "Malik in-nās.",
        translation: "The Sovereign of mankind,",
        verse: 2,
      }),
      new QuranEntryModel({
        arabic: "إِلَٰهِ ٱلنَّاسِ",
        translit: "Ilāh in-nās.",
        translation: "The God of mankind,",
        verse: 3,
      }),
      new QuranEntryModel({
        arabic: "مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ",
        translit: " Min sharril waswāsil khannās.",
        translation: "From the evil of the retreating whisperer -",
        verse: 4,
      }),
      new QuranEntryModel({
        arabic: "ٱلَّذِي يُوَسۡوِسُ فِي صُدُورِ ٱلنَّاسِ",
        translit: "Al-ladhī yuwaswisu fī ṣudūr in-nās.",
        translation: "Who whispers [evil] into the breasts of mankind -",
        verse: 5,
      }),
      new QuranEntryModel({
        arabic: "مِنَ ٱلۡجِنَّةِ وَٱلنَّاسِ",
        translit: "Min aljinnati wan-nās.",
        translation: 'From among the jinn and mankind".',
        verse: 6,
      }),
    ],
    instruction,
    basmallah,
    repeat: repeat,
  });
}

export function yasin(
  repeat: number = 1,
  instruction: string = "",
  basmallah: boolean = true,
) {
  return new QuranModel({
    title: yasin_source.title,
    surah: yasin_source.surah,
    entries: yasin_source.entries,
    instruction: instruction,
    basmallah: basmallah,
    repeat: repeat,
  });
}

export function waqiah(
  repeat: number = 1,
  instruction: string = "",
  basmallah: boolean = true,
) {
  return new QuranModel({
    title: waqiah_source.title,
    surah: waqiah_source.surah,
    entries: waqiah_source.entries,
    instruction: instruction,
    basmallah: basmallah,
    repeat: repeat,
  });
}

export function buruj(
  repeat: number = 1,
  instruction: string = "",
  basmallah: boolean = true,
) {
  return new QuranModel({
    title: buruj_source.title,
    surah: buruj_source.surah,
    entries: buruj_source.entries,
    instruction,
    basmallah,
    repeat,
  });
}

export function tariq(
  repeat: number = 1,
  instruction: string = "",
  basmallah: boolean = true,
) {
  return new QuranModel({
    title: tariq_source.title,
    surah: tariq_source.surah,
    entries: tariq_source.entries,
    instruction,
    basmallah,
    repeat,
  });
}

export function duha(
  repeat: number = 1,
  instruction: string = "",
  basmallah: boolean = true,
) {
  return new QuranModel({
    title: duha_source.title,
    surah: duha_source.surah,
    entries: duha_source.entries,
    instruction,
    basmallah,
    repeat,
  });
}

export function sharh(
  repeat: number = 1,
  instruction: string = "",
  basmallah: boolean = true,
) {
  return new QuranModel({
    title: sharh_source.title,
    surah: sharh_source.surah,
    entries: sharh_source.entries,
    instruction,
    basmallah,
    repeat,
  });
}

export function qadr(
  repeat: number = 1,
  instruction: string = "",
  basmallah: boolean = true,
) {
  return new QuranModel({
    title: qadr_source.title,
    surah: qadr_source.surah,
    entries: qadr_source.entries,
    instruction,
    basmallah,
    repeat,
  });
}

export function quraysh(
  repeat: number = 1,
  instruction: string = "",
  basmallah: boolean = true,
) {
  return new QuranModel({
    title: quraysh_source.title,
    surah: quraysh_source.surah,
    entries: quraysh_source.entries,
    instruction,
    basmallah,
    repeat,
  });
}

export function sajdah(
  repeat: number = 1,
  instruction: string = "",
  basmallah: boolean = true,
) {
  return new QuranModel({
    title: sajdah_source.title,
    surah: sajdah_source.surah,
    entries: sajdah_source.entries,
    instruction,
    basmallah,
    repeat,
  });
}

export function kawthar(
  repeat: number = 1,
  instruction: string = "",
  basmallah: boolean = true,
) {
  return new QuranModel({
    title: kawthar_source.title,
    surah: kawthar_source.surah,
    entries: kawthar_source.entries,
    instruction,
    basmallah,
    repeat,
  });
}

export function kafirun(
  repeat: number = 1,
  instruction: string = "",
  basmallah: boolean = true,
) {
  return new QuranModel({
    title: kafirun_source.title,
    surah: kafirun_source.surah,
    entries: kafirun_source.entries,
    instruction,
    basmallah,
    repeat,
  });
}

export function nasr(
  repeat: number = 1,
  instruction: string = "",
  basmallah: boolean = true,
) {
  return new QuranModel({
    title: nasr_source.title,
    surah: nasr_source.surah,
    entries: nasr_source.entries,
    instruction,
    basmallah,
    repeat,
  });
}

export function masad(
  repeat: number = 1,
  instruction: string = "",
  basmallah: boolean = true,
) {
  return new QuranModel({
    title: masad_source.title,
    surah: masad_source.surah,
    entries: masad_source.entries,
    instruction,
    basmallah,
    repeat,
  });
}

export function kahf(
  repeat: number = 1,
  instruction: string = "",
  basmallah: boolean = true,
) {
  return new QuranModel({
    title: kahf_source.title,
    surah: kahf_source.surah,
    entries: kahf_source.entries,
    instruction,
    basmallah,
    repeat,
  });
}

export function dukhan(
  repeat: number = 1,
  instruction: string = "",
  basmallah: boolean = true,
) {
  return new QuranModel({
    title: dukhan_source.title,
    surah: dukhan_source.surah,
    entries: dukhan_source.entries,
    instruction,
    basmallah,
    repeat,
  });
}

export function muzzammil(
  repeat: number = 1,
  instruction: string = "",
  basmallah: boolean = true,
) {
  return new QuranModel({
    title: muzzammil_source.title,
    surah: muzzammil_source.surah,
    entries: muzzammil_source.entries,
    instruction,
    basmallah,
    repeat,
  });
}

export function mulk(
  repeat: number = 1,
  instruction: string = "",
  basmallah: boolean = true,
) {
  return new QuranModel({
    title: mulk_source.title,
    surah: mulk_source.surah,
    entries: mulk_source.entries,
    instruction,
    basmallah,
    repeat,
  });
}
