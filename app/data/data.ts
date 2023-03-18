import Image from "next/image";
import Image1 from "public/C1.png";
import Image2 from "public/C2.png";
import Image3 from "public/C3.png";
import Image4 from "public/C4.png";
import Image5 from "public/C5.png";


export const CarouselItems = [
    {
      title: 'Великий Шелковый путь',
      locations: 'Самарканд - Бухара - Гиждуван - Самарканд',
      price: '500',
      duration: '7 дней / 6 ночей',
      image: Image1
    },
    {
      title: 'Комбинированный тур',
      locations: 'Ургенч - Хива - Бухара - Кызыл Кум- Самарканд',
      price: '500',
      duration: '7 дней / 6 ночей',
      image: Image2
    },
    {
      title: 'Тени древнего Хорезма',
      locations: 'Ургенч - Хива - Кызыл Кум - Топрак',
      price: '500',
      duration: '5 дней / 4 ночей',
      image: Image3
    },
    {
      title: 'По долинам по взгорьям',
      locations: 'Самарканд - Гиждуван - Бухара',
      price: '500',
      duration: '8 дней / 7 ночей',
      image: Image4
    },
    {
      title: 'Память веков',
      locations: 'Ташкент - Самарканд - Шахрисабз - Хива - Ургенч',
      price: '$500',
      duration: '8 дней / 7 ночей',
      image: Image5
    },
  ]