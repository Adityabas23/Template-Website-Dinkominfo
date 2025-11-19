// FILE: app/PPID/permohonan-informasi/page.tsx
import PageLayout from "@/app/component/pagelayout";
import styles from "@/app/assets/css/ppid.module.css";
import SidebarPPID from "../SidebarPPID";

const FORM_DOWNLOAD =
  "/dokumen/FORMULIR PERMOHONAN INFORMASI.pdf"; // TODO: ganti kalau nama filenya beda

export default function PermohonanInformasiPage() {
  return (
    <PageLayout
      title="PERMOHONAN INFORMASI"
      breadcrumb="Beranda > PPID > Permohonan Informasi"
      description="Form permohonan informasi publik dan tata cara pengajuannya."
      heroImage="/bannerpemkab.png"
    >
      <div className={styles.profileCard}>
        {/* SIDEBAR */}
        <SidebarPPID active="permohonan-informasi" />

        {/* KONTEN KANAN */}
        <section className={styles.profileMain}>
          <h2 className={styles.sectionTitle}>Form Permohonan Informasi</h2>

          <div className={styles.formIntro}>
            Anda dapat download Form Permohonan Informasi (
            <a
              href={FORM_DOWNLOAD}
              target="_blank"
              rel="noreferrer"
              className={styles.formDownloadLink}
            >
              Klik untuk download
            </a>
            ), atau kirim permohonan informasi online dibawah ini:
          </div>

          <form
            className={styles.formContainer}
            method="post"
            action="#"
            // TODO: ganti action ke endpoint backend kalau sudah siap
          >
            {/* NAMA */}
            <div className={styles.formGroup}>
              <label htmlFor="namaLengkap" className={styles.formLabel}>
                Nama Lengkap
              </label>
              <input
                id="namaLengkap"
                name="namaLengkap"
                type="text"
                className={styles.formInput}
                required
              />
            </div>

            {/* ALAMAT */}
            <div className={styles.formGroup}>
              <label htmlFor="alamat" className={styles.formLabel}>
                Alamat
              </label>
              <input
                id="alamat"
                name="alamat"
                type="text"
                className={styles.formInput}
                required
              />
            </div>

            {/* PEKERJAAN */}
            <div className={styles.formGroup}>
              <label htmlFor="pekerjaan" className={styles.formLabel}>
                Pekerjaan
              </label>
              <input
                id="pekerjaan"
                name="pekerjaan"
                type="text"
                className={styles.formInput}
                required
              />
            </div>

            {/* TELEPON */}
            <div className={styles.formGroup}>
              <label htmlFor="telp" className={styles.formLabel}>
                Nomor Telp/HP
              </label>
              <input
                id="telp"
                name="telp"
                type="tel"
                className={styles.formInput}
                required
              />
            </div>

            {/* EMAIL */}
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>
                E-Mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={styles.formInput}
                required
              />
            </div>

            {/* CARA MENDAPATKAN SALINAN */}
            <div className={styles.formGroup}>
              <div className={styles.formLabel}>
                Cara Mendapatkan Salinan Informasi
              </div>
              <div className={styles.formRadioGroup}>
                {["Mengambil Langsung", "Kurir", "POS", "Faksimile", "E-Mail"].map(
                  (opt) => (
                    <label key={opt} className={styles.radioOption}>
                      <input
                        type="radio"
                        name="cara_salinan"
                        value={opt}
                        required
                      />
                      <span>{opt}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            {/* CAPTCHA PALSU (PLACEHOLDER) */}
            <div className={styles.captchaWrapper}>
              <div className={styles.captchaBox}>I'm not a robot</div>
            </div>

            {/* TOMBOL SUBMIT – GRADASI BIRU */}
            <button type="submit" className={styles.gradientButton}>
              Kirim Permohonan
            </button>
          </form>
        </section>
      </div>
    </PageLayout>
  );
}
