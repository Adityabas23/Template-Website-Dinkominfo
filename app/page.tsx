'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

// Import Ikon dari React Icons
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaSearch, FaCloudSun, FaMapMarkerAlt, FaBolt, FaUniversalAccess, FaBookOpen, FaSmile, FaCalendarAlt, FaCalendar } from 'react-icons/fa';
import { RiTwitterXLine } from "react-icons/ri";

// Daftar teks yang ingin ditampilkan di search bar
const placeholders = [
  "Cari artikel, berita, atau layanan...",
  "Perizinan Online",
  "Info Pajak",
  "Lapor!",
  "PPID"
];

export default function Home() {
  // 1. Logika Jam & Tanggal Real-time
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // 2. Logika Animasi Placeholder (PERMINTAAN ANDA)
  const [placeholder, setPlaceholder] = useState(placeholders[0]);
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % placeholders.length;
      setPlaceholder(placeholders[index]);
    }, 3000); // Ganti teks setiap 3 detik

    return () => clearInterval(interval);
  }, []);

  // Format Jam (15.30)
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }).replace(':', '.');
  };

  // Format Tanggal (KAMIS, 13 NOVEMBER 2025)
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).toUpperCase();
  };

  // Cegah error hydration (tampilan beda server vs client)
  if (!time) return null; 

  return (
    <main className={styles.mainContainer}>
      {/* === HERO SECTION (BACKGROUND GAMBAR) === */}
      <section className={styles.hero}>
        {/* Overlay Gelap supaya tulisan terbaca */}
        <div className={styles.heroOverlay}></div>

        {/* KONTEN UTAMA */}
        <div className={styles.contentWrapper}>
          
          {/* 1. SIDEBAR SOSMED (KIRI MENGAMBANG) */}
          <div className={styles.socialSidebar}>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><RiTwitterXLine /></a>
            <a href="#"><FaYoutube /></a>
          </div>

          {/* 2. TEXT TENGAH/KIRI */}
          <div className={styles.leftContent}>
            <h1 className={styles.heroTitle}>
              Menjawab kebutuhan Informasi <br /> Warga Banyumas
            </h1>
            <p className={styles.heroSubtitle}>
              Temukan informasi publik terkini dari Pemerintahan Kabupaten Banyumas.
            </p>

            {/* Search Bar dengan Animasi Placeholder */}
            <div className={styles.searchBox}>
              <input 
                type="text" 
                placeholder={placeholder} // Gunakan state placeholder
                key={placeholder} // Trik agar animasi CSS di placeholder jalan
                className={styles.animatedPlaceholder} 
              />
              <button>Cari</button>
            </div>

            {/* Tags Populer (Sudah di-duplikat untuk animasi) */}
            <div className={styles.popularTags}>
              <span>Pencarian Populer di Banyumas</span>
              <div className={styles.tagsList}>
                <a href="#">Perizinan Online</a>
                <a href="#">Info Pajak</a>
                <a href="#">Lapor!</a>
                <a href="#">PPID</a>
                {/* Duplikat untuk animasi scroll mulus */}
                <a href="#">Berita Terbaru</a>
                <a href="#">Lowongan Kerja</a>
                <a href="#">Cetak Kartu Kuning</a>
                <a href="#">Pengumuman Hari Ini</a>
              </div>
            </div>
          </div>

          {/* 3. WIDGET BERITA & JAM (KANAN) */}
          <div className={styles.rightWidget}>
            {/* Header Widget: Hari & Jam */}
            <div className={styles.widgetHeader}>
              <div className={styles.widgetDateInfo}>
                <span className={styles.labelToday}>HARI INI</span>
                <span className={styles.textDate}>{formatDate(time)}</span>
                <span className={styles.textLoc}><FaMapMarkerAlt /> PURWOKERTO</span>
              </div>
              <div className={styles.widgetTimeInfo}>
                <div className={styles.weather}><FaCloudSun /> 21°C</div>
                <div className={styles.bigClock}>{formatTime(time)}</div>
              </div>
            </div>

            {/* Body Widget: Kartu Berita */}
            <div className={`${styles.newsCard} ${styles.group}`}>
              <div className={styles.newsImageWrapper}>
                  <Image 
                    src="/berita1.jpg" // Ganti dengan gambar berita Anda
                    alt="Berita Terkini"
                    width={400}
                    height={250}
                    className={styles.newsImage}
                  />
                  <div className={styles.newsOverlay}>
                    <span className={styles.newsCategory}>PEMERINTAHAN</span>
                    <h3 className={styles.newsTitle}>Dinkominfo Gelar Forum Konsultasi : Indeks SPBE Banyumas Tembus 4,09 (Sangat Baik)</h3>
                    <div className={styles.newsMeta}>
                      <span><FaMapMarkerAlt /> Purwokerto</span> • <span><FaCalendar/> Kamis, 20 Oktober 2025</span>
                    </div>
                  </div>
              </div>
            </div>

            {/* Footer Widget: Tombol */}
            <button className={styles.btnMoreNews}>Lihat Berita Lainnya</button>
          </div>

          {/* 4. WAVE IMAGE (Akan kita sembunyikan di HP) */}
          <div className={styles.waveContainer}>
            <Image 
              src="/wave-bg.png" // Pastikan ada /wave-bg.png di folder public
              alt="Wave Background" 
              width={1920} 
              height={300} 
              className={styles.waveImage}
              priority
            />
          </div>

          {/* 5. SIDEBAR AKSESIBILITAS (KANAN MENGAMBANG) */}
          <div className={styles.accessSidebar}>
            <button className={styles.accessBtn}><FaSmile /></button>
            <button className={styles.accessBtn}><FaBookOpen /></button>
            <button className={styles.accessBtn}><FaBolt /></button>
            <button className={styles.accessBtn}><FaUniversalAccess /></button>
          </div>

        </div>
      </section>
    </main>
  );
}