import Image from "next/image";
import Link from "next/link";

interface CityProps {
  id: number;
  image: any;
  title: string;
}

export function City({ id, image, title }: CityProps) {
  return (
    <div className="w-[300px] my-4 bg-white border-0 border-white rounded-2xl shadow-[0px_1px_4px_rgba(0,0,0,0.5)]">
      <Link href={`/cities/${id}`}>
        <Image
          className="w-[300px] h-[180px] border-0 rounded-t-2xl"
          src={image}
          alt=""
        />
        <p className="p-3 text-base text-center font-bold">{title}</p>
      </Link>
    </div>
  );
}
