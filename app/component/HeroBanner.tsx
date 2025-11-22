// app/component/HeroBanner.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AccessibilitySidebar from '@/app/component/AccessibilitySidebar';

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaCloudSun,
  FaMapMarkerAlt,
  FaCalendar,
} from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';

import styles from '@/app/page.module.css';
import { newsData } from '@/app/data/newsData';
import { useLang } from '@/app/i18n/LanguageContext';
import type { Lang, MessageKey } from '@/app/i18n/messages';

type WeatherData = {
  location: string;
  temperature: number;
  description: string;
  source?: string;
  rawCode?: string | null;
};

// placeholder pakai key i18n
const placeholderKeys: MessageKey[] = [
  'hero.placeholder.search',
  'hero.placeholder.perizinan',
  'hero.placeholder.pajak',
  'hero.placeholder.lapor',
  'hero.placeholder.ppid',
];

export default function HeroBanner() {
  const tagsContainerRef = useRef<HTMLDivElement>(null);

  const { lang, t } = useLang();
  // jam/tanggal
  const [time, setTime] = useState<Date | null>(null);
  // placeholder search (pakai index)
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  // ujung scroll tags
  const [isAtEnd, setIsAtEnd] = useState(false);
  // cuaca BMKG
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [showTemp, setShowTemp] = useState(true);

  // daftar gambar banner
  const bannerImages = ['/bannerfix.png', '/banner.jpg', '/berita3.png'];
  const [bannerIndex, setBannerIndex] = useState(0);
  const [isTransitioningBg, setIsTransitioningBg] = useState(false);

  // index berita yang tampil di widget kanan
  const [activeNewsIndex, setActiveNewsIndex] = useState(0);
  // efek transisi halus kartu berita
  const [isNewsTransitioning, setIsNewsTransitioning] = useState(false);

  /* 1. JAM REALTIME */
  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  /* 2. ANIMASI PLACEHOLDER (pakai key) */
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % placeholderKeys.length;
      setPlaceholderIndex(index);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentPlaceholder = t(placeholderKeys[placeholderIndex]);

  /* 3. SCROLL TAGS HORIZONTAL */
  useEffect(() => {
    const container = tagsContainerRef.current;
    if (!container) return;

    const updateEdge = () => {
      const atEnd =
        Math.ceil(container.scrollLeft + container.clientWidth) >=
        container.scrollWidth;
      setIsAtEnd(atEnd);
    };

    updateEdge();

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      container.scrollLeft += e.deltaY;
      updateEdge();
    };

    const handleScroll = () => updateEdge();

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* 4. AMBIL CUACA DARI /api/cuaca (BMKG) */
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch('/api/cuaca', { cache: 'no-store' });
        if (!res.ok) throw new Error('Gagal fetch cuaca');
        const data = (await res.json()) as WeatherData;
        setWeather(data);
      } catch (err) {
        console.error('Gagal mengambil data cuaca:', err);
      }
    };

    fetchWeather();
  }, []);

  /* 5. TOGGLE SUHU <-> DESKRIPSI */
  useEffect(() => {
    if (!weather) return;
    const interval = setInterval(() => {
      setShowTemp((prev) => !prev);
    }, 8000);
    return () => clearInterval(interval);
  }, [weather]);

  /* 6. SLIDESHOW BACKGROUND (FADE + BLUR) */
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioningBg(true);

      setTimeout(() => {
        setBannerIndex((prev) => (prev + 1) % bannerImages.length);
        setIsTransitioningBg(false);
      }, 400);
    }, 10000); // ganti tiap 10 detik

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  /* 7. FORMAT WAKTU & TGL */
  const formatTime = (date: Date) =>
    date
      .toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
      .replace(':', '.');

  const formatDate = (date: Date, lang: Lang) => {
    const locale = lang === 'id' ? 'id-ID' : 'en-US';

    const formatted = date.toLocaleDateString(locale, {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    // Biar Indonesia tetap UPPERCASE, Inggris tetap normal
    return lang === 'id' ? formatted.toUpperCase() : formatted;
  };

  const displayTime = time ?? new Date();
  const locationLabel = (weather?.location || 'Purwokerto').toUpperCase();

  /* 8. ROTASI BERITA DI WIDGET KANAN (dengan fade) */
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const intervalId = setInterval(() => {
      setIsNewsTransitioning(true); // fade-out

      timeoutId = setTimeout(() => {
        setActiveNewsIndex((prev) => (prev + 1) % newsData.length);
        setIsNewsTransitioning(false); // fade-in
      }, 320);
    }, 7000); // rotasi tiap 7 detik

    return () => {
      clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const activeNews = newsData[activeNewsIndex] ?? null;

  // helper untuk membuat link aman (internal ke /konten/arsip-berita atau external)
  const getNewsLink = (item: any): { type: 'internal' | 'external' | 'none'; href?: string } => {
    if (!item) return { type: 'none' };
    // prioritas: slug/id -> internal route
    if (item.slug || item.id) {
      const slugOrId = item.slug || item.id;
      return { type: 'internal', href: `/pages/konten/arsip-berita/${slugOrId}` };
    }
    // jika ada hrefExternal (atau legacy href) gunakan external
    if (item.hrefExternal) return { type: 'external', href: item.hrefExternal };
    if (item.href && typeof item.href === 'string' && item.href.startsWith('http')) {
      return { type: 'external', href: item.href };
    }
    // tidak ada link
    return { type: 'none' };
  };

  const linkInfo = getNewsLink(activeNews);

  return (
    <div className={styles.heroSection}>
      <section className={styles.hero}>
        {/* layer background slideshow (fade + blur) */}
        <div
          className={`${styles.heroBg} ${isTransitioningBg ? styles.heroBgTransition : ''}`}
          style={{ backgroundImage: `url(${bannerImages[bannerIndex]})` }}
        />

        {/* overlay gelap di atas background */}
        <div className={styles.heroOverlay} />

        <div className={styles.contentWrapper}>
          {/* sidebar sosmed kiri */}
          <div className={styles.socialSidebar}>
            <a href="https://www.facebook.com/p/Dinkominfo-Kab-Banyumas-100069335344488/">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/dinkominfo_kab.banyumas">
              <FaInstagram />
            </a>
            <a href="https://x.com/kominfobanyumas">
              <RiTwitterXLine />
            </a>
            <a href="http://www.youtube.com/@DINASKOMINFOKabupatenBanyumas">
              <FaYoutube />
            </a>
          </div>

          {/* kiri: judul + search + tags */}
          <div className={styles.leftContent}>
            <h1 className={styles.heroTitle}>{t('hero.title')}</h1>
            <p className={styles.heroSubtitle}>{t('hero.subtitle')}</p>

            <div className={styles.searchBox}>
              <input type="text" placeholder={currentPlaceholder} className={styles.animatedPlaceholder} />
              <button>{lang === 'id' ? 'Cari' : 'Search'}</button>
            </div>

            <div className={styles.popularTags}>
              <span>{t('hero.popularTitle')}</span>

              <div className={`${styles.tagsOuter} ${isAtEnd ? styles.tagsOuterNoFade : ''}`}>
                <div className={styles.scrollWrapper} ref={tagsContainerRef}>
                  <div className={styles.tagsList}>
                    <a href="#">{t('hero.placeholder.perizinan')}</a>
                    <a href="#">{t('hero.placeholder.pajak')}</a>
                    <a href="#">{t('hero.placeholder.lapor')}</a>
                    <a href="#">{t('hero.placeholder.ppid')}</a>
                    <a href="#">{t('home.section.news')}</a>
                    <a href="#">Lowongan Kerja</a>
                    <a href="#">Cetak Kartu Kuning</a>
                    <a href="#">Pengumuman Hari Ini</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* kanan: widget jam + cuaca + berita singkat */}
          <div className={styles.rightWidget}>
            <div className={styles.widgetHeader}>
              <div className={styles.widgetDateInfo}>
                <span className={styles.labelToday}>{t('hero.today')}</span>
                <span className={styles.textDate}>{formatDate(displayTime, lang)}</span>
                <span className={styles.textLoc}>
                  <FaMapMarkerAlt /> {locationLabel}
                </span>
              </div>
              <div className={styles.widgetTimeInfo}>
                <div className={styles.weather}>
                  <FaCloudSun />{' '}
                  {weather ? (showTemp ? `${weather.temperature}°C` : weather.description) : 'Memuat...'}
                </div>
                <div className={styles.bigClock}>{formatTime(displayTime)}</div>
              </div>
            </div>

            {/* kartu berita yang berganti otomatis */}
            <div className={`${styles.newsCard} ${styles.group} ${isNewsTransitioning ? styles.newsCardFading : ''}`}>
              {/* Render berbeda tergantung ada link internal / external / none */}
              {activeNews ? (
                linkInfo.type === 'internal' && linkInfo.href ? (
                  <Link href={linkInfo.href}>
                    <div className={styles.newsImageWrapper}>
                      {/* gunakan fallback alt */}
                      <Image
                        src={activeNews.imageUrl || '/placeholder.png'}
                        alt={activeNews.altText || activeNews.title || ''}
                        width={400}
                        height={250}
                        className={styles.newsImage}
                      />
                      <div className={styles.newsOverlay}>
                        <span className={styles.newsCategory}>PEMERINTAHAN</span>
                        <h3 className={styles.newsTitle}>{activeNews.title}</h3>
                        <div className={styles.newsMeta}>
                          <span>
                            <FaMapMarkerAlt /> Purwokerto
                          </span>{' '}
                          •{' '}
                          <span>
                            <FaCalendar /> {activeNews.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ) : linkInfo.type === 'external' && linkInfo.href ? (
                  <a href={linkInfo.href} target="_blank" rel="noopener noreferrer">
                    <div className={styles.newsImageWrapper}>
                      <Image
                        src={activeNews.imageUrl || '/placeholder.png'}
                        alt={activeNews.altText || activeNews.title || ''}
                        width={400}
                        height={250}
                        className={styles.newsImage}
                      />
                      <div className={styles.newsOverlay}>
                        <span className={styles.newsCategory}>PEMERINTAHAN</span>
                        <h3 className={styles.newsTitle}>{activeNews.title}</h3>
                        <div className={styles.newsMeta}>
                          <span>
                            <FaMapMarkerAlt /> Purwokerto
                          </span>{' '}
                          •{' '}
                          <span>
                            <FaCalendar /> {activeNews.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div>
                    <div className={styles.newsImageWrapper}>
                      <Image
                        src={activeNews.imageUrl || '/placeholder.png'}
                        alt={activeNews.altText || activeNews.title || ''}
                        width={400}
                        height={250}
                        className={styles.newsImage}
                      />
                      <div className={styles.newsOverlay}>
                        <span className={styles.newsCategory}>PEMERINTAHAN</span>
                        <h3 className={styles.newsTitle}>{activeNews.title}</h3>
                        <div className={styles.newsMeta}>
                          <span>
                            <FaMapMarkerAlt /> Purwokerto
                          </span>{' '}
                          •{' '}
                          <span>
                            <FaCalendar /> {activeNews.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              ) : (
                <div style={{ padding: 16 }}>Tidak ada berita saat ini.</div>
              )}
            </div>

            <button className={styles.btnMoreNews}>{lang === 'id' ? 'Lihat Berita Lainnya' : 'View More News'}</button>
          </div>
        </div>
        <AccessibilitySidebar />
      </section>
    </div>
  );
}
