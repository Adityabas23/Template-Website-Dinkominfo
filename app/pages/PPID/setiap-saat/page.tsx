// FILE: app/PPID/setiap-saat/page.tsx
import PageLayout from "@/app/component/pagelayout";
import styles from "@/app/assets/css/ppid.module.css";
import SidebarPPID from "../SidebarPPID";

export default function SetiapSaatPage() {
  return (
    <PageLayout
      title="SETIAP SAAT"
      breadcrumb="Beranda > PPID > Setiap Saat"
      description="Informasi yang tersedia setiap saat."
      heroImage="/bannerpemkab.png"
    >
      <div className={styles.profileCard}>
        <SidebarPPID active="setiap-saat" />

        <section className={styles.profileMain}>
          <h2 className={styles.sectionTitle}>Setiap Saat</h2>
          <p className={styles.sectionSubtitle}>INFORMASI SETIAP SAAT</p>

          <div className={styles.contentBox}>
            {/* TABEL INFORMASI SETIAP SAAT */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <table className={styles.ppidTable}>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Judul Informasi</th>
                    <th>Ringkasan Isi Informasi</th>
                    <th>Jenis Media Yang Memuat Informasi</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      Informasi tentang Organisasi, Administrasi kepegawaian
                    </td>
                    <td>
                      Berisi tentang organisasi, administrasi kepegawaian Dinas
                      Komunikasi dan Informatika Kabupaten Banyumas.
                    </td>
                    <td>
                      <a
                        href="/pages/data-pegawai"
                        target="_blank"
                        className={styles.mediaBtn}
                      >
                        Lihat Media 1
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>Rencana Strategis</td>
                    <td>
                      Berisi tentang Rencana Strategis Dinas Komunikasi dan
                      Informatika Kabupaten Banyumas.
                    </td>
                    <td>
                      <a
                        href="/pages/download"
                        target="_blank"
                        className={styles.mediaBtn}
                      >
                        Lihat Media 2
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>Rencana Kerja Tahunan</td>
                    <td>
                      Berisi tentang Rencana Kerja Tahunan Dinas Komunikasi dan
                      Informatika Kabupaten Banyumas.
                    </td>
                    <td>
                      <a
                        href="/dokumen/RKT 2021.pdf"
                        target="_blank"
                        className={styles.mediaBtn}
                      >
                        Lihat Media 3
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>4</td>
                    <td>Peraturan / Keputusan yang telah diterbitkan</td>
                    <td>
                      Berisi tentang Peraturan/Keputusan yang telah diterbitkan
                      oleh Dinas Komunikasi dan Informatika Kabupaten Banyumas.
                    </td>
                    <td>
                      <span style={{ color: "#999" }}>Tidak Ada</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* PERATURAN DAERAH */}
            <p className={styles.contentHeading}>PERATURAN DAERAH</p>
            <p className={styles.contentParagraph}>
              Peraturan Daerah Kabupaten Banyumas No 4 Tahun 2012 Tentang
              Rencana Induk Pengembangan E-government dan peraturan lain yang
              terkait penyelenggaraan komunikasi dan informatika di Kabupaten
              Banyumas.
            </p>

            {/* PERATURAN BUPATI */}
            <p className={styles.contentHeading}>PERATURAN BUPATI</p>
            <p className={styles.contentParagraph}>
              Termasuk antara lain Peraturan Bupati Banyumas Nomor 44 Tahun 2018
              tentang Pelayanan Penanganan Pengaduan Masyarakat, Peraturan
              Bupati Nomor 80 Tahun 2018 tentang Pedoman Pengelolaan Pelayanan
              Informasi Publik, dan beberapa peraturan lainnya.
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
