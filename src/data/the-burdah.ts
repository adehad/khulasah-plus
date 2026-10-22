import {
  QasidaEntryModel,
  QasidaModel,
  QasidaVerseModel,
} from "@/models/recitation";

export default [
  new QasidaModel({
    title: "The Burdah",
    instruction:
      "By Imam Sharaf ad-Dīn Abī ‘Abd-Allāh Muḥammad al-Busīrī (رضي اللهُ عنه)",
    entries: [
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "مَوْلَايَ صَلِّ وَسَلِّمْ دَائِمًا أَبَدًا",
            translit: "Mawlāya ṣalli wa sallim dā’iman abadā",
            translation:
              "My Master, send blessings and peace always and forever,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "عَلَى حَبِيبِكَ خَيْرِ الْخَلْقِ كُلِّهِمِ",
            translit: "‛alā ḥabībika khayril khalqi kullihim",
            translation: "My master, bless and salute always and for evermore",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا رَبِّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى",
            translit: "Yā Rabbi ṣalli ‛alā Muḥammadin wa ‛alā",
            translation: "Chapter One",
          }),
          new QasidaEntryModel({
            arabic: "سَادَتِنَا آلِهِ وَصَحْبِهِ الْکِرَمِ",
            translit: "sādatinā ālihī wa ṣaḥbihil kiram",
            translation: "our masters, his family and his noble companions.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "أَمِنْ تَذَكُّرِ جِيرَانٍ بِذِي سَلَمِ",
            translit: "Amin tadhakkuri jīrānin bidhī salam",
            translation: "Is it from thinking of neighbors past in Dhu Selemi",
          }),
          new QasidaEntryModel({
            arabic: "مَزَجْتَ دَمْعًا جَرٰى مِنْ مُقْلَةٍ بِدَمِ",
            translit: "Mazajta dam‛an jarā min muqlatin bidam",
            translation:
              "That you have mixed blood in tears that flow from eyes steadily?",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "أَمْ هَبَّتِ الرِّيحُ مِنْ تِلْقَآءِ كَاظِمَةٍ",
            translit: "Am habbatir rīḥu min tilqā’i kāẓimah",
            translation: "Or blowing of wind from the direction of Kazimah,",
          }),
          new QasidaEntryModel({
            arabic: "وَأَوْمَضَ الْبَرْقُ فِي الظَّلْمَاءِ مِنْ إِضَمِ",
            translit: "Wa awmaḍal barqu fiẓ ẓalmā’i min iḍam",
            translation:
              "And lightning flashing from Idum in the dark that you see?",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "فَمَا لِعَيْنَيْكَ إنْ قُلْتَ اكْفُفَا هَمَتَا",
            translit: "Famā li‛aynayka in qultak fufā hamatā",
            translation:
              "So what is wrong with your eyes: when you say “Stop!” they just weep?",
          }),
          new QasidaEntryModel({
            arabic: "وَمَا لِقَلْبِكَ إنْ قُلْتَ اسْتَفِقْ يَهِمِ",
            translit: "Wa mā liqalbika in qultas tafiq yahim",
            translation:
              "And with your heart: when you say, “Be sane!” it acts crazily?",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "أَيَحْسَبُ الصَّبُّ أَنَّ الْحُبَّ مُنْكَتِمٌ",
            translit: "Ayaḥsabuṣ ṣabbu annal ḥubba munkatim",
            translation: "Does one so lovestruck imagine love is concealable,",
          }),
          new QasidaEntryModel({
            arabic: "مَا بَيْنَ مُنْسَجِمٍ مِنْهُ وَمُضْطَرِمِ",
            translit: "Mā bayna munsajimin minhu wa muḍṭarim",
            translation: "Between a downpour from it and being so fiery?",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "لَوْلَا الْهَوٰى لَمْ تُرِقْ دَمْعًا عَلىٰ طَلِلٍ",
            translit: "Lawlal hawā lam turiq dam‛an ‛alā ṭalal",
            translation:
              "If not for passion, you would have never burst into tears",
          }),
          new QasidaEntryModel({
            arabic: "وَلَا أَرِقْتَ لِذِكْرِ الْبَانِ وَالْعَلَمِ",
            translit: "Wa lā ariqta lidhikril bāni wal ‛alam",
            translation:
              "At the remains, nor lost sleep over the mount or the tree.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "فَكَيْفَ تُنْكِرُ حُبًّا بَعْدَمَا شَهِدَتْ",
            translit: "Fakayfa tunkiru ḥubban ba‛damā shahidat",
            translation: "So how do you still deny a love to which testified",
          }),
          new QasidaEntryModel({
            arabic: "بِهِ عَلَيْكَ عُدُولُ الدَّمْعِ وَالسَّقَمِ",
            translit: "Bihī ‛alayka ‛udūlud dam‛i was saqam",
            translation: "Against you true witnesses of tears and infirmity;",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَأَثْبَتَ الْوَجْدُ خَطَّيْ عَبْرَةٍ وَضَنًى",
            translit: "Wa athbatal wajdu khaṭṭay ‛abratin wa ḍanā",
            translation:
              "When grief has fixed on your cheeks canals of tears and malaise",
          }),
          new QasidaEntryModel({
            arabic: "مِثْلَ الْبَهَارِ عَلىٰ خَدَّيْكَ وَالْعَنَمِ",
            translit: "Mithlal bahāri ‛alā khaddayka wal ‛anam",
            translation:
              "Like branches of dogwood, red, and daffodils, yellowy?",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "نَعَمْ سَرٰى طَيْفُ مَنْ أَهْوٰى فَأَرَّقَنِي",
            translit: "Na‛am sarā ṭayfu man ahwā fa-arraqanī",
            translation:
              "Yes, sights of my love have come at night and kept me awake;",
          }),
          new QasidaEntryModel({
            arabic: "وَالْحُبُّ يَعْتَرِضُ اللَّذَّاتِ بِالْأَلَمِ",
            translit: "Wal ḥubbu ya‛tariḍul ladhdhāti bil alam",
            translation:
              "How love repels all delights and comforts with agony!",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا لَائِمِي فِي الْهَوٰى الْعُذْرِيِّ مَعْذِرَةً",
            translit: "Yā lā’imī fil hawal ‛udhriyyi ma‛dhirah",
            translation: "You critic of love so passionate, an apology",
          }),
          new QasidaEntryModel({
            arabic: "مِنِّي إِلَيْكَ وَلَوْ أَنْصَفْتَ لَمْ تَلُمِ",
            translit: "Minnī ilayka wa law anṣafta lam talum",
            translation:
              "From me to you—but if you were true, you’d not censure me.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "عَدَتْكَ حَالِيَ لَا سِرِّي بِمُسْتَتِرٍ",
            translit: "‛Adatka ḥāliya lā sirrī bimustatir",
            translation:
              "May you be spared what I bear—my secret isn’t concealed",
          }),
          new QasidaEntryModel({
            arabic: "عَنِ الْوُشَاةِ وَلَا دَائِي بِمُنْحَسِمِ",
            translit: "‛Anil wushāti wa lā dā’ī bimunḥasim",
            translation: "From haters, nor is there any end to my malady.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "مَحَّضْتَنِي النُّصْحَ لَكِنْ لَسْتُ أَسْمَعُهُ",
            translit: "Maḥḥaḍtanin nuṣḥa lākin lastu asma‛uh",
            translation:
              "You’ve offered me true advice, but simply, I hear it not;",
          }),
          new QasidaEntryModel({
            arabic: "إِنَّ الْمُحِبَّ عَنِ الْعُذَّالِ فِي صَمَمِ",
            translit: "Innal muḥibba ‛anil ‛udhdhāli fī ṣamam",
            translation:
              "The lover is deaf to all of those who speak critically.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "إِنِّي اتَّهَمْتُ نَصِيحَ الشَّيْبِ فِي عَذَلٍ",
            translit: "Innittahamtu naṣīḥash shaybi fī ‛adhal",
            translation:
              "I’ve even doubted gray hair’s advice when it censures me;",
          }),
          new QasidaEntryModel({
            arabic: "وَالشَّيْبُ أَبْعَدُ فِي نُصْحٍ عَنِ التُّهَمِ",
            translit: "Wash shaybu ab‛adu fī nuṣḥin ‛anit tuham",
            translation: "Although gray hair with advice is less in dubiety.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "فَإِنَّ أَمَّارَتِي بِالسُّوْءِ مَا اتَّعَظَتْ",
            translit: "Fa-inna ammāratī bis sū’i mat-ta‛aẓat",
            translation: "My evil ego, in its stupidity, paid no heed",
          }),
          new QasidaEntryModel({
            arabic: "مِنْ جَهْلِهَا بِنَذِيرِ الشَّيْبِ وَالْهَرَمِ",
            translit: "Min jahlihā binadhīrish shaybi wal haram",
            translation: "To all the warning of graying hair and seniority.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَلَا أَعَدَّتْ مِنَ الْفِعْلِ الْجَمِيلِ قِرَى",
            translit: "Wa lā a‛addat minal fi‛lil jamīli qirā",
            translation:
              "And hasn’t set out a spread of pleasing actions to host",
          }),
          new QasidaEntryModel({
            arabic: "ضَيْفٍ أَلَمَّ بِرَأْسِي غَيْرَ مُحْتَشِمِ",
            translit: "Ḍayfin alamma bira’sī ghayra muḥtashim",
            translation: "A guest who showed at my head, bereft of timidity.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "لَوْ كُنْتُ أَعْلَمُ أَنِّي مَا أُوَقِّرُهُ",
            translit: "Law kuntu a‛lamu annī mā uwaqqiruh",
            translation:
              "And had I known that I’d fail to honor him, I’d have hid-",
          }),
          new QasidaEntryModel({
            arabic: "كَتَمْتُ سِرًّا بَدَا لِي مِنْهُ بِالْكَتَمِ",
            translit: "Katamtu sirran badā lī minhu bil katam",
            translation: "Den using hair colorant his first appearance to me.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "مَنْ لِي بِرَدِّ جِمَاحٍ مِنْ غَوَايَتِهَا",
            translit: "Man lī biraddi jimāḥin min ghawāyatihā",
            translation:
              "Who’s there for me to control the fight of its wandering—",
          }),
          new QasidaEntryModel({
            arabic: "كَمَا يُرَدُّ جِمَاحُ الْخَيْلِ بِاللُّجُمِ",
            translit: "Kamā yuraddu jimāḥul khayli bil lujum",
            translation: "Just as a bit bridles horses in their obstinacy?",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "فَلَا تَرُمْ بِالْمَعَاصِي كَسْرَ شَهْوَتِهَا",
            translit: "Falā tarum bil ma‛āṣī kasra shahwatihā",
            translation: "So do not count on offenses to get rid of its lust;",
          }),
          new QasidaEntryModel({
            arabic: "إِنَّ الطَّعَامَ يُقَوِّي شَهْوَةَ النَّهِمِ",
            translit: "Innaṭ ṭa‛āma yuqawwī shahwatan nahim",
            translation: "Food only intensifies the craving of gluttony.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَالنَّفْسُ كَالطِّفْلِ إِنْ تُهْمِلْهُ شَبَّ عَلَى",
            translit: "Wan nafsu kaṭ ṭifli in tuhmilhu shabba ‛alā",
            translation: "The ego is like a baby: leave it and it grows up",
          }),
          new QasidaEntryModel({
            arabic: "حُبِّ الرَّضَاعِ وَإِنْ تَفْطِمْهُ يَنْفَطِمِ",
            translit: "Ḥubbir raḍā‛i wa in tafṭimhu yanfaṭim",
            translation:
              "In love with suckling; but wean it, and it’s weaned finally.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "فَاصْرِفْ هَوَاهَا وَحَاذِرْ أَنْ تُوَلِّيَهُ",
            translit: "Faṣrif hawāhā wa ḥādhir an tuwalliyah",
            translation: "So fight its whim, and beware of giving power to it;",
          }),
          new QasidaEntryModel({
            arabic: "إِنَّ الْهَوٰى مَا تَوَلَّى يُصْمِ أَوْ يَصِمِ",
            translit: "Innal hawā mā tawallā yuṣmi aw yaṣim",
            translation: "When whim’s empowered, it kills or damages markedly.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَرَاعِهَا وَهْيَ فِي الْأَعْمَالِ سَائِمَةٌ",
            translit: "Wa rā‛ihā wa hya fil a‛māli sā’imah",
            translation: "And shepherd it carefully as it is grazing in deeds;",
          }),
          new QasidaEntryModel({
            arabic: "وَإِنْ هِيَ اسْتَحْلَتِ الْمَرْعٰى فَلَا تُسِمِ",
            translit: "Wa in hiyastaḥlatil mar‛ā falā tusim",
            translation:
              "And if the pasture you find it fancies, don’t let it be.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "كَمْ حَسَّنَتْ لَذَّةً لِلْمَرْءِ قَاتِلَةً",
            translit: "Kam ḥassanat ladhdhatan lil mar’i qātilah",
            translation:
              "How many times it’s convinced a man of killer delights—",
          }),
          new QasidaEntryModel({
            arabic: "مِنْ حَيْثُ لَمْ يَدْرِ أَنَّ السُّمَّ فِي الدَّسَمِ",
            translit: "Min ḥaythu lam yadri annas summa fid dasam",
            translation: "While blind to the poison in the gravy so savory!",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَاخْشَ الدَّسَائِسَ مِنْ جُوْعٍ وَمِنْ شِبَعٍ",
            translit: "Wakhshad dasā’isa min jū‛in wa min shiba‛",
            translation: "Beware the ambush of being hungry and being full;",
          }),
          new QasidaEntryModel({
            arabic: "فَرُبَّ مَخْمَصَةٍ شَرٌّ مِنَ التُّخَمِ",
            translit: "Fa-rubba makhmaṣatin sharrun minat tukham",
            translation: "Starvation at times is even worse than satiety.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَاسْتَفْرِغِ الدَّمْعَ مِنْ عَيْنٍ قَدِ امْتَلَأَتْ",
            translit: "Wastafrighid dam‛a min ‛aynin qadimtala’at",
            translation:
              "And void of tears eyes that have been stuffed with forbidden things.",
          }),
          new QasidaEntryModel({
            arabic: "مِنَ الْمَحَارِمِ وَالْزَمْ حِمْيَةَ النَّدَمِ",
            translit: "Minal maḥārimi walzam ḥimyatan nadam",
            translation: "Keep in the shelter of pure repentance unceasingly.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَخَالِفِ النَّفْسَ وَالشَّيْطَانَ وَاعْصِهِمَا",
            translit: "Wa khālifin nafsa wash shayṭāna wa‛ṣihumā",
            translation: "And contradict both the Self and Devil, and disobey!",
          }),
          new QasidaEntryModel({
            arabic: "وَإِنْ هُمَا مَحَّضَاكَ النُّصْحَ فَاتَّهِمِ",
            translit: "Wa in humā maḥḥaḍākan nuṣḥa fattahim",
            translation:
              "And if they give true advice to you, still look skeptically.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَلَا تُطِعْ مِنْهُمَا خَصْمًا وَلَا حَكَمًا",
            translit: "Wa lā tuṭi‛ minhumā khaṣman wa lā ḥakamā",
            translation: "And do not settle with either as your lawyer or foe;",
          }),
          new QasidaEntryModel({
            arabic: "فَأَنْتَ تَعْرِفُ كَيْدَ الْخَصْمِ وَالْحَكَمِ",
            translit: "Fa-anta ta‛rifu kaydal khaṣmi wal ḥakam",
            translation:
              "You’re well aware of a lawyer’s and a foe’s treachery.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "أَسْتَغْفِرُ ٱللَّهَ مِنْ قَوْلٍ بِلَا عَمَلٍ",
            translit: "Astaghfirullāha min qawlin bilā ‛amal",
            translation:
              "I ask for pardon from God for empty word with no deed;",
          }),
          new QasidaEntryModel({
            arabic: "لَقَدْ نَسَبْتُ بِهِ نَسْلًا لِذِي عُقُمِ",
            translit: "Laqad nasabtu bihī naslan lidhī ‛uqum",
            translation: "I have ascribed by it to a sterile man progeny.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "أَمَرْتُكَ الْخَيْرَ لَكِنْ مَا ائْتَمَرْتُ بِهِ",
            translit: "Amartukal khayra lākin mā’tamartu bih",
            translation:
              "I’ve ordered you to do good, but have ignored it, myself;",
          }),
          new QasidaEntryModel({
            arabic: "وَمَا اسْتَقَمْتُ فَمَا قَوْلِي لَكَ اسْتَقِمِ",
            translit: "Wa mastaqamtu famā qawlī lakastaqim",
            translation: "I’m not upstanding, so who am I to tell you to be?",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَلَا تَزَوَّدْتُ قَبْلَ الْمَوْتِ نَافِلَةً",
            translit: "Wa lā tazawwadtu qablal mawti nāfilah",
            translation:
              "I haven’t packed extra deeds in preparation for death;",
          }),
          new QasidaEntryModel({
            arabic: "وَلَمْ أُصَلِّ سِوٰى فَرْضٍ وَلَمْ أَصُمِ",
            translit: "Wa lam uṣalli siwā farḍin wa lam aṣum",
            translation:
              "I haven’t prayed, haven’t fasted, but the compulsory.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "ظَلَمْتُ سُنَّةَ مَنْ أَحْيَا الظَّلَامَ إِلىٰ",
            translit: "Ẓalamtu sunnata man aḥyaẓ ẓalāma ilā",
            translation: "I’ve violated the way of him who livened the dark,",
          }),
          new QasidaEntryModel({
            arabic: "أَنِ اشْتَكَتْ قَدَمَاهُ الضُّرَّ مِنْ وَرَمِ",
            translit: "Anishtakat qadamāhuḍ ḍurra min waram",
            translation:
              "Until his feet had complained of swelling up painfully;",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَشَدَّ مِنْ سَغَبٍ أَحْشَاءَهُ وَطَوٰى",
            translit: "Wa shadda min saghabin aḥshā’ahū wa ṭawā",
            translation:
              "And out of hunger, would bind his abdomen and would wrap",
          }),
          new QasidaEntryModel({
            arabic: "تَحْتَ الْحِجَارَةِ كَشْحًا مُتْرَفَ الْأَدَمِ",
            translit: "Taḥtal ḥijārati kashḥan mutrafal adam",
            translation:
              "Beneath a hard stone a waist whose skin is so velvety.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَرَاوَدَتْهُ الْجِبَالُ الشُّمُّ مِنْ ذَهَبٍ",
            translit: "Wa rāwadat-hul jibālush shummu min dhahab",
            translation:
              "The lofty mountains made into gold for him tried to be",
          }),
          new QasidaEntryModel({
            arabic: "عَنْ نَفْسِهِ فَأَرَاهَا أَيَّمَا شَمَمِ",
            translit: "‛An nafsihī fa-arāhā ayyamā shamam",
            translation:
              "A way to bait him, so he true loftiness let them see.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَأَكَّدَتْ زُهْدَهُ فِيْهَا ضَرُوْرَتُهُ",
            translit: "Wa akkadat zuhdahū fīhā ḍarūratuh",
            translation:
              "His “poverty” only strengthened his disinterest in them;",
          }),
          new QasidaEntryModel({
            arabic: "إِنَّ الضَّرُوْرَةَ لَا تَعْدُوْ عَلَى الْعِصَمِ",
            translit: "Innaḍ ḍarūrata lā ta‛dū ‛alal ‛iṣam",
            translation: "For never are protectees assaulted by poverty.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَکَيْفَ تَدْعُو إِلَی الدُّنْيَا ضَرُورَةُ مَنْ",
            translit: "Wa kayfa tad‛ū ilad dunyā ḍarūratu man",
            translation:
              "How could it tempt to this world—the “poverty” of him who",
          }),
          new QasidaEntryModel({
            arabic: "لَوْلَاهُ لَمْ تَخْرُجِ الدُّنْيَا مِنَ الْعَدَمِ",
            translit: "Lawlāhu lam takhrujid dunyā minal ‛adam",
            translation:
              "If not for him, the whole world would not have been made to be.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "مُحَمَّدٌ سَيِّدُ الْكَوْنَيْنِ وَالثَّقَلَيْنِ",
            translit: "Muḥammadun sayyidul kawnayni wath thaqalayn",
            translation:
              "Muhammad, the master of both worlds and both beings and",
          }),
          new QasidaEntryModel({
            arabic: "وَالْفَرِيْقَيْنِ مِنْ عُرْبٍ وَمِنْ عَجَمِ",
            translit: "Wal farīqayni min ‛urbin wa min ‛ajam",
            translation: "Both groups: the Arabs and the non-Arab community;",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "نَبِيُّنَا الْآمِرُ النَّاهِي فَلَا أَحَدٌ",
            translit: "Nabiyyunal āmirun nāhī falā aḥad",
            translation: "Our prophet, who is commander and forbidder—there is",
          }),
          new QasidaEntryModel({
            arabic: "أَبَرَّ فِي قَوْلِ لَا مِنْهُ وَلَا نَعَمِ",
            translit: "Abarra fī qawli lā minhu wa lā na‛am",
            translation: "No one more true in his saying no or yes than is he.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "هُوَ الْحَبِيبُ الَّذِي تُرْجٰى شَفَاعَتُهُ",
            translit: "Huwal ḥabību alladhī turjā shafā‛atuh",
            translation:
              "He is the loved one whose intercession we’re hopeful of,",
          }),
          new QasidaEntryModel({
            arabic: "لِكُلِّ هَوْلٍ مِنَ الْأَهْوَالِ مُقْتَحَمِ",
            translit: "Likulli hawlin minal ahwāli muqtaḥam",
            translation: "At every horror to hit—yes, every calamity.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "دَعَا إِلىٰ ٱللَّهِ فَالْمُسْتَمْسِكُونَ بِهِ",
            translit: "Da‛ā ilallāhi fal mustamsikūna bih",
            translation: "He has invited to God, so all who grip onto him",
          }),
          new QasidaEntryModel({
            arabic: "مُسْتَمْسِكُونَ بِحَبْلٍ غَيْرِ مُنْفَصِمِ",
            translit: "Mustamsikūna biḥablin ghayri munfaṣim",
            translation: "Are gripping rope that will never fray for eternity.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "فَاقَ النَّبِيِّينَ فِي خَلْقٍ وَفِي خُلُقٍ",
            translit: "Fāqan nabiyyīna fī khalqin wa fī khuluq",
            translation:
              "He tops the prophets in both appearance and character;",
          }),
          new QasidaEntryModel({
            arabic: "وَلَمْ يُدَانُوهُ فِي عِلْمٍ وَلَا كَرَمِ",
            translit: "Wa lam yudānūhu fī ‛ilmin wa lā karam",
            translation:
              "They don’t approach him in knowledge or in gen’rosity.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَكُلُّهُمْ مِنْ رَسُولِ ٱللَّهِ مُلْتَمِسٌ",
            translit: "Wa kulluhum min rasūlillāhi multamis",
            translation: "And all of them are receiving from Allah’s Messenger",
          }),
          new QasidaEntryModel({
            arabic: "غَرْفًا مِنَ الْبَحْرِ أَوْ رَشْفًا مِنَ الدِّيَمِ",
            translit: "Gharfan minal baḥri aw rashfan minad diyam",
            translation:
              "A sip from down-pouring rain or handful scooped from the sea.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَوَاقِفُونَ لَدَيْهِ عِنْدَ حَدِّهِمِ",
            translit: "Wa wāqifūna ladayhi ‛inda ḥaddihim",
            translation:
              "And all are standing before him at their own limits fixed:",
          }),
          new QasidaEntryModel({
            arabic: "مِنْ نُقْطَةِ الْعِلْمِ أَوْ مِنْ شَكْلَةِ الْحِكَمِ",
            translit: "Min nuqṭatil ‛ilmi aw min shaklatil ḥikam",
            translation: "A dot of knowledge or mark from words of sagacity.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "فَهْوَ الَّذي تَمَّ مَعْنَاهُ وَصُوْرَتُهُ",
            translit: "Fahuwal ladhī tamma ma‛nāhu wa ṣūratuh",
            translation:
              "He is the one with perfected essence and outward form;",
          }),
          new QasidaEntryModel({
            arabic: "ثُمَّ اصْطَفَاهُ حَبِيبًا بَارِيءُ النَّسَمِ",
            translit: "Thummaṣ ṭafāhu ḥabīban bāri’un nasam",
            translation: "Picked as the love of the Maker of all humanity.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "مُنَزَّهٌ عَنْ شَرِيكٍ فِي مَحَاسِنِهِ",
            translit: "Munazzahun ‛an sharīkin fī maḥāsinih",
            translation: "Beyond a partner in his so beautiful qualities;",
          }),
          new QasidaEntryModel({
            arabic: "فَجَوْهَرُ الْحُسْنِ فِيهِ غَيْرُ مُنْقَسِمِ",
            translit: "Fajawharul ḥusni fīhi ghayru munqasim",
            translation: "Yes, undivided in him is beauty’s whole entity.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "دَعْ مَا ادَّعَتْهُ النَّصَارٰى فِي نَبِيِّهِمِ",
            translit: "Da‛ mā dda‛athun naṣārā fī nabiyyihim",
            translation:
              "Avoid what Christians have claimed about their own messenger;",
          }),
          new QasidaEntryModel({
            arabic: "وَاحْكُمْ بِمَا شِئْتَ مَدْحًا فِيهِ وَاحْتَكِمِ",
            translit: "Waḥkum bimā shi’ta madḥan fīhi waḥtakim",
            translation:
              "And give to him any praise you wish, and praise sensibly.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَانْسُبْ إِلىٰ ذَاتِهِ مَا شِئْتَ مِنْ شَرَفٍ",
            translit: "Wansub ilā dhātihī mā shi’ta min sharaf",
            translation: "Ascribe to his person what you wish of nobility;",
          }),
          new QasidaEntryModel({
            arabic: "وَانْسُبْ إِلىٰ قَدْرِهِ مَا شِئْتَ مِنْ عِظَمِ",
            translit: "Wansub ilā qadrihī mā shi’ta min ‛iẓam",
            translation: "Ascribe to his stature what you wish of immensity.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "فَإِنَّ فَضْلَ رَسُولِ ٱللَّهِ لَيْسَ لَهُ",
            translit: "Fa-inna faḍla rasūlillāhi laysa lah",
            translation:
              "Indeed, Allah’s Messenger’s perfection has no frontier",
          }),
          new QasidaEntryModel({
            arabic: "حَدٌّ فَيُعْرِبَ عنْهُ نَاطِقٌ بِفَمِ",
            translit: "Ḥaddun fayu‛riba ‛anhu nāṭiqun bifam",
            translation: "That any speaker could ever verbalize orally.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "لَوْ نَاسَبَتْ قَدْرَهُ آيَاتُهُ عِظَمًا",
            translit: "Law nāsabat qadrahū āyātuhū ‛iẓamā",
            translation:
              "And were his marvels to match his worth in greatness, his name,",
          }),
          new QasidaEntryModel({
            arabic: "أَحْيَا اسْمُهُ حِينَ يُدْعَى دَارِسَ الرِّمَمِ",
            translit: "Aḥyā smuhū ḥīna yud‛ā dārisar rimam",
            translation:
              "When called, would give life to bones decayed to nihility.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "لَمْ يَمْتَحِنَّا بِمَا تَعْيَا الْعُقُولُ بِهِ",
            translit: "Lam yamtaḥinnā bimā ta‛yal ‛uqūlu bih",
            translation:
              "He tried us not, from concern, with things that boggle the mind;",
          }),
          new QasidaEntryModel({
            arabic: "حِرْصًا عَلَيْنَا فَلَمْ نَرْتَبْ وَلَمْ نَهِمِ",
            translit: "Ḥirṣan ‛alaynā falam nartab wa lam nahim",
            translation: "And so we haven’t faced any doubt or perplexity.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "أَعْيَ الْوَرٰى فَهْمُ مَعْنَاهُ فَلَيْسَ يُرٰى",
            translit: "A‛yal warā fahmu ma‛nāhu falaysa yurā",
            translation: "Conceiving his meaning has exhausted the universe;",
          }),
          new QasidaEntryModel({
            arabic: "فِي الْقُرْبِ وَالْبُعْدِ فِيهِ غَيْرُ مُنْفَحِمِ",
            translit: "Fil qurbi wal bu‛di fīhi ghayru munfaḥim",
            translation:
              "So near or far, one not dumbstruck by it you will not see.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "كَالشَّمْسِ تَظْهَرُ لِلْعَيْنَيْنِ مِنْ بُعُدٍ",
            translit: "Kash shamsi taẓharu lil ‛aynayni min bu‛ud",
            translation:
              "Much like the sun: from afar it does appear small to eyes,",
          }),
          new QasidaEntryModel({
            arabic: "صَغِيرَةً وَتُكِلُّ الطَّرْفَ مِنْ أَمَمِ",
            translit: "Ṣaghīratan wa tukillut ṭarfa min amam",
            translation: "And would impair any vision when in proximity.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَكَيْفَ يُدْرِكُ فِي الدُّنْيا حَقِيقَتَهُ",
            translit: "Wa kayfa yudriku fid dunyā ḥaqīqatah",
            translation:
              "And how could people asleep, distracted from him by dreams,",
          }),
          new QasidaEntryModel({
            arabic: "قَوْمٌ نِيَامٌ تَسَلَّوْا عَنْهُ بِالْحُلُمِ",
            translit: "Qawmun niyāmun tasallaw ‛anhu bil ḥulum",
            translation: "Begin to grasp in the present world his reality!",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "فَمَبْلَغُ الْعِلْمِ فِيهِ أَنَّهُ بَشَرٌ",
            translit: "Famablaghul ‛ilmi fīhi annahū bashar",
            translation: "The peak of knowledge about him is that he is a man",
          }),
          new QasidaEntryModel({
            arabic: "وَأَنَّهُ خَيْرُ خَلْقِ ٱللَّهِ كُلِّهِمِ",
            translit: "Wa annahū khayru khalqillāhi kullihim",
            translation: "And is the best of Allah’s creation, entirely.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَكُلُّ آيٍ أَتَى الرُّسْلُ الْكِرَامُ بِهَا",
            translit: "Wa kullu āyin atar rusulul kirāmu bihā",
            translation:
              "And all the marvels the noble messengers have conveyed",
          }),
          new QasidaEntryModel({
            arabic: "فَإِنَّمَا اتَّصَلَتْ مِنْ نُورِهِ بِهِمِ",
            translit: "Fa-innamattaṣalat min nūrihī bihim",
            translation:
              "Have come to them from the light of Ahmad exclusively.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "فَإِنَّهُ شَمْسُ فَضْلٍ هُمْ كَوَاكِبُهَا",
            translit: "Fa-innahū shamsu faḍlin hum kawākibuhā",
            translation:
              "He is the Sun of esteem, to which they are as if moons:",
          }),
          new QasidaEntryModel({
            arabic: "يُظْهِرْنَ أَنْوَارَهَا لِلنَّاسِ فِي الظُّلَمِ",
            translit: "Yuẓhirna anwārahā lin nāsi fiẓ ẓulam",
            translation: "Reflecting its lights in darknesses to humanity.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "أَكْرِمْ بِخَلْقِ نَبِيٍّ زَانَهُ خُلُقٌ",
            translit: "Akrim bikhalqi nabiyyin zānahū khuluq",
            translation:
              "How grand the form of a Prophet brightened by character,",
          }),
          new QasidaEntryModel({
            arabic: "بِالْحُسْنِ مُشْتَمِلٍ بِالْبِشْرِ مُتَّسِمِ",
            translit: "Bil ḥusni mushtamilin bil bishri muttasim",
            translation: "Enveloped by handsomeness, distinguished by jollity!",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "كَالزَّهْرِ فِي تَرَفٍ وَالْبَدْرِ فِي شَرَفٍ",
            translit: "Kaz zahri fī tarafin wal badri fī sharaf",
            translation:
              "Like flowers in fineness, the full moon in ascendancy,",
          }),
          new QasidaEntryModel({
            arabic: "وَالْبَحْرِ فِي كَرَمٍ وَالدَّهْرِ فِي هِمَمِ",
            translit: "Wal baḥri fī karamin wad dahri fī himam",
            translation: "The ocean in giving, and all time in tenacity.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "كَأَنَّهُ وَهْوَ فَرْدٌ مِنْ جَلَالَتِهِ",
            translit: "Ka-annahū wa huwa fardun min jalālatih",
            translation:
              "When he’s alone and you meet him, he is like one amid",
          }),
          new QasidaEntryModel({
            arabic: "فِيْ عَسْكَرٍ حِينَ تَلْقَاهُ وَفِي حَشَمِ",
            translit: "Fī ‛askarin ḥīna talqāhu wa fī ḥasham",
            translation: "An army and entourage, because of his majesty.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "كَأَنَّمَا اللُّؤْلُؤُ الْمَكْنُونُ فِي صَدَفٍ",
            translit: "Ka-annamal lu’lu’ul maknūnu fī ṣadaf",
            translation:
              "From treasure chests of his eloquence and his beaming grin",
          }),
          new QasidaEntryModel({
            arabic: "مِنْ مَعْدِنَيْ مَنْطِقٍ مِنْهُ وَمُبْتَسِمِ",
            translit: "Min ma‛dinay manṭiqin minhu wa mubtasim",
            translation:
              "Do seem to be pearls preserved within their shells preciously.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "لَا طِيبَ يَعْدِلُ تُرْبًا ضَمَّ أَعْظُمَهُ",
            translit: "Lā ṭība ya‛dilu turban ḍamma a‛ẓumah",
            translation:
              "No scent compares to the earth embracing his blessed form;",
          }),
          new QasidaEntryModel({
            arabic: "طُوْبٰى لِمُنْتَشِقٍ مِنْهُ وَمُلْتَثِمِ",
            translit: "Ṭūbā limuntashiqin minhu wa multathim",
            translation: "For him who sniffs it or kisses it what felicity!",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "أَبَانَ مَوْلِدُهُ عَنْ طِيبِ عُنْصُرِهِ",
            translit: "Abāna mawliduhū ‛an ṭībi ‛unṣurih",
            translation: "His noble birth did reveal the purity of his roots.",
          }),
          new QasidaEntryModel({
            arabic: "يَا طِيبَ مُبْتَدَإٍ مِنْهُ وَمُخْتَتَمِ",
            translit: "Yā ṭība mubtada’in minhu wa mukhtatam",
            translation: "How pure the outset of them as well as finality!",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَوْمٌ تَفَرَّسَ فِيهِ الْفُرْسُ أَنَّهُمُ",
            translit: "Yawmun tafarrasa fīhil fursu annahum",
            translation:
              "A day the Persians perceived that they indeed had been warned",
          }),
          new QasidaEntryModel({
            arabic: "قَدْ أُنْذِرُوا بِحُلُولِ الْبُؤْسِ وَالنِّقَمِ",
            translit: "Qad undhirū biḥulūlil bu’si wan niqam",
            translation: "Of the occurrence of suffering and adversity.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَبَاتَ إِيوَانُ كِسْرٰى وَهْوَ مُنْصَدِعٌ",
            translit: "Wa bāta īwānu kisrā wa huwa munṣada‛",
            translation:
              "The Arch of Khosrau had passed the night while falling apart;",
          }),
          new QasidaEntryModel({
            arabic: "كَشَمْلِ أَصْحَابِ كِسْرٰى غَيْرَ مُلْتَئِمِ",
            translit: "Kashamli aṣḥābi kisrā ghayra multa’im",
            translation:
              "Just like the status of Khosrau’s peers: without unity.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَالنَّارُ خَامِدَةُ الْأَنْفَاسِ مِنْ أَسَفٍ",
            translit: "Wan nāru khāmidatul anfāsi min asaf",
            translation: "The fire was short of breath out of regret over it.",
          }),
          new QasidaEntryModel({
            arabic: "عَلَيْهِ وَالنَّهْرُ سَاهِي الْعَيْنِ مِنْ سَدَمِ",
            translit: "‛Alayhi wan nahru sāhil ‛ayni min sadam",
            translation: "The river lost all its current out of despondency.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَسَاءَ سَاوَةَ أَنْ غَاضَتْ بُحَيْرَتُهَا",
            translit: "Wa sā’a sāwata an ghāḍat buḥayratuhā",
            translation: "It saddened Sawa to find the drying up of its lake,",
          }),
          new QasidaEntryModel({
            arabic: "وَرُدَّ وَارِدُهَا بِالْغَيْظِ حِينَ ظَمِي",
            translit: "Wa rudda wāriduhā bil ghayẓi ḥīna ẓamī",
            translation:
              "And thirsty seekers returning from the place angrily.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "كَأَنَّ بِالنَّارِ مَا بِالْمَاءِ مِنْ بَلَلٍ",
            translit: "Ka-anna bin nāri mā bil mā’i min balal",
            translation:
              "As if the fire had gotten water’s wetness from grief;",
          }),
          new QasidaEntryModel({
            arabic: "حُزْناً وَبِالْمَاءِ مَا بِالنَّارِ مِنْ ضَرَمِ",
            translit: "Ḥuznan wa bil mā’i mā bin nāri min ḍaram",
            translation: "And water had burnt up as a fire burns seethingly.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَالْجِنُّ تَهْتِفُ وَالْأَنْوَارُ سَاطِعَةٌ",
            translit: "Wal jinnu tahtifu wal anwāru sāṭi‛ah",
            translation:
              "The jinn were speaking aloud, and lights were shining so bright;",
          }),
          new QasidaEntryModel({
            arabic: "وَالْحَقُّ يَظْهَرُ مِنْ مَعْنًى  وَمِنْ كَلِمِ",
            translit: "Wal ḥaqqu yaẓharu min ma‛nan wa min kalim",
            translation: "The Truth is made manifest in signal and verbally.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "عَمُوا وَصَمُّوا فَإِعْلَانُ الْبَشَائِرِ لَمْ",
            translit: "‛Amū wa ṣammū fa-i‛lānul bashā’iri lam",
            translation:
              "But blind and deaf they were so the happy news went unheard;",
          }),
          new QasidaEntryModel({
            arabic: "تُسْمَعْ وَبَارِقَةُ الْإِنْذَارِ لَمْ تُشَمِ",
            translit: "Tusma‛ wa bāriqatul indhāri lam tushim",
            translation:
              "And flashes of lightning as a warning they didn’t see.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "مِنْ بَعْدِ مَا أَخْبَرَ الْأَقْوَامَ كَاهِنُهُمْ",
            translit: "Min ba‛di mā akhbaral aqwāma kāhinuhum",
            translation: "All after their fortune teller notified all the folk",
          }),
          new QasidaEntryModel({
            arabic: "بِأَنَّ دِينَهُمُ الْمُعْوَجَّ لَمْ يَقُمِ",
            translit: "Bi-anna dīnahumul mu‛wajja lam yaqum",
            translation:
              "Their old religion so crooked soon would no longer be.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَبَعْدَ مَا عَايَنُوا فِي الْأُفْقِ مِنْ شُهُبٍ",
            translit: "Wa ba‛da mā ‛āyanū fil ufuqi min shuhub",
            translation:
              "And after they eyed in the horizons the shooting stars",
          }),
          new QasidaEntryModel({
            arabic: "مُنْقَضَّةٍ وَفْقَ مَا فِي الْأَرْضِ مِنْ صَنَمِ",
            translit: "Munqaḍḍatin wafqa mā fil arḍi min ṣanam",
            translation: "All crashing like statues in the earth for idolatry.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "حَتّٰى غَدَا عَنْ طَرِيقِ الْوَحْيِ مُنْهَزِمٌ",
            translit: "Ḥattā ghadā ‛an ṭarīqil waḥyi munhazim",
            translation: "Until from the source of revelation, up in the sky,",
          }),
          new QasidaEntryModel({
            arabic: "مِنَ الشَّيَاطِينِ يَقْفُوا إِثْرَ مُنْهَزِمِ",
            translit: "Minash shayāṭīni yaqfū ithra munhazim",
            translation: "One after the other, each retreating demon did flee.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "كَأَنَّهُمْ هَرَبًا أَبْطَالُ أَبْرَهَةٍ",
            translit: "Ka-annahum haraban abṭālu abrahah",
            translation:
              "They were when fleeing just like the heroes of Abrahah,",
          }),
          new QasidaEntryModel({
            arabic: "أَوْ عَسْكَرٌ بِالْحَصٰى مِنْ رَاحَتَيْهِ رُمِي",
            translit: "Aw ‛askarun bil ḥaṣā min rāḥatayhi rumī",
            translation:
              "Or like a pelted-with-pebbles-from-his-hands infantry.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "نَبْذًا بِهِ بَعْدَ تَسْبِيحٍ بِبَطْنِهِمَا",
            translit: "Nabdhan bihī ba‛da tasbīḥin bibaṭnihimā",
            translation:
              "Hurled after having extolled while in the palms of his hands;",
          }),
          new QasidaEntryModel({
            arabic: "نَبْذَ الْمُسَبِّحِ مِنْ أَحْشَاءِ مُلْتَقِمِ",
            translit: "Nabdhal musabbiḥi min aḥshā’i multaqim",
            translation:
              "Hurled like the swallowed extoller from the gut cavity.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "جَاءَتْ لِدَعْوَتِهِ الْأَشْجَارُ سَاجِدَةً",
            translit: "Jā’at lida‛watihil ashjāru sājidah",
            translation:
              "The trees had come for his call, prostrate in humility;",
          }),
          new QasidaEntryModel({
            arabic: "تَمْشِي إِلَيْهِ عَلىٰ سَاقٍ بِلَا قَدَمِ",
            translit: "Tamshī ilayhi ‛alā sāqin bilā qadam",
            translation:
              "They came to him on their trunks, like footless legs, walking free.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "كَأَنَّمَا سَطَرَتْ سَطْرًا لِمَا كَتَبَتْ",
            translit: "Ka-annamā saṭarat saṭran limā katabat",
            translation:
              "As if they had drawn along the way a straight line for what",
          }),
          new QasidaEntryModel({
            arabic: "فُرُوعُهَا مِنْ بَدِيعِ الْخَطِّ بِاللَّقَمِ",
            translit: "Furū‛uhā min badī‛il khaṭṭi billaqam",
            translation:
              "Their branches had written in the finest calligraphy.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "مِثْلَ الْغَمَامَةِ أَنَّى سَارَ سَائِرَةً",
            translit: "Mithlal ghamāmati annā sāra sā’irah",
            translation:
              "Just like the cloud moving with him as he moved anywhere;",
          }),
          new QasidaEntryModel({
            arabic: "تَقِيهِ حَرَّ وَطِيسٍ لِلْهَجِيرِ حَمِي",
            translit: "Taqīhi ḥarra waṭīsin lil hajīri ḥumī",
            translation:
              "From noon’s intense oven heat protecting him constantly.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "أَقْسَمْتُ بِالْقَمَرِ الْمُنْشَقِّ إِنَّ لَهُ",
            translit: "Aqsamtu bil qamaril munshaqqi inna lah",
            translation:
              "I swear an oath by the moon, which split in two, that it has",
          }),
          new QasidaEntryModel({
            arabic: "مِنْ قَلْبِهِ نِسْبَةً مَبْرُورَةَ الْقَسَمِ",
            translit: "Min qalbihī nisbatan mabrūratal qasam",
            translation: "A likeness to his pure heart—an oath of veracity.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَمَا حَوَى الْغَارُ مِنْ خَيْرٍ وَمِنْ كَرَمٍ",
            translit: "Wa mā ḥawāl ghāru min khayrin wa min karam",
            translation: "And what the cave did contain of good and nobility;",
          }),
          new QasidaEntryModel({
            arabic: "وَكُلُّ طَرْفٍ مِنَ الْكُفَّارِ عَنْهُ عَمِي",
            translit: "Wa kullu ṭarfin minal kuffāri ‛anhu ‛amī",
            translation:
              "With every look from the disbelievers too blind to see.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "فَالصِّدْقُ فِي الْغَارِ وَالصِّدِّيقُ لَمْ يَرِمَا",
            translit: "Faṣ ṣidqu fil ghāri waṣ ṣiddīqu lam yarimā",
            translation:
              "The Truth and Truthful in Faith inside the cave hadn’t moved;",
          }),
          new QasidaEntryModel({
            arabic: "وَهُمْ يَقُولُونَ مَا بِالْغَارِ مِنْ أَرِمِ",
            translit: "Wa hum yaqūlūna mā bil ghāri min arim",
            translation:
              "All while they were saying that inside the cave none could be.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "ظَنُّوا الْحَمَامَ وَظَنُّوا الْعَنْكَبُوتَ عَلىٰ",
            translit: "Ẓannul ḥamāma wa ẓannul ‛ankabūta ‛alā",
            translation:
              "They thought no dove hovered and no spider spun any web,",
          }),
          new QasidaEntryModel({
            arabic: "خَيْرِ الْبَرِيَّةِ لَمْ تَنْسُجْ وَلَمْ تَحُمِ",
            translit: "Khayril bariyyati lam tansuj wa lam taḥum",
            translation: "For him, the Best of Creation—thinking its vacancy.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وِقَايَةُ ٱللَّهِ أَغْنَتْ عَنْ مُضَاعَفَةٍ",
            translit: "Wiqāyatullāhi aghnat ‛an muḍā‛afah",
            translation:
              "Protection from God made needless reinforced armature,",
          }),
          new QasidaEntryModel({
            arabic: "مِنَ الدُّرُوعِ وَعَنْ عَالٍ مِنَ الْأُطُمِ",
            translit: "Minad durū‛i wa ‛an ‛ālin minal uṭum",
            translation: "Or towering citadels providing security.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "مَا سَامَنِي الدَّهْرُ ضَيْماً وَاسْتَجَرْتُ بِهِ",
            translit: "Mā sāmanid dahru ḍayman wastajartu bih",
            translation:
              "No day has time gone to harm me and I have sought his care,",
          }),
          new QasidaEntryModel({
            arabic: "إِلَّا وَنِلْتُ جِوَارًا مِنْهُ لَمْ يُضَمِ",
            translit: "Illā wa niltu jiwāran minhu lam yuḍam",
            translation:
              "But that I have gotten care from him, without mockery.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَلَا الْتَمَسْتُ غِنَى الدَّارَيْنِ مِنْ يَدِهِ",
            translit: "Wa lāltamastu ghinad dārayni min yadih",
            translation:
              "Nor have I asked of the riches of both worlds from his hand,",
          }),
          new QasidaEntryModel({
            arabic: "إِلَّا اسْتَلَمْتُ النَّدٰى مِنْ خَيْرِ مُسْتَلَمِ",
            translit: "Illastalamtun nadā min khayri mustalam",
            translation:
              "Without largesse from the best of givers coming to me.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "لَا تُنْكِرِ الْوَحْيَ مِنْ رُؤْيَاهُ إِنَّ لَهُ",
            translit: "Lā tunkiril waḥya min ru’yāhu inna lah",
            translation: "Do not deny revelation from his dreaming, because",
          }),
          new QasidaEntryModel({
            arabic: "قَلْبًا إِذَا نَامَتِ الْعَيْنَانِ لَمْ يَنَمِ",
            translit: "Qalban idhā nāmatil ‛aynāni lam yanam",
            translation:
              "His heart, though his eyes may shut, is open wide and does see.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَذَاكَ حِينَ بُلُوغٍ مِنْ نُبُوَّتِهِ",
            translit: "Wa dhāka ḥīna bulūghin min nubuwwatih",
            translation:
              "And that was so at the very start of his prophethood:",
          }),
          new QasidaEntryModel({
            arabic: "فَلَيْسَ يُنْكَرُ فِيهِ حَالُ مُحْتَلِمِ",
            translit: "Falaysa yunkaru fīhi ḥālu muḥtalim",
            translation:
              "So with that state of the dreaming no one can disagree.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "تَبَارَكَ ٱللَّهُ مَا وَحْيٌ بِمُكْتَسَبٍ",
            translit: "Tabārakallāhu mā waḥyun bimuktasab",
            translation:
              "How blest is God: revelation isn’t something attained;",
          }),
          new QasidaEntryModel({
            arabic: "وَلا نَبِيٌّ عَلَى غَيْبٍ بِمُتَّهَمِ",
            translit: "Wa lā nabiyyun ‛alā ghaybin bimuttaham",
            translation: "Nor is a prophet suspected in what we do not see.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "كَمْ أَبْرَأَتْ وَصِبًا بِاللَّمْسِ رَاحَتُهُ",
            translit: "Kam abra’at waṣaban bil lamsi rāḥatuh",
            translation:
              "How many times has his palm by touch relieved the unwell,",
          }),
          new QasidaEntryModel({
            arabic: "وَأَطْلَقَتْ أَرِبًا مِنْ رِبْقَةِ اللَّمَمِ",
            translit: "Wa aṭlaqat araban min ribqatil lamam",
            translation:
              "And freed the helpless from in the noose of insanity.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَأَحْيَتِ السَّنَةَ الشَّهْبَاءَ دَعْوَتُهُ",
            translit: "Wa aḥyatis sanatash shahbā’a da‛watuh",
            translation:
              "His call gave life to a gray and barren year full of drought;",
          }),
          new QasidaEntryModel({
            arabic: "حَتَى حَكَتْ غُرَّةً فِي الْأَعْصُرِ الدُّهُمِ",
            translit: "Ḥattā ḥakat ghurratan fil a‛ṣurid duhum",
            translation: "Till it became like a star in ages of ebony;",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "بِعَارِضٍ جَادَ أَوْ خِلْتَ الْبِطَاحَ بِهَا",
            translit: "Bi‛āriḍin jāda aw khiltal biṭāḥa bihā",
            translation:
              "With teeming clouds—you’d have thought the valleys had rivers flow",
          }),
          new QasidaEntryModel({
            arabic: "سَيْبٌ مِنَ الْيَمِّ أَوْ سَيْلٌ مِنَ الْعَرِمِ",
            translit: "Saybun minal yammi aw saylun minal ‛aram",
            translation:
              "In from the sea, or a flooded dam that gushed viciously.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "دَعْنِي وَوَصْفِي آيَاتٍ لَهُ ظَهَرَتْ",
            translit: "Da‛nī wa waṣfī āyātin lahū ẓaharat",
            translation:
              "Leave me alone to describe his miracles, which are plain",
          }),
          new QasidaEntryModel({
            arabic: "ظَهُورَ نَارِ الْقِرٰى لَيْلًا عَلَى عَلَمِ",
            translit: "Ẓuhūra nāril qirā laylan ‛alā ‛alam",
            translation: "As nightly fire on mountains, lit as a courtesy.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "فَالدُّرُّ يَزْدَادُ حُسْنًا وَهْوَ مُنْتَظِمٌ",
            translit: "Fad durru yazdādu ḥusnan wa huwa muntaẓim",
            translation:
              "For pearls increase in their beauty when arranged on a string,",
          }),
          new QasidaEntryModel({
            arabic: "وَلَيْسَ يَنْقُصُ قَدْرًا غَيْرَ مُنْتَظِمِ",
            translit: "Wa laysa yanquṣu qadran ghayra muntaẓim",
            translation: "But aren’t less precious kept alone and separately.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "فَمَا تَطَاوُلُ آمَالِ الْمَدِيحِ إِلَى",
            translit: "Famā taṭāwulu āmālil madīḥi ilā",
            translation: "What eulogizing has any hope of stretching to reach",
          }),
          new QasidaEntryModel({
            arabic: "مَا فِيهِ مِنْ كَرَمِ الْأَخْلَاقِ وَالشِّيَمِ",
            translit: "Mā fīhi min karamil akhlāqi wash shiyam",
            translation: "What he possesses in noble nature and quality?",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "آيَاتُ حَقٍّ مِنَ الرَّحْمٰنِ مُحْدَثَةٌ",
            translit: "Āyātu ḥaqqin minar raḥmāni muḥdathah",
            translation: "True signs from the Merciful, originated in time,",
          }),
          new QasidaEntryModel({
            arabic: "قَدِيمَةٌ صِفَةُ الْمَوْصُوفِ بِالْقِدَمِ",
            translit: "Qadīmatun ṣifatul mawṣūfi bil qidam",
            translation: "Beginningless, trait of Him Who is beginninglessly.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "لَمْ تَقْتَرِنْ بِزَمَانٍ وَهْيَ تُخْبِرُنَا",
            translit: "Lam taqtarin bizamānin wa hya tukhbirunā",
            translation:
              "They aren’t bound by constraints of time, as they tell us of",
          }),
          new QasidaEntryModel({
            arabic: "عَنِ الْمَعَادِ وَعَنْ عَادٍ وَعَنْ إِرَمِ",
            translit: "‛Anil ma‛ādi wa ‛an ‛ādin wa ‛an iram",
            translation: "The day to come, also Aad and Irum—past history.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "دَامَتْ لَدَيْنا فَفَاقَتْ كُلَّ مُعْجِزَةٍ",
            translit: "Dāmat ladaynā fafāqat kulla mu‛jizah",
            translation:
              "They stayed among us, and so transcended all miracles",
          }),
          new QasidaEntryModel({
            arabic: "مِنَ النَّبِيِّينَ إِذْ جَاءَتْ وَلَمْ تَدُمِ",
            translit: "Minan nabiyyīna idh jā’at wa lam tadum",
            translation:
              "From all the prophets, as they had come and then ceased to be.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "مُحَكَّمَاتٌ فَمَا تُبْقِينَ مِنْ شُبَهٍ",
            translit: "Muḥakkamātun famā tubqīna min shubah",
            translation:
              "So wise and clear, that they leave no room for a single doubt",
          }),
          new QasidaEntryModel({
            arabic: "لِذِي شِقَاقٍ وَمَا تَبْغِينَ مِنْ حَکَمِ",
            translit: "Lidhī shiqāqin wa mā tabghīna min ḥakam",
            translation: "To an opponent and have no need for a referee.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "مَا حُورِبَتْ قَطُّ إِلَّا عَادَ مِنْ حَرَبٍ",
            translit: "Mā ḥūribat qaṭṭu illā ‛āda min ḥarab",
            translation:
              "And never were they attacked except that from battle did",
          }),
          new QasidaEntryModel({
            arabic: "أَعْدَى الْأَعَادِي إِلَيْهَا مُلْقِيَ السَّلَمِ",
            translit: "A‛dal a‛ādī ilayhā mulqiyas salam",
            translation:
              "Return to them with surrendered arms the worst enemy.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "رَدَّتْ بَلَاغَتُهَا دَعْوَى مُعَارِضِهَا",
            translit: "Raddat balāghatuhā da‛wā mu‛āriḍihā",
            translation:
              "Their eloquence fought off their dissenters’ claim, as a man",
          }),
          new QasidaEntryModel({
            arabic: "رَدَّ الْغَيُورِ يَدَ الْجَانِي عَنِ الْحُرَمِ",
            translit: "Raddal ghayūri yadal jānī ‛anil ḥuram",
            translation:
              "That is protective fights off attack from his family.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "لَهَا مَعَانٍ كَمَوْجِ الْبَحْرِ فِي مَدَدٍ",
            translit: "Lahā ma‛ānin kamawjil baḥri fī madad",
            translation:
              "Possessing meanings like waves upon the sea in support;",
          }),
          new QasidaEntryModel({
            arabic: "وَفَوْقَ جَوْهَرِهِ فِي الْحُسْنِ وَالْقِيَمِ",
            translit: "Wa fawqa jawharihī fil ḥusni wal qiyam",
            translation: "Surpassing its treasures in allure and sublimity.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "فَمَا تُعَدُّ وَلَا تُحْصٰى عَجَائِبُهَا",
            translit: "Famā tu‛addu wa lā tuḥṣā ‛ajā’ibuhā",
            translation:
              "Such that their wonders are countless and beyond any bound,",
          }),
          new QasidaEntryModel({
            arabic: "وَلَا تُسَامُ عَلَى الْإِكْثَارِ بِالسَّأَمِ",
            translit: "Wa lā tusāmu ‛alal ikthāri bis sa’am",
            translation: "And never found to be tiresome in great quantity.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "قَرَّتْ بِهَا عَيْنُ قَارِيهَا فَقُلْتُ لَهُ",
            translit: "Qarrat bihā ‛aynu qārīhā faqultu lah",
            translation:
              "By them is soothed their reciter’s eye, so I said to him,",
          }),
          new QasidaEntryModel({
            arabic: "لَقَدْ ظَفِرْتَ بِحَبْلِ ٱللَّهِ فَاعْتَصِمِ",
            translit: "Laqad ẓafirta biḥablillāhi fa‛taṣim",
            translation:
              "“You have indeed found the rope of God, so hold steadily.”",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "إِنْ تَتْلُهَا خِيفَةً مِنْ حَرِّ نَارِ لَظَى",
            translit: "In tatluhā khīfatan min ḥarri nāri laẓā",
            translation: "If you recite them in worry of the fire of Hell,",
          }),
          new QasidaEntryModel({
            arabic: "أَطْفَأْتَ حَرَّ لَظَی مِنْ وِرْدِهَا الشَّبِمِ",
            translit: "Aṭfa’ta ḥarra laẓā min wirdihash shabim",
            translation:
              "From their cool fountain you douse the burn of Hell utterly.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "كَأَنَّهَا الْحَوْضُ تَبْيَضُّ الْوُجُوهُ بِهِ",
            translit: "Ka-annahal ḥawḍu tabyaḍḍul wujūhu bih",
            translation: "Just like the Basin, as it is whitening every face,",
          }),
          new QasidaEntryModel({
            arabic: "مِنَ الْعُصَاةِ وَقَدْ جَاءُوهُ كَالْحُمَمِ",
            translit: "Minal ‛uṣāti wa qad jā’ūhu kal ḥumam",
            translation:
              "Of sinners coming to it like coals as black as can be.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَكَالصِّرَاطِ وَكَالْمِيزَانِ مَعْدِلَةً",
            translit: "Wa kaṣ ṣirāṭi wa kal mīzāni ma‛dilah",
            translation:
              "And like the straight Bridge and like the Balance in equity:",
          }),
          new QasidaEntryModel({
            arabic: "فَالْقِسْطُ مِنْ غَيْرِهَا فِي النَّاسِ لَمْ يَقُمِ",
            translit: "Fal qisṭu min ghayrihā fin nāsi lam yaqum",
            translation: "Without them no justice is maintained in society.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "لَا تَعْجَبَنْ لِحَسُودٍ رَاحَ يُنْكِرُهَا",
            translit: "Lā ta‛jabanna liḥasūdin rāḥa yunkiruhā",
            translation: "Be not amazed by a hater in denial of them,",
          }),
          new QasidaEntryModel({
            arabic: "تَجَاهُلًا وَهْوَ عَيْنُ الْحَاذِقِ الْفَهِمِ",
            translit: "Tajāhulan wa huwa ‛aynul ḥādhiqil fahim",
            translation:
              "Who acts unknowing despite full knowledge and mastery.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "قَدْ تُنْكِرُ الْعَيْنُ ضَوْءَ الشَّمْسِ مِنْ رَمَدٍ",
            translit: "Qad tunkirul ‛aynu ḍaw’ash shamsi min ramad",
            translation:
              "An eye may even reject the light of sun when inflamed;",
          }),
          new QasidaEntryModel({
            arabic: "وَيُنْكِرُ الْفَمُ طَعْمَ الْمَاءِ مِنْ سَقَمِ",
            translit: "Wa yunkirul famu ṭa‛mal mā’i min saqam",
            translation: "A mouth rejecting the taste of water from malady.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا خَيْرَ مَنْ يَمَّمَ الْعَافُونَ سَاحَتَهُ",
            translit: "Yā khayra man yammamal ‛āfūna sāḥatah",
            translation:
              "O best of those whose front yard is sought by those seeking good,",
          }),
          new QasidaEntryModel({
            arabic: "سَعْيًا وَفَوْقَ مُتُونِ الْأَيْنُقِ الرُّسُمِ",
            translit: "Sa‛yan wa fawqa mutūnil aynuqir rusum",
            translation: "On foot and on backs of camels treading vigorously!",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَمَنْ هُوَ الْآيَةُ الْكُبْرَى لِمُعْتَبِرٍ",
            translit: "Wa man huwal āyatul kubrā limu‛tabir",
            translation:
              "And you who are sign supreme for one who does seek to know!",
          }),
          new QasidaEntryModel({
            arabic: "وَمَنْ هُوَ النِّعْمَةُ الْعُظْمٰى لِمُغْتَنِمِ",
            translit: "Wa man huwan ni‛matul ‛uẓmā limughtanim",
            translation:
              "And greatest blessing for one in search of prosperity!",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "سَرَيْتَ مِنْ حَرَمٍ لَيْلًا إِلىٰ حَرَمٍ",
            translit: "Sarayta min ḥaramin laylan ilā ḥaram",
            translation:
              "From sanctum to sanctum you had made the trip overnight;",
          }),
          new QasidaEntryModel({
            arabic: "كَمَا سَرَى الْبَدْرُ فِي دَاجٍ مِنَ الظُّلَمِ",
            translit: "Kamā sarāl badru fī dājin minaẓ ẓulam",
            translation:
              "Just as the moon makes the trip through darkness nocturnally.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَبِتَّ تَرْقٰى إِلىٰ أَنْ نِلْتَ مَنْزِلَةً",
            translit: "Wa bitta tarqā ilā an nilta manzilah",
            translation:
              "You spent the night rising up until you had reached a place",
          }),
          new QasidaEntryModel({
            arabic: "مِنْ قَابِ قَوْسَيْنِ لَمْ تُدْرَكْ وَلَمْ تُرَمِ",
            translit: "Min qābi qawsayni lam tudrak wa lam turam",
            translation:
              "A length of two bows, not gained or sought in all history.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وقَدَّمَتْكَ جَمِيعُ الْأَنْبِيَاءِ بِهَا",
            translit: "Wa qaddamatka jamī‛ul anbiyā’i bihā",
            translation:
              "And all the prophets and messengers had put you ahead,",
          }),
          new QasidaEntryModel({
            arabic: "وَالرُّسْلِ تَقْدِيمَ مَخْدُومٍ عَلىٰ خَدَمِ",
            translit: "War rusli taqdīma makhdūmin ‛alā khadam",
            translation: "Just as the served over servants has the priority.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَأَنْتَ تَخْتَرِقُ السَّبْعَ الطِّبَاقَ بِهِمْ",
            translit: "Wa anta takhtariqus sab‛aṭ ṭibāqa bihim",
            translation:
              "As you proceeded through all the seven levels with them,",
          }),
          new QasidaEntryModel({
            arabic: "فِي مَوْكِبٍ كُنْتَ فِيهِ صَاحِبَ الْعَلَمِ",
            translit: "Fī mawkibin kunta fīhi ṣāḥibal ‛alam",
            translation: "In a procession, you were the banner bearer to see;",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "حَتىّٰ إِذَا لَمْ تَدَعْ شَأْوًا لِمُسْتَبِقٍ",
            translit: "Ḥattā idhā lam tada‛ sha’wan limustabiq",
            translation: "Until you had left no goal for the ambitious in hope",
          }),
          new QasidaEntryModel({
            arabic: "مِنَ الدُّنُوِّ وَلَا مَرْقىً لِمُسْتَنِمِ",
            translit: "Minad dunuwwi wa lā marqan limustanim",
            translation:
              "Of closeness, nor height for someone seeking ascendency.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "خَفَضْتَ كُلَّ مَقَامٍ بِالْإِضَافَةِ إِذْ",
            translit: "Khafaḍta kulla maqāmin bil iḍāfati idh",
            translation:
              "You humbled all ranks by annexation: you were addressed,",
          }),
          new QasidaEntryModel({
            arabic: "نُودِيتَ بِالرَّفْعِ مِثْلَ الْمُفْرَدِ الْعَلَمِ",
            translit: "Nūdīta bir raf‛i mithlal mufradil ‛alam",
            translation: "Like unannexed proper noun, with singular dignity.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "كَيْمَا تَفُوزَ بِوَصْلٍ أَيِّ مُسْتَتِرٍ",
            translit: "Kaymā tafūza biwaṣli ayyi mustatir",
            translation:
              "So that you triumph with a connection oh so concealed",
          }),
          new QasidaEntryModel({
            arabic: "عَنِ الْعُيُونِ وَسِرٍّ أَيِّ مُكْتَتَمِ",
            translit: "‛Anil ‛uyūni wa sirri ayyi muktatam",
            translation: "From eyes, and a secret oh so shrouded in mystery!",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "فَحُزْتَ كُلَّ فَخَارٍ غَيْرَ مُشْتَرَكٍ",
            translit: "Faḥizta kulla fakhārin ghayra mushtarak",
            translation:
              "So you obtained every glory, no one else joining you;",
          }),
          new QasidaEntryModel({
            arabic: "وَجُزْتَ كُلَّ مَقَامٍ غَيْرَ مُزْدَحَمِ",
            translit: "Wa juzta kulla maqāmin ghayra muzdaḥam",
            translation:
              "And you surpassed all alone, unchallenged, every degree.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَجَلَّ مِقْدَارُ مَا وُلِّيتَ مِنْ رُتَبٍ",
            translit: "Wa jalla miqdāru mā wullīta min rutab",
            translation:
              "The measure of stations you were granted, what majesty!",
          }),
          new QasidaEntryModel({
            arabic: "وَعَزَّ إِدْرَاكُ مَا أُولِيتَ مِنْ نِعَمِ",
            translit: "Wa ‛azza idrāku mā ūlīta min ni‛am",
            translation: "Attaining the blessings you were given, what rarity!",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "بُشْرٰى لَنَا مَعْشَرَ الْإِسْلَامِ إِنَّ لَنَا",
            translit: "Bushrā lanā ma‛sharal islāmi inna lanā",
            translation:
              "Great news for us, people of Islam! Indeed, we possess",
          }),
          new QasidaEntryModel({
            arabic: "مِنَ الْعِنَايَةِ رُكْنًا غَيْرَ مُنْهَدِمِ",
            translit: "Minal ‛ināyati ruknan ghayra munhadim",
            translation: "A pillar of special care erected unbreakably.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "لَمَّا دَعَى ٱللَّهُ دَاعِينَا لِطَاعَتِهِ",
            translit: "Lammā da‛allāhu dā‛īnā liṭā‛atih",
            translation:
              "And since Allah called the one who called us to serving Him",
          }),
          new QasidaEntryModel({
            arabic: "بِأَكْرَمِ الرُّسْلِ كُنَّا أَكْرَمَ الْأُمَمِ",
            translit: "Bi-akramir rusuli kunnā akramal umam",
            translation: "The Greatest Prophet, we are the greatest community.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "رَاعَتْ قُلُوبَ الْعِدَا أَنْبَاءُ بِعْثَتِهِ",
            translit: "Rā‛at qulūbal ‛idā anbā’u bi‛thatih",
            translation:
              "The news of his being sent alarmed the hearts of the foes,",
          }),
          new QasidaEntryModel({
            arabic: "كَنَبْأَةٍ أَجْفَلَتْ غُفْلًا مِنَ الْغَنَمِ",
            translit: "Kanab’atin ajfalat ghufalan minal ghanam",
            translation:
              "Just like a roar causing heedless sheep to startle and flee.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "مَا زَالَ يَلْقَاهُمُ فِي كُلِّ مُعْتَرَكٍ",
            translit: "Mā zāla yalqāhumu fī kulli mu‛tarak",
            translation:
              "He kept courageously facing them at each battlefield,",
          }),
          new QasidaEntryModel({
            arabic: "حَتىّٰ حَكَوْا بِالْقَنَا لَحْمًا عَلىٰ وَضَمِ",
            translit: "Ḥattā ḥakaw bil qanā laḥman ‛alā waḍam",
            translation:
              "Till they were butchered by spears like meat in a butchery.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَدُّوا الْفِرَارَ فَكَادُوا يَغْبِطُونَ بِهِ",
            translit: "Waddul firāra fakādū yaghbiṭūna bih",
            translation:
              "They longed to flee so much that they watched the parts carried off",
          }),
          new QasidaEntryModel({
            arabic: "أَشْلَاءَ شَالَتْ مَعَ الْعِقْبَانِ وَالرَّخَمِ",
            translit: "Ashlā’a shālat ma‛al ‛iqbāni war rakham",
            translation:
              "By buzzards and vultures in a state of near jealousy.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "تَمْضِي اللَّيَالِي وَلَا يَدْرُونَ عِدَّتَهَا",
            translit: "Tamḍil layālī wa lā yadrūna ‛iddatahā",
            translation:
              "The nights would pass with them unaware the number of them,",
          }),
          new QasidaEntryModel({
            arabic: "مَا لَمْ تَكُنْ مِنْ لَيَالِي الْأَشْهُرِ الْحُرُمِ",
            translit: "Mā lam takun min layālil ashhuril ḥuram",
            translation:
              "Except the nights of the Sacred Months of tranquility.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "كَأَنَّمَا الدِّينُ ضَيْفٌ حَلَّ سَاحَتَهُمْ",
            translit: "Ka-annamad dīnu ḍayfun ḥalla sāḥatahum",
            translation:
              "As if religion had been a guest arrived at their yard,",
          }),
          new QasidaEntryModel({
            arabic: "بِكُلِّ قَرْمٍ إِلىٰ لَحْمِ الْعِدَا قَرِمِ",
            translit: "Bikulli qarmin ilā laḥmil ‛idā qarim",
            translation: "With every nobleman craving meat of the enemy.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَجُرُّ بَحْرَ خَمِيسٍ فَوْقَ سَابِحَةٍ",
            translit: "Yajurru baḥra khamīsin fawqa sābiḥah",
            translation:
              "It brought an ocean of troops on gracefully-floating steeds,",
          }),
          new QasidaEntryModel({
            arabic: "يَرْمِي بِمَوْجٍ مِنَ الْأَبْطَالِ مُلْتَطِمِ",
            translit: "Yarmī bimawjin minal abṭāli multaṭim",
            translation:
              "Advancing waves made of heroes, surging successively.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "مِنْ كُلِّ مُنْتَدِبٍ لِلَّهِ مُحْتَسِبٍ",
            translit: "Min kulli muntadibin lillāhi muḥtasib",
            translation:
              "Each in response to the call of God, in hope of reward,",
          }),
          new QasidaEntryModel({
            arabic: "يَسْطُو بِمُسْتَأْصِلٍ لِلْكُفْرِ مُصْطَلِمِ",
            translit: "Yasṭū bimusta’ṣilin lil kufri muṣṭalim",
            translation: "Attacking armed to uproot and shatter idolatry.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "حَتىّٰ غَدَتْ مِلَّةُ الْإِسْلَامِ وَهْيَ بِهِمْ",
            translit: "Ḥattā ghadat millatul islāmi wa hya bihim",
            translation:
              "Until the Faith of Islam, with them among it, became—",
          }),
          new QasidaEntryModel({
            arabic: "مِنْ بَعْدِ غُرْبَتِهَا مَوْصُولَةَ الرَّحِمِ",
            translit: "Min ba‛di ghurbatihā mawṣūlatar raḥim",
            translation: "Once having been foreign—now a unified family.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "مَكْفُولَةً أَبَدًا مِنْهُمْ بِخَيْرِ أَبٍ",
            translit: "Makfūlatan abadan minhum bikhayri ab",
            translation: "Protected forever from them by the best father and",
          }),
          new QasidaEntryModel({
            arabic: "وَخَيْرِ بَعْلٍ فَلَمْ تَيْتَمْ وَلَمْ تَئِمِ",
            translit: "Wa khayri ba‛lin falam tayatam wa lam ta’im",
            translation: "Best husband, so not an orphan or a widow is she.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "هُمُ الْجِبَالُ فَسَلْ عَنْهُمْ مُصَادِمَهُمْ",
            translit: "Humul jibālu fa’sal ‛anhum muṣādimahum",
            translation:
              "They are the mountains, so ask about them their battle-foe,",
          }),
          new QasidaEntryModel({
            arabic: "مَاذَا رَأَى مِنْهُمُ فِي كُلِّ مُصْطَدَمِ",
            translit: "Mādhā ra’ā minhumu fī kulli muṣṭadam",
            translation:
              "At every battle, the things from them that he used to see.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَسَلْ حُنَيْنًا وَسَلْ بَدْرًا وَسَلْ أُحُدًا",
            translit: "Wa sal ḥunayyan wa sal badran wa sal uḥudā",
            translation:
              "And ask Hunayn, question Badr, and even ask Uhud, too—",
          }),
          new QasidaEntryModel({
            arabic: "فُصُولَ حَتْفٍ لَهُمْ أَدْهٰى مِنَ الْوَخَمِ",
            translit: "Fuṣūla ḥatfin lahum adhā minal wakham",
            translation:
              "Events of death for them, worse than plague in catastrophe.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "اَلْمُصْدِرِي الْبِيضِ حُمْرًا بَعْدَ مَا وَرَدَتْ",
            translit: "Almuṣdiril bīḍi ḥumran ba‛da mā waradat",
            translation:
              "Returning white blades now turned to crimson after they reached",
          }),
          new QasidaEntryModel({
            arabic: "مِنَ الْعِدَا كُلَّ مُسْوَدٍّ مِنَ اللِّمَمِ",
            translit: "Minal ‛idā kulla muswaddin minal limam",
            translation:
              "The fighters with flowing hair of black from the enemy.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَالْكَاتِبِينَ بِسُمْرِ الْخَطِّ مَا تَرَكَتْ",
            translit: "Wal kātibīna bisumril khaṭṭi mā tarakat",
            translation:
              "Inscribing with spears of Lettering, their pens didn’t leave",
          }),
          new QasidaEntryModel({
            arabic: "أَقْلَامُهُمْ حَرْفَ جِسْمٍ غَيْرَ مُنْعَجِمِ",
            translit: "Aqlāmuhum ḥarfa jismin ghayra mun‛ajim",
            translation: "A body line with undotted i, and crossed every t.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "شَاكِي السِّلَاحِ لَهُمْ سِيمَا تُمَيِّزُهُمْ",
            translit: "Shākis silāḥi lahum sīmā tumayyizuhum",
            translation:
              "With sharpened weapons they had a mark to set them apart;",
          }),
          new QasidaEntryModel({
            arabic: "وَالْوَرْدُ يَمْتَازُ بِالسِّيمَا عَنِ السَّلَمِ",
            translit: "Wal wardu yamtāzu bis sīmā ‛anis salam",
            translation: "A rose is set by its mark apart from a thorny tree.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "تُهْدِي إِلَيْكَ رِيَاحُ النَّصْرِ نَشْرَهُمُ",
            translit: "Tuhdī ilayka riyāḥun naṣri nashrahum",
            translation:
              "The victory winds convey to you the sweet news of them;",
          }),
          new QasidaEntryModel({
            arabic: "فَتَحْسَبُ الزَّهْرَ فِي الْأَكْمَامِ كُلَّ كَمِي",
            translit: "Fataḥsabuz zahra fil akmāmi kulla kamī",
            translation:
              "So flowers in bloom you’d reckon every soldier to be.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "كَأَنَّهُمْ فِي ظُهُورِ الْخَيْلِ نَبْتُ رُبًا",
            translit: "Ka-annahum fī ẓuhūril khayli nabtu rubā",
            translation:
              "They were in horseback like firmly-rooted plants up on hills—",
          }),
          new QasidaEntryModel({
            arabic: "مِنْ شِدَّةِ الْحَزْمِ لَا مِنْ شِدَّةِ الْحُزُمِ",
            translit: "Min shiddatil ḥazmi lā min shiddatil ḥuzum",
            translation:
              "From grit so solid, not girth of saddle held solidly.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "طَارَتْ قُلُوبُ الْعِدَا مِنْ بَأْسِهِمْ فَرَقًا",
            translit: "Ṭārat qulūbul ‛idā min ba’sihim faraqā",
            translation:
              "The enemies’ hearts were fluttering in fear of their force,",
          }),
          new QasidaEntryModel({
            arabic: "فَمَا تُفَرِّقُ بَيْنَ الْبَهْمِ وَالْبُهَمِ",
            translit: "Famā tufarriqu baynal bahmi wal buhum",
            translation: "Unable to tell a lamb apart from brave cavalry.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَمَنْ تَكُنْ بِرَسُولِ ٱللَّهِ نُصْرَتُهُ",
            translit: "Wa man takun birasūlillāhi nuṣratuh",
            translation: "Whoever is aided by the Messenger of Allah,",
          }),
          new QasidaEntryModel({
            arabic: "إِنْ تَلْقَهُ الْأُسْدُ فِي آجَامِهَا تَجِمِ",
            translit: "In talqahul usdu fī ājāmihā tajim",
            translation:
              "If lions meet him inside their woods, they bow silently.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَلَنْ تَرٰى مِنْ وَلِيٍّ غَيْرَ مُنْتَصِرٍ",
            translit: "Wa lan tarā min waliyyin ghayra muntaṣir",
            translation: "You will not see any saint that isn’t victorious",
          }),
          new QasidaEntryModel({
            arabic: "بِهِ وَلَا مِنْ عَدُوٍّ غَيْرَ مُنْقَصِمِ",
            translit: "Bihī wa lā min ‛aduwwin ghayra munqaṣim",
            translation: "Through him, nor any opponent not destroyed utterly.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "أَحَلَّ أُمَّتَهُ فِي حِرْزِ مِلَّتِهِ",
            translit: "Aḥalla ummatahū fī ḥirzi millatih",
            translation:
              "He put his nation to dwell inside the fort of his faith;",
          }),
          new QasidaEntryModel({
            arabic: "كَاللَّيْثِ حَلَّ مَعَ الْأَشْبَالِ فِي أَجَمِ",
            translit: "Kal laythi ḥalla ma‛al ashbāli fī ajam",
            translation: "Like lion dwelling inside the forest with progeny.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "كَمْ جَدَّلَتْ كَلِمَاتُ ٱللَّهِ مِنْ جَدَلٍ",
            translit: "Kam jaddalat kalimātullāhi min jadal",
            translation: "How often the words of God refuted the quarrelsome",
          }),
          new QasidaEntryModel({
            arabic: "فِيهِ وَكَمْ خَصَمَ الْبُرْهَانُ مِنْ خَصِمِ",
            translit: "Fīhi wa kam khaṣamal burhānu min khaṣim",
            translation: "About him! How often proof defeated the enemy!",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "كَفَاكَ بِالْعَلَمِ فِي الْأُمِّيِّ مُعْجِزَةً",
            translit: "Kafāka bil ‛ilmi fil ummiyyi mu‛jizah",
            translation: "Enlightenment in the one unread is wonder enough,",
          }),
          new QasidaEntryModel({
            arabic: "فِي الْجَاهِلِيَّةِ وَالتَّأْدِيبِ فِي الْيُتُمِ",
            translit: "Fil jāhiliyyati wat ta’dībi fil yutum",
            translation: "In Age of darkness; and good upbringing in orphancy.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "خَدَمْتُهُ بِمَدِيحٍ أَسْتَقِيلُ بِهِ",
            translit: "Khadamtuhū bimadīḥin astaqīlu bih",
            translation: "I’ve served him with eulogy by which I seek to erase",
          }),
          new QasidaEntryModel({
            arabic: "ذُنُوبَ عُمْرٍ مَضٰى فِي الشِّعْرِ وَالْخِدَمِ",
            translit: "Dhunūba ‛umrin maḍā fish shi‛ri wal khidam",
            translation: "The sins of life spent in poem and in servility.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "إِذْ قَلَّدَانِيَ مَا تُخْشٰى عَواقِبُهُ",
            translit: "Idh qalladānī mā tukhshā ‛awāqibuh",
            translation:
              "For they have led me to things of horrible aftermath;",
          }),
          new QasidaEntryModel({
            arabic: "كَأَنَّنِي بِهِمَا هَدْيٌ مِنَ النَّعَمِ",
            translit: "Ka-annanī bihimā hadyun minan na‛am",
            translation: "Akin to livestock decreed by them for the butchery.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "أَطَعْتُ غَيَّ الصِّبَا فِي الْحَالَتَيْنِ وَمَا",
            translit: "Aṭa‛tu ghayyaṣ ṣibā fil ḥālatayni wa mā",
            translation: "I have obeyed the deceit of youth in both cases and",
          }),
          new QasidaEntryModel({
            arabic: "حَصَّلْتُ إِلَّا عَلىٰ الْآثَامِ وَالنَّدَمِ",
            translit: "Ḥaṣṣaltu illā ‛alal āthāmi wan nadam",
            translation:
              "Got nothing but sins and then regret, oh, what misery!",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "فَيَا خَسَارَةَ نَفْسٍ فِي تِجَارَتِهَا",
            translit: "Fayā khasārata nafsin fī tijāratihā",
            translation:
              "Oh, what a loss for my soul, the awful deal that it made!",
          }),
          new QasidaEntryModel({
            arabic: "لَمْ تَشْتَرِ الدِّينَ بِالدُّنْيَا وَلَمْ تَسُمِ",
            translit: "Lam tashtarid dīna bid dunyā wa lam tasum",
            translation:
              "Not buying faith with this world, not even browsing to see.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَمَنْ يَبِعْ آجِلًا مِنْهُ بِعَاجِلِهِ",
            translit: "Wa man yabi‛ ājilan minhu bi‛ājilih",
            translation:
              "Whoever sells off his future for his present will come",
          }),
          new QasidaEntryModel({
            arabic: "يَبِنْ لَهُ الْغَبْنُ فِي بَيْعٍ وَفِي سَلَمِ",
            translit: "Yabin lahul ghabnu fī bay‛in wa fī salam",
            translation: "To see the loss in his sale and future delivery.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "إِنْ آتِ ذَنْبًا فَمَا عَهْدِي بِمُنْتَقِضٍ",
            translit: "In āti dhanban famā ‛ahdī bimuntaqiḍ",
            translation: "If I engage in a sin, my covenant isn’t void",
          }),
          new QasidaEntryModel({
            arabic: "مِنَ النَّبِيِّ وَلَا حَبْلِي بِمُنْصَرِمِ",
            translit: "Minan nabiyyi wa lā ḥablī bimunṣarim",
            translation:
              "With him, the Prophet; nor is the rope dissevered from me.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "فَإِنَّ لِي ذِمَّةً مِنْهُ بِتَسْمِيَتِي",
            translit: "Fa-inna lī dhimmatan minhu bitasmiyatī",
            translation: "By being named Muhammad I am in pledge to him;",
          }),
          new QasidaEntryModel({
            arabic: "مُحَمَّدًا وَهْوَ أَوْفَى الْخَلْقِ بِالذِّمَمِ",
            translit: "Muḥammadan wa huwa awfal khalqi bidh dhimam",
            translation:
              "And none is more faithful in fulfilling pledges than he.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "إِنْ لَمْ يَكُنْ فِي مَعَادِي آخِذًا بِيَدِي",
            translit: "In lam yakun fī ma‛ādī ākhidhan biyadī",
            translation: "At my appointment, if he’s not holding onto my hand—",
          }),
          new QasidaEntryModel({
            arabic: "فَضْلًا وَإِلَّا فَقُلْ يَا زَلَّةَ الْقَدَمِ",
            translit: "Faḍlan wa illā faqul yā zallatal qadam",
            translation: "In graciousness—say, “Oh, what a fall into tragedy!”",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "حَاشَاهُ أَنْ يَحْرِمَ الرَّاجِي مَكَارِمَهُ",
            translit: "Ḥāshāhu an yaḥrimar rājī makārimah",
            translation: "Far be it from him to bar the aspirant of his gifts,",
          }),
          new QasidaEntryModel({
            arabic: "أَوْ يَرْجِعَ الْجَارُ مِنْهُ غَيْرَ مُحْتَرَمِ",
            translit: "Aw yarji‛al jāru minhu ghayra muḥtaram",
            translation: "Or send away in dishonor from him a refugee.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَمُنْذُ أَلْزَمْتُ أَفْكَارِي مَدَائِحَهُ",
            translit: "Wa mundhu alzamtu afkārī madā’iḥah",
            translation:
              "And since committing my thoughts to singing praises of him,",
          }),
          new QasidaEntryModel({
            arabic: "وَجَدْتُهُ لِخَلَاصِي خَيْرَ مُلْتَزِمِ",
            translit: "Wajadtuhū likhalāṣī khayra multazim",
            translation:
              "I’ve found him to be the most committed to saving me.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَلَنْ يَفُوتَ الْغِنٰى مِنْهُ يَدًا تَرِبَتْ",
            translit: "Wa lan yafūtal ghinā minhu yadan tarabat",
            translation:
              "The riches from him will not neglect a poor, dusty hand;",
          }),
          new QasidaEntryModel({
            arabic: "إِنَّ الْحَيَا يُنْبِتُ الْأَزْهَارَ فِي الْأَكَمِ",
            translit: "Innal ḥayā yunbitul azhāra fil akam",
            translation: "Indeed, the rain causes even hills to be flowery.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَلَمْ أُرِدْ زَهْرَةَ الدُّنْيا الَّتِي اقْتَطَفَتْ",
            translit: "Wa lam urid zahratad dunyā allatiqṭafat",
            translation:
              "I sought no bloom of the lower world the hands of Zuhayr",
          }),
          new QasidaEntryModel({
            arabic: "يَدَا زُهَيْرٍ بِمَا أَثْنٰى عَلَى هَرِمِ",
            translit: "Yadā Zuhayrin bimā athnā ‛alā Harim",
            translation: "Had picked for having presented Herim with flattery.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا أَكْرَمَ الْخَلْقِ مَا لِي مَنْ أَلُوذُ بِهِ",
            translit: "Yā akramal khalqi mā lī man alūdhu bih",
            translation: "Most Noble of All Creation, what refuge do I have",
          }),
          new QasidaEntryModel({
            arabic: "سِوَاكَ عِنْدَ حُلُولِ الْحَادِثِ الْعَمِمِ",
            translit: "Siwāka ‛inda ḥulūlil ḥādithil ‛amim",
            translation: "But you at the coming of the global emergency?",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَلَنْ يَضِيقَ رَسُولَ ٱللَّهِ جَاهُكَ بِي",
            translit: "Wa lan yaḍīqa rasūlallāhi jāhuka bī",
            translation:
              "O Messenger of Allah, your rank won’t shrink from me when",
          }),
          new QasidaEntryModel({
            arabic: "إِذَا الْكَرِيمُ تَجَلَّى بِاسْمِ مُنْتَقِمِ",
            translit: "Idhal karīmu tajallā bismi muntaqim",
            translation: "The Generous manifests His punishing quality.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "فَإِنَّ مِنْ جُودِكَ الدُّنْيَا وَضَرَّتَهَا",
            translit: "Fa-inna min jūdikad dunyā wa ḍarratahā",
            translation:
              "Yes, from your grace is indeed the world as well as its mate;",
          }),
          new QasidaEntryModel({
            arabic: "وَمِنْ عُلُومِكَ عِلْمَ اللَّوْحِ وَالْقَلَمِ",
            translit: "Wa min ‛ulūmika ‛ilmal lawḥi wal qalam",
            translation:
              "And of your knowledge the Tablet and the Pen of decree.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا نَفْسُ لَا تَقْنَطِي مِنْ زَلَّةٍ عَظُمَتْ",
            translit: "Yā nafsu lā taqnaṭī min zallatin ‛aẓumat",
            translation:
              "O soul, despair not because of a mistake that is grave;",
          }),
          new QasidaEntryModel({
            arabic: "إِنَّ الْكَبَائِرَ فِي الْغُفْرَانِ كَاللَّمَمِ",
            translit: "Innal kabā’ira fil ghufrāni kal lamam",
            translation: "Enormities are like slips compared to His clemency.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "لَعَلَّ رَحْمَةَ رَبِّي حِينَ يَقْسِمُهَا",
            translit: "La‛alla raḥmata rabbī ḥīna yaqsimuhā",
            translation:
              "And hopefully, mercy from my Lord when He gives it out",
          }),
          new QasidaEntryModel({
            arabic: "تَأْتِي عَلَى حَسَبِ الْعِصْيَانِ فِي الْقِسَمِ",
            translit: "Ta’tī ‛alā ḥasabil ‛iṣyāni fil qisam",
            translation: "Will come according to sinfulness in its quantity.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا رَبِّ وَاجْعَلْ رَجَائِي غَيْرَ مُنْعَكِسٍ",
            translit: "Yā Rabbi waj‛al rajā’ī ghayra mun‛akis",
            translation:
              "My Lord, and make not my hope a hope that is overturned",
          }),
          new QasidaEntryModel({
            arabic: "لَدَيْكَ وَاجْعَلْ حِسَابِي غَيْرَ مُنْخَرِمِ",
            translit: "Ladayka waj‛al ḥisābī ghayra munkharim",
            translation: "With you; and make my expectance with no deficiency.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَالْطُفْ بِعَبْدِكَ فِي الدَّارَيْنِ إِنَّ لَهُ",
            translit: "Walṭuf bi‛abdika fid dārayni inna lah",
            translation:
              "Be kind to Your slave in both abodes; for his fortitude",
          }),
          new QasidaEntryModel({
            arabic: "صَبْراً مَتٰى تَدْعُهُ الْأَهْوَالُ يَنْهَزِمِ",
            translit: "Ṣabran matā tad‛uhul ahwālu yanhazim",
            translation:
              "Whenever terrors call out to it will turn tail and flee.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَأْذَنْ لِسُحْبِ صَلَاةٍ مِنْكَ دَائِمَةٍ",
            translit: "Wa’dhan lisuḥbi ṣalātin minka dā’imah",
            translation:
              "Let clouds of blessing from You, unending, rain down upon",
          }),
          new QasidaEntryModel({
            arabic: "عَلَى النَّبِيِّ بِمُنْهَلٍّ وَمُنْسَجِمِ",
            translit: "‛Alan nabiyyi bimunhallin wa munsajim",
            translation: "The Prophet, with pouring rain so heavily, steadily.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "مَا رَنَّحَتْ عَذَبَاتِ الْبَانِ رِيحُ صَبَا",
            translit: "Mā rannaḥat ‛adhabātil bāni rīḥu ṣabā",
            translation:
              "For longer than willow branches by the east wind are swayed;",
          }),
          new QasidaEntryModel({
            arabic: "وَأَطْرَبَ الْعِيسَ حَادِي الْعِيسِ بِالنَّغَمِ",
            translit: "Wa aṭrabal ‛īsa ḥādil ‛īsi bin nagham",
            translation: "And camel drivers excite the camels with melody.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "ثُمَّ الرِّضَا عَنْ أَبِي بَكْرٍ وَعَنْ عُمَرٍ",
            translit: "Thummar riḍā ‛an abī bakrin wa ‛an ‛umar",
            translation:
              "[Then pleasure with Abu Bakr, the greatest of company,",
          }),
          new QasidaEntryModel({
            arabic: "وَعَنْ عَلِيٍّ وَعَنْ عُثْمَانَ ذِي الْكَرَمِ",
            translit: "Wa ‛an ‛aliyyin wa ‛an ‛uthmāna dhil karam",
            translation: "And Umar, bearer of Truth, and then Uthman, and Ali,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَالْآلِ وَالصَّحْبِ ثُمَّ التَّابِعِينَ لَهُم",
            translit: "Wal āli waṣ ṣaḥbi thummat tābi‛īna lahum",
            translation: "The Family and Companions and all the Followers,",
          }),
          new QasidaEntryModel({
            arabic: "أَهْلُ التُّقَى وَالنَّقَى وَالْحِلْمِ وَالْكَرَمِ",
            translit: "Ahlut tuqā wan naqā wal ḥilmi wal karam",
            translation: "The people of purity and patience and piety.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا رَبِّ بِالْمُصْطَفَى بَلِّغْ مَقَاصِدَنَا",
            translit: "Yā Rabbi bil Muṣṭafā balligh maqāṣidanā",
            translation:
              "My Lord, by the Chosen One, make our hopes come to be,",
          }),
          new QasidaEntryModel({
            arabic: "وَاغْفِرْ لَنَا مَا مَضَى يَا وَاسِعَ الْكَرَمِ",
            translit: "Waghfir lanā mā maḍā yā wāsi‛al karam",
            translation: "And pardon us what has gone, O Vast in Gen’rosity.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَاغْفِرْ إِلَه‍ِي لِكُلِّ الْمُسْلِمِينَ بِمَا",
            translit: "Waghfir ilāhī likullil muslimīna bimā",
            translation:
              "And please, my God, do forgive all of the Muslims by what",
          }),
          new QasidaEntryModel({
            arabic: "يَتْلُونَ فِي الْمَسْجِدِ الْأَقْصَى وَفِي الْحَرَمِ",
            translit: "Yatlūna fil masjidil aqṣā wa fil ḥaram",
            translation: "They all recite at the Holy Mosque and the Sanctity.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "بِجَاهِ مَنْ بَيْتُهُ فِي طَيْبَةٍ حَرَمٌ",
            translit: "Bijāhi man baytuhū fī ṭaybatin ḥaram",
            translation:
              "By the prestige of him who the Goodly Land is his home;",
          }),
          new QasidaEntryModel({
            arabic: "وَاِسْمُهُ قَسَمٌ مِنْ أَعْظَمِ الْقَسَمِ",
            translit: "Wa smuhū qasamun min a‛ẓamil qasam",
            translation: "Whose very name is an oath of greatest immensity.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَهَذِهِ بُرْدَةُ الْمُخْتَارِ قَدْ خُتِمَتْ",
            translit: "Wa hādhihī burdatul mukhtāri qad khutimat",
            translation:
              "This is the Burdah of the Selected One, now complete;",
          }),
          new QasidaEntryModel({
            arabic: "وَالْحَمْدُ لِلَّهِ فِي بَدْءٍ وَفِي خَتَمِ",
            translit: "Wal ḥamdu lillāhi fī bad’in wa fī khatam",
            translation: "And praise Allah at the start and finish, eternally!",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "أَبْيَاتُهَا قَدْ أَتَتْ سِتِّينَ مَع مِائَةٍ",
            translit: "Abyātuhā qad atat sittīna ma‛a mi’ah",
            translation: "The number of verses in it is one sixty or more;",
          }),
          new QasidaEntryModel({
            arabic: "فَرِِّجْ بِهَا كَرْبَنَا يَا وَاسِعَ الْكَرَمِ",
            translit: "Farrij bihā karbanā yā wāsi‛al karam",
            translation: "Relieve by them our woes, O Vast in Gen’rosity!]",
          }),
        ],
      }),
    ],
  }),
];
