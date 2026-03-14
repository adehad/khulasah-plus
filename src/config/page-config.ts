export interface PageConfig {
  path: string;
  title: string;
  contentImportPath: string;
}

export const pageConfigs: PageConfig[] = [
  {
    path: "",
    title: "Home",
    contentImportPath: "_index",
  },
  {
    path: "khulasah",
    title: "Khulasah",
    contentImportPath: "khulasah-index",
  },
  {
    path: "khulasah/introduction",
    title: "Introduction",
    contentImportPath: "khulasah-introduction",
  },
  {
    path: "khulasah/after-fajr",
    title: "After Fajr",
    contentImportPath: "khulasah-after-fajr-index",
  },
  {
    path: "khulasah/after-fajr/wird-al-latif",
    title: "Wird al Latif",
    contentImportPath: "khulasah-after-fajr-wird-latif",
  },
  {
    path: "khulasah/after-fajr/surah-yasin",
    title: "Surah Yasin",
    contentImportPath: "khulasah-after-fajr-surah-yasin",
  },
  {
    path: "khulasah/after-fajr/dua-after-surah-yasin",
    title: "Dua after Surah Yasin",
    contentImportPath: "khulasah-after-fajr-dua-after-surah-yasin",
  },
  {
    path: "khulasah/after-fajr/wird-as-sakran",
    title: "Wird of Imam Abu Bakr as-Sakran",
    contentImportPath: "khulasah-after-fajr-wird-as-sakran",
  },
  {
    path: "khulasah/after-fajr/wird-of-imam-an-nawawi",
    title: "Wird of Imam an-Nawawi",
    contentImportPath: "khulasah-after-fajr-wird-of-imam-an-nawawi",
  },
  {
    path: "khulasah/after-fajr/wird-of-shaykh-abu-bakr-bin-salim",
    title: "Wird of Shaykh Abu Bakr bin Salim",
    contentImportPath: "khulasah-after-fajr-wird-of-shaykh-abu-bakr-bin-salim",
  },
  {
    path: "khulasah/dhuhr/adhkar",
    title: "Dhuhr Adhkar",
    contentImportPath: "khulasah-dhuhr-adhkar",
  },
  {
    path: "khulasah/after-asr",
    title: "After Asr",
    contentImportPath: "khulasah-after-asr-index",
  },
  {
    path: "khulasah/after-asr/hizb-al-bahr",
    title: "Hizb Al Bahr",
    contentImportPath: "khulasah-after-asr-hizb-al-bahr",
  },
  {
    path: "khulasah/after-asr/surah-al-waqiah",
    title: "Surah al-Waqiah",
    contentImportPath: "khulasah-after-asr-surah-al-waqiah",
  },
  {
    path: "khulasah/after-asr/dua-after-surah-al-waqiah",
    title: "Dua after Surah al-Waqiah",
    contentImportPath: "khulasah-after-asr-dua-after-surah-al-waqiah",
  },
  {
    path: "khulasah/maghrib",
    title: "Maghrib (Before or After)",
    contentImportPath: "khulasah-maghrib-index",
  },
  {
    path: "khulasah/maghrib/ratib-al-haddad",
    title: "Ratib Al-Haddad",
    contentImportPath: "khulasah-maghrib-ratib-al-haddad",
  },
  {
    path: "khulasah/maghrib/istighfar",
    title: "Istighfar",
    contentImportPath: "khulasah-maghrib-istighfar",
  },
  {
    path: "khulasah/maghrib/ratib-al-attas",
    title: "Ratib al-Attas",
    contentImportPath: "khulasah-maghrib-ratib-al-attas",
  },
  {
    path: "khulasah/maghrib/aqidah-as-sakran",
    title: "Aqidah of Shaykh Ali ibn Abu Bakr as-Sakran",
    contentImportPath: "khulasah-maghrib-aqidah-as-sakran",
  },
  {
    path: "khulasah/after-isha",
    title: "After Isha",
    contentImportPath: "khulasah-after-isha-index",
  },
  {
    path: "khulasah/after-isha/adhkar",
    title: "Adhkar after Isha",
    contentImportPath: "khulasah-after-isha-adhkar",
  },
  {
    path: "khulasah/after-isha/wird-as-sakran",
    title: "Wird of Imam Abu Bakr as-Sakran",
    contentImportPath: "khulasah-after-isha-wird-as-sakran",
  },
  {
    path: "khulasah/after-isha/wird-of-imam-an-nawawi",
    title: "Wird of Imam an-Nawawi",
    contentImportPath: "khulasah-after-isha-wird-of-imam-an-nawawi",
  },
  {
    path: "khulasah/after-isha/surah-as-sajdah",
    title: "Surah as-Sajdah",
    contentImportPath: "khulasah-after-isha-surah-as-sajdah",
  },
  {
    path: "khulasah/after-isha/surah-al-mulk",
    title: "Surah al-Mulk",
    contentImportPath: "khulasah-after-isha-surah-al-mulk",
  },
  {
    path: "khulasah/after-isha/etiquettes-of-sleep",
    title: "Etiquettes and supplications of sleep",
    contentImportPath: "khulasah-after-isha-etiquettes-of-sleep",
  },
  {
    path: "khulasah/after-isha/dua-after-sajda",
    title: "Dua after sajda tilawa or sajda shukr",
    contentImportPath: "khulasah-after-isha-dua-after-sajda",
  },
  {
    path: "khulasah/duha-ishraq",
    title: "Duha/Ishraq",
    contentImportPath: "khulasah-duha-ishraq-index",
  },
  {
    path: "khulasah/duha-ishraq/the-duha-prayer",
    title: "The Duha prayer",
    contentImportPath: "khulasah-duha-ishraq-the-duha-prayer",
  },
  {
    path: "khulasah/duha-ishraq/dua-of-istikharah",
    title: "Dua of Istikharah",
    contentImportPath: "khulasah-duha-ishraq-dua-of-istikharah",
  },
  {
    path: "khulasah/friday",
    title: "Friday",
    contentImportPath: "khulasah-friday-index",
  },
  {
    path: "khulasah/friday/adhkar-on-friday",
    title: "Adhkar on Friday and its eve",
    contentImportPath: "khulasah-friday-adhkar-on-friday-index",
  },
  {
    path: "khulasah/friday/adhkar-on-friday/opening-supplications",
    title: "Opening supplications",
    contentImportPath: "khulasah-friday-opening-supplications",
  },
  {
    path: "khulasah/friday/adhkar-on-friday/surah-al-kahf",
    title: "Surah al-Kahf",
    contentImportPath: "khulasah-friday-surah-al-kahf",
  },
  {
    path: "khulasah/friday/adhkar-on-friday/surah-ad-dukhan",
    title: "Surah ad-Dukhan",
    contentImportPath: "khulasah-friday-surah-ad-dukhan",
  },
  {
    path: "khulasah/friday/adhkar-on-friday/surah-al-muzzammil",
    title: "Surah al-Muzzammil",
    contentImportPath: "khulasah-friday-surah-al-muzzammil",
  },
  {
    path: "khulasah/friday/adhkar-on-friday/short-surahs",
    title: "Short Surahs",
    contentImportPath: "khulasah-friday-short-surahs",
  },
  {
    path: "khulasah/friday/adhkar-on-friday/qasidah",
    title: "Qasidah",
    contentImportPath: "khulasah-friday-qasidah",
  },
  {
    path: "khulasah/friday/adhkar-on-friday/salawat",
    title: "Salawat",
    contentImportPath: "khulasah-friday-salawat",
  },
  {
    path: "khulasah/friday/adhkar-on-friday/wird-of-shaykh-abu-bakr-bin-salim",
    title: "Wird of Shaykh Abu Bakr bin Salim",
    contentImportPath: "khulasah-friday-wird-of-shaykh-abu-bakr-bin-salim",
  },
  {
    path: "khulasah/last-part-of-night",
    title: "The last part of the night",
    contentImportPath: "khulasah-last-part-of-night-index",
  },
  {
    path: "khulasah/last-part-of-night/adhkar-on-waking-up",
    title: "Adhkar on waking up",
    contentImportPath: "khulasah-last-part-of-night-adhkar-on-waking-up",
  },
  {
    path: "khulasah/last-part-of-night/before-fajr-adhan",
    title: "Adhkar in the last part of the night before the Fajr adhan",
    contentImportPath: "khulasah-last-part-of-night-before-fajr-adhan-index",
  },
  {
    path: "khulasah/last-part-of-night/before-fajr-adhan/names-of-prophet",
    title: "Names of The Prophet (peace and blessings be upon him)",
    contentImportPath: "khulasah-last-part-of-night-names-of-prophet",
  },
  {
    path: "khulasah/last-part-of-night/before-fajr-adhan/poem-of-imam-al-aydarus",
    title: "The Poem of Imam Abu Bakr bin Abdullah al-Aydarus",
    contentImportPath: "khulasah-last-part-of-night-poem-of-imam-al-aydarus",
  },
  {
    path: "khulasah/last-part-of-night/adhkar-before-dawn",
    title: "Adhkar before dawn",
    contentImportPath: "khulasah-last-part-of-night-adhkar-before-dawn",
  },
  {
    path: "khulasah/last-part-of-night/adhkar-before-fajr-prayer",
    title: "Adhkar after the Fajr adhan, but before the Fajr prayer",
    contentImportPath: "khulasah-last-part-of-night-adhkar-before-fajr-prayer",
  },
  {
    path: "khulasah/after-every-prayer",
    title: "Adkhar after the obligatory prayer",
    contentImportPath: "khulasah-after-every-prayer-adkhar",
  },
  {
    path: "khulasah/various-supplications",
    title: "Various supplications",
    contentImportPath: "khulasah-various-supplications-index",
  },
  {
    path: "khulasah/various-supplications/supplication-after-ablution",
    title: "Supplication After Ablution",
    contentImportPath:
      "khulasah-various-supplications-supplication-after-ablution",
  },
  {
    path: "khulasah/various-supplications/supplication-leaving-for-mosque",
    title: "Supplication for Leaving the House for the Mosque",
    contentImportPath:
      "khulasah-various-supplications-supplication-leaving-for-mosque",
  },
  {
    path: "khulasah/various-supplications/dua-after-salat-at-tasbih",
    title: "Dua after Salat at-Tasbih",
    contentImportPath:
      "khulasah-various-supplications-dua-after-salat-at-tasbih",
  },
  {
    path: "khulasah/various-supplications/dua-end-of-gatherings",
    title: "Dua at the end of gatherings and lessons",
    contentImportPath: "khulasah-various-supplications-dua-end-of-gatherings",
  },
  {
    path: "khulasah/various-supplications/intention-for-learning",
    title: "Intention for Learning & Specific times to say Salawat",
    contentImportPath: "khulasah-various-supplications-intention-for-learning",
  },
  {
    path: "khulasah/various-supplications/selected-salawat",
    title: "Selected Salawat",
    contentImportPath: "khulasah-various-supplications-selected-salawat",
  },
  {
    path: "khulasah/various-supplications/dua-for-brethren",
    title: "Dua for your brethren for the sake of Allah",
    contentImportPath: "khulasah-various-supplications-dua-for-brethren",
  },
  {
    path: "khulasah/various-supplications/duas-for-travel",
    title: "Duas for travel",
    contentImportPath: "khulasah-various-supplications-duas-for-travel",
  },
  {
    path: "khulasah/various-supplications/during-hardship",
    title: "During Hardship",
    contentImportPath: "khulasah-various-supplications-during-hardship-index",
  },
  {
    path: "khulasah/various-supplications/supplication-for-all-muslims",
    title: "Supplication For All Muslims",
    contentImportPath:
      "khulasah-various-supplications-supplication-for-all-muslims",
  },
  {
    path: "khulasah/various-supplications/during-hardship/poem",
    title: "Poem of Imam al-Haddad",
    contentImportPath: "khulasah-various-supplications-during-hardship-poem",
  },
  {
    path: "khulasah/various-supplications/qasidah-at-taiyah",
    title: "The Last Part Of Qasidah at-Ta'iyah of Imam al-Haddad",
    contentImportPath: "khulasah-various-supplications-qasidah-at-taiyah",
  },
  {
    path: "khulasah/various-supplications/most-wholesome-drink",
    title: "The Most Wholesome Drink",
    contentImportPath: "khulasah-various-supplications-most-wholesome-drink",
  },
  {
    path: "mawlids",
    title: "Mawlids",
    contentImportPath: "mawlids-index",
  },
  {
    path: "mawlids/shimmering",
    title: "The Shimmering Light",
    contentImportPath: "mawlids-shimmering-light",
  },
  {
    path: "mawlids/the-pure-drink",
    title: "The Pure Drink (Al-Sharab At-Tahur)",
    contentImportPath: "mawlids-the-pure-drink",
  },
  {
    path: "mawlids/simt-ad-durar",
    title: "Simt ad-Durar",
    contentImportPath: "mawlids-simt-ad-durar",
  },
  {
    path: "mawlids/mawlid-dayba-i",
    title: "Mawlid Dayba'i",
    contentImportPath: "mawlids-mawlid-dayba-i",
  },
  {
    path: "mawlids/mawlid-barzanji",
    title: "Mawlid Barzanji",
    contentImportPath: "mawlids-mawlid-barzanji",
  },
  {
    path: "the-burdah",
    title: "The Burdah",
    contentImportPath: "the-burdah",
  },
  {
    path: "the-burdah/qasidah-mudhariyyah",
    title: "Qasidah Mudhariyyah",
    contentImportPath: "the-burdah-qasidah-mudhariyyah",
  },
  {
    path: "the-burdah/qasidah-muhammadiyyah",
    title: "Qasidah Muhammadiyyah",
    contentImportPath: "the-burdah-qasidah-muhammadiyyah",
  },
  {
    path: "blessed-occasions",
    title: "Blessed Occasions",
    contentImportPath: "blessed-occasions-index",
  },
  {
    path: "blessed-occasions/dua-new-year-begins",
    title: "Dua when the new year begins",
    contentImportPath: "blessed-occasions-dua-new-year-begins",
  },
  {
    path: "blessed-occasions/rajab-istighfar",
    title: "The Rajab Istighfar",
    contentImportPath: "blessed-occasions-rajab-istighfar",
  },
  {
    path: "blessed-occasions/dua-nisf-shaban",
    title: "Dua Nisf Shaban",
    contentImportPath: "blessed-occasions-dua-nisf-shaban",
  },
  {
    path: "blessed-occasions/adhkar-first-ten-days-dhul-hijjah",
    title: "Adhkār for the First Ten Days of Dhul-Ḥijjah",
    contentImportPath: "blessed-occasions-adhkar-first-ten-days-dhul-hijjah",
  },
  {
    path: "blessed-occasions/dua-end-of-year",
    title: "Dua at the end of the year",
    contentImportPath: "blessed-occasions-dua-end-of-year",
  },
  {
    path: "dua-khatm-al-quran-al-karim",
    title: "Dua Khatm al-Qur'an al-Karim",
    contentImportPath: "dua-khatm-al-quran-al-karim",
  },
  {
    path: "hadrahs",
    title: "Hadrahs",
    contentImportPath: "hadrahs-index",
  },
  {
    path: "hadrahs/hadrah-badriyyah",
    title: "Hadrah Badriyyah",
    contentImportPath: "hadrah-badriyyah",
  },
  {
    path: "hadrahs/hadrah-ba-sawdan",
    title: "Hadrah Ba Sawdan",
    contentImportPath: "hadrah-ba-sawdan",
  },
  {
    path: "prayers-for-palestine",
    title: "Supplications for Victory in Masjid al-Aqsa and Palestine",
    contentImportPath: "prayers-for-palestine",
  },
  {
    path: "visiting-the-beloved",
    title: "Visiting the Beloved ﷺ",
    contentImportPath: "visiting-the-beloved",
  },
  {
    path: "salawat-rabi-al-awwal-1445",
    title: "Salawat - Rabi al-Awwal 1445",
    contentImportPath: "salawat-rabi-al-awwal-1445",
  },
  {
    path: "salawat-compilations/salawat-of-habib-ahmad-mashhur-al-haddad",
    title: "Salawat of Habib Ahmad Mashhur al-Haddad",
    contentImportPath:
      "salawat-compilations-salawat-of-habib-ahmad-mashhur-al-haddad",
  },
  {
    path: "salawat-compilations",
    title: "Compilations of Salawat",
    contentImportPath: "salawat-compilations-index",
  },
  {
    path: "salawat-compilations/afdal-as-salawat",
    title: "Afdal as-Salawat",
    contentImportPath: "salawat-compilations-afdal-as-salawat",
  },
  {
    path: "salawat-compilations/the-garden-of-love",
    title: "The Garden of Love",
    contentImportPath: "salawat-compilations-the-garden-of-love",
  },
  {
    path: "salawat-compilations/dalail-khayrat",
    title: "Dalail al-Khayrat",
    contentImportPath: "dalail-khayrat-index",
  },
  {
    path: "salawat-compilations/dalail-khayrat/opening-dua",
    title: "Opening Dua",
    contentImportPath: "dalail-khayrat-opening-dua",
  },
  {
    path: "salawat-compilations/dalail-khayrat/dua-of-intention",
    title: "Dua of Intention",
    contentImportPath: "dalail-khayrat-dua-of-intention",
  },
  {
    path: "salawat-compilations/dalail-khayrat/1-monday",
    title: "1 - Monday",
    contentImportPath: "dalail-khayrat-1---Monday",
  },
  {
    path: "salawat-compilations/dalail-khayrat/2-tuesday",
    title: "2 - Tuesday",
    contentImportPath: "dalail-khayrat-2---Tuesday",
  },
  {
    path: "salawat-compilations/dalail-khayrat/3-wednesday",
    title: "3 - Wednesday",
    contentImportPath: "dalail-khayrat-3---Wednesday",
  },
  {
    path: "salawat-compilations/dalail-khayrat/4-thursday",
    title: "4 - Thursday",
    contentImportPath: "dalail-khayrat-4---Thursday",
  },
  {
    path: "salawat-compilations/dalail-khayrat/5-friday",
    title: "5 - Friday",
    contentImportPath: "dalail-khayrat-5---Friday",
  },
  {
    path: "salawat-compilations/dalail-khayrat/6-saturday",
    title: "6 - Saturday",
    contentImportPath: "dalail-khayrat-6---Saturday",
  },
  {
    path: "salawat-compilations/dalail-khayrat/7-sunday",
    title: "7 - Sunday",
    contentImportPath: "dalail-khayrat-7---Sunday",
  },
  {
    path: "salawat-compilations/dalail-khayrat/8-monday",
    title: "8 - Monday",
    contentImportPath: "dalail-khayrat-8---Monday",
  },
  {
    path: "salawat-compilations/dalail-khayrat/allahs-most-beautiful-names",
    title: "Allah's Most Beautiful Names",
    contentImportPath: "dalail-khayrat-allahs-most-beautiful-names",
  },
  {
    path: "salawat-compilations/majma-al-lataif",
    title: "Majma al-Lata'if al-Arshiyyah",
    contentImportPath: "salawat-compilations-majma-al-lataif-index",
  },
  {
    path: "salawat-compilations/majma-al-lataif/1-friday",
    title: "1 - Friday",
    contentImportPath: "salawat-compilations-majma-al-lataif-1---Friday",
  },
  {
    path: "salawat-compilations/majma-al-lataif/2-saturday",
    title: "2 - Saturday",
    contentImportPath: "salawat-compilations-majma-al-lataif-2---Saturday",
  },
  {
    path: "salawat-compilations/majma-al-lataif/3-sunday",
    title: "3 - Sunday",
    contentImportPath: "salawat-compilations-majma-al-lataif-3---Sunday",
  },
  {
    path: "salawat-compilations/majma-al-lataif/4-monday",
    title: "4 - Monday",
    contentImportPath: "salawat-compilations-majma-al-lataif-4---Monday",
  },
  {
    path: "salawat-compilations/majma-al-lataif/5-tuesday",
    title: "5 - Tuesday",
    contentImportPath: "salawat-compilations-majma-al-lataif-5---Tuesday",
  },
  {
    path: "salawat-compilations/majma-al-lataif/6-wednesday",
    title: "6 - Wednesday",
    contentImportPath: "salawat-compilations-majma-al-lataif-6---Wednesday",
  },
  {
    path: "salawat-compilations/majma-al-lataif/7-thursday",
    title: "7 - Thursday",
    contentImportPath: "salawat-compilations-majma-al-lataif-7---Thursday",
  },
  // Add more page configurations here
];
