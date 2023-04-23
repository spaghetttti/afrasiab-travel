"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "./carousel.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";

import { CarouselItems } from "../../data/data";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";
import TourCard from "@/components/TourCard";
export function SwiperCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        navigation={true}
        spaceBetween={20}
        scrollbar={{
          hide: true,
        }}
        modules={[Navigation, Scrollbar]}
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
        }}
      >
        {CarouselItems.map((item) => (
          <SwiperSlide key={item.id}>
            <TourCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
