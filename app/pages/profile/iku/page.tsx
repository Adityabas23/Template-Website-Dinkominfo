// app/profile/iku/page.tsx
import PageLayout from "@/app/component/pagelayout";
import styles from "@/app/assets/css/profile.module.css";
import Link from "next/link";

export default function IKUPage() {
  return (
    <PageLayout
      title="PROFIL DINKOMINFO"
      breadcrumb="Beranda > Profil > Indikator Kinerja Utama"
      description="Indikator Kinerja Utama (IKU) Dinas Komunikasi dan Informatika Kabupaten Banyumas."
      heroImage="/bannerpemkab.png"
    >
      <div className={styles.profileCard}>
        
        {/* SIDEBAR */}
        <aside className={styles.sidebar}>
          <h2 className={styles.sidebarTitle}>PROFIL DINKOMINFO</h2>
          <ul className={styles.sidebarMenu}>
            <li className={styles.sidebarItem}>
              <Link href="/pages/profile" className={styles.sidebarButton}>
                Visi dan Misi
              </Link>
            </li>
            <li className={styles.sidebarItem}>
              <Link href="/pages/profile/struktur-organisasi" className={styles.sidebarButton}>
                Struktur dan Organisasi
              </Link>
            </li>
            <li className={styles.sidebarItem}>
              <Link href="/pages/profile/alamat-kontak" className={styles.sidebarButton}>
                Alamat dan Kontak
              </Link>
            </li>
            <li className={styles.sidebarItem}>
              <Link href="/pages/profile/tugas-fungsi" className={styles.sidebarButton}>
                Tugas dan Fungsi
              </Link>
            </li>
            <li className={styles.sidebarItem}>
              <Link href="/pages/profile/sejarah" className={styles.sidebarButton}>
                Sejarah Dinkominfo
              </Link>
            </li>
            <li className={styles.sidebarItem}>
              <Link
                href="/pages/profile/iku"
                className={`${styles.sidebarButton} ${styles.sidebarButtonActive}`}
              >
                Indikator Kinerja Utama
              </Link>
            </li>
          </ul>
        </aside>

        {/* MAIN CONTENT */}
        <section className={styles.profileMain}>
          <h2 className={styles.sectionTitle}>INDIKATOR KINERJA UTAMA (IKU)</h2>
          <p className={styles.sectionSubtitle}>
            Indikator Kinerja Utama Kominfo Tahun 2021
          </p>

          <p className={styles.downloadText}>
            Indikator Kinerja Utama Kominfo Tahun 2021 dapat diunduh{" "}
            <a
              href="https://drive.google.com/file/d/1PLXuTV11__CCMKso5dlTe5WyGVTlY3UE/view"
              download
              className={styles.downloadLink}
            >
              di sini
            </a>
          </p>

          <div className={styles.pdfCard}>
          <div className={styles.pdfCard}>
            <iframe
                src="https://drive.google.com/file/d/1PLXuTV11__CCMKso5dlTe5WyGVTlY3UE/preview"
                className={styles.pdfViewer}
                allow="autoplay"
            ></iframe>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
