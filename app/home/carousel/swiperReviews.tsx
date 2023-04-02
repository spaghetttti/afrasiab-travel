"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Reviews } from "@/app/data/data";

import { EffectCoverflow, Pagination } from "swiper";
import Review from "@/components/review";

export default function SwiperReviews() {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper w-[300px] lg:w-[900px]"
    //   style={{ width: "900px"}}
    >
      {Reviews.map((review) => (
        <SwiperSlide key={review.id} className="w-[300px] pt-[20xp] border-2 border-yellow rounded-2xl bg-white" >
          <Review {...review} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
