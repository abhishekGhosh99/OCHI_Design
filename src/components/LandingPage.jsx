import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
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
      data-scroll-speed="-.8"
      className="w-full bg-zinc-900 pt-3 pb-10 lg:pt-1 lg:pb-24"
    >
      <div className="text-structure mt-[120px] px-5 lg:px-16">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker font-[FoundersGrotesk]" key={index}>
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: isSmallerScreen ? "15vw" : "10vw",
                      marginRight: "1vw",
                    }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className={`w-[${isSmallerScreen ? 15 : 10}vw] h-[${
                      isSmallerScreen ? 10 : 6.3
                    }vw] -top-[.1vw] lg:w-[10vw] rounded-md lg:h-[6.3vw] lg:-top-[.3vw] relative bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] bg-cover`}
                  ></motion.div>
                )}
                <h1 className="text-[60px] md:text-[80px] lg:text-[120px] uppercase leading-[12vw] sm:leading-[8vw] md:leading-[8vw] lg:leading-[8vw] tracking-wide">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-2 border-zinc-600 mt-32 lg:mt-20 px-5 lg:px-10 py-9 lg:py-2 flex flex-col lg:flex-row gap-5 lg:gap-0 justify-start items-start lg:justify-between lg:items-center">
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
        <div className="startTheProject flex items-start lg:items-center gap-2">
          <div className="text-[15px] font-light px-5 uppercase py-1 text-nowrap border-[1px] rounded-full">
            Start The Project
          </div>
          <div className="w-8 lg:w-9 h-8 lg:h-9 rounded-full border-[1px] flex items-center justify-center">
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
