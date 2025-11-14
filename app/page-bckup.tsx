// app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

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