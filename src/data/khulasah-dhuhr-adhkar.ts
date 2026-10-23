import {
  ahzab_69,
  an_am_79,
  baqarah_255,
  fath_1,
  fath_2,
  fath_3,
  hashr_21,
  hashr_22,
  hashr_23,
  hashr_24_verse,
  imran_45,
  saff_13_14,
} from "@/data/shared/quran-partial";
import { DhikrEntryModel, DhikrModel, WirdModel } from "@/models/recitation";

export default [
  new WirdModel({
    title: "Dhuhr Adhkar",
    entries: [
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "لَا إِلَهَ إِلَّا اللَّهُ الْمَلِكُ الْحَقُّ الْمُبِينُ",
            translit: "Lā ilāha illallāhul malikul ḥaqqul mubīn.",
            translation:
              "There is no god but Allāh, the Sovereign, the Truth, the Manifest.",
            repeat: 100,
          }),
        ],
      }),
    ],
  }),
  new WirdModel({
    title: "Hizb an-Nasr (The Litany of Victory) of Imām al-Ḥaddād",
    entries: [
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
            translit: "Bismillāhir raḥmānir raḥīm.",
            translation:
              "In the Name of Allāh, the Most Compassionate, the Most Merciful.",
          }),
          fath_1(),
          fath_2(),
          fath_3(),
          ahzab_69(),
          imran_45(),
          an_am_79(),
          new DhikrEntryModel({
            arabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
            translit: "Bismillāhir raḥmānir raḥīm.",
            translation:
              "In the Name of Allāh, the Most Compassionate, the Most Merciful…",
          }),
          ...saff_13_14(),
        ],
      }),
      new DhikrModel({
        entries: [baqarah_255()],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
            translit: "Bismillāhir raḥmānir raḥīm.",
            translation:
              "In the Name of Allāh, the Most Compassionate, the Most Merciful.",
          }),
          hashr_21(),
          hashr_22(),
          hashr_23(),
          hashr_24_verse(),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "أُعِيذُ نَفْسِي بِٱللَّهِ تَعَالَى مِنْ كُلِّ مَا يَسْمَعُ بِأُذُنَيْنِ",
            translit:
              "U‛īdhu nafsī billāhi ta‛ālā min kulli mā yasma‛u bi’udhunayn,",
            translation:
              "I seek refuge for myself with Allāh, the Most High, from everything that hears with two ears,",
          }),
          new DhikrEntryModel({
            arabic: "وَيُبْصِرُ بِعَيْنَيْنِ",
            translit: "wa yubṣiru bi‛aynayn,",
            translation: "and sees with two eyes,",
          }),
          new DhikrEntryModel({
            arabic: "وَيَمْشِي بِرِجْلَيْنِ",
            translit: "wa yamshī birijlayn,",
            translation: "and walks on two feet,",
          }),
          new DhikrEntryModel({
            arabic: "وَيَبْطِشُ بِيَدَيْنِ",
            translit: "wa yabṭishu biyadayn,",
            translation: "and seizes with two hands,",
          }),
          new DhikrEntryModel({
            arabic: "وَيَتَكَلَّمُ بِشَفَتَيْنِ",
            translit: "wa yatakallamu bishafatayn;",
            translation: "and speaks with two lips;",
          }),
          new DhikrEntryModel({
            arabic: "حَصَّنْتُ نَفْسِي بِٱللَّهِ الْخَالِقِ الْأَكْبَر",
            translit: "Ḥaṣṣantu nafsī billāhil khāliqil akbar,",
            translation:
              "I have fortified myself with Allāh, the Creator, the Greatest,",
          }),
          new DhikrEntryModel({
            arabic: "مِنْ شَرِّ مَا أَخَافُ وَأَحْذَر",
            translit: "min sharri mā akhāfu wa aḥdhar;",
            translation:
              "against the evil of what I fear and what I am wary of,",
          }),
          new DhikrEntryModel({
            arabic: "مِنَ الْجِنِّ وَالْإِنْسِ وَأَنْ يَحْضُرُون",
            translit: "minal jinni wal insi wa ayyaḥḍurūn;",
            translation:
              "from the jinn and mankind, and from their being present with me;",
          }),
          new DhikrEntryModel({
            arabic: "عَزَّ جَارُهُ وَجَلَّ ثَنَاؤُهُ وَتَقَدَّسَتْ أَسْمَاؤُهُ وَلَا إِلَٰهَ غَيْرُهُ",
            translit:
              "‛azza jāruhū wa jalla thanā’uhū wa taqaddasat asmā’uhū wa lā ilāha ghayruhū.",
            translation:
              "mighty is His protection, majestic is His praise, sanctified are His names, and there is no god other than Him.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ إِنِّي أَجْعَلُكَ فِي نُحُورِ أَعْدَائِي",
            translit: "Allāhumma innī aj‛aluka fī nuḥūrihim a‛dā’ī,",
            translation:
              "O Allāh, I place You against the throats of my enemies,",
          }),
          new DhikrEntryModel({
            arabic: "وَأَعُوذُ بِكَ مِنْ شُرُورِهِم وَتَحَيُّلِهِم وَمَكْرِهِم وَمَكَائِدِهِم",
            translit:
              "wa a‛ūdhu bika min shurūrihim wa taḥayyulihim wa makrihim wa makā’idihim;",
            translation:
              "and I seek refuge in You from their evils, their scheming, their plotting and their conspiracies;",
          }),
          new DhikrEntryModel({
            arabic: "أَطْفِئ نَارَ مَنْ أَرَادَ بِي عَدَاوَةً مِنَ الْجِنِّ وَالْإِنْسِ",
            translit: "aṭfi’ nāra man arāda bī ‛adāwatam minal jinni wal insi.",
            translation:
              "extinguish the fire of whoever intends hostility towards me, from the jinn and mankind.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "يَا حَافِظُ يَا حَفِيظُ، يَا كَافِي يَا مُحِيطُ، سُبْحَانَكَ يَا رَبِّ مَا أَعْظَمَ شَأنَكَ وَأَعَزَّ سُلْطَانَكَ",
            translit:
              "Yā ḥāfiẓu yā ḥafīẓ, yā kāfī yā muḥīṭ; subḥānaka yā rabbi; mā a‛ẓama sha’nuka wa a‛azza sulṭānuka.",
            translation:
              "O Preserver, O Guardian, O Sufficer, O All-Encompassing; glory be to You, my Lord, how great is Your majesty and how mighty is Your authority.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "تَحَصَّنْتُ بِٱللَّهِ وَبِأَسْمَاءِ ٱللَّهِ وَبِآيَاتِ ٱللَّهِ وَمَلَائِكَةِ ٱللَّهِ وَأَنْبِيَاءِ ٱللَّهِ وَرُسُلِ ٱللَّهِ وَالصَّالِحِينَ مِن عِبَادِ ٱللَّهِ",
            translit: "Taḥaṣṣantu billāh, wa bi’asmā’illāh",
            translation:
              "I have taken refuge in Allāh, in the names of Allāh, in the signs of Allāh, in the angels of Allāh, in the prophets of Allāh, in the messengers of Allāh, and in the righteous servants of Allāh;",
          }),
          new DhikrEntryModel({
            arabic:
              "حَصَّنْتُ نَفْسِي بِـ( لَا إِلَهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ ٱللَّهِ صَلَّى اللَّهُ عَلَيهِ وَآلِهِ وَسَلَّم )",
            translit:
              "wa bi’āyātillāh, wa malā’ikatillāh, wa ambiyā’illāh, wa rusulillāh, waṣṣāliḥīna min ‛ibādillāh; Ḥaṣṣantu nafsī bi (lā ilāha illallāh, Muḥammadur rasūlullāhi ṣallallāhu ‛alayhi wa ālihī wa sallam).",
            translation:
              "I have fortified myself with: “There is no god but Allāh, Muhammad is the Messenger of Allāh, may Allāh bless him and his family and grant them peace.”",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ احْرُسْنِي بِعَيْنِكَ الَّتِي لَا تَنَامُ",
            translit: "Allāhummaḥrisnī bi‛aynikallatī lā tanām",
            translation: "O Allāh, guard me with Your eye that never sleeps,",
          }),
          new DhikrEntryModel({
            arabic: "وَاكْنُفْنِي بِكَنَفِكَ الَّذِي لَا يُرَامُ",
            translit: "waknufnī bikanafikalladhī lā yurām",
            translation:
              "and shelter me with Your protection that cannot be breached,",
          }),
          new DhikrEntryModel({
            arabic: "وَارْحَمْنِي بِقُدْرَتِكَ عَلَيَّ فَلَا أَهْلِكُ وَأَنْتَ ثِقَتِي وَرَجَائِي",
            translit:
              "warḥamnī biqudratika ‛alayya falā ahlika wa anta thiqatī wa rajā’ī.",
            translation:
              "and have mercy on me through Your power over me, so that I do not perish, for You are my trust and my hope.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا غِيَاثَ الْمُسْتَغِيثِينَ",
            translit: "Yā ghiyāthal mustaghīthīna.",
            translation: "O Helper of those who seek help,",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا دَرَكَ الْهَالِكِينَ",
            translit: "Yā darkal hālikīna.",
            translation: "O Rescuer of those who are perishing,",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اِكْفِنِي شَرَّ كُلِّ طَارِقٍ يَطْرُقُ بِلَيْلٍ أَوْ نَهَارٍ إِلَّا طَارِقًا يَطْرُقُ بِخَيْرٍ إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
            translit:
              "Ikfinī sharra kulli ṭāriqin yaṭruqu bilaylin aw nahārin, illā ṭāriqan yaṭruqu bikhayrin innaka ‛alā kulli shay’in qadīr.",
            translation:
              "suffice me against the evil of every night or day visitor that comes, except a visitor that comes with good; truly You have power over all things.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "بِسْمِ ٱللَّهِ أَرْقِي نَفْسِي مِنْ كُلِّ مَا يُؤْذِي وَمِنْ كُلِّ حَاسِدٍ",
            translit:
              "Bismillāhi arqī nafsī min kulli mā yu’dhī wa min kulli ḥāsid",
            translation:
              "In the Name of Allāh, I recite a charm of protection over myself from everything that harms and from every envier.",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُ شِفَائِي",
            translit: "Allāhu shifā’ī",
            translation: "Allāh is my healer.",
          }),
          new DhikrEntryModel({
            arabic: "بِسْمِ ٱللَّهِ رُقِيتُ",
            translit: "Bismillāhi ruqītu",
            translation:
              "In the Name of Allāh I have been given the protective recitation.",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَأْسَ",
            translit: "Allāhumma rabban nāsi adhhibil ba’sa",
            translation: "O Allāh, Lord of mankind, remove the affliction;",
          }),
          new DhikrEntryModel({
            arabic: "اِشْفِ أَنْتَ الشَّافِي",
            translit: "ishfi antash shāfī",
            translation: "heal, for You are the Healer;",
          }),
          new DhikrEntryModel({
            arabic: "وَعَافِ أَنْتَ الْمُعَافِي",
            translit: "wa ‛āfi antal mu‛āfī",
            translation:
              "and grant well-being, for You are the Granter of well-being;",
          }),
          new DhikrEntryModel({
            arabic: "لَا شِفَاءَ إِلَّا شِفَاؤُكَ",
            translit: "lā shifā’a illā shifā’uka",
            translation: "there is no healing except Your healing,",
          }),
          new DhikrEntryModel({
            arabic: "شِفَاءً لَا يُغَادِرُ سَقَمًا وَلَا أَلَمًا",
            translit: "shifā’al lā yughādiru saqamaw wa lā alam",
            translation:
              "a healing that leaves behind no sickness and no pain.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا كَافِي يَا وَافِي يَا حَمِيدُ يَا مَجِيدُ",
            translit: "Yā kāfī yā wāfī yā ḥamīdu yā majīd",
            translation: "O Sufficer, O Fulfiller, O Praiseworthy, O Glorious,",
          }),
          new DhikrEntryModel({
            arabic: "اِرْفَعْ عَنِّي كُلَّ تَعَبٍ شَدِيدٍ",
            translit: "irfa‛ ‛annī kulla ta‛abin shadīd",
            translation: "remove from me every severe hardship,",
          }),
          new DhikrEntryModel({
            arabic: "وَاكْفِنِي مِنَ الْحَدِّ وَالْحَدِيدِ",
            translit: "wakfinī minal ḥaddi wal ḥadīd",
            translation: "and suffice me against the blade and the iron,",
          }),
          new DhikrEntryModel({
            arabic: "وَالْمَرَضِ الشَّدِيدِ",
            translit: "wal maraḍish shadīd",
            translation: "and against severe illness,",
          }),
          new DhikrEntryModel({
            arabic: "وَالْجَيْشِ الْعَدِيدِ",
            translit: "wal jayshil ‛adīd",
            translation: "and against the numerous army.",
          }),
          new DhikrEntryModel({
            arabic: "وَاجْعَلْ لِي نُورًا مِنْ نُورِكَ",
            translit: "Waj‛al lī nūram min nūrika",
            translation: "And grant me a light from Your light,",
          }),
          new DhikrEntryModel({
            arabic: "وَعِزًّا مِنْ عِزِّكَ",
            translit: "wa ‛izzam min ‛izzika",
            translation: "and a might from Your might,",
          }),
          new DhikrEntryModel({
            arabic: "وَنَصْرًا مِنْ نَصْرِكَ",
            translit: "wa naṣram min naṣrika",
            translation: "and a victory from Your victory,",
          }),
          new DhikrEntryModel({
            arabic: "وَبَهَاءً مِنْ بَهَائِكَ",
            translit: "wa bahā’am min bahā’ika",
            translation: "and a splendour from Your splendour,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَطَاءً مِنْ عَطَاءِكَ",
            translit: "wa ‛aṭā’am min ‛aṭā’ika",
            translation: "and a gift from Your gift,",
          }),
          new DhikrEntryModel({
            arabic: "وَحِرَاسَةً مِنْ حِرَاسَتِكَ",
            translit: "wa ḥirāsatam min ḥirāsatika",
            translation: "and a protection from Your protection,",
          }),
          new DhikrEntryModel({
            arabic: "وَتَأْيِيدًا مِنْ تَأْيِيدِكَ",
            translit: "wa ta’yīdam min ta’yīdika.",
            translation: "and a support from Your support.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
            translit: "Yā dhal jalāli wal ikrām",
            translation: "O Possessor of Majesty and Honour,",
          }),
          new DhikrEntryModel({
            arabic: "وَالْمَوَاهِبِ الْعِظَامِ",
            translit: "wal mawāhibil ‛iẓām",
            translation: "and of great gifts,",
          }),
          new DhikrEntryModel({
            arabic: "أَسْأَلُكَ أَنْ تَكْفِيَنِي مِنْ شَرِّ كُلِّ ذِي شَرٍّ",
            translit: "as’aluka an takfiyanī min sharri kulli dhī sharrin",
            translation:
              "I ask You to suffice me against the evil of every evildoer,",
          }),
          new DhikrEntryModel({
            arabic: "إِنَّكَ أَنْتَ اللَّهُ الْخَالِقُ الْأَكْبَرُ",
            translit: "innaka antallāhul khāliqul akbar.",
            translation: "for You are Allāh, the Creator, the Greatest.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "وَصَلَّى اللَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَآلِهِ وَصَحْبِهِ وَسَلَّمَ تَسْلِيمًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ",
            translit:
              "Wa ṣallallāhu ‛alā sayyidinā Muḥammadin wa ālihī wa ṣaḥbihī wa sallama taslīman kathīran ṭayyiban mubārakan fīhi.",
            translation:
              "May Allāh bless our master Muhammad, his family and his Companions, and grant them abundant, pure and blessed peace.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "والْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ظَاهِرًا وَبَاطِنًا وَعَلَى كُلِّ حَالٍ، يَا أَرحَمَ الرَّاحِمِينَ",
            translit:
              "Wal ḥamdu lillāhi rabbil ‛ālamīna ẓāhiraw wa bāṭinaw wa ‛alā kulli ḥālin yā arḥamar rāḥimīn.",
            translation:
              "And all praise is due to Allāh, Lord of the Worlds, outwardly and inwardly and in every state, O Most Merciful of those who show mercy.",
          }),
        ],
      }),
    ],
  }),
];
