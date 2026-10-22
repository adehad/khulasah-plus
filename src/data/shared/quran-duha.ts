import { QuranEntryModel, QuranModel } from "@/models/recitation";

export const quran = new QuranModel({
  title: "Ad-Duha",
  surah: 93,
  entries: [
    new QuranEntryModel({
      arabic: "وَٱلضُّحَىٰ",
      translit: "Waḍḍuḥā.",
      translation: "By the morning brightness",
      verse: 1,
    }),
    new QuranEntryModel({
      arabic: "وَٱلَّيْلِ إِذَا سَجَىٰ",
      translit: "Wallayli idhā sajā.",
      translation: "And [by] the night when it covers with darkness,",
      verse: 2,
    }),
    new QuranEntryModel({
      arabic: "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ",
      translit: "Mā wadda‛aka rabbuka wamā qalā.",
      translation:
        "Your Lord has not taken leave of you, [O Muḥammad], nor has He detested [you].",
      verse: 3,
    }),
    new QuranEntryModel({
      arabic: "وَلَلآخِرَةُ خَيْرٌ لَّكَ مِنَ ٱلْأُولَىٰ",
      translit: "Walal’ākhiratu khayrul laka minal ’ūlā.",
      translation: "And the Hereafter is better for you than the first [life].",
      verse: 4,
    }),
    new QuranEntryModel({
      arabic: "وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰٓ",
      translit: "Walasawfa yu‛ṭīka rabbuka fatarḍā.",
      translation:
        "And your Lord is going to give you, and you will be satisfied.",
      verse: 5,
    }),
    new QuranEntryModel({
      arabic: "أَلَمْ يَجِدْكَ يَتِيمًا فَـَٔاوَىٰ",
      translit: "Alam yajidka yatīman fa’āwā.",
      translation: "Did He not find you an orphan and give [you] refuge?",
      verse: 6,
    }),
    new QuranEntryModel({
      arabic: "وَوَجَدَكَ ضَآلًّا فَهَدَىٰ",
      translit: "Wawajadaka ḍāllan fahadā.",
      translation: "And He found you lost and guided [you],",
      verse: 7,
    }),
    new QuranEntryModel({
      arabic: "وَوَجَدَكَ عَآئِلًا فَأَغْنَىٰ",
      translit: "Wawajadaka ‛ā’ilan fa’aghnā.",
      translation: "And He found you poor and made [you] self-sufficient.",
      verse: 8,
    }),
    new QuranEntryModel({
      arabic: "فَأَمَّا ٱلْيَتِيمَ فَلَا تَقْهَرْ",
      translit: "Fa’ammāl yatīma falā taqhar.",
      translation: "So as for the orphan, do not oppress [him].",
      verse: 9,
    }),
    new QuranEntryModel({
      arabic: "وَأَمَّا ٱلسَّآئِلَ فَلَا تَنْهَرْ",
      translit: "Wa’ammās sā’ila falā tanhar.",
      translation: "And as for the petitioner, do not repel [him].",
      verse: 10,
    }),
    new QuranEntryModel({
      arabic: "وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ",
      translit: "Wa’ammā bini‛mati rabbika faḥaddith.",
      translation: "But as for the favor of your Lord, report [it].",
      verse: 11,
    }),
  ],
});
