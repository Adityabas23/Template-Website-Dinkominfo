// app/data/infoData.ts

export type InfoItem = {
  href: string;
  imageUrl: string;
  altText: string;
  date: string;
  title: string;
  excerpt?: string;
};

export const infoData: InfoItem[] = [
  {
    href: 'http://dinkominfo.banyumaskab.go.id/read/52976/survei-kepuasan-masyarakat-terhadap-layanan-dinas-kominfo-tahun-2025',
    imageUrl: '/info1.png',
    altText: ' Survei kepuasan masyarakat',
    date: 'Selasa, 29 Juli 2025',
    title:
      'Survei kepuasan masyarakat terhadap layanan Dinas Kominfo Tahun 2025',
  },
  {
    href: 'http://dinkominfo.banyumaskab.go.id/read/52515/simpan-mas-inovasi-pengelolaan-pengetahuan-asn-untuk-mendukung-spbe-kabupaten-banyumas',
    imageUrl: '/info2.png',
    altText: 'SIMPAN MAS',
    date: 'Kamis, 14 April 2022',
    title:
      'SIMPAN MAS: Inovasi Pengelolaan Pengetahuan ASN untuk Mendukung SPBE Kabupaten Banyumas',
  },
  {
    href: 'http://dinkominfo.banyumaskab.go.id/read/37173/uji-konsekuensi-tahap-ii',
    imageUrl: '/info3.png',
    altText: 'Himbauan Malware',
    date: 'Kamis, 14 April 2022',
    title: 'Uji Konsekuensi Tahap II',
  },
  {
    href: 'http://dinkominfo.banyumaskab.go.id/read/20839/himbauan-agar-segera-melakukan-tindakan-pencegahan-terhadap-ancaman-malware-khususnya-ransomware-jenis-wannacry',
    imageUrl: '/info4.png',
    altText: 'Himbauan Malware',
    date: 'Senin, 15 Mei 2017',
    title:
      'Himbauan Agar Segera Melakukan Tindakan Pencegahan Terhadap Ancaman Malware Khususnya Ransomware Jenis WannaCRY',
  },
];
