import { baqarah_127, baqarah_128 } from "@/data/shared/quran-partial";
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
            arabic: "أَسْتَغْفِرُ اللَّهَ",
            translit: "Astaghfirullāh",
            translation: "I seek Allāh’s forgiveness.",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ أَنْتَ السَّلَامُ",
            translit: "Allāhumma antassalām",
            translation: "O Allāh, You are Peace,",
          }),
          new DhikrEntryModel({
            arabic: "وَمِنْكَ السَّلَامُ",
            translit: "wa minkassalām",
            translation: "and from You comes peace,",
          }),
          new DhikrEntryModel({
            arabic: "وَإِلَيْكَ يَعُودُ السَّلَامُ",
            translit: "wa ilayka ya‛ūdus salām",
            translation: "and to You peace returns.",
          }),
          new DhikrEntryModel({
            arabic: "فَحَيِّنَا رَبَّنَا بِالسَّلَامِ",
            translit: "faḥayyinā rabbanā bissalām",
            translation: "So greet us, our Lord, with peace,",
          }),
          new DhikrEntryModel({
            arabic: "وَأَدْخِلْنَا دَارَكَ دَارَ السَّلَامِ",
            translit: "wa adkhilnā dāraka dārassalām",
            translation: "and admit us into Your abode, the abode of peace.",
          }),
          new DhikrEntryModel({
            arabic: "تَبَارَكْتَ وَتَعَالَيْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
            translit: "tabārakta wa ta‛ālayta yā dhal jalāli wal ikrām.",
            translation:
              "Blessed and Exalted are You, O Possessor of Majesty and Honour.",
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
            translation:
              "O Allāh, none can withhold what You have given, none can give what You have withheld, none can repel what You have decreed, and the wealth of the wealthy is of no benefit against You.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
            translit:
              "Allāhumma a‛innī ‛alā dhikrika wa shukrika wa ḥusni ‛ibādatika.",
            translation:
              "O Allāh, help me to remember You, to thank You, and to worship You in the best manner.",
          }),
        ],
      }),
      new DhikrModel({
        repeat: 3,
        entries: [baqarah_127(), baqarah_128()],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "وَصَلَّى اللَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلَّمَ",
            translit:
              "Wa ṣallallāhu ‛alā sayyidinā Muḥammadin wa ‛alā ālihī wa ṣaḥbihī wa sallam.",
            translation:
              "And may Allāh bless our master Muḥammad, and his family and companions, and grant them peace,",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "عَدَدَ خَلْقِهِ وَرِضَى نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ",
            translit:
              "‛Adada khalqihī wa riḍā nafsihī wa zinata ‛arshihī wa midāda kalimātihī.",
            translation:
              "to the number of His creation, the extent of His good pleasure, the weight of His Throne, and the ink of His words.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new QuranDhikrEntryModel({
            arabic: "سُبْحَٰنَ رَبِّكَ رَبِّ ٱلْعِزَّةِ عَمَّا يَصِفُونَ",
            translit: "Subḥāna rabbika rabbil ‛izzati ‛ammā yaṣifūn.",
            translation:
              "Exalted is your Lord, the Lord of might, above what they describe.",
            surah: 37,
            verse: 180,
          }),
          new QuranDhikrEntryModel({
            arabic: "وَسَلَٰمٌ عَلَى ٱلْمُرْسَلِينَ",
            translit: "Wa salāmun ‛alal mursalīn.",
            translation: "And peace upon the messengers.",
            surah: 37,
            verse: 181,
          }),
          new QuranDhikrEntryModel({
            arabic: "وَٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ",
            translit: "Walḥamdu lillāhi rabbil ‛ālamīn.",
            translation: "And praise to Allāh, Lord of the worlds.",
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
              "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلكُ وَلَهُ الْحَمْدُ، يُحْيِي وَيُمِيتُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
            translit:
              "Lā ilāha illallāhu waḥdahū lā sharīka lahū, lahul mulku wa lahul ḥamdu yuḥyī wa yumītu wa huwa ‛alā kulli shay’in qadīr",
            translation: "If it is morning, one then says:",
            repeat: 10,
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
            translation: "and to Him is the final return.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "ولَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
            translit: "wa lā ḥawla wa lā quwwata illā billāhil ʽaliyyil ʽaẓīm",
            translation:
              "There is no power and no strength except with Allāh, the Most High, the Magnificent.",
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
              "At every moment, forever, to the number of His creation, the extent of His good pleasure, the weight of His Throne, and the ink of His words.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "سُبْحَانَ مَنْ تَعَزَّزَ بِالْعَظَمَةِ",
            translit: "Subḥāna man ta‛azzaza bil ‛aẓamatihī",
            translation: "Glory be to the One who is mighty through greatness.",
          }),
          new DhikrEntryModel({
            arabic: "سُبْحَانَ مَنْ تَرَدَّى بِالْكِبْرِيَاءِ",
            translit: "subḥāna man taraddā bil kibriyā’i",
            translation: "Glory be to the One who is clothed in majesty.",
          }),
          new DhikrEntryModel({
            arabic: "سُبْحَانَ مَنِ احْتَجَبَ بِالنُّورِ",
            translit: "subḥāna maniḥ tajaba binnūri",
            translation: "Glory be to the One who is veiled by light.",
          }),
          new DhikrEntryModel({
            arabic: "سُبْحَانَ مَنْ تَفَرَّدَ بِالْوَحْدَانِيَّةِ",
            translit: "subḥāna man tafarrada bil waḥdāniyyati",
            translation: "Glory be to the One who is unique in His oneness.",
          }),
          new DhikrEntryModel({
            arabic: "سُبْحَانَ مَنْ قَهَرَ عِبَادَهُ بِالْمَوْتِ",
            translit: "subḥāna man qahara ‛ibādahū bil mawt",
            translation:
              "Glory be to the One who subdues His servants through death.",
          }),
          new DhikrEntryModel({
            arabic: "سُبْحَانَ مَنْ لَا يَعْلَمُ قَدْرَهُ غَيْرُهُ وَلَا يَبْلُغُ الْوَاصِفُونَ صِفَتَهُ",
            translit:
              "subḥāna man lā ya‛lamu qadrahū ghayruhū wa lā yablughul wāṣifūna ṣifatahū",
            translation:
              "Glory be to the One whose worth none knows but Him, and whose attributes those who describe Him cannot fully reach.",
          }),
          new DhikrEntryModel({
            arabic: "سُبْحَانَ رَبِّيَ الْعَلِيِّ الْأَعْلَى الْوَهَّاب",
            translit: "subḥāna rabbil ‛aliyyil a‛lal wahhāb",
            translation:
              "Glory be to my Lord, the Most High, the Supreme, the Bestower.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "عَدَدَ خَلْقِهِ وَرِضَى نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ",
            translit:
              "‛adada khalqihī wa riḍā nafsihī wa zinata ‛arshihī wa midāda kalimātihī.",
            translation:
              "To the number of His creation, the extent of His good pleasure, the weight of His Throne, and the ink of His words.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "أَعُوْذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيْمِ بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ",
            translit:
              "A‛ūdhu billāhi minash shayṭānir rajīm, bismillāhir raḥmānir raḥīm.",
            translation:
              "I seek refuge in Allāh from Satan, the accursed. In the name of Allāh, the Most Merciful, the Most Compassionate.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new QuranDhikrEntryModel({
            arabic: "وَإِلَٰهُكُمْ إِلَٰهٌ وَٰحِدٌ ۖ لَّآ إِلَٰهَ إِلَّا هُوَ ٱلرَّحْمَٰنُ ٱلرَّحِيمُ",
            translit:
              "Wa ilāhukum ilāhun wāḥidullā ilāha illā huwar raḥmānur raḥīm.",
            translation:
              "And your god is one God. There is no deity [worthy of worship] except Him, the Entirely Merciful, the Especially Merciful.",
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
            translation:
              "Allāh - there is no deity except Him, the Ever-Living, the Self-Sustaining. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is [presently] before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursī extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
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
            translation: "Glory be to You, O Most High, O Magnificent.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "سُبْحَانَ اللَّه",
            translit: "Subḥānallāh",
            translation:
              "Then one raises their hands in supplication, and says (silently):",
            repeat: 33,
          }),
          new DhikrEntryModel({
            arabic: "اَلْحَمْدُ لِلَّه",
            translit: "Alḥamdulillāh",
            translation: "All praise is for Allāh.",
            repeat: 33,
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُ أَكْبَر",
            translit: "Allāhu akbar",
            translation: "Allāh is the Greatest.",
            repeat: 33,
          }),
          new DhikrEntryModel({
            arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
            translit: "Lā ilāha illallāhu waḥdahū lā sharīka lah",
            translation: "There is no god but Allāh, alone, without partner.",
          }),
          new DhikrEntryModel({
            arabic: "لَهُ الْمُلكُ وَلَهُ الْحَمْدُ",
            translit: "Lahul mulku wa lahul ḥamd",
            translation: "His is the dominion and His is all praise.",
          }),
          new DhikrEntryModel({
            arabic: "يُحْيِي وَيُمِيتُ",
            translit: "Yuḥyī wa yumīt",
            translation: "He gives life and causes death.",
          }),
          new DhikrEntryModel({
            arabic: "وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
            translit: "Wa huwa ‛alā kulli shay’in qadīr",
            translation: "And He has power over all things.",
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
            translation:
              "O Allāh, remove from my heart every regard for this world,",
          }),
          new DhikrEntryModel({
            arabic: "وَكُلَّ مَحَلٍّ لِلْخَلْقِ",
            translit: "wa kulla maḥallin lil khalqi; yamīlu bī ilā ma‛ṣiyatika",
            translation: "and every place given to creation in it",
          }),
          new DhikrEntryModel({
            arabic: "يَمِيلُ بِي إِلَى مَعْصِيَتِكَ",
            translit: "aw yash-ghalunī ‛an ṭā‛atika",
            translation: "that would incline me towards disobeying You,",
          }),
          new DhikrEntryModel({
            arabic: "أَوْ يَشْغَلُنِي عَنْ طَاعَتِكَ",
            translit:
              "aw yaḥūlu baynī wa baynat taḥaqquqi bima‛rifatikal khāṣṣah",
            translation: "or distract me from obeying You,",
          }),
          new DhikrEntryModel({
            arabic: "أَوْ يَحُولُ بَيْنِي وَبَيْنَ التَّحَقُّقِ بَمَعْرِفَتِكَ الْخَاصَّةِ",
            translit: "wa maḥabbatikal khāliṣah",
            translation:
              "or come between me and attaining Your special knowledge",
          }),
          new DhikrEntryModel({
            arabic:
              "وَمَحَبَّتِكَ الْخَالِصَةِ. وَصَلَّى اللَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلَّمَ",
            translit:
              "wa ṣallallāhu ‛alā sayyidinā Muḥammadin wa ‛alā ālihī wa ṣaḥbihī wa sallam",
            translation:
              "and Your pure love. And may Allāh bless our master Muḥammad, and his family and companions, and grant them peace.",
          }),
          new DhikrEntryModel({
            arabic: "وَالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِيْنَ",
            translit: "walḥamdu lillāhi rabbil ‛ālamīn.",
            translation: "And all praise is for Allāh, Lord of the worlds.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ",
            translit:
              "Astaghfirullāhal ‛aẓīmalladhī lā ilāha illā huwal ḥayyul qayyūm wa atūbu ilayhi.",
            translation:
              "I seek forgiveness from Allāh, the Magnificent, there is no god but Him, the Ever-Living, the Self-Sustaining, and I repent to Him.",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، إِلَهًا وَاحِدًا وَرَبًّا شَاهِدًا وَنَحْنُ لَهُ مُسْلِمُونَ",
            translit:
              "Ash-hadu allā ilāha illallāhu waḥdahū lā sharīka lahū, ilāhaw wāḥidan wa rabban shāhidan wa naḥnu lahū muslimūn.",
            translation:
              "I bear witness that there is no god but Allāh, alone, without partner, one God and a Lord who is witness, and we are Muslims submitting to Him.",
            repeat: 4,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "لَا إِلَهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّه، فِي كُلِّ لَمْحَةٍ وَنَفَسٍ عَدَدَ مَا وَسِعَهُ عِلْمُ اللَّهِ",
            translit:
              "Lā ilāha illallāh, Muḥammadur rasūlullāh, fī kulli lamḥatin wa nafasin ‛adada mā wasi‛ahū ‛ilmullāh.",
            translation:
              "There is no god but Allāh, Muḥammad is the Messenger of Allāh, in every glance and breath, to the number of all that the knowledge of Allāh encompasses.",
            repeat: 4,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَر",
            translit: "Lā ilāha illallāhu wallāhu akbar.",
            translation:
              "There is no god but Allāh, and Allāh is the Greatest.",
            repeat: 4,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "ولَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
            translit: "Wa lā ḥawla wa lā quwwata illā billāhil ‛aliyyil ‛aẓīm",
            translation:
              "And there is no power and no strength except with Allāh, the Most High, the Magnificent.",
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
            arabic: "اللَّهُمَّ أَجِرْنَا مِنَ النَّارِ",
            translit: "Allāhumma ajirnā minannār",
            translation: "O Allāh, protect us from the Fire,",
            repeat: 7,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "وَأَسْكِنَّا مَعَ السَّابِقِينَ أَعْلَى فَرَادِيسِ الْجِنَان",
            translit: "Wa askinnā ma‛as sābiqīna a‛lā farādīsil jinān",
            translation:
              "and settle us, with those who go before, in the highest gardens of Paradise,",
          }),
          new DhikrEntryModel({
            arabic: "خَالِدِينَ مِنْ غَيْرِ سَابِقَةِ عَذَابٍ وَلَا عِتَابٍ",
            translit: "Khālidīna min ghayri sābiqati ‛adhābin wa lā ‛itāb",
            translation:
              "abiding there forever, without any preceding punishment or reproach,",
          }),
          new DhikrEntryModel({
            arabic: "وَلَا فِتْنَةٍ وَلَا حِسَابٍ",
            translit: "Wa lā fitnatin wa lā ḥisāb",
            translation: "and without trial or reckoning,",
          }),
          new DhikrEntryModel({
            arabic: "بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِينَ",
            translit: "Biraḥmatika yā arḥamar rāḥimīn",
            translation:
              "by Your mercy, O Most Merciful of those who show mercy.",
          }),
          new DhikrEntryModel({
            arabic: "وَافْعَلْ كَذَلِكَ بِوَالِدِيْنَا وَذُرِّيَّاتِنَا وَأَحْبَابِنَا إِلَى يَوْمِ الدِّينِ",
            translit:
              "Waf‛al kadhālika biwālidīnā wa dhurriyyātinā wa aḥbābinā ilā yawmid dīn",
            translation:
              "And do likewise for our parents, our descendants and our loved ones, until the Day of Judgement.",
          }),
          new DhikrEntryModel({
            arabic: "وَصَلَّى اللَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلَّمَ",
            translit:
              "Wa ṣallallāhu ‛alā sayyidinā Muḥammadin wa ‛alā ālihī wa ṣaḥbihī wa sallam",
            translation:
              "And may Allāh bless our master Muḥammad, and his family and companions, and grant them peace.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new QuranDhikrEntryModel({
            arabic: "سُبْحَٰنَ رَبِّكَ رَبِّ ٱلْعِزَّةِ عَمَّا يَصِفُونَ",
            translit: "Subḥāna rabbika rabbil ‛izzati ‛ammā yaṣifūn.",
            translation:
              "Exalted is your Lord, the Lord of might, above what they describe.",
            surah: 37,
            verse: 180,
          }),
          new QuranDhikrEntryModel({
            arabic: "وَسَلَٰمٌ عَلَى ٱلْمُرْسَلِينَ",
            translit: "Wa salāmun ‛alal mursalīn.",
            translation: "And peace upon the messengers.",
            surah: 37,
            verse: 181,
          }),
          new QuranDhikrEntryModel({
            arabic: "وَٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ",
            translit: "Walḥamdu lillāhi rabbil ‛ālamīn.",
            translation: "And praise to Allāh, Lord of the worlds.",
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
            translation:
              'Those who have believed and whose hearts are assured by the remembrance of Allāh. Unquestionably, by the remembrance of Allāh hearts are assured."',
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
            translation: "Know that:",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "لَا إِلَهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّه",
            translit: "lā ilāha illallāh Muḥammadur rasūlullāh.",
            translation:
              "There is no god but Allāh, Muḥammad is the Messenger of Allāh.",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "لَا إِلَهَ إِلَّا اللَّهُ",
            translit: "Lā ilāha illallāh.",
            translation: "There is no god but Allāh.",
            repeat: 5,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُ",
            translit: "Allāh",
            translation: "Allāh.",
            repeat: 25,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "لَا إِلَهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ",
            translit: "Lā ilāha illallāh Muḥammadur rasūlullāh.",
            translation:
              "There is no god but Allāh, Muḥammad is the Messenger of Allāh.",
            repeat: 3,
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
