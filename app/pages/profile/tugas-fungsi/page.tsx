// app/profile/tugas-fungsi/page.tsx
import PageLayout from "@/app/component/pagelayout";
import styles from "@/app/assets/css/profile.module.css";
import Link from "next/link";

export default function TugasFungsiPage() {
  return (
    <PageLayout
      title="PROFIL DINKOMINFO"
      breadcrumb="Beranda > Profil > Tugas dan Fungsi"
      description="Tugas dan fungsi Dinas Komunikasi dan Informatika Kabupaten Banyumas."
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
              <Link href="/pages/profile/tugas-fungsi" 
              className={`${styles.sidebarButton} ${styles.sidebarButtonActive}`}
              >
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
          <h2 className={styles.sectionTitle}>TUGAS DAN FUNGSI</h2>
          <p className={styles.sectionSubtitle}>
            TUGAS DAN FUNGSI DINAS KOMUNIKASI DAN INFORMATIKA KABUPATEN BANYUMAS
          </p>

          <div className={styles.contentBox}>
            <p className={styles.contentHeading}>1. Tugas</p>
            <p className={styles.contentParagraph}>
              Berdasarkan Peraturan Bupati Banyumas No. 78 Tahun 2020 tentang
              Kedudukan Susunan Organisasi, Tugas dan Fungsi serta Tata Kerja
              Dinas Komunikasi dan Informatika Kabupaten Banyumas, Dinas
              Komunikasi dan Informatika mempunyai tugas membantu Bupati dalam
              melaksanakan perumusan kebijakan, pelaksanaan, evaluasi dan
              pelaporan pelaksanaan urusan pemerintahan bidang komunikasi dan
              informatika, bidang statistik, dan bidang persandian yang merupakan
              kewenangan daerah dan tugas pembantuan yang diberikan kepada
              kabupaten.
            </p>

            <p className={styles.contentHeading}>2. Fungsi</p>
            <p className={styles.contentParagraph}>
              Dalam melaksanakan tugas sebagaimana dimaksud di atas, Dinas
              Komunikasi dan Informatika menyelenggarakan fungsi:
            </p>

            <ul className={styles.contentList}>
              <li>
                perumusan kebijakan umum kesekretariatan, bidang informasi dan
                komunikasi publik, bidang aplikasi informatika, bidang statistik,
                persandian, dan infrastruktur teknologi informasi dan komunikasi;
              </li>
              <li>
                pelaksanaan kebijakan kesekretariatan, bidang informasi dan
                komunikasi publik, bidang aplikasi informatika, bidang statistik,
                persandian, dan infrastruktur teknologi informasi dan komunikasi;
              </li>
              <li>
                pelaksanaan administrasi kesekretariatan, bidang informasi dan
                komunikasi publik, bidang aplikasi informatika, bidang statistik,
                persandian, dan infrastruktur teknologi informasi dan komunikasi;
              </li>
              <li>
                evaluasi dan pelaporan kesekretariatan, bidang informasi dan
                komunikasi publik, bidang aplikasi informatika, bidang statistik,
                persandian, dan infrastruktur teknologi informasi dan komunikasi;
              </li>
              <li>
                penyelenggaraan fungsi lain yang diberikan oleh Bupati sesuai
                dengan tugas dan fungsinya.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
