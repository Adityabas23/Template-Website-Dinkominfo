// app/data-pegawai/page.tsx
import PageLayout from "@/app/component/pagelayout";
import styles from "@/app/assets/css/datapegawai.module.css";

export default function DataPegawaiPage() {
  return (
    <PageLayout
      title="DATA PEGAWAI DINKOMINFO"
      breadcrumb="Beranda > Data Pegawai"
      description="Infografis sumber daya manusia Dinas Komunikasi dan Informatika Kabupaten Banyumas."
      heroImage="/bannerpemkab.png"
    >
      <div className={styles.wrapper}>
        <section className={styles.section}>
          <h2 className={styles.title}>DATA PEGAWAI</h2>
          <p className={styles.subtitle}>
            INFOGRAFIS SDM DINAS KOMUNIKASI DAN INFORMATIKA KABUPATEN BANYUMAS
          </p>

          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src="/INFOGRAFIS SDM KOMINFO.jpg"
                alt="Infografis SDM Dinkominfo Kabupaten Banyumas"
              />
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
