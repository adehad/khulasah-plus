import { ikhlas, kafirun } from "@/data/shared/quran";
import {
  imran_190,
  imran_191,
  imran_192,
  imran_193_verse,
  imran_194,
  imran_195,
  imran_196,
  imran_197,
  imran_198,
  imran_199,
  imran_200,
  nisa_64,
  nisa_110,
} from "@/data/shared/quran-partial";
import { DhikrEntryModel, DhikrModel, WirdModel } from "@/models/recitation";

export default [
  new WirdModel({
    title: "Supplication when awakening from sleep",
    instruction:
      "Remember my brother/sister, the etiquette and supplications for awakening from sleep, ablution and prayer.",
    entries: [
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
            translit:
              "Alḥamdulillāhilladhī aḥyānā ba‛damā amātanā wa ilayhin nushūr.",
            translation:
              "Praise be to Allāh, Who has given us life after causing us to die, and unto Him is the resurrection.",
          }),
          new DhikrEntryModel({
            arabic: "الْحَمْدُ لِلَّهِ الَّذِي رَدَّ عَلَيَّ رُوحِي",
            translit: "Alḥamdulillāhilladhī radda ‛alayya rūḥī,",
            translation: "Praise be to Allāh Who has returned my soul,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَافَانِي فِي جَسَدِي",
            translit: "wa ‛āfānī fī jasadī,",
            translation: "given strength to my body",
          }),
          new DhikrEntryModel({
            arabic: "وَأَذِنَ لِي بِذِكْرِهِ",
            translit: "wa adhina lī bidhikrihī.",
            translation: "and allowed me to remember Him.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
            translit: "Lā ilāha illallāhu waḥdahū lā sharīka lahū,",
            translation: "There is no god but Allāh alone, He has no partner;",
          }),
          new DhikrEntryModel({
            arabic: "لَهُ الْمُلكُ وَلَهُ الْحَمْدُ",
            translit: "lahul mulku wa lahul ḥamdu,",
            translation:
              "to Him belongs all authority and to Him belongs all praise;",
          }),
          new DhikrEntryModel({
            arabic: "وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
            translit: "wa huwa ‛alā kulli shay’in qadīr.",
            translation: "and He is capable of all things.",
          }),
          new DhikrEntryModel({
            arabic: "الْحَمْدُ لِلَّهِ الَّذِي خَلَقَ النَّوْمَ وَالْيَقَظَةَ",
            translit: "Alḥamdulillāhilladhī khalaqan nawma wal yaqaẓah,",
            translation:
              "Praise be to Allāh Who has created sleep and wakefulness.",
          }),
          new DhikrEntryModel({
            arabic: "الْحَمْدُ لِلَّهِ الَّذِي بَعَثَنِي سَالِمًا سَوِيًّا",
            translit: "Alḥamdulillāhilladhī ba‛athanī sāliman sawiyyan,",
            translation:
              "Praise be to Allāh Who has revived me with a sound and healthy body.",
          }),
          new DhikrEntryModel({
            arabic: "أَشْهَدُ أَنَّ اللَّهَ يُحْيِي الْمَوْتَى",
            translit: "ash-hadu annallāha yuḥyil mawtā,",
            translation:
              "I bear witness that only Allāh can bring the dead to life;",
          }),
          new DhikrEntryModel({
            arabic: "وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
            translit: "wa huwa ‛alā kulli shay’in qadīr.",
            translation: "and He is capable of all things.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ",
            translit: "Aṣbaḥnā wa aṣbaḥal mulku lillāh",
            translation:
              "We have entered a new day, and the kingdom belongs to Allāh,",
          }),
          new DhikrEntryModel({
            arabic: "وَالْعَظَمَةُ وَالسُّلطَانُ لِلَّهِ",
            translit: "wal ‛aẓamatu wassulṭānu lillāh",
            translation: "and the majesty and the power belong to Allāh,",
          }),
          new DhikrEntryModel({
            arabic: "وَالْعِزَّةُ وَالْقُدْرَةُ لِلَّهِ. أَصْبَحْنَا عَلَى فِطْرَةِ الْإِسْلَامِ",
            translit:
              "wal ‛izzatu wal qudratu lillāh. Aṣbaḥnā ‛alā fiṭratil islām",
            translation:
              "and the honour and the might belong to Allāh. We have entered a new day upon the natural disposition of Islam,",
          }),
          new DhikrEntryModel({
            arabic:
              "وَعَلَى كَلِمَةِ الْإِخْلَاصِ وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَآلِهِ وَسَلَّمَ وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا",
            translit:
              "wa ‛alā kalimatil ikhlāṣ wa ‛alā dīni nabiyyinā Muḥammadin ṣallallāhu ‛alayhi wa sallam, wa ‛alā millati abīnā Ibrāhīm, ḥanīfan musliman",
            translation:
              "and the absolute word of faith, and the religion of our Prophet Muḥammad, may the blessings and peace of Allāh be upon him, and the religion of our father Ibrāhīm, who is pure in faith and submission,",
          }),
          new DhikrEntryModel({
            arabic: "وَمَا كَانَ مِنَ الْمُشْرِكِين",
            translit: "wa mā kāna minal mushrikīn.",
            translation: "and who never associated partners with Allāh.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ",
            translit:
              "Allāhumma bika aṣbaḥnā wa bika amsaynā, wa bika naḥyā wa bika namūt, wa ilaykan nushūr.",
            translation:
              "O Allāh! By You do we enter the morning, and by You do we enter the evening; and by You do we live, and by You do we die; and by You is the resurrection.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ إِنَّا نَسْأَلُكَ أَنْ تَبْعَثَنَا فِي هَذَا الْيَوْمِ إِلَى كُلِّ خَيْر",
            translit:
              "Allāhumma innā nas'aluka an tab‛athanā fī hādhal yawmi ilā kulli khayr",
            translation:
              "O Allāh! We beseech You today to imbue us with whatever is good;",
          }),
          new DhikrEntryModel({
            arabic: "وَنَعُوذُ بِكَ أَنْ نَجْتَرِحَ فِيهِ سُوءًا",
            translit: "wa na‛ūdhu bika an najtariḥa fīhi sū'an",
            translation:
              "and we seek refuge with You from doing any evil deeds during it;",
          }),
          new DhikrEntryModel({
            arabic: "أَوْ نَجُرَّهُ إِلَى مُسْلِم",
            translit: "aw najurrahū ilā muslimin",
            translation: "or causing others harm;",
          }),
          new DhikrEntryModel({
            arabic: "أَوْ يَجُرَّهُ أَحَدٌ إِلَيْنَا",
            translit: "aw yajurrahū aḥadun ilaynā.",
            translation: "or from anyone causing us harm.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "نَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ وَخَيْرَ مَا فِيهِ، وَنَعُوذُ بِكَ مِنْ شَرِّهِ وَشَرِّ مَا فِيهِ",
            translit:
              "Nas'aluka khayra hādhal yawm wa khayra mā fīhi, wa na‛ūdhu bika min sharrihī wa sharri mā fīhi.",
            translation:
              "We beseech You for the good of  this day, and the best of the  goodness it may impart on us;  and we seek refuge in You from  the evil of this day, and the worst  of the evil that it may contain.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "أَعُوْذُ باِللَّهِ مِنَ الشَّيْطَانِ الرَّجِيْمِ",
            translit: "A‛ūdhu billāhi minash shayṭānir rajīm.",
            translation: "I seek refuge in Allāh from the accursed Satan.",
          }),
        ],
        instruction: "Then recite the last verses of Surah Aal Imran:",
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ",
            translit: "Bismillāhir raḥmānir raḥīm.",
            translation:
              "In the name of Allāh, the Most Gracious, the Most Merciful.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          imran_190(),
          imran_191(),
          imran_192(),
          imran_193_verse(),
          imran_194(),
          imran_195(),
          imran_196(),
          imran_197(),
          imran_198(),
          imran_199(),
          imran_200(),
        ],
      }),
    ],
  }),
  new WirdModel({
    title: "The Tahajjud Prayer",
    instruction: "The Tahajjud prayer starts with two short raka‛āt.",
    entries: [
      new DhikrModel({
        entries: [nisa_64()],
        instruction: "In the FIRST RAKAʽAH, after Sūrah al-Fātiḥah recite:",
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "أَسْتَغْفِرُ اللَّهَ",
            translit: "Astaghfirullāh",
            translation: "I ask Allāh's Forgiveness",
            repeat: 3,
          }),
        ],
      }),
      kafirun(1, "Then recite Sūrah al-Kāfirūn:"),
      new DhikrModel({
        entries: [nisa_110()],
        instruction: "In the SECOND RAKAʽAH, after Sūrah al-Fātiḥah recite:",
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "أَسْتَغْفِرُ اللَّهَ",
            translit: "Astaghfirullāh",
            translation: "I ask Allāh's Forgiveness",
            repeat: 3,
          }),
        ],
      }),
      ikhlas(1, "Then recite Sūrah Al-Ikhlāṣ:"),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُ أَكْبَرُ",
            translit: "Allāhu akbar",
            translation: "Allāh is the Greatest",
            repeat: 10,
          }),
          new DhikrEntryModel({
            arabic: "الْحَمْدُ لِلَّهِ",
            translit: "Alḥamdulillāh",
            translation: "All Praise be to Allāh",
            repeat: 10,
          }),
          new DhikrEntryModel({
            arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
            translit: "Subḥānallāhi wa biḥamdih",
            translation: "Glory and praise be to Allāh",
            repeat: 10,
          }),
          new DhikrEntryModel({
            arabic: "سُبْحَانَ الْمَلِكِ الْقُدُّوسِ",
            translit: "Subḥānal malikil quddūs",
            translation: "Glory be to the Most Pure One",
            repeat: 10,
          }),
          new DhikrEntryModel({
            arabic: "أَسْتَغْفِرُ اللَّهَ",
            translit: "Astaghfirullāh",
            translation: "I ask Allāh's forgiveness",
            repeat: 10,
          }),
          new DhikrEntryModel({
            arabic: "لَا إِلَهَ إِلَّا اللَّهُ",
            translit: "Lā ilāha illallāh",
            translation: "There is no god, but Allāh",
            repeat: 10,
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ ضِيقِ الدُّنْيَا وَضِيقِ يَوْمِ الْقِيَامَةِ",
            translit:
              "Allāhumma innī a‛ūdhu bika min ḍīqid dunyā wa ḍīqi yawmil qiyāmah.",
            translation:
              "O Allāh! I seek refuge in You from the distress of this world, and the distress of the Day of Judgement.",
            repeat: 10,
          }),
        ],
        instruction: "Say afterwards:",
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "لَا إِلَهَ إِلَّا أَنْتَ",
            translit: "Lā ilāha illā anta",
            translation: "There is no god, but You alone.",
          }),
          new DhikrEntryModel({
            arabic: "سُبْحَانَكَ",
            translit: "subḥānaka",
            translation: "Glory be to You;",
          }),
          new DhikrEntryModel({
            arabic: "أَسْتَغْفِرُكَ لِذَنْبِي",
            translit: "astaghfiruka li dhambī",
            translation: "forgive my sins;",
          }),
          new DhikrEntryModel({
            arabic: "وَأَسْأَلُكَ رَحْمَتَكَ",
            translit: "wa as'aluka raḥmataka",
            translation: "I beseech Your mercy.",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ زِدْنِي عِلْمًا",
            translit: "Allāhumma zidnī ‛ilman",
            translation: "O Allāh, expand my knowledge,",
          }),
          new DhikrEntryModel({
            arabic: "وَلَا تُزِغْ قَلْبِي بَعْدَ إِذْ هَدَيتَنِي",
            translit: "wa lā tuzigh qalbī ba‛da idh hadaytanī",
            translation:
              "and do not mislead my heart after You have guided me to the Truth,",
          }),
          new DhikrEntryModel({
            arabic: "وَهَب لِي مِنْ لَدُنْكَ رَحْمَةً إِنَّكَ أَنْتَ الْوَهَّابُ",
            translit: "wa hab lī mil ladunka raḥmatan innaka antal wahhāb.",
            translation:
              "and grant me Your mercy; You are the Giver of Bounties.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ قَيِّمُ السَّمَوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ",
            translit:
              "Allāhumma laka alḥamdu Anta qayyimu assamawāti wal-arḍi waman fīhinna",
            translation:
              "O Allah! All praise is for You; You are the Holder of the heavens and the earth and whatever is in them.",
          }),
          new DhikrEntryModel({
            arabic: "وَلَكَ الْحَمْدُ لَكَ مُلكُ السَّمَوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ",
            translit:
              "walaka alḥamdu laka mulku assamawāti wal-arḍi waman fīhinna",
            translation:
              "All praise is for You; You are the Lord of the heavens and the earth and whatever is in them.",
          }),
          new DhikrEntryModel({
            arabic: "وَلَكَ الْحَمْدُ أَنْتَ نُورُ السَّمَوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ",
            translit:
              "walaka alḥamdu Anta Nūru assamawāti wal-arḍi waman fīhinna",
            translation:
              "All praise is for You; You are the Light of the heavens and the earth and whatever is in them.",
          }),
          new DhikrEntryModel({
            arabic: "وَلَكَ الْحَمْدُ أَنْتَ مَلِكُ السَّمَوَاتِ وَالْأَرْضِ",
            translit: "walaka alḥamdu Anta Maliku assamawāti wal-arḍi",
            translation:
              "All the praises are for You; You are the Sovereign of the heavens and the earth and whatever is in them.",
          }),
          new DhikrEntryModel({
            arabic: "وَلَكَ الْحَمْدُ أَنْتَ الْحَقُّ",
            translit: "walaka alḥamdu Anta Alḥaqqu",
            translation: "You are the Truth,",
          }),
          new DhikrEntryModel({
            arabic: "وَوَعْدُكَ الْحَقُّ",
            translit: "wawaʻduka alḥaqqu",
            translation: "and Your promise is true,",
          }),
          new DhikrEntryModel({
            arabic: "وَلِقَاؤُكَ حَقٌّ",
            translit: "waliqā-uka ḥaqqun",
            translation: "and the meeting with You is true,",
          }),
          new DhikrEntryModel({
            arabic: "وَقَوْلُكَ حَقٌّ",
            translit: "waqawluka ḥaqqun",
            translation: "Your Word is the Truth,",
          }),
          new DhikrEntryModel({
            arabic: "وَالْجَنَّةُ حَقٌّ",
            translit: "waljannatu ḥaqqun",
            translation: "Paradise is true,",
          }),
          new DhikrEntryModel({
            arabic: "وَالنَّارُ حَقٌّ",
            translit: "wannāru ḥaqqun",
            translation: "and the (Hell) Fire is true,",
          }),
          new DhikrEntryModel({
            arabic: "وَالنَّبِيُّونَ حَقٌّ",
            translit: "wannabīyūna ḥaqqun",
            translation: "and all the Prophets (peace be upon them) are true,",
          }),
          new DhikrEntryModel({
            arabic: "وَمُحَمَّدٌ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ حَقٌّ",
            translit: "wa Muḥammadun ṣallallāhu ʻalayhi wasallama ḥaqqun",
            translation:
              "and Muhammad (peace and blessings of Allah be upon him) is true,",
          }),
          new DhikrEntryModel({
            arabic: "وَالسَّاعَةُ حَقٌّ",
            translit: "wassāʻatu ḥaqqun",
            translation: "and the Day of Resurrection is true.",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ لَكَ أَسْلَمتُ",
            translit: "Allāhumma laka aslamtu",
            translation: "O Allah, to You I submit,",
          }),
          new DhikrEntryModel({
            arabic: "وَبِكَ آمَنتُ",
            translit: "wa bika āmantu",
            translation: "in You I believe,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَلَيْكَ تَوَكَّلتُ",
            translit: "wa ʻalayka tawakkaltu",
            translation: "in You I put my trust,",
          }),
          new DhikrEntryModel({
            arabic: "وَإِلَيْكَ أَنَبتُ",
            translit: "wa ilayka anabtu",
            translation: "to You I turn in repentance,",
          }),
          new DhikrEntryModel({
            arabic: "وَبِكَ خَاصَمتُ",
            translit: "wa bika khāṣamtu",
            translation: "and with Your Help I contend my adversaries,",
          }),
          new DhikrEntryModel({
            arabic: "وَإِلَيْكَ حَاكَمتُ",
            translit: "wa ilayka ḥākamtu",
            translation: "and to You I refer my case.",
          }),
          new DhikrEntryModel({
            arabic: "فَاغْفِرْ لِي مَا قَدَّمتُ وَمَا أَخَّرتُ وَمَا أَسْرَرْتُ وَمَا أَعْلَنتُ",
            translit:
              "faghfir lī mā qaddamtu wa mā akhkhartu wa mā asrartu wa mā aʻlantu",
            translation:
              "Forgive me my past and future sins, what I have done in secret and what I have done openly.",
          }),
          new DhikrEntryModel({
            arabic: "أَنْتَ الْمُقَدِّمُ",
            translit: "Anta almuqaddimu",
            translation: "You are the One Who brings forward,",
          }),
          new DhikrEntryModel({
            arabic: "وَأَنْتَ الْمُؤَخِّرُ لَا إِلَهَ إِلَّا أَنْتَ",
            translit: "wa Anta almu-akhkhiru. Lā ilāha illā Anta",
            translation: "and puts back. There is no god but You.",
          }),
        ],
        instruction: "The following can be part of your adhkar:",
      }),
    ],
  }),
];
