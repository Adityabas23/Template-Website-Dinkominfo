'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './PosterCarousel.module.css';

interface PosterProps {
  children: React.ReactNode;
  headerHeight?: number; // kalau mau sesuaikan tinggi dengan header
}

const PosterCarousel: React.FC<PosterProps> = ({ children, headerHeight = 0 }) => {
  return (
    <div
      className={styles.carouselWrapper}
      style={{ height: `calc(45vh - ${headerHeight}px)` }} // cukup tinggi agar gambar besar
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={3}            // ← 3 gambar sekaligus
        centeredSlides={true}        // ← yang aktif selalu di tengah
        spaceBetween={24}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        speed={700}
        pagination={{ clickable: true }}
        navigation={true}
        className={styles.swiperContainer}
        breakpoints={{
          // HP kecil: 1.3 slide biar tetap ada "bayangan" kiri/kanan
          0: {
            slidesPerView: 1.3,
            spaceBetween: 16,
          },
          // Tablet: 2.3
          768: {
            slidesPerView: 2.3,
            spaceBetween: 20,
          },
          // Desktop: 3 penuh
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PosterCarousel;
