import { DhikrEntryModel, DhikrModel, WirdModel } from "@/models/recitation";

export default [
  new WirdModel({
    title: "Dua after Salat at-Tasbih",
    entries: [
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ تَوْفِيقَ أَهْلِ الْهُدَى",
            translit: "Allāhumma innī as’aluka tawfīqa ahlil hudā",
            translation:
              "O Allāh! Verily, I seek (from) You the success of the guided ones",
          }),
          new DhikrEntryModel({
            arabic: "وَأَعْمَالَ أَهْلِ الْيَقِينِ",
            translit: "wa a‛māla ahlil yaqīni",
            translation: "the actions of the people of certainty",
          }),
          new DhikrEntryModel({
            arabic: "وَمُنَاصَحَةَ أَهْلِ التَّوْبَةِ",
            translit: "wa munāṣaḥata ahlit tawbati",
            translation: "and the sincerity of the people of repentance",
          }),
          new DhikrEntryModel({
            arabic: "وَعَزْمَ أَهْلِ الصَّبْرِ",
            translit: "wa ‛azma ahliṣṣabri",
            translation: "the resolution of those who persevere",
          }),
          new DhikrEntryModel({
            arabic: "وَجِدَّ أَهْلِ الْخَشْيَةِ",
            translit: "wa jidda ahlil  khashyati",
            translation: "the earnestness of those who fear Allāh",
          }),
          new DhikrEntryModel({
            arabic: "وَطَلَبَ أَهْلِ الرَّغْبَةِ",
            translit: "wa ṭalaba ahlir raghbati",
            translation: "the request of the people of earnestness",
          }),
          new DhikrEntryModel({
            arabic: "وَتَعَبُّدَ أَهْلِ الْوَرَعِ",
            translit: "wa ta‛abbuda ahlil wara‛i",
            translation: "the worship of those of scrupulousness",
          }),
          new DhikrEntryModel({
            arabic: "وَعِرْفَانَ أَهْلِ الْعِلْمِ",
            translit: "wa ‛irfāna ahlil ‛ilmi",
            translation: "the gnosis of the people of knowledge",
          }),
          new DhikrEntryModel({
            arabic: "حَتَّى أَخَافَكَ",
            translit: "ḥattā akhāfaka.",
            translation: "so that I may fear You.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مَخَافَةً تَحْجُزُنِي عَنْ مَعَاصِيكَ",
            translit:
              "Allāhumma innī as’aluka makhāfatan taḥjuzunī ‛an ma‛āṣīka",
            translation:
              "O Allāh! Instill in me fear that will be a barrier between me and disobedience to You;",
          }),
          new DhikrEntryModel({
            arabic: "حَتَّى أَعْمَلَ بِطَاعَتِكَ عَمَلًا أَسْتَحِقُّ بِهِ رِضَاكَ",
            translit: "ḥattā a‛mala biṭā‛atika  ‛amalan astaḥiqqu bihī riḍāka",
            translation:
              "so that I may act according to Your obedience, such that I become deserving of Your good pleasure;",
          }),
          new DhikrEntryModel({
            arabic: "وَحَتَّى أُنَاصِحَكَ بِالتَّوْبَةِ خَوْفًا مِنْكَ",
            translit: "wa ḥattā unāṣiḥaka bittawbati khawfan minka",
            translation:
              "and that I may be sincere in my repentance to You out of fear of You;",
          }),
          new DhikrEntryModel({
            arabic: "وَحَتَّى أُخْلِصَ لَكَ النَّصِيحَةَ حَيَاءً مِنْكَ",
            translit: "wa ḥattā ukhliṣa lakan naṣīḥata ḥubban laka",
            translation:
              "and that I may devote sincere counsel to You out of modesty before You;",
          }),
          new DhikrEntryModel({
            arabic: "وَحَتَّى أَتَوَكَّلَ عَلَيْكَ فِي الْأُمُورِ حُسنَ ظَنٍّ بِكَ",
            translit:
              "wa  ḥattā atawakkala ‛alayka fil umūri ḥusna ẓannin bika",
            translation:
              "and that I may trust You in all affairs with a good opinion of You.",
          }),
          new DhikrEntryModel({
            arabic:
              "سُبْحَانَ خَالِقِ النُّورِ. وَصَلَّى اللَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَآلِهِ وَصَحْبِهِ وَسَلَّمَ",
            translit: "subḥāna Khāliqin nūr.",
            translation: "Holy be You, the Creator of light.",
          }),
        ],
      }),
    ],
  }),
];
