import {
  QasidaChapterModel,
  QasidaEntryModel,
  QasidaModel,
  QasidaVerseModel,
  QuranEntryModel,
} from "@/models/recitation";

export default [
  new QasidaModel({
    title: "",
    entries: [
      new QasidaChapterModel({
        number: 1,
        title: "Tahleel",
        entries: [
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "لَا إِلَهَ إِلَّا اللَّه (3x)",
                translit: "Lā ilāha illallāh (3x)",
                translation: "There is no god but Allah (3x)",
              }),
              new QasidaEntryModel({
                arabic: "لَا مَعْبُودَ إِلَّا اللَّه",
                translit: "Lā ma‛būda illallāh",
                translation: "There is none worshipped but Allah",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "لَا إِلَهَ إِلَّا اللَّه (3x)",
                translit: "Lā ilāha illallāh (3x)",
                translation: "There is no god but Allah (3x)",
              }),
              new QasidaEntryModel({
                arabic: "لَا مَقْصُودَ إِلَّا اللَّه",
                translit: "Lā maqṣūda illallāh",
                translation: "There is none sought but Allah",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "لَا إِلَهَ إِلَّا اللَّه (3x)",
                translit: "Lā ilāha illallāh (3x)",
                translation: "There is no god but Allah (3x)",
              }),
              new QasidaEntryModel({
                arabic: "لَا مَوْجُودَ إِلَّا اللَّه",
                translit: "Lā mawjūda illallāh",
                translation: "There is none truly existent but Allah",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "لَا إِلَهَ إِلَّا اللَّه (3x)",
                translit: "Lā ilāha illallāh (3x)",
                translation: "There is no god but Allah (3x)",
              }),
              new QasidaEntryModel({
                arabic: "لَا مَشْهُودَ إِلَّا اللَّه",
                translit: "Lā mashhūda illallāh",
                translation: "There is none witnessed but Allah",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic:
                  "اللَّهُمَّ يَا كَافِيَ الْبَلَاء اِكْفِنَا الْبَلَاء قَبْلَ نُزُولِهِ مِنَ السَّمَاء يَا اللَّه يَا اللَّه يَا اللَّه يَا اللَّه يَا اللَّه يَا اللَّه يَا اللَّه (3x)",
                translit:
                  "Allāhumma yā kāfiyal-balā’, ikfinal-balā’a qabla nuzūlihī minas-samā’. Yā Allāh, yā Allāh, yā Allāh, yā Allāh, yā Allāh, yā Allāh, yā Allāh (3x)",
                translation:
                  "O Allah, O Sufficer against affliction, suffice us against affliction before it descends from the sky. O Allah, O Allah, O Allah, O Allah, O Allah, O Allah, O Allah (3x)",
              }),
            ],
          }),
        ],
      }),
      new QasidaChapterModel({
        number: 2,
        title: "Ya Latifan Lam Yazal",
        entries: [
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا لَطِيفًا لَمْ يَزَلْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "اُلْطُفْ بِنَا فِيمَا نَزَلْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "إِنَّكْ لَطِيفٌ لَمْ تَزَلْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "اُلْطُفْ بِنَا وَالْمُسْلِمِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِسْمِ إِلَهٍ قَادِرِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مُقْتَدِرٍ وَقَاهِرِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "لِكُلِّ غَاوٍ غَادِرِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مِنَ الْعُتَاةِ الظَّالِمِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وكُلِّ بَاغٍ مَارِدِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَفَاجِرٍ مُعَانِدِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَكُلِّ طَاغٍ حَاسِدِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مِنَ الْبُغَاةِ الْمُفْسِدِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِهِ بِهِ نَسْتَنْصِرُ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "بِهِ بِهِ نَقْتَدِرُ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "بِسَيْفِ بَطْشِهْ نَقْهَرُ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "أَعْدَاءَنَا الْمُعَانِدِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَالْحَمْدُ دَأبًا سَرْمَدَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَدَائِمًا مُؤَبَّدَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَلَيْسَ يُحْصَى عَدَدَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "لِلَّهِ رَبِّ الْعَالَمِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "سُبْحَانَ مَنْ عَزَّ وَجَلّ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "بَرَى الْأَمَانَ وَالْوَجَلْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "قَضَى لِكُلٍّ بِالْأَجَلْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مِنْ سَائِرِ الْخَلْق اجْمَعِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "نَسْأَلُك رَفْعَ الْأَذَى",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَالْبَلَايَا وَالْوَبَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَشَرِّ كُلِّ مُبْتَلَى",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَكَيْدِ كُلِّ الظَّالِمِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِسِرِّ طَهَ الْمُجْتَبَى",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "عَلَا عَلَى السَّبْعِ الْعُلَى",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَالْآلِ أَرْبَابِ الْعَبَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَصَحْبِهِ الْمُجَاهِدِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَالتَّابِعِينَ الْأَصْفِيَاء",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "الْعَابِدِينَ الْأَوْلِيَاء",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "الزَّاهِدِينَ الْأَتْقِيَاء",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "الْمُصْلِحِينَ الْمُحْسِنِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "مِنْ مَاضِيٍ وَغَابِرِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "كَالشَّيْخِ عَبْدِ الْقَادِرِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مَنْ خُصَّ بِالسَّرَائِرِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "بَيْنَ الْعِبَادِ الصَّالِحِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "ثُمَّ الْفَقِيه جَدُّنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَبِبَنِيهِ ذُخْرُنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "عَلوِيُّنَا عَلِيُّنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "والْقُطْب سَقَّاف مَكِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِابْنِهِ الْمِحْضَارِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "النَّدْبِ ذِي الأَسْرَارِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "حَامِي الْحِمَى وَالْجَارِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "الغَوْثِ حَتْفِ الظَّالِمِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "والْعَيْدَرُوس فَخْرُنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَشَيْخُنَا حَدَّادُنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "هُو غَوْثُنَا، هُو كَنْزُنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَهُوَ مَلَاذُ اللَّائِذِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَالشَّيْخ أَبُو بَكْر الْهُمَام",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "بِنْ سَالِم الْعَضْبُ الْحُسَام",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَبِبَنِيهِ غَوْثِ الْأَنَام",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَالْعَدَنِي حَبْرٌ أَمِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِابْنِ زَيْنٍ أَحْمَدِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "هُو نُورُ كُلِّ مُهْتَدِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَجَعْفَرٍ ذِي الرَّشادِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "سُلْطَان كُلِّ الْعَارِفِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِذِي الْيَقِينِ الْعَطَّاس",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "أَبِي الْحُسَينِ النِّبْرَاس",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَبِالْخَلِيفَة بَارَاس",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وأهْل (دَوعَن) أجْمَعِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِالشُّجَاعِ عُمْدَتِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "غَوْثِي غِيَاثِي عُدَّتِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَمُنْقِذِي مِنْ شِدَّتِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "الْبَار كَهْفُ الْقَاصِدِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِالْوَجِيهِ وَالْجَمَال",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَبِالصَّفِيِّ وَالْكَمَال",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَمَنْ لَهُمْ بِهِ اتِّصَال",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مِنْ أَهْلِ حَضْرَتِه اجْمَعِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِشَيْخِنَا الْحُلَاحِلِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مَنْ حَلَّ فِي (جَلَاجِلِ)",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "عُمَر غِيَاثِ الْآمِلِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "الْبَار قُطْبُ الْكَامِلِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "والْعَيْدَرُوسِ الذَّاكِرِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فِي كُلِّ حَالٍ شَاكِرِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَمُسْتَقِيمٍ صَابِرِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "حَاوِي خِصَالِ الْمُهْتَدِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَابْنِ سُمَيْطِ الْمُشْتَهَرْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "الْقُطْب سَيِّدنَا عُمَرْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "ثُمَّ الصَّفِي بَحْرِ الدُّرَرْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "قُطْبِ الدُّعَاةِ النَّاصِحِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِسِرِّ حَامِدْ بِنْ عُمَرْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَابْنِ الْحَسَنْ ذَاكَ الْأَبَرّ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَمَنْ إِذَا يُدْعَى حَضَرْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "لِمَنْ يُنَادِيه يُعِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِالْوَلِي بَاجَلْحَبَان",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "نُورُهْ لِأَهْلِ اللَّه بَانْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "أَصْلِحْ بِجَاهِهْ كُلَّ شَان",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَهَبْ لَنَا حُسْنَ الْيَقِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِمَنْ بِهَذَا الْعَرْضِ حَلْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "الشَّيْخِ سَيِّدِنَا الْأَجَلْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يَسِّرْ لَنَا كُلَّ الْأَمَلْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَالْطُفْ بِنَا وَالْمُسْلِمِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِسِرِّ شَيْخِ الْجُفْرِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "عَجِّلْ لَنَا بِالْيُسْرِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَالْفَتْحِ ثُمَّ النَّصْرِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "آمِين رَبَّ الْعَالَمِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَعِتْرَةِ الْبَارِ الْكِرَام",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَخُصَّ سَيَّدَنا الْإِمَام",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "عَبْدَ اللَّهِ الْعَالِي الْمَقَام",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "واأهلِ الْمُخَرَّج أَجْمَعِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَكُلِّ مَنْ فِي قُطْرِنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مِنْ كُلِّ بَرٍّ مُحْسِنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَسَائِر اَسْلَافٍ لَنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "نَسْلِ الْحَسَنْ مَعَ الْحُسَيْن",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِالْعَمُودِيِّ الْإِمَام",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَاولَادِهِ الْغُرِّ الْكِرَام",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مِمَّنْ حَوَى ذَاكَ الْمَقَام",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مِنْ كُلِّ قَيْدُومٍ مَكِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "ذِي حَضْرَةُ الْقَومِ اللُّيُوث",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَوَعْدُهَا يَومَ الثَّلُوث",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "بِهَا انْتَفَتْ عَنَّا الْمُغُوث",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مِنْ حِين نَأْتِي قَاصِدِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "الشَّيْخِ ذِي حَازَ الْعُلَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَارْتَاح فِيهَا وَاعْتَلَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مَرْسُومُهُ بَيْنَ الْمَلَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فِي الْوَقْت شَيْخُ الْعَارِفِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "الشَّافِعِيّ مَذْهَبًا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَالْعَلَوِيّ مَشْرَبًا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَهوَ الَّذِي يُدْعَى بِـ(بَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "سَوْدَان) بَيْنَ الْعَالَمِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "عَيْنُ الْعِنَايَة ذُو الْفِطَنْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "سَاقِي كُؤُوسَاتِ الْمِنَنْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "أَحْيَا الطَّرِيقَة وَالسُّنَنْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فَاتِحْ رِتَاجِ الطَّالِبِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "شَيْخُ الشُّيُوخِ الْجَامِعِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "ذِي حَلَّ قُرْبَ الْجَامِعِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "سَالَكْ بِهِ يَا سَامِعِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "اُلْطُفْ بِنَا وَالْمُسْلِمِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
        ],
      }),
      new QasidaChapterModel({
        number: 3,
        title: "Allah Allah Allah Allah Hasbuna",
        entries: [
          new QasidaVerseModel({
            chorus: true,
            entries: [
              new QasidaEntryModel({
                arabic: "(اللَّه اللَّه اللَّه اللَّه حَسْبُنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "رَبَّنَا عَجِّلْ لَنَا مَطْلُوبَنَا)",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "رَبَّنا بِالْمُصْطَفَى اصْلِحْ أَمْرَنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَبِحَقِّ الْمُرْتَضَى اكْشِفْ كَرْبَنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِأَسْرَارِ الْبَتُولِ الْطُفْ بِنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَبِحَقِّ الْحَسَنَيْنِ كُنْ لَنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِزَيْنِ الْعَابِدِينَ اغْفِرْ لَنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَبِحَقِّ الْبَاقِرِ اتْمِمْ نُورَنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِصِدْقِ الصَّادِقِ اجْمَعْ شَمْلَنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَبِحَقِّ الْكَاظِمِ ارْفَعْ قَدْرَنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِأَنْوَارِ الْعُرَيْضِي اهْدِنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَبِمَعْرُوفِ الْجَمَال جَمِّلْ لَنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِحَقِّ الْبَرِّ عِيسَى فَاشْفِنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَابْنِهِ أَحْمَد سَهِّلْ صَعْبَنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِأَوْصَافِ عُبَيْدٍ نَجِّنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَبِعَلوِيٍّ فَكَمِّلْ سَعْدَنا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِأَلْطَافِ الْجَمَالِ اسْمَعْ لَنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وبِعَلوِيْ وَعَلِيٍّ ذُخْرِنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وبِمَنْ شَرَّفَ (مِرْبَاطًا) كَذَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "عَلَوِيٌّ وَعَلِيٌّ أَصْلُنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِآيَاتِ الْفَقِيهِ الْغَوْث يَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "غَوْثَنَا هَيَّا لَنَا هَيَّا لَنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِبَنِيهِ عَلَوِيٍّ وَعَلِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَشِهَابِ الدِّين بِالْكُلِّ احْمِنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِعَبْدِ اللَّه يَا بَا عَلَوِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وعَلِيٍّ صِنْوِه الْغَوْثِ اكْفِنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَجَمَالِ الدِّين وَالشَّيْخِ ابْنِهِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "غَوْثِنَا السَّقَّاف فِي كُلِّ عَنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَابْنِهِ السَّكْرَان وَالْمِحْضَار وَالْـ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "إِخْوَةِ الْبَاقِين عَجِّلْ نَصْرَنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِحَقِّ الْعَيْدَرُوسِ القُطْبِ، وَالْـ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "ـفَخْرِ نِعْمَ الْغَوْث فَادْفَعْ شَرَّنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِشَيْخَيْنَا عَلِيٍّ وَابْنِهِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَشِهَابِ الدِّين تَمِّمْ قَصْدَنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِسِرِّ الْفَخْرِ وَالْغَوْثِ الَّذِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "حَلَّ فِي (عِينَات) فَاهْزِمْ خَصْمَنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَابْنِهِ الْحَامِدِ وَالْمِحْضَار ثُمَّ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "الْحُسَيْنِ اهْلِكْ عِدَانَا وَابْقِنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَالْفَقِيهِ الْحَبْرِ وَالشَّيْخِ الَّذِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "حَلَّ فِي (مَكَّةَ) سَهِّلْ صَعْبَنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَجَمَالِ الدِّين جَدِّي وَابْنِهِ الْـ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "ـعَيْدَرُوسِ الْحَبْر فَانْصُرْ جُنْدَنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِشَيْخِي وَإِمَامِي وَالِدِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "قُدْوَةِ الدِّينِ وَمِصْبَاحِ الدُّنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "رَبَّنَا فَانْفَعْ بِهِمْ يَا رَبَّنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَاكْفِنَا كُلَّ مُهِمٍّ وَعَنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "رَبَّنَا عَجِّلْ بِهِمْ مَطْلُوبَنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَاكْشِفِ الْحَالَ الَّذِي حَلَّ بِنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "سَادَتِي إِنِّي بِكُمْ جَارٌ لَكُمْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مَا أَخَافُ قَطُّ ضَيْمًا أَوْ وَنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "سُدْتُمُ النَّاسَ فَمَنْ ذَا مِثْلُكُم",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يَا أَعَزَّ النَّاس يَا كَنْزَ الْغِنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "أَنْتُمُ الْأَقْطَابُ وَالْأَوْتَادُ يَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "خَيْرَ مَنْ حَازَ الْمَثَانِي وَالثَّنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "فَإِلَى مَنْ غَيْرُكُمْ يَا سَادَتِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "أَلْتَجِي إِنْ حَانَ خَطْبٌ أَوْ دَنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "لَيْسَ لِي مَلْجَأ سِوَاكُمْ فَادْرِكُوا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "هَيَّا هَيَّا هَيَّا هَيَّا هَا هُنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "هَيَّا هَيَّا عَجِّلُوا لِي غَارَةً",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يُدْرِكُ الْعَبْدُ بِهَا أَقْصَى الْمُنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "رَبَّنَا فَاكْشِفْ بِهِمْ مَكْرُوهَنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَاحْمِنَا مِنْ كُلِّ خَطْبٍ أَمَّنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "خَتْمُهَا بِالْمُصْطَفَى الْهَادِي اكْفِنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "كُلَّ شَرٍّ وَعَدُوٍّ ربَّنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَصَلَاةً وَسَلَامًا دَائِمًا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يَتَغَشَّاهُ بَِها كُلَّ هَنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَعَلَى آلٍ وَأَصْحَابٍ وَمَنْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "بَعْدَهُمْ مَا لَاحَ بَرْقٌ أَوْ سَنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
        ],
      }),
      new QasidaChapterModel({
        number: 4,
        title: "Amin Ya Allah",
        entries: [
          new QasidaVerseModel({
            chorus: true,
            entries: [
              new QasidaEntryModel({
                arabic: "آمِين يَا اللَّه",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِهِمْ بِهِمْ يَا رَبِّي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "سَالَكْ تُفَرِِّج كَرْبِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "أَنْتَ إِلَهِي حَسْبِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "عَلَى الْبُغَاةِ الْكَائِدِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "عَجِّلْ بِرَفْعِ مَا نَزَلْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "إِنَّك لَطِيفٌ لَمْ تَزَلْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مَنْ غَيْرُكَ عَزَّ وَجَلْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَلَاطِفٌ بِالْعَالَمِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "رَبِّ اكْفِنَا شَرَّ الْعِدَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَخُذْهُمُ وَبَدِّدَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَاجْعَلْهُمُ لَنَا فِدَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَعِبْرَةً لِلنَّاظِرِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا رَبِّ شَتِّتْ شَمْلَهُمْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يَا رَبِّ فَرِّقْ جَمْعَهُمْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يَا رَبِّ قَلِّلْ عَدَّهُمْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَاجْعَلْهُمُ فِى الْغَابِرِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَلَا تُبَلِّغْهُمْ مُرَادْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَنَارُهُمْ تُصْبِحْ رَمَادْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "بِ﴿كٓهيعٓصٓ﴾",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فِى الْحَالِ وَلَّوْا خَائِبِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَشَرِّ كُلِّ مَاكِرِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَخَائِنٍ وَغَادِرِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَعَايِنٍ وَسَاحِرِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَشَرِّ كُلِّ الْمُؤْذِيِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "مِنْ مُعْتَدٍ وَغَاصِبِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَمُفْتَرٍ وَكَاذِبِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَفَاجِرٍ وَعَائِبِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَحَاسِدٍ وَالشَّامِتِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا رَبَّنَا يَا رَبَّنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يَا ذَا الْبَهَا وَذَا السَّنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَذَا الْعَطَا وَذَا الْغِنَى",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "أَنْتَ مُجِيبُ السَّائِلِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَسِّرْ لَنَا أُمُورَنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَاشْرَح لَنَا صُدُورَنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَاسْتُرْ لَنَا عُيُوبَنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فَأَنْتَ بِالسَّتْرِ قَمِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَاغْفِرْ لَنَا ذُنُوبَنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَكُلُّ ذَنْبٍ عِنْدَنا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَامْنُنْ بِتَوْبَةٍ لَنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "أَنْتَ حَبِيبُ التَّائِبِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِجَاهِ سَيِّدِنَا الرَّسُول",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَالْحَسَنَيْنِ وَالْبَتُول",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَالْمُرْتَضَى أَبِي الْفُحُول",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَجَاهِ جِبْرِيلَ الْأَمِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "ثُمَّ الصَّلَاةُ وَالسَّلَام",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "عَلَى النَّبِي خَيْرِ الْأَنَامْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَآلِهِ الْغُرِّ الْكِرَامْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَصَحْبِهِ وَالتَّابِعِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
        ],
      }),
      new QasidaChapterModel({
        number: 5,
        title: "Verses with Tarteel",
        entries: [
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "أَعُوْذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيْم",
                translit: "A‛ūdhu billāhi minash-shayṭānir-rajīm",
                translation: "I seek refuge in Allah from the accursed Satan.",
              }),
              new QasidaEntryModel({
                arabic: "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ",
                translit: "Bismillāhir-raḥmānir-raḥīm",
                translation:
                  "In the Name of Allah, the Most Compassionate, the Most Merciful.",
              }),
              new QuranEntryModel({
                arabic:
                  "إِنَّ ٱلَّذِينَ سَبَقَتْ لَهُم مِّنَّا ٱلْحُسْنَىٰٓ أُو۟لَٰٓئِكَ عَنْهَا مُبْعَدُونَ ۝ لَا يَسْمَعُونَ حَسِيسَهَا ۖ وَهُمْ فِى مَا ٱشْتَهَتْ أَنفُسُهُمْ خَٰلِدُونَ۝ لَا يَحْزُنُهُمُ ٱلْفَزَعُ ٱلْأَكْبَرُ وَتَتَلَقَّىٰهُمُ ٱلْمَلَٰٓئِكَةُ هَٰذَا يَوْمُكُمُ ٱلَّذِى كُنتُمْ تُوعَدُونَ۝ يَوْمَ نَطْوِى ٱلسَّمَآءَ كَطَىِّ ٱلسِّجِلِّ لِلْكُتُبِ ۚ كَمَا بَدَأْنَآ أَوَّلَ خَلْقٍۢ نُّعِيدُهُۥ ۚ وَعْدًا عَلَيْنَآ ۚ إِنَّا كُنَّا فَٰعِلِينَ۝ وَلَقَدْ كَتَبْنَا فِى ٱلزَّبُورِ مِنۢ بَعْدِ ٱلذِّكْرِ أَنَّ ٱلْأَرْضَ يَرِثُهَا عِبَادِىَ ٱلصَّٰلِحُونَ۝ إِنَّ فِى هَٰذَا لَبَلَٰغًۭا لِّقَوْمٍ عَٰبِدِينَ۝ وَمَآ أَرْسَلْنَٰكَ إِلَّا رَحْمَةًۭ لِّلْعَٰلَمِينَ۝ قُلْ إِنَّمَا يُوحَىٰٓ إِلَىَّ أَنَّمَآ إِلَٰهُكُمْ إِلَٰهٌۭ وَٰحِدٌۭ ۖ فَهَلْ أَنتُم مُّسْلِمُونَ۝ فَإِن تَوَلَّوْا۟ فَقُلْ ءَاذَنتُكُمْ عَلَىٰ سَوَآءٍۢ ۖ وَإِنْ أَدْرِىٓ أَقَرِيبٌ أَم بَعِيدٌۭ مَّا تُوعَدُونَ۝ إِنَّهُۥ يَعْلَمُ ٱلْجَهْرَ مِنَ ٱلْقَوْلِ وَيَعْلَمُ مَا تَكْتُمُونَ۝ وَإِنْ أَدْرِى لَعَلَّهُۥ فِتْنَةٌۭ لَّكُمْ وَمَتَٰعٌ إِلَىٰ حِينٍۢ۝ قَٰلَ رَبِّ ٱحْكُم بِٱلْحَقِّ ۗ وَرَبُّنَا ٱلرَّحْمَٰنُ ٱلْمُسْتَعَانُ عَلَىٰ مَا تَصِفُونَ",
                translit:
                  "Inna alladhīna sabaqat lahum minnal-ḥusnā ulā’ika ‛anhā mub‛adūn. Lā yasma‛ūna ḥasīsahā wa hum fī mashtahat anfusuhum khālidūn. Lā yaḥzunuhumul-faza‛ul-akbaru wa tatalaqqāhumul-malā’ikatu hādhā yawmukumul-ladhī kuntum tū‛adūn. Yawma naṭwis-samā’a kaṭayyis-sijilli lil-kutub, kamā bada’nā awwala khalqin nu‛īduh, wa‛dan ‛alaynā, innā kunnā fā‛ilīn. Wa laqad katabnā fiz-zabūri min ba‛dhidh-dhikri annal-arḍa yarithuhā ‛ibādiyaṣ-ṣāliḥūn. Inna fī hādhā labalāghan liqawmin ‛ābidīn. Wa mā arsalnāka illā raḥmatan lil-‛ālamīn. Qul innamā yūḥā ilayya annamā ilāhukum ilāhun wāḥid, fahal antum muslimūn. Fa in tawallaw faqul ādhantukum ‛alā sawā’, wa in adrī a qarībun am ba‛īdun mā tū‛adūn. Innahū ya‛lamul-jahra minal-qawli wa ya‛lamu mā taktumūn. Wa in adrī la‛allahū fitnatun lakum wa matā‛un ilā ḥīn. Qāla rabbiḥ-kum bil-ḥaqq, wa rabbunar-raḥmānul-musta‛ānu ‛alā mā taṣifūn.",
                translation:
                  'Indeed, those for whom the best [reward] has preceded from Us - they are from it far removed. They will not hear its sound, while they are, in that which their souls desire, abiding eternally. They will not be grieved by the greatest terror, and the angels will meet them, [saying], "This is your Day which you have been promised" - The Day when We will fold the heaven like the folding of a [written] sheet for the records. As We began the first creation, We will repeat it. [That is] a promise binding upon Us. Indeed, We will do it. And We have already written in the book [of Psalms] after the [previous] mention that the land [of Paradise] is inherited by My righteous servants. Indeed, in this [Qur’ān] is notification for a worshipping people. And We have not sent you, [O Muḥammad], except as a mercy to the worlds. Say, "It is only revealed to me that your god is but one God; so will you be Muslims [in submission to Him]?" But if they turn away, then say, "I have announced to [all of] you equally. And I know not whether near or far is that which you are promised. Indeed, He knows what is declared of speech, and He knows what you conceal. And I know not; perhaps it is a trial for you and enjoyment for a time." [The Prophet (ﷺ)] has said, "My Lord, judge [between us] in truth. And our Lord is the Most Merciful, the one whose help is sought against that which you describe."',
                verse: 101,
                surah: 21,
              }),
              new QasidaEntryModel({
                arabic: "صَدَقَ اللَّهُ الْعَظِيم",
                translit: "Ṣadaqallāhul-‛aẓīm",
                translation: "Allah, the Most Great, has spoken the truth.",
              }),
            ],
          }),
        ],
      }),
      new QasidaChapterModel({
        number: 6,
        title: "Ya Arham ar-Rahimin",
        entries: [
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا أَرْحَمَ الرَّاحِمِين",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "اُلْطُفْ بِنَا فِي قَضَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَعَافِنَا يَا إِلَهِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مِنْ نَوَازِلْ بَلَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَهَبْ لَنَا الْخَيْرَ كُلَّه",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَاهْدِنَا بِهُدَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَنَسْتَعِينُك وَنَسْتَغْنِيك",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "عَمَّنْ سِوَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا صَاحِبَ الْفَضْلِ وَالْإِحْسَان",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "نَرْجُوا عَطَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "نَنَال كُلَّ الْمَطَالِب",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "كُلَّهَا فِي رِضَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "إيَّاك نَعْبُد وَنَشْهَد",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مَشْهَد أَنَّا نَرَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَنَشْهَد أَنَّكْ تَرَانَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "نُور عَيْنِ اصْطِفَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "طَابَتْ شَوَاهِد مَشَاهِد",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مَنْ يُوَالِي وَلَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَمَنْ عَلَى سُنَّةِ الْهَادِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يُرَاعِي رَعَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَمَنْ قَرَأ لِلْقُرْآن",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "أَوْعَى بِحَقِّ نَبَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "مِنْكَ إِلَيْكَ تَحَقَّق",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "أَنَّ هَذَا حَكَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَصَار قَلْبُه وَقَالَبْهُ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "امْتَلَا مِنْ صَفَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِالْفَهْم وَالْعِلم وَالتَّعْظِيم",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يَلْحَظ سَنَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "هَذَا لِمَنْ كَان حَظُّه",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مِنْكَ وَافِر هُنَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "فِي سَابِقِ الْعِلْم",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "جَائَتِ اللَّاحِقَة مِنْ قَدَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَأَدْرَكَتْهُ الْعِنَايَة",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "حَيْث جِيتَه وَجَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَسْعَى مُلَبِّي مُجِيبَك",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "صَار سَمْعُه دَعَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "مِنْكَ إِلَيْكَ وَخَيَّم",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "حَطّا سَاحَة فِنَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "عَلَى الْهَنَا وَالْمُنَى",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَالْبَسط شِيتَه وَشَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا رَبِّ يَا رَبِّ هَبْ لِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فِي رَجَاء مَنْ رَجَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَاقْبَل دُعَائِي وَقَرِّبْنِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مَعَ مَنْ دَعَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَأَنْتَ حَسْبِي وَعَوْنِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فَاشْفِنِي بِشِفَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "قَلْبِي وَقَالَبِي وَالْبِسْنِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "لِبَاسَ اتْقِيَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَغَذِّ رُوحِي بِذِكْرِك",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَاحْمِنِي بِحِمَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَحَبِّبَك لِي وَحَبِّبْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "لِي مَحَبَّة لِقَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "أَسْتَغْفِرُ اللَّه غُفْرَانَك",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "لِمَنْ قَدْ عَصَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَاصْدُق يَقِينِي وَثَبِّتْنِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "ثَبَات أَوْلِيَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَالْحَمْدُ لِلَّهِ وَاخْتِمْهَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "بِطَابِع هُدَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "صَلَاة رَبِّي وَسَلِّمْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مَا نَزَل مُزْن مَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "عَلَى النَّبِيِّ الْمُصْطَفَى الْـ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "ـمَحْمُودِ خَتْم أَنْبِيَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "عَدَد حَيَاةِ الَّذِي يَحْيَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "بِهَا مِن حَيَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَالْآل وَالصَّحب",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَأَلْحِقْنَا بِحِزْب أَصْفِيَاك",
                translit: "",
                translation: "",
              }),
            ],
          }),
        ],
      }),
      new QasidaChapterModel({
        number: 7,
        title: "Ya Aman al-Kha`ifin",
        entries: [
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا أَمَانَ الْخَائِفِين",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "نَجِّنَا مِمَّا نَخَافْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا وَلِيَّ الصَّالِحِين",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "كُنْ مُوَالِينَا وَكَافْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا جَلِيسَ الذَّاكِرِين",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "اِهْدِنَا سُبْلَ الْعَفَافْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا مُجِيبَ السَّائِلِين",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "رُفْ بِنَا وَاغْفِرْ وَعَافْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "نَسْتَعِينُك يَا مُعِين",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "شفّهَا أَحْسَن شَفَافْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "هَبْ لَنَا فَتْحًا مُبِين",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "جَاءَ بِالنَّصْرِ مُوَافْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَاكْفِ شَرَّ الْمُؤذِين",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "كُفَّهَمْ عَنَّا كَفَافْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَالْعُتَاةَ الظَّالِمِين",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "حُتَّهُم حَتَّى التَّلَافْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "شَرُّهُمْ فِيهِمْ مُبِين",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مِنْهُمُ فِيهِم مُضَافْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "خَاسِرِينَ مُدْبِرِين",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "ذَهَبُوا بِالْاِنْصِرَافْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "مُرْتَدِّينَ هَالِكِين",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فِي شَفَا جُرفِ الْهَيَاف",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَالطُّغَاةِ الْبَاغِين",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "اِكْفِهِمْ يَا خَيْرَ كَافْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "حَسْبُنَا اللَّه الْمُعِين",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "هُوَ هُوَ لَا خِلَافْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَكَفَى الْمُتَوَكِّلِين",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "كُلَّ شَرٍّ مِنْ مُخَافْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "هُوَ رَبُّ الْعَالَمِين",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَإِلَيْهِ الْإِنْعِطَافْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "كَهْفُنَا الْحِصْنُ الْحَصِين",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مِنْ سِوَاهُ مَا نَخَافْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَصَلَاةٌ كُلَّ حِين",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَسَلَامُ اللَّهِ وَافْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "تَبْلُغُ الْهَادِي الْأَمِين",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَآلَه اَصْحَابَ الْعَفَافْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "خَتْمُهَا لِلْمُسْلِمِين",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "الْمَسَاكِين الضِّعَافْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "غَارَةُ اللَّهِ الْمَتِين",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "هُوْ بِهِمْ أَرْحَمْ وَرَافْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
        ],
      }),
      new QasidaChapterModel({
        number: 8,
        title: "Ya Tawwab Tub Alayna",
        entries: [
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا تَوَّاب تُبْ عَلَيْنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَارْحَمْنَا وَانْظُرْ إِلَيْنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا تَوَّاب تُبْ عَلَيْنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "سَامِحْنَا فِيمَا جَنَيْنَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا تَوَّاب تُبْ عَلَيْنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "اِغْفِرْ لَنَا وَلِوَالِدِينَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا اللَّه بِتَوْبَة تَوْبَة مَغْفِرَة",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَالْجَمَالَة دُنْيَا وَآخِرَة",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا اللَّه بِتَوْبَة وَقَبُول وَإِحْسَان",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يَا اللَّه بِتَوْبَة قَبْلَ دَرْجِ الْأَكْفَان",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا اللَّه رِضَى يَا اللَّه رِضَى",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَالْعَفْوَ عَمَّا قَدْ مَضَى",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا اللَّه رِضَى يَا اللَّه رِضَى",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يَا اللَّه بِتَوْبَةْ وَالْقَبُول",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "أَسْتَغْفِرُ اللَّه أَسْتَغْفِرُ اللَّه",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "أَسْتَغْفِرُ اللَّه وَنَتُوبُ إِلَى اللَّه",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "أَسْتَغْفِرُ اللَّهَ رَبَّ الْبَرَايَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "أَسْتَغْفِرُ اللَّه مِنَ الْخَطَايَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا فَارِجَ الْهَمِّ يَا كَاشِفَ الْغَم",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يَا مَنْ لِعَبْدِهِ يَغْفِرْ وَيَرْحَمْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا رَبِّ سَالَكْ بِحَقِّ ذَاتِك",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "اِغْفِرْ لَنَا وَلِوَالِدِينَا",
                translit: "",
                translation: "",
              }),
            ],
          }),
        ],
      }),
      new QasidaChapterModel({
        number: 9,
        title: "La ilaha illaLlah",
        entries: [
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "لَا إِلَهَ إِلَّا اللَّه",
                translit: "Lā ilāha illallāh",
                translation: "There is no god but Allah.",
              }),
              new QasidaEntryModel({
                arabic: "لَا إِلَهَ إِلَّا اللَّه",
                translit: "Lā ilāha illallāh",
                translation: "There is no god but Allah.",
              }),
              new QasidaEntryModel({
                arabic: "لَا إِلَهَ إِلَّا اللَّه",
                translit: "Lā ilāha illallāh",
                translation: "There is no god but Allah.",
              }),
              new QasidaEntryModel({
                arabic: "مِنَ اللَّه نَرْجُو الْغُفْرَان",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا حَنَّان يَا مَنَّان",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يَا قَدِيمَ الْإِحْسَان",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "بَحْر جُودِك مَلْيَان",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "جُدْ لَنَا بِالْغُفْرَان",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "جُدْ لِهَذَا الْإِنْسَان",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "عَبْدِ سُوءٍ خَزْيَان",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مِنْ ذُنُوبِه وَحْلَان",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "خَائِف إِنَّك غَضْبَان",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "رَبَّنَا نَسْتَعْفِيك",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "رَبَّنَا نَسْتَكْفِيك",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَلَنَا ظَنٌّ فِيك",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يَا رَجَاء أهْلِ الْإِيمَان",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "لَا تُخَيِّب رَاجِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "تَحْتَ بَابِك لَاجِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "لَمْ يَزَلْ بِالدَّاجِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "قَائِلاً: يَا حَنَّان",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِعَظِيمِ الْأَسْمَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَالصِّفَاتِ الْعُظْمَى",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَالْمَلَائِك جَمَّا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَبِجَاهِ الْقُرْآن",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِالنَّبِيِّ الْأُمِّي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَخَدِيجَة أُمِّي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَالْبَتُولِ الْخَتْمِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "سَيِّدَاتِ النِّسْوَان",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِالنَّبِيِّينَ الْجَمْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مِنْ أَبِينَا آدَم",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَبِنُوحِ الْأَقْدَمْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَخَلِيلِ الرَّحْمَن",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِالنَّبِيّ بِن مَرْيَم",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَبِهُودِ الْأَكْرَم",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَبِهَادُونِ الْعَم",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَالنَّبِي بِن عِمْرَان",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِجَاهِ الْأَصْحَاب",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَبِجَاهِ الْأَقْطَاب",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَالْوَلِيِّ الْأَوَّاب",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "شَيْخِنَا بَاسَوْدَان",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِمَشَايِخِ الْإِسْلَام",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "أَهْلِ عِلْمٍ وَأَحْكَام",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَالْوَلِي بِن بسْطَام",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَالْوَلِي بِن جَيْلَان",
                translit: "",
                translation: "",
              }),
            ],
          }),
        ],
      }),
      new QasidaChapterModel({
        number: 10,
        title: "Ya Ilah al-Alam",
        entries: [
          new QasidaVerseModel({
            chorus: true,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا إِلَهَ الْعَالَم",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بأهْلِ (تُرْبَة بَشَّار)",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَالْفَقِيهِ الْمِشْهَار",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَآل عَلوِي الْأَبْرَار",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مَنْ بِهِمْ حَالِي زَانْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بأهْلِ (عِينَاتِ) الْيَوم",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مَا كَمَاهُم فِي الْقَوم",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَإِنْ بَدَا مِنِّي لَوم",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يَطْلُبُوا لِي الْغُفْرَانْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِالْحَسَن بِن صَالِح",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "بَحْرِ نُورُه طَافِح",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "لَا تَكُنْ لِي فَاضِح",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يَا صَمَد يَا مَنَّانْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "مِثْل شَيْخِ الْمَشْهَد",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "ابنِ نَاصِر أَحْمَد",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَأَبِيه ثُمَّ الْجَدْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "لِلْمَعَالِي لَهُم شَانْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "جُدْ لَنَا بِالْمَطْلُوب",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَالْفَرَج مِثْل أَيُّوب",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَبِفَرْحَة يَعْقُوب",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "حِين زَالَتِ الْأَحْزَانْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "رَبَّنَا اغْفِرْ وَارْحَمْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَاعْفُ عَمَّا تَعْلَم",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فَإِنَّ جُودَك قَدْ عَمْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "إِنْسَ خَلْقِك وَالْجَانْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَدُرُوسِ الْقُرْآن",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَاجْتِمَاعِ الْإِخْوَان",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "لِدُعَاءِ الرَّحْمَن",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "سِرَّهُم وَالْإِعْلَانْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَالْحَبِيبِ المحْضَار",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "قَائِمًا بِالْأَسْحَار",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "قَائِلاً: يَا غَفَّار",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "جُدْ لَنَا بِالْغُفْرَانْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "اِسْتَجِبْ لِي وَاسْمَعْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَلَنَا الْكُل أَجْمَع",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَلِمَنْ لَكْ يَضْرَعْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "طَالِبًا لِلْإِحْسَانْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَصَلَاةٌ تَتْرَى",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "لِمَنْ خُصَّ بِالْإِسْرَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَذَوِيهِ طُرَّا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فِي جَمِيعِ الْأَزْمَان",
                translit: "",
                translation: "",
              }),
            ],
          }),
        ],
      }),
      new QasidaChapterModel({
        number: 11,
        title: "Ya Alim as-Sirri",
        entries: [
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا عَالِمَ السِّرِّ مِنَّا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "لَا تَهتِكِ السَّتْرَ عَنَّا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَعَافِنَا وَاعْفُ عَنَّا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَكُنْ لَنَا حَيْثُ كُنَّا",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا رَبِّ يَا عَالِمَ الْحَال",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "إِلَيْكَ وَجَّهتُ الْآمَال",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فَامْنُنْ عَلَيْنَا بِالْإِقْبَال",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَكُنْ لَنَا وَاصْلِحِ الْبَال",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا رَبِّ يَا رَبَّ الْأَرْبَاب",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "عَبْدُك فَقِيرُك عَلَى الْبَاب",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "أَتَى وَقَدْ بَتَّ الْأَسْبَاب",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مُسْتَدْرِكًا بَعْدَ مَا مَال",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا وَاسِعَ الْجُودِ جُودَك",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "اَلْخَيْرُ خَيْرُك وَعِنْدَك",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فَوْقَ الَّذِي رَامَ عَبْدُك",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فَادْرِك بِرَحْمَتِك فِي الْحَالِ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا مُوجِدَ الْخَلقِ طُرًّا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَمُوسِعَ الْكُلِّ بِرًّا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "أَسْأَلُكَ إسْبَال سَتْرًا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "عَلَى الْقَبَائِح وَالْأَخْطَالْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا مَنْ يَرَى سِرَّ قَلْبِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "حَسْبِي اطِّلَاعُكَ حَسْبِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فَامْحُ بِعَفْوِكَ ذَنْبِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَاصْلِح قُصُودِي وَالْأَعْمَال",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "رَبِّي عَلَيْكَ اعْتِمَادِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "كَمَا إِلَيْكَ اسْتِنَادِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "صِدْقًا وَأَقْصَى مُرَادِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "رِضَاؤُكَ الدَّائِمُ الْحَال",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا رَبِّ يَا رَبِّ إِنِّي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "أَسْأَلُكَ الْعَفْوَ عَنِّي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَلَمْ يَخِبْ فِيكَ ظَنِّي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يَا مَالِكَ الْمُلكِ يَا وَال",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "أَشْكُو إِلَيْكَ وَأَبْكِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مِنْ شُؤْمِ ظُلْمِي وَإِفْكِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَسُوءِ فِعْلِي وَتَرْكِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَشَهْوَةِ الْقِيلِ وَالْقَال",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَحُبِّ دُنْيَا ذَمِيمَهْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مِنْ كُلِّ خَيْرٍ عَقِيمَهْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فِيهَا الْبَلَايَا مُقِيمَهْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَحَشْوُهَا آفَات وَاشْغَال",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا وَيْحَ نَفْسِي الْغَوِيَّهْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "عَنِ السَّبِيلِ السَّوِيَّهْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "أَضْحَتْ تُرَوِّج عَلَيَّهْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَقَصْدُهَا الْجَاهُ وَالْمَال",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا رَبِّ قَدْ غَلَبَتْنِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَبِالْأَمَانِي سَبَتْنِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَفِي الْحُظُوظِ كَبَتنِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَقَيَّدَتْنِي بِالْاِكْبَالْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "قَدِ اسْتَعَنْتُكَ رَبِّي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "عَلَى مُدَاوَاةِ قَلْبِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَحَلِّ عُقْدَةِ كَربِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فَانْظُرْ إِلَى الْغَمِّ يَنْجَالْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا رَبِّ يَا خَيْرَ كَافِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "أَحلِل عَلَيْنَا الْعَوَافِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فَلَيْسَ شَي ثَمَّ خَافِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "عَلَيْك تَفْصِيل وَاجْمَال",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: true,
            entries: [
              new QasidaEntryModel({
                arabic: "لَا إِلَهَ إِلَّا اللَّه",
                translit: "Lā ilāha illallāh",
                translation: "There is no god but Allah.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا رَبِّ عَبدُك بِبَابِك",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يَخْشَى أَلِيمَ عَذَابِك",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَيَرْتَجِي لِثَوَابِك",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَغَيْثُ رَحْمَتِك هَطَّالْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَقَدْ أَتَاكَ بِعُذْرِه",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَبِانْكِسَارِه وَفَقْرِه",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فَاهْزِمْ بِيُسْرِكَ عُسْرِه",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "بِمَحْضِ جُودِك وَالْاِفْضَال",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَامْنُن عَلَيْهِ بِتَوْبَهْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "تَغْسِلْهُ مِنْ كُلِّ حَوْبَهْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَاعْصِمْهُ مِنْ شَرِّ أَوبَهْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "لِكُلِّ مَا عَنْهُ قَدْ حَالْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "فَأَنْتَ مَوْلَى الْمَوَالِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "الْمُنْفَرِد بِالْكَمَالِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَبِالْعُلَا وَالتَّعَالِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "عَلَوْتَ عَنْ ضَرْبِ الْاَمْثَال",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "جُودُك وَفَضْلُك وَبِرُّك",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يُرْجَى وَبَطْشُك وَقَهْرُك",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يُخْشَى وَذِكْرُك وَشُكْرُك",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "لَازِم وَحَمْدُك وَالْإِجْلَال",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا رَبِّ أَنْتَ نَصِيرِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فَلَقِّنِي كُلَّ خَيرِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَاجْعَلْ جِنَانَك مَصِيرِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَاخْتِمْ بِالْإِيمَانِ الْآجَالْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَصَلِّ فِي كُلِّ حَالَهْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "عَلَى مُزِيلِ الضَّلَالَهْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مَنْ كَلَّمَتهُ الْغَزَالَهْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مُحَمَّدِ الْهَادِي الدَّالْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَالْحَمْدُ لِلَّهِ شُكْرا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "عَلَى نِعَم مِنْهُ تَتْرَى",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "نَحْمَدهُ سِرًّا وَجَهْرا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَبِالْغَدَايَا وَالْآصَالْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
        ],
      }),
      new QasidaChapterModel({
        number: 12,
        title: "Ya Rabbana Ya Karim",
        entries: [
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا رَبَّنَا يَاكَرِيم",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يَا رَبَّنَا يَا رَحِيم",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "أَنْتَ الْجَوَادُ الْحَلِيم",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَأَنْتَ نِعمَ الْمُعِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَلَيْسَ نَرْجُو سِوَاك",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فَادْرِك إِلَهِي دَرَاكْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "قَبْلَ الفَنَا وَالْهَلَاك",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يَعُمُّ دُنْيَا وَدِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَمَا لَنَا رَبَّنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "سِوَاكَ يَا حَسبَنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يَا ذَا الْعُلَا وَالْغِنَى",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَيَا قَوِي يَا مَتِينْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "نَسْأَلك وَالِي يُقِيم",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "اَلْعَدْلَ كَيْ نَسْتَقِيم",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "عَلَى هُدَاكَ الْقَوِيم",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَلَا نُطِيعُ اللَّعِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا رَبَّنَا يَا مُجِيبْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "أَنْتَ السَّمِيعُ الْقَرِيب",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "ضَاقَ الْوَسِيعُ الرَّحِيب",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فَانْظُرْ إِلَى الْمُؤْمِنِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "نَظرَه تُزِيلُ الْعَنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "عَنَّا وَتُدْنِي الْمُنَى",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مِنَّا وَكُلَّ الْهَنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "نُعْطَاه فِي كُلِّ حِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "سَالَكْ بِجَاهِ الْجُدُود",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَالِي يُقِيمُ الْحُدُود",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "عَنَّا وَيَكْفِي الْحَسُود",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَيَدْفَعُ الظَّالِمِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يُزِيلُ لِلْمُنْكَرَات",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يُقِيمُ لِلصَّلَوَات",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يَأْمُرُ بِالصَّالِحَات",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مُحِبٌّ لِلصَّالِحِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يُزِيحُ كُلَّ الْحَرَام",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يَقْهَرُ كُلَّ الطَّغَامْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يَعدِلُ بَيْنَ الْأَنَام",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَيُؤْمِنُ الْخَائِفِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "رَبِّ اسْقِنَا غَيْث عَام",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "نَافِع مُبَارَك دَوَام",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يَدُومُ فِي كُلِّ عَام",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "عَلَى مَمَرِّ السِّنِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "رَبِّ احْيِنَا شَاكِرِين",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَتَوَفَّنَا مُسْلِمِين",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "نُبْعَث مِنَ الْآمِنِين",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فِي زُمْرَةِ السَّابِقِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِجَاهِ طَهَ الرَّسُول",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "جُدْ رَبَّنَا بِالْقَبُول",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَهَب لَنَا كُلَّ سُول",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "رَبِّ اسْتَجِبْ لِي أَمِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "عَطَاكَ رَبِّي جَزِيل",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَكُلُّ فِعْلِك جَمِيل",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَفِيك أَمَلنَا طَوِيل",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فَجُدْ عَلَى الطَّامِعِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا رَبِّ ضَاقَ الْخِنَاق",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مِنْ فِعْلِ مَا لَا يُطَاق",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فَامْنُنْ بِفَكِّ الْغَلَاقْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "لِمَنْ بِذَنْبِه رَهِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَاغْفِرْ لِكُلِّ الذُّنُوب",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَاسْتُرْ لِكُلِّ الْعُيُوب",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَاكْشِفْ لِكُلِّ الْكُرُوب",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَاكْفِ أَذَى الْمُؤْذِيين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَاخْتِمْ بِأَحْسَن خِتَام",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "إِذَا دَنَا الْإِنصِرَامْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَحَانَ حِينُ الحِمَام",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَزَادَ رَشحُ الْجَبِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "ثُمَّ الصَّلَاة وَالسَّلَام",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "عَلَى شَفِيعِ الْأَنَام",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَالْآلِ نِعمَ الْكِرَام",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَالصَّحْبِ وَالتَّابِعِين",
                translit: "",
                translation: "",
              }),
            ],
          }),
        ],
      }),
      new QasidaChapterModel({
        number: 13,
        title: "Mashaikh",
        entries: [
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "مَشَايِخَ الْحَضْرَة",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "عَسَى لَنَا نَظْرَة",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "بِجَاهِ أَهْلِ اللَّه",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يَمْحُو الذُّنُوبَ اللَّه",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "نَبْدِي بِحَمْدِ اللَّه",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَنَسْتَمِد بِاللَّه",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "بِجَاهِ أَهْلِ اللَّه",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "نَفُزْ بِحَوْلِ اللَّه",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِفَضْلِهِ الشَّامِل",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يُصْلِح لَنَا الْعَاجِل",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فِي الْحَالِ وَالْآجِل",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَالْكُلُّ فَضْلُ اللَّه",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبَعْدَ جَاءَ النَّظْم",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مِنَ الشَّرِيفِ الضَّخْم",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "أَعْنِي الْجَمَالَ الْفَخْم",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "حَبِيبَنَا فِي اللَّه",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "ابن طَالِب الْمحْضَار",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "الْمُخْبِت الصَّبَّار",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مُطَهِّر الْأَسْرَار",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "سَلِيلِ أَهْلِ اللَّه",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "الْقَادَةِ الْقُدْوَة",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "السَّادَةِ الصَّفْوَة",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "ذِي مَا لَهُم شَهْوَة",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "إِلَّا لِذِكْرِ اللَّه",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "مِثْلِ الْإِمَامِ الْفَخْر",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "أَعْنِي رَفِيعَ الْقَدْر",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "كَالشَّمْسِ لَا كَالْبَدْر",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يَاضِي لِخَلْقِ اللَّه",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بُو بَكر بِن سَالِم",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "هُوَ حَتْف لِلظَّالِم",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "الْفَاجِر الْغَاشِم",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يَهْلِك بِأَمْرِ اللَّه",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَيُنْجِي الْغَارِق",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "إِنْ كَانَ بِهِ وَاثِق",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يُلْحِقُهُ بِالسَّابِق",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "هَذَا بِفَضْلِ اللَّه",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "لَما قَرَأهُ الْعَبْد",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فَاحَ الشَّذَى مِنْ نَجْد",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَقَالَ: لَعَلَّ السَّعْد",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يَأْتِي بِجُودِ اللَّه",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَالْعَبْد ذَا الْجَانِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "كَثِيرُ عِصْيَانِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "كَثِيرُ طُغْيَانِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "كَمْ خَالَف أَمْرَ اللَّه",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "لِأَنَّهُ حَائِرْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَقَلْبَهُ طَائِرْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَلَا لَهُ نَاصِرْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "إِلَّا عِبَادَ اللَّه",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "عَسَى بِحَقِّ الْقَوْم",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "نَلْحَق بِهِم فِي الْعوم",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَمَا جَرَى مِنْ لَوْم",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يُغْفَر بِجَاهِ اللَّه",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا سَادَتِي غَارَهْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فِي الْحَال بَدَّارَهْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مَا فِي الْكَبِد مَارَهْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "اللَّه اللَّه اللَّه",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "قُومُوا مَعِي قَومَه",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَاقْضُوا الَّذِي رُومَه",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "كُلّه مَدَى نَومَه",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يَجِي بِعُونِ اللَّه",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "كَفَى كَفَى مَا بِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "دَاوُوا لِي أَصْوَابِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فِي الْحَال يَا اَحْبَابِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فَإِنَّكُم بِاللَّه",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "كُونُوا لَنَا نُصْرَهْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "بِالسَّيف وَالْقُدْرَهْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَكُلّ مَا نَكَرَهْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "حُوشُوه شَيْ لِلَّه",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "هَيَّا بِكُم هَيَّا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "لِلدِّينِ وَالدُّنْيَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "حَيَّا بِكُم حَيَّا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "حَيَّا بِنَصْرِ اللَّه",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَقْدُمْهُ جِبْرَائِيل",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "أَيْضًا وَمِيكَائِيل",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فَإِنَّهُ قَدْ قِيل",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فِي الْوَقْت: جَار اللَّه",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَالْمُصْطَفَى الطَّاهِرْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَالْمُرْتَضَى النَّاصِرْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَابْنَاهُ وَالْبَاقِرْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَالْكُلُّ حِزْبُ اللَّه",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "حَسْبِي بِهِمْ حَسْبِي",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "هُمْ صَفْوَةُ الرَّبِّ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فِي الْفَضْلِ وَالْقُرْبِ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَالْكُلُّ شَيْ لِلَّه",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "صَلِّ وَسَلِّمْ دُوب",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "عَلَى النَّبِي الْمَحْبُوب",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "بِهِ يَحْصُلُ الْمَطْلُوب",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "أَجْمَعْ بِفَضْلِ اللَّه",
                translit: "",
                translation: "",
              }),
            ],
          }),
        ],
      }),
      new QasidaChapterModel({
        number: 14,
        title: "Ya Allahu biha",
        entries: [
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا اللَّه بِهَا يَا اللَّه بِهَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يَا اللَّه بِحُسْنِ الْخَاتِمَهْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا اهْلِ الْعُقُولِ السَّالِمَهْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَاهْلِ الْقُلُوبِ الْعَالِمَهْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "قُولُوا بِهِمَّهْ عَازِمَهْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَبِصِدْقِ نِيَّهْ جَازِمَهْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "فَهِيَ إِلَيْهَا الْمُنْتَهَى",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "قَدْ قَالَ أَرْبَابُ النُّهَى",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "يَا اللَّه بِهَا يَا اللَّه بِهَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "دَعْوَه عَجِيبَه تَامَّهْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا رَبَّنَا يَا رَبَّنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "اُلْطُفْ بِنَا وَاغْفِرْ لَنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَاخْتِمْ بِخَيْرٍ إِنْ دَنَا",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "إِبَّانُ يَوْمِ الطَّامَّهْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "فَالْمَوْتُ آتٍ عَنْ قَرِيب",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "كُلٌّ لَهُ مِنْهُ نَصِيب",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مَنْ كَانَ دَانٍ أَوْ نَسِيب",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فَهُوَ مُصِيبَهْ عَامَّهْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "ثُمَّ إِذَا مُتَّ أَتَوْك",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَغَسَّلُوك وَكَفَّنُوك",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَشَيَّعُوك وَأَلْحَدُوك",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَصِرْتَ جِيفَهْ خَامَّهْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا رَبِّ كُنْ لِي يَا مُعِين",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "إِذَا رَشَحْ عَظْمُ الْجَبِين",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَاخْتِمْ إِلَهِي بِالْيَقِين",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "مِنْ قَبْلِ لَوْمِ اللَّائِمَهْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "دُنْيَاك مَا هِي لِلْمَقَرّ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَإِنَّمَا هِي لِلْمَمَرّ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "فَافْكِرْ وَأَمْعِنْ فِي النَّظَرْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَلَا تَكُنْ كَالسَّائِمَهْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا رَبِّ مَا مَعنَا عَمَل",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وكَسْبُنَا كُلُّهْ زَلَلْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "لَكِنْ لَنَا فِيكَ أَمَل",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "تُحْيِي الْعِظَامَ الرَّامَّهْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "قَدْ حَانَ حِينُ الْإِنْتِقَالْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "وَالْعُمْر وَلَّى فِي ضَلَالْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "لَكِنِّي أَرْجُو ذَا الْجَلَال",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "بِجَاهْ وَالِدْ فَاطِمَهْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: true,
            entries: [
              new QasidaEntryModel({
                arabic: "بِجاهْ وَالِدْ فَاطِمَهْ",
                translit: "",
                translation: "",
              }),
              new QasidaEntryModel({
                arabic: "اُمْنُنْ بِحُسْنِ الْخَاتِمَةْ",
                translit: "",
                translation: "",
              }),
            ],
          }),
        ],
      }),
      new QasidaChapterModel({
        number: 15,
        title: "Fatihas",
        entries: [
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic:
                  "الْفَاتِحَة إِلَى حَضْرَةِ سَيِّدِنَا وَحَبِيبِنَا وَشَفِيعِنَا رَسُولِ اللَّهِ مُحَمَّدِ بْنِ عَبْدِ اللَّهِ ﷺ وَسَائِرِ الْأَنْبِيَاءِ وَالْمُرْسَلِينَ وَالْآلِ وَالصَّحْبِ أَجْمَعِينَ وَالتَّابِعِينَ لَهُمْ بِإِحْسَانٍ إِلَى يَوْمِ الدِّينِ وَسَائِرِ عِبَادِ اللَّهِ الصَّالِحِينَ أَنَّ اللَّهَ يُعْلِي دَرَجَاتِهِمْ فِي الْجَنَّةِ وَيَحْمِينَا بِحِمَايَتِهِمْ وَيَمُدَّنَا بِمَدَدِهِمْ وَيُدْخِلنَا فِي شَفَاعَتِهِمْ وَيَنْفَعَنَا بِبَرَكَتِهِمْ وَيَرْزُقَنَا مَحَبَّتَهُمْ وَالتَّخَلُّقَ بِأَخْلَاقِهِمْ وَيَحْشُرَنَا فِي زُمْرَتِهِم فِي عَافِيَة",
                translit:
                  "Al-Fātiḥah ilā ḥaḍrati sayyidinā wa ḥabībinā wa shafī‛inā rasūlillāhi Muḥammadi bni ‛abdillāh ṣallallāhu ‛alayhi wa sallam, wa sā’iril-anbiyā’i wal-mursalīn, wal-āli waṣ-ṣaḥbi ajma‛īn, wat-tābi‛īna lahum bi-iḥsānin ilā yawmid-dīn, wa sā’iri ‛ibādillāhiṣ-ṣāliḥīn, annallāha yu‛lī darajātihim fil-jannah, wa yaḥmīnā biḥimāyatihim, wa yamuddanā bimadadihim, wa yudkhilunā fī shafā‛atihim, wa yanfa‛anā bibarakatihim, wa yarzuqanā maḥabbatahum wat-takhalluqa bi-akhlāqihim, wa yaḥshuranā fī zumratihim fī ‛āfiyah",
                translation:
                  "Al-Fatihah to the presence of our master, our beloved and our intercessor, the Messenger of Allah, Muhammad son of Abdullah, may Allah bless him and grant him peace, and to all the prophets and messengers, the Family and all the Companions, those who followed them in excellence until the Day of Judgement, and all the righteous servants of Allah; that Allah raise their ranks in Paradise, protect us through their protection, support us through their support, admit us into their intercession, benefit us through their blessing, grant us love for them and the ability to take on their character, and gather us among their company in well-being.",
              }),
              new QasidaEntryModel({
                arabic:
                  "الْفَاتِحَة إِلَى رُوحِ سَيِّدِنَا الْمُهَاجِرِ إِلَى اللَّهِ أَحْمَد بِن عِيسَى وَسَيِّدِنَا عَلِي بِن عَلوِي (خَالِع قَسَم)، وَسَيِّدِنَا الْأُسْتَاذِ الْأَعْظَم الْفَقِيهِ الْمُقَدَّم مُحَمَّد بِن عَلِي بَاعَلوِي، وَسَيِّدِنَا عَلوِي عَمِّ الْفَقِيه، وَسَيِّدِنَا عَبْدِ الرَّحْمَن بِن عَلوِي عَمِّ الْفَقِيه وَإِخْوَانِه، وَسَادَاتِنَا عَلوِي وَعَلِي ابْنَي الْفَقِيه وَإِخْوَانِهِمَا، وَعَلِي وَعَبْدِ اللَّه ابْنَي عَلوِي بِن الْفَقِيه، وَسَيِّدِنَا مُحَمَّد (مَوْلَى الدَّوِيلَه)، وَالشَّيْخ عَبْدِ الرَّحْمَن السَّقَّاف وَأَوْلَادِهِ الشَّيْخ أَبِي بَكر السَّكْرَان وَالشَّيْخ عُمَر الْمِحْضَار وَإِخْوَانِهِمَا، وَالشَّيْخ عَبْدِ اللَّه الْعَيْدَرُوس وَأَوْلَادِهِ أَبِي بَكر الْعَدَنِي وَإِخْوَانِه، وَالشَّيْخ عَلِي بِن أَبِي بَكر وَابْنِهِ عَبْدِ الرَّحْمَن بِن عَلِي وَابْنِهِ أَحْمَد شِهَابِ الدِّين، وَسَيِّدِنَا مُحَمَّد بِن حَسَن جَمَلِ اللَّيْل، وَسَيِّدِنَا مُحَمَّد بِن عَلِي (مَوْلَى عَيْدِيد)، وَسَيِّدِنَا أَبِي بَكر بِن عَبْدِ اللَّه بَاشَمَيلَه، وَالشَّيْخ أَبِي بَكر بِن سَالِم، وَسَيِّدِنَا عُمَر الْعَطَّاس، وَالْحَبِيب عَبْدِ اللَّه الْحَدَّاد، وَالْحَبِيب عُمَر الْبَار، وَالْحَبِيب عَبْدِ الرَّحْمَن ابن عَبْدِ اللَّه بَلْفَقِيه، وَالْحَبِيب مُحَمَّد وَعُمَر ابْنَي زَيْن بِن سُمَيُط، وَالْحَبِيب أَحْمَد بِن عُمَر بِن سُمَيْط، وَالْحَبِيب حَامِد بِن عُمَر، وَسَيِّدِنَا طَاهِر وَعَبْدِ اللَّه ابْنَي حُسَيْن بِن طَاهِر، وسيِّدنا أَحْمَد بِن مُحَمَّد الْمِحْضَار، وَسَيِّدِنَا أَبُو بَكر ابن عَبْدِ اللَّه الْعَطَّاس، وَسَيِّدِنَا أَحْمَد بِن حَسَن الْعَطَّاس، وَسَيِّدِنَا عَيْدَرُوس بِن عُمَر الْحَبَشِي، وَسَيِّدِنَا عَلِي بِن مُحَمَّد الْحَبَشِي، وَالْحَبِيب عَبْدِ اللَّه بِن شَيْخ الْعَيْدَرُوس، وَالْحَبِيب أَحْمَد بِن عَيْدَرُوس الْعَيْدَرُوس، وَالْحَبِيب عَبْدِ الرَّحْمَن الْمَشْهُور وَابْنِهِ عَلِي وَابْنِهِ عَبْدِ اللَّه ابن عَلِي الْمَشْهُور وَالْحَبِيب سَالِم بِن حَفِيظ وَابْنِهِ الْحَبِيب مُحَمَّد، وَالْحَبِيب عَلوِي بِن عَبْدِ الرَّحْمَن الْمَشْهُور، وَالْحَبِيب عَبْدِ اللَّه بِن عُمَر الشَّاطِرِي وَالْحَبِيب عَلوِي بِن عَبْدِ اللَّه بِن شِهَابِ الدِّين وَابْنِهِ مُحَمَّد بِن عَلوِي، وَالْحَبِيب أَبِي بَكر عَطَّاس الْحَبَشِي، وَالْحَبِيب أَحْمَد مَشْهُور الْحَدَّاد؛ وَجَمِيعِ سَادَاتِنَا آلِ أَبِي عَلوِي، وَالشَّيْخ سَعِيد الْعَمُودِي، وَالشَّيْخ سَالِم بِن فَضل بَافَضل، وَالشَّيْخ عَلِي ابن مُحَمَّد الْخَطِيب، وَالشَّيْخ سَعْد بِن عَلِي مَدحَج، وَالشَّيْخ عَبْدِ اللَّه بِن أَحْمَد بَاسَوْدَان، وَأُصُولِهِم وَفُرُوعِهِم وَذُرِّيَّاتِهِم وَذَوِي الْحُقُوقِ عَلَيْهِم أَجْمَعِين، وَمَشَايِخِ الْحَضْرَةِ الْجَمِيع، وَوَالِدِينَا، وَأَوْلَادِنَا، وَأَهْلِينَا، وَمَشَايِخِنَا، وَمُعَلِّمِينَا، وَجَمِيعِ الْمُسْلِمِينَ أَنَّ اللَّهَ يُعْلِي دَرَجَاتِهِم فِي الْجَنَّة، وَيَغْفِرُ لَهُم وَيَرْحَمُهُم وَيُسْكِنُهُمُ الْجَنَّة",
                translit:
                  "Al-Fātiḥah ilā rūḥi sayyidinal-muhājiri ilallāhi Aḥmad bin ‛Īsā wa sayyidinā ‛Alī bin ‛Alawī (Khāli‛ Qasam), wa sayyidinal-ustādhil-a‛ẓamil-faqīhil-muqaddam Muḥammad bin ‛Alī Bā‛Alawī, wa sayyidinā ‛Alawī ‛ammil-faqīh, wa sayyidinā ‛Abdur-Raḥmān bin ‛Alawī ‛ammil-faqīh wa ikhwānih, wa sādātinā ‛Alawī wa ‛Alī ibnayil-faqīh wa ikhwānihimā, wa ‛Alī wa ‛Abdillāh ibnay ‛Alawī bnil-faqīh, wa sayyidinā Muḥammad (Mawlad-Dawīlah), wash-Shaykh ‛Abdur-Raḥmānis-Saqqāf wa awlādihish-Shaykh Abī Bakras-Sakrān wash-Shaykh ‛Umaral-Miḥḍār wa ikhwānihimā, wash-Shaykh ‛Abdillāhil-‛Aydarūs wa awlādihi Abī Bakril-‛Adanī wa ikhwānih, wash-Shaykh ‛Alī bin Abī Bakr wabnihi ‛Abdur-Raḥmān bin ‛Alī wabnihi Aḥmad Shihābid-Dīn, wa sayyidinā Muḥammad bin Ḥasan Jamalil-Layl, wa sayyidinā Muḥammad bin ‛Alī (Mawlā ‛Aydīd), wa sayyidinā Abī Bakr bin ‛Abdillāh Bāshumaylah, wash-Shaykh Abī Bakr bin Sālim, wa sayyidinā ‛Umaral-‛Aṭṭās, wal-Ḥabīb ‛Abdillāhil-Ḥaddād, wal-Ḥabīb ‛Umaral-Bār, wal-Ḥabīb ‛Abdur-Raḥmān ibn ‛Abdillāh Balfaqīh, wal-Ḥabīb Muḥammad wa ‛Umar ibnay Zayn bin Sumayṭ, wal-Ḥabīb Aḥmad bin ‛Umar bin Sumayṭ, wal-Ḥabīb Ḥāmid bin ‛Umar, wa sayyidinā Ṭāhir wa ‛Abdillāh ibnay Ḥusayn bin Ṭāhir, wa sayyidinā Aḥmad bin Muḥammadil-Miḥḍār, wa sayyidinā Abū Bakr ibn ‛Abdillāhil-‛Aṭṭās, wa sayyidinā Aḥmad bin Ḥasanil-‛Aṭṭās, wa sayyidinā ‛Aydarūs bin ‛Umaral-Ḥabashī, wa sayyidinā ‛Alī bin Muḥammadil-Ḥabashī, wal-Ḥabīb ‛Abdillāh bin Shaykhil-‛Aydarūs, wal-Ḥabīb Aḥmad bin ‛Aydarūsil-‛Aydarūs, wal-Ḥabīb ‛Abdur-Raḥmānil-Mashhūr wabnihi ‛Alī wabnihi ‛Abdillāh ibn ‛Alīyil-Mashhūr, wal-Ḥabīb Sālim bin Ḥafīẓ wabnihil-Ḥabīb Muḥammad, wal-Ḥabīb ‛Alawī bin ‛Abdur-Raḥmānil-Mashhūr, wal-Ḥabīb ‛Abdillāh bin ‛Umarash-Shāṭirī, wal-Ḥabīb ‛Alawī bin ‛Abdillāh bin Shihābid-Dīn wabnihi Muḥammad bin ‛Alawī, wal-Ḥabīb Abī Bakr ‛Aṭṭās al-Ḥabashī, wal-Ḥabīb Aḥmad Mashhūrul-Ḥaddād; wa jamī‛i sādātinā āli Abī ‛Alawī, wash-Shaykh Sa‛īdil-‛Amūdī, wash-Shaykh Sālim bin Faḍl Bāfaḍl, wash-Shaykh ‛Alī ibn Muḥammadil-Khaṭīb, wash-Shaykh Sa‛d bin ‛Alī Madḥaj, wash-Shaykh ‛Abdillāh bin Aḥmad Bāsawdān, wa uṣūlihim wa furū‛ihim wa dhurriyyātihim wa dhawil-ḥuqūqi ‛alayhim ajma‛īn, wa mashāyikhil-ḥaḍratil-jamī‛, wa wālidīnā, wa awlādinā, wa ahlīnā, wa mashāyikhinā, wa mu‛allimīnā, wa jamī‛il-muslimīna annallāha yu‛lī darajātihim fil-jannah, wa yaghfiru lahum wa yarḥamuhum wa yuskinuhumul-jannah",
                translation:
                  "Al-Fatihah to the spirit of our master, the one who migrated to Allah, Ahmad bin Isa; our master Ali bin Alawi (Khali Qasam); our master the greatest teacher, the jurist al-Muqaddam, Muhammad bin Ali Ba Alawi; our master Alawi, uncle of al-Faqih; our master Abd ar-Rahman bin Alawi, uncle of al-Faqih, and his brothers; our masters Alawi and Ali, the two sons of al-Faqih, and their brothers; Ali and Abdullah, the two sons of Alawi bin al-Faqih; our master Muhammad (Mawla ad-Dawilah); Shaykh Abd ar-Rahman as-Saqqaf and his sons Shaykh Abu Bakr as-Sakran and Shaykh Umar al-Mihdar and their brothers; Shaykh Abdullah al-Aydarus and his sons Abu Bakr al-Adani and his brothers; Shaykh Ali bin Abi Bakr, his son Abd ar-Rahman bin Ali and his son Ahmad Shihab ad-Din; our master Muhammad bin Hasan Jamal al-Layl; our master Muhammad bin Ali (Mawla Aydid); our master Abu Bakr bin Abdullah Bashumaylah; Shaykh Abu Bakr bin Salim; our master Umar al-Attas; al-Habib Abdullah al-Haddad; al-Habib Umar al-Bar; al-Habib Abd ar-Rahman ibn Abdullah Balfaqih; al-Habib Muhammad and Umar, the two sons of Zayn bin Sumayt; al-Habib Ahmad bin Umar bin Sumayt; al-Habib Hamid bin Umar; our master Tahir and Abdullah, the two sons of Husayn bin Tahir; our master Ahmad bin Muhammad al-Mihdar; our master Abu Bakr ibn Abdullah al-Attas; our master Ahmad bin Hasan al-Attas; our master Aydarus bin Umar al-Habashi; our master Ali bin Muhammad al-Habashi; al-Habib Abdullah bin Shaykh al-Aydarus; al-Habib Ahmad bin Aydarus al-Aydarus; al-Habib Abd ar-Rahman al-Mashhur, his son Ali and his son Abdullah ibn Ali al-Mashhur; al-Habib Salim bin Hafiz and his son al-Habib Muhammad; al-Habib Alawi bin Abd ar-Rahman al-Mashhur; al-Habib Abdullah bin Umar ash-Shatiri; al-Habib Alawi bin Abdullah bin Shihab ad-Din and his son Muhammad bin Alawi; al-Habib Abu Bakr Attas al-Habashi; al-Habib Ahmad Mashhur al-Haddad; all our masters of the family of Abi Alawi; Shaykh Said al-Amudi; Shaykh Salim bin Fadl Bafadl; Shaykh Ali ibn Muhammad al-Khatib; Shaykh Sad bin Ali Madhij; Shaykh Abdullah bin Ahmad Basawdan; their roots, branches and descendants, and all who have rights over them; all the masters of the Hadrah, our parents, our children, our families, our shaykhs, our teachers and all Muslims; that Allah raise their ranks in Paradise, forgive them, have mercy on them and house them in Paradise.",
              }),
              new QasidaEntryModel({
                arabic:
                  "الْفَاتِحَة لِأَصْحَابِ الْقَهْوَةِ وَالْبَخُورِ وَالْكَرَامَةِ وَمَنْ جَاءَ مِنْهُ خَيْرٌ أَوْ وَصَلَنَا بِخَيْرٍ وَمَنْ كَانَ سَبَبًا لِهَذَا الْجَمْعِ الْعَظِيمِ وَالْقُرَّاءِ وَالْمُسْتَمِعِينَ أَنَّ اللَّهَ يُجَمِّلُ أَحْوَالَهُم وَيَكُونُ فِي عَوْنِهِم وَيَتَقَبَّلُ مِنْهُم وَيَغْفِرُ لِوَالِدِيهِم وَوَالِدِينَا وَلِجَمِيعِ الْمُسْلِمِين وَيَجْمَعُ قُلُوبَنَا عَلَى التَّقْوَى، وَيَحْفَظُنَا وَإِيَّاهُم مِنْ كُلِّ أَذىً وَبَلْوَى، مَعَ الْعَافِيَةِ الدَّائِمَةِ التَّامَّة",
                translit:
                  "Al-Fātiḥah li-aṣḥābil-qahwati wal-bakhūri wal-karāmah, wa man jā’a minhu khayrun aw waṣalanā bikhayr, wa man kāna sababan lihādhal-jam‛il-‛aẓīm, wal-qurrā’i wal-mustami‛īn, annallāha yujammilu aḥwālahum wa yakūnu fī ‛awnihim wa yataqabbalu minhum wa yaghfiru liwālidīhim wa wālidīnā wa lijamī‛il-muslimīn, wa yajma‛u qulūbanā ‛alat-taqwā, wa yaḥfaẓunā wa iyyāhum min kulli adhan wa balwā, ma‛al-‛āfiyatid-dā’imatit-tāmmah",
                translation:
                  "Al-Fatihah for those who provided the coffee, the incense and the hospitality, for everyone from whom good has come or who has brought us good, for whoever was a cause of this great gathering, and for the reciters and the listeners; that Allah beautify their conditions, be their help, accept from them, forgive their parents and our parents and all the Muslims, unite our hearts upon God-consciousness, and protect us and them from every harm and trial, with lasting and complete well-being.",
              }),
              new QasidaEntryModel({
                arabic:
                  "الْفَاتِحَة بِبَرَكَةِ هَذِهِ الْحَضْرَةِ الشَّرِيفَةِ وَهَؤُلَاءِ السَّادَةِ الْأَنْجَابِ أَنَّ اللَّهَ يُصْلِحُ الْإِمَامَ وَالْأُمَّةَ وَالرَّاعِيَ وَالرَّعِيَّةَ وَيُفَرِِّجُ عَلَى الْمُسْلِمِينَ وَيَرْحَمُهُم بِرَحْمَةٍ هَنِيئَةٍ مَرِيئَةٍ نَافِعَةٍ وَيَطْرَحُ فِيهَا الْخَيْرَ وَالْبَرَكَةَ وَيُعَجِّلُ بِهَا وَيُصْلِحُ السَّادَةَ الْعَلَوِيَّة وَيَغْفِرُ ذُنُوبَنَا وَيَسْتُرُ عُيُوبَنَا وَيُسَهِّلُ مَطْلُوبَنَا وَيُحَسِّنُ أَخْلَاقَنَا وَيُوَسِّعُ مِنَ الْحَلَالِ أَرْزَاقَنَا وَيَكْفِينَا شَرَّ الْأَذِيَّاتِ وَالْبَلِيَّاتِ وَيُطْفِيءُ نَارَ الْفِتَنِ وَالْمِحَنِ، مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ، وَيُطِيلُ أَعْمَارَنَا فِي طَاعَتِهِ وَمَحَبَّتِهِ وَرِضَاهُ، وَيَمُنُّ عَلَيْنَا بِكَمَالِ مَحَبَّتِهِ وَمَحَبَّةِ نَبِيِّهِ سَيِّدِنَا مُحَمَّدٍ ﷺ، وَاتِّبَاعِ شَرِيعَتِهِ وَالْاِهْتِدَاءِ وَالْاِقْتِدَاءِ بِهِ وَبِسَلَفِنَا الصَّالِحِينَ، وَأَنَّ اللَّهَ يُعْطِي كُلَّ سَائِلٍ مِنَّا وَمِنْكُم سُؤلَهُ وَمَأْمُولَهُ، عَلَى مَا يُرْضِي اللَّهَ وَرَسُولَهُ، وَيَهَبُ لَنَا كُلَّ خَيْرٍ وَيُعَامِلُنَا مُعَامَلَةَ أَهْلِ الْخَيْرِ، وَيَعُمّ بَرَكَة هَذِهِ الْحَضْرَةِ عَلَى الْمُسْلِمِينَ أَجْمَعِينَ وَيَتَقَبَّلُهُ مِنَّا وَيَقْبَلُنَا عَلَى مَا فِينَا، وَيَمُنّ عَلَى الْجَمِيعِ بِكَامِلِ حُسْنِ السَّابِقَةِ وَحُسْنِ الْخَاتِمَةِ عِنْدَ الْمَوْتِ فِي خَيْرٍ وَلُطْفٍ وَعَافِيَةٍ، وَإِلَى حَضْرَةِ النَّبِيِّ سَيِّدِنَا مُحَمَّدٍ ﷺ",
                translit:
                  "Al-Fātiḥah bibarakati hādhihil-ḥaḍratish-sharīfati wa hā’ulā’is-sādatil-anjāb, annallāha yuṣliḥul-imāma wal-ummah, war-rā‛iya war-ra‛iyyah, wa yufarrija ‛alal-muslimīn, wa yarḥamuhum biraḥmatin hanī’atin marī’atin nāfi‛ah, wa yaṭraḥu fīhal-khayra wal-barakah, wa yu‛ajjilu bihā, wa yuṣliḥus-sādatal-‛Alawiyyah, wa yaghfiru dhunūbanā, wa yasturu ‛uyūbanā, wa yusahhilu maṭlūbanā, wa yuḥassinu akhlāqanā, wa yuwassi‛u minal-ḥalāli arzāqanā, wa yakfīnā sharral-adhiyyāti wal-baliyyāt, wa yuṭfi’u nāral-fitani wal-miḥan, mā ẓahara minhā wa mā baṭan, wa yuṭīlu a‛māranā fī ṭā‛atihī wa maḥabbatihī wa riḍāh, wa yamunnu ‛alaynā bikamāli maḥabbatihī wa maḥabbati nabiyyihī sayyidinā Muḥammadin ṣallallāhu ‛alayhi wa sallam, wattibā‛i sharī‛atihī wal-ihtidā’i wal-iqtidā’i bihī wa bisalafinaṣ-ṣāliḥīn, wa annallāha yu‛ṭī kulla sā’ilin minnā wa minkum su’lahū wa ma’mūlah, ‛alā mā yurḍillāha wa rasūlah, wa yahabu lanā kulla khayr, wa yu‛āmilunā mu‛āmalata ahlil-khayr, wa ya‛ummu barakata hādhihil-ḥaḍrati ‛alal-muslimīna ajma‛īn, wa yataqabbaluhū minnā wa yaqbalunā ‛alā mā fīnā, wa yamunnu ‛alal-jamī‛i bikāmili ḥusnis-sābiqati wa ḥusnil-khātimati ‛indal-mawti fī khayrin wa luṭfin wa ‛āfiyah, wa ilā ḥaḍratin-nabiyyi sayyidinā Muḥammadin ṣallallāhu ‛alayhi wa sallam",
                translation:
                  "Al-Fatihah, by the blessing of this noble Hadrah and these noble masters; that Allah set right the leader and the community, the shepherd and the flock; relieve the Muslims; have mercy on them with a pleasant, wholesome and beneficial mercy, and cast into it goodness and blessing and hasten it; set right the Alawi masters; forgive our sins, conceal our faults, ease our needs, beautify our character, expand our lawful provision, protect us from the evil of harms and afflictions, and extinguish the fire of trials and tribulations, whether outward or inward; lengthen our lives in obedience to Him, love of Him and His good pleasure; grant us the perfection of love for Him and love for His Prophet, our master Muhammad, may Allah bless him and grant him peace, and the following of his law and being guided by him and by our righteous predecessors; that Allah give every one of us and of you who asks what he asks and hopes for, in what pleases Allah and His Messenger; bestow on us every good and treat us as the people of goodness are treated; spread the blessing of this Hadrah over all Muslims; accept it from us and accept us as we are; and grant everyone the perfection of a good beginning and a good ending at death, in goodness, gentleness and well-being. And to the presence of the Prophet, our master Muhammad, may Allah bless him and grant him peace.",
              }),
            ],
          }),
        ],
      }),
    ],
  }),
];
