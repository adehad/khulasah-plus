import { QuranEntryModel, QuranModel } from "@/models/recitation";

export const quran = new QuranModel({
  title: "Al-Qadr",
  surah: 97,
  entries: [
    new QuranEntryModel({
      arabic: "إِنَّآ أَنزَلْنَـٰهُ فِى لَيْلَةِ ٱلْقَدْرِ",
      translit: "",
      translation: "",
      verse: 1,
    }),
    new QuranEntryModel({
      arabic: "وَمَآ أَدْرَىٰكَ مَا لَيْلَةُ ٱلْقَدْرِ",
      translit: "",
      translation: "",
      verse: 2,
    }),
    new QuranEntryModel({
      arabic: "لَيْلَةُ ٱلْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ",
      translit: "",
      translation: "",
      verse: 3,
    }),
    new QuranEntryModel({
      arabic: "تَنَزَّلُ ٱلْمَلَـٰٓئِكَةُ وَٱلرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍ",
      translit: "",
      translation: "",
      verse: 4,
    }),
    new QuranEntryModel({
      arabic: "سَلَـٰمٌ هِىَ حَتَّىٰ مَطْلَعِ ٱلْفَجْرِ",
      translit: "",
      translation: "",
      verse: 5,
    }),
  ],
});
