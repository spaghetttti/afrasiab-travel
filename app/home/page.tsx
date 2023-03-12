export default function Home() {
  return (
    <>
      <div className="w-full lg:h-screen h-[65vh] bg-[url('../public/Hero.png')] bg-cover bg-center flex justify-center items-center">
        <h1 className="font-bold flex flex-col items-center text-white">
          <span className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.8)] lg:text-6xl text-3xl">ИССЛЕДУЙТЕ</span>
          <span className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.8)] p-5 lg:text-9xl text-6xl">УЗБЕКИСТАН</span>
          <span className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.8)] lg:text-6xl text-3xl">ВСЕМЕ С НАМИ</span>
          {/* change below basic yellow into custom color in config file */}
          <button className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.8)] bg-blue-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full mt-8">
            Бронировать
          </button>
        </h1>
      </div>
      <>
        just typing new content 
      </>
    </>
  );
}
