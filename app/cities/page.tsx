"use client";
import { Cities } from "../data/data";
// import { usePathname} from "next/navigation";
import GridElement from "../../components/grid-element";

export default function GridMenu() {
  // const pathName = usePathname();

  return (
      <div className="text-darkBlue grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Cities.map((city) => (
          <GridElement {...city} />
        ))}
      </div>
  );
}

