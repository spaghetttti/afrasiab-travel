import Image from "next/image";
import Quote from "public/quote.svg";
import Rating from "./Rating";

interface ReviewProps {
  avatar: any;
  client_name: string;
  tour_name: string;
  rating: number;
  review: string;
}

export default function Review({
  avatar,
  client_name,
  tour_name,
  rating,
  review,
}: ReviewProps) {
  return (
    <>
      <div className="static mb-8 flex flex-col items-center p-5">
        <Image
          src={Quote}
          alt=""
          className="self-end absolute top-[0px] right-10"
        />
        <Image
          src={avatar}
          alt=""
          className="border-0 rounded-full w-[100px]"
        />
        <h6 className="font-bold">{client_name}</h6>
        <div>{tour_name}</div>
        <div>
          <Rating rating={rating} />
        </div>
        <p className="text-sm">{review}</p>
      </div>
    </>
  );
}
