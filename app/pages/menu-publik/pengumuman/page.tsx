// FILE: app/menu-publik/pengumuman/page.tsx

import PageLayout from "@/app/component/pagelayout";
import SidebarMenuPublik from "../SidebarMenuPublik";
import styles from "@/app/assets/css/menupublik.module.css";
import Image from "next/image";

export default function PengumumanPage() {
  return (
    <PageLayout
      title="PENGUMUMAN"
      breadcrumb="Beranda > Menu Publik > Pengumuman"
      description="Informasi pengumuman terbaru dari Dinas Kominfo Kabupaten Banyumas."
    >
      <div className={styles.wrapper}>
        {/* Sidebar Menu Publik */}
        <SidebarMenuPublik active="pengumuman" />

        {/* Konten Utama */}
        <main className={styles.content}>
          <h2 className={styles.sectionTitle}>Pengumuman</h2>

          {/* ====== GAMBAR 1 DENGAN BACKGROUND BIRU ====== */}
          <div className={styles.announcementImageBox}>
            <Image
              src="/pengumuman1.jpeg"
              alt="Pengumuman Peningkatan Nilai Arsip"
              width={1920}
              height={1080}
              className={styles.announcementImageSmall}
            />
          </div>

          {/* ====== TEKS PENGUMUMAN ====== */}
          <div className={styles.textBlock}>
            <p>
              Berdasarkan hasil pemantauan pada dashboard Srikandi, tingkat
              pemberkasan arsip digital menunjukkan peningkatan yang cukup
              signifikan. Persentase pemberkasan untuk naskah masuk dan naskah
              keluar sama-sama berada pada kisaran 79% dengan nilai minimum 76%,
              menggambarkan bahwa proses penataan dan perbaikan arsip telah
              berjalan lebih teratur dan konsisten. Capaian ini mencerminkan
              adanya perbaikan kualitas pengelolaan arsip digital serta
              meningkatnya ketertiban dalam proses pemberkasan di lingkungan
              Dinkominfo Kabupaten Banyumas.
            </p>

            <p>
              Peningkatan tersebut tidak terlepas dari pemanfaatan Lembar Kerja
              Monitoring dan Warning (Morning) sebagai alat bantu dalam proses
              pengawasan dan kontrol mutu arsip. Morning membantu memetakan
              prioritas, memonitor progres pemberkasan, serta memastikan setiap
              dokumen tercatat secara sistematis. Dengan tampilan yang
              sederhana namun fungsional, Morning memudahkan pegawai dalam
              melakukan pelacakan arsip sekaligus meningkatkan akurasi dan
              ketepatan waktu dalam proses pembaruan data di aplikasi Srikandi.
            </p>
          </div>

          {/* ====== GAMBAR 2 DENGAN BACKGROUND BIRU ====== */}
          <div className={styles.announcementImageBox}>
            <Image
              src="/pengumuman2.jpeg"
              alt="Grafik Peningkatan Arsip"
              width={1920}
              height={1080}
              className={styles.announcementImageSmall}
            />
          </div>
        </main>
      </div>
    </PageLayout>
  );
}
