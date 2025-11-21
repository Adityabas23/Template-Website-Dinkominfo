// FILE: app/menu-publik/galeri/page.tsx
import PageLayout from "@/app/component/pagelayout";
import SidebarMenuPublik from "../SidebarMenuPublik";
import styles from "@/app/assets/css/menupublik.module.css";

const galleryItems = [
  {
    id: 1,
    src: "/galeri/galeri (1).jpg",
    caption: "Kegiatan acara 1",
    href: "/menu-publik/galeri/detail/1", // ⇐ href gambar 3 (ganti sesuai kebutuhan)
  },
  {
    id: 2,
    src: "/galeri/galeri (2).jpg",
    caption: "Kegiatan acara 2",
    href: "/menu-publik/galeri/detail/2",
  },
  {
    id: 3,
    src: "/galeri/galeri (3).jpg",
    caption: "Kegiatan acara 3",
    href: "/menu-publik/galeri/detail/3",
  },
  {
    id: 4,
    src: "/galeri/galeri (4).jpg",
    caption: "Kegiatan acara 4",
    href: "/menu-publik/galeri/detail/4",
  },
  {
    id: 5,
    src: "/galeri/galeri (5).jpg",
    caption: "Kegiatan acara 5",
    href: "/menu-publik/galeri/detail/5",
  },
  {
    id: 6,
    src: "/galeri/galeri (6).jpg",
    caption: "Kegiatan acara 6",
    href: "/menu-publik/galeri/detail/6",
  },
  {
    id: 7,
    src: "/galeri/galeri (7).jpg",
    caption: "Kegiatan acara 7",
    href: "/menu-publik/galeri/detail/7",
  },
  {
    id: 8,
    src: "/galeri/galeri (8).jpg",
    caption: "Kegiatan acara 8",
    href: "/menu-publik/galeri/detail/8",
  },
  {
    id: 9,
    src: "/galeri/galeri (9).jpg",
    caption: "Kegiatan acara 9",
    href: "/menu-publik/galeri/detail/9",
  },
  {
    id: 10,
    src: "/galeri/galeri (10).jpg",
    caption: "Kegiatan acara 10",
    href: "/menu-publik/galeri/detail/10",
  },
  {
    id: 11,
    src: "/galeri/galeri (11).jpg",
    caption: "Kegiatan acara 11",
    href: "/menu-publik/galeri/detail/11",
  },
  {
    id: 12,
    src: "/galeri/galeri (12).jpg",
    caption: "Kegiatan acara 12",
    href: "/menu-publik/galeri/detail/12",
  },
];

export default function GaleriPage() {
  return (
    <PageLayout
      title="GALERI"
      breadcrumb="Beranda > Menu Publik > Galeri"
      description="Dokumentasi kegiatan Dinas Kominfo Kabupaten Banyumas."
      heroImage="/bannerpemkab.png"
    >
      <div className={styles.wrapper}>
        <SidebarMenuPublik active="galeri" />

        <main className={styles.content}>
          <h2 className={styles.sectionTitle}>Galeri</h2>

          <div className={styles.galleryGrid}>
            {galleryItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={styles.galleryItem}
              >
                <div className={styles.galleryCard}>
                  <div className={styles.galleryImageWrapper}>
                    <img src={item.src} alt={item.caption} />
                  </div>
                  <div className={styles.galleryCaption}>{item.caption}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Pagination statis sesuai gambar */}
          <div className={styles.pagination}>
            <button className={styles.pageButton} aria-label="Previous page">
              &lt;
            </button>

            <span
              className={`${styles.pageNumber} ${styles.pageNumberActive}`}
            >
              1
            </span>
            <span className={styles.pageNumber}>2</span>
            <span className={styles.pageNumber}>3</span>
            <span className={styles.pageNumber}>4</span>
            <span className={styles.pageNumber}>5</span>
            <span className={styles.pageNumber}>6</span>
            <span className={styles.pageNumber}>7</span>
            <span className={styles.pageNumber}>8</span>

            <button className={styles.pageButton} aria-label="Next page">
              &gt;
            </button>
          </div>
        </main>
      </div>
    </PageLayout>
  );
}
