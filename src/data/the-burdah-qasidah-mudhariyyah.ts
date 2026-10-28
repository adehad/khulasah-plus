import {
  QasidaEntryModel,
  QasidaModel,
  QasidaVerseModel,
} from "@/models/recitation";

export default [
  new QasidaModel({
    title: "",
    entries: [
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا رَبِّ صَلِّ عَلَى الْمُخْتَارِ مِنْ مُّضَرٍ",
            translit: "Yā Rabbi ṣalli ‛alal mukhtāri min muḍar",
            translation:
              "O my Lord, bestow blessings upon the Chosen One from Muḍar,",
          }),
          new QasidaEntryModel({
            arabic: "وَالْأَنْبِيَا وَجَمِيعِ الرُّسْلِ مَا ذُكِرُوا",
            translit: "Wal anbiyā’i wa jamī‛ir rusli mā dhukirū",
            translation:
              "and upon the prophets and all the messengers, for as long as they are mentioned.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَصَلِّ رَبِّ عَلَى الْهَادِي وَشِيعَتِهِ",
            translit: "Wa ṣalli Rabbi ‛alal hādī wa shī‛atihī",
            translation:
              "And bestow blessings, my Lord, upon the Guide and his followers,",
          }),
          new QasidaEntryModel({
            arabic: "وَصَحْبِهِ مَنْ لِّطَيِّ الدِّينِ قَدْ نَشَرُوا",
            translit: "Wa ṣaḥbihī man liṭayyid dīni qad nasharū",
            translation:
              "and his Companions, who unfurled the religion that lay folded.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَجَاهَدُوا مَعَهُ فِي ٱللَّهِ وَاجْتَهَدُوا",
            translit: "Wa jāhadū ma‛ahū fillāhi wajtahadū",
            translation:
              "They strove with him for the sake of Allah and exerted themselves,",
          }),
          new QasidaEntryModel({
            arabic: "وَهَاجَرُوا وَلَهُ آوَوْا وَقَدْ نَصَرُوا",
            translit: "Wa hājarū wa lahū āwaw wa qad naṣarū",
            translation:
              "they emigrated, gave him refuge, and gave him support,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَبَيَّنُوا الْفَرْضَ وَالْمَسْنُونَ وَاعْتَصَبُوا",
            translit: "Wa bayyanul farḍa wal masnūna wa‛taṣabū",
            translation:
              "they made clear the obligatory and the recommended, and banded together",
          }),
          new QasidaEntryModel({
            arabic: "لِلَّهِ وَاعْتَصَمُوا بِٱللَّهِ فَانْتَصَرُوا",
            translit: "Lillāhi wa‛taṣamū billāhi fantaṣarū",
            translation:
              "for Allah, held fast to Allah, and so were victorious.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "أَزْكَى صَلَاةٍ وَأَنْمَاهَا وَأَشْرَفَهَا",
            translit: "Azkā ṣalātin wa anmāhā wa ashrafahā",
            translation:
              "The purest of prayers, the most abundant and the noblest of them,",
          }),
          new QasidaEntryModel({
            arabic: "يُعَطِّرُ الْكَوْنَ ريًّا نَشْرِهَا الْعَطِرُ",
            translit: "Yu‛aṭṭirul kawna riyyā nashrihal ‛aṭir",
            translation:
              "whose fragrant scent perfumes the universe with its sweetness,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "مَعْبُوقَةً بِعَبِيقِ الْمِسْكِ زَاكِيَةً",
            translit: "Ma‛būqatan bi‛abīqil miski zākiyatan",
            translation: "scented with the aroma of musk, pure,",
          }),
          new QasidaEntryModel({
            arabic: "مِنْ طِيبِهَا أَرَجُ الرِّضْوَانِ يَنْتَشِرُ",
            translit: "Min ṭībihā arajur riḍwāni yantashir",
            translation:
              "and from its fragrance the scent of divine good pleasure spreads.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "عَدَّ الْحَصَى وَالثَّرَى وَالرَّمْلِ يَتْبَعُهَا",
            translit: "‛Addal ḥaṣā wath tharā war ramli yatba‛uhā",
            translation:
              "As many as the pebbles, the soil and the sand, followed by",
          }),
          new QasidaEntryModel({
            arabic: "نَجْمُ السَّمَا وَنَبَاتُ الْأَرْضِ وَالْمَدَرُ",
            translit: "Najmus samā’i wa nabātul arḍi wal madar",
            translation:
              "the stars of the sky, the plants of the earth and the clods of clay,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَعَدَّ وَزْنِ مَثَاقِيلِ الْجِبَالِ كَمَا",
            translit: "Wa ‛adda wazni mathāqīlil jibāli kamā",
            translation:
              "and as many as the weights of the mountains, and likewise",
          }),
          new QasidaEntryModel({
            arabic: "يَلِيهِ قَطْرُ جَمِيعِ الْمَاءِ وَالْمَطَرُ",
            translit: "Yalīhi qaṭru jamī‛il mā’i wal maṭar",
            translation: "the drops of all the waters and the rain,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَعَدَّ مَا حَوَتِ الْأَشْجَارُ مِنْ وَّرَقٍ",
            translit: "Wa ‛adda mā ḥawatil ashjāru min waraqin",
            translation: "and as many as the leaves the trees contain,",
          }),
          new QasidaEntryModel({
            arabic: "وَكُلِّ حَرْفٍ غَدَا يُتْلَى وَيُسْتَطَرُ",
            translit: "Wa kulli ḥarfin ghadā yutlā wa yustaṭar",
            translation: "and every letter that is recited and written down,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَالْوَحْشِ وَالطَّيْرِ وَالْأَسْمَاكِ مَعْ نَعَمٍ",
            translit: "Wal waḥshi waṭ ṭayri wal asmāki ma‛ na‛am",
            translation:
              "the wild beasts, the birds, the fish and the livestock,",
          }),
          new QasidaEntryModel({
            arabic: "يَلِيهِمُ الْجِنُّ وَالْأَمْلَاكُ وَالْبَشَرُ",
            translit: "Yalīhimul jinnu wal amlāku wal bashar",
            translation: "followed by the jinn, the angels and humankind,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَالذَّرُّ وَالنَّمْلُ مَعْ جَمْعِ الحُبُوبِ كَذَا",
            translit: "Wadh dharru wan namlu ma‛a jam‛il ḥubūbi kadhā",
            translation:
              "the specks of dust and the ants, together with all the grains, and likewise",
          }),
          new QasidaEntryModel({
            arabic: "وَالشَّعْرُ وَالصُّوفُ وَالْأَرْيَاشُ وَالْوَبَرُ",
            translit: "Wash sha‛ru waṣ ṣūfu wal aryāshu wal wabar",
            translation: "hair, wool, feathers and fur,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَمَا أَحَاطَ بِهِ الْعِلْمُ الْمُحِيطُ وَمَا",
            translit: "Wa mā aḥāṭa bihil ‛ilmul muḥīṭu wa mā",
            translation:
              "and all that is encompassed by the all-encompassing Knowledge, and all that",
          }),
          new QasidaEntryModel({
            arabic: "جَرَى بِهِ الْقَلَمُ الْمَأْمُورُ وَالْقَدَرُ",
            translit: "Jarā bihil qalamul ma’mūru wal qadar",
            translation: "the commanded Pen and the Decree have set running,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَعَدَّ نَعْمَائِكَ اللَّاتِي مَنَنْتَ بِهَا",
            translit: "Wa ‛adda na‛mā’ikal lātī mananta bihā",
            translation:
              "and as many as Your favours with which You have blessed",
          }),
          new QasidaEntryModel({
            arabic: "عَلَى الْخَلَائِقِ مُذْ كَانُوا وَمُذْ حُشِرُوا",
            translit: "‛Alal khalā’iqi mudh kānū wa mudh ḥushirū",
            translation:
              "all creation since they came to be and since they were gathered,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَعَدَّ مِقْدَارِهِ السَّامِي الَّذِي شَرُفَتْ",
            translit: "Wa ‛adda miqdārihis sāmil ladhī sharufat",
            translation:
              "and as great as his exalted station, through which were honoured",
          }),
          new QasidaEntryModel({
            arabic: "بِهِ النَّبِيُّونَ وَالْأَمْلَاكُ وَافْتَخَرُوا",
            translit: "Bihin nabiyyūna wal amlāku waftakharū",
            translation: "the prophets and the angels, who took pride in it,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَعَدَّ مَا كَانَ فِي الْأَكْوَانِ يَا سَنَدِي",
            translit: "Wa ‛adda mā kāna fil akwāni yā sanadī",
            translation:
              "and as many as all that has been in the universe, O my Support,",
          }),
          new QasidaEntryModel({
            arabic: "وَمَا يَكُونُ إِلَى أَنْ تُبْعَثَ الصُّوَرُ",
            translit: "Wa mā yakūnu ilā an tub‛athaṣ ṣuwar",
            translation: "and all that will be until the bodies are raised.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "فِي كُلِّ طَرْفَةِ عَيْنٍ يَطْرِفُونَ بِهَا",
            translit: "Fī kulli ṭarfati ‛aynin yaṭrifūna bihā",
            translation: "In every blink of an eye with which",
          }),
          new QasidaEntryModel({
            arabic: "أَهْلُ السَّمَاوَاتِ وَالْأَرْضِينَ أَوْ يَذَرَوا",
            translit: "Ahlus samāwāti wal arḍīna aw yadharū",
            translation:
              "the inhabitants of the heavens and the earths blink, or leave off,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "مِلْءَ السَّمَاوَاتِ وَالْأَرْضِينَ مَعْ جَبَلٍ",
            translit: "Mil’as samāwāti wal arḍīna ma‛a jabalin",
            translation:
              "as much as fills the heavens and the earths, with every mountain,",
          }),
          new QasidaEntryModel({
            arabic: "وَالْفَرْشِ وَالْعَرْشِ وَالْكُرْسِي وَمَا حَصَرُوا",
            translit: "Wal farshi wal ‛arshi wal kursiyyi wa mā ḥaṣarū",
            translation:
              "the Floor, the Throne and the Seat, and all that they have counted,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "مَا أَعْدَمَ ٱللَّهُ مَوْجُودًا وَأَوْجَدَ مَعْـ",
            translit: "Mā a‛damal lāhu mawjūdan wa awjada ma‛",
            translation:
              "as many as the existing things Allah has made non-existent, and has brought into being",
          }),
          new QasidaEntryModel({
            arabic: "ــدُوماً صَلَاةً دَوَامًا لَّيْسَ تَنْحَصِرُ",
            translit: "dūman ṣalātan dawāman laysa tanḥaṣir",
            translation:
              "those that did not exist: an everlasting prayer that is without limit,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "تَسْتَغْرِقُ الْعَدَّ مَعْ جَمْعِ الدُّهُورِ كَمَا",
            translit: "Tastaghriqul ‛adda ma‛a jam‛id duhūri kamā",
            translation:
              "exhausting all counting, together with all the ages, as",
          }),
          new QasidaEntryModel({
            arabic: "تُحِيطُ بِالْحَدِّ لَا تُبْقِي وَلَا تَذَرُ",
            translit: "Tuḥīṭu bil ḥaddi lā tubqī wa lā tadhar",
            translation:
              "it surrounds every limit, leaving nothing and sparing nothing.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "لَا غَايَةً وَانْتِهَاءً يَا عَظِيمُ لَهَا",
            translit: "Lā ghāyatan wa intihā’an yā ‛Aẓīmu lahā",
            translation: "It has no end and no conclusion, O Mighty One,",
          }),
          new QasidaEntryModel({
            arabic: "وَلَا لَهَا أَمَدٌ يُّقْضَى فَيُعْتَبَرُ",
            translit: "Wa lā lahā amadun yuqḍā fa yu‛tabar",
            translation:
              "nor has it any term that could be reached and reckoned.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَعَدَّ أَضْعَافِ مَا قَدْ مَرَّ مِنْ عَدَدٍ",
            translit: "Wa ‛adda aḍ‛āfi mā qad marra min ‛adadin",
            translation:
              "And as many as the multiples of the numbers mentioned,",
          }),
          new QasidaEntryModel({
            arabic: "مَعْ ضِعْفِ أَضْعَافِهِ يَا مَنْ لَّهُ الْقَدَرُ",
            translit: "Ma‛a ḍi‛fi aḍ‛āfihī yā man lahul qadar",
            translation:
              "together with the multiples of those multiples, O You to whom belongs all power,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "كَمَا تُحِبُّ وَتَرْضَى سَيِّدِي وَكَمَا",
            translit: "Kamā tuḥibbu wa tarḍā sayyidī wa kamā",
            translation: "as You love and are pleased, my Master, and as",
          }),
          new QasidaEntryModel({
            arabic: "أَمَرْتَنَا أَنْ نُّصَلِّي أَنْتَ مُقْتَدِرُ",
            translit: "Amartanā an nuṣalliya anta muqtadir",
            translation:
              "You have commanded us to send blessings, for You are All-Powerful,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "مَعَ السَّلَامِ كَمَا قَدْ مَرَّ مِنْ عَدَدٍ",
            translit: "Ma‛as salāmi kamā qad marra min ‛adadin",
            translation:
              "together with peace, as many as the numbers mentioned,",
          }),
          new QasidaEntryModel({
            arabic: "رَبِّي وَضَاعِفهُمَا وَالْفَضْلُ مُنْتَشِرُ",
            translit: "Rabbī wa ḍā‛ifhumā wal faḍlu muntashir",
            translation:
              "my Lord, and multiply both of them, for Your favour is widespread.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَكُلُّ ذَلِكَ مَضْرُوبٌ بِحَقِّكَ فِي",
            translit: "Wa kullu dhālika maḍrūbun biḥaqqika fī",
            translation: "And all of that is multiplied, by Your right, by",
          }),
          new QasidaEntryModel({
            arabic: "أَنْفَاسِ خَلْقِكَ إِنْ قَلُّوا وَإِنْ كَثُرُوا",
            translit: "Anfāsi khalqika in qallū wa in kathurū",
            translation:
              "the breaths of Your creation, whether they be few or many.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا رَبِّ وَاغْفِرْ لِقَارِيهَا وَسَامِعِهَا",
            translit: "Yā Rabbi waghfir liqārīhā wa sāmi‛ihā",
            translation: "O my Lord, forgive its reciter and its listener,",
          }),
          new QasidaEntryModel({
            arabic: "وَالْمُسْلِمِينَ جَمِيعًا أَيْنَمَا حَضَرُوا",
            translit: "Wal muslimīna jamī‛an aynamā ḥaḍarū",
            translation: "and all the Muslims, wherever they may be present,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَوَالِدِينَا وَأَهْلِينَا وَجِيرَتِنَا",
            translit: "Wa wālidīnā wa ahlīnā wa jīratinā",
            translation: "and our parents, our families and our neighbours,",
          }),
          new QasidaEntryModel({
            arabic: "وَكُلُّنَا سَيِّدِي لِلْعَفْوِ مُفْتَقِرُ",
            translit: "Wa kullunā sayyidī lil‛afwi muftaqir",
            translation: "for all of us, my Master, are in need of pardon.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَقَدْ أَتَيْتُ ذُنُوبًا لَا عِدَادَ لَهَا",
            translit: "Wa qad ataytu dhunūban lā ‛idāda lahā",
            translation: "I have committed sins beyond count,",
          }),
          new QasidaEntryModel({
            arabic: "لَكِنَّ عَفْوَكَ لَا يُبْقِي وَلَا يَذَرُ",
            translit: "Lākinna ‛afwaka lā yubqī wa lā yadhar",
            translation: "but Your pardon leaves nothing and spares nothing.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَالْهَمُّ عَنْ كُلِّ مَا أَبْغِيهِ أَشْغَلَنِي",
            translit: "Wal hammu ‛an kulli mā abghīhi ashghalanī",
            translation: "Worry has distracted me from all that I seek,",
          }),
          new QasidaEntryModel({
            arabic: "وَقَدْ أَتَى خَاضِعًا وَالقَلْبُ مُنْكَسِرُ",
            translit: "Wa qad atā khāḍi‛an wal qalbu munkasir",
            translation: "and he has come in humility, with a broken heart.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "أَرْجُوكَ يَا رَبِّ فِي الدَّارَيْنِ تَرْحَمُنَا",
            translit: "Arjūka yā Rabbi fid dārayni tarḥamunā",
            translation:
              "I hope, my Lord, that You will have mercy on us in both abodes,",
          }),
          new QasidaEntryModel({
            arabic: "بِجَاهِ مَنْ فِي يَدَيْهِ سَبَّحَ الْحَجَرُ",
            translit: "Bijāhi man fī yadayhi sabbaḥal ḥajar",
            translation:
              "by the honour of him in whose hands the stone glorified Allah.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا رَبِّ أَعْظِمْ لَنَا أَجْرًا وَّمَغْفِرَةً",
            translit: "Yā Rabbi a‛ẓim lanā ajran wa maghfiratan",
            translation: "O my Lord, increase for us reward and forgiveness,",
          }),
          new QasidaEntryModel({
            arabic: "فَإِنَّ جُوْدَكَ بَحْرٌ لَيْسَ يَنْحَصِرُ",
            translit: "Fa inna jūdaka baḥrun laysa yanḥaṣir",
            translation: "for Your generosity is a sea without limit.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَاقْضِ دُيُونًا لَهَا الْأَخْلَاقُ ضَائِقَةٌ",
            translit: "Waqḍi duyūnan lahal akhlāqu ḍā’iqah",
            translation:
              "And settle the debts by which our character is constrained,",
          }),
          new QasidaEntryModel({
            arabic: "وَفَرِّجِ الْكَرْبَ عَنَّا أَنَتَ مَقْتَدِرُ",
            translit: "Wa farrijil karba ‛annā anta muqtadir",
            translation:
              "and relieve us of distress, for You are All-Powerful.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَكُنْ لَطِيفًا بِنَا فِي كُلِّ نَازِلَةٍ",
            translit: "Wa kun laṭīfan binā fī kulli nāzilah",
            translation: "Be gentle with us in every calamity,",
          }),
          new QasidaEntryModel({
            arabic: "لُطْفًا جَمِيلًا بِهِ الْأَهْوَالُ تَنْحَسِرُ",
            translit: "Luṭfan jamīlan bihil ahwālu tanḥasir",
            translation: "with beautiful gentleness by which terrors recede,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "بِالْمُصْطَفَى الْمُجْتَبَى خَيْرِ الْأَنَامِ وَمَنْ",
            translit: "Bil muṣṭafal mujtabā khayril anāmi wa man",
            translation:
              "by the Chosen, the Selected, the best of mankind, and by the one",
          }),
          new QasidaEntryModel({
            arabic: "جَلَالَةً نَّزَلَتْ فِي مَدْحِهِ السُّوَرُ",
            translit: "Jalālatan nazalat fī madḥihis suwar",
            translation:
              "in whose praise, for his majesty, chapters were revealed.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "ثُمَّ الصَّلَاةُ عَلَى الْمُخْتَارِ مَا طَلَعَتْ",
            translit: "Thummaṣ ṣalātu ‛alal mukhtāri mā ṭala‛at",
            translation:
              "Then blessings upon the Chosen One, for as long as rises",
          }),
          new QasidaEntryModel({
            arabic: "شَمْسُ النَّهَارِ وَمَا قَدْ شَعْشَعَ الْقَمَرُ",
            translit: "Shamsun nahāri wa mā qad sha‛sha‛al qamar",
            translation:
              "the sun of the day and for as long as the moon sheds its light.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "ثُمَّ الرِّضَا عَنْ أَبِي بَكْرٍ خَلِيفَتِهِ",
            translit: "Thummar riḍā ‛an Abī Bakrin khalīfatihī",
            translation: "Then be pleased with Abū Bakr, his successor,",
          }),
          new QasidaEntryModel({
            arabic: "مَنْ قَامَ مِن بَعْدِهِ لِلدِّينِ يَنْتَصِرُ",
            translit: "Man qāma min ba‛dihī lid dīni yantaṣir",
            translation: "who arose after him and supported the religion,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَعَنْ أَبِي حَفْصٍ الْفَارُوقِ صَاحِبِهِ",
            translit: "Wa ‛an Abī Ḥafṣinil Fārūqi ṣāḥibihī",
            translation: "and with Abū Ḥafṣ al-Fārūq, his companion,",
          }),
          new QasidaEntryModel({
            arabic: "مَنْ قَوْلُهُ الْفَصْلُ فِي أَحْكَامِهِ عُمَرُ",
            translit: "Man qawluhul faṣlu fī aḥkāmihī ‛Umar",
            translation: "‛Umar, whose word was decisive in his judgements,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَجُدْ لِعُثْمَانَ ذِي النُّورَيْنِ مَنْ كَمُلَتْ",
            translit: "Wa jud li‛Uthmāna dhin nūrayni man kamulat",
            translation:
              "and be generous to ‛Uthmān, Possessor of the Two Lights, in whom were perfected",
          }),
          new QasidaEntryModel({
            arabic: "لَهُ الْمَحَاسِنُ فِي الدَّارَيْنِ وَالظَّفَرُ",
            translit: "Lahul maḥāsinu fid dārayni waẓ ẓafar",
            translation: "all virtues, in both abodes, and triumph.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "كَذَا عَلِيٌ مَعَ ابْنَيْهِ وَأُمِّهِمَا",
            translit: "Kadhā ‛Aliyyun ma‛abnayhi wa ummihimā",
            translation: "Likewise ‛Alī, with his two sons and their mother,",
          }),
          new QasidaEntryModel({
            arabic: "أَهْلُ الْعَبَاءِ كَمَا قَدْ جَاءَنَا الْخَبَرُ",
            translit: "Ahlul ‛abā’i kamā qad jā’anal khabar",
            translation:
              "the People of the Cloak, as the report has reached us,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "كَذَا خَدِيجَتُنَا الْكُبْرَى الَّتِى بَذَلَتْ",
            translit: "Kadhā Khadījatunal kubral latī badhalat",
            translation: "likewise our great Khadījah, who gave",
          }),
          new QasidaEntryModel({
            arabic: "أَمْوَالَهَا لِرَسُولِ ٱللَّهِ يَنْتَصِرُ",
            translit: "Amwālahā lirasūlillāhi yantaṣir",
            translation:
              "her wealth to the Messenger of Allah, who was thereby aided,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَالطَّاهِرَاتُ نِسَاءُ الْمُصْطَفَى وَكَذَا",
            translit: "Waṭ ṭāhirātu nisā’ul muṣṭafā wa kadhā",
            translation:
              "and the pure ladies, the wives of the Chosen One, and likewise",
          }),
          new QasidaEntryModel({
            arabic: "بَنَاتُهُ وَبَنُوهُ كُلَّمَا ذُكِرُوا",
            translit: "Banātuhū wa banūhu kullamā dhukirū",
            translation:
              "his daughters and his sons, whenever they are mentioned,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "سَعْدٌ سَعِيدُ بْنُ عَوْفٍ طَلْحَةٌ وَأَبُو",
            translit: "Sa‛dun Sa‛īdubnu ‛Awfin Ṭalḥatun wa Abū",
            translation: "Sa‛d, Sa‛īd, Ibn ‛Awf, Ṭalḥah, and Abū",
          }),
          new QasidaEntryModel({
            arabic: "عُبَيْدَةٍ وَّزُبَيْرٌ سَادَةٌ غُرَرُ",
            translit: "‛Ubaydatin wa Zubayrun sādatun ghurar",
            translation: "‛Ubaydah and Zubayr, noble and illustrious leaders,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَحَمْزَةٌ وَكَذَا الْعَبَّاسُ سَيِّدُنَا",
            translit: "Wa Ḥamzatu wa kadhal ‛Abbāsu sayyidunā",
            translation: "and Ḥamzah, and likewise our master al-‛Abbās,",
          }),
          new QasidaEntryModel({
            arabic: "وَنَجْلُهُ الْحَبْرُ مَنْ زَالَتْ بِهِ الْغِيَرُ",
            translit: "Wa najluhul ḥabru man zālat bihil ghiyar",
            translation:
              "and his son, the great scholar, through whom adversities were removed,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَالْآلُ وَالصَّحْبُ وَالْأَتْبَاعُ قَاطِبَةً",
            translit: "Wal ālu waṣ ṣaḥbu wal atbā‛u qāṭibatan",
            translation:
              "and the family, the Companions and the followers, all of them,",
          }),
          new QasidaEntryModel({
            arabic: "مَا جَنَّ لَيْلُ الدَّيَاجِي أَوْ بَدَا السَّحَرُ",
            translit: "Mā janna laylud dayājī aw badas saḥar",
            translation:
              "for as long as the dark night falls or the dawn appears,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "مَعَ الرِّضَا مِنْكَ فِى عَفْوٍ وَعَافِيَةٍ",
            translit: "Ma‛ar riḍā minka fī ‛afwin wa ‛āfiyah",
            translation: "with Your pleasure, in pardon and well-being,",
          }),
          new QasidaEntryModel({
            arabic: "وَحُسْنِ خَاتِمَةٍ إِنْ يَّنْقَضِى الْعُمُرُ",
            translit: "Wa ḥusni khātimatin in yanqaḍil ‛umur",
            translation: "and a good ending when life comes to its end.",
          }),
        ],
      }),
    ],
  }),
];
