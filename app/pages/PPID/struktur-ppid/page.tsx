// FILE: app/PPID/struktur-ppid/page.tsx
import PageLayout from "@/app/component/pagelayout";
import styles from "@/app/assets/css/ppid.module.css";
import SidebarPPID from "../SidebarPPID";

export default function StrukturPPIDPage() {
  return (
    <PageLayout
      title="STRUKTUR PPID"
      breadcrumb="Beranda > PPID > Struktur PPID"
      description="Struktur Bagan PPID Dinas Komunikasi dan Informatika Kabupaten Banyumas."
      heroImage="/bannerpemkab.png"
    >
      <div className={styles.profileCard}>
        {/* SIDEBAR */}
        <SidebarPPID active="struktur-ppid" />

        {/* KONTEN KANAN */}
        <section className={styles.profileMain}>
          <h2 className={styles.sectionTitle}>STRUKTUR PPID</h2>
          <p className={styles.sectionSubtitle}>
            Struktur PPID Dinas Komunikasi dan Informatika Kabupaten Banyumas
          </p>

          <div className={styles.structureCard}>
            <div className={styles.structureImageWrapper}>
              <img
                src="/BAGAN PPID DINKOMINFO.jpg"
                alt="Struktur BAGAN PPID Dinas Komunikasi dan Informatika Kabupaten Banyumas 2024"
              />
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
