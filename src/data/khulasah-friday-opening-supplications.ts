import { falaq, ikhlas, nas } from "@/data/shared/quran";
import { imran_19 } from "@/data/shared/quran-partial";
import {
  DhikrEntryModel,
  DhikrModel,
  QuranDhikrEntryModel,
  WirdModel,
} from "@/models/recitation";

export default [
  new WirdModel({
    title: "Opening supplications",
    entries: [
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
            translit: "Bismillāhir raḥmānir raḥīm.",
            translation:
              "In the name of Allah, the Most Gracious, the Most Merciful.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new QuranDhikrEntryModel({
            arabic: "الٓمٓ",
            translit: "Alif Lām Mīm.",
            translation: "Alif, Lām, Meem.",
            surah: 2,
            verse: 1,
          }),
          new QuranDhikrEntryModel({
            arabic: "ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ",
            translit: "Dhālikal kitābu lā rayba fīhi hudallil muttaqīn.",
            translation:
              "This is the Book about which there is no doubt, a guidance for those conscious of Allāh -",
            surah: 2,
            verse: 2,
          }),
          new QuranDhikrEntryModel({
            arabic: "ٱلَّذِينَ يُؤْمِنُونَ بِٱلْغَيْبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقْنَٰهُمْ يُنفِقُونَ",
            translit:
              "Alladhīna yu'minūna bil ghaybi wa yuqīmūnaṣ ṣalāta wa mimmā razaqnāhum yunfiqūn.",
            translation:
              "Who believe in the unseen, establish prayer, and spend out of what We have provided for them,",
            surah: 2,
            verse: 3,
          }),
          new QuranDhikrEntryModel({
            arabic:
              "وَٱلَّذِينَ يُؤْمِنُونَ بِمَآ أُنزِلَ إِلَيْكَ وَمَآ أُنزِلَ مِن قَبْلِكَ وَبِٱلْـَٔاخِرَةِ هُمْ يُوقِنُونَ",
            translit:
              "Walladhīna yu'minūna bimā unzila ilayka wa mā unzila min qablika wa bil ākhirati hum yūqinūn.",
            translation:
              "And who believe in what has been revealed to you, [O Muḥammad], and what was revealed before you, and of the Hereafter they are certain [in faith].",
            surah: 2,
            verse: 4,
          }),
          new QuranDhikrEntryModel({
            arabic: "أُو۟لَٰٓئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ ۖ وَأُو۟لَٰٓئِكَ هُمُ ٱلْمُفْلِحُونَ",
            translit:
              "Ulā'ika ‛alā hudammir rabbihim wa ulā'ika humul mufliḥūn.",
            translation:
              "Those are upon [right] guidance from their Lord, and it is those who are the successful.",
            surah: 2,
            verse: 5,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new QuranDhikrEntryModel({
            arabic: "وَإِلَٰهُكُمْ إِلَٰهٌ وَٰحِدٌ ۖ لَّآ إِلَٰهَ إِلَّا هُوَ ٱلرَّحْمَٰنُ ٱلرَّحِيمُ",
            translit:
              "Wa ilāhukum ilāhuw wāḥidullā ilāha illā huwar raḥmānur raḥīm.",
            translation:
              "And your god is one God. There is no deity [worthy of worship] except Him, the Entirely Merciful, the Especially Merciful.",
            surah: 2,
            verse: 163,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ إِنِّي أُقَدِّمُ إِلَيْكَ بَيْنَ يَدَي كُلِّ نَفَسٍ وَلَمْحَةٍ وَلَحْظَةٍ وَخَطْرَةٍ وَطَرْفَةٍ يَطْرِفُ بِهَا أَهْلُ السَّمَوَاتِ وَالْأَرْضِ",
            translit:
              "Allāhumma innī uqaddimu ilayka bayna yaday kulli nafasin wa lamḥatin wa laḥẓatin wa khaṭratin wa ṭarfatin yaṭrifu bihā ahlus samāwāti wal arḍ",
            translation:
              "O Allah, I present to You, before every breath, glimpse, moment, passing thought and blink with which the inhabitants of the heavens and the earth blink,",
          }),
          new DhikrEntryModel({
            arabic: "وَكُلِّ شَيْءٍ هُوَ فِي عِلْمِكَ كَائِنٌ أَوْ قَدْ كَانَ",
            translit: "Wa kulli shay’in huwa fī ‛ilmika kā’inun aw qad kān",
            translation:
              "and before everything that is, in Your knowledge, existing or has already existed,",
          }),
          new DhikrEntryModel({
            arabic: "أُقَدِّمُ إِلَيْكَ بَيْنَ يَدَي ذَلِكَ كُلِّهِ:",
            translit: "Uqaddimu ilayka bayna yaday dhālika kullih:",
            translation: "I present to You, before all of that:",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new QuranDhikrEntryModel({
            arabic:
              "ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ۚ لَا تَأْخُذُهُۥ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُۥ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ مَن ذَا ٱلَّذِى يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَىْءٍ مِّنْ عِلْمِهِۦٓ إِلَّا بِمَا شَآءَ ۚ وَسِعَ كُرْسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ ۖ وَلَا يَـُٔودُهُۥ حِفْظُهُمَا ۚ وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ",
            translit:
              "Allāhu lā ilāha illā huwal ḥayyul qayyūm; lā ta'khudhuhū sinatuw wa lā nawm; lahū mā fissamāwāti wa mā fil'arḍ, man dhalladhī yashfa‛u ‛indahū illā bi'idhnihī, ya‛lamu mā bayna aydīhim wamā khalfahum, walā yuḥīṭūna bishay'im min ‛ilmihī illā bimā shā', wasi‛a kursiy yuhus samāwāti wal arḍ, wa lā ya'ūduhū ḥifẓuhumā, wa huwal ‛aliyyul ‛aẓīm.",
            translation:
              "Allāh - there is no deity except Him, the Ever-Living, the Self-Sustaining. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is [presently] before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursī extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
            surah: 2,
            verse: 255,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new QuranDhikrEntryModel({
            arabic:
              "لِلَّهِ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ وَإِن تُبْدُوا۟ مَا فِىٓ أَنفُسِكُمْ أَوْ تُخْفُوهُ يُحَاسِبْكُم بِهِ ٱللَّهُ ۖ فَيَغْفِرُ لِمَن يَشَآءُ وَيُعَذِّبُ مَن يَشَآءُ ۗ وَٱللَّهُ عَلَىٰ كُلِّ شَىْءٍ قَدِيرٌ",
            translit:
              "Lillāhi mā fissamāwāti wamā fil arḍ, wa'in tubdū mā fī anfusikum aw tukhfūhu yuḥāsibkum bihillāh; fayaghfiru limayyashā'u wa yu‛adh-dhibu mayyashā, wallāhu ‛alā kulli shay'in qadīr.",
            translation:
              "To Allāh belongs whatever is in the heavens and whatever is in the earth. Whether you show what is within yourselves or conceal it, Allāh will bring you to account for it. Then He will forgive whom He wills and punish whom He wills, and Allāh is over all things competent.",
            surah: 2,
            verse: 284,
          }),
          new QuranDhikrEntryModel({
            arabic:
              "ءَامَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيْهِ مِن رَّبِّهِۦ وَٱلْمُؤْمِنُونَ ۚ كُلٌّ ءَامَنَ بِٱللَّهِ وَمَلَٰٓئِكَتِهِۦ وَكُتُبِهِۦ وَرُسُلِهِۦ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِۦ ۚ وَقَالُوا۟ سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ ٱلْمَصِيرُ",
            translit:
              "Ᾱmanarrasūlu bimā unzila ilayhi mirrabbihī wal mu'minūn, kullun āmana billāhi wa malā'ikatihī wa kutubihī wa rusulih, lā nufarriqu bayna aḥadim mirrusulihī Wa qālū sami‛nā wa aṭa‛nā ghufrānaka rabbanā wa ilaykal maṣīr.",
            translation:
              'The Messenger has believed in what was revealed to him from his Lord, and [so have] the believers. All of them have believed in Allāh and His angels and His books and His messengers, [saying], "We make no distinction between any of His messengers." And they say, "We hear and we obey. [We seek] Your forgiveness, our Lord, and to You is the [final] destination."',
            surah: 2,
            verse: 285,
          }),
          new QuranDhikrEntryModel({
            arabic:
              "لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَآ إِن نَّسِينَآ أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَآ إِصْرًا كَمَا حَمَلْتَهُۥ عَلَى ٱلَّذِينَ مِن قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِۦ ۖ وَٱعْفُ عَنَّا وَٱغْفِرْ لَنَا وَٱرْحَمْنَآ ۚ أَنتَ مَوْلَىٰنَا فَٱنصُرْنَا عَلَى ٱلْقَوْمِ ٱلْكَٰفِرِينَ",
            translit:
              "Lā yukallifullāhu nafsan illā wus‛ahā, lahā mā kasabat wa ‛alayhā maktasabat, rabbanā lā tu'ākhidhnā innasīnā aw akhṭa'nā, rabbanā walā taḥmil ‛alaynā iṣran kamā ḥamaltahū ‛alalladhīna min qablinā, rabbanā walā tuḥammilnā mā lā ṭāqata lanā bihī, wa‛fu ‛annā, waghfir lanā, warḥamnā, anta mawlanā fanṣurnā ‛alal qawmil kāfirīn.",
            translation:
              'Allāh does not charge a soul except [with that within] its capacity. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. "Our Lord, do not impose blame upon us if we have forgotten or erred. Our Lord, and lay not upon us a burden like that which You laid upon those before us. Our Lord, and burden us not with that which we have no ability to bear. And pardon us; and forgive us; and have mercy upon us. You are our protector, so give us victory over the disbelieving people."',
            surah: 2,
            verse: 286,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new QuranDhikrEntryModel({
            arabic:
              "شَهِدَ ٱللَّهُ أَنَّهُۥ لَآ إِلَٰهَ إِلَّا هُوَ وَٱلْمَلَٰٓئِكَةُ وَأُو۟لُوا۟ ٱلْعِلْمِ قَآئِمًۢا بِٱلْقِسْطِ ۚ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْعَزِيزُ ٱلْحَكِيمُ",
            translit:
              "Shahidallāhu annahū lā ilāha illā huwa wal malā'ikatu wa ulul ‛ilmi qā'imam bilqisṭi, lā ilāha illā huwal ‛azīzul ḥakīm.",
            translation:
              "Allāh witnesses that there is no deity except Him, and [so do] the angels and those of knowledge - [that He is] maintaining [creation] in justice. There is no deity except Him, the Exalted in Might, the Wise.",
            surah: 3,
            verse: 18,
          }),
          new DhikrEntryModel({
            arabic: "وَأَنَا أَشْهَدُ بِمَا شَهِدَ اللَّهُ بِهِ وَأُشْهِدُ اللَّهَ عَلَى ذَلِكَ",
            translit: "Wa ana ash-hadu bimā shahidallāhu bihī",
            translation:
              "I bear witness to what Allah has borne witness to, and I call Allah to witness to that,",
          }),
          new DhikrEntryModel({
            arabic: "وَأَسْتَوْدِعُ اللَّهَ هَذِهِ الشَّهَادَةَ",
            translit: "wa ush-hidullāha ‛alā dhālika",
            translation: "and I entrust this testimony to Allah,",
          }),
          new DhikrEntryModel({
            arabic: "وَهِيَ لِي عِنْدَ اللَّهِ وَدِيعَةٌ",
            translit: "wa astawdi‛ullāha hādhihish-shahādah",
            translation: "and it is, with Allah, a trust for me.",
          }),
          new DhikrEntryModel({
            arabic: "أَسْأَلُهُ حِفْظَهَا حَتَّى يَتَوَفَّانِي عَلَيْهَا",
            translit:
              "wa hiya lī ‛indallāhi wadī‛atun as'aluhū ḥifẓahā ḥattā yatawaffānī ‛alayhā",
            translation:
              "I ask Him to preserve it until He takes me in death upon it.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          imran_19(),
          new QuranDhikrEntryModel({
            arabic:
              "قُلِ ٱللَّهُمَّ مَٰلِكَ ٱلْمُلْكِ تُؤْتِى ٱلْمُلْكَ مَن تَشَآءُ وَتَنزِعُ ٱلْمُلْكَ مِمَّن تَشَآءُ وَتُعِزُّ مَن تَشَآءُ وَتُذِلُّ مَن تَشَآءُ ۖ بِيَدِكَ ٱلْخَيْرُ ۖ إِنَّكَ عَلَىٰ كُلِّ شَىْءٍ قَدِيرٌ",
            translit:
              "Qulillāhumma mālikal mulki tu'til mulka man tashā'u wa tanzi‛ul mulka mimman tashā'u wa tu‛izzu man tashā'u wa tudhillu man tashā'u biyadikal khayru, innaka ‛alā kulli shay'in qadīr.",
            translation:
              'Say, "O Allāh, Owner of Sovereignty, You give sovereignty to whom You will and You take sovereignty away from whom You will. You honor whom You will and You humble whom You will. In Your hand is [all] good. Indeed, You are over all things competent.',
            surah: 3,
            verse: 26,
          }),
          new QuranDhikrEntryModel({
            arabic:
              "تُولِجُ ٱلَّيْلَ فِى ٱلنَّهَارِ وَتُولِجُ ٱلنَّهَارَ فِى ٱلَّيْلِ ۖ وَتُخْرِجُ ٱلْحَىَّ مِنَ ٱلْمَيِّتِ وَتُخْرِجُ ٱلْمَيِّتَ مِنَ ٱلْحَىِّ ۖ وَتَرْزُقُ مَن تَشَآءُ بِغَيْرِ حِسَابٍ",
            translit:
              "Tūlijullayla finnahāri wa tūlijun nahāra fillayli, wa tukhrijul ḥayya minal mayyiti wa tukhrijul mayyita minal ḥayyi wa tarzuqu man tashā'u bighayri ḥisāb.",
            translation:
              'You cause the night to enter the day, and You cause the day to enter the night; and You bring the living out of the dead, and You bring the dead out of the living. And You give provision to whom You will without account [i.e., limit or measure]."',
            surah: 3,
            verse: 27,
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "رَحْمَٰنَ الدُّنْيَا وَالْآخِرَةِ وَرَحِيمَهُمَا",
            translit: "Raḥmānad dunyā wal ākhirati wa raḥīmahumā",
            translation:
              "the Most Merciful of this world and the Hereafter, and the Compassionate to both,",
          }),
          new DhikrEntryModel({
            arabic: "تُعْطِي مَنْ تَشَاءُ مِنْهُمَا وَتَمْنَعُ مَنْ تَشَاءُ",
            translit: "Tu‛ṭī man tashā’u minhumā wa tamna‛u man tashā’",
            translation:
              "You give of them to whom You will and You withhold from whom You will.",
          }),
          new DhikrEntryModel({
            arabic: "أَنْتَ تَرْحَمُنَا فَارْحَمْنَا رَحْمَةً تُغْنِينَا بِهَا عَنْ رَحْمَةِ مَنْ سِوَاكَ",
            translit:
              "Anta tarḥamunā farḥamnā raḥmatan tughnīnā bihā ‛an raḥmati man siwāk",
            translation:
              "You have mercy on us, so have mercy on us with a mercy that makes us independent of the mercy of anyone other than You.",
          }),
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ اقْضِ عَنَّا الدَّيْنَ وَاغْنِنَا مِنَ الْفَقْرِ",
            translit: "Allāhummaqḍi ‛annad dayna waghninā minal faqr",
            translation:
              "O Allah, settle our debts for us and enrich us against poverty,",
          }),
          new DhikrEntryModel({
            arabic: "وَتَوَفَّنَا عَلَى طَاعَتِكَ وَالْجِهَادِ فِي سَبِيلِكَ",
            translit: "Wa tawaffanā ‛alā ṭā‛atika wal jihādi fī sabīlik",
            translation:
              "and take us in death while obedient to You and striving in Your way.",
          }),
        ],
      }),
      ikhlas(
        11,
        "Then recite: Sūrah Al-Ikhlāṣ 11 times, and Sūrah Al-Falaq, Sūrah Al-Nās and Sūrah Al-Fātiḥah once each.",
        true,
      ),
      falaq(1, "", true),
      nas(1, "", true),
    ],
  }),
];
