// FILE: app/menu-publik/SidebarMenuPublik.tsx
"use client";

import Link from "next/link";
import styles from "@/app/assets/css/menupublik.module.css";

type SidebarProps = {
  active: string; // key halaman yang sedang aktif
};

const menuItems = [
  {
    key: "berita",
    label: "Berita",
    href: "/pages/menu-publik/berita",
  },
  {
    key: "pelayanan",
    label: "Pelayanan",
    href: "/pages/menu-publik/pelayanan",
  },
  {
    key: "pengumuman",
    label: "Pengumuman",
    href: "/pages/menu-publik/pengumuman",
  },
  {
    key: "materi-bimtek",
    label: "Materi Bimtek",
    href: "/pages/menu-publik/materi-bimtek",
  },
  {
    key: "galeri",
    label: "Galeri",
    href: "/pages/menu-publik/galeri",
  },
  {
    key: "reformasi-birokrasi",
    label: "Reformasi Birokrasi",
    href: "/pages/menu-publik/reformasi-birokrasi",
  },
];

export default function SidebarMenuPublik({ active }: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.sidebarTitle}>MENU PUBLIK</h2>
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
