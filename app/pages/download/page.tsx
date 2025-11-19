"use client";

import { useEffect, useRef, useState } from "react";
import PageLayout from "@/app/component/pagelayout";
import styles from "@/app/assets/css/download.module.css";
import ModalPreview from "./ModalPreview";

type FileItem = {
  category: string;
  title: string;
  desc: string;
  fileName: string;
};

type YearBlock = {
  year: string;
  files: FileItem[];
};

export default function DownloadPage() {
  const [previewFile, setPreviewFile] = useState<string | null>(null);

  const blocks: YearBlock[] = [
    {
      year: "2017",
      files: [
        {
          category: "Renstra",
          title: "Renstra Dinas Kominfo 2017",
          desc: "Dokumen rencana strategis Dinas Komunikasi dan Informatika Kabupaten Banyumas Tahun 2017.",
          fileName: "Matrik Renstra kominfo 2017.xlsx",
        },
      ],
    },
    {
      year: "2021",
      files: [
        {
          category: "LKJIP",
          title: "LKJIP Dinas Kominfo 2021",
          desc: "Laporan Akuntabilitas Kinerja Instansi Pemerintah (LKJIP) Dinas Kominfo Tahun 2021.",
          fileName: "LKjIP Dinkominfo 2021.pdf",
        },
      ],
    },
    {
      year: "2022",
      files: [
        {
          category: "Data & Informasi",
          title: "Data dan Informasi Kabupaten Banyumas 2022",
          desc: "Dokumen data dan informasi Kabupaten Banyumas Tahun 2022.",
          fileName: "DIKB 2022.pdf",
        },
        {
          category: "Renja",
          title: "Renja Dinas Kominfo 2022",
          desc: "Rencana kerja Dinas Komunikasi dan Informatika Kabupaten Banyumas Tahun 2022.",
          fileName: "RENJA DINAS KOMINFO.pdf",
        },
        {
          category: "Rencana Aksi",
          title: "Rencana Aksi Dinas Kominfo 2022",
          desc: "Dokumen rencana aksi pelaksanaan program Dinas Kominfo Tahun 2022.",
          fileName: "Rencana Aksi Dinkominfo.pdf",
        },
      ],
    },
    {
      year: "2023",
      files: [
        {
          category: "Rencana Aksi",
          title: "Rencana Aksi Dinas Kominfo 2023",
          desc: "Dokumen rencana aksi pelaksanaan program Dinas Kominfo Tahun 2023.",
          fileName: "Rencana Aksi 2023 Dinkominfo.pdf",
        },
      ],
    },
    {
      year: "2024",
      files: [
        {
          category: "Rencana Aksi",
          title: "Rencana Aksi Dinas Kominfo 2024",
          desc: "Dokumen rencana aksi pelaksanaan program Dinas Kominfo Tahun 2024.",
          fileName: "Rencana Aksi Dinkominfo 2024.pdf",
        },
        {
          category: "Renja Perubahan",
          title: "RENJA Perubahan Dinas Kominfo 2024",
          desc: "Rencana Kerja (RENJA) Perubahan Dinas Kominfo Kabupaten Banyumas Tahun 2024.",
          fileName: "RENJA PERUBAHAN DINKOMINFO TAHUN 2024.pdf",
        },
        {
          category: "RKA SKPD",
          title: "RKA SKPD Dinas Kominfo 2024",
          desc: "Rencana kerja dan anggaran Satuan Kerja Perangkat Daerah Dinas Kominfo Tahun 2024.",
          fileName: "RKA SKPD Dinas Komunikasi dan Informatika Tahun 2024.pdf",
        },
        {
          category: "LKJIP",
          title: "LKJIP Dinas Kominfo 2024",
          desc: "Laporan Akuntabilitas Kinerja Instansi Pemerintah Dinas Kominfo Tahun 2024.",
          fileName: "LKJiP Dinkominfo Tahun 2024.pdf",
        },
        {
          category: "DPA",
          title: "DPA Dinas Kominfo 2024",
          desc: "Dokumen Pelaksanaan Anggaran Dinas Kominfo Kabupaten Banyumas Tahun 2024.",
          fileName: "DPA 2024 DINKOMINFO.pdf",
        },
      ],
    },
    {
      year: "2025",
      files: [
        {
          category: "Rencana Aksi",
          title: "Rencana Aksi Dinas Kominfo 2025",
          desc: "Dokumen rencana aksi pelaksanaan program Dinas Kominfo Tahun 2025.",
          fileName: "renaksi 2025.pdf",
        },
        {
          category: "DPA",
          title: "DPA Dinas Kominfo 2025",
          desc: "Dokumen Pelaksanaan Anggaran Dinas Kominfo Kabupaten Banyumas Tahun 2025.",
          fileName: "DPA Belanja 2025 Dinkominfo.pdf",
        },
      ],
    },
    {
      year: "RENSTRA",
      files: [
        {
          category: "Renstra",
          title: "Renstra Kominfo Banyumas 2024–2026",
          desc: "Rencana Strategis Dinas Komunikasi dan Informatika Kabupaten Banyumas Tahun 2024–2026.",
          fileName: "RENSTRA DINKOMINFO TAHUN 2024-2026.pdf",
        },
      ],
    },
  ];

  const panelRef = useRef<HTMLDivElement | null>(null);

  // helper ekstensi
  const getExt = (fileName: string) =>
    fileName.split(".").pop()?.toLowerCase() ?? "";

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const handler = (e: WheelEvent) => {
      const underPointer = document.elementFromPoint(
        e.clientX,
        e.clientY
      ) as HTMLElement | null;
      if (!underPointer) return;

      const wrapper = underPointer.closest(
        "." + styles.scrollWrapper
      ) as HTMLDivElement | null;

      if (!wrapper) return;
      if (wrapper.scrollWidth <= wrapper.clientWidth) return;
      if (e.deltaY === 0) return;

      e.preventDefault();
      wrapper.scrollLeft += e.deltaY * 0.5;
    };

    panel.addEventListener("wheel", handler, { passive: false });
    return () => panel.removeEventListener("wheel", handler);
  }, []);

  return (
    <PageLayout
      title="DOWNLOAD DOKUMEN"
      breadcrumb="Beranda > Download"
      description="Daftar dokumen perencanaan dan kinerja Dinas Komunikasi dan Informatika Kabupaten Banyumas."
      heroImage="/bannerpemkab.png"
    >
      <ModalPreview
        isOpen={!!previewFile}
        fileUrl={previewFile}
        onClose={() => setPreviewFile(null)}
      />

      <div className={styles.wrapper}>
        <section className={styles.section}>
          <h2 className={styles.title}>Renstra</h2>

          <div className={styles.sectionCard}>
            <div className={styles.downloadLayout}>
              {/* ================= KIRI: LIST TAHUN ================= */}
              <div className={styles.listColumn}>
                {/* 2017 */}
                <div className={styles.yearBlock}>
                  <p className={styles.yearLabel}>&gt; 2017</p>
                  <ul className={styles.list}>
                    <li>
                      Renstra bisa download{" "}
                      <a
                        href="/dokumen/Matrik Renstra kominfo 2017.xlsx"
                        className={styles.link}
                        download
                      >
                        DISINI
                      </a>
                    </li>
                  </ul>
                </div>

                {/* 2021 */}
                <div className={styles.yearBlock}>
                  <p className={styles.yearLabel}>&gt; 2021</p>
                  <ul className={styles.list}>
                    <li>
                      Laporan Akuntabilitas Kinerja Instansi Pemerintah (LKJIP)
                      Tahun 2021 bisa di download{" "}
                      <a
                        href="/dokumen/LKjIP Dinkominfo 2021.pdf"
                        className={styles.link}
                        download
                      >
                        DISINI
                      </a>
                    </li>
                  </ul>
                </div>

                {/* 2022 */}
                <div className={styles.yearBlock}>
                  <p className={styles.yearLabel}>&gt; 2022</p>
                  <ul className={styles.list}>
                    <li>
                      Data dan Informasi Kabupaten Banyumas 2022 bisa di
                      download{" "}
                      <a
                        href="/dokumen/DIKB 2022.pdf"
                        className={styles.link}
                        download
                      >
                        DISINI
                      </a>
                    </li>
                    <li>
                      Renja Dinas Komunikasi dan Informatika Kab. Banyumas
                      Tahun 2022 bisa di download{" "}
                      <a
                        href="/dokumen/RENJA DINAS KOMINFO.pdf"
                        className={styles.link}
                        download
                      >
                        DISINI
                      </a>
                    </li>
                    <li>
                      Rencana Aksi Dinas Komunikasi dan Informatika Kab.
                      Banyumas Tahun 2022 bisa di download{" "}
                      <a
                        href="/dokumen/Rencana Aksi Dinkominfo.pdf"
                        className={styles.link}
                        download
                      >
                        DISINI
                      </a>
                    </li>
                  </ul>
                </div>

                {/* 2023 */}
                <div className={styles.yearBlock}>
                  <p className={styles.yearLabel}>&gt; 2023</p>
                  <ul className={styles.list}>
                    <li>
                      Rencana Aksi Dinas Komunikasi dan Informatika Kab.
                      Banyumas Tahun 2023 bisa di download{" "}
                      <a
                        href="/dokumen/Rencana Aksi 2023 Dinkominfo.pdf"
                        className={styles.link}
                        download
                      >
                        DISINI
                      </a>
                    </li>
                  </ul>
                </div>

                {/* 2024 */}
                <div className={styles.yearBlock}>
                  <p className={styles.yearLabel}>&gt; 2024</p>
                  <ul className={styles.list}>
                    <li>
                      Rencana Aksi Dinas Komunikasi dan Informatika Kab.
                      Banyumas Tahun 2024 bisa di download{" "}
                      <a
                        href="/dokumen/Rencana Aksi Dinkominfo 2024.pdf"
                        className={styles.link}
                        download
                      >
                        DISINI
                      </a>
                    </li>
                    <li>
                      Rencana Kerja (RENJA) Perubahan Dinas Komunikasi dan
                      Informatika Kab. Banyumas Tahun 2024 bisa di download{" "}
                      <a
                        href="/dokumen/RENJA PERUBAHAN DINKOMINFO TAHUN 2024.pdf"
                        className={styles.link}
                        download
                      >
                        DISINI
                      </a>
                    </li>
                    <li>
                      Rencana Kerja dan Anggaran Satuan Kerja Perangkat Daerah
                      (RKA SKPD) Dinas Komunikasi dan Informatika Kab. Banyumas
                      Tahun 2024 bisa di download{" "}
                      <a
                        href="/dokumen/RKA SKPD Dinas Komunikasi dan Informatika Tahun 2024.pdf"
                        className={styles.link}
                        download
                      >
                        DISINI
                      </a>
                    </li>
                    <li>
                      Laporan Akuntabilitas Kinerja Instansi Pemerintah (LKJIP)
                      Dinas Komunikasi dan Informatika Kab. Banyumas Tahun 2024
                      bisa di download{" "}
                      <a
                        href="/dokumen/LKJiP Dinkominfo Tahun 2024.pdf"
                        className={styles.link}
                        download
                      >
                        DISINI
                      </a>
                    </li>
                    <li>
                      Dokumen Pelaksanaan Anggaran (DPA) Dinas Komunikasi dan
                      Informatika Kab. Banyumas Tahun 2024 bisa di download{" "}
                      <a
                        href="/dokumen/DPA 2024 DINKOMINFO.pdf"
                        className={styles.link}
                        download
                      >
                        DISINI
                      </a>
                    </li>
                  </ul>
                </div>

                {/* 2025 */}
                <div className={styles.yearBlock}>
                  <p className={styles.yearLabel}>&gt; 2025</p>
                  <ul className={styles.list}>
                    <li>
                      Rencana Aksi Dinas Komunikasi dan Informatika Kab.
                      Banyumas Tahun 2025 bisa di download{" "}
                      <a
                        href="/dokumen/renaksi 2025.pdf"
                        className={styles.link}
                        download
                      >
                        DISINI
                      </a>
                    </li>
                    <li>
                      DPA Dinas Komunikasi dan Informatika Kab. Banyumas Tahun
                      2025 bisa di download{" "}
                      <a
                        href="/dokumen/DPA Belanja 2025 Dinkominfo.pdf"
                        className={styles.link}
                        download
                      >
                        DISINI
                      </a>
                    </li>
                  </ul>
                </div>

                {/* RENSTRA */}
                <div className={styles.yearBlock}>
                  <p className={styles.yearLabel}>&gt; RENSTRA</p>
                  <ul className={styles.list}>
                    <li>
                      Rencana Strategis Dinas Komunikasi dan Informatika Kab.
                      Banyumas Tahun 2024–2026 bisa di download{" "}
                      <a
                        href="/dokumen/RENSTRA DINKOMINFO TAHUN 2024-2026.pdf"
                        className={styles.link}
                        download
                      >
                        DISINI
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ================= KANAN: PANEL KARTU ================= */}
              <div className={styles.cardsColumn}>
                <div className={styles.filePanel} ref={panelRef}>
                  {blocks.map((block, idx) => (
                    <div key={idx} className={styles.yearColumn}>
                      <h3 className={styles.yearHeading}>{block.year}</h3>

                      <div className={styles.scrollWrapper}>
                        <div className={styles.fileGrid}>
                          {block.files.map((f, i) => {
                            const ext = getExt(f.fileName);
                            const isPdf = ext === "pdf";
                            const isExcel = ext === "xlsx" || ext === "xls";
                            const filePath = `/dokumen/${f.fileName}`;

                            return (
                              <article key={i} className={styles.fileCard}>
                                <div className={styles.fileThumb}>
                                  {isPdf && (
                                    <div className={styles.pdfBadge}>PDF</div>
                                  )}
                                  {isExcel && (
                                    <div className={styles.xlsxBadge}>XLSX</div>
                                  )}
                                  {!isPdf && !isExcel && (
                                    <div className={styles.otherBadge}>
                                      FILE
                                    </div>
                                  )}
                                </div>

                                <p className={styles.fileCategory}>
                                  {f.category}
                                </p>
                                <h4 className={styles.fileTitle}>
                                  {f.title}
                                </h4>
                                <p className={styles.fileDesc}>{f.desc}</p>

                                <div className={styles.cardActions}>
                                  {/* 👁 TOMBOL LIHAT */}
                                  <button
                                    type="button"
                                    className={styles.btnOutline}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();

                                      if (isPdf || isExcel) {
                                        // PDF & XLSX → preview di modal
                                        setPreviewFile(filePath);
                                      } else {
                                        // tipe lain (kalau ada) → buka tab baru / download
                                        window.open(filePath, "_blank");
                                      }
                                    }}
                                    style={{ cursor: "pointer" }}
                                  >
                                    👁 Lihat
                                  </button>

                                  {/* ⬇ TOMBOL UNDUH */}
                                  <a
                                    href={filePath}
                                    className={styles.btnGradient}
                                    download
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    ⬇ Unduh
                                  </a>
                                </div>
                              </article>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* END KANAN */}
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
