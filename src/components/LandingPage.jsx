import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="text-structure mt-[120px] px-16">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker font-[FoundersGrotesk]">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <div className="mr-[1vw] w-[10vw] rounded-md h-[6.3vw] -top-[.3vw] relative bg-red-700"></div>
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
          <div className="text-md font-light px-5 uppercase py-1 text-nowrap border-[1px] rounded-full">
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
