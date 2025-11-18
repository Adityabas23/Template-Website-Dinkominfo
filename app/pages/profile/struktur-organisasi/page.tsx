// app/profile/struktur-organisasi/page.tsx
import PageLayout from "@/app/component/pagelayout";
import styles from "@/app/assets/css/profile.module.css";
import Link from "next/link";

export default function StrukturOrganisasiPage() {
  return (
    <PageLayout
      title="PROFIL DINKOMINFO"
      breadcrumb="Beranda > Profil > Struktur Organisasi"
      description="Struktur organisasi Dinas Komunikasi dan Informatika Kabupaten Banyumas."
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
              <Link href="/pages/profile/struktur-organisasi" 
                className={`${styles.sidebarButton} ${styles.sidebarButtonActive}`}
                >
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
                href="/pages/profile/iku" className={styles.sidebarButton}>
                Indikator Kinerja Utama
              </Link>
            </li>
          </ul>
        </aside>

        {/* KONTEN KANAN */}
        <section className={styles.profileMain}>
          <h2 className={styles.sectionTitle}>STRUKTUR ORGANISASI</h2>
          <p className={styles.sectionSubtitle}>
            STRUKTUR ORGANISASI DINAS KOMUNIKASI DAN INFORMATIKA KABUPATEN
            BANYUMAS
          </p>

          <div className={styles.structureCard}>
            <div className={styles.structureImageWrapper}>
              <img
                src="/STOK Dinkominfo 2024.jpg"
                alt="Struktur Organisasi Dinas Komunikasi dan Informatika Kabupaten Banyumas 2024"
              />
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
