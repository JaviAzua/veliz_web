"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import { Dancing_Script } from "next/font/google";

type Props = {};

const dancing = Dancing_Script({
  subsets: ["latin"],
});

function HeroBanner({}: Props) {
  return (
    <div className="h-[90vh] lg:h-[80vh] relative flex justify-center items-center border-b-8 border-gray-400/20 ">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 bg z-20" />
      <Image
        src={"/img/bannerHero.jpg"}
        className="object-cover z-10"
        alt="VELIZ web"
        fill
      />

      <div className="z-40 absolute flex flex-col justify-center items-center">
        <motion.div
          initial={{
            x: -2000,
          }}
          animate={{
            x: 0,
          }}
          transition={{
            duration: 2.5,
          }}
        >
          <Image src={"/logo.svg"} alt="VELIZ logo" width={280} height={50} />
        </motion.div>
        <div className={dancing.className}>
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 2.5,
            }}
            className={`text-center max-w-[90%] mx-auto text-white font-bold text-3xl`}
          >
            Desde 1976 en Bariloche, brindando soluciones de higiene y limpieza
            para hotelería, gastronomía y hogares.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
