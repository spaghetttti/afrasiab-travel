"use client";

import Slider from "react-slick";
import "./carousel.css";
import { CarouselItems } from "../../data/data";
import { CarouselItem } from "@/app/components/carousel-item";

function MultipleItems() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    useCSS: true,
    className: "center",
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToScroll: 1,
          className: "nope",
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
        <CarouselItem {...item} key={item.id} />
      ))}
    </Slider>
  );
}

export default MultipleItems;
