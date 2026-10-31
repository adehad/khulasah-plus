import { falaq, ikhlas, nas } from "@/data/shared/quran";
import {
  baqarah_256,
  hashr_21_24,
  mu_minun_97,
  mu_minun_98,
  mu_minun_115_118,
  rum_17_19,
  saffat_79_81,
  talaq_12,
  tawbah_129,
} from "@/data/shared/quran-partial";
import { DhikrEntryModel, DhikrModel, WirdModel } from "@/models/recitation";

export default [
  new WirdModel({
    title: "Wird al Latif",
    instruction: "al-Wird al-Latif of Imam al-Haddad",
    entries: [
      ikhlas(3, "", true),
      falaq(3, "", true),
      nas(3, "", true),
      new DhikrModel({
        repeat: 3,
        entries: [mu_minun_97(), mu_minun_98()],
      }),
      mu_minun_115_118(1, "", false),
      rum_17_19(1, "", false),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "أَعُوذُ بِٱللَّهِ ٱلسَّمِيعِ ٱلْعَلِيمِ مِنَ ٱلشَّيْطَانِ ٱلرَّجِيم",
            translit:
              "Aʿūdhu billāhi as-Samīʿ al-ʿAlīm min ash-shayṭān ar-rajīm.",
            translation:
              "I seek refuge in Allah, the All-Hearing, the All-Knowing, from the rejected Devil.",
            repeat: 3,
          }),
        ],
      }),
      hashr_21_24(1, "", false),
      saffat_79_81(1, "", false),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "أَعُوذُ بِكَلِمَاتِ ٱللَّهِ ٱلتَّامَّاتِ مِنْ شَرِّ مَا خَلَق",
            translit:
              "Aʿūdhu bikalimāt Illāhi at-tāmmāti min sharri mā khalaq.",
            translation:
              "I take refuge in the complete words of Allah from the evil in what He has created.",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "بِسْمِ ٱللَّهِ ٱلَّذِي لَا يَضُرُّ مَعَ ٱسْمِهِ شَيْءٌ فِي ٱلْأَرْضِ وَلَا فِي ٱلسَّمَاءِ وَهُوَ ٱلسَّمِيعُ ٱلْعَلِيم",
            translit:
              "Bismillāh alladhī lā yaḍuru maʿ ismihi shayyʾun fil-arḍi wa lā fīs-samāʾi wa Huwa as-Samīʿ ul-ʿAlīm.",
            translation:
              "In the Name of Allah, with whose Name nothing on earth or in heaven can harm, and He is the All-Hearing, the All-Knowing.",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "ٱللَّهُمَّ إِنِّي أَصْبَحْتُ مِنْكَ فِي نِعْمَةٍ وَعَافِيَةٍ وَسَتْرٍ",
            translit:
              "Allāhumma innī aṣbaḥtu minka fī niʿmatin wa ʿāfiyatin wa satr,",
            translation:
              "O Allah! As morning comes upon me, I dwell in Your favor, well-being and protection;",
          }),
          new DhikrEntryModel({
            arabic: "فَأَتْمِمْ نِعْمَتَكَ عَلَيَّ وَعَافِيَتَكَ وَسَتْرَكَ فِي ٱلدُّنْيَا وَٱلْآخِرَة",
            translit:
              "faʾatmim niʿmataka ʿalayya wa ʿāfiyataka wa satraka fid-dunyā wal-ākhīrah.",
            translation:
              "so complete Your favor upon me, Your well-being, and Your protection, in this world and the next.",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "ٱللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ وَمَلَائِكَتَكَ وَجَمِيعَ خَلْقِكَ",
            translit:
              "Allāhumma innī aṣbaḥtu ushhiduka, wa ushhidu ḥamalata ʿarshika wa malāʾikataka wa jamīʿa khalqika,",
            translation:
              "O Allah! As morning comes upon me, I bear witness before You, the Bearers of Your Throne, Your angels, and all Your creation—",
          }),
          new DhikrEntryModel({
            arabic:
              "أَنَّكَ أَنْتَ ٱللَّهُ لَا إِلَهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ وَأَنَّ سَيِّدَنَا مُحَمَّدًا عَبْدُكَ وَرَسُولُك",
            translit:
              "annaka antaLlāhu lā ilāha illā anta waḥdaka lā sharīka laka, wa anna Sayyidanā Muḥammadan ʿabduka wa rasūluk.",
            translation:
              "that You are Allah, there is no god but You, alone with no partners, and that our master Muhammad is Your slave and messenger.",
            repeat: 4,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ حَمْدًا يُوَافِي نِعَمَهُ وَيُكَافِئُ مَزِيدَه",
            translit:
              "Al-ḥamdu lillāhi Rabb il-ʿālamīn, ḥamdan yuwāfī niʿamahu wa yukāfiʾu mazīdah.",
            translation:
              "Praise belongs to Allah, Lord of the Worlds—praise that is adequate to His favors and equal to His increase.",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        repeat: 3,
        entries: [
          new DhikrEntryModel({
            arabic: "آمَنْتُ بِٱللَّهِ ٱلْعَظِيمِ وَكَفَرْتُ بِٱلْجِبْتِ وَٱلطَّاغُوتِ",
            translit:
              "Āmantu billāh il-ʿAẓīm, wa kafartu bil jibti wat-ṭāghūt,",
            translation:
              "I believe in Allah the Almighty, and I denounce all idols and false gods,",
          }),
          new DhikrEntryModel({
            arabic: "وَٱسْتَمْسَكْتُ",
            translit: "wastamsaktu",
            translation: "and I grasp",
          }),
          baqarah_256(),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "رَضِيتُ بِٱللَّهِ رَبًّا وَبِٱلْإِسْلَامِ دِينًا وَبِسَيِّدِنَا مُحَمَّدٍ صَلَّى ٱللَّهُ عَلَيْهِ وَآلِهِ وَسَلَّمَ نَبِيًّا وَرَسُولًا",
            translit:
              "Raḍītu billāhi Rabba, wa bil Islāmi dīnā, wa bi Sayyidinā Muḥammadin ṣallā Allāhu ʿalayhi wa ālihi wa sallama nabīyyan wa rasūlā.",
            translation:
              "I am content with Allah as Lord, with Islam as religion, and with our master Muhammad (Allah’s peace and blessings be upon him and his family) as Prophet and Messenger.",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [tawbah_129(7)],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "ٱللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَآلِهِ وَصَحْبِهِ وَسَلِّمْ",
            translit:
              "Allāhumma ṣalli ʿalā Sayyidinā Muḥammadin wa ālihi wa ṣaḥbihi wa sallim.",
            translation:
              "O Allah, send blessings upon our master Muhammad, his Family and Companions, and grant them peace.",
            repeat: 10,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "ٱللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فُجَاءَةِ ٱلْخَيْرِ وَأَعُوذُ بِكَ مِنْ فُجَاءَةِ ٱلشَّرِّ",
            translit:
              "Allāhumma innī asʾaluka min fujāʾat il-khayr, wa aʿūdhu bika min fujāʾat ish-sharr.",
            translation:
              "O Allah! I ask You for sudden good and seek Your protection from sudden evil.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "ٱللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي",
            translit: "Allāhumma anta Rabbī lā ilāha illā anta khalaqtanī",
            translation:
              "O Allah! You are my Lord, there is no god but You, You created me",
          }),
          new DhikrEntryModel({
            arabic: "وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا ٱسْتَطَعْتُ",
            translit:
              "wa anā ʿabduka wa anā ʿalā ʿahdika wa waʿdika ma astaṭaʿtu",
            translation:
              "and I am Your slave. I uphold Your pledge and promise as well as I can;",
          }),
          new DhikrEntryModel({
            arabic: "أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ",
            translit: "aʿūdhu bika min sharri mā ṣanaʿtu",
            translation:
              "I seek Your protection against the evil that I have done;",
          }),
          new DhikrEntryModel({
            arabic:
              "أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَٱغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ ٱلذُّنُوبَ إِلَّا أَنْتَ",
            translit:
              "abūʾu laka bi niʿmatika ʿalayya wa abūʾu bi dhanbī, faghfir lī, faʾinnahu lā yaghfir udh-dhunūba illā anta.",
            translation:
              "I acknowledge Your favors upon me and I acknowledge my sin, so forgive me, for none forgives sin except You.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "ٱللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ عَلَيْكَ تَوَكَّلْتُ وَأَنْتَ رَبُّ ٱلْعَرْشِ ٱلْعَظِيم",
            translit:
              "Allāhumma anta Rabbī lā ilāha illā anta, ʿalayka tawakkaltu wa anta Rabb ul-ʿarsh il-ʿaẓīm.",
            translation:
              "O Allah! You are my Lord, there is no god but You. Upon You I rely, and You are the Lord of the Glorious Throne.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "مَا شَاءَ ٱللَّهُ كَانَ وَمَا لَمْ يَشَأْ لَمْ يَكُنْ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّهِ ٱلْعَلِيِّ ٱلْعَظِيم",
            translit:
              "Mā shāʾ Allāhu kāna, wa mā lam yashaʾ lam yakun, wa lā ḥawla wa lā quwwata illā billāh il-ʿAlīyy il-ʿĀẓīm.",
            translation:
              "Whatever Allah wills is, and what He does not will is not; and there is no power or ability except by Allah, the Most High, the Almighty.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "أَعْلَمُ",
            translit: "Aʿlamu",
            translation: "I know",
          }),
          talaq_12(),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "ٱللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي وَمِنْ شَرِّ كُلِّ دَابَّةٍ أَنْتَ آخِذٌ بِنَاصِيَتِهَا إِنَّ رَبِّى عَلَىٰ صِرَٰطٍ مُّسْتَقِيم",
            translit:
              "Allāhumma innī aʿūdhu bika min sharri nafsī, wa min sharri kulli dābbatin anta ākhidhun bi-nāṣīyatiha, inna Rabbī ʿalā ṣirāṭin mustaqīm.",
            translation:
              "O Allah! I seek Your protection from the evil of my own self and from the evil of every creature on earth You have taken by the forelock. My Lord’s way is straight.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ",
            translit: "Yā Ḥayyu yā Qayyūm, bi-raḥmatika astaghīth",
            translation:
              "O Ever-Living, O Sustainer! I seek help through Your Mercy",
          }),
          new DhikrEntryModel({
            arabic: "وَمِنْ عَذَابِكَ أَسْتَجِيرُ",
            translit: "wa min ʿadhābika astajīr",
            translation: "and protection from Your Punishment.",
          }),
          new DhikrEntryModel({
            arabic: "أَصْلِح لِي شَأْنِي كُلَّهُ",
            translit: "aṣliḥ lī shaʾnī kullahu",
            translation: "Rectify all my affairs",
          }),
          new DhikrEntryModel({
            arabic: "وَلَا تَكِلْنِي إِلَى نَفْسِي وَلَا إِلَى أَحَدٍ مِنْ خَلْقِكَ طَرْفَةَ عَيْن",
            translit:
              "wa lā takilnī ilā nafsī wa lā ilā aḥadin min khalqika ṭarfata ʿayn.",
            translation:
              "and do not entrust me to myself or to any of Your creation for even the blink of an eye.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "ٱللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ ٱلْهَمِّ وَٱلحَزَنِ",
            translit: "Allāhumma innī aʿūdhu bika min al-hammi wa al-ḥazan",
            translation:
              "O Allah! I seek Your protection from sorrow and grief",
          }),
          new DhikrEntryModel({
            arabic: "وَأَعُوذُ بِكَ مِنَ ٱلْعَجْزِ وَٱلْكَسَلِ",
            translit: "wa aʿūdhu bika min al-ʿajzi wa al-kasal",
            translation: "from incapacity and sloth",
          }),
          new DhikrEntryModel({
            arabic: "وَأَعُوذُ بِكَ مِنَ ٱلْجُبْنِ وَٱلْبُخْلِ",
            translit: "wa aʿūdhu bika min al-jubni wa al-bukhl",
            translation: "from cowardice and miserliness",
          }),
          new DhikrEntryModel({
            arabic: "وَأَعُوذُ بِكَ مِنْ غَلَبَةِ ٱلدَّينِ وَقَهْرِ ٱلرِّجَالِ",
            translit: "wa aʿūdhu bika min ghalabat id-dayni wa qahr ir-rijāl.",
            translation:
              "and I seek Your protection from overwhelming debt and the tyranny of men.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "ٱللَّهُمَّ إِنِّي أَسْأَلُكَ ٱلْعَافِيَةَ فِي ٱلدُّنْيَا وَٱلْآخِرَة",
            translit:
              "Allāhumma innī asʾaluk al-ʿāfiyata fīd-dunyā wa al-ākhīrah.",
            translation:
              "O Allah! I ask You for well-being in this world and the hereafter.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "ٱللَّهُمَّ إِنِّي أَسْأَلُكَ ٱلْعَفْوَ وَٱلْعَافِيَةَ وَٱلْمُعَافَاةَ ٱلدَّائِمَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي",
            translit:
              "Allāhumma innī asʾaluk al-ʿafwa wal-ʿāfiyata wal-muʿāfāt ad-dāʾimah fī dīnī wa dunyāya wa ahlī wa mālī.",
            translation:
              "O Allah! I ask You for pardoning, well-being, and constant safety in my religion, worldly life, family, and possessions.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "ٱللَّهُمَّ اسْتُرْ عَوْرَاتِيِ وَآمِنْ رَوْعَاتِي",
            translit: "Allāhumma ustur ʿawrātī wa āmin rawʿātī.",
            translation: "O Allah! Cover my shame and calm my fears.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "ٱللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي",
            translit:
              "Allāhumma iḥfaẓnī min bayni yadayya wa min khalfī wa ʿan yamīnī wa ʿan shimālī wa min fawqī",
            translation:
              "O Allah! Protect me from [the evil] in front of me and behind me, on my right and my left, and from above me;",
          }),
          new DhikrEntryModel({
            arabic: "وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي",
            translit: "wa aʿūdhu bi-ʿaẓamatika an ughtāla min taḥtī.",
            translation:
              "and I take refuge in Your Greatness from the unexpected harm from below me.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "ٱللَّهُمَّ أَنْتَ خَلَقْتَنِي وَأَنْتَ تَهْدِينِي وَأَنْتَ تُطْعِمُنِي وَأَنْتَ تَسْقِينِي وَأَنْتَ تُمِيتُنِي وَأَنْتَ تُحْيِينِي",
            translit:
              "Allāhumma anta khalaqtanī wa anta tahdīnī wa anta tuṭʿimunī wa anta tasqīnī wa anta tumītunī wa anta tuḥyīnī,",
            translation:
              "O Allah! You created me and You guide me, and You feed me and provide me with drink, and You cause me to die and You give me life,",
          }),
          new DhikrEntryModel({
            arabic: "وَأَنْتَ عَلَى كُلِّ شَيْءٍ قَدِير",
            translit: "wa anta ʿalā kulli shayyʾin qadīr.",
            translation: "and You have power over all things.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "أَصْبَحْنَا عَلَى فِطْرَةِ ٱلْإِسْلَامِ وَعَلَى كَلِمَةِ ٱلْإِخْلَاصِ وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى ٱللَّهُ عَلَيْهِ وَآلِهِ وَسَلَّمَ",
            translit:
              "Aṣbaḥnā ʿalā fiṭrat il-Islām wa ʿalā kalimat il-ikhlāṣ wa ʿalā dīni nabīyyinā Muḥammadin ṣallā Allāhu ʿalayhi wa ālihi wa sallim,",
            translation:
              "We have risen this morning on the original pattern of Islam, upon the Word of Sincerity, on the religion of our Prophet Muhammad (Allah's blessings and peace be upon him and his family),",
          }),
          new DhikrEntryModel({
            arabic: "وَعَلَى مِلَّةِ أَبِينَا إِبْرَٰهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ ٱلْمُشْرِكِينَ",
            translit:
              "wa ʿalā millati abīnā Ibrāhīma ḥanīfan musliman wa mā kāna min almushrikīn.",
            translation:
              "and upon the confession of Ibrahim, who was upright, a Muslim, and not an idolator.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "ٱللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَعَلَيْكَ نَتَوَكَّلُ وَإِلَيْكَ ٱلنُّشُور",
            translit:
              "Allāhumma bika aṣbaḥnā wa bika amsaynā wa bika naḥyā wa bika namūtu wa ʿalayka natawakkalu wa ilayk an-nushūr.",
            translation:
              "O Allah! By You we live to morning, and by You we live to evening, and by You we live and by You we die, and upon You we rely, and to You is the Resurrection.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "أَصْبَحْنَا وَأَصْبَحَ ٱلْمُلْكُ لِلَّهِ وَٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِين",
            translit:
              "Aṣbaḥnā wa aṣbaḥ al-mulku lillāhi, wal-ḥamdu lillāhi Rabb ilʿālamīn.",
            translation:
              "Morning has risen upon us and all sovereignty is Allah’s, and all praise belongs to Allah, Lord of the Worlds.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "ٱللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا ٱلْيَوْمِ فَتْحَهُ وَنَصْرَهُ وَنُورَهُ وَبَرَكَتَهُ وَهُدَاهُ",
            translit:
              "Allāhumma innī asʾaluka khayra hādhā al-youm, fatḥahu wa naṣrahu wa nūrahu wa barakatahu wa hudāhu.",
            translation:
              "O Allah! I ask You for the good of this day, its openings, victories, lights, blessings, and right-guidance.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "ٱللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا ٱلْيَوْمِ وَخَيْرَ مَا فِيهِ وَخَيْرَ مَا قَبْلَهُ وَخَيْرَ مَا بَعْدَهُ",
            translit:
              "Allāhumma innī asʾaluka khayra hādhā al-youmi wa khayra mā fīhi, wa khayra mā qablahu wa khayra mā baʿdahu,",
            translation:
              "O Allah! I ask You for the good of this day and the best of what is in it, and the best of what came before it and the best of what comes after it;",
          }),
          new DhikrEntryModel({
            arabic:
              "وَأَعُوذُ بِكَ مِنْ شَرِّ هَذَا ٱلْيَوْمِ وَشَرِّ مَا فِيهِ وَشَرِّ مَا قَبْلَهُ وَشَرِّ مَا بَعْدَهُ",
            translit:
              "wa aʿūdhu bika min sharri hādhā al-youmi wa sharri mā fīhi, wa sharri mā qablahu wa sharri mā baʿdahu.",
            translation:
              "and I seek refuge in You from the evil of this day and the worst of what is in it, and the worst of what came before it and the worst of what comes after it.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "ٱللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ",
            translit:
              "Allāhumma mā aṣbaḥa bī min niʿmatin aw bi-aḥadin min khalqika, fa minka waḥdaka lā sharīka laka,",
            translation:
              "O Allah! Whatever favors I, or any of Your creatures, received this morning, they come only from You; You have no partners,",
          }),
          new DhikrEntryModel({
            arabic: "فَلَكَ ٱلْحَمْدُ وَلَكَ ٱلشُّكْرُ عَلَى ذَلِكَ",
            translit: "falakal-ḥamdu wa lakash-shukru ʿalā dhālik.",
            translation:
              "so to You belongs all praise and to You belongs all thanks.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "سُبْحَٰنَ ٱللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ وَرِضَى نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ",
            translit:
              "Subḥān Allāhi wa bi-ḥamdihi ʿadada khalqihi wa ridāʾ nafsihi wa zinata ʿarshihi wa midāda kalimātih.",
            translation:
              "Transcendent is Allah and praise belongs to Him—equal to the number of His creation, the degree of His good pleasure, the weight of His Throne, and the number of His words.",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "سُبْحَٰنَ ٱللَّهِ ٱلْعَظِيمِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ وَرِضَى نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ",
            translit:
              "Subḥān Allāhi al-ʿAẓīmi wa bi-ḥamdihi ʿadada khalqihi wa ridāʾ nafsihi wa zinata ʿarshihi wa midāda kalimātih.",
            translation:
              "Transcendent is Allah the Almighty, and praise belongs to Him— equal to the number of His creation, the degree of His good pleasure, the weight of His Throne, and the number of His words.",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "سُبْحَٰنَ ٱللَّهِ عَدَدَ مَا خَلَقَ فِي ٱلسَّمَاءِ",
            translit: "Subḥān Allāhi ʿadada mā khalaqa fīs-samāʾ",
            translation:
              "“Transcendent is Allah” equal to what He created in the heavens;",
          }),
          new DhikrEntryModel({
            arabic: "سُبْحَٰنَ ٱللَّهِ عَدَدَ مَا خَلَقَ فِي ٱلْأَرْضِ",
            translit: "subḥān Allāhi ʿadada mā khalaqa fil-arḍ",
            translation:
              "“Transcendent is Allah” equal to what He created on earth;",
          }),
          new DhikrEntryModel({
            arabic: "سُبْحَٰنَ ٱللَّهِ عَدَدَ مَا بَيْنَ ذَلِك",
            translit: "subḥān Allāhi ʿadada mā bayna dhālik",
            translation:
              "“Transcendent is Allah” equal to what is between them both;",
          }),
          new DhikrEntryModel({
            arabic: "سُبْحَٰنَ ٱللَّهِ عَدَدَ مَا هُوَ خَالِقٌ",
            translit: "subḥān Allāhi ʿadada mā Huwa khāliq.",
            translation:
              "“Transcendent is Allah” equal to whatever He creates.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "ٱلْحَمْدُ لِلَّهِ عَدَدَ مَا خَلَقَ فِي ٱلسَّمَاءِ",
            translit: "Al-ḥamdu lillāhi ʿadada mā khalaqa fis-samāʾ",
            translation:
              "“All praise belongs to Allah” equal to what He created in the heavens;",
          }),
          new DhikrEntryModel({
            arabic: "ٱلْحَمْدُ لِلَّهِ عَدَدَ مَا خَلَقَ فِي ٱلْأَرْضِ",
            translit: "al-ḥamdu lillāhi ʿadada mā khalaqa fil-arḍ",
            translation:
              "“All praise belongs to Allah” equal to what He created on earth;",
          }),
          new DhikrEntryModel({
            arabic: "ٱلْحَمْدُ لِلَّهِ عَدَدَ مَا بَيْنَ ذَلِك",
            translit: "al-ḥamdu lillāhi ʿadada mā bayna dhālik",
            translation:
              "“All praise belongs to Allah” equal to what is between them both;",
          }),
          new DhikrEntryModel({
            arabic: "ٱلْحَمْدُ لِلَّهِ عَدَدَ مَا هُوَ خَالِقٌ",
            translit: "al-ḥamdu lillāhi ʿadada mā Huwa khāliq.",
            translation:
              "“All praise belongs to Allah” equal to whatever He creates.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "لَآ إِلَٰهَ إِلَّا ٱللَّهُ عَدَدَ مَا خَلَقَ فِي ٱلسَّمَاءِ",
            translit: "Lā ilāha illā Allāhu ʿadada mā khalaqa fis-samāʾ",
            translation:
              "“There is no god except Allah” equal to what He created in the heavens;",
          }),
          new DhikrEntryModel({
            arabic: "لَآ إِلَٰهَ إِلَّا ٱللَّهُ عَدَدَ مَا خَلَقَ فِي ٱلْأَرْضِ",
            translit: "lā ilāha illā Allāhu ʿadada mā khalaqa fil-arḍ",
            translation:
              "“There is no god except Allah” equal to what He created on earth;",
          }),
          new DhikrEntryModel({
            arabic: "لَآ إِلَٰهَ إِلَّا ٱللَّهُ عَدَدَ مَا بَيْنَ ذَلِك",
            translit: "lā ilāha illā Allāhu ʿadada mā bayna dhālik",
            translation:
              "“There is no god except Allah” equal to what is between them both;",
          }),
          new DhikrEntryModel({
            arabic: "لَآ إِلَٰهَ إِلَّا ٱللَّهُ عَدَدَ مَا هُوَ خَالِقٌ",
            translit: "lā ilāha illā Allāhu ʿadada mā Huwa khāliq.",
            translation:
              "“There is no god except Allah” equal to whatever He creates.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "ٱللَّهُ أَكْبَرُ عَدَدَ مَا خَلَقَ فِي ٱلسَّمَاءِ",
            translit: "Allāhu akbar ʿadada mā khalaqa fis-samāʾ",
            translation:
              "“Allah is Greater” equal to what He created in the heavens;",
          }),
          new DhikrEntryModel({
            arabic: "ٱللَّهُ أَكْبَرُ عَدَدَ مَا خَلَقَ فِي ٱلْأَرْضِ",
            translit: "Allāhu akbar ʿadada mā khalaqa fil-arḍ",
            translation:
              "“Allah is Greater” equal to what He created on earth;",
          }),
          new DhikrEntryModel({
            arabic: "ٱللَّهُ أَكْبَرُ عَدَدَ مَا بَيْنَ ذَلِك",
            translit: "Allāhu akbar ʿadada mā bayna dhālik",
            translation:
              "“Allah is Greater” equal to what is between them both;",
          }),
          new DhikrEntryModel({
            arabic: "ٱللَّهُ أَكْبَرُ عَدَدَ مَا هُوَ خَالِقٌ",
            translit: "Allāhu akbar ʿadada mā Huwa khāliq.",
            translation: "“Allah is Greater” equal to whatever He creates.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّهِ ٱلْعَلِيِّ ٱلْعَظِيمِ عَدَدَ مَا خَلَقَ فِي ٱلسَّمَاءِ",
            translit:
              "Lā ḥawla wa lā quwwata illā billāh il-ʿAlīyy il-ʿAẓīm ʿadada mā khalaqa fis-samāʾ",
            translation:
              "“There is no power or ability except by Allah, the Most High, the Almighty” equal to what He created in the heavens;",
          }),
          new DhikrEntryModel({
            arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّهِ ٱلْعَلِيِّ ٱلْعَظِيمِ عَدَدَ مَا خَلَقَ فِي ٱلْأَرْضِ",
            translit:
              "lā ḥawla wa lā quwwata illā billāh il-ʿAlīyy ilʿAẓīm ʿadada mā khalaqa fil-arḍ",
            translation:
              "“There is no power or ability except by Allah, the Most High, the Almighty” equal to what He created on earth;",
          }),
          new DhikrEntryModel({
            arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّهِ ٱلْعَلِيِّ ٱلْعَظِيمِ عَدَدَ مَا بَيْنَ ذَلِك",
            translit:
              "lā ḥawla wa lā quwwata illā billāh il-ʿAlīyy il-ʿAẓīm ʿadada mā bayna dhālik",
            translation:
              "“There is no power or ability except by Allah, the Most High, the Almighty” equal to what is between them both;",
          }),
          new DhikrEntryModel({
            arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّهِ ٱلْعَلِيِّ ٱلْعَظِيمِ عَدَدَ مَا هُوَ خَالِقٌ",
            translit:
              "lā ḥawla wa lā quwwata illā billāh il-ʿAlīyy il-ʿAẓīm ʿadada mā Huwa khāliq.",
            translation:
              "“There is no power or ability except by Allah, the Most High, the Almighty” equal to whatever He creates.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "لَآ إِلَٰهَ إِلَّا ٱللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
            translit: "Lā ilāha illāLlāhu waḥdahu lā sharīka lahu",
            translation: "“There is no god except Allah",
          }),
          new DhikrEntryModel({
            arabic:
              "لَهُ ٱلْمُلْكُ وَلَهُ ٱلْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ عَدَدَ كُلِّ ذَرَّةٍ أَلْفَ مَرَّة",
            translit:
              "lahul-mulku wa lahul-ḥamdu, yuḥyī wa yumītu wa Huwa ʿalā kulli shayyʾin qadīr, ʿadada kulli dharratin alfa marrah.",
            translation:
              "One without partner, all control and praise belong to Him, He gives life and death, and He has power over all things”—equal to every atom one thousand times over.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "ٱللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ مِفْتَاحِ بَابِ رَحْمَةِ ٱللَّهِ عَدَدَ مَا فِي عِلْمِ ٱللَّهِ صَلَاةً وَسَلَامًا دَائِمَيْنِ بِدَوَامِ مُلْكِ ٱللَّهِ",
            translit:
              "Allāhumma ṣalli wa sallim ʿalā Sayyidinā Muḥammadin miftāḥi bābi raḥmatillāh, ʿadada mā fī ʿilmillāh, ṣalātan wa salāman dāʾiymayni bi dawāmi mulkillāh,",
            translation:
              "“O Allah! Send blessings and peace upon our master Muhammad, the key to Allah's Gates of Mercy—equal to that which is in Allah's knowledge—blessings and peace that last as eternally as Allah's sovereignty,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَلَى آلِهِ وَصَحْبِهِ عَدَدَ كُلِّ ذَرَّةٍ أَلْفَ مَرَّة",
            translit:
              "wa ʿalā ālihi wa ṣaḥbihi ʿadada kulli dharratin alfa marrah.",
            translation:
              "and upon his family and companions”—equal to every atom one thousand times over.",
            repeat: 3,
          }),
        ],
      }),
    ],
  }),
];
