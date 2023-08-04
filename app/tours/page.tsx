"use client";
import { CarouselItems } from "../data/data";
// import { usePathname} from "next/navigation";
import TourCard from "../components/TourCard";

export default function GridTourMenu() {
  // const pathName = usePathname();
  return (
    <div className="flex justify-center">
      <div className="justify-items-center grid-center text-darkBlue grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {CarouselItems.map((item) => (
          <div className="m-4">
            <TourCard key={`key-${item.id}`} {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
