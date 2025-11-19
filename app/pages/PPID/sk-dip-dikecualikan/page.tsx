"use client";

import PageLayout from "@/app/component/pagelayout";
import styles from "@/app/assets/css/ppid.module.css";
import SidebarPPID from "../SidebarPPID";
import { useRef, useEffect } from "react";

const dikList = [
  {
    year: 2018,
    href: "/dokumen/Format DIK Kominfo dan lampiran 2018.pdf",
    title: "SK DIP Dikecualikan Tahun 2018",
    desc: "Daftar Informasi Publik yang Dikecualikan Tahun 2018.",
    category: "SK DIP DIKECUALIKAN",
  },
  {
    year: 2021,
    href: "/dokumen/sk_dip_dikecualikan_2021.pdf",
    title: "SK DIP Dikecualikan Tahun 2021",
    desc: "Daftar Informasi Publik yang Dikecualikan Tahun 2021.",
    category: "SK DIP DIKECUALIKAN",
  },
  {
    year: 2022,
    href: "/dokumen/DIK Dinkominfo dan Lampiran 2022.pdf",
    title: "SK DIP Dikecualikan Tahun 2022",
    desc: "Daftar Informasi Publik yang Dikecualikan Tahun 2022.",
    category: "SK DIP DIKECUALIKAN",
  },
  {
    year: 2023,
    href: "/dokumen/SK DIK KOMINFO_FIX085.pdf",
    title: "SK DIP Dikecualikan Tahun 2023",
    desc: "Daftar Informasi Publik yang Dikecualikan Tahun 2023.",
    category: "SK DIP DIKECUALIKAN",
  },
  {
    year: 2024,
    href: "/dokumen/DIK Kominfo 2024022.pdf",
    title: "SK DIP Dikecualikan Tahun 2024",
    desc: "Daftar Informasi Publik yang Dikecualikan Tahun 2024.",
    category: "SK DIP DIKECUALIKAN",
  },
];

export default function SkDipDikecualikanPage() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      slider.scrollLeft += e.deltaY * 1.2;
    };

    slider.addEventListener("wheel", onWheel, { passive: false });
    return () => slider.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <PageLayout
      title="SK DIP DIKECUALIKAN"
      breadcrumb="Beranda > PPID > SK DIP Dikecualikan"
      description="SK Daftar Informasi Publik yang Dikecualikan."
      heroImage="/bannerpemkab.png"
    >
      <div className={styles.profileCard}>
        <SidebarPPID active="sk-dip-dikecualikan" />

        <section className={styles.profileMain}>
          <h2 className={styles.sectionTitle}>SK DIP Dikecualikan (DIK)</h2>

          {/* LIST TEKS SEDERHANA */}
          <div className={styles.contentBox}>
            <ul className={styles.contentList}>
              {dikList.map((item) => (
                <li key={item.year}>
                  SK Daftar Informasi Publik Yang Dikecualikan Tahun {item.year}{" "}
                  dapat dilihat{" "}
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

          {/* CARD HORIZONTAL */}
          <div className={styles.skDipCardsRow} ref={sliderRef}>
            {dikList.map((item) => (
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
