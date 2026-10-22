import { QuranEntryModel, QuranModel } from "@/models/recitation";

export const quran = new QuranModel({
  title: "Ash-Sharh",
  surah: 94,
  entries: [
    new QuranEntryModel({
      arabic: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ",
      translit: "Alam nashraḥ laka ṣadrak.",
      translation: "Did We not expand for you, [O Muḥammad], your breast?",
      verse: 1,
    }),
    new QuranEntryModel({
      arabic: "وَوَضَعْنَا عَنكَ وِزْرَكَ",
      translit: "Wawaḍa‛nā ‛anka wizrak.",
      translation: "And We removed from you your burden",
      verse: 2,
    }),
    new QuranEntryModel({
      arabic: "ٱلَّذِىٓ أَنقَضَ ظَهْرَكَ",
      translit: "Alladhī anqaḍa ẓahrak.",
      translation: "Which had weighed upon your back",
      verse: 3,
    }),
    new QuranEntryModel({
      arabic: "وَرَفَعْنَا لَكَ ذِكْرَكَ",
      translit: "Warafa‛nā laka dhikrak.",
      translation: "And raised high for you your repute.",
      verse: 4,
    }),
    new QuranEntryModel({
      arabic: "فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا",
      translit: "Fa’inna ma‛al ‛usri yusrā.",
      translation: "For indeed, with hardship [will be] ease [i.e., relief].",
      verse: 5,
    }),
    new QuranEntryModel({
      arabic: "إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا",
      translit: "Inna ma‛al ‛usri yusrā.",
      translation: "Indeed, with hardship [will be] ease.",
      verse: 6,
    }),
    new QuranEntryModel({
      arabic: "فَإِذَا فَرَغْتَ فَٱنصَبْ",
      translit: "Fa’idhā faraghta fanṣab.",
      translation:
        "So when you have finished [your duties], then stand up [for worship].",
      verse: 7,
    }),
    new QuranEntryModel({
      arabic: "وَإِلَىٰ رَبِّكَ فَٱرْغَب",
      translit: "Wa’ilā rabbika farghab.",
      translation: "And to your Lord direct [your] longing.",
      verse: 8,
    }),
  ],
});
