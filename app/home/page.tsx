export default function Home() {
  return (
    <>
      <div className="w-full h-screen bg-[url('../public/Hero.png')] bg-cover bg-center flex justify-center items-center">
        <h1 className="font-bold flex flex-col items-center text-white">
          <span className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.8)] text-6xl">ИССЛЕДУЙТЕ</span>
          <span className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.8)] p-5 text-9xl">УЗБЕКИСТАН</span>
          <span className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.8)] text-6xl">ВСЕМЕ С НАМИ</span>
          {/* change below basic yellow into custom color in config file */}
          <button className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.8)] bg-blue-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full mt-8">
            Бронировать
          </button>
        </h1>
      </div>
    </>
  );
}
