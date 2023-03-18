"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";

import { CarouselItem } from "@/app/components/carousel-item";
import { CarouselItems } from "../../data/data";

export function SwiperCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        navigation={true}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {CarouselItems.map((item) => (
          <SwiperSlide>
            <CarouselItem {...item} key={item.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
