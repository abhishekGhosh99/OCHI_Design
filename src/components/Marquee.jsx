import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Marquee = () => {
  const [isSmallerScreen, setIsSmallerScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallerScreen(window.innerWidth < 640);
    };
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed={isSmallerScreen ? ".7" : ".1"}
      className="w-full py-16 lg:py-28 rounded-tl-2xl rounded-tr-2xl bg-[#014D42]"
    >
      <div className="border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
        {["We are Ochi", "We are Ochi"].map((item, index) => {
          return (
            <motion.h1
              initial={{ x: "0" }}
              animate={{ x: "-100%" }}
              transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
              key={index}
              className="text-[32vw] lg:text-[25vw] uppercase leading-none font-[FoundersGrotesk] -mt-2 lg:-mt-7 pr-10 lg:pr-20"
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
