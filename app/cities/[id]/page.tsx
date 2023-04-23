"use client";
import BasicCard from "@/app/components/BasicCard";
import { Cities } from "@/app/data/data";

export default function Page({ params }: { params: { id: number } }) {
  const data = Cities.find((item) => item.id == params.id);
  // const imageSrc = "bg-[url('../public/mosque.jpg')]";
  // const fullStyle = "w-full h-[25vh] bg-[url('../public/mosque.jpg')] bg-cover bg-center flex justify-center items-center";

  return (
    <div className="pb-2">
      <div
        // className={`w-full h-[25vh] bg-[url('../public/mosque.jpg')] bg-cover bg-center flex justify-center items-center`}
        // className={'w-full h-[25vh] bg-cover bg-center flex justify-center items-center' + imageSrc}
        className={data?.imageStyle }
      >
        <span className="font-bold text-white drop-shadow-[0px_4px_4px_rgba(0,0,0,0.8)] lg:text-6xl text-3xl">
          {data?.title}
        </span>
      </div>
      <div className="lg:mx-[8%] lg:text-start m-[4%] text-center ">
        <BasicCard {...data} />
      </div>
    </div>
  );
}
