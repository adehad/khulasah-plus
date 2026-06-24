import { QuranEntryModel, QuranModel } from "@/models/recitation";

export const quran = new QuranModel({
  title: "Al-Kafirun",
  surah: 109,
  entries: [
    new QuranEntryModel({
      arabic: "قُلْ يَٰٓأَيُّهَا ٱلْكَٰفِرُونَ",
      translit: "",
      translation: "",
      verse: 1,
    }),
    new QuranEntryModel({
      arabic: "لَآ أَعْبُدُ مَا تَعْبُدُونَ",
      translit: "",
      translation: "",
      verse: 2,
    }),
    new QuranEntryModel({
      arabic: "وَلَآ أَنتُمْ عَٰبِدُونَ مَآ أَعْبُدُ",
      translit: "",
      translation: "",
      verse: 3,
    }),
    new QuranEntryModel({
      arabic: "وَلَآ أَنَا۠ عَابِدٌ مَّا عَبَدتُّمْ",
      translit: "",
      translation: "",
      verse: 4,
    }),
    new QuranEntryModel({
      arabic: "وَلَآ أَنتُمْ عَٰبِدُونَ مَآ أَعْبُدُ",
      translit: "",
      translation: "",
      verse: 5,
    }),
    new QuranEntryModel({
      arabic: "لَكُمْ دِينُكُمْ وَلِىَ دِينِ",
      translit: "",
      translation: "",
      verse: 6,
    }),
  ],
});
