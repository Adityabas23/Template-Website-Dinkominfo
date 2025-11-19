// component/DraggableCarousel.tsx
'use client'; // Swiper adalah komponen interaktif
import React from 'react';

// 1. Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

// 2. Import CSS Swiper
import 'swiper/css';
import 'swiper/css/free-mode';

// 3. Import CSS Module kita sendiri
import styles from './DraggableCarousel.module.css';

interface CarouselProps {
  children: React.ReactNode;
  speed?: number; // Ganti 'duration' dengan 'speed'
}

const DraggableCarousel: React.FC<CarouselProps> = ({ children, speed = 7000 }) => {
  return (
    <Swiper
      modules={[Autoplay, FreeMode]}
      slidesPerView="auto" // Kunci #1: Lebar slide akan otomatis
      spaceBetween={24}      // Jarak antar kartu (sama seperti grid Anda)
      loop={true}            // Agar berulang terus menerus
      freeMode={true}        // Kunci #2: Untuk 'drag' dan 'flick'
      autoplay={{
        delay: 1, // Dibuat 1ms agar berjalan terus
        disableOnInteraction: false, // Tetap autoplay setelah di-drag
      }}
      speed={speed} // Kecepatan transisi (dalam ms)
      className={styles.swiperContainer} // Untuk styling
    >
      {/* 4. Map semua 'children' ke dalam <SwiperSlide> */}
      {React.Children.map(children, (child) => (
        <SwiperSlide className={styles.slide}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DraggableCarousel;