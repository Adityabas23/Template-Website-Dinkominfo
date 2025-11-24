// app/konten/arsip-berita/[slug]/page.tsx
import React from 'react';
import NewsDetailPage from '@/app/pages/konten/arsip-berita/NewsDetailPage';

type RouteProps = {
  params: Promise<{ slug: string }>;
};

export default async function BeritaDetailRoute({ params }: RouteProps) {
  // karena params adalah Promise, harus di-await dulu
  const { slug } = await params;

  return <NewsDetailPage slug={slug} />;
}
