import {
  a_raf_43,
  an_am_13,
  baqarah_255,
  hud_41,
  isra_80,
  mu_minun_29,
  mursalat_23,
  nur_61,
  qasas_85,
  zukhruf_13,
  zukhruf_14,
  zumar_67,
} from "@/data/shared/quran-partial";
import { DhikrEntryModel, DhikrModel, WirdModel } from "@/models/recitation";

export default [
  new WirdModel({
    title: "Duas for travel",
    entries: [
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الْحَمْدُ لِلَّهِ",
            translit: "Alḥamdulillāh.",
            translation: "All praise be to Allāh.",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَآلِهِ وَسَلِّم",
            translit:
              "Allāhumma ṣalli ‛alā sayyidinā Muḥammadin wa ālihī wa sallam.",
            translation:
              "O Allāh! Bestow blessings and peace on our master Muḥammad and his family.",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ أَنْتَ الصَّاحِبُ فِي السَّفَرِ",
            translit: "Allāhumma antaṣ ṣāḥibu fissafari,",
            translation: "O Allāh! You are our Companion on this journey",
          }),
          new DhikrEntryModel({
            arabic: "وَأَنْتَ الْخَلِيفَةُ فِي الْأَهْلِ وَالْمَالِ وَالْوَلَدِ وَالْأَصْحَابِ",
            translit:
              "wa antal khalīfatu fil’ahli wal māli wal waladi wal aṣḥābi,",
            translation:
              "and the One in whose care we leave our family, wealth, children and friends.",
          }),
          new DhikrEntryModel({
            arabic: "اِحْفَظْنَا وَإِيَّاهُمْ مِنْ كُلِّ آفَةٍ وَعَاهَةٍ",
            translit: "iḥfaẓnā wa iyyāhum min kulli āfatin wa ‛āhatin,",
            translation:
              "Protect us and them from all kinds of illnesses and disasters.",
          }),
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي مَسِيرِنَا هَذَا الْبِرَّ وَالتَّقْوَى وَمِنَ الْعَمَلِ مَا تَرْضَى",
            translit:
              "Allāhumma innā nas’aluka fī masīrinā hādhal birra wattaqwā wa minal ‛amali mā tarḍā.",
            translation:
              "O Allāh! We ask You on this journey for goodness and piety and deeds that are pleasing to You.",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ إِنَّا نَسْأَلُكَ أَنْ تَطْوِيَ لَنَا الْأَرْضَ",
            translit: "Allāhumma innā nas’aluka an taṭwiya lanal arḍa,",
            translation:
              "O Allāh! We ask You to reduce for us the distances of the earth",
          }),
          new DhikrEntryModel({
            arabic: "وَتُهَوِّنَ عَلَيْنَا السَّفَرَ",
            translit: "wa tuhawwina ‛alaynas safara,",
            translation: "and to make this journey easy for us",
          }),
          new DhikrEntryModel({
            arabic: "وَأَنْ تَرْزُقَنَا فِي سَفَرِنَا سَلَامَةَ الْبَدَنِ وَالدِّينِ وَالْمَالِ",
            translit:
              "wa an tarzuqanā fī safarinā salāmatal badani waddīni wal māli,",
            translation:
              "and to grant us well-being in our body, religion, and wealth",
          }),
          new DhikrEntryModel({
            arabic: "وَأَنْ تُبَلِّغَنَا مَقْصِدَنَا",
            translit: "wa an tuballighanā maqṣadanā,",
            translation: "and to let us reach our destination.",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ وَعْثَاءِ السَّفَرِ",
            translit: "Allāhumma innā na‛ūdhu bika min wa‛thā’is safari,",
            translation:
              "O Allāh! We seek refuge in You from the difficulties of this journey",
          }),
          new DhikrEntryModel({
            arabic: "وَكَآبَةِ الْمُنْقَلَبِ",
            translit: "wa ka’ābatil munqalabi",
            translation:
              "and from (our) returning to (our) dwelling(s) and seeing what may grieve us",
          }),
          new DhikrEntryModel({
            arabic: "وَسُوءِ الْمَنْظَرِ فِي الْأَهْلِ وَالْمَالِ وَالْوَلَدِ وَالْأَصْحَابِ",
            translit:
              "wa sū’il manẓari fil’ahli wal māli wal waladi wal aṣḥābi.",
            translation:
              "and the wicked sights (in store for us) in our family, wealth, children and friends.",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ اجْعَلْنَا وَإِيَّاهُمْ فِي جِوَارِكَ",
            translit: "Allāhummaj‛alnā wa iyyāhum fī jawārika,",
            translation: "O Allāh! Place us and them in Your protection",
          }),
          new DhikrEntryModel({
            arabic: "وَلَا تَسْلُبنَا وَإِيَّاهُمْ نِعْمَتَكَ",
            translit: "wa lā taslubnā wa iyyāhum ni‛mataka,",
            translation: "and do not withhold Your blessings from us",
          }),
          new DhikrEntryModel({
            arabic: "وَلَا تُغَيِّر مَا بِنَا وَبِهِم مِنْ عَافِيَتِكَ",
            translit: "wa lā tughayyir mā binā wa bihim min ‛āfiyatika,",
            translation:
              "and do not change our and their (condition) from the health and safety that You have granted.",
          }),
          new DhikrEntryModel({
            arabic: "وَصَلَّى اللَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَآلِهِ وَسَلَّمَ",
            translit:
              "wa ṣallallāhu ‛alā sayyidinā Muḥammad, wa ālihī wa sallam,",
            translation:
              "And may the blessings and peace of Allāh be upon our master Muḥammad and his family.",
          }),
          new DhikrEntryModel({
            arabic: "والْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
            translit: "wal ḥamdulillāhi rabbil ‛ālamīn.",
            translation: "Praise be to Allāh, Lord of all the Worlds.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "بِسْمِ اللَّهِ",
            translit: "Bismillāh",
            translation: "In the Name of Allāh.",
          }),
          new DhikrEntryModel({
            arabic: "تَوَكَّلتُ عَلَى اللَّهِ",
            translit: "Tawakkaltu ‛alallāh",
            translation: "I have placed my trust in Allāh.",
          }),
          new DhikrEntryModel({
            arabic: "ولَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
            translit: "Wa lā ḥawla wa lā quwwata illā billāh",
            translation: "There is no power nor strength, except with Allāh.",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَن أَضِلَّ أَوْ أُضَلَّ",
            translit: "Allāhumma innī a‛ūdhu bika an aḍilla aw uḍall",
            translation:
              "O Lord, I take refuge in You lest I should stray or be led astray",
          }),
          new DhikrEntryModel({
            arabic: "أَوْ أَذِلَّ أَوْ أُذَلَّ",
            translit: "Aw adhilla aw udhall",
            translation: "or degrade (myself) or be humiliated",
          }),
          new DhikrEntryModel({
            arabic: "أَوْ أَزِلَّ أَوْ أُزَلَّ",
            translit: "Aw azilla aw uzall",
            translation: "or slip or be tripped",
          }),
          new DhikrEntryModel({
            arabic: "أَوْ أَظْلِمَ أَوْ أُظْلَم",
            translit: "Aw aẓlima aw uẓlam",
            translation: "or oppress or be oppressed",
          }),
          new DhikrEntryModel({
            arabic: "أَوْ أَجْهَلَ أَوْ يُجْهَلَ عَلَيَّ",
            translit: "Aw ajhala aw yujhala ‛alayy",
            translation: "or behave foolishly or be treated foolishly.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ بِحَقِّ السَّائِلِينَ عَلَيْكَ",
            translit: "Allāhumma innī as’aluka biḥaqqis sā’ilīna ‘Alayka",
            translation:
              "O Allāh! I beseech You in the  name of those who have a right to  ask You",
          }),
          new DhikrEntryModel({
            arabic: "وَبِحَقِّ الرَّاغِبِينَ إِلَيْكَ",
            translit: "wa biḥaqqir rāghibīna Ilayka",
            translation: "and in the name of those  who seek You",
          }),
          new DhikrEntryModel({
            arabic: "وَبِحَقِّ مَمْشَايَ هَذَا إِلَيْكَ",
            translit: "wa biḥaqqi mamshāya hādhā Ilayka",
            translation: "and with the right  of this walk towards You",
          }),
          new DhikrEntryModel({
            arabic: "فَإِنِّي لَمْ أَخْرُجْ أَشَرًا وَلَا بَطَرًا وَلَا رِيَاءً وَلَا سُمْعَةً",
            translit:
              "fa’innī lam akhruj asharan wa lā baṭaran wa lā riyā’an wa lā sum‛atan",
            translation:
              "for I did not leave (my house in a state of) insolence, or arrogance, or hypocrisy, or seeking fame.",
          }),
          new DhikrEntryModel({
            arabic: "بَلْ خَرَجتُ اتِّقَاءَ سَخَطِكَ وَابْتِغَاءَ مَرْضَاتِكَ",
            translit: "bal kharajtu ittiqā’a sakhaṭika wabtighā’a marḍātika",
            translation:
              "But I have left (my house) in fear of Your punishment and seeking Your pleasure.",
          }),
          new DhikrEntryModel({
            arabic: "أَسْأَلُكَ أَن تُعِيذَنِي مِنَ النَّارِ",
            translit: "As’aluka an tu‛īdhanī minannāri",
            translation: "I ask You to protect me from the Hellfire",
          }),
          new DhikrEntryModel({
            arabic: "وَتُدْخِلَنِي الْجَنَّةَ",
            translit: "wa tudkhilanil jannata",
            translation: "to admit me into Paradise",
          }),
          new DhikrEntryModel({
            arabic: "وَتَغْفِرَ لِي ذُنُوبِي",
            translit: "wa taghfira lī dhunūbī",
            translation: "and to forgive my sins",
          }),
          new DhikrEntryModel({
            arabic: "فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
            translit: "fa’innahū lā yaghfirudh dhunūba illā anta.",
            translation: "for none can forgive sins, but You.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "بِاسْمِكَ اللَّهُمَّ خَرَجْنَا",
            translit: "BismikAllāhumma kharajnā",
            translation: "In Your Name, O Allāh! Have we departed",
          }),
          new DhikrEntryModel({
            arabic: "وَأَنْتَ أَخْرَجْتَنَا",
            translit: "wa anta akhrajtanā",
            translation: "and You have (assisted us) in our departure.",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ سَلِّمْنَا وَسَلِّمْ مِنَّا",
            translit: "Allāhumma sallimnā wa sallim minnā",
            translation:
              "O Allāh! Grant us safety and keep (others) safe from us",
          }),
          new DhikrEntryModel({
            arabic: "وَرُدَّنَا سَالِمِينَ",
            translit: "wa ruddanā sālimīna",
            translation: "and return us safely",
          }),
          new DhikrEntryModel({
            arabic: "وَهَب لِكُلٍّ مِنَّا مَا وَهَبتَهُ لِلْغَانِمِينَ",
            translit: "wa hab likullim minnā mā wahabtahū lil ghānimīna.",
            translation:
              "and endow all of us with what You have granted the successful ones.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [baqarah_255()],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ بِكَ انْتَشَرتُ",
            translit: "Allāhumma bika intashartu",
            translation: "O Allāh! Through You have I gone forth",
          }),
          new DhikrEntryModel({
            arabic: "وَعَلَيْكَ تَوَكَّلتُ",
            translit: "Wa ‛alayka tawakkaltu",
            translation: "and in You do I put my trust",
          }),
          new DhikrEntryModel({
            arabic: "وَبِكَ اعْتَصَمتُ",
            translit: "Wa bika ‛taṣamtu",
            translation: "and to You do I resort",
          }),
          new DhikrEntryModel({
            arabic: "وَإِلَيْكَ تَوَجَّهتُ",
            translit: "Wa ilayka tawajjahtu",
            translation: "and to You do I direct myself.",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ أَنْتَ ثِقَتِي وَأَنْتَ رَجَائِي",
            translit: "Allāhumma anta thiqatī wa anta rajā’ī",
            translation: "O Allāh! You are my confidant and You are my hope.",
          }),
          new DhikrEntryModel({
            arabic: "فَاكْفِنِي مَا أَهَمَّنِي وَمَا لَا أَهْتَمُّ بِهِ وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّى",
            translit:
              "Fakfinī mā ahammanī wa mā lā ahtammu bih, wa mā anta a‛lamu bihī minnī",
            translation:
              "Make sufficient for me what is important to me, and (also) that which I do not attach importance to; and You are more knowledgeable than me regarding it.",
          }),
          new DhikrEntryModel({
            arabic: "عَزَّ جَارُكَ وَجَلَّ ثَنَاؤُكَ",
            translit: "‛Azza jāruka wa jalla thanā’uk",
            translation:
              "Exalted is Your protection and exalted is Your praise",
          }),
          new DhikrEntryModel({
            arabic: "وَلَا إِلَهَ غَيْرُكَ",
            translit: "Wa lā ilāha ghayruk",
            translation: "and there is no god but You.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ زَوِّدنِي التَّقْوَى، وَاغْفِرْ لِي ذَنْبِي، وَوَجِّهنِي لِلْخَيرِ أَيْنَمَا تَوَجَّهتُ",
            translit:
              "Allāhumma zawwidnit taqwā, waghfir lī dhambī, wa wajjihnī lil khayri aynamā tawajjahtu.",
            translation:
              "O Allāh! Grant me righteousness, forgive me my sins, and direct me towards good, wherever I may go.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "بِسْمِ اللَّهِ وَبِاللَّهِ وَاللَّهُ أَكْبَر",
            translit: "Bismillāhi wa billāhi wallāhu akbar",
            translation: "In the Name of Allāh, by Allāh, Allāh is Great.",
          }),
          new DhikrEntryModel({
            arabic: "تَوَكَّلتُ عَلَى اللَّهِ",
            translit: "Tawakkaltu ‛alallāh",
            translation: "I place my trust in Allāh.",
          }),
          new DhikrEntryModel({
            arabic: "وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيم",
            translit: "Wa lā ḥawla wa lā quwwata illā billāhil ‛aliyyil ‛aẓīm",
            translation:
              "There is no Power nor Strength, but with Allāh, the Most High, the Magnificent.",
          }),
          new DhikrEntryModel({
            arabic: "مَا شَاءَ اللَّهُ كَانَ",
            translit: "Mā shā’allāhu kān",
            translation: "Whatever Allāh wishes, will be",
          }),
          new DhikrEntryModel({
            arabic: "وَمَا لَمْ يَشَأْ لَمْ يَكُنْ",
            translit: "Wa mā lam yasha’ lam yakun",
            translation: "and whatever He does not wish, will not be.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [zukhruf_13(), zukhruf_14()],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ إِنِّي وَجَّهتُ وَجْهِي إِلَيْكَ",
            translit: "Allāhumma innī wajjahtu wajhī ilayka",
            translation: "O Allāh! I turn my face towards You",
          }),
          new DhikrEntryModel({
            arabic: "وَفَوَّضتُ أَمْرِي إِلَيْكَ",
            translit: "wa fawwaḍtu amrī ilayka",
            translation: "I entrust all my affairs to You",
          }),
          new DhikrEntryModel({
            arabic: "وَتَوَكَّلتُ فِي جَمِيعِ أُمُورِي عَلَيْكَ",
            translit: "wa tawakkaltu fī jamī‛i umūrī ‛alayka",
            translation:
              "and I rely upon You for all my affairs; You are sufficient for me",
          }),
          new DhikrEntryModel({
            arabic: "أَنْتَ حَسْبِي وَنِعمَ الْوَكِيل",
            translit: "anta ḥasbī wa ni‛mal wakīl.",
            translation: "and in You do I put my trust.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ",
            translit:
              "Subḥānallāhi, walḥamdu lillāhi, wa lā ilāha illallāhu, wallāhu akbar.",
            translation:
              "Glory be to Allāh; Praise be to Allāh; there is no god but Allāh; Allāh is Great.",
            repeat: 7,
          }),
        ],
      }),
      new DhikrModel({
        entries: [a_raf_43()],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ أَنْتَ الْحَامِلُ عَلَى الظَّهْرِ، وَأَنْتَ الْمُسْتَعَانُ عَلَى الْأُمُورِ. بِسْمِ اللَّهِ، وَالْمُلكُ لِلَّهِ",
            translit:
              "Allāhumma antal ḥāmilu ‛alaẓ ẓahri, wa antal musta‛ānu ‛alal umūri. Bismillāhi, wal mulku lillāhi.",
            translation:
              "O Allāh! You are the One who carries us on the backs (of the riding animals), and You are the one we can turn to for all our affairs. In the Name of Allāh, and all Authority belongs to Allāh.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [zumar_67()],
      }),
      new DhikrModel({
        entries: [hud_41(), zukhruf_13(), zukhruf_14()],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "بِسْمِ اللَّهِ",
            translit: "Bismillāhi,",
            translation: "In the Name of Allāh",
          }),
          new DhikrEntryModel({
            arabic: "وَالْمُلكُ لِلَّهِ",
            translit: "walmulku lillāhi.",
            translation: "and the Kingdom belongs to Allāh.",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ يَا مَنْ لَهُ السَّمَاوَاتُ السَّبْعُ طَائِعَة",
            translit: "Allāhumma yā man lahus samāwātus sab‛u ṭā’i‛atun,",
            translation:
              "O Allāh! O the One to Whom the seven Heavens belongs and are submissive",
          }),
          new DhikrEntryModel({
            arabic: "وَالْأَرَضُونَ السَّبْعُ خَاضِعَة",
            translit: "wal araḍūnas sab‛u khāḍi‛atun,",
            translation: "and the seven earths are humble",
          }),
          new DhikrEntryModel({
            arabic: "وَالْجِبَالُ الشَّامِخَاتُ خَاشِعَة",
            translit: "wal jibālush shāmikhāti khāshi‛atun,",
            translation: "and the high mountains are fearful",
          }),
          new DhikrEntryModel({
            arabic: "وَالْبِحَارُ الزَّاخِرَاتُ خَائِفَة",
            translit: "wal biḥāruz zākhirātu khā’ifatun,",
            translation: "and the overflowing oceans are frightened.",
          }),
          new DhikrEntryModel({
            arabic: "اِحْفَظْنَا أَنْتَ خَيْرٌ حِفْظًا وَأَنْتَ أَرْحَمُ الرَّاحِمِين",
            translit: "iḥfaẓnā anta khayrun ḥifẓan wa anta arḥamur rāḥimīn.",
            translation:
              "Protect us, You are the best of protectors, and you are the Most Merciful.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [mursalat_23()],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "الْحَمْدُ لِلَّهِ (3) وَاللَّهُ أَكْبَر (3) سُبْحَانَكَ إِنِّي ظَلَمتُ نَفْسِي فَاغْفِرْ لِي، إِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
            translit:
              "Alḥamdulillāh (3 times) Wallāhu akbar (3 times) Subḥānaka innī ẓalamtu nafsī faghfir lī, innahū lā yaghfirudh dhunūba illā Anta.",
            translation:
              "Praise be to Allāh (3 times), Allāh is Great (3 times), Glory belongs to You. Indeed, I have wronged myself; forgive me. Verily, none forgive sins but You.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ سَلِّمْنِي وَسَلِّمْ مَا مَعِي، وَاحْفَظْنِي وَاحْفَظْ مَا مَعِي، وَبَلِّغْنِي وَبَلِّغْ مَا مَعِي",
            translit:
              "Allāhumma sallimnī wa sallim mā ma‛ī, waḥfaẓnī waḥfaẓ mā ma‛ī, wa ballighnī wa balligh mā ma‛ī",
            translation:
              "O Allāh! Save me and save whatever I possess, and protect me and protect whatever I possess, and let me reach (my destination), and let whatever I possess reach (its destination)",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ سَلِّمْنِي وَسَلِّمْ مَا مَعِي، وَاحْفَظْنِي وَاحْفَظْ مَا مَعِي، وَبَلِّغْنِي وَبَلِّغْ مَا مَعِي",
            translit:
              "Allāhumma sallimnī wa sallim mā ma’ī, waḥfaẓnī waḥfaẓ mā ma’ī, wa ballighnī wa balligh mā ma’ī.",
            translation:
              "O Allāh! Save me and save whatever I possess, and protect me and protect whatever I possess, and let me reach (my destination), and let whatever I possess (reach its destination).",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ سَلِّمْنِي وَسَلِّمْ مَا مَعِي، وَاحْفَظْنِي وَاحْفَظْ مَا مَعِي، وَبَلِّغْنِي وَبَلِّغْ مَا مَعِي",
            translit:
              "Allāhumma sallimnī wa sallim mā ma’ī, waḥfaẓnī waḥfaẓ mā ma’ī, wa ballighnī wa balligh mā ma’ī.",
            translation:
              "O Allāh! Save me and save whatever I possess, and protect me and protect whatever I possess, and let me reach (my destination), and let whatever I possess reach (its destination).",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ سَلِّمْنِي وَسَلِّمْ مَا مَعِي، وَاحْفَظْنِي وَاحْفَظْ مَا مَعِي، وَبَلِّغْنِي وَبَلِّغْ مَا مَعِي",
            translit:
              "Allāhumma sallimnī wa sallim mā ma’ī, waḥfaẓnī waḥfaẓ mā ma’ī, wa ballighnī wa balligh mā ma’ī",
            translation:
              "O Allāh! Save me and save whatever I possess, and protect me and protect whatever I possess, and let me reach (my destination), and let whatever I possess reach (its destination)",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [qasas_85()],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "لَا إِلَهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيم",
            translit: "Lā ilāha illallāhul ‛aẓīmul ḥalīmu",
            translation:
              "There is no god, but Allāh, the Mighty, the Forbearing.",
          }),
          new DhikrEntryModel({
            arabic: "لَا إِلَهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيم",
            translit: "lā ilāha illallāhu rabbul ‛arshil ‛aẓīm",
            translation:
              "There is no god, but Allāh, Lord of the Mighty Throne.",
          }),
          new DhikrEntryModel({
            arabic: "لَا إِلَهَ إِلَّا اللَّهُ رَبُّ السَّمَاوَاتِ وَرَبُّ الْأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيم",
            translit:
              "lā ilāha illallāhu rabbus samāwāti wa rabbul arḍi wa rabbul ‛arshil karīm",
            translation:
              "There is no god, but Allāh, Lord of the Heavens and Lord of the earth, and Lord of the Honoured Throne.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "عَدَدَ خَلقِهِ وَرِضَى نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ",
            translit:
              "‛Adada khalqihī, wa riḍā nafsihī wa zinata ‛arshihī, wa midāda kalimātihī.",
            translation:
              "To the number of His creation, as He wishes to be praised, to the weight of His Throne, and the ink that it would take to write His Words.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ إِنَّا نَجْعَلُكَ فِي نُحُورِهِمْ",
            translit: "Allāhumma innā naj‛aluka fī nuḥūrihim",
            translation: "O Allāh! We place You upon their necks",
          }),
          new DhikrEntryModel({
            arabic: "وَنَعُوذُ بِكَ مِنْ شُرُورِهِمْ",
            translit: "wa na‛ūdhu bika min shurūrihim.",
            translation: "and we seek refuge in You from their evils.",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ رَبَّ السَّمَاوَاتِ وَرَبَّ الْعَرْشِ الْعَظِيم",
            translit: "Allāhumma rabbas samāwāti wa rabbal ‛arshil ‛aẓīm",
            translation:
              "O Allāh! Lord of the Heavens and Lord of the Honoured Throne",
          }),
          new DhikrEntryModel({
            arabic:
              "كُن لِي جَارًا مِنْ شَرِّ هَؤُلَاءِ وَمِنْ شَرِّ الْجِنِّ وَالْإِنْسِ وَأَعْوَانِهِمْ وَأَتْبَاعِهِمْ",
            translit:
              "kun lī jāran min sharri hā’ulā’i wa min sharril jinni wal insi wa a‛wānihim wa atbā‛ihim",
            translation:
              "be to me a protection from their evil, and from the evil of jinn and mankind, and from the evil of their helpers and followers.",
          }),
          new DhikrEntryModel({
            arabic: "عَزَّ جَارُكَ",
            translit: "‛azza jāruka",
            translation: "Exalted is Your protection",
          }),
          new DhikrEntryModel({
            arabic: "وَجَلَّ ثَنَاؤُكَ",
            translit: "wa jalla thanā’uka",
            translation: "and exalted is Your praise",
          }),
          new DhikrEntryModel({
            arabic: "وَلَا إِلَهَ غَيْرُكَ",
            translit: "wa lā ilāha ghayruka.",
            translation: "and there is no god but You.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُ أَكْبَر، اللَّهُمَّ لَكَ الشَّرَفُ عَلَى كُلِّ شَرَفٍ، وَلَكَ الْحَمْدُ عَلَى كُلِّ حَالٍ",
            translit:
              "Allāhu akbar, Allāhumma lakash sharafu ‛alā kulli sharafin, wa lakal ḥamdu ‛alā kulli ḥāl.",
            translation:
              "Allāh is Great! O Allāh! You are Noble above all nobility. To You belong all praise under all circumstances.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "سُبْحَانَ الْمَلِكِ الْقُدُّوسِ، رَبِّ الْمَلَائِكَةِ وَالرُّوحِ، جُلِّلَتِ السَّمَاوَاتُ بِالْعِزَّةِ وَالْجَبَرُوتِ",
            translit:
              "Subḥānal malikil quddūs, Rabbil malā’ikati warrūḥ, jullilatis samāwātu bil‛‘izzati wal jabarūt.",
            translation:
              "Glory be to You, the Master, the Pure One. Glory be to You, the Holy, the Lord of the Angels and the Spirit (Jibrīl). You have filled the Heavens and the earth with Might and Grandeur.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا أَرْضُ",
            translit: "Yā arḍ",
            translation: "O earth!",
          }),
          new DhikrEntryModel({
            arabic: "رَبِّي وَرَبُّكِ اللَّهُ",
            translit: "Rabbī wa rabbukillāh",
            translation: "My Lord and your Lord is Allāh.",
          }),
          new DhikrEntryModel({
            arabic: "أَعُوذُ بِاللَّهِ مِنْ شَرِّكِ وَشَرِّ مَا فِيكِ",
            translit: "A‛ūdhu billāhi min sharrikī wa sharri mā fīk",
            translation:
              "I seek refuge in Allāh from your evil, and from the evil within you",
          }),
          new DhikrEntryModel({
            arabic: "وَشَرِّ مَا خُلِقَ فِيكِ",
            translit: "Wa sharri mā khuliqa fīk",
            translation: "and from the evil (of the creatures) created in you",
          }),
          new DhikrEntryModel({
            arabic: "وَمِنْ شَرِّ مَا يَدِبُّ عَلَيْكِ",
            translit: "Wa min sharri mā yadibbu ‛alayk",
            translation:
              "and the evil (of the creatures) that crawls upon you.",
          }),
          new DhikrEntryModel({
            arabic: "وَأَعُوذُ بِاللَّهِ مِنْ أَسَدٍ وَأَسْوَدَ",
            translit: "Wa a‛ūdhu billāhi min asadin wa aswad",
            translation:
              "I seek refuge in Allāh from the evil of every lion, every great serpent",
          }),
          new DhikrEntryModel({
            arabic: "وَمِنَ الْحَيَّةِ وَالْعَقْرَبِ",
            translit: "Wa minal ḥayyati wal ‛aqrab",
            translation: "every snake and every scorpion",
          }),
          new DhikrEntryModel({
            arabic: "وَمِنْ سَاكِنِ الْبَلَدِ",
            translit: "Wa min sākinil balad",
            translation: "and the evil of every inhabitant of the land",
          }),
          new DhikrEntryModel({
            arabic: "وَمِنْ وَالِدٍ وَمَا وَلَدَ",
            translit: "Wa min wālidin wa mā walad",
            translation: "and the evil of every parent and his progeny.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [an_am_13()],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُ أَكْبَر (3) لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
            translit:
              "Allāhu akbar (3) Lā ilāha illallāhu waḥdahū lā sharīka lah",
            translation:
              "Allāh is Great (3 times). There is no god but Allāh alone; He has no partner.",
          }),
          new DhikrEntryModel({
            arabic: "لَهُ الْمُلكُ وَالْحَمْدُ",
            translit: "Lahul mulku wal ḥamd",
            translation:
              "To Him belongs all Authority and for Him is all praise",
          }),
          new DhikrEntryModel({
            arabic: "وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
            translit: "Wa huwa ‛alā kulli shay’in qadīr",
            translation: "and He is capable of all things",
          }),
          new DhikrEntryModel({
            arabic: "عَدَدَ كُلِّ ذَرَّةٍ أَلْفَ أَلْفِ مَرَّة",
            translit: "‛Adada kulli dharratin alfa alfi marrah",
            translation: "the number of every atom a thousand, thousand times.",
          }),
          new DhikrEntryModel({
            arabic: "آيِبُونَ",
            translit: "Āyibūn",
            translation: "We return (from our journey)",
          }),
          new DhikrEntryModel({
            arabic: "تَائِبُونَ",
            translit: "Tā’ibūn",
            translation: "the repenting ones",
          }),
          new DhikrEntryModel({
            arabic: "عَابِدُونَ",
            translit: "‛Ābidūn",
            translation: "the worshippers",
          }),
          new DhikrEntryModel({
            arabic: "لِرَبِّنَا حَامِدُونَ",
            translit: "Lirabbinā ḥāmidūn",
            translation: "praising our Lord.",
          }),
          new DhikrEntryModel({
            arabic: "صَدَقَ اللَّهُ وَعْدَهُ",
            translit: "Ṣadaqallāhu wa‛dah",
            translation: "Allāh was true to His promise",
          }),
          new DhikrEntryModel({
            arabic: "وَنَصَرَ عَبْدَهُ وَهَزَمَ الْأَحْزَابَ وَحْدَهُ",
            translit: "Wa naṣara ‛abdahū wa hazamal aḥzāba waḥdah",
            translation:
              "helpful to His servant, and defeated the troops alone.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [mu_minun_29(), isra_80()],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ رَبَّ السَّمَاوَاتِ السَّبْعِ وَمَا أَظلَلنَ",
            translit: "Allāhumma Rabbas samāwātis sab‛i wa mā aẓlalna",
            translation:
              "O Allāh! Lord of the seven Heavens and all that they overshadow",
          }),
          new DhikrEntryModel({
            arabic: "وَرَبَّ الْأَرَضِينَ السَّبْعِ وَمَا أَقلَلنَ",
            translit: "wa Rabbal araḍīnas sab‛i wa mā aqlalna",
            translation:
              "and Lord of the seven earths, and all that they contain",
          }),
          new DhikrEntryModel({
            arabic: "وَرَبَّ الشَّيَاطِينِ وَمَا أَضلَلنَ",
            translit: "wa Rabbash shayāṭīni wa mā aḍlalna",
            translation: "and Lord of the Satans and all that they lead astray",
          }),
          new DhikrEntryModel({
            arabic: "وَرَبَّ الرِّيَاحِ وَمَا ذَرَينَ",
            translit: "wa Rabbar riyāḥi wa mā dharayna",
            translation:
              "and Lord of the winds and all that which it blows away",
          }),
          new DhikrEntryModel({
            arabic: "وَرَبَّ الْبِحَارِ وَمَا جَرَينَ",
            translit: "wa Rabbal biḥāri wa mā jarayna",
            translation: "and Lord of the seas and the course that it flows.",
          }),
          new DhikrEntryModel({
            arabic: "أَسْأَلُكَ خَيرَ هَذِهِ الْقَرْيَةِ",
            translit: "as’aluka khayra hādhihil qaryati",
            translation: "I beseech You the good of this village",
          }),
          new DhikrEntryModel({
            arabic: "وَخَيْرَ مَا فِيهَا",
            translit: "wa khayra mā fīhi",
            translation: "and the good of what is in it",
          }),
          new DhikrEntryModel({
            arabic: "وَخَيْرَ أَهْلِهَا وَخَيْرَ مَا جَبَلتَهَا وَجَبَلتَهُمْ عَلَيْهِ",
            translit:
              "wa khayra ahlihā wa khayra mā jabaltahā wa jabaltahum ‛alayhi",
            translation:
              "and the good of its inhabitants, and the goodness upon which you have created it (the village) and its people.",
          }),
          new DhikrEntryModel({
            arabic: "وَأَعُوذُ بِكَ مِنْ شَرِّ هَذِهِ الْبَلْدَةِ",
            translit: "wa a‛ūdhu bika min sharri hādhihil baldati",
            translation:
              "And I seek refuge in You from the evil of this village",
          }),
          new DhikrEntryModel({
            arabic: "وَشَرِّ مَا فِيهَا",
            translit: "wa sharri mā fīhi",
            translation: "and the evil that is in it",
          }),
          new DhikrEntryModel({
            arabic: "وَشَرِّ أَهْلِهَا",
            translit: "wa sharri ahlihā",
            translation: "and in the evil of its people",
          }),
          new DhikrEntryModel({
            arabic: "وَشَرِّ مَا جَبَلتَهَا وَجَبَلتَهُمْ عَلَيْهِ",
            translit: "wa sharri mā jabaltahā wa jabaltahum ‛alayhi",
            translation:
              "and the evil upon which you have created it (the village) and its people.",
          }),
          new DhikrEntryModel({
            arabic: "اِصْرِفْ عَنَّا شَرَّ شِرَارِهِمْ",
            translit: "iṣrif ‛annā sharra shirārihim.",
            translation: "And divert us from the worst of their evils.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ ارْزُقْنَا حَيَاهَا وَجَنَاهَا، وَأَعِذْنَا مِنْ وَبَاهَا",
            translit:
              "Allāhummarzuqnā ḥayāhā wa janāhā, wa a‛idhnā man wabāhā.",
            translation:
              "O Allāh! Grant us its herbage, its harvest, and save us from its epidemics.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ بَارِك لَنَا فِيهَا (3) وَحَبِّبْنَا إِلَى أَهْلِهَا وَحَبِّبْ صَالِحِي أَهْلِهَا إِلَيْنَا",
            translit:
              "Allāhumma bārik lanā fīhā (3 times) wa ḥabbibnā ilā ahlihā wa ḥabbib ṣāliḥī ahlihā ilaynā.",
            translation:
              "O Allāh! Bless us in it (3 times) and make us love its people, and make the pious from among them love us.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ",
            translit:
              "Assalāmu ‛alayka ayyuhan Nabiyyu wa raḥmatullāhi wa barakātuhū,",
            translation:
              "Peace be upon you, O Prophet, may Allāh's mercy and blessings be upon you.",
          }),
          new DhikrEntryModel({
            arabic: "السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ",
            translit: "assalāmu ‛alaynā wa ‛alā ‛ibādillāhiṣ ṣāliḥīn,",
            translation:
              "Peace be upon us and upon all Allāh's righteous servants.",
          }),
          new DhikrEntryModel({
            arabic: "السَّلَامُ عَلَيْنَا مِنْ رَبِّنَا",
            translit: "assalāmu ‛alaynā mirrabbinā",
            translation: "Peace be upon us from our Lord,",
          }),
          nur_61(),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَآلِهِ وَسَلِّم",
            translit:
              "Allāhumma ṣalli ‛alā sayyidinā Muḥammadin wa ālihī wa sallim.",
            translation:
              "O Allāh! May the blessings and peace of Allāh be upon our master Muḥammad, and his family.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَولَجِ وَخَيْرَ الْمَخْرَجِ",
            translit:
              "Allāhumma innī as’aluka khayral mawlaji wa khayral makhraji.",
            translation:
              "O Allāh! I beseech You for a good entering and for a good exit.",
          }),
          new DhikrEntryModel({
            arabic: "بِسْمِ اللَّهِ وَلَجْنَا",
            translit: "Bismillāhi walajnā,",
            translation: "In the Name of Allāh do we enter",
          }),
          new DhikrEntryModel({
            arabic: "وَبِسْمِ اللَّهَ خَرَجْنَا",
            translit: "wa Bismillāhi kharajnā,",
            translation: "and in His Name do we exit",
          }),
          new DhikrEntryModel({
            arabic: "وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلنَا",
            translit: "wa ‛alallāhi Rabbinā tawakkalnā",
            translation: "and upon our Lord do we rely.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [isra_80(), mu_minun_29()],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "تَوْبًا تَوْبًا لِرَبِّنَا أَوْبًا، لَا يُغَادِرُ حَوْبًا",
            translit: "Tawban tawban lirabbinā awban lā yughādiru ḥawban.",
            translation: "Repenting, repenting to our Lord, we return [home].",
          }),
        ],
      }),
    ],
  }),
];
