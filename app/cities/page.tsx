"use client";
import { Cities } from "../data/data";
// import { usePathname} from "next/navigation";
import { City } from "@/app/components/city";

export default function GridMenu() {
  // const pathName = usePathname();

  return (
    // <div className="text-darkBlue grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    //   {Cities.map((city) => (
    //     <City key={`key-${city.id}`} {...city} />
    //   ))}
    // </div>
    <div className="flex justify-center">
      <div className="container justify-items-center grid-center text-darkBlue grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Cities.map((city) => (
          <City key={`key-${city.id}`} {...city} />
        ))}
      </div>
    </div>
  );
}
