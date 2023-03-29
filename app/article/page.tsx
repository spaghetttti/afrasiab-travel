// import { CarouselItems } from "../data/data";
import Image1 from "public/mausoleum.jpg";

export default function Article() {
  const demo = {
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
        className={`w-full h-[25vh] bg-[url('../public/mausoleum.jpg')] bg-cover bg-center flex justify-center items-center`}
      >
        {demo.title}
      </div>
    </>
  );
}
