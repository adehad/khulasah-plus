import {
  baqarah_amana_rasul,
  baqarah_ayat_al_kursi,
  falaq,
  fatihah,
  ikhlas,
  nas,
} from "@/content/shared/quran";
import { DhikrEntryModel, DhikrModel, WirdModel } from "@/models/recitation";

export const wird = [
  new WirdModel({
    title: "Ratib Imam Al-Haddad",
    entries: [
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الفَاتِحَة إِلَى حَضْرَةِ النَّبِيِّ مُحَمَّدٍ صَلَّى ٱللَّهُ عَلَيهِ وَسَلَّم",
            translation:
              "The (reading of) the Fātiḥah to the presence of the Prophet Muḥammad, may the blessings and peace of Allāh be upon him",
            translit:
              "Alfātiḥah ilā ḥaḍratin nabiyyi Muḥammadin ṣallallāhu ‛alayhi wa ālihī wa sallam.",
          }),
          new DhikrEntryModel({
            arabic: "أَعُوذُ بِاللّٰهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
            translation: "I seek refuge in Allāh from the accursed Satan.",
            translit: "A‛ūdhu billāhi minashshayṭānir rajīm.",
          }),
        ],
      }),
      fatihah(),
      baqarah_ayat_al_kursi(),
      baqarah_amana_rasul(),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "لَا إِلَهَ إِلَّا ٱللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
            translation:
              "There is no god but Allāh alone, He has no partner, His is the kingdom and His is the praise, He gives life and He causes death, and He is capable of all things.",
            translit:
              "Lā ilāha illallāhu waḥdahū lā sharīka lahū, lahul mulku wa lahul ḥamdu yuḥyī wa yumītu wa huwa ‛alā kulli shay’in qadīr.",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "سُبْحَانَ ٱللَّهِ وَٱلْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا ٱللَّهُ وَٱللَّهُ أَكْبَرُ",
            translation:
              "Glory be to Allāh, praise be to Allāh, there is no god but Allāh, (and) Allāh is the Most Great.",
            translit:
              "Subḥānallāhi walḥamdu lillāhi wa lā ilāha illallāh, allāhu akbar.",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "سُبْحَانَ ٱللَّهِ وَبِحَمْدِهِ سُبْحَانَ ٱللَّهِ الْعَظِيم",
            translation:
              "Glory be to Allāh, and praise be to Him; Glory be to Allāh, the Magnificent.",
            translit: "Subḥānallāhi wa biḥamdihī subḥānallāhil ‛aẓīm.",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "رَبَّنَا اغْفِرْ لَنَا وَتُبْ عَلَيْنَا إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ",
            translation:
              "Our Lord, forgive us and grant us repentance; indeed, You are the Oft-Forgiving, Most Merciful.",
            translit:
              "Rabbanaghfir lanā wa tub ‛alaynā innaka antat tawwābur raḥīm.",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ، اللَّهُمَّ صَلِّ عَلَيْهِ وَسَلِّمْ",
            translation:
              "O Allāh! Bestow blessings on Muḥammad, O Allāh! Bestow blessings and peace on him.",
            translit:
              "Allāhumma ṣalli ‛alā Muḥammad, Allāhumma ṣalli ‛alayhi wa sallim.",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "أَعُوْذُ بِكَلِمَاتِ ٱللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
            translation:
              "I seek refuge in the Perfect Words of Allāh from the evil that He has created.",
            translit: "A‛ūdhu bikalimātillāhit tāmmāti min sharri mā khalaq.",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "بِسْمِ ٱللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي الْسَّمَآءِ وَهُوَ الْسَّمِيعُ الْعَلِيمُ",
            translation:
              "In the Name of Allāh, with Whose Name nothing can cause harm on earth and in the heaven, and He is the All-Hearing and All-Knowing.",
            translit:
              "Bismillāhilladhī lā yaḍurru ma‛asmihī shay’un fil’arḍi wa lā fissamā’i wa huwas samī‛ul ‛alīm.",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "رَضِينَا بِاللّٰهِ رَبًّا وَبِالْإِسْلَٰمِ دِينًا وَبِمُحَمَّدٍ نَبِيًّا",
            translation:
              "We are content with Allāh as Lord, with Islām as religion, and with Muḥammad as Prophet.",
            translit:
              "Raḍīnā billāhi rabbaw wa bil’islāmi dīnaw wa bimuḥammadin nabiyyā.",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "بِسْمِ ٱللَّهِ وَالْحَمْدُ لِلَّهِ وَالْخَيْرُ وَالشَّرُّ بِمَشِيئَةِ ٱللَّهِ",
            translation:
              "In the Name of Allāh, and all praise is for Allāh, both good and evil are by the will of Allāh.",
            translit:
              "Bismillāhi wal ḥamdulillāhi wal khayru wash-sharru bimashī’atillāh.",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "آمَنَّا بِٱللَّهِ وَالْيَوْمِ الْآخِرِ تُبْنَا إِلَى ٱللَّهِ بَاطِنًا وَظَاهِرًا",
            translation:
              "We believe in Allāh and the Last Day (of Judgement), we turn to Allāh in repentance, inwardly and outwardly.",
            translit:
              "Āmannā billāhi wal yawmil ākhiri, tubnā ilallāhi bāṭinaw wa ẓāhirā.",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا رَبَّنَا وَاعْفُ عَنَّا وَامْحُ الَّذِي كَانَ مِنَّا",
            translation:
              "O Our Lord, pardon us and wipe out whatever (sins) we may have committed.",
            translit: "Yā rabbanā wa‛fu ‛annā wamḥulladhī kāna minnā.",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا ذَا الْجَلَالِ وَالْإِكْرَامِ أَمِتْنَا عَلَى دِينِ الْإِسْلَام",
            translation:
              "O Lord of Sublimity and Generosity, let us die in the religion of Islām.",
            translit: "Yā dhal jalāli wal ikrām,amitnā ‛alā dīnil islām.",
            repeat: 7,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا قَوِيُّ يَا مَتِين، اِكْفِ شَرَّ الظَّالِمِين",
            translation:
              "O Most Powerful, O Invincible, protect us from the evil of the oppressors.",
            translit: "Yā qawiyyu yā matīn, ikfi sharraẓ ẓālimīn.",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "أَصْلَحَ ٱللَّهُ أُمُورَ الْمُسْلِمِين، صَرَفَ ٱللَّهُ شَرَّ الْمُؤْذِين",
            translation:
              "May Allāh remedy the affairs of the Muslims; may Allāh turn away from them the evil of the harmful.",
            translit:
              "Aṣlaḥallāhu umūral muslimīn, ṣarafallāhu sharral mu’dhīn.",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "يَا عَلِيُّ يَا كَبِير، يَا عَلِيمُ يَا قَدِير، يَا سَمِيعُ يَا بَصِير، يَا لَطِيفُ يَاخَبِير",
            translation:
              "O Most High, O Most Great, O All-Knowing, O Powerful One, O All-Hearing, O All-Seeing, O Gentle, O All-Aware!",
            translit:
              "Yā ‛aliyyu yā kabīru, yā ‛alīmu yā qadīru, yā samī‛u yā baṣīru, yā laṭīfu yā khabīru.",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا فَارِجَ الْهَمِّ يَا كَاشِفَ الْغَمِّ يَا مَنْ لِعَبْدِهِ يَغْفِرُ وَيَرْحَم",
            translation:
              "O the Dispeller of anxiety, O the Remover of grief, O the One who is forgiving and merciful to His servant.",
            translit:
              "Yā fārijal hammi, yā kāshifal ghammi, yā man li‛abdihī yaghfiru wa yarḥamu.",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "أَسْتَغْفِرُ ٱللَّهَ رَبَّ الْبَرَايَا أَسْتَغْفِرُ ٱللَّهَ مِنَ الْخَطَايَا",
            translation:
              "I seek forgiveness from Allāh, the Lord of all creation. I seek forgiveness from Allāh for all my mistakes.",
            translit:
              "Astaghfirullāha rabbal barāyā, astaghfirullāha minal khaṭāyā.",
            repeat: 4,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "لَآ إِلَٰهَ إِلَّا ٱللَّهُ",
            translation: "There is no god but Allāh",
            translit: "Lā ilāha illallāh",
            repeat: 50,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "مُحَمَّدٌ رَسُولُ ٱللَّهِ صَلَّى ٱللَّهُ عَلَيْهِ وَسَلَّمَ وَشَرَّفَ وَكَرَّمَ وَمَجَّدَ وَعَظَّمَ وَرَضِيَ ٱللَّهُ تَعَالَى عَنْ أَهْلِ بَيْتِهِ الْمُطَهَّرِينَ وَأَصْحَابِهِ الْمُهْتَدِينَ وَالتَّابِعِينَ لَهُمْ بِإِحْسَانٍ إِلَى يَوْمِ الدِّينِ",
            translation:
              "Muḥammad is the Messenger of Allāh, may Allah bless him, grant him peace, and honour, elevate, glorify and exalt him. May He be well-pleased with his purified household, his rightly guided companions, and those who follow them with excellence till the Day of Judgement.",
            translit:
              "Muḥammadur rasūlullāhi ṣallallāhu ‛alayhi wa sallam wa sharrafa wa karrama wa majjada wa aẓẓama, wa raḍiyallāhu ta‛ālā ‛an ahli baytihil muṭahharīna wa aṣḥābihil muhtadīna wattābi‛īna lahum bi’iḥsānin ilā yawmid dīn.",
          }),
        ],
      }),
      ikhlas(3),
      falaq(),
      nas(),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "الفَاتِحَةَ إِلَى رُوحِ سَيِّدِنَا وَحَبِيبِنَا وَشَفِيعِنَا رَسُولِ ٱللَّهِ مُحَمَّد بِن عَبْدِ ٱللَّهِ،",
            translation:
              "Al-Fātiḥah on the soul of our master, our beloved, our intercessor, the Messenger of Allāh, Muḥammad bin ‛Abd Allāh, ",
            translit:
              "Alfātiḥatu ilā rūḥi sayyidinā wa ḥabībinā wa shafī‛inā rasūlillāh, Muḥammadibni ‛Abdillāh,",
          }),
          new DhikrEntryModel({
            arabic: " وآلِهِ وَأَصْحَابِهِ وَأَزْوَاجِهِ وَذُرِّيَّتِهِ وَأَهْلِ بَيْتِهِ",
            translation:
              "his family, his companions, his wives, his relatives and his family household;",
            translit:
              " wa ālihī wa aṣḥābihī wa azwājihī wa dhurriyyatihī wa ahli baytihī,",
          }),
          new DhikrEntryModel({
            arabic: " وَإِلَى رُوحِ سَيِّدِنَا الْمُهَاجِر إِلَى ٱللَّهِ أَحْمَد بِن عِيسَى ",
            translation:
              "and upon the soul of our master the Emigrant unto Allah, Ahmad bin ‛Īsa, ",
            translit:
              " wa ilā rūḥi sayyidinal muhājiri ilallāhi Aḥmadabni ‛Īsā ",
          }),
          new DhikrEntryModel({
            arabic: "وَأُصُولِهِ وَفُرُوعِهِمْ ",
            translation:
              "and his genealogical roots (ancestors) and their branches (descendants), ",
            translit: "wa uṣūlihī wa furū‛ihim; ",
          }),
          new DhikrEntryModel({
            arabic: "أَنَّ ٱللَّهَ يُعْلِي دَرَجَاتِهِمْ فِي الْجَنَّةِ وَيُكَثِّرُ مَثُوبَاتِهِم ",
            translation:
              "that Allāh may elevate their ranks in Paradise and increase their benefit",
            translit:
              "annallāha yu‛lī darajātihim fil jannati wa yukaththiru mathūbātihim ",
          }),
          new DhikrEntryModel({
            arabic:
              "وَيُضَاعِفُ حَسَنَاتِهِم وَيَحْفَظُنَا بِجَاهِهِم وَيَنْفَعُنَا بِهِمْ وَيَحْمِينَا بِحِمَايَتِهِم وَيُمِدُّنَا بِمَدَدِهِم",
            translation:
              " and protect us with their status, benefit us by them, protect us with their protection, and support us with their spiritual assistance;",
            translit:
              "wa yuḍā‛ifu ḥasanātihim, wa yaḥfaẓunā bijāhihim, wa yanfa‛unā bihim, wa yaḥmīnā bi ḥimāyatihim, wa yumiddunā bi madadihim, ",
          }),
          new DhikrEntryModel({
            arabic:
              " وَيُعِيدُ عَلَيْنَا مِنْ بَرَكَاتِهِم وَأَسْرَارِهِمْ وَأَنْوَارِهِمْ وَعُلُومِهِم وَنَفَحَاتِهِم ",
            translation:
              " and that He shower upon us of their blessings, (spiritual) mysteries, illuminations, knowledge, and gifts ",
            translit:
              "wa yu‛īdu ‛alaynā min barakātihim wa asrārihim wa anwārihim wa ‛ulūmihim wa nafaḥātihim ",
          }),
          new DhikrEntryModel({
            arabic: "فِي الدِّينِ وَالدُّنْيَا وَٱلۡأٓخِرَةِ [اَلْفَاتِحَة]",
            translation:
              "in (our) religion, in this world, and in the hereafter. [al-Fātiḥah]",
            translit: "fiddīni waddunyā wal’ākhirati. [al-Fātiḥah].",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "الْفَاتِحَةَ إِلَى رُوحِ سَيِّدِنَا الْأُسْتَاذِ الْأَعْظَمِ الْفَقِيهِ الْمُقَدَّمِ مُحَمَّدِ بنِ عَلِيّ بَاعَلَوِي ", // the ya isn't rendering here
            translation:
              "Al-Fātiḥah on the soul of the supreme teacher, the foremost jurist, Muḥammad bin ‛Alī Bā ‛Alawī ",
            translit:
              "Alfātiḥatu ilā rūḥi sayyidinal ustādhil a‛ẓami; alfaqīhil muqaddimi Muḥammadi nibni ‛aliyyin bā‛alawī ",
          }),
          new DhikrEntryModel({
            arabic: "وَأُصُولِهِ وَفُرُوعِهِمْ",
            translation:
              "and his genealogical roots (ancestors) and their branches (descendants), ",
            translit: "wa usūlihī wa furū‛ihim ",
          }),
          new DhikrEntryModel({
            arabic: "وَجَمِيعِ سَادَاتِنَا آلِ أَبِي عَلَوِي وَأُصُولِهِمْ وَفُرُوعِهِمْ ",
            translation:
              " and all our noble masters among the descendants of the Bā ‛Alawī; ",
            translit:
              " wa jamī‛i sādātinā āli abī ‛alawiyyin wa usūlihim wa furū‛ihim, ",
          }),
          new DhikrEntryModel({
            arabic:
              "أَنَّ ٱللَّهَ يُعْلِي دَرَجَاتِهِمْ فِي الْجَنَّةِ وَيُكَثِّرُ مَثُوبَاتِهِم وَيُضَاعِفُ حَسَنَاتِهِم ",
            translation:
              "that Allāh may elevate their ranks in paradise and increase their benefit, and double their good, ",
            translit:
              "annallāha yu‛lī darajātihim fil jannati wa yukaththiru mathūbātihim wa yuḍā‛ifu ḥasanātihim, ",
          }),
          new DhikrEntryModel({
            arabic:
              "وَيَحْفَظُنَا بِجَاهِهِم وَيَنْفَعُنَا بِهِمْ وَيَحْمِينَا بِحِمَايَتِهِم وَيُمِدُّنَا بِمَدَدِهِم ",
            translation:
              "and protect us with their status, benefit us by them, protect us with their protection, and support us with their spiritual assistance; ",
            translit:
              "wa yaḥfaẓunā bijāhihim, wa yanfa‘unā bihim, wa yaḥmīnā bi ḥimāyatihim, wa yumiddunā bi madadihim, ",
          }),
          new DhikrEntryModel({
            arabic: "وَيُعِيدُ عَلَينَا مِنْ بَرَكَاتِهِم وَأَسْرَارِهِمْ وَأَنْوَارِهِمْ وَعُلُومِهِم وَنَفَحَاتِهِم",
            translation:
              "and that He shower upon us of their blessings, (spiritual) mysteries, knowledge, and gifts",
            translit:
              "wa yu’īdu ‘alaynā min barakātihim wa asrārihim wa anwārihim wa ‘ulūmihim wa nafaḥātihim.",
          }),
          new DhikrEntryModel({
            arabic: " فِي الدِّينِ وَالدُّنْيَا وَٱلۡأٓخِرَةِ [اَلْفَاتِحَة]",
            translation:
              "in (our) religion, in this world, and in the hereafter. [al-Fātiḥah]",
            translit: "fiddīni waddunyā wal’ākhirati. [al-Fātiḥah].",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الْفَاتِحَة إِلَى أَرْوَاحِ سَادَاتِنَا الصُّوفِيَّةِ ",
            translation: "Al-Fātiḥah on the souls of our noble Ṣūfi masters",
            translit: "Alfātiḥatu ilā arwāḥi sādātinaṣ ṣūfiyyati",
          }),
          new DhikrEntryModel({
            arabic: "أَيْنَمَا كَانُوا وَحَلَّتْ أَرْوَاحُهُمْ فِي مَشَارِقِ الْأَرْضِ وَمَغَارِبِهَا",
            translation:
              " wherever they may be and wherever their souls may be set free, in the east or west, ",
            translit:
              "aynamā kānū wa ḥallat arwāḥuhum fī mashāriqil arḍi wa maghāribihā",
          }),
          new DhikrEntryModel({
            arabic:
              "أَنَّ ٱللَّهَ يُعْلِي دَرَجَاتِهِمْ فِي الْجَنَّةِ وَيُكَثِّرُ مَثُوبَاتِهِم وَيُضَاعِفُ حَسَنَاتِهِم",
            translation:
              "that Allāh may raise their ranks in paradise and increase their benefit,",
            translit:
              "annallāha yu’lī darajātihim fil jannati wa yukaththiru mathūbātihim wa yuḍā‛ifu ḥasanātihim",
          }),
          new DhikrEntryModel({
            arabic:
              " وَيَحْفَظُنَا بِجَاهِهِم وَيَنْفَعُنَا بِهِمْ وَيَحْمِينَا بِحِمَايَتِهِم وَيُمِدُّنَا بِمَدَدِهِم ",
            translation:
              " and protect us with their status, benefit us by them, protect us with their protection, and support us with their spiritual assistance;",
            translit:
              "wa yaḥfaẓunā bijāhihim, wa yanfa‛unā bihim, wa yaḥmīnā bi ḥimāyatihim, wa yumiddunā bi madadihim",
          }),
          new DhikrEntryModel({
            arabic: "وَيُعِيدُ عَلَينَا مِنْ بَرَكَاتِهِم وَأَسْرَارِهِمْ وَأَنْوَارِهِمْ وَعُلُومِهِم وَنَفَحَاتِهِم",
            translation:
              " and that He shower upon us of their blessings, (spiritual) mysteries, knowledge, and gifts ",
            translit:
              "wa yu‛īdu ‛alaynā min barakātihim wa asrārihim wa anwārihim wa ‛ulūmihim wa nafaḥātihim",
          }),
          new DhikrEntryModel({
            arabic: " فِي الدِّينِ وَالدُّنْيَا وَٱلۡأٓخِرَةِ [اَلْفَاتِحَة]",
            translation:
              "in (our) religion in this world and in the hereafter. [al-Fātiḥah]",
            translit: " fiddīni waddunyā wal’ākhirati. [al-Fātiḥah].",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الْفَاتِحَة إِلَى رُوحِ سَيِّدِنَا صَاحِبِ الرَّاتِبِ",
            translation:
              "Al-Fātiḥah on the soul of our master and compiler of the Rātib,",
            translit: "Alfātiḥata ilā rūḥi ṣāḥibir rātibi ",
          }),
          new DhikrEntryModel({
            arabic:
              " قُطْبِ الْإِرْشَادِ وَغَوْثِ الْعِبَادِ وَالْبِلَادِ الْحَبِيبِ عَبْدِ ٱللَّهِ بنِ عَلَوِيِّ بنِ مُحَمَّدِ الْحَدَّاد",
            translation:
              " the Axis of Guidance and the spiritual succour for the worshippers and nations, the Habib ‛Abd Allāh  bin ‛Alawī bin Muḥammad al-Ḥaddād ",
            translit:
              "quṭbil irshādi wa ghawthil ‛ibādi wal bilād, alḥabībi ‛Abdillāh ibni ‛Alawiyyibni Muḥammadil Ḥaddādi, ",
          }),
          new DhikrEntryModel({
            arabic: " وَأُصُولِهِ وَفُرُوْعِهِم",
            translation:
              "and his genealogical roots (ancestors) and their branches (descendants), ",
            translit: "wa usūlihī wa furū‛ihim, ",
          }),
          new DhikrEntryModel({
            arabic:
              " أَنَّ ٱللَّهَ يُعْلِي دَرَجَاتِهِمْ فِي الْجَنَّةِ وَيُكَثِّرُ مَثُوبَاتِهِم وَيُضَاعِفُ حَسَنَاتِهِم ",
            translation:
              "that Allāh may elevate their ranks in paradise and increase their benefit, ",
            translit:
              "annallāha yu‛lī darajātihim fil jannati wa yukaththiru min mathūbātihim wa yuḍā‛ifu ḥasanātihim, ",
          }),
          new DhikrEntryModel({
            arabic: "وَيَحْفَظُنَا بِجَاهِهِم وَيَنْفَعُنَا بِهِمْ وَيَحْمِينَا بِحِمَايَتِهِم وَيُمِدُّنَا بِمَدَدِهِم",
            translation:
              "and protects us with their status, benefits us by them, protects us with their protection, and supports us with their spiritual assistance; ",
            translit:
              "wa yaḥfaẓunā bijāhihim, yanfa‛unā bihim, wa yaḥmīnā bi ḥimāyatihim, wa yumiddunā bi madadihim,",
          }),
          new DhikrEntryModel({
            arabic: "وَيُعِيدُ عَلَينَا مِنْ بَرَكَاتِهِم وَأَسْرَارِهِمْ وَأَنْوَارِهِمْ وَعُلُومِهِم وَنَفَحَاتِهِم",
            translation:
              "and that He shower upon us of their blessings, (spiritual) mysteries, knowledge, and gifts",
            translit:
              "wa yu’īdu ‘alaynā min barakātihim wa asrārihim wa anwārihim wa ‘ulūmihim wa nafaḥātihim.",
          }),
          new DhikrEntryModel({
            arabic: " فِي الدِّينِ وَالدُّنْيَا وَٱلۡأٓخِرَةِ [اَلْفَاتِحَة]",
            translation:
              " in (our) religion, in this world, and in the hereafter. [al-Fātiḥah].",
            translit: "fiddīni waddunyā wal’ākhirati. [al-Fātiḥah].",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الْفَاتِحَة إِلَى أَرْوَاحِ كَافَّةِ عِبَادِ ٱللَّهِ الصَّالِحِينَ",
            translation:
              "Al-Fātiḥah on the souls of all the pious servants of Allāh",
            translit: "Alfātiḥata ilā arwāḥi kāfati ‛ibādillāhiṣ ṣāliḥīn, ",
          }),
          new DhikrEntryModel({
            arabic: " وَوَالِدِينَا وَمَشَائِخِنَا فِي الدِّينِ",
            translation: " and our parents, and our teachers of religion, ",
            translit: "wa wālidīnā wa mashā’ikhinā fiddīn, ",
          }),
          new DhikrEntryModel({
            arabic: " وَذَوِي الْحُقُوقِ عَلَينَا",
            translation: "and those who have rights upon us;",
            translit: "wa dhawil ḥuqūqi ‛alaynā, ",
          }),
          new DhikrEntryModel({
            arabic: " وَأَمْوَاتِ أَهْلِ هَذِهِ الْبَلْدَةِ",
            translation: " and the deceased people of this land; ",
            translit: "wa amwāti ahli hādhihil baldati",
          }),
          new DhikrEntryModel({
            arabic: "  مِنْ أَهْلِ لَا إِلَهَ إِلَّا ٱللَّهُ أَجْمَعِينَ ",
            translation:
              "of all those who believed that there is no god, but Allāh; ",
            translit: "min ahli lā ilāha illallāhu ajma‛īn, ",
          }),
          new DhikrEntryModel({
            arabic: "وَإِلَى أَرْوَاحِ أَمْوَاتِ الْمُسْلِمِينَ وَأَحْيَاهُمْ إِلَى يَومِ الدِّينِ ",
            translation:
              "And on the souls of the deceased Muslims, and those who are (still) alive, until the Day of Judgement, ",
            translit:
              "Wa ilā arwāḥi amwātil muslimīna wa aḥyāhum ilā yawmiddīn, ",
          }),
          new DhikrEntryModel({
            arabic: "أَنَّ ٱللَّهَ يَغْفِرُ لَهُم وَيَرْحَمُهُم ",
            translation: "that Allāh forgive them and have mercy on them;",
            translit: "annallāha yaghfiru lahum wa yarḥamuhum, ",
          }),
          new DhikrEntryModel({
            arabic: "وَيُفَرِّجُ كُرُوبَ الْمُسْلِمِينَ وَيَرْحَمُهُم",
            translation:
              " that he removes the difficulties of the Muslims and show compassion towards them;",
            translit: "wa yufarriju kurūbal muslimīna wa yarḥamuhum, ",
          }),
          new DhikrEntryModel({
            arabic: " وَيَشْفِي مَرْضَاهُمْ وَيَجْمَعُ شَمْلَهُمْ عَلَى الْهُدَى",
            translation:
              " and that He cures the sick, and unite them upon guidance,",
            translit: "wa yashfī marḍāhum, wa yajma‛u shamlahum ‛alal hudā, ",
          }),
          new DhikrEntryModel({
            arabic: " وَيُؤَلِّفُ ذَاتَ بَينِهِمْ وَيُوَلِّي عَلَيهِمْ خِيَارَهُمْ",
            translation:
              " and instill love in their hearts, and causes the best among them to govern them, ",
            translit:
              "wa yu’allifu dhāta baynihim, wa yuwallī ‛alayhim khiyārahum, ",
          }),
          new DhikrEntryModel({
            arabic: " وَيَصْرِفُ عَنْهُمْ شِرَارَهُمْ",
            translation: "and divert from them the worst among them, ",
            translit: "wa yaṣrifu ‛anhum shirārahum, ",
          }),
          new DhikrEntryModel({
            arabic:
              " وَيَكْفِينَا وَإِيَّاهُمْ شَرَّ الْفِتَنِ وَالْمِحَنِ وَالْمُؤذِيينَ وَالْمُعْتَدِينَ مِنْ قَرِيبٍ أَو بَعِيدٍ ",
            translation:
              "and protect us and them from the evil of the trials and tribulations, and the mischief-makers and transgressors from near and far;",
            translit:
              "wa yakfīnā wa iyyāhum sharral fitani wal miḥani wal mu’dhiyyīna wal mu‛tadīna min qarībin aw ba‛īdin, ",
          }),
          new DhikrEntryModel({
            arabic: "وَيُرْخِي أَسْعَارَهُم",
            translation: " and make their living conditions easy; ",
            translit: "wa yurkhī as‛ārahum, ",
          }),
          new DhikrEntryModel({
            arabic: " وَيُغَزِّرُ أَمْطَارَهُم",
            translation: "and increase their rains; ",
            translit: "wa yughazziru amṭārahum, ",
          }),
          new DhikrEntryModel({
            arabic: " وَيُعْطِي كُلَّ سَائِلٍ مِنَّا وَمِنْكُمْ سُولَهُ عَلَى مَا يُرْضِي ٱللَّهَ وَرَسُولَهُ",
            translation:
              "and give everyone what he asks according to that which pleases Allāh and His Messenger; ",
            translit:
              "wa yu‛ṭī kulla sā’ilim minnā wa minkum su’lahū, ‛alā mā yurḍillāha wa rasūlahū, ",
          }),
          new DhikrEntryModel({
            arabic: " وَيَفْتَحُ عَلَينَا فُتُوحَ الْعَارِفِينَ،",
            translation:
              "and that He inspire us with the inspiration of the Gnostics; ",
            translit: "wa yaftaḥu ‛alaynā futūḥal ‛ārifīna, ",
          }),
          new DhikrEntryModel({
            arabic: " وَالْحُجَّاج وَالْمُسَافِرِين، وَالْغُزَاة وَالْمُجَاهِدِينَ مِنَ الْمُسْلِمِين،",
            translation:
              "and that Allah grant the pilgrims, travelers and mujahideen among the Muslims",
            translit:
              "walḥujjāj walmusāfirīn, walghuzāt walmujāhidīn minal muslimīn, ",
          }),
          new DhikrEntryModel({
            arabic: " فِي الْبَرِّ وَالْبَحْرِ وَالْجَوِّ أَجْمَعِينَ، ",
            translation: "on land, sea and in the air,",
            translit: "fil barri wal baḥri wal jawwi ajma'īn, ",
          }),
          new DhikrEntryModel({
            arabic: "أَنَّ ٱللَّهَ يُصْحِبُهُم السَّلَامَةَ وَالْعَافِيَةَ،",
            translation: " safety and well-being ",
            translit: "annallāha yuṣḥibuhum as-salāmata wal 'āfiyata, ",
          }),
          new DhikrEntryModel({
            arabic: " وَيَرُدُّهُمْ إِلَى أَوْطَانِهِمْ بَعْدَ قَضَاءِ أَوْطَارِهِمْ ",
            translation:
              " and return them to their homelands after fulfilling their wishes,",
            translit: "wa yarudduhum 'ilā awṭānihim ba'da qaḍāi 'awṭārihim ",
          }),
          new DhikrEntryModel({
            arabic: "سَالِمِينَ غَانِمِينَ مَحْفُوظِينَ مَرْزُوقِينَ،",
            translation: " safe and sound, protected and prosperous;",
            translit: "sālimīna ghānimīna mahfūzīna marzūqīna, ",
          }),
          new DhikrEntryModel({
            arabic: " وَيَخْتِمُ لَنَا بِالْحُسْنَى وَهُوَ رَاضٍ عَنَّا فِي خَيْرٍ وَلُطْفٍ وَعَافِيَةٍ",
            translation:
              " and that He grant us a good ending whilst being satisfied with us in good, kindness and well-being;",
            translit:
              "wa yakhtimu lanā bilḥusnā wa huwa rāḍin ‛annā fī khayrin wa luṭfin wa ‛āfiyatin,,",
          }),
          new DhikrEntryModel({
            arabic: " وَإِلَى حَضْرَةِ النَّبِيِّ (مُحَمَّدٍ صَلَّى ٱللَّهُ عَلَيهِ وَآلِهِ وَسَلَّم)",
            translation:
              " and (finally al-Fātiḥah) to the Holy Presence of the Prophet Muḥammad, may the blessings and peace of Allāh be upon him and his family.",
            translit:
              "wa ilā ḥaḍratin nabiyyi (Muḥammadin ṣallallāhu ‛alayhi wa sallam).",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ إِنَّا نَسْأَلُكَ رِضَاكَ وَالْجَنَّةَ وَنَعُوذُ بِكَ مِنْ سَخَطِكَ وَالنَّارِ",
            translation:
              "O Allāh! We ask of You for Your Pleasure and Paradise, and we seek Your protection from Your Displeasure and from Hellfire..",
            translit:
              "Allāhumma innā nas’aluka riḍāka wal jannah, wa na‛ūdhu bika min sakhaṭika wan nār.",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "يَا عَالِمَ السِّرِّ مِنَّا لَا تَهْتِكَ السَّتْرَ عَنَّا وَعَافِنَا وَاعْفُ عَنَّا وَكُنْ لَنَا حَيْثُ كُنَّا",
            translation:
              "O Knower of secrets, do not remove Your cover (of faults) from us. Excuse us and forgive us; and be with us wherever we may be.",
            translit:
              "Yā ‛ālimas sirri minnā, lā tahtikis sitra ‛annā, wa ‛āfinā wa‛fu ‛annā, wa kullanā ḥaythu kunnā.",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "جَزَى اللَّهُ عَنَّا سَيِّدَنَا مُحَمَّدًا صَلَّى اللَّهُ عَلَيْهِ وَآلِهِ وَسَلَّمَ خَيْرًا، جَزَى اللَّهُ عَنَّا سَيِّدَنَا مُحَمَّدًا صَلَّى اللَّهُ عَلَيْهِ وَآلِهِ وَسَلَّمَ مَا هُوَ أَهْلُهُ",
            translation:
              "May Allāh reward, on our behalf, our master Muḥammad (blessings and peace on him) with good. May Allāh reward our master Muḥammad (blessings and peace on him) that which he is entitled to.",
            translit:
              "Jazallāhu ‛annā sayyidanā Muḥammadan ṣallallāhu ‛alayhi wa sallama khayran, jazallāhu ‛annā sayyidanā Muḥammadan ṣallallāhu ‛alayhi wa sallama mā huwa ahluhū.",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "جَزَى اللَّهُ عَنَّا سَيِّدَنَا وَنَبِيَّنَا مُحَمَّدًا صَلَّى اللَّهُ عَلَيْهِ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلَّمَ أَفْضَلَ مَا جَزَى نَبِيًّا عَنْ أُمَّتِهِ",
            translation:
              "May Allāh reward our master and Prophet, Muḥammad, (may the blessings and peace of Allāh be upon him, his family and companions) with the most excellent reward a Prophet has received for his ummah.",
            translit:
              "Jazallāhu ‛annā sayyidanā wa nabiyyinā Muḥammadan ṣallallāhu ‛alayhi wa ‛alā ālihī wa ṣaḥbihī wa sallama afḍala mā jazā nabiyyan ‛an ummatihī.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا ٱللَّهُ بِهَا، يَا ٱللَّهُ بِهَا، يَا ٱللَّهُ بِحُسْنِ الْخَاتِمَةِ",
            translation:
              "O Allāh, ensure! O Allāh, ensure! O Allāh, ensure a beautiful end.",
            translit:
              "Yā allāhu bihā, yā allāhu bihā, yā allāhu biḥusnil khātimah.",
            repeat: 3,
          }),
        ],
      }),
    ],
  }),
];

export default wird;
