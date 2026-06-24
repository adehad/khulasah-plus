import { QuranEntryModel, QuranModel } from "@/models/recitation";

export const quran = new QuranModel({
  title: "An-Nasr",
  surah: 110,
  entries: [
    new QuranEntryModel({
      arabic: "إِذَا جَآءَ نَصْرُ ٱللَّهِ وَٱلْفَتْحُ",
      translit: "",
      translation: "",
      verse: 1,
    }),
    new QuranEntryModel({
      arabic: "وَرَأَيْتَ ٱلنَّاسَ يَدْخُلُونَ فِى دِينِ ٱللَّهِ أَفْوَاجًا",
      translit: "",
      translation: "",
      verse: 2,
    }),
    new QuranEntryModel({
      arabic: "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَٱسْتَغْفِرْهُ ۚ إِنَّهُۥ كَانَ تَوَّابًۢا",
      translit: "",
      translation: "",
      verse: 3,
    }),
  ],
});
