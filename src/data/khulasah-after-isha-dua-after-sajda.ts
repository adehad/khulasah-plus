import { DhikrEntryModel, DhikrModel, WirdModel } from "@/models/recitation";

export default [
  new WirdModel({
    title: "Dua after sajda tilawa or sajda shukr",
    entries: [
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ لَكَ سَجَدتُ",
            translit: "Allāhumma laka sajadtu",
            translation: "O Allah",
          }),
          new DhikrEntryModel({
            arabic: "وَبِكَ آمَنتُ",
            translit: "Wa bika āmantu",
            translation: "to You I have prostrated. In You",
          }),
          new DhikrEntryModel({
            arabic: "وَلَكَ أَسْلَمتُ",
            translit: "Wa laka aslamtu",
            translation: "I have believed. To You",
          }),
          new DhikrEntryModel({
            arabic: "سَجَدَ وَجْهِيَ لِلَّذِي خَلَقَهُ وَصَوَّرَهُ وَشَقَّ سَمعَهُ وَبَصَرَهُ بِحَوْلِهِ وَقُوَّتِهِ",
            translit:
              "Sajada wajhiya lilladhī khalaqahū wa ṣawwarahū wa shaqqa sam‛ahū wa baṣarahū biḥawlihī wa quwwatih",
            translation:
              "I have submitted. My face fell prostrate before He who created it and brought forth its faculties of hearing and seeing by His might and power. Blessed is Allah",
          }),
          new DhikrEntryModel({
            arabic: "فَتَبَارَكَ اللَّهُ أَحسَنُ الْخَالِقِينَ",
            translit: "Fatabārakallāhu aḥsanul khāliqīn",
            translation: "the best of creators.",
          }),
        ],
      }),
      new DhikrModel({
        entries: [
          new DhikrEntryModel({
            arabic: "اللَّهُمَّ اكْتُبْ لِي بِهَا عِنْدَكَ أَجْرًا",
            translit: "Allāhummaktub lī bihā ‛indaka ajra",
            translation:
              "O Allah, record for me a reward for this (prostration),",
          }),
          new DhikrEntryModel({
            arabic: "وَضَع عَنِّي بِهَا وِزْرًا",
            translit: "Wa ḍa‛ ‛annī bihā wizra",
            translation: "and remove from me a sin.",
          }),
          new DhikrEntryModel({
            arabic: "وَاجْعَلْهَا لِي عِنْدَكَ ذُخْرًا",
            translit: "Waj‛alhā lī ‛indaka dhukhra",
            translation: "Save it for me",
          }),
          new DhikrEntryModel({
            arabic: "وَاقْبَلْهَا مِنِّي كَمَا قَبِلتَهَا مِنْ عَبدِكَ دَاوُد",
            translit: "Waqbalhā minnī kamā qabiltahā min ‛abdika Dāwūd",
            translation:
              "and accept it from me just as You had accepted it from Your servant Dawud.",
          }),
        ],
      }),
    ],
  }),
];
