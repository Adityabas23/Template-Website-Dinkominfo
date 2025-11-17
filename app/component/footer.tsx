// component/footer.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';

import styles from '@/app/assets/css/footer.module.css';
import { useLang } from '@/app/i18n/LanguageContext';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className={styles.footer}>
      {/* wave / shape dekorasi */}
      <div className={styles.waveDecor} />

      <div className={styles.footerInner}>
        {/* KOL1 – Logo + alamat + kontak */}
        <div className={styles.brandColumn}>
          <div className={styles.brandRow}>
            <div className={styles.brandBadge}>
              <Image
                src="/logobmy.png"
                alt="Logo Banyumas"
                width={50}
                height={50}
                className={styles.brandLogo}
                priority
              />
            </div>
            <div>
              <p className={styles.brandTitle}>
                DINKOMINFO
                <br />
                KABUPATEN BANYUMAS
              </p>
              <p className={styles.brandTagline}>
                Portal informasi dan layanan publik Kabupaten Banyumas.
              </p>
            </div>
          </div>

          <div className={styles.addressBlock}>
            <p className={styles.addressTitle}>{t('footer.address.title')}</p>
            <p className={styles.addressText}>
              Jl. Masjid No. 8 <br />
              Purwokerto, Banyumas 53115
            </p>
          </div>

          <div className={styles.contactRow}>
            <p className={styles.addressTitle}>{t('footer.contact.title')}</p>
            <p className={styles.addressText}>
              email:{' '}
              <a href="mailto:kominfo@banyumaskab.go.id">
                kominfo@banyumaskab.go.id
              </a>
              <br />
              Telepon/Faximile:(0281) 632338
            </p>
          </div>

          <div className={styles.socialRow}>
            <span className={styles.socialLabel}>
              {t('footer.followUs')}
            </span>
            <div className={styles.socialIcons}>
              <a
                href="https://www.facebook.com/p/Dinkominfo-Kab-Banyumas-100069335344488/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/dinkominfo_kab.banyumas"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/kominfobanyumas"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
              >
                <RiTwitterXLine />
              </a>
              <a
                href="http://www.youtube.com/@DINASKOMINFOKabupatenBanyumas"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* KOL2 – Website SKPD */}
        <div className={styles.linkColumn}>
          <h3 className={styles.columnTitle}>Website SKPD</h3>
          <ul className={styles.linkList}>
            <li>
              <Link href="#">DINSOSPERMASDES BANYUMAS</Link>
            </li>
            <li>
              <Link href="#">Dinas Kesehatan</Link>
            </li>
            <li>
              <Link href="#">DPPKBP3A</Link>
            </li>
            <li>
              <Link href="#">
                Dinas Pemuda, Olahraga, Kebudayaan dan Pariwisata
              </Link>
            </li>
            <li>
              <Link href="#">DPMPTSP BANYUMAS</Link>
            </li>
            <li>
              <Link href="#">Dinas Komunikasi dan Informatika</Link>
            </li>
          </ul>
        </div>

        {/* KOL3 – Website Link / Desa */}
        <div className={styles.linkColumn}>
          <h3 className={styles.columnTitle}>Website Link</h3>
          <ul className={styles.linkList}>
            <li>
              <Link href="#">Website Pemerintah Kabupaten</Link>
            </li>
          </ul>

          <h3 className={`${styles.columnTitle} ${styles.columnTitleSub}`}>
            Website Desa
          </h3>
          <ul className={styles.linkList}>
            <li>
              <Link href="#">Desa Klinting Kec. Somagede</Link>
            </li>
            <li>
              <Link href="#">Media Informasi Desa Buniayu</Link>
            </li>
            <li>
              <Link href="#">Desa Candinegara Kec. Pekuncen</Link>
            </li>
            <li>
              <Link href="#">Desa Sokawera Kec. Cilongok</Link>
            </li>
            <li>
              <Link href="#">Desa Langgongsari Kec. Cilongok</Link>
            </li>
            <li>
              <Link href="#">Desa Kalisari Kec. Cilongok</Link>
            </li>
          </ul>
        </div>

        {/* KOL4 – Counter (modern glass card) */}
        <div className={styles.counterColumn}>
          <h3 className={styles.columnTitle}>Counter</h3>

          <div className={styles.counterCard}>
            <div className={styles.counterRow}>
              <span>{t('counter.today')}</span>
              <span className={styles.counterValue}>2</span>
            </div>

            <div className={styles.counterRow}>
              <span>{t('counter.thisWeek')}</span>
              <span className={styles.counterValue}>0</span>
            </div>

            <div className={styles.counterRow}>
              <span>{t('counter.thisMonth')}</span>
              <span className={styles.counterValue}>539</span>
            </div>

            <div className={styles.counterRow}>
              <span>{t('counter.thisYear')}</span>
              <span className={styles.counterValue}>68694</span>
            </div>

            <div className={styles.counterRow}>
              <span>{t('counter.totalVisitors')}</span>
              <span className={styles.counterValue}>136134</span>
            </div>
          </div>

          <div className={styles.counterHighlight}>
            <p className={styles.counterHighlightLabel}>
              {t('counter.lastStats')}
            </p>

            <p className={styles.counterHighlightText}>
              {t('counter.postPrefix')}: Rapat Koordinasi Penguatan E-Government di Kabupaten Banyumas
            </p>

            <p className={styles.counterHighlightNumber}>
              19.692 {t('counter.visitors')}
            </p>
          </div>
        </div>
      </div>

      {/* Bar hak cipta */}
      <div className={styles.footerBottom}>
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  );
}
