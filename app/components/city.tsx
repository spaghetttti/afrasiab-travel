import Image from "next/image";

interface CityProps {
  id: number;
  image: any;
  title: string;
}

export function City({ image, title }: CityProps) {
  return (
    <div className="my-4 border-0 border-white rounded-2xl shadow-[0px_1px_4px_rgba(0,0,0,0.5)]">
      <Image className="w-[300px] h-[180px] border-0 rounded-t-2xl" src={image} alt="" />
      <p className="p-3 text-base text-center font-bold">{title}</p>
    </div>
  );
}
