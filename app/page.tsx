// app/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import NewsCard from '@/app/component/card/NewsCard';
import HeroBanner from '@/app/component/HeroBanner';
import Footer from '@/app/component/footer';
import styles from './page.module.css';
import AccessibilitySidebar from '@/app/component/AccessibilitySidebar';
import NewsSidebar from '@/app/component/sidebar/News/NewsSidebar';

// data dipisah ke file terpisah
import { newsData } from './data/newsData';
import { infoData } from './data/infoData';
import { edukasiData } from './data/edukasiData';
import { agendaData } from './data/agendaData';

import DraggableCarousel from './component/DraggableCarousel';
import PosterCarousel from './component/PosterCarousel';
import Agenda from './component/agenda/Agenda';

// i18n
import { useLang } from './i18n/LanguageContext';

// --- TIPE DATA UNTUK EDUKASI ---
type EdukasiItem = {
  href?: string;
  imageUrl: string;
  altText?: string;
  title: string;
  type: string; // 'video' | 'artikel' | dll
};

export default function Home() {
  const { t } = useLang();

  const [activeTab, setActiveTab] = useState<'artikel' | 'video'>('artikel');
  const [searchTerm, setSearchTerm] = useState('');

  // pisah highlight dan list
  const highlightItem: EdukasiItem | null =
    edukasiData.length > 0 ? (edukasiData[0] as EdukasiItem) : null;
  const listItems: EdukasiItem[] = edukasiData.slice(1) as EdukasiItem[];

  const filteredList = listItems.filter((item) => {
    const matchesTab =
      activeTab === 'artikel' ? item.type !== 'video' : item.type === 'video';

    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesTab && matchesSearch;
  });

  // helper: buat link aman untuk news (kembalikan type + href)
  const makeNewsLink = (item: any): { type: 'internal' | 'external' | 'none'; href?: string } => {
    if (!item) return { type: 'none' };
    if (item.slug || item.id) {
      return { type: 'internal', href: `/pages/konten/arsip-berita/${item.slug || item.id}` };
    }
    if (item.href && typeof item.href === 'string' && item.href.startsWith('http')) {
      return { type: 'external', href: item.href };
    }
    // fallback: ke listing arsip
    return { type: 'internal', href: '/pages/konten/arsip-berita' };
  };

  // helper buat link info (sama logika)
  const makeInfoLink = (item: any): { type: 'internal' | 'external' | 'none'; href?: string } => {
    if (!item) return { type: 'none' };
    if (item.slug || item.id) {
      return { type: 'internal', href: `/pages/konten/arsip-informasi/${item.slug || item.id}` };
    }
    if (item.href && typeof item.href === 'string' && item.href.startsWith('http')) {
      return { type: 'external', href: item.href };
    }
    return { type: 'internal', href: '/pages/konten/arsip-informasi' };
  };

  return (
    <main className={styles.mainContainer}>
      {/* BANNER / HERO */}
      <HeroBanner />

      {/* BERITA TERBARU */}
      <section className={`${styles.contentSection} ${styles.infoSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{t('home.section.news')}</h2>
            <Link href="/pages/konten/arsip-berita" className={styles.newsViewAllLink}>
              {t('home.section.news.all')}
            </Link>
          </div>

          {/* 2 kolom: kiri swiper, kanan list */}
          <div className={styles.newsLayout}>
            {/* KIRI: Swiper / carousel */}
            <div className={styles.newsMain}>
              {/* Card besar sebagai background + shadow slider */}
              <div className={styles.newsCarouselCard}>
                <DraggableCarousel autoplayDelay={3000}>
                  {newsData.map((item) => {
                    const linkInfo = makeNewsLink(item);

                    // NOTE:
                    // NewsCard sekarang sudah menangani klik (internal/external)
                    // sehingga kita tidak perlu lagi membungkusnya dengan <a> yang menyebabkan nested anchors.

                    return (
                      <NewsCard
                        key={item.slug || item.id || item.title}
                        href={linkInfo.href}
                        imageUrl={item.imageUrl}
                        altText={item.altText || ''}
                        date={item.date}
                        title={item.title}
                        // jika link external, biarkan NewsCard membuka di tab baru (default)
                        openInNewTab={linkInfo.type === 'external'}
                      />
                    );
                  })}
                </DraggableCarousel>
              </div>
            </div>

            {/* KANAN: list seperti contoh (TERBARU / TERPOPULER) */}
            <NewsSidebar />
          </div>
        </div>
      </section>

      {/* Garis pemisah */}
      <hr className={styles.pemisahPanel} />

      <section className={styles.posterMarqueeSection}>
        <PosterCarousel>
          <img src="/flayer2.jpg" alt="Poster TIPIKOR" />
          <img src="/flayer1.jpg" alt="Poster Pengaduan" />
          <img src="/flayer3.jpg" alt="Poster Say No" />
          <img src="/flayer4.jpg" alt="Poster WASPADA" />
          <img src="/flayer5.png" alt="Poster Gempur" />
          <img src="/flayer9.png" alt="Poster Say No 2" />
          <img src="/flayer7.png" alt="Poster TIPIKOR 2" />
          <img src="/flayer8.png" alt="Poster Pengaduan 2" />
        </PosterCarousel>
      </section>

      {/* Garis pemisah */}
      <hr className={styles.pemisahPanel} />

      {/* INFORMASI */}
      <section className={`${styles.contentSection} ${styles.infoSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{t('home.section.info')}</h2>
            <Link href="/pages/konten/arsip-informasi" className={styles.newsViewAllLink}>
              {t('home.section.info.all')}
            </Link>
          </div>

          {/* Marquee dari Aldo */}
          <DraggableCarousel autoplayDelay={3000}>
            {infoData.map((item) => {
              const linkInfo = makeInfoLink(item);
              return (
                <NewsCard
                  key={(item as any).slug || (item as any).id || item.title}
                  href={linkInfo.href}
                  imageUrl={item.imageUrl}
                  altText={item.altText || ''}
                  date={item.date}
                  title={item.title}
                  openInNewTab={linkInfo.type === 'external'}
                />
              );
            })}
          </DraggableCarousel>
        </div>
      </section>

      {/* Garis pemisah */}
      <hr className={styles.pemisahPanel} />

      {/* EDUKASI PUBLIK (layout baru Aldo + i18n judul) */}
      <section className={`${styles.contentSection} ${styles.edukasiSection}`}>
        <div className={styles.container}>
          {/* Header (Judul dan Link "Lihat Semua") */}
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {t('home.section.education')}
            </h2>
            <Link href="/pages/konten/arsip-edukasi" className={styles.newsViewAllLink}>
              {t('home.section.education.all')}
            </Link>
          </div>

          {/* --- Pengecekan Data Edukasi secara keseluruhan --- */}
          {!highlightItem && filteredList.length === 0 ? (
            <div
              style={{
                padding: '2rem',
                textAlign: 'center',
                border: '1px dashed #ccc',
                borderRadius: '8px',
                color: '#666',
              }}
            >
              <p>Belum ada data edukasi publik untuk ditampilkan.</p>
            </div>
          ) : (
            // Jika ada data, tampilkan layout utama
            <div className={styles.edukasiLayout}>
              {/* 1. BAGIAN KIRI: HIGHLIGHT */}
              {highlightItem && (
                <div className={styles.edukasiHighlight}>
                  {/* gunakan anchor internal jika href ada, atau fallback ke external */}
                  {highlightItem.href ? (
                    <a href={highlightItem.href} className={styles.highlightCard}>
                      <img
                        src={highlightItem.imageUrl}
                        alt={highlightItem.altText || ''}
                        className={styles.highlightImage}
                      />
                      <div className={styles.highlightContent}>
                        <span className={styles.highlightTag}>
                          {highlightItem.type === 'video' ? 'Video' : 'Artikel'}
                        </span>
                        <h3>{highlightItem.title}</h3>
                      </div>
                    </a>
                  ) : (
                    <div className={styles.highlightCard}>
                      <img
                        src={highlightItem.imageUrl}
                        alt={highlightItem.altText || ''}
                        className={styles.highlightImage}
                      />
                      <div className={styles.highlightContent}>
                        <span className={styles.highlightTag}>
                          {highlightItem.type === 'video' ? 'Video' : 'Artikel'}
                        </span>
                        <h3>{highlightItem.title}</h3>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 2. BAGIAN KANAN: SIDEBAR (SEARCH, TABS, LIST) */}
              <div className={styles.edukasiSidebar}>
                {/* Search Bar */}
                <div className={styles.edukasiSearch}>
                  <input
                    type="text"
                    placeholder="Cari edukasi..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button type="button">Cari</button>
                </div>

                {/* Pilihan Tab */}
                <div className={styles.edukasiTabs}>
                  <button
                    type="button"
                    className={
                      activeTab === 'artikel' ? styles.activeTab : ''
                    }
                    onClick={() => setActiveTab('artikel')}
                  >
                    Artikel
                  </button>
                  <button
                    type="button"
                    className={activeTab === 'video' ? styles.activeTab : ''}
                    onClick={() => setActiveTab('video')}
                  >
                    Video
                  </button>
                </div>

                {/* Daftar Konten */}
                <div className={styles.edukasiList}>
                  {filteredList.length > 0 ? (
                    filteredList.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        className={styles.edukasiListItem}
                      >
                        <img src={item.imageUrl} alt={item.altText || ''} />
                        <div>
                          <h4>{item.title}</h4>
                          <span>{item.type}</span>
                        </div>
                      </a>
                    ))
                  ) : (
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: '#666',
                        padding: '1rem',
                      }}
                    >
                      Tidak ada konten {activeTab} yang cocok dengan pencarian
                      Anda.
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Garis pemisah */}
      <hr className={styles.pemisahPanel} />

      {/* AGENDA */}
      <section className={`${styles.contentSection} ${styles.agendaSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{t('home.section.agenda')}</h2>
            <Link href="/pages/konten/arsip-agenda" className={styles.newsViewAllLink}>
              Lihat Semua Agenda &gt;
            </Link>
          </div>

          <Agenda items={agendaData} />
        </div>
      </section>
      <AccessibilitySidebar />
      <Footer />
    </main>
  );
}
