"use client";
//package imports
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
//local imports
import Logo from "public/logo.jpg";
import { PopMenu } from "./components/popup-menu";
import HeaderInfo from "./components/header-info";

export function Header() {
  const pathName = usePathname();

  return (
    <nav className="fixed w-full z-10 bg-white text-sm px-4 lg:px-6 py-2.5 ">
      <div className="flex justify-between items-center mx-auto">
        <Link href="/" className="flex basis-1/3 items-center">
          <Image
            src={Logo}
            className="mr-3 w-[80px] md:w-[110px]"
            alt="Logo"
          />
        </Link>
        <div className="flex items-center lg:hidden">
          <PopMenu />
        </div>
        <div
          className="hidden basis-1 justify-between items-center w-full ml-30 lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 min-w-[390px] lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link
                href="/"
                style={
                  pathName === "/"
                    ? {
                        borderBottom: "3px solid #F2AB1C",
                        borderRadius: "2px",
                        color: "#112B3C",
                      }
                    : {}
                }
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 lg:border-0 lg:p-0 dark:text-gray-400"
                aria-current="page"
              >
                Главная 
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                style={
                  pathName === "/about"
                    ? {
                        borderBottom: "3px solid #F2AB1C",
                        borderRadius: "2px",
                        color: "#112B3C",
                      }
                    : {}
                }
                className="block whitespace-nowrap hover:text-darkBlue  py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 lg:border-0 lg:p-0 dark:text-gray-400"
              >
                О нас
              </Link>
            </li>
            <li>
              <Link
                href="/tours"
                style={
                  pathName === "/tours"
                    ? {
                        borderBottom: "3px solid #F2AB1C",
                        borderRadius: "2px",
                        color: "#112B3C",
                      }
                    : {}
                }
                className="block whitespace-nowrap hover:text-darkBlue py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 lg:border-0 lg:p-0 dark:text-gray-400"
              >
                Авторские Туры
              </Link>
            </li>
            <li>
              <Link
                href="/cities"
                style={
                  pathName === "/cities"
                    ? {
                        borderBottom: "3px solid #F2AB1C",
                        borderRadius: "2px",
                        color: "#112B3C",
                      }
                    : {}
                }
                className="block hover:text-darkBlue py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 lg:border-0 lg:p-0 dark:text-gray-400"
              >
                Города
              </Link>
            </li>
            {/* <li>
              <Link
                href="/sights"
                style={
                  pathName === "/sights"
                    ? {
                        borderBottom: "3px solid #F2AB1C",
                        borderRadius: "2px",
                        color: "#112B3C",
                      }
                    : {}
                }
                className="block hover:text-darkBlue py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 lg:border-0 lg:p-0 dark:text-gray-400"
              >
                Достопримечательности
              </Link>
            </li> */}
            <li>
              <Link
                href="/contacts"
                style={
                  pathName === "/contacts"
                    ? {
                        borderBottom: "3px solid #F2AB1C",
                        borderRadius: "2px",
                        color: "#112B3C",
                      }
                    : {}
                }
                className="block hover:text-darkBlue py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 lg:border-0 lg:p-0 dark:text-gray-400"
              >
                Контакты
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden basis-1/3 lg:flex items-center w-auto justify-end lg:order-1" id="mobile-menu-2">
          <HeaderInfo />
        </div>
      </div>
    </nav>
  );
}
