// app/profile/page.tsx
import PageLayout from "@/app/component/pagelayout";
import styles from "@/app/assets/css/profile.module.css";

export default function ProfilePage() {
  return (
    <PageLayout
      title={`PROFIL DINKOMINFO<br />PEMERINTAH KABUPATEN BANYUMAS`}
      breadcrumb="Beranda > Profil"
      description="Visi, misi, dan informasi mengenai Dinas Komunikasi dan Informatika Kabupaten Banyumas."
    >
      {/* isi ini akan masuk ke dalam <main className="page-content"> di PageLayout */}
      <div className={styles.profileCard}>
        {/* SIDEBAR */}
        <aside className={styles.sidebar}>
          <h2 className={styles.sidebarTitle}>PROFIL DINKOMINFO</h2>
          <ul className={styles.sidebarMenu}>
            <li className={styles.sidebarItem}>
              <button
                className={`${styles.sidebarButton} ${styles.sidebarButtonActive}`}
              >
                Visi dan Misi
              </button>
            </li>
            {/* item lain */}
          </ul>
        </aside>

        {/* KONTEN KANAN */}
        <section className={styles.profileMain}>
          <h2 className={styles.sectionTitle}>VISI DAN MISI</h2>
          <p className={styles.sectionSubtitle}>
            Visi dan misi Dinas Komunikasi dan Informatika Kabupaten Banyumas
          </p>

          <div className={styles.infoCard}>
            <div>
              <h3 className={styles.infoCardTextTitle}>VISI</h3>
              <p className={styles.infoCardQuote}>
                "MENJADIKAN BANYUMAS YANG MAJU, ADIL-MAKMUR, DAN MANDIRI."
              </p>
            </div>
            <div className={styles.infoCardImage}>
              <img src="/HD.png" alt="Visi" />
            </div>
          </div>

          <div className={`${styles.infoCard} ${styles.infoCardSecond}`}>
            <div className={styles.infoCardImage}>
              <img src="/misi.jpg" alt="Misi" />
            </div>
            <div>
              <h3 className={styles.infoCardTextTitle}>MISI</h3>
              <ol className={styles.misiList}>
                <li>Mewujudkan Banyumas sebagai barometer pelayanan publik...</li>
                {/* dst */}
              </ol>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
