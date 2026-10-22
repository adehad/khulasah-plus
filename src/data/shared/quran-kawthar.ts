import { QuranEntryModel, QuranModel } from "@/models/recitation";

export const quran = new QuranModel({
  title: "Al-Kawthar",
  surah: 108,
  entries: [
    new QuranEntryModel({
      arabic: "إِنَّآ أَعْطَيْنَـٰكَ ٱلْكَوْثَرَ",
      translit: "Innā a‛ṭaynākal kawthar.",
      translation: "Indeed, We have granted you, [O Muḥammad], al-Kawthar.",
      verse: 1,
    }),
    new QuranEntryModel({
      arabic: "فَصَلِّ لِرَبِّكَ وَٱنْحَرْ",
      translit: "Faṣalli lirabbika wanḥar.",
      translation: "So pray to your Lord and offer sacrifice [to Him alone].",
      verse: 2,
    }),
    new QuranEntryModel({
      arabic: "إِنَّ شَانِئَكَ هُوَ ٱلْأَبْتَرُ",
      translit: "Inna shāni’aka huwal abtar.",
      translation: "Indeed, your enemy is the one cut off.",
      verse: 3,
    }),
  ],
});
