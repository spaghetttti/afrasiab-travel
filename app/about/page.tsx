import Image from "next/image";
import Image1 from "public/mausoleum.jpg";
import Image2 from "public/samarkand.jpg";
import Image3 from "public/bukhara-sky.jpg";
import Image4 from "public/chimgan.jpg";
import Image5 from "public/bazaar.jpg";
import Bukhara from "public/bukhara.jpg";
import Tashkent from "public/tashkent.jpg";
import Hiva from "public/mosque.jpg";
import BasicCard from "@/components/basic-card";

export default function About() {
  return (
    <>
      <div className="relative overflow-hidden ">
        <div className="pb-4 pt-4 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 sm:flex-col">
            <div className="max-w-lg md:text-left p-2">
              <div className="font lg:leading-[1.2] text-l lg:text-xl font-bold tracking-tight">
                <h1 className="text-xl lg:text-2xl">Afrasiab Travel</h1>{" "}
                приглашает вас посетить Узбекистан!
              </div>
              <p className="mt-4 text-sm">
                Мы - опытная туристическая компания с профессиональными
                специалистами в данной области до 40 лет опыта. Мы охватывает
                все исторические регионы Узбекистана и гарантируем незабываемые
                впечатления и уникальный опыт путешествия в Узбекистан!.
              </p>
              <button className="text-white w-full md:w-auto transition ease-in-out delay-150 shadow-[0px_4px_4px_rgba(0,0,0,0.8)] bg-yellow hover:bg-darkYellow py-2 px-4 rounded-full mt-8">
                <p className="text-base font-bold p-2 drop-shadow-[0px_4px_1px_rgba(0,0,0,0.1)]">
                  Бронировать
                </p>
              </button>
            </div>
            {/* Decorative image grid */}
            <div
              aria-hidden="true"
              className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
            >
              <div className="absolute hidden lg:block transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                      <Image
                        src={Hiva}
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <Image
                        src={Image2}
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <Image
                        src={Image3}
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <Image
                        src={Image4}
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <Image
                        src={Image5}
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <Image
                        src={Bukhara}
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <Image
                        src={Tashkent}
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-[8%] lg:text-start px-[4%] flex justify-center ">
        <div className="rounded-xl border-0 p-5 mb-10 shadow-md w-full bg-white">
          <div className="w-full p-3">
            <h3 className="text-m font-bold">
              Туристическая компания "Afrasiab Travel"
            </h3>
            <p>
              Приглашает вас посетить Узбекистан по нашим маршрутам! Мы являемся
              туроператором в сфере международного туризма (out coming/incoming,
              лицензия Министерства туризма и спорта № 018514). Наши специалисты
              имеют опыт работы в туристическом бизнесе от 10 до 40 лет.
            </p>
            <h3>Туристические маршруты</h3>
            <p>
              Маршруты, предлагаемые нами, охватили все исторически-значимые
              регионы Республики Узбекистан. Офис компании дислоцируется в
              городе Самарканде.
            </p>
            <h3>Индивидуальные туры</h3>
            <p>
              Туроператоры фирмы могут разработать и организовать для вас
              индивидуальные туры по предварительной заявке, где должно быть
              указано:
            </p>
            <ul className="list-inside list-disc">
              <li>Удобное для вас время года;</li>
              <li>Желаемое количество дней пребывания на маршруте;</li>
              <li>Города посещения;</li>
              <li>Категория обслуживания.</li>
            </ul>

            <h3 className="text-base font-bold">
              Перечень туристических услуг, предлагаемых заказчику:
            </h3>
            <ul className="list-inside list-disc">
              <li>Удобное для вас время года;</li>
              <li>Желаемое количество дней пребывания на маршруте;</li>
              <li>Города посещения;</li>
              <li>Категория обслуживания.</li>
              <li>Визовая поддержка (если необходимо);</li>
              <li>
                Туристический автотранспорт любой категории и вместимости;
              </li>
              <li>Бронирование и размещение в гостиницах любой категории;</li>
              <li>Локальные экскурсоводы на различных языках;</li>
              <li>Гиды-сопровождающие по всему маршруту;</li>
              <li>Бронирование и выкуп авиабилетов на внутренние рейсы;</li>
              <li>
                Бронирование и выкуп ж/д билетов на электропоезда внутри
                Узбекистана;
              </li>
              <li>Питание - европейская кухня и узбекская национальная;</li>
              <li>
                Организация дополнительных услуг, не входящих в основную
                программу обслуживания;
              </li>
              <li>
                Аренда помещений для проведения конференций, семинаров, круглых
                столов и т.п.;
              </li>
              <li>
                Организация встреч со специалистами в различных областях
                экономики Узбекистана;
              </li>
              <li>Корпоративные туры;</li>
              <li>MICE-туризм.</li>
            </ul>
            <p className="text-base font-bold">
              Добро пожаловать в Узбекистан!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
