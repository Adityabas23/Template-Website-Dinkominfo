// app/data/edukasiData.ts

export type EdukasiItem = {
  href: string;
  imageUrl: string;
  altText: string;
  title: string;
  type: 'video' | 'image';
};

export const edukasiData: EdukasiItem[] = [
  {
    href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    imageUrl: 'https://placehold.co/600x400/000000/ffffff?text=Video+1',
    altText: 'Video Edukasi 1',
    title: 'Contoh Judul Video Edukasi tentang Keamanan Siber',
    type: 'video',
  },
  {
    href: '/edukasi/poster-hoax',
    imageUrl: 'https://placehold.co/600x400/eeeeee/333333?text=Poster+Anti-Hoax',
    altText: 'Poster Anti-Hoax',
    title: 'Infografis: Cara Mengenali Berita Hoax',
    type: 'image',
  },
  {
    href: 'https://www.youtube.com/watch?v=another-video',
    imageUrl: 'https://placehold.co/600x400/333333/ffffff?text=Video+2',
    altText: 'Video Edukasi 2',
    title: 'Tutorial Penggunaan Aplikasi Layanan Publik',
    type: 'video',
  },
];
