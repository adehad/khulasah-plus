import { ikhlas } from "@/data/shared/quran";
import { ghafir_44 } from "@/data/shared/quran-partial";
import {
  DhikrEntryModel,
  DhikrModel,
  QuranDhikrEntryModel,
  WirdModel,
} from "@/models/recitation";

export default [
  new WirdModel({
    title: "Wird of Imam an-Nawawi",
    entries: [
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
            translit: "Bismillāhir raḥmānir raḥīm",
            translation:
              "In the name of Allāh, the Most Compassionate, the Most Merciful.",
          }),
          new DhikrEntryModel({
            arabic: "بِسْمِ ٱللَّهِ",
            translit: "Bismillāh",
            translation: "In the name of Allāh.",
          }),
          new DhikrEntryModel({
            arabic: "ٱللَّهُ أَكْبَرُ",
            translit: "Allāhu akbar",
            translation: "Allāh is Greater.",
          }),
          new DhikrEntryModel({
            arabic: "ٱللَّهُ أَكْبَرُ",
            translit: "Allāhu akbar",
            translation: "Allāh is Greater.",
          }),
          new DhikrEntryModel({
            arabic:
              "ٱللَّهُ أَكْبَرُ أَقُولُ عَلَى نَفْسِي وَعَلَى دِيْنِي وَعَلَى أَهْلِي وَعَلَى أَوْلَادِي وَعَلَى مَالِي وَعَلَى أَصْحَابِي وَعَلَى أَدْيَانِهِمْ وَعَلَى أَمْوَالِهِمْ",
            translit:
              "Allāhu akbar aqūlu ‛alā nafsī, wa ‛alā dīnī, wa ‛alā ahlī, wa ‛alā awlādī, wa ‛alā mālī, wa ‛alā aṣḥābī, wa ‛alā adyānihim, wa ‛alā amwālihim",
            translation:
              "Allāh is Greater. I say over myself, my religion, my family, my children, my wealth, my companions, their religions and their wealth:",
          }),
          new DhikrEntryModel({
            arabic: "أَلْفَ أَلْفِ أَلْفِ لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّهِ الْعَلِيِّ الْعَظِيمِ",
            translit:
              "alfa alfi alfi lā ḥawla wa lā quwwata illā billāhil ‛aliyyil ‛aẓīm.",
            translation:
              "a thousand thousand thousand times, there is no might and no power except through Allāh, the Most High, the Almighty.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "بِسْمِ ٱللَّهِ",
            translit: "Bismillāh",
            translation: "In the name of Allāh.",
          }),
          new DhikrEntryModel({
            arabic: "ٱللَّهُ أَكْبَرُ",
            translit: "Allāhu akbar",
            translation: "Allāh is Greater.",
          }),
          new DhikrEntryModel({
            arabic: "ٱللَّهُ أَكْبَرُ",
            translit: "Allāhu akbar",
            translation: "Allāh is Greater.",
          }),
          new DhikrEntryModel({
            arabic:
              "ٱللَّهُ أَكْبَرُ أَقُولُ عَلَى نَفْسِي وَعَلَى دِيْنِي وَعَلَى أَهْلِي وَعَلَى أَوْلَادِي وَعَلَى مَالِي وَعَلَى أَصْحَابِي وَعَلَى أَدْيَانِهِمْ وَعَلَى أَمْوَالِهِمْ",
            translit:
              "Allāhu akbar aqūlu ‛alā nafsī, wa ‛alā dīnī, wa ‛alā ahlī, wa ‛alā awlādī, wa ‛alā mālī, wa ‛alā aṣḥābī, wa ‛alā adyānihim, wa ‛alā amwālihim",
            translation:
              "Allāh is Greater. I say over myself, my religion, my family, my children, my wealth, my companions, their religions and their wealth:",
          }),
          new DhikrEntryModel({
            arabic: "أَلْفَ أَلْفِ أَلْفِ لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّهِ الْعَلِيِّ الْعَظِيمِ",
            translit:
              "alfa alfi alfi lā ḥawla wa lā quwwata illā billāhil ‛aliyyil ‛aẓīm.",
            translation:
              "a thousand thousand thousand times, there is no might and no power except through Allāh, the Most High, the Almighty.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "بِسْمِ ٱللَّهِ",
            translit: "Bismillāh",
            translation: "In the name of Allāh.",
          }),
          new DhikrEntryModel({
            arabic: "ٱللَّهُ أَكْبَرُ",
            translit: "Allāhu akbar",
            translation: "Allāh is Greater.",
          }),
          new DhikrEntryModel({
            arabic: "ٱللَّهُ أَكْبَرُ",
            translit: "Allāhu akbar",
            translation: "Allāh is Greater.",
          }),
          new DhikrEntryModel({
            arabic:
              "ٱللَّهُ أَكْبَرُ أَقُولُ عَلَى نَفْسِي وَعَلَى دِيْنِي وَعَلَى أَهْلِي وَعَلَى أَوْلَادِي وَعَلَى مَالِي وَعَلَى أَصْحَابِي وَعَلَى أَدْيَانِهِمْ وَعَلَى أَمْوَالِهِمْ",
            translit:
              "Allāhu akbar, aqūlu ‛alā nafsī, wa ‛alā dīnī, wa ‛alā ahlī, wa ‛alā awlādī, wa ‛alā mālī, wa ‛alā aṣḥābī, wa ‛alā adyānihim, wa ‛alā amwālihim",
            translation:
              "Allāh is Greater. I say over myself, my religion, my family, my children, my wealth, my companions, their religions and their wealth:",
          }),
          new DhikrEntryModel({
            arabic: "أَلْفَ أَلْفِ أَلْفِ لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّهِ الْعَلِيِّ الْعَظِيمِ",
            translit:
              "alfa alfi alfi lā ḥawla wa lā quwwata illā billāhil ‛aliyyil ‛aẓīm.",
            translation:
              "a thousand thousand thousand times, there is no might and no power except through Allāh, the Most High, the Almighty.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "بِسْمِ ٱللَّهِ",
            translit: "Bismillāh",
            translation: "In the name of Allāh.",
          }),
          new DhikrEntryModel({
            arabic: "وَبِٱللَّهِ",
            translit: "wa billāh",
            translation: "And by Allāh.",
          }),
          new DhikrEntryModel({
            arabic: "وَمِنَ ٱللَّهِ",
            translit: "wa minallāh",
            translation: "And from Allāh.",
          }),
          new DhikrEntryModel({
            arabic: "وَإِلَى ٱللَّهِ",
            translit: "wa ilallāh",
            translation: "And to Allāh.",
          }),
          new DhikrEntryModel({
            arabic: "وَعَلَى ٱللَّهِ",
            translit: "wa ‛alallāh",
            translation: "And upon Allāh.",
          }),
          new DhikrEntryModel({
            arabic: "وَفِي ٱللَّهِ",
            translit: "wa fillāh",
            translation: "And in Allāh.",
          }),
          new DhikrEntryModel({
            arabic: "وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّهِ الْعَلِيِّ الْعَظِيمِ",
            translit: "wa lā ḥawla wa lā quwwata illā billāhil ‛aliyyil ‛aẓīm.",
            translation:
              "And there is no might and no power except through Allāh, the Most High, the Almighty.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "بِسْمِ ٱللَّهِ عَلَى دِيْنِي وَعَلَى نَفْسِي",
            translit: "Bismillāhi ‘alā dīnī, wa ‛alā nafsī",
            translation:
              "In the name of Allāh, over my religion and over myself.",
          }),
          new DhikrEntryModel({
            arabic: "بِسْمِ ٱللَّهِ عَلَى مَالِي وَعَلَى أَهْلِي وَعَلَى أَوْلَادِي وَعَلَى أَصْحَابِي",
            translit:
              "bismillāhi ‘alā mālī wa ‘alā ahlī, wa ‛alā awlādī, wa ‛alā aṣḥābī",
            translation:
              "In the name of Allāh, over my wealth, my family, my children and my companions.",
          }),
          new DhikrEntryModel({
            arabic: "بِسْمِ ٱللَّهِ عَلَى كُلِّ شَيْءٍ أَعْطَانِيهِ رَبِّي",
            translit: "bismillāhi ‛alā kulli shay’in a‛ṭānīhi rabbi",
            translation:
              "In the name of Allāh, over everything my Lord has given me.",
          }),
          new DhikrEntryModel({
            arabic:
              "بِسْمِ ٱللَّهِ رَبِّ السَّمَوَاتِ السَّبْعِ وَرَبِّ الأَرضِينَ السَّبْعِ وَرَبِّ الْعَرْشِ الْعَظِيمِ",
            translit:
              "bismillāhi rabbis samāwātis sab‛i, wa rabbil araḍīnas sab‛i, wa rabbil ‛arshil ‛aẓīm.",
            translation:
              "In the name of Allāh, Lord of the seven heavens, Lord of the seven earths, and Lord of the Mighty Throne.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "بِسْمِ ٱللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
            translit:
              "Bismillāhilladhī lā yaḍurru ma‛asmihī shay’un fil arḍi wa lā fissamā’i wa huwas samī‛ul ‛alīm.",
            translation:
              "In the name of Allāh, with whose name nothing on earth or in heaven can cause harm, and He is the All-Hearing, the All-Knowing.",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "بِسْمِ ٱللَّهِ خَيْرِ الْأَسْمَاءِ فِي الْأَرْضِ وَفِي السَّمَاءِ",
            translit: "Bismillāhi khayril asmā’i fil’arḍi wa fissamā’i",
            translation:
              "In the name of Allāh, the best of names on earth and in heaven.",
          }),
          new DhikrEntryModel({
            arabic: "بِسْمِ ٱللَّهِ أَفْتَتِحُ وَبِهِ أَخْتَتِمُ",
            translit: "bismillāhi aftatiḥu wa bihī akhtatimu",
            translation:
              "In the name of Allāh I begin, and with it I conclude.",
          }),
          new DhikrEntryModel({
            arabic: "ٱللَّهُ ٱللَّهُ ٱللَّهُ رَبِّي لَا أُشْرِكُ بِهِ أَحَدًا",
            translit: "Allāh Allāh Allāhu rabbī lā ushriku bihī aḥadan",
            translation:
              "Allāh, Allāh, Allāh is my Lord; I associate none with Him.",
          }),
          new DhikrEntryModel({
            arabic: "ٱللَّهُ ٱللَّهُ ٱللَّهُ لَا إِلَهَ إِلَّا هُو",
            translit: "Allāh Allāh Allāhu lā ilāha illā huwa",
            translation: "Allāh, Allāh, Allāh; there is no god but Him.",
          }),
          new DhikrEntryModel({
            arabic: "ٱللَّهُ ٱللَّهُ ٱللَّهُ أَعَزُّ وَأَجَلُّ وَأَكْبَرُ مِمَّا أَخَافُ وَأَحْذَرُ",
            translit:
              "Allāh Allāh Allāhu a‛azzu wa ajallu wa akbaru mimmā akhāfu wa aḥdharu.",
            translation:
              "Allāh, Allāh, Allāh is greater and mightier than what I fear and guard against.",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي وَمِنْ شَرِّ غَيْرِي وَمِنْ شَرِّ مَا خَلَقَ رَبِّي",
            translit:
              "Allāhumma innī a‛ūdhubika min sharri nafsī, wa min sharri ghayrī, wa min sharri mā khalaqa rabbi",
            translation:
              "O Allāh, I seek refuge in You from the evil of myself, the evil of others, and the evil of what my Lord has created.",
          }),
          new DhikrEntryModel({
            arabic: "بِكَ اللَّهُمَّ أَحْتَرِزُ مِنْهُمْ",
            translit: "Bikallāhumma aḥtarizu minhum",
            translation: "In You, O Allāh, I take protection from them.",
          }),
          new DhikrEntryModel({
            arabic: "وَبِكَ اللَّهُمَّ أَدْرَأُ فِي نُحُورِهِمْ",
            translit: "wa bikallāhumma adra’u fī nuḥūrihim",
            translation: "And in You, O Allāh, I repel them at their throats.",
          }),
          new DhikrEntryModel({
            arabic: "وَبِكَ اللَّهُمَّ أَعُوذُ مِنْ شُرُوْرِهِمْ",
            translit: "wa bikallāhumma a‛ūdhu min shurūrihim",
            translation: "And in You, O Allāh, I seek refuge from their evils.",
          }),
          new DhikrEntryModel({
            arabic:
              "وَأَسْتَكْفِيكَ إِيَّاهُمْ وَأُقَدِّمُ بَيْنَ يَدَيَّ وَأَيْدِي مَنْ أَحَاطَتْهُ عِنَايَتِي وَشَمِلَتْهُ إِحَاطَتِي:",
            translit:
              "wa astakfīka iyyāhum, wa uqaddimu bayna yadayya wa aydī man aḥāṭathu ‛ināyatī wa shamalathu iḥāṭatī:",
            translation:
              "And I ask You to suffice me against them. I place before me, and before those whom my care and concern encompass:",
          }),
        ],
      }),
      ikhlas(3),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "وَمِثْلَ ذَلِكَ عَنْ يَمِينِي وَأَيْمَانِهِمْ",
            translit: "Wa mithlu dhālika ‛an yamīnī wa aymānihim",
            translation: "the like of that on my right and on their right,",
          }),
          new DhikrEntryModel({
            arabic: "وَمِثْلَ ذَلِكَ عَنْ شِمَالِي وَعَنْ شَمَائِلِهِمْ",
            translit: "wa mithlu dhālika ‛an shimālī wa ‛an shamā’ilihim",
            translation: "the like of that on my left and on their left,",
          }),
          new DhikrEntryModel({
            arabic: "وَمِثْلَ ذَلِكَ أَمَامِي وَأَمَامَهُمْ",
            translit: "wa mithlu dhālika amāmī wa amāmihim",
            translation:
              "the like of that in front of me and in front of them,",
          }),
          new DhikrEntryModel({
            arabic: "وَمِثْلَ ذَلِكَ مِنْ خَلْفِي وَمِنْ خَلْفِهِمْ",
            translit: "wa mithlu dhālika min khalfī wa min khalfihim",
            translation: "the like of that behind me and behind them,",
          }),
          new DhikrEntryModel({
            arabic: "وَمِثْلَ ذَلِكَ مِنْ فَوْقِي وَمِنْ فَوْقِهِمْ",
            translit: "wa mithlu dhālika min fawqī wa min fawqihim",
            translation: "the like of that above me and above them,",
          }),
          new DhikrEntryModel({
            arabic: "وَمِثْلَ ذَلِكَ مِنْ تَحْتِي وَمِنْ تَحْتِهِمْ",
            translit: "wa mithlu dhālika min taḥtī wa min taḥtihim",
            translation: "the like of that beneath me and beneath them,",
          }),
          new DhikrEntryModel({
            arabic: "وَمِثْلَ ذَلِكَ مُحِيْطٌ بِي وَبِهِمْ وَبِمَا أَحَطْنَا بِه",
            translit:
              "wa mithlu dhālika muḥīṭum bī wa bihim wa bimā aḥaṭnā bihī.",
            translation:
              "and the like of that encompassing me, them, and all that we have encompassed.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ لِي وَلَهُمْ مِنْ خَيْرِكَ بِخَيْرِكَ الَّذِي لَا يَمْلِكُهُ غَيْرُكَ",
            translit:
              "Allāhumma innī as’aluka lī wa lahum min khayrika bi khayrikalladhī lā yamlikuhū ghayruk.",
            translation:
              "O Allāh, I ask You, for myself and for them, of Your good, by Your goodness which none but You possesses.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ اجْعَلْنِي وَإِيَّاهُمْ فِي حِفْظِكَ وَعِيَاذِكَ وَعِبَادِكَ وَعِيَالِكَ وَجِوَارِكَ وَأَمْنِكَ وَأَمَانَتِكَ وَحِزْبِكَ وَحِرْزِكَ وَكَنَفِكَ وَسَتْرِكَ وَلُطْفِكَ مِنْ كُلِّ شَيْطَانٍ وَسُلْطَانٍ وَإِنْسٍ وَجَانٍّ وَبَاغٍ وَحَاسِدٍ وَسَبُعٍ وَحَيَّةٍ وَعَقْرَبٍ",
            translit:
              "Allāhummaj‛alnī wa iyyāhum fī ḥifẓika wa ‛iyādhika wa ‛ibādika wa ‛iyālika wa jiwārika wa amnika wa amānatika wa ḥizbika wa ḥirzika wa kanafika wa sitrika wa luṭfika min kulli shayṭānin wa sulṭān",
            translation:
              "O Allāh, place me and them in Your safekeeping, Your refuge, Your servants, Your charge, Your protection, Your security, Your trust, Your party, Your stronghold, Your shelter, Your covering and Your gentleness, away from every devil and ruler, human and jinn, aggressor and envier, predator, snake and scorpion,",
          }),
          new DhikrEntryModel({
            arabic: "وَمِنْ شَرِّ كُلِّ دَابَّةٍ أَنْتَ آخِذٌ بِنَاصِيَتِهَا إِنَّ رَبِّي عَلَى صِرَاطٍ مُسْتَقِيمٍ",
            translit:
              "wa insin wa jānn, wa bāghin wa ḥāsidin, wa sabu‛in wa ḥayyatin wa ‛aqrabin, wa min sharri kulli dābbatin anta ākhidhum bi nāṣiyatihā inna rabbi ‛alā ṣirāṭim mustaqīm.",
            translation:
              "and from the evil of every creature whose forelock You hold. Truly my Lord is on a straight path.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "حَسْبِيَ الرَّبُ مِنَ الْمَرْبُوبِينَ",
            translit: "Ḥasbiyar rabbu minal marbūbīn",
            translation:
              "Sufficient for me is the Lord against those who are lorded over.",
          }),
          new DhikrEntryModel({
            arabic: "حَسْبِيَ الْخَالِقُ مِنَ الْمَخْلُوقِينَ",
            translit: "ḥasbiyal khāliqu minal makhlūqīn",
            translation:
              "Sufficient for me is the Creator against those who are created.",
          }),
          new DhikrEntryModel({
            arabic: "حَسْبِيَ الرَّازِقُ مِنَ الْمَرْزُوقِينَ",
            translit: "ḥasbiyar rāziqu minal marzūqīn",
            translation:
              "Sufficient for me is the Provider against those who are provided for.",
          }),
          new DhikrEntryModel({
            arabic: "حَسْبِيَ السَّاتِرُ مِنَ الْمَسْتُورِينَ",
            translit: "ḥasbiyas sātiru minal mastūrīn",
            translation:
              "Sufficient for me is the Concealer against those who are concealed.",
          }),
          new DhikrEntryModel({
            arabic: "حَسْبِيَ النَّاصِرُ مِنَ الْمَنْصُورِينَ",
            translit: "ḥasbiyan nāṣiru minal manṣūrīn",
            translation:
              "Sufficient for me is the Helper against those who are helped.",
          }),
          new DhikrEntryModel({
            arabic: "حَسْبِيَ الْقَاهِرُ مِنَ الْمَقْهُورِينَ",
            translit: "ḥasbiyal qāhiru minal maqhūrīn",
            translation:
              "Sufficient for me is the Subduer against those who are subdued.",
          }),
          new DhikrEntryModel({
            arabic: "حَسْبِيَ الَّذِي هُوَ حَسْبِي",
            translit: "ḥasbiyal ladhī huwa ḥasbī",
            translation: "Sufficient for me is He who is my sufficiency.",
          }),
          new DhikrEntryModel({
            arabic: "حَسْبِي مَنْ لَمْ يَزَلْ حَسْبِي",
            translit: "ḥasbiya mal lam yazal ḥasbī",
            translation:
              "Sufficient for me is He who has always been my sufficiency.",
          }),
          new DhikrEntryModel({
            arabic: "حَسْبِيَ ٱللَّهُ وَنِعْمَ الْوَكِيْلُ",
            translit: "ḥasbiyallāhu wa ni’mal wakīl",
            translation:
              "Allāh is sufficient for me, and He is the best Guardian.",
          }),
          new DhikrEntryModel({
            arabic: "حَسْبِيَ ٱللَّهُ مِنْ جَمِيْعِ خَلْقِهِ",
            translit: "ḥasbiyallāhu min jamī‛i khalqihī",
            translation: "Allāh is sufficient for me against all His creation.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new QuranDhikrEntryModel({
            arabic: "إِنَّ وَلِيِّيَ ٱللَّهُ ٱلَّذِى نَزَّلَ ٱلْكِتَٰبَ ۖ وَهُوَ يَتَوَلَّى ٱلصَّٰلِحِينَ",
            translit:
              "Inna waliyyi yallāhul ladhī nazzalal kitāb, wa huwa yatawallaṣ ṣāliḥīn.",
            translation:
              "Indeed, my protector is Allāh, who has sent down the Book; and He is an ally to the righteous.",
            surah: 7,
            verse: 196,
          }),
          new QuranDhikrEntryModel({
            arabic:
              "وَإِذَا قَرَأْتَ ٱلْقُرْءَانَ جَعَلْنَا بَيْنَكَ وَبَيْنَ ٱلَّذِينَ لَا يُؤْمِنُونَ بِٱلْآخِرَةِ حِجَابًا مَّسْتُورًا",
            translit:
              "Wa'idhā qara'tal qur'āna ja‛alnā baynaka wa baynal ladhīna lā yu'minūna bil'ākhirati ḥijābam mastūrā.",
            translation:
              "And when you recite the Qur’ān, We put between you and those who do not believe in the Hereafter a concealed partition.",
            surah: 17,
            verse: 45,
          }),
          new QuranDhikrEntryModel({
            arabic:
              "وَجَعَلْنَا عَلَىٰ قُلُوبِهِمْ أَكِنَّةً أَن يَفْقَهُوهُ وَفِىٓ ءَاذَانِهِمْ وَقْرًا ۚ وَإِذَا ذَكَرْتَ رَبَّكَ فِى ٱلْقُرْءَانِ وَحْدَهُۥ وَلَّوْا۟ عَلَىٰٓ أَدْبَٰرِهِمْ نُفُورًا",
            translit:
              "Wa ja‛alnā ‛alā qulūbihim akinnatan ayyafqahūhu wa fī ādhānihim waqrā. Wa'idhā dhakarta rabbaka fil qur'āni waḥdahū wallaw ‛alā adbārihim nufūrā.",
            translation:
              "And We have placed over their hearts coverings, lest they understand it, and in their ears deafness. And when you mention your Lord alone in the Qur’ān, they turn back in aversion.",
            surah: 17,
            verse: 46,
          }),
        ],
      }),
      new DhikrModel({
        repeat: 7,
        entries: [
          new QuranDhikrEntryModel({
            arabic:
              "فَإِن تَوَلَّوْا۟ فَقُلْ حَسْبِىَ ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ۖ عَلَيْهِ تَوَكَّلْتُ ۖ وَهُوَ رَبُّ ٱلْعَرْشِ ٱلْعَظِيمِ",
            translit:
              "Fa'in tawallaw faqul ḥasbiyallāhu lā ilāha illā huwa, ‛alayhi tawakkaltu wa huwa rabbul ‛arshil ‛aẓīm.",
            translation:
              'But if they turn away, [O Muḥammad], say, "Sufficient for me is Allāh; there is no deity except Him. On Him I have relied, and He is the Lord of the Great Throne."',
            surah: 9,
            verse: 129,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّهِ الْعَلِيِّ الْعَظِيمِ وَصَلَّى ٱللَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ النَّبِيِّ الْأُمِّي وَعَلَى آلِهِ وَصَحْبِهِ وَسَلَّمَ",
            translit:
              "Wa lā ḥawla wa lā quwwata illā billāhil ‛aliyyil ‛aẓīm, wa ṣallallāhu ‛alā sayyidinā Muḥammadanin nabiyyil ummiyyi wa ‛alā ālihī wa ṣaḥbihī wa sallam.",
            translation:
              "Then blow lightly, without spitting, to your right (3 times), to your left (3 times), in front of you (3 times), and behind you (3 times).",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "خَبَأْتُ نَفْسِي فِي خَزَائِنِ بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
            translit: "Khabaʾtu nafsī fī khazā’ini bismillāhir raḥmānir raḥīm",
            translation:
              "I have hidden myself in the treasuries of: In the name of Allāh, the Most Compassionate, the Most Merciful.",
          }),
          new DhikrEntryModel({
            arabic: "أَقْفَالُهَا ثِقَتِي بِٱللَّهِ",
            translit: "aqfāluhā thiqatī billāh",
            translation: "Their locks are my trust in Allāh,",
          }),
          new DhikrEntryModel({
            arabic: "مَفَاتِيحُهَا لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّهِ",
            translit: "mafātīḥuhā lā ḥawla wa lā quwwata illā billāh",
            translation:
              "and their keys are: there is no might and no power except through Allāh.",
          }),
          new DhikrEntryModel({
            arabic: "أُدَافِعُ بِكَ اللَّهُمَّ عَنْ نَفْسِي مَا أُطِيقُ وَمَا لَا أُطِيقُ",
            translit: "udāfi‛u bikallāhumma ‛an nafsī mā uṭīqu wa mā lā uṭīqu",
            translation:
              "O Allāh, through You I defend myself against what I can bear and what I cannot bear.",
          }),
          new DhikrEntryModel({
            arabic: "لَا طَاقَةَ لِمَخْلُوقٍ مَعَ قُدْرَةِ الْخَالِقِ",
            translit: "lā ṭāqata limakhlūqin ma‛a qudratil khāliq",
            translation:
              "No creature has any power against the might of the Creator.",
          }),
          new DhikrEntryModel({
            arabic: "حَسْبِيَ ٱللَّهُ وَنِعْمَ الْوَكِيْلُ",
            translit: "Ḥasbiyallāhu wa ni‛mal wakīl",
            translation:
              "Allāh is sufficient for me, and He is the best Guardian.",
          }),
          new DhikrEntryModel({
            arabic: "بِخَفِيِّ لُطْفِ ٱللَّهِ",
            translit: "bikhafiyyi luṫfillāh",
            translation: "By the hidden kindness of Allāh,",
          }),
          new DhikrEntryModel({
            arabic: "بِلَطِيفِ صُنْعِ ٱللَّهِ",
            translit: "bilaṭīfi ṣun‛illāh",
            translation: "by the gentle handiwork of Allāh,",
          }),
          new DhikrEntryModel({
            arabic: "بِجَمِيلِ سَتْرِ ٱللَّهِ",
            translit: "bijamīli sitrillāh",
            translation: "by the beautiful covering of Allāh,",
          }),
          new DhikrEntryModel({
            arabic: "دَخَلْتُ فِي كَنَفِ ٱللَّهِ",
            translit: "dakhaltu fī kanafillāh",
            translation: "I have entered into the protection of Allāh.",
          }),
          new DhikrEntryModel({
            arabic: "تَشَفَّعْتُ بِسَيِّدِنَا رَسُولِ ٱللَّهِ",
            translit: "tashaffa‛tu bisayyidinā rasūlillāh",
            translation:
              "I have sought intercession through our master, the Messenger of Allāh.",
          }),
          new DhikrEntryModel({
            arabic: "تَحَصَّنْتُ بِأَسْمَاءِ ٱللَّهِ",
            translit: "taḥaṣṣantu bi asmā’illāh",
            translation: "I have fortified myself with the names of Allāh.",
          }),
          new DhikrEntryModel({
            arabic: "آمَنْتُ بِٱللَّهِ",
            translit: "āmantu billāh",
            translation: "I believe in Allāh.",
          }),
          new DhikrEntryModel({
            arabic: "تَوَكَّلْتُ عَلَى ٱللَّهِ",
            translit: "tawakkaltu ‛alallāh",
            translation: "I place my trust in Allāh.",
          }),
          new DhikrEntryModel({
            arabic: "ادَّخَرْتُ ٱللَّهَ لِكُلِّ شِدَّةٍ",
            translit: "iddakhar tullāha li kulli shiddah.",
            translation: "I have stored up Allāh for every hardship,",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ يَا مَنِ اسْمُهُ مَحبُوبٌ",
            translit: "Allāhumma yā manismuhū maḥbūbun",
            translation: "Then say:",
          }),
          new DhikrEntryModel({
            arabic: "وَوَجْهُهُ مَطْلُوبٌ",
            translit: "wa wajhuhū maṭlūb",
            translation: "and His countenance is sought.",
          }),
          new DhikrEntryModel({
            arabic: "اِكْفِنِي مَا قَلْبِي مِنْهُ مَرهُوبٌ",
            translit: "ikfinī mā qalbī minhu marhūb",
            translation: "Suffice me against that which my heart fears.",
          }),
          new DhikrEntryModel({
            arabic: "أَنْتَ غَالِبٌ غَيرُ مَغْلُوبٍ",
            translit: "anta ghālibun ghayru maghlūb.",
            translation: "You are Victorious and never defeated.",
          }),
          new DhikrEntryModel({
            arabic: "وَصَلَّى ٱللَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلَّم",
            translit:
              "Wa ṣallallāhu ‛alā sayyidinā Muḥammadin, wa ‛alā ālihī wa ṣaḥbihī wa sallam",
            translation:
              "May Allāh bless our master Muhammad, and his family and companions, and grant them peace.",
          }),
          new DhikrEntryModel({
            arabic: "حَسْبِيَ ٱللَّهُ وَنِعْمَ الْوَكِيلُ",
            translit: "ḥasbiyallāhu wa ni‛mal wakīl.",
            translation:
              "Allāh is sufficient for me, and He is the best Guardian.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "حَسْبُنَا ٱللَّهُ وَنِعْمَ الْوَكِيلُ",
            translit: "Ḥasbunallāha wa ni‛mal wakīl.",
            translation:
              "Allāh is sufficient for us, and He is the best Guardian.",
            repeat: 70,
          }),
        ],
      }),
      new DhikrModel({
        repeat: 11,
        entries: [ghafir_44()],
      }),
    ],
  }),
];
