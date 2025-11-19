"use client";

// FILE: app/PPID/sk-penetapan-dip/page.tsx
import { useEffect, useRef } from "react";
import PageLayout from "@/app/component/pagelayout";
import styles from "@/app/assets/css/ppid.module.css";
import SidebarPPID from "../SidebarPPID";

const dipList = [
  {
    year: 2021,
    href: "/dokumen/sk_penetapan_dip_2021.pdf",
    title: "SK Penetapan DIP Tahun 2021",
    desc: "Surat Keputusan Penetapan Daftar Informasi Publik Tahun 2021.",
    category: "SK PENETAPAN DIP",
  },
  {
    year: 2022,
    href: "/dokumen/sk_penetapan_dip_2022.pdf",
    title: "SK Penetapan DIP Tahun 2022",
    desc: "Surat Keputusan Penetapan Daftar Informasi Publik Tahun 2022.",
    category: "SK PENETAPAN DIP",
  },
  {
    year: 2023,
    href: "/dokumen/DIP FIX.pdf",
    title: "SK Penetapan DIP Tahun 2023",
    desc: "Surat Keputusan Penetapan Daftar Informasi Publik Tahun 2023.",
    category: "SK PENETAPAN DIP",
  },
  {
    year: 2024,
    href: "/dokumen/DIP Kominfo 2024.pdf",
    title: "SK Penetapan DIP Tahun 2024",
    desc: "Surat Keputusan Penetapan Daftar Informasi Publik Tahun 2024.",
    category: "SK PENETAPAN DIP",
  },
];

export default function SkPenetapanDipPage() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  // Scroll wheel → geser horizontal
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault(); // biar halaman nggak ikut scroll
      slider.scrollLeft += e.deltaY * 1.1; // atur speed di sini
    };

    slider.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      slider.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <PageLayout
      title="SK PENETAPAN DIP"
      breadcrumb="Beranda > PPID > SK Penetapan DIP"
      description="SK Penetapan Daftar Informasi Publik (DIP) Kabupaten Banyumas."
      heroImage="/bannerpemkab.png"
    >
      <div className={styles.profileCard}>
        {/* Sidebar */}
        <SidebarPPID active="sk-penetapan-dip" />

        {/* Konten kanan */}
        <section className={styles.profileMain}>
          <h2 className={styles.sectionTitle}>SK PENETAPAN DIP</h2>
          <p className={styles.sectionSubtitle}>SK PENETAPAN DIP</p>

          {/* LIST TEKS SEDERHANA */}
          <div className={styles.contentBox}>
            <ul className={styles.contentList}>
              {dipList.map((item) => (
                <li key={item.year}>
                  SK PENETAPAN DIP TAHUN {item.year} dapat dilihat{" "}
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.downloadLink}
                  >
                    <strong>DISINI</strong>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* BARIS CARD HORIZONTAL DI BAWAH LIST */}
          <div className={styles.skDipCardsRow} ref={sliderRef}>
            {dipList.map((item) => (
              <div key={item.year} className={styles.skDipCard}>
                <div className={styles.skDipCardHeader}>
                  <div className={styles.skDipPdfBadge}>PDF</div>
                </div>

                <div className={styles.skDipCardBody}>
                  <div className={styles.skDipMeta}>{item.category}</div>
                  <div className={styles.skDipTitle}>{item.title}</div>
                  <p className={styles.skDipDesc}>{item.desc}</p>
                </div>

                <div className={styles.skDipActions}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.skDipBtnOutline}
                  >
                    👁 Lihat
                  </a>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    download
                    className={styles.skDipBtnPrimary}
                  >
                    ⬇ Unduh
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
