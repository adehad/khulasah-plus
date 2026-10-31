import {
  anbiya_107,
  baqarah_201,
  fath_10,
  imran_193,
  imran_194,
  nisa_64,
  qalam_4,
  shura_25,
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
  new WirdModel({
    title: "Introduction",
    instruction: "by al-Habib Muhammad bin Abdur Rahman as-Saqqaf",
    entries: [
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "",
            translit: "",
            translation:
              "In the name of Allah, the Most Compassionate, the Most Merciful.",
          }),
          new DhikrEntryModel({
            arabic: "",
            translit: "",
            translation:
              "All praise be to Allah for His immense blessings, abundant grace and favours. Peace and blessings be upon the Seal of His Prophets, and upon his Family and Companions, and His saints who follow them.",
          }),
          new DhikrEntryModel({
            arabic: "",
            translit: "",
            translation:
              "One of the greatest and most magnificent treasures granted to this nation is the privilege of visiting their great Prophet, the owner of the Pool (Hawdh) and the Banner (Liwa).",
          }),
          new DhikrEntryModel({
            arabic: "",
            translit: "",
            translation:
              "How many a negligent sinner stood at his door and left with the robe of sainthood, for he is the gate of generosity, and a source of endless charity!",
          }),
          new DhikrEntryModel({
            arabic: "",
            translit: "",
            translation:
              "O you who are burdened with sins and many flaws, O you who desire high ranks and aspire to lofty stations, come forward to visit him. Hurry to receive glad tidings.",
          }),
          new DhikrEntryModel({
            arabic: "",
            translit: "",
            translation:
              "And know that even if you were to come to him from the farthest reaches of the earth, crawling on your eyes, you would still not fulfill even an atom of the rights he has over you.",
          }),
        ],
      }),
    ],
  }),
  new WirdModel({
    title: "Etiquettes of Visiting",
    instruction: "When you enter the illuminated city of Madinah:",
    entries: [
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "",
            translit: "",
            translation:
              "Make yourself as presentable as possible: take a ritual bath (ghusl), apply the finest perfume you have, and wear your cleanest and most elegant clothes.",
          }),
          new DhikrEntryModel({
            arabic: "",
            translit: "",
            translation:
              "Then make your way to the noble Prophet's mosque and perform the prayer of greeting the mosque (tahiyyatul masjid). If possible, perform it in the Rawdhah as that is even better.",
          }),
          new DhikrEntryModel({
            arabic: "",
            translit: "",
            translation:
              "Then head towards the direction of the Pure Countenance, in front of the perfumed chamber.",
          }),
          new DhikrEntryModel({
            arabic: "",
            translit: "",
            translation:
              "Stand with respect, reverence, awe and shyness. Be aware of his exalted spiritual presence ﷺ, and visualise his noble person before you.",
          }),
          new DhikrEntryModel({
            arabic: "",
            translit: "",
            translation:
              "Offer salutations and greetings to the Best of Creation ﷺ and know that he is alive in his grave, responding to your greetings.",
          }),
          new DhikrEntryModel({
            arabic: "",
            translit: "",
            translation:
              "Afterward, greet our master Abu Bakr as-Siddiq and our master Umar al-Faruq, may Allah be pleased with them both.",
          }),
          new DhikrEntryModel({
            arabic: "",
            translit: "",
            translation:
              "Thereafter, head towards al-Baqi’. Go to the grave of Sayyidatuna Fatimah az-Zahra, may Allah be pleased with her, and greet her, her husband and her children and the rest of the Companions of the Messenger of Allah in al-Baqi’, and supplicate as you wish.",
          }),
          new DhikrEntryModel({
            arabic: "",
            translit: "",
            translation:
              "You should retrace the footsteps of the Messenger of Allah (peace and blessings be upon him) and his noble Companions, by visiting places such as Masjid Quba, Masjid Qiblatayn, the Martyrs of Uhud, and other sites.",
          }),
        ],
      }),
    ],
  }),
  new WirdModel({
    title: "Greeting the Messenger of Allah ﷺ (P1)",
    entries: [
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ",
            translit:
              "As-salāmu ‛alayka ayyuhan nabiyyu wa raḥmatullāhi wa barakātuh",
            translation:
              "Peace be upon you, O Prophet, and the mercy and blessings of Allah! (thrice)",
            repeat: 3,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا نَبِيَّ اللَّه",
            translit: "Aṣ-ṣalātu was salāmu ‛alayka yā nabiyyallāh",
            translation:
              "Salutations and peace be upon you, O Prophet of Allah!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا رَسُولَ اللَّه",
            translit: "Aṣ-ṣalātu was salāmu ‛alayka yā rasūlallāh",
            translation:
              "Salutations and peace be upon you, O Messenger of Allah!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا حَبِيبَ اللَّه",
            translit: "Aṣ-ṣalātu was salāmu ‛alayka yā ḥabīballāh",
            translation:
              "Salutations and peace be upon you, O Beloved of Allah!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا سَيِّدِي يَا مُحَمَّد",
            translit: "Aṣ-ṣalātu was salāmu ‛alayka yā sayyidī yā Muḥammad",
            translation:
              "Salutations and peace be upon you, O my master Muhammad!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا سَيِّدِي يَا أَحْمَد",
            translit: "Aṣ-ṣalātu was salāmu ‛alayka yā sayyidī yā Aḥmad",
            translation:
              "Salutations and peace be upon you, O my master Ahmad!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا سَيِّدِي يَا أَبَا القَاسِم",
            translit: "Aṣ-ṣalātu was salāmu ‛alayka yā sayyidī yā Abal Qāsim",
            translation:
              "Salutations and peace be upon you, O my master Abal-Qasim!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا سَيِّدِي يَا أَبَا الزَّهْرَاء",
            translit: "Aṣ-ṣalātu was salāmu ‛alayka yā sayyidī yā Abaz Zahrā’",
            translation:
              "Salutations and peace be upon you, O my master Abaz-Zahra!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا سَيِّدَ الْمُرْسَلِين",
            translit: "Aṣ-ṣalātu was salāmu ‛alayka yā sayyidal mursalīn",
            translation:
              "Salutations and peace be upon you, O Master of the Messengers!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا خَاتَمَ النَّبِيِّين",
            translit: "Aṣ-ṣalātu was salāmu ‛alayka yā khātaman nabiyyīn",
            translation:
              "Salutations and peace be upon you, O Seal of the Prophets!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا سَيِّدِي يَا نُورَ اللَّهِ الْأَكْبَر",
            translit:
              "Aṣ-ṣalātu was salāmu ‛alayka yā sayyidī yā nūrallāhil akbar",
            translation:
              "Salutations and peace be upon you, O my master, O greatest light of Allah!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا سَيِّدِي يَا نُورَ الْأَنْوَار",
            translit: "Aṣ-ṣalātu was salāmu ‛alayka yā sayyidī yā nūral anwār",
            translation:
              "Salutations and peace be upon you, O my master, O light of lights!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا سَيِّدِي يَا سِرَّ الْأَسْرَار",
            translit: "Aṣ-ṣalātu was salāmu ‛alayka yā sayyidī yā sirral asrār",
            translation:
              "Salutations and peace be upon you, O my master, O secret of secrets!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا سَيِّدِي يَا رُوحَ الْأَرْوَاح",
            translit: "Aṣ-ṣalātu was salāmu ‛alayka yā sayyidī yā rūḥal arwāḥ",
            translation:
              "Salutations and peace be upon you, O my master, O spirit of spirits!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا سَيِّدِي يَا كَهْفَنَا وَكَنَفَنَا",
            translit:
              "Aṣ-ṣalātu was salāmu ‛alayka yā sayyidī yā kahfanā wa kanafanā",
            translation:
              "Salutations and peace be upon you, O my master, O our refuge and shelter!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا سَيِّدِي يَا شَفِيعَنَا فِي الدَّارَيْن",
            translit:
              "Aṣ-ṣalātu was salāmu ‛alayka yā sayyidī yā shafī‛anā fid dārayn",
            translation:
              "Salutations and peace be upon you, O my master, O our intercessor in both realms!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا سَيِّدِي يَا مَلَاذَنَا فِي الْحَـيَاتَيْن",
            translit:
              "Aṣ-ṣalātu was salāmu ‛alayka yā sayyidī yā malādhanā fil ḥayātayn",
            translation:
              "Salutations and peace be upon you, O my master, O our sanctuary in both lives!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا سَيِّدِي يَا غَوْثَ الْمَلْهُوفِين",
            translit:
              "Aṣ-ṣalātu was salāmu ‛alayka yā sayyidī yā ghawthal malhūfīn",
            translation:
              "Salutations and peace be upon you, O my master, O aid of the desperate!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا سَيِّدِي يَا أَمَانَ الْخَائِفِين",
            translit:
              "Aṣ-ṣalātu was salāmu ‛alayka yā sayyidī yā amānal khā’ifīn",
            translation:
              "Salutations and peace be upon you, O my master, O safety of the fearful!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "الصَّلَاةُ وَالسَّلَامُ عَلَيْكَ وَعَلَى إِخْوَانِكَ مِنَ النَّبِيِّينَ وَالْمُرْسَلِينَ، وَآلِ كُلٍّ مِنْهُم وَأَصْحَابِهِم وَالتَّابِعِين",
            translit:
              "Aṣ-ṣalātu was salāmu ‛alayka wa ‛alā ikhwānika minan nabiyyīna wal mursalīn, wa āli kullin minhum wa aṣḥābihim wat tābi‛īn",
            translation:
              "Salutations and peace be upon you and upon your brethren among the Prophets and Messengers, and the Families of each of them and their Companions and followers!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "الصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا سَيِّدِي وَعَلَى جِبْرِيلَ وَمِيكَائِيلَ وَإِسْرَافِيلَ وَحَمَلَةِ الْعَرْشِ وَالْكَرُوبِيِّينَ",
            translit:
              "Aṣ-ṣalātu was salāmu ‛alayka yā sayyidī wa ‛alā Jibrīla wa Mīkā’īla wa Isrāfīla wa ḥamalatil ‛arshi wal karūbiyyīn",
            translation:
              "Salutations and peace be upon you, O my master, and upon Jibril, Mika-il, Israfil, the bearers of the Throne, the archangels",
          }),
          new DhikrEntryModel({
            arabic: "وَجَمِيعِ الْمَلَائِكَةِ الْمُقَرَّبِين",
            translit: "Wa jamī‛il malā’ikatil muqarrabīn",
            translation: "and all the angels brought nigh!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "الصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا سَيِّدِي وَعَلَى سَيِّدَتِنَا خَدِيجَةَ الْكُبْرَى، وَفَاطِمَةَ الزَّهْرَا، وَعَائِشَةَ الرِّضَا",
            translit:
              "Aṣ-ṣalātu was salāmu ‛alayka yā sayyidī wa ‛alā sayyidatinā Khadījatal Kubrā, wa Fāṭimataz-Zahrā, wa ‛Ā’ishatar Riḍā",
            translation:
              "Salutations and peace be upon you, O my master, and upon Sayyidatuna Khadijah al-Kubra, Fatimah az-Zahra, and Aishah ar-Ridha!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "الصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا سَيِّدِي وَعَلَى بَنِيكَ الْقَاسِمِ وَعَبْدِ اللَّهِ الطَّيِّبِ الطَّاهِرِ وَإِبْرَاهِيمَ وَبَنَاتِكَ",
            translit:
              "Aṣ-ṣalātu was salāmu ‛alayka yā sayyidī wa ‛alā banīkal Qāsimi wa ‛Abdillāhiṭ Ṭayyibiṭ Ṭāhiri wa Ibrāhīma wa banātik",
            translation:
              "Salutations and peace be upon you, O my master, and upon your sons al-Qasim, Abdullah at-Tayyib at-Tahir, Ibrahim and your daughters!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "الصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا سَيِّدِي وَعَلَى بَنَاتِكَ الطَّاهِرَاتِ زَيْنَبَ وَرُقَيَّةَ وَأُمِّ كُلْثُوم",
            translit:
              "Aṣ-ṣalātu was salāmu ‛alayka yā sayyidī wa ‛alā banātikaṭ ṭāhirāti Zaynaba wa Ruqayyata wa Ummi Kulthūm",
            translation:
              "Salutations and peace be upon you, O my master, and upon your pure daughters Zaynab, Ruqayyah and Umm Kulthum!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا سَيِّدِي وَعَلَى أُمَّهَاتِ الْمُؤْمِنِين",
            translit:
              "Aṣ-ṣalātu was salāmu ‛alayka yā sayyidī wa ‛alā ummahātil mu’minīn",
            translation:
              "Salutations and peace be upon you, O my master, and upon the Ummahat al-Mu`minin (Mothers of the believers)!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا سَيِّدِي وَعَلَى سَادَاتِنَا أَبِي بَكْرٍ الصِّدِّيقِ",
            translit:
              "Aṣ-ṣalātu was salāmu ‛alayka yā sayyidī wa ‛alā sādātinā Abī Bakriṣ Ṣiddīq",
            translation:
              "Salutations and peace be upon you, O our Master, and upon my masters Abu Bakr as-Siddiq (the veraciously truthful)",
          }),
          new DhikrEntryModel({
            arabic: "وَعُمَرَ الْفَارُوقِ",
            translit: "Wa ‛Umaral Fārūq",
            translation:
              "Umar al-Faruq (the discerner of truth from falsehood)",
          }),
          new DhikrEntryModel({
            arabic: "وَذِي النُّورَيْنِ عُثْمَانَ",
            translit: "Wa dhin Nūrayni ‛Uthmān",
            translation: "Dhun Nurayn (the one of two lights) Uthman",
          }),
          new DhikrEntryModel({
            arabic: "وَبَابِ مَدِينَةِ الْعِلْمِ الْإِمَامِ عَلَيٍّ",
            translit: "Wa bābi madīnatil ‛ilmil Imāmi ‛Aliyy",
            translation: "the door to the City of Knowledge Imam Ali",
          }),
          new DhikrEntryModel({
            arabic: "وَعَلَى الْمُهَاجِرِينَ وَالْأَنْصَارِ",
            translit: "Wa ‛alal muhājirīna wal anṣār",
            translation:
              "and upon the Muhajirun (migrants) and the Ansar (helpers)",
          }),
          new DhikrEntryModel({
            arabic: "وَالصَّحَابَةِ أَجْمَعِين",
            translit: "Waṣ ṣaḥābati ajma‛īn",
            translation: "and all the Companions!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "الصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا سَيِّدِي يَا رَسُولَ اللَّهِ حَنَّ لَكَ الْجِذْعُ مِنْ أَلَمِ الْفُرَاقِ",
            translit:
              "Aṣ-ṣalātu was salāmu ‛alayka yā sayyidī yā rasūlallāhi ḥanna lakal jidh‛u min alamil firāq",
            translation:
              "Salutations and peace be upon you, O my master, O Messenger of Allah! The tree-trunk pined for you in agony at its separation from you",
          }),
          new DhikrEntryModel({
            arabic: "فَفَازَ مِنْكَ بِالْعِنَاقِ",
            translit: "Fafāza minka bil ‛ināq",
            translation: "and it thus won your embrace",
          }),
          new DhikrEntryModel({
            arabic: "وَبِشَارَةِ الْمُرَافَقَةِ وَاللَّحَاقِ",
            translit: "Wa bishāratil murāfaqati wal laḥāq",
            translation:
              "and the tidings that it would be with you in paradise.",
          }),
          new DhikrEntryModel({
            arabic: "وَهَا أَنَا أَحِنُّ إِلَيْكَ مُشْتَاقٌ إِلَيْكَ",
            translit: "Wa hā ana aḥinnu ilayka mushtāqun ilayk",
            translation:
              "And here I am, ardently longing for you, yearning for you",
          }),
          new DhikrEntryModel({
            arabic: "وَاقِفٌ بَيْنَ يَدَيْكَ",
            translit: "Wāqifun bayna yadayk",
            translation: "standing before you.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الصَّلَاةُ وَالسَّلَامُ عَلَيْكَ يَا نَبِيَّ اللَّهِ",
            translit: "Aṣ-ṣalātu was salāmu ‛alayka yā nabiyyallāh",
            translation:
              "Salutations and peace be upon you, O Prophet of Allah",
          }),
          new DhikrEntryModel({
            arabic: "يَا رَسُولَ اللَّهِ",
            translit: "Yā rasūlallāh",
            translation: "O Messenger of Allah",
          }),
          new DhikrEntryModel({
            arabic: "يَا حَبِيبَ اللَّهِ",
            translit: "Yā ḥabīballāh",
            translation: "O Beloved of Allah!",
          }),
          new DhikrEntryModel({
            arabic: "دَعَتْكَ لِنَجْدَتِهَا الْغَزَالَةُ الْمَعْصُوبَةُ فَفَكَكْتَ قَيْدَهَا",
            translit:
              "Da‛atka linajdatihal ghazālatul ma‛ṣūbatu fafakakta qaydahā",
            translation:
              "The gazelle, trapped and bound (by a Bedouin), called out to you to rescue it. So you unshackled its bonds",
          }),
          new DhikrEntryModel({
            arabic: "وَرَحِمْتَ ضَعْفَهَا",
            translit: "Wa raḥimta ḍa‛fahā",
            translation: "showed compassion for its frailty",
          }),
          new DhikrEntryModel({
            arabic: "وَرَحِمْتَهَا بِصِغَارِهَا",
            translit: "Wa raḥimtahā biṣighārihā",
            translation: "and granted mercy to its young.",
          }),
          new DhikrEntryModel({
            arabic: "وَأَنَا الْمُقَيَّدُ بِذَنْبِي",
            translit: "Wa anal muqayyadu bidhanbī",
            translation: "I, too, am ensnared by my sins",
          }),
          new DhikrEntryModel({
            arabic: "الْمُكَبَّلُ بِعَيْبِي عَلَى عَتَبَاتِ بَابِكَ وَقَفْتُ",
            translit: "Al-mukabbalu bi‛aybī ‛alā ‛atabāti bābika waqaftu",
            translation: "and shackled by my flaws, standing at your doorstep.",
          }),
        ],
      }),
    ],
  }),
  new QasidaModel({
    title: "Greeting the Messenger of Allah ﷺ (P2)",
    entries: [
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "كَمْ أَبْرَأَتْ وَصِباً بِاللَّمْسِ رَاحَتُهُ",
            translit: "Kam abra’at waṣiban bil lamsi rāḥatuh",
            translation:
              "How many a sick person has been healed by the touch of his palm,",
          }),
          new QasidaEntryModel({
            arabic: "وَأَطْلَقَتْ أَرِباً مِنْ رِبْقَةِ اللَّمَمِ",
            translit: "Wa aṭlaqat ariban min ribqatil lamam",
            translation:
              "How many times has the touch of his palm relieved the unwell,",
          }),
        ],
      }),
    ],
  }),
  new WirdModel({
    title: "Greeting the Messenger of Allah ﷺ (P3)",
    entries: [
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الصَّلَاةُ والسَّلَامُ عَلَيْكَ يَا سَيِّدِي يَا نَبِيَّ اللَّهِ",
            translit: "Aṣ-ṣalātu was salāmu ‛alayka yā sayyidī yā nabiyyallāh",
            translation:
              "Salutations and peace be upon you, O my master, O Prophet of Allah",
          }),
          new DhikrEntryModel({
            arabic: "يَا رَسُولَ اللَّهِ",
            translit: "Yā rasūlallāh",
            translation: "O Messenger of Allah",
          }),
          new DhikrEntryModel({
            arabic: "يَا حَبِيبَ اللَّهِ",
            translit: "Yā ḥabīballāh",
            translation: "O Beloved of Allah!",
          }),
          new DhikrEntryModel({
            arabic: "جَاءَكَ كَعْبُ بنُ زُهَيرٍ بَعْدَ إِسَاءَتِهِ فِي حَقِّكَ",
            translit: "Jā’aka Ka‛bubnu Zuhayrin ba‛da isā’atihī fī ḥaqqik",
            translation: "Ka'b bin Zuhayr came to you after having wronged you",
          }),
          new DhikrEntryModel({
            arabic: "وَتَطَاوُلِهِ عَلَى مَقَامِكَ",
            translit: "Wa taṭāwulihī ‛alā maqāmik",
            translation: "and disregarded your esteemed position",
          }),
          new DhikrEntryModel({
            arabic: "فَقَابَلْتَهُ بِالْأَمَانِ",
            translit: "Faqābaltahū bil amān",
            translation: "and you granted him amnesty.",
          }),
          new DhikrEntryModel({
            arabic: "فَأَنْشَدَكَ: (بَانَتْ سُعَادُ)",
            translit: "Fa anshadaka: (Bānat Su‛ād)",
            translation: "He recited his ode (Banat Su'ad)",
          }),
          new DhikrEntryModel({
            arabic: "فَفَازَ بِالْإِسْعَادِ",
            translit: "Fafāza bil is‛ād",
            translation: "and was granted felicity",
          }),
          new DhikrEntryModel({
            arabic: "وَكَسَوْتَهُ بُرْدَتَكَ الشَّرِيفَةَ",
            translit: "Wa kasawtahū burdatakash sharīfah",
            translation: "and you draped him with your noble mantle.",
          }),
          new DhikrEntryModel({
            arabic: "وَهَا أَنَا ذَا جِئْتُكَ مُعْتَذِراً عَنْ تَقْصِيرِي وَغَفْلَتِي",
            translit:
              "Wa hā ana dhā ji’tuka mu‛tadhiran ‛an taqṣīrī wa ghaflatī",
            translation:
              "And here I come to you apologising for my shortcomings and heedlessness",
          }),
          new DhikrEntryModel({
            arabic: "تَائِباً مِنْ ذَنْبِي",
            translit: "Tā’iban min dhanbī",
            translation: "and repenting for my sins",
          }),
          new DhikrEntryModel({
            arabic: "أَرْجُو نَيْلَ الْأَمَانِ",
            translit: "Arjū nayalal amān",
            translation: "hoping for sanctuary",
          }),
          new DhikrEntryModel({
            arabic: "وَخِلْعَةَ الرِّضْوَانِ",
            translit: "Wa khil‛atar riḍwān",
            translation: "and the mantle of your satisfaction.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الصَّلَاةُ والسَّلَامُ عَلَيْكَ يَا نَبِيَّ اللَّهِ",
            translit: "Aṣ-ṣalātu was salāmu ‛alayka yā nabiyyallāh",
            translation:
              "Salutations and peace be upon you, O Prophet of Allah",
          }),
          new DhikrEntryModel({
            arabic: "يَا رَسُولَ اللَّهِ",
            translit: "Yā rasūlallāh",
            translation: "O Messenger of Allah",
          }),
          new DhikrEntryModel({
            arabic: "يَا حَبِيبَ اللَّهِ",
            translit: "Yā ḥabīballāh",
            translation: "O Beloved of Allah!",
          }),
          new DhikrEntryModel({
            arabic: "مَا وَقَفَ عَلَى بَابِكَ جَائِعٌ إِلَّا أَطْعَمْتَهُ",
            translit: "Mā waqafa ‛alā bābika jā’i‛un illā aṭ‛amtah",
            translation: "No one stood at your door hungry without being fed",
          }),
          new DhikrEntryModel({
            arabic: "وَلَا عُرْيَانٌ إِلَّا كَسَوْتَهُ",
            translit: "Wa lā ‛uryānun illā kasawtah",
            translation: "or naked without being clothed.",
          }),
          new DhikrEntryModel({
            arabic: "وَهَا أَنَا ذَا جَائِعٌ لِغِذَاءِ الْأَرْوَاحِ",
            translit: "Wa hā ana dhā jā’i‛un lighidhā’il arwāḥ",
            translation:
              "Here I come, a starving soul seeking spiritual nourishment",
          }),
          new DhikrEntryModel({
            arabic: "عُرْيَانٌ عَنْ خِلَعِ الْفَتَّاحِ",
            translit: "‛Uryānun ‛an khila‛il Fattāḥ",
            translation: "a bare soul in need of covering.",
          }),
          new DhikrEntryModel({
            arabic: "فَلَا خِبْتَ وَأَنَا بِبَابِكَ نَازِلٌ",
            translit: "Falā khibta wa ana bibābika nāzil",
            translation: "Do not reject me as I stand at your doorstep",
          }),
          new DhikrEntryModel({
            arabic: "وَبِجَنَابِكَ لَائِذٌ",
            translit: "Wa bijanābika lā’idh",
            translation: "seeking refuge in your presence.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الصَّلَاةُ والسَّلَامُ عَلَيْكَ يَا سَيِّدِي يَا نَبِيَّ اللَّهِ",
            translit: "Aṣ-ṣalātu was salāmu ‛alayka yā sayyidī yā nabiyyallāh",
            translation:
              "Salutations and peace be upon you, O my master, O Prophet of Allah",
          }),
          new DhikrEntryModel({
            arabic: "يَا رَسُولَ اللَّهِ",
            translit: "Yā rasūlallāh",
            translation: "O Messenger of Allah",
          }),
          new DhikrEntryModel({
            arabic: "يَا حَبِيبَ اللَّهِ جَاءَكَ الْبَعِيرُ يَشْكُو إِلَيْكَ",
            translit: "Yā ḥabīballāhi jā’akal ba‛īru yashkū ilayk",
            translation:
              "O Beloved of Allah! A camel approached you, complaining of mistreatment",
          }),
          new DhikrEntryModel({
            arabic: "مُقَبِّلاً قَدَمَيْكَ",
            translit: "Muqabbilan qadamayk",
            translation: "and knelt to kiss your feet.",
          }),
          new DhikrEntryModel({
            arabic: "فَقَبِلْتَ شِكَايَتَهُ",
            translit: "Faqabilta shikāyatah",
            translation: "You listened to its grievances",
          }),
          new DhikrEntryModel({
            arabic: "وَتَوَلَّيْتَ رِعَايَتَهُ",
            translit: "Wa tawallayta ri‛āyatah",
            translation: "and provided care.",
          }),
          new DhikrEntryModel({
            arabic: "فَكَيْفَ بِمَنْ هُوَ مِنْ أُمَّتِكَ مُسْتَجِيباً لِدَعْوَتِكَ؟!",
            translit: "Fakayfa biman huwa min ummatika mustajībun lida‛watik?",
            translation:
              "What about one who belongs to your community, responding to your call?",
          }),
          new DhikrEntryModel({
            arabic: "وَشِكَايَتِي: نَفْسِي وَغَفْلَتِي",
            translit: "Wa shikāyatī: nafsī wa ghaflatī",
            translation: "My complaint is my own self and my heedlessness.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "الصَّلَاةُ والسَّلَامُ عَلَيْكَ يَا سَيِّدِي يَا نَبِيَّ اللَّهِ",
            translit: "Aṣ-ṣalātu was salāmu ‛alayka yā sayyidī yā nabiyyallāh",
            translation: "Salutations and peace be upon you, O my master",
          }),
          new DhikrEntryModel({
            arabic: "يَا رَسُولَ اللَّهِ",
            translit: "Yā rasūlallāh",
            translation: "O Prophet of Allah",
          }),
          new DhikrEntryModel({
            arabic: "يَا حَبِيبَ اللَّهِ",
            translit: "Yā ḥabīballāh",
            translation: "O Messenger of Allah",
          }),
          new DhikrEntryModel({
            arabic: "أَمَرَنَا رَبُّنَا إِذَا قَصَّرْنَا وَأَذْنَبْنَا وَعَصَيْنَا أَنْ نَأْتِيَ إِلَى بَابِكَ",
            translit:
              "Amaranā rabbunā idhā qaṣṣarnā wa adhnabnā wa ‛aṣaynā an na’tiya ilā bābik",
            translation:
              "O Beloved of Allah! Our Lord has commanded us, when we fall short, sin, and disobey",
          }),
          new DhikrEntryModel({
            arabic: "وَنَنْزِلَ بِرِحَابِكَ",
            translit: "Wa nanzila biriḥābik",
            translation: "to come to your door",
          }),
          new DhikrEntryModel({
            arabic: "وَنَلُوذَ بِأَعْتَابِكَ",
            translit: "Wa nalūdha bi a‛tābik",
            translation: "and seek refuge at your threshold.",
          }),
          new DhikrEntryModel({
            arabic: "فَقَالَ تَعَالَى:",
            translit: "Faqāla ta‛ālā:",
            translation: "The Most High said:",
          }),
          nisa_64(),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "وَهَا أَنَا بِذُنُوبِي وَخَطَايَايَ جِئْتُ تَائِباً",
            translit: "Wa hā ana bidhunūbī wa khaṭāyāya ji’tu tā’ibā",
            translation:
              "Here I am with my sins and transgressions, coming in repentance",
          }),
          new DhikrEntryModel({
            arabic: "مِنْ ذُنُوبِي هَارِباً",
            translit: "Min dhunūbī hāribā",
            translation: "fleeing from my sins.",
          }),
          new DhikrEntryModel({
            arabic: "فَاسْتَغْفِرْ لِي رَبَّكَ التَّوَابَ الرَّحِيمَ",
            translit: "Fastaghfir lī rabbakat tawwābar raḥīm",
            translation:
              "So seek forgiveness for me from your Lord, the Most Relenting, the Most Merciful",
          }),
          new DhikrEntryModel({
            arabic:
              "حَتَّى لَا أَخْرُجَ إِلَّا وَوَجَدْتُ اللَّهَ وُجُوداً أَسْتَغْنِي بِهِ عَمَّنْ سِوَاهُ فَأَيُّ شَيْءٍ فَقَدَ مَنْ وَجَدَ اللَّهَ؟",
            translit:
              "Ḥattā lā akhruja illā wa wajadtullāha wujūdan astaghnī bihī ‛amman siwāh, fa ayyu shay’in faqada man wajadallāh?",
            translation:
              "so that I do not leave without having found Allah, which suffices me above all else.",
          }),
          new DhikrEntryModel({
            arabic: "وَأَتُوبُ تَوْبَةً صَادِقَةً لَا نَكْثَ لِعَهْدِهَا",
            translit: "Wa atūbu tawbatan ṣādiqatan lā nakatha li‛ahdihā",
            translation: "I repent sincerely and never break my word",
          }),
          new DhikrEntryModel({
            arabic: "وَلَا خُلْفَ لِوَعْدِهَا",
            translit: "Wa lā khulfa liwa‛dihā",
            translation: "and never go back on my word.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "الصَّلَاةُ والسَّلَامُ عَلَيْكَ يَا سَيِّدِي يَا نَبِيَّ اللَّهِ، يَا رَسُولَ اللَّهِ، يَا حَبِيبَ اللَّهِ قَالَ رَبُّنَا فِيمَا بَلَّغْتَهُ لَنَا:",
            translit:
              "Aṣ-ṣalātu was salāmu ‛alayka yā sayyidī yā nabiyyallāh, yā rasūlallāh, yā ḥabīballāh, qāla rabbunā fīmā ballaghtahū lanā:",
            translation:
              "Salutations and peace be upon you, O my master, O Prophet of Allah, O Messenger of Allah, O Beloved of Allah! Our Lord has said, as you have conveyed to us:",
          }),
          shura_25(),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "وَلَمْ يَقُلْ: (مِنْ عِبَادِهِ).. فَأَيْنَ تَصِلُ تَوْبَتِي، وَالصِّدْقُ عِنْدِي مَعْدُومٌ؟",
            translit:
              "Wa lam yaqul: (min ‛ibādihī).. fa ayna taṣilu tawbatī, waṣ ṣidqu ‛indī ma‛dūm?",
            translation:
              "He did not say “from His servants”... Where might my repentance reach, when sincerity within me is utterly lacking?",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "فَتُبْ عَنَّا لِيَتُوبَ اللَّهُ عَلَيْنَا، فَقَدْ غَفَرَ اللَّهُ لَكَ مَا تَقَدَّمَ مِنْ ذَنْبِكَ وَمَا تَأَخَّرَ",
            translit:
              "Fatub ‛annā liyatūballāhu ‛alaynā, faqad ghafarallāhu laka mā taqaddama min dhanbika wa mā ta’akhkhar",
            translation:
              "So ask Allah to accept our repentance so that He may turn to us in mercy, for He forgives sin for your sake.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "الصَّلَاةُ والسَّلَامُ عَلَيْكَ يَا سَيِّدِي يَا نَبِيَّ اللَّهِ، يَا رَسُولَ اللَّهِ، يَا حَبِيبَ اللَّهِ، قَالَ فِيكَ إِلَهُنَا الْعَظِيمُ:",
            translit:
              "Aṣ-ṣalātu was salāmu ‛alayka yā sayyidī yā nabiyyallāh, yā rasūlallāh, yā ḥabīballāh, qāla fīka ilāhunal ‛aẓīm:",
            translation:
              "Salutations and peace be upon you, O Prophet of Allah, O Messenger of Allah, O Beloved of Allah! Our great God has said about you:",
          }),
          qalam_4(),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "وَقَدْ بَلَغَنَا عَنْكَ أَنَّ أَهْلَ الْمَعْرُوفِ فِي الدُّنْيَا هُمْ أَهْلُ الْمَعْرُوفِ فِي الْآخِرَة؛ فَيَا سَيِّدَ أَهْلِ الْمَعْرُوفِ",
            translit:
              "Wa qad balaghanā ‛anka anna ahlal ma‛rūfi fid dunyā hum ahlul ma‛rūfi fil ākhirah; fa yā sayyida ahlil ma‛rūf",
            translation:
              "We have learned from you that the people of kindness in this world are the people of kindness in the Hereafter. So O master of the people of kindness",
          }),
          new DhikrEntryModel({
            arabic: "جَاءَكَ الضُّيُوفُ",
            translit: "Jā’akaḍ ḍuyūf",
            translation: "your guests have come to you!",
          }),
          new DhikrEntryModel({
            arabic: "فَمُدَّ لَنَا شَرِيفَ السِّمَاطِ",
            translit: "Famudda lanā sharīfas simāṭ",
            translation: "Please extend to us the noble spread",
          }),
          new DhikrEntryModel({
            arabic: "وَحَبْلَ الْاِرْتِبَاطِ؛ لِنَسْلُكَ سَوَاءَ الصِّرَاطِ",
            translit: "Wa ḥablal irtibāṭ; linasluka sawā’aṣ ṣirāṭ",
            translation:
              "and the rope of connection, that we may tread the straight path.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "الصَّلَاةُ والسَّلَامُ عَلَيْكَ يَا سَيِّدِي يَا نَبِيَّ اللَّهِ، يَا رَسُولَ اللَّهِ، يَا حَبِيبَ اللَّهِ، قَالَ فِيكَ الرَّحْمَنُ الرَّحِيمُ:",
            translit:
              "Aṣ-ṣalātu was salāmu ‛alayka yā sayyidī yā nabiyyallāh, yā rasūlallāh, yā ḥabīballāh, qāla fīkar Raḥmānur Raḥīm:",
            translation:
              "Salutations and peace be upon you, O Prophet of Allah, O Messenger of Allah, O Beloved of Allah! The Most Compassionate, the Most Merciful has declared about you:",
          }),
          anbiya_107(),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "جِئْتُ طَالِباً الرَّحْمَةَ، فَارْفَعِ الْكَفَّ الشَّرِيفَ، إِلَى رَبِّكَ اللَّطِيفِ، أَنْ يَرْحَمَنِي وَيَغْفِرَ لِي وَيَلْطُفَ بِي",
            translit:
              "Ji’tu ṭālibar raḥmah, farfa‛il kaffash sharīf, ilā rabbikal laṭīf, an yarḥamanī wa yaghfira lī wa yalṭufa bī",
            translation:
              "I have come seeking mercy, so please, raise your noble hand to your Gentle Lord, to have mercy on me, forgive me, and treat me gently.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "الصَّلَاةُ والسَّلَامُ عَلَيْكَ يَا سَيِّدِي يَا نَبِيَّ اللَّهِ، يَا رَسُولَ اللَّهِ، يَا حَبِيبَ اللَّهِ قَالَ رَبُّنَا:",
            translit:
              "Aṣ-ṣalātu was salāmu ‛alayka yā sayyidī yā nabiyyallāh, yā rasūlallāh, yā ḥabīballāh, qāla rabbunā:",
            translation:
              "Salutations and peace be upon you, O Prophet of Allah, O Messenger of Allah, O Beloved of Allah! Our Lord has proclaimed:",
          }),
          fath_10(),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "وَهَا هِيَ يَدُ الْعَبْدِ الضَّعِيفِ بِعَهْدِ الْوَلَاءِ وَالْوَفَاءِ",
            translit:
              "Wa hā hiya yadul ‛abdiḍ ḍa‛īfi bi‛ahdil walā’i wal wafā’",
            translation:
              "And here is the hand of this weak servant, pledging loyalty and faithfulness.",
          }),
          new DhikrEntryModel({
            arabic: "فَرُوحِي وَنَفْسِي وَمَالِي لَكَ الْفِدَاءُ",
            translit: "Farūḥī wa nafsī wa mālī lakal fidā’",
            translation:
              "May my soul, my life, and my wealth be sacrificed for you",
          }),
          new DhikrEntryModel({
            arabic:
              "وَلِخِدْمَةِ دِينِكَ وَشَرْعِكَ الشَّرِيفِ وَسُنَّتِكَ الْمُنِيفَةِ. فَامْدُدْ لِي كَفَّ إِحْسَانِكَ",
            translit:
              "Wa likhidmati dīnika wa shar‛ikash sharīfi wa sunnatikal munīfah. Famdud lī kaffa iḥsānik",
            translation:
              "and in service to your religion, your sacred law, and your sublime sunnah. Please extend to me your hand of benevolence,",
          }),
          new DhikrEntryModel({
            arabic: "وَاقْبَلْنِي فِي جُمْلَةِ خُدَّامِكَ",
            translit: "Waqbalnī fī jumlati khuddāmik",
            translation: "and accept me into the ranks of your servants.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا سَيِّدِي يَا نَبِيَّ اللَّهِ، يَا رَسُولَ اللَّهِ، يَا حَبِيبَ اللَّهِ",
            translit: "Yā sayyidī yā nabiyyallāh, yā rasūlallāh, yā ḥabīballāh",
            translation:
              "O my Master, O Prophet of Allah, O Messenger of Allah, O Beloved of Allah!",
          }),
        ],
      }),
    ],
  }),
  new QasidaModel({
    title: "Greeting the Messenger of Allah ﷺ (P4)",
    entries: [
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "أَنْتَ بَابُ اللَّهِ نَالَ الْمُرْتَجَـى",
            translit: "Anta bābullāhi nālal murtajā",
            translation: "You are the door of Allah;",
          }),
          new QasidaEntryModel({
            arabic: "وَالْأَمَـانِي مَنْ عَلَيْهِ وَقَفَـا",
            translit: "Wal amānī man ‛alayhi waqafā",
            translation:
              "whoever stands before you attains their goals and wishes.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "أَنْتَ حَبْلُ اللَّهِ مَنْ أَمْسَكَهُ",
            translit: "Anta ḥablullāhi man amsakahū",
            translation: "You are the rope of Allah;",
          }),
          new QasidaEntryModel({
            arabic: "فَازَ بِالْخَيْرِ وَبِالْعَهْدِ وَفَا",
            translit: "Fāza bil khayri wa bil ‛ahdi wafā",
            translation:
              "whoever holds onto you attains all good and remains true to the covenant.",
          }),
        ],
      }),
    ],
  }),
  new QasidaModel({
    title: "Greeting the Messenger of Allah ﷺ (P5)",
    entries: [
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "أَلَا يَا رَسُولَ اللَّهِ إِنَّا قَرَابَةٌ",
            translit: "Alā yā rasūlallāhi innā qarābah",
            translation:
              "O Messenger of Allah, we are your relatives and descendants;",
          }),
          new QasidaEntryModel({
            arabic: "وَذُرِّيَّةٌ جِئْنَاكَ لِلشَّوْقِ وَالْحُـبِّ",
            translit: "Wa dhurriyyatun ji’nāka lish shawqi wal ḥubb",
            translation: "we have come to you out of longing and love.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَقَفْنَا عَلَى أَعْتَابِ فَضْلِكَ سَيِّدِي",
            translit: "Waqafnā ‛alā a‛tābi faḍlika sayyidī",
            translation: "We stand at the threshold of your grace, my master,",
          }),
          new QasidaEntryModel({
            arabic: "لِتَقْبِيلِ تُرْبٍ حَبَّذَا لَكَ مِنْ تُرْبِ",
            translit: "Litaqbīli turbin ḥabbadhā laka min turb",
            translation: "to kiss the dust; how fortunate we are to touch it.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَقُمْنَا تُجَـاهَ الْوَجْهِ وَجْهٌ مُبَارَكٌ",
            translit: "Wa qumnā tujāhal wajhi wajhun mubārak",
            translation: "We stand facing a blessed face; with it,",
          }),
          new QasidaEntryModel({
            arabic: "عَلَيْنَا بِهِ نُسْقَى الغَمَامُ لَدَى الجَدْبِ",
            translit: "‛Alaynā bihī nusqal ghamāmu ladal jadb",
            translation: "we are showered with rain in times of drought.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "أَتَيْنَاكَ زُوَّاراً نَرُومُ شَفَاعَةً",
            translit: "Ataynāka zuwwāran narūmu shafā‛ah",
            translation: "We have come to you as visitors,",
          }),
          new QasidaEntryModel({
            arabic: "إِلَى اللَّهِ فِي مَحْوِ الْإِسَاءَةِ وَالذَّنْبِ",
            translit: "Ilallāhi fī maḥwil isā’ati wadh dhanb",
            translation:
              "seeking your intercession with Allah to erase our misdeeds and sins.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وُفُودٌ وَزُوَّارٌ وَأَضْيَافُ حَضْـرَةٍ",
            translit: "Wufūdun wa zuwwārun wa aḍyāfu ḥaḍrah",
            translation:
              "We are delegations, visitors, and guests of an honored presence,",
          }),
          new QasidaEntryModel({
            arabic: "مُكَرَّمَةٍ مُسْتَوْطَنِ الْجُـودِ وَالْخَصْبِ",
            translit: "Mukarramatin mustawṭanil jūdi wal khaṣb",
            translation: "the abode of generosity and abundance.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَفِي النَّفْسِ حَاجَـاتٌ وَثَـمَّ مَطَالِـبٌ",
            translit: "Wa fin nafsi ḥājātun wa thamma maṭālib",
            translation: "In our souls are needs and requests;",
          }),
          new QasidaEntryModel({
            arabic: "نُؤَمِّـلُ أَنْ تُقْضَـى بِجَاهِـكَ يَا مُحْبِي",
            translit: "Nu’ammilu an tuqḍā bijāhika yā muḥbī",
            translation:
              "we hope that they will be fulfilled through your honor, O beloved.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "تَوَجَّـهْ رَسُولَ اللَّهِ فِي كُلِّ حَاجَـةٍ",
            translit: "Tawajjah rasūlallāhi fī kulli ḥājah",
            translation: "Turn to Allah, O Messenger of Allah,",
          }),
          new QasidaEntryModel({
            arabic: "لَنَا وَمُهِـمٍّ فِي الْمَعَاشِ وَفِي الْقَلْبِ",
            translit: "Lanā wa muhimmin fil ma‛āshi wa fil qalb",
            translation:
              "for every need of ours and every concern in our livelihood and in our hearts.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَإِنَّ صَلَاحَ الدِّينِ وَالْقَلْبِ سَيِّدِي",
            translit: "Wa inna ṣalāḥad dīni wal qalbi sayyidī",
            translation:
              "Indeed, the rectitude of religion and the heart, my master,",
          }),
          new QasidaEntryModel({
            arabic: "هُوَ الْغَرَضُ الْأَقْصَـى فَيَا سَيِّدِي قُمْ بِي",
            translit: "Huwal gharaḍul aqṣā fa yā sayyidī qum bī",
            translation:
              "is the ultimate goal, so O my master, please help me.",
          }),
        ],
      }),
    ],
  }),
  new WirdModel({
    title: "Greeting the Messenger of Allah ﷺ (P6)",
    entries: [
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ أَوَّلِ مُتَلَقٍّ لِفَيْضِكَ الْأَوَّلِ",
            translit:
              "Allāhumma ṣalli wa sallim ‛alā sayyidinā Muḥammadin awwali mutalaqqin lifayḍikal awwal",
            translation:
              "O Allah, bestow Your prayers and peace upon our master Muhammad, the foremost receiver of Your first outpouring",
          }),
          new DhikrEntryModel({
            arabic: "وَأَكْرَمِ حَبِيبٍ تَفَضَّلْتَ عَلَيْهِ فَتَفَضَّلَ",
            translit: "Wa akrami ḥabībin tafaḍḍalta ‛alayhi fatafaḍḍal",
            translation:
              "the noblest beloved, upon whom You have bestowed Your favour and he thus excelled",
          }),
          new DhikrEntryModel({
            arabic: "وَعَلَى آلِهِ وَصَحْبِهِ وَتَابِعِيهِ وَحِزْبِهِ",
            translit: "Wa ‛alā ālihī wa ṣaḥbihī wa tābi‛īhi wa ḥizbih",
            translation:
              "and upon his Family, his Companions, his followers and those loyal to him",
          }),
          new DhikrEntryModel({
            arabic: "مَا دَامَ تَلَقِّيهِ مِنْكَ وَتَرَقِّيهِ إِلَيْكَ",
            translit: "Mā dāma talaqqīhi minka wa taraqqīhi ilayk",
            translation:
              "[prayers and peace] lasting as long as his receiving from You and his ascent towards You",
          }),
          new DhikrEntryModel({
            arabic: "وَإِقْبَالُكَ عَلَيْهِ وَإِقْبَالُهُ عَلَيْكَ",
            translit: "Wa iqbāluka ‛alayhi wa iqbāluhū ‛alayk",
            translation: "and Your approach to him and his approach to You",
          }),
          new DhikrEntryModel({
            arabic: "وَشُهُودُهُ لَكَ وَانْطِرَاحُهُ لَدَيْكَ",
            translit: "Wa shuhūduhū laka wanṭirāḥuhū ladayk",
            translation:
              "and his witnessing of You and his humble prostration before You.",
          }),
          new DhikrEntryModel({
            arabic: "صَلَاةً نَشْهَدُكَ بِهَا مِنْ مِرْآتِهِ",
            translit: "Ṣalātan nashhaduka bihā min mir’ātih",
            translation:
              "By this prayer we shall witness You through his mirror",
          }),
          new DhikrEntryModel({
            arabic: "وَنَصِلُ بِهَا إِلَى حَضْرَتِكَ مِنْ حَضْرَةِ ذَاتِهِ",
            translit: "Wa naṣilu bihā ilā ḥaḍratika min ḥaḍrati dhātih",
            translation: "and enter into Your presence through his presence",
          }),
          new DhikrEntryModel({
            arabic: "قَائِمِينَ لَكَ وَلَهُ بِالْأَدَبِ الْوَافِرِ",
            translit: "Qā’imīna laka wa lahū bil adabil wāfir",
            translation: "displaying to You and him the best etiquette",
          }),
          new DhikrEntryModel({
            arabic: "مَغْمُورِينَ مِنْكَ وَمِنْهُ بِالْمَدَدِ الْبَاطِنِ وَالظَّاهِر",
            translit: "Maghmūrīna minka wa minhu bil madadil bāṭini waẓ ẓāhir",
            translation:
              "fully enveloped in inward and outward spiritual assistance from You and him.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ صَلَاةً تَمُدُّ بِهَا جِسْمِي مِنْ جِسْمِهِ",
            translit:
              "Allāhumma ṣalli ‛alā sayyidinā Muḥammadin ṣalātan tamuddu bihā jismī min jismih",
            translation:
              "O Allah, bestow prayers upon our master Muhammad through which my body attains assistance from his body",
          }),
          new DhikrEntryModel({
            arabic: "وَقَلْبِي مِنْ قَلْبِهِ",
            translit: "Wa qalbī min qalbih",
            translation: "my heart from his heart",
          }),
          new DhikrEntryModel({
            arabic: "وَرُوحِي مِنْ رُوحِهِ",
            translit: "Wa rūḥī min rūḥih",
            translation: "my soul from his soul",
          }),
          new DhikrEntryModel({
            arabic: "وَسِرِّي مِنْ سِرِّهِ",
            translit: "Wa sirrī min sirrih",
            translation: "my secret from his secret",
          }),
          new DhikrEntryModel({
            arabic: "وَعِلْمِي مِنْ عِلْمِهِ",
            translit: "Wa ‛ilmī min ‛ilmih",
            translation: "my knowledge from his knowledge",
          }),
          new DhikrEntryModel({
            arabic: "وَعَمَلِي مِنْ عَمَلِهِ",
            translit: "Wa ‛amalī min ‛amalih",
            translation: "my action from his action",
          }),
          new DhikrEntryModel({
            arabic: "وَخُلُقِي مِنْ خُلُقِهِ",
            translit: "Wa khuluqī min khuluqih",
            translation: "my character from his character",
          }),
          new DhikrEntryModel({
            arabic: "وَنِيَّتِي مِنْ نِيَّتِهِ",
            translit: "Wa niyyatī min niyyatih",
            translation: "my intention from his intention",
          }),
          new DhikrEntryModel({
            arabic: "وَوِجْهَتِي مِنْ وِجْهَتِهِ",
            translit: "Wa wijhatī min wijhatih",
            translation: "my heart’s focus from his heart’s focus",
          }),
          new DhikrEntryModel({
            arabic: "وَقَصْدِي مِنْ قَصْدِهِ",
            translit: "Wa qaṣdī min qaṣdih",
            translation: "my direct aspiration from his direct aspiration.",
          }),
          new DhikrEntryModel({
            arabic: "وَتَعُودُ بَرَكَاتُها عَلَيَّ وَعَلَى أَهْلِي وَأَحْبَابِي وَأَصْحَابِي وَعَلَى أَهْلِ عَصْرِي",
            translit:
              "Wa ta‛ūdu barakātuhā ‛alayya wa ‛alā ahlī wa aḥbābī wa aṣḥābī wa ‛alā ahli ‛aṣrī",
            translation:
              "May I attain the blessings of these prayers along with my children, my companions and the people of my time.",
          }),
          new DhikrEntryModel({
            arabic: "وَعَلَى آلِهِ وَسَلِّم يَا نُورُ",
            translit: "Wa ‛alā ālihī wa sallim yā Nūr",
            translation: "and upon his Family, and grant him peace. O Light!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ نُورِكَ السَّارِي",
            translit:
              "Allāhumma ṣalli wa sallim ‛alā sayyidinā Muḥammadin nūrikas sārī",
            translation:
              "O Allah, bestow prayers and peace upon our master Muhammad, Your light which spreads",
          }),
          new DhikrEntryModel({
            arabic: "وَمَدَدِكَ الْجَارِي",
            translit: "Wa madadikal jārī",
            translation:
              "and Your assistance which flows (throughout creation).",
          }),
          new DhikrEntryModel({
            arabic: "وَاجْمَعْنِي بِهِ فِي كُلِّ أَطْوَارِي",
            translit: "Wajma‛nī bihī fī kulli aṭwārī",
            translation: "Join me with him in all my states,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَلَى آلِهِ وَصَحْبِهِ يَا نُور",
            translit: "Wa ‛alā ālihī wa ṣaḥbihī yā Nūr",
            translation: "and upon his Family and Companions. O Light!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ سَيِّدِ الْأَكْوَانِ",
            translit:
              "Allāhumma ṣalli wa sallim ‛alā sayyidinā Muḥammadin sayyidil akwān",
            translation:
              "O Allah, bestow prayers upon our master Muhammad, the master of all creation",
          }),
          new DhikrEntryModel({
            arabic: "الْحَاضِرِ مَعَ مَنْ صَلَّى عَلَيْهِ فِي كُلِّ زَمَانٍ وَمَكَانٍ",
            translit:
              "Al-ḥāḍiri ma‛a man ṣallā ‛alayhi fī kulli zamānin wa makān",
            translation:
              "the one who is present with whoever bestows prayers upon him in every time and place",
          }),
          new DhikrEntryModel({
            arabic: "وَعَلَى آلِهِ وَصَحْبِهِ فِي كُلِّ أَوَانٍ",
            translit: "Wa ‛alā ālihī wa ṣaḥbihī fī kulli awān",
            translation:
              "and upon his Family and Companions, and grant them peace at all times.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ النَّبِّي الْكَامِلِ، وَعَلَى آلِهِ، كَمَا لَا نِهَايَةَ لِكَمَالِكَ وَعَدَدَ كَمَالِهِ",
            translit:
              "Allāhumma ṣalli wa sallim ‛alā sayyidinā Muḥammadin nabiyyil kāmil, wa ‛alā ālih, kamā lā nihāyata likamālika wa ‛adada kamālih",
            translation:
              "O Allah, bestow prayers, peace, and blessings upon our master Muhammad, the perfect Prophet, and upon his Family, as there is no end to Your perfection and equal to the number of his perfection.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى عَبْدِكَ وَرَسُولِكَ سَيِّدِنَا مُحَمَّدٍ كَمَا أَكْرَمْتَهُ بِرُؤْيَةِ وَجْهِكَ الْكَرِيمِ",
            translit:
              "Allāhumma ṣalli wa sallim ‛alā ‛abdika wa rasūlika sayyidinā Muḥammadin kamā akramtahū biru’yati wajhikal karīm",
            translation:
              "O Allah, bestow prayers and peace upon Your servant and messenger, our master Muhammad",
          }),
          new DhikrEntryModel({
            arabic: "صَلَاةً وَسَلَاماً تُكْرِمُنِي بِهَا بِرُؤْيَةِ وَجْهِهِ",
            translit: "Ṣalātan wa salāman tukrimunī bihā biru’yati wajhih",
            translation:
              "prayers and peace by which You honor me to see his noble face",
          }),
          new DhikrEntryModel({
            arabic: "رُؤْيَةً تُوصِلُنِي لِرُؤْيَةِ وَجْهِكَ الْكَرِيمِ يَا كَرِيمُ",
            translit: "Ru’yatan tūṣilunī liru’yati wajhikal karīmi yā Karīm",
            translation:
              "which will ready me to see Your noble countenance, O Generous!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ إِنَّا نَتَوَجَّهُ إِلَيْكَ وَنَتَوَسَّلُ إِلَيْكَ بِحَقِّ نَبِيِّكَ مُحَمَّدٍ نَبِيِّ الرَّحْمَةِ أَنْ تَقْضِيَ حَوَائِجَنَا",
            translit:
              "Allāhumma innā natawajjahu ilayka wa natawassalu ilayka biḥaqqi nabiyyika Muḥammadin nabiyyir raḥmati an taqḍiya ḥawā’ijanā",
            translation:
              "O Allah, indeed we turn to You and seek Your help through the merit of Your Prophet Muhammad, the Prophet of Mercy, to fulfill our needs,",
          }),
          new DhikrEntryModel({
            arabic: "وَتُصْلِحَ نِيَّاتِنَا",
            translit: "Wa tuṣliḥa niyyātinā",
            translation: "rectify our intentions,",
          }),
          new DhikrEntryModel({
            arabic: "وَتُطَهِّرَ قُلُوبَنَا",
            translit: "Wa tuṭahhira qulūbanā",
            translation: "and purify our hearts.",
          }),
          new DhikrEntryModel({
            arabic: "وَأَنْ تَغْفِرَ لَنَا مَغْفِرَةً عَامَّةً تَمْحُو بِهَا جَمِيعَ ذُنُوبِنَا",
            translit:
              "Wa an taghfira lanā maghfiratan ‛āmmatan tamḥū bihā jamī‛a dhunūbinā",
            translation:
              "Grant us a comprehensive forgiveness that erases all our sins.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ",
            translit: "Allāhumma",
            translation: "O Allah!",
          }),
          baqarah_201(),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ اغْفِرْ لَنَا",
            translit: "Allāhummaghfir lanā",
            translation: "O Allāh, forgive us",
          }),
          imran_193(),
          imran_194(),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ أَنْزِلْ عَلَى أَرْضِ قَلْبِي مِن سَمَاءِ فَضْلِكَ مَاءَ رَحْمَةٍ تُبْهِجُ بِهِ رُوحِي",
            translit:
              "Allāhumma anzil ‛alā arḍi qalbī min samā’i faḍlika mā’a raḥmatin tubhiju bihī rūḥī",
            translation:
              "O Allah, let the rain of Your grace descend from the heavens onto the earth of my heart",
          }),
          new DhikrEntryModel({
            arabic: "وَتُنْبِتُ الْبِرَّ وَالتَّقْوَى",
            translit: "Wa tunbitul birra wat taqwā",
            translation:
              "bringing joy to my soul and nurturing righteousness and piety",
          }),
          new DhikrEntryModel({
            arabic: "فَتُثْمِرُ الْخُشُوعَ والْأَدَبَ مَعَكَ وَمَعَ حَبِيبِكَ",
            translit: "Fatuthmirul khushū‛a wal adaba ma‛aka wa ma‛a ḥabībik",
            translation:
              "thereby bearing the fruits of humility and reverence towards You and Your beloved.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ ارْزُقْنَا كَمَالَ الْيَقِينِ",
            translit: "Allāhummarzuqnā kamālal yaqīn",
            translation: "O Allah, grant us perfect certainty",
          }),
          new DhikrEntryModel({
            arabic: "وَتَمَامَ الْمَعْرِفَةِ",
            translit: "Wa tamāmal ma‛rifah",
            translation: "true knowledge of You",
          }),
          new DhikrEntryModel({
            arabic: "وَحَقِيقَةَ التَّوْحِيدِ",
            translit: "Wa ḥaqīqatat tawḥīd",
            translation: "true monotheism",
          }),
          new DhikrEntryModel({
            arabic: "وَصِدْقَ الْمَحَبَّةِ",
            translit: "Wa ṣidqal maḥabbah",
            translation: "genuine love",
          }),
          new DhikrEntryModel({
            arabic: "وَصَفَاءَ النِّيَّةِ",
            translit: "Wa ṣafā’an niyyah",
            translation: "pure intention",
          }),
          new DhikrEntryModel({
            arabic: "وَحُسْنَ الْقَصْدِ",
            translit: "Wa ḥusnal qaṣd",
            translation: "beautiful purpose",
          }),
          new DhikrEntryModel({
            arabic: "وَقُوَّةَ الشُّهُودِ",
            translit: "Wa quwwatash shuhūd",
            translation: "strong witnessing of You",
          }),
          new DhikrEntryModel({
            arabic: "وَسَعَادَةَ الدَّارَيْنِ",
            translit: "Wa sa‛ādatad dārayn",
            translation: "happiness in both worlds",
          }),
          new DhikrEntryModel({
            arabic:
              "وَارْزُقْنَا الْعُبُودِيَّةَ الْمَحْضَةَ وَعَافِيَةَ الدَّارَيْنِ؛ يَا أَرْحَمَ الرَّاحِمِينَ فِي لُطْفٍ وَعَافِيَةٍ",
            translit:
              "Warzuqnal ‛ubūdiyyatal maḥḍata wa ‛āfiyatad dārayn; yā arḥamar rāḥimīna fī luṭfin wa ‛āfiyah",
            translation:
              "and grant us sincere servitude to You and well-being in both worlds, O Most Merciful of the merciful, with ease and well-being.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ ارْزُقِني الصِّدِّيقِيَّةَ الْعُظْمَى",
            translit: "Allāhummarzuqnīṣ ṣiddīqiyyatal ‛uẓmā",
            translation: "O Allah, grant me the station of the utmost veracity",
          }),
          new DhikrEntryModel({
            arabic: "وَالْمَحْبُوبِيَّةَ الْكُبْرَى",
            translit: "Wal maḥbūbiyyatal kubrā",
            translation: "supreme belovedness",
          }),
          new DhikrEntryModel({
            arabic: "وَحَقِيقَةَ مَعْرِفَتِكَ",
            translit: "Wa ḥaqīqata ma‛rifatik",
            translation: "the reality of knowing You",
          }),
          new DhikrEntryModel({
            arabic: "وَدَوَامَ عَافِيَتِكَ",
            translit: "Wa dawāma ‛āfiyatik",
            translation: "perpetual well-being",
          }),
          new DhikrEntryModel({
            arabic: "وَاجْعَلْنِي مَحْبُوباً عِنْدَ حَبِيبِكَ",
            translit: "Waj‛alnī maḥbūban ‛inda ḥabībik",
            translation: "and make me beloved to Your beloved",
          }),
          new DhikrEntryModel({
            arabic: "مَخْطُوباً فِي حَضْرَتِهِ",
            translit: "Makhṭūban fī ḥaḍratih",
            translation: "addressed by his presence",
          }),
          new DhikrEntryModel({
            arabic: "مَنْظُوراً بِعَيْنِ عِنَايَتِهِ",
            translit: "Manẓūran bi‛ayni ‛ināyatih",
            translation: "gazed upon by his caring eyes",
          }),
          new DhikrEntryModel({
            arabic: "حَاضِراً مَعَهُ؛ فِي خَيْرٍ وَلُطْفٍ وَعَافِيَةٍ",
            translit: "Ḥāḍiran ma‛ahū; fī khayrin wa luṭfin wa ‛āfiyah",
            translation:
              "present with him; in goodness, kindness, and well-being.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ واجْعَلْنِي مَحْضَ سُرُورٍ لِقَلْبِهِ الشَّرِيفِ؛ حَامِلاً لِرَايَتِهِ",
            translit:
              "Allāhummaj‛alnī maḥḍa surūrin liqalbihish sharīf; ḥāmilan lirāyatih",
            translation:
              "O Allah, make me purely a source of joy for his noble heart, a bearer of his flag",
          }),
          new DhikrEntryModel({
            arabic: "مُبَلِّغاً لِدَعْوَتِهِ",
            translit: "Muballighan lida‛watih",
            translation: "a conveyer of his call",
          }),
          new DhikrEntryModel({
            arabic: "مُحْيِياً لِسُنَّتِهِ",
            translit: "Muḥyiyan lisunnatih",
            translation: "a reviver of his sunnah",
          }),
          new DhikrEntryModel({
            arabic: "نَاشِراً لِدِينِهِ",
            translit: "Nāshiran lidīnih",
            translation: "and a spreader of his religion.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ أَحْيِنِي عَلَى سُنَّتِهِ، وَأَمِتْنِي عَلَى مِلَّتِهِ، وَاحْشُرْنِي فِي زُمْرَتِهِ",
            translit:
              "Allāhumma aḥyinī ‛alā sunnatih, wa amitnī ‛alā millatih, waḥshurnī fī zumratih",
            translation:
              "O Allah, let me live according to his sunnah, die on his religion, and be resurrected in his company.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ وَاجْعَلْنِي وَأَهْلِي وَأَوْلَادِي مِنْ أَوَّلِ مَنْ يَشْفَعُ فِيهِم يَوْمَ الشَّفَاعَةِ الْعُظْمَى",
            translit:
              "Allāhumma waj‛alnī wa ahlī wa awlādī min awwali man yashfa‛u fīhim yawmash shafā‛atil ‛uẓmā",
            translation:
              "O Allah, make me, my family and my children among the first he intercedes for on the Day of the Supreme Intercession.",
          }),
          new DhikrEntryModel({
            arabic: "وَأَكْرِمْنَا بِالدُّخُولِ فِي ظِلِّ لِوَائِهِ الْمَعْقُودِ",
            translit: "Wa akrimnā biddukhūli fī ẓilli liwā’ihil ma‛qūd",
            translation:
              "Honor us by entering us under the shade of his banner",
          }),
          new DhikrEntryModel({
            arabic: "وَأَوْرِدْنَا حَوْضَهُ الْمَوْرُودَ",
            translit: "Wa awridnā ḥawḍahul mawrūd",
            translation: "allowing us to drink from his pool",
          }),
          new DhikrEntryModel({
            arabic: "وَأَكْرِمْنَا بِجِوَارِهِ فِي فَرَادِيسِ الْجِنَانِ",
            translit: "Wa akrimnā bijiwārihī fī farādīsil jinān",
            translation:
              "and honoring us by granting us nearness to him in Firdaws.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ رِضْوَانَكَ الْأَكْبَرَ",
            translit: "Allāhumma innī as’aluka riḍwānakal akbar",
            translation: "O Allah, I ask You for Your greatest pleasure",
          }),
          new DhikrEntryModel({
            arabic:
              "وَأَنْ تُرْضِيَ عَنِّي نَبِيَّكَ وَتُرْضِيَ عَنِّي وَالِدَيَّ وَأَرْحَامِي وَجِيرَانِي وَذَوِي الْحُقُوقِ عَلَيَّ",
            translit:
              "Wa an turḍiya ‛annī nabiyyaka wa turḍiya ‛annī wālidayya wa arḥāmī wa jīrānī wa dhawil ḥuqūqi ‛alayy",
            translation:
              "and that You make Your Prophet pleased with me, and You make my parents, relatives, neighbours, and those who have rights over me be pleased with me.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ وَارْحَمْ أُمَّةَ سَيِّدِنَا مُحَمَّدٍ، وَفَرِّجْ كُرُوبَهُم وَاجْمَعْ كَلِمَتَهُم، وَوَحِّدْ صَفَّهُم، وَانْصُرْهُم عَلَى عَدُوِّهِم",
            translit:
              "Allāhumma warḥam ummata sayyidinā Muḥammad, wa farrij kurūbahum wajma‛ kalimatahum, wa waḥḥid ṣaffahum, wanṣurhum ‛alā ‛aduwwihim",
            translation:
              "O Allah, have mercy on the nation of our master Muhammad. Relieve their distress, unite their word, unify their ranks, and grant them victory over their enemies.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ اشْفِ مَرْضَاهُم",
            translit: "Allāhummashfi marḍāhum",
            translation: "O Allah, heal their sick",
          }),
          new DhikrEntryModel({
            arabic: "وَعَافِ مُبْتَلَاهُم",
            translit: "Wa ‛āfi mubtalāhum",
            translation: "grant well-being to their afflicted",
          }),
          new DhikrEntryModel({
            arabic: "وَيَسِّرْ أُمُورَهُم",
            translit: "Wa yassir umūrahum",
            translation: "ease their affairs",
          }),
          new DhikrEntryModel({
            arabic: "وَاشْرَحْ صُدُورَهُم",
            translit: "Washraḥ ṣudūrahum",
            translation: "expand their hearts",
          }),
          new DhikrEntryModel({
            arabic: "وَاهْدِ ضَالَّهُم",
            translit: "Wahdi ḍāllahum",
            translation: "guide their lost",
          }),
          new DhikrEntryModel({
            arabic: "وَأَصْلِحْ فَاسِدَهُم",
            translit: "Wa aṣliḥ fāsidahum",
            translation: "rectify their corrupt",
          }),
          new DhikrEntryModel({
            arabic: "وَقَوِّمْ مُعْوَجَّهُم",
            translit: "Wa qawwim mu‛wajjahum",
            translation: "straighten their crooked",
          }),
          new DhikrEntryModel({
            arabic: "وَرُدَّ غَائِبَهُم",
            translit: "Wa rudda ghā’ibahum",
            translation: "return their absent",
          }),
          new DhikrEntryModel({
            arabic: "وَارْحَمْ مَوْتَاهُم",
            translit: "Warḥam mawtāhum",
            translation: "and have mercy on their deceased.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ تَقَبَّلْ ذَلِكَ بِسِرِّ أَسْرَارِ الْفَاتِحَة",
            translit: "Allāhumma taqabbal dhālika bisirri asrāril Fātiḥah",
            translation:
              "O Allah, accept all of this by the secret of the secrets of Al-Fatihah.",
          }),
        ],
      }),
    ],
  }),
  new WirdModel({
    title: "Greeting the Righteous Caliphs",
    entries: [
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "السَّلَامُ عَلَيْكَ يَا سَيِّدَنَا أَبَا بَكْرٍ الصِّدِّيق",
            translit: "As-salāmu ‛alayka yā sayyidanā Abā Bakriṣ Ṣiddīq",
            translation: "Peace be upon you, O our master, Abu Bakr as-Siddiq!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "السَّلَامُ عَلَيْكَ يَا عَبْدَ اللَّهِ الْعَتِيق",
            translit: "As-salāmu ‛alayka yā ‛Abdallāhil ‛Atīq",
            translation: "Peace be upon you, O Abdullah al-Atiq!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "السَّلَامُ عَلَيْكَ يَا رَفِيقَ رَسُولِ اللَّهِ فِي الشِّدَّةِ وَالضِّيقِ",
            translit:
              "As-salāmu ‛alayka yā rafīqa rasūlillāhi fish shiddati waḍ ḍīq",
            translation:
              "Peace be upon you, O Companion of the Messenger of Allah in hardship and difficulty!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "السَّلَامُ عَلَيْكَ يَا خَلِيفَةَ رَسُولِ اللَّهِ عَلَى التَّحْقِيقِ",
            translit: "As-salāmu ‛alayka yā khalīfata rasūlillāhi ‛alat taḥqīq",
            translation:
              "Peace be upon you, O true Caliph of the Messenger of Allah!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "السَّلَامُ عَلَيْكَ سَيِّدِي عُمَرُ بنَ الْخَطَّاب",
            translit: "As-salāmu ‛alayka sayyidī ‛Umarabnal Khaṭṭāb",
            translation: "Peace be upon you, O my master Umar bin al-Khattab!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "السَّلَامُ عَلَيْكَ يَا نَاطِقاً بِالصَّوَابِ",
            translit: "As-salāmu ‛alayka yā nāṭiqan biṣ ṣawāb",
            translation: "Peace be upon you, O one who speaks the truth!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "السَّلَامُ عَلَيْكَ يَا مَنْ وَافَقَ كَلَامُهُ الْكِتَابَ",
            translit: "As-salāmu ‛alayka yā man wāfaqa kalāmuhul kitāb",
            translation:
              "Peace be upon you, O one whose speech aligns with the Book!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "السَّلَامُ عَلَيْكَ يَا شَهِيدَ الْمِحْرَابِ",
            translit: "As-salāmu ‛alayka yā shahīdal miḥrāb",
            translation:
              "Peace be upon you who was martyred in the prayer niche!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "السَّلَامُ عَلَيْكَ يَا وَزِيرَيْ رَسُولِ اللَّه",
            translit: "As-salāmu ‛alayka yā wazīray rasūlillāh",
            translation:
              "Peace be upon you, O ministers of the Messenger of Allah!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "السَّلَامُ عَلَيْكُمَا وَعَلَى ذِي النُّورَيْنِ سَيِّدِنَا عُثْمَانَ بنَ عَفَّان",
            translit:
              "As-salāmu ‛alaykumā wa ‛alā dhin Nūrayni sayyidinā ‛Uthmānabna ‛Affān",
            translation:
              "Peace be upon you both, and upon Dhun Nurayn, our master Uthman bin Affan!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "السَّلَامُ عَلَيْكُمَا وَعَلَى مَنِ اسْتَحْيَتْ مِنْهُ مَلَائِكَةُ الرَّحَمَٰن",
            translit:
              "As-salāmu ‛alaykumā wa ‛alā manistaḥyat minhu malā’ikatur Raḥmān",
            translation:
              "Peace be upon you both, and upon the one whom the angels of the All-Merciful were shy of!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "السَّلَامُ عَلَيْكُمَا وَعَلَى سَيِّدِنَا الْكَرَّارِ عَلِيٍّ بنَ أَبِي طَالِب",
            translit:
              "As-salāmu ‛alaykumā wa ‛alā sayyidinal Karrāri ‛Aliyyibni Abī Ṭālib",
            translation:
              "Peace be upon you both, and upon our master al-Karrar Ali bin Abi Talib!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "السَّلَامُ عَلَيْكُمَا وَعَلَى لَيْثِ بَنِي غَالِب",
            translit: "As-salāmu ‛alaykumā wa ‛alā laythi banī Ghālib",
            translation:
              "Peace be upon you both, and upon the lion of Bani Ghalib!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "السَّلَامُ عَلَيْكُمَا وَعَلَى بَابِ مَدِينَةِ الْعِلْمِ لِكُلِّ رَاغِب",
            translit:
              "As-salāmu ‛alaykumā wa ‛alā bābi madīnatil ‛ilmi likulli rāghib",
            translation:
              "Peace be upon you both, and upon the Door to the City of Knowledge for every seeker!",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ بِحَقِّهِمْ عَلَيْكَ",
            translit: "Allāhumma biḥaqqihim ‛alayk",
            translation: "O Allah, on account of their standing with You",
          }),
          new DhikrEntryModel({
            arabic: "وَبِاصْطِفَائِكَ لَهُمْ لِصُحْبَةِ حَبِيبِكَ",
            translit: "Wa biṣṭifā’ika lahum liṣuḥbati ḥabībik",
            translation:
              "and by virtue of Your divine selection of them for the companionship of Your Beloved",
          }),
          new DhikrEntryModel({
            arabic:
              "وَمَا أَوْدَعْتَ فِي قُلُوبِهِم مِنَ الْإِيْمَانِ الْكَامِلِ وَالتَّصْدِيقِ الْكَامِلِ وَالْمَحَبَّةِ الصَّادِقَةِ؛",
            translit:
              "Wa mā awda‛ta fī qulūbihim minal īmānil kāmili wat taṣdīqil kāmili wal maḥabbatiṣ ṣādiqah;",
            translation:
              "and the perfect faith, complete conviction, and genuine love You instilled in their hearts",
          }),
          new DhikrEntryModel({
            arabic: "أَسْأَلُكَ أَنْ تُحَقِّقَ لِي وَفِيَّ كُلَّ ذَلِكَ فِي خَيْرٍ وَلُطْفٍ وَعَافِيَةٍ",
            translit:
              "As’aluka an tuḥaqqiqa lī wa fiyya kulla dhālika fī khayrin wa luṭfin wa ‛āfiyah",
            translation:
              "I ask You to actualize and manifest these virtues within me, in the best of ways, with ease, and well-being.",
          }),
          new DhikrEntryModel({
            arabic: "وَتَقَبَلَ مِنِّي الزِّيَارَةَ",
            translit: "Wa taqabbala minnīz ziyārah",
            translation: "Accept my visit",
          }),
          new DhikrEntryModel({
            arabic: "وَتُعَجِّلَ لِي بِالْبِشَارَةِ...",
            translit: "Wa tu‛ajjila lī bil bishārah...",
            translation: "and bless me with good news soon...",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "بِسِرِّ الْفَاتِحَةِ وَإِلَى حَضْرَةِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَآلِهِ وَصَحْبِهِ وَسَلَّمَ",
            translit:
              "Bisirril Fātiḥati wa ilā ḥaḍratin nabiyyi ṣallallāhu ‛alayhi wa ālihī wa ṣaḥbihī wa sallam",
            translation:
              "by the secret of the Fatihah to the presence of the Prophet (peace be upon him and his family and companions).",
          }),
        ],
      }),
    ],
  }),
];
