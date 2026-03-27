import { QuranEntryModel, QuranModel } from "@/models/recitation";

export const quran = new QuranModel({
  title: "Al-Kawthar",
  surah: 108,
  entries: [
    new QuranEntryModel({
      arabic: "إِنَّآ أَعْطَيْنَـٰكَ ٱلْكَوْثَرَ",
      translit: "",
      translation: "",
      verse: 1,
    }),
    new QuranEntryModel({
      arabic: "فَصَلِّ لِرَبِّكَ وَٱنْحَرْ",
      translit: "",
      translation: "",
      verse: 2,
    }),
    new QuranEntryModel({
      arabic: "إِنَّ شَانِئَكَ هُوَ ٱلْأَبْتَرُ",
      translit: "",
      translation: "",
      verse: 3,
    }),
  ],
});
