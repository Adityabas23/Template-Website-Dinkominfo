// app/component/ArchiveList.tsx
import React from 'react';
import styles from './archive.module.css';

type ItemBase = {
  id?: string | number;
  title: string;
  date?: string;
  imageUrl?: string;
  excerpt?: string;
  href?: string;
};

export default function ArchiveList<T extends ItemBase>({
  title,
  items,
  renderItem,
}: {
  title: string;
  items: T[];
  renderItem?: (item: T) => React.ReactNode;
}) {
  return (
    <section className={styles.archiveSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>{title}</h1>
        </div>

        {items.length === 0 ? (
          <div className={styles.empty}>Belum ada data untuk ditampilkan.</div>
        ) : (
          <div className={styles.grid}>
            {items.map((item) =>
              renderItem ? (
                <div key={(item.id ?? item.title) as React.Key} className={styles.cardWrapper}>
                  {renderItem(item)}
                </div>
              ) : (
                <a key={(item.id ?? item.title) as React.Key} href={item.href ?? '#'} className={styles.card}>
                  {item.imageUrl && <img src={item.imageUrl} alt={item.title} className={styles.cardImage} />}
                  <div className={styles.cardContent}>
                    <h3>{item.title}</h3>
                    {item.date && <time>{item.date}</time>}
                    {item.excerpt && <p>{item.excerpt}</p>}
                  </div>
                </a>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}
