import Image from "next/image";
import Logo from "public/logo.jpg";
import facebookIcon from "public/facebook.svg";
import instagramIcon from "public/instagram.svg";
import youtubeIcon from "public/youtube.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="lg:m-[8%] m-[4%] flex flex-col lg:flex-row lg:space-x-12">
      <div className="flex flex-col grow-0 space-y-4">
        <Image src={Logo} className="w-[100px] h-auto" alt="" />
        <div className="text-sm">г. Самарканд, ул. Орзу Махмудова дом 18</div>
        <div className="flex space-x-2">
          <Link href="/">
            <Image src={facebookIcon} alt="" className="w-[30px] h-auto" />
          </Link>
          <Link href="/">
            <Image src={instagramIcon} alt="" className="w-[30px] h-auto" />
          </Link>
          <Link href="/">
            <Image src={youtubeIcon} alt="" className="w-[30px] h-auto" />
          </Link>
        </div>
      </div>
      <div className="grow lg:flex justify-between">
        <div className="flex flex-col">
          <h4 className="text-base font-bold">Главная</h4>
          <div className="mt-2 flex lg:flex-col sm:flex-row lg:space-y-2 justify-between">
          <Link href="/">Главная</Link>
            <Link href="/about">О нас</Link>
            <Link href="/tours">Авторские Туры</Link>
            <Link href="/cities">Города</Link>
            <Link href="/">Контакты</Link>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className="text-base font-bold">Новости</h4>
          <p className="text-sm">
            Хотите получать новости о новых публикациях ?
          </p>
          <form >
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
  );
}
