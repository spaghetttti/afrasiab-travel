"use client";
import { tours } from "../data/data";
import TourCard from "../components/TourCard";

export default function GridTourMenu() {
  
  return (
    <div className="flex justify-center">
      <div className="justify-items-center grid-center text-darkBlue grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {tours.map((tour) => (
            <TourCard key={`key-${tour.id}`} {...tour} />
        ))}
      </div>
    </div>
  );
}
