// components/Header.tsx
'use client';

import { forwardRef, useEffect, useState, useRef } from 'react';
import styles from './header.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Header = forwardRef<HTMLDivElement>((props, ref) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const header = ref as React.RefObject<HTMLDivElement>;
    if (!header?.current) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // === DETEKSI WARNA DI BAWAH HEADER ===
    const detectBackgroundColor = () => {
      const headerEl = header.current;
      if (!headerEl) return;

      const rect = headerEl.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.bottom + 5; // 5px di bawah header

      const elementUnder = document.elementFromPoint(x, y);
      if (!elementUnder) return;

      const bgColor = window.getComputedStyle(elementUnder).backgroundColor;
      const rgb = bgColor.match(/\d+/g);
      if (!rgb) return;

      const [r, g, b] = rgb.map(Number);
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;

      setIsDarkBackground(brightness < 128); // < 128 = gelap
    };

    // Jalankan saat scroll & resize
    const onChange = () => {
      handleScroll();
      detectBackgroundColor();
    };

    window.addEventListener('scroll', onChange);
    window.addEventListener('resize', onChange);

    // Jalankan sekali saat mount
    detectBackgroundColor();

    return () => {
      window.removeEventListener('scroll', onChange);
      window.removeEventListener('resize', onChange);
    };
  }, [ref]);

  return (
    <>
      <header
        ref={ref}
        className={`
          ${styles.header}
          ${isScrolled ? styles.scrolled : ''}
          ${isDarkBackground ? styles.darkMode : styles.lightMode}
        `}
      >
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

        {/* NAVIGASI DESKTOP */}
        <nav className={styles.nav}>
          <ul>
            <li><Link href="#">Tentang Kami</Link></li>
            <li><Link href="#">Keberlanjutan</Link></li>
            <li><Link href="#">Investor</Link></li>
            <li><Link href="#">Ruang Media</Link></li>
            <li><Link href="#">Karir</Link></li>
            <li><Link href="#">Kebijakan</Link></li>
            <li><Link href="#">PPID</Link></li>
          </ul>
        </nav>

        {/* TOMBOL BAHASA */}
        <button className={styles.langButton}>ID</button>

        {/* BURGER MENU (MOBILE) */}
        <div
          className={`${styles.burger} ${isMobileMenuOpen ? styles.open : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <Link href="#">Tentang Kami</Link>
        <Link href="#">Keberlanjutan</Link>
        <Link href="#">Investor</Link>
        <Link href="#">Ruang Media</Link>
        <Link href="#">Karir</Link>
        <Link href="#">Kebijakan</Link>
        <Link href="#">PPID</Link>
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