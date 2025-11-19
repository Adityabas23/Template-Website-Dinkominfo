// FILE: app/PPID/maklumat-pelayanan/page.tsx
import PageLayout from "@/app/component/pagelayout";
import styles from "@/app/assets/css/ppid.module.css";
import SidebarPPID from "../SidebarPPID";
import MaklumatSlider from "./MaklumatSlider";

export default function MaklumatPelayananPage() {
  return (
    <PageLayout
      title="MAKLUMAT PELAYANAN"
      breadcrumb="Beranda > PPID > Maklumat Pelayanan"
      description="Maklumat pelayanan informasi publik PPID."
      heroImage="/bannerpemkab.png"
    >
      <div className={styles.profileCard}>
        {/* SIDEBAR KIRI */}
        <SidebarPPID active="maklumat-pelayanan" />

        {/* KONTEN KANAN */}
        <section className={styles.profileMain}>
          <h2 className={styles.sectionTitle}>Maklumat Pelayanan</h2>

          {/* SLIDER DENGAN BACKGROUND GRADASI BIRU */}
          <MaklumatSlider />

          {/* LINK DOWNLOAD */}
          <div className={styles.contentBox}>
            <p className={styles.contentParagraph} style={{ marginTop: 16 }}>
              Maklumat dapat didownload{" "}
              <a
                href="https://drive.google.com/file/d/1EQ31Hh41c7vzs-mXDeIw6OXRh0B6KHDv/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className={styles.downloadLink}
              >
                DISINI
              </a>
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
