import Image from "next/image";
import Logo from "public/logo.jpg";
import facebookIcon from "public/facebook.svg";
import instagramIcon from "public/instagram.svg";
import youtubeIcon from "public/youtube.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="lg:m-[8%] m-[4%] flex flex-col lg:flex-row ">
      <div className="flex flex-col grow-0 space-y-4">
        <Image src={Logo} className="w-[100px] h-auto" alt="" />
        <div className="text-sm">г. Самарканд, ул. Орзу Махмудова дом 18</div>
        <div className="flex space-x-2">
          <Link href="/">
            <Image src={facebookIcon} alt="" className="w-[30px] h-auto" />
          </Link>
          <Link href="/">
            <Image src={instagramIcon} alt="" className="w-[30px] h-auto" />
          </Link>
          <Link href="/">
            <Image src={youtubeIcon} alt="" className="w-[30px] h-auto" />
          </Link>
        </div>
      </div>
      <div className="grow flex justify-between">
        <div className="flex flex-col">links</div>
        <div className="flex flex-col">news</div>
      </div>
    </div>
  );
}
