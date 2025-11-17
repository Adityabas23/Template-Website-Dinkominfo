// app/page.tsx
import Link from 'next/link';
import NewsCard from '@/component/NewsCard';
import EdukasiCard from '@/component/EdukasiCard';
import HeroBanner from '@/component/HeroBanner';
import Footer from '@/component/footer';
import styles from './page.module.css';
import { useState } from 'react';

// data dipisah ke file terpisah
import { newsData } from './data/newsData';
import { infoData } from './data/infoData';
import { edukasiData } from './data/edukasiData';

// --- IMPORT KOMPONEN BARU KITA ---
import Marquee from '@/component/Marquee';

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      {/* BANNER / HERO DIPISAH KE KOMPONEN SENDIRI */}
      <HeroBanner />

      {/* BERITA TERBARU */}
      <section className={`${styles.contentSection} ${styles.infoSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Berita Terbaru</h2>
            <Link href="/arsip-berita" className={styles.viewAllLink}>
              Lihat Semua Berita &gt;
            </Link>
          </div>
          
          {/* --- GANTI BAGIAN INI --- */}
          {/* Hapus div className={styles.newsGrid} */}
          <Marquee duration="40s"> {/* Atur kecepatan di sini */}
            {newsData.map((item) => (
              <NewsCard
                key={item.title} // Key tetap di sini
                href={item.href}
                imageUrl={item.imageUrl}
                altText={item.altText}
                date={item.date}
                title={item.title}
              />
            ))}
          </Marquee>
          {/* --- BATAS AKHIR REVISI --- */}

        </div>
      </section>

      {/* --- TAMBAHKAN GARIS PEMISAH DI SINI --- */}
      <hr className={styles.pemisahPanel} />

      {/* INFORMASI */}
      <section className={`${styles.contentSection} ${styles.infoSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Informasi</h2>
            <Link href="/arsip-informasi" className={styles.viewAllLink}>
              Lihat Semua Informasi &gt;
            </Link>
          </div>
          
          {/* --- GANTI BAGIAN INI JUGA --- */}
          {/* Hapus div className={styles.newsGrid} */}
          <Marquee duration="30s"> {/* Kecepatan bisa beda */}
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
          </Marquee>
          {/* --- BATAS AKHIR REVISI --- */}

        </div>
      </section>
      
      {/* --- TAMBAHKAN GARIS PEMISAH DI SINI --- */}
      <hr className={styles.pemisahPanel} />

      {/* EDUKASI PUBLIK (Biarkan ini tetap grid, tidak scroll) */}
      <section className={`${styles.contentSection} ${styles.edukasiSection}`}>
        <div className={styles.container}>

          {/* Header (Judul dan Link "Lihat Semua") */}
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Edukasi Publik</h2>
            <Link href="/arsip-edukasi" className={styles.viewAllLink}>
              Lihat Semua Edukasi &gt;
            </Link>
          </div>

          {/* --- Pengecekan Data Edukasi secara keseluruhan --- */}
          {/* Jika tidak ada data highlight atau daftar, tampilkan pesan */}
          {(!highlightItem && filteredList.length === 0) ? (
            <div style={{ padding: '2rem', textAlign: 'center', border: '1px dashed #ccc', borderRadius: '8px', color: '#666' }}>
              <p>Belum ada data edukasi publik untuk ditampilkan.</p>
            </div>
          ) : (
            // Jika ada data, tampilkan layout utama
            <div className={styles.edukasiLayout}>

              {/* --- 1. BAGIAN KIRI: HIGHLIGHT --- */}
              {highlightItem && ( // Tampilkan highlight hanya jika ada item
                <div className={styles.edukasiHighlight}>
                  <a href={highlightItem.href} className={styles.highlightCard}>
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

              {/* --- 2. BAGIAN KANAN: SIDEBAR (SEARCH, TABS, LIST) --- */}
              <div className={styles.edukasiSidebar}>

                {/* Search Bar */}
                <div className={styles.edukasiSearch}>
                  <input
                    type="text"
                    placeholder="Cari edukasi..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button>Cari</button>
                </div>

                {/* Pilihan Tab (Artikel / Video) */}
                <div className={styles.edukasiTabs}>
                  <button
                    className={activeTab === 'artikel' ? styles.activeTab : ''}
                    onClick={() => setActiveTab('artikel')}
                  >
                    Artikel
                  </button>
                  <button
                    className={activeTab === 'video' ? styles.activeTab : ''}
                    onClick={() => setActiveTab('video')}
                  >
                    Video
                  </button>
                </div>

                {/* Daftar Konten Sesuai Tab dan Pencarian */}
                <div className={styles.edukasiList}>
                  {filteredList.length > 0 ? (
                    filteredList.map((item) => (
                      <a key={item.title} href={item.href} className={styles.edukasiListItem}>
                        <img src={item.imageUrl} alt={item.altText} />
                        <div>
                          <h4>{item.title}</h4>
                          <span>{item.type}</span> 
                        </div>
                      </a>
                    ))
                  ) : (
                    <p style={{ fontSize: '0.9rem', color: '#666', padding: '1rem' }}>
                      Tidak ada konten {activeTab} yang cocok dengan pencarian Anda.
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
        {/* ... sisa kode Anda ... */}
        <Footer />
      </section>
    </main>
  );
}