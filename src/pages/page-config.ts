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
    path: "hizb",
    title: "Hizb Al Bahr",
    contentImportPath: "hizb-al-bahr-content",
  },
  // Add more page configurations here
];
