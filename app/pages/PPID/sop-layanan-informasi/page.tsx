"use client";

import { useState } from "react";
import PageLayout from "@/app/component/pagelayout";
import styles from "@/app/assets/css/ppid.module.css";
import SidebarPPID from "../SidebarPPID";

type SopItem = {
  text: string;   // kalimat lengkap (untuk list & judul di kartu)
  href: string;   // path pdf
  label: string;  // judul pendek di chip/card
};

const sopList: SopItem[] = [
  {
    text:
      "Standar Operasional Prosedur Penyusunan Daftar Informasi Publik dapat diunduh",
    href:
      "/dokumen/D. SOP PENETAPAN DAN PEMUTAKHIRAN DAFTAR INFORMASI PUBLIK.pdf",
    label: "Penyusunan DIP",
  },
  {
    text:
      "Standar Operasional Prosedur Pelayanan Permohonan Informasi Publik dapat diunduh",
    href: "/dokumen/B. SOP PERMINTAAN INFORMASI PUBLIK.pdf",
    label: "Pelayanan Permohonan",
  },
  {
    text:
      "Standar Operasional Prosedur Uji Konsekuensi Informasi Publik dapat diunduh",
    href: "/dokumen/G. SOP PENGUJIAN KONSEKUENSI.pdf",
    label: "Uji Konsekuensi",
  },
  {
    text:
      "Standar Operasional Prosedur Penanganan Keberatan Informasi Publik dapat diunduh",
    href: "/dokumen/I. SOP PENANGANAN KEBERATAN INFORMASI PUBLIK.pdf",
    label: "Penanganan Keberatan",
  },
  {
    text:
      "Standar Operasional Prosedur Fasilitasi Sengketa Informasi Publik dapat diunduh",
    href:
      "/dokumen/K_STANDAR OPERASIONAL PROSEDUR FASILITASI SENGKETA INFORMASI PUBLIK_2.pdf",
    label: "Fasilitasi Sengketa",
  },
  {
    text:
      "Standar Operasional Prosedur Maklumat Pelayanan Informasi Publik dapat diunduh",
    href: "/dokumen/SOP MAKLUMAT PELAYANAN INFORMASI PUBLIK.pdf",
    label: "Maklumat Pelayanan",
  },
  {
    text:
      "Standar Operasional Prosedur Permohonan Informasi Bagi Penyandang Disabilitas dapat diunduh",
    href: "/dokumen/sop permohonan informasi publik bagi disabilitas.pdf",
    label: "Permohonan Disabilitas",
  },
];

export default function SopLayananInformasiPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSop = sopList[activeIndex];

  return (
    <PageLayout
      title="SOP LAYANAN INFORMASI PUBLIK"
      breadcrumb="Beranda > PPID > SOP Layanan Informasi Publik"
      description="Standar operasional prosedur layanan informasi publik di lingkungan PPID."
      heroImage="/bannerpemkab.png"
    >
      <div className={styles.profileCard}>
        <SidebarPPID active="sop-layanan-informasi" />

        <section className={styles.profileMain}>
          <h2 className={styles.sectionTitle}>SOP Layanan Informasi Publik</h2>

          <div className={styles.contentBox}>
            <p className={styles.contentHeading}>
              Standar Operasional Prosedur Pejabat Pengelola Informasi dan
              Dokumentasi Kabupaten Banyumas.
            </p>

            {/* BARIS CARD HORIZONTAL UNTUK PILIH SOP */}
            <div className={styles.sopCardRow}>
              {sopList.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`${styles.sopCardChip} ${
                    idx === activeIndex ? styles.sopCardChipActive : ""
                  }`}
                  onClick={() => setActiveIndex(idx)}
                >
                  <span className={styles.sopCardNumber}>{idx + 1}.</span>
                  <span className={styles.sopCardLabel}>{item.label}</span>
                </button>
              ))}
            </div>

            {/* CARD PREVIEW PDF (SEPERTI DI PROFIL / LAPORAN TAHUNAN) */}
            <div className={styles.pdfCard}>
              <p className={styles.downloadTextincard}>
                {activeSop.text}{" "}
                <a
                  href={activeSop.href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.downloadLinkincard}
                >
                  DISINI
                </a>
              </p>

              <iframe
                className={styles.pdfViewer}
                src={`${activeSop.href}#toolbar=1&navpanes=0`}
                title={activeSop.label}
              />
            </div>

            {/* LIST BERNOMOR (OPSIONAL, DIBIARKAN UNTUK MIRIP TAMPILAN LAMA) */}
            <ol className={styles.contentList} style={{ marginTop: 16 }}>
              {sopList.map((item, idx) => (
                <li key={idx}>
                  {item.text}{" "}
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.downloadLink}
                  >
                    DISINI
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
