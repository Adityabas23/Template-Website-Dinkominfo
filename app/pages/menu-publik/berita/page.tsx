"use client";

import PageLayout from "@/app/component/pagelayout";
import SidebarMenuPublik from "../SidebarMenuPublik";
import styles from "@/app/assets/css/menupublik.module.css";

import DraggableCarousel from "@/app/component/DraggableCarousel";
import NewsCard from "@/app/component/card/NewsCard";
import NewsSidebar from "@/app/component/sidebar/News/NewsSidebar";
import { newsData } from "@/app/data/newsData";

export default function BeritaPage() {
  return (
    <PageLayout
      title="BERITA"
      breadcrumb="Beranda > Menu Publik > Berita"
      description="Informasi dan berita terkini Dinas Kominfo Kabupaten Banyumas."
      heroImage="/berita1.jpg"
    >
      <div className={styles.wrapper}>
        <SidebarMenuPublik active="berita" />

        <main className={styles.content}>
          {/* HEADER BERITA */}
          <div className={styles.newsHeaderRow}>
            <h2 className={styles.sectionTitle}>Berita Terbaru</h2>

            <a
              href="/pages/konten/arsip-berita"
              className={styles.newsViewAllLink}
            >
              Lihat Semua Berita &gt;
            </a>
          </div>

          {/* LAYOUT 2 KOLOM: KIRI SLIDER, KANAN SIDEBAR */}
          <div className={styles.newsLayout}>
            {/* KIRI: CARD BESAR + CAROUSEL */}
            <div className={styles.newsMain}>
              <div className={styles.newsCarouselCard}>
                <DraggableCarousel autoplayDelay={3000}>
                  {newsData.map((item) => (
                    <NewsCard
                      key={item.title}
                      href={item.href}
                      imageUrl={item.imageUrl}
                      altText={item.altText}
                      date={item.date}
                      title={item.title}
                    />
                  ))}
                </DraggableCarousel>
              </div>
            </div>

            {/* KANAN: TERBARU / TERPOPULER */}
            <NewsSidebar />
          </div>
        </main>
      </div>
    </PageLayout>
  );
}
