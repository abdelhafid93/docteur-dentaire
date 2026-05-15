"use client";

import Link from "next/link";
import {
  TbDentalBroken,
  TbEye,
  TbBone,
  TbDroplet,
  TbActivityHeartbeat,
} from "react-icons/tb";
import { GiHeartBeats } from "react-icons/gi";
import { FaAnglesRight } from "react-icons/fa6";
import { motion } from "framer-motion";



// ## function
function ServiceClient({ data }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  const icons = [
    TbDentalBroken,
    GiHeartBeats,
    TbEye,
    TbBone,
    TbDroplet,
    TbActivityHeartbeat,
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.h1
         initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7,delay:0.2 }}
        className="inline-block border border-gray-500 shadow-md px-6 py-2 mb-6 text-2xl font-bold uppercase tracking-widest text-gray-800">
          Services
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7,delay:0.3 }}
        className="text-2xl lg:text-3xl font-medium w-full lg:max-w-2xl mx-auto text-gray-700 leading-tight">
          Sentez-vous comme chez vous avec les meilleurs soins médicaux
        </motion.p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item, index) => {
          const Icon = icons[index % icons.length];

          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7,delay:index*0.2 }}
              key={index}
              className="relative h-[350px] bg-slate-200 p-8 flex flex-col justify-center shadow-md"
            >
              {/* Icon */}
              <span className="absolute top-8 left-5 text-7xl text-[#00D3F2] opacity-40">
                <Icon />
              </span>

              {/* Title */}
              <h2 className="text-xl lg:text-2xl font-bold mb-4 text-gray-900">
                {item?.title}
              </h2>

              {/* Description */}
              <p className="text-sm font-semibold text-gray-800 tracking-wider line-clamp-5">
                {item?.description}
              </p>

              {/* Link */}
              <Link
                href={`/service/${item?.slug}`}
                onClick={scrollToTop}
                className="absolute bottom-10 flex items-center gap-1 text-gray-600 font-bold hover:text-gray-800 transition-colors"
              >
                Lire la suite <FaAnglesRight />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceClient;