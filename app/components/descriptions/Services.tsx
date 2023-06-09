"use client";
import { motion } from "framer-motion";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";

type Props = {};

const dancing = Dancing_Script({
  subsets: ["latin"],
});

function Services({}: Props) {
  return (
    <div className="p-10 flex gap-6 justify-center item-center flex-wrap md:flex-nowrap">
      <motion.div
        initial={{
          x: 100,
          opacity: 0,
        }}
        viewport={{ once: true }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        className="relative md:flex-1 min-h-[30vh] min-w-[80%] md:min-w-fit"
      >
        <Image src={"/img/services.jpg"} alt="" fill className="object-cover" />
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
        className="text-white text-left md:flex-1 flex flex-col justify-around"
      >
        <p className="text-4xl font-bold">Ofrecemos</p>
        <p className={dancing.className}>
          <span className="text-2xl font-semibold">Servicios.</span>
        </p>
        <p className={dancing.className}>
          <span className="text-2xl font-semibold">Productos</span>
        </p>
        <p className={dancing.className}>
          <span className="text-2xl font-semibold">Equipamiento</span>
        </p>
        <p className={dancing.className}>
          <span className="text-2xl font-semibold">
            Formación y Capacitación
          </span>
        </p>
        <p className={dancing.className}>
          <span className="text-2xl font-semibold">
            Adaptación de protocolos y programas de higiene y desinfección
          </span>
        </p>
      </motion.div>
    </div>
  );
}

export default Services;
