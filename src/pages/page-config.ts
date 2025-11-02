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
    path: "home",
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
    path: "khulasah/after-asr",
    title: "After Asr",
    contentImportPath: "khulasah-after-asr-index",
  },
  {
    path: "khulasah/after-asr/hizb-al-bahr",
    title: "Hizb Al Bahr",
    contentImportPath: "khulasah-after-asr-hizb-al-bahr",
  },
  // Add more page configurations here
];
