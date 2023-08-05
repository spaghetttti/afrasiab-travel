"use client";
import Image from "next/image";
import Clock from "public/Clock_0300.svg";
import Cloud from "public/Cloud.svg";
import USD from "public/USD.svg";
import { useEffect, useState } from "react";
import { useCurrentTime } from "../hooks/currentTime";
import { usePathname } from "next/navigation";

export default function HeaderInfo() {
  const [weather, setWeather] = useState<number>(15);
  const [currency, setCurrency] = useState<number>(0);
  const currentTIme = useCurrentTime();
  const path = usePathname();

  useEffect(() => {
    fetch(
      "https://www.meteosource.com/api/v1/free/point?lat=41.3N&lon=69.2E&sections=current%2Chourly&language=en&units=metric&key=y1f9tymubwge617ftelk5zjkw54dg3chf1ckup94"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setWeather(Number(data.current.temperature)))
      .catch((error) => {
        console.error("Error fetching user: ", error);
        throw error;
      });
  }, []);

  useEffect(() => {
    fetch(`/api/exchange-rate`)
      .then((res) => res.json())
      .then((data) => setCurrency(data.result))
      .catch((error) => console.error("error", error));
  }, []);

  return (
    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
      <li className="flex justify-between items-center flex-row">
        <Image src={Cloud} className="w-6 mr-3 h-6 sm:h-9" alt="" />
        <p className="block whitespace-nowrap text-sm text-darkBlue">
          {Math.round(weather)} C°
        </p>
      </li>
      <li className="flex justify-between items-center flex-row">
        <Image src={Clock} className="w-6 mr-3 h-6 sm:h-9" alt="" />
        <p className="block text-sm text-darkBlue">{currentTIme}</p>
      </li>
      <li className="flex justify-between items-center flex-row">
        <Image src={USD} className="w-au6-3 h-6 sm:h-9" alt="" />
        <p className="block text-sm text-darkBlue">{Math.round(currency)}</p>
      </li>
    </ul>
  );
}