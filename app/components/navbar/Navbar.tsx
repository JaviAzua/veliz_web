"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GrFacebook, GrInstagram } from "react-icons/gr";

type Props = {};

function Navbar({}: Props) {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-around p-2 bg-white min-w-full">
      <section>
        <Image
          src={"/logoPNG.png"}
          width={65}
          height={100}
          className=""
          alt="Veliz - Articulos de limpieza Logo"
        />
      </section>
      <section>
        <ul className="flex gap-10">
          <li className="menu_item">
            <GrInstagram size={28} />
          </li>
          <li className="menu_item">
            <GrFacebook size={28} />
          </li>
        </ul>
      </section>
    </header>
  );
}

export default Navbar;
