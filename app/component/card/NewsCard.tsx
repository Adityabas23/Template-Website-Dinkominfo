// components/NewsCard.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import styles from '@/app/assets/css/NewsCard.module.css';

type NewsCardProps = {
  href?: string;         // optional: internal ("/news/slug") or external ("https://...")
  imageUrl: string;
  altText?: string;
  date: string;
  title: string;
  // if true and href is external, open in new tab; default true for external links
  openInNewTab?: boolean;
};

export default function NewsCard({
  href,
  imageUrl,
  altText = '',
  date,
  title,
  openInNewTab,
}: NewsCardProps) {
  const router = useRouter();
  const isExternal = typeof href === 'string' && /^https?:\/\//i.test(href);
  const shouldOpenNewTab = isExternal ? (openInNewTab ?? true) : false;

  const handleActivate = (e?: React.MouseEvent | React.KeyboardEvent) => {
    if (!href) return;
    if (isExternal) {
      // open external safely
      if (shouldOpenNewTab) {
        window.open(href, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = href;
      }
    } else {
      // internal navigation via next/router
      router.push(href);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleActivate(e);
    }
  };

  const CardInner = (
    <div className={`${styles.newsCard} ${styles.group}`}>
      <div className={styles.newsImageWrapper}>
        <img
          src={imageUrl}
          alt={altText || title}
          className={styles.newsImage}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />

        <div className={styles.newsOverlay}>
          <span className={styles.newsCategory}>PEMERINTAHAN</span>

          <h3 className={styles.newsTitle}>{title}</h3>

          <div className={styles.newsMeta}>
            <span>
              <FaMapMarkerAlt /> Purwokerto
            </span>
            <span className={styles.newsMetaSeparator}>•</span>
            <span>
              <FaCalendar /> {date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  // if no href provided -> static card
  if (!href) return CardInner;

  // clickable wrapper using div (no <a> to avoid nesting)
  return (
    <div
      role="link"
      tabIndex={0}
      aria-label={title}
      className={styles.newsCardLink}
      onClick={handleActivate}
      onKeyDown={handleKeyDown}
      style={{ textDecoration: 'none', outline: 'none', cursor: 'pointer' }}
    >
      {CardInner}
    </div>
  );
}
