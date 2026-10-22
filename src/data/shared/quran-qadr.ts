import { QuranEntryModel, QuranModel } from "@/models/recitation";

export const quran = new QuranModel({
  title: "Al-Qadr",
  surah: 97,
  entries: [
    new QuranEntryModel({
      arabic: "إِنَّآ أَنزَلْنَـٰهُ فِى لَيْلَةِ ٱلْقَدْرِ",
      translit: "Innā anzalnāhu fī laylatil qadr.",
      translation:
        "Indeed, We sent it [i.e., the Qur’ān] down during the Night of Decree.",
      verse: 1,
    }),
    new QuranEntryModel({
      arabic: "وَمَآ أَدْرَىٰكَ مَا لَيْلَةُ ٱلْقَدْرِ",
      translit: "Wamā adrāka mā laylatul qadr.",
      translation: "And what can make you know what is the Night of Decree?",
      verse: 2,
    }),
    new QuranEntryModel({
      arabic: "لَيْلَةُ ٱلْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ",
      translit: "Laylatul qadri khayrun mmin alfi shahr.",
      translation: "The Night of Decree is better than a thousand months.",
      verse: 3,
    }),
    new QuranEntryModel({
      arabic: "تَنَزَّلُ ٱلْمَلَـٰٓئِكَةُ وَٱلرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍ",
      translit:
        "Tanazzalul malā’ikatu warrūḥu fīhā bi’idhni rabbihim mmin kulli amr.",
      translation:
        "The angels and the Spirit [i.e., Gabriel] descend therein by permission of their Lord for every matter.",
      verse: 4,
    }),
    new QuranEntryModel({
      arabic: "سَلَـٰمٌ هِىَ حَتَّىٰ مَطْلَعِ ٱلْفَجْرِ",
      translit: "Salāmun hiya ḥattā maṭla‛il fajr.",
      translation: "Peace it is until the emergence of dawn.",
      verse: 5,
    }),
  ],
});
