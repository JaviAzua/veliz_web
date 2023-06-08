"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ["latin"],
});

type Props = {};

function Logistics({}: Props) {
  return (
    <div className="p-10 flex gap-6 justify-center item-center flex-wrap md:flex-nowrap">
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
        className="text-white text-right md:flex-1 flex flex-col justify-around"
      >
        <p className="text-4xl font-bold">Servicio personalizado y logística</p>
        <p className={dancing.className}>
          <span className="text-2xl font-semibold">
            Entrega de pedidos en corto plazo.
          </span>
        </p>
        <p className={dancing.className}>
          <span className="text-2xl font-semibold">Sin cargo adicional.</span>
        </p>
        <p className={dancing.className}>
          <span className="text-2xl font-semibold">
            Sin monto mínimo de compra.
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
        <Image src={"/img/logistic.jpg"} alt="" fill className="object-cover" />
      </motion.div>
    </div>
  );
}

export default Logistics;
