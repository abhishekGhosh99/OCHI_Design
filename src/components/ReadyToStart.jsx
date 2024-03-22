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
    <div className="relative w-full font-[FoundersGrotesk] bg-[#CDEB69] py-32">
      <div className="div-text">
        <div className="ready-div uppercase text-[17vw] text-zinc-800 leading-[13vw] text-center">
          <h1>ready</h1>
        </div>
        <div className="to-start-div uppercase text-[17vw] text-zinc-800 leading-[13vw] text-center">
          <h1>to start</h1>
        </div>
        <div className="the-project-div uppercase text-[17vw] text-zinc-800 leading-[13vw] text-center">
          <h1>
            the project <span>?</span>
          </h1>
        </div>
      </div>
      <div className="w-full pb-10">
        <div className="flex flex-row justify-between items-center absolute w-[35%]  top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <div className="flex justify-center items-center w-[16vw] h-[16vw] rounded-full bg-zinc-100">
            <div className="w-2/3 h-2/3 relative rounded-full bg-[#212121]">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-8 p-1 rotate-90"
              >
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-[16vw] h-[16vw] rounded-full bg-zinc-100">
            <div className="w-2/3 h-2/3 relative rounded-full bg-[#212121]">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-8 p-1 rotate-90"
              >
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons relative mt-[10vw]">
        <div className=" flex flex-col absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-center font-[NeueMontreal] gap-2">
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
