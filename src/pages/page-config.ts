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
    path: "khulasah/maghrib",
    title: "Maghrib (Before or After)",
    contentImportPath: "khulasah-maghrib-index",
  },
  {
    path: "khulasah/maghrib/ratib-al-haddad",
    title: "Ratib Al-Haddad",
    contentImportPath: "khulasah-maghrib-ratib-al-haddad",
  },
  // Add more page configurations here
];
