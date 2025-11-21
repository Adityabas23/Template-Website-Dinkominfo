// FILE: app/menu-publik/pelayanan/page.tsx
import PageLayout from "@/app/component/pagelayout";
import SidebarMenuPublik from "../SidebarMenuPublik";
import styles from "@/app/assets/css/menupublik.module.css";

type LayananItem = {
  label: string;
  href: string;
};

const layananItems: LayananItem[] = [
  // 1–9 (screenshot ke-3)
  {
    label: "Maklumat Pelayanan",
    href: "https://drive.google.com/file/d/1cOTk8rMP_nSk21kdUTX5O3WOLeOHald7/view",
  },
  {
    label: "Standar Pelayanan Dinkominfo Banyumas",
    href: "https://drive.google.com/file/d/1tWm_9NgKUpeVijt8bcDE1TiCyp89LQpi/view",
  },
  {
    label: "Pelayanan dan Publikasi Data dan Informasi Kabupaten Banyumas",
    href: "https://drive.google.com/file/d/1vkW2s-MV5T6Xo3DpnMW-xhjn4z6r6vCs/view",
  },
  {
    label: "Fasilitasi Kegiatan Non Fisik TMMD",
    href: "https://drive.google.com/file/d/1fg8uuDioH1YQeAmiN2UjcKegZQOfuPBn/view",
  },
  {
    label: "Penyusunan Daftar Informasi Publik",
    href: "https://drive.google.com/file/d/1Ozsv4Zq5EoNzRobA1k3UyDADSDv3DChP/view",
  },
  {
    label: "Pelayanan Permohonan Informasi Publik",
    href: "https://drive.google.com/file/d/1lA_ekwKSAXtH3l9ScrftQuShQa9eGgMl/view",
  },
  {
    label: "Penanganan Keberatan Informasi Publik",
    href: "https://drive.google.com/file/d/1doVKj2yw2hNGeolpw95jIEdmKh1QJks5/view",
  },
  {
    label: "Fasilitasi Sengketa Informasi Publik",
    href: "https://drive.google.com/file/d/17KjqzOOHy_xYp0n67ZhT20TzPg-fc4y6/view",
  },
  {
    label: "Uji Konsekuensi Publik",
    href: "https://drive.google.com/file/d/1OzxxtFgGZGG0y5C0sR6eU00AQ4couha0/view",
  },

  // 10–17 (screenshot ke-2)
  {
    label: "Pelayanan Pembuatan Konten",
    href: "https://drive.google.com/file/d/19HVViXs9Dp9YcY0r1OTjP9CYR8-nBC-/view",
  },
  {
    label: "Pelayanan Penanganan Konten",
    href: "https://drive.google.com/file/d/1Rk8YEsgG8B2W4XY1-iriQ7NbwGojBzH/view",
  },
  {
    label: "Pengaduan Pelayanan Publik melalui Lapak Aduan Banyumas",
    href: "https://drive.google.com/file/d/1WkybykK4I19VAIjZQ5kPH3PdoCnbR6/view",
  },
  {
    label: "Pembangun/Pengembangan Aplikasi",
    href: "https://drive.google.com/file/d/1ncpafTyuDTIsfmeE04YAHBVzNzwAJ8xe7E/view",
  },
  {
    label: "Pendaftaran Sub Domain",
    href: "https://drive.google.com/file/d/18thw6y8R3rgX8QeUKsjOj_V3OJ_j4d4/view",
  },
  {
    label: "Permohonan Hak Akses Sub Domain",
    href: "https://drive.google.com/file/d/1zgo0H90587fpSWJdykR_0ZG2poqFvF0A/view",
  },
  {
    label:
      "Instalasi Konfigurasi Router Mikrotik Mesin Absensi Simpatik",
    href: "https://drive.google.com/file/d/1lrAe3tbM6f7-omfHS64zd0qVLQui44ba/view",
  },
  {
    label: "Layanan Pelatihan TIK",
    href: "https://drive.google.com/file/d/1jlNsLElsWss3hvZbRO_EG5ojY8IkTzFV/view",
  },

  // 18–22 (screenshot ke-1)
  {
    label: "Pelayanan Tamu Data Center",
    href: "https://drive.google.com/file/d/1jlQb8ZbgElkI_dQw2jdDn0A-Qob3LygC/view",
  },
  {
    label: "Permohonan Hak Akses Ruang Server",
    href: "https://drive.google.com/file/d/1OBXzda7DnOdgUvUACHBt-76AeMQSPqRb/view",
  },
  {
    label: "Rekomendasi Zona Menara Telekomunikasi",
    href: "https://drive.google.com/file/d/1A1lM8u4a2j5gU6Z3Qwjie-7py7VNlnPs/view",
  },
  {
    label: "Layanan Penjaminan Arsip Inaktif",
    href: "https://drive.google.com/file/d/18p99d0tI0eb-vEa3lbgmgrdeBaN5ggE/view",
  },
  {
    label: "Seleksi Penerimaan Non PNS",
    href: "https://drive.google.com/file/d/1DX-gvICoxiNOzPMdHh-sqiAvh_aJ-LI/view",
  },
];

export default function PelayananPage() {
  return (
    <PageLayout
      title="PELAYANAN"
      breadcrumb="Beranda > Menu Publik > Pelayanan"
      description="Daftar pelayanan pada Dinas Kominfo Kabupaten Banyumas."
      heroImage="/bannerpelayanan.png"
    >
      <div className={styles.wrapper}>
        <SidebarMenuPublik active="pelayanan" />

        <main className={styles.content}>
          <h2 className={styles.sectionTitle}>Pelayanan</h2>

          <ul className={styles.listPelayanan}>
            {layananItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.pelayananLink}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </PageLayout>
  );
}
