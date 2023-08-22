"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { svgs } from "../components/FormUIsvgs";
import { tours } from "../data/data";
import { ChangeEvent, useState } from "react";
import TourCard from "../components/TourCard";
import DownloadFiles from "../components/DownloadFIle";
import { useSelectedTourContext } from "../contexts/selectedTourContext";

type Inputs = {
  name: string;
  email: string;
  phone_number: string | number;
  message: string;
  date: string | Date;
  file: File;
};

export default function BookingPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  // const [selectedTour, setSelectedTour] = useState<any>(null);
  const { selectedTour, setSelectedTour } = useSelectedTourContext();
  console.log("f", selectedTour);
  const SubmitToBackend = (data: Inputs) => {
    // so future logic for sending data to back end
    console.log({ ...data, selectedTour });
  };
  const onSubmit: SubmitHandler<Inputs> = (data) => SubmitToBackend(data);

  const handleTourChange = (title: string) => {
    setSelectedTour(tours.find((tour) => tour.title === title));
  };

  return (
    <div className="lg:px-[8%] lg:py-[4%] lg:text-start px-[4%] py-[2%] text-center ">
      <div className="rounded-xl border-0 p-5 mb-10 shadow-md w-full bg-white">
        <section className="relative lg:p-10 z-9 overflow-hidden">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap lg:justify-between">
              <div className="w-full flex flex-col px-4 lg:w-1/2 xl:w-6/12 ">
                <h2 className="text-dark mb-3 m:mb-6 font-bold uppercase text-m lg:text-l">
                  Бронирование тура
                </h2>
                <p className="text-body-color mb-9 text-sm md:text-base leading-relaxed ">
                  Остался последний шаг для брони вашего тура 🙂 <br />
                  Вы можете забронировать тур с помощью веб-формы на этой
                  странице <br />
                  Или же вы можете связаться с нами на прямую по следуюущему
                  номеру: <strong> +998 99 771 73 30 </strong> <br />
                </p>
                <div className="flex flex-col p-2 gap-4">
                  <p>
                    Пожалуйста скачайте этот бланк, заполните его и выложите в
                    указанное поле
                  </p>
                  <DownloadFiles
                    buttonTitle="Нажмите чтобы скачать файл"
                    fileName="files/application.doc"
                  />
                </div>
                <div className="flex flex-col p-2 gap-4">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Выберете тур
                  </label>
                  <select
                    value={selectedTour?.title ?? ""}
                    onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                      handleTourChange(event.target.value);
                    }}
                    id="coutourntries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[320px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    {!!selectedTour && (
                      <option disabled selected value="">Выберете Тур</option>
                    )}
                    {tours.map((tour: any) => (
                      <option
                        key={tour.id}
                        value={tour.title}
                      >
                        {/* {!selectedTour}  ? {`${tour.title} ${tour.price}`} : Выберете тур */}
                        {`${tour.title} ${tour.price}` }
                        </option>
                    ))}
                  </select>
                  {selectedTour && (
                    <TourCard
                      {...(tours.find(
                        (tour) => tour.title === selectedTour.title
                      ) as any)}
                    />
                  )}
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                <div className="relative rounded-lg bg-white lg:p-8 shadow-lg sm:p-12">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6">
                      <input
                        type="file"
                        placeholder="Файл должен быть в формате pdf, doc или docx"
                        {...register("file", { required: true })}
                        accept=".doc,.docx,.pdf"
                        className="text-body-color border-[#112B3C] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                      />
                      {errors.file && (
                        <div className="bg-red text-red-700" role="alert">
                          {errors.file?.type === "required" &&
                            `Пожалуйста, загрузите свою заполненую анкету`}
                        </div>
                      )}
                    </div>
                    <div className="mb-6">
                      <input
                        type="text"
                        defaultValue=""
                        {...register("name", { required: true, maxLength: 25 })}
                        placeholder="Ваше Имя"
                        className="text-body-color border-[#112B3C] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                      />
                      {!!errors.name && (
                        <div className="bg-red text-red-700" role="alert">
                          {errors.name?.type === "required" &&
                            `Ваше имя необходимо`}
                          {errors.name?.type === "maxLength" &&
                            `Имя не должно превышать 25 символов`}
                        </div>
                      )}
                    </div>
                    <div className="mb-6">
                      <input
                        type="email"
                        defaultValue=""
                        {...register("email", { required: true })}
                        placeholder="Ваш email"
                        className="text-body-color border-[#112B3C] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                      />
                      {errors.email?.type === "required" && (
                        <div className="bg-red text-red-700" role="alert">
                          Ваш email необходим
                        </div>
                      )}
                    </div>
                    <div className="mb-6">
                      <input
                        type="text"
                        defaultValue=""
                        {...register("phone_number", { required: true })}
                        placeholder="Ваш номер телефона"
                        className="text-body-color border-[#112B3C] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                      />
                      {errors.phone_number?.type === "required" && (
                        <div className="bg-red text-red-700" role="alert">
                          Номер телефона необходим
                        </div>
                      )}
                    </div>

                    <div className="mb-6">
                      <input
                        {...register("date", { required: true })}
                        type="date"
                        className="text-body-color border-[#112B3C] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                        placeholder="Select date"
                      />
                      {errors.phone_number?.type === "required" && (
                        <div className="bg-red text-red-700" role="alert">
                          Дата желаемой брони необходима
                        </div>
                      )}
                    </div>

                    <div className="mb-6">
                      <textarea
                        rows={3}
                        defaultValue=""
                        {...register("message")}
                        placeholder="Ваш комментарий к брони"
                        className="text-body-color border-[#112B3C] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="text-base bg-yellow border-yellow w-full rounded border p-3 text-white transition hover:bg-opacity-90"
                      >
                        Отправить
                      </button>
                    </div>
                  </form>
                  {svgs()}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
