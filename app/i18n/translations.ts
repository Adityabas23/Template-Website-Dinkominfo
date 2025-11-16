export const translations = {
  id: {
    home: "Beranda",
    profile: "Profil",
    ppid: "PPID",
    publicMenu: "Menu Publik",
    employee: "Data Pegawai",
    download: "Download",
    faq: "F.A.Q",
    language: "ID",
  },
  en: {
    home: "Home",
    profile: "Profile",
    ppid: "PPID",
    publicMenu: "Public Menu",
    employee: "Staff",
    download: "Download",
    faq: "FAQ",
    language: "EN",
  }
};

export type AvailableLang = keyof typeof translations;
