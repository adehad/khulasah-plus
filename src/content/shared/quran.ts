import { QuranEntryModel, QuranModel } from "@/models/recitation";

export function ikhlas(instruction?: string, basmallah?: boolean) {
  return new QuranModel(
    "Ikhlas",
    112,
    [
      new QuranEntryModel({
        arabic: "قُلۡ هُوَ ٱللَّهُ أَحَدٌ ",
        translit: "Qul HuwaLlāhu aḥad.",
        translation: "Say, ‘He is God the One, ",
        verse: 1,
      }),
      new QuranEntryModel({
        arabic: "ٱللَّهُ ٱلصَّمَدُ ",
        translit: "Allāhus-Ṣamad.",
        translation: "God the eternally Besought.",
        verse: 2,
      }),
      new QuranEntryModel({
        arabic: "لَمۡ يَلِدۡ وَلَمۡ يُولَدۡ ",
        translit: "Lam yalid wa lam yūlad.",
        translation: "He begot no one nor was He begotten.",
        verse: 3,
      }),
      new QuranEntryModel({
        arabic: "وَلَمۡ يَكُن لَّهُۥ كُفُوًا أَحَدُۢ ",
        translit: "Wa lam yakun lahu kufuwan aḥad. (3x)",
        translation: "No one is comparable to Him.’",
        verse: 4,
      }),
    ],
    instruction,
    basmallah,
  );
}
