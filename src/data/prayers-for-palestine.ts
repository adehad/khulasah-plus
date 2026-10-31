import { baqarah_250, ghafir_44, imran_147 } from "@/data/shared/quran-partial";
import { DhikrEntryModel, DhikrModel, WirdModel } from "@/models/recitation";

export default [
  new WirdModel({
    title: "Supplications for Victory in Masjid al-Aqsa and Palestine",
    instruction: `
      Habib Umar bin Hafiz (may Allah protect him) recommends reciting this litany
      every day with the intention of bringing tranquility, protection and victory
      for Masjid al-Aqsa and Palestine:
    `,
    entries: [
      new DhikrModel({
        repeat: 450,
        entries: [
          new DhikrEntryModel({
            arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيل",
            translit: "Ḥasbunallāhu wa ni‛mal-wakīl",
            translation:
              "Allah is sufficient for us, and He is the best disposer of affairs.",
          }),
        ],
      }),
      new DhikrModel({
        repeat: 100,
        entries: [ghafir_44()],
      }),
      new DhikrModel({
        repeat: 70,
        entries: [imran_147()],
      }),
      new DhikrModel({
        repeat: 70,
        entries: [baqarah_250()],
      }),
      new DhikrModel({
        repeat: 10,
        entries: [
          new DhikrEntryModel({
            arabic:
              "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ الَّذِي أَسْرَيْتَ بِهِ مِنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى",
            translit:
              "Allāhumma ṣalli wa sallim ‛alā sayyidinā Muḥammadinil-ladhī asrayta bihī minal-masjidil-ḥarāmi ilal-masjidil-aqṣā",
            translation:
              "O Allah, bestow blessings and peace upon our master Muhammad, whom You carried by night from the Sacred Mosque to the Farthest Mosque,",
          }),
          new DhikrEntryModel({
            arabic: "وَأَعْرَجْتَ بِهِ إِلَى السَّمَاوَاتِ الْعُلَا",
            translit: "wa a‛rajta bihī ilas-samāwātil-‛ulā",
            translation: "and whom You raised to the highest heavens,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَلَى آلِهِ وَصَحْبِهِ خَيْرِ الْمَلَا",
            translit: "wa ‛alā ālihī wa ṣaḥbihī khayril-malā",
            translation:
              "and upon his Family and Companions, the best of people,",
          }),
          new DhikrEntryModel({
            arabic: "وَعَلَى مَنْ تَبِعَهُمْ بِإِحْسَانٍ وَأَيْقِظْ قُلُوبَ الْمُسْلِمِينَ",
            translit:
              "wa ‛alā man tabi‛ahum bi-iḥsān, wa ayqiẓ qulūbal-muslimīn",
            translation:
              "and upon those who followed them in excellence. Awaken the hearts of the Muslims,",
          }),
          new DhikrEntryModel({
            arabic: "وَرُدَّ كَيْدَ أَعْدَائِكَ مِنَ الْيَهُودِ الْمُعْتَدِينَ عَلَى بَيْتِ الْمَقْدِس",
            translit:
              "wa rudda kayda a‛dā’ika minal-yahūdil-mu‛tadīna ‛alā baytil-maqdis",
            translation:
              "and turn back the plotting of Your enemies among the Jews who are transgressing against Bayt al-Maqdis,",
          }),
          new DhikrEntryModel({
            arabic:
              "وَكُلِّ مَنْ وَالَاهُمْ مِنْ أَهْلِ الشَّرِّ فِي الْأَرْضِ وَادْفَعْ شَرَّهُمْ وَضُرَّهُمْ عَنَّا وَعَنْ أَهْلِ لَا إِلَهَ إِلَّا اللَّه",
            translit:
              "wa kulli man wālāhum min ahlish-sharri fil-arḍi wadfa‛ sharrahum wa ḍurrahum ‛annā wa ‛an ahli lā ilāha illallāh",
            translation:
              "and of everyone on earth who allies with them from among the people of evil. Repel their evil and their harm from us and from the people of There is no god but Allah,",
          }),
          new DhikrEntryModel({
            arabic: "وَأَلْهِمْنَا رُشْدَنَا فِي كُلِّ حَرَكَةٍ وَسُكُونٍ يَا أَرْحَمَ الرَّاحِمِين",
            translit:
              "wa alhimnā rushdanā fī kulli ḥarakatin wa sukūn, yā arḥamar-rāḥimīn",
            translation:
              "and inspire us with right guidance in every movement and stillness, O Most Merciful of those who show mercy.",
          }),
        ],
      }),
    ],
  }),
];
