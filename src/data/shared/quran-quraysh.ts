import { QuranEntryModel, QuranModel } from "@/models/recitation";

export const quran = new QuranModel({
  title: "Quraysh",
  surah: 106,
  entries: [
    new QuranEntryModel({
      arabic: "لِإِيلَٰفِ قُرَيْشٍ",
      translit: "",
      translation: "",
      verse: 1,
    }),
    new QuranEntryModel({
      arabic: "إِۦلَٰفِهِمْ رِحْلَةَ ٱلشِّتَآءِ وَٱلصَّيْفِ",
      translit: "",
      translation: "",
      verse: 2,
    }),
    new QuranEntryModel({
      arabic: "فَلْيَعْبُدُوا۟ رَبَّ هَٰذَا ٱلْبَيْتِ",
      translit: "",
      translation: "",
      verse: 3,
    }),
    new QuranEntryModel({
      arabic: "ٱلَّذِىٓ أَطْعَمَهُم مِّن جُوعٍ وَءَامَنَهُم مِّنْ خَوْفٍۭ",
      translit: "",
      translation: "",
      verse: 4,
    }),
  ],
});
