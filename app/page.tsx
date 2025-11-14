// app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import NewsCard from '@/component/NewsCard';
import EdukasiCard from '@/component/EdukasiCard';
import { FaPlay } from 'react-icons/fa';

export default function HomePage() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('id-ID', {
      weekday: 'long',
    });
  };

  const formatDMY = (date: Date) => {
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const newsData = [
    {
      href: 'http://dinkominfo.banyumaskab.go.id/read/54027/dinkominfo-gelar-forum-konsultasi-indeks-spbe-banyumas-tembus-409-sangat-baik',
      imageUrl: '/berita1.jpg',
      altText: 'Kampanye Gempur Rokok Ilegal',
      date: '12 November 2025',
      title: 'Dinkominfo Gandeng Kepala Pasar se-Kabupaten Banyumas dalam Kampanye "Gempur Rokok Ilegal"',
    },
    {
      href: 'http://dinkominfo.banyumaskab.go.id/read/53938/ppid-banyumas-siap-sandang-predikat-badan-publik-informatif',
      imageUrl: '/berita2.png',
      altText: 'Sosialisasi SIBERKAB',
      date: '11 November 2025',
      title: 'Sosialisasi Aplikasi SIBERKAB di Kecamatan Purwokerto Selatan',
    },
    {
      href: 'http://dinkominfo.banyumaskab.go.id/read/53899/dinkominfo-gandeng-kepala-pasar-se-kabupaten-banyumas-dalam-kampanye-gempur-rokok-ilegal',
      imageUrl: '/berita3.png',
      altText: 'Rapat Tanda Tangan Elektronik',
      date: '10 November 2025',
      title: 'Rapat Koordinasi Persiapan Implementasi Tanda Tangan Elektronik (TTE)',
    },
    {
      href: 'http://dinkominfo.banyumaskab.go.id/read/53779/dorong-daya-saing-lokal-dinkominfo-banyumas-gelar-sosialisasi-strategi-digital-marketing',
      imageUrl: '/berita4.png',
      altText: 'Pelatihan Keamanan Informasi',
      date: '09 November 2025',
      title: 'Pelatihan Keamanan Informasi untuk Admin OPD di Lingkungan Pemkab Banyumas',
    },
  ];

  const infoData = [
    {
      href: 'http://dinkominfo.banyumaskab.go.id/read/52976/survei-kepuasan-masyarakat-terhadap-layanan-dinas-kominfo-tahun-2025', 
      imageUrl: '/info1.png',
      altText: ' Survei kepuasan masyarakat',
      date: 'Selasa, 29 Juli 2025',
      title: 'Survei kepuasan masyarakat terhadap layanan Dinas Kominfo Tahun 2025',
    },
    {
      href: 'http://dinkominfo.banyumaskab.go.id/read/52515/simpan-mas-inovasi-pengelolaan-pengetahuan-asn-untuk-mendukung-spbe-kabupaten-banyumas', 
      imageUrl: '/info2.png',
      altText: 'SIMPAN MAS',
      date: 'Kamis, 14 April 2022',
      title: 'SIMPAN MAS: Inovasi Pengelolaan Pengetahuan ASN untuk Mendukung SPBE Kabupaten Banyumas',
    },
    {
      href: 'http://dinkominfo.banyumaskab.go.id/read/37173/uji-konsekuensi-tahap-ii', 
      imageUrl: '/info3.png',
      altText: 'Himbauan Malware',
      date: 'Kamis, 14 April 2022',
      title: 'Uji Konsekuensi Tahap II',
    },
    {
      href: 'http://dinkominfo.banyumaskab.go.id/read/20839/himbauan-agar-segera-melakukan-tindakan-pencegahan-terhadap-ancaman-malware-khususnya-ransomware-jenis-wannacry', 
      imageUrl: '/info4.png',
      altText: 'Himbauan Malware',
      date: 'Senin, 15 Mei 2017',
      title: 'Himbauan Agar Segera Melakukan Tindakan Pencegahan Terhadap Ancaman Malware Khususnya Ransomware Jenis WannaCRY',
    },
  ];

  const edukasiData = [
    {
      href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Link ke YouTube
      imageUrl: 'https://placehold.co/600x400/000000/ffffff?text=Video+1',
      altText: 'Video Edukasi 1',
      title: 'Contoh Judul Video Edukasi tentang Keamanan Siber',
      type: 'video', // Tipe 'video'
    },
    {
      href: '/edukasi/poster-hoax', // Link internal
      imageUrl: 'https://placehold.co/600x400/eeeeee/333333?text=Poster+Anti-Hoax',
      altText: 'Poster Anti-Hoax',
      title: 'Infografis: Cara Mengenali Berita Hoax',
      type: 'image', // Tipe 'image'
    },
    {
      href: 'https://www.youtube.com/watch?v=another-video', // Link ke YouTube
      imageUrl: 'https://placehold.co/600x400/333333/ffffff?text=Video+2',
      altText: 'Video Edukasi 2',
      title: 'Tutorial Penggunaan Aplikasi Layanan Publik',
      type: 'video', // Tipe 'video'
    },
  ]as const;

  const dayName = currentTime.toLocaleDateString('id-ID', { weekday: 'long' });

  return (
    <>
      {/* HERO — MULAI LANGSUNG DARI ATAS */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContent}>
          {/* TEXT KIRI */}
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Menjawab Kebutuhan Informasi Warga Banyumas
            </h1>
            <p className={styles.heroSubtitle}>
              Temukan informasi publik terkini dari Pemerintah Kabupaten Banyumas.
            </p>
          </div>

          {/* ROW: SEARCH (KIRI) + JAM (KANAN) */}
          <div className={styles.heroRow}>
            {/* KIRI: SEARCH TRANSPARAN */}
            <div className={styles.heroSearchContainer}>
              <form className={styles.heroSearch}>
                <input type="text" placeholder="Cari artikel, berita, atau layanan..." />
                <button type="submit">Cari</button>
              </form>
            </div>

            {/* KANAN: WIDGET JAM DIGITAL */}
            <div className={`${styles.dateTimeWidget} ${styles.visible}`}>
              <div className={styles.time}>{formatTime(currentTime)}</div>
              <div className={styles.day}>Hari Ini</div>
              <div className={styles.date}>{formatDate(currentTime)}</div>
              <div className={styles.dmy}>{formatDMY(currentTime)}</div>
              
            </div>
          </div>

          {/* LAYANAN UNGGULAN */}
          <div className={styles.heroWidget}>
            <strong>Layanan Publik Unggulan:</strong>
            <div className={styles.widgetLinks}>
              <Link href="#">Perizinan Online</Link>
              <Link href="#">Info Pajak</Link>
              <Link href="#">Lapor!</Link>
              <Link href="#">PPID</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
    
      {/* Layout Grid Berita */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          
          {/* Judul Section */}
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Berita Terbaru</h2>
            <Link href="/arsip-berita" className={styles.viewAllLink}>
              Lihat Semua Berita &gt;
            </Link>
          </div>

          {/* Grid Berita */}
          <div className={styles.newsGrid}>
            {/* Looping data berita dan render sebagai kartu */}
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
          </div>

        </div>
      </section>

      {/* Layout Grid Berita */}
      <section className={`${styles.contentSection} ${styles.infoSection}`}>
        <div className={styles.container}>
          
          {/* Judul Section */}
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Informasi</h2>
            <Link href="/arsip-informasi" className={styles.viewAllLink}>
              Lihat Semua Informasi &gt;
            </Link>
          </div>

          {/* Grid Informasi (menggunakan style .newsGrid yang sama) */}
          <div className={styles.newsGrid}>
            {/* Looping data informasi dan render sebagai kartu */}
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
          </div>

        </div>
      </section>

      <section className={`${styles.contentSection} ${styles.edukasiSection}`}>
        <div className={styles.container}>
          
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Edukasi Publik</h2>
            <Link href="/arsip-edukasi" className={styles.viewAllLink}>
              Lihat Semua Edukasi &gt;
            </Link>
          </div>

          {/* Grid Edukasi (style grid baru) */}
          <div className={styles.edukasiGrid}>
            {edukasiData.map((item) => (
              <EdukasiCard
                key={item.title}
                href={item.href}
                imageUrl={item.imageUrl}
                altText={item.altText}
                title={item.title}
                type={item.type}
              />
            ))}
          </div>

        </div>
      </section>
      
      {/* Section untuk AGENDA (dipisah dari sidebar) */}
      <section className={`${styles.contentSection} ${styles.agendaSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Agenda</h2>
            <Link href="/arsip-agenda" className={styles.viewAllLink}>
              Lihat Semua Agenda &gt;
            </Link>
          </div>
          {/* Kita tetap gunakan style .sidebarCard lama Anda untuk konsistensi */}
          <div className={styles.sidebarCard}>
            <p>Belum ada agenda terdekat.</p>
          </div>
        </div>
      </section>
      {/* === AKHIR BAGIAN CONTENT (BARU) === */}
    </>
  );
}