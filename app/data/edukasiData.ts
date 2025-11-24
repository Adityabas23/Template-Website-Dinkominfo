// app/data/edukasiData.ts

import { getYoutubeThumbnail } from '@/app/utils/youtube';

export type EdukasiItem = {
  href: string;
  imageUrl: string;
  altText: string;
  title: string;
  type: 'video' | 'image';
};

export const edukasiData: EdukasiItem[] = [
  {
    href: 'https://youtu.be/uUZlCqRhKnM?si=6nVzu-nThY6GVg2c',
    imageUrl: getYoutubeThumbnail('https://youtu.be/uUZlCqRhKnM?si=6nVzu-nThY6GVg2c'),
    altText: 'Video Edukasi 1',
    title: 'Sistem Informasi Manajemen Pengetahuan Banyumas (SIMPAN MAS)',
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
    href: 'https://youtu.be/EzZi4yVKY88?si=fxdDwDCk-fsu_GSl',
    imageUrl: getYoutubeThumbnail('https://youtu.be/EzZi4yVKY88?si=fxdDwDCk-fsu_GSl'),
    altText: 'Video Edukasi 2',
    title: 'Pelantikan Dewan Saka Milenial masa bakti 2022 - 2024',
    type: 'video',
  },

  {
    href: 'https://youtu.be/IWYA1ERyaSw?si=X64Sgnbn2JhebMOU',
    imageUrl: getYoutubeThumbnail('https://youtu.be/IWYA1ERyaSw?si=X64Sgnbn2JhebMOU'),
    altText: 'Video Edukasi 3',
    title: 'Tutorial Pembuatan Data Geospasial',
    type: 'video',
  },
];
