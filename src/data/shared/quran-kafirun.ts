import { QuranEntryModel, QuranModel } from "@/models/recitation";

export const quran = new QuranModel({
  title: "Al-Kafirun",
  surah: 109,
  entries: [
    new QuranEntryModel({
      arabic: "قُلْ يَٰٓأَيُّهَا ٱلْكَٰفِرُونَ",
      translit: "Qul yā ayyuhal kāfirūn.",
      translation: 'Say, "O disbelievers,',
      verse: 1,
    }),
    new QuranEntryModel({
      arabic: "لَآ أَعْبُدُ مَا تَعْبُدُونَ",
      translit: "Lā a‛budu mā ta‛budūn.",
      translation: "I do not worship what you worship.",
      verse: 2,
    }),
    new QuranEntryModel({
      arabic: "وَلَآ أَنتُمْ عَٰبِدُونَ مَآ أَعْبُدُ",
      translit: "Walā antum ‛ābidūna mā a‛budu.",
      translation: "Nor are you worshippers of what I worship.",
      verse: 3,
    }),
    new QuranEntryModel({
      arabic: "وَلَآ أَنَا۠ عَابِدٌ مَّا عَبَدتُّمْ",
      translit: "Walā anā ‛ābidun mā ‛abadttum.",
      translation: "Nor will I be a worshipper of what you worship.",
      verse: 4,
    }),
    new QuranEntryModel({
      arabic: "وَلَآ أَنتُمْ عَٰبِدُونَ مَآ أَعْبُدُ",
      translit: "Walā antum ‛ābidūna mā a‛budu.",
      translation: "Nor will you be worshippers of what I worship.",
      verse: 5,
    }),
    new QuranEntryModel({
      arabic: "لَكُمْ دِينُكُمْ وَلِىَ دِينِ",
      translit: "Lakum dīnukum waliya dīn.",
      translation: 'For you is your religion, and for me is my religion."',
      verse: 6,
    }),
  ],
});
