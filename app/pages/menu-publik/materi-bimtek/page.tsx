// FILE: app/menu-publik/materi-bimtek/page.tsx
import PageLayout from "@/app/component/pagelayout";
import SidebarMenuPublik from "../SidebarMenuPublik";
import styles from "@/app/assets/css/menupublik.module.css";

export default function MateriBimtekPage() {
  return (
    <PageLayout
      title="MATERI BIMTEK"
      breadcrumb="Beranda > Menu Publik > Materi Bimtek"
      description="Materi Bimbingan Teknis yang dapat diunduh."
    >
      <div className={styles.wrapper}>
        <SidebarMenuPublik active="materi-bimtek" />

        <main className={styles.content}>
          <h2 className={styles.sectionTitle}>Materi Bimtek</h2>

          <div className={styles.textBlock}>
            <p>
              MATERI BIMTEK PENGELOLAAN KONTEN WEBSITE DAN SOSIALISASI
              KETENTUAN DI BIDANG CUKAI (KAMIS, 12 SEPTEMBER 2019)
            </p>

            <ol>
              <li>
                <a href="/file/materi-bimtek/bangkit-wismo.pdf" target="_blank">
                  BANGKIT WISMO, S.Kom
                </a>
              </li>
              <li>
                <a
                  href="/file/materi-bimtek/bea-cukai-purwokerto.pdf"
                  target="_blank"
                >
                  BEA CUKAI CABANG PURWOKERTO
                </a>
              </li>
            </ol>

            <p>
              MATERI BIMTEK PENGELOLAAN MEDIA SOSIAL PEMERINTAH (KAMIS, 14 JULI
              2022)
            </p>

            <ol>
              <li>
                MATERI DR. EDI SANTOSO, S.Sos., M.Si (
                <a
                  href="/dokumen/pengelolaan media sosial untuk kehumasan pemerintah.pdf"
                  target="_blank"
                >
                  DAPAT DI DOWNLOAD DISINI
                </a>
                )
              </li>
              <li>
                MATERI YUDHIS FAJAR KURNIAWAN (
                <a
                  href="/dokumen/Menulis di Medsos Kominfo Banyumas.pptx"
                  target="_blank"
                >
                  DAPAT DI DOWNLOAD DISINI
                </a>
                )
              </li>
            </ol>
          </div>
        </main>
      </div>
    </PageLayout>
  );
}
