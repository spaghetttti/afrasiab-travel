import Image from "next/image";
import Images from "public/Images.png";
import MultipleItems from "./carousel";

export default function Home() {
  return (
    <>
      <div className="w-full lg:h-screen h-[65vh] bg-[url('../public/Hero.png')] bg-cover bg-center flex justify-center items-center">
        <h1 className="font-bold flex flex-col items-center text-white">
          <span className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.8)] lg:text-6xl text-3xl">
            ИССЛЕДУЙТЕ
          </span>
          <span className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.8)] p-5 lg:text-9xl text-6xl">
            УЗБЕКИСТАН
          </span>
          <span className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.8)] lg:text-6xl text-3xl">
            ВСЕМЕ С НАМИ
          </span>
          {/* change below basic yellow into custom color in config file */}
          <button className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.8)] bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-full mt-8">
            <p className="text-base">Бронировать</p>
          </button>
        </h1>
      </div>
      <div className="lg:m-[8%] lg:text-start m-[4%] text-center ">
        <div className="flex lg:flex-row flex-col-reverse lg:space-x-20 mb-20">
          <div className="">
            <Image
              src={Images}
              className="w-auto lg:w-[1000px] h-auto"
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <div className="text-sm text-yellow font-bold">О НАС</div>
            <h1 className="text-l text-darkBlue font-bold mb-5">
              Наш план тура - исполнить желание вашей мечты
            </h1>
            <div>
              Добро пожаловать в мир путешествий и приключений, где мы открываем
              для вас не только новые места, но и новые возможности для роста и
              развития личности, благодаря нашему опыту, профессионализму и
              заботе о каждом клиенте
            </div>
            <div className="flex flex-row flex-wrap gap-5 my-5 lg:justify-start justify-center">
              <div className="w-[120px] flex flex-col">
                <div className="text-yellow text-l font-bold">15</div>
                <div className="text-grey">Лет опыта в индустрии</div>
              </div>
              <div className="w-[120px] flex flex-col">
                <div className="text-yellow text-l font-bold">1k</div>
                <div className="text-grey">Успешных туров</div>
              </div>
              <div className="w-[120px] flex flex-col">
                <div className="text-yellow text-l font-bold">20k</div>
                <div className="text-grey">Довольных клиентов</div>
              </div>
              <div className="w-[120px] flex flex-col">
                <div className="text-yellow text-l font-bold">4.9</div>
                <div className="text-grey">Общий рейтинг</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-sm text-yellow font-bold">АВТОРСКИЕ ТУРЫ</div>
          <h1 className="text-l text-darkBlue font-bold mb-5">
            Удивительные места по всему Узбекистану
          </h1>
          <MultipleItems />
          <div>buttons</div>
        </div>
      </div>
    </>
  );
}
