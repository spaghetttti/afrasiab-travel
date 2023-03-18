"use client";
import Image from "next/image";

import Slider from "react-slick";
import "./carousel.css";
import { CarouselItems } from "../data/data";
import { Component } from "react";

// interface CarouselItemProps {
//   title: string,
//   locations: string,
//   price: string,
//   duration:  string,
//   image: any
// }

export function CarouselItem(itemInfo: any) {
  const { title, locations, price, duration, image } = itemInfo.itemInfo;
  return (
    <div>
      <div className="w-[360px] my-4 border-0 border-white rounded-2xl shadow-[0px_4px_4px_rgba(0,0,0,0.8)]">
        <Image src={image} alt="" />
        <div className="p-5 ">
          <p className="text-base font-bold">{title}</p>
          <p className="text-sm">{locations}</p>
          <div className="flex justify-between">
            <p className="text-base font-bold text-yellow">{price}</p>
            <p className="text-grey text-sm ">{duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MultipleItems() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      useCSS: true,
      className: "center",
      responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToScroll: 1,
            className: 'nope',
            slidesToShow: 1,
            centerMode: false,
          },
        },
      ],
      centerMode: true,
    };
    return (
        <Slider {...settings}>
          {CarouselItems.map((item) => (
            <>
              <CarouselItem itemInfo={item} />
            </>
          ))}
        </Slider>
    );
}

export default MultipleItems;
