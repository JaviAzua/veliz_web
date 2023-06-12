"use client";
import { motion } from "framer-motion";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";

type Props = {};

const dancing = Dancing_Script({
  subsets: ["latin"],
});

function Postvent({}: Props) {
  return (
    <div className="p-10 bg-gray-100 rounded-lg flex flex-col gap-6 justify-center item-center">
      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        viewport={{ once: true }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        className="text-black text-center md:flex-1"
      >
        <p className="text-4xl font-bold">Servicio PostVenta</p>
        <p className={dancing.className}>
          <span className="text-2xl font-semibold">
            Visitas, auditorias, reportes, rótulos y cartelería señalética
          </span>
        </p>
      </motion.div>
      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        viewport={{ once: true }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        className="relative md:flex-1 min-h-[30vh] min-w-[80%] md:min-w-fit"
      >
        <Image
          src={"/img/postventa.jpg"}
          alt=""
          fill
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}

export default Postvent;
