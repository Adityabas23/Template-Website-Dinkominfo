// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

// Import Ikon dari React Icons
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaSearch, FaCloudSun, FaMapMarkerAlt, FaBolt, FaUniversalAccess, FaBookOpen, FaSmile } from 'react-icons/fa'; // FaTwitter untuk 'X' sementara
import { RiTwitterXLine } from "react-icons/ri"; // Khusus logo X baru

export default function Home() {
  // 1. Logika Jam & Tanggal Real-time
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
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
      
      {/* === NAVBAR ATAS === */}
      <header className={styles.navbar}>
        <div className={styles.logoArea}>
          <Image src="/logobmy.png" alt="Logo" width={40} height={40} className={styles.logoImg} /> 
          {/* Ganti src dengan logo banyumas jika ada, atau hapus Image jika belum ada */}
          <div className={styles.logoText}>
            <span>Dinas Komunikasi dan Informatika</span>
            <strong>Pemerintah Kabupaten Banyumas</strong>
          </div>
        </div>

        <nav className={styles.navLinks}>
          <Link href="#">Beranda</Link>
          <Link href="#">Profil</Link>
          <Link href="#">PPID</Link>
          <Link href="#">Menu Publik</Link>
          <Link href="#">Data Pegawai</Link>
          <Link href="#">Download</Link>
          <Link href="#">F.A.Q</Link>
        </nav>

        <div className={styles.langButton}>ID</div>
      </header>

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

            {/* Search Bar */}
            <div className={styles.searchBox}>
              <input type="text" placeholder="Cari artikel, berita, atau layanan..." />
              <button>Cari</button>
            </div>

            {/* Tags Populer */}
            <div className={styles.popularTags}>
              <span>Pencarian Populer di Banyumas</span>
              <div className={styles.tagsList}>
                <a href="#">Perizinan Online</a>
                <a href="#">Info Pajak</a>
                <a href="#">Lapor!</a>
                <a href="#">PPID</a>
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
            <div className={styles.newsCard}>
              <div className={styles.newsImageWrapper}>
                <Image 
                  src="/news.jpg" // Pastikan ada file news.jpg di folder public
                  alt="Berita Terkini"
                  width={400}
                  height={250}
                  className={styles.newsImage}
                />
                <div className={styles.newsOverlay}>
                  <span className={styles.newsCategory}>PEMERINTAHAN</span>
                  <h3 className={styles.newsTitle}>Dinkominfo Gelar Forum Konsultasi : Indeks SPBE Banyumas Tembus 4,09 (Sangat Baik)</h3>
                  <div className={styles.newsMeta}>
                    <span>Purwokerto</span> • <span>Kamis, 20 Oktober 2025</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Widget: Tombol */}
            <button className={styles.btnMoreNews}>Lihat Berita Lainnya</button>
          </div>

          {/* 4. SIDEBAR AKSESIBILITAS (KANAN MENGAMBANG) */}
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

      {/* CONTENT */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <article className={styles.mainContent}>
              <Image
                src="/berita1.jpg"
                alt="Berita Utama"
                width={800}
                height={500}
                className={styles.mainImage}
                priority
              />
              <h1 className={styles.mainTitle}>
                Dinkominfo Gandeng Kepala Pasar se-Kabupaten Banyumas dalam Kampanye "Gempur Rokok Ilegal"
              </h1>
              <p className={styles.postMeta}>
                Diposting pada <time dateTime="2025-11-12">12 November 2025</time> - Kategori: Berita
              </p>
              <div className={styles.articleBody}>
                <p>
                  BANYUMAS – Pemerintah Kabupaten Banyumas, melalui instansi terkait seperti Dinas Komunikasi dan Informatika (Dinkominfo)...
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </article>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Berita Lainnya</h3>
                <ul className={styles.newsList}>
                  <li>
                    <Link href="#">
                      <Image src="https://placehold.co/100x70/cccccc/333333?text=Foto" width={100} height={70} alt="Berita 1" />
                      <span>Sosialisasi Aplikasi SIBERKAB di Kecamatan...</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Image src="https://placehold.co/100x70/cccccc/333333?text=Foto" width={100} height={70} alt="Berita 2" />
                      <span>Rapat Koordinasi Persiapan Implementasi Tanda Tangan...</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Image src="https://placehold.co/100x70/cccccc/333333?text=Foto" width={100} height={70} alt="Berita 3" />
                      <span>Pelatihan Keamanan Informasi untuk Admin OPD...</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className={styles.sidebarCard}>
                <h3>Agenda</h3>
                <p>Belum ada agenda terdekat.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}