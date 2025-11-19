// FILE: app/PPID/serta-merta/page.tsx
import PageLayout from "@/app/component/pagelayout";
import styles from "@/app/assets/css/ppid.module.css";
import SidebarPPID from "../SidebarPPID";

export default function SertaMertaPage() {
  return (
    <PageLayout
      title="SERTA MERTA"
      breadcrumb="Beranda > PPID > Serta Merta"
      description="Informasi yang wajib disampaikan segera kepada publik."
      heroImage="/bannerpemkab.png"
    >
      <div className={styles.profileCard}>
        <SidebarPPID active="serta-merta" />

        <section className={styles.profileMain}>
          <h2 className={styles.sectionTitle}>Serta Merta</h2>

          <div className={styles.contentBox}>
            {/* TABEL INFORMASI SERTA MERTA */}
            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <table className={styles.ppidTable}>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Judul Informasi</th>
                    <th>Ringkasan Isi Informasi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Informasi tentang Bencana alam.</td>
                    <td>
                      Berisi tentang informasi Bencana Alam seperti kekeringan,
                      kebakaran hutan karena faktor alam, hama penyakit tanaman,
                      epidemik, wabah, kejadian luar biasa.
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Informasi tentang Kejadian luar biasa.</td>
                    <td>
                      Berisi tentang informasi kejadian luar biasa pada Dinas
                      Komunikasi dan Informatika Kabupaten Banyumas.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* KONTEN PENJELASAN COVID-19 */}
            <p className={styles.contentHeading}>Tentang COVID-19</p>
            <p className={styles.contentParagraph}>
              Novel coronavirus (2019-nCoV) adalah jenis baru coronavirus yang
              belum pernah diidentifikasi sebelumnya pada manusia. Virus ini
              dapat menyebabkan penyakit mulai dari flu biasa hingga gangguan
              pernapasan berat seperti Middle East Respiratory Syndrome (MERS)
              dan Severe Acute Respiratory Syndrome (SARS).
            </p>

            <p className={styles.contentHeading}>
              Apa saja gejala Novel Coronavirus (2019-nCoV)?
            </p>
            <p className={styles.contentParagraph}>
              Gejala umum berupa demam ≥38°C, batuk, pilek, nyeri tenggorokan,
              dan sesak napas, terutama pada orang yang memiliki riwayat
              perjalanan atau kontak dengan kasus terkonfirmasi. Pada sebagian
              kasus, gejala dapat berkembang menjadi infeksi saluran pernapasan
              bawah yang berat.
            </p>

            <p className={styles.contentHeading}>
              Bagaimana mengantisipasi penularan virus corona?
            </p>
            <ul className={styles.contentList}>
              <li>Menjaga kesehatan dan kebugaran tubuh.</li>
              <li>Mencuci tangan dengan sabun dan air mengalir secara rutin.</li>
              <li>
                Menutup hidung dan mulut saat batuk/bersin dengan tisu atau siku
                bagian dalam.
              </li>
              <li>
                Menggunakan masker ketika sakit atau saat berada di tempat
                umum.
              </li>
              <li>
                Menghindari kontak dengan hewan atau orang yang dicurigai
                terinfeksi.
              </li>
              <li>
                Segera memeriksakan diri ke fasilitas kesehatan bila mengalami
                gejala demam, batuk, dan sesak napas.
              </li>
            </ul>

            <p className={styles.contentHeading}>Hotline Kab. Banyumas</p>
            <p className={styles.contentParagraph}>
              119
              <br />
              (0281) 7772 119
              <br />
              0811 2762119
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
