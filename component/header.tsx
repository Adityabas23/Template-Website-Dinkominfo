// components/Header.tsx
'use client';

import React, {
  forwardRef,
  useEffect,
  useState,
  MouseEvent as ReactMouseEvent,
} from 'react';
import styles from './header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/app/i18n/LanguageContext';
import type { MessageKey } from '@/app/i18n/messages';

type MegaMenuKey = 'profil' | 'ppid' | 'menuPublik' | null;

type MegaItem = {
  titleKey: MessageKey;
  descKey: MessageKey;
  icon: string;
  href: string;
};

/* ====== DATA MEGA MENU (pakai KEY, bukan teks langsung) ====== */

const profilItems: MegaItem[] = [
  {
    titleKey: 'profil.visiMisi.title',
    descKey: 'profil.visiMisi.desc',
    icon: 'VM',
    href: '#',
  },
  {
    titleKey: 'profil.tugasFungsi.title',
    descKey: 'profil.tugasFungsi.desc',
    icon: 'TF',
    href: '#',
  },
  {
    titleKey: 'profil.struktur.title',
    descKey: 'profil.struktur.desc',
    icon: 'SO',
    href: '#',
  },
  {
    titleKey: 'profil.sejarah.title',
    descKey: 'profil.sejarah.desc',
    icon: 'SJ',
    href: '#',
  },
  {
    titleKey: 'profil.alamatKontak.title',
    descKey: 'profil.alamatKontak.desc',
    icon: 'AK',
    href: '#',
  },
  {
    titleKey: 'profil.iku.title',
    descKey: 'profil.iku.desc',
    icon: 'IK',
    href: '#',
  },
];

const ppidItems: MegaItem[] = [
  {
    titleKey: 'ppid.skDip.title',
    descKey: 'ppid.skDip.desc',
    icon: 'SK',
    href: '#',
  },
  {
    titleKey: 'ppid.berkala.title',
    descKey: 'ppid.berkala.desc',
    icon: 'BR',
    href: '#',
  },
  {
    titleKey: 'ppid.setiapSaat.title',
    descKey: 'ppid.setiapSaat.desc',
    icon: 'SS',
    href: '#',
  },
  {
    titleKey: 'ppid.sertaMerta.title',
    descKey: 'ppid.sertaMerta.desc',
    icon: 'SM',
    href: '#',
  },
  {
    titleKey: 'ppid.struktur.title',
    descKey: 'ppid.struktur.desc',
    icon: 'ST',
    href: '#',
  },
  {
    titleKey: 'ppid.maklumat.title',
    descKey: 'ppid.maklumat.desc',
    icon: 'MP',
    href: '#',
  },
  {
    titleKey: 'ppid.laporanTahunan.title',
    descKey: 'ppid.laporanTahunan.desc',
    icon: 'LT',
    href: '#',
  },
  {
    titleKey: 'ppid.skPpid.title',
    descKey: 'ppid.skPpid.desc',
    icon: 'SK',
    href: '#',
  },
  {
    titleKey: 'ppid.skDipPenetapan.title',
    descKey: 'ppid.skDipPenetapan.desc',
    icon: 'DP',
    href: '#',
  },
  {
    titleKey: 'ppid.permohonan.title',
    descKey: 'ppid.permohonan.desc',
    icon: 'PI',
    href: '#',
  },
];

const menuPublikItems: MegaItem[] = [
  {
    titleKey: 'menuPublik.berita.title',
    descKey: 'menuPublik.berita.desc',
    icon: 'B',
    href: '#',
  },
  {
    titleKey: 'menuPublik.pelayanan.title',
    descKey: 'menuPublik.pelayanan.desc',
    icon: 'P',
    href: '#',
  },
  {
    titleKey: 'menuPublik.pengumuman.title',
    descKey: 'menuPublik.pengumuman.desc',
    icon: 'P',
    href: '#',
  },
  {
    titleKey: 'menuPublik.materiBimtek.title',
    descKey: 'menuPublik.materiBimtek.desc',
    icon: 'M',
    href: '#',
  },
  {
    titleKey: 'menuPublik.galeri.title',
    descKey: 'menuPublik.galeri.desc',
    icon: 'G',
    href: '#',
  },
  {
    titleKey: 'menuPublik.reformasi.title',
    descKey: 'menuPublik.reformasi.desc',
    icon: 'R',
    href: '#',
  },
];

const Header = forwardRef<HTMLDivElement>((props, ref) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMega, setOpenMega] = useState<MegaMenuKey>(null);

  // ✅ ambil lang, toggleLang, dan t dari context
  const { lang, toggleLang, t } = useLang();

  useEffect(() => {
    const header = ref as React.RefObject<HTMLDivElement>;
    if (!header?.current) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
      if (window.scrollY > 200) setOpenMega(null);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  const handleMegaEnter = (menu: MegaMenuKey) => {
    setOpenMega(menu);
  };

  const closeMega = () => setOpenMega(null);

  const handleMenuClick = (e: ReactMouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  const renderMegaContent = () => {
    if (!openMega) return null;

    let titleKey: MessageKey;
    let subtitleKey: MessageKey;
    let items: MegaItem[] = [];

    if (openMega === 'profil') {
      titleKey = 'mega.profil.title';
      subtitleKey = 'mega.profil.subtitle';
      items = profilItems;
    } else if (openMega === 'ppid') {
      titleKey = 'mega.ppid.title';
      subtitleKey = 'mega.ppid.subtitle';
      items = ppidItems;
    } else {
      // menuPublik
      titleKey = 'mega.menuPublik.title';
      subtitleKey = 'mega.menuPublik.subtitle';
      items = menuPublikItems;
    }

    return (
      <div className={styles.megaContainer}>
        <div className={styles.megaPanel}>
          <button
            type="button"
            className={styles.megaClose}
            onClick={closeMega}
            aria-label={t('mega.close')}
          >
            ×
          </button>

          <div className={styles.megaHeader}>
            <h3>{t(titleKey)}</h3>
            <p>{t(subtitleKey)}</p>
          </div>

          <div className={styles.megaGrid}>
            {items.map((item) => (
              <Link
                key={item.titleKey}
                href={item.href}
                className={styles.megaItem}
              >
                <div className={styles.megaIcon}>{item.icon}</div>
                <div className={styles.megaText}>
                  <h4>{t(item.titleKey)}</h4>
                  <p>{t(item.descKey)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Zona hover supaya kalau mouse keluar dari header + panel, mega menu tertutup */}
      <div className={styles.headerHoverZone} onMouseLeave={closeMega}>
        <header
          ref={ref}
          className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
        >
          {/* LOGO KIRI */}
          <div className={styles.logoContainer}>
            <Image
              src="/logobmy.png"
              alt="Logo Banyumas"
              width={40}
              height={40}
              priority
            />
            <div className={styles.logoText}>
              <span>{t('header.subTitle')}</span>
              <strong>{t('header.title')}</strong>
            </div>
          </div>

          {/* NAV TENGAH (DESKTOP) */}
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link href="#" className={styles.navLink}>
                  {t('nav.home')}
                </Link>
              </li>

              <li
                className={styles.navItem}
                onMouseEnter={() => handleMegaEnter('profil')}
              >
                <Link
                  href="#"
                  onClick={handleMenuClick}
                  className={`${styles.navLink} ${
                    openMega === 'profil' ? styles.navLinkActive : ''
                  }`}
                >
                  {t('nav.profile')}
                </Link>
              </li>

              <li
                className={styles.navItem}
                onMouseEnter={() => handleMegaEnter('ppid')}
              >
                <Link
                  href="#"
                  onClick={handleMenuClick}
                  className={`${styles.navLink} ${
                    openMega === 'ppid' ? styles.navLinkActive : ''
                  }`}
                >
                  {t('nav.ppid')}
                </Link>
              </li>

              <li
                className={styles.navItem}
                onMouseEnter={() => handleMegaEnter('menuPublik')}
              >
                <Link
                  href="#"
                  onClick={handleMenuClick}
                  className={`${styles.navLink} ${
                    openMega === 'menuPublik' ? styles.navLinkActive : ''
                  }`}
                >
                  {t('nav.publicMenu')}
                </Link>
              </li>

              <li className={styles.navItem}>
                <Link href="#" className={styles.navLink}>
                  {t('nav.staffData')}
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="#" className={styles.navLink}>
                  {t('nav.download')}
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="#" className={styles.navLink}>
                  {t('nav.faq')}
                </Link>
              </li>
            </ul>
          </nav>

          {/* KANAN: TOMBOL BAHASA + BURGER */}
          <div className={styles.rightControls}>
            <button className={styles.langButton} onClick={toggleLang}>
              {lang.toUpperCase()}
            </button>

            <div
              className={`${styles.burger} ${
                isMobileMenuOpen ? styles.open : ''
              }`}
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                setOpenMega(null);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </header>

        {/* MEGA MENU (DESKTOP) */}
        {renderMegaContent()}
      </div>

      {/* MOBILE MENU */}
      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.open : ''
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <Link href="#">{t('nav.home')}</Link>
        <Link href="#">{t('nav.profile')}</Link>
        <Link href="#">{t('nav.ppid')}</Link>
        <Link href="#">{t('nav.publicMenu')}</Link>
        <Link href="#">{t('nav.staffData')}</Link>
        <Link href="#">{t('nav.download')}</Link>
        <Link href="#">{t('nav.faq')}</Link>
        <Link href="#">{t('nav.contact')}</Link>

        <button className={styles.langButton} onClick={toggleLang}>
          {lang.toUpperCase()}
        </button>
      </div>
    </>
  );
});

Header.displayName = 'Header';
export default Header;
