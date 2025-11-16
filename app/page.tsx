// app/page.tsx
import Link from 'next/link';
import NewsCard from '@/component/NewsCard';
import EdukasiCard from '@/component/EdukasiCard';
import HeroBanner from '@/component/HeroBanner';
import Footer from '@/component/footer';
import styles from './page.module.css';

// data dipisah ke file terpisah
import { newsData } from './data/newsData';
import { infoData } from './data/infoData';
import { edukasiData } from './data/edukasiData';

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
          <div className={styles.newsGrid}>
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

      {/* INFORMASI */}
      <section className={`${styles.contentSection} ${styles.infoSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Informasi</h2>
            <Link href="/arsip-informasi" className={styles.viewAllLink}>
              Lihat Semua Informasi &gt;
            </Link>
          </div>
          <div className={styles.newsGrid}>
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

      {/* EDUKASI PUBLIK */}
      <section className={`${styles.contentSection} ${styles.edukasiSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Edukasi Publik</h2>
            <Link href="/arsip-edukasi" className={styles.viewAllLink}>
              Lihat Semua Edukasi &gt;
            </Link>
          </div>
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

      {/* AGENDA */}
      <section className={`${styles.contentSection} ${styles.agendaSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Agenda</h2>
            <Link href="/arsip-agenda" className={styles.viewAllLink}>
              Lihat Semua Agenda &gt;
            </Link>
          </div>
          <div className={styles.sidebarCard}>
            <p>Belum ada agenda terdekat.</p>
          </div>
        </div>
        <Footer />
      </section>
    </main>
  );
}
