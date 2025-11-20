// components/sidebar/News/NewsSidebar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/app/page.module.css";
import { newsData } from "@/app/data/newsData";

export default function NewsSidebar() {
  const [activeTab, setActiveTab] = useState<"latest" | "popular">("latest");

  const latestNews = newsData;
  const popularNews = newsData; // sementara reuse; nanti bisa ganti data lain

  const list = activeTab === "latest" ? latestNews : popularNews;

  return (
    <aside className={styles.newsSidebar}>
      <div className={styles.newsTabs}>
        <button
          type="button"
          className={`${styles.newsTab} ${
            activeTab === "latest" ? styles.newsTabActive : ""
          }`}
          onClick={() => setActiveTab("latest")}
        >
          TERBARU
        </button>
        <button
          type="button"
          className={`${styles.newsTab} ${
            activeTab === "popular" ? styles.newsTabActive : ""
          }`}
          onClick={() => setActiveTab("popular")}
        >
          TERPOPULER
        </button>
      </div>

      <ul className={styles.newsList}>
        {list.slice(0, 5).map((item) => (
          <li key={item.title} className={styles.newsListItem}>
            <Link href={item.href} target="_blank" className={styles.newsListLink}>
              <h4 className={styles.newsListTitle}>{item.title}</h4>
              <div className={styles.newsListMeta}>
                <span>{item.altText || "Berita"}</span>
                <span className={styles.newsListDot}>•</span>
                <span>{item.date}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
