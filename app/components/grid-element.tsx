import Image, { StaticImageData } from "next/image";

export interface gridElementProps {
  id: number;
  image: StaticImageData;
  title: string;
  locations?: string;
  price?: string;
  duration?: string;
}

export default function GridElement({ ...data }: gridElementProps) {
  return (
    <div className="m-4">
        <div className=" border-0 border-white rounded-2xl shadow-[0px_1px_4px_rgba(0,0,0,0.5)]">
          <Image
            className="w-full h-[240px] border-0 rounded-t-2xl"
            src={data.image}
            alt=""
          />
          <div className="p-5 ">
            <p className="text-base font-bold">{data.title}</p>
            <p className="text-sm">{data?.locations}</p>
            <div className="flex justify-between">
              <p className="text-base font-bold text-yellow">{data?.price}</p>
              <p className="text-grey text-sm ">{data?.duration}</p>
            </div>
          </div>
        </div>
    </div>
  );
}
