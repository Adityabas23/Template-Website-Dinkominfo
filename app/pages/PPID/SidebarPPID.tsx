// FILE: app/PPID/SidebarPPID.tsx
import Link from "next/link";
import styles from "@/app/assets/css/ppid.module.css";

type SidebarProps = {
  active: string; // key halaman yang sedang aktif
};

const menuItems = [
  {
    key: "sk-dip-dikecualikan",
    label: "SK DIP Dikecualikan",
    href: "/pages/PPID/sk-dip-dikecualikan",
  },
  {
    key: "berkala",
    label: "Berkala",
    href: "/pages/PPID/berkala",
  },
  {
    key: "setiap-saat",
    label: "Setiap Saat",
    href: "/pages/PPID/setiap-saat",
  },
  {
    key: "serta-merta",
    label: "Serta Merta",
    href: "/pages/PPID/serta-merta",
  },
  {
    key: "struktur-ppid",
    label: "Struktur PPID",
    href: "/pages/PPID/struktur-ppid",
  },
  {
    key: "maklumat-pelayanan",
    label: "Maklumat Pelayanan",
    href: "/pages/PPID/maklumat-pelayanan",
  },
  {
    key: "laporan-tahunan",
    label: "Laporan Tahunan",
    href: "/pages/PPID/laporan-tahunan",
  },
  {
    key: "sk-ppid",
    label: "SK PPID",
    href: "/pages/PPID/sk-ppid",
  },
  {
    key: "sk-penetapan-dip",
    label: "SK Penetapan DIP",
    href: "/pages/PPID/sk-penetapan-dip",
  },
  {
    key: "permohonan-informasi",
    label: "Permohonan Informasi",
    href: "/pages/PPID/permohonan-informasi",
  },
  {
    key: "formulir-keberatan",
    label: "Formulir Keberatan",
    href: "/pages/PPID/formulir-keberatan",
  },
  {
    key: "sop-layanan-informasi",
    label: "SOP Layanan Informasi Publik",
    href: "/pages/PPID/sop-layanan-informasi",
  },
];

export default function SidebarPPID({ active }: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.sidebarTitle}>PPID</h2>
      <ul className={styles.sidebarMenu}>
        {menuItems.map((item) => (
          <li key={item.key} className={styles.sidebarItem}>
            <Link
              href={item.href}
              className={`${styles.sidebarButton} ${
                active === item.key ? styles.sidebarButtonActive : ""
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
