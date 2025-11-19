// FILE: app/PPID/formulir-keberatan/page.tsx
import PageLayout from "@/app/component/pagelayout";
import styles from "@/app/assets/css/ppid.module.css";
import SidebarPPID from "../SidebarPPID";

const FORM_KEBERATAN_DOWNLOAD =
  "/dokumen/form_keberatan_informasi.pdf"; // TODO: ganti bila beda

const alasanKeberatan = [
  "Permohonan informasi ditolak",
  "Informasi Berkala tidak disediakan",
  "Permintaan informasi tidak ditanggapi",
  "Permintaan informasi ditanggapi tidak sebagaimana yang diminta",
  "Permintaan informasi tidak dipenuhi",
  "Biaya yang dikenakan tidak wajar",
  "Informasi disampaikan melebihi jangka waktu yang ditentukan",
];

export default function FormulirKeberatanPage() {
  return (
    <PageLayout
      title="FORMULIR KEBERATAN"
      breadcrumb="Beranda > PPID > Formulir Keberatan"
      description="Form keberatan atas pelayanan informasi publik."
      heroImage="/bannerpemkab.png"
    >
      <div className={styles.profileCard}>
        {/* SIDEBAR */}
        <SidebarPPID active="formulir-keberatan" />

        {/* KONTEN KANAN */}
        <section className={styles.profileMain}>
          <h2 className={styles.sectionTitle}>Form Keberatan</h2>

          <form className={styles.formContainer} method="post" action="#">
            {/* KEGIATAN */}
            <div className={styles.formGroup}>
              <label htmlFor="keberatanAtasInfo" className={styles.formLabel}>
                Keberatan Atas Informasi
              </label>
              <input
                id="keberatanAtasInfo"
                name="keberatanAtasInfo"
                type="text"
                className={styles.formInput}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="tujuanPenggunaan" className={styles.formLabel}>
                Tujuan Penggunaan Informasi
              </label>
              <input
                id="tujuanPenggunaan"
                name="tujuanPenggunaan"
                type="text"
                className={styles.formInput}
                required
              />
            </div>

            {/* IDENTITAS */}
            <div className={styles.formGroup}>
              <label htmlFor="namaLengkap" className={styles.formLabel}>
                Nama Lengkap Anda
              </label>
              <input
                id="namaLengkap"
                name="namaLengkap"
                type="text"
                className={styles.formInput}
                required
              />
            </div>

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

            {/* ALASAN KEBERATAN */}
            <div className={styles.formGroup}>
              <div className={styles.formLabel}>Alasan Keberatan</div>
              <div className={styles.formCheckboxGroup}>
                {alasanKeberatan.map((alasan) => (
                  <label key={alasan} className={styles.checkboxOption}>
                    <input
                      type="checkbox"
                      name="alasanKeberatan"
                      value={alasan}
                    />
                    <span>{alasan}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* KASUS POSISI */}
            <div className={styles.formGroup}>
              <label htmlFor="kasusPosisi" className={styles.formLabel}>
                Kasus Posisi
              </label>
              <textarea
                id="kasusPosisi"
                name="kasusPosisi"
                className={styles.formTextarea}
                rows={4}
              />
            </div>

            {/* CAPTCHA PALSU */}
            <div className={styles.captchaWrapper}>
              <div className={styles.captchaBox}>I'm not a robot</div>
            </div>

            {/* TOMBOL SUBMIT */}
            <button type="submit" className={styles.gradientButton}>
              Kirim Keberatan
            </button>
          </form>
        </section>
      </div>
    </PageLayout>
  );
}
