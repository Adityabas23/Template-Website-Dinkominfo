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
  headerHeight?: number; // optional: tinggi header dalam px
}

const PosterCarousel: React.FC<PosterProps> = ({ children, headerHeight = 0 }) => {
  return (
    <div
      className={styles.carouselWrapper}
      style={{ height: `calc(100vh - ${headerHeight}px)` }}
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={0}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        speed={700}
        pagination={{ clickable: true }}
        navigation={true}
        className={styles.swiperContainer}
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
