// app/profile/sejarah/page.tsx
import PageLayout from "@/app/component/pagelayout";
import styles from "@/app/assets/css/profile.module.css";
import Link from "next/link";

export default function SejarahDinkominfoPage() {
  return (
    <PageLayout
      title="PROFIL DINKOMINFO"
      breadcrumb="Beranda > Profil > Sejarah Dinkominfo"
      description="Sejarah perkembangan Dinas Komunikasi dan Informatika Kabupaten Banyumas."
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
              <Link href="/pages/profile/sejarah" 
                className={`${styles.sidebarButton} ${styles.sidebarButtonActive}`}
                >
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
          <h2 className={styles.sectionTitle}>SEJARAH DINKOMINFO</h2>
          <p className={styles.sectionSubtitle}>
            SEJARAH DINAS KOMUNIKASI DAN INFORMATIKA KABUPATEN BANYUMAS
          </p>

          <div className={styles.contentBox}>
            <p className={styles.contentHeading}>
              Sejarah Dinkominfo Kabupaten Banyumas
            </p>

            <p className={styles.contentParagraph}>
              Perubahan struktur dan fungsi organisasi Dinas Komunikasi dan
              Informatika di Kabupaten Banyumas saat ini tentu tak lepas dari
              sejarah awal berdirinya Departemen Penerangan sebagai cikal bakal
              fungsi komunikasi dan informasi pemerintah di Indonesia.
            </p>

            <p className={styles.contentParagraph}>
              Pada masa Orde Lama dan Orde Baru, Departemen Penerangan banyak
              mengatur dan membina pers, media massa, televisi, film, radio,
              grafika, percetakan, dan penerangan umum. Departemen Penerangan
              sendiri terdiri atas Direktorat Jenderal Penerangan Umum,
              Direktorat Jenderal Radio, Televisi, Film, Direktorat Jenderal
              Urusan Penyiaran dan Media Massa, Direktorat Jenderal Pembinaan
              Pers dan Grafika, serta memiliki instansi vertikal (kantor
              wilayah dan kantor dinas) sampai daerah, dan juga memegang kendali
              TVRI, RRI, dan Kantor Berita Antara.
            </p>

            <p className={styles.contentParagraph}>
              Ketika Bapak Abdurrahman Wahid menjadi Presiden RI pada tahun
              1999, Departemen Penerangan dan Departemen Sosial dibubarkan.
              Pembubaran tersebut dilakukan untuk efisiensi dan perampingan
              kabinet pemerintahan, sekaligus dalam rangka implementasi
              sepenuhnya Undang-Undang Nomor 22 Tahun 1999 tentang Otonomi
              Daerah.
            </p>

            <p className={styles.contentParagraph}>
              Perubahan struktur organisasi pemerintahan pusat turut berdampak
              pada daerah kabupaten/kota di Indonesia, termasuk Kabupaten
              Banyumas. Melalui Peraturan Daerah Kabupaten Banyumas Nomor 23
              Tahun 2000 tentang Pembentukan Susunan Organisasi dan Tata Kerja
              Daerah Kabupaten Banyumas, fungsi Departemen Penerangan digabung
              dengan Kantor Pengelolaan Data Elektronik (KPDE) menjadi Kantor
              Data Informasi dan Komunikasi (KDIK). Perubahan nomenklatur
              struktur organisasi dan tata tugas KDIK kemudian berubah menjadi
              Badan Arsip Informasi dan Kehumasan (BAIK).
            </p>

            <p className={styles.contentParagraph}>
              Pada tanggal 31 Mei 2004 ditetapkan Peraturan Daerah Nomor 9
              Tahun 2004 tentang Pembentukan Susunan Organisasi dan Tata Kerja
              Badan Penelitian Pengembangan, Telematika dan Arsip Daerah
              (BALITBANGTELARDA) Kabupaten Banyumas. Selanjutnya, struktur
              organisasi kembali berubah menjadi Dinas Perhubungan, Komunikasi
              dan Informatika (DINHUBKOMINFO) yang diatur dalam Peraturan
              Daerah Nomor 26 Tahun 2009.
            </p>

            <p className={styles.contentParagraph}>
              Perubahan struktur organisasi perangkat daerah berlanjut hingga
              akhirnya terbentuk Dinas Komunikasi dan Informatika (DINKOMINFO)
              Kabupaten Banyumas yang diatur melalui Peraturan Daerah Kabupaten
              Banyumas Nomor 16 Tahun 2016 tentang Pembentukan dan Susunan
              Organisasi Perangkat Daerah Kabupaten Banyumas, juncto Peraturan
              Bupati Nomor 68 Tahun 2016 tentang Kedudukan, Susunan Organisasi,
              Tugas dan Fungsi serta Tata Kerja Dinas Komunikasi dan Informatika
              Kabupaten Banyumas.
            </p>

            <p className={styles.contentParagraph}>
              Dinkominfo Kabupaten Banyumas saat ini mempunyai tugas membantu
              Bupati dalam melaksanakan urusan pemerintahan bidang komunikasi
              dan informatika, bidang informasi dan komunikasi publik, bidang
              e-government, bidang sandi, teknologi informasi dan komunikasi
              yang merupakan kewenangan daerah dan tugas pembantuan yang
              diberikan kepada daerah.
            </p>

            <p className={styles.contentParagraph}>
              Dalam perkembangannya, sistem pelayanan informasi dan komunikasi
              harus senantiasa menyesuaikan dengan tuntutan zaman, yaitu berbasis
              teknologi informasi. Hal-hal mendasar yang harus diperhatikan
              untuk keberhasilan penerapan teknologi informasi dalam
              penyelenggaraan pemerintahan (e-government) meliputi sumber daya
              manusia, tata kelola, aplikasi dan basis data, serta infrastruktur
              jaringan. Bermodalkan niat positif untuk memajukan Kabupaten
              Banyumas menjadi lebih baik, Dinkominfo Kabupaten Banyumas terus
              berupaya maksimal membangun dan meningkatkan pelayanan prima yang
              berkaitan dengan urusan wajib komunikasi dan informatika kepada
              masyarakat di Kabupaten Banyumas.
            </p>

            <p className={styles.contentParagraph}>(S-Ros)</p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
