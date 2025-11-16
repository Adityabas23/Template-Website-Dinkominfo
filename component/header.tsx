// components/Header.tsx
'use client';

import { forwardRef, useEffect, useState } from 'react';
import styles from './header.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Header = forwardRef<HTMLDivElement>((props, ref) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const header = ref as React.RefObject<HTMLDivElement>;
    if (!header?.current) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return (
    <>
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
            <span>Dinas Komunikasi dan Informatika</span>
            <strong>Pemerintah Kabupaten Banyumas</strong>
          </div>
        </div>

        {/* NAV TENGAH (DESKTOP SAJA) */}
        <nav className={styles.nav}>
          <ul>
            <li><Link href="#">Beranda</Link></li>
            <li><Link href="#">Profil</Link></li>
            <li><Link href="#">PPID</Link></li>
            <li><Link href="#">Menu Publik</Link></li>
            <li><Link href="#">Data Pegawai</Link></li>
            <li><Link href="#">Download</Link></li>
            <li><Link href="#">F.A.Q</Link></li>
          </ul>
        </nav>

        {/* KANAN: TOMBOL BAHASA + BURGER */}
        <div className={styles.rightControls}>
          <button className={styles.langButton}>ID</button>
          <div
            className={`${styles.burger} ${isMobileMenuOpen ? styles.open : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <Link href="#">Beranda</Link>
        <Link href="#">Profil</Link>
        <Link href="#">PPID</Link>
        <Link href="#">Menu Publik</Link>
        <Link href="#">Data Pegawai</Link>
        <Link href="#">Download</Link>
        <Link href="#">F.A.Q</Link>
        <Link href="#">Kontak</Link>
        <button
          className={styles.langButton}
          style={{ marginTop: '2rem', fontSize: '1.2rem' }}
        >
          ID
        </button>
      </div>
    </>
  );
});

Header.displayName = 'Header';
export default Header;