"use client";

import { useState } from "react";
import styles from "@/app/assets/css/ppid.module.css";

const images = [
  {
    src: "/Maklumat Pelayanan.jpg",
    alt: "Maklumat Pelayanan",
  },
  {
    src: "/Maklumat 1.jpg",
    alt: "Maklumat Pelayanan 1",
  },
  {
    src: "/Maklumat 2.jpg",
    alt: "Maklumat Pelayanan 2",
  },
];

export default function MaklumatSlider() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.maklumatGradientBox}>
      <div className={styles.maklumatSlider}>
        {/* Tombol kiri */}
        <button
          type="button"
          className={styles.maklumatNavButton}
          onClick={prev}
          aria-label="Sebelumnya"
        >
          ‹
        </button>

        {/* Gambar */}
        <div className={styles.maklumatImageWrapper}>
          <img
            src={images[index].src}
            alt={images[index].alt}
            className={styles.maklumatImage}
          />
        </div>

        {/* Tombol kanan */}
        <button
          type="button"
          className={styles.maklumatNavButton}
          onClick={next}
          aria-label="Berikutnya"
        >
          ›
        </button>
      </div>

      {/* Dot indikator */}
      <div className={styles.maklumatDots}>
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`${styles.maklumatDot} ${
              i === index ? styles.maklumatDotActive : ""
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
