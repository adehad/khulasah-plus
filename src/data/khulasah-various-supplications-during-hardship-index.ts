import { imran_147 } from "@/data/shared/quran-partial";
import { NavModel } from "@/models/nav";
import {
  DhikrEntryModel,
  DhikrModel,
  only_instruction,
  QasidaEntryModel,
  QasidaModel,
  QasidaVerseModel,
  WirdModel,
} from "@/models/recitation";

export const duringHardshipContent = [
  new WirdModel({
    title: "",
    entries: [
      new DhikrModel({
        entries: [imran_147(10)],
      }),
    ],
  }),
  only_instruction("Then read the following poem:"),
  new NavModel({
    title: "Poem of Imam al-Haddad",
    href: "khulasah/various-supplications/during-hardship/poem",
  }),
  only_instruction("Then read:"),
  new QasidaModel({
    title: "",
    instruction: "Then read (3 times):",
    entries: [
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "يَا عُمْدَتِي يَا عُدَّتِي",
            translit: "Yā 'Umdati yā 'Uddati",
            translation: "O my support, O my provision,",
          }),
          new QasidaEntryModel({
            arabic: "يَا مُنْقِذِي مِنْ شِدَّتِي",
            translit: "Yā munqidhī min shiddatī",
            translation: "O Rescuer from my distress,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَجَّهْتُ لَكَ وِجْهَتِي",
            translit: "Wajjahtu laka wijhati",
            translation: "I have turned my face toward You,",
          }),
          new QasidaEntryModel({
            arabic: "عَجِّلْ بِغَوْثِي يَا عَظِيم",
            translit: "‛Ajjil bighawthī yā ‛aẓīm",
            translation: "hasten my relief, O Magnificent One.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَسَخِّرِ الْأَسبَابَا",
            translit: "Wa sakh-khiril asbābā",
            translation: "And subjugate the means,",
          }),
          new QasidaEntryModel({
            arabic: "وَذَلِّلِ الصِّعَابَا",
            translit: "wa dhalliliṣ ṣi‛ābā",
            translation: "and make the difficulties easy.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَافْتَحْ لَنَا الْأَبْوَابَا",
            translit: "Waftaḥ lanal abwābā",
            translation: "And open for us the doors",
          }),
          new QasidaEntryModel({
            arabic: "بِالنَّصْرِ مِنْكَ يَا كَرِيم",
            translit: "bin naṣri minka yā karīm",
            translation: "with victory from You, O Generous One.",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَرُدَّ كَيْدَ الْكَائِدِ",
            translit: "Wa rudda kaidal kā-idi",
            translation: "And repel the scheme of the schemer",
          }),
          new QasidaEntryModel({
            arabic: "وَكُلَّ طَاغٍ مَارِدِ",
            translit: "wa kulla ṭāghin mārid",
            translation: "and of every rebellious tyrant,",
          }),
        ],
      }),
      new QasidaVerseModel({
        chorus: false,
        entries: [
          new QasidaEntryModel({
            arabic: "وَحَاسِدٍ مُعَانِدِ",
            translit: "wa ḥāsidin mu'ānidi",
            translation: "and every envious, obstinate one,",
          }),
          new QasidaEntryModel({
            arabic: "بِحَقِّ سِرِّ (طسٓمٓ)",
            translit: "Biḥaqqi sirri Ṭā Sīn Mīm",
            translation: "by the right of the secret of Ta Sin Mim.",
          }),
        ],
      }),
    ],
  }),
  new WirdModel({
    title: "",
    entries: [
      new DhikrModel({
        repeat: 3,
        entries: [
          new DhikrEntryModel({
            arabic: "يَا لَطِيفًا بِخَلْقِه",
            translit: "Yā laṭīfan bikhalqih,",
            translation: "O You who are Gentle with Your creation,",
          }),
          new DhikrEntryModel({
            arabic: "يَا عَلِيمًا بِخَلْقِه",
            translit: "yā ‛alīman bikhalqih,",
            translation: "O You who know Your creation,",
          }),
          new DhikrEntryModel({
            arabic: "يَا خَبِيرًا بِخَلْقِه",
            translit: "yā khabīran bikhalqih,",
            translation: "O You who are Aware of Your creation,",
          }),
          new DhikrEntryModel({
            arabic: "اُلْطُـفْ بِنَا يَا لَطِيفُ يَا عَلِيمُ يَا خَبِير",
            translit: "ulṭuf binā yā Laṭīfu yā ‛Alīmu yā Khabīr.",
            translation:
              "be gentle with us, O Gentle, O All-Knowing, O All-Aware.",
          }),
          new DhikrEntryModel({
            arabic: "يَا ٱللَّه",
            translit: "Yā Allāh",
            translation: "O Allāh",
            repeat: 7,
          }),
        ],
      }),
      new DhikrModel({
        repeat: 3,
        entries: [
          new DhikrEntryModel({
            arabic: "يَا لَطِيفًا لَمْ يَزَلْ",
            translit: "Yā laṭīfan lam yazal,",
            translation: "O Subtle One, who has never ceased to be,",
          }),
          new DhikrEntryModel({
            arabic: "اُلْطُفْ بِنَا فِيمَا نَزَلْ",
            translit: "ulṭuf binā fīmā nazal,",
            translation: "be gentle with us in what has befallen us,",
          }),
          new DhikrEntryModel({
            arabic: "إِنَّكَ لَطِيفٌ لَمْ تَزَلْ",
            translit: "innaka laṭīfun lam tazal,",
            translation:
              "for You are the Subtle One, who has never ceased to be;",
          }),
          new DhikrEntryModel({
            arabic: "اُلْطُف بِنَا وَالْمُسْلِمِين",
            translit: "ulṭuf binā wal muslimīn.",
            translation: "be gentle with us and with the Muslims.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا أَرْحَمَ ٱلرَّٰحِمِينَ",
            translit: "Yā arḥamar rāḥimīn",
            translation: "O Most Merciful of the merciful",
            repeat: 3,
          }),
          new DhikrEntryModel({
            arabic: "فَرِّجْ عَلَى الْمُسْلِمِين",
            translit: "farrij ‛alal muslimīn.",
            translation: "grant relief to the Muslims.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "يَا لَطِيفُ",
            translit: "Yā Laṭīf",
            translation: "O Gentle One",
            repeat: 129,
          }),
        ],
      }),
      new DhikrModel({
        repeat: 4,
        entries: [
          new DhikrEntryModel({
            arabic: "يَا لَطِيفُ الْطُفْ بِنَا فِي تَيْسِيرِ كُلِّ عَسِير",
            translit: "Yā Laṭīfu-lṭuf binā fī taysīri kulli ‛asīr,",
            translation:
              "O Gentle One, be gentle with us in easing every difficulty,",
          }),
          new DhikrEntryModel({
            arabic: "فَتَيْسِيرُ الْعَسِيرِ عَلَيْكَ يَسِير",
            translit: "fa taysīrul ‛asīri ‛alayka yasīr,",
            translation: "for easing what is difficult is easy for You;",
          }),
          new DhikrEntryModel({
            arabic: "نَسْأَلُكَ اللُّطْفَ وَالْعَافِيَةَ فِي الدِّينِ وَالدُّنْيَا وَالْآخِرَة",
            translit:
              "nas’alukal luṭfa wal ‛āfiyata fid dīni wad dunyā wal ākhirah.",
            translation:
              "we ask You for gentleness and well-being in religion, this world and the Hereafter.",
          }),
        ],
      }),
    ],
  }),
  new NavModel({
    title: "Supplication For All Muslims",
    href: "khulasah/various-supplications/supplication-for-all-muslims",
  }),
];

export default duringHardshipContent;
