import React, { useEffect, useState } from "react";

const Playful = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      // console.log(mouseX, mouseY);

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      // console.log(deltaX, deltaY);

      let angle = Math.atan2(deltaY, deltaX);
      // console.log(angle);

      let degrees = angle * (180 / Math.PI);
      setRotate(degrees - 180);
      // console.log(degrees);
    });
  }, []);

  return (
    <div className="playful w-full h-[80vh] lg:h-screen overflow-hidden cursor-pointer">
      <div
        data-scroll
        data-scroll-speed="-.5"
        className="relative w-full h-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] bg-auto bg-no-repeat lg:bg-cover bg-center"
      >
        <div className="flex flex-row justify-between items-center absolute w-[80%] lg:w-[35%]  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="flex justify-center items-center w-[33vw] h-[33vw] lg:w-[16vw] lg:h-[16vw] rounded-full bg-zinc-100">
            <div className="w-[22vw] h-[22vw] lg:w-2/3 lg:h-2/3 relative rounded-full bg-[#212121]">
              <h1 className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] uppercase">
                play
              </h1>
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-8 p-1 rotate-90"
              >
                <div className="w-4 h-4 lg:w-6 lg:h-6 bg-white rounded-full flex items-center justify-center"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-[33vw] h-[33vw] lg:w-[16vw] lg:h-[16vw] rounded-full bg-zinc-100">
            <div className="w-[22vw] h-[22vw] lg:w-2/3 lg:h-2/3 relative rounded-full bg-[#212121]">
              <h1 className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] uppercase">
                play
              </h1>
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
    </div>
  );
};

export default Playful;
