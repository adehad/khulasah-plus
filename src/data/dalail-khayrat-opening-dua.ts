import {
  baqarah_opening_1to5,
  falaq,
  fatihah,
  ikhlas,
  nas,
  taawwudh,
} from "@/data/shared/quran";
import { DhikrEntryModel, DhikrModel, WirdModel } from "@/models/recitation";

export default [
  new WirdModel({
    title: "Dalāʾil al-Khayrāt - Opening Duʿāʾ",
    entries: [
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "بِسْمِ اللَّـهِ الرَّحْمَٰنِ الرَّحِيمِ.\nالحَمْدُ لِلَّهِ رَبِّ العَالَمِينَ",
            translit:
              "BismiLlāhir raḥmānir raḥīm. Alḥamdu liLlāhi rabbil ʿālamīn",
            translation:
              "In the name of Allah, Most Gracious, Most Merciful. Praise be to Allah, Lord of the Worlds.",
          }),
          new DhikrEntryModel({
            arabic: "حَسْبِيَ اللَّهُ وَنِعْمَ الوَكِيلُ",
            translit: "Ḥasbiyallāhu wa niʿmul wakīl",
            translation:
              "Allah is enough for me, and He is the best Protector.",
          }),
          new DhikrEntryModel({
            arabic:
              "وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا باللَّهِ العَلِيِّ العَظِيمِ. اللَّهُمَّ إِنِّي أَبْرَأُ مِنْ حَوْلِي وَقُوَّتِي إِلَى حَوْلِكَ وَقُوَّتِكَ. اللَّهُمَّ إِنِّي أَتَقَرَّبُ إِلَيْكَ بِالصَّلَاةِ عَلَى سَيِّدِنَا مُحَمَّدٍ",
            translit:
              "Wa lā ḥawla wa lā quwwata illā biLlāhil ʿaliyyil ʿaẓīm. Allāhumma innī abraʾu min ḥawlī wa quwwatī ilā ḥawlika wa quwwatika. Allāhumma innī ataqarrabu ilayka biṣṣalāti ʿalā sayyidinā Muḥammadin",
            translation:
              "There is no power nor strength except by Allah, the Lofty, the Immense. O Allah, I disown my power and strength and resort to Your power and strength. O Allah, I draw near to You through asking for blessings upon our Master Muhammad",
          }),
          new DhikrEntryModel({
            arabic: "عَبْدِكَ وَنَبِيِّكَ وَرَسُولِكَ سَيِّدِ المُرْسَلِينَ",
            translit: "ʿabdika wa nabiyyika wa rasūlika sayyidil mursalīn",
            translation:
              "Your slave, Your Prophet, and Your Messenger, the Master of the Messengers",
          }),
          new DhikrEntryModel({
            arabic: "صَلَّى اللَّهُ تَعَالَى وَسَلَّمَ عَلَيْهِ وَعَلَيْهِمْ أَجْمَعِينَ",
            translit: "Ṣallallāhu taʿālā wasallama ʿalayhi waʿalayhim ajmaʿīn",
            translation:
              "May Allah Almighty bless him and grant him and all of them peace.",
          }),
          new DhikrEntryModel({
            arabic:
              "امْتِثَالًا لِأَمْرِكَ وَتَصْدِيقًا لَهُ وَمَحَبَّةً فِيهِ وَشَوْقًا إِلَيْهِ وَتَعْظِيمًا لِقَدْرِهِ",
            translit:
              "Imtithālan li amrika wa taṣdīqan lahu wa maḥabbatan fīhi wa shawqan ilayhi wa taʿẓīman liqadrihi",
            translation:
              "In obedience to Your command, affirming him, loving him, yearning for him, and respecting his worth",
          }),
          new DhikrEntryModel({
            arabic: "وَلِكَوْنِهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَهْلًا لِذَلِكَ",
            translit:
              "Wa likawnihi ṣallallāhu ʿalayhi wasallama ahlan lidhalika",
            translation:
              "And because he, may Allah bless him and grant him peace, is worthy of that.",
          }),
          new DhikrEntryModel({
            arabic: "فَتَقَبَّلْهَا مِنِّي بِفَضْلِكَ",
            translit: "Fataqabbalhā minnī bifaḍlika",
            translation: "Accept it from me by Your grace.",
          }),
          new DhikrEntryModel({
            arabic: "وَاجْعَلْنِي مِنْ عِبَادِكَ الصَّالِحِينَ",
            translit: "Wajʿalnī min ʿibādika aṣ-ṣāliḥīn",
            translation: "And make me one of Your righteous slaves.",
          }),
          new DhikrEntryModel({
            arabic: "وَوَفِّقْنِي لِقِرَاءَتِهَا عَلَى الدَّوَامِ بِجَاهِهِ عِنْدَكَ",
            translit: "Wa waffiqnī liqirāʾatihā ʿalad dāwāmi bijāhihi ʿindaka",
            translation:
              "And grant me success in reading it continuously by his rank with You.",
          }),
          new DhikrEntryModel({
            arabic: "وَصَلَّى اللَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَآلِهِ وَصَحْبِهِ أَجْمَعِينَ.",
            translit:
              "Wa ṣallallāhu ʿalā sayyidinā Muḥammadin wa ālihi wa ṣaḥbihi ajmaʿīn.",
            translation:
              "May Allah bless Our Master Muhammad and his family and all his Companions.",
          }),
        ],
      }),
      new DhikrModel({
        repeat: 3,
        entries: [
          new DhikrEntryModel({
            arabic: "أَسْتَغْفِرُ اللَّهَ العَظِيمَ",
            translit: "AstaghfiruLlāha alʿaẓīm.",
            translation: "I ask Allah for forgiveness.",
          }),
        ],
      }),
      new DhikrModel({
        repeat: 3,
        entries: [
          new DhikrEntryModel({
            arabic: "سُبْحَانَ اللَّهِ",
            translit: "SubḥānAllāhi",
            translation: "Glory be to Allah",
          }),
          new DhikrEntryModel({
            arabic: "وَالحَمْدُ لِلَّهِ",
            translit: "Walḥamdu liLlāhi",
            translation: "And praise be to Allah.",
          }),
          new DhikrEntryModel({
            arabic: "وَلَا إِلَهَ إِلَّا اللَّهُ",
            translit: "Wa lā ilāha illallāh",
            translation: "There is no god except Allah.",
          }),
          new DhikrEntryModel({
            arabic: "وَاللَّهُ أَكْبَرُ",
            translit: "Wallāhu akbar",
            translation: "Allah is the Greatest.",
          }),
          new DhikrEntryModel({
            arabic: "وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا باللَّهِ العَلِيِّ العَظِيم",
            translit:
              "Wa lā ḥawla wa lā quwwata illā biLlāhil ʿaliyyil ʿaẓīm .",
            translation:
              "There is no power nor strength except by Allah the Lofty, the Immense .",
          }),
        ],
      }),
      new DhikrModel({
        repeat: 3,
        entries: [
          new DhikrEntryModel({
            arabic: "حَسْبِيَ اللَّهُ وَنِعْمَ الوَكِيلُ",
            translit: "ḤasbiyAllāhu wa niʿmal wakīl.",
            translation: "Allah suffices me and he is the best Protector.",
          }),
        ],
      }),
      taawwudh(),
      ikhlas(),
      falaq(),
      nas(),
      fatihah(),
      baqarah_opening_1to5(),
    ],
  }),
];
