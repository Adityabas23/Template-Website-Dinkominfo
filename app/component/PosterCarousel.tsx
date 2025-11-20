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
  headerHeight?: number; // opsional, kalau mau dorong ke bawah
}

const PosterCarousel: React.FC<PosterProps> = ({ children, headerHeight = 0 }) => {
  return (
    <div
      className={styles.carouselWrapper}
      style={headerHeight ? { marginTop: headerHeight } : undefined}
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.swiperContainer}
        loop={true}
        centeredSlides={true}
        speed={700}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        slidesPerView={3}
        spaceBetween={24}
        breakpoints={{
          0: {
            slidesPerView: 1.1,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 18,
          },
          768: {
            slidesPerView: 2.1,
            spaceBetween: 20,
          },
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
