// app/download/page.tsx

"use client";

import React from "react";
import PageLayout from "@/app/component/pagelayout";
import styles from "@/app/assets/css/download.module.css";

const handleHorizontalScroll = (
    e: React.WheelEvent<HTMLDivElement>
  ): void => {
    const el = e.currentTarget;
  
    // selalu pakai deltaY untuk geser horizontal
    e.preventDefault();
    el.scrollLeft += e.deltaY;
  };

export default function DownloadPage() {
  return (
    <PageLayout
      title="DOWNLOAD DOKUMEN"
      breadcrumb="Beranda > Download"
      description="Daftar dokumen perencanaan dan kinerja Dinas Komunikasi dan Informatika Kabupaten Banyumas."
      heroImage="/bannerpemkab.png"
    >
      <div className={styles.wrapper}>
        <section className={styles.section}>
          <h2 className={styles.title}>Renstra</h2>

          {/* CARD PUTIH DI BAWAH JUDUL */}
          <div className={styles.sectionCard}>
            <div className={styles.downloadLayout}>
              {/* =====================================================
                  KOLOM KIRI : LIST TAHUN DAN LINK (TEXT)
                 ===================================================== */}
              <div className={styles.listColumn}>
                {/* 2017 */}
                <div className={styles.yearBlock}>
                  <p className={styles.yearLabel}>&gt; 2017</p>
                  <ul className={styles.list}>
                    <li>
                      Renstra bisa download{" "}
                      <a href="#" className={styles.link}>
                        disini
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
                      <a href="#" className={styles.link}>
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
                      <a href="#" className={styles.link}>
                        DISINI
                      </a>
                    </li>
                    <li>
                      Renja Dinas Komunikasi dan Informatika Kab. Banyumas
                      Tahun 2022 bisa di download{" "}
                      <a href="#" className={styles.link}>
                        DISINI
                      </a>
                    </li>
                    <li>
                      Rencana Aksi Dinas Komunikasi dan Informatika Kab.
                      Banyumas Tahun 2022 bisa di download{" "}
                      <a href="#" className={styles.link}>
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
                      <a href="#" className={styles.link}>
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
                      <a href="#" className={styles.link}>
                        DISINI
                      </a>
                    </li>
                    <li>
                      Rencana Kerja (RENJA) Perubahan Dinas Komunikasi dan
                      Informatika Kab. Banyumas Tahun 2024 bisa di download{" "}
                      <a href="#" className={styles.link}>
                        DISINI
                      </a>
                    </li>
                    <li>
                      Rencana Kerja dan Anggaran Satuan Kerja Perangkat Daerah
                      (RKA SKPD) Dinas Komunikasi dan Informatika Kab. Banyumas
                      Tahun 2024 bisa di download{" "}
                      <a href="#" className={styles.link}>
                        DISINI
                      </a>
                    </li>
                    <li>
                      Laporan Akuntabilitas Kinerja Instansi Pemerintah (LKJIP)
                      Dinas Komunikasi dan Informatika Kab. Banyumas Tahun 2024
                      bisa di download{" "}
                      <a href="#" className={styles.link}>
                        DISINI
                      </a>
                    </li>
                    <li>
                      Dokumen Pelaksanaan Anggaran (DPA) Dinas Komunikasi dan
                      Informatika Kab. Banyumas Tahun 2024 bisa di download{" "}
                      <a href="#" className={styles.link}>
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
                      <a href="#" className={styles.link}>
                        DISINI
                      </a>
                    </li>
                    <li>
                      DPA Dinas Komunikasi dan Informatika Kab. Banyumas Tahun
                      2025 bisa di download{" "}
                      <a href="#" className={styles.link}>
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
                      <a href="#" className={styles.link}>
                        DISINI
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* =====================================================
                  KOLOM KANAN : PANEL GRADIENT DAN GRID FILE PER TAHUN
                 ===================================================== */}
              <div className={styles.cardsColumn}>
                <div className={styles.filePanel}>
                  {/* 2017 */}
                  <div className={styles.yearColumn}>
                    <h3 className={styles.yearHeading}>2017</h3>
                    <div
                      className={styles.fileGrid}
                      onWheelCapture={handleHorizontalScroll}
                    >
                      <article className={styles.fileCard}>
                        <div className={styles.fileThumb}>
                          <div className={styles.pdfBadge}>PDF</div>
                        </div>
                        <p className={styles.fileCategory}>Renstra</p>
                        <h4 className={styles.fileTitle}>
                          Renstra Dinas Kominfo 2017
                        </h4>
                        <p className={styles.fileDesc}>
                          Dokumen rencana strategis Dinas Komunikasi dan
                          Informatika Kabupaten Banyumas Tahun 2017.
                        </p>
                        <div className={styles.cardActions}>
                          <a href="#" className={styles.btnOutline}>
                            👁 Lihat
                          </a>
                          <a href="#" className={styles.btnGradient}>
                            ⬇ Unduh
                          </a>
                        </div>
                      </article>
                    </div>
                  </div>

                  {/* 2021 */}
                  <div className={styles.yearColumn}>
                    <h3 className={styles.yearHeading}>2021</h3>
                    <div
                      className={styles.fileGrid}
                      onWheelCapture={handleHorizontalScroll}
                    >
                      <article className={styles.fileCard}>
                        <div className={styles.fileThumb}>
                          <div className={styles.pdfBadge}>PDF</div>
                        </div>
                        <p className={styles.fileCategory}>LKJIP</p>
                        <h4 className={styles.fileTitle}>
                          LKJIP Dinas Kominfo 2021
                        </h4>
                        <p className={styles.fileDesc}>
                          Laporan Akuntabilitas Kinerja Instansi Pemerintah
                          (LKJIP) Tahun 2021.
                        </p>
                        <div className={styles.cardActions}>
                          <a href="#" className={styles.btnOutline}>
                            👁 Lihat
                          </a>
                          <a href="#" className={styles.btnGradient}>
                            ⬇ Unduh
                          </a>
                        </div>
                      </article>
                    </div>
                  </div>

                  {/* 2022 */}
                  <div className={styles.yearColumn}>
                    <h3 className={styles.yearHeading}>2022</h3>
                    <div
                      className={styles.fileGrid}
                      onWheelCapture={handleHorizontalScroll}
                    >
                      <article className={styles.fileCard}>
                        <div className={styles.fileThumb}>
                          <div className={styles.pdfBadge}>PDF</div>
                        </div>
                        <p className={styles.fileCategory}>
                          Data &amp; Informasi
                        </p>
                        <h4 className={styles.fileTitle}>
                          Data dan Informasi Kabupaten Banyumas 2022
                        </h4>
                        <p className={styles.fileDesc}>
                          Dokumen data dan informasi Kabupaten Banyumas Tahun
                          2022.
                        </p>
                        <div className={styles.cardActions}>
                          <a href="#" className={styles.btnOutline}>
                            👁 Lihat
                          </a>
                          <a href="#" className={styles.btnGradient}>
                            ⬇ Unduh
                          </a>
                        </div>
                      </article>

                      <article className={styles.fileCard}>
                        <div className={styles.fileThumb}>
                          <div className={styles.pdfBadge}>PDF</div>
                        </div>
                        <p className={styles.fileCategory}>Renja</p>
                        <h4 className={styles.fileTitle}>
                          Renja Dinas Kominfo 2022
                        </h4>
                        <p className={styles.fileDesc}>
                          Rencana kerja Dinas Komunikasi dan Informatika
                          Kabupaten Banyumas Tahun 2022.
                        </p>
                        <div className={styles.cardActions}>
                          <a href="#" className={styles.btnOutline}>
                            👁 Lihat
                          </a>
                          <a href="#" className={styles.btnGradient}>
                            ⬇ Unduh
                          </a>
                        </div>
                      </article>

                      <article className={styles.fileCard}>
                        <div className={styles.fileThumb}>
                          <div className={styles.pdfBadge}>PDF</div>
                        </div>
                        <p className={styles.fileCategory}>Rencana Aksi</p>
                        <h4 className={styles.fileTitle}>
                          Rencana Aksi Dinas Kominfo 2022
                        </h4>
                        <p className={styles.fileDesc}>
                          Rencana aksi pelaksanaan program Dinas Kominfo Tahun
                          2022.
                        </p>
                        <div className={styles.cardActions}>
                          <a href="#" className={styles.btnOutline}>
                            👁 Lihat
                          </a>
                          <a href="#" className={styles.btnGradient}>
                            ⬇ Unduh
                          </a>
                        </div>
                      </article>
                    </div>
                  </div>

                  {/* 2023 */}
                  <div className={styles.yearColumn}>
                    <h3 className={styles.yearHeading}>2023</h3>
                    <div
                      className={styles.fileGrid}
                      onWheelCapture={handleHorizontalScroll}
                    >
                      <article className={styles.fileCard}>
                        <div className={styles.fileThumb}>
                          <div className={styles.pdfBadge}>PDF</div>
                        </div>
                        <p className={styles.fileCategory}>Rencana Aksi</p>
                        <h4 className={styles.fileTitle}>
                          Rencana Aksi Dinas Kominfo 2023
                        </h4>
                        <p className={styles.fileDesc}>
                          Dokumen rencana aksi pelaksanaan program Tahun 2023.
                        </p>
                        <div className={styles.cardActions}>
                          <a href="#" className={styles.btnOutline}>
                            👁 Lihat
                          </a>
                          <a href="#" className={styles.btnGradient}>
                            ⬇ Unduh
                          </a>
                        </div>
                      </article>
                    </div>
                  </div>

                  {/* 2024 */}
                  <div className={styles.yearColumn}>
                    <h3 className={styles.yearHeading}>2024</h3>
                    <div
                      className={styles.fileGrid}
                      onWheelCapture={handleHorizontalScroll}
                    >
                      {/* Rencana Aksi 2024 */}
                      <article className={styles.fileCard}>
                        <div className={styles.fileThumb}>
                          <div className={styles.pdfBadge}>PDF</div>
                        </div>
                        <p className={styles.fileCategory}>Rencana Aksi</p>
                        <h4 className={styles.fileTitle}>
                          Rencana Aksi Dinas Kominfo 2024
                        </h4>
                        <p className={styles.fileDesc}>
                          Dokumen rencana aksi pelaksanaan program Dinas Kominfo
                          Tahun 2024.
                        </p>
                        <div className={styles.cardActions}>
                          <a href="#" className={styles.btnOutline}>
                            👁 Lihat
                          </a>
                          <a href="#" className={styles.btnGradient}>
                            ⬇ Unduh
                          </a>
                        </div>
                      </article>

                      {/* RENJA Perubahan 2024 */}
                      <article className={styles.fileCard}>
                        <div className={styles.fileThumb}>
                          <div className={styles.pdfBadge}>PDF</div>
                        </div>
                        <p className={styles.fileCategory}>Renja Perubahan</p>
                        <h4 className={styles.fileTitle}>
                          RENJA Perubahan Dinas Kominfo 2024
                        </h4>
                        <p className={styles.fileDesc}>
                          Rencana Kerja (RENJA) Perubahan Dinas Kominfo
                          Kabupaten Banyumas Tahun 2024.
                        </p>
                        <div className={styles.cardActions}>
                          <a href="#" className={styles.btnOutline}>
                            👁 Lihat
                          </a>
                          <a href="#" className={styles.btnGradient}>
                            ⬇ Unduh
                          </a>
                        </div>
                      </article>

                      {/* RKA SKPD 2024 */}
                      <article className={styles.fileCard}>
                        <div className={styles.fileThumb}>
                          <div className={styles.pdfBadge}>PDF</div>
                        </div>
                        <p className={styles.fileCategory}>RKA SKPD</p>
                        <h4 className={styles.fileTitle}>
                          RKA SKPD Dinas Kominfo 2024
                        </h4>
                        <p className={styles.fileDesc}>
                          Rencana Kerja dan Anggaran Satuan Kerja Perangkat
                          Daerah Tahun 2024.
                        </p>
                        <div className={styles.cardActions}>
                          <a href="#" className={styles.btnOutline}>
                            👁 Lihat
                          </a>
                          <a href="#" className={styles.btnGradient}>
                            ⬇ Unduh
                          </a>
                        </div>
                      </article>

                      {/* LKJIP 2024 */}
                      <article className={styles.fileCard}>
                        <div className={styles.fileThumb}>
                          <div className={styles.pdfBadge}>PDF</div>
                        </div>
                        <p className={styles.fileCategory}>LKJIP</p>
                        <h4 className={styles.fileTitle}>
                          LKJIP Dinas Kominfo 2024
                        </h4>
                        <p className={styles.fileDesc}>
                          Laporan Akuntabilitas Kinerja Instansi Pemerintah
                          Dinas Kominfo Tahun 2024.
                        </p>
                        <div className={styles.cardActions}>
                          <a href="#" className={styles.btnOutline}>
                            👁 Lihat
                          </a>
                          <a href="#" className={styles.btnGradient}>
                            ⬇ Unduh
                          </a>
                        </div>
                      </article>

                      {/* DPA 2024 */}
                      <article className={styles.fileCard}>
                        <div className={styles.fileThumb}>
                          <div className={styles.pdfBadge}>PDF</div>
                        </div>
                        <p className={styles.fileCategory}>DPA</p>
                        <h4 className={styles.fileTitle}>
                          DPA Dinas Kominfo 2024
                        </h4>
                        <p className={styles.fileDesc}>
                          Dokumen Pelaksanaan Anggaran Dinas Kominfo Kabupaten
                          Banyumas Tahun 2024.
                        </p>
                        <div className={styles.cardActions}>
                          <a href="#" className={styles.btnOutline}>
                            👁 Lihat
                          </a>
                          <a href="#" className={styles.btnGradient}>
                            ⬇ Unduh
                          </a>
                        </div>
                      </article>
                    </div>
                  </div>

                  {/* 2025 */}
                  <div className={styles.yearColumn}>
                    <h3 className={styles.yearHeading}>2025</h3>
                    <div
                      className={styles.fileGrid}
                      onWheelCapture={handleHorizontalScroll}
                    >
                      <article className={styles.fileCard}>
                        <div className={styles.fileThumb}>
                          <div className={styles.pdfBadge}>PDF</div>
                        </div>
                        <p className={styles.fileCategory}>Rencana Aksi</p>
                        <h4 className={styles.fileTitle}>
                          Rencana Aksi Dinas Kominfo 2025
                        </h4>
                        <p className={styles.fileDesc}>
                          Dokumen rencana aksi pelaksanaan program Tahun 2025.
                        </p>
                        <div className={styles.cardActions}>
                          <a href="#" className={styles.btnOutline}>
                            👁 Lihat
                          </a>
                          <a href="#" className={styles.btnGradient}>
                            ⬇ Unduh
                          </a>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
              {/* END KOLOM KANAN */}
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
