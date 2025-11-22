// components/sidebar/News/NewsSidebar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '@/app/page.module.css';
import { newsData } from '@/app/data/newsData';

/**
 * Safety: make a link object for an item
 * - internal: use slug or id -> /pages/konten/arsip-berita/:slugOrId
 * - external: use hrefExternal or legacy href (startsWith http)
 * - none: no link available
 */
function makeLinkForItem(item: any): { type: 'internal' | 'external' | 'none'; href?: string } {
  if (!item) return { type: 'none' };
  if (item.slug || item.id) {
    const slugOrId = item.slug || item.id;
    return { type: 'internal', href: `/pages/konten/arsip-berita/${slugOrId}` };
  }
  if (item.hrefExternal && typeof item.hrefExternal === 'string') {
    return { type: 'external', href: item.hrefExternal };
  }
  if (item.href && typeof item.href === 'string' && item.href.startsWith('http')) {
    return { type: 'external', href: item.href };
  }
  return { type: 'none' };
}

export default function NewsSidebar() {
  const [activeTab, setActiveTab] = useState<'latest' | 'popular'>('latest');

  const latestNews = newsData;
  const popularNews = newsData; // sementara reuse; nanti ganti dengan metric views

  const list = activeTab === 'latest' ? latestNews : popularNews;

  return (
    <aside className={styles.newsSidebar}>
      <div className={styles.newsTabs}>
        <button
          type="button"
          className={`${styles.newsTab} ${activeTab === 'latest' ? styles.newsTabActive : ''}`}
          onClick={() => setActiveTab('latest')}
        >
          TERBARU
        </button>
        <button
          type="button"
          className={`${styles.newsTab} ${activeTab === 'popular' ? styles.newsTabActive : ''}`}
          onClick={() => setActiveTab('popular')}
        >
          TERPOPULER
        </button>
      </div>

      <ul className={styles.newsList}>
        {list.slice(0, 5).map((item) => {
          const key = item.id ?? item.slug ?? item.title;
          const link = makeLinkForItem(item);

          // content of the list item (text blocks)
          const Content = (
            <>
              <h4 className={styles.newsListTitle}>{item.title}</h4>
              <div className={styles.newsListMeta}>
                <span>{item.altText || 'Berita'}</span>
                <span className={styles.newsListDot}>•</span>
                <span>{item.date}</span>
              </div>
            </>
          );

          return (
            <li key={key} className={styles.newsListItem}>
              {link.type === 'internal' && link.href ? (
                <Link href={link.href} className={styles.newsListLink}>
                  {Content}
                </Link>
              ) : link.type === 'external' && link.href ? (
                <a href={link.href} target="_blank" rel="noopener noreferrer" className={styles.newsListLink}>
                  {Content}
                </a>
              ) : (
                // fallback: tampilkan tanpa link jika tidak ada target
                <div className={styles.newsListLink}>{Content}</div>
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
