import { baqarah_ayat_al_kursi } from "@/data/shared/quran";
import {
  a_raf_196,
  ahzab_11,
  ahzab_12,
  ahzab_56,
  baqarah_137,
  buruj_20_22,
  ghafir_1_3,
  naml_1,
  rahman_19_20,
  shura_1_2,
  taha_111,
  tawbah_129_section,
  ya_sin_1_9,
  ya_sin_66_67,
  yusuf_64,
} from "@/data/shared/quran-partial";
import { DhikrEntryModel, DhikrModel, WirdModel } from "@/models/recitation";

const hizbAlBahrContent = [
  new WirdModel({
    title: "Hizb al-Bahr",
    instruction:
      "Ḥizb al-Baḥr (Litany of the Sea) of Sayyidi Abul Ḥasan al-Shādhilī",
    entries: [
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
            translit: "Bismillāhir raḥmānir raḥīm",
            translation:
              "In the name of Allah, the Most Gracious, the Most Merciful.",
          }),
          new DhikrEntryModel({
            arabic: "يَا عَلِيُّ يَا عَظِيمُ يَا حَلِيمُ يَا عَلِيمُ",
            translit: "Yā ‛Aliyyu yā ‛Aẓīmu yā Ḥalīmu yā ‛Alīm",
            translation: "O Most High, O Supreme, O Forbearing, O All-Knowing,",
          }),
          new DhikrEntryModel({
            arabic: "أَنْتَ رَبِّي وَعِلْمُكَ حَسْبِي فَنِعْمَ الرَّبُّ رَبِّي ونِعْمَ الْحَسْبُ حَسْبِي",
            translit:
              "Anta rabbī wa ‛ilmuka ḥasbī, fani‛mar rabbu rabbī, wa ni‛mal ḥasbu ḥasbī",
            translation:
              "You are my Lord and Your knowledge is sufficient for me, so what an excellent Lord is my Lord, and what an excellent sufficiency is my sufficiency.",
          }),
          new DhikrEntryModel({
            arabic: "تَنْصُرُ مَنْ تَشَاءُ وَأَنْتَ الْعَزِيزُ الرَّحِيم",
            translit: "Tanṣuru man tashā’u wa antal ‛azīzur raḥīm",
            translation:
              "You give victory to whomever You will, and You are the Almighty, the Merciful.",
          }),
          new DhikrEntryModel({
            arabic:
              "نَسْأَلُكَ الْعِصْمَةَ فِي الْحَرَكَاتِ وَالسَّكَنَاتِ وَالْكَلِمَاتِ وَالْإِرَادَاتِ وَالْخَطَرَاتِ مِنَ الشُّكُوكِ وَالظُّنُونِ وَالْأَوْهَامِ السَّاتِرَةِ لِلْقُلُوبِ عَنْ مُطَالَعَةِ الْغُيُوبِ",
            translit:
              "Nas’alukal ‛iṣmata fil ḥarakāti was sakanāti wal kalimāti wal irādāti wal khaṭarāti minash shukūki waẓ ẓunūni wal awhāmis sātirati lil qulūbi ‛an muṭāla‛atil ghuyūb",
            translation:
              "We ask You for protection in our movements and our stillness, in our words and our desires, and our thoughts; from the doubts and the suspicions and the illusions that veil our hearts from contemplating the unseen.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "فَقَدِ",
            translit: "Faqad",
            translation: "for indeed,",
          }),
          ahzab_11(),
          ahzab_12(),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "فَثَبِّتْنَا وَانْصُرْنَا وَسَخِّرْ لَنَا هَذَا الْبَحْرَ كَمَا سَخَّرْتَ الْبَحْرَ لِمُوسَى",
            translit:
              "Fathabbitnā wanṣurnā wa sakhkhir lanā hādhal baḥra kamā sakhkhartal baḥra limūsā",
            translation:
              "So make us firm and grant us victory, and subjugate this sea to us as You subjugated the sea to Moses.",
          }),
          new DhikrEntryModel({
            arabic: "وَسَخَّرْتَ النَّارَ لِإِبْرَاهِيم",
            translit: "Wa sakhkhartan nāra li’ibrāhīm",
            translation: "And You subjugated the fire to Abraham.",
          }),
          new DhikrEntryModel({
            arabic: "وَسَخَّرْتَ الْجِبَالَ وَالْحَدِيدَ لِدَاوُۥدَ",
            translit: "Wa sakhkhartal jibāla wal ḥadīda lidāwūd",
            translation:
              "And You subjugated the mountains and the iron to David.",
          }),
          new DhikrEntryModel({
            arabic: "وَسَخَّرْتَ الرِّيْحَ وَالشَّيَاطِينَ وَالْجِنَّ لِسُلَيْمَانَ",
            translit: "Wa sakhkhartar rīḥa wash shayāṭīna wal jinna lisulaymān",
            translation:
              "And You subjugated the wind and the devils and the jinn to Solomon.",
          }),
          new DhikrEntryModel({
            arabic:
              "وَسَخِّرْ لَنَا كُلَّ بَحْرٍ هُوَ لَكَ فِي الْأَرْضِ وَالسَّمَاءِ وَالْمُلْكِ وَالْمَلَكُوتِ وَبَحْرَ الدُّنيَا وبَحْرَ الْآخِرَةِ",
            translit:
              "Wa sakhkhir lanā kulla baḥrin huwa laka fil arḍi was samā’i wal mulki wal malakūti, wa baḥrad dunyā wa baḥral ākhirah",
            translation:
              "And subjugate to us every sea of Yours in the earth and the heavens, the dominion and the kingdom, and the sea of this world and the sea of the Hereafter.",
          }),
          new DhikrEntryModel({
            arabic: "وَسَخِّرْ لَنَا كُلَّ شَيْءٍ يَا مَنْ بِيَدِهِ مَلَكُوتُ كُلِّ شَيْءٍ",
            translit:
              "Wa sakhkhir lanā kulla shay’in yā man biyadihī malakūtu kulli shay’",
            translation:
              "And subjugate to us everything, O You in Whose hand is the dominion of everything.",
          }),
          new DhikrEntryModel({
            arabic: "كٓهيعٓصٓ",
            translit: "Kāf Hā Yā ‛Ayn Ṣād",
            translation: "Kāf Hā Yā 'Ayn Ṣād",
            repeat: 3,
          }),
          new DhikrEntryModel({
            arabic: "اُنْصُرْنَا فَإِنَّكَ خَيْرُ النَّاصِرِينَ",
            translit: "Unṣurnā fa’innaka khayrun nāṣirīn",
            translation:
              "Grant us victory, for You are the best of those who grant victory.",
          }),
          new DhikrEntryModel({
            arabic: "وَافْتَحْ لَنَا فَإِنَّكَ خَيْرُ الْفَاتِحِينَ",
            translit: "Waftaḥ lanā fa’innaka khayrul fātiḥīn",
            translation:
              "And open for us, for You are the best of those who open.",
          }),
          new DhikrEntryModel({
            arabic: "وَاغْفِرْ لَنَا فَإِنَّكَ خَيْرُ الْغَافِرِينَ",
            translit: "Waghfir lanā fa’innaka khayrul ghāfirīn",
            translation:
              "And forgive us, for You are the best of those who forgive.",
          }),
          new DhikrEntryModel({
            arabic: "وَارْحَمْنَا فَإِنَّكَ خَيْرُ الرَّاحِمِينَ",
            translit: "Warḥamnā fa’innaka khayrur rāḥimīn",
            translation:
              "And have mercy upon us, for You are the best of those who are merciful.",
          }),
          new DhikrEntryModel({
            arabic: "وَارْزُقْنَا فَإِنَّكَ خَيْرُ الرَّازِقِينَ",
            translit: "Warzuqnā fa’innaka khayrur rāziqīn",
            translation:
              "And provide for us, for You are the best of providers.",
          }),
          new DhikrEntryModel({
            arabic: "وَاهْدِنَا وَنَجِّنَا مِنَ الْقَومِ الظَّالِمِينَ",
            translit: "Wahdinā wa najjinā minal qawmiẓ ẓālimīn",
            translation: "And guide us and save us from the wrongdoing people.",
          }),
          new DhikrEntryModel({
            arabic: "وَهَبْ لَنَا رِيحًا طَيِّبَةً كَمَا هِيَ فِي عِلْمِكَ",
            translit: "Wa hab lanā rīḥan ṭayyibatan kamā hiya fī ‛ilmik",
            translation: "And grant us a goodly wind, as is in Your knowledge.",
          }),
          new DhikrEntryModel({
            arabic: "وَانْشُرْهَا عَلَيْنَا مِنْ خَزَائِنِ رَحْمَتِكَ",
            translit: "Wanshurhā ‛alaynā min khazā’ini raḥmatik",
            translation:
              "And spread it upon us from the treasures of Your mercy.",
          }),
          new DhikrEntryModel({
            arabic:
              "وَاحْمِلْنَا بِهَا حَمْلَ الْكَرَامَةِ مَعَ السَّلَامَةِ وَالْعَافِيَةِ فِي الدِّينِ وَالدُّنيَا وَالْآخِرَةِ",
            translit:
              "Waḥmilnā bihā ḥamlal karāmati ma‛as salāmati wal ‛āfiyati fid dīni wad dunyā wal ākhirah",
            translation:
              "And carry us by it with a carriage of honor, with safety and well-being in our religion, our world, and the Hereafter.",
          }),
          new DhikrEntryModel({
            arabic: "إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
            translit: "Innaka ‛alā kulli shay’in qadīr",
            translation: "Indeed, You have power over all things.",
          }),
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ يَسِّرْ لَنَا أُمُورَنَا مَعَ الرَّاحَةِ لِقُلُوبِنَا وَأَبْدَانِنَا، وَالسَّلَامَةِ وَالْعَافِيَةِ فِي دِينِنَا وَدُنْيَانَا",
            translit:
              "Allāhumma yassir lanā umūranā ma‛ar rāḥati liqulūbinā wa abdāninā, was salāmati wal ‛āfiyati fī dīninā wa dunyānā",
            translation:
              "O Allah, make our affairs easy for us, with ease for our hearts and our bodies, and safety and well-being in our religion and our world.",
          }),
          new DhikrEntryModel({
            arabic: "وَكُنْ لَنَا صَاحِبًا فِي سَفَرِنَا وَخَلِيفَةً فِي أَهْلِنَا",
            translit: "Wa kun lanā ṣāḥiban fī safarinā wa khalīfatan fī ahlinā",
            translation:
              "And be for us a companion in our journey and a guardian in our families.",
          }),
          new DhikrEntryModel({
            arabic: "وَاطْمِسْ عَلَى وُجُوهِ أَعْدَائِنَا",
            translit: "Waṭmis ‛alā wujūhi a‛dā’inā",
            translation: "And blind the faces of our enemies.",
          }),
          new DhikrEntryModel({
            arabic: "وَامْسَخْهُمْ عَلَى مَكَانَتِهِم فَلَا يَستَطِيعُونَ الْمُضِيَّ وَلَا الْمَجِيءَ إِلَيْنَا",
            translit:
              "Wamsakhhum ‛alā makānatihim falā yastaṭī‛ūnal muḍiyya wa lal majī’a ilaynā",
            translation:
              "And transfigure them in their places, so that they are unable to proceed or to come to us.",
          }),
        ],
      }),
      ya_sin_66_67(1, "", false),
      ya_sin_1_9(1, "", false),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "شَاهَتِ الْوُجُوهُ",
            translit: "Shāhatil wujūh",
            translation: "May the faces be disfigured.",
            repeat: 3,
          }),
        ],
      }),
      taha_111(1, "", false),
      naml_1(1, "", false),
      shura_1_2(1, "", false),
      rahman_19_20(1, "", false),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "حمٓ",
            translit: "Ḥā Mīm",
            translation: "Ha Mim.",
            repeat: 7,
          }),
          new DhikrEntryModel({
            arabic: "حُمَّ الْأَمْرُ وَجَاءَ النَّصْرُ فَعَلَيْنَا لَا يُنْصَرُونَ",
            translit: "Ḥummal amru wa jā’an naṣru fa‛alaynā lā yunṣarūn",
            translation:
              "The matter is decreed, and victory has come, so against us they shall not be victorious.",
          }),
        ],
      }),
      ghafir_1_3(1, "", false),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "بِسْمِ اللَّهِ بَابُنَا",
            translit: "Bismillāhi bābunā",
            translation: "In the name of Allah is our door.",
          }),
          new DhikrEntryModel({
            arabic: "تَبَارَكَ حِيطَانُنَا",
            translit: "Tabāraka ḥīṭānunā",
            translation: "Blessed is our enclosure.",
          }),
          new DhikrEntryModel({
            arabic: "يسٓ سَقْفُنَا",
            translit: "Yā Sīn saqfunā",
            translation: "Ya Sin is our roof.",
          }),
          new DhikrEntryModel({
            arabic: "كٓهيعٓصٓ كِفَايَتُنَا",
            translit: "Kāf Hā Yā ‛Ayn Ṣād kifāyatunā",
            translation: "Kaf Ha Ya 'Ayn Sad is our sufficiency.",
          }),
          new DhikrEntryModel({
            arabic: "حمٓ عٓسٓقٓ حِمَايَتُنَا",
            translit: "Ḥā Mīm ‛Ayn Sīn Qāf ḥimāyatunā",
            translation: "Ha Mim 'Ayn Sin Qaf is our protection.",
          }),
        ],
      }),
      baqarah_137(1, "", false),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "سَتْرُ الْعَرْشِ مَسْبُولٌ عَلَيْنَا",
            translit: "Sitrul ‛arshi masbūlun ‛alaynā",
            translation: "The veil of the Throne is extended over us.",
          }),
          new DhikrEntryModel({
            arabic: "وَعَيْنُ اللَّهِ نَاظِرَةٌ إِلَيْنَا",
            translit: "Wa ‛aynullāhi nāẓiratun ilaynā",
            translation: "And the eye of Allah is watching over us.",
          }),
          new DhikrEntryModel({
            arabic: "بِحَوْلِ اللَّهِ لَا يُقْدَرُ عَلَيْنَا",
            translit: "Biḥawlillāhi lā yuqdaru ‛alaynā",
            translation: "By the power of Allah, none can overcome us.",
          }),
        ],
      }),
      buruj_20_22(1, "", false),
      yusuf_64(1, "", false),
      a_raf_196(1, "", false),
      tawbah_129_section(1, "", false),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "بِسۡمِ ٱللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
            translit:
              "Bismillāhilladhī lā yaḍurru ma‛asmihī shay’un fil arḍi wa lā fis samā’i wa huwas samī‛ul ‛alīm",
            translation:
              "In the name of Allah, with whose name nothing can cause harm on earth or in the heavens, and He is the All-Hearing, the All-Knowing.",
            repeat: 3,
          }),
          new DhikrEntryModel({
            arabic: "وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّهِ الْعَلِيِّ الْعَظِيمِ",
            translit: "Wa lā ḥawla wa lā quwwata illā billāhil ‛aliyyil ‛aẓīm",
            translation:
              "And there is no might nor power except with Allah, the Most High, the Most Great.",
          }),
        ],
      }),
      ahzab_56(1, "", false),
      baqarah_ayat_al_kursi(
        1,
        "Ayatul Kursi - it is better if it is read in one breath",
      ),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا اللَّهُ يَا نُورُ يَا حَقُّ يَا مُبِينُ",
            translit: "Yā Allāhu yā Nūru yā Ḥaqqu yā Mubīnu",
            translation: "O Allah, O Light, O Truth, O Clear One",
          }),
          new DhikrEntryModel({
            arabic: "اُكْسُنِي مِنْ نُورِكَ",
            translit: "uksunī min nūrika",
            translation: "clothe me from Your light",
          }),
          new DhikrEntryModel({
            arabic: "وَعَلِّمْنِي مِنْ عِلْمِكَ",
            translit: "wa ‛allimnī min ‛ilmika",
            translation: "teach me from Your knowledge",
          }),
          new DhikrEntryModel({
            arabic: "وَأَفْهِمْنِي عَنْكَ",
            translit: "wa afhimnī ‛anka",
            translation: "establish me in Your presence",
          }),
          new DhikrEntryModel({
            arabic: "وَأَسْمِعْنِي مِنْكَ",
            translit: "wa asmi‛nī minka",
            translation: "make me understand from You",
          }),
          new DhikrEntryModel({
            arabic: "وَبَصِّرنِي بِكَ",
            translit: "wa baṣṣirnī bika",
            translation: "make me hear from You",
          }),
          new DhikrEntryModel({
            arabic: "وَأَقِمْنِي بِشُهُودِكَ",
            translit: "wa aqimnī bishuhūdika",
            translation: "make me see by You",
          }),
          new DhikrEntryModel({
            arabic: "وَعَرِّفْنِي الطَّرِيقَ إِلَيْكَ",
            translit: "wa ‛arrifniṭ ṭarīqa ilayka",
            translation: "make it easy for me by Your grace",
          }),
          new DhikrEntryModel({
            arabic: "وَهَوِّنْهَا عَلَيَّ بِفَضْلِكَ",
            translit: "wa hawwinhā ‛alayya bifaḍlika",
            translation: "show me the way to You",
          }),
          new DhikrEntryModel({
            arabic: "وَأَلْبِسْنِي لِبَاسَ التَّقْوَى مِنْكَ",
            translit: "wa albisnī libāsat taqwā minka",
            translation: "and clothe me with the garment of piety from You",
          }),
          new DhikrEntryModel({
            arabic:
              "إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. يَا سَمِيعُ يَا عَلِيمُ يَا حَلِيمُ يَا عَلِيُّ يَا عَظِيمُ يَا اللَّهُ",
            translit:
              "innaka ‛alā kulli shay’in qadīr. Yā Samī‛u yā ‛Alīmu yā Ḥalīmu yā ‛Aliyyu yā ‛Aẓīmu yā Allāhu",
            translation:
              "Indeed, You have power over all things. O All-Hearing, O All-Knowing, O Forbearing, O Most High, O Supreme, O Allah",
          }),
          new DhikrEntryModel({
            arabic: "اِسْمَعْ دُعَائِي بِخَصَائِصِ لُطْفِكَ آمِينَ",
            translit: "isma‛ du‛ā’ī bikhaṣā’iṣi luṭfika, āmīn",
            translation:
              "hear my prayer with the specialties of Your subtlety, Amin.",
          }),
          new DhikrEntryModel({
            arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ كُلِّهَا مِنْ شَرِّ مَا خَلَقَ",
            translit:
              "A‛ūdhu bikalimātillāhit tāmmāti kullihā min sharri mā khalaq",
            translation:
              "I seek refuge in the perfect words of Allah from the evil of what He has created.",
            repeat: 3,
          }),
          new DhikrEntryModel({
            arabic: "يَا عَظِيمَ السُّلْطَانِ",
            translit: "Yā ‛Aẓīmas sulṭāni",
            translation: "O great of authority",
          }),
          new DhikrEntryModel({
            arabic: "يَا قَدِيمَ الْإِحْسَانِ",
            translit: "yā Qadīmal iḥsāni",
            translation: "O ancient of goodness",
          }),
          new DhikrEntryModel({
            arabic: "يَا دَائِمَ النَّعْمَاءِ",
            translit: "yā Dā’iman na‛mā’i",
            translation: "O eternal of blessings",
          }),
          new DhikrEntryModel({
            arabic: "يَا بَاسِطَ الرِّزْقِ",
            translit: "yā Bāsiṭar rizqi",
            translation: "O extender of provision",
          }),
          new DhikrEntryModel({
            arabic: "يَا كَثِيرَ الْخَيْرَاتِ",
            translit: "yā Kathīral khayrāti",
            translation: "O abundant of good things",
          }),
          new DhikrEntryModel({
            arabic: "يَا وَاسِعَ الْعَطَاءِ",
            translit: "yā Wāsi‛al ‛aṭā’i",
            translation: "O vast of giving",
          }),
          new DhikrEntryModel({
            arabic: "يَا دَافِعَ الْبَلَاءِ",
            translit: "yā Dāfi‛al balā’i",
            translation: "O repeller of affliction",
          }),
          new DhikrEntryModel({
            arabic: "وَيَا سَامِعَ الدُّعَاءِ",
            translit: "wa yā Sāmi‛ad du‛ā’i",
            translation: "O hearer of prayer",
          }),
          new DhikrEntryModel({
            arabic: "يَا حَاضِرًا لَيْسَ بِغَائِبٍ",
            translit: "yā Ḥāḍiran laysa bighā’ibin",
            translation: "O present one who is not absent",
          }),
          new DhikrEntryModel({
            arabic: "يَا مَوجُودًا عِنْدَ الشَّدَائِدِ",
            translit: "yā Mawjūdan ‛indash shadā’idi",
            translation: "O existent one at times of hardship",
          }),
          new DhikrEntryModel({
            arabic: "يَا خَفِيَّ اللُّطْفِ",
            translit: "yā Khafiyyal luṭfi",
            translation: "O subtle of kindness",
          }),
          new DhikrEntryModel({
            arabic: "يَا لَطِيفَ الصُّنْعِ",
            translit: "yā Laṭīfaṣ ṣun‛i",
            translation: "O gentle of creation",
          }),
          new DhikrEntryModel({
            arabic: "يَا حَلِيمًا لَا يَعْجَلُ",
            translit: "yā Ḥalīman lā ya‛jalu",
            translation: "O forbearing one who does not hasten",
          }),
          new DhikrEntryModel({
            arabic: "اِقْضِ حَاجَتِي بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِينَ",
            translit: "iqḍi ḥājatī biraḥmatika yā Arḥamar rāḥimīn",
            translation:
              "fulfill my need by Your mercy, O most merciful of the merciful.",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ إِنَّكَ تَعْلَمُ مَا نَحْنُ فِيهِ",
            translit: "Allāhumma innaka ta‛lamu mā naḥnu fīhi",
            translation: "O Allah, You know what we are in",
          }),
          new DhikrEntryModel({
            arabic: "وَمَا نَطْلُبُهُ وَنَرْتَجِيهِ مِنْ رَحْمَتِكَ فِي أَمْرِنَا كُلِّه",
            translit:
              "wa mā naṭlubuhū wa nartajīhi min raḥmatika fī amrinā kullih",
            translation:
              "and what we seek and hope for from Your mercy in all our affairs",
          }),
          new DhikrEntryModel({
            arabic: "فَيَسِّرْ لَنَا مَا نَحْنُ فِيهِ مِنْ سَفَرِنَا وَمَا نَطْلُبُهُ مِنْ حَوَائِجِنَا",
            translit:
              "fayassir lanā mā naḥnu fīhi min safarinā wa mā naṭlubuhū min ḥawā’ijinā",
            translation:
              "So make easy for us what we are in of our journey and what we seek of our needs",
          }),
          new DhikrEntryModel({
            arabic: "وَقَرِّبْ عَلَيْنَا الْمَسَافَاتِ",
            translit: "wa qarrib ‛alaynal masāfāti",
            translation: "and shorten the distances for us",
          }),
          new DhikrEntryModel({
            arabic: "وَسَلِّمْنَا مِنَ الْعِلَلِ وَالْآفَاتِ",
            translit: "wa sallimnā minal ‛ilali wal āfāti",
            translation: "and save us from illnesses and calamities",
          }),
          new DhikrEntryModel({
            arabic: "وَلَا تَجْعَلِ الدُّنْيَا أَكْبَرَ هَمِّنَا",
            translit: "wa lā taj‛alid dunyā akbara hamminā",
            translation: "and do not make this world our greatest concern",
          }),
          new DhikrEntryModel({
            arabic: "وَلَا مَبْلَغَ عِلْمِنَا",
            translit: "wa lā mablagha ‛ilminā",
            translation: "nor the extent of our knowledge",
          }),
          new DhikrEntryModel({
            arabic: "وَلَا تُسَلِّطْ عَلَيْنَا مَنْ لَا يَرْحَمُنَا",
            translit: "wa lā tusalliṭ ‛alaynā man lā yarḥamunā",
            translation:
              "and do not give authority over us to one who will not have mercy on us",
          }),
          new DhikrEntryModel({
            arabic: "بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِينَ",
            translit: "biraḥmatika yā Arḥamar rāḥimīn",
            translation: "by Your mercy, O most merciful of the merciful.",
          }),
          new DhikrEntryModel({
            arabic: "وَصَلَّى اللَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَآلِهِ وَصَحْبِهِ وَسَلَّمَ",
            translit:
              "Wa ṣallallāhu ‛alā sayyidinā Muḥammadin wa ālihī wa ṣaḥbihī wa sallam",
            translation:
              "And may Allah send blessings and peace upon our master Muhammad and his family and companions.",
          }),
        ],
      }),
    ],
  }),
];

export default hizbAlBahrContent;
