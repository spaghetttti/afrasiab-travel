"use client";
//package imports
import Image from "next/image";
import { usePathname } from "next/navigation";
//local imports
import Logo from "public/logo.jpg";
import { PopMenu } from "./components/popup-menu";
import HeaderInfo from "./components/header-info";

export function Header() {
  const pathName = usePathname();

  return (
    // <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-white-800">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="/home" className="flex items-center w-20">
          <Image
            src={Logo}
            width={80}
            height={100}
            className="mr-3 w-20 h-auto"
            alt="Logo"
          />
        </a>
        <div className="flex items-center lg:hidden">
          
        <PopMenu />
        </div>
        <div
          className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <a
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
              </a>
            </li>
            <li>
              <a
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
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 lg:border-0 lg:p-0 dark:text-gray-400"
              >
                О нас
              </a>
            </li>
            <li>
              <a
                href="#"
                style={
                  pathName === "/tours"
                    ? {
                        borderBottom: "3px solid #F2AB1C",
                        borderRadius: "2px",
                        color: "#112B3C",
                      }
                    : {}
                }
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 lg:border-0 lg:p-0 dark:text-gray-400"
              >
                Авторские Туры
              </a>
            </li>
            <li>
              <a
                href="#"
                style={
                  pathName === "/contacts"
                    ? {
                        borderBottom: "3px solid #F2AB1C",
                        borderRadius: "2px",
                        color: "#112B3C",
                      }
                    : {}
                }
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 lg:border-0 lg:p-0 dark:text-gray-400"
              >
                Контакты
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="hidden justify-between items-end align-end w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2"> */}
        <div className="hidden lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
          <HeaderInfo />
        </div>
      </div>
    </nav>
  );
}
