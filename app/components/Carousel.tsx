"use client";
import { CarouselItems } from "@/app/data/data";
import { useState, useRef, useEffect } from "react";
import TourCard from "./TourCard";

const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef<any>(null);
  const widthOfOneCard = 352;

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      widthOfOneCard * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction: string) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        widthOfOneCard * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = widthOfOneCard * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel my-12">
      <div className="relative">
        <div
          ref={carousel}
          className="p-2 relative flex justify-between gap-8 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {CarouselItems.map((item) => (
            <TourCard {...item} key={`carousel-id-${item.id}`} />
          ))}
        </div>
        <div className="flex justify-center">
          <button
            onClick={movePrev}
            className="w-28 h-full disabled:opacity-25 disabled:cursor-not-allowed z-0 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-28"
              fill="#F2AB1C"
              viewBox="0 0 28 28"
              stroke="#eaa20e"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>

            <span className="sr-only">Prev</span>
          </button>

          <button
            onClick={moveNext}
            className="w-28 h-full disabled:opacity-25 disabled:cursor-not-allowed z-0 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-28"
              fill="#F2AB1C"
              viewBox="0 0 28 28"
              stroke="#eaa20e"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
