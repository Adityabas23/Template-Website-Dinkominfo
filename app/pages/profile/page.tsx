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
      {/* isi ini akan muncul di dalam <main className="page-content"> dari PageLayout */}
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
            {/* menu lain bisa ditambah di sini */}
          </ul>
        </aside>

        {/* KONTEN KANAN */}
        <section className={styles.profileMain}>
          <h2 className={styles.sectionTitle}>VISI DAN MISI</h2>
          <p className={styles.sectionSubtitle}>
            VISI DAN MISI DINAS KOMUNIKASI DAN INFORMATIKA KABUPATEN BANYUMAS
          </p>

          {/* KARTU VISI */}
          <div className={styles.infoCard}>
            <div>
              <h3 className={styles.infoCardTextTitle}>VISI</h3>
              <p className={styles.infoCardQuote}>
                &quot;MENJADIKAN BANYUMAS YANG MAJU, ADIL-MAKMUR, DAN MANDIRI.&quot;
              </p>
            </div>
            <div className={styles.infoCardImage}>
              {/* sesuaikan path file di /public */}
              <img src="/HD.png" alt="Monumen Banyumas" />
            </div>
          </div>

          {/* KARTU MISI – mengikuti layout gambar ke-3 */}
          <div className={`${styles.infoCard} ${styles.infoCardSecond}`}>
            <div className={styles.infoCardImage}>
              <img src="/misi.jpg" alt="Upacara Misi Banyumas" />
            </div>

            <div>
              <h3 className={styles.infoCardTextTitle}>MISI</h3>
              <ol className={styles.misiList}>
                <li>
                  Mewujudkan Banyumas sebagai barometer pelayanan publik dengan
                  membangun sistem integritas birokrasi yang profesional, bersih,
                  partisipatif, inovatif, dan bermartabat.
                </li>
                <li>
                  Meningkatkan kualitas hidup warga melalui pemenuhan kebutuhan dan
                  layanan dasar pendidikan, kesehatan, dan sosial.
                </li>
                <li>
                  Meningkatkan pertumbuhan ekonomi dan daya saing daerah yang
                  berkualitas, berkelanjutan, dan berkeadilan.
                </li>
                <li>
                  Mewujudkan Banyumas sebagai kabupaten pelopor dalam penguatan
                  tata kelola pemerintahan berbasis teknologi informasi dan
                  komunikasi.
                </li>
                <li>
                  Menciptakan iklim investasi yang berorientasi pada perluasan
                  kesempatan kerja yang berbasis potensi lokal dan ramah lingkungan.
                </li>
                <li>
                  Meningkatkan kualitas dan kuantitas infrastruktur dasar yang
                  merata dan memadai sebagai daya ungkit pembangunan daerah.
                </li>
                <li>
                  Mewujudkan kemandirian ekonomi dengan menggerakkan industri
                  kreatif, pariwisata, dan ekonomi lokal lainnya yang berdaya saing.
                </li>
                <li>
                  Mewujudkan tatanan masyarakat yang berbudaya, berkepribadian,
                  serta menjunjung tinggi nilai nasionalisme dan religius.
                </li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
