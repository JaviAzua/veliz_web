import Image from "next/image";
import Link from "next/link";
import { RiMapPin2Fill } from "react-icons/ri";
import { AiOutlineMail, AiTwotonePhone } from "react-icons/ai";
import { GrFacebook, GrInstagram } from "react-icons/gr";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="py-6 bg-white flex justify-center items-center">
      <section className="flex flex-col items-center">
        <Image
          src={"/logoM.svg"}
          width={65}
          height={100}
          className="py-5 opacity-80"
          alt="Veliz - Articulos de limpieza Logo"
        />
        <div className="flex flex-col gap-2">
          <Link
            href={
              "https://www.google.com/maps/place/Edgardo+H.+V%C3%A9liz/@-41.1390447,-71.28058,17z/data=!3m1!4b1!4m6!3m5!1s0x961a7c9faa2716b1:0xf9c4d5c950236774!8m2!3d-41.1390447!4d-71.28058!16s%2Fg%2F1tq6l84j?entry=ttu"
            }
            target="_blank"
          >
            <div className="flex item-center gap-2 hover:underline cursor-pointer">
              <RiMapPin2Fill className=" text-red-600" />
              <p className="text-sm font-semibold">
                Bailey Willis 325, San Carlos de Bariloche, Río Negro
              </p>
            </div>
          </Link>
          <div className="flex item-center gap-2 ">
            <AiTwotonePhone className=" text-darkBlue" />
            <p className="text-sm font-semibold">+549-294-4425280</p>
          </div>
          <div className="flex item-center gap-2 ">
            <AiOutlineMail className=" text-darkBlue" />
            <p className="text-sm font-semibold">
              edgardoveliz@distribuidoraveliz.com.ar
            </p>
          </div>
          <Link
            href={"https://www.facebook.com/DistribuidoraVeliz1976/"}
            target="_blank"
          >
            <div className="flex item-center gap-2">
              <GrFacebook className=" text-darkBlue" />
              <p className="text-sm font-semibold">@DistribuidoraVeliz1976</p>
            </div>
          </Link>
          <Link href={"https://www.instagram.com/veliz.1976/"} target="_blank">
            <div className="flex item-center gap-2 ">
              <GrInstagram className=" text-darkBlue" />
              <p className="text-sm font-semibold">@veliz.1976</p>
            </div>
          </Link>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
