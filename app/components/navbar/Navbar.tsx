"use client";

import Image from "next/image";
import { GrFacebook, GrInstagram } from "react-icons/gr";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {};

function Navbar({}: Props) {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-around p-2 bg-white min-w-full">
      <section className="cursor-pointer" onClick={() => router.push("/")}>
        <Image
          src={"/logoM.svg"}
          width={65}
          height={100}
          className=""
          alt="Veliz - Articulos de limpieza Logo"
        />
      </section>
      <section>
        <ul className="flex gap-10">
          <Link href={"https://www.instagram.com/veliz.1976/"} target="_blank">
            <li className="menu_item">
              <GrInstagram size={34} />
            </li>
          </Link>
          <Link
            href={"https://www.facebook.com/DistribuidoraVeliz1976/"}
            target="_blank"
          >
            <li className="menu_item">
              <GrFacebook size={34} />
            </li>
          </Link>
        </ul>
      </section>
    </header>
  );
}

export default Navbar;
