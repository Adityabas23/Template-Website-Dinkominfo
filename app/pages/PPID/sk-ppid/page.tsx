"use client";

// FILE: app/PPID/sk-ppid/page.tsx
import { useEffect, useRef } from "react";
import PageLayout from "@/app/component/pagelayout";
import styles from "@/app/assets/css/ppid.module.css";
import SidebarPPID from "../SidebarPPID";

const skPpidList = [
  {
    year: 2021,
    href: "/dokumen/sk_ppid_tahun_2021.pdf",
    title: "SK PPID Tahun 2021",
    desc: "Surat Keputusan PPID Dinas Komunikasi dan Informatika Kabupaten Banyumas Tahun 2021.",
    category: "SK PPID",
  },
  {
    year: 2022,
    href: "/dokumen/sk_ppid_tahun_2022.pdf",
    title: "SK PPID Tahun 2022",
    desc: "Surat Keputusan PPID Dinas Komunikasi dan Informatika Kabupaten Banyumas Tahun 2022.",
    category: "SK PPID",
  },
  {
    year: 2023,
    href: "/dokumen/sk_ppid_tahun_2023.pdf",
    title: "SK PPID Tahun 2023",
    desc: "Surat Keputusan PPID Dinas Komunikasi dan Informatika Kabupaten Banyumas Tahun 2023.",
    category: "SK PPID",
  },
  {
    year: 2024,
    href: "/dokumen/sk_ppid_tahun_2024.pdf",
    title: "SK PPID Tahun 2024",
    desc: "Surat Keputusan PPID Dinas Komunikasi dan Informatika Kabupaten Banyumas Tahun 2024.",
    category: "SK PPID",
  },
];

export default function SkPPIDPage() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  // Scroll horizontal dengan scroll wheel
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      slider.scrollLeft += e.deltaY * 1.15;
    };

    slider.addEventListener("wheel", handleWheel, { passive: false });

    return () => slider.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <PageLayout
      title="SK PPID"
      breadcrumb="Beranda > PPID > SK PPID"
      description="Surat Keputusan Pejabat Pengelola Informasi dan Dokumentasi (PPID) Kabupaten Banyumas."
      heroImage="/bannerpemkab.png"
    >
      <div className={styles.profileCard}>
        {/* Sidebar */}
        <SidebarPPID active="sk-ppid" />

        {/* Konten Kanan */}
        <section className={styles.profileMain}>
          <h2 className={styles.sectionTitle}>SK PPID</h2>

          {/* LIST TEKS */}
          <div className={styles.contentBox}>
            <ul className={styles.contentList}>
              {skPpidList.map((item) => (
                <li key={item.year}>
                  SK PPID Tahun {item.year} dapat dilihat{" "}
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.downloadLink}
                  >
                    <strong>disini</strong>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CARD SLIDER */}
          <div className={styles.skDipCardsRow} ref={sliderRef}>
            {skPpidList.map((item) => (
              <div key={item.year} className={styles.skDipCard}>
                {/* HEADER */}
                <div className={styles.skDipCardHeader}>
                  <div className={styles.skDipPdfBadge}>PDF</div>
                </div>

                {/* BODY */}
                <div className={styles.skDipCardBody}>
                  <div className={styles.skDipMeta}>{item.category}</div>
                  <div className={styles.skDipTitle}>{item.title}</div>
                  <p className={styles.skDipDesc}>{item.desc}</p>
                </div>

                {/* ACTION BUTTONS */}
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
