import { QuranEntryModel, QuranModel } from "@/models/recitation";

export function ikhlas(
  repeat: number,
  instruction: string = "",
  basmallah: boolean = true,
) {
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
    repeat,
  );
}

export function falaq(
  repeat: number,
  instruction: string = "",
  basmallah: boolean = true,
) {
  return new QuranModel(
    "Falaq",
    113,
    [
      new QuranEntryModel({
        arabic: "قُلۡ أَعُوذُ بِرَبِّ ٱلۡفَلَقِ",
        translit: "Qul aʿūdhu bi rabb il-falaq.",
        translation: "Say, ‘I take refuge with the Lord of daybreak",
        verse: 1,
      }),
      new QuranEntryModel({
        arabic: "مِن شَرِّ مَا خَلَقَ",
        translit: " Min sharri mā khalaq.",
        translation: "against the harm in what He has created,",
        verse: 2,
      }),
      new QuranEntryModel({
        arabic: "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
        translit: "Wa min sharri ghāsiqin idhā waqab.",
        translation: "the harm in the night when darkness gathers,",
        verse: 3,
      }),
      new QuranEntryModel({
        arabic: "وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِي ٱلۡعُقَدِ",
        translit: "Wa min sharri in-naffathāti fil ʿuqad.",
        translation: "the harm in witches when they blow on knots,",
        verse: 4,
      }),
      new QuranEntryModel({
        arabic: "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
        translit: "Wa min sharri ḥāsidin idhā ḥasad.",
        translation: "the harm in the envier when he envies.’",
        verse: 5,
      }),
    ],
    instruction,
    basmallah,
    repeat,
  );
}

export function nas(
  repeat: number,
  instruction: string = "",
  basmallah: boolean = true,
) {
  return new QuranModel(
    "Nas",
    114,
    [
      new QuranEntryModel({
        arabic: "قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ ",
        translit: "Qul aʿūdhu bi rabb in-nās.",
        translation: "Say, ‘I seek refuge with the Lord of people,",
        verse: 1,
      }),
      new QuranEntryModel({
        arabic: "مَلِكِ ٱلنَّاسِ",
        translit: "Malik in-nās.",
        translation: " the King of people,",
        verse: 2,
      }),
      new QuranEntryModel({
        arabic: "إِلَٰهِ ٱلنَّاسِ",
        translit: "Ilāh in-nās.",
        translation: "the God of people,",
        verse: 3,
      }),
      new QuranEntryModel({
        arabic: "مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ",
        translit: " Min sharril waswāsil khannās.",
        translation: "against the harm of the slinking whisperer",
        verse: 4,
      }),
      new QuranEntryModel({
        arabic: "ٱلَّذِي يُوَسۡوِسُ فِي صُدُورِ ٱلنَّاسِ",
        translit: "Al-ladhī yuwaswisu fī ṣudūr in-nās.",
        translation: "—who whispers into the hearts of people—",
        verse: 5,
      }),
      new QuranEntryModel({
        arabic: "مِنَ ٱلۡجِنَّةِ وَٱلنَّاسِ",
        translit: "Min aljinnati wan-nās.",
        translation: "whether they be jinn or people.’",
        verse: 6,
      }),
    ],
    instruction,
    basmallah,
    repeat,
  );
}
