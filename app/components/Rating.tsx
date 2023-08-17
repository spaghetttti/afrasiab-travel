import Image from "next/image";
import Star from "public/star.svg";

export default function Rating(rating: any) {
  const stars = [];

  for (let i = 0; i < rating.rating; i++) {
    stars.push(<Image key={i} src={Star} alt="" />);
  }

  return <div className="flex">{stars}</div>;
}