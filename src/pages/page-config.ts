export interface PageConfig {
  path: string;
  title: string;
  contentImportPath: string;
}

export const pageConfigs: PageConfig[] = [
  {
    path: "/home",
    title: "Home",
    contentImportPath: "hizb-al-bahr-content",
  },
  {
    path: "/hizb",
    title: "Home Al Bahr",
    contentImportPath: "hizb-al-bahr-content",
  },
  // Add more page configurations here
];
