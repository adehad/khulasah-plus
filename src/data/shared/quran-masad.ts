import { QuranEntryModel, QuranModel } from "@/models/recitation";

export const quran = new QuranModel({
  title: "Al-Masad",
  surah: 111,
  entries: [
    new QuranEntryModel({
      arabic: "تَبَّتْ يَدَآ أَبِى لَهَبٍ وَتَبَّ",
      translit: "",
      translation: "",
      verse: 1,
    }),
    new QuranEntryModel({
      arabic: "مَآ أَغْنَىٰ عَنْهُ مَالُهُۥ وَمَا كَسَبَ",
      translit: "",
      translation: "",
      verse: 2,
    }),
    new QuranEntryModel({
      arabic: "سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ",
      translit: "",
      translation: "",
      verse: 3,
    }),
    new QuranEntryModel({
      arabic: "وَٱمْرَأَتُهُۥ حَمَّالَةَ ٱلْحَطَبِ",
      translit: "",
      translation: "",
      verse: 4,
    }),
    new QuranEntryModel({
      arabic: "فِى جِيدِهَا حَبْلٌ مِّن مَّسَدٍۭ",
      translit: "",
      translation: "",
      verse: 5,
    }),
  ],
});
