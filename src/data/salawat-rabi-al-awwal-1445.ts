import { DhikrEntryModel, DhikrModel, WirdModel } from "@/models/recitation";

export default [
  new WirdModel({
    title: "Salawat - Rabi al-Awwal 1445",
    instruction: `
      Habib Umar bin Hafiz (may Allah protect him) recommends reciting this
      salawat 3000 times in the month of Rabi al-Awwal, if possible.
    `,
    entries: [
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ يَا خَيْرَ النَّاصِرِينَ",
            translit: "Allāhumma yā khayran nāṣirīn",
            translation: "O Allah, the Best of helpers,",
          }),
          new DhikrEntryModel({
            arabic:
              "نَسْأَلُكَ بِكَ أَنْ تُصَلِّيَ وَتُسَلِّمَ عَلَى عَبْدِكَ وَحَبِيبِكَ سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ",
            translit:
              "Nas’aluka bika an tuṣalliya wa tusallima ‛alā ‛abdika wa ḥabībika sayyidinā Muḥammadin wa ‛alā ālihī wa ṣaḥbih",
            translation:
              "we ask You to bestow prayers and peace upon Your servant and beloved, our Master Muhammad, and upon his Family and Companions.",
          }),
          new DhikrEntryModel({
            arabic: "صَلَاةً تَنْصُرُنَا بِهَا بِمَا نَصَرْتَ بِهِ الْمُرْسَلِينَ",
            translit: "Ṣalātan tanṣurunā bihā bimā naṣarta bihil mursalīn",
            translation:
              "By these prayers, we ask You to grant us victory in the same way that You granted victory to the Messengers,",
          }),
          new DhikrEntryModel({
            arabic: "وَتَحْفَظُنَا بِهَا بِمَا حَفِظْتَ بِهِ الذِّكْرَ",
            translit: "Wa taḥfaẓunā bihā bimā ḥafiẓta bihidh dhikr",
            translation:
              "and by them we ask You to protect us as You have preserved the Reminder (the Qur'an).",
          }),
          new DhikrEntryModel({
            arabic: "يَا قَوِيُّ يَا مَتِينُ",
            translit: "Yā qawiyyu yā matīn",
            translation: "You are the Most Powerful, the Most Firm.",
          }),
        ],
      }),
    ],
  }),
];
