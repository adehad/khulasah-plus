import { QuranEntryModel, QuranModel } from "@/models/recitation";

export const quran = new QuranModel({
  title: "Quraysh",
  surah: 106,
  entries: [
    new QuranEntryModel({
      arabic: "لِإِيلَٰفِ قُرَيْشٍ",
      translit: "Li’īlāfi Quraysh.",
      translation: "For the accustomed security of the Quraysh -",
      verse: 1,
    }),
    new QuranEntryModel({
      arabic: "إِۦلَٰفِهِمْ رِحْلَةَ ٱلشِّتَآءِ وَٱلصَّيْفِ",
      translit: "Īlāfihim riḥlatash shitā’i waṣ ṣayf.",
      translation:
        "Their accustomed security [in] the caravan of winter and summer -",
      verse: 2,
    }),
    new QuranEntryModel({
      arabic: "فَلْيَعْبُدُوا۟ رَبَّ هَٰذَا ٱلْبَيْتِ",
      translit: "Falya‛budū rabba hādhal bayt.",
      translation: "Let them worship the Lord of this House,",
      verse: 3,
    }),
    new QuranEntryModel({
      arabic: "ٱلَّذِىٓ أَطْعَمَهُم مِّن جُوعٍ وَءَامَنَهُم مِّنْ خَوْفٍۭ",
      translit: "Alladhī aṭ‛amahum min jū‛in wa āmanahum min khawf.",
      translation:
        "Who has fed them, [saving them] from hunger and made them safe, [saving them] from fear.",
      verse: 4,
    }),
  ],
});
