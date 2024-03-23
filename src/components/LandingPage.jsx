import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.8"
      className="w-full bg-zinc-900 pt-1 pb-24"
    >
      <div className="text-structure mt-[120px] px-16">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker font-[FoundersGrotesk]">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "10vw", marginRight: "1vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[10vw] rounded-md h-[6.3vw] -top-[.3vw] relative bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] bg-cover"
                  ></motion.div>
                )}
                <h1
                  key={index}
                  className="text-[120px] uppercase leading-[8vw] tracking-wide"
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-2 border-zinc-600 mt-20 px-10 py-2 flex justify-between items-center">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none w-full"
          >
            {item}
          </p>
        ))}
        <div className="startTheProject flex items-center gap-2">
          <div className="text-[15px] font-light px-5 uppercase py-1 text-nowrap border-[1px] rounded-full">
            Start The Project
          </div>
          <div className="w-9 h-9 rounded-full border-[1px] flex items-center justify-center">
            <span className="rotate-45">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
