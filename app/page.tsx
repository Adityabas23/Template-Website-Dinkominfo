// app/page.tsx

'use client'; // WAJIB ADA: Karena Anda menggunakan useState
import { useState } from 'react'; // WAJIB ADA: Untuk state
import Link from 'next/link';
import NewsCard from '@/component/NewsCard';
// EdukasiCard tidak dipakai di layout baru, jadi bisa kita komentari
// import EdukasiCard from '@/component/EdukasiCard'; 
import HeroBanner from '@/component/HeroBanner';
import Footer from '@/component/footer';
import styles from './page.module.css';

// data dipisah ke file terpisah
import { newsData } from './data/newsData';
import { infoData } from './data/infoData';
import { edukasiData } from './data/edukasiData';

// --- IMPORT KOMPONEN BARU KITA ---
import Marquee from '@/component/Marquee';

// --- DEFINISIKAN TIPE DATA (Untuk memperbaiki error 'any' type) ---
type EdukasiItem = {
  href: string;
  imageUrl: string;
  altText: string;
  title: string;
  type: string;
};

export default function Home() {
  
  // --- INI ADALAH BLOK LOGIKA YANG HILANG ---
  const [activeTab, setActiveTab] = useState('artikel');
  const [searchTerm, setSearchTerm] = useState('');

  // Beri tipe data agar TypeScript tidak error
  const highlightItem: EdukasiItem | null = edukasiData.length > 0 ? edukasiData[0] : null;
  const listItems: EdukasiItem[] = edukasiData.slice(1);

  // Beri tipe 'item' di sini
  const filteredList = listItems.filter((item: EdukasiItem) => {
    const matchesTab = activeTab === 'artikel'
      ? item.type !== 'video' // Tampilkan apapun yang BUKAN video
      : item.type === 'video'; // Tampilkan HANYA video

    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesTab && matchesSearch;
  });
  // --- BATAS AKHIR BLOK LOGIKA ---


  return ( // JSX Anda dimulai setelah semua logika
    <main className={styles.mainContainer}>
      {/* BANNER / HERO DIPISAH KE KOMPONEN SENDIRI */}
      <HeroBanner />

      {/* BERITA TERBARU (Biarkan seperti ini) */}
      <section className={`${styles.contentSection} ${styles.infoSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Berita Terbaru</h2>
            <Link href="/arsip-berita" className={styles.viewAllLink}>
              Lihat Semua Berita &gt;
            </Link>
          </div>
          <Marquee duration="40s"> 
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
          </Marquee>
        </div>
      </section>

      {/* --- GARIS PEMISAH --- */}
      <hr className={styles.pemisahPanel} />

      {/* INFORMASI (Biarkan seperti ini) */}
      <section className={`${styles.contentSection} ${styles.infoSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Informasi</h2>
            <Link href="/arsip-informasi" className={styles.viewAllLink}>
              Lihat Semua Informasi &gt;
            </Link>
          </div>
          <Marquee duration="30s"> 
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
        </div>
      </section>
      
      {/* --- GARIS PEMISAH --- */}
      <hr className={styles.pemisahPanel} />

      {/* EDUKASI PUBLIK (Ini bagian yang kita ubah) */}
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

                {/* Pilihan Tab */}
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
_                 </button>
                </div>

                {/* Daftar Konten */}
                <div className={styles.edukasiList}>
                  {filteredList.length > 0 ? (
                    filteredList.map((item: EdukasiItem) => (
                      <a key={item.title} href={item.href} className={styles.edukasiListItem}>
                        <img src={item.imageUrl} alt={item.altText} />
                        <div>
                          <h4>{item.title}</h4>
t                         <span>{item.type}</span> 
                        </div>
        _             </a>
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
        <h2>Agenda</h2>
        <Link href="/arsip-agenda" className={styles.viewAllLink}>
          Lihat Semua Agenda &gt;
        </Link>
        <div className={styles.sidebarCard}>
          <p>Belum ada agenda terdekat.</p>
        </div>
        <Footer />
    _ </section>
    </main>
  );
}