// app/component/Agenda/Agenda.tsx
import React from "react";
import styles from "./Agenda.module.css";

export type AgendaItem = {
  id: string | number;
  title: string;
  date: string; // ISO date recommended
  time?: string;
  location?: string;
  excerpt?: string;
  url?: string;
};

function formatFullDate(d: string) {
  try {
    const dt = new Date(d);
    return dt.toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return d;
  }
}

function getDayNum(d: string) {
  try {
    return new Date(d).getDate();
  } catch {
    return "";
  }
}
function getMonthAbbr(d: string) {
  try {
    return new Date(d)
      .toLocaleString("id-ID", { month: "short" })
      .toUpperCase();
  } catch {
    return "";
  }
}

export default function Agenda({ items }: { items?: AgendaItem[] }) {
  const agenda = items ?? [];

  const next = agenda.length > 0 ? agenda[0] : null;
  const others = agenda.length > 1 ? agenda.slice(1) : [];

  return (
    <section
      className={styles.agendaSection}
      aria-labelledby="agenda-heading-inner"
    >
      <div className={styles.container}>
        {/* heading internal — kalau di page sudah ada judul besar,
            bisa di-hide lewat CSS (lihat .heading di CSS) */}
        <div className={styles.headerRow}>
        </div>

        {agenda.length === 0 ? (
          <div className={styles.empty}>Belum ada agenda terdekat.</div>
        ) : (
          <div className={styles.agendaLayout}>
            {/* KOLOM KIRI: featured card + list */}
            <div className={styles.mainColumn}>
              {next && (
                <article className={styles.featured}>
                  <div className={styles.featuredOverlay} />

                  <div className={styles.featuredContent}>
                    <p className={styles.featuredMeta}>
                      <span>{formatFullDate(next.date)}</span>
                      {next.time && <span> • {next.time}</span>}
                    </p>

                    <h3 className={styles.featuredTitle}>{next.title}</h3>

                    {next.excerpt && (
                      <p className={styles.featuredExcerpt}>{next.excerpt}</p>
                    )}

                    <div className={styles.featuredChips}>
                      {next.location && (
                        <span className={styles.chip}>{next.location}</span>
                      )}
                      <span className={styles.chipOutline}>Agenda Offline</span>
                      <span className={styles.chipOutline}>Umum</span>
                    </div>

                    {next.url && (
                      <a href={next.url} className={styles.featuredButton}>
                        Selengkapnya
                      </a>
                    )}
                  </div>

                  {/* “Countdown” dummy di sisi kanan (layout saja) */}
                  <div className={styles.featuredCountdown}>
                    <p className={styles.countdownLabel}>Agenda akan dimulai:</p>
                    <div className={styles.countdownGrid}>
                      <div className={styles.countBox}>
                        <span>01</span>
                        <small>Hari</small>
                      </div>
                      <div className={styles.countBox}>
                        <span>02</span>
                        <small>Jam</small>
                      </div>
                      <div className={styles.countBox}>
                        <span>10</span>
                        <small>Menit</small>
                      </div>
                      <div className={styles.countBox}>
                        <span>37</span>
                        <small>Detik</small>
                      </div>
                    </div>
                  </div>
                </article>
              )}

              {/* LIST AGENDA LAINNYA */}
              {others.length > 0 && (
                <div className={styles.list}>
                  {others.map((item) => (
                    <article key={item.id} className={styles.card}>
                      <div className={styles.cardLeft}>
                        <div className={styles.cardDay}>
                          {getDayNum(item.date)}
                        </div>
                        <div className={styles.cardMonth}>
                          {getMonthAbbr(item.date)}
                        </div>
                      </div>

                      <div className={styles.cardBody}>
                        <h4 className={styles.cardTitle}>{item.title}</h4>
                        <p className={styles.cardMeta}>
                          {formatFullDate(item.date)}
                          {item.time ? ` • ${item.time}` : ""}
                          {item.location ? ` • ${item.location}` : ""}
                        </p>
                        {item.url && (
                          <a
                            className={styles.cardLink}
                            href={item.url}
                          >
                            Detail agenda
                          </a>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {/* KOLOM KANAN: sidebar agenda (seperti contoh) */}
            <aside className={styles.sidebar}>
              <h3 className={styles.sidebarTitle}>Agenda Banyumas</h3>
              <p className={styles.sidebarText}>
                Dapatkan informasi terkait semua kegiatan yang dilakukan di Banyumas.
              </p>

              <div className={styles.sidebarCalendar}>
                <div className={styles.calendarHeader}>
                  <button
                    type="button"
                    className={styles.calendarNavBtn}
                    aria-label="Bulan sebelumnya"
                  >
                    ‹
                  </button>
                  <div className={styles.calendarMonth}>November 2025</div>
                  <button
                    type="button"
                    className={styles.calendarNavBtn}
                    aria-label="Bulan berikutnya"
                  >
                    ›
                  </button>
                </div>

                <div className={styles.calendarDayRow}>
                  <button className={styles.dayPill}>Min<br />16</button>
                  <button className={styles.dayPill}>Sen<br />17</button>
                  <button className={styles.dayPill}>Sel<br />18</button>
                  <button className={styles.dayPill}>Rab<br />19</button>
                  <button className={`${styles.dayPill} ${styles.dayPillActive}`}>
                    Kam<br />20
                  </button>
                </div>
              </div>

              <div className={styles.sidebarEmpty}>
                <div className={styles.emptyIcon} />
                <h4 className={styles.emptyTitle}>Tidak ada agenda</h4>
                <p className={styles.emptyText}>
                  Belum ada agenda untuk saat ini.
                </p>
              </div>

              <a href="/arsip-agenda" className={styles.sidebarLink}>
                Lihat Agenda Lainnya
              </a>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
