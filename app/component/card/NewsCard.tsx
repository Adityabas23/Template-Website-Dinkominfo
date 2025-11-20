// components/NewsCard.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt, FaCalendar } from "react-icons/fa";
import styles from "@/app/assets/css/NewsCard.module.css";

type NewsCardProps = {
  href: string;
  imageUrl: string;
  altText: string;
  date: string;
  title: string;
};

export default function NewsCard({
  href,
  imageUrl,
  altText,
  date,
  title,
}: NewsCardProps) {
  return (
    <Link href={href} target="_blank" className={styles.newsCardLink}>
      <div className={`${styles.newsCard} ${styles.group}`}>
        <div className={styles.newsImageWrapper}>
          <Image
            src={imageUrl}
            alt={altText}
            fill
            className={styles.newsImage}
            sizes="(max-width: 768px) 90vw, 560px"
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
    </Link>
  );
}
