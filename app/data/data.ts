import Image1 from "public/mausoleum.jpg";
import Image2 from "public/samarkand.jpg";
import Image3 from "public/bukhara-sky.jpg";
import Image4 from "public/chimgan.jpg";
import Image5 from "public/bazaar.jpg";
import Bukhara from "public/bukhara.jpg";
import Tashkent from "public/tashkent.jpg";
import Hiva from "public/mosque.jpg";
import Samarkand from "public/samarkand-big.jpg";
import Avatar1 from "public/avatar1.jpg";
import Avatar2 from "public/avatar2.jpg";

export const CarouselItems = [
  {
    id: 1,
    title: "Великий Шелковый путь",
    locations: "Самарканд - Бухара - Гиждуван - Самарканд",
    price: "$ 500",
    duration: "7 дней / 6 ночей",
    image: Image1,
    imageStyle: "w-full h-[25vh] bg-[url('../public/mausoleum.jpg')] bg-cover bg-center flex justify-center items-center"
  },
  {
    id: 2,
    title: "Комбинированный тур",
    locations: "Ургенч - Хива - Бухара - Кызыл Кум- Самарканд",
    price: "$ 500",
    duration: "7 дней / 6 ночей",
    image: Image2,
    imageStyle: "w-full h-[25vh] bg-[url('../public/samarkand.jpg')] bg-cover bg-center flex justify-center items-center"
  },
  {
    id: 3,
    title: "Тени древнего Хорезма",
    locations: "Ургенч - Хива - Кызыл Кум - Топрак",
    price: "$ 500",
    duration: "5 дней / 4 ночей",
    image: Image3,
    imageStyle: "w-full h-[25vh] bg-[url('../public/bukhara-sky.jpg')] bg-cover bg-center flex justify-center items-center"
  },
  {
    id: 4,
    title: "По долинам по взгорьям",
    locations: "Самарканд - Гиждуван - Бухара",
    price: "$ 500",
    duration: "8 дней / 7 ночей",
    image: Image4,
    imageStyle: "w-full h-[25vh] bg-[url('../public/chimgan.jpg')] bg-cover bg-center flex justify-center items-center"
  },
  {
    id: 5,
    title: "Память веков",
    locations: "Ташкент - Самарканд - Шахрисабз - Хива - Ургенч",
    price: "$ 500",
    duration: "8 дней / 7 ночей",
    image: Image5,
    imageStyle: "w-full h-[25vh] bg-[url('../public/bazaar.jpg')] bg-cover bg-center flex justify-center items-center"
  },
];

export const Cities = [
  { id: 1, image: Hiva, title: "Хива" },
  { id: 2, image: Tashkent, title: "Ташкент" },
  { id: 3, image: Samarkand, title: "Самарканд" },
  { id: 4, image: Bukhara, title: "Бухара" },
  // { id: 5, image: Image3, title: "Хорезм" },
];

export const Reviews = [
  {
    id: 1,
    avatar: Avatar1,
    client_name: "Азиз",
    tour_name: "Память веков",
    rating: 5,
    review: "Я очень рекомендую этот тур - хорошо спланированный маршрут и захватывающие дух места. Знающий и дружелюбный гид предоставил интересную информацию об истории и культуре. Чистые и уютные номера и вкусная еда.",
  },
  {
    id: 2,
    avatar: Avatar2,
    client_name: "Света",
    tour_name: "По долинам по взгорьям",
    rating: 5,
    review: "Этот тур великолепен, с хорошо спланированным маршрутом, который приведет вас к захватывающим дух местам. Ваш знающий и дружелюбный гид предоставит интересные сведения об истории и культуре региона",
  },
  {
    id: 3,
    avatar: Avatar1,
    client_name: "Азиз",
    tour_name: "Память веков",
    rating: 5,
    review: "Я очень рекомендую этот тур - хорошо спланированный маршрут и захватывающие дух места. Знающий и дружелюбный гид предоставил интересную информацию об истории и культуре. Чистые и уютные номера и вкусная еда.",
  },
  {
    id: 4,
    avatar: Avatar2,
    client_name: "Света",
    tour_name: "По долинам по взгорьям",
    rating: 5,
    review: "Этот тур великолепен, с хорошо спланированным маршрутом, который приведет вас к захватывающим дух местам. Ваш знающий и дружелюбный гид предоставит интересные сведения об истории и культуре региона",
  },
];
