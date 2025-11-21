// app/data/newsData.ts

export type NewsItem = {
  href: string;
  imageUrl: string;
  altText: string;
  date: string;
  title: string;
  excerpt?: string;
};

export const newsData: NewsItem[] = [
  {
    href: 'http://dinkominfo.banyumaskab.go.id/read/54027/dinkominfo-gelar-forum-konsultasi-indeks-spbe-banyumas-tembus-409-sangat-baik',
    imageUrl: '/berita1.jpg',
    altText: 'Kampanye Gempur Rokok Ilegal',
    date: '12 November 2025',
    title:
      'Dinkominfo Gandeng Kepala Pasar se-Kabupaten Banyumas dalam Kampanye "Gempur Rokok Ilegal"',
  },
  {
    href: 'http://dinkominfo.banyumaskab.go.id/read/53938/ppid-banyumas-siap-sandang-predikat-badan-publik-informatif',
    imageUrl: '/berita2.png',
    altText: 'Sosialisasi SIBERKAB',
    date: '11 November 2025',
    title: 'Sosialisasi Aplikasi SIBERKAB di Kecamatan Purwokerto Selatan',
  },
  {
    href: 'http://dinkominfo.banyumaskab.go.id/read/53899/dinkominfo-gandeng-kepala-pasar-se-kabupaten-banyumas-dalam-kampanye-gempur-rokok-ilegal',
    imageUrl: '/berita3.png',
    altText: 'Rapat Tanda Tangan Elektronik',
    date: '10 November 2025',
    title:
      'Rapat Koordinasi Persiapan Implementasi Tanda Tangan Elektronik (TTE)',
  },
  {
    href: 'http://dinkominfo.banyumaskab.go.id/read/53779/dorong-daya-saing-lokal-dinkominfo-banyumas-gelar-sosialisasi-strategi-digital-marketing',
    imageUrl: '/berita4.png',
    altText: 'Pelatihan Keamanan Informasi',
    date: '09 November 2025',
    title:
      'Pelatihan Keamanan Informasi untuk Admin OPD di Lingkungan Pemkab Banyumas',
  },
];
