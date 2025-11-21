// FILE: app/menu-publik/reformasi-birokrasi/page.tsx
import PageLayout from "@/app/component/pagelayout";
import SidebarMenuPublik from "../SidebarMenuPublik";
import styles from "@/app/assets/css/menupublik.module.css";

export default function ReformasiBirokrasiPage() {
  return (
    <PageLayout
      title="REFORMASI BIROKRASI"
      breadcrumb="Beranda > Menu Publik > Reformasi Birokrasi"
      description="Informasi terkait pelaksanaan Reformasi Birokrasi."
      heroImage="/bannerpemkab.png"
    >
      <div className={styles.wrapper}>
        <SidebarMenuPublik active="reformasi-birokrasi" />

        <main className={styles.content}>
          {/* ======================= */}
          {/*   DATA RB 2019          */}
          {/* ======================= */}
          <section>
            <h2 className={styles.sectionTitle}>Data Reformasi Birokrasi 2019</h2>

            <div className={styles.textBlock}>
              <ul>
                <li>
                  <a href="/dokumen/1.1.b Rencana Kerja RB 2019.pdf" target="_blank">Rencana Kerja Dinkominfo 2019</a>
                </li>
                <li>
                  <a href="/Alur Lapak Aduan.jpeg" target="_blank">SOP Lapak Aduan</a>
                </li>
                <li>
                  <a href="/dokumen/Perbup Pedoman Layanan Informasi Publik.pdf" target="_blank">
                    Perbup Pedoman Layanan Informasi Publik
                  </a>
                </li>
                <li>
                  <a href="/dokumen/SK layanan Informasi dan dokumentasi.pdf" target="_blank">
                    SK Layanan Informasi dan Dokumentasi
                  </a>
                </li>
                <li>
                  <a href="/dokumen/OP Pelayananan Menara yang Baru.pdf" target="_blank">SOP Pelayanan Menara Yang Baru</a>
                </li>
                <li>
                  <a href="/dokumen/SOP PEMBANGUNAN PENGEMBANGAN APLIKASI Kabupaten Banyumas.pdf" target="_blank">
                    SOP Pembangunan Pengembangan Aplikasi
                  </a>
                </li>
                <li>
                  <a href="/dokumen/SOP Penyusunan dan Publikasi Data dan Informasi Kabupaten Banyumas.pdf" target="_blank">
                    SOP Penyusunan dan Publikasi Data dan Informasi
                  </a>
                </li>
                <li>
                  <a href="/dokumen/SOP PPID.pdf" target="_blank">SOP PPID</a>
                </li>
                <li>
                  <a href="/dokumen/SOP Rekomendasi Menara telekomunikasi.pdf" target="_blank">
                    SOP Rekomendasi Menara Telekomunikasi
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* ======================= */}
          {/*   DATA RB 2020          */}
          {/* ======================= */}
          <section style={{ marginTop: "32px" }}>
            <h2 className={styles.sectionTitle}>Reformasi Birokrasi 2020</h2>

            <div className={styles.textBlock}>
              <p>
                Reformasi Birokrasi Dinas Komunikasi dan Informatika Kabupaten
                Banyumas yang dapat dilihat dalam kategorisasi per tahun.
              </p>

              <ol>
                <li>
                  <a href="/dokumen/renstra Kominfo 2018-2023.pdf" target="_blank">Renstra Kominfo 2018–2023</a>
                </li>
                <li>
                  <a href="/dokumen/PK Dinkominfo 2020.pdf" target="_blank">PK Dinkominfo 2020</a>
                </li>
                <li>
                  <a href="/dokumen/PK DINKOMINFO 2021.pdf" target="_blank">PK Dinkominfo 2021</a>
                </li>
                <li>
                  <a href="/dokumen/IKU 2020.pdf" target="_blank">IKU 2020</a>
                </li>
                <li>
                  <a href="/dokumen/IKU 2021.pdf" target="_blank">IKU 2021</a>
                </li>
                <li>
                  <a href="/dokumen/Pengukuran Capaian Kinerja Tahun 2020.pdf" target="_blank">
                    Pengukuran Capaian Kinerja Tahun 2020
                  </a>
                </li>
                <li>
                  <a href="/dokumen/Perjanjian Kinerja Tahun 2020.pdf" target="_blank">Perjanjian Kinerja Tahun 2020</a>
                </li>
                <li>
                  <a href="/dokumen/SK Tim UPG Dinkominfo.pdf" target="_blank">SK Tim UPG</a>
                </li>
              </ol>
            </div>
          </section>
        </main>
      </div>
    </PageLayout>
  );
}
