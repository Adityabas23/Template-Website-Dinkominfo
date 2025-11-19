// FILE: app/PPID/berkala/page.tsx
import PageLayout from "@/app/component/pagelayout";
import styles from "@/app/assets/css/ppid.module.css";
import SidebarPPID from "../SidebarPPID";

export default function BerkalaPage() {
  return (
    <PageLayout
      title="BERKALA"
      breadcrumb="Beranda > PPID > Berkala"
      description="Informasi yang diumumkan secara berkala."
      heroImage="/bannerpemkab.png"
    >
      <div className={styles.profileCard}>
        <SidebarPPID active="berkala" />

        <section className={styles.profileMain}>
          <h2 className={styles.sectionTitle}>Berkala</h2>

          <div className={styles.contentBox}>
            {/* 1. PROFIL DINAS */}
            <p className={styles.contentHeading}>
              1. INFORMASI TENTANG PROFIL DINAS KOMUNIKASI DAN INFORMATIKA
            </p>
            <ul className={styles.contentList}>
              <li>
                <a href="/pages/profile" className={styles.berkalaLink}>
                  Visi dan Misi
                </a>
              </li>
              <li>
                <a href="/pages/profile/tugas-fungsi" className={styles.berkalaLink}>
                  Tugas &amp; Fungsi
                </a>
              </li>
              <li>
                <a href="/pages/profile/struktur-organisasi" className={styles.berkalaLink}>
                  Struktur Organisasi
                </a>
              </li>
              <li>
                <a href="/" className={styles.berkalaLink}>
                  Layanan Publik
                </a>
              </li>
              <li>
                <a href="#" className={styles.berkalaLink}>
                  Profil Singkat Pejabat Struktural
                </a>
              </li>
              <li>
                <a href="#" className={styles.berkalaLink}>
                  LHKPN
                </a>
              </li>
              <li>
                <a href="/pages/data-pegawai" className={styles.berkalaLink}>
                  Profil Singkat Kepegawaian
                </a>
              </li>
            </ul>

            {/* 2. RINGKASAN PROGRAM & KEGIATAN */}
            <p className={styles.contentHeading}>
              2. INFORMASI RINGKASAN PROGRAM DAN KEGIATAN
            </p>
            <ul className={styles.contentList}>
              <li>
                <a href="https://drive.google.com/file/d/1-8anK6dd5N8y3CYOYY-wteedfp4xsL9A/view" className={styles.berkalaLink}>
                  DPA SKPD 2021
                </a>
              </li>
              <li>
                <a href="/dokumen/Capaian Program Kegiatan 2021 Dinkominfo.pdf" className={styles.berkalaLink}>
                  Target dan Capaian Program, Kegiatan
                </a>
              </li>
              <li>
                <a href="/rangkaian kegiatan hari jadi 451 .3.jpg" className={styles.berkalaLink}>
                  Agenda Kerja
                </a>
              </li>
              <li>
                <a href="/dokumen/Renstra Perubahan Dinkominfo Tahun 2022.pdf" className={styles.berkalaLink}>
                  Renstra Perubahan Tahun 2022
                </a>
              </li>
              <li>
                <a href="/dokumen/RENJA DINKOMINFO TAHUN 2023.pdf" className={styles.berkalaLink}>
                  RENJA Tahun 2023
                </a>
              </li>
              <li>
                <a href="/dokumen/RENJA DINKOMINFO TAHUN 2024.pdf" className={styles.berkalaLink}>
                  RENJA Tahun 2024
                </a>
              </li>
              <li>
                <a href="/dokume/Rankhir Renja Dinkominfo 2025.pdf" className={styles.berkalaLink}>
                  RENJA Tahun 2025
                </a>
              </li>
              <li>
                <a href="/dokumen/RENSTRA DINKOMINFO TAHUN 2024-2026.pdf" className={styles.berkalaLink}>
                  Rencana Strategis (RENSTRA) Tahun 2024-2026
                </a>
              </li>
            </ul>

            {/* 3. LAPORAN AKUNTABILITAS KINERJA */}
            <p className={styles.contentHeading}>
              3. INFORMASI LAPORAN AKUNTABILITAS KINERJA
            </p>

            <p className={styles.contentHeading}>
              •{" "}
              <a href="#" className={styles.berkalaLink}>
                Laporan Akuntabilitas Kinerja Instansi Pemerintah (LKJiP)
              </a>
            </p>
            <ul className={styles.contentList}>
              <li>
                <a href="/dokumen/LKjIP Dinkominfo 2020.pdf" className={styles.berkalaLink}>
                  Tahun 2020
                </a>
              </li>
              <li>
                <a href="/dokumen/LKjIP Dinkominfo 2021 (1).pdf" className={styles.berkalaLink}>
                  Tahun 2021
                </a>
              </li>
              <li>
                <a href="/dokumen/LKJiP Dinas Kominfo Tahun 2022.pdf" className={styles.berkalaLink}>
                  Tahun 2022
                </a>
              </li>
              <li>
                <a href="/dokumen/Perjanjian Kinerja Dinkominfo 2023.pdf" className={styles.berkalaLink}>
                  Tahun 2023
                </a>
              </li>
            </ul>

            <p className={styles.contentHeading}>
              •{" "}
              <a href="#" className={styles.berkalaLink}>
                Rencana Kinerja Tahunan (RKT)
              </a>
            </p>
            <ul className={styles.contentList}>
              <li>
                <a href="/dokumen/RKT 2021.pdf" className={styles.berkalaLink}>
                  Tahun 2021
                </a>
              </li>
              <li>
                <a href="/dokumen/RKT 2022.pdf" className={styles.berkalaLink}>
                  Tahun 2022
                </a>
              </li>
              <li>
                <a href="/dokumen/RKT Dinkominfo 2023.pdf" className={styles.berkalaLink}>
                  Tahun 2023
                </a>
              </li>
              <li>
                <a href="/dokumen/RKT 2024.pdf" className={styles.berkalaLink}>
                  Tahun 2024
                </a>
              </li>
            </ul>

            <p className={styles.contentHeading}>
              •{" "}
              <a href="#" className={styles.berkalaLink}>
                Perjanjian Kinerja
              </a>
            </p>
            <ul className={styles.contentList}>
              <li>
                <a href="#" className={styles.berkalaLink}>
                  Tahun 2020
                </a>
              </li>
              <li>
                <a href="/dokumen/PK DINKOMINFO 2021_TTD.pdf" className={styles.berkalaLink}>
                  Tahun 2021
                </a>
              </li>
              <li>
                <a href="/dokumen/Perjanjian Kinerja Dinkominfo Tahun 2022.pdf" className={styles.berkalaLink}>
                  Tahun 2022
                </a>
              </li>
              <li>
                <a href="/dokumen/Perjanjian Kinerja Dinkominfo 2023.pdf" className={styles.berkalaLink}>
                  Tahun 2023
                </a>
              </li>
              <li>
                <a href="/dokumen/Perjanjian_Kinerja_Dinkominfo_2024.pdf" className={styles.berkalaLink}>
                  Tahun 2024
                </a>
              </li>
            </ul>

            <p className={styles.contentHeading}>
              •{" "}
              <a href="#" className={styles.berkalaLink}>
                Indikator Kinerja Utama (IKU)
              </a>
            </p>
            <ul className={styles.contentList}>
              <li>
                <a href="/dokumen/IKU Dinas Komunikasi dan Informatika Kabupaten Banyumas 2021.pdf" className={styles.berkalaLink}>
                  Tahun 2021
                </a>
              </li>
              <li>
                <a href="/dokumen/IKU Dinkominfo Tahun 2022.pdf" className={styles.berkalaLink}>
                  Tahun 2022
                </a>
              </li>
              <li>
                <a href="/dokumen/IKU Dinkominfo Thn 2023.pdf" className={styles.berkalaLink}>
                  Tahun 2023
                </a>
              </li>
              <li>
                <a href="/dokumen/Template LAPORAN SKM SM 02 bln Juli - Nov 2023 FIX.pdf" className={styles.berkalaLink}>
                  SKM Tahun 2023
                </a>
              </li>
            </ul>

            {/* 4. LAPORAN KEUANGAN */}
            <p className={styles.contentHeading}>
              4. INFORMASI LAPORAN KEUANGAN
            </p>
            <ul className={styles.contentList}>
              <li>
                <a href="#" className={styles.berkalaLink}>
                  Laporan Realisasi Anggaran 2020
                </a>
              </li>
              <li>
                <a href="#" className={styles.berkalaLink}>
                  Neraca 2020
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1Fca7Ny0XsdBH-FDxRBdI99_w4mSvsYj8/view" className={styles.berkalaLink}>
                  Catatan Atas Laporan Keuangan (CALK)
                </a>
              </li>
              <li>
                <a href="#" className={styles.berkalaLink}>
                  Laporan Perubahan Ekuitas 2020
                </a>
              </li>
              <li>
                <a href="#" className={styles.berkalaLink}>
                  Laporan Operasional 2020
                </a>
              </li>
              <li>
                <a href="/dokumen/Daftar aset dan Inventaris.pdf" className={styles.berkalaLink}>
                  Daftar Aset &amp; Inventaris Barang
                </a>
              </li>
            </ul>

            {/* 5. PERATURAN / KEBIJAKAN */}
            <p className={styles.contentHeading}>
              5. INFORMASI TENTANG PERATURAN, KEPUTUSAN DAN/ATAU KEBIJAKAN
            </p>
            <ul className={styles.contentList}>
              <li>
                <a href="https://drive.google.com/drive/folders/1tD9XjMmGlbQTJBv38sGo0SZwDWs_gOsu" className={styles.berkalaLink}>
                  Daftar Peraturan/Keputusan Yang Telah Diterbitkan
                </a>
              </li>
              <li>
                <a href="#" className={styles.berkalaLink}>
                  Daftar Peraturan Terkait Tugas dan Fungsi
                </a>
              </li>
            </ul>

            {/* 6. TATA CARA MEMPEROLEH INFORMASI */}
            <p className={styles.contentHeading}>
              6. LAYANAN TATA CARA MEMPEROLEH INFORMASI
            </p>
            <ul className={styles.contentList}>
              <li>
                <a href="#" className={styles.berkalaLink}>
                  Mekanisme Permohonan Informasi
                </a>
              </li>
            </ul>

            {/* 7. PENGADAAN BARANG/JASA */}
            <p className={styles.contentHeading}>
              7. INFORMASI TENTANG PENGADAAN BARANG DAN JASA
            </p>
            <ul className={styles.contentList}>
              <li>
                <a href="/dokumen/SIRUP KOMINFO.pdf" className={styles.berkalaLink}>
                  Rencana Umum Pengadaan Barang &amp; Jasa 2021
                </a>
              </li>
            </ul>

            {/* 8. RTP */}
            <p className={styles.contentHeading}>
              8. RENCANA TINDAK PENGENDALIAN (RTP)
            </p>
            <ul className={styles.contentList}>
              <li>
                <a href="/dokumen/RTP DINKOMINFO BMS 2023 pra reviu.pdf" className={styles.berkalaLink}>
                  Rencana Tindak Pengendalian Pra Reviu Tahun 2023
                </a>
              </li>
              <li>
                <a href="/dokumen/RTP DINKOMINFO BMS 2023_pasca reviu.pdf" className={styles.berkalaLink}>
                  Rencana Tindak Pengendalian Pasca Reviu Tahun 2023
                </a>
              </li>
              <li>
                <a href="/dokumen/Laporan RTP Dinkominfo 2024 (Dokumen Strategis).pdf" className={styles.berkalaLink}>
                  Laporan RTP 2024 (Dokumen Strategis)
                </a>
              </li>
              <li>
                <a href="/dokumen/Laporan RTP Dinkominfo 2024 (Dokumen Operasional).pdf" className={styles.berkalaLink}>
                  Laporan RTP 2024 (Dokumen Operasional)
                </a>
              </li>
              <li>
                <a href="/dokumen/Laporan RTP Dinkominfo 2025 (Dokumen Strategis).pdf" className={styles.berkalaLink}>
                  Laporan RTP 2025 (Dokumen Strategis)
                </a>
              </li>
              <li>
                <a href="/dokumen/Laporan RTP Dinkominfo 2025 (Dokumen Operasional).pdf" className={styles.berkalaLink}>
                  Laporan RTP 2025 (Dokumen Operasional)
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
