'use client';
import React, { useMemo, useState } from 'react';
import PageLayout from '@/app/component/pagelayout';
import { agendaData as allAgenda } from '@/app/data/agendaData'; // pastikan tanggal format "YYYY-MM-DD"

function formatDateReadable(d?: string) {
  if (!d) return '';
  try {
    const dt = new Date(d);
    return dt.toLocaleDateString('id-ID', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
  } catch {
    return d;
  }
}
function toKey(date: Date) {
  const y = date.getFullYear();
  const m = `${date.getMonth() + 1}`.padStart(2, '0');
  const d = `${date.getDate()}`.padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export default function ArsipAgendaPage(): React.ReactElement {
  const heroImage = '/mnt/data/cd6d93b8-76fb-4ae8-b1f0-81ea9a03a284.png'; // path file yang kamu upload

  // group agenda by date (key yyyy-mm-dd)
  const agendaByDate = useMemo(() => {
    const map: Record<string, any[]> = {};
    for (const a of allAgenda) {
      const d = new Date(a.date);
      if (isNaN(d.getTime())) continue;
      const k = toKey(d);
      if (!map[k]) map[k] = [];
      map[k].push(a);
    }
    return map;
  }, []);

  const today = new Date();
  const [visibleMonth, setVisibleMonth] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDateKey, setSelectedDateKey] = useState<string | null>(toKey(today));

  const calendar = useMemo(() => {
    const year = visibleMonth.getFullYear();
    const month = visibleMonth.getMonth();
    const first = new Date(year, month, 1);
    const startDay = first.getDay();
    const startOffset = (startDay + 6) % 7;
    const nextMonthFirst = new Date(year, month + 1, 1);
    const daysInMonth = Math.round((nextMonthFirst.getTime() - first.getTime()) / (24 * 3600 * 1000));

    const weeks: Array<Array<{ date: Date | null; key?: string }>> = [];
    let week: Array<{ date: Date | null; key?: string }> = [];

    for (let i = 0; i < startOffset; i++) week.push({ date: null });

    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d);
      week.push({ date, key: toKey(date) });
      if (week.length === 7) { weeks.push(week); week = []; }
    }
    while (week.length < 7) {
      week.push({ date: null });
      if (week.length === 7) { weeks.push(week); week = []; }
      if (week.length === 0) break;
    }
    return weeks;
  }, [visibleMonth]);

  const prevMonth = () => setVisibleMonth((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1));
  const nextMonth = () => setVisibleMonth((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1));

  // styles (inline)
  const wrapper: React.CSSProperties = { maxWidth: 1200, margin: '28px auto', padding: '0 20px' };
  const twoCol: React.CSSProperties = { display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'nowrap' };
  const leftCol: React.CSSProperties = { flex: '1 1 720px', minWidth: 320 };
  const rightCol: React.CSSProperties = { width: 360, flex: '0 0 360px' };
  const heroStyle: React.CSSProperties = { borderRadius: 16, overflow: 'hidden', padding: 18, color: '#fff', background: 'linear-gradient(90deg,#0c5fd6,#144bb0)', boxShadow: '0 12px 40px rgba(12,95,214,0.12)', marginBottom: 18 };
  const smallListCard: React.CSSProperties = { background: '#fff', borderRadius: 12, padding: 12, boxShadow: '0 8px 30px rgba(2,6,23,0.04)', marginBottom: 12 };
  const calBox: React.CSSProperties = { background: '#fff', borderRadius: 12, padding: 14, boxShadow: '0 8px 24px rgba(2,6,23,0.04)' };
  const weekdayNames = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
  const selectedEvents = selectedDateKey ? (agendaByDate[selectedDateKey] || []) : [];

  return (
    <PageLayout title="Arsip Agenda" breadcrumb="BERANDA > AGENDA" description="Daftar agenda dan kegiatan" heroImage={heroImage}>
      <main style={wrapper}>
        <h2 style={{ marginTop: 0 }}>Agenda</h2>

        <div style={twoCol}>
          <div style={leftCol}>
            <div style={heroStyle}>
              <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ color: 'rgba(255,255,255,0.9)', marginBottom: 6 }}>
                    {(() => {
                      const now = new Date();
                      const future = allAgenda
                        .map((a: any) => ({ ...a, d: new Date(a.date) }))
                        .filter((x: any) => x.d >= new Date(now.getFullYear(), now.getMonth(), now.getDate()))
                        .sort((a: any, b: any) => a.d - b.d);
                      if (future.length > 0) return formatDateReadable(future[0].date);
                      return 'Tidak ada agenda terdekat';
                    })()}
                  </div>

                  <h3 style={{ margin: '6px 0 12px', fontSize: 22 }}>Agenda Mendatang</h3>
                  <p style={{ margin: 0, opacity: 0.95 }}>Lihat agenda yang akan datang — klik tanggal pada kalender di kanan untuk menampilkan detail per-hari.</p>

                  <div style={{ marginTop: 14, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <button style={{ padding: '8px 12px', borderRadius: 12, background: 'rgba(255,255,255,0.12)', color: '#fff', border: 'none' }}>Agenda Offline</button>
                    <button style={{ padding: '8px 12px', borderRadius: 12, background: 'rgba(255,255,255,0.12)', color: '#fff', border: 'none' }}>Umum</button>
                  </div>
                </div>

                <div style={{ width: 180 }}>
                  {(() => {
                    const now = new Date();
                    const future = allAgenda
                      .map((a: any) => ({ ...a, d: new Date(a.date) }))
                      .filter((x: any) => x.d >= new Date(now.getFullYear(), now.getMonth(), now.getDate()))
                      .sort((a: any, b: any) => a.d - b.d);
                    if (future.length > 0) {
                      const n = future[0];
                      const diff = Math.max(0, new Date(n.date).getTime() - Date.now());
                      const days = Math.floor(diff / (24 * 3600 * 1000));
                      return (
                        <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.06)', padding: 12, borderRadius: 10 }}>
                          <div style={{ fontSize: 12, opacity: 0.9 }}>Dimulai dalam</div>
                          <div style={{ fontSize: 20, fontWeight: 700 }}>{String(days).padStart(2, '0')} <span style={{ fontSize: 12, fontWeight: 400 }}>hari</span></div>
                          <div style={{ marginTop: 6, fontSize: 13 }}>{formatDateReadable(n.date)}</div>
                        </div>
                      );
                    }
                    return <div style={{ textAlign: 'center', padding: 12, background: 'rgba(255,255,255,0.04)', borderRadius: 10 }}>Tidak ada agenda terdekat</div>;
                  })()}
                </div>
              </div>
            </div>

            <div style={{ marginTop: 18 }}>
              {(allAgenda || []).map((a: any, i: number) => (
                <div key={i} style={{ ...smallListCard, display: 'flex', gap: 16, alignItems: 'center' }}>
                  <div style={{ width: 64, textAlign: 'center', color: '#0c5fd6', fontWeight: 700 }}>
                    <div style={{ fontSize: 20 }}>{new Date(a.date).getDate()}</div>
                    <div style={{ fontSize: 12 }}>{new Date(a.date).toLocaleString('id-ID', { month: 'short' }).toUpperCase()}</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <a href={a.href} style={{ fontSize: 16, color: '#0b2540', fontWeight: 700, textDecoration: 'none' }}>{a.title}</a>
                    <div style={{ color: '#666', fontSize: 13 }}>{formatDateReadable(a.date)}</div>
                  </div>
                  <div style={{ minWidth: 120, textAlign: 'right' }}>
                    {a.location && <div style={{ fontSize: 13, color: '#6b7280' }}>{a.location}</div>}
                    <div style={{ marginTop: 8 }}>
                      {(a.tags || []).map((t: string, idx: number) => (
                        <span key={idx} style={{ display: 'inline-block', marginLeft: idx ? 6 : 0, padding: '6px 10px', background: '#eef6ff', color: '#0c5fd6', borderRadius: 8, fontSize: 12 }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside style={rightCol}>
            <div style={calBox}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <div style={{ fontWeight: 700 }}>{visibleMonth.toLocaleString('id-ID', { month: 'long', year: 'numeric' })}</div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button onClick={prevMonth} style={{ borderRadius: 8, padding: '6px 8px', border: '1px solid #eaeefb', background: '#fff' }}>‹</button>
                  <button onClick={nextMonth} style={{ borderRadius: 8, padding: '6px 8px', border: '1px solid #eaeefb', background: '#fff' }}>›</button>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 6, marginBottom: 6 }}>
                {weekdayNames.map((w) => <div key={w} style={{ textAlign: 'center', fontSize: 12, color: '#6b7280' }}>{w}</div>)}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 8 }}>
                {calendar.flat().map((cell, idx) => {
                  const isToday = cell.date ? toKey(cell.date) === toKey(new Date()) : false;
                  const k = cell.key || null;
                  const hasEvents = k ? !!agendaByDate[k] : false;
                  const isSelected = selectedDateKey === k;
                  return (
                    <button
                      key={idx}
                      onClick={() => { if (k) setSelectedDateKey(k); }}
                      disabled={!cell.date}
                      style={{
                        height: 64,
                        borderRadius: 8,
                        border: isSelected ? '2px solid #0c5fd6' : '1px solid #f0f3fb',
                        background: !cell.date ? 'transparent' : hasEvents ? (isSelected ? '#0c5fd6' : '#eef6ff') : (isToday ? '#fff3e0' : '#fff'),
                        color: isSelected ? '#000000ff' : '#0b2540',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: cell.date ? 'pointer' : 'default',
                        padding: 8,
                      }}
                    >
                      <div style={{ fontSize: 14, fontWeight: 700 }}>{cell.date ? cell.date.getDate() : ''}</div>
                      <div style={{ fontSize: 11, color: '#6b7280' }}>{hasEvents ? `${(agendaByDate[k!] || []).length} acara` : ''}</div>
                    </button>
                  );
                })}
              </div>

              <div style={{ display: 'flex', gap: 8, marginTop: 10, alignItems: 'center', fontSize: 12 }}>
                <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                  <span style={{ width: 12, height: 12, background: '#eef6ff', borderRadius: 4, display: 'inline-block' }} /> <span style={{ color: '#6b7280' }}>Ada agenda</span>
                </div>
                <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                  <span style={{ width: 12, height: 12, background: '#fff3e0', borderRadius: 4, display: 'inline-block' }} /> <span style={{ color: '#6b7280' }}>Hari ini</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 12, background: '#fff', borderRadius: 12, padding: 14, boxShadow: '0 8px 24px rgba(2,6,23,0.04)' }}>
              <div style={{ fontWeight: 700, marginBottom: 8 }}>{selectedDateKey ? formatDateReadable(selectedDateKey) : 'Pilih tanggal'}</div>
              {selectedEvents.length > 0 ? (
                selectedEvents.map((ev: any, i: number) => (
                  <div key={i} style={{ padding: 12, borderRadius: 10, background: '#f8fbff', marginBottom: 8 }}>
                    <div style={{ fontWeight: 700, color: '#0b2540' }}>{ev.title}</div>
                    {ev.location && <div style={{ color: '#6b7280', fontSize: 13 }}>{ev.location}</div>}
                    {ev.excerpt && <div style={{ marginTop: 6, color: '#444' }}>{ev.excerpt}</div>}
                    <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
                      <a href={ev.href} style={{ color: '#0c5fd6', textDecoration: 'none', fontWeight: 600 }}>Lihat detail</a>
                      {ev.tags && ev.tags.map((t: string, idx: number) => <span key={idx} style={{ padding: '4px 8px', background: '#eef6ff', color: '#0c5fd6', borderRadius: 8 }}>{t}</span>)}
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ color: '#6b7280' }}>Tidak ada agenda pada tanggal ini.</div>
              )}
            </div>
          </aside>
        </div>
      </main>
    </PageLayout>
  );
}