import {
  DhikrEntryModel,
  DhikrModel,
  QuranEntryModel,
  QuranModel,
  WirdModel,
} from "@/models/recitation";

const hizbAlBahrContent = [
  new WirdModel("Hizb al-Bahr", [
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
        translit: "Bismi Allahi alrrahmani alrraheemi",
        translation:
          "In the name of Allah, the Most Gracious, the Most Merciful.",
      }),
      new DhikrEntryModel({
        arabic: "يَا عَلِيُّ يَا عَظِيمُ يَا حَلِيمُ يَا عَلِيمُ",
        translit: "Ya 'Aliyyu, ya 'Adheemu, ya Haleemu, ya 'Aleem",
        translation: "O Most High, O Supreme, O Forbearing, O All-Knowing,",
      }),
      new DhikrEntryModel({
        arabic: "أَنْتَ رَبِّي وَعِلْمُكَ حَسْبِي فَنِعْمَ الرَّبُّ رَبِّي ونِعْمَ الْحَسْبُ حَسْبِي",
        translit:
          "Anta rabbi wa 'ilmuka hasbi, fa ni'ma-r-rabbu rabbi, wa ni'ma-l-hasbu hasbi",
        translation:
          "You are my Lord and Your knowledge is sufficient for me, so what an excellent Lord is my Lord, and what an excellent sufficiency is my sufficiency.",
      }),
      new DhikrEntryModel({
        arabic: "تَنْصُرُ مَنْ تَشَاءُ وَأَنْتَ الْعَزِيزُ الرَّحِيم",
        translit: "tanṣuru man tashā'u wa anta-l-ʿazīzu-r-raḥīm",
        translation:
          "You give victory to whomever You will, and You are the Almighty, the Merciful.",
      }),
      new DhikrEntryModel({
        arabic:
          "نَسْأَلُكَ الْعِصْمَةَ فِي الْحَرَكَاتِ وَالسَّكَنَاتِ وَالْكَلِمَاتِ وَالْإِرَادَاتِ وَالْخَطَرَاتِ مِنَ الشُّكُوكِ وَالظُّنُونِ وَالْأَوْهَامِ السَّاتِرَةِ لِلْقُلُوبِ عَنْ مُطَالَعَةِ الْغُيُوبِ",
        translit:
          "nas'aluka-l-ʿiṣmata fi-l-ḥarakāti wa-s-sakanāti wa-l-kalimāti wa-l-irādāti wa-l-khaṭarāti mina-sh-shukūki wa-ẓ-ẓunūni wa-l-awhāmi-s-sāṭirati li-l-qulūbi ʿan muṭālaʿati-l-ghuyūb",
        translation:
          "We ask You for protection in our movements and our stillness, in our words and our desires, and our thoughts; from the doubts and the suspicions and the illusions that veil our hearts from contemplating the unseen.",
      }),
    ]),
    new QuranModel("Al-Ahzab", 33, [
      new QuranEntryModel({
        arabic: " (فَقَد) ٱبۡتُلِيَ ٱلۡمُؤۡمِنُونَ وَزُلۡزِلُواْ زِلۡزَالٗا شَدِيدٗا",
        translit: "(Faqad)i-btuliya-l-mu'minūna wa zulzilū zilzālan shadīdan",
        translation:
          "(There,) the believers were tried and shaken with a mighty shaking.",
        verse: 11,
      }),
      new QuranEntryModel({
        arabic:
          "وَإِذۡ يَقُولُ ٱلۡمُنَٰفِقُونَ وَٱلَّذِينَ فِي قُلُوبِهِم  مَّرَضٞ مَّا وَعَدَنَا ٱللَّهُ وَرَسُولُهُۥٓ إِلَّا غُرُورٗا",
        translit:
          "Wa idh yaqūlu-l-munāfiqūna wa-lladhīna fī qulūbihim maraḍun mā waʿadanā-llāhu wa rasūluhū illā ghurūran",
        translation:
          "And when the hypocrites and those in whose hearts is a disease said, ‘Allah and His Messenger did not promise us except delusion.’",
        verse: 12,
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic: "فَثَبِّتْنَا وَانْصُرْنَا وَسَخِّرْ لَنَا هَذَا الْبَحْرَ كَمَا سَخَّرْتَ الْبَحْرَ لِمُوسَى",
        translit:
          "fa-thabbitnā wa-nṣurnā wa-sakhkhir lanā hādhā-l-baḥra kamā sakhkharta-l-baḥra li-Mūsā",
        translation:
          "So make us firm and grant us victory, and subjugate this sea to us as You subjugated the sea to Moses.",
      }),
      new DhikrEntryModel({
        arabic: "وَسَخَّرْتَ النَّارَ لِإِبْرَاهِيم",
        translit: "wa sakhkharta-n-nāra li-Ibrāhīm",
        translation: "And You subjugated the fire to Abraham.",
      }),
      new DhikrEntryModel({
        arabic: "وَسَخَّرْتَ الْجِبَالَ وَالْحَدِيدَ لِدَاوُۥدَ",
        translit: "wa sakhkharta-l-jibāla wa-l-ḥadīda li-Dāwūd",
        translation: "And You subjugated the mountains and the iron to David.",
      }),
      new DhikrEntryModel({
        arabic: "وَسَخَّرْتَ الرِّيْحَ وَالشَّيَاطِينَ وَالْجِنَّ لِسُلَيْمَانَ",
        translit: "wa sakhkharta-r-rīḥa wa-sh-shayāṭīna wa-l-jinna li-Sulaymān",
        translation:
          "And You subjugated the wind and the devils and the jinn to Solomon.",
      }),
      new DhikrEntryModel({
        arabic:
          "وَسَخِّرْ لَنَا كُلَّ بَحْرٍ هُوَ لَكَ فِي الْأَرْضِ وَالسَّمَاءِ وَالْمُلْكِ وَالْمَلَكُوتِ وَبَحْرَ الدُّنيَا وبَحْرَ الْآخِرَةِ",
        translit:
          "wa sakhkhir lanā kulla baḥrin huwa laka fi-l-arḍi wa-s-samā'i wa-l-mulki wa-l-malakūti, wa baḥra-d-dunyā wa baḥra-l-ākhirah",
        translation:
          "And subjugate to us every sea of Yours in the earth and the heavens, the dominion and the kingdom, and the sea of this world and the sea of the Hereafter.",
      }),
      new DhikrEntryModel({
        arabic: "وَسَخِّرْ لَنَا كُلَّ شَيْءٍ يَا مَنْ بِيَدِهِ مَلَكُوتُ كُلِّ شَيْءٍ",
        translit:
          "wa sakhkhir lanā kulla shay'in yā man biyadihi malakūtu kulli shay'",
        translation:
          "And subjugate to us everything, O You in Whose hand is the dominion of everything.",
      }),
      new DhikrEntryModel({
        arabic: "كٓهيعٓصٓ",
        translit: "Kāf Hā Yā 'Ayn Ṣād",
        translation: "Kāf Hā Yā 'Ayn Ṣād",
        repeat: 3,
      }),
      new DhikrEntryModel({
        arabic: "اُنْصُرْنَا فَإِنَّكَ خَيْرُ النَّاصِرِينَ",
        translit: "unṣurnā fa-innaka khayru-n-nāṣirīn",
        translation:
          "Grant us victory, for You are the best of those who grant victory.",
      }),
      new DhikrEntryModel({
        arabic: "وَافْتَحْ لَنَا فَإِنَّكَ خَيْرُ الْفَاتِحِينَ",
        translit: "wa-ftaḥ lanā fa-innaka khayru-l-fātiḥīn",
        translation: "And open for us, for You are the best of those who open.",
      }),
      new DhikrEntryModel({
        arabic: "وَاغْفِرْ لَنَا فَإِنَّكَ خَيْرُ الْغَافِرِينَ",
        translit: "wa-ghfir lanā fa-innaka khayru-l-ghāfirīn",
        translation:
          "And forgive us, for You are the best of those who forgive.",
      }),
      new DhikrEntryModel({
        arabic: "وَارْحَمْنَا فَإِنَّكَ خَيْرُ الرَّاحِمِينَ",
        translit: "wa-rḥamnā fa-innaka khayru-r-rāḥimīn",
        translation:
          "And have mercy upon us, for You are the best of those who are merciful.",
      }),
      new DhikrEntryModel({
        arabic: "وَارْزُقْنَا فَإِنَّكَ خَيْرُ الرَّازِقِينَ",
        translit: "wa-rzuqnā fa-innaka khayru-r-rāziqīn",
        translation: "And provide for us, for You are the best of providers.",
      }),
      new DhikrEntryModel({
        arabic: "وَاهْدِنَا وَنَجِّنَا مِنَ الْقَومِ الظَّالِمِينَ",
        translit: "wa-hdinā wa-najjinā mina-l-qawmi-ẓ-ẓālimīn",
        translation: "And guide us and save us from the wrongdoing people.",
      }),
      new DhikrEntryModel({
        arabic: "وَهَبْ لَنَا رِيحًا طَيِّبَةً كَمَا هِيَ فِي عِلْمِكَ",
        translit: "wa hab lanā rīḥan ṭayyibatan kamā hiya fī ʿilmik",
        translation: "And grant us a goodly wind, as is in Your knowledge.",
      }),
      new DhikrEntryModel({
        arabic: "وَانْشُرْهَا عَلَيْنَا مِنْ خَزَائِنِ رَحْمَتِكَ",
        translit: "wa-nshurhā ʿalaynā min khazā'ini raḥmatik",
        translation: "And spread it upon us from the treasures of Your mercy.",
      }),
      new DhikrEntryModel({
        arabic:
          "وَاحْمِلْنَا بِهَا حَمْلَ الْكَرَامَةِ مَعَ السَّلَامَةِ وَالْعَافِيَةِ فِي الدِّينِ وَالدُّنيَا وَالْآخِرَةِ",
        translit:
          "wa-ḥmilnā bihā ḥamla-l-karāmati maʿa-s-salāmati wa-l-ʿāfiyati fi-d-dīni wa-d-dunyā wa-l-ākhirah",
        translation:
          "And carry us by it with a carriage of honor, with safety and well-being in our religion, our world, and the Hereafter.",
      }),
      new DhikrEntryModel({
        arabic: "إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        translit: "innaka ʿalā kulli shay'in qadīr",
        translation: "Indeed, You have power over all things.",
      }),
      new DhikrEntryModel({
        arabic:
          "اللَّهُمَّ يَسِّرْ لَنَا أُمُورَنَا مَعَ الرَّاحَةِ لِقُلُوبِنَا وَأَبْدَانِنَا، وَالسَّلَامَةِ وَالْعَافِيَةِ فِي دِينِنَا وَدُنْيَانَا",
        translit:
          "allāhumma yassir lanā umūranā maʿa-r-rāḥati li-qulūbinā wa abdāninā wa-s-salāmati wa-l-ʿāfiyati fī dīninā wa dunyānā",
        translation:
          "O Allah, make our affairs easy for us, with ease for our hearts and our bodies, and safety and well-being in our religion and our world.",
      }),
      new DhikrEntryModel({
        arabic: "وَكُنْ لَنَا صَاحِبًا فِي سَفَرِنَا وَخَلِيفَةً فِي أَهْلِنَا",
        translit: "wa kun lanā ṣāḥiban fī safarinā wa khalīfatan fī ahlinā",
        translation:
          "And be for us a companion in our journey and a guardian in our families.",
      }),
      new DhikrEntryModel({
        arabic: "وَاطْمِسْ عَلَى وُجُوهِ أَعْدَائِنَا",
        translit: "wa-ṭmis ʿalā wujūhi aʿdā'inā",
        translation: "And blind the faces of our enemies.",
      }),
      new DhikrEntryModel({
        arabic: "وَامْسَخْهُمْ عَلَى مَكَانَتِهِم فَلَا يَستَطِيعُونَ الْمُضِيَّ وَلَا الْمَجِيءَ إِلَيْنَا",
        translit:
          "wa-msakhhum ʿalā makānatihim fa-lā yastaṭīʿūna-l-muḍiyya wa-l-majī'a ilaynā",
        translation:
          "And transfigure them in their places, so that they are unable to proceed or to come to us.",
      }),
    ]),
    new QuranModel("Ya-Sin", 36, [
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
    ]),
    new QuranModel("Ya-Sin", 36, [
      new QuranEntryModel({
        arabic: "يسٓ",
        translit: "Yā Sīn",
        translation: "Ya Sin.",
        verse: 1,
      }),
      new QuranEntryModel({
        arabic: "وَالْقُرْآنِ الْحَكِيمِ",
        translit: "wa-l-qur'āni-l-ḥakīm",
        translation: "By the wise Qur'an.",
        verse: 2,
      }),
      new QuranEntryModel({
        arabic: "إِنَّكَ لَمِنَ الْمُرْسَلِينَ",
        translit: "innaka lamina-l-mursalīn",
        translation: "Indeed, you are from among the messengers.",
        verse: 3,
      }),
      new QuranEntryModel({
        arabic: "عَلَىٰ صِرَاطٍ مُسْتَقِيمٍ",
        translit: "ʿalā ṣirāṭin mustaqīm",
        translation: "On a straight path.",
        verse: 4,
      }),
      new QuranEntryModel({
        arabic: "تَنْزِيلَ الْعَزِيزِ الرَّحِيمِ",
        translit: "tanzīla-l-ʿazīzi-r-raḥīm",
        translation: "A revelation of the Exalted in Might, the Merciful.",
        verse: 5,
      }),
      new QuranEntryModel({
        arabic: "لِتُنْذِرَ قَوْمًا مَا أُنْذِرَ آبَاؤُهُمْ فَهُمْ غَافِلُونَ",
        translit: "li-tundhira qawman mā undhira ābā'uhum fahum ghāfilūn",
        translation:
          "That you may warn a people whose forefathers were not warned, so they are unaware.",
        verse: 6,
      }),
      new QuranEntryModel({
        arabic: "لَقَدْ حَقَّ الْقَوْلُ عَلَىٰ أَكْثَرِهِمْ فَهُمْ لَا يُؤْمِنُونَ",
        translit: "laqad ḥaqqa-l-qawlu ʿalā aktharihim fahum lā yu'minūn",
        translation:
          "The word has come into effect upon most of them, so they do not believe.",
        verse: 7,
      }),
      new QuranEntryModel({
        arabic: "إِنَّا جَعَلْنَا فِي أَعْنَاقِهِمْ أَغْلَالًا فَهِيَ إِلَى الْأَذْقَانِ فَهُمْ مُقْمَحُونَ",
        translit:
          "innā jaʿalnā fī aʿnāqihim aghlālan fa-hiya ilā-l-adhqāni fahum muqmaḥūn",
        translation:
          "Indeed, We have put shackles on their necks, and they are to their chins, so they are with heads aloft.",
        verse: 8,
      }),
      new QuranEntryModel({
        arabic:
          "وَجَعَلْنَا مِنْ بَيْنِ أَيْدِيهِمْ سَدًّا وَمِنْ خَلْفِهِمْ سَدًّا فَأَغْشَيْنَاهُمْ فَهُمْ لَا يُبْصِرُونَ",
        translit:
          "wa jaʿalnā min bayni aydīhim saddan wa min khalfihim saddan fa-aghshaynāhum fahum lā yubṣirūn",
        translation:
          "And We have put before them a barrier and behind them a barrier and covered them, so they do not see.",
        verse: 9,
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic: "شَاهَتِ الْوُجُوهُ",
        translit: "shāhati-l-wujūh",
        translation: "May the faces be disfigured.",
        repeat: 3,
      }),
    ]),
    new QuranModel("Taha", 20, [
      new QuranEntryModel({
        arabic: "وَعَنَتِ ٱلْوُجُوهُ لِلْحَيِّ ٱلْقَيُّومِ ۖ وَقَدْ خَابَ مَنْ حَمَلَ ظُلْمً",
        translit:
          "wa ʿanati-l-wujūhu li-l-ḥayyi-l-qayyūm, wa qad khāba man ḥamala ẓulmā",
        translation:
          "And faces shall be humbled before the Ever-Living, the Self-Sustaining. And he will have failed who carries injustice.",
        verse: 111,
      }),
    ]),
    new QuranModel("An-Naml", 27, [
      new QuranEntryModel({
        arabic: "طسٓ",
        translit: "Ṭā Sīn",
        translation: "Ta Sin.",
        verse: 1,
      }),
    ]),
    new QuranModel("Ash-Shura", 42, [
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
    ]),
    new QuranModel("Ar-Rahman", 55, [
      new QuranEntryModel({
        arabic: "مَرَجَ الْبَحْرَيْنِ يَلْتَقِيَانِ",
        translit: "maraja-l-baḥrayni yaltaqiyān",
        translation: "He released the two seas, meeting side by side.",
        verse: 19,
      }),
      new QuranEntryModel({
        arabic: "بَيْنَهُمَا بَرْزَخٌ لَا يَبْغِيَانِ",
        translit: "baynahumā barzakhun lā yabghiyān",
        translation: "Between them is a barrier which they do not transgress.",
        verse: 20,
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic: "حمٓ",
        translit: "Ḥā Mīm",
        translation: "Ha Mim.",
        repeat: 7,
      }),
      new DhikrEntryModel({
        arabic: "حُمَّ الْأَمْرُ وَجَاءَ النَّصْرُ فَعَلَيْنَا لَا يُنْصَرُونَ",
        translit: "ḥumma-l-amru wa jā'a-n-naṣru fa-ʿalaynā lā yunṣarūn",
        translation:
          "The matter is decreed, and victory has come, so against us they shall not be victorious.",
      }),
    ]),
    new QuranModel("Fussilat", 41, [
      new QuranEntryModel({
        arabic: "حمٓ",
        translit: "Ḥā Mīm",
        translation: "Ha Mim.",
        verse: 1,
      }),
      new QuranEntryModel({
        arabic: "تَنْزِيلٌ مِنَ الرَّحْمَٰنِ الرَّحِيمِ",
        translit: "tanzīlun mina-r-raḥmāni-r-raḥīm",
        translation: "A revelation from the Most Gracious, the Most Merciful.",
        verse: 2,
      }),
      new QuranEntryModel({
        arabic: "كِتَابٌ فُصِّلَتْ آيَاتُهُ قُرْآنًا عَرَبِيًّا لِقَوْمٍ يَعْلَمُونَ",
        translit:
          "kitābun fuṣṣilat āyātuhū qur'ānan ʿarabiyyan li-qawmin yaʿlamūn",
        translation:
          "A Book whose verses have been detailed, an Arabic Qur'an for a people who know.",
        verse: 3,
      }),
      new QuranEntryModel({
        arabic: "بَشِيرًا وَنَذِيرًا فَأَعْرَضَ أَكْثَرُهُمْ فَهُمْ لَا يَسْمَعُونَ",
        translit: "bashīran wa nadhīran fa-aʿraḍa aktharuhum fahum lā yasmaʿūn",
        translation:
          "As a giver of good tidings and a warner; but most of them turn away, so they do not hear.",
        verse: 4,
      }),
      new QuranEntryModel({
        arabic: "وَقَالُوا قُلُوبُنَا فِي أَكِنَّةٍ مِمَّا تَدْعُونَا إِلَيْهِ",
        translit: "wa qālū qulūbunā fī akinnatin mimmā tadʿūnā ilayh",
        translation:
          "Our hearts are within coverings from that to which you invite us.",
        verse: 5,
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic: "بِسْمِ اللَّهِ بَابُنَا",
        translit: "bismi-llāhi bābunā",
        translation: "In the name of Allah is our door.",
      }),
      new DhikrEntryModel({
        arabic: "تَبَارَكَ حِيطَانُنَا",
        translit: "tabāraka ḥīṭānunā",
        translation: "Blessed is our enclosure.",
      }),
      new DhikrEntryModel({
        arabic: "يسٓ سَقْفُنَا",
        translit: "yā sīn saqfunā",
        translation: "Ya Sin is our roof.",
      }),
      new DhikrEntryModel({
        arabic: "كٓهيعٓصٓ كِفَايَتُنَا",
        translit: "kāf hā yā ʿayn ṣād kifāyatunā",
        translation: "Kaf Ha Ya 'Ayn Sad is our sufficiency.",
      }),
      new DhikrEntryModel({
        arabic: "حمٓ عٓسٓقٓ حِمَايَتُنَا",
        translit: "ḥā mīm ʿayn sīn qāf ḥimāyatunā",
        translation: "Ha Mim 'Ayn Sin Qaf is our protection.",
      }),
    ]),
    new QuranModel("Al-Baqarah", 2, [
      new QuranEntryModel({
        arabic: "فَسَيَكْفِيكَهُمُ اللَّهُ ۚ وَهُوَ السَّمِيعُ الْعَلِيمُ",
        translit: "fa-sayakfīkahumu-llāhu wa huwa-s-samīʿu-l-ʿalīm",
        translation:
          "And Allah will be sufficient for you against them, and He is the Hearing, the Knowing.",
        verse: 137,
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic: "سَتْرُ الْعَرْشِ مَسْبُولٌ عَلَيْنَا",
        translit: "sitru-l-ʿarshi masbūlun ʿalaynā",
        translation: "The veil of the Throne is extended over us.",
      }),
      new DhikrEntryModel({
        arabic: "وَعَيْنُ اللَّهِ نَاظِرَةٌ إِلَيْنَا",
        translit: "wa ʿaynu-llāhi nāẓiratun ilaynā",
        translation: "And the eye of Allah is watching over us.",
      }),
      new DhikrEntryModel({
        arabic: "بِحَوْلِ اللَّهِ لَا يُقْدَرُ عَلَيْنَا",
        translit: "bi-ḥawli-llāhi lā yuqdaru ʿalaynā",
        translation: "By the power of Allah, none can overcome us.",
      }),
    ]),
    new QuranModel("Al-Buruj", 85, [
      new QuranEntryModel({
        arabic: "وَاللَّهُ مِنْ وَرَائِهِمْ مُحِيطٌ",
        translit: "wa-llāhu min warā'ihim muḥīṭ",
        translation: "And Allah, from behind them, is encompassing.",
        verse: 20,
      }),
      new QuranEntryModel({
        arabic: "بَلْ هُوَ قُرْآنٌ مَجِيدٌ",
        translit: "bal huwa qur'ānun majīd",
        translation: "But it is a glorious Qur'an.",
        verse: 21,
      }),
      new QuranEntryModel({
        arabic: "فِي لَوْحٍ مَحْفُوظٍ",
        translit: "fī lawḥin maḥfūẓ",
        translation: "In a Preserved Tablet.",
        verse: 22,
      }),
    ]),
    new QuranModel("Yusuf", 12, [
      new QuranEntryModel({
        arabic: "فَاللَّهُ خَيْرٌ حَافِظًا ۖ وَهُوَ أَرْحَمُ الرَّاحِمِينَ",
        translit: "fa-llāhu khayrun ḥāfiẓan wa huwa arḥamu-r-rāḥimīn",
        translation:
          "For Allah is the best guardian, and He is the most merciful of the merciful.",
        verse: 64,
      }),
    ]),
    new QuranModel("Al-A'raf", 7, [
      new QuranEntryModel({
        arabic: "إِنَّ وَلِيِّيَ اللَّهُ الَّذِي نَزَّلَ الْكِتَابَ ۖ وَهُوَ يَتَوَلَّى الصَّالِحِينَ",
        translit:
          "inna waliyyiya-llāhu-lladhī nazzala-l-kitāba wa huwa yatawalla-ṣ-ṣāliḥīn",
        translation:
          "Indeed, my protector is Allah, who has sent down the Book; and He is an ally to the righteous.",
        verse: 196,
      }),
    ]),
    new QuranModel("At-Tawbah", 9, [
      new QuranEntryModel({
        arabic: "حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ ۖ عَلَيْهِ تَوَكَّلْتُ ۖ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
        translit:
          "ḥasbiya-llāhu lā ilāha illā huwa ʿalayhi tawakkaltu wa huwa rabbu-l-ʿarshi-l-ʿaẓīm",
        translation:
          "Sufficient for me is Allah; there is no deity except Him. On Him I have relied, and He is the Lord of the Great Throne.",
        verse: 129,
      }),
    ]),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic:
          "بِسۡمِ ٱللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
        translit:
          "bismi-llāhi-lladhī lā yaḍurru maʿa-smihī shay'un fi-l-arḍi wa lā fi-s-samā'i wa huwa-s-samīʿu-l-ʿalīm",
        translation:
          "In the name of Allah, with whose name nothing can cause harm on earth or in the heavens, and He is the All-Hearing, the All-Knowing.",
        repeat: 3,
      }),
      new DhikrEntryModel({
        arabic: "وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّهِ الْعَلِيِّ الْعَظِيمِ",
        translit: "wa lā ḥawla wa lā quwwata illā bi-llāhi-l-ʿaliyyi-l-ʿaẓīm",
        translation:
          "And there is no might nor power except with Allah, the Most High, the Most Great.",
      }),
    ]),
    new QuranModel("Al-Ahzab", 33, [
      new QuranEntryModel({
        arabic:
          "إِنَّ ٱللَّهَ وَمَلَٰٓئِكَتَهُۥ يُصَلُّونَ عَلَى ٱلنَّبِيِّۚ يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ صَلُّواْ عَلَيۡهِ وَسَلِّمُواْ تَسۡلِيمًا",
        translit:
          "Inna Allāha wa malā’ikatahu yuṣallūna ‘alā al-nabīyi yā ayyuhā alladhīna āmanū ṣallū ‘alayhi wa sallimū taslīman.",
        translation:
          "Indeed, Allah confers blessing upon the Prophet, and His angels [ask Him to do so]. O you who have believed, ask [Allah to confer] blessing upon him and ask [Allah to grant him] peace.",
        verse: 56,
      }),
    ]),
    new QuranModel(
      "Al-Baqarah",
      2,
      [
        new QuranEntryModel({
          arabic:
            "اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلاَّ بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",
          translit:
            "Allāhu lā ilāha illā huwa al-ḥayyu al-qayyūmu lā ta’khudhuhu sinatun wa lā nawmun lahu mā fī al-samāwāti wa mā fī al-arḍi man dhā alladhī yashfa‘u ‘indahu illā bi-idhnihi ya‘lamu mā bayna aydīhim wa mā khalfahum wa lā yuḥīṭūna bi-shay’in min ‘ilmihi illā bi-mā shā’a wasi‘a kursīyuhu al-samāwāti wa al-arḍa wa lā ya’ūduhu ḥifẓuhumā wa huwa al-‘alīyu al-‘aẓīmu",
          translation:
            "Allah! There is no deity except Him, the Ever-Living, the Sustainer of [all] existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is [presently] before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi (Throne) extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
          verse: 255,
        }),
      ],
      "Ayatul Kursi - it is better if it is read in one breath",
    ),
    new DhikrModel("", [
      new DhikrEntryModel({
        arabic:
          "يَا اللَّهُ يَا نُورُ يَا حَقُّ يَا مُبِينُ، اُكْسُنِي مِنْ نُورِكَ، وَعَلِّمْنِي مِنْ عِلْمِكَ، وَأَفْهِمْنِي عَنْكَ، وَأَسْمِعْنِي مِنْكَ، وَبَصِّرنِي بِكَ، وَأَقِمْنِي بِشُهُودِكَ، وَعَرِّفْنِي الطَّرِيقَ إِلَيْكَ، وَهَوِّنْهَا عَلَيَّ بِفَضْلِكَ، وَأَلْبِسْنِي لِبَاسَ التَّقْوَى مِنْكَ، إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. يَا سَمِيعُ يَا عَلِيمُ يَا حَلِيمُ يَا عَلِيُّ يَا عَظِيمُ يَا اللَّهُ، اِسْمَعْ دُعَائِي بِخَصَائِصِ لُطْفِكَ آمِينَ",
        translit:
          "Yā Allāhu yā Nūru yā Ḥaqqu yā Mubīnu, uksunī min nūrika, wa ‘allimnī min ‘ilmika, wa afhimnī ‘anka, wa asmi‘nī minka, wa baṣṣirnī bika, wa aqimnī bi-shuhūdika, wa ‘arrifnī al-ṭarīqa ilayka, wa hawwinhā ‘alayya bi-faḍlika, wa albisnī libāsa al-taqwā minka, innaka ‘alā kulli shay’in qadīr. Yā Samī‘u yā ‘Alīmu yā Ḥalīmu yā ‘Alīyu yā ‘Aẓīmu yā Allāhu, isma‘ du‘ā’ī bi-khaṣā’iṣi luṭfika, Āmīn.",
        translation:
          "O Allah, O Light, O Truth, O Clear One, clothe me from Your light, teach me from Your knowledge, make me understand from You, make me hear from You, make me see by You, establish me in Your presence, show me the way to You, make it easy for me by Your grace, and clothe me with the garment of piety from You. Indeed, You have power over all things. O All-Hearing, O All-Knowing, O Forbearing, O Most High, O Supreme, O Allah, hear my prayer with the specialties of Your subtlety, Amin.",
      }),
      new DhikrEntryModel({
        arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ كُلِّهَا مِنْ شَرِّ مَا خَلَقَ",
        translit:
          "A‘ūdhu bi-kalimāti Allāhi al-tāmmāti kullihā min sharri mā khalaqa.",
        translation:
          "I seek refuge in the perfect words of Allah from the evil of what He has created.",
        repeat: 3,
      }),
      new DhikrEntryModel({
        arabic:
          "يَا عَظِيمَ السُّلْطَانِ، يَا قَدِيمَ الْإِحْسَانِ، يَا دَائِمَ النَّعْمَاءِ، يَا بَاسِطَ الرِّزْقِ، يَا كَثِيرَ الْخَيْرَاتِ، يَا وَاسِعَ الْعَطَاءِ، يَا دَافِعَ الْبَلَاءِ، وَيَا سَامِعَ الدُّعَاءِ، يَا حَاضِرًا لَيْسَ بِغَائِبٍ، يَا مَوجُودًا عِنْدَ الشَّدَائِدِ، يَا خَفِيَّ اللُّطْفِ، يَا لَطِيفَ الصُّنْعِ، يَا حَلِيمًا لَا يَعْجَلُ، اِقْضِ حَاجَتِي بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِينَ",
        translit:
          "Yā ‘Aẓīma al-sulṭāni, yā Qadīma al-iḥsāni, yā Dā’ima al-na‘mā’i, yā Bāsiṭa al-rizqi, yā Kathīra al-khayrāti, yā Wāsi‘a al-‘aṭā’i, yā Dāfi‘a al-balā’i, wa yā Sāmi‘a al-du‘ā’i, yā Ḥāḍiran laysa bi-ghā’ibin, yā Mawjūdan ‘inda al-shadā’idi, yā Khafīya al-luṭfi, yā Laṭīfa al-ṣun‘i, yā Ḥalīman lā ya‘jalu, iqḍi ḥājatī bi-raḥmatika yā Arḥama al-rāḥimīn.",
        translation:
          "O great of authority, O ancient of goodness, O eternal of blessings, O extender of provision, O abundant of good things, O vast of giving, O repeller of affliction, O hearer of prayer, O present one who is not absent, O existent one at times of hardship, O subtle of kindness, O gentle of creation, O forbearing one who does not hasten, fulfill my need by Your mercy, O most merciful of the merciful.",
      }),
      new DhikrEntryModel({
        arabic:
          "اللَّهُمَّ إِنَّكَ تَعْلَمُ مَا نَحْنُ فِيهِ، وَمَا نَطْلُبُهُ وَنَرْتَجِيهِ مِنْ رَحْمَتِكَ فِي أَمْرِنَا كُلِّه، فَيَسِّرْ لَنَا مَا نَحْنُ فِيهِ مِنْ سَفَرِنَا وَمَا نَطْلُبُهُ مِنْ حَوَائِجِنَا، وَقَرِّبْ عَلَيْنَا الْمَسَافَاتِ، وَسَلِّمْنَا مِنَ الْعِلَلِ وَالْآفَاتِ، وَلَا تَجْعَلِ الدُّنْيَا أَكْبَرَ هَمِّنَا، وَلَا مَبْلَغَ عِلْمِنَا، وَلَا تُسَلِّطْ عَلَيْنَا مَنْ لَا يَرْحَمُنَا، بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِينَ",
        translit:
          "Allāhumma innaka ta‘lamu mā naḥnu fīhi, wa mā naṭlubuhu wa nartajīhi min raḥmatika fī amrinā kullih, fa-yassir lanā mā naḥnu fīhi min safarinā wa mā naṭlubuhu min ḥawā’ijinā, wa qarrib ‘alaynā al-masāfāti, wa sallimnā mina al-‘ilali wa al-āfāti, wa lā taj‘al al-dunyā akbara hamminā, wa lā mablagha ‘ilminā, wa lā tusalliṭ ‘alaynā man lā yarḥamunā, bi-raḥmatika yā Arḥama al-rāḥimīn.",
        translation:
          "O Allah, You know what we are in, and what we seek and hope for from Your mercy in all our affairs. So make easy for us what we are in of our journey and what we seek of our needs, and shorten the distances for us, and save us from illnesses and calamities, and do not make this world our greatest concern, nor the extent of our knowledge, and do not give authority over us to one who will not have mercy on us, by Your mercy, O most merciful of the merciful.",
      }),
      new DhikrEntryModel({
        arabic: "وَصَلَّى اللَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَآلِهِ وَصَحْبِهِ وَسَلَّمَ",
        translit:
          "Wa ṣallā Allāhu ‘alā sayyidinā Muḥammadin wa ālihi wa ṣaḥbihi wa sallam.",
        translation:
          "And may Allah send blessings and peace upon our master Muhammad and his family and companions.",
      }),
    ]),
  ]),
];

export default hizbAlBahrContent;
