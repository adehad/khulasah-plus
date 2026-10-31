import { baqarah_201, saffat_180_182 } from "@/data/shared/quran-partial";
import {
  DhikrEntryModel,
  DhikrModel,
  only_instruction,
  WirdModel,
} from "@/models/recitation";

export default [
  new WirdModel({
    title: "Dua Khatm al-Qur'an al-Karim",
    entries: [
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "صَدَقَ اللَّهُ الْعَظِيمُ",
            translit: "Ṣadaqallāhul-‛aẓīm",
            translation: "Allah, the Supreme, has spoken the truth",
          }),
          new DhikrEntryModel({
            arabic: "وَبَلَّغَ رَسُولُهُ النَّبِيُّ الْوَفِيُّ الْكَرِيمُ",
            translit: "Wa ballagha rasūluhun-nabiyyul-wafiyyul-karīm",
            translation:
              "and His loyal, generous Messenger and Prophet conveyed.",
          }),
          new DhikrEntryModel({
            arabic: "وَعَلَى مُحَمَّدٍ مِنَّا وَمِنْكُمْ أَفْضَلُ الصَّلَاةِ وَأَزْكَى التَّحِيَّةِ والتَّسْلِيمِ",
            translit:
              "Wa ‛alā Muḥammadin minnā wa minkum afḍaluṣ-ṣalāti wa azkat-taḥiyyati wat-taslīm",
            translation:
              "And upon Muhammad from us and you be the best of blessings and the purest of salutations and peace.",
          }),
          new DhikrEntryModel({
            arabic: "وَٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ",
            translit: "Wal-ḥamdu lillāhi rabbil-‛ālamīn",
            translation: "Praise be to Allah, the Lord of the worlds.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ انْفَعْنَا",
            translit: "Allāhumman-fa‛nā",
            translation: "O Allah, benefit us!",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ ارْفَعْنَا",
            translit: "Allāhummar-fa‛nā",
            translation: "O Allah, raise us!",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ اسْتُرْنَا",
            translit: "Allāhummas-turnā",
            translation: "O Allah, veil us!",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ اجْبُرْنَا",
            translit: "Allāhummaj-burnā",
            translation: "O Allah, help us!",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ ارْحَمْنَا",
            translit: "Allāhummar-ḥamnā",
            translation: "O Allah, have mercy on us,",
          }),
          new DhikrEntryModel({
            arabic: "وَارْحَمْ وَالِدِيْنَا",
            translit: "War-ḥam wālidīnā",
            translation: "and have mercy on our parents,",
          }),
          new DhikrEntryModel({
            arabic: "وَارْحَمْ مَشَايِخَنَا",
            translit: "war-ḥam mashāyikhanā",
            translation: "and have mercy on our Shaykhs,",
          }),
          new DhikrEntryModel({
            arabic: "وَارْحَمْ مُعَلِّمِينَا",
            translit: "war-ḥam mu‛allimīnā",
            translation: "teachers,",
          }),
          new DhikrEntryModel({
            arabic: "وَوَالِدِيهِمْ وَالْحَاضِرِينَ",
            translit: "wa wālidīhim wal-ḥāḍirīn",
            translation: "their parents, those present,",
          }),
          new DhikrEntryModel({
            arabic: "وَجَمِيعِ الْمُسْلِمِينَ",
            translit: "wa jamī‛il-muslimīn",
            translation: "and all Muslims!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ مَغْفِرَتُكَ أَوْسَعُ مِنْ ذُنُوبِنَا، وَرَحْمَتُكَ أَرْجَى عِنْدَنَا مِنْ أَعْمَالِنَا",
            translit:
              "Allāhumma maghfiratuka awsa‛u min dhunūbinā, wa raḥmatuka arjā ‛indanā min a‛mālinā",
            translation:
              "O Allah, Your forgiveness is greater than our sins, and our hope in Your mercy far exceeds the hope we have in our good deeds. [thrice]",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ إِنَّا نَعُوذُ بِكَ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ",
            translit:
              "Allāhumma innā na‛ūdhu bika an nushrika bika shay’an na‛lamuh, wa nastaghfiruka limā lā na‛lamuh",
            translation:
              "O Allah, we seek refuge in You from associating any partners with You while we know, and we seek Your forgiveness for what we do not know. [thrice]",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "أَنْتَ تَعْلَمُ مِنَّا يَا اللَّهُ يَا كَرِيمُ يَا رَحِيمُ، يَا وَدُودُ يَا حَيُّ يَا قَيُّومُ يَا اللَّهُ",
            translit:
              "Anta ta‛lamu minnā, yā Allāh, yā Karīm, yā Raḥīm, yā Wadūd, yā Ḥayyu yā Qayyūm, yā Allāh",
            translation:
              "You know better than us, O Allah, O Most Generous, O Most Merciful, O Most Loving, O Ever-Living, O Self-Subsisting, O Allah!",
          }),
        ],
      }),
      new DhikrModel({
        instruction: "Then raise your hands in supplication and say:",
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ",
            translit:
              "Allāhumma ṣalli wa sallim ‛alā sayyidinā Muḥammadin wa ‛alā āli sayyidinā Muḥammad",
            translation:
              "O Allah, bless and grant peace to our master Muhammad and the family of our master Muhammad.",
          }),
          new DhikrEntryModel({
            arabic: "يَا ذَا الْجَلَالِ وَالْجَمَالِ وَالْإِكْرَامِ وَالْمَوَاهِبِ الْعِظَامِ",
            translit:
              "Yā dhal-jalāli wal-jamāli wal-ikrāmi wal-mawāhibil-‛iẓām",
            translation:
              "O Possessor of majesty, beauty, honour and great gifts!",
          }),
          new DhikrEntryModel({
            arabic: "وَرَضِيَ اللَّهُ تَعَالَى عَنْ أَصْحَابِ سَيِّدِنَا رَسُولِ اللَّهِ أَجْمَعِينَ",
            translit:
              "Wa raḍiyallāhu ta‛ālā ‛an aṣḥābi sayyidinā rasūlillāhi ajma‛īn",
            translation:
              "May Allah the Exalted be pleased with all the companions of our master the Messenger of Allah.",
          }),
          new DhikrEntryModel({
            arabic: "وَرَضِيَ عَنَّا",
            translit: "wa raḍiya ‛annā",
            translation: "May He be pleased with us,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَنْ وَالِدِينَا",
            translit: "wa ‛an wālidīnā",
            translation: "our parents,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَنْ أَمْوَاتِنَا",
            translit: "wa ‛an amwātinā",
            translation: "our deceased,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَنْ مَشَايِخِنَا",
            translit: "wa ‛an mashāyikhinā",
            translation: "our scholars,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَنْ مُعَلِّمِينَا",
            translit: "wa ‛an mu‛allimīnā",
            translation: "our teachers,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَنْ وَالِدِيهِمْ",
            translit: "wa ‛an wālidīhim",
            translation: "their parents,",
          }),
          new DhikrEntryModel({
            arabic: "وَالْحَاضِرِينَ",
            translit: "wal-ḥāḍirīn",
            translation: "those present,",
          }),
          new DhikrEntryModel({
            arabic: "وَجَمِيعِ الْمُسْلِمِينَ",
            translit: "wa jamī‛il-muslimīn",
            translation: "and all Muslims.",
          }),
          new DhikrEntryModel({
            arabic: "يَا ذَا الْجَلَالِ وَالْجَمَالِ وَالْإِكْرَامِ وَالْمَوَاهِبِ الْعِظَامِ",
            translit:
              "Yā dhal-jalāli wal-jamāli wal-ikrāmi wal-mawāhibil-‛iẓām",
            translation:
              "O Possessor of majesty, beauty, honour and great gifts!",
          }),
          new DhikrEntryModel({
            arabic: "وَرَضِيَ اللَّهُ تَعَالَى عَنْ أَصْحَابِ سَيِّدِنَا رَسُولِ اللَّهِ أَجْمَعِينَ",
            translit:
              "Wa raḍiyallāhu ta‛ālā ‛an aṣḥābi sayyidinā rasūlillāhi ajma‛īn",
            translation:
              "May Allah the Exalted be pleased with all the companions of our master the Messenger of Allah.",
          }),
          new DhikrEntryModel({
            arabic: "وَرَضِيَ عَنَّا",
            translit: "wa raḍiya ‛annā",
            translation: "May He be pleased with us,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَنْ وَالِدِينَا",
            translit: "wa ‛an wālidīnā",
            translation: "our parents,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَنْ أَمْوَاتِنَا",
            translit: "wa ‛an amwātinā",
            translation: "our deceased,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَنْ مَشَايِخِنَا",
            translit: "wa ‛an mashāyikhinā",
            translation: "our scholars,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَنْ مُعَلِّمِينَا",
            translit: "wa ‛an mu‛allimīnā",
            translation: "our teachers,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَنْ وَالِدِيهِمْ",
            translit: "wa ‛an wālidīhim",
            translation: "their parents,",
          }),
          new DhikrEntryModel({
            arabic: "وَالْحَاضِرِينَ",
            translit: "wal-ḥāḍirīn",
            translation: "those present,",
          }),
          new DhikrEntryModel({
            arabic: "وَجَمِيعِ الْمُسْلِمِينَ",
            translit: "wa jamī‛il-muslimīn",
            translation: "and all Muslims.",
          }),
          new DhikrEntryModel({
            arabic: "يَا ذَا الْجَلَالِ وَالْجَمَالِ وَالْإِكْرَامِ وَالْمَوَاهِبِ الْعِظَامِ",
            translit:
              "Yā dhal-jalāli wal-jamāli wal-ikrāmi wal-mawāhibil-‛iẓām",
            translation:
              "O Possessor of majesty, beauty, honour and great gifts!",
          }),
          new DhikrEntryModel({
            arabic: "وَرَضِيَ اللَّهُ تَعَالَى عَنْ أَصْحَابِ سَيِّدِنَا رَسُولِ اللَّهِ أَجْمَعِينَ",
            translit:
              "Wa raḍiyallāhu ta‛ālā ‛an aṣḥābi sayyidinā rasūlillāhi ajma‛īn",
            translation:
              "May Allah the Exalted be pleased with all the companions of our master the Messenger of Allah.",
          }),
          new DhikrEntryModel({
            arabic: "وَرَضِيَ عَنَّا",
            translit: "wa raḍiya ‛annā",
            translation: "May He be pleased with us,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَنْ وَالِدِينَا",
            translit: "wa ‛an wālidīnā",
            translation: "our parents,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَنْ أَمْوَاتِنَا",
            translit: "wa ‛an amwātinā",
            translation: "our deceased,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَنْ مَشَايِخِنَا",
            translit: "wa ‛an mashāyikhinā",
            translation: "our scholars,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَنْ مُعَلِّمِينَا",
            translit: "wa ‛an mu‛allimīnā",
            translation: "our teachers,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَنْ وَالِدِيهِمْ",
            translit: "wa ‛an wālidīhim",
            translation: "their parents,",
          }),
          new DhikrEntryModel({
            arabic: "وَالْحَاضِرِينَ",
            translit: "wal-ḥāḍirīn",
            translation: "those present,",
          }),
          new DhikrEntryModel({
            arabic: "وَجَمِيعِ الْمُسْلِمِينَ",
            translit: "wa jamī‛il-muslimīn",
            translation: "and all Muslims.",
          }),
          new DhikrEntryModel({
            arabic: "يَا ذَا الْجَلَالِ وَالْجَمَالِ وَالْإِكْرَامِ وَالْمَوَاهِبِ الْعِظَامِ",
            translit:
              "Yā dhal-jalāli wal-jamāli wal-ikrāmi wal-mawāhibil-‛iẓām",
            translation:
              "O Possessor of majesty, beauty, honour and great gifts!",
          }),
          new DhikrEntryModel({
            arabic: "وَرَضِيَ اللَّهُ تَعَالَى عَنْ أَصْحَابِ سَيِّدِنَا رَسُولِ اللَّهِ أَجْمَعِينَ",
            translit:
              "Wa raḍiyallāhu ta‛ālā ‛an aṣḥābi sayyidinā rasūlillāhi ajma‛īn",
            translation:
              "May Allah the Exalted be pleased with all the companions of our master the Messenger of Allah.",
          }),
          new DhikrEntryModel({
            arabic: "وَرَضِيَ عَنَّا",
            translit: "wa raḍiya ‛annā",
            translation: "May He be pleased with us,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَنْ وَالِدِينَا",
            translit: "wa ‛an wālidīnā",
            translation: "our parents,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَنْ أَمْوَاتِنَا",
            translit: "wa ‛an amwātinā",
            translation: "our deceased,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَنْ مَشَايِخِنَا",
            translit: "wa ‛an mashāyikhinā",
            translation: "our scholars,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَنْ مُعَلِّمِينَا",
            translit: "wa ‛an mu‛allimīnā",
            translation: "our teachers,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَنْ وَالِدِيهِمْ",
            translit: "wa ‛an wālidīhim",
            translation: "their parents,",
          }),
          new DhikrEntryModel({
            arabic: "وَالْحَاضِرِينَ",
            translit: "wal-ḥāḍirīn",
            translation: "those present,",
          }),
          new DhikrEntryModel({
            arabic: "وَجَمِيعِ الْمُسْلِمِينَ",
            translit: "wa jamī‛il-muslimīn",
            translation: "and all Muslims.",
          }),
        ],
      }),
    ],
  }),
  // An untitled, empty wird carries the rubric that sits between the two duas
  only_instruction(
    "Pray for whatever you wish that is pleasing to Allah, the Exalted. Then read:",
  ),
  new WirdModel({
    title: "Prayer on Completion of the Holy Qur'an",
    instruction:
      "By Imam Ali Zayn al-Abidin bin al-Husayn bin Imam Ali bin Abi Talib (Allah's pleasure be upon them)",
    entries: [
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "ٱلْحَمْدُ  لِلَّهِ رَبِّ الْعَالَمِينَ حَمَدًا يُوَافِي نِعَمَهُ وَيُكَافِئُ مَزِيدَهُ",
            translit:
              "Al-ḥamdu lillāhi rabbil-‛ālamīna ḥamdan yuwāfī ni‛amahū wa yukāfi’u mazīdah",
            translation:
              "All praise be to Allah, Lord of the worlds; praise that is adequate to His favours and equal to His increase.",
          }),
          new DhikrEntryModel({
            arabic: "يَا رَبَّنَا لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ وَعَظِيمِ سُلْطَانِكَ",
            translit:
              "Yā rabbanā lakal-ḥamdu kamā yanbaghī lijalāli wajhika wa ‛aẓīmi sulṭānik",
            translation:
              "O our Lord, praise is for You as befits the majesty of Your Countenance and the greatness of Your sovereignty.",
          }),
          new DhikrEntryModel({
            arabic: "سُبْحَانَكَ لَا نُحْصِي ثَنَاءً عَلَيْكَ أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ",
            translit:
              "Subḥānaka lā nuḥṣī thanā’an ‛alayka anta kamā athnayta ‛alā nafsik",
            translation:
              "Glory be to You! We cannot enumerate Your praises. You are as You have praised Yourself.",
          }),
          new DhikrEntryModel({
            arabic: "فَلَكَ الْحَمْدُ حَتَّى تَرْضَى",
            translit: "Fa lakal-ḥamdu ḥattā tarḍā",
            translation: "So praise be to You until You are pleased.",
          }),
          new DhikrEntryModel({
            arabic: "وَلَكَ الْحَمْدُ إِذَا رَضِيتَ",
            translit: "wa lakal-ḥamdu idhā raḍīt",
            translation: "Praise be to You when You are pleased.",
          }),
          new DhikrEntryModel({
            arabic: "وَلَكَ الْحَمْدُ بَعْدَ الرِّضَا",
            translit: "wa lakal-ḥamdu ba‛dar-riḍā",
            translation: "Praise be to You after Your pleasure.",
          }),
          new DhikrEntryModel({
            arabic: "ٱلْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
            translit: "Al-ḥamdu lillāhi rabbil-‛ālamīn",
            translation: "Praise be to Allah, Lord of the worlds.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ،",
            translit:
              "Allāhumma ṣalli wa sallim ‛alā sayyidinā Muḥammadin wa ‛alā āli sayyidinā Muḥammad,",
            translation:
              "O Allah, bless and grant peace to our master Muḥammad and the family of our master Muhammad.",
          }),
          new DhikrEntryModel({
            arabic: "يَا ذَا الْجَلَالِ وَالْجَمَالِ وَالْإِكْرَامِ وَالْمَوَاهِبِ الْعِظَامِ،",
            translit:
              "yā dhal-jalāli wal-jamāli wal-ikrāmi wal-mawāhibil-‛iẓām,",
            translation:
              "O Possessor of majesty, beauty, honour and great gifts!",
          }),
          new DhikrEntryModel({
            arabic: "وَرَضِيَ اللَّهُ تَعَالَى عَنْ أَصْحَابِ سَيِّدِنَا رَسُولِ اللَّهِ أَجْمَعِينَ،",
            translit:
              "wa raḍiyallāhu ta‛ālā ‛an aṣḥābi sayyidinā rasūlillāhi ajma‛īn,",
            translation:
              "May Allah the Exalted be pleased with all the companions of our master the Messenger of Allah.",
          }),
          new DhikrEntryModel({
            arabic:
              "وَرَضِيَ عَنَّا، وَعَنْ وَالِدِينَا، وَعَنْ أَمْوَاتِنَا، وَعَنْ مَشَايِخِنَا، وَعَنْ مُعَلِّمِينَا، وَعَنْ وَالِدِيهِمْ، وَالْحَاضِرِينَ، وَجَمِيعِ الْمُسْلِمِينَ",
            translit:
              "wa raḍiya ‛annā, wa ‛an wālidīnā, wa ‛an amwātinā, wa ‛an mashāyikhinā, wa ‛an mu‛allimīnā, wa ‛an wālidīhim, wal-ḥāḍirīn, wa jamī‛il-muslimīn",
            translation:
              "May He be pleased with us, our parents, our deceased, our scholars, our teachers, their parents, those present, and all Muslims.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ افْعَلْ بِنَا وَبِهِمْ مِنَ الْجَمِيلِ مَا أَنْتَ أَهْلُهُ",
            translit: "Allāhummaf-‛al binā wa bihim minal-jamīli mā anta ahluh",
            translation:
              "O Allah, act beautifully with us and them as befits You.",
          }),
          new DhikrEntryModel({
            arabic: "يَا أَرْحَمَ الرَّاحِمِينَ",
            translit: "Yā arḥamar-rāḥimīn",
            translation: "O Most Merciful!",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ",
            translit: "Allāhumma",
            translation: "O Allāh,",
          }),
          baqarah_201(),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ اجْعَلْنَا وَوَالِدِينَا وَمَشَايِخَنَا وَمُعَلِّمِينَا وَوَالِدِيهِمْ وَالْحَاضِرِينَ",
            translit:
              "Allāhummaj-‛alnā wa wālidīnā wa mashāyikhanā wa mu‛allimīnā wa wālidīhim wal-ḥāḍirīna",
            translation:
              "O Allah, make us, our parents, our scholars, our teachers, their parents, those present",
          }),
          new DhikrEntryModel({
            arabic:
              "وَجَمِيعَ الْمُسْلِمِينَ مِنْ عِبَادِكَ الصَّالِحِينَ الْمُفْلِحِينَ الْمُنْجِحِينَ الْفَائِزِينَ الْبَارِّينَ النَّعِمِينَ الْفَرِحِينَ الْمَسْرُورِينَ الْمُسْتَبْشِرِينَ الْمُطْمَئِنِّينَ الْآمِنِينَ",
            translit:
              "wa jamī‛al-muslimīna min ‛ibādikaṣ-ṣāliḥīnal-mufliḥīnal-munjiḥīnal-fā’izīnal-barrīnan-na‛imīnal-fariḥīnal-masrūrīnal-mustabshirīnal-muṭma’innīnal-āminīn",
            translation:
              "and all Muslims of Your righteous, successful, triumphant, favoured, happy, joyful, cheerful, tranquil and secure slaves,",
          }),
          new DhikrEntryModel({
            arabic: "الَّذِينَ لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِينَ",
            translit:
              "al-ladhīna lā khawfun ‛alayhim wa lā hum yaḥzanūn, biraḥmatika yā arḥamar-rāḥimīn",
            translation:
              "upon whom no fear shall come nor shall they grieve, by Your mercy, O Most Merciful.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "صَدَقَ اللَّهُ الْعَلِيُّ الْعَظِيمُ وَبَلَّغَ رَسُولُهُ النَّبِيُّ الْوَفِيُّ الْكَرِيمُ",
            translit:
              "Ṣadaqallāhul-‛Aliyyul-‛aẓīm, wa ballagha rasūluhun-nabiyyul-wafiyyul-karīm,",
            translation:
              "Allah, the All-Exalted, the Supreme, has spoken the truth and His loyal, generous Messenger and Prophet conveyed.",
          }),
          new DhikrEntryModel({
            arabic:
              "وَنَحْنُ عَلَى مَا قَالَ رَبُّنَا وَسَيِّدُنَا وَمَوْلَانَا وَخَالِقُنَا وَرَازِقُنَا وَبَاعِثُنَا وَوَارِثُنَا",
            translit:
              "wa naḥnu ‛alā mā qāla rabbunā wa sayyidunā wa mawlānā wa khāliqunā wa rāziqunā wa bā‛ithunā wa wārithunā",
            translation:
              "And we are among the witnesses to what our Lord, Master, Guardian, Creator, Sustainer, Resurrector, Inheritor,",
          }),
          new DhikrEntryModel({
            arabic:
              "وَنَصِيرُنَا وَمَنْ إِلَيْهِ مَصِيرُنَا وَوَلِيُّ النِّعْمَةِ عَلَيْنَا مِنَ الشَّاهِدِينَ وَلَهُ مِنَ الذَّاكِرِينَ",
            translit:
              "wa naṣīrunā wa man ilayhi maṣīrunā wa waliyyun-ni‛mati ‛alaynā minash-shāhidīn, wa lahū minadh-dhākirīn",
            translation:
              "Helper, the One to whom is our destination and our Benefactor has said, and among those who remember Him.",
          }),
          new DhikrEntryModel({
            arabic: "وَالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
            translit: "Wal-ḥamdu lillāhi rabbil-‛ālamīn",
            translation: "Praise be to Allah, the Lord of the worlds.",
          }),
          new DhikrEntryModel({
            arabic: "وَالْعَاقِبَةُ لِلْمُتَّقِينَ وَلَا عُدْوَانَ إِلَّا عَلَى الظَّالِمِينَ",
            translit:
              "Wal-‛āqibatu lil-muttaqīn, wa lā ‛udwāna illā ‛alaẓ-ẓālimīn",
            translation:
              "The end is for the God-wary and there is no enmity except against the oppressors.",
          }),
          new DhikrEntryModel({
            arabic:
              "وَصَلَّى اللَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ خَاتَمِ النَّبِيِّينَ وَعَلَى آلِهِ الطَّيِّبِينَ الطَّاهِرِينَ وَعَلَى أَصْحَابِهِ الْمُنْتَخَبِينَ وَعَلَى جَمِيعِ الْمَلَائِكَةِ وَالنَّبِيِّينَ وَالْمُرْسَلِينَ إِنَّ رَبَّنَا حَمِيدٌ مَجِيدٌ",
            translit:
              "Wa ṣallallāhu ‛alā sayyidinā Muḥammadin khātamin-nabiyyīn, wa ‛alā ālihiṭ-ṭayyibīnaṭ-ṭāhirīn, wa ‛alā aṣḥābihil-muntakhabīn, wa ‛alā jamī‛il-malā’ikati wan-nabiyyīna wal-mursalīn, inna rabbanā ḥamīdun majīd",
            translation:
              "May Allah bless our master Muhammad, the Seal of the Prophets, and his good and pure family, his chosen companions, and all the angels, prophets and messengers. Verily our Lord is praiseworthy, glorious.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "ٱلْحَمْدُ لِلَّهِ الَّذِي حَمِدَ فِي الْكِتَابِ نَفْسَهُ",
            translit: "Al-ḥamdu lillāhil-ladhī ḥamida fil-kitābi nafsah",
            translation:
              "All praise be to Allah who praised Himself in the Book.",
          }),
          new DhikrEntryModel({
            arabic: "وَاسْتَفْتَحَ بِالْحَمْدِ كِتَابَهُ",
            translit: "wastaftaḥa bil-ḥamdi kitābah",
            translation: "He began His book with praise.",
          }),
          new DhikrEntryModel({
            arabic: "وَاسْتَخْلَصَ الْحَمْدَ لِنَفْسِهِ",
            translit: "wastakhlaṣal-ḥamda linafsih",
            translation: "He made praise exclusive to Himself.",
          }),
          new DhikrEntryModel({
            arabic: "وَجَعَلَ الْحَمْدَ دَلِيلًا عَلَى طَاعَتِهِ",
            translit: "wa ja‛alal-ḥamda dalīlan ‛alā ṭā‛atih",
            translation: "He made praise a waymark to His obedience.",
          }),
          new DhikrEntryModel({
            arabic: "وَرَضِيَ بِالْحَمْدِ شُكْرًا لَهُ مِنْ خَلْقِهِ",
            translit: "wa raḍiya bil-ḥamdi shukran lahū min khalqih",
            translation:
              "He was pleased with praise as a sign of gratitude to Him from His creation.",
          }),
          new DhikrEntryModel({
            arabic: "ٱلْحَمْدُ لِلَّهِ بِجَمِيعِ مَحَامِدِهِ",
            translit: "Al-ḥamdu lillāhi bijamī‛i maḥāmidih",
            translation: "All praise be to Allah with all His praises,",
          }),
          new DhikrEntryModel({
            arabic:
              "الْمُوجِبَةِ لِمَزِيدِهِ الْمُؤَدِّيَةِ لِحَقِّهِ الْمُقَدِّمَةِ عِنْدَهُ الْمَرْضِيَّةِ لَهُ الشَّافِعَةِ لِأَمْثَالِهَا",
            translit:
              "al-mūjibati limazīdih, al-mu’addiyati liḥaqqih, al-muqaddimati ‛indah, al-marḍiyyati lah, ash-shāfi‛ati li’amthālihā",
            translation:
              "that procure increase, fulfil His right, that are presented unto Him, are pleasing to Him, that intercede for the likes of them.",
          }),
          new DhikrEntryModel({
            arabic:
              "وَنَسْأَلُهُ أَنْ يُصَلِّيَ وَيُسَلِّمَ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ بِأَفْضَلِ الصَّلَوَاتِ كُلِّهَا",
            translit:
              "Wa nas’aluhū an yuṣalliya wa yusallima ‛alā sayyidinā Muḥammadin wa ‛alā ālihī bi-afḍaliṣ-ṣalawāti kullihā",
            translation:
              "We ask Him to bless and grant peace to our master Muhammad and to the family of our master Muhammad with the best of all blessings,",
          }),
          new DhikrEntryModel({
            arabic:
              "وَأَنْ يَحْبُوَهُ بِأَشْرَفِ مَنَازِلِ الْجِنَانِ وَنَعِيمِهَا وَشَرِيفِ الْمَنْزِلَةِ فِيهَا يَا كَرِيم",
            translit:
              "Wa an yaḥbuwahū bi-ashrafi manāzilil-jināni wa na‛īmihā wa sharīfil-manzilati fīhā, yā Karīm",
            translation:
              "and that He gift him with the noblest of stations and delights in the Gardens. O Generous One!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا كَرِيم، اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ",
            translit:
              "Yā Karīm, Allāhumma ṣalli wa sallim ‛alā sayyidinā Muḥammadin wa ‛alā āli sayyidinā Muḥammad",
            translation:
              "O Generous One! O Allah, bless and grant peace to our master Muḥammad and to the family of our master Muḥammad.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا كَرِيم",
            translit: "Yā Karīm",
            translation: "O Generous One!",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ إِنَّكَ أَحْضَرْتَنَا خَتْمَ كِتَابِكَ الَّذِي عَظَّمْتَ حُرْمَتَهُ",
            translit:
              "Allāhumma innaka aḥḍartanā khatma kitābikal-ladhī ‛aẓẓamta ḥurmatah",
            translation:
              "O Allah, You brought us to the completion of Your Book whose sanctity You exalted.",
          }),
          new DhikrEntryModel({
            arabic: "وَجَعَلْتَهُ مُهَيْمِنًا عَلَى كُلِّ كِتَابٍ أَنْزَلْتَهُ",
            translit: "wa ja‛altahū muhayminan ‛alā kulli kitābin anzaltah",
            translation:
              "You have appointed it a guardian over every book that You have revealed;",
          }),
          new DhikrEntryModel({
            arabic: "وَقُرْءَانًا أَعْرَبْتَ فِيهِ عَنْ شَرَائِعِ أَحْكَامِكَ",
            translit: "wa qur’ānan a‛rabta fīhi ‛an sharā’i‛i aḥkāmik",
            translation:
              "a Qur'an through which You have made plain Your legal rulings;",
          }),
          new DhikrEntryModel({
            arabic: "وَفُرْقَانًا فَرَّقْتَ بِهِ بَيْنَ حَلَالِكَ وَحَرَامِكَ",
            translit: "wa furqānan farraqta bihī bayna ḥalālika wa ḥarāmik",
            translation:
              "a criterion through which You have separated that which You made lawful from what You made unlawful;",
          }),
          new DhikrEntryModel({
            arabic: "وَكِتَابًا فَصَّلْتَهُ لِعِبَادِكَ تَفْصِيلًا",
            translit: "wa kitāban faṣṣaltahū li‛ibādika tafṣīlā",
            translation:
              "a Book that You have detailed clearly for Your slaves;",
          }),
          new DhikrEntryModel({
            arabic:
              "وَوَحْيًا أَنْزَلْتَهُ عَلَى قَلْبِ نَبِيِّكَ سَيِّدِنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَآلِهِ وَسَلَّمَ بِالْحَقِّ تَنْزِيلًا",
            translit:
              "wa waḥyan anzaltahū ‛alā qalbi nabiyyika sayyidinā Muḥammadin ṣallallāhu ‛alayhi wa ālihī wa sallama bil-ḥaqqi tanzīlā",
            translation:
              "a revelation that You revealed to the heart of Your Prophet Muhammad (may Allah bless and grant him and his family peace) in truth.",
          }),
          new DhikrEntryModel({
            arabic: "وَجَعَلْتَهُ نُورًا تَهْدِي بِهِ مِنْ ظُلَمِ الضَّلَالَةِ بِاتِّبَاعِهِ",
            translit:
              "wa ja‛altahū nūran tahdī bihī min ẓulamiḍ-ḍalālati bittibā‛ih",
            translation:
              "You made it a light with which You guide from the darknesses of error through following it;",
          }),
          new DhikrEntryModel({
            arabic: "وَشَفِيعًا لِمَنْ أَنْصَتَ بِفَهْمِ التَّصْدِيقِ إِلَى اسْتِمَاعِهِ",
            translit: "wa shafī‛an liman anṣata bifahmit-taṣdīqi ilas-timā‛ih",
            translation:
              "an intercessor for whoever turns ear toward hearing it with the understanding of attestation;",
          }),
          new DhikrEntryModel({
            arabic: "وَمِيزَانَ قِسْطٍ لَا يَحِيفُ عَنِ الْحَقِّ لِسَانُهُ",
            translit: "wa mīzāna qisṭin lā yaḥīfu ‛anil-ḥaqqi lisānuh",
            translation:
              "a balance of justice whose tongue does not deviate from the truth;",
          }),
          new DhikrEntryModel({
            arabic: "وَضَوْءَ هُدًى لَا تُخْبِئُ الشُّبُهَاتُ نُورَ بُرْهَانِهِ",
            translit: "wa ḍaw’a hudan lā tukhbi’ush-shubuhātu nūra burhānih",
            translation:
              "a light of guidance that specious arguments cannot conceal;",
          }),
          new DhikrEntryModel({
            arabic: "وَعَلَمَ نَجَاةٍ لَا يَضِلُّ مَنْ أَمَّ قَصْدَ سُنَّتِهِ",
            translit: "wa ‛alama najātin lā yaḍillu man amma qaṣda sunnatih",
            translation:
              "a guidepost of salvation that whoever repairs to will not go astray,",
          }),
          new DhikrEntryModel({
            arabic: "وَلَا تَنَالُ يَدَ الْهَلَكَةِ مَنْ تَعَلَّقَ بِعُرْوَةِ عِصْمَتِهِ يَا كَرِيم",
            translit:
              "wa lā tanālu yadal-halakati man ta‛allaqa bi‛urwati ‛iṣmatih, yā Karīm",
            translation:
              "and whoever clings to the handhold of its protection will not be touched by the hand of destruction. O Generous One!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا كَرِيم، اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ",
            translit:
              "Yā Karīm, Allāhumma ṣalli wa sallim ‛alā sayyidinā Muḥammadin wa ‛alā āli sayyidinā Muḥammad",
            translation:
              "O Generous One! O Allah, bless and grant peace to our master Muḥammad and to the family of our master Muḥammad.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا كَرِيم",
            translit: "Yā Karīm",
            translation: "O Generous One!",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ فَإِذْ بَلَّغْتَنَا خَاتِمَتَهُ",
            translit: "Allāhumma fa idh ballaghtanā khātimatah",
            translation:
              "O Allah, as You have allowed us to reach its completion,",
          }),
          new DhikrEntryModel({
            arabic: "وَحَبَّبْتَ إِلَيْنَا تِلَاوَتَهُ",
            translit: "wa ḥabbabta ilaynā tilāwatah",
            translation: "endeared its recitation to us,",
          }),
          new DhikrEntryModel({
            arabic: "وَسَهَّلْتَ عَلَى حَوَاشِي أَلْسِنَتِنَا حُسْنَ إِعَادَتِهِ",
            translit: "wa sahhalta ‛alā ḥawāshī alsinatinā ḥusna i‛ādatih",
            translation:
              "and eased on the tips of our tongues its excellent repetition,",
          }),
          new DhikrEntryModel({
            arabic: "فَاجْعَلْنَا يَا رَبِّ يَا اللَّهُ مِمَّنْ يَتْلُوهُ حَقَّ تِلَاوَتِهِ",
            translit:
              "Fa-j‛alnā yā rabbi yā Allāh mimman yatlūhu ḥaqqa tilāwatih",
            translation:
              "make us, O Lord, O Allah, of those who recite it as it truly should be recited,",
          }),
          new DhikrEntryModel({
            arabic: "وَيَرْعَاهُ حَقَّ رِعَايَتِهِ",
            translit: "wa yar‛āhu ḥaqqa ri‛āyatih",
            translation: "observe it as it truly should be observed,",
          }),
          new DhikrEntryModel({
            arabic: "وَيَدِينُ لَكَ بِاعْتِقَادِ التَّصْدِيقِ بِمُحْكَمِ بَيِّنَاتِهِ",
            translit: "wa yadīnu laka bi‛tiqādit-taṣdīqi bimuḥkami bayyinātih",
            translation:
              "serve You with belief that confirms its clear proofs,",
          }),
          new DhikrEntryModel({
            arabic: "وَيَفْزَعُ إِلَى الْإِقْرَارِ بِمُتَشَابِهِ آيَاتِهِ",
            translit: "wa yafza‛u ilal-iqrāri bimutashābihi āyātih",
            translation: "are terrified of affirming its ambiguous verses,",
          }),
          new DhikrEntryModel({
            arabic: "وَالِاعْتِرَافِ بِأَنَّهُ مِنْ عِنْدِكَ لَا تُعَارِضُنَا الشُّكُوكُ فِي تَصْدِيقِهِ",
            translit:
              "wal-i‛tirāfi bi-annahū min ‛indik, lā tu‛āriḍunash-shukūku fī taṣdīqih",
            translation:
              "acknowledge that it is from You, are never afflicted with doubt about its veracity,",
          }),
          new DhikrEntryModel({
            arabic: "وَلَا يَخْتَلِجُنَا الزَّيْغُ عَنْ قَصْدِ طَرِيقِهِ يَا كَرِيم",
            translit: "wa lā yakhtalijunaz-zayghu ‛an qaṣdi ṭarīqih, yā Karīm",
            translation:
              "nor prone to deviate from intending its path, O Generous One!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا كَرِيم، اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ",
            translit:
              "Yā Karīm, Allāhumma ṣalli wa sallim ‛alā sayyidinā Muḥammadin wa ‛alā āli sayyidinā Muḥammad",
            translation:
              "O Generous One! O Allah, bless and grant peace to our master Muḥammad and to the family of our master Muḥammad.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا كَرِيم",
            translit: "Yā Karīm",
            translation: "O Generous One!",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ وَكَمَا جَعَلْتَ قُلُوبَنَا مُذَلَّلَةً بِحَمْلِهِ",
            translit:
              "Allāhumma wa kamā ja‛alta qulūbanā mudhallalatan biḥamlih",
            translation:
              "O Allah, as You have made our hearts humbled by carrying it,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَرَّفْتَنَا مِنْكَ شَرَفَ فَضْلِهِ",
            translit: "wa ‛arraftanā minka sharafa faḍlih",
            translation: "and You have granted us awareness of its nobility,",
          }),
          new DhikrEntryModel({
            arabic: "فَاجْعَلْنَا يَا رَبِّ يَا اللَّهُ مِمَّنْ يَعْتَصِمُ بِحَبْلِهِ",
            translit: "fa-j‛alnā yā rabbi yā Allāh mimman ya‛taṣimu biḥablih",
            translation:
              "make us, O Lord, O Allah, of those who hold fast to its rope,",
          }),
          new DhikrEntryModel({
            arabic: "وَيَأْوِي مِنَ الشُّبُهَاتِ إِلَى عِصْمَةِ مَعْقِلِهِ",
            translit: "wa ya’wī minash-shubuhāti ilā ‛iṣmati ma‛qilih",
            translation:
              "take refuge from doubts in the protection of its sanctuary,",
          }),
          new DhikrEntryModel({
            arabic: "وَيَسْكُنُ فِي ظِلِّ جَنَاحِ هِدَايَتِهِ",
            translit: "wa yaskunu fī ẓilli janāḥi hidāyatih",
            translation: "live in the shade of the wing of its guidance,",
          }),
          new DhikrEntryModel({
            arabic: "وَيَهْتَدِي بِبَلَجِ إِسْفَارِ ضَوْئِهِ",
            translit: "wa yahtadī bibalaji isfāri ḍaw’ih",
            translation:
              "are guided by the glow of the brightness of its light,",
          }),
          new DhikrEntryModel({
            arabic: "وَيَسْتَصْبِحُ بِضَوْءِ شُعْلَةِ مِصْبَاحِهِ",
            translit: "wa yastaṣbiḥu biḍaw’i shu‛lati miṣbāḥih",
            translation:
              "are illuminated by the light of the blaze of its torch,",
          }),
          new DhikrEntryModel({
            arabic: "وَلَا يَلْتَمِسُ الْهُدَى مِنْ غَيْرِهِ يَا كَرِيم",
            translit: "wa lā yaltamisul-hudā min ghayrih, yā Karīm",
            translation:
              "and do not seek guidance from other than it. O Generous One!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا كَرِيم، اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ",
            translit:
              "Yā Karīm, Allāhumma ṣalli wa sallim ‛alā sayyidinā Muḥammadin wa ‛alā āli sayyidinā Muḥammad",
            translation:
              "O Generous One! O Allah, bless and grant peace to our master Muḥammad and to the family of our master Muḥammad.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا كَرِيم",
            translit: "Yā Karīm",
            translation: "O Generous One!",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ وَكَمَا نَصَبْتَهُ عَلَمًا لِلدَّلَالَةِ عَلَيْكَ",
            translit: "Allāhumma wa kamā naṣabtahū ‛alaman lid-dalālati ‛alayk",
            translation:
              "O Allah, as You have raised it as a banner for guidance to You,",
          }),
          new DhikrEntryModel({
            arabic: "وَأَنْهَجْتَ بِهِ سَبِيلَ مَنْ نَزَعَاتُهُ إِلَيْكَ",
            translit: "wa anhajta bihī sabīla man naza‛ātuhū ilayk",
            translation:
              "and clarified by it the path of those who incline towards You,",
          }),
          new DhikrEntryModel({
            arabic: "فَاجْعَلْهُ وَسِيلَةً لَنَا إِلَى أَشْرَفِ مَنَازِلِ الْكَرَامَةِ",
            translit: "fa-j‛alhu wasīlatan lanā ilā ashrafi manāzilil-karāmah",
            translation:
              "make it a means for us to the noblest abodes of honour,",
          }),
          new DhikrEntryModel({
            arabic: "وَسَبَبًا نَحْوِي بِهِ النَّجَاةَ فِي غُرْبَةِ الْقِيَامَةِ",
            translit: "wa sababan naḥwī bihin-najāta fī ghurbatil-qiyāmah",
            translation:
              "a cause by which we possess salvation in the desolation of Judgement,",
          }),
          new DhikrEntryModel({
            arabic: "وَسُلَّمًا نَعْرُجُ فِيهِ إِلَى مَحَلِّ السَّلَامَةِ",
            translit: "wa sullaman na‛ruju fīhi ilā maḥallis-salāmah",
            translation: "a ladder on which we ascend to the place of safety,",
          }),
          new DhikrEntryModel({
            arabic: "وَذَرِيعَةً نَقْدُمُ بِهَا إِلَى نَعِيمِ دَارِ الْمُقَامَةِ يَا كْرِيم",
            translit:
              "wa dharī‛atan naqdumu bihā ilā na‛īmi dāril-muqāmah, yā Karīm",
            translation:
              "and a medium by which we arrive at the bliss of the abode of permanence. O Generous One!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا كَرِيم، اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ",
            translit:
              "Yā Karīm, Allāhumma ṣalli wa sallim ‛alā sayyidinā Muḥammadin wa ‛alā āli sayyidinā Muḥammad",
            translation:
              "O Generous One! O Allah, bless and grant peace to our master Muḥammad and to the family of our master Muḥammad.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا كَرِيم",
            translit: "Yā Karīm",
            translation: "O Generous One!",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ وَاجْعَلْهُ لَنَا فِي ظُلَمِ اللَّيَالِي مُؤْنِسًا",
            translit: "Allāhumma waj-‛alhu lanā fī ẓulamil-layālī mu’nisā",
            translation:
              "O Allah, make it an intimate companion for us in the darkness of nights,",
          }),
          new DhikrEntryModel({
            arabic: "وَلِأَقْدَامِنَا عَنْ نَقْلِهَا إِلَى الْمَعَاصِي حَابِسًا",
            translit: "wa li-aqdāminā ‛an naqlihā ilal-ma‛āṣī ḥābisā",
            translation:
              "a preventor that prevents our feet from going unto disobedience,",
          }),
          new DhikrEntryModel({
            arabic: "وَلِأَلْسِنَتِنَا عَنِ الْخَوْضِ فِي الْبَاطِلِ مِنْ غَيْرِ مَا آفَةٍ مُخْرِسًا",
            translit:
              "wa li-alsinatinā ‛anil-khawḍi fil-bāṭili min ghayri mā āfatin mukhrisā",
            translation:
              "a silencer without blight that prevents our tongues from plunging into falsehood,",
          }),
          new DhikrEntryModel({
            arabic: "وَلِجَوَارِحِنَا عَنِ اجْتِرَاحِ السَّيِّئَاتِ زَاجِرًا",
            translit: "wa lijawāriḥinā ‛anij-tirāḥis-sayyi’āti zājirā",
            translation: "a restrainer of our limbs from committing sins,",
          }),
          new DhikrEntryModel({
            arabic: "وَلِمَا طَوَتِ الْغَفْلَةُ عَنَّا مِنْ تَصَفُّحِ اعْتِبَارِهِ نَاشِرًا",
            translit:
              "wa limā ṭawatil-ghaflatu ‛annā min taṣaffuḥi i‛tibārihī nāshirā",
            translation:
              "an unfolder that unwraps the heedlessness enfolded that prevents us from examining its lessons,",
          }),
          new DhikrEntryModel({
            arabic: "حَتَّى تُوصِلَ إِلَى قُلُوبِنَا فَهْمَ عَجَائِبِ أَمْثَالِهِ",
            translit: "ḥattā tūṣila ilā qulūbinā fahma ‛ajā’ibi amthālih",
            translation:
              "such that You thrust into our hearts understanding of the wonders of its parables,",
          }),
          new DhikrEntryModel({
            arabic: "وَزَوَاجِرَ نَهْيِهِ الَّتِي ضَعُفَتِ الْجِبَالُ عَنِ احْتِمَالِهِ يَا كَرِيمْ",
            translit:
              "wa zawājira nahyihil-latī ḍa‛ufatil-jibālu ‛an iḥtimālih, yā Karīm",
            translation:
              "and the reprimands of its prohibitions that the mountains were too weak to carry. O Generous One!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا كَرِيم، اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ",
            translit:
              "Yā Karīm, Allāhumma ṣalli wa sallim ‛alā sayyidinā Muḥammadin wa ‛alā āli sayyidinā Muḥammad",
            translation:
              "O Generous One! O Allah, bless and grant peace to our master Muḥammad and to the family of our master Muḥammad.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا كَرِيم",
            translit: "Yā Karīm",
            translation: "O Generous One!",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ وَاجْبُرْ بِهِ خَلَّتَنَا بِالْغِنَى مِنْ عُدْمِ الْإِمْلَاقِ",
            translit:
              "Allāhumma wajbur bihī khallatanā bil-ghinā min ‛udmil-imlāq",
            translation:
              "O Allah, through it, redress our need - with independence from the emptiness of poverty.",
          }),
          new DhikrEntryModel({
            arabic: "وَسُقْ إِلَيْنَا بِهِ رَغَدَ الْعَيْشِ وَخِصْبَ السَّعَةِ فِي الْأَرْزَاقِ",
            translit:
              "wa suq ilaynā bihī raghadal-‛ayshi wa khiṣbas-sa‛ati fil-arzāq",
            translation:
              "By it, bring unto us a comfortable life and vast abundance in provisions.",
          }),
          new DhikrEntryModel({
            arabic: "وَاعْصِمْنَا بِهِ مِنْ هَفْوَةِ الْكُفْرِ وَدَوَاعِي النِّفَاقِ",
            translit: "wa‛ṣimnā bihī min hafwatil-kufri wa dawā‛īn-nifāq",
            translation:
              "Protect us by it from the pit of unbelief and the precursors of hypocrisy.",
          }),
          new DhikrEntryModel({
            arabic: "وَجَنِّبْنَا بِهِ الضَّرَائِبَ الْمَذْمُومَةَ وَمَدَانِئَ الْأَخْلَاقِ",
            translit:
              "wa jannibnā bihiḍ-ḍarā’ibal-madhmūmata wa madāni’al-akhlāq",
            translation:
              "Through it, distance us from blameworthy qualities and lowly characteristics,",
          }),
          new DhikrEntryModel({
            arabic: "حَتَّى تُطَهِّرَنَا مِنْ كُلِّ دَنَسٍ بِتَطْهِيرِهِ",
            translit: "ḥattā tuṭahhiranā min kulli danasin bitaṭhīrih",
            translation:
              "such that You purify us from all faults by its purification,",
          }),
          new DhikrEntryModel({
            arabic: "وَتَقْفُوَ بِنَا آثَارَ الَّذِينَ اسْتَصْبَحُوا بِنُورِهِ",
            translit: "wa taqfuwa binā āthāral-ladhīnastaṣbaḥū binūrih",
            translation:
              "and allow us to follow the footsteps of those who were illuminated by its light,",
          }),
          new DhikrEntryModel({
            arabic: "وَلَمْ يُلْهِهِمُ الْأَمَلُ فَيَقْتَطِعَهُمْ بِخَدَائِعِ غُرُورِهِ يَا كْرِيم",
            translit:
              "wa lam yulhihimul-amalu fayaqṭa‛ahum bikhadā‛i ghurūrih, yā Karīm",
            translation:
              "and not be distracted by lengthy hopes that cut off through deceptive delusion. O Generous One!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا كَرِيم، اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ",
            translit:
              "Yā Karīm, Allāhumma ṣalli wa sallim ‛alā sayyidinā Muḥammadin wa ‛alā āli sayyidinā Muḥammad",
            translation:
              "O Generous One! O Allah, bless and grant peace to our master Muḥammad and to the family of our master Muḥammad.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا كَرِيم",
            translit: "Yā Karīm",
            translation: "O Generous One!",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ وَكَمَا أَكْرَمْتَنَا بِخَتْمِ كِتَابِكَ",
            translit: "Allāhumma wa kamā akramtanā bikhatmi kitābik",
            translation:
              "O Allah, and as You have honoured us with the completion of Your Book,",
          }),
          new DhikrEntryModel({
            arabic: "وَنَدَبْتَنَا إِلَى التَّعَرُّضِ لِجَزِيلِ ثَوَابِكَ",
            translit: "wa nadabtanā ilat-ta‛arruḍi lijazīli thawābik",
            translation:
              "encouraged us to expose ourselves to Your abundant reward,",
          }),
          new DhikrEntryModel({
            arabic: "وَحَذَّرْتَنَا عَلَى لِسَانِ وَعِيدِهِ أَلِيمَ عَذَابِكَ",
            translit: "wa ḥadhdhartanā ‛alā lisāni wa‛īdihī alīma ‛adhābik",
            translation:
              "and warned us of Your painful punishment on the tongue of its admonition,",
          }),
          new DhikrEntryModel({
            arabic: "فَاجْعَلْنَا يَا رَبِّ يَا اللَّهُ مِمَّنْ يُحْسِنُ صُحْبَتَهُ فِي مَوَاطِنِ الْخَلَوَاتِ",
            translit:
              "fa-j‛alnā yā rabbi yā Allāh mimman yuḥsinu ṣuḥbatahū fī mawāṭinil-khalawāt",
            translation:
              "make us, O Lord, O Allah, among those who excel in its companionship in secluded places,",
          }),
          new DhikrEntryModel({
            arabic: "وَيُنَزِّهُ قَدْرَهُ عَنْ مَوَاقِفِ التُّهَمَاتِ",
            translit: "wa yunazzihu qadrahū ‛an mawāqifit-tuhamāt",
            translation: "esteem it by steering clear of suspicious areas,",
          }),
          new DhikrEntryModel({
            arabic: "وَيُجِلُّ حُرْمَتَهُ عَنْ أَمَاكِنِ الْوُفُودِ عَلَيْهِ مِنَ الْمُنْكَرَاتِ",
            translit:
              "wa yujillu ḥurmatahū ‛an amākinil-wufūdi ‛alayhi minal-munkarāt",
            translation:
              "exalt its sanctity by not being in places of wrongdoings,",
          }),
          new DhikrEntryModel({
            arabic: "حَتَّى يَكُونَ لَنَا فِي الدُّنْيَا عَنِ الْمَحَارِمِ ذَائِدًا",
            translit: "ḥattā yakūna lanā fid-dunyā ‛anil-maḥārimi dhā’idā",
            translation:
              "such that it becomes for us in the world a protector from prohibitions,",
          }),
          new DhikrEntryModel({
            arabic: "وَإِلَى النَّجَاةِ فِي غُرْبَةِ الْقِيَامَةِ قَائِدًا",
            translit: "wa ilan-najāti fī ghurbatil-qiyāmati qā’idā",
            translation:
              "a leader unto salvation in the desolation of Judgement,",
          }),
          new DhikrEntryModel({
            arabic: "وَلَنَا عِنْدَكَ بِتَحْلِيلِ حَلَالِكَ وَتَحْرِيمِ حَرَامِكَ شَاهِدًا",
            translit:
              "wa lanā ‛indaka bitaḥlīli ḥalālika wa taḥrīmi ḥarāmika shāhidā",
            translation:
              "a witness for us in front of You through the legitimisation of Your lawful acts and prohibition of Your prohibitions,",
          }),
          new DhikrEntryModel({
            arabic: "وَبِنَا عَلَى خُلُودِ الْأَبَدِ فِي جَنَّاتِ عَدَنٍ وَافِدًا يَا كَرِيم",
            translit:
              "wa binā ‛alā khulūdil-abadi fī jannāti ‛adanin wāfidā, yā Karīm",
            translation:
              "and a delegate for us to eternality in the Gardens of Eden. O Generous One!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا كَرِيم، اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ",
            translit:
              "Yā Karīm, Allāhumma ṣalli wa sallim ‛alā sayyidinā Muḥammadin wa ‛alā āli sayyidinā Muḥammad",
            translation:
              "O Generous One! O Allah, bless and grant peace to our master Muḥammad and to the family of our master Muḥammad.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا كَرِيم",
            translit: "Yā Karīm",
            translation: "O Generous One!",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ وَسَهِّلْ بِهِ عَلَى أَنْفُسِنَا عِنْدَ الْمَوْتِ كُرَبَ السِّيَاقِ",
            translit:
              "Allāhumma wa sahhil bihī ‛alā anfusinā ‛indal-mawti kurabas-siyāq",
            translation:
              "O Allah, through it, make easy upon us the agonies of removal of the soul at the point of death,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَلَزَ الْأَنِينِ إِذَا بَلَغَتِ الرُّوحُ التَّرَاقِ",
            translit: "wa ‛alazal-anīni idhā balaghatir-rūḥut-tarāq",
            translation:
              "the convulsions of the groaning when the soul reaches the collar bone",
          }),
          new DhikrEntryModel({
            arabic:
              "وَتَجَلَّى مَلَكُ الْمَوْتِ صَلَّى اللَّهُ عَلَى نَبِيِّنَا وَعَلَيْهِ وَسَلَّمَ لِقَبْضِهَا مِنْ حُجُبِ الْغُيُوبِ وَقِيلَ مَنْ رَاقٍ",
            translit:
              "wa tajallā malakul-mawti ṣallallāhu ‛alā nabiyyinā wa ‛alayhi wa sallama liqabḍihā min ḥujubil-ghuyūb, wa qīla man rāq",
            translation:
              "and the Angel of Death (may Allah bless and grant peace to our Prophet and to him) appears to seize it from behind the veils of the unseen and it shall be said, “Is there anyone to treat him now?”",
          }),
          new DhikrEntryModel({
            arabic: "وَذَافَ لَهَا مِنْ ذُعَافِ مَرَارَةِ الْمَوْتِ كَأْسًا مَسْمُومَةَ الْمَذَاقِ",
            translit:
              "wa dhāfa lahā min dhu‛āfi marārātil-mawti ka’san masmūmatal-madhāq",
            translation:
              "He mixes for it from the lethal bitterness of death a cup of poisonous taste,",
          }),
          new DhikrEntryModel({
            arabic: "وَرَمَاهَا عَنْ قَوْسِ الْمَنَايَا بِسَهْمِ وَحْشَةِ الْفِرَاقِ",
            translit: "wa ramāhā ‛an qawsil-manāyā bisahmi waḥshatil-firāq",
            translation:
              "firing it from the bow of death with the arrow of lonesome separation.",
          }),
          new DhikrEntryModel({
            arabic: "وَدَنَا مِنَّا الرَّحِيلُ إِلَى الْآخِرَةِ وَصَارَتِ الْأَعْمَالُ قَلَائِدَ فِي الْأَعْنَاقِ",
            translit:
              "wa danā minnar-raḥīlu ilal-ākhirati wa ṣāratil-a‛mālu qalā’ida fil-a‛nāq",
            translation:
              "The departure draws close to the afterlife, actions become a necklace around necks",
          }),
          new DhikrEntryModel({
            arabic: "وَكَانَتِ الْقُبُورُ هِيَ الْمَأْوَى إِلَى مِيقَاتِ يَوْمِ التَّلَاقِ يَا كَرِيم",
            translit:
              "wa kānatil-qubūru hiyal-ma’wā ilā mīqāti yawmit-talāq, yā Karīm",
            translation:
              "and graves are the resting abode until the appointed time of the Meeting Day, O Generous One!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا كَرِيم، اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ",
            translit:
              "Yā Karīm, Allāhumma ṣalli wa sallim ‛alā sayyidinā Muḥammadin wa ‛alā āli sayyidinā Muḥammad",
            translation:
              "O Generous One! O Allah, bless and grant peace to our master Muḥammad and to the family of our master Muḥammad.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا كَرِيم",
            translit: "Yā Karīm",
            translation: "O Generous One!",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ وَبَارِكْ لَنَا فِي حُلُولِ دَارِ الْبِلَى",
            translit: "Allāhumma wa bārik lanā fī ḥulūli dāril-balā",
            translation:
              "O Allah, bless us at our arrival at the abode of decay,",
          }),
          new DhikrEntryModel({
            arabic: "وَطُولِ الْإِقَامَةِ بَيْنَ أَطْبَاقِ الثَّرَى",
            translit: "wa ṭūlil-iqāmati bayna aṭbāqith-tharā",
            translation:
              "and the lengthy residence between the layers of the soil.",
          }),
          new DhikrEntryModel({
            arabic: "وَاجْعَلِ الْقُبُورَ بَعْدَ فِرَاقِ الدُّنْيَا خَيْرَ مَنَازِلِنَا",
            translit: "waj-‛alil-qubūra ba‛da firāqid-dunyā khayra manāzilinā",
            translation:
              "Make the graves, after separation from the world, the best of our abodes.",
          }),
          new DhikrEntryModel({
            arabic: "وَافْسَحْ لَنَا بِالْقُرْآنِ الْعَظِيمِ ضِيْقَ مَدَاخِلِنَا",
            translit: "wafsaḥ lanā bil-qur’ānil-‛aẓīmi ḍīqa madākhilinā",
            translation:
              "Make spacious for us by the mighty Qur'an the constriction of our entrance points.",
          }),
          new DhikrEntryModel({
            arabic: "وَلَا تَفْضَحْنَا يَا مَوْلَانَا فِي حَاضِرِ الْقِيَامَةِ بِمُوبِقَاتِ الْآثَامِ",
            translit:
              "wa lā tafḍaḥnā yā mawlānā fī ḥāḍiril-qiyāmati bimūbiqātil-āthām",
            translation:
              "Do not expose us, O our Master, in front of those present at Judgement through destructive sins.",
          }),
          new DhikrEntryModel({
            arabic: "وَاعْفُ عَنَّا مَا ارْتَكَبْنَا مِنَ الْحَرَامِ",
            translit: "wa‛-fu ‛annā mar-takabnā minal-ḥarām",
            translation:
              "Pardon us for the prohibited actions that we have committed.",
          }),
          new DhikrEntryModel({
            arabic: "وَارْحَمْ بِالْقُرْآنِ الْعَظِيمِ فِي مَوْقِفِ الْعَرْضِ عَلَيْكَ ذُلَّ مَقَامِنَا",
            translit:
              "war-ḥam bil-qur’ānil-‛aẓīmi fī mawqifil-‛arḍi ‛alayka dhulla maqāminā",
            translation:
              "Bestow mercy upon our lowly rank by the mighty Qur'an at the place of presentation to You.",
          }),
          new DhikrEntryModel({
            arabic: "وَثَبِّتْ بِهِ عِنْدَ اضْطِرَابِ جُسُورِ جَهَنَّمَ يَوْمَ الْمَجَازِ زَلَّةَ أَقْدَامِنَا",
            translit:
              "wa thabbit bihī ‛inda iḍṭirābi jusūri jahannama yawmal-majāzi zallata aqdāminā",
            translation:
              "Steady the slipping of our feet through it at the shaking of the bridges across Hell-fire on the day when they are crossed.",
          }),
          new DhikrEntryModel({
            arabic: "وَنَجِّنَا بِهِ مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ وَشَدَائِدِ أَهْوَالِ يَوْمِ الطَّامَّةِ",
            translit:
              "wa najjinā bihī min kurabi yawmil-qiyāmati wa shadā’idi ahwāli yawmiṭ-ṭāmmah",
            translation:
              "Save us by it from the agonies of Judgement Day and the severities of the terrors of the Day of Disaster.",
          }),
          new DhikrEntryModel({
            arabic:
              "وَبَيِّضْ بِهِ وُجُوهَنَا إِذَا اسْوَدَّتْ وُجُوهُ الْعُصَاةِ فِي مَوْقِفِ الْحَسْرَةِ وَالنَّدَامَةِ يَا كَرِيم",
            translit:
              "wa bayyiḍ bihī wujūhanā idhas-waddat wujūhul-‛uṣāti fī mawqifil-ḥasrati wan-nadāmah, yā Karīm",
            translation:
              "Brighten by it our faces when the faces of sinners darken at the place of anguish and remorse. O Generous One!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا كَرِيم، اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ",
            translit:
              "Yā Karīm, Allāhumma ṣalli wa sallim ‛alā sayyidinā Muḥammadin wa ‛alā āli sayyidinā Muḥammad",
            translation:
              "O Generous One! O Allah, bless and grant peace to our master Muḥammad and to the family of our master Muḥammad.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا كَرِيم",
            translit: "Yā Karīm",
            translation: "O Generous One!",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ وَأَطِلْ بِهِ صَلَاحَ ظَاهِرِنَا",
            translit: "Allāhumma wa aṭil bihī ṣalāḥa ẓāhirinā",
            translation:
              "O Allah, lengthen by it the goodness of our exterior,",
          }),
          new DhikrEntryModel({
            arabic: "وَاحْجُبْ بِهِ خَطَرَاتِ الْوَسَاوِسِ عَنْ صِحَّةِ ضَمَائِرِنَا",
            translit: "waḥjub bihī khaṭarātil-wasāwisi ‛an ṣiḥḥati ḍamā’irinā",
            translation:
              "veil by it whispering thoughts from the soundness of our innermost interiors,",
          }),
          new DhikrEntryModel({
            arabic: "وَاغْسِلْ بِهِ دَرَنَ قُلُوبِنَا وَمُوبِقَات جَرَائِرِنَا",
            translit: "waghsil bihī darana qulūbinā wa mūbiqāti jarā’irinā",
            translation:
              "wash away by it the dirt of our hearts and the destructiveness of our crimes,",
          }),
          new DhikrEntryModel({
            arabic: "وَانْفِ بِهِ وَحَرَ الشُّكُوكِ عَنْ صِدْقِ سَرَائِرِنَا",
            translit: "wan-fi bihī waḥarash-shukūki ‛an ṣidqi sarā’irinā",
            translation:
              "negate through it the treachery of doubts from the sincerity of our hearts,",
          }),
          new DhikrEntryModel({
            arabic: "وَاجْمَعْ بِهِ مُتَنَائِيَاتِ أُمُورِنَا",
            translit: "wajma‛ bihī mutanā’iyāti umūrinā",
            translation: "gather through it our scattered affairs,",
          }),
          new DhikrEntryModel({
            arabic: "وَاشْرَحْ بِهِ صُدُورَنَا",
            translit: "washraḥ bihī ṣudūranā",
            translation: "expand by it our breasts,",
          }),
          new DhikrEntryModel({
            arabic: "وَيَسِّرْ بِهِ أُمُورَنَا",
            translit: "wa yassir bihī umūranā",
            translation: "ease by it our affairs,",
          }),
          new DhikrEntryModel({
            arabic: "وَاكْسُنَا بِهِ حُلَلَ الْأَمَانِ فِي نُشُورِنَا",
            translit: "waksunā bihī ḥulalal-amāni fī nushūrinā",
            translation: "don us in garments of security on our resurrection,",
          }),
          new DhikrEntryModel({
            arabic: "وَأَطِلْ بِهِ فِي مَوْقِفِ السَّاعَةِ جَذَلَنَا وَسُرُورَنَا يَا كَرِيم",
            translit:
              "wa aṭil bihī fī mawqifis-sā‛ati jadhalanā wa surūranā, yā Karīm",
            translation:
              "and lengthen our happiness and delight by it at the place of the Hour. O Generous One!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا كَرِيم، اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ",
            translit:
              "Yā Karīm, Allāhumma ṣalli wa sallim ‛alā sayyidinā Muḥammadin wa ‛alā āli sayyidinā Muḥammad",
            translation:
              "O Generous One! O Allah, bless and grant peace to our master Muḥammad and to the family of our master Muḥammad.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا كَرِيم",
            translit: "Yā Karīm",
            translation: "O Generous One!",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ وَاحْطُطْ بِهِ عَنَّا ثِقَلَ الْأَوْزَارِ",
            translit: "Allāhumma waḥṭuṭ bihī ‛annā thiqalal-awzār",
            translation:
              "O Allah, through it, reduce the heaviness of sins on us.",
          }),
          new DhikrEntryModel({
            arabic: "وَهَبْ لَنَا بِهِ حُسْنَ شَمَائِلَ الْأَبْرَارِ",
            translit: "wa hab lanā bihī ḥusna shamā’ilil-abrār",
            translation:
              "Grant us by it the beautiful qualities of the virtuous.",
          }),
          new DhikrEntryModel({
            arabic: "وَاقْفُ بِنَا آثَارَ الَّذِينَ قَامُوا لَكَ بِهِ آنَاءَ اللَّيْلِ وَأَطْرَافَ النَّهَارِ",
            translit:
              "waqfu binā āthāral-ladhīna qāmū laka bihī ānā’al-layli wa aṭrāfan-nahār",
            translation:
              "Make us follow the footsteps of those who worshipped You with it during hours of the night and at the beginning and end of the day,",
          }),
          new DhikrEntryModel({
            arabic: "حَتَّى تُوجِبَ لَنَا بِهِ فَوَائِدَ غُفْرَانِكَ",
            translit: "ḥattā tūjiba lanā bihī fawā’ida ghufrānik",
            translation:
              "until You necessitate for us by it the benefits of Your forgiveness,",
          }),
          new DhikrEntryModel({
            arabic: "وَتُحَفَ بَوَادِي إِحْسَانِكَ وَمَوَاهِبَ صَفْحِكَ وَمَغْفِرَتِكَ وَرِضْوَانِكَ",
            translit:
              "wa tuḥafa bawādī iḥsānika wa mawāhiba ṣafḥika wa maghfiratika wa riḍwānik",
            translation:
              "the gifts of Your manifest generosity, and the presents of Your pardon, forgiveness and pleasure.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا أَكْرَمَ مَنْ سُئِلَ وَأَوْسَعَ مَنْ جَادَ بِالْعَطَايَا",
            translit: "Yā akrama man su’ila wa aws‛a man jāda bil-‛aṭāyā",
            translation:
              "O Most Generous of those asked and Most Vast of those who lavishly give gifts",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "طَهِّرْنَا بِكِتَابِكَ الْكَرِيمِ مِنْ دَنَسِ الْخَطَايَا",
            translit: "Ṭahhirnā bikitābikal-karīmi min danasil-khaṭāyā",
            translation: "purify us by Your noble Book from the dirt of sins.",
          }),
          new DhikrEntryModel({
            arabic: "وَهَبْ لَنَا الصَّبْرَ الْجَمِيلَ عِنْدَ حُلُولِ الرَّزَايَا",
            translit: "wa hab lanaṣ-ṣabral-jamīla ‛inda ḥulūlir-razāyā",
            translation:
              "Gift us beautiful patience at the entrance of calamities.",
          }),
          new DhikrEntryModel({
            arabic: "وَامْنُنْ عَلَيْنَا بِالْإِسْتِعْدَادِ عِنْدَ نُزُولِ الْمَنَايَا",
            translit: "wamnun ‛alaynā bil-isti‛dādi ‛inda nuzūlil-manāyā",
            translation:
              "Bestow us with due preparation at the descent of death.",
          }),
          new DhikrEntryModel({
            arabic: "وَعَافِنَا مِنْ مَكْرُوهِ مَا يَقَعُ مِنْ مَحْذُورِ الْبَلَايَا يَا كَرِيم",
            translit:
              "wa ‛āfinā min makrūhi mā yaqa‛u min maḥdhūril-balāyā, yā Karīm",
            translation:
              "Protect us from the dislike of that which occurs with the perils of tribulations., O Generous One!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا كِرِيمُ أَتُرَاكَ تَغُلُّ إِلَى الْأَعْنَاقِ أَكُفًّا تَضَرَّعَتْ إِلَيْكَ",
            translit:
              "Yā Karīm, a turāka taghullu ilal-a‛nāqi akuffan taḍarra‛at ilayk",
            translation:
              "O Generous One, would You tie to necks hands that humbled to You,",
          }),
          new DhikrEntryModel({
            arabic: "وَاعْتَمَدَتْ فِي صَلَاتِهَا رَاكِعَةً وَسَاجِدَةً بَيْنَ يَدَيْكَ",
            translit:
              "wa‛-tamadat fī ṣalātihā rāki‛atan wa sājidatan bayna yadayk",
            translation:
              "and were employed in prayer bowing and prostrating in front of You,",
          }),
          new DhikrEntryModel({
            arabic: "أَوْ تُقَيِّدُ بِأَنْكَالِ الْجَحِيمِ أَقْدَامًا سَعَتْ إِلَيْكَ",
            translit: "aw tuqayyidu bi’ankālil-jaḥīmi aqdāman sa‛at ilayk",
            translation:
              "or chain in the fetters of Hell feet that rush to You,",
          }),
          new DhikrEntryModel({
            arabic: "وَخَرَجَتْ مِنْ مَنَازِلِهَا لَا حَاجَةَ لَهَا إِلَّا الطَّمَعُ وَالرَّغْبَةُ فِيمَا لَدَيْكَ",
            translit:
              "wa kharajat min manāzilihā lā ḥājata lahā illaṭ-ṭama‛u war-raghbatu fīmā ladayk",
            translation:
              "and left their homes without any need other than the desire for that which is with You?",
          }),
          new DhikrEntryModel({
            arabic: "مَنًّا مِنْكَ عَلَيْهَا يَا سَيِّدِي لَا مَنًّا مِنْهَا عَلَيْكَ",
            translit: "Mannan minka ‛alayhā yā sayyidī lā mannan minhā ‛alayk",
            translation:
              "Generosity from You to them, my Master, not generosity from them to You.",
          }),
          new DhikrEntryModel({
            arabic:
              "بَلْ لَيْتَ شِعْرِي أَتُرَاكَ تُصِمُّ بَيْنَ أَطْبَاقِهَا أَسْمَاعًا تَلَذَّذَتْ بِحَلَاوَةِ تِلَاوَةِ كِتَابِكَ الَّذِي أَنْزَلْتَهُ",
            translit:
              "Bal layta shi‛rī a turāka tuṣimmu bayna aṭbāqihā asmā‛an taladhdhadhat biḥalāwati tilāwati kitābikal-ladhī anzaltah",
            translation:
              "In fact, I wish I knew, would You deafen between the levels [of Hell] ears that took pleasure in the sweetness of the recitation of Your noble Book that You revealed,",
          }),
          new DhikrEntryModel({
            arabic: "أَوْ تَطْمِسُ بِالْعَمَى فِي ظُلَمِ مَهَاوِيهَا أَبْصَارًا بَكَتْ إِلَيْكَ",
            translit:
              "aw taṭmisu bil-‛amā fī ẓulami mahāwīhā abṣāran bakat ilayk",
            translation:
              "or efface with blindness in the darkness of its chasms eyes that cried to You,",
          }),
          new DhikrEntryModel({
            arabic: "خَوْفًا مِنَ الْعِقَابِ وَفَزَعًا مِنَ الْحِسَابِ",
            translit: "khawfan minal-‛iqābi wa faza‛an minal-ḥisāb",
            translation: "out of fear of punishment and fright of the account?",
          }),
          new DhikrEntryModel({
            arabic: "أَمَا وَعِزَّتِكَ وَجَلَالكَ مَا أَصْغَتِ الْأَسْمَاعُ حَتَّى صَدَّقَتْ",
            translit:
              "Amā wa ‛izzatika wa jalālika mā aṣghatil-asmā‛u ḥattā ṣaddaqat",
            translation:
              "By Your honour and majesty, ears did not heed until they believed,",
          }),
          new DhikrEntryModel({
            arabic: "وَلَا أَسْبَلَتِ الْعُيُونُ وَاكِفَ الْعَبَرَاتِ حَتَّى أَشْفَقَتْ",
            translit: "wa lā asbalatil-‛uyūnu wākifal-‛abarāti ḥattā ashfaqat",
            translation:
              "eyes did not weep trickling tears until they had feared,",
          }),
          new DhikrEntryModel({
            arabic: "وَلَا عَجَّتِ الْأَصْوَاتُ إِلَيْكَ بِالدُّعَاءِ حَتَّى خَشَعَتْ",
            translit: "wa lā ‛ajjatil-aṣwātu ilayka bid-du‛ā’i ḥattā khasha‛at",
            translation:
              "voices did not cry for help to You by supplication until they had humbled,",
          }),
          new DhikrEntryModel({
            arabic: "وَلَا تَحَرَّكَتِ الْأَلْسُنُ نَاطِقَةً بِاسْتِغْفَارِهَا حَتَّى نَدِمَتْ",
            translit:
              "wa lā taḥarrakatil-alsunu nāṭiqatan bistighfārihā ḥattā nadimat",
            translation:
              "and tongues had not moved to pronounce their asking for forgiveness until they had regretted,",
          }),
          new DhikrEntryModel({
            arabic: "عَلَى مَا كَانَ مِنْ زَلَلِهَا وَعِثَارِهَا",
            translit: "‛alā mā kāna min zalalihā wa ‛ithārihā",
            translation: "those faults and failings they were on.",
          }),
          new DhikrEntryModel({
            arabic: "فَيَا مَنْ أَكْرَمَنَا بِالتَّصْدِيقِ عَلَى بُعْدِ أَعْمَالِنَا مِنْ شَوَاهِدِ التَّحْقِيقِ",
            translit:
              "Fa yā man akramanā bit-taṣdīqi ‛alā bu‛di a‛mālinā min shawāhidit-taḥqīq",
            translation:
              "So, O the One who honoured us with belief despite the distance of our actions from witnessing realisation,",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "أَيِّدْنَا اللَّهُمَّ مِنْكَ يَا رَبِّ فِي هَذِهِ السَّاعَةِ الشَّرِيفَةِ الْمُبَارَكَةِ الْمُعَظَّمَةِ عِنْدَ خَتْمِ الْقُرْآنِ بِالْعِصْمَةِ وَالتَّوْفِيقِ",
            translit:
              "Ayyidnā Allāhumma minka yā rabbi fī hādhihis-sā‛atish-sharīfatil-mubārakatil-mu‛aẓẓamati ‛inda khatmil-qur’āni bil-‛iṣmati wat-tawfīq",
            translation:
              "support us, O Allah, at this noble blessed venerable moment at the completion of the Qur'an with protection and success from You, O Lord.",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا كَرِيم",
            translit: "Yā Karīm",
            translation: "O Generous One!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا كَرِيم، اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ",
            translit:
              "Yā Karīm, Allāhumma ṣalli wa sallim ‛alā sayyidinā Muḥammadin wa ‛alā āli sayyidinā Muḥammad",
            translation:
              "O Generous One! O Allah, bless and grant peace to our master Muḥammad and to the family of our master Muḥammad.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا كَرِيم",
            translit: "Yā Karīm",
            translation: "O Generous One!",
          }),
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ وَآنِسْ وَحْشَتَنَا بِطَاعَتِكَ يَا مُؤْنِسَ الْفَرْدِ الْحَيْرَانِ فِي مَهَامِهِ الْقِفَار",
            translit:
              "Allāhumma wa ānis waḥshatanā biṭā‛atika yā mu’nisal-fardil-ḥayrāni fī mahāmihil-qifār",
            translation:
              "O Allah, provide solace to our loneliness with Your worship, O Provider of solace to the bewildered one in his empty place of confusion.",
          }),
          new DhikrEntryModel({
            arabic: "وَتَدَارَكْنَا بِعِصْمَتِكَ يَا مُدْرِكَ الْغَرِيقِ فِي لُجَجِ الْبِحَارِ",
            translit:
              "wa tadāraknā bi‛iṣmatika yā mudrikal-gharīqi fī lujajil-biḥār",
            translation:
              "Reach us with Your protection, O Overtaker of the one drowning in oceanic abysses.",
          }),
          new DhikrEntryModel({
            arabic: "وَخَلِّصْنَا اللَّهُمَّ بِلُطْفِكَ مِنْ شَدَائِدِ تِلْكَ الْأَهْوَالِ وَالْأَخْطَارِ",
            translit:
              "wa khalliṣnā Allāhumma biluṭfika min shadā’idi tilkal-ahwāli wal-akhṭār",
            translation:
              "Save us, O Allah, with Your gentleness from the severities of those terrors and dangers.",
          }),
          new DhikrEntryModel({
            arabic: "وَصَلَّى اللَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ النَّبِيِّ الْمُخْتَارِ",
            translit:
              "wa ṣallallāhu ‛alā sayyidinā Muḥammadin nabiyyil-mukhtār",
            translation:
              "May Allah bless and grant peace to our master Muhammad, the chosen prophet,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَلَى آلِهِ الطَّيِّبِينَ الْأَخْيَار",
            translit: "wa ‛alā ālihiṭ-ṭayyibīnal-akhyār",
            translation: "and to his good, elect family,",
          }),
          new DhikrEntryModel({
            arabic: "صَلَاةً يَغْبِطُهُمْ بِهَا مَنْ حَضَرَ الْمَوْقِفَ يَوْمَ الدِّينِ",
            translit: "ṣalātan yaghbiṭuhum bihā man ḥaḍaral-mawqifa yawmad-dīn",
            translation:
              "with a blessing that those present at the place of standing on Judgement Day will wish for the like of.",
          }),
          new DhikrEntryModel({
            arabic: "وَصَلِّ اللَّهُمَّ عَلَى آبَائِهِ وَإِخْوَانِهِ مِنَ الْأَنْبِيَاءِ وَالْمُرْسَلِينَ",
            translit:
              "wa ṣalli Allāhumma ‛alā ābā’ihī wa ikhwānihī minal-anbiyā’i wal-mursalīn",
            translation:
              "Bless, O Allah, his fathers and brethren among the prophets and messengers,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَلَى أَتْبَاعِهِ وَأَشْيَاعِهِ مِنَ الْمُوَحِّدِينَ",
            translit: "wa ‛alā atbā‛ihī wa ashyā‛ihī minal-muwaḥḥidīn",
            translation:
              "his followers and his party from among the monotheists,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَلَى أَزْوَاجِهِ الطَّاهِرَاتِ أُمَّهَاتِ الْمُؤْمِنِينَ",
            translit: "wa ‛alā azwājihiṭ-ṭāhirāti ummahātil-mu’minīn",
            translation: "his pure wives the Mothers of the Believers,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَلَى أَبِينَا آدَمَ وَأُمِّنَا حَوَّاءَ وَمَنْ وَلَدَا مِنَ الْمُؤْمِنِينَ",
            translit:
              "wa ‛alā abīnā Ādama wa umminā Ḥawwā’a wa man waladā minal-mu’minīn",
            translation:
              "our father Adam, our mother Eve, and the believers they produced,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَلَى أَصْحَابِهِ وَالتَّابِعِينَ وَتَابِعِي التَّابِعِينَ",
            translit: "wa ‛alā aṣḥābihī wat-tābi‛īna wa tābi‛it-tābi‛īn",
            translation:
              "the companions, the followers and those who followed the followers,",
          }),
          new DhikrEntryModel({
            arabic: "مِنْ يَوْمِنَا هَذَا إِلَى يَوْمِ الدِّينِ",
            translit: "min yawminā hādhā ilā yawmid-dīn",
            translation: "from this day of ours until Judgement Day.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "وَعَلَيْنَا مَعَهُمْ وَفِيهِمْ بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِينَ",
            translit:
              "wa ‛alaynā ma‛ahum wa fīhim biraḥmatika yā arḥamar-rāḥimīn",
            translation:
              "and us with them and among them, by Your mercy, O Most Merciful!",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا اللَّهُ",
            translit: "Yā Allāh",
            translation: "O Allah!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "وَهَبَ اللَّهُ لَنَا وَلَكُمْ سَوَالِفَ الْآثَامِ",
            translit: "Wa wahaballāhu lanā wa lakum sawālifal-āthām",
            translation:
              "May Allah make sins for us and you to be a thing of the past.",
          }),
          new DhikrEntryModel({
            arabic: "وَعَصَمَنَا وَإِيَّاكُمْ فِيمَا بَقِيَ مِنَ الْأَيَّامِ",
            translit: "wa ‛aṣamanā wa iyyākum fīmā baqiya minal-ayyām",
            translation: "May He protect us in what remains of our lives.",
          }),
          new DhikrEntryModel({
            arabic:
              "وَتَقَبَّلَ مِنَّا وَمِنْكُمُ الصَّلَاةَ وَالْقِرَاءَةَ وَالصَّدَقَةَ وَالدُّعَاءَ وَالْحَجَّ وَالصِّيَامَ",
            translit:
              "wa taqabbala minnā wa minkumuṣ-ṣalāta wal-qirā’ata waṣ-ṣadaqata wad-du‛ā’a wal-ḥajja waṣ-ṣiyām",
            translation:
              "May He accept from us prayer, recitation, charity, supplication, pilgrimage and fasting.",
          }),
          new DhikrEntryModel({
            arabic: "وَأَحَلَّنَا وَإِيَّاكُمْ بِرَحْمَتِهِ دَارَ السَّلَامِ",
            translit: "wa aḥallanā wa iyyākum biraḥmatihī dāras-salām",
            translation:
              "May He admit us, by His mercy, into the Abode of Peace.",
          }),
          new DhikrEntryModel({
            arabic: "وَلَا أَرَانَا وَإِيَّاكُمْ قَبِيحًا بَعْدَ هَذَا الْمَقَامِ",
            translit: "wa lā arānā wa iyyākum qabīḥan ba‛da hādhal-maqām",
            translation: "May He not show us and you any bad after this place.",
          }),
          new DhikrEntryModel({
            arabic:
              "وَتَلَقَّى سَادَاتِنَا وَسَادَاتِكُمْ وَأَمْوَاتَنَا وَأَمْوَاتِكُمْ وَأَمْوَاتَ الْمُسْلِمِينَ بِالْإِتْحَافِ وَالْإِجْلَالِ وَالْإِكْرَامِ وَالْإِعْظَامِ وَالْإِنْعَامِ",
            translit:
              "wa talaqqā sādātinā wa sādātikum wa amwātanā wa amwātikum wa amwātal-muslimīna bil-itḥāfi wal-ijlāli wal-ikrāmi wal-i‛ẓāmi wal-in‛ām",
            translation:
              "May He meet our masters, our deceased and the deceased of the Muslims with gifting, exaltation, honouring, magnification and benefaction.",
          }),
          new DhikrEntryModel({
            arabic: "وَصَلَّى اللَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ خَيْرِ الْأَنَامِ",
            translit: "Wa ṣallallāhu ‛alā sayyidinā Muḥammadin khayril-anām",
            translation:
              "May Allah bless our master Muhammad, the best of creation,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَلَى آلِهِ الْخِيَرَةِ الْبَرَرَةِ الْكِرَامِ مَصَابِيحِ الظَّلَامِ",
            translit:
              "wa ‛alā ālihil-khiyaratil-bararatil-kirāmi maṣābīḥiẓ-ẓalām",
            translation:
              "and his elect, good, noble family, the lights of darkness,",
          }),
          new DhikrEntryModel({
            arabic: "أَفْضَلَ التَّحِيَّةِ وَالسَّلَامِ",
            translit: "afḍalat-taḥiyyati was-salām",
            translation: "with the best greetings and peace,",
          }),
          new DhikrEntryModel({
            arabic: "وَسَلَّمَ تَسْلِيمًا كَثِيرًا والْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
            translit:
              "wa sallama taslīman kathīrā, wal-ḥamdu lillāhi rabbil-‛ālamīn",
            translation:
              "and grant them abundant peace. Praise be to Allah, Lord of the Worlds.",
          }),
        ],
      }),
      saffat_180_182(1, "", false),
    ],
  }),
];
