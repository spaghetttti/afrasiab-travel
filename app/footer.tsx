import Link from "next/link";
import Image from "next/image";
import Logo from "public/logo.jpg";
import facebookIcon from "public/facebook.svg";
// import instagramIcon from "public/instagram.svg";
import { AiFillInstagram, AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { BsFillTelephoneFill, BsTelegram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaTripadvisor } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="lg:px-[8%] lg:py-[4%] p-[4%] flex align-center flex-col lg:flex-row lg:space-x-12 drop-shadow-[0px_4px_10px_rgba(255,255,255,0.3)]">
      <div className="flex flex-col grow-0 space-y-4">
        <Image src={Logo} className="w-[100px] h-auto" alt="" />
        <div className="text-sm">г. Самарканд, ул. Орзу Махмудова дом 18</div>
        <div className="flex items-center gap-2 text-sm">
          <BsFillTelephoneFill />
          +998 99 771 73 30
        </div>
        <div className="flex items-center gap-2 text-sm">
          <MdEmail />
          info@afrasiab-travel.com
        </div>
        <div className="flex space-x-3 text-yellow">
          <Link href="https://www.facebook.com/Afrasiabtravel?mibextid=LQQJ4d">
            <AiFillFacebook className="w-[25px] h-[25px]" />
          </Link>
          <Link href="https://www.instagram.com/turi_po_uzbekistanu/">
            <AiFillInstagram className="w-[25px] h-[25px]" />
          </Link>
          {/* <Link href="/">
            <AiFillYoutube className="w-[25px] h-[25px]" />
          </Link> */}
          {/* <Link href="/">
            <FaTripadvisor className="w-[25px] h-[25px]" />
          </Link> */}
          <Link href="https://t.me/afrasiabtravell">
            <BsTelegram className="w-[25px] h-[25px]" />
          </Link>
        </div>
      </div>
      <div className="grow lg:flex justify-between">
        <div className="grow lg:flex justify-between">
          <div className="flex flex-col">
            <h4 className="text-base font-bold">Навигация</h4>
            <div className="hidden md:flex flex-col lg:flex-col sm:flex-row lg:space-y-2 mt-2 justify-between">
              <Link href="/">Главная</Link>
              <Link href="/about">О нас</Link>
              <Link href="/tours">Авторские Туры</Link>
              <Link href="/cities">Города</Link>
              <Link href="/sights">Достопримечательности</Link>
              <Link href="/contacts">Контакты</Link>
            </div>
            <div className="block md:hidden flex flex-wrap text-center justify-center">
              <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-1">
                <div className="p-2">
                  <Link href="/">Главная</Link>
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-1">
                <div className="p-2">
                  <Link href="/about">О нас</Link>
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-1">
                <div className="p-2">
                  <Link href="/tours">Авторские Туры</Link>
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-1">
                <div className="p-2">
                  <Link href="/cities">Города</Link>
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-1">
                <div className="p-2">
                  <Link href="/sights">Достопримечательности</Link>
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-1">
                <div className="p-2">
                  <Link href="/contacts">Контакты</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <h4 className="text-base font-bold">Новости</h4>
            <p className="text-sm">
              Хотите получать новости о новых публикациях ?
            </p>
            <form>
              <div className="relative">
                <input
                  id="default-search"
                  className="block w-full p-4 text-sm border-2 border-darkBlue rounded-lg focus:ring-darkBlue focus:border-darkBlue"
                  placeholder="Введите свой email"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-yellow hover:bg-darkYellow focus:ring-4 focus:outline-none focus:ring-darkBlue font-medium rounded-lg text-sm px-3 py-2"
                >
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
