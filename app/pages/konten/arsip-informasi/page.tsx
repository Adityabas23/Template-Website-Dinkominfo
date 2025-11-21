'use client';
import React, { useMemo, useState } from 'react';
import PageLayout from '@/app/component/pagelayout';
import { infoData } from '@/app/data/infoData'; // pastikan data ini ada dan memiliki fields: title, href, date, imageUrl?, excerpt?, views?

function formatDate(d?: string) {
  if (!d) return '';
  try {
    const dt = new Date(d);
    return dt.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
  } catch {
    return d || '';
  }
}

export default function ArsipInformasiPage(): React.ReactElement {
  // pagination config
  const perPage = 8;
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(infoData.length / perPage));
  const start = (page - 1) * perPage;
  const visible = infoData.slice(start, start + perPage);

  // sidebar lists
  const latest = useMemo(() => {
    return [...infoData]
      .sort((a, b) => {
        const ad = a.date ? new Date(a.date).getTime() : 0;
        const bd = b.date ? new Date(b.date).getTime() : 0;
        return bd - ad;
      })
      .slice(0, 5);
  }, []);

  const popular = useMemo(() => {
    const hasViews = infoData.some((i) => typeof (i as any).views === 'number');
    if (hasViews) {
      return [...infoData].sort((a, b) => ((b as any).views || 0) - ((a as any).views || 0)).slice(0, 5);
    }
    return infoData.slice(0, 5);
  }, []);

  // layout styles (inline)
  const wrapper: React.CSSProperties = { maxWidth: 1200, margin: '28px auto', padding: '0 20px' };
  const twoCol: React.CSSProperties = { display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' };
  const leftCol: React.CSSProperties = { flex: '1 1 700px', minWidth: 300 };
  const rightCol: React.CSSProperties = { width: 320, flex: '0 0 320px' };

  const gridStyle: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 };
  const cardBase: React.CSSProperties = {
    background: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'transform .18s, box-shadow .18s',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  };
  const paginationWrap: React.CSSProperties = { display: 'flex', justifyContent: 'center', gap: 8, marginTop: 20, flexWrap: 'wrap' };
  const sideItemStyle: React.CSSProperties = { display: 'flex', gap: 10, alignItems: 'flex-start', padding: '8px 0', borderBottom: '1px solid #f0f0f0' };

  return (
    <PageLayout
      title="Arsip Informasi"
      breadcrumb="BERANDA > ARSIP INFORMASI"
      description="Kumpulan informasi dan pengumuman dari Dinas Komunikasi dan Informatika"
      /* jika mau gunakan gambar banner, contoh:
         heroImage="/mnt/data/86ae3920-bd07-47af-be90-bfd1e17348cf.png"
      */
    >
      <main style={wrapper}>
        <div style={twoCol}>
          {/* LEFT: grid + pagination */}
          <div style={leftCol}>
            <section style={gridStyle}>
              {visible.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  style={cardBase}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = 'translateY(-6px)';
                    el.style.boxShadow = '0 14px 30px rgba(2,6,23,0.12)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = 'translateY(0)';
                    el.style.boxShadow = '0 6px 18px rgba(0,0,0,0.06)';
                  }}
                >
                  {item.imageUrl && <img src={item.imageUrl} alt={item.title} style={{ width: '100%', height: 160, objectFit: 'cover', flexShrink: 0 }} loading="lazy" />}
                  <div style={{ padding: 12 }}>
                    {item.date && <time style={{ display: 'block', color: '#6b7280', fontSize: 13 }}>{formatDate(item.date)}</time>}
                    <h3 style={{ margin: '8px 0', fontSize: 16, color: '#0b2540' }}>{item.title}</h3>
                    {item.excerpt && (
                      <p style={{ margin: 0, color: '#444', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {item.excerpt}
                      </p>
                    )}
                  </div>
                </a>
              ))}
            </section>

            {/* pagination */}
            <div style={paginationWrap}>
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #e0e6ef', background: page === 1 ? '#f5f6f8' : '#fff', cursor: page === 1 ? 'not-allowed' : 'pointer' }}
              >
                ‹ Sebelumnya
              </button>

              {[...Array(totalPages)].map((_, i) => {
                const num = i + 1;
                const active = num === page;
                return (
                  <button
                    key={i}
                    onClick={() => setPage(num)}
                    style={{
                      padding: '8px 12px',
                      borderRadius: 8,
                      border: '1px solid #e0e6ef',
                      background: active ? '#0c5fd6' : '#fff',
                      color: active ? '#fff' : '#333',
                      cursor: 'pointer',
                      fontWeight: active ? 600 : 400,
                    }}
                  >
                    {num}
                  </button>
                );
              })}

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #e0e6ef', background: page === totalPages ? '#f5f6f8' : '#fff', cursor: page === totalPages ? 'not-allowed' : 'pointer' }}
              >
                Selanjutnya ›
              </button>
            </div>
          </div>

          {/* RIGHT: sidebar */}
          <aside style={rightCol}>
            {/* Latest */}
            <div style={{ background: '#fff', borderRadius: 12, padding: 14, boxShadow: '0 6px 18px rgba(0,0,0,0.04)', marginBottom: 18 }}>
              <h4 style={{ margin: '0 0 12px', fontSize: 16 }}>Informasi Terbaru</h4>
              {latest.map((it, i) => (
                <a key={i} href={it.href} style={sideItemStyle}>
                  {it.imageUrl ? <img src={it.imageUrl} alt={it.title} style={{ width: 72, height: 52, objectFit: 'cover', borderRadius: 8, flexShrink: 0 }} loading="lazy" /> : null}
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, color: '#6b7280' }}>{formatDate(it.date)}</div>
                    <div style={{ fontSize: 14, color: '#0b2540', fontWeight: 600 }}>{it.title}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Popular */}
            <div style={{ background: '#fff', borderRadius: 12, padding: 14, boxShadow: '0 6px 18px rgba(0,0,0,0.04)' }}>
              <h4 style={{ margin: '0 0 12px', fontSize: 16 }}>Informasi Terpopuler</h4>
              {popular.map((it, i) => (
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
