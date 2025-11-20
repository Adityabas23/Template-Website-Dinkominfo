"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./DraggableCarousel.module.css";

interface CarouselProps {
  children: React.ReactNode;
  autoplayDelay?: number;
}

const DraggableCarousel: React.FC<CarouselProps> = ({
  children,
  autoplayDelay = 3000,
}) => {
  return (
    <div className={styles.carouselWrapper}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={24}
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
    </div>
  );
};

export default DraggableCarousel;
