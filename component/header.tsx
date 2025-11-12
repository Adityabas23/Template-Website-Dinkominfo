// components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css"; 

export default function Header() {
  const [lang, setLang] = useState("ID");

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  const toggleLang = () => {
    setLang(lang === "ID" ? "EN" : "ID");
  };

  return (
    <header 
      className={
        `${styles.header} ${scrolled ? styles.scrolled : ''}`
      }
    >
      <div className={styles.logoContainer}>
        {/* Path logo Anda sudah benar */}
        <Image
          src="/logobmy.png" 
          alt="Logo Pemkab Banyumas"
          width={50}
          height={50}
        />
        <div className={styles.logoText}>
          <span>Dinas Komunikasi dan Informatika</span>
          <strong>Pemerintah Kabupaten Banyumas</strong>
        </div>
      </div>

      <nav className={styles.nav}>
        <ul>
          <li><Link href="/">Tentang Kami</Link></li>
          <li><Link href="/">Keberlanjutan</Link></li>
          <li><Link href="/">Investor</Link></li>
          <li><Link href="/">Ruang Media</Link></li>
          <li><Link href="/">Karir</Link></li>
          <li><Link href="/">Kebijakan</Link></li>
          <li><Link href="/">PPID</Link></li>
        </ul>
      </nav>

      <button className={styles.langButton} onClick={toggleLang}>
        {lang}
      </button>
    </header>
  );
}