// app/profile/alamat-kontak/page.tsx
import PageLayout from "@/app/component/pagelayout";
import styles from "@/app/assets/css/profile.module.css";
import Link from "next/link";

export default function AlamatKontakPage() {
  return (
    <PageLayout
      title="PROFIL DINKOMINFO"
      breadcrumb="Beranda > Profil > Alamat dan Kontak"
      description="Informasi alamat dan kontak resmi Dinas Komunikasi dan Informatika Kabupaten Banyumas."
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
              <Link href="/pages/profile/alamat-kontak" 
                className={`${styles.sidebarButton} ${styles.sidebarButtonActive}`}>
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
          <h2 className={styles.sectionTitle}>ALAMAT KONTAK</h2>
          <p className={styles.sectionSubtitle}>
            INFORMASI KONTAK DINAS KOMUNIKASI DAN INFORMATIKA KABUPATEN BANYUMAS
          </p>

          <div className={styles.contactBox}>
            <p>
              <span className={styles.contactIcon}>📍</span>
              <strong>Alamat Kantor</strong> : Jalan Masjid No.8 Purwokerto 53115
            </p>
            <br />

            <p>
              <span className={styles.contactIcon}>📞</span>
              <strong>No. Telp</strong> : (0281) 632338
            </p>
            <br />

            <p>
              <span className={styles.contactIcon}>📠</span>
              <strong>No. Fax</strong> : (0281) 632338
            </p>
            <br />

            <p>
              <span className={styles.contactIcon}>✉️</span>
              <strong>Email</strong> : dinkominfo@banyumaskab.go.id
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
