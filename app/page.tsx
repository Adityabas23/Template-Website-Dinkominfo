// app/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import NewsCard from '@/app/component/card/NewsCard';
import HeroBanner from '@/app/component/HeroBanner';
import Footer from '@/app/component/footer';
import styles from './page.module.css';


// data dipisah ke file terpisah
import { newsData } from './data/newsData';
import { infoData } from './data/infoData';
import { edukasiData } from './data/edukasiData';
import DraggableCarousel from './component/DraggableCarousel';
import PosterCarousel from './component/PosterCarousel';
import Agenda from './component/Agenda';

// i18n
import { useLang } from './i18n/LanguageContext';

// --- TIPE DATA UNTUK EDUKASI ---
type EdukasiItem = {
  href: string;
  imageUrl: string;
  altText: string;
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
  // tambahkan di bawah import (sebelum deklarasi Home)
const agendaItems = [
  { id: 1, title: 'Sosialisasi Keamanan Siber', date: '2025-12-01', excerpt: 'Sosialisasi tentang pentingnya keamanan siber.' },
  { id: 2, title: 'Pelatihan Website Desa', date: '2025-12-05', excerpt: '' },
  { id: 3, title: 'Rapat Koordinasi', date: '2026-01-10', excerpt: '' },
];


  const filteredList = listItems.filter((item) => {
    const matchesTab =
      activeTab === 'artikel' ? item.type !== 'video' : item.type === 'video';

    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesTab && matchesSearch;
  });

  return (
    <main className={styles.mainContainer}>
      {/* BANNER / HERO */}
      <HeroBanner />
    
      {/* BERITA TERBARU */}
      <section className={`${styles.contentSection} ${styles.infoSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{t('home.section.news')}</h2>
            <Link href="/arsip-berita" className={styles.viewAllLink}>
              {t('home.section.news.all')}
            </Link>
          </div>

          {/* Marquee dari Aldo */}
          <DraggableCarousel autoplayDelay={3000}>
            {newsData.map((item) => (
              <NewsCard
                key={item.title}
                href={item.href}
                imageUrl={item.imageUrl}
                altText={item.altText}
                date={item.date}
                title={item.title}
              />
            ))}
          </DraggableCarousel>
        </div>
      </section>

      {/* Garis pemisah */}
      <hr className={styles.pemisahPanel} />

       <section className={styles.posterMarqueeSection}>
        <PosterCarousel>
          
          {/* --- SET 1 (Gambar Asli) --- */}
          <img src="/flayer2.jpg" alt="Poster TIPIKOR" />
          <img src="/flayer1.jpg" alt="Poster Pengaduan" />
          <img src="/flayer3.jpg" alt="Poster Say No" />

          {/* --- SET 2 (DUPLIKAT - Copy Paste di sini) --- */}
          {/* Ini WAJIB ada agar loop berjalan mulus tanpa berhenti */}
          <img src="/flayer4.jpg" alt="Poster WASPADA" />
          <img src="/flayer5.jpg" alt="Poster Gempur" />
          <img src="/flayer6.png" alt="Poster Say No" />

          {/* --- SET 3 (OPSIONAL - Tambahkan lagi agar makin aman) --- */}
          <img src="/flayer7.png" alt="Poster TIPIKOR" />
          <img src="/flayer8.jpg" alt="Poster Pengaduan" />
          <img src="/flayer2.jpg" alt="Poster Say No" />

        </PosterCarousel>
      </section>

      <hr className={styles.pemisahPanel} />

      {/* INFORMASI */}
      <section className={`${styles.contentSection} ${styles.infoSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{t('home.section.info')}</h2>
            <Link href="/arsip-informasi" className={styles.viewAllLink}>
              {t('home.section.info.all')}
            </Link>
          </div>

          {/* Marquee dari Aldo */}
          <DraggableCarousel autoplayDelay={3000}>
            {infoData.map((item) => (
              <NewsCard
                key={item.title}
                href={item.href}
                imageUrl={item.imageUrl}
                altText={item.altText}
                date={item.date}
                title={item.title}
              />
            ))}
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
            <Link href="/arsip-edukasi" className={styles.viewAllLink}>
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
                  <a
                    href={highlightItem.href}
                    className={styles.highlightCard}
                  >
                    <img
                      src={highlightItem.imageUrl}
                      alt={highlightItem.altText}
                      className={styles.highlightImage}
                    />
                    <div className={styles.highlightContent}>
                      <span className={styles.highlightTag}>
                        {highlightItem.type === 'video' ? 'Video' : 'Artikel'}
                      </span>
                      <h3>{highlightItem.title}</h3>
                    </div>
                  </a>
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
                        <img src={item.imageUrl} alt={item.altText} />
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

      {/* AGENDA */}
      <section className={`${styles.contentSection} ${styles.agendaSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{t('home.section.agenda')}</h2>
            <Link href="/arsip-agenda" className={styles.viewAllLink}>
              {t('home.section.agenda.all')}
            </Link>
          </div>

          {/* Ganti placeholder dengan komponen Agenda */}
          <Agenda items={agendaItems} />

        </div>
        <Footer />
      </section>
    </main>
  );
}
