import Image from "next/image";

interface CarouselItemProps {
  id: number;
  title: string;
  locations: string;
  price: string;
  duration: string;
  image: any;
}

export function CarouselItem({title, locations, price, duration, image ,}: CarouselItemProps) {
  return (
    <div className="m-4">
      <div className=" border-0 bg-white border-white rounded-2xl shadow-[0px_1px_4px_rgba(0,0,0,0.5)]">
        <Image className="w-full h-[240px] border-0 rounded-t-2xl" src={image} alt="" />
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
