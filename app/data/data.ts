import Image1 from 'public/mausoleum.jpg';
import Image2 from 'public/samarkand.jpg';
import Image3 from 'public/bukhara-sky.jpg';
import Image4 from 'public/chimgan.jpg';
import Image5 from 'public/bazaar.jpg';
import Bukhara from "public/bukhara.jpg";
import Tashkent from "public/tashkent.jpg";
import Hiva from "public/mosque.jpg";
import Samarkand from "public/samarkand-big.jpg";


export const CarouselItems = [
  {
    id: 1,
    title: "Великий Шелковый путь",
    locations: "Самарканд - Бухара - Гиждуван - Самарканд",
    price: "500",
    duration: "7 дней / 6 ночей",
    image: Image1,
  },
  {
    id: 2,
    title: "Комбинированный тур",
    locations: "Ургенч - Хива - Бухара - Кызыл Кум- Самарканд",
    price: "500",
    duration: "7 дней / 6 ночей",
    image: Image2,
  },
  {
    id: 3,
    title: "Тени древнего Хорезма",
    locations: "Ургенч - Хива - Кызыл Кум - Топрак",
    price: "500",
    duration: "5 дней / 4 ночей",
    image: Image3,
  },
  {
    id: 4,
    title: "По долинам по взгорьям",
    locations: "Самарканд - Гиждуван - Бухара",
    price: "500",
    duration: "8 дней / 7 ночей",
    image: Image4,
  },
  {
    id: 5,
    title: "Память веков",
    locations: "Ташкент - Самарканд - Шахрисабз - Хива - Ургенч",
    price: "$500",
    duration: "8 дней / 7 ночей",
    image: Image5,
  },
];

export const Cities = [
  { id: 1, image: Hiva, title: "Хива" },
  { id: 2, image: Tashkent, title: "Ташкент" },
  { id: 3, image: Samarkand, title: "Самарканд" },
  { id: 4, image: Bukhara, title: "Бухара" },
  { id: 5, image: Image3, title: "Хорезм" },

];
