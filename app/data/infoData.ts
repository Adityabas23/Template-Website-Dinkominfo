// app/data/infoData.ts

export type InfoItem = {
  id: string;
  slug: string;
  imageUrl: string;
  altText: string;
  date: string;
  title: string;
  excerpt?: string;   // <<< ditambahkan
  content?: string;   // <<< opsional seperti newsData
  href: string;       // link eksternal asli tetap ada
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
    excerpt: 'Survei resmi untuk mengukur kualitas pelayanan publik Dinas Kominfo Banyumas.',
    content: `<p>Survey ini dilakukan untuk mengetahui kepuasan masyarakat ...</p>`,
    href: 'http://dinkominfo.banyumaskab.go.id/read/52976/survei-kepuasan-masyarakat-terhadap-layanan-dinas-kominfo-tahun-2025',
  },
  {
    id: '52515',
    slug: 'simpan-mas-inovasi-spbe-banyumas',
    imageUrl: '/info2.png',
    altText: 'SIMPAN MAS',
    date: 'Kamis, 14 April 2022',
    title:
      'SIMPAN MAS: Inovasi Pengelolaan Pengetahuan ASN untuk Mendukung SPBE Kabupaten Banyumas',
    excerpt: 'Program inovasi untuk meningkatkan literasi digital ASN melalui manajemen pengetahuan.',
    content: `<p>SIMPAN MAS adalah sistem yang dirancang untuk ...</p>`,
    href: 'http://dinkominfo.banyumaskab.go.id/read/52515/simpan-mas-inovasi-pengelolaan-pengetahuan-asn-untuk-mendukung-spbe-kabupaten-banyumas',
  },
  {
    id: '37173',
    slug: 'uji-konsekuensi-tahap-2',
    imageUrl: '/info3.png',
    altText: 'Uji Konsekuensi Tahap II',
    date: 'Kamis, 14 April 2022',
    title: 'Uji Konsekuensi Tahap II',
    excerpt: 'Informasi mengenai pelaksanaan tahap lanjutan uji konsekuensi.',
    content: `<p>Kegiatan ini merupakan lanjutan dari proses uji konsekuensi ...</p>`,
    href: 'http://dinkominfo.banyumaskab.go.id/read/37173/uji-konsekuensi-tahap-ii',
  },
  {
    id: '20839',
    slug: 'peringatan-malware-wannacry',
    imageUrl: '/info4.jpg',
    altText: 'Himbauan Malware',
    date: 'Senin, 15 Mei 2017',
    title:
      'Himbauan Agar Segera Melakukan Tindakan Pencegahan Terhadap Ancaman Malware Khususnya Ransomware WannaCRY',
    excerpt: 'Peringatan keamanan terkait penyebaran ransomware WannaCry tahun 2017.',
    content: `<p>Ransomware WannaCry menyebabkan gangguan layanan skala global ...</p>`,
    href: 'http://dinkominfo.banyumaskab.go.id/read/20839/himbauan-agar-segera-melakukan-tindakan-pencegahan-terhadap-ancaman-malware-khususnya-ransomware-jenis-wannacry',
  },
];
