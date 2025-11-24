// app/data/infoData.ts

export type InfoItem = {
  id: string;
  slug: string;
  imageUrl: string;   // path relatif dari /public
  altText?: string;
  date: string;       // human-readable
  title: string;
  excerpt?: string;
  content?: string;   // HTML string (opsional)
};

export const infoData: InfoItem[] = [
  {
    id: '52976',
    slug: 'survei-kepuasan-masyarakat-layanan-kominfo-2025',
    imageUrl: '/info1.png',
    altText: 'Survei kepuasan masyarakat',
    date: 'Selasa, 29 Juli 2025',
    title:
      'Survei kepuasan masyarakat terhadap layanan Dinas Kominfo Tahun 2025',
    excerpt:
      'Survei resmi untuk mengukur tingkat kepuasan masyarakat terhadap layanan Dinas Kominfo Kabupaten Banyumas tahun 2025.',
    content: `<p>Survei kepuasan masyarakat terhadap layanan Dinas Kominfo Tahun 2025 diselenggarakan untuk mengetahui kualitas layanan publik yang diberikan kepada masyarakat.</p>
              <p>Masyarakat diharapkan berpartisipasi aktif agar hasil survei dapat menjadi dasar perbaikan dan peningkatan layanan ke depan.</p>`,
  },
  {
    id: '52515',
    slug: 'simpan-mas-inovasi-pengelolaan-pengetahuan-asn-spbe-banyumas',
    imageUrl: '/info2.png',
    altText: 'SIMPAN MAS',
    date: 'Kamis, 14 April 2022',
    title:
      'SIMPAN MAS: Inovasi Pengelolaan Pengetahuan ASN untuk Mendukung SPBE Kabupaten Banyumas',
    excerpt:
      'Inovasi SIMPAN MAS mendukung penerapan SPBE melalui pengelolaan pengetahuan ASN di Kabupaten Banyumas.',
    content: `<p>SIMPAN MAS merupakan inovasi pengelolaan pengetahuan Aparatur Sipil Negara (ASN) yang dikembangkan untuk mendukung pelaksanaan Sistem Pemerintahan Berbasis Elektronik (SPBE) di Kabupaten Banyumas.</p>
              <p>Melalui SIMPAN MAS, pengetahuan dan pengalaman ASN terdokumentasi dengan baik sehingga dapat dimanfaatkan sebagai referensi bersama.</p>`,
  },
  {
    id: '37173',
    slug: 'uji-konsekuensi-tahap-ii',
    imageUrl: '/info3.png',
    altText: 'Uji Konsekuensi Tahap II',
    date: 'Kamis, 14 April 2022',
    title: 'Uji Konsekuensi Tahap II',
    excerpt:
      'Informasi pelaksanaan Uji Konsekuensi Tahap II sebagai bagian dari pengelolaan keterbukaan informasi publik.',
    content: `<p>Uji Konsekuensi Tahap II dilaksanakan untuk memastikan informasi yang dikelola pemerintah telah sesuai dengan ketentuan keterbukaan informasi publik.</p>
              <p>Kegiatan ini menjadi bagian penting dalam menjaga keseimbangan antara keterbukaan informasi dan perlindungan data.</p>`,
  },
  {
    id: '20839',
    slug: 'himbauan-antisipasi-malware-wannacry',
    imageUrl: '/info4.jpg',
    altText: 'Himbauan Malware',
    date: 'Senin, 15 Mei 2017',
    title:
      'Himbauan Agar Segera Melakukan Tindakan Pencegahan Terhadap Ancaman Malware Khususnya Ransomware Jenis WannaCRY',
    excerpt:
      'Himbauan resmi untuk melakukan langkah pencegahan terhadap serangan ransomware WannaCry dan malware sejenis.',
    content: `<p>Dinas Kominfo menghimbau seluruh pihak untuk segera melakukan langkah pencegahan terhadap ancaman malware, khususnya ransomware jenis WannaCry.</p>
              <p>Langkah pencegahan di antaranya adalah melakukan update sistem, backup data penting, serta meningkatkan kewaspadaan terhadap lampiran dan tautan mencurigakan.</p>`,
  },
];
