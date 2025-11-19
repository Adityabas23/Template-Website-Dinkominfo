// FILE: app/PPID/laporan-tahunan/page.tsx
import PageLayout from "@/app/component/pagelayout";
import styles from "@/app/assets/css/ppid.module.css";
import SidebarPPID from "../SidebarPPID";

export default function LaporanTahunanPage() {
  const pdfPath =
    "/dokumen/laporan_tahunan_ppid_dinkominfo_banyumas_tahun_2024_181125074113.pdf";

  return (
    <PageLayout
      title="LAPORAN TAHUNAN"
      breadcrumb="Beranda > PPID > Laporan Tahunan"
      description="Laporan tahunan PPID Pelaksana Dinas Komunikasi dan Informatika Kabupaten Banyumas."
      heroImage="/bannerpemkab.png"
    >
      <div className={styles.profileCard}>
        {/* SIDEBAR */}
        <SidebarPPID active="laporan-tahunan" />

        {/* KONTEN KANAN */}
        <section className={styles.profileMain}>
          {/* JUDUL HALAMAN */}
          <h2 className={styles.sectionTitle}>Laporan Tahunan</h2>

          {/* TEKS JUDUL LAPORAN */}
          <p className={styles.sectionSubtitle}>
            LAPORAN TAHUNAN PPID PELAKSANA DINAS KOMUNIKASI DAN INFORMATIKA
            KABUPATEN BANYUMAS TAHUN 2024
          </p>

          {/* CARD PDF (PAKAI GRADASI & VIEWER YANG SUDAH ADA DI CSS) */}
          <div className={styles.pdfCard}>
            {/* PDF VIEWER */}
            <iframe
              className={styles.pdfViewer}
              src={`${pdfPath}#toolbar=1&navpanes=0`}
              title="Laporan Tahunan PPID Pelaksana Dinkominfo Banyumas 2024"
            />
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
