import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-28 rounded-tl-2xl rounded-tr-2xl bg-[#014D42]"
    >
      <div className="border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
        {["We are Ochi", "We are Ochi"].map((item, index) => {
          return (
            <motion.h1
              initial={{ x: "0" }}
              animate={{ x: "-100%" }}
              transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
              key={index}
              className="text-[25vw] uppercase leading-none font-[FoundersGrotesk] -mt-7 pr-20"
            >
              {item}
            </motion.h1>
          );
        })}
      </div>
    </div>
  );
};

export default Marquee;
