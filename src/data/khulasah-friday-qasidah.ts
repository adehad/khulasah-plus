import {
  QasidaEntryModel,
  QasidaModel,
  QasidaVerseModel,
  QuranEntryModel,
} from "@/models/recitation";

export default [
  new QasidaModel({
    title: "",
    entries: [
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا رَبَّنَا يَا رَبَّنَا",
            translit: "Yā Rabbanā Yā Rabbanā",
            translation: "O our Lord, O our Lord,",
          }),
          new QasidaEntryModel({
            arabic: "يَا رَبَّنَا يَا رَبَّنَا",
            translit: "Yā Rabbanā Yā Rabbanā",
            translation: "O our Lord, O our Lord.",
          }),
          new QasidaEntryModel({
            arabic: "يَا رَبَّنَا أَنْتَ لَنَا",
            translit: "Yā Rabbanā Anta lanā",
            translation: "O our Lord, You are for us",
          }),
          new QasidaEntryModel({
            arabic: "كَهْفٌ وَغَوْثٌ وَمُعِين",
            translit: "Kahfun wa ghawthun wa mu‛īn",
            translation: "a Shelter, a Saviour, and a Helper",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "عَجِّلْ بِرَفْعِ مَا نَزَلْ",
            translit: "‛Ajjil biraf‛i mā nazal.",
            translation: "Hasten to remove what has afflicted us.",
          }),
          new QasidaEntryModel({
            arabic: "أَنْتَ رَحِيمٌ لَمْ تَزَلْ",
            translit: "Anta raḥīmun lam tazal.",
            translation: "You are the Most Merciful and will always remain so.",
          }),
          new QasidaEntryModel({
            arabic: "مَنْ غَيْرُكَ عَزَّ وَجَلْ",
            translit: "Man ghayruka ‛azza wa jall,",
            translation: "Who is there besides You,",
          }),
          new QasidaEntryModel({
            arabic: "وَلَاطِفٌ بِالْعَالَمِين",
            translit: "Wa lāṭifun bil‛ālamīn.",
            translation: "and most kind to all the worlds?",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "رَبِّ اكْفِنَا شَرَّ الْعِدَا",
            translit: "Rabbikfinā sharral ‛idā.",
            translation:
              "Oh my Lord, suffice us against the evil of the enemies.",
          }),
          new QasidaEntryModel({
            arabic: "وَخُذْهُمُ وَبَدِّدَا",
            translit: "Wa khudh-humu wa baddidā.",
            translation: "Take them away; scatter them.",
          }),
          new QasidaEntryModel({
            arabic: "وَاجْعَلْهُمُ لَنَا فِدَا",
            translit: "Waj‛alhumu lanā fidā,",
            translation: "Let them suffer the consequences of their evils,",
          }),
          new QasidaEntryModel({
            arabic: "وَعِبْرَةً لِلنَّاظِرِين",
            translit: "wa ‛ibratan linnāẓirīna.",
            translation:
              "and make them our ransom and a lesson for the onlookers.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا رَبِّ شَتِّتْ شَمْلَهُمْ",
            translit: "Yā Rabbi shattit shamlahum.",
            translation: "O Lord, disperse them.",
          }),
          new QasidaEntryModel({
            arabic: "يَا رَبِّ فَرِّقْ جَمْعَهُمْ",
            translit: "Yā Rabbi farriq jam‛ahum.",
            translation: "O Lord, divide them. O Lord,",
          }),
          new QasidaEntryModel({
            arabic: "يَا رَبِّ قَلِّلْ عَدَّهُمْ",
            translit: "Yā Rabbi qallil ‛addahum,",
            translation: "minimize their numbers,",
          }),
          new QasidaEntryModel({
            arabic: "وَاجْعَلْهُمُ فِى الْغَابِرِين",
            translit: "Waj‛alhum fil ghābirīna.",
            translation: "and make them a matter of the past.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَلَا تُبَلِّغْهُمْ مُرَادْ",
            translit: "Wa lā tuballigh-hum murād,",
            translation: "Never fulfill any of their aspirations,",
          }),
          new QasidaEntryModel({
            arabic: "وَنَارُهُمْ تُصْبِحْ رَمَادْ",
            translit: "wa nāruhum tuṣbiḥ ramād.",
            translation: "and may their fire become ash.",
          }),
          new QasidaEntryModel({
            arabic: "بِ﴿كٓهيعٓصٓ﴾",
            translit: "Bi Kāf Hā Yā",
            translation: "By the honour of Kāf Hā Yā",
          }),
          new QasidaEntryModel({
            arabic: "فِى الْحَالِ وَلَّوْا خَائِبِين",
            translit: "‘Ayn Ṣād, Fil ḥāli wallaw khā’ibīn",
            translation: "‘Ayn Ṣād may they immediately fail miserably.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَشَرِّ كُلِّ مَاكِرِ",
            translit: "Wa sharri kulli mākiri,",
            translation: "(Protect us) from the evil of the cunning,",
          }),
          new QasidaEntryModel({
            arabic: "وَخَائِنٍ وَغَادِرِ",
            translit: "wa khā’ini wa ghādiri,",
            translation: "the treacherous, and the deceitful.",
          }),
          new QasidaEntryModel({
            arabic: "وَعَايِنٍ وَسَاحِرِ",
            translit: "wa ‛āyinin wa sāḥirin,",
            translation: "(Protect us) from evil eyes and from witchcraft,",
          }),
          new QasidaEntryModel({
            arabic: "وَشَرِّ كُلِّ الْمُؤْذِيِين",
            translit: "wa sharri kullil mu’dhiyyīn",
            translation: "and the evils of all those who can harm (us).",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "مِنْ مُعْتَدٍ وَغَاصِبِ",
            translit: "Min mu‛tadin wa ghāṣibi,",
            translation: "(Protect us) from transgressors, usurpers,",
          }),
          new QasidaEntryModel({
            arabic: "وَمُفْتَرٍ وَكَاذِبِ",
            translit: "wa muftarin wa kādhibi,",
            translation: "fabricators and liars and wrongdoers,",
          }),
          new QasidaEntryModel({
            arabic: "وَفَاجِرٍ وَعَائِبِ",
            translit: "wa fājirin wa ‛ā’ibi,",
            translation: "faultfinders, the envious,",
          }),
          new QasidaEntryModel({
            arabic: "وَحَاسِدٍ وَالشَّامِتِين",
            translit: "Wa ḥāsidin wash-shāmitīn",
            translation:
              "the malicious, and those who rejoice in our misfortunes",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا رَبَّنَا يَا رَبَّنَا",
            translit: "Yā rabbanā yā rabbanā.",
            translation: "O our Lord, O our Lord,",
          }),
          new QasidaEntryModel({
            arabic: "يَا ذَا الْبَهَا وَذَا السَّنَا",
            translit: "Yā dhal bahā wa dhassanā,",
            translation: "O Possessor of magnificence and sublimity,",
          }),
          new QasidaEntryModel({
            arabic: "وَذَا الْعَطَا وَذَا الْغِنَى",
            translit: "wa dhal ‛aṭā wa dhal ghinā.",
            translation: "You are the Giver, the Rich,",
          }),
          new QasidaEntryModel({
            arabic: "أَنْتَ مُجِيبُ السَّائِلِين",
            translit: "Anta mujībus sā’ilīn.",
            translation: "You respond to those who seek Your help.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَسِّرْ لَنَا أُمُورَنَا",
            translit: "Yassir lanā umūranā,",
            translation: "Make easy all our matters,",
          }),
          new QasidaEntryModel({
            arabic: "وَاشْرَح لَنَا صُدُورَنَا",
            translit: "washraḥ lanā ṣudūranā,",
            translation: "and make our hearts happy.",
          }),
          new QasidaEntryModel({
            arabic: "وَاسْتُرْ لَنَا عُيُوبَنَا",
            translit: "wastur lanā ‛uyūbanā,",
            translation: "Cover our defects,",
          }),
          new QasidaEntryModel({
            arabic: "فَأَنْتَ بِالسَّتْرِ قَمِين",
            translit: "fa Anta bissitri qamīn",
            translation: "for You are capable of veiling us.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَاغْفِرْ لَنَا ذُنُوبَنَا",
            translit: "Waghfir lanā dhunūbanā,",
            translation: "Forgive our sins,",
          }),
          new QasidaEntryModel({
            arabic: "وَكُلُّ ذَنْبٍ عِنْدَنا",
            translit: "wa kulla dhambin",
            translation: "each and every sin of ours.",
          }),
          new QasidaEntryModel({
            arabic: "وَامْنُنْ بِتَوْبَةٍ لَنَا",
            translit: "‘indanā, wamnun bitawbatin lanā.",
            translation: "Accept our repentance,",
          }),
          new QasidaEntryModel({
            arabic: "أَنْتَ حَبِيبُ التَّائِبِين",
            translit: "Anta ḥabībut tā’ibīn.",
            translation: "You are the Lover of those who repent.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "بِجَاهِ سَيِّدِنَا الرَّسُول",
            translit: "Bijāhi Sayyidinar Rasūl,",
            translation: "In honour of our master, the Messenger,",
          }),
          new QasidaEntryModel({
            arabic: "وَالْحَسَنَيْنِ وَالْبَتُول",
            translit: "Wal Ḥasanayni wal Batūl,",
            translation: "and in honour of his two grandchildren,",
          }),
          new QasidaEntryModel({
            arabic: "وَالْمُرْتَضَى أَبِي الْفُحُول",
            translit: "wal Murtaḍā Abil Fuḥūl,",
            translation:
              "Ḥasan and Ḥusayn, and al-Batūl as well as the honour of al-Murtaḍā,",
          }),
          new QasidaEntryModel({
            arabic: "وَجَاهِ جِبْرِيلَ الْأَمِين",
            translit: "wa jāhi Jibrīlal Amīn.",
            translation: "and the honour of Jibrīl the Trustworthy.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "ثُمَّ الصَّلَاةُ وَالسَّلَام",
            translit: "Thummaṣ ṣalātu wassalāmu,",
            translation:
              "And shower Your blessings and peace on the Prophet the best of humankind, and the companions and those who follow them.",
          }),
          new QasidaEntryModel({
            arabic: "عَلَى النَّبِي خَيْرِ الْأَنَامْ",
            translit: "‘alan nabiyyi khayril anām,",
            translation: "upon the Prophet, the best of creation,",
          }),
          new QasidaEntryModel({
            arabic: "وَآلِهِ الْغُرِّ الْكِرَامْ",
            translit: "wa ālihil ghurril kirāmi,",
            translation: "and upon his radiant and noble family,",
          }),
          new QasidaEntryModel({
            arabic: "وَصَحْبِهِ وَالتَّابِعِين",
            translit: "wa ṣaḥbihī wattābi’īn.",
            translation: "and his companions and those who followed them.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QuranEntryModel({
            arabic:
              "سُبْحَٰنَ رَبِّكَ رَبِّ ٱلْعِزَّةِ عَمَّا يَصِفُونَ ۝ وَسَلَٰمٌ عَلَى ٱلْمُرْسَلِينَ ۝ وَٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ",
            translit:
              "Subḥāna rabbika rabbil ‛izzati ‛ammā yaṣifūn. Wa salāmun ‛alal mursalīn. Walḥamdu lillāhi rabbil ‛ālamīn.",
            translation:
              "Glory be to your Lord; the Lord of Honour and Power Who is far above what they attribute to Him; And peace be on the Messengers; And praise be to Allāh, the Lord and Cherisher of the Worlds. [Sūrah Al-Ṣāffāt (37), Verses 180-182]",
            verse: 180,
            surah: 37,
          }),
        ],
      }),
    ],
  }),
];
