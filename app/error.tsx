"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
      <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold ">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-xl">
            Страница не найдена
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Произошла ошибка во время загрузки заданной страницы, попробуйте
            позже
          </p>
          <div className="mt-2 flex  items-center justify-center gap-x-6">
            <button
              className="transition text-white ease-in-out delay-150 shadow-[0px_4px_4px_rgba(0,0,0,0.8)] bg-yellow hover:bg-darkYellow py-2 px-4 rounded-full mt-8"
              onClick={() => reset()}
            >
              Вернуться домой
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
