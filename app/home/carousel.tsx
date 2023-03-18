"use client";
import Image from "next/image";
// import Image1 from "public/C1.png";
// import Image2 from "public/C2.png";
// import Image3 from "public/C3.png";
// import Image4 from "public/C4.png";
// import Image5 from "public/C5.png";

import Slider from "react-slick";
import "./carousel.css";
import { CarouselItems } from "../data/data";

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

export function MultipleItems() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    // slidesToScroll: 3,
    useCSS: true,
    className: "center",
    centerMode: true,
  };
  return (
    <div>
      <Slider {...settings}>
        {CarouselItems.map((item) => (
          <>
            <CarouselItem itemInfo={item} />
          </>
        ))}
      </Slider>
    </div>
  );
}
