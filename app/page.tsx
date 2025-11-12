// app/page.tsx
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/component/header"; // Pastikan path benar

export default function HomePage() {
  return (
    <>


      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Menjawab Kebutuhan Informasi Warga Banyumas
          </h1>
          <p className={styles.heroSubtitle}>
            Temukan informasi publik terkini dari Pemerintah Kabupaten Banyumas.
          </p>

          <form className={styles.heroSearch}>
            <input type="text" placeholder="Cari artikel, berita, atau layanan..." />
            <button type="submit">Cari</button>
          </form>

          <div className={styles.heroWidget}>
            <strong>Layanan Publik Unggulan:</strong>
            <div className={styles.widgetLinks}>
              <Link href="#">Perizinan Online</Link>
              <Link href="#">Info Pajak</Link>
              <Link href="#">Lapor!</Link>
              <Link href="#">PPID</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            {/* Main Content */}
            <article className={styles.mainContent}>
              <Image
                src="/berita1.jpg"
                alt="Berita Utama"
                width={800}
                height={500}
                className={styles.mainImage}
                priority
              />
              <h1 className={styles.mainTitle}>
                Dinkominfo Gandeng Kepala Pasar se-Kabupaten Banyumas dalam Kampanye "Gempur Rokok Ilegal"
              </h1>
              <p className={styles.postMeta}>
                Diposting pada <time dateTime="2025-11-12">12 November 2025</time> - Kategori: Berita
              </p>
              <div className={styles.articleBody}>
                <p>
                  BANYUMAS – Pemerintah Kabupaten Banyumas, melalui instansi terkait seperti Dinas Komunikasi dan Informatika (Dinkominfo) serta berkolaborasi dengan Kantor Bea Cukai Purwokerto, menggelar sosialiasi... (isi berita selengkapnya)
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </article>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Berita Lainnya</h3>
                <ul className={styles.newsList}>
                  <li>
                    <Link href="#">
                      <Image src="https://placehold.co/100x70/cccccc/333333?text=Foto" width={100} height={70} alt="Berita 1" />
                      <span>Sosialisasi Aplikasi SIBERKAB di Kecamatan...</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Image src="https://placehold.co/100x70/cccccc/333333?text=Foto" width={100} height={70} alt="Berita 2" />
                      <span>Rapat Koordinasi Persiapan Implementasi Tanda Tangan...</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Image src="https://placehold.co/100x70/cccccc/333333?text=Foto" width={100} height={70} alt="Berita 3" />
                      <span>Pelatihan Keamanan Informasi untuk Admin OPD...</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className={styles.sidebarCard}>
                <h3>Agenda</h3>
                <p>Belum ada agenda terdekat.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}