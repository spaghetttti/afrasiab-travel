"use client";
// Import Swiper React components
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";

import { CarouselItem } from "./carousel";
import { CarouselItems } from "../data/data";

export function SwiperCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        navigation={true}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {CarouselItems.map((item) => (
          <SwiperSlide>
            <CarouselItem itemInfo={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
