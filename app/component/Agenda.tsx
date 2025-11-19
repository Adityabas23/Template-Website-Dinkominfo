// app/component/Agenda/Agenda.tsx
import React from 'react';
import styles from './Agenda.module.css';

type AgendaItem = {
  id: string | number;
  title: string;
  date: string; // ISO date recommended
  time?: string;
  location?: string;
  excerpt?: string;
  url?: string;
};

function formatDate(d: string) {
  try {
    const dt = new Date(d);
    return dt.toLocaleDateString('id-ID', {
      weekday: 'short',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return d;
  }
}

function getDayNum(d: string) {
  try {
    return new Date(d).getDate();
  } catch {
    return '';
  }
}
function getMonthAbbr(d: string) {
  try {
    return new Date(d)
      .toLocaleString('id-ID', { month: 'short' })
      .toUpperCase();
  } catch {
    return '';
  }
}

export default function Agenda({ items }: { items?: AgendaItem[] }) {
  const agenda = items ?? [];
  const next = agenda.length > 0 ? agenda[0] : null;
  const others = agenda.length > 1 ? agenda.slice(1) : [];

  return (
    <section className={styles.agendaSection} aria-labelledby="agenda-heading">
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <h2 id="agenda-heading" className={styles.heading}>
            Agenda
          </h2>
          <a href="/agenda" className={styles.viewAll}>
            Lihat Semua Agenda &gt;
          </a>
        </div>

        {agenda.length === 0 ? (
          <div className={styles.empty}>Belum ada agenda terdekat.</div>
        ) : (
          <div className={styles.grid}>
            {next && (
              <article className={styles.featured}>
                <div className={styles.featuredDate}>
                  <time dateTime={next.date}>{formatDate(next.date)}</time>
                </div>

                <div className={styles.featuredContent}>
                  <h3 className={styles.featuredTitle}>{next.title}</h3>
                  <p className={styles.meta}>
                    {next.time || ''}
                    {next.time && next.location ? ' • ' : ''}
                    {next.location || ''}
                  </p>
                  {next.excerpt && <p className={styles.excerpt}>{next.excerpt}</p>}
                  {next.url && (
                    <a className={styles.cta} href={next.url}>
                      Selengkapnya
                    </a>
                  )}
                </div>
              </article>
            )}

            <div className={styles.list}>
              {others.map((item) => (
                <article key={item.id} className={styles.card}>
                  <div className={styles.cardLeft}>
                    <div className={styles.cardDay}>{getDayNum(item.date)}</div>
                    <div className={styles.cardMonth}>{getMonthAbbr(item.date)}</div>
                  </div>

                  <div className={styles.cardBody}>
                    <h4 className={styles.cardTitle}>{item.title}</h4>
                    <p className={styles.cardMeta}>
                      {formatDate(item.date)}
                      {item.time ? ` • ${item.time}` : ''}
                      {item.location ? ` • ${item.location}` : ''}
                    </p>
                    {item.url && (
                      <a className={styles.cardLink} href={item.url}>
                        Detail
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
