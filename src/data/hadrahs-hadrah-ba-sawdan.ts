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
            repeat: 3,
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "لَا إِلَهَ إِلَّا اللَّه",
                translit: "Lā ilāha illallāh",
                translation: "There is no god but Allah",
              }),
              new QasidaEntryModel({
                arabic: "لَا مَعْبُودَ إِلَّا اللَّه",
                translit: "Lā ma‛būda illallāh",
                translation: "There is none worshipped but Allah",
              }),
            ],
          }),
          new QasidaVerseModel({
            repeat: 3,
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "لَا إِلَهَ إِلَّا اللَّه",
                translit: "Lā ilāha illallāh",
                translation: "There is no god but Allah",
              }),
              new QasidaEntryModel({
                arabic: "لَا مَقْصُودَ إِلَّا اللَّه",
                translit: "Lā maqṣūda illallāh",
                translation: "There is none sought but Allah",
              }),
            ],
          }),
          new QasidaVerseModel({
            repeat: 3,
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "لَا إِلَهَ إِلَّا اللَّه",
                translit: "Lā ilāha illallāh",
                translation: "There is no god but Allah",
              }),
              new QasidaEntryModel({
                arabic: "لَا مَوْجُودَ إِلَّا اللَّه",
                translit: "Lā mawjūda illallāh",
                translation: "There is none truly existent but Allah",
              }),
            ],
          }),
          new QasidaVerseModel({
            repeat: 3,
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "لَا إِلَهَ إِلَّا اللَّه",
                translit: "Lā ilāha illallāh",
                translation: "There is no god but Allah",
              }),
              new QasidaEntryModel({
                arabic: "لَا مَشْهُودَ إِلَّا اللَّه",
                translit: "Lā mashhūda illallāh",
                translation: "There is none witnessed but Allah",
              }),
            ],
          }),
          new QasidaVerseModel({
            repeat: 3,
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic:
                  "اللَّهُمَّ يَا كَافِيَ الْبَلَاء اِكْفِنَا الْبَلَاء قَبْلَ نُزُولِهِ مِنَ السَّمَاء يَا اللَّه يَا اللَّه يَا اللَّه يَا اللَّه يَا اللَّه يَا اللَّه يَا اللَّه",
                translit:
                  "Allāhumma yā kāfiyal-balā’, ikfinal-balā’a qabla nuzūlihī minas-samā’. Yā Allāh, yā Allāh, yā Allāh, yā Allāh, yā Allāh, yā Allāh, yā Allāh",
                translation:
                  "O Allah, O Sufficer against affliction, suffice us against affliction before it descends from the sky. O Allah, O Allah, O Allah, O Allah, O Allah, O Allah, O Allah",
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
                translit: "Yā laṭīfan lam yazal",
                translation: "O Subtle One, who has never ceased to be,",
              }),
              new QasidaEntryModel({
                arabic: "اُلْطُفْ بِنَا فِيمَا نَزَلْ",
                translit: "Ulṭuf binā fīmā nazal",
                translation: "be gentle with us in what has befallen us,",
              }),
              new QasidaEntryModel({
                arabic: "إِنَّكْ لَطِيفٌ لَمْ تَزَلْ",
                translit: "Innak laṭīfun lam tazal",
                translation:
                  "for You are the Subtle One, who has never ceased to be;",
              }),
              new QasidaEntryModel({
                arabic: "اُلْطُفْ بِنَا وَالْمُسْلِمِين",
                translit: "Ulṭuf binā walmuslimīn",
                translation: "be gentle with us and with the Muslims.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِسْمِ إِلَهٍ قَادِرِ",
                translit: "Bismi ilāhin qādir",
                translation: "In the name of a God who is All-Powerful,",
              }),
              new QasidaEntryModel({
                arabic: "مُقْتَدِرٍ وَقَاهِرِ",
                translit: "Muqtadirin waqāhir",
                translation: "Almighty and Overpowering,",
              }),
              new QasidaEntryModel({
                arabic: "لِكُلِّ غَاوٍ غَادِرِ",
                translit: "Likulli ghāwin ghādir",
                translation: "against every misguided, treacherous one,",
              }),
              new QasidaEntryModel({
                arabic: "مِنَ الْعُتَاةِ الظَّالِمِين",
                translit: "Minal ‛utātiẓ ẓālimīn",
                translation: "from among the tyrants and wrongdoers,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وكُلِّ بَاغٍ مَارِدِ",
                translit: "Wakulli bāghin mārid",
                translation: "and every rebellious, defiant aggressor,",
              }),
              new QasidaEntryModel({
                arabic: "وَفَاجِرٍ مُعَانِدِ",
                translit: "Wafājirin mu‛ānid",
                translation: "and every wicked, obstinate one,",
              }),
              new QasidaEntryModel({
                arabic: "وَكُلِّ طَاغٍ حَاسِدِ",
                translit: "Wakulli ṭāghin ḥāsid",
                translation: "and every tyrant, every envier,",
              }),
              new QasidaEntryModel({
                arabic: "مِنَ الْبُغَاةِ الْمُفْسِدِين",
                translit: "Minal bughātil mufsidīn",
                translation: "from among the transgressors and the corrupters.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِهِ بِهِ نَسْتَنْصِرُ",
                translit: "Bihi bihi nastanṣir",
                translation: "By Him, by Him we seek victory,",
              }),
              new QasidaEntryModel({
                arabic: "بِهِ بِهِ نَقْتَدِرُ",
                translit: "Bihi bihi naqtadir",
                translation: "by Him, by Him we gain strength,",
              }),
              new QasidaEntryModel({
                arabic: "بِسَيْفِ بَطْشِهْ نَقْهَرُ",
                translit: "Bisayfi baṭshih naqhar",
                translation: "with the sword of His might we overcome",
              }),
              new QasidaEntryModel({
                arabic: "أَعْدَاءَنَا الْمُعَانِدِين",
                translit: "A‛dā’anal mu‛ānidīn",
                translation: "our enemies, the obstinate ones.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَالْحَمْدُ دَأبًا سَرْمَدَا",
                translit: "Walḥamdu da’ban sarmadā",
                translation: "Praise is due always and everlastingly,",
              }),
              new QasidaEntryModel({
                arabic: "وَدَائِمًا مُؤَبَّدَا",
                translit: "Wadā’iman mu’abbadā",
                translation: "perpetually and eternally,",
              }),
              new QasidaEntryModel({
                arabic: "وَلَيْسَ يُحْصَى عَدَدَا",
                translit: "Walaysa yuḥṣā ‛adadā",
                translation: "beyond any counting in number,",
              }),
              new QasidaEntryModel({
                arabic: "لِلَّهِ رَبِّ الْعَالَمِين",
                translit: "Lillāhi rabbil ‛ālamīn",
                translation: "to Allah, Lord of the worlds.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "سُبْحَانَ مَنْ عَزَّ وَجَلّ",
                translit: "Subḥāna man ‛azza wajall",
                translation: "Glory be to Him who is Mighty and Majestic,",
              }),
              new QasidaEntryModel({
                arabic: "بَرَى الْأَمَانَ وَالْوَجَلْ",
                translit: "Barāl amāna walwajal",
                translation: "who created security and fear,",
              }),
              new QasidaEntryModel({
                arabic: "قَضَى لِكُلٍّ بِالْأَجَلْ",
                translit: "Qaḍā likullin bil’ajal",
                translation: "who decreed for each one an appointed term,",
              }),
              new QasidaEntryModel({
                arabic: "مِنْ سَائِرِ الْخَلْق اجْمَعِين",
                translit: "Min sā’iril khalq ajma‛īn",
                translation: "among all of creation, altogether.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "نَسْأَلُك رَفْعَ الْأَذَى",
                translit: "Nas’aluk raf‛al adhā",
                translation: "We ask You to remove harm,",
              }),
              new QasidaEntryModel({
                arabic: "وَالْبَلَايَا وَالْوَبَا",
                translit: "Walbalāyā walwabā",
                translation: "and afflictions, and plague,",
              }),
              new QasidaEntryModel({
                arabic: "وَشَرِّ كُلِّ مُبْتَلَى",
                translit: "Washarri kulli mubtalā",
                translation: "and the evil of every afflicted one,",
              }),
              new QasidaEntryModel({
                arabic: "وَكَيْدِ كُلِّ الظَّالِمِين",
                translit: "Wakaydi kulliẓ ẓālimīn",
                translation: "and the scheming of all the wrongdoers,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِسِرِّ طَهَ الْمُجْتَبَى",
                translit: "Bisirri Ṭāhal Mujtabā",
                translation: "by the secret of Ṭāhā, the Chosen One,",
              }),
              new QasidaEntryModel({
                arabic: "عَلَا عَلَى السَّبْعِ الْعُلَى",
                translit: "‛Alā ‛alas sab‛il ‛ulā",
                translation: "who rose above the seven lofty heavens,",
              }),
              new QasidaEntryModel({
                arabic: "وَالْآلِ أَرْبَابِ الْعَبَا",
                translit: "Wal’āli arbābil ‛abā",
                translation: "and by his family, the people of the cloak,",
              }),
              new QasidaEntryModel({
                arabic: "وَصَحْبِهِ الْمُجَاهِدِين",
                translit: "Waṣaḥbihil mujāhidīn",
                translation: "and his Companions, who strove,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَالتَّابِعِينَ الْأَصْفِيَاء",
                translit: "Wattābi‛īnal aṣfiyā’",
                translation: "and the Followers, the pure chosen ones,",
              }),
              new QasidaEntryModel({
                arabic: "الْعَابِدِينَ الْأَوْلِيَاء",
                translit: "Al-‛ābidīnal awliyā’",
                translation: "the worshippers, the friends of Allah,",
              }),
              new QasidaEntryModel({
                arabic: "الزَّاهِدِينَ الْأَتْقِيَاء",
                translit: "Az-zāhidīnal atqiyā’",
                translation: "the ascetics, the God-fearing,",
              }),
              new QasidaEntryModel({
                arabic: "الْمُصْلِحِينَ الْمُحْسِنِين",
                translit: "Al-muṣliḥīnal muḥsinīn",
                translation: "the reformers, the doers of good,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "مِنْ مَاضِيٍ وَغَابِرِ",
                translit: "Min māḍin wa ghābir",
                translation: "from those past and those long gone,",
              }),
              new QasidaEntryModel({
                arabic: "كَالشَّيْخِ عَبْدِ الْقَادِرِ",
                translit: "Kashshaykhi ‛Abdil Qādir",
                translation: "such as the Shaykh ‛Abd al-Qādir,",
              }),
              new QasidaEntryModel({
                arabic: "مَنْ خُصَّ بِالسَّرَائِرِ",
                translit: "Man khuṣṣa bissarā’ir",
                translation: "who was singled out with inner secrets",
              }),
              new QasidaEntryModel({
                arabic: "بَيْنَ الْعِبَادِ الصَّالِحِين",
                translit: "Baynal ‛ibādiṣ ṣāliḥīn",
                translation: "among the righteous servants.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "ثُمَّ الْفَقِيه جَدُّنَا",
                translit: "Thummal faqīh jaddunā",
                translation: "Then al-Faqīh, our grandfather,",
              }),
              new QasidaEntryModel({
                arabic: "وَبِبَنِيهِ ذُخْرُنَا",
                translit: "Wabibanīhi dhukhrunā",
                translation: "and by his sons, our treasure,",
              }),
              new QasidaEntryModel({
                arabic: "عَلوِيُّنَا عَلِيُّنَا",
                translit: "‛Alawiyyunā ‛aliyyunā",
                translation: "our ‛Alawī and our ‛Alī,",
              }),
              new QasidaEntryModel({
                arabic: "والْقُطْب سَقَّاف مَكِين",
                translit: "Walquṭb Saqqāf makīn",
                translation: "and the Pole, Saqqāf, firmly established,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِابْنِهِ الْمِحْضَارِ",
                translit: "Wabibnihil Miḥḍār",
                translation: "and by his son al-Miḥḍār,",
              }),
              new QasidaEntryModel({
                arabic: "النَّدْبِ ذِي الأَسْرَارِ",
                translit: "An-nadbi dhil asrār",
                translation: "the noble one, master of secrets,",
              }),
              new QasidaEntryModel({
                arabic: "حَامِي الْحِمَى وَالْجَارِ",
                translit: "Ḥāmil ḥimā waljār",
                translation: "protector of the sanctuary and of the neighbour,",
              }),
              new QasidaEntryModel({
                arabic: "الغَوْثِ حَتْفِ الظَّالِمِين",
                translit: "Al-ghawthi ḥatfiẓ ẓālimīn",
                translation: "the Ghawth, the death of the wrongdoers,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "والْعَيْدَرُوس فَخْرُنَا",
                translit: "Wal‛Aydarūs fakhrunā",
                translation: "and al-‛Aydarūs, our pride,",
              }),
              new QasidaEntryModel({
                arabic: "وَشَيْخُنَا حَدَّادُنَا",
                translit: "Washaykhunā ḥaddādunā",
                translation: "and our shaykh, our Ḥaddād,",
              }),
              new QasidaEntryModel({
                arabic: "هُو غَوْثُنَا، هُو كَنْزُنَا",
                translit: "Hū ghawthunā, hū kanzunā",
                translation: "he is our helper, he is our treasure,",
              }),
              new QasidaEntryModel({
                arabic: "وَهُوَ مَلَاذُ اللَّائِذِين",
                translit: "Wahuwa malādhul lā’idhīn",
                translation: "and he is the refuge of those who seek refuge.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَالشَّيْخ أَبُو بَكْر الْهُمَام",
                translit: "Washshaykh Abū Bakril Humām",
                translation: "And the Shaykh Abū Bakr, the high-minded,",
              }),
              new QasidaEntryModel({
                arabic: "بِنْ سَالِم الْعَضْبُ الْحُسَام",
                translit: "Bin Sālimil ‛aḍbul ḥusām",
                translation: "Bin Sālim, the keen-edged sword,",
              }),
              new QasidaEntryModel({
                arabic: "وَبِبَنِيهِ غَوْثِ الْأَنَام",
                translit: "Wabibanīhi ghawthil anām",
                translation: "and by his sons, helper of mankind,",
              }),
              new QasidaEntryModel({
                arabic: "وَالْعَدَنِي حَبْرٌ أَمِين",
                translit: "Wal‛Adanī ḥabrun amīn",
                translation: "and al-‛Adanī, a trustworthy scholar,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِابْنِ زَيْنٍ أَحْمَدِ",
                translit: "Wabibni Zaynin Aḥmad",
                translation: "and by the son of Zayn, Aḥmad,",
              }),
              new QasidaEntryModel({
                arabic: "هُو نُورُ كُلِّ مُهْتَدِي",
                translit: "Hū nūru kulli muhtadī",
                translation: "he is the light of every guided one,",
              }),
              new QasidaEntryModel({
                arabic: "وَجَعْفَرٍ ذِي الرَّشادِ",
                translit: "Waja‛farin dhir rashād",
                translation: "and Ja‛far, possessor of right guidance,",
              }),
              new QasidaEntryModel({
                arabic: "سُلْطَان كُلِّ الْعَارِفِين",
                translit: "Sulṭān kullil ‛ārifīn",
                translation: "sultan of all the knowers of Allah,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِذِي الْيَقِينِ الْعَطَّاس",
                translit: "Bidhil yaqīnil ‛Aṭṭās",
                translation: "by the man of certainty, al-‛Aṭṭās,",
              }),
              new QasidaEntryModel({
                arabic: "أَبِي الْحُسَينِ النِّبْرَاس",
                translit: "Abil Ḥusaynin Nibrās",
                translation: "Abū al-Ḥusayn, the lantern,",
              }),
              new QasidaEntryModel({
                arabic: "وَبِالْخَلِيفَة بَارَاس",
                translit: "Wabilkhalīfat Bārās",
                translation: "and by the successor, Bārās,",
              }),
              new QasidaEntryModel({
                arabic: "وأهْل (دَوعَن) أجْمَعِين",
                translit: "Wa’ahli (Daw‛an) ajma‛īn",
                translation: "and all the people of Daw‛an.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِالشُّجَاعِ عُمْدَتِي",
                translit: "Wabishshujā‛i ‛umdatī",
                translation: "And by the Brave One, my mainstay,",
              }),
              new QasidaEntryModel({
                arabic: "غَوْثِي غِيَاثِي عُدَّتِي",
                translit: "Ghawthī ghiyāthī ‛uddatī",
                translation: "my helper, my relief, my provision,",
              }),
              new QasidaEntryModel({
                arabic: "وَمُنْقِذِي مِنْ شِدَّتِي",
                translit: "Wamunqidhī min shiddatī",
                translation: "and my rescuer from my hardship,",
              }),
              new QasidaEntryModel({
                arabic: "الْبَار كَهْفُ الْقَاصِدِين",
                translit: "Al-Bār kahful qāṣidīn",
                translation: "al-Bār, the shelter of those who seek him.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِالْوَجِيهِ وَالْجَمَال",
                translit: "Wabilwajīhi waljamāl",
                translation: "And by al-Wajīh and al-Jamāl,",
              }),
              new QasidaEntryModel({
                arabic: "وَبِالصَّفِيِّ وَالْكَمَال",
                translit: "Wabiṣṣafiyyi walkamāl",
                translation: "and by aṣ-Ṣafī and al-Kamāl,",
              }),
              new QasidaEntryModel({
                arabic: "وَمَنْ لَهُمْ بِهِ اتِّصَال",
                translit: "Waman lahum bihittiṣāl",
                translation: "and those of them who are connected with him,",
              }),
              new QasidaEntryModel({
                arabic: "مِنْ أَهْلِ حَضْرَتِه اجْمَعِين",
                translit: "Min ahli ḥaḍratih ajma‛īn",
                translation: "from all the people of his presence.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِشَيْخِنَا الْحُلَاحِلِ",
                translit: "Bishaykhinal ḥulāḥil",
                translation: "By our Shaykh, the noble chieftain,",
              }),
              new QasidaEntryModel({
                arabic: "مَنْ حَلَّ فِي (جَلَاجِلِ)",
                translit: "Man ḥalla fī (Jalājil)",
                translation: "who settled in Jalājil,",
              }),
              new QasidaEntryModel({
                arabic: "عُمَر غِيَاثِ الْآمِلِ",
                translit: "‛Umar ghiyāthil āmil",
                translation: "‛Umar, the succour of the hopeful,",
              }),
              new QasidaEntryModel({
                arabic: "الْبَار قُطْبُ الْكَامِلِين",
                translit: "Al-Bār quṭbul kāmilīn",
                translation: "al-Bār, pole of the perfected,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "والْعَيْدَرُوسِ الذَّاكِرِ",
                translit: "Wal‛Aydarūsidh dhākir",
                translation: "and al-‛Aydarūs, the one who remembers,",
              }),
              new QasidaEntryModel({
                arabic: "فِي كُلِّ حَالٍ شَاكِرِ",
                translit: "Fī kulli ḥālin shākir",
                translation: "grateful in every state,",
              }),
              new QasidaEntryModel({
                arabic: "وَمُسْتَقِيمٍ صَابِرِ",
                translit: "Wamustaqīmin ṣābir",
                translation: "upright and patient,",
              }),
              new QasidaEntryModel({
                arabic: "حَاوِي خِصَالِ الْمُهْتَدِين",
                translit: "Ḥāwī khiṣālil muhtadīn",
                translation: "who gathers the qualities of the guided.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَابْنِ سُمَيْطِ الْمُشْتَهَرْ",
                translit: "Wabni Sumayṭil mushtahar",
                translation: "And the son of Sumayṭ, the renowned,",
              }),
              new QasidaEntryModel({
                arabic: "الْقُطْب سَيِّدنَا عُمَرْ",
                translit: "Al-Quṭb sayyidnā ‛Umar",
                translation: "the Pole, our master ‛Umar,",
              }),
              new QasidaEntryModel({
                arabic: "ثُمَّ الصَّفِي بَحْرِ الدُّرَرْ",
                translit: "Thummaṣ Ṣafī baḥrid durar",
                translation: "then aṣ-Ṣafī, ocean of pearls,",
              }),
              new QasidaEntryModel({
                arabic: "قُطْبِ الدُّعَاةِ النَّاصِحِين",
                translit: "Quṭbid du‛ātin nāṣiḥīn",
                translation: "pole of the callers, the sincere advisers,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِسِرِّ حَامِدْ بِنْ عُمَرْ",
                translit: "Bisirri Ḥāmid bin ‛Umar",
                translation: "by the secret of Ḥāmid bin ‛Umar,",
              }),
              new QasidaEntryModel({
                arabic: "وَابْنِ الْحَسَنْ ذَاكَ الْأَبَرّ",
                translit: "Wabnil Ḥasan dhākal abarr",
                translation:
                  "and the son of al-Ḥasan, that most righteous one,",
              }),
              new QasidaEntryModel({
                arabic: "وَمَنْ إِذَا يُدْعَى حَضَرْ",
                translit: "Waman idhā yud‛ā ḥaḍar",
                translation: "and he who, when called, is present,",
              }),
              new QasidaEntryModel({
                arabic: "لِمَنْ يُنَادِيه يُعِين",
                translit: "Liman yunādīh yu‛īn",
                translation: "and helps whoever calls upon him.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِالْوَلِي بَاجَلْحَبَان",
                translit: "Wabilwalī Bājalḥabān",
                translation: "And by the friend of Allah, Bājalḥabān,",
              }),
              new QasidaEntryModel({
                arabic: "نُورُهْ لِأَهْلِ اللَّه بَانْ",
                translit: "Nūruh li’ahlillāh bān",
                translation: "whose light is clear to the people of Allah,",
              }),
              new QasidaEntryModel({
                arabic: "أَصْلِحْ بِجَاهِهْ كُلَّ شَان",
                translit: "Aṣliḥ bijāhih kulla shān",
                translation: "set right, by his standing, every affair,",
              }),
              new QasidaEntryModel({
                arabic: "وَهَبْ لَنَا حُسْنَ الْيَقِين",
                translit: "Wahab lanā ḥusnal yaqīn",
                translation: "and grant us excellence of certainty.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِمَنْ بِهَذَا الْعَرْضِ حَلْ",
                translit: "Biman bihādhal ‛arḍi ḥal",
                translation: "By him who settled in this place,",
              }),
              new QasidaEntryModel({
                arabic: "الشَّيْخِ سَيِّدِنَا الْأَجَلْ",
                translit: "Ash-shaykhi sayyidinal ajal",
                translation: "the Shaykh, our master, the most venerable,",
              }),
              new QasidaEntryModel({
                arabic: "يَسِّرْ لَنَا كُلَّ الْأَمَلْ",
                translit: "Yassir lanā kullal amal",
                translation: "make easy for us all that we hope for,",
              }),
              new QasidaEntryModel({
                arabic: "وَالْطُفْ بِنَا وَالْمُسْلِمِين",
                translit: "Walṭuf binā walmuslimīn",
                translation: "and be gentle with us and with the Muslims.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِسِرِّ شَيْخِ الْجُفْرِي",
                translit: "Bisirri shaykhil Jufrī",
                translation: "By the secret of the Shaykh al-Jufrī,",
              }),
              new QasidaEntryModel({
                arabic: "عَجِّلْ لَنَا بِالْيُسْرِ",
                translit: "‛Ajjil lanā bilyusr",
                translation: "hasten for us ease,",
              }),
              new QasidaEntryModel({
                arabic: "وَالْفَتْحِ ثُمَّ النَّصْرِ",
                translit: "Walfatḥi thummannaṣr",
                translation: "and success, then victory,",
              }),
              new QasidaEntryModel({
                arabic: "آمِين رَبَّ الْعَالَمِين",
                translit: "Āmīn rabbal ‛ālamīn",
                translation: "Āmīn, Lord of the worlds.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَعِتْرَةِ الْبَارِ الْكِرَام",
                translit: "Wa‛itratil Bāril kirām",
                translation: "And the family of al-Bār, the noble,",
              }),
              new QasidaEntryModel({
                arabic: "وَخُصَّ سَيَّدَنا الْإِمَام",
                translit: "Wakhuṣṣa sayyidanal imām",
                translation: "and favour especially our master the Imām,",
              }),
              new QasidaEntryModel({
                arabic: "عَبْدَ اللَّهِ الْعَالِي الْمَقَام",
                translit: "‛Abdallāhil ‛ālil maqām",
                translation: "‛Abdullāh, of lofty station,",
              }),
              new QasidaEntryModel({
                arabic: "واأهلِ الْمُخَرَّج أَجْمَعِين",
                translit: "Wa’ahlil Mukharraj ajma‛īn",
                translation: "and all the people of al-Mukharraj,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَكُلِّ مَنْ فِي قُطْرِنَا",
                translit: "Wakulli man fī quṭrinā",
                translation: "and everyone in our land,",
              }),
              new QasidaEntryModel({
                arabic: "مِنْ كُلِّ بَرٍّ مُحْسِنَا",
                translit: "Min kulli barrin muḥsinā",
                translation: "from every righteous doer of good,",
              }),
              new QasidaEntryModel({
                arabic: "وَسَائِر اَسْلَافٍ لَنَا",
                translit: "Wasā’ir aslāfin lanā",
                translation: "and all our forebears,",
              }),
              new QasidaEntryModel({
                arabic: "نَسْلِ الْحَسَنْ مَعَ الْحُسَيْن",
                translit: "Naslil Ḥasan ma‛al Ḥusayn",
                translation: "the descendants of al-Ḥasan and al-Ḥusayn,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِالْعَمُودِيِّ الْإِمَام",
                translit: "Wabil‛amūdiyyil imām",
                translation: "and by al-‛Amūdī, the Imām,",
              }),
              new QasidaEntryModel({
                arabic: "وَاولَادِهِ الْغُرِّ الْكِرَام",
                translit: "Wawlādihil ghurril kirām",
                translation: "and his children, the illustrious and noble,",
              }),
              new QasidaEntryModel({
                arabic: "مِمَّنْ حَوَى ذَاكَ الْمَقَام",
                translit: "Mimman ḥawā dhākal maqām",
                translation: "of those who attained that station,",
              }),
              new QasidaEntryModel({
                arabic: "مِنْ كُلِّ قَيْدُومٍ مَكِين",
                translit: "Min kulli qaydūmin makīn",
                translation: "every leader, firmly established.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "ذِي حَضْرَةُ الْقَومِ اللُّيُوث",
                translit: "Dhī ḥaḍratul qawmil luyūth",
                translation: "This is the gathering of the people, the lions,",
              }),
              new QasidaEntryModel({
                arabic: "وَوَعْدُهَا يَومَ الثَّلُوث",
                translit: "Wawa‛duhā yawmath thalūth",
                translation: "and its appointed day is Tuesday,",
              }),
              new QasidaEntryModel({
                arabic: "بِهَا انْتَفَتْ عَنَّا الْمُغُوث",
                translit: "Bihā ntafat ‛annal mughūth",
                translation: "through it distress has been lifted from us,",
              }),
              new QasidaEntryModel({
                arabic: "مِنْ حِين نَأْتِي قَاصِدِين",
                translit: "Min ḥīn na’tī qāṣidīn",
                translation: "from the moment we come with intent.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "الشَّيْخِ ذِي حَازَ الْعُلَا",
                translit: "Ash-shaykhi dhī ḥāzal ‛ulā",
                translation: "The Shaykh who has attained the heights,",
              }),
              new QasidaEntryModel({
                arabic: "وَارْتَاح فِيهَا وَاعْتَلَا",
                translit: "Wartāḥ fīhā wa‛talā",
                translation: "and found rest in it and was exalted,",
              }),
              new QasidaEntryModel({
                arabic: "مَرْسُومُهُ بَيْنَ الْمَلَا",
                translit: "Marsūmuhu baynal malā",
                translation: "his decree stands among the assembly,",
              }),
              new QasidaEntryModel({
                arabic: "فِي الْوَقْت شَيْخُ الْعَارِفِين",
                translit: "Fil waqt shaykhul ‛ārifīn",
                translation: "in his time, the Shaykh of the knowers of Allah.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "الشَّافِعِيّ مَذْهَبًا",
                translit: "Ash-Shāfi‛iyy madhhabā",
                translation: "A Shāfi‛ī in his school of law,",
              }),
              new QasidaEntryModel({
                arabic: "وَالْعَلَوِيّ مَشْرَبًا",
                translit: "Wal‛Alawiyy mashrabā",
                translation: "and an ‛Alawī in his spiritual path,",
              }),
              new QasidaEntryModel({
                arabic: "وَهوَ الَّذِي يُدْعَى بِـ(بَا",
                translit: "Wahuwal ladhī yud‛ā bi(Bā",
                translation: "and he is the one called Bā",
              }),
              new QasidaEntryModel({
                arabic: "سَوْدَان) بَيْنَ الْعَالَمِين",
                translit: "Sawdān) baynal ‛ālamīn",
                translation: "Sawdān among all the peoples.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "عَيْنُ الْعِنَايَة ذُو الْفِطَنْ",
                translit: "‛Aynul ‛ināyat dhul fiṭan",
                translation: "The eye of providence, possessor of discernment,",
              }),
              new QasidaEntryModel({
                arabic: "سَاقِي كُؤُوسَاتِ الْمِنَنْ",
                translit: "Sāqī ku’ūsātil minan",
                translation: "who serves the cups of bounties,",
              }),
              new QasidaEntryModel({
                arabic: "أَحْيَا الطَّرِيقَة وَالسُّنَنْ",
                translit: "Aḥyāṭ ṭarīqat wassunan",
                translation: "who revived the Way and the Sunnah,",
              }),
              new QasidaEntryModel({
                arabic: "فَاتِحْ رِتَاجِ الطَّالِبِين",
                translit: "Fātiḥ ritājiṭ ṭālibīn",
                translation: "opener of the great door for the seekers.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "شَيْخُ الشُّيُوخِ الْجَامِعِ",
                translit: "Shaykhush shuyūkhil jāmi‛",
                translation: "The Shaykh of shaykhs, the all-comprehending,",
              }),
              new QasidaEntryModel({
                arabic: "ذِي حَلَّ قُرْبَ الْجَامِعِ",
                translit: "Dhī ḥalla qurbal jāmi‛",
                translation: "who settled near the mosque,",
              }),
              new QasidaEntryModel({
                arabic: "سَالَكْ بِهِ يَا سَامِعِ",
                translit: "Sālak bihi yā Sāmi‛",
                translation: "I ask You by him, O Hearer,",
              }),
              new QasidaEntryModel({
                arabic: "اُلْطُفْ بِنَا وَالْمُسْلِمِين",
                translit: "Ulṭuf binā walmuslimīn",
                translation: "be gentle with us and with the Muslims.",
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
                translit: "(Allāh Allāh Allāh Allāh ḥasbunā",
                translation: "(Allah, Allah, Allah, Allah is enough for us,",
              }),
              new QasidaEntryModel({
                arabic: "رَبَّنَا عَجِّلْ لَنَا مَطْلُوبَنَا)",
                translit: "Rabbanā ‛ajjil lanā maṭlūbanā)",
                translation: "our Lord, hasten for us what we seek.)",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "رَبَّنا بِالْمُصْطَفَى اصْلِحْ أَمْرَنَا",
                translit: "Rabbanā bilmuṣṭafā ṣliḥ amranā",
                translation:
                  "Our Lord, by the Chosen One, set right our affairs,",
              }),
              new QasidaEntryModel({
                arabic: "وَبِحَقِّ الْمُرْتَضَى اكْشِفْ كَرْبَنَا",
                translit: "Wabiḥaqqil Murtaḍā kshif karbanā",
                translation:
                  "and by the right of al-Murtaḍā, remove our distress,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِأَسْرَارِ الْبَتُولِ الْطُفْ بِنَا",
                translit: "Wabi’asrāril Batūli lṭuf binā",
                translation:
                  "and by the secrets of al-Batūl, be gentle with us,",
              }),
              new QasidaEntryModel({
                arabic: "وَبِحَقِّ الْحَسَنَيْنِ كُنْ لَنَا",
                translit: "Wabiḥaqqil Ḥasanayni kun lanā",
                translation: "and by the right of the two Ḥasans, be with us,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِزَيْنِ الْعَابِدِينَ اغْفِرْ لَنَا",
                translit: "Wabizaynil ‛ābidīna ghfir lanā",
                translation: "and by Zayn al-‛Ābidīn, forgive us,",
              }),
              new QasidaEntryModel({
                arabic: "وَبِحَقِّ الْبَاقِرِ اتْمِمْ نُورَنَا",
                translit: "Wabiḥaqqil Bāqiri tmim nūranā",
                translation: "and by the right of al-Bāqir, perfect our light,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِصِدْقِ الصَّادِقِ اجْمَعْ شَمْلَنَا",
                translit: "Wabiṣidqiṣ Ṣādiqi jma‛ shamlanā",
                translation:
                  "and by the truthfulness of aṣ-Ṣādiq, bring us together,",
              }),
              new QasidaEntryModel({
                arabic: "وَبِحَقِّ الْكَاظِمِ ارْفَعْ قَدْرَنَا",
                translit: "Wabiḥaqqil Kāẓimi rfa‛ qadranā",
                translation:
                  "and by the right of al-Kāẓim, raise our standing,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِأَنْوَارِ الْعُرَيْضِي اهْدِنَا",
                translit: "Wabi’anwāril ‛Uraydiyyi hdinā",
                translation: "and by the lights of al-‛Uraydī, guide us,",
              }),
              new QasidaEntryModel({
                arabic: "وَبِمَعْرُوفِ الْجَمَال جَمِّلْ لَنَا",
                translit: "Wabima‛rūfil Jamāl jammil lanā",
                translation:
                  "and by the kindness of al-Jamāl, grant us beauty,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِحَقِّ الْبَرِّ عِيسَى فَاشْفِنَا",
                translit: "Wabiḥaqqil Barri ‛Īsā fashfinā",
                translation: "and by the right of the righteous ‛Īsā, heal us,",
              }),
              new QasidaEntryModel({
                arabic: "وَابْنِهِ أَحْمَد سَهِّلْ صَعْبَنَا",
                translit: "Wabnihi Aḥmad sahhil ṣa‛banā",
                translation: "and his son Aḥmad, ease our difficulty,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِأَوْصَافِ عُبَيْدٍ نَجِّنَا",
                translit: "Wabi’awṣāfi ‛Ubaydin najjinā",
                translation: "and by the qualities of ‛Ubayd, save us,",
              }),
              new QasidaEntryModel({
                arabic: "وَبِعَلوِيٍّ فَكَمِّلْ سَعْدَنا",
                translit: "Wabi‛Alawiyyin fakammil sa‛danā",
                translation: "and by ‛Alawī, complete our good fortune,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِأَلْطَافِ الْجَمَالِ اسْمَعْ لَنَا",
                translit: "Wabi’alṭāfil Jamāli sma‛ lanā",
                translation: "and by the kindnesses of al-Jamāl, hear us,",
              }),
              new QasidaEntryModel({
                arabic: "وبِعَلوِيْ وَعَلِيٍّ ذُخْرِنَا",
                translit: "Wabi‛Alawī wa‛Aliyyin dhukhrinā",
                translation: "and by ‛Alawī and ‛Alī, our treasure,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وبِمَنْ شَرَّفَ (مِرْبَاطًا) كَذَا",
                translit: "Wabiman sharrafa (Mirbāṭan) kadhā",
                translation: "and by him who honoured Mirbāṭ, and likewise",
              }),
              new QasidaEntryModel({
                arabic: "عَلَوِيٌّ وَعَلِيٌّ أَصْلُنَا",
                translit: "‛Alawiyyun wa‛Aliyyun aṣlunā",
                translation: "‛Alawī and ‛Alī, our origin,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِآيَاتِ الْفَقِيهِ الْغَوْث يَا",
                translit: "Wabi’āyātil Faqīhil Ghawth yā",
                translation: "and by the signs of al-Faqīh, the Ghawth, O",
              }),
              new QasidaEntryModel({
                arabic: "غَوْثَنَا هَيَّا لَنَا هَيَّا لَنَا",
                translit: "Ghawthanā hayyā lanā hayyā lanā",
                translation: "our Helper, hasten to us, hasten to us!",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِبَنِيهِ عَلَوِيٍّ وَعَلِي",
                translit: "Wabibanīhi ‛Alawiyyin wa‛Alī",
                translation: "and by his sons ‛Alawī and ‛Alī,",
              }),
              new QasidaEntryModel({
                arabic: "وَشِهَابِ الدِّين بِالْكُلِّ احْمِنَا",
                translit: "Washihābid dīni bilkulli ḥminā",
                translation: "and Shihāb ad-Dīn, by all of them protect us,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِعَبْدِ اللَّه يَا بَا عَلَوِي",
                translit: "Wabi‛Abdillāh yā Bā ‛Alawī",
                translation: "and by ‛Abdullāh, O Bā ‛Alawī,",
              }),
              new QasidaEntryModel({
                arabic: "وعَلِيٍّ صِنْوِه الْغَوْثِ اكْفِنَا",
                translit: "Wa‛Aliyyin ṣinwihil ghawthi kfinā",
                translation: "and ‛Alī, his brother, the Ghawth, suffice us,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَجَمَالِ الدِّين وَالشَّيْخِ ابْنِهِ",
                translit: "Wajamāliddīn washshaykhi bnihi",
                translation: "and Jamāl ad-Dīn, and the Shaykh, his son,",
              }),
              new QasidaEntryModel({
                arabic: "غَوْثِنَا السَّقَّاف فِي كُلِّ عَنَا",
                translit: "Ghawthinas Saqqāf fī kulli ‛anā",
                translation: "our helper as-Saqqāf, in all hardship,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَابْنِهِ السَّكْرَان وَالْمِحْضَار وَالْـ",
                translit: "Wabnihis Sakrān walMiḥḍāri wal",
                translation: "and his son as-Sakrān, and al-Miḥḍār, and the",
              }),
              new QasidaEntryModel({
                arabic: "إِخْوَةِ الْبَاقِين عَجِّلْ نَصْرَنَا",
                translit: "Ikhwatil bāqīn ‛ajjil naṣranā",
                translation: "remaining brothers; hasten our victory,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِحَقِّ الْعَيْدَرُوسِ القُطْبِ، وَالْـ",
                translit: "Wabiḥaqqil ‛Aydarūsil quṭbi, wal",
                translation:
                  "and by the right of al-‛Aydarūs, the Pole, and the",
              }),
              new QasidaEntryModel({
                arabic: "ـفَخْرِ نِعْمَ الْغَوْث فَادْفَعْ شَرَّنَا",
                translit: "Fakhri ni‛mal ghawth fadfa‛ sharranā",
                translation:
                  "Fakhr, how excellent a helper; ward off our evil,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِشَيْخَيْنَا عَلِيٍّ وَابْنِهِ",
                translit: "Wabishaykhaynā ‛Aliyyin wabnihi",
                translation: "and by our two shaykhs, ‛Alī and his son,",
              }),
              new QasidaEntryModel({
                arabic: "وَشِهَابِ الدِّين تَمِّمْ قَصْدَنَا",
                translit: "Washihābid dīni tammim qaṣdanā",
                translation: "and Shihāb ad-Dīn, fulfil our aim,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِسِرِّ الْفَخْرِ وَالْغَوْثِ الَّذِي",
                translit: "Wabisirril fakhri walghawthil ladhī",
                translation: "and by the secret of al-Fakhr and the Ghawth who",
              }),
              new QasidaEntryModel({
                arabic: "حَلَّ فِي (عِينَات) فَاهْزِمْ خَصْمَنَا",
                translit: "Ḥalla fī (‛Īnāt) fahzim khaṣmanā",
                translation: "settled in ‛Īnāt, so defeat our adversary,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَابْنِهِ الْحَامِدِ وَالْمِحْضَار ثُمَّ",
                translit: "Wabnihil Ḥāmidi walMiḥḍār thumma",
                translation: "and his son al-Ḥāmid, and al-Miḥḍār, then",
              }),
              new QasidaEntryModel({
                arabic: "الْحُسَيْنِ اهْلِكْ عِدَانَا وَابْقِنَا",
                translit: "Al-Ḥusayni hlik ‛idānā wabqinā",
                translation: "al-Ḥusayn; destroy our enemies and preserve us,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَالْفَقِيهِ الْحَبْرِ وَالشَّيْخِ الَّذِي",
                translit: "Walfaqīhil ḥabri washshaykhil ladhī",
                translation:
                  "and the Faqīh, the learned scholar, and the Shaykh who",
              }),
              new QasidaEntryModel({
                arabic: "حَلَّ فِي (مَكَّةَ) سَهِّلْ صَعْبَنَا",
                translit: "Ḥalla fī (Makkata) sahhil ṣa‛banā",
                translation: "settled in Makkah, ease our difficulty,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَجَمَالِ الدِّين جَدِّي وَابْنِهِ الْـ",
                translit: "Wajamāliddīn jaddī wabnihil",
                translation: "and Jamāl ad-Dīn, my grandfather, and his son",
              }),
              new QasidaEntryModel({
                arabic: "ـعَيْدَرُوسِ الْحَبْر فَانْصُرْ جُنْدَنَا",
                translit: "‛Aydarūsil ḥabr fanṣur jundanā",
                translation:
                  "al-‛Aydarūs, the scholar; grant victory to our troops,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِشَيْخِي وَإِمَامِي وَالِدِي",
                translit: "Wabishaykhī wa’imāmī wālidī",
                translation: "and by my shaykh, my imām, my father,",
              }),
              new QasidaEntryModel({
                arabic: "قُدْوَةِ الدِّينِ وَمِصْبَاحِ الدُّنَا",
                translit: "Qudwatid dīni wamiṣbāḥid dunā",
                translation: "exemplar of the faith and lamp of the world,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "رَبَّنَا فَانْفَعْ بِهِمْ يَا رَبَّنَا",
                translit: "Rabbanā fanfa‛ bihim yā rabbanā",
                translation: "our Lord, benefit us through them, O our Lord,",
              }),
              new QasidaEntryModel({
                arabic: "وَاكْفِنَا كُلَّ مُهِمٍّ وَعَنَا",
                translit: "Wakfinā kulla muhimmin wa‛anā",
                translation: "and spare us every pressing matter and hardship,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "رَبَّنَا عَجِّلْ بِهِمْ مَطْلُوبَنَا",
                translit: "Rabbanā ‛ajjil bihim maṭlūbanā",
                translation: "our Lord, through them hasten what we seek,",
              }),
              new QasidaEntryModel({
                arabic: "وَاكْشِفِ الْحَالَ الَّذِي حَلَّ بِنَا",
                translit: "Wakshifil ḥālal ladhī ḥalla binā",
                translation: "and remove the state that has befallen us.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "سَادَتِي إِنِّي بِكُمْ جَارٌ لَكُمْ",
                translit: "Sādatī innī bikum jārun lakum",
                translation: "My masters, I am your neighbour, in your care,",
              }),
              new QasidaEntryModel({
                arabic: "مَا أَخَافُ قَطُّ ضَيْمًا أَوْ وَنَا",
                translit: "Mā akhāfu qaṭṭu ḍayman aw wanā",
                translation: "so I never fear wrong or weariness.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "سُدْتُمُ النَّاسَ فَمَنْ ذَا مِثْلُكُم",
                translit: "Sudtumun nāsa faman dhā mithlukum",
                translation:
                  "You have been masters of the people, so who is like you,",
              }),
              new QasidaEntryModel({
                arabic: "يَا أَعَزَّ النَّاس يَا كَنْزَ الْغِنَا",
                translit: "Yā a‛azzan nās yā kanzal ghinā",
                translation: "O most honoured of people, O treasure of riches?",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "أَنْتُمُ الْأَقْطَابُ وَالْأَوْتَادُ يَا",
                translit: "Antumul aqṭābu wal’awtādu yā",
                translation: "You are the Poles and the Pillars, O",
              }),
              new QasidaEntryModel({
                arabic: "خَيْرَ مَنْ حَازَ الْمَثَانِي وَالثَّنَا",
                translit: "Khayra man ḥāzal mathānī waththanā",
                translation:
                  "best of those who have attained the oft-repeated verses and praise.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "فَإِلَى مَنْ غَيْرُكُمْ يَا سَادَتِي",
                translit: "Fa’ilā man ghayrukum yā sādatī",
                translation: "So to whom, other than you, my masters,",
              }),
              new QasidaEntryModel({
                arabic: "أَلْتَجِي إِنْ حَانَ خَطْبٌ أَوْ دَنَا",
                translit: "Altajī in ḥāna khaṭbun aw danā",
                translation:
                  "shall I turn for refuge if a calamity comes or draws near?",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "لَيْسَ لِي مَلْجَأ سِوَاكُمْ فَادْرِكُوا",
                translit: "Laysa lī malja’ siwākum fadrikū",
                translation: "I have no refuge but you, so come to my aid,",
              }),
              new QasidaEntryModel({
                arabic: "هَيَّا هَيَّا هَيَّا هَيَّا هَا هُنَا",
                translit: "Hayyā hayyā hayyā hayyā hā hunā",
                translation: "hasten, hasten, hasten, hasten, right here!",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "هَيَّا هَيَّا عَجِّلُوا لِي غَارَةً",
                translit: "Hayyā hayyā ‛ajjilū lī ghāratan",
                translation: "Hasten, hasten, bring me quickly a relief",
              }),
              new QasidaEntryModel({
                arabic: "يُدْرِكُ الْعَبْدُ بِهَا أَقْصَى الْمُنَا",
                translit: "Yudrikul ‛abdu bihā aqṣal munā",
                translation:
                  "by which the servant attains the farthest of his hopes.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "رَبَّنَا فَاكْشِفْ بِهِمْ مَكْرُوهَنَا",
                translit: "Rabbanā fakshif bihim makrūhanā",
                translation:
                  "Our Lord, through them remove from us what we hate,",
              }),
              new QasidaEntryModel({
                arabic: "وَاحْمِنَا مِنْ كُلِّ خَطْبٍ أَمَّنَا",
                translit: "Waḥminā min kulli khaṭbin ammanā",
                translation:
                  "and protect us from every calamity that has come upon us.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "خَتْمُهَا بِالْمُصْطَفَى الْهَادِي اكْفِنَا",
                translit: "Khatmuhā bilmuṣṭafal hādī kfinā",
                translation:
                  "To seal it: by the Chosen One, the Guide, suffice us",
              }),
              new QasidaEntryModel({
                arabic: "كُلَّ شَرٍّ وَعَدُوٍّ ربَّنَا",
                translit: "Kulla sharrin wa‛adūwin rabbanā",
                translation: "against every evil and enemy, our Lord,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَصَلَاةً وَسَلَامًا دَائِمًا",
                translit: "Waṣalātan wasalāman dā’iman",
                translation: "and blessings and peace, everlasting,",
              }),
              new QasidaEntryModel({
                arabic: "يَتَغَشَّاهُ بَِها كُلَّ هَنَا",
                translit: "Yataghashshāhu bihā kulla hanā",
                translation: "that cover him with every joy,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَعَلَى آلٍ وَأَصْحَابٍ وَمَنْ",
                translit: "Wa‛alā ālin wa’aṣḥābin waman",
                translation: "and upon the family and Companions, and those",
              }),
              new QasidaEntryModel({
                arabic: "بَعْدَهُمْ مَا لَاحَ بَرْقٌ أَوْ سَنَا",
                translit: "Ba‛dahum mā lāḥa barqun aw sanā",
                translation:
                  "who came after them, as long as lightning or radiance appears.",
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
                translit: "Āmīn yā Allāh",
                translation: "Āmīn, O Allah.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِهِمْ بِهِمْ يَا رَبِّي",
                translit: "Bihim bihim yā rabbī",
                translation: "Through them, through them, O my Lord,",
              }),
              new QasidaEntryModel({
                arabic: "سَالَكْ تُفَرِِّج كَرْبِي",
                translit: "Sālak tufarrij karbī",
                translation: "I ask You to relieve my distress,",
              }),
              new QasidaEntryModel({
                arabic: "أَنْتَ إِلَهِي حَسْبِي",
                translit: "Anta ilāhī ḥasbī",
                translation: "You are my God, my sufficiency,",
              }),
              new QasidaEntryModel({
                arabic: "عَلَى الْبُغَاةِ الْكَائِدِين",
                translit: "‛Alal bughātil kā’idīn",
                translation: "against the transgressors who plot.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "عَجِّلْ بِرَفْعِ مَا نَزَلْ",
                translit: "‛Ajjil biraf‛i mā nazal",
                translation: "Hasten the lifting of what has befallen us,",
              }),
              new QasidaEntryModel({
                arabic: "إِنَّك لَطِيفٌ لَمْ تَزَلْ",
                translit: "Innak laṭīfun lam tazal",
                translation:
                  "for You are the Subtle One, who has never ceased to be;",
              }),
              new QasidaEntryModel({
                arabic: "مَنْ غَيْرُكَ عَزَّ وَجَلْ",
                translit: "Man ghayruka ‛azza wajal",
                translation: "who is there but You, Mighty and Majestic?",
              }),
              new QasidaEntryModel({
                arabic: "وَلَاطِفٌ بِالْعَالَمِين",
                translit: "Walāṭifun bil‛ālamīn",
                translation: "and gentle with all the worlds.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "رَبِّ اكْفِنَا شَرَّ الْعِدَا",
                translit: "Rabbi kfinā sharral ‛idā",
                translation: "My Lord, spare us the evil of the enemies,",
              }),
              new QasidaEntryModel({
                arabic: "وَخُذْهُمُ وَبَدِّدَا",
                translit: "Wakhudhhumu wabaddidā",
                translation: "and seize them and scatter them,",
              }),
              new QasidaEntryModel({
                arabic: "وَاجْعَلْهُمُ لَنَا فِدَا",
                translit: "Waj‛alhumu lanā fidā",
                translation: "and make them a ransom for us,",
              }),
              new QasidaEntryModel({
                arabic: "وَعِبْرَةً لِلنَّاظِرِين",
                translit: "Wa‛ibratan linnāẓirīn",
                translation: "and a lesson for those who see.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا رَبِّ شَتِّتْ شَمْلَهُمْ",
                translit: "Yā rabbi shattit shamlahum",
                translation: "O my Lord, break up their gathering,",
              }),
              new QasidaEntryModel({
                arabic: "يَا رَبِّ فَرِّقْ جَمْعَهُمْ",
                translit: "Yā rabbi farriq jam‛ahum",
                translation: "O my Lord, divide their company,",
              }),
              new QasidaEntryModel({
                arabic: "يَا رَبِّ قَلِّلْ عَدَّهُمْ",
                translit: "Yā rabbi qallil ‛addahum",
                translation: "O my Lord, diminish their number,",
              }),
              new QasidaEntryModel({
                arabic: "وَاجْعَلْهُمُ فِى الْغَابِرِين",
                translit: "Waj‛alhumu fil ghābirīn",
                translation: "and make them among the bygone.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَلَا تُبَلِّغْهُمْ مُرَادْ",
                translit: "Walā tuballighhum murād",
                translation: "And do not let them reach their aim,",
              }),
              new QasidaEntryModel({
                arabic: "وَنَارُهُمْ تُصْبِحْ رَمَادْ",
                translit: "Wanāruhum tuṣbiḥ ramād",
                translation: "and may their fire become ashes,",
              }),
              new QasidaEntryModel({
                arabic: "بِ﴿كٓهيعٓصٓ﴾",
                translit: "Bi Kāf Hā Yā ‛Ayn Ṣād",
                translation: "by Kāf Hā Yā ‛Ayn Ṣād,",
              }),
              new QasidaEntryModel({
                arabic: "فِى الْحَالِ وَلَّوْا خَائِبِين",
                translit: "Fil ḥāli wallaw khā’ibīn",
                translation: "and at once they turn back disappointed.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَشَرِّ كُلِّ مَاكِرِ",
                translit: "Washarri kulli mākir",
                translation: "And from the evil of every deceiver,",
              }),
              new QasidaEntryModel({
                arabic: "وَخَائِنٍ وَغَادِرِ",
                translit: "Wakhā’inin waghādir",
                translation: "and traitor and betrayer,",
              }),
              new QasidaEntryModel({
                arabic: "وَعَايِنٍ وَسَاحِرِ",
                translit: "Wa‛āyinin wasāḥir",
                translation: "and one who casts the evil eye, and sorcerer,",
              }),
              new QasidaEntryModel({
                arabic: "وَشَرِّ كُلِّ الْمُؤْذِيِين",
                translit: "Washarri kullil mu’dhiyīn",
                translation: "and the evil of all who cause harm,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "مِنْ مُعْتَدٍ وَغَاصِبِ",
                translit: "Min mu‛tadin waghāṣib",
                translation: "from the aggressor and the usurper,",
              }),
              new QasidaEntryModel({
                arabic: "وَمُفْتَرٍ وَكَاذِبِ",
                translit: "Wamuftarin wakādhib",
                translation: "and the slanderer and the liar,",
              }),
              new QasidaEntryModel({
                arabic: "وَفَاجِرٍ وَعَائِبِ",
                translit: "Wafājirin wa‛ā’ib",
                translation: "and the wicked one and the faultfinder,",
              }),
              new QasidaEntryModel({
                arabic: "وَحَاسِدٍ وَالشَّامِتِين",
                translit: "Waḥāsidin washshāmitīn",
                translation: "and the envier and those who gloat.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا رَبَّنَا يَا رَبَّنَا",
                translit: "Yā rabbanā yā rabbanā",
                translation: "O our Lord, O our Lord,",
              }),
              new QasidaEntryModel({
                arabic: "يَا ذَا الْبَهَا وَذَا السَّنَا",
                translit: "Yā dhal bahā wadhas sanā",
                translation: "O Possessor of splendour and radiance,",
              }),
              new QasidaEntryModel({
                arabic: "وَذَا الْعَطَا وَذَا الْغِنَى",
                translit: "Wadhal ‛aṭā wadhal ghinā",
                translation: "and Possessor of gifts and riches,",
              }),
              new QasidaEntryModel({
                arabic: "أَنْتَ مُجِيبُ السَّائِلِين",
                translit: "Anta mujībus sā’ilīn",
                translation: "You answer those who ask.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَسِّرْ لَنَا أُمُورَنَا",
                translit: "Yassir lanā umūranā",
                translation: "Make easy for us our affairs,",
              }),
              new QasidaEntryModel({
                arabic: "وَاشْرَح لَنَا صُدُورَنَا",
                translit: "Washraḥ lanā ṣudūranā",
                translation: "and expand our breasts,",
              }),
              new QasidaEntryModel({
                arabic: "وَاسْتُرْ لَنَا عُيُوبَنَا",
                translit: "Wastur lanā ‛uyūbanā",
                translation: "and cover our faults,",
              }),
              new QasidaEntryModel({
                arabic: "فَأَنْتَ بِالسَّتْرِ قَمِين",
                translit: "Fa’anta bissatri qamīn",
                translation: "for You are most fitting for covering.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَاغْفِرْ لَنَا ذُنُوبَنَا",
                translit: "Waghfir lanā dhunūbanā",
                translation: "And forgive us our sins,",
              }),
              new QasidaEntryModel({
                arabic: "وَكُلُّ ذَنْبٍ عِنْدَنا",
                translit: "Wakullu dhanbin ‛indanā",
                translation: "and every sin of ours,",
              }),
              new QasidaEntryModel({
                arabic: "وَامْنُنْ بِتَوْبَةٍ لَنَا",
                translit: "Wamnun bitawbatin lanā",
                translation: "and bestow repentance upon us,",
              }),
              new QasidaEntryModel({
                arabic: "أَنْتَ حَبِيبُ التَّائِبِين",
                translit: "Anta ḥabībut tā’ibīn",
                translation: "You are the Beloved of those who repent.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِجَاهِ سَيِّدِنَا الرَّسُول",
                translit: "Bijāhi sayyidinar rasūl",
                translation: "By the standing of our master the Messenger,",
              }),
              new QasidaEntryModel({
                arabic: "وَالْحَسَنَيْنِ وَالْبَتُول",
                translit: "Walḥasanayni walbatūl",
                translation: "and the two Ḥasans and al-Batūl,",
              }),
              new QasidaEntryModel({
                arabic: "وَالْمُرْتَضَى أَبِي الْفُحُول",
                translit: "Walmurtaḍā abil fuḥūl",
                translation: "and al-Murtaḍā, father of the champions,",
              }),
              new QasidaEntryModel({
                arabic: "وَجَاهِ جِبْرِيلَ الْأَمِين",
                translit: "Wajāhi Jibrīlal Amīn",
                translation: "and the standing of Jibrīl, the Trustworthy.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "ثُمَّ الصَّلَاةُ وَالسَّلَام",
                translit: "Thummaṣ ṣalātu wassalām",
                translation: "Then blessings and peace",
              }),
              new QasidaEntryModel({
                arabic: "عَلَى النَّبِي خَيْرِ الْأَنَامْ",
                translit: "‛Alan nabī khayril anām",
                translation: "upon the Prophet, the best of mankind,",
              }),
              new QasidaEntryModel({
                arabic: "وَآلِهِ الْغُرِّ الْكِرَامْ",
                translit: "Wa’ālihil ghurril kirām",
                translation: "and his illustrious and noble family,",
              }),
              new QasidaEntryModel({
                arabic: "وَصَحْبِهِ وَالتَّابِعِين",
                translit: "Waṣaḥbihi wattābi‛īn",
                translation: "and his Companions and the Followers.",
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
                translit: "Yā arḥamar rāḥimīn",
                translation: "O Most Merciful of those who show mercy,",
              }),
              new QasidaEntryModel({
                arabic: "اُلْطُفْ بِنَا فِي قَضَاك",
                translit: "Ulṭuf binā fī qaḍāk",
                translation: "be gentle with us in Your decree,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَعَافِنَا يَا إِلَهِي",
                translit: "Wa‛āfinā yā ilāhī",
                translation: "and grant us well-being, O my God,",
              }),
              new QasidaEntryModel({
                arabic: "مِنْ نَوَازِلْ بَلَاك",
                translit: "Min nawāzil balāk",
                translation: "from the calamities of Your tribulation,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَهَبْ لَنَا الْخَيْرَ كُلَّه",
                translit: "Wahab lanal khayra kullah",
                translation: "and grant us all good,",
              }),
              new QasidaEntryModel({
                arabic: "وَاهْدِنَا بِهُدَاك",
                translit: "Wahdinā bihudāk",
                translation: "and guide us by Your guidance,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَنَسْتَعِينُك وَنَسْتَغْنِيك",
                translit: "Wanasta‛īnuk wanastaghnīk",
                translation:
                  "and we ask Your help and ask You to make us self-sufficient,",
              }),
              new QasidaEntryModel({
                arabic: "عَمَّنْ سِوَاك",
                translit: "‛Amman siwāk",
                translation: "free of any besides You.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا صَاحِبَ الْفَضْلِ وَالْإِحْسَان",
                translit: "Yā ṣāḥibal faḍli wal’iḥsān",
                translation: "O Possessor of grace and kindness,",
              }),
              new QasidaEntryModel({
                arabic: "نَرْجُوا عَطَاك",
                translit: "Narjū ‛aṭāk",
                translation: "we hope for Your gift,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "نَنَال كُلَّ الْمَطَالِب",
                translit: "Nanāl kullal maṭālib",
                translation: "that we may attain every request,",
              }),
              new QasidaEntryModel({
                arabic: "كُلَّهَا فِي رِضَاك",
                translit: "Kullahā fī riḍāk",
                translation: "all of them, in Your good pleasure.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "إيَّاك نَعْبُد وَنَشْهَد",
                translit: "Iyyāk na‛bud wanashhad",
                translation: "You alone we worship, and we witness,",
              }),
              new QasidaEntryModel({
                arabic: "مَشْهَد أَنَّا نَرَاك",
                translit: "Mashhad annā narāk",
                translation: "in a witnessing, that we see You,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَنَشْهَد أَنَّكْ تَرَانَا",
                translit: "Wanashhad annak tarānā",
                translation: "and we witness that You see us,",
              }),
              new QasidaEntryModel({
                arabic: "نُور عَيْنِ اصْطِفَاك",
                translit: "Nūr ‛ayni ṣṭifāk",
                translation: "the light of the eye of Your choice.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "طَابَتْ شَوَاهِد مَشَاهِد",
                translit: "Ṭābat shawāhid mashāhid",
                translation: "Sweet are the signs and the witnessings",
              }),
              new QasidaEntryModel({
                arabic: "مَنْ يُوَالِي وَلَاك",
                translit: "Man yuwālī walāk",
                translation: "of whoever is devoted to Your friendship,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَمَنْ عَلَى سُنَّةِ الْهَادِي",
                translit: "Waman ‛alā sunnatil hādī",
                translation: "and whoever, upon the Sunnah of the Guide,",
              }),
              new QasidaEntryModel({
                arabic: "يُرَاعِي رَعَاك",
                translit: "Yurā‛ī ra‛āk",
                translation: "keeps to it, has Your protection,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَمَنْ قَرَأ لِلْقُرْآن",
                translit: "Waman qara’ lilqur’ān",
                translation: "and whoever has recited the Qur’ān,",
              }),
              new QasidaEntryModel({
                arabic: "أَوْعَى بِحَقِّ نَبَاك",
                translit: "Aw‛ā biḥaqqi nabāk",
                translation: "and has kept in mind the truth of Your tidings,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "مِنْكَ إِلَيْكَ تَحَقَّق",
                translit: "Minka ilayka taḥaqqaq",
                translation: "from You, to You, he has realised",
              }),
              new QasidaEntryModel({
                arabic: "أَنَّ هَذَا حَكَاك",
                translit: "Anna hādhā ḥakāk",
                translation: "that this speaks of You,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَصَار قَلْبُه وَقَالَبْهُ",
                translit: "Waṣāra qalbuh waqālabhu",
                translation: "and his heart and his body have become",
              }),
              new QasidaEntryModel({
                arabic: "امْتَلَا مِنْ صَفَاك",
                translit: "Imtalā min ṣafāk",
                translation: "full of Your purity,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِالْفَهْم وَالْعِلم وَالتَّعْظِيم",
                translit: "Bilfahm wal‛ilm watta‛ẓīm",
                translation: "with understanding, knowledge and reverence,",
              }),
              new QasidaEntryModel({
                arabic: "يَلْحَظ سَنَاك",
                translit: "Yalḥaẓ sanāk",
                translation: "he beholds Your radiance.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "هَذَا لِمَنْ كَان حَظُّه",
                translit: "Hādhā liman kān ḥaẓẓuh",
                translation: "This is for the one whose share",
              }),
              new QasidaEntryModel({
                arabic: "مِنْكَ وَافِر هُنَاك",
                translit: "Minka wāfir hunāk",
                translation: "from You is abundant, there,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "فِي سَابِقِ الْعِلْم",
                translit: "Fī sābiqil ‛ilm",
                translation: "in Your prior knowledge;",
              }),
              new QasidaEntryModel({
                arabic: "جَائَتِ اللَّاحِقَة مِنْ قَدَاك",
                translit: "Jā’atil lāḥiqat min qadāk",
                translation: "what followed came from Your decree,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَأَدْرَكَتْهُ الْعِنَايَة",
                translit: "Wa’adrakathul ‛ināyah",
                translation: "and Providence overtook him",
              }),
              new QasidaEntryModel({
                arabic: "حَيْث جِيتَه وَجَاك",
                translit: "Ḥayth jītah wajāk",
                translation: "when You came to him and he came to You.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَسْعَى مُلَبِّي مُجِيبَك",
                translit: "Yas‛ā mulabbī mujībak",
                translation: "He hastens, answering, responding to You,",
              }),
              new QasidaEntryModel({
                arabic: "صَار سَمْعُه دَعَاك",
                translit: "Ṣār sam‛uh da‛āk",
                translation: "his hearing has turned to Your call,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "مِنْكَ إِلَيْكَ وَخَيَّم",
                translit: "Minka ilayka wakhayyam",
                translation: "from You, to You, and he pitched his tent,",
              }),
              new QasidaEntryModel({
                arabic: "حَطّا سَاحَة فِنَاك",
                translit: "Ḥaṭṭā sāḥat fināk",
                translation: "alighting in the courtyard of Your threshold,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "عَلَى الْهَنَا وَالْمُنَى",
                translit: "‛Alal hanā walmunā",
                translation: "amid happiness and desires,",
              }),
              new QasidaEntryModel({
                arabic: "وَالْبَسط شِيتَه وَشَاك",
                translit: "Walbasṭ shītah washāk",
                translation: "and expansion, as You willed and as he willed.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا رَبِّ يَا رَبِّ هَبْ لِي",
                translit: "Yā rabbi yā rabbi hab lī",
                translation: "O my Lord, O my Lord, grant me",
              }),
              new QasidaEntryModel({
                arabic: "فِي رَجَاء مَنْ رَجَاك",
                translit: "Fī rajā’ man rajāk",
                translation: "the hope of one who has hoped in You,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَاقْبَل دُعَائِي وَقَرِّبْنِي",
                translit: "Waqbal du‛ā’ī waqarribnī",
                translation: "and accept my prayer and draw me near",
              }),
              new QasidaEntryModel({
                arabic: "مَعَ مَنْ دَعَاك",
                translit: "Ma‛a man da‛āk",
                translation: "with those who called upon You,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَأَنْتَ حَسْبِي وَعَوْنِي",
                translit: "Wa’anta ḥasbī wa‛awnī",
                translation: "and You are my sufficiency and my help,",
              }),
              new QasidaEntryModel({
                arabic: "فَاشْفِنِي بِشِفَاك",
                translit: "Fashfinī bishifāk",
                translation: "so heal me with Your healing,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "قَلْبِي وَقَالَبِي وَالْبِسْنِي",
                translit: "Qalbī waqālabī walbisnī",
                translation: "my heart and my body, and clothe me",
              }),
              new QasidaEntryModel({
                arabic: "لِبَاسَ اتْقِيَاك",
                translit: "Libāsa tqiyāk",
                translation: "in the garment of Your pious ones,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَغَذِّ رُوحِي بِذِكْرِك",
                translit: "Waghadhdhi rūḥī bidhikrik",
                translation: "and nourish my soul with remembrance of You,",
              }),
              new QasidaEntryModel({
                arabic: "وَاحْمِنِي بِحِمَاك",
                translit: "Waḥminī biḥimāk",
                translation: "and protect me within Your sanctuary,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَحَبِّبَك لِي وَحَبِّبْ",
                translit: "Waḥabbibak lī waḥabbib",
                translation: "and make You dear to me, and make dear",
              }),
              new QasidaEntryModel({
                arabic: "لِي مَحَبَّة لِقَاك",
                translit: "Lī maḥabbat liqāk",
                translation: "to me the love of meeting You.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "أَسْتَغْفِرُ اللَّه غُفْرَانَك",
                translit: "Astaghfirullāh ghufrānak",
                translation: "I seek forgiveness from Allah; Your pardon",
              }),
              new QasidaEntryModel({
                arabic: "لِمَنْ قَدْ عَصَاك",
                translit: "Liman qad ‛aṣāk",
                translation: "for the one who has disobeyed You.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَاصْدُق يَقِينِي وَثَبِّتْنِي",
                translit: "Waṣduq yaqīnī wathabbitnī",
                translation: "Make my certainty true and make me steadfast",
              }),
              new QasidaEntryModel({
                arabic: "ثَبَات أَوْلِيَاك",
                translit: "Thabāt awliyāk",
                translation: "with the steadfastness of Your friends.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَالْحَمْدُ لِلَّهِ وَاخْتِمْهَا",
                translit: "Walḥamdu lillāhi wakhtimhā",
                translation: "And praise be to Allah, and seal it",
              }),
              new QasidaEntryModel({
                arabic: "بِطَابِع هُدَاك",
                translit: "Biṭābi‛ hudāk",
                translation: "with the seal of Your guidance.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "صَلَاة رَبِّي وَسَلِّمْ",
                translit: "Ṣalāt rabbī wasallim",
                translation: "The blessings of my Lord, and peace,",
              }),
              new QasidaEntryModel({
                arabic: "مَا نَزَل مُزْن مَاك",
                translit: "Mā nazal muzn māk",
                translation: "for as long as rainclouds send down their water,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "عَلَى النَّبِيِّ الْمُصْطَفَى الْـ",
                translit: "‛Alan nabiyyil muṣṭafal",
                translation: "upon the Prophet, the Chosen One, the",
              }),
              new QasidaEntryModel({
                arabic: "ـمَحْمُودِ خَتْم أَنْبِيَاك",
                translit: "Maḥmūdi khatm anbiyāk",
                translation: "Praised, the seal of Your prophets,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "عَدَد حَيَاةِ الَّذِي يَحْيَا",
                translit: "‛Adad ḥayātil ladhī yaḥyā",
                translation: "as many as the lives of all who live",
              }),
              new QasidaEntryModel({
                arabic: "بِهَا مِن حَيَاك",
                translit: "Bihā min ḥayāk",
                translation: "by it, from Your life,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَالْآل وَالصَّحب",
                translit: "Wal’āl waṣṣaḥb",
                translation: "and upon the family and the Companions,",
              }),
              new QasidaEntryModel({
                arabic: "وَأَلْحِقْنَا بِحِزْب أَصْفِيَاك",
                translit: "Wa’alḥiqnā biḥizb aṣfiyāk",
                translation: "and join us to the party of Your chosen ones.",
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
                translit: "Yā amānal khā’ifīn",
                translation: "O Security of the fearful,",
              }),
              new QasidaEntryModel({
                arabic: "نَجِّنَا مِمَّا نَخَافْ",
                translit: "Najjinā mimmā nakhāf",
                translation: "save us from what we fear,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا وَلِيَّ الصَّالِحِين",
                translit: "Yā waliyyaṣ ṣāliḥīn",
                translation: "O Guardian of the righteous,",
              }),
              new QasidaEntryModel({
                arabic: "كُنْ مُوَالِينَا وَكَافْ",
                translit: "Kun muwālīnā wakāf",
                translation: "be our Friend and be enough for us,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا جَلِيسَ الذَّاكِرِين",
                translit: "Yā jalīsadh dhākirīn",
                translation: "O Companion of those who remember You,",
              }),
              new QasidaEntryModel({
                arabic: "اِهْدِنَا سُبْلَ الْعَفَافْ",
                translit: "Ihdinā sublal ‛afāf",
                translation: "guide us to the ways of chastity,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا مُجِيبَ السَّائِلِين",
                translit: "Yā mujības sā’ilīn",
                translation: "O Answerer of those who ask,",
              }),
              new QasidaEntryModel({
                arabic: "رُفْ بِنَا وَاغْفِرْ وَعَافْ",
                translit: "Ruf binā waghfir wa‛āf",
                translation:
                  "be gentle with us, forgive us, and grant us well-being,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "نَسْتَعِينُك يَا مُعِين",
                translit: "Nasta‛īnuk yā mu‛īn",
                translation: "we seek Your help, O Helper,",
              }),
              new QasidaEntryModel({
                arabic: "شفّهَا أَحْسَن شَفَافْ",
                translit: "Shaffahā aḥsan shafāf",
                translation: "make it clear in the finest clarity,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "هَبْ لَنَا فَتْحًا مُبِين",
                translit: "Hab lanā fatḥan mubīn",
                translation: "grant us a manifest victory",
              }),
              new QasidaEntryModel({
                arabic: "جَاءَ بِالنَّصْرِ مُوَافْ",
                translit: "Jā’a binnaṣri muwāf",
                translation: "that comes with help, complete,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَاكْفِ شَرَّ الْمُؤذِين",
                translit: "Wakfi sharral mu’dhīn",
                translation: "and ward off the evil of those who cause harm,",
              }),
              new QasidaEntryModel({
                arabic: "كُفَّهَمْ عَنَّا كَفَافْ",
                translit: "Kuffaham ‛annā kafāf",
                translation: "restrain them from us, enough,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَالْعُتَاةَ الظَّالِمِين",
                translit: "Wal‛utātaẓ ẓālimīn",
                translation: "and the tyrants, the wrongdoers,",
              }),
              new QasidaEntryModel({
                arabic: "حُتَّهُم حَتَّى التَّلَافْ",
                translit: "Ḥuttahum ḥattat talāf",
                translation: "strip them away until their ruin,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "شَرُّهُمْ فِيهِمْ مُبِين",
                translit: "Sharruhum fīhim mubīn",
                translation: "their evil is plain among them,",
              }),
              new QasidaEntryModel({
                arabic: "مِنْهُمُ فِيهِم مُضَافْ",
                translit: "Minhumu fīhim muḍāf",
                translation: "from them, returned upon them,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "خَاسِرِينَ مُدْبِرِين",
                translit: "Khāsirīna mudbirīn",
                translation: "losers, turning their backs,",
              }),
              new QasidaEntryModel({
                arabic: "ذَهَبُوا بِالْاِنْصِرَافْ",
                translit: "Dhahabū bilinṣirāf",
                translation: "they have gone away, departing,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "مُرْتَدِّينَ هَالِكِين",
                translit: "Murtaddīna hālikīn",
                translation: "turned back, perishing,",
              }),
              new QasidaEntryModel({
                arabic: "فِي شَفَا جُرفِ الْهَيَاف",
                translit: "Fī shafā jurfil hayāf",
                translation: "on the edge of the brink of ruin.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَالطُّغَاةِ الْبَاغِين",
                translit: "Waṭṭughātil bāghīn",
                translation: "And the oppressors, the transgressors,",
              }),
              new QasidaEntryModel({
                arabic: "اِكْفِهِمْ يَا خَيْرَ كَافْ",
                translit: "Ikfihim yā khayra kāf",
                translation: "deal with them, O best of those who suffice.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "حَسْبُنَا اللَّه الْمُعِين",
                translit: "Ḥasbunallāhul Mu‛īn",
                translation: "Allah, the Helper, is enough for us;",
              }),
              new QasidaEntryModel({
                arabic: "هُوَ هُوَ لَا خِلَافْ",
                translit: "Huwa huwa lā khilāf",
                translation: "He, He, without any dispute,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَكَفَى الْمُتَوَكِّلِين",
                translit: "Wakafal mutawakkilīn",
                translation: "and He suffices those who put their trust in Him",
              }),
              new QasidaEntryModel({
                arabic: "كُلَّ شَرٍّ مِنْ مُخَافْ",
                translit: "Kulla sharrin min mukhāf",
                translation: "against every evil of what is feared.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "هُوَ رَبُّ الْعَالَمِين",
                translit: "Huwa rabbul ‛ālamīn",
                translation: "He is the Lord of the worlds,",
              }),
              new QasidaEntryModel({
                arabic: "وَإِلَيْهِ الْإِنْعِطَافْ",
                translit: "Wa’ilayhil in‛iṭāf",
                translation: "and toward Him is the turning,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "كَهْفُنَا الْحِصْنُ الْحَصِين",
                translit: "Kahfunal ḥiṣnul ḥaṣīn",
                translation: "our shelter, the impregnable fortress;",
              }),
              new QasidaEntryModel({
                arabic: "مِنْ سِوَاهُ مَا نَخَافْ",
                translit: "Min siwāhu mā nakhāf",
                translation: "we fear nothing besides Him.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَصَلَاةٌ كُلَّ حِين",
                translit: "Waṣalātun kulla ḥīn",
                translation: "And blessings at every moment,",
              }),
              new QasidaEntryModel({
                arabic: "وَسَلَامُ اللَّهِ وَافْ",
                translit: "Wasalāmullāhi wāf",
                translation: "and the peace of Allah, abundant,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "تَبْلُغُ الْهَادِي الْأَمِين",
                translit: "Tablughul hādil amīn",
                translation: "reaching the Guide, the Trustworthy,",
              }),
              new QasidaEntryModel({
                arabic: "وَآلَه اَصْحَابَ الْعَفَافْ",
                translit: "Wa’ālah aṣḥābal ‛afāf",
                translation: "and his family, the Companions of chastity.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "خَتْمُهَا لِلْمُسْلِمِين",
                translit: "Khatmuhā lilmuslimīn",
                translation: "Its conclusion is for the Muslims,",
              }),
              new QasidaEntryModel({
                arabic: "الْمَسَاكِين الضِّعَافْ",
                translit: "Al-masākīniḍ ḍi‛āf",
                translation: "the poor, the weak.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "غَارَةُ اللَّهِ الْمَتِين",
                translit: "Ghāratullāhil matīn",
                translation: "The succour of Allah, the Firm,",
              }),
              new QasidaEntryModel({
                arabic: "هُوْ بِهِمْ أَرْحَمْ وَرَافْ",
                translit: "Hū bihim arḥam warāf",
                translation: "He is more merciful and kind toward them.",
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
                translit: "Yā Tawwāb tub ‛alaynā",
                translation: "O Ever-Relenting, relent toward us,",
              }),
              new QasidaEntryModel({
                arabic: "وَارْحَمْنَا وَانْظُرْ إِلَيْنَا",
                translit: "Warḥamnā wanẓur ilaynā",
                translation: "and have mercy on us and look upon us,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا تَوَّاب تُبْ عَلَيْنَا",
                translit: "Yā Tawwāb tub ‛alaynā",
                translation: "O Ever-Relenting, relent toward us,",
              }),
              new QasidaEntryModel({
                arabic: "سَامِحْنَا فِيمَا جَنَيْنَا",
                translit: "Sāmiḥnā fīmā janaynā",
                translation: "pardon us for what we have committed,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا تَوَّاب تُبْ عَلَيْنَا",
                translit: "Yā Tawwāb tub ‛alaynā",
                translation: "O Ever-Relenting, relent toward us,",
              }),
              new QasidaEntryModel({
                arabic: "اِغْفِرْ لَنَا وَلِوَالِدِينَا",
                translit: "Ighfir lanā waliwālidīnā",
                translation: "forgive us and our parents.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا اللَّه بِتَوْبَة تَوْبَة مَغْفِرَة",
                translit: "Yā Allāh bitawbat tawbat maghfirah",
                translation:
                  "O Allah, with repentance, repentance, and forgiveness,",
              }),
              new QasidaEntryModel({
                arabic: "وَالْجَمَالَة دُنْيَا وَآخِرَة",
                translit: "Waljamālat dunyā wa’ākhirah",
                translation: "and beauty in this world and the next.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا اللَّه بِتَوْبَة وَقَبُول وَإِحْسَان",
                translit: "Yā Allāh bitawbat waqabūl wa’iḥsān",
                translation:
                  "O Allah, with repentance and acceptance and kindness,",
              }),
              new QasidaEntryModel({
                arabic: "يَا اللَّه بِتَوْبَة قَبْلَ دَرْجِ الْأَكْفَان",
                translit: "Yā Allāh bitawbat qabla darjil akfān",
                translation:
                  "O Allah, with repentance before the shrouds are wrapped around us,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا اللَّه رِضَى يَا اللَّه رِضَى",
                translit: "Yā Allāh riḍā yā Allāh riḍā",
                translation: "O Allah, Your pleasure, O Allah, Your pleasure,",
              }),
              new QasidaEntryModel({
                arabic: "وَالْعَفْوَ عَمَّا قَدْ مَضَى",
                translit: "Wal‛afwa ‛ammā qad maḍā",
                translation: "and pardon for what has passed,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا اللَّه رِضَى يَا اللَّه رِضَى",
                translit: "Yā Allāh riḍā yā Allāh riḍā",
                translation: "O Allah, Your pleasure, O Allah, Your pleasure,",
              }),
              new QasidaEntryModel({
                arabic: "يَا اللَّه بِتَوْبَةْ وَالْقَبُول",
                translit: "Yā Allāh bitawbah walqabūl",
                translation: "O Allah, with repentance and acceptance.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "أَسْتَغْفِرُ اللَّه أَسْتَغْفِرُ اللَّه",
                translit: "Astaghfirullāh astaghfirullāh",
                translation:
                  "I seek forgiveness from Allah, I seek forgiveness from Allah,",
              }),
              new QasidaEntryModel({
                arabic: "أَسْتَغْفِرُ اللَّه وَنَتُوبُ إِلَى اللَّه",
                translit: "Astaghfirullāh wanatūbu ilallāh",
                translation:
                  "I seek forgiveness from Allah, and we repent to Allah.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "أَسْتَغْفِرُ اللَّهَ رَبَّ الْبَرَايَا",
                translit: "Astaghfirullāha rabbal barāyā",
                translation: "I seek forgiveness from Allah, Lord of creation,",
              }),
              new QasidaEntryModel({
                arabic: "أَسْتَغْفِرُ اللَّه مِنَ الْخَطَايَا",
                translit: "Astaghfirullāh minal khaṭāyā",
                translation: "I seek forgiveness from Allah for all sins.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا فَارِجَ الْهَمِّ يَا كَاشِفَ الْغَم",
                translit: "Yā fārijal hammi yā kāshifal ghamm",
                translation: "O Reliever of worry, O Remover of grief,",
              }),
              new QasidaEntryModel({
                arabic: "يَا مَنْ لِعَبْدِهِ يَغْفِرْ وَيَرْحَمْ",
                translit: "Yā man li‛abdihi yaghfir wayarḥam",
                translation:
                  "O You who forgive and show mercy to Your servant,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا رَبِّ سَالَكْ بِحَقِّ ذَاتِك",
                translit: "Yā rabbi sālak biḥaqqi dhātik",
                translation:
                  "O my Lord, I ask You by the right of Your Essence,",
              }),
              new QasidaEntryModel({
                arabic: "اِغْفِرْ لَنَا وَلِوَالِدِينَا",
                translit: "Ighfir lanā waliwālidīnā",
                translation: "forgive us and our parents.",
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
                translit: "Minallāh narjūl ghufrān",
                translation: "From Allah we hope for forgiveness,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا حَنَّان يَا مَنَّان",
                translit: "Yā ḥannān yā mannān",
                translation: "O Compassionate, O Great Giver,",
              }),
              new QasidaEntryModel({
                arabic: "يَا قَدِيمَ الْإِحْسَان",
                translit: "Yā qadīmal iḥsān",
                translation: "O Eternal in kindness,",
              }),
              new QasidaEntryModel({
                arabic: "بَحْر جُودِك مَلْيَان",
                translit: "Baḥr jūdik malyān",
                translation: "the sea of Your generosity is full,",
              }),
              new QasidaEntryModel({
                arabic: "جُدْ لَنَا بِالْغُفْرَان",
                translit: "Jud lanā bilghufrān",
                translation: "be generous to us with forgiveness,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "جُدْ لِهَذَا الْإِنْسَان",
                translit: "Jud lihādhal insān",
                translation: "be generous to this human being,",
              }),
              new QasidaEntryModel({
                arabic: "عَبْدِ سُوءٍ خَزْيَان",
                translit: "‛Abdi sū’in khazyān",
                translation: "a wretched servant, disgraced,",
              }),
              new QasidaEntryModel({
                arabic: "مِنْ ذُنُوبِه وَحْلَان",
                translit: "Min dhunūbih waḥlān",
                translation: "stuck in the mire of his sins,",
              }),
              new QasidaEntryModel({
                arabic: "خَائِف إِنَّك غَضْبَان",
                translit: "Khā’if innak ghaḍbān",
                translation: "afraid that You are angry.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "رَبَّنَا نَسْتَعْفِيك",
                translit: "Rabbanā nasta‛fīk",
                translation: "Our Lord, we ask Your pardon,",
              }),
              new QasidaEntryModel({
                arabic: "رَبَّنَا نَسْتَكْفِيك",
                translit: "Rabbanā nastakfīk",
                translation: "our Lord, we ask You to suffice us,",
              }),
              new QasidaEntryModel({
                arabic: "وَلَنَا ظَنٌّ فِيك",
                translit: "Walanā ẓannun fīk",
                translation: "and we place our expectation in You,",
              }),
              new QasidaEntryModel({
                arabic: "يَا رَجَاء أهْلِ الْإِيمَان",
                translit: "Yā rajā’ ahlil īmān",
                translation: "O Hope of the people of faith,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "لَا تُخَيِّب رَاجِي",
                translit: "Lā tukhayyib rājī",
                translation: "do not disappoint the one who hopes,",
              }),
              new QasidaEntryModel({
                arabic: "تَحْتَ بَابِك لَاجِي",
                translit: "Taḥta bābik lājī",
                translation: "who takes refuge beneath Your door,",
              }),
              new QasidaEntryModel({
                arabic: "لَمْ يَزَلْ بِالدَّاجِي",
                translit: "Lam yazal biddājī",
                translation: "who has not ceased, in the darkness,",
              }),
              new QasidaEntryModel({
                arabic: "قَائِلاً: يَا حَنَّان",
                translit: "Qā’ilan: yā ḥannān",
                translation: "saying: O Compassionate One.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِعَظِيمِ الْأَسْمَا",
                translit: "Bi‛aẓīmil asmā",
                translation: "By the mighty Names,",
              }),
              new QasidaEntryModel({
                arabic: "وَالصِّفَاتِ الْعُظْمَى",
                translit: "Waṣṣifātil ‛uẓmā",
                translation: "and the supreme Attributes,",
              }),
              new QasidaEntryModel({
                arabic: "وَالْمَلَائِك جَمَّا",
                translit: "Walmalā’ik jammā",
                translation: "and the angels, in their multitudes,",
              }),
              new QasidaEntryModel({
                arabic: "وَبِجَاهِ الْقُرْآن",
                translit: "Wabijāhil qur’ān",
                translation: "and by the standing of the Qur’ān,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِالنَّبِيِّ الْأُمِّي",
                translit: "Binnabiyyil ummī",
                translation: "by the unlettered Prophet,",
              }),
              new QasidaEntryModel({
                arabic: "وَخَدِيجَة أُمِّي",
                translit: "Wakhadījat ummī",
                translation: "and Khadījah, my mother,",
              }),
              new QasidaEntryModel({
                arabic: "وَالْبَتُولِ الْخَتْمِ",
                translit: "Walbatūlil khatm",
                translation: "and al-Batūl, the Seal,",
              }),
              new QasidaEntryModel({
                arabic: "سَيِّدَاتِ النِّسْوَان",
                translit: "Sayyidātin niswān",
                translation: "the leaders of women,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِالنَّبِيِّينَ الْجَمْ",
                translit: "Binnabiyyīnal jamm",
                translation: "by the many prophets,",
              }),
              new QasidaEntryModel({
                arabic: "مِنْ أَبِينَا آدَم",
                translit: "Min abīnā Ādam",
                translation: "from our father Ādam,",
              }),
              new QasidaEntryModel({
                arabic: "وَبِنُوحِ الْأَقْدَمْ",
                translit: "Wabinūḥil aqdam",
                translation: "and by Nūḥ, the most ancient,",
              }),
              new QasidaEntryModel({
                arabic: "وَخَلِيلِ الرَّحْمَن",
                translit: "Wakhalīlir raḥmān",
                translation: "and the intimate friend of the Most Merciful,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِالنَّبِيّ بِن مَرْيَم",
                translit: "Binnabiyyi bin Maryam",
                translation: "by the Prophet, son of Maryam,",
              }),
              new QasidaEntryModel({
                arabic: "وَبِهُودِ الْأَكْرَم",
                translit: "Wabihūdil akram",
                translation: "and by Hūd, the most honoured,",
              }),
              new QasidaEntryModel({
                arabic: "وَبِهَادُونِ الْعَم",
                translit: "Wabihādūnil ‛amm",
                translation: "and by Hārūn, the uncle,",
              }),
              new QasidaEntryModel({
                arabic: "وَالنَّبِي بِن عِمْرَان",
                translit: "Wannabī bin ‛Imrān",
                translation: "and the Prophet, son of ‛Imrān,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبِجَاهِ الْأَصْحَاب",
                translit: "Wabijāhil aṣḥāb",
                translation: "and by the standing of the Companions,",
              }),
              new QasidaEntryModel({
                arabic: "وَبِجَاهِ الْأَقْطَاب",
                translit: "Wabijāhil aqṭāb",
                translation: "and by the standing of the Poles,",
              }),
              new QasidaEntryModel({
                arabic: "وَالْوَلِيِّ الْأَوَّاب",
                translit: "Walwaliyyil awwāb",
                translation: "and the saint who constantly returns to Allah,",
              }),
              new QasidaEntryModel({
                arabic: "شَيْخِنَا بَاسَوْدَان",
                translit: "Shaykhinā Bāsawdān",
                translation: "our Shaykh, Bā Sawdān,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِمَشَايِخِ الْإِسْلَام",
                translit: "Bimashāyikhil islām",
                translation: "by the shaykhs of Islam,",
              }),
              new QasidaEntryModel({
                arabic: "أَهْلِ عِلْمٍ وَأَحْكَام",
                translit: "Ahli ‛ilmin wa’aḥkām",
                translation: "people of knowledge and rulings,",
              }),
              new QasidaEntryModel({
                arabic: "وَالْوَلِي بِن بسْطَام",
                translit: "Walwalī bin Bisṭām",
                translation: "and the saint, son of Bisṭām,",
              }),
              new QasidaEntryModel({
                arabic: "وَالْوَلِي بِن جَيْلَان",
                translit: "Walwalī bin Jaylān",
                translation: "and the saint, son of Jaylān,",
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
                translit: "Yā ilāhal ‛ālam",
                translation: "O God of the world,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بأهْلِ (تُرْبَة بَشَّار)",
                translit: "Bi’ahli (Turbat Bashshār)",
                translation: "by the people of Turbat Bashshār,",
              }),
              new QasidaEntryModel({
                arabic: "وَالْفَقِيهِ الْمِشْهَار",
                translit: "Walfaqīhil Mishhār",
                translation: "and the renowned Faqīh,",
              }),
              new QasidaEntryModel({
                arabic: "وَآل عَلوِي الْأَبْرَار",
                translit: "Wa’āl ‛Alawīl abrār",
                translation: "and the family of ‛Alawī, the righteous,",
              }),
              new QasidaEntryModel({
                arabic: "مَنْ بِهِمْ حَالِي زَانْ",
                translit: "Man bihim ḥālī zān",
                translation: "through whom my state is adorned,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بأهْلِ (عِينَاتِ) الْيَوم",
                translit: "Bi’ahli (‛Īnāti) alyawm",
                translation: "by the people of ‛Īnāt today,",
              }),
              new QasidaEntryModel({
                arabic: "مَا كَمَاهُم فِي الْقَوم",
                translit: "Mā kamāhum fil qawm",
                translation: "there is none like them among the people,",
              }),
              new QasidaEntryModel({
                arabic: "وَإِنْ بَدَا مِنِّي لَوم",
                translit: "Wa’in badā minnī lawm",
                translation: "and if blame appears from me,",
              }),
              new QasidaEntryModel({
                arabic: "يَطْلُبُوا لِي الْغُفْرَانْ",
                translit: "Yaṭlubū līl ghufrān",
                translation: "they will ask forgiveness for me.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِالْحَسَن بِن صَالِح",
                translit: "Bilḥasan bin Ṣāliḥ",
                translation: "By al-Ḥasan bin Ṣāliḥ,",
              }),
              new QasidaEntryModel({
                arabic: "بَحْرِ نُورُه طَافِح",
                translit: "Baḥri nūruh ṭāfiḥ",
                translation: "an ocean whose light overflows,",
              }),
              new QasidaEntryModel({
                arabic: "لَا تَكُنْ لِي فَاضِح",
                translit: "Lā takun lī fāḍiḥ",
                translation: "do not expose me,",
              }),
              new QasidaEntryModel({
                arabic: "يَا صَمَد يَا مَنَّانْ",
                translit: "Yā Ṣamad yā Mannān",
                translation: "O Self-Sufficient, O Great Giver.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "مِثْل شَيْخِ الْمَشْهَد",
                translit: "Mithl shaykhil mashhad",
                translation: "Like the Shaykh of the Mashhad,",
              }),
              new QasidaEntryModel({
                arabic: "ابنِ نَاصِر أَحْمَد",
                translit: "Ibni Nāṣir Aḥmad",
                translation: "the son of Nāṣir, Aḥmad,",
              }),
              new QasidaEntryModel({
                arabic: "وَأَبِيه ثُمَّ الْجَدْ",
                translit: "Wa’abīh thummal jadd",
                translation: "and his father, and then the grandfather,",
              }),
              new QasidaEntryModel({
                arabic: "لِلْمَعَالِي لَهُم شَانْ",
                translit: "Lilma‛ālī lahum shān",
                translation: "they have a standing in the heights of honour.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "جُدْ لَنَا بِالْمَطْلُوب",
                translit: "Jud lanā bilmaṭlūb",
                translation: "Be generous to us with what we ask,",
              }),
              new QasidaEntryModel({
                arabic: "وَالْفَرَج مِثْل أَيُّوب",
                translit: "Walfaraj mithl Ayyūb",
                translation: "and with relief, as for Ayyūb,",
              }),
              new QasidaEntryModel({
                arabic: "وَبِفَرْحَة يَعْقُوب",
                translit: "Wabifarḥat Ya‛qūb",
                translation: "and with the joy of Ya‛qūb,",
              }),
              new QasidaEntryModel({
                arabic: "حِين زَالَتِ الْأَحْزَانْ",
                translit: "Ḥīn zālatil aḥzān",
                translation: "when the sorrows departed.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "رَبَّنَا اغْفِرْ وَارْحَمْ",
                translit: "Rabbanā ghfir warḥam",
                translation: "Our Lord, forgive and have mercy,",
              }),
              new QasidaEntryModel({
                arabic: "وَاعْفُ عَمَّا تَعْلَم",
                translit: "Wa‛fu ‛ammā ta‛lam",
                translation: "and pardon what You know,",
              }),
              new QasidaEntryModel({
                arabic: "فَإِنَّ جُودَك قَدْ عَمْ",
                translit: "Fa’inna jūdak qad ‛amm",
                translation: "for Your generosity has spread to all,",
              }),
              new QasidaEntryModel({
                arabic: "إِنْسَ خَلْقِك وَالْجَانْ",
                translit: "Insa khalqik waljān",
                translation: "the humans of Your creation, and the jinn,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَدُرُوسِ الْقُرْآن",
                translit: "Wadurūsil qur’ān",
                translation: "and by the lessons of the Qur’ān,",
              }),
              new QasidaEntryModel({
                arabic: "وَاجْتِمَاعِ الْإِخْوَان",
                translit: "Wajtimā‛il ikhwān",
                translation: "and the gathering of the brothers,",
              }),
              new QasidaEntryModel({
                arabic: "لِدُعَاءِ الرَّحْمَن",
                translit: "Lidu‛ā’ir raḥmān",
                translation: "to call upon the Most Merciful,",
              }),
              new QasidaEntryModel({
                arabic: "سِرَّهُم وَالْإِعْلَانْ",
                translit: "Sirrahum wal’i‛lān",
                translation: "in private and in the open.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَالْحَبِيبِ المحْضَار",
                translit: "Walḥabībil Miḥḍār",
                translation: "And the beloved al-Miḥḍār,",
              }),
              new QasidaEntryModel({
                arabic: "قَائِمًا بِالْأَسْحَار",
                translit: "Qā’iman bil’asḥār",
                translation: "standing in prayer at the hours before dawn,",
              }),
              new QasidaEntryModel({
                arabic: "قَائِلاً: يَا غَفَّار",
                translit: "Qā’ilan: yā Ghaffār",
                translation: "saying: O Ever-Forgiving,",
              }),
              new QasidaEntryModel({
                arabic: "جُدْ لَنَا بِالْغُفْرَانْ",
                translit: "Jud lanā bilghufrān",
                translation: "be generous to us with forgiveness.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "اِسْتَجِبْ لِي وَاسْمَعْ",
                translit: "Istajib lī wasma‛",
                translation: "Answer me, and hear,",
              }),
              new QasidaEntryModel({
                arabic: "وَلَنَا الْكُل أَجْمَع",
                translit: "Walanal kull ajma‛",
                translation: "and us, all of us together,",
              }),
              new QasidaEntryModel({
                arabic: "وَلِمَنْ لَكْ يَضْرَعْ",
                translit: "Waliman lak yaḍra‛",
                translation: "and whoever humbles himself to You,",
              }),
              new QasidaEntryModel({
                arabic: "طَالِبًا لِلْإِحْسَانْ",
                translit: "Ṭāliban lil’iḥsān",
                translation: "seeking Your kindness.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَصَلَاةٌ تَتْرَى",
                translit: "Waṣalātun tatrā",
                translation: "And blessings in unbroken succession",
              }),
              new QasidaEntryModel({
                arabic: "لِمَنْ خُصَّ بِالْإِسْرَا",
                translit: "Liman khuṣṣa bil’isrā",
                translation:
                  "upon him who was singled out with the Night Journey,",
              }),
              new QasidaEntryModel({
                arabic: "وَذَوِيهِ طُرَّا",
                translit: "Wadhawīhi ṭurrā",
                translation: "and all his kinsfolk,",
              }),
              new QasidaEntryModel({
                arabic: "فِي جَمِيعِ الْأَزْمَان",
                translit: "Fī jamī‛il azmān",
                translation: "at all times.",
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
                translit: "Yā ‛ālimas sirri minnā",
                translation: "O Knower of what is secret in us,",
              }),
              new QasidaEntryModel({
                arabic: "لَا تَهتِكِ السَّتْرَ عَنَّا",
                translit: "Lā tahtikis satra ‛annā",
                translation: "do not tear the veil from us,",
              }),
              new QasidaEntryModel({
                arabic: "وَعَافِنَا وَاعْفُ عَنَّا",
                translit: "Wa‛āfinā wa‛fu ‛annā",
                translation: "and grant us well-being and pardon us,",
              }),
              new QasidaEntryModel({
                arabic: "وَكُنْ لَنَا حَيْثُ كُنَّا",
                translit: "Wakun lanā ḥaythu kunnā",
                translation: "and be with us wherever we are.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا رَبِّ يَا عَالِمَ الْحَال",
                translit: "Yā rabbi yā ‛ālimal ḥāl",
                translation: "O my Lord, O Knower of our state,",
              }),
              new QasidaEntryModel({
                arabic: "إِلَيْكَ وَجَّهتُ الْآمَال",
                translit: "Ilayka wajjahtul āmāl",
                translation: "to You I have directed my hopes,",
              }),
              new QasidaEntryModel({
                arabic: "فَامْنُنْ عَلَيْنَا بِالْإِقْبَال",
                translit: "Famnun ‛alaynā bil’iqbāl",
                translation: "so favour us by turning toward us,",
              }),
              new QasidaEntryModel({
                arabic: "وَكُنْ لَنَا وَاصْلِحِ الْبَال",
                translit: "Wakun lanā waṣliḥil bāl",
                translation: "and be with us, and set our state right.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا رَبِّ يَا رَبَّ الْأَرْبَاب",
                translit: "Yā rabbi yā rabbal arbāb",
                translation: "O my Lord, O Lord of lords,",
              }),
              new QasidaEntryModel({
                arabic: "عَبْدُك فَقِيرُك عَلَى الْبَاب",
                translit: "‛Abduk faqīruk ‛alal bāb",
                translation: "Your servant, Your poor one, is at the door,",
              }),
              new QasidaEntryModel({
                arabic: "أَتَى وَقَدْ بَتَّ الْأَسْبَاب",
                translit: "Atā waqad battal asbāb",
                translation: "he has come, having cut off all other means,",
              }),
              new QasidaEntryModel({
                arabic: "مُسْتَدْرِكًا بَعْدَ مَا مَال",
                translit: "Mustadrikan ba‛da mā māl",
                translation: "setting right what had gone astray.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا وَاسِعَ الْجُودِ جُودَك",
                translit: "Yā wāsi‛al jūdi jūdak",
                translation: "O Vast in generosity, Your generosity",
              }),
              new QasidaEntryModel({
                arabic: "اَلْخَيْرُ خَيْرُك وَعِنْدَك",
                translit: "Al-khayru khayruk wa‛indak",
                translation:
                  "is all good: the good is Your good, and is with You,",
              }),
              new QasidaEntryModel({
                arabic: "فَوْقَ الَّذِي رَامَ عَبْدُك",
                translit: "Fawqal ladhī rāma ‛abduk",
                translation: "beyond what Your servant seeks,",
              }),
              new QasidaEntryModel({
                arabic: "فَادْرِك بِرَحْمَتِك فِي الْحَالِ",
                translit: "Fadrik biraḥmatik fil ḥāl",
                translation: "so reach me with Your mercy at once,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا مُوجِدَ الْخَلقِ طُرًّا",
                translit: "Yā mūjidal khalqi ṭurrā",
                translation: "O Bringer into being of all creation,",
              }),
              new QasidaEntryModel({
                arabic: "وَمُوسِعَ الْكُلِّ بِرًّا",
                translit: "Wamūsi‛al kulli birrā",
                translation: "who extends kindness to all,",
              }),
              new QasidaEntryModel({
                arabic: "أَسْأَلُكَ إسْبَال سَتْرًا",
                translit: "As’aluka isbāl satrā",
                translation: "I ask You to draw down a veil",
              }),
              new QasidaEntryModel({
                arabic: "عَلَى الْقَبَائِح وَالْأَخْطَالْ",
                translit: "‛Alal qabā’iḥ wal’akhṭāl",
                translation: "over shameful deeds and errors.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا مَنْ يَرَى سِرَّ قَلْبِي",
                translit: "Yā man yarā sirra qalbī",
                translation: "O You who see the secret of my heart,",
              }),
              new QasidaEntryModel({
                arabic: "حَسْبِي اطِّلَاعُكَ حَسْبِي",
                translit: "Ḥasbī iṭṭilā‛uka ḥasbī",
                translation: "Your awareness of it is enough for me, enough,",
              }),
              new QasidaEntryModel({
                arabic: "فَامْحُ بِعَفْوِكَ ذَنْبِي",
                translit: "Famḥu bi‛afwika dhanbī",
                translation: "so wipe away my sin with Your pardon,",
              }),
              new QasidaEntryModel({
                arabic: "وَاصْلِح قُصُودِي وَالْأَعْمَال",
                translit: "Waṣliḥ quṣūdī wal’a‛māl",
                translation: "and set right my intentions and my deeds.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "رَبِّي عَلَيْكَ اعْتِمَادِي",
                translit: "Rabbī ‛alayka ‛timādī",
                translation: "My Lord, upon You is my reliance,",
              }),
              new QasidaEntryModel({
                arabic: "كَمَا إِلَيْكَ اسْتِنَادِي",
                translit: "Kamā ilayka stinādī",
                translation: "and on You I lean,",
              }),
              new QasidaEntryModel({
                arabic: "صِدْقًا وَأَقْصَى مُرَادِي",
                translit: "Ṣidqan wa’aqṣā murādī",
                translation: "sincerely, and my utmost aim",
              }),
              new QasidaEntryModel({
                arabic: "رِضَاؤُكَ الدَّائِمُ الْحَال",
                translit: "Riḍā’uka dā’imul ḥāl",
                translation: "is Your pleasure, enduring in every state.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا رَبِّ يَا رَبِّ إِنِّي",
                translit: "Yā rabbi yā rabbi innī",
                translation: "O my Lord, O my Lord, I",
              }),
              new QasidaEntryModel({
                arabic: "أَسْأَلُكَ الْعَفْوَ عَنِّي",
                translit: "As’alukal ‛afwa ‛annī",
                translation: "ask You to pardon me,",
              }),
              new QasidaEntryModel({
                arabic: "وَلَمْ يَخِبْ فِيكَ ظَنِّي",
                translit: "Walam yakhib fīka ẓannī",
                translation:
                  "and my expectation in You has never been disappointed.",
              }),
              new QasidaEntryModel({
                arabic: "يَا مَالِكَ الْمُلكِ يَا وَال",
                translit: "Yā mālikal mulki yā wāl",
                translation: "O Master of the Kingdom, O Ruler,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "أَشْكُو إِلَيْكَ وَأَبْكِي",
                translit: "Ashkū ilayka wa’abkī",
                translation: "I complain to You and I weep",
              }),
              new QasidaEntryModel({
                arabic: "مِنْ شُؤْمِ ظُلْمِي وَإِفْكِي",
                translit: "Min shu’mi ẓulmī wa’ifkī",
                translation:
                  "because of the misfortune of my wrongdoing and my falsehood,",
              }),
              new QasidaEntryModel({
                arabic: "وَسُوءِ فِعْلِي وَتَرْكِي",
                translit: "Wasū’i fi‛lī watarkī",
                translation:
                  "and my evil in what I did and what I left undone,",
              }),
              new QasidaEntryModel({
                arabic: "وَشَهْوَةِ الْقِيلِ وَالْقَال",
                translit: "Washahwatil qīli walqāl",
                translation: "and the craving for gossip and idle talk,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَحُبِّ دُنْيَا ذَمِيمَهْ",
                translit: "Waḥubbi dunyā dhamīmah",
                translation: "and love of a blameworthy world,",
              }),
              new QasidaEntryModel({
                arabic: "مِنْ كُلِّ خَيْرٍ عَقِيمَهْ",
                translit: "Min kulli khayrin ‛aqīmah",
                translation: "barren of all good,",
              }),
              new QasidaEntryModel({
                arabic: "فِيهَا الْبَلَايَا مُقِيمَهْ",
                translit: "Fīhal balāyā muqīmah",
                translation: "in which trials dwell permanently,",
              }),
              new QasidaEntryModel({
                arabic: "وَحَشْوُهَا آفَات وَاشْغَال",
                translit: "Waḥashwuhā āfātun washghāl",
                translation:
                  "and whose filling is calamities and distractions.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا وَيْحَ نَفْسِي الْغَوِيَّهْ",
                translit: "Yā wayḥa nafsil ghawiyyah",
                translation: "Woe to my misguided self,",
              }),
              new QasidaEntryModel({
                arabic: "عَنِ السَّبِيلِ السَّوِيَّهْ",
                translit: "‛Anis sabīlis sawiyyah",
                translation: "away from the straight path,",
              }),
              new QasidaEntryModel({
                arabic: "أَضْحَتْ تُرَوِّج عَلَيَّهْ",
                translit: "Aḍḥat turawwij ‛alayyah",
                translation: "it has come to deceive me,",
              }),
              new QasidaEntryModel({
                arabic: "وَقَصْدُهَا الْجَاهُ وَالْمَال",
                translit: "Waqaṣduhal jāhu walmāl",
                translation: "and its aim is status and wealth.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا رَبِّ قَدْ غَلَبَتْنِي",
                translit: "Yā rabbi qad ghalabatnī",
                translation: "O my Lord, it has overcome me,",
              }),
              new QasidaEntryModel({
                arabic: "وَبِالْأَمَانِي سَبَتْنِي",
                translit: "Wabil’amānī sabatnī",
                translation: "and has captivated me with wishes,",
              }),
              new QasidaEntryModel({
                arabic: "وَفِي الْحُظُوظِ كَبَتنِي",
                translit: "Wafil ḥuẓūẓi kabatnī",
                translation: "and in worldly portions has cast me down,",
              }),
              new QasidaEntryModel({
                arabic: "وَقَيَّدَتْنِي بِالْاِكْبَالْ",
                translit: "Waqayyadatnī bilikbāl",
                translation: "and has bound me in shackles.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "قَدِ اسْتَعَنْتُكَ رَبِّي",
                translit: "Qadista‛antuka rabbī",
                translation: "I have sought Your help, my Lord,",
              }),
              new QasidaEntryModel({
                arabic: "عَلَى مُدَاوَاةِ قَلْبِي",
                translit: "‛Alā mudāwāti qalbī",
                translation: "to heal my heart,",
              }),
              new QasidaEntryModel({
                arabic: "وَحَلِّ عُقْدَةِ كَربِي",
                translit: "Waḥalli ‛uqdati karbī",
                translation: "and to untie the knot of my distress,",
              }),
              new QasidaEntryModel({
                arabic: "فَانْظُرْ إِلَى الْغَمِّ يَنْجَالْ",
                translit: "Fanẓur ilal ghammi yanjāl",
                translation:
                  "so look upon the sorrow, that it may be dispelled.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا رَبِّ يَا خَيْرَ كَافِي",
                translit: "Yā rabbi yā khayra kāfī",
                translation: "O my Lord, O best of those who suffice,",
              }),
              new QasidaEntryModel({
                arabic: "أَحلِل عَلَيْنَا الْعَوَافِي",
                translit: "Aḥlil ‛alaynal ‛awāfī",
                translation: "bestow upon us well-being,",
              }),
              new QasidaEntryModel({
                arabic: "فَلَيْسَ شَي ثَمَّ خَافِي",
                translit: "Falaysa shay thamma khāfī",
                translation: "for nothing at all is hidden",
              }),
              new QasidaEntryModel({
                arabic: "عَلَيْك تَفْصِيل وَاجْمَال",
                translit: "‛Alayk tafṣīlun wajmāl",
                translation: "from You, in detail or in sum.",
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
                translit: "Yā rabbi ‛abduk bibābik",
                translation: "O my Lord, Your servant is at Your door,",
              }),
              new QasidaEntryModel({
                arabic: "يَخْشَى أَلِيمَ عَذَابِك",
                translit: "Yakhshā alīma ‛adhābik",
                translation: "fearing Your painful punishment,",
              }),
              new QasidaEntryModel({
                arabic: "وَيَرْتَجِي لِثَوَابِك",
                translit: "Wayartajī lithawābik",
                translation: "and hoping for Your reward,",
              }),
              new QasidaEntryModel({
                arabic: "وَغَيْثُ رَحْمَتِك هَطَّالْ",
                translit: "Waghaythu raḥmatik haṭṭāl",
                translation: "for the rain of Your mercy pours down.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَقَدْ أَتَاكَ بِعُذْرِه",
                translit: "Waqad atāka bi‛udhrih",
                translation: "He has come to You with his excuse,",
              }),
              new QasidaEntryModel({
                arabic: "وَبِانْكِسَارِه وَفَقْرِه",
                translit: "Wabinkisārih wafaqrih",
                translation: "and with his brokenness and his poverty,",
              }),
              new QasidaEntryModel({
                arabic: "فَاهْزِمْ بِيُسْرِكَ عُسْرِه",
                translit: "Fahzim biyusrika ‛usrih",
                translation: "so defeat his hardship with Your ease,",
              }),
              new QasidaEntryModel({
                arabic: "بِمَحْضِ جُودِك وَالْاِفْضَال",
                translit: "Bimaḥḍi jūdik walifḍāl",
                translation: "by Your pure generosity and bounty.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَامْنُن عَلَيْهِ بِتَوْبَهْ",
                translit: "Wamnun ‛alayhi bitawbah",
                translation: "And bestow upon him repentance",
              }),
              new QasidaEntryModel({
                arabic: "تَغْسِلْهُ مِنْ كُلِّ حَوْبَهْ",
                translit: "Taghsilhu min kulli ḥawbah",
                translation: "that washes him from every sin,",
              }),
              new QasidaEntryModel({
                arabic: "وَاعْصِمْهُ مِنْ شَرِّ أَوبَهْ",
                translit: "Wa‛ṣimhu min sharri awbah",
                translation: "and protect him from the evil of returning",
              }),
              new QasidaEntryModel({
                arabic: "لِكُلِّ مَا عَنْهُ قَدْ حَالْ",
                translit: "Likulli mā ‛anhu qad ḥāl",
                translation: "to all that has turned him away.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "فَأَنْتَ مَوْلَى الْمَوَالِي",
                translit: "Fa’anta mawlal mawālī",
                translation: "For You are the Master of masters,",
              }),
              new QasidaEntryModel({
                arabic: "الْمُنْفَرِد بِالْكَمَالِ",
                translit: "Al-munfarid bilkamāl",
                translation: "the One alone in perfection,",
              }),
              new QasidaEntryModel({
                arabic: "وَبِالْعُلَا وَالتَّعَالِي",
                translit: "Wabil‛ulā watta‛ālī",
                translation: "and in loftiness and exaltation;",
              }),
              new QasidaEntryModel({
                arabic: "عَلَوْتَ عَنْ ضَرْبِ الْاَمْثَال",
                translit: "‛Alawta ‛an ḍarbil amthāl",
                translation: "You are far above any similitude being drawn.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "جُودُك وَفَضْلُك وَبِرُّك",
                translit: "Jūduk wafaḍluk wabirruk",
                translation: "Your generosity, Your grace and Your kindness",
              }),
              new QasidaEntryModel({
                arabic: "يُرْجَى وَبَطْشُك وَقَهْرُك",
                translit: "Yurjā wabaṭshuk waqahruk",
                translation:
                  "are what is hoped for; and Your might and Your overpowering",
              }),
              new QasidaEntryModel({
                arabic: "يُخْشَى وَذِكْرُك وَشُكْرُك",
                translit: "Yukhshā wadhikruk washukruk",
                translation:
                  "are what is feared; and remembering You and thanking You",
              }),
              new QasidaEntryModel({
                arabic: "لَازِم وَحَمْدُك وَالْإِجْلَال",
                translit: "Lāzim waḥamduk wal’ijlāl",
                translation:
                  "are binding, as are praising You and revering You.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا رَبِّ أَنْتَ نَصِيرِي",
                translit: "Yā rabbi anta naṣīrī",
                translation: "O my Lord, You are my Helper,",
              }),
              new QasidaEntryModel({
                arabic: "فَلَقِّنِي كُلَّ خَيرِ",
                translit: "Falaqqinī kulla khayr",
                translation: "so grant me every good,",
              }),
              new QasidaEntryModel({
                arabic: "وَاجْعَلْ جِنَانَك مَصِيرِي",
                translit: "Waj‛al jinānak maṣīrī",
                translation: "and make Your Gardens my destination,",
              }),
              new QasidaEntryModel({
                arabic: "وَاخْتِمْ بِالْإِيمَانِ الْآجَالْ",
                translit: "Wakhtim bil’īmānil ājāl",
                translation: "and seal the end of my days with faith.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَصَلِّ فِي كُلِّ حَالَهْ",
                translit: "Waṣalli fī kulli ḥālah",
                translation: "And send blessings, in every state,",
              }),
              new QasidaEntryModel({
                arabic: "عَلَى مُزِيلِ الضَّلَالَهْ",
                translit: "‛Alā muzīliḍ ḍalālah",
                translation: "upon the remover of misguidance,",
              }),
              new QasidaEntryModel({
                arabic: "مَنْ كَلَّمَتهُ الْغَزَالَهْ",
                translit: "Man kallamathul ghazālah",
                translation: "to whom the gazelle spoke,",
              }),
              new QasidaEntryModel({
                arabic: "مُحَمَّدِ الْهَادِي الدَّالْ",
                translit: "Muḥammadil hādid dāl",
                translation: "Muḥammad, the Guide who directs to good.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَالْحَمْدُ لِلَّهِ شُكْرا",
                translit: "Walḥamdu lillāhi shukrā",
                translation: "And praise be to Allah in gratitude",
              }),
              new QasidaEntryModel({
                arabic: "عَلَى نِعَم مِنْهُ تَتْرَى",
                translit: "‛Alā ni‛am minhu tatrā",
                translation: "for favours from Him in unbroken succession;",
              }),
              new QasidaEntryModel({
                arabic: "نَحْمَدهُ سِرًّا وَجَهْرا",
                translit: "Naḥmaduhu sirran wajahrā",
                translation: "we praise Him in secret and aloud,",
              }),
              new QasidaEntryModel({
                arabic: "وَبِالْغَدَايَا وَالْآصَالْ",
                translit: "Wabilghadāyā wal’āṣāl",
                translation: "in the mornings and the evenings.",
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
                translit: "Yā rabbanā yā karīm",
                translation: "O our Lord, O Generous One,",
              }),
              new QasidaEntryModel({
                arabic: "يَا رَبَّنَا يَا رَحِيم",
                translit: "Yā rabbanā yā raḥīm",
                translation: "O our Lord, O Merciful One,",
              }),
              new QasidaEntryModel({
                arabic: "أَنْتَ الْجَوَادُ الْحَلِيم",
                translit: "Antal jawādul ḥalīm",
                translation: "You are the Bountiful, the Forbearing,",
              }),
              new QasidaEntryModel({
                arabic: "وَأَنْتَ نِعمَ الْمُعِين",
                translit: "Wa’anta ni‛mal mu‛īn",
                translation: "and You are the best Helper.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَلَيْسَ نَرْجُو سِوَاك",
                translit: "Walaysa narjū siwāk",
                translation: "We hope for none but You,",
              }),
              new QasidaEntryModel({
                arabic: "فَادْرِك إِلَهِي دَرَاكْ",
                translit: "Fadrik ilāhī darāk",
                translation: "so overtake us, my God, with Your rescue",
              }),
              new QasidaEntryModel({
                arabic: "قَبْلَ الفَنَا وَالْهَلَاك",
                translit: "Qablal fanā walhalāk",
                translation: "before destruction and perishing",
              }),
              new QasidaEntryModel({
                arabic: "يَعُمُّ دُنْيَا وَدِين",
                translit: "Ya‛ummu dunyā wadīn",
                translation:
                  "that would overwhelm both worldly life and faith.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَمَا لَنَا رَبَّنَا",
                translit: "Wamā lanā rabbanā",
                translation: "We have no one, our Lord,",
              }),
              new QasidaEntryModel({
                arabic: "سِوَاكَ يَا حَسبَنَا",
                translit: "Siwāka yā ḥasbanā",
                translation: "but You, O our Sufficiency,",
              }),
              new QasidaEntryModel({
                arabic: "يَا ذَا الْعُلَا وَالْغِنَى",
                translit: "Yā dhal ‛ulā walghinā",
                translation: "O Possessor of loftiness and richness,",
              }),
              new QasidaEntryModel({
                arabic: "وَيَا قَوِي يَا مَتِينْ",
                translit: "Wayā qawī yā matīn",
                translation: "and O Strong, O Firm.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "نَسْأَلك وَالِي يُقِيم",
                translit: "Nas’aluk wālī yuqīm",
                translation: "We ask You for a ruler who establishes",
              }),
              new QasidaEntryModel({
                arabic: "اَلْعَدْلَ كَيْ نَسْتَقِيم",
                translit: "Al-‛adla kay nastaqīm",
                translation: "justice, so that we may be upright",
              }),
              new QasidaEntryModel({
                arabic: "عَلَى هُدَاكَ الْقَوِيم",
                translit: "‛Alā hudākal qawīm",
                translation: "upon Your straight guidance,",
              }),
              new QasidaEntryModel({
                arabic: "وَلَا نُطِيعُ اللَّعِين",
                translit: "Walā nuṭī‛ul la‛īn",
                translation: "and not obey the accursed.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا رَبَّنَا يَا مُجِيبْ",
                translit: "Yā rabbanā yā mujīb",
                translation: "O our Lord, O Responsive One,",
              }),
              new QasidaEntryModel({
                arabic: "أَنْتَ السَّمِيعُ الْقَرِيب",
                translit: "Antas samī‛ul qarīb",
                translation: "You are the All-Hearing, the Near,",
              }),
              new QasidaEntryModel({
                arabic: "ضَاقَ الْوَسِيعُ الرَّحِيب",
                translit: "Ḍāqal wasī‛ur raḥīb",
                translation: "the wide and spacious has grown narrow,",
              }),
              new QasidaEntryModel({
                arabic: "فَانْظُرْ إِلَى الْمُؤْمِنِين",
                translit: "Fanẓur ilal mu’minīn",
                translation: "so look upon the believers",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "نَظرَه تُزِيلُ الْعَنَا",
                translit: "Naẓrah tuzīlul ‛anā",
                translation: "with a glance that removes hardship",
              }),
              new QasidaEntryModel({
                arabic: "عَنَّا وَتُدْنِي الْمُنَى",
                translit: "‛Annā watudnil munā",
                translation: "from us, and brings our hopes near",
              }),
              new QasidaEntryModel({
                arabic: "مِنَّا وَكُلَّ الْهَنَا",
                translit: "Minnā wakullal hanā",
                translation: "to us, and all happiness,",
              }),
              new QasidaEntryModel({
                arabic: "نُعْطَاه فِي كُلِّ حِين",
                translit: "Nu‛ṭāh fī kulli ḥīn",
                translation: "to be given to us at every time.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "سَالَكْ بِجَاهِ الْجُدُود",
                translit: "Sālak bijāhil judūd",
                translation: "I ask You by the standing of the forefathers",
              }),
              new QasidaEntryModel({
                arabic: "وَالِي يُقِيمُ الْحُدُود",
                translit: "Wālī yuqīmul ḥudūd",
                translation: "for a ruler who upholds the legal limits",
              }),
              new QasidaEntryModel({
                arabic: "عَنَّا وَيَكْفِي الْحَسُود",
                translit: "‛Annā wayakfil ḥasūd",
                translation: "on our behalf, and spares us the envious,",
              }),
              new QasidaEntryModel({
                arabic: "وَيَدْفَعُ الظَّالِمِين",
                translit: "Wayadfa‛uẓ ẓālimīn",
                translation: "and repels the wrongdoers,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يُزِيلُ لِلْمُنْكَرَات",
                translit: "Yuzīlu lilmunkarāt",
                translation: "who removes evils,",
              }),
              new QasidaEntryModel({
                arabic: "يُقِيمُ لِلصَّلَوَات",
                translit: "Yuqīmu liṣṣalawāt",
                translation: "establishes the prayers,",
              }),
              new QasidaEntryModel({
                arabic: "يَأْمُرُ بِالصَّالِحَات",
                translit: "Ya’muru biṣṣāliḥāt",
                translation: "commands good deeds,",
              }),
              new QasidaEntryModel({
                arabic: "مُحِبٌّ لِلصَّالِحِين",
                translit: "Muḥibbun liṣṣāliḥīn",
                translation: "a lover of the righteous,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يُزِيحُ كُلَّ الْحَرَام",
                translit: "Yuzīḥu kullal ḥarām",
                translation: "who removes all that is forbidden,",
              }),
              new QasidaEntryModel({
                arabic: "يَقْهَرُ كُلَّ الطَّغَامْ",
                translit: "Yaqharu kullaṭ ṭaghām",
                translation: "subdues all the base rabble,",
              }),
              new QasidaEntryModel({
                arabic: "يَعدِلُ بَيْنَ الْأَنَام",
                translit: "Ya‛dilu baynal anām",
                translation: "judges justly among mankind,",
              }),
              new QasidaEntryModel({
                arabic: "وَيُؤْمِنُ الْخَائِفِين",
                translit: "Wayu’minul khā’ifīn",
                translation: "and gives security to the fearful.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "رَبِّ اسْقِنَا غَيْث عَام",
                translit: "Rabbi sqinā ghayth ‛ām",
                translation: "My Lord, give us widespread rain,",
              }),
              new QasidaEntryModel({
                arabic: "نَافِع مُبَارَك دَوَام",
                translit: "Nāfi‛ mubārak dawām",
                translation: "beneficial, blessed, lasting,",
              }),
              new QasidaEntryModel({
                arabic: "يَدُومُ فِي كُلِّ عَام",
                translit: "Yadūmu fī kulli ‛ām",
                translation: "continuing every year",
              }),
              new QasidaEntryModel({
                arabic: "عَلَى مَمَرِّ السِّنِين",
                translit: "‛Alā mamarris sinīn",
                translation: "through the passing of the years.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "رَبِّ احْيِنَا شَاكِرِين",
                translit: "Rabbi ḥyinā shākirīn",
                translation: "My Lord, grant us life as thankful ones,",
              }),
              new QasidaEntryModel({
                arabic: "وَتَوَفَّنَا مُسْلِمِين",
                translit: "Watawaffanā muslimīn",
                translation: "and take us in death as Muslims,",
              }),
              new QasidaEntryModel({
                arabic: "نُبْعَث مِنَ الْآمِنِين",
                translit: "Nub‛ath minal āminīn",
                translation: "to be raised among those who are safe,",
              }),
              new QasidaEntryModel({
                arabic: "فِي زُمْرَةِ السَّابِقِين",
                translit: "Fī zumratis sābiqīn",
                translation: "in the company of the foremost.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِجَاهِ طَهَ الرَّسُول",
                translit: "Bijāhi Ṭāhar rasūl",
                translation: "By the standing of Ṭāhā, the Messenger,",
              }),
              new QasidaEntryModel({
                arabic: "جُدْ رَبَّنَا بِالْقَبُول",
                translit: "Jud rabbanā bilqabūl",
                translation: "be generous, our Lord, with acceptance,",
              }),
              new QasidaEntryModel({
                arabic: "وَهَب لَنَا كُلَّ سُول",
                translit: "Wahab lanā kulla sūl",
                translation: "and grant us everything we ask,",
              }),
              new QasidaEntryModel({
                arabic: "رَبِّ اسْتَجِبْ لِي أَمِين",
                translit: "Rabbi stajib lī, āmīn",
                translation: "my Lord, answer me. Āmīn.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "عَطَاكَ رَبِّي جَزِيل",
                translit: "‛Aṭāka rabbī jazīl",
                translation: "Your gift, my Lord, is abundant,",
              }),
              new QasidaEntryModel({
                arabic: "وَكُلُّ فِعْلِك جَمِيل",
                translit: "Wakullu fi‛lik jamīl",
                translation: "and all Your doing is beautiful,",
              }),
              new QasidaEntryModel({
                arabic: "وَفِيك أَمَلنَا طَوِيل",
                translit: "Wafīk amalnā ṭawīl",
                translation: "and our hope in You is far-reaching,",
              }),
              new QasidaEntryModel({
                arabic: "فَجُدْ عَلَى الطَّامِعِين",
                translit: "Fajud ‛alaṭ ṭāmi‛īn",
                translation:
                  "so be generous to those who yearn for Your bounty.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا رَبِّ ضَاقَ الْخِنَاق",
                translit: "Yā rabbi ḍāqal khināq",
                translation: "O my Lord, the strangling grip has tightened",
              }),
              new QasidaEntryModel({
                arabic: "مِنْ فِعْلِ مَا لَا يُطَاق",
                translit: "Min fi‛li mā lā yuṭāq",
                translation: "from doing what cannot be borne,",
              }),
              new QasidaEntryModel({
                arabic: "فَامْنُنْ بِفَكِّ الْغَلَاقْ",
                translit: "Famnun bifakkil ghalāq",
                translation: "so bestow the loosing of the bond",
              }),
              new QasidaEntryModel({
                arabic: "لِمَنْ بِذَنْبِه رَهِين",
                translit: "Liman bidhanbih rahīn",
                translation: "for the one held hostage by his sin,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَاغْفِرْ لِكُلِّ الذُّنُوب",
                translit: "Waghfir likullidh dhunūb",
                translation: "and forgive all sins,",
              }),
              new QasidaEntryModel({
                arabic: "وَاسْتُرْ لِكُلِّ الْعُيُوب",
                translit: "Wastur likullil ‛uyūb",
                translation: "and cover all faults,",
              }),
              new QasidaEntryModel({
                arabic: "وَاكْشِفْ لِكُلِّ الْكُرُوب",
                translit: "Wakshif likullil kurūb",
                translation: "and remove all distresses,",
              }),
              new QasidaEntryModel({
                arabic: "وَاكْفِ أَذَى الْمُؤْذِيين",
                translit: "Wakfi adhal mu’dhiyīn",
                translation: "and ward off the harm of those who cause harm,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَاخْتِمْ بِأَحْسَن خِتَام",
                translit: "Wakhtim bi’aḥsan khitām",
                translation: "and seal our lives with the best ending",
              }),
              new QasidaEntryModel({
                arabic: "إِذَا دَنَا الْإِنصِرَامْ",
                translit: "Idhā danal inṣirām",
                translation: "when the ending draws near,",
              }),
              new QasidaEntryModel({
                arabic: "وَحَانَ حِينُ الحِمَام",
                translit: "Waḥāna ḥīnul ḥimām",
                translation: "and the hour of death arrives,",
              }),
              new QasidaEntryModel({
                arabic: "وَزَادَ رَشحُ الْجَبِين",
                translit: "Wazāda rashḥul jabīn",
                translation: "and the sweat of the brow increases.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "ثُمَّ الصَّلَاة وَالسَّلَام",
                translit: "Thummaṣ ṣalāt wassalām",
                translation: "Then blessings and peace",
              }),
              new QasidaEntryModel({
                arabic: "عَلَى شَفِيعِ الْأَنَام",
                translit: "‛Alā shafī‛il anām",
                translation: "upon the intercessor for mankind,",
              }),
              new QasidaEntryModel({
                arabic: "وَالْآلِ نِعمَ الْكِرَام",
                translit: "Wal’āli ni‛mal kirām",
                translation: "and the family, how excellent the noble ones,",
              }),
              new QasidaEntryModel({
                arabic: "وَالصَّحْبِ وَالتَّابِعِين",
                translit: "Waṣṣaḥbi wattābi‛īn",
                translation: "and the Companions and the Followers.",
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
                translit: "Mashāyikhal ḥaḍrah",
                translation: "The shaykhs of the gathering,",
              }),
              new QasidaEntryModel({
                arabic: "عَسَى لَنَا نَظْرَة",
                translit: "‛Asā lanā naẓrah",
                translation: "perhaps a glance for us,",
              }),
              new QasidaEntryModel({
                arabic: "بِجَاهِ أَهْلِ اللَّه",
                translit: "Bijāhi ahlillāh",
                translation: "by the standing of the people of Allah,",
              }),
              new QasidaEntryModel({
                arabic: "يَمْحُو الذُّنُوبَ اللَّه",
                translit: "Yamḥudh dhunūballāh",
                translation: "Allah wipes away the sins.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "نَبْدِي بِحَمْدِ اللَّه",
                translit: "Nabdī biḥamdillāh",
                translation: "We begin with the praise of Allah,",
              }),
              new QasidaEntryModel({
                arabic: "وَنَسْتَمِد بِاللَّه",
                translit: "Wanastamid billāh",
                translation: "and we seek support from Allah,",
              }),
              new QasidaEntryModel({
                arabic: "بِجَاهِ أَهْلِ اللَّه",
                translit: "Bijāhi ahlillāh",
                translation: "by the standing of the people of Allah,",
              }),
              new QasidaEntryModel({
                arabic: "نَفُزْ بِحَوْلِ اللَّه",
                translit: "Nafuz biḥawlillāh",
                translation: "we succeed by the power of Allah,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بِفَضْلِهِ الشَّامِل",
                translit: "Bifaḍlihish shāmil",
                translation: "by His all-encompassing grace.",
              }),
              new QasidaEntryModel({
                arabic: "يُصْلِح لَنَا الْعَاجِل",
                translit: "Yuṣliḥ lanal ‛ājil",
                translation: "He sets right for us the present,",
              }),
              new QasidaEntryModel({
                arabic: "فِي الْحَالِ وَالْآجِل",
                translit: "Fil ḥāli wal’ājil",
                translation: "now and in the time to come,",
              }),
              new QasidaEntryModel({
                arabic: "وَالْكُلُّ فَضْلُ اللَّه",
                translit: "Walkullu faḍlullāh",
                translation: "and all is the bounty of Allah.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَبَعْدَ جَاءَ النَّظْم",
                translit: "Waba‛da jā’an naẓm",
                translation: "And after this came the verse",
              }),
              new QasidaEntryModel({
                arabic: "مِنَ الشَّرِيفِ الضَّخْم",
                translit: "Minash sharīfiḍ ḍakhm",
                translation: "from the noble, the eminent,",
              }),
              new QasidaEntryModel({
                arabic: "أَعْنِي الْجَمَالَ الْفَخْم",
                translit: "A‛nīl Jamālal fakhm",
                translation: "I mean al-Jamāl, the grand,",
              }),
              new QasidaEntryModel({
                arabic: "حَبِيبَنَا فِي اللَّه",
                translit: "Ḥabībanā fillāh",
                translation: "our beloved in Allah,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "ابن طَالِب الْمحْضَار",
                translit: "Ibn Ṭālibil Miḥḍār",
                translation: "son of Ṭālib al-Miḥḍār,",
              }),
              new QasidaEntryModel({
                arabic: "الْمُخْبِت الصَّبَّار",
                translit: "Al-mukhbitiṣ ṣabbār",
                translation: "the humble, the very patient,",
              }),
              new QasidaEntryModel({
                arabic: "مُطَهِّر الْأَسْرَار",
                translit: "Muṭahhiril asrār",
                translation: "purifier of inner secrets,",
              }),
              new QasidaEntryModel({
                arabic: "سَلِيلِ أَهْلِ اللَّه",
                translit: "Salīli ahlillāh",
                translation: "descendant of the people of Allah,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "الْقَادَةِ الْقُدْوَة",
                translit: "Al-qādatil qudwah",
                translation: "the leaders, the exemplars,",
              }),
              new QasidaEntryModel({
                arabic: "السَّادَةِ الصَّفْوَة",
                translit: "As-sādatiṣ ṣafwah",
                translation: "the masters, the elect,",
              }),
              new QasidaEntryModel({
                arabic: "ذِي مَا لَهُم شَهْوَة",
                translit: "Dhī mā lahum shahwah",
                translation: "who have no desire",
              }),
              new QasidaEntryModel({
                arabic: "إِلَّا لِذِكْرِ اللَّه",
                translit: "Illā lidhikrillāh",
                translation: "except for the remembrance of Allah,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "مِثْلِ الْإِمَامِ الْفَخْر",
                translit: "Mithlil imāmil fakhr",
                translation: "like the Imām, al-Fakhr,",
              }),
              new QasidaEntryModel({
                arabic: "أَعْنِي رَفِيعَ الْقَدْر",
                translit: "A‛nī rafī‛al qadr",
                translation: "I mean him of lofty rank,",
              }),
              new QasidaEntryModel({
                arabic: "كَالشَّمْسِ لَا كَالْبَدْر",
                translit: "Kashshamsi lā kalbadr",
                translation: "like the sun, not like the full moon,",
              }),
              new QasidaEntryModel({
                arabic: "يَاضِي لِخَلْقِ اللَّه",
                translit: "Yāḍī likhalqillāh",
                translation: "who shines for the creation of Allah,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "بُو بَكر بِن سَالِم",
                translit: "Bū Bakr bin Sālim",
                translation: "Abū Bakr bin Sālim.",
              }),
              new QasidaEntryModel({
                arabic: "هُوَ حَتْف لِلظَّالِم",
                translit: "Huwa ḥatf liẓẓālim",
                translation: "He is death to the wrongdoer,",
              }),
              new QasidaEntryModel({
                arabic: "الْفَاجِر الْغَاشِم",
                translit: "Al-fājiril ghāshim",
                translation: "the wicked, the oppressive,",
              }),
              new QasidaEntryModel({
                arabic: "يَهْلِك بِأَمْرِ اللَّه",
                translit: "Yahlik bi’amrillāh",
                translation: "who perishes by the command of Allah.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَيُنْجِي الْغَارِق",
                translit: "Wayunjil ghāriq",
                translation: "And he rescues the drowning one,",
              }),
              new QasidaEntryModel({
                arabic: "إِنْ كَانَ بِهِ وَاثِق",
                translit: "In kāna bihi wāthiq",
                translation: "if he has trust in him,",
              }),
              new QasidaEntryModel({
                arabic: "يُلْحِقُهُ بِالسَّابِق",
                translit: "Yulḥiquhu bissābiq",
                translation: "and joins him to the foremost.",
              }),
              new QasidaEntryModel({
                arabic: "هَذَا بِفَضْلِ اللَّه",
                translit: "Hādhā bifaḍlillāh",
                translation: "This is by the grace of Allah.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "لَما قَرَأهُ الْعَبْد",
                translit: "Lamā qara’ahul ‛abd",
                translation: "When the servant read it,",
              }),
              new QasidaEntryModel({
                arabic: "فَاحَ الشَّذَى مِنْ نَجْد",
                translit: "Fāḥash shadhā min Najd",
                translation: "the fragrance spread from Najd,",
              }),
              new QasidaEntryModel({
                arabic: "وَقَالَ: لَعَلَّ السَّعْد",
                translit: "Waqāla: la‛allas sa‛d",
                translation: "and he said: perhaps good fortune",
              }),
              new QasidaEntryModel({
                arabic: "يَأْتِي بِجُودِ اللَّه",
                translit: "Ya’tī bijūdillāh",
                translation: "will come by the generosity of Allah.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَالْعَبْد ذَا الْجَانِي",
                translit: "Wal‛abd dhal jānī",
                translation: "And this servant, the offender,",
              }),
              new QasidaEntryModel({
                arabic: "كَثِيرُ عِصْيَانِي",
                translit: "Kathīru ‛iṣyānī",
                translation: "great is his disobedience,",
              }),
              new QasidaEntryModel({
                arabic: "كَثِيرُ طُغْيَانِي",
                translit: "Kathīru ṭughyānī",
                translation: "great is his transgression,",
              }),
              new QasidaEntryModel({
                arabic: "كَمْ خَالَف أَمْرَ اللَّه",
                translit: "Kam khālaf amrallāh",
                translation: "how often he has defied the command of Allah,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "لِأَنَّهُ حَائِرْ",
                translit: "Li’annahu ḥā’ir",
                translation: "because he is bewildered,",
              }),
              new QasidaEntryModel({
                arabic: "وَقَلْبَهُ طَائِرْ",
                translit: "Waqalbahu ṭā’ir",
                translation: "and his heart is fluttering,",
              }),
              new QasidaEntryModel({
                arabic: "وَلَا لَهُ نَاصِرْ",
                translit: "Walā lahu nāṣir",
                translation: "and he has no helper",
              }),
              new QasidaEntryModel({
                arabic: "إِلَّا عِبَادَ اللَّه",
                translit: "Illā ‛ibādallāh",
                translation: "except the servants of Allah.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "عَسَى بِحَقِّ الْقَوْم",
                translit: "‛Asā biḥaqqil qawm",
                translation: "Perhaps, by the right of these people,",
              }),
              new QasidaEntryModel({
                arabic: "نَلْحَق بِهِم فِي الْعوم",
                translit: "Nalḥaq bihim fil ‛awm",
                translation: "we will catch up with them in the swimming,",
              }),
              new QasidaEntryModel({
                arabic: "وَمَا جَرَى مِنْ لَوْم",
                translit: "Wamā jarā min lawm",
                translation: "and whatever blame has occurred",
              }),
              new QasidaEntryModel({
                arabic: "يُغْفَر بِجَاهِ اللَّه",
                translit: "Yughfar bijāhillāh",
                translation: "will be forgiven by the standing with Allah.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا سَادَتِي غَارَهْ",
                translit: "Yā sādatī ghārah",
                translation: "O my masters, succour,",
              }),
              new QasidaEntryModel({
                arabic: "فِي الْحَال بَدَّارَهْ",
                translit: "Fil ḥāl baddārah",
                translation: "at once, in haste,",
              }),
              new QasidaEntryModel({
                arabic: "مَا فِي الْكَبِد مَارَهْ",
                translit: "Mā fil kabid mārah",
                translation: "there is no strength left in my liver.",
              }),
              new QasidaEntryModel({
                arabic: "اللَّه اللَّه اللَّه",
                translit: "Allāh Allāh Allāh",
                translation: "Allah, Allah, Allah.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "قُومُوا مَعِي قَومَه",
                translit: "Qūmū ma‛ī qawmah",
                translation: "Rise with me, rise up,",
              }),
              new QasidaEntryModel({
                arabic: "وَاقْضُوا الَّذِي رُومَه",
                translit: "Waqḍul ladhī rūmah",
                translation: "and fulfil what I seek,",
              }),
              new QasidaEntryModel({
                arabic: "كُلّه مَدَى نَومَه",
                translit: "Kulluh madā nawmah",
                translation: "all of it, within the span of a nap,",
              }),
              new QasidaEntryModel({
                arabic: "يَجِي بِعُونِ اللَّه",
                translit: "Yajī bi‛ūnillāh",
                translation: "it will come, by the help of Allah.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "كَفَى كَفَى مَا بِي",
                translit: "Kafā kafā mā bī",
                translation: "Enough, enough of what afflicts me,",
              }),
              new QasidaEntryModel({
                arabic: "دَاوُوا لِي أَصْوَابِي",
                translit: "Dāwū lī aṣwābī",
                translation: "heal my afflictions",
              }),
              new QasidaEntryModel({
                arabic: "فِي الْحَال يَا اَحْبَابِي",
                translit: "Fil ḥāl yā aḥbābī",
                translation: "at once, O my beloved ones,",
              }),
              new QasidaEntryModel({
                arabic: "فَإِنَّكُم بِاللَّه",
                translit: "Fa’innakum billāh",
                translation: "for you, through Allah,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "كُونُوا لَنَا نُصْرَهْ",
                translit: "Kūnū lanā nuṣrah",
                translation: "be a help for us",
              }),
              new QasidaEntryModel({
                arabic: "بِالسَّيف وَالْقُدْرَهْ",
                translit: "Bissayf walqudrah",
                translation: "with the sword and with power,",
              }),
              new QasidaEntryModel({
                arabic: "وَكُلّ مَا نَكَرَهْ",
                translit: "Wakull mā nakarah",
                translation: "and everything objectionable,",
              }),
              new QasidaEntryModel({
                arabic: "حُوشُوه شَيْ لِلَّه",
                translit: "Ḥūshūh shay lillāh",
                translation: "drive it away, for Allah’s sake.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "هَيَّا بِكُم هَيَّا",
                translit: "Hayyā bikum hayyā",
                translation: "Onward with you, onward,",
              }),
              new QasidaEntryModel({
                arabic: "لِلدِّينِ وَالدُّنْيَا",
                translit: "Liddīni waddunyā",
                translation: "for the faith and the world,",
              }),
              new QasidaEntryModel({
                arabic: "حَيَّا بِكُم حَيَّا",
                translit: "Ḥayyā bikum ḥayyā",
                translation: "come, hasten, come,",
              }),
              new QasidaEntryModel({
                arabic: "حَيَّا بِنَصْرِ اللَّه",
                translit: "Ḥayyā binaṣrillāh",
                translation: "hasten with the help of Allah.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَقْدُمْهُ جِبْرَائِيل",
                translit: "Yaqdumhu Jibrā’īl",
                translation: "Jibrā’īl goes before it,",
              }),
              new QasidaEntryModel({
                arabic: "أَيْضًا وَمِيكَائِيل",
                translit: "Ayḍan wamīkā’īl",
                translation: "and likewise Mīkā’īl,",
              }),
              new QasidaEntryModel({
                arabic: "فَإِنَّهُ قَدْ قِيل",
                translit: "Fa’innahu qad qīl",
                translation: "for it has been said,",
              }),
              new QasidaEntryModel({
                arabic: "فِي الْوَقْت: جَار اللَّه",
                translit: "Fil waqt: jārullāh",
                translation: "at this time: the neighbour of Allah.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "وَالْمُصْطَفَى الطَّاهِرْ",
                translit: "Walmuṣṭafaṭ ṭāhir",
                translation: "And the Chosen One, the pure,",
              }),
              new QasidaEntryModel({
                arabic: "وَالْمُرْتَضَى النَّاصِرْ",
                translit: "Walmurtaḍan nāṣir",
                translation: "and al-Murtaḍā, the helper,",
              }),
              new QasidaEntryModel({
                arabic: "وَابْنَاهُ وَالْبَاقِرْ",
                translit: "Wabnāhu walbāqir",
                translation: "and his two sons, and al-Bāqir,",
              }),
              new QasidaEntryModel({
                arabic: "وَالْكُلُّ حِزْبُ اللَّه",
                translit: "Walkullu ḥizbullāh",
                translation: "and all are the party of Allah.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "حَسْبِي بِهِمْ حَسْبِي",
                translit: "Ḥasbī bihim ḥasbī",
                translation: "They are enough for me, enough for me,",
              }),
              new QasidaEntryModel({
                arabic: "هُمْ صَفْوَةُ الرَّبِّ",
                translit: "Hum ṣafwatur rabb",
                translation: "they are the chosen ones of the Lord",
              }),
              new QasidaEntryModel({
                arabic: "فِي الْفَضْلِ وَالْقُرْبِ",
                translit: "Fil faḍli walqurb",
                translation: "in merit and in nearness,",
              }),
              new QasidaEntryModel({
                arabic: "وَالْكُلُّ شَيْ لِلَّه",
                translit: "Walkullu shay lillāh",
                translation: "and all of it is for Allah’s sake.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "صَلِّ وَسَلِّمْ دُوب",
                translit: "Ṣalli wasallim dūb",
                translation: "Send blessings and peace, constantly,",
              }),
              new QasidaEntryModel({
                arabic: "عَلَى النَّبِي الْمَحْبُوب",
                translit: "‛Alan nabiyyil maḥbūb",
                translation: "upon the beloved Prophet,",
              }),
              new QasidaEntryModel({
                arabic: "بِهِ يَحْصُلُ الْمَطْلُوب",
                translit: "Bihi yaḥṣulul maṭlūb",
                translation: "through whom what is sought is obtained,",
              }),
              new QasidaEntryModel({
                arabic: "أَجْمَعْ بِفَضْلِ اللَّه",
                translit: "Ajma‛ bifaḍlillāh",
                translation: "all of it, by the grace of Allah.",
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
                translit: "Yā Allāh bihā yā Allāh bihā",
                translation: "O Allah, with it, O Allah, with it,",
              }),
              new QasidaEntryModel({
                arabic: "يَا اللَّه بِحُسْنِ الْخَاتِمَهْ",
                translit: "Yā Allāh biḥusnil khātimah",
                translation: "O Allah, a good ending,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا اهْلِ الْعُقُولِ السَّالِمَهْ",
                translit: "Yā ahlil ‛uqūlis sālimah",
                translation: "O people of sound minds,",
              }),
              new QasidaEntryModel({
                arabic: "وَاهْلِ الْقُلُوبِ الْعَالِمَهْ",
                translit: "Wa’ahlil qulūbil ‛ālimah",
                translation: "and people of knowing hearts,",
              }),
              new QasidaEntryModel({
                arabic: "قُولُوا بِهِمَّهْ عَازِمَهْ",
                translit: "Qūlū bihimmah ‛āzimah",
                translation: "say it with firm resolve",
              }),
              new QasidaEntryModel({
                arabic: "وَبِصِدْقِ نِيَّهْ جَازِمَهْ",
                translit: "Wabiṣidqi niyyah jāzimah",
                translation: "and with truthfulness of unwavering intention,",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "فَهِيَ إِلَيْهَا الْمُنْتَهَى",
                translit: "Fahiya ilayhal muntahā",
                translation: "for it is the final destination;",
              }),
              new QasidaEntryModel({
                arabic: "قَدْ قَالَ أَرْبَابُ النُّهَى",
                translit: "Qad qāla arbābun nuhā",
                translation: "so have said the people of intellect.",
              }),
              new QasidaEntryModel({
                arabic: "يَا اللَّه بِهَا يَا اللَّه بِهَا",
                translit: "Yā Allāh bihā yā Allāh bihā",
                translation: "O Allah, with it, O Allah, with it,",
              }),
              new QasidaEntryModel({
                arabic: "دَعْوَه عَجِيبَه تَامَّهْ",
                translit: "Da‛wah ‛ajībah tāmmah",
                translation: "a wondrous, complete supplication.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا رَبَّنَا يَا رَبَّنَا",
                translit: "Yā rabbanā yā rabbanā",
                translation: "O our Lord, O our Lord,",
              }),
              new QasidaEntryModel({
                arabic: "اُلْطُفْ بِنَا وَاغْفِرْ لَنَا",
                translit: "Ulṭuf binā waghfir lanā",
                translation: "be gentle with us and forgive us,",
              }),
              new QasidaEntryModel({
                arabic: "وَاخْتِمْ بِخَيْرٍ إِنْ دَنَا",
                translit: "Wakhtim bikhayrin in danā",
                translation:
                  "and seal our lives with good, when there draws near",
              }),
              new QasidaEntryModel({
                arabic: "إِبَّانُ يَوْمِ الطَّامَّهْ",
                translit: "Ibbānu yawmiṭ ṭāmmah",
                translation:
                  "the time of the Day of the Overwhelming Calamity.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "فَالْمَوْتُ آتٍ عَنْ قَرِيب",
                translit: "Falmawtu ātin ‛an qarīb",
                translation: "For death is coming before long,",
              }),
              new QasidaEntryModel({
                arabic: "كُلٌّ لَهُ مِنْهُ نَصِيب",
                translit: "Kullun lahu minhu naṣīb",
                translation: "each one has a share of it,",
              }),
              new QasidaEntryModel({
                arabic: "مَنْ كَانَ دَانٍ أَوْ نَسِيب",
                translit: "Man kāna dānin aw nasīb",
                translation: "whoever was near or a kinsman,",
              }),
              new QasidaEntryModel({
                arabic: "فَهُوَ مُصِيبَهْ عَامَّهْ",
                translit: "Fahuwa muṣībah ‛āmmah",
                translation: "for it is a calamity for all.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "ثُمَّ إِذَا مُتَّ أَتَوْك",
                translit: "Thumma idhā mutta atawk",
                translation: "Then, when you die, they come to you,",
              }),
              new QasidaEntryModel({
                arabic: "وَغَسَّلُوك وَكَفَّنُوك",
                translit: "Waghassalūk wakaffanūk",
                translation: "and they wash you and shroud you,",
              }),
              new QasidaEntryModel({
                arabic: "وَشَيَّعُوك وَأَلْحَدُوك",
                translit: "Washayya‛ūk wa’alḥadūk",
                translation: "and escort you and lay you in the grave,",
              }),
              new QasidaEntryModel({
                arabic: "وَصِرْتَ جِيفَهْ خَامَّهْ",
                translit: "Waṣirta jīfah khāmmah",
                translation: "and you have become a putrid corpse.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا رَبِّ كُنْ لِي يَا مُعِين",
                translit: "Yā rabbi kun lī yā mu‛īn",
                translation: "O my Lord, be for me, O Helper,",
              }),
              new QasidaEntryModel({
                arabic: "إِذَا رَشَحْ عَظْمُ الْجَبِين",
                translit: "Idhā rashaḥ ‛aẓmul jabīn",
                translation: "when the bone of the brow sweats,",
              }),
              new QasidaEntryModel({
                arabic: "وَاخْتِمْ إِلَهِي بِالْيَقِين",
                translit: "Wakhtim ilāhī bilyaqīn",
                translation: "and seal, my God, with certainty,",
              }),
              new QasidaEntryModel({
                arabic: "مِنْ قَبْلِ لَوْمِ اللَّائِمَهْ",
                translit: "Min qabli lawmil lā’imah",
                translation: "before the reproach of the one who reproaches.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "دُنْيَاك مَا هِي لِلْمَقَرّ",
                translit: "Dunyāk mā hī lilmaqarr",
                translation: "Your worldly life is not meant for staying,",
              }),
              new QasidaEntryModel({
                arabic: "وَإِنَّمَا هِي لِلْمَمَرّ",
                translit: "Wa’innamā hī lilmamarr",
                translation: "it is only for passing through,",
              }),
              new QasidaEntryModel({
                arabic: "فَافْكِرْ وَأَمْعِنْ فِي النَّظَرْ",
                translit: "Fafkir wa’am‛in fin naẓar",
                translation: "so reflect, and consider deeply,",
              }),
              new QasidaEntryModel({
                arabic: "وَلَا تَكُنْ كَالسَّائِمَهْ",
                translit: "Walā takun kassā’imah",
                translation: "and do not be like the grazing herd.",
              }),
            ],
          }),
          new QasidaVerseModel({
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "يَا رَبِّ مَا مَعنَا عَمَل",
                translit: "Yā rabbi mā ma‛anā ‛amal",
                translation: "O my Lord, we have no deeds with us,",
              }),
              new QasidaEntryModel({
                arabic: "وكَسْبُنَا كُلُّهْ زَلَلْ",
                translit: "Wakasbunā kulluh zalal",
                translation: "and all that we have earned is error,",
              }),
              new QasidaEntryModel({
                arabic: "لَكِنْ لَنَا فِيكَ أَمَل",
                translit: "Lākin lanā fīka amal",
                translation: "but we have hope in You,",
              }),
              new QasidaEntryModel({
                arabic: "تُحْيِي الْعِظَامَ الرَّامَّهْ",
                translit: "Tuḥyil ‛iẓāmar rāmmah",
                translation: "You who give life to the decayed bones.",
              }),
            ],
          }),
          new QasidaVerseModel({
            repeat: 3,
            chorus: false,
            entries: [
              new QasidaEntryModel({
                arabic: "قَدْ حَانَ حِينُ الْإِنْتِقَالْ",
                translit: "Qad ḥāna ḥīnul intiqāl",
                translation: "The time of departure has come,",
              }),
              new QasidaEntryModel({
                arabic: "وَالْعُمْر وَلَّى فِي ضَلَالْ",
                translit: "Wal‛umr wallā fī ḍalāl",
                translation: "and life has passed in error,",
              }),
              new QasidaEntryModel({
                arabic: "لَكِنِّي أَرْجُو ذَا الْجَلَال",
                translit: "Lākinnī arjū dhal jalāl",
                translation: "but I place my hope in the Possessor of Majesty,",
              }),
              new QasidaEntryModel({
                arabic: "بِجَاهْ وَالِدْ فَاطِمَهْ",
                translit: "Bijāh wālid Fāṭimah",
                translation: "by the standing of the father of Fāṭimah,",
              }),
            ],
          }),
          new QasidaVerseModel({
            repeat: 3,
            chorus: true,
            entries: [
              new QasidaEntryModel({
                arabic: "بِجاهْ وَالِدْ فَاطِمَهْ",
                translit: "Bijāh wālid Fāṭimah",
                translation: "by the standing of the father of Fāṭimah,",
              }),
              new QasidaEntryModel({
                arabic: "اُمْنُنْ بِحُسْنِ الْخَاتِمَةْ",
                translit: "Umnun biḥusnil khātimah",
                translation: "bestow upon us a good ending.",
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
