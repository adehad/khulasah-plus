import {
  DhikrEntryModel,
  DhikrModel,
  QuranDhikrEntryModel,
  WirdModel,
} from "@/models/recitation";

export default [
  new WirdModel({
    title: "Adkhar after the obligatory prayer",
    entries: [
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "أَسْتَغْفِرُ اللَّهَ (3)",
            translit: "Astaghfirullāh (3 times)",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ أَنْتَ السَّلَامُ",
            translit: "Allāhumma antassalām",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَمِنْكَ السَّلَامُ",
            translit: "wa minkassalām",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَإِلَيْكَ يَعُودُ السَّلَامُ",
            translit: "wa ilayka ya‛ūdus salām",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "فَحَيِّنَا رَبَّنَا بِالسَّلَامِ",
            translit: "faḥayyinā rabbanā bissalām",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَأَدْخِلْنَا دَارَكَ دَارَ السَّلَامِ",
            translit: "wa adkhilnā dāraka dārassalām",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "تَبَارَكْتَ وَتَعَالَيْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
            translit: "tabārakta wa ta‛ālayta yā dhal jalāli wal ikrām.",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا رَادَّ لِمَا قَضَيْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ",
            translit:
              "Allāhumma lā māni‛a limā a‛ṭayta, wa lā mu‛ṭiya lima mana‛ta, wa lā rādda lima qaḍayta, wa lā yanfa‛u dhal jaddi minkal jaddu.",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
            translit:
              "Allāhumma a‛innī ‛alā dhikrika wa shukrika wa ḥusni ‛ibādatika.",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "رَبَّنَا تَقَبَّلْ مِنَّآ ۖ إِنَّكَ أَنتَ ٱلسَّمِيعُ ٱلْعَلِيمُ ، وَتُبْ عَلَيْنَآ ۖ إِنَّكَ أَنتَ ٱلتَّوَّابُ ٱلرَّحِيمُ (3)",
            translit:
              "Rabbanā taqabbal minnā innaka antas samī‛ul ‛alīm, wa tub ‛alaynā innaka antattawwābur raḥīm. (3 times)",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "وَصَلَّى اللَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلَّمَ",
            translit:
              "Wa ṣallallāhu ‛alā sayyidinā Muḥammadin wa ‛alā ālihī wa ṣaḥbihī wa sallam.",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "عَدَدَ خَلْقِهِ وَرِضَى نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ",
            translit:
              "‛Adada khalqihī wa riḍā nafsihī wa zinata ‛arshihī wa midāda kalimātihī.",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new QuranDhikrEntryModel({
            arabic: "سُبْحَٰنَ رَبِّكَ رَبِّ ٱلْعِزَّةِ عَمَّا يَصِفُونَ",
            translit: "Subḥāna rabbika rabbil ‛izzati ‛ammā yaṣifūn.",
            translation: "",
            surah: 37,
            verse: 180,
          }),
          new QuranDhikrEntryModel({
            arabic: "وَسَلَٰمٌ عَلَى ٱلْمُرْسَلِينَ",
            translit: "Wa salāmun ‛alal mursalīn.",
            translation: "",
            surah: 37,
            verse: 181,
          }),
          new QuranDhikrEntryModel({
            arabic: "وَٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ",
            translit: "Walḥamdu lillāhi rabbil ‛ālamīn.",
            translation: "",
            surah: 37,
            verse: 182,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "فِي كُلِّ لَحْظَةٍ أَبَدًا عَدَدَ خَلْقِهِ وَرِضَى نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ",
            translit:
              "Fī kulli laḥẓatin abadan, ‛adada khalqihī wa riḍā nafsihī wa zinata ‛arshihī wa midāda kalimātihī.",
            translation:
              "And one adds after the ṣalāh of Fajr and Maghrib, before folding one's legs:",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلكُ وَلَهُ الْحَمْدُ، يُحْيِي وَيُمِيتُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ (10)",
            translit:
              "Lā ilāha illallāhu waḥdahū lā sharīka lahū, lahul mulku wa lahul ḥamdu yuḥyī wa yumītu wa huwa ‛alā kulli shay’in qadīr (10 times)",
            translation: "If it is morning, one then says:",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "وَإِلَيهِ النُّشُورُ",
            translit: "wa ilayhin nushūr",
            translation: "If it is evening, one says:",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "وَإِلَيهِ الْـمَصِيرُ",
            translit: "wa ilayhil maṣīr",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "ولَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
            translit: "wa lā ḥawla wa lā quwwata illā billāhil ʽaliyyil ʽaẓīm",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "فِي كُلِّ لَحْظَةٍ أَبَدًا عَدَدَ خَلْقِهِ وَرِضَى نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ",
            translit:
              "Fī kulli laḥẓatin abadan, ‛adada khalqihī wa riḍā nafsihī wa zinata ‛arshihī wa midāda kalimātihī.",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "سُبْحَانَ مَنْ تَعَزَّزَ بِالْعَظَمَةِ",
            translit: "Subḥāna man ta‛azzaza bil ‛aẓamatihī",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "سُبْحَانَ مَنْ تَرَدَّى بِالْكِبْرِيَاءِ",
            translit: "subḥāna man taraddā bil kibriyā’i",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "سُبْحَانَ مَنِ احْتَجَبَ بِالنُّورِ",
            translit: "subḥāna maniḥ tajaba binnūri",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "سُبْحَانَ مَنْ تَفَرَّدَ بِالْوَحْدَانِيَّةِ",
            translit: "subḥāna man tafarrada bil waḥdāniyyati",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "سُبْحَانَ مَنْ قَهَرَ عِبَادَهُ بِالْمَوْتِ",
            translit: "subḥāna man qahara ‛ibādahū bil mawt",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "سُبْحَانَ مَنْ لَا يَعْلَمُ قَدْرَهُ غَيْرُهُ وَلَا يَبْلُغُ الْوَاصِفُونَ صِفَتَهُ",
            translit:
              "subḥāna man lā ya‛lamu qadrahū ghayruhū wa lā yablughul wāṣifūna ṣifatahū",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "سُبْحَانَ رَبِّيَ الْعَلِيِّ الْأَعْلَى الْوَهَّاب",
            translit: "subḥāna rabbil ‛aliyyil a‛lal wahhāb",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "عَدَدَ خَلْقِهِ وَرِضَى نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ",
            translit:
              "‛adada khalqihī wa riḍā nafsihī wa zinata ‛arshihī wa midāda kalimātihī.",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "أَعُوْذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيْمِ بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ",
            translit:
              "A‛ūdhu billāhi minash shayṭānir rajīm, bismillāhir raḥmānir raḥīm.",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new QuranDhikrEntryModel({
            arabic: "وَإِلَٰهُكُمْ إِلَٰهٌ وَٰحِدٌ ۖ لَّآ إِلَٰهَ إِلَّا هُوَ ٱلرَّحْمَٰنُ ٱلرَّحِيمُ",
            translit:
              "Wa ilāhukum ilāhun wāḥidullā ilāha illā huwar raḥmānur raḥīm.",
            translation: "",
            surah: 2,
            verse: 163,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new QuranDhikrEntryModel({
            arabic:
              "ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ۚ لَا تَأْخُذُهُۥ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُۥ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ مَن ذَا ٱلَّذِى يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَىْءٍ مِّنْ عِلْمِهِۦٓ إِلَّا بِمَا شَآءَ ۚ وَسِعَ كُرْسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ ۖ وَلَا يَـُٔودُهُۥ حِفْظُهُمَا ۚ وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ",
            translit:
              "Allāhu lā ilāha illā huwal ḥayyul qayyūm; lā ta’khudhuhū sinatuw walā nawm; lahū mā fissamāwāti wa mā fil’arḍ, Man dhalladhī yashfa‛u ‛indahū illā bi’idhnihī, ya‛lamu mā bayna aydīhim wa mā khalfahum, wa lā yuḥīṭūna bishay’im min ‛ilmihī illā bimā shā’, wasi‛a kursiyyuhus samāwāti wal arḍ, wa lā ya’ūduhū ḥifẓuhumā, wa huwal ‛aliyyul ‛aẓīm.",
            translation: "",
            surah: 2,
            verse: 255,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "سُبْحَانَكَ يَا عَلِيُّ يَا عَظِيمُ",
            translit: "Subḥānaka yā ‛aliyyu yā ‛aẓīm.",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "سُبْحَانَ اللَّه (33)",
            translit: "",
            translation:
              "Then one raises their hands in supplication, and says (silently):",
          }),
          new DhikrEntryModel({
            arabic: "اَلْحَمْدُ لِلَّه (33)",
            translit: "",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُ أَكْبَر (33)",
            translit: "",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
            translit: "",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "لَهُ الْمُلكُ وَلَهُ الْحَمْدُ",
            translit: "",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "يُحْيِي وَيُمِيتُ",
            translit: "",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
            translit: "",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ صَلِّ وَسَلِّم عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلَ سَيِّدِنَا مُحَمَّد...",
            translit:
              "Alḥamdulillāhi rabbil ‛ālamīn, Allāhumma ṣalli wa sallim ‛alā sayyidinā Muḥammadin wa ‛alā āli sayyidinā Muḥammad.",
            translation:
              "Then one supplicates for whatever one wants and with which Allāh Most High is pleased, and ends with the supplication of Imām al-Ḥaddād, which is:",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ أَخْرِجْ مِنْ قَلْبِي كُلَّ قَدْرٍ لِلدُّنْيَا",
            translit: "Allāhumma akhrij min qalbī kulla qadrin liddunyā",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَكُلَّ مَحَلٍّ لِلْخَلْقِ",
            translit: "wa kulla maḥallin lil khalqi; yamīlu bī ilā ma‛ṣiyatika",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "يَمِيلُ بِي إِلَى مَعْصِيَتِكَ",
            translit: "aw yash-ghalunī ‛an ṭā‛atika",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "أَوْ يَشْغَلُنِي عَنْ طَاعَتِكَ",
            translit:
              "aw yaḥūlu baynī wa baynat taḥaqquqi bima‛rifatikal khāṣṣah",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "أَوْ يَحُولُ بَيْنِي وَبَيْنَ التَّحَقُّقِ بَمَعْرِفَتِكَ الْخَاصَّةِ",
            translit: "wa maḥabbatikal khāliṣah",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic:
              "وَمَحَبَّتِكَ الْخَالِصَةِ. وَصَلَّى اللَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلَّمَ",
            translit:
              "wa ṣallallāhu ‛alā sayyidinā Muḥammadin wa ‛alā ālihī wa ṣaḥbihī wa sallam",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِيْنَ",
            translit: "walḥamdu lillāhi rabbil ‛ālamīn.",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ (3)",
            translit:
              "Astaghfirullāhal ‛aẓīmalladhī lā ilāha illā huwal ḥayyul qayyūm wa atūbu ilayhi. (3 times)",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، إِلَهًا وَاحِدًا وَرَبًّا شَاهِدًا وَنَحْنُ لَهُ مُسْلِمُونَ (4)",
            translit:
              "Ash-hadu allā ilāha illallāhu waḥdahū lā sharīka lahū, ilāhaw wāḥidan wa rabban shāhidan wa naḥnu lahū muslimūn. (4 times)",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "لَا إِلَهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّه، فِي كُلِّ لَمْحَةٍ وَنَفَسٍ عَدَدَ مَا وَسِعَهُ عِلْمُ اللَّهِ (4)",
            translit:
              "Lā ilāha illallāh, Muḥammadur rasūlullāh, fī kulli lamḥatin wa nafasin ‛adada mā wasi‛ahū ‛ilmullāh. (4 times)",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَر (4)",
            translit: "Lā ilāha illallāhu wallāhu akbar. (4 times)",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "ولَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
            translit: "Wa lā ḥawla wa lā quwwata illā billāhil ‛aliyyil ‛aẓīm",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "فِي كُلِّ لَحْظَةٍ أَبَدًا عَدَدَ خَلْقِهِ وَرِضَى نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ",
            translit:
              "Fī kulli laḥẓatin abadan, ‛adada khalqihī wa riḍā nafsihī wa zinata ‛arshihī wa midāda kalimātihī.",
            translation: "After the Fajr and Maghrib prayers add:",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ أَجِرْنَا مِنَ النَّارِ (7)",
            translit: "Allāhumma ajirnā minannār (7 times)",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "وَأَسْكِنَّا مَعَ السَّابِقِينَ أَعْلَى فَرَادِيسِ الْجِنَان",
            translit: "",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "خَالِدِينَ مِنْ غَيْرِ سَابِقَةِ عَذَابٍ وَلَا عِتَابٍ",
            translit: "",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَلَا فِتْنَةٍ وَلَا حِسَابٍ",
            translit: "",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِينَ",
            translit: "",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَافْعَلْ كَذَلِكَ بِوَالِدِيْنَا وَذُرِّيَّاتِنَا وَأَحْبَابِنَا إِلَى يَوْمِ الدِّينِ",
            translit: "",
            translation: "",
          }),
          new DhikrEntryModel({
            arabic: "وَصَلَّى اللَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلَّمَ",
            translit: "",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new QuranDhikrEntryModel({
            arabic: "سُبْحَٰنَ رَبِّكَ رَبِّ ٱلْعِزَّةِ عَمَّا يَصِفُونَ",
            translit: "Subḥāna rabbika rabbil ‛izzati ‛ammā yaṣifūn.",
            translation: "",
            surah: 37,
            verse: 180,
          }),
          new QuranDhikrEntryModel({
            arabic: "وَسَلَٰمٌ عَلَى ٱلْمُرْسَلِينَ",
            translit: "Wa salāmun ‛alal mursalīn.",
            translation: "",
            surah: 37,
            verse: 181,
          }),
          new QuranDhikrEntryModel({
            arabic: "وَٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ",
            translit: "Walḥamdu lillāhi rabbil ‛ālamīn.",
            translation: "",
            surah: 37,
            verse: 182,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "فِي كُلِّ لَحْظَةٍ أَبَدًا عَدَدَ خَلْقِهِ وَرِضَى نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ",
            translit:
              "Fī kulli laḥẓatin abadan, ‛adada khalqihī wa riḍā nafsihī wa zinata ‛arshihī wa midāda kalimātihī.",
            translation:
              "A supplication for all Muslims is recommended after every salah",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new QuranDhikrEntryModel({
            arabic:
              "ٱلَّذِينَ ءَامَنُوا۟ وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ ٱللَّهِ ۗ أَلَا بِذِكْرِ ٱللَّهِ تَطْمَئِنُّ ٱلْقُلُوبُ",
            translit:
              "Alladhīna āmanū wa taṭma’innu qulūbuhum bi dhikrillāh, alā bi dhikrillāhi taṭma’innul qulūb.",
            translation: "",
            surah: 13,
            verse: 28,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "فَاعْلَمْ أَنَّهُ:",
            translit: "f'alam annahu:",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "لَا إِلَهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّه (3)",
            translit: "lā ilāha illallāh Muḥammadur rasūlullāh. (3 times)",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "لَا إِلَهَ إِلَّا اللَّهُ (5)",
            translit: "Lā ilāha illallāh. (5 times)",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُ (25)",
            translit: "Allāh (25 times)",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "لَا إِلَهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ (3)",
            translit: "Lā ilāha illallāh Muḥammadur rasūlullāh. (3 times)",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "صَلَّى اللَّهُ عَلَيْهِ وَآلِهِ وَسَلَّمَ",
            translit: "Ṣallallāhu ‛alayhi wa ālihī wa sallam.",
            translation: "Then recite Sūrah Al-Fātiḥah.",
          }),
        ],
      }),
    ],
  }),
];
