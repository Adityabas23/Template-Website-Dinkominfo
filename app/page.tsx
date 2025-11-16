// app/page.tsx
'use client';

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
import { useLang } from './i18n/LanguageContext';

export default function Home() {
  const { t } = useLang();

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
            <h2 className={styles.sectionTitle}>{t('home.section.info')}</h2>
            <Link href="/arsip-informasi" className={styles.viewAllLink}>
              {t('home.section.info.all')}
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
            <h2 className={styles.sectionTitle}>
              {t('home.section.education')}
            </h2>
            <Link href="/arsip-edukasi" className={styles.viewAllLink}>
              {t('home.section.education.all')}
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
            <h2 className={styles.sectionTitle}>{t('home.section.agenda')}</h2>
            <Link href="/arsip-agenda" className={styles.viewAllLink}>
              {t('home.section.agenda.all')}
            </Link>
          </div>
          <div className={styles.sidebarCard}>
            <p>{t('home.section.agenda.empty')}</p>
          </div>
        </div>
        <Footer />
      </section>
    </main>
  );
}
