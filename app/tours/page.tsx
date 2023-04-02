"use client";
import { CarouselItems } from "../data/data";
// import { usePathname} from "next/navigation";
import GridElement from "../../components/grid-element";

export default function GridMenu() {
  // const pathName = usePathname();

  return (
      <div className="text-darkBlue grid grid-cols-4 gap-4">
        {CarouselItems.map((item) => (
          <GridElement {...item} />
        ))}
      </div>
  );
}

// export default GridMenu;
