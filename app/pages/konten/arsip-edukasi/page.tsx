'use client';
import React, { useMemo, useState } from 'react';
import PageLayout from '@/app/component/pagelayout';
import { edukasiData } from '@/app/data/edukasiData';

function formatDate(d?: string) {
  if (!d) return '';
  try {
    return new Date(d).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
  } catch {
    return d || '';
  }
}

export default function ArsipEdukasiPage(): React.ReactElement {
  // tabs: 'artikel' | 'video'
  const [tab, setTab] = useState<'artikel' | 'video'>('artikel');
  const [query, setQuery] = useState(''); // pencarian per-tab

  // pagination per-tab
  const perPage = 8;
  const [pageArtikel, setPageArtikel] = useState(1);
  const [pageVideo, setPageVideo] = useState(1);

  // split data
  const articles = useMemo(() => edukasiData.filter((i: any) => i.type !== 'video'), []);
  const videos = useMemo(() => edukasiData.filter((i: any) => i.type === 'video'), []);

  // filtered by search query (case-insensitive)
  const normalize = (s?: string) => (s ?? '').toLowerCase();
  const filteredArticles = useMemo(() => {
    const q = normalize(query).trim();
    if (!q) return articles;
    return articles.filter((it: any) =>
      normalize(it.title).includes(q) ||
      normalize(it.excerpt).includes(q) ||
      normalize(it.date).includes(q)
    );
  }, [articles, query]);

  const filteredVideos = useMemo(() => {
    const q = normalize(query).trim();
    if (!q) return videos;
    return videos.filter((it: any) =>
      normalize(it.title).includes(q) ||
      normalize(it.excerpt).includes(q) ||
      normalize(it.date).includes(q)
    );
  }, [videos, query]);

  const totalPagesArtikel = Math.max(1, Math.ceil(filteredArticles.length / perPage));
  const totalPagesVideo = Math.max(1, Math.ceil(filteredVideos.length / perPage));

  const startArtikel = (pageArtikel - 1) * perPage;
  const visibleArtikel = filteredArticles.slice(startArtikel, startArtikel + perPage);

  const startVideo = (pageVideo - 1) * perPage;
  const visibleVideo = filteredVideos.slice(startVideo, startVideo + perPage);

  // sidebar lists
  const latest = useMemo(() => {
    return [...edukasiData]
      .sort((a: any, b: any) => (new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime()))
      .slice(0, 5);
  }, []);

  const popular = useMemo(() => {
    const hasViews = edukasiData.some((i: any) => typeof (i as any).views === 'number');
    if (hasViews) {
      return [...edukasiData].sort((a: any, b: any) => ((b as any).views || 0) - ((a as any).views || 0)).slice(0, 5);
    }
    return edukasiData.slice(0, 5);
  }, []);

  const latestVideos = useMemo(() => videos.slice(0, 5), [videos]);

  // layout styles (inline)
  const wrapper: React.CSSProperties = { maxWidth: 1200, margin: '28px auto', padding: '0 20px' };
  const twoCol: React.CSSProperties = { display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' };
  const leftCol: React.CSSProperties = { flex: '1 1 700px', minWidth: 300 };
  const rightCol: React.CSSProperties = { width: 320, flex: '0 0 320px' };

  const tabsWrap: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, marginBottom: 12, flexWrap: 'wrap' };
  const tabButtons: React.CSSProperties = { display: 'flex', gap: 8 };

  const gridStyle: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 };

  const cardBase: React.CSSProperties = {
    background: '#fff', borderRadius: 12, overflow: 'hidden',
    boxShadow: '0 6px 18px rgba(0,0,0,0.06)', textDecoration: 'none', color: 'inherit',
    transition: 'transform .18s, box-shadow .18s', display: 'flex', flexDirection: 'column', height: '100%',
  };

  const paginationWrap: React.CSSProperties = { display: 'flex', justifyContent: 'center', gap: 8, marginTop: 18, flexWrap: 'wrap' };
  const sideItemStyle: React.CSSProperties = { display: 'flex', gap: 10, alignItems: 'flex-start', padding: '8px 0', borderBottom: '1px solid #f0f0f0' };

  // hero image you used
  const heroImage = '/bannerpemkab.png';

  // Reset page when switching tab or query changes
  React.useEffect(() => {
    setPageArtikel(1);
    setPageVideo(1);
  }, [tab, query]);

  return (
    <PageLayout
      title="Edukasi Publik"
      breadcrumb="BERANDA > EDUKASI PUBLIK"
      description="Artikel, video, dan materi edukasi publik."
      heroImage={heroImage}
    >
      <main style={wrapper}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 18 }}>
          <h2 style={{ margin: 0 }}>Edukasi Publik</h2>
          <div style={{ marginLeft: 'auto' }}></div>
        </div>

        <div style={twoCol}>
          {/* LEFT: tabs + grid + pagination */}
          <div style={leftCol}>
            <div style={tabsWrap}>
              <div style={tabButtons}>
                <button
                  onClick={() => setTab('artikel')}
                  style={{
                    padding: '8px 14px', borderRadius: 8, border: '1px solid #e6eefc',
                    background: tab === 'artikel' ? '#0c5fd6' : '#fff',
                    color: tab === 'artikel' ? '#fff' : '#0c5fd6',
                    cursor: 'pointer', fontWeight: 600
                  }}
                >
                  Artikel
                </button>
                <button
                  onClick={() => setTab('video')}
                  style={{
                    padding: '8px 14px', borderRadius: 8, border: '1px solid #e6eefc',
                    background: tab === 'video' ? '#0c5fd6' : '#fff',
                    color: tab === 'video' ? '#fff' : '#0c5fd6',
                    cursor: 'pointer', fontWeight: 600
                  }}
                >
                  Video
                </button>
              </div>

              {/* search */}
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={`Cari ${tab === 'artikel' ? 'artikel' : 'video'}...`}
                  style={{ padding: '8px 10px', borderRadius: 8, border: '1px solid #e7ecf7', minWidth: 200 }}
                />
                <button onClick={() => { tab === 'artikel' ? setPageArtikel(1) : setPageVideo(1); }} style={{ padding: '8px 12px', borderRadius: 8, background: '#0c5fd6', color: '#fff', border: 'none' }}>
                  Cari
                </button>
              </div>
            </div>

            {/* Grid content depending on tab */}
            {tab === 'artikel' ? (
              <>
                <section style={gridStyle}>
                  {visibleArtikel.map((item: any, idx: number) => (
                    <a
                      key={idx}
                      href={item.href}
                      style={cardBase}
                      onMouseEnter={(e) => { const el = e.currentTarget; el.style.transform = 'translateY(-6px)'; el.style.boxShadow = '0 14px 30px rgba(2,6,23,0.12)'; }}
                      onMouseLeave={(e) => { const el = e.currentTarget; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 6px 18px rgba(0,0,0,0.06)'; }}
                    >
                      {item.imageUrl && <img src={item.imageUrl} alt={item.title} style={{ width: '100%', height: 160, objectFit: 'cover', flexShrink: 0 }} loading="lazy" />}
                      <div style={{ padding: 12 }}>
                        {item.date && <time style={{ display: 'block', color: '#6b7280', fontSize: 13 }}>{formatDate(item.date)}</time>}
                        <h3 style={{ margin: '8px 0', fontSize: 16, color: '#0b2540' }}>{item.title}</h3>
                        {item.excerpt && <p style={{ margin: 0, color: '#444', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.excerpt}</p>}
                      </div>
                    </a>
                  ))}
                </section>

                {/* pagination artikel */}
                <div style={paginationWrap}>
                  <button onClick={() => setPageArtikel((p) => Math.max(1, p - 1))} disabled={pageArtikel === 1}
                    style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #e0e6ef', background: pageArtikel === 1 ? '#f5f6f8' : '#fff', cursor: pageArtikel === 1 ? 'not-allowed' : 'pointer' }}>
                    ‹ Sebelumnya
                  </button>
                  {[...Array(totalPagesArtikel)].map((_, i) => {
                    const num = i + 1; const active = num === pageArtikel;
                    return (
                      <button key={i} onClick={() => setPageArtikel(num)}
                        style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #e0e6ef', background: active ? '#0c5fd6' : '#fff', color: active ? '#fff' : '#333' }}>
                        {num}
                      </button>
                    );
                  })}
                  <button onClick={() => setPageArtikel((p) => Math.min(totalPagesArtikel, p + 1))} disabled={pageArtikel === totalPagesArtikel}
                    style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #e0e6ef', background: pageArtikel === totalPagesArtikel ? '#f5f6f8' : '#fff', cursor: pageArtikel === totalPagesArtikel ? 'not-allowed' : 'pointer' }}>
                    Selanjutnya ›
                  </button>
                </div>
              </>
            ) : (
              <>
                <section style={gridStyle}>
                  {visibleVideo.map((item: any, idx: number) => (
                    <a key={idx} href={item.href} style={cardBase}
                      onMouseEnter={(e) => { const el = e.currentTarget; el.style.transform = 'translateY(-6px)'; el.style.boxShadow = '0 14px 30px rgba(2,6,23,0.12)'; }}
                      onMouseLeave={(e) => { const el = e.currentTarget; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 6px 18px rgba(0,0,0,0.06)'; }}
                    >
                      {item.imageUrl ? (
                        <img src={item.imageUrl} alt={item.title} style={{ width: '100%', height: 160, objectFit: 'cover' }} loading="lazy" />
                      ) : (
                        <div style={{ width: '100%', height: 160, background: '#000', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Video</div>
                      )}
                      <div style={{ padding: 12 }}>
                        {item.date && <time style={{ display: 'block', color: '#6b7280', fontSize: 13 }}>{formatDate(item.date)}</time>}
                        <h3 style={{ margin: '8px 0', fontSize: 16, color: '#0b2540' }}>{item.title}</h3>
                        {item.excerpt && <p style={{ margin: 0, color: '#444', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.excerpt}</p>}
                      </div>
                    </a>
                  ))}
                </section>

                {/* pagination video */}
                <div style={paginationWrap}>
                  <button onClick={() => setPageVideo((p) => Math.max(1, p - 1))} disabled={pageVideo === 1} style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #e0e6ef' }}>‹ Sebelumnya</button>
                  {[...Array(totalPagesVideo)].map((_, i) => {
                    const num = i + 1; const active = num === pageVideo;
                    return (
                      <button key={i} onClick={() => setPageVideo(num)} style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #e0e6ef', background: active ? '#0c5fd6' : '#fff', color: active ? '#fff' : '#333' }}>{num}</button>
                    );
                  })}
                  <button onClick={() => setPageVideo((p) => Math.min(totalPagesVideo, p + 1))} disabled={pageVideo === totalPagesVideo} style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #e0e6ef' }}>Selanjutnya ›</button>
                </div>
              </>
            )}
          </div>

          {/* RIGHT: sidebar */}
          <aside style={rightCol}>
            <div style={{ background: '#fff', borderRadius: 12, padding: 14, boxShadow: '0 6px 18px rgba(0,0,0,0.04)', marginBottom: 18 }}>
              <h4 style={{ margin: '0 0 12px', fontSize: 16 }}>Edukasi Terbaru</h4>
              {latest.map((it: any, i: number) => (
                <a key={i} href={it.href} style={sideItemStyle}>
                  {it.imageUrl ? <img src={it.imageUrl} alt={it.title} style={{ width: 72, height: 52, objectFit: 'cover', borderRadius: 8, flexShrink: 0 }} loading="lazy" /> : null}
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, color: '#6b7280' }}>{formatDate(it.date)}</div>
                    <div style={{ fontSize: 14, color: '#0b2540', fontWeight: 600 }}>{it.title}</div>
                  </div>
                </a>
              ))}
            </div>

            <div style={{ background: '#fff', borderRadius: 12, padding: 14, boxShadow: '0 6px 18px rgba(0,0,0,0.04)', marginBottom: 18 }}>
              <h4 style={{ margin: '0 0 12px', fontSize: 16 }}>Video Terbaru</h4>
              {latestVideos.map((it: any, i: number) => (
                <a key={i} href={it.href} style={sideItemStyle}>
                  {it.imageUrl ? <img src={it.imageUrl} alt={it.title} style={{ width: 72, height: 52, objectFit: 'cover', borderRadius: 8, flexShrink: 0 }} loading="lazy" /> : null}
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, color: '#6b7280' }}>{formatDate(it.date)}</div>
                    <div style={{ fontSize: 14, color: '#0b2540', fontWeight: 600 }}>{it.title}</div>
                  </div>
                </a>
              ))}
            </div>

            <div style={{ background: '#fff', borderRadius: 12, padding: 14, boxShadow: '0 6px 18px rgba(0,0,0,0.04)' }}>
              <h4 style={{ margin: '0 0 12px', fontSize: 16 }}>Edukasi Terpopuler</h4>
              {popular.map((it: any, i: number) => (
                <a key={i} href={it.href} style={sideItemStyle}>
                  <div style={{ width: 38, height: 38, borderRadius: 8, background: '#eef6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0c5fd6', fontWeight: 700, flexShrink: 0 }}>
                    {i + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, color: '#0b2540', fontWeight: 600 }}>{it.title}</div>
                    <div style={{ fontSize: 12, color: '#6b7280' }}>{formatDate(it.date)}</div>
                  </div>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </main>
    </PageLayout>
  );
}