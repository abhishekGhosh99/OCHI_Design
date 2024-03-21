import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div className="w-full py-10 rounded-tl-2xl rounded-tr-2xl bg-[#014D42]">
      <div className="border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap gap-[50px] overflow-hidden">
        {["We are Ochi", "We are Ochi", "We are Ochi"].map((item, index) => {
          return (
            <motion.h1
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
              key={index}
              className="text-[24vw] uppercase leading-none font-[FoundersGrotesk] -mt-7"
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
