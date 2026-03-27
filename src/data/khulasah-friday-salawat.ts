import {
  DhikrEntryModel,
  DhikrModel,
  QuranDhikrEntryModel,
  WirdModel,
} from "@/models/recitation";

export default [
  new WirdModel({
    title: "Salawat",
    entries: [
      new DhikrModel({
        entries: [
          new QuranDhikrEntryModel({
            arabic:
              "إِنَّ ٱللَّهَ وَمَلَٰٓئِكَتَهُۥ يُصَلُّونَ عَلَى ٱلنَّبِىِّ ۚ يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ صَلُّوا۟ عَلَيْهِ وَسَلِّمُوا۟ تَسْلِيمًا",
            translit:
              "Innallāha wa malā'ikatahū yuṣallūna ‛alan nabiyyi, yā ayyuhalladhīna āmanū ṣallū ‛alayhi wa sallimū taslīmā.",
            translation:
              "Verily, Allāh and His angels send salutations upon the Prophet; O you who believe, send salutations and peace upon him.",
            verse: 56,
            surah: 33,
          }),
          new DhikrEntryModel({
            arabic: "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ",
            translit: "Labbayk Allāhumma labbayk…",
            translation: "",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
            translit:
              "Allāhumma ṣalli ‛alā Muḥammadin wa ‛alā āli Muḥammad, kamā ṣallayta ‛alā Ibrāhīma wa ‛alā āli Ibrāhīma innaka ḥamīdun majīd",
            translation:
              "O Allāh! Bestow blessings and peace upon Muḥammad and his family, as You have sent blessings and peace upon Ibrāhīm and his family. Verily, You are Most Praiseworthy, Most Glorious.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
            translit:
              "Allāhumma bārik ‛alā Muḥammadin wa ‛alā āli Muḥammad, kamā bārakta ‛alā Ibrāhīma wa ‛alā āli Ibrāhīma innaka ḥamīdun majīd",
            translation:
              "O Allāh! Bless Muḥammad and his family as you have blessed Ibrāhīm and his family. Verily, You are Most Praiseworthy, Most Glorious.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ وَتَرَحَّمْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا تَرَحَّمْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
            translit:
              "Allāhumma taraḥḥam ‛alā Muḥammadin wa ‛alā āli Muḥammad, kamā taraāḥamta ‛alā Ibrāhīma wa ‛alā āli Ibrāhīma innaka ḥamīdun majīd",
            translation:
              "O Allāh! Bestow Your mercy upon Muḥammad and his family as You have bestowed mercy upon Ibrāhīm and his family. Verily, You are the Most Praiseworthy, Most Glorious.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ وَتَحَنَّنْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا تَحَنَّنْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ",
            translit:
              "Allāhumma taḥannan ‛alā Muḥammadin wa ‛alā āli Muḥammad, kamā taḥannanta ‛alā Ibrāhīma wa ‛alā āli Ibrāhīma innaka ḥamīdun majīd",
            translation:
              "O Allāh! Show divine tenderness to Muḥammad and his family, as You have shown divine tenderness to Ibrāhīm and his family. Verily, You are Most Praiseworthy, Most Glorious.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ وَسَلِّمْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا سَلَّمْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
            translit:
              "Allāhumma wa sallim ‛alā Muḥammadin wa ‛alā āli Muḥammad, kamā sallamta ‛alā Ibrāhīma wa ‛alā āli Ibrāhīma innaka ḥamīdun majīd",
            translation:
              "O Allāh! Send salutations on Muḥammad and his family, as You have sent salutations on Ibrāhīm and his family. Verily, You are the Most Praiseworthy, Most Glorious.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "فِي كُلِّ لَحْظَةٍ أَبَدًا، عَدَدَ خَلْقِكَ وَرِضَى نَفْسِكَ وَزِنَةَ عَرْشِكَ وَمِدَادَ كَلِمَاتِكَ",
            translit:
              "Fī kulli laḥẓatin abadan, ‛adada khalqika, wa riḍā nafsika, wa zinata ‛arshika, wa midāda kalimātika.",
            translation:
              "in every moment forever, to the number of His creation, to the extent of His pleasure, to the weight of His Throne, and the ink that it would take to write His Words.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ صَلِّ وَسَلِّمْ",
            translit: "",
            translation: "O Allāh! Bestow blessings",
          }),
          new DhikrEntryModel({
            arabic: "وَبَارِكْ وَكَرِّمْ",
            translit: "",
            translation: "peace, grace and honour",
          }),
          new DhikrEntryModel({
            arabic: "بِقَدْرِ عَظَمَةِ ذَاتِكَ الْعَلِيَّة",
            translit: "",
            translation: "with the greatness of Your Highest Essence",
          }),
          new DhikrEntryModel({
            arabic: "فِي كُلِّ وَقْتٍ وَحِينٍ أَبَدًا",
            translit: "",
            translation: "in each and every moment, forever",
          }),
          new DhikrEntryModel({
            arabic: "عَدَدَ مَا عَلِمْتَ وَزِنَةَ مَا عَلِمْتَ وَمِلْءَ مَا عَلِمْتَ",
            translit: "",
            translation:
              "the number of what You know, and the weight of what You know, and the fullness of what You know",
          }),
          new DhikrEntryModel({
            arabic: "عَلَى سَيِّدِنَا وَمَوْلَانَا مُحَمَّدٍ",
            translit: "",
            translation: "upon our master and leader Muḥammad",
          }),
          new DhikrEntryModel({
            arabic: "وَعَلَى آلِ سَيِّدِنَا وَمَوْلَانَا مُحَمَّد",
            translit: "",
            translation: "and on the family of our master and leader Muḥammad",
          }),
          new DhikrEntryModel({
            arabic: "صَاحِبِ التَّاجِ",
            translit: "",
            translation: "the owner of the crown",
          }),
          new DhikrEntryModel({
            arabic: "وَالْمِعْرَاجِ",
            translit: "",
            translation: "the ascent",
          }),
          new DhikrEntryModel({
            arabic: "وَالْبُرَاقِ",
            translit: "",
            translation: "the burāq",
          }),
          new DhikrEntryModel({
            arabic: "وَالْعَلَم * وَدَافِعِ الْبَلَاءِ",
            translit: "",
            translation: "and the flag; and the remover of calamities",
          }),
          new DhikrEntryModel({
            arabic: "وَالْوَبَاءِ",
            translit: "",
            translation: "contagious sicknesses",
          }),
          new DhikrEntryModel({
            arabic: "وَالْمَرَضِ",
            translit: "",
            translation: "illnesses",
          }),
          new DhikrEntryModel({
            arabic:
              "وَالْأَلَم * جِسْمُهُ مُطَهَّرٌ مُعَطَّرٌ مُنَوَّر * مَنِ اسْمُهُ مَكْتُوبٌ مَرْفُوعٌ مَوْضُوعٌ عَلَى اللَّوْحِ وَالْقَلَم * شَمْسِ الضُّحَى",
            translit: "",
            translation:
              "and pain. His body is purified, perfumed, and illuminated; he, whose name is written, elevated, placed on the Preserved Tablet and the Pen; the morning sun",
          }),
          new DhikrEntryModel({
            arabic: "بَدْرِ الدُّجَى",
            translit: "",
            translation: "the moon lighting the darkness",
          }),
          new DhikrEntryModel({
            arabic: "نُورِ الْهُدَى",
            translit: "",
            translation: "the light of guidance",
          }),
          new DhikrEntryModel({
            arabic: "مِصْبَاحِ الظُّلَم",
            translit: "",
            translation: "and the lamp lighting the darkness",
          }),
          new DhikrEntryModel({
            arabic: "أَبِي الْقَاسِمِ سَيِّدِ الْكَوْنَيْنِ وَشَفِيعِ الثَّقَلَيْن",
            translit: "",
            translation:
              "the father of al-Qāsim, the master of the two universes, the intercessor of both humans and jinn",
          }),
          new DhikrEntryModel({
            arabic: "أَبِي الْقَاسِمِ سَيِّدِنَا مُحَمَّدِ بنِ عَبْدِ اللَّهِ سَيِّدِ الْعَرَبِ وَالْعَجَم",
            translit: "",
            translation:
              "Abūl Qāsim, our master, Muḥammad, son of Abdullah, master of the Arabs and the non Arabs",
          }),
          new DhikrEntryModel({
            arabic: "نَبِيِّ الْحَرَمَيْنِ",
            translit: "",
            translation: "the Prophet of the two Holy Sanctuaries",
          }),
          new DhikrEntryModel({
            arabic:
              "مَحْبُوبٍ عِنْدَ رَبِّ الْمَشْرِقَيْنِ وَالْمَغْرِبَيْن * يَا أَيُّهَا الْمُشْتَاقُونَ لِنُورِ جَمَالِهِ صَلُّوْا عَلَيْهِ وَسَلِّمُوا تَسَلِيما",
            translit: "",
            translation:
              "beloved of the Lord of the two easts and the two wests. O those who are yearning for the light of his beauty, bestow prayers and salutations upon him.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ صَلِّ وَسَلِّم بِجَمِيعِ الصَّلَوَاتِ كُلِّهَا عَدَدَ مَا فِي عِلْمِ اللَّهِ",
            translit:
              "Allāhumma ṣalli wa sallim bijamī‛iṣ ṣalawāti kullihā ‛adada mā fī ‛ilmillāh",
            translation: "O Allāh! Bestow all blessings and peace",
          }),
          new DhikrEntryModel({
            arabic: "عَلَى سَيِّدِنَا مُحَمَّدٍ وَآلِهِ وَمَنْ وَالَاهُ",
            translit: "‛alā sayyidinā Muḥammadin wa ālihī wa man wālāhu",
            translation: "the number of which is in the knowledge of Allāh",
          }),
          new DhikrEntryModel({
            arabic: "فِي كُلِّ لَحْظَةٍ أَبَدًا بِكُلِّ لِسَانٍ لِأَهْلِ الْمَعْرِفَةِ بِاللَّهِ (3)",
            translit:
              "fī kulli laḥẓatin abadan bikulli lisānin li’ahlil ma‛rifati billāhi. (3 times)",
            translation:
              "upon our master Muḥammad, his family and his followers, in every moment, forever, with the tongue of every Gnostic knower of Allah (3 times)",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "عَدَدَ خَلقِكَ وَرِضَى نَفْسِكَ وَزِنَةَ عَرْشِكَ وَمِدَادَ كَلِمَاتِكَ",
            translit:
              "‛adada khalqika, wa riḍā nafsika, wa zinata ‛arshika, wa midāda kalimātika.",
            translation:
              "to the number of His creation, to the extent of His pleasure, to the weight of His Throne, and the ink that it would take to write His Words.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ صَلِّ وَسَلِّم عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ وَالْأَصْحَاب",
            translit:
              "Allāhumma ṣalli wa sallim ‛alā sayyidinā Muḥammadin wa ‛alā āli sayyidinā Muḥammadin wal’aṣḥābi",
            translation:
              "O Allāh! Bestow blessings and peace on our master Muḥammad, and on the family of our master Muḥammad, and on his companions",
          }),
          new DhikrEntryModel({
            arabic: "صَلَاةً وَسَلَامًا تَرْفَعُ بِهِمَا بَيْنِي وَبَيْنَهُ الْحِجَاب",
            translit:
              "ṣalātan wa salāman turfa‛u bihimā baynī wa baynahul ḥijāb",
            translation:
              "blessings and peace that will remove the veil between me and him",
          }),
          new DhikrEntryModel({
            arabic: "وَتُدْخِلُنِي بِهِمَا عَلَيْهِ مِنْ أَوْسَعِ بَاب",
            translit: "wa tudkhilunī bihimā ‛alayhi min awsa‛i bāb",
            translation:
              "that will enter me into his company from the vastest door",
          }),
          new DhikrEntryModel({
            arabic: "وَتَسْقِينِي بِهِمَا بِيَدِهِ الشَّرِيفَةِ أَعْذَبَ الْكُؤُوسِ مِنْ أَحْلَى شَرَاب (3)",
            translit:
              "wa tasqīnī bihimā biyadihish sharīfati a‛dhabal ku’ūsi min aḥlā sharāb (3 times)",
            translation:
              "that will quench my thirst by giving me through his honoured hand the sweetest drink from the purest glass (water from the fountain of the Prophet) (3 times)",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "عَدَدَ خَلقِكَ وَرِضَى نَفْسِكَ وَزِنَةَ عَرْشِكَ وَمِدَادَ كَلِمَاتِكَ",
            translit:
              "‛adada khalqika, wa riḍā nafsika, wa zinata ‛arshika, wa midāda kalimātika.",
            translation:
              "to the number of His creation, to the extent of His pleasure, to the weight of His Throne, and the ink that it would take to write His Words.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ صَلِّ وَسَلِّم عَلَى سَيِّدِنَا مُحَمَّدٍ نُورِكَ السَّارِي",
            translit: "",
            translation:
              "O Allah, bestow prayers and peace upon our Master Muhammad, Your light which spreads",
          }),
          new DhikrEntryModel({
            arabic: "وَمَدَدِكَ الْجَارِي",
            translit: "",
            translation:
              "and Your assistance which flows (throughout creation)",
          }),
          new DhikrEntryModel({
            arabic: "وَاجْمَعْنِي بِهِ فِي كُلِّ أَطْوَارِي",
            translit: "",
            translation: "and join me with him in all my states",
          }),
          new DhikrEntryModel({
            arabic: "وَعَلَى آلِهِ وَصَحْبِهِ يَا نُور (3)",
            translit: "",
            translation:
              "and upon his family and companions, O Light! (3 times)",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "عَدَدَ خَلقِكَ وَرِضَى نَفْسِكَ وَزِنَةَ عَرْشِكَ وَمِدَادَ كَلِمَاتِكَ",
            translit:
              "‛adada khalqika, wa riḍā nafsika, wa zinata ‛arshika, wa midāda kalimātika.",
            translation:
              "to the number of His creation, to the extent of His pleasure, to the weight of His Throne, and the ink that it would take to write His Words.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ صَلِّ وَسَلِّم عَلَيْهِ وَعَلَى آلِهِ مِثْلَ ذَلِكَ (50)",
            translit:
              "Allāhumma ṣalli wa sallim ‛alayhi wa ‛alā ālihī mithla dhālika (50 times)",
            translation:
              "O Allāh! Bestow blessings and peace upon him and upon his family, similar to that (50 times)",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "فِي كُلِّ لَحْظَةٍ أَبَدًا، عَدَدَ خَلقِكَ وَرِضَى نَفْسِكَ وَزِنَةَ عَرْشِكَ وَمِدَادَ كَلِمَاتِكَ",
            translit:
              "Fī kulli laḥẓatin abadan, ‛adada khalqika, wa riḍā nafsika, wa zinata ‛arshika, wa midāda kalimātika.",
            translation:
              "in every moment forever, to the number of His creation, to the extent of His pleasure, to the weight of His Throne, and the ink that it would take to write His Words.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ عَبْدِكَ وَرَسُولِكَ النَّبِيِّ الْأُمِّي وَعَلَى آلِهِ وَصَحْبِهِ وَسَلِّم تَسلِيمًا (80 مرّة أَوْ 100 مرّة)",
            translit:
              "Allāhumma ṣalli ‛alā sayyidinā Muḥammadin ‛abdika wa rasūlikan nabiyyil ummiyyi wa ‛alā ālihī wa ṣaḥbihī wa sallim taslīmā. (80 or 100 times)",
            translation:
              "O Allāh! Bestow blessings and peace upon our master Muḥammad, your servant and Messenger, the unlettered Prophet, and upon his family and his companions. (80 or 100 times).",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ وَكَرِّمْ",
            translit: "",
            translation: "O Allāh! Bestow blessings, peace, grace and honour",
          }),
          new DhikrEntryModel({
            arabic: "بِقَدْرِ عَظَمَةِ ذَاتِكَ الْعَلِيَّة",
            translit: "",
            translation:
              "as great in magnitude as the greatness of Your Lofty Essence",
          }),
          new DhikrEntryModel({
            arabic: "فِي كُلِّ وَقْتٍ وَحِينٍ أَبَدًا",
            translit: "",
            translation: "in every moment, forever",
          }),
          new DhikrEntryModel({
            arabic: "عَدَدَ مَا عَلِمْتَ وَزِنَةَ مَا عَلِمْتَ وَمِلْءَ مَا عَلِمْتَ",
            translit: "",
            translation:
              "equal to the number of what You know, equal to the weight of what You know, and equal to what fills [the depth] of what You know",
          }),
          new DhikrEntryModel({
            arabic: "عَلَى سَيِّدِنَا وَمَوْلَانَا مُحَمَّد",
            translit: "",
            translation: "upon our leader and master Muḥammad",
          }),
          new DhikrEntryModel({
            arabic: "وَعَلَى آلِ سَيِّدِنَا وَمَوْلَانَا مُحَمَّد",
            translit: "",
            translation:
              "and upon the family of our leader and master Muḥammad",
          }),
          new DhikrEntryModel({
            arabic: "صَلَاةً تَكُونُ لَكَ رِضَى",
            translit: "",
            translation: "a blessing that satisfies You",
          }),
          new DhikrEntryModel({
            arabic: "وَلِحَقِّهِ أَدَاء",
            translit: "",
            translation: "and which is a fulfillment of his right",
          }),
          new DhikrEntryModel({
            arabic: "وَأَعْطِهِ الْوَسِيلَةَ وَالْفَضِيلَة",
            translit: "",
            translation: "and grant him the station of intercession and favour",
          }),
          new DhikrEntryModel({
            arabic: "وَالشَّرَفَ وَالدَّرَجَةَ الْعَالِيَةَ الرَّفِيعَة",
            translit: "",
            translation: "and high lofty status",
          }),
          new DhikrEntryModel({
            arabic: "وَابْعَثْهُ الْمَقَامَ الْمَحْمُودَ الَّذِي وَعَدْتَه",
            translit: "",
            translation:
              "and give him the honoured station, which You have promised him",
          }),
          new DhikrEntryModel({
            arabic: "وَاجْزِهِ عَنَّا مَا هُوَ أَهْلُه",
            translit: "",
            translation: "and reward him on our behalf with what he deserves",
          }),
          new DhikrEntryModel({
            arabic: "وَاجْزِهِ أَفْضَلَ مَا جَزَيْتَ نَبِيًّا عَنْ أُمَّتِه",
            translit: "",
            translation:
              "and reward him with the best You have rewarded a prophet on behalf of his nation",
          }),
          new DhikrEntryModel({
            arabic: "وَصَلِّ عَلَى جَمِيعِ إِخْوَانِهِ مِنَ النَّبِيِّينَ وَالصَّالِحِينَ",
            translit: "",
            translation:
              "and send blessings on all his brethren from the prophets and the righteous",
          }),
          new DhikrEntryModel({
            arabic: "إِلَى يَوْمِ الدِّين يَا أَرْحَمَ الرَّاحِمِين (7)",
            translit: "",
            translation:
              "until the Day of Judgement, O Most Merciful. (7 times)",
          }),
        ],
      }),
    ],
  }),
];
