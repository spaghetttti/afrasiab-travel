"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./carousel.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";

import { CarouselItem } from "@/app/components/carousel-item";
import { CarouselItems } from "../../data/data";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";
export function SwiperCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        navigation={true}
        spaceBetween={20}
        // pagination={{
        //   clickable: true,
        // }}
        scrollbar={{
          hide: true,
        }}
        modules={[Navigation, Scrollbar]}
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {CarouselItems.map((item) => (
          <SwiperSlide key={item.id}>
            <CarouselItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
