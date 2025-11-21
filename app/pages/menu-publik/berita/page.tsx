// FILE: app/menu-publik/berita/page.tsx
import PageLayout from "@/app/component/pagelayout";
import SidebarMenuPublik from "../SidebarMenuPublik";
import styles from "@/app/assets/css/menupublik.module.css";

export default function BeritaPage() {
  return (
    <PageLayout
      title="BERITA"
      breadcrumb="Beranda > Menu Publik > Berita"
      description="Informasi dan berita terkini Dinas Kominfo Kabupaten Banyumas."
    >
      <div className={styles.wrapper}>
        <SidebarMenuPublik active="berita" />

        <main className={styles.content}>
          <h2 className={styles.sectionTitle}>
            Peningkatan Pengelolaan Arsip Digital di Dinkominfo Banyumas
          </h2>

          <img
            src="/images/berita/berita-header.jpg"
            alt="Banner berita"
            style={{ width: "100%", marginBottom: "1.5rem" }}
          />

          <div className={styles.textBlock}>
            <p>
              Berdasarkan hasil pemantauan pada dashboard Srikandi, tingkat
              pemberkasan arsip digital menunjukkan peningkatan yang cukup
              signifikan. Persentase pemberkasan untuk naskah masuk dan naskah
              keluar sama-sama berada pada kisaran 79% dengan nilai minimum
              75%, menggambarkan bahwa proses penataan dan perbaikan arsip
              telah berjalan lebih teratur dan konsisten.
            </p>

            <p>
              Peningkatan proses ini tidak terlepas dari pemanfaatan Lembar
              Kerja Monitoring dan Warning (Morning) sebagai alat bantu dalam
              proses pengawasan dan kontrol mutu arsip. Morning membantu
              menentukan prioritas, memonitor progres pemberkasan, serta
              memastikan setiap dokumen tercatat secara sistematis.
            </p>

            <p>
              Dengan tampilan yang sederhana namun fungsional, Morning
              memudahkan pegawai dalam melakukan pelacakan arsip sekaligus
              meningkatkan akurasi dan ketepatan waktu dalam proses pembenahan
              arsip di lingkungan Dinkominfo Kabupaten Banyumas.
            </p>
          </div>

          <img
            src="/images/berita/berita-infografis.jpg"
            alt="Infografis arsip"
            style={{ width: "100%", marginTop: "1.5rem" }}
          />
        </main>
      </div>
    </PageLayout>
  );
}
