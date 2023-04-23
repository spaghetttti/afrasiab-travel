// import { CarouselItems } from "../data/data";
import Image1 from "public/mosque.jpg";
import BasicCard from "../components/BasicCard";
// import { gridElementProps } from "../components/grid-element";

export default function Article() {
  const data = {
    id: 1,
    title: "Великий Шелковый путь",
    locations: "Самарканд - Бухара - Гиждуван - Самарканд",
    price: "$ 500",
    duration: "7 дней / 6 ночей",
    image: Image1,
  };
  
  return (
    <>
      <div
        className={`w-full h-[25vh] bg-[url('../public/mosque.jpg')] bg-cover bg-center flex justify-center items-center`}
      >
        <span className="font-bold text-white drop-shadow-[0px_4px_4px_rgba(0,0,0,0.8)] lg:text-6xl text-3xl">
          {data.title}
        </span>
      </div>
      <div className="lg:mx-[8%] lg:text-start m-[4%] text-center ">
      <BasicCard {...data}/>
    </div>
    </>
  );
}
