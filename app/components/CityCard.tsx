import Image from "next/image";
import Link from "next/link";

interface CityProps {
  id: number;
  image: any;
  title: string;
  shot_description: string;
}

export default function CityCard({ id, image, shot_description, title }: CityProps) {
  return (
    <div className="justify-center max-w-[320px] min-w-[320px] h-[342px] border-0 bg-white border-white rounded-2xl shadow-[0px_1px_4px_rgba(0,0,0,0.5)]">
      <Link href={`/cities/${id}`}>
        <Image
          className="w-full h-[220px] border-0 rounded-t-2xl"
          src={image}
          alt="фотография тура"
        />
        <div className="py-2 px-5 h-[122px] flex flex-col">
          <p className="text-base text-center font-bold">{title}</p>
          <p className="text-sm text-center">{shot_description}</p>
        </div>
      </Link>
    </div>
  );
}
