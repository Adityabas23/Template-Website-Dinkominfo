// app/data/newsData.ts
export type NewsItem = {
  id: string;
  slug: string;
  imageUrl: string;     // gunakan path relatif dari /public, mis. '/berita1.png'
  altText?: string;
  date: string;         // human-readable
  title: string;
  excerpt?: string;
  content?: string;     // HTML string (trusted) atau plain text
};

export const newsData: NewsItem[] = [
  {
    id: '54027',
    slug: 'dinkominfo-gandeng-kepala-pasar-gempur-rokok-ilegal-2025',
    imageUrl: '/berita1.png', // pindahkan file image ke public/berita1.png
    altText: 'Kampanye Gempur Rokok Ilegal',
    date: '12 November 2025',
    title:
      'Dinkominfo Gandeng Kepala Pasar se-Kabupaten Banyumas dalam Kampanye "Gempur Rokok Ilegal"',
    excerpt:
      'Dinkominfo bekerja sama dengan kepala pasar untuk kampanye pencegahan rokok ilegal di Banyumas.',
    content: `<p>Panitia dan Dinkominfo melakukan sosialisasi di pasar-pasar utama. <strong>Rangkaian kegiatan mencakup</strong> penyuluhan, pemasangan poster, dan pengawasan distribusi rokok ilegal.</p>
              <p>Untuk informasi lebih lanjut, kunjungi kantor Dinkominfo atau hubungi kontak resmi.</p>`,
  },
  {
    id: '53938',
    slug: 'sosialisasi-aplikasi-siberkab-purwokerto-2025',
    imageUrl: '/berita2.png',
    altText: 'Sosialisasi SIBERKAB',
    date: '11 November 2025',
    title: 'Sosialisasi Aplikasi SIBERKAB di Kecamatan Purwokerto Selatan',
    excerpt:
      'Pelatihan pemanfaatan aplikasi SIBERKAB untuk penguatan layanan publik di kecamatan.',
    content: `<p>Sosialisasi aplikasi SIBERKAB bertujuan meningkatkan transparansi dan efektivitas layanan publik. Peserta ...</p>`,
  },
  {
    id: '53899',
    slug: 'rapat-koordinasi-implementasi-tte-2025',
    imageUrl: '/berita3.png',
    altText: 'Rapat Tanda Tangan Elektronik',
    date: '10 November 2025',
    title:
      'Rapat Koordinasi Persiapan Implementasi Tanda Tangan Elektronik (TTE)',
    excerpt:
      'Koordinasi antar OPD untuk persiapan implementasi TTE pada layanan pemerintahan.',
    content: `<p>Rapat membahas roadmap, teknis integrasi, dan sosialisasi internal. Langkah selanjutnya ...</p>`,
  },
  {
    id: '53779',
    slug: 'pelatihan-keamanan-informasi-admin-opd-2025',
    imageUrl: '/berita4.png',
    altText: 'Pelatihan Keamanan Informasi',
    date: '09 November 2025',
    title:
      'Pelatihan Keamanan Informasi untuk Admin OPD di Lingkungan Pemkab Banyumas',
    excerpt:
      'Pelatihan security dasar untuk admin OPD agar layanan lebih aman dari ancaman siber.',
    content: `<p>Materi meliputi keamanan password, pengelolaan akses, backup, dan mitigasi insiden. Materi disampaikan oleh ...</p>`,
  },
];
