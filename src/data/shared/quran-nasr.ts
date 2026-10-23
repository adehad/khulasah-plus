import { QuranEntryModel, QuranModel } from "@/models/recitation";

export const quran = new QuranModel({
  title: "An-Nasr",
  surah: 110,
  entries: [
    new QuranEntryModel({
      arabic: "إِذَا جَآءَ نَصۡرُ ٱللَّهِ وَٱلۡفَتۡحُ",
      translit: "Idhā jā’a naṣru Allāhi walfatḥ.",
      translation: "When the victory of Allāh has come and the conquest,",
      verse: 1,
    }),
    new QuranEntryModel({
      arabic: "وَرَأَيۡتَ ٱلنَّاسَ يَدۡخُلُونَ فِي دِينِ ٱللَّهِ أَفۡوَاجٗا",
      translit: "Wara’aytan nāsa yadkhulūna fī dīni Allāhi afwājā.",
      translation:
        "And you see the people entering into the religion of Allāh in multitudes,",
      verse: 2,
    }),
    new QuranEntryModel({
      arabic: "فَسَبِّحۡ بِحَمۡدِ رَبِّكَ وَٱسۡتَغۡفِرۡهُۚ إِنَّهُۥ كَانَ تَوَّابَۢا",
      translit: "Fasabbiḥ biḥamdi rabbika wastaghfirhu innahu kāna tawwābā.",
      translation:
        "Then exalt [Him] with praise of your Lord and ask forgiveness of Him. Indeed, He is ever Accepting of Repentance.",
      verse: 3,
    }),
  ],
});
