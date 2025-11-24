// Halaman detail berita (disimpan rapi di app/pages/...)
// File ini BUKAN route Next.js
// Route sebenarnya ada di app/konten/arsip-berita/[slug]/page.tsx

import React from 'react';
import Link from 'next/link';
import PageLayout from '@/app/component/pagelayout';
import { newsData } from '@/app/data/newsData';
import ButtonLink from "@/app/component/ui/ButtonLink";

type Props = {
  slug: string;
};

function formatDate(d?: string) {
  if (!d) return '';
  try {
    return new Date(d).toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return d || '';
  }
}

export default function NewsDetailPage({ slug }: Props): React.ReactElement {
  // DEBUG (boleh kamu aktifkan kalau mau cek):
  // console.log('slug param:', slug);
  // console.log('available slugs:', newsData.map(n => n.slug));

  const item = newsData.find(
    (n) => n.slug === slug || n.id === slug
  );

  if (!item) {
    return (
      <PageLayout
        title="Berita tidak ditemukan"
        breadcrumb="BERANDA > ARSIP BERITA"
        heroImage="/bannerpemkab.png"
      >
        <main style={{ maxWidth: 900, margin: '28px auto', padding: '0 20px' }}>
          <h2>404 — Berita tidak ditemukan</h2>
          <p>Berita yang Anda cari tidak ada atau telah dihapus.</p>
          <p>
          <ButtonLink href="/pages/konten/arsip-berita" size="sm">
            Kembali ke Arsip Berita
          </ButtonLink>
          </p>
        </main>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title={item.title}
      breadcrumb={`BERANDA > ARSIP BERITA > ${item.title}`}
      description={item.excerpt || ''}
      heroImage={item.imageUrl}
    >
      <main style={{ maxWidth: 900, margin: '28px auto', padding: '0 20px' }}>
        <article
          style={{
            background: '#fff',
            borderRadius: 12,
            padding: 20,
            boxShadow: '0 10px 30px rgba(2,6,23,0.06)',
          }}
        >
          {item.imageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.imageUrl}
              alt={item.altText || item.title}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 10,
                objectFit: 'cover',
                marginBottom: 16,
              }}
            />
          )}

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 8,
              gap: 12,
              flexWrap: 'wrap',
            }}
          >
            <div style={{ color: '#6b7280', fontSize: 14 }}>
              {formatDate(item.date)}
            </div>

            <ButtonLink
              href="/pages/konten/arsip-berita"
              size="sm"
            >
              Kembali ke Arsip Berita
            </ButtonLink>
          </div>

          <h1 style={{ marginTop: 0, marginBottom: 12 }}>{item.title}</h1>

          {item.excerpt && <p style={{ color: '#444' }}>{item.excerpt}</p>}

          <div style={{ marginTop: 18, lineHeight: 1.8, color: '#222' }}>
            {item.content ? (
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            ) : (
              <p>Tidak ada isi detail untuk berita ini.</p>
            )}
          </div>
        </article>
      </main>
    </PageLayout>
  );
}
