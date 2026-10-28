import {
  saffat_180,
  saffat_181,
  saffat_182,
} from "@/data/shared/quran-partial";
import {
  DhikrEntryModel,
  DhikrModel,
  QasidaEntryModel,
  QasidaModel,
  QasidaVerseModel,
  WirdModel,
} from "@/models/recitation";

export default [
  new QasidaModel({
    title: "Supplication at the End of Gatherings (of Dhikr) and Lessons",
    entries: [
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "رَبَّنَا انْفَعنَا بِمَا عَلَّمتَنَا",
            translit: "Rabbananfa‛nā bimā ‛allimtanā",
            translation: "Our Lord, benefit us with what You have taught us",
          }),
          new QasidaEntryModel({
            arabic: "رَبِّ عِلِّمنَا الَّذِي يَنْفَعُنَا",
            translit: "rabbi ‛allimnalladhī yanfa‛unā",
            translation: "Lord, teach us what is beneficial for us",
          }),
          new QasidaEntryModel({
            arabic: "رَبِّ فَقِّهنَا وَفَقِّه أَهْلَنَا",
            translit: "Rabbi faqqihnā wa faqqih ahlanā",
            translation: "Lord, grant us, our family",
          }),
          new QasidaEntryModel({
            arabic: "وَقَرَابَاتٍ لَنَا فِي دِينِنَا",
            translit: "wa qarābātin lanī dīninā",
            translation:
              "and our relatives, the right knowledge in our religion",
          }),
          new QasidaEntryModel({
            arabic: "مَعَ أَهْلِ الْقُطْرِ أُنْثَى وَذَكَر",
            translit: "ma‛a ahlil quṭri unthā wa dhakar",
            translation:
              "as well as the people of our country, female and male",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "رَبِّ وَفِّقنَا وَوَفِّقهُمْ لِمَا",
            translit: "Rabbi waqqifnā wa waffiqhum lima",
            translation:
              "O Lord, grant us and them success in what pleases You",
          }),
          new QasidaEntryModel({
            arabic: "تَرْتَضِي قَوْلاً وَفِعْلاً كَرَمًا",
            translit: "tartaḍī qawlan wa fi‛lan karamā",
            translation: "in words and actions",
          }),
          new QasidaEntryModel({
            arabic: "وَارْزُقِ الْكُلَّ حَلَالاً دَائِمَا",
            translit: "Warzuqil kulla ḥalālan dā’iman",
            translation: "Grant us all continuous lawful sustenance",
          }),
          new QasidaEntryModel({
            arabic: "وَأَخِلَّا أَتْقِيَاءَ عُلَمَا",
            translit: "wa akhillan atqiyā’a ‛ulamā",
            translation: "and grant us pious, knowledgeable companions",
          }),
          new QasidaEntryModel({
            arabic: "نُحْظَى بِالْخَيْرِ وَنُكفَى كُلَّ شَر",
            translit: "nuḥẓā bilkhayri wa nukfā kulla sharr",
            translation: "Grant us the good; protect us from every evil",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "رَبَّنَا وَاصْلِح لَنَا كُلَّ الشُّئُون",
            translit: "Rabbanā wa aṣliḥ lanā kullash shu’ūni",
            translation: "O Lord, straighten all our affairs",
          }),
          new QasidaEntryModel({
            arabic: "وَأَقِرَّ بِالرِّضَا مِنْكَ الْعُيُون",
            translit: "wa aqirra birriḍā minkal ‛uyūn",
            translation: "gladden our eyes with Your Satisfaction",
          }),
          new QasidaEntryModel({
            arabic: "وَاقْضِ عَنَّا رَبَّنَا كُلَّ الدُّيُون",
            translit: "waqḍi ‛annā Rabbanā kullad duyūn",
            translation: "O Lord, settle all our debts",
          }),
          new QasidaEntryModel({
            arabic: "قَبْلَ أَنْ تَأْتِيَنَا رُسلُ الْمَنُون",
            translit: "qabla an ta’tiyanā ruslul manūn",
            translation: "before the messengers of death come to us",
          }),
          new QasidaEntryModel({
            arabic: "وَاغْفِرِ اسْتُرْ أَنْتَ أَكْرَم مَنْ سَتَر",
            translit: "Waghfir ustur. Anta akaram man satar",
            translation:
              "Forgive us and cover us; You are the noblest of those who cover faults",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَصَلَاةُ اللَّهِ تَغْشَى الْمُصْطَفَى",
            translit: "Wa ṣalātullāhi taghshal Muṣṭafā",
            translation: "May Allāh’s blessings be on the Chosen One",
          }),
          new QasidaEntryModel({
            arabic: "مَنْ إِلَى الْحَقِّ دَعَانَا وَالْوَفَا",
            translit: "man ilal ḥaqqi da‛ānā walwafā",
            translation: "who called us to the truth and fidelity",
          }),
          new QasidaEntryModel({
            arabic: "بِكِتَابٍ فِيهِ لِلنَّاسِ شِفَا",
            translit: "bikitābin fīhi linnāsi shifā",
            translation: "in a Book with a cure for people",
          }),
          new QasidaEntryModel({
            arabic: "وَعَلَى الْآلِ الْكِرَامِ الشُّرَفَا",
            translit: "wa ‛alal ālil kirāmish shurafā",
            translation: "And blessings upon his honourable family",
          }),
          new QasidaEntryModel({
            arabic: "وَعَلَى الصَّحْبِ الْمَصَابِيحِ الْغُرَر",
            translit: "wa ‘alaṣṣaḥbil maṣābīḥil ghurar",
            translation: "and noble and radiant companions",
          }),
        ],
      }),
    ],
  }),
  new WirdModel({
    title: "",
    entries: [
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ اهْدِنَا بِهُدَاك",
            translit: "Allāhummahdinā bihudāk",
            translation: "O Allāh! Guide us with Your guidance",
          }),
          new DhikrEntryModel({
            arabic: "وَاجْعَلْنَا مِمَّنْ يُسَارِعُ فِي رِضَاك",
            translit: "waj‛alnā mimman yusāri‛u fī riḍāk",
            translation: "and make us of those who hasten to Your pleasure",
          }),
          new DhikrEntryModel({
            arabic: "وَلَا تُوَلِّنَا وَلِيًّا سِوَاك",
            translit: "wa lā tuwallinā waliyyan siwāk",
            translation: "Do not appoint over us a protector other than You",
          }),
          new DhikrEntryModel({
            arabic: "وَلَا تَجْعَلنَا مِمَّنْ خَالَفَ أَمْرَكَ وَعَصَاك",
            translit: "wa lā taj‛alnā mimman khālafa amraka wa ‛aṣāk",
            translation:
              "and do not make us of those who oppose Your command and disobey You",
          }),
          new DhikrEntryModel({
            arabic: "وَحَسَبُنَا اللَّهُ وَنِعمَ الْوَكِيل",
            translit: "Wa ḥasabunallāhu wa ni‛mal wakīl",
            translation:
              "Allāh is sufficient for us, and He is the best Disposer of affairs.",
          }),
          new DhikrEntryModel({
            arabic:
              "ولَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ. وَصَلَّى اللَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلَّمَ",
            translit:
              "Wa lā ḥawla wa lā quwwata illā billāhil ‛aliyyil ‛aẓīm. wa ṣallallāhu ‛alā sayyidinā Muḥammadin wa ‛alā ālihī wa ṣaḥbihī wa sallam",
            translation:
              "And there is no power and no strength except with Allāh, the Most High, the Magnificent. And may blessings and peace be upon our master Muḥammad his family and companions",
          }),
        ],
      }),
    ],
  }),
  new QasidaModel({
    title: "",
    entries: [
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا رَبَّنَا اعْتَرَفْنَا",
            translit: "Yā Rabbana‛ tarafnā",
            translation: "O Lord, we admit",
          }),
          new QasidaEntryModel({
            arabic: "بِأَنَّنَا اقْتَرَفْنَا",
            translit: "bi’annanaq tarafnā",
            translation: "that we have committed sins",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَأَنَّنَا أَسْرَفْنَا",
            translit: "Wa annanā asrafnā",
            translation: "And that we have exceeded the bounds",
          }),
          new QasidaEntryModel({
            arabic: "عَلَى لَظَى أَشْرَفْنَا",
            translit: "‘alā laẓā ashrafnā",
            translation: "(such that) we are on the brink of a blazing fire",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "فَتُب عَلَيْنَا تَوْبَهْ",
            translit: "Fatub ‛alaynā tawbah",
            translation: "So turn to us with a repentance",
          }),
          new QasidaEntryModel({
            arabic: "تَغْسِلُ كُلَّ حَوْبَهْ",
            translit: "taghsil kulla ḥawbah",
            translation: "washes away every wrongdoing",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَاسْتُرْ لَنَا الْعَوْرَاتِ",
            translit: "Wastur lanal ‛awrāti",
            translation: "And conceal our faults",
          }),
          new QasidaEntryModel({
            arabic: "وَآمِنِ الرَّوعَاتِ",
            translit: "wa āminir raw‛āti",
            translation: "and calm our fear",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَاغْفِرْ لِوَالِدِيْنَا",
            translit: "Waghfir liwālidīnā",
            translation: "And forgive our parents",
          }),
          new QasidaEntryModel({
            arabic: "رَبِّ وَمَولُودِينَا",
            translit: "Rabbi wa mawlūdīnā",
            translation: "and our children",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَالْأَهْلِ وَالْإِخْوَانِ",
            translit: "Wal’ahli wal’ikhwāni",
            translation: "And our family, our brothers",
          }),
          new QasidaEntryModel({
            arabic: "وَسَائِرِ الْخِلَّانِ",
            translit: "wa sā’iril khillāni",
            translation: "all our friends",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَكُلِّ ذِي مَحَبَّهْ",
            translit: "Wa kulli dhī maḥabbah,",
            translation:
              "And all those we love and our neighbours and companions",
          }),
          new QasidaEntryModel({
            arabic: "أَوْ جِيرَةٍ أَوْ صُحْبَهْ",
            translit: "aw jīrati aw ṣuḥbah",
            translation: "or neighbour or companion,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَالْمُسْلِمِينَ أَجْمَع",
            translit: "Wal muslimīna ajma‛,",
            translation: "And all the Muslims.",
          }),
          new QasidaEntryModel({
            arabic: "آمِينَ رَبِّ اِسْمَعْ",
            translit: "āmīna Rabbi isma‛",
            translation: "Amin! O Lord, hear our petition!",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "فَضْلاً وَجُودًا مَنَّا",
            translit: "Faḍlan wa jūdan minnā",
            translation: "Out of Your grace, Your generosity and Your favour,",
          }),
          new QasidaEntryModel({
            arabic: "لَا بِاكْتِسَابٍ مِنَّا",
            translit: "lā biktisābim minnā",
            translation: "not because of our own actions",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "بِالْمُصْطَفَى الرَّسُولِ",
            translit: "Bil Muṣṭafar-rasūli",
            translation: "Through the Messenger, the Chosen One,",
          }),
          new QasidaEntryModel({
            arabic: "نَحْظَى بِكُلِّ سُولِ",
            translit: "naḥẓā bikulli sūl",
            translation: "bless us with all we ask for",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "صَلَّى وَسَلَّم رَبِّي",
            translit: "Ṣallā wa sallama Rabbī",
            translation: "My Lord send peace and blessings",
          }),
          new QasidaEntryModel({
            arabic: "عَلَيْهِ عَدَّ الْحَبِّ",
            translit: "‛alayhi ‛addal ḥabb",
            translation: "upon him, as many as the grains,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَآلِهِ وَالصَّحْبِ",
            translit: "Wa ālihi waṣ ṣaḥb",
            translation: "And upon his family and Companions",
          }),
          new QasidaEntryModel({
            arabic: "عِدَادَ طَشِّ السُّحْبِ",
            translit: "‘idāda ṭash- shis suḥbi",
            translation: "as much as rain falls from the clouds",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَالْحَمْدُ لِلْإِلَهِ",
            translit: "Walḥamdu lil’ilāhi",
            translation: "And all thanks and praise be to Allah",
          }),
          new QasidaEntryModel({
            arabic: "فِي الْبَدْءِ وَالتَّنَاهِي",
            translit: "fil bid’I wattanāhī",
            translation: "in the beginning and the end",
          }),
        ],
      }),
    ],
  }),
  new WirdModel({
    title: "",
    entries: [
      new DhikrModel({
        entries: [
          saffat_180(),
          saffat_181(),
          saffat_182(),
          new DhikrEntryModel({
            arabic: "فِي كُلِّ لَحظَةٍ أَبَداً عَدَدَ خَلقِهِ وَرِضَى نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ",
            translit:
              "fī kulli laḥẓatin abadan, ‛adada khalqihī, wa riḍā nafsihī, wa zinata ‛arshihī, wa midāda kalimātihī.",
            translation:
              "in every moment forever, to the number of Your creation, to the extent of Your pleasure, to the weight of Your Throne, and the ink that it would take to write Your Words.",
          }),
        ],
      }),
    ],
  }),
];
