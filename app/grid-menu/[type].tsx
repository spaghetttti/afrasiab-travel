"use client";
import { Cities, CarouselItems } from "../data/data";
// import { usePathname} from "next/navigation";
import GridElement from "./grid-element";

export default function GridMenu() {
  // const pathName = usePathname();

  return <>
  <div className="text-darkBlue grid grid-cols-4 gap-4">{Cities.map(city => (<GridElement {...city} />))}</div>;
  <div className="text-darkBlue grid grid-cols-4 gap-4">{CarouselItems.map(item => (<GridElement {...item} />))}</div>;

  </>
}

// export default GridMenu;
