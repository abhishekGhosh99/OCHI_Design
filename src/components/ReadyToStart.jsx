import React, { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const ReadyToStart = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX);

      let degrees = angle * (180 / Math.PI);
      setRotate(degrees - 180);
      // console.log(degrees);
    });
  }, []);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.2"
      className="w-full relative font-[FoundersGrotesk] bg-[#CDEB69] py-10 lg:py-32 lg:rounded-tl-2xl lg:rounded-tr-2xl"
    >
      <div className="div-text w-full pt-5 pb-2">
        <div className="ready-div uppercase text-[20vw] lg:text-[17vw] text-zinc-800 leading-[15vw] lg:leading-[13vw] text-center">
          <h1>ready</h1>
        </div>
        <div className="to-start-div uppercase text-[20vw] lg:text-[17vw] text-zinc-800 leading-[15vw] lg:leading-[13vw] text-center">
          <h1>to start</h1>
        </div>
        <div className="the-project-div uppercase text-[20vw] lg:text-[17vw] text-zinc-800 leading-[15vw] lg:leading-[13vw] text-center">
          <h1>
            the project <span>?</span>
          </h1>
        </div>
      </div>
      <div className="playful w-full lg:pb-10 flex justify-center items-center">
        <div className="flex py-6 flex-row justify-between items-center lg:absolute w-[80%] lg:w-[35%] lg:top-1/2 lg:left-1/2 lg:translate-x-[-50%] lg:translate-y-[-50%]">
          <div className="flex justify-center items-center w-[33vw] h-[33vw] lg:w-[16vw] lg:h-[16vw] rounded-full bg-zinc-100">
            <div className="w-[22vw] h-[22vw] lg:w-2/3 lg:h-2/3 relative rounded-full bg-[#212121]">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-8 p-1 rotate-90"
              >
                <div className="w-5 h-5 lg:w-6 lg:h-6 bg-white rounded-full flex items-center justify-center"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-[33vw] h-[33vw] lg:w-[16vw] lg:h-[16vw] rounded-full bg-zinc-100">
            <div className="w-[22vw] h-[22vw] lg:w-2/3 lg:h-2/3 relative rounded-full bg-[#212121]">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-8 p-1 rotate-90"
              >
                <div className="w-4 h-4 lg:w-6 lg:h-6 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons lg:relative w-full lg:mt-[10vw] lg:py-0 flex justify-center items-center">
        <div className=" flex flex-col lg:absolute lg:left-[50%] lg:top-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] text-center font-[NeueMontreal] gap-2">
          <div className="approach_right-button bg-[#212020] text-zinc-100 w-full px-3 py-[10px] my-3 rounded-full flex flex-row justify-between">
            <h1 className="flex justify-center items-center px-2 uppercase text-sm">
              Start the project
            </h1>
            <span className="rotate-45 bg-white text-black p-[10px] rounded-full">
              <FaArrowUpLong />
            </span>
          </div>

          <p className="text-zinc-800 uppercase">or</p>

          <div className="approach_right-button bg-transparent text-zinc-900 border-[1px] border-zinc-900 w-full px-4 py-[8px] my-3 gap-4 rounded-full flex flex-row justify-between">
            <h1 className="flex justify-center items-center px-2 uppercase text-sm font-medium">
              hello@ochi.design
            </h1>
            <span className="rotate-45 bg-white text-black p-[10px] rounded-full">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToStart;
