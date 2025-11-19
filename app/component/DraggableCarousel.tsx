'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './DraggableCarousel.module.css';

interface CarouselProps {
  children: React.ReactNode;
  autoplayDelay?: number;
}

const DraggableCarousel: React.FC<CarouselProps> = ({ 
  children, 
  autoplayDelay = 3000 
}) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      
      // --- KONFIGURASI RESPONSIF ---
      // 1. Default (untuk HP layar kecil): Tampilkan 1 item
      slidesPerView={1} 
      spaceBetween={16} 
      
      // 2. Breakpoints (titik perubahan tampilan)
      breakpoints={{
        // Saat layar >= 640px (Tablet): Tampilkan 2 item
        640: {
          slidesPerView: 2, 
          spaceBetween: 20, 
        },
        // Saat layar >= 1024px (Laptop/Desktop): Tampilkan 2 item (Sesuai permintaan)
        1024: {
          slidesPerView: 2, 
          spaceBetween: 24, 
        },
      }}
      
      loop={true}
      autoplay={{
        delay: autoplayDelay,
        disableOnInteraction: false,
      }}
      
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
  );
};

export default DraggableCarousel;