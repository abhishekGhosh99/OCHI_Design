import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const Cards = () => {
  const animateCards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const handleHoverStart = (index) => {
    animateCards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    animateCards[index].start({ y: "100%" });
  };

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.1"
      className="w-full bg-zinc-100 py-28 font-[NeueMontreal] border-b-[1px] border-zinc-500"
    >
      <div className="w-full px-10 py-10 border-b-[1px] border-zinc-500">
        <h1 className="text-[4vw] text-zinc-800">Featured Projects</h1>
      </div>

      <div className="cards w-full flex px-8 flex-wrap overflow-hidden ">
        <div className="card-container relative w-1/2 h-[80vh] px-6 pb-20 mb-16 ">
          <div className="card-text w-full flex items-center justify-start text-zinc-800 gap-3 font-medium  py-6 px-3">
            <div className="w-[10px] h-[10px] rounded-full bg-black"></div>
            <h1>FYDE</h1>
          </div>
          <motion.div
            onHoverStart={() => handleHoverStart(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="card w-full h-full rounded-2xl overflow-hidden"
          >
            <h1 className="absolute flex overflow-hidden text-[#CCEB68] text-[12vw] font-[FoundersGrotesk] tracking-normal font-extrabold left-full -translate-x-[9vw] top-1/2 -translate-y-[8vw] z-10">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={animateCards[0]}
                  transition={{ ease: [], delay: index * 0.03 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <img
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
              alt=""
            />
          </motion.div>
          <div className="card-buttons text-zinc-800 flex py-4 gap-2">
            <li className="list-none px-3 py-1 border-[1.4px] border-zinc-600 rounded-3xl text-[14px] font-[500]">
              AUDIT
            </li>
            <li className="list-none px-3 py-1 border-[1.4px] border-zinc-600 rounded-3xl text-[14px] font-[500]">
              COPYWRITING
            </li>
            <li className="list-none px-3 py-1 border-[1.4px] border-zinc-600 rounded-3xl text-[14px] font-[500]">
              SALES DECK
            </li>
            <li className="list-none px-3 py-1 border-[1.4px] border-zinc-600 rounded-3xl text-[14px] font-[500]">
              SLIDES DESIGN
            </li>
          </div>
        </div>

        <div className="card-container relative w-1/2 h-[80vh] px-6 pb-20 mb-16">
          <div className="card-text w-full flex text-zinc-800 font-medium py-6 px-3 items-center justify-start gap-3">
            <div className="w-[10px] h-[10px] rounded-full bg-black"></div>
            <h1>VISE</h1>
          </div>
          <motion.div
            onHoverStart={() => handleHoverStart(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="card w-full h-full rounded-2xl overflow-hidden"
          >
            <h1 className="absolute flex overflow-hidden text-[#CCEB68] text-[12vw] font-[FoundersGrotesk] tracking-normal font-extrabold right-full translate-x-[7vw] top-1/2 -translate-y-[8vw] z-10">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={animateCards[1]}
                  transition={{ ease: [], delay: index * 0.03 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <img
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
              alt=""
            />
          </motion.div>
          <div className="card-buttons text-zinc-800 flex py-4 gap-2">
            <li className="list-none px-3 py-1 border-[1.4px] border-zinc-600 rounded-3xl text-[14px] font-[500]">
              AGENCY
            </li>
            <li className="list-none px-3 py-1 border-[1.4px] border-zinc-600 rounded-3xl text-[14px] font-[500]">
              COMPANY PRESENTATIONS
            </li>
          </div>
        </div>

        <div className="card-container relative w-1/2 h-[80vh] px-6 pb-20 mb-16">
          <div className="card-text w-full flex text-zinc-800 font-medium py-6 px-3 items-center justify-start gap-3">
            <div className="w-[10px] h-[10px] rounded-full bg-black"></div>
            <h1>TRAWA</h1>
          </div>
          <motion.div
            onHoverStart={() => handleHoverStart(2)}
            onHoverEnd={() => handleHoverEnd(2)}
            className="card w-full h-full rounded-2xl overflow-hidden"
          >
            <h1 className="absolute flex overflow-hidden text-[#CCEB68] text-[12vw] font-[FoundersGrotesk] tracking-normal font-extrabold left-full -translate-x-[12.5vw] top-1/2 -translate-y-[8vw] z-10">
              {"TRAWA".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={animateCards[2]}
                  transition={{ ease: [], delay: index * 0.03 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <img
              src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg"
              alt=""
            />
          </motion.div>
          <div className="card-buttons text-zinc-800 flex py-4 gap-2">
            <li className="list-none px-3 py-1 border-[1.4px] border-zinc-600 rounded-3xl text-[14px] font-[500]">
              BRAND IDENTITY
            </li>
            <li className="list-none px-3 py-1 border-[1.4px] border-zinc-600 rounded-3xl text-[14px] font-[500]">
              DESIGN RESEARCH
            </li>
            <li className="list-none px-3 py-1 border-[1.4px] border-zinc-600 rounded-3xl text-[14px] font-[500]">
              INVESTOR DECK
            </li>
          </div>
        </div>

        <div className="card-container relative w-1/2 h-[80vh] px-6 pb-20 mb-16">
          <div className="card-text w-full flex text-zinc-800 font-medium py-6 px-3 items-center justify-start gap-3">
            <div className="w-[10px] h-[10px] rounded-full bg-black"></div>
            <h1>PREMIUM BLEND</h1>
          </div>
          <motion.div
            onHoverStart={() => handleHoverStart(3)}
            onHoverEnd={() => handleHoverEnd(3)}
            className="card w-full h-full rounded-2xl overflow-hidden"
          >
            <h1 className="absolute flex overflow-hidden text-[#CCEB68] text-[12vw] font-[FoundersGrotesk] tracking-normal text-nowrap font-extrabold right-full translate-x-[28vw] top-1/2 -translate-y-[8vw] z-10">
              {"PREMIUM BLEND".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={animateCards[3]}
                  transition={{ ease: [], delay: index * 0.03 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <img
              src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png"
              alt=""
            />
          </motion.div>
          <div className="card-buttons text-zinc-800 flex py-4 gap-2">
            <li className="list-none px-3 py-1 border-[1.4px] border-zinc-600 rounded-3xl text-[14px] font-[500]">
              BRANDED TEMPLATE
            </li>
          </div>
        </div>
      </div>
      <div className="w-full relative my-24">
        <div className="approach_right-button absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#212020] text-zinc-100 w-[20%] px-3 py-[10px] my-3 rounded-full flex flex-row justify-between">
          <h1 className="flex justify-center items-center px-2 uppercase text-sm">
            view all case studies
          </h1>
          <span className="rotate-45 bg-white text-black p-[10px] rounded-full">
            <FaArrowUpLong />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
