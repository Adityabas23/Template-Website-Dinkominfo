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

              <div className={styles.sidebarCard}>
                <h3>Agenda</h3>
                <p>Belum ada agenda terdekat.</p>
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
            </aside>
          </div>

        </div>
      </section>
    </main>
  );
}