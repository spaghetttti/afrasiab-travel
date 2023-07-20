import Image from "next/image";
import Images from "public/Images.png";
import { SwiperCarousel } from "./carousel/swiperCarousel";
import { Cities } from "../data/data";
import { City } from "../components/city";
import SwiperReviews from "./carousel/swiperReviews";
import Link from "next/link";
import Carousel from "@/app/components/Carousel";

export default function Home() {
  return (
    <>
      <div className="w-full lg:h-screen h-[65vh] bg-[url('../public/hero-comp.jpg')] bg-cover bg-center flex justify-center items-center">
        <h1 className="font-bold flex flex-col items-center text-white">
          <span className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.8)] lg:text-3xl text-l">
            ИССЛЕДУЙТЕ
          </span>
          <span className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.8)] lg:p-5 lg:text-6xl text-2xl lg:leading-[85%]">
            УЗБЕКИСТАН
          </span>
          <span className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.8)] lg:text-3xl text-l">
            ВМЕСТЕ С НАМИ
          </span>
          <button className="transition ease-in-out delay-150 shadow-[0px_4px_4px_rgba(0,0,0,0.8)] bg-yellow hover:bg-darkYellow py-3 px-6 rounded-full mt-8">
            <p className="text-base">Бронировать</p>
          </button>
        </h1>
      </div>
      <div className="lg:px-[8%] lg:pt-[4%] lg:text-start px-[4%] pt-[2%] text-center ">
        <div className="flex lg:flex-row flex-col-reverse lg:space-x-20 mb-20 pt-4">
          <div>
            <Image src={Images} className="lg:w-[1000px] h-auto" alt="" />
          </div>
          <div className="flex flex-col">
            <div className="lg:text-base text-sm text-yellow font-bold">
              О НАС
            </div>
            <h1 className="leading-tight lg:text-2xl text-xl text-darkBlue font-bold mb-5">
              Наш план тура - исполнить желание вашей мечты
            </h1>
            <div className="text-base">
              Добро пожаловать в мир путешествий и приключений, где мы открываем
              для вас не только новые места, но и новые возможности для роста и
              развития личности, благодаря нашему опыту, профессионализму и
              заботе о каждом клиенте
            </div>
            <div className="flex flex-row flex-wrap gap-5 my-5 lg:justify-start justify-center">
              <div className="w-[120px] flex flex-col">
                <div className="text-yellow text-xl font-bold">15</div>
                <div className="text-grey">Лет опыта в индустрии</div>
              </div>
              <div className="w-[120px] flex flex-col">
                <div className="text-yellow text-xl font-bold">1k</div>
                <div className="text-grey">Успешных туров</div>
              </div>
              <div className="w-[120px] flex flex-col">
                <div className="text-yellow text-xl font-bold">20k</div>
                <div className="text-grey">Довольных клиентов</div>
              </div>
              <div className="w-[120px] flex flex-col">
                <div className="text-yellow text-xl font-bold">4.9</div>
                <div className="text-grey">Общий рейтинг</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-sm lg:text-base text-yellow font-bold">
            АВТОРСКИЕ ТУРЫ
          </div>
          <h1 className="leading-tight text-xl lg:text-2xl text-darkBlue font-bold mb-5">
            Удивительные места по всему Узбекистану
          </h1>
          <div className="">
            {/* <SwiperCarousel /> */}
            <Carousel />
          </div>
        </div>
        <div className="flex flex-col py-5 items-center ">
          <div className="text-sm lg:text-base text-yellow font-bold">
            ОТЗЫВЫ
          </div>
          <h1 className="text-xl leading-tight lg:text-2xl text-darkBlue font-bold mb-5">
            Довольные клиенты по всему миру
          </h1>
          <SwiperReviews />
          <h1 className="leading-tight mt-8 text-xl lg:text-2xl text-darkBlue font-bold ">
            История городов Узбекистана
          </h1>
          <button className="mb-6 transition w-[300px] text-white ease-in-out delay-150 shadow-[0px_4px_4px_rgba(0,0,0,0.8)] bg-yellow hover:bg-darkYellow py-2 px-4 rounded-full mt-8">
            <Link href="/cities">
              <p className="text-base p-2 drop-shadow-[0px_4px_1px_rgba(0,0,0,0.1)]">
                Просмотреть все
              </p>
            </Link>
          </button>
          <div className="flex flex-wrap gap-x-5 justify-center">
            {Cities.map((oneCity) => (
              <City {...oneCity} key={oneCity.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
