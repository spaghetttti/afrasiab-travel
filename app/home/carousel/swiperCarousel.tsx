"use client";
import { useEffect, useRef  } from "react";
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
import TourCard from "@/app/components/TourCard";
export function SwiperCarousel() {

  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer: any = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
      //add this
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            background-color: white;
            background-position: center;
            background-size: 40px;
            background-repeat: no-repeat;
            padding: 8px 16px;
            border-radius: 100%;
            border: 2px solid black;
            color: red;
          }

          .swiper-button-prev {
            background-image: url("/box-arrow-in-left.svg");
          }

          .swiper-button-next {
            background-image: url("/box-arrow-in-right.svg");
          }
          
          .swiper-button-next::after,
          .swiper-button-prev::after {
            content: "";
          }

          .swiper-pagination-bullet{
            width: 40px;
            height: 40px;
            background-color: red;
          }
      `,
      ],
    };
    if (!!swiperContainer) {
      Object.assign(swiperContainer, params);
      swiperContainer.initialize();
    }
  }, []);

  return (
    <>
      <Swiper
      ref={swiperRef}
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
          1175: {
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