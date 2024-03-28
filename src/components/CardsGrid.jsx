import React from "react";

const CardsGrid = () => {
  return (
    <div className="w-full lg:h-screen font-[NeueMontreal] bg-zinc-100 pb-[18vh]">
      <div className="w-full flex flex-col lg:flex-row px-5 lg:px-10 py-20 gap-5">
        <div className="relative left w-full h-[45vh] lg:w-[48vw] bg-[#004C42] rounded-2xl py-[15vw]">
          <img
            className="absolute w-[40vw] lg:w-[12vw] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <p className="absolute left-[20vw] lg:left-[13%] bottom-[0] lg:bottom-[5%] translate-x-[-50%] translate-y-[-50%] border-[1px] px-3 py-1 rounded-2xl text-sm text-[#CDEA68]">
            ©2019-2022
          </p>
        </div>

        <div className="right lg:w-[48vw] gap-5 flex flex-col lg:flex-row">
          <div className="right_left relative w-full h-[45vh] lg:w-1/2 bg-[#212121] rounded-2xl">
            <img
              className="absolute w-[40vw] lg:w-[11vw] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt=""
            />
            <p className="absolute bottom-0 lg:bottom-[1vw] mx-7 mb-4 border-[1px] border-zinc-200 rounded-2xl px-3 py-1 text-sm lg:text-[1vw] text-zinc-200">
              RATING 5.0 ON CLUTCH
            </p>
          </div>
          <div className="right_right relative w-full h-[45vh] lg:w-1/2 bg-[#212121] rounded-2xl">
            <img
              className="absolute w-[30vw] lg:w-[9vw] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt=""
            />
            <h1 className="absolute bottom-[1vw] mx-7 mb-4 border-[1px] border-zinc-200 rounded-2xl px-3 py-1 text-sm lg:text-[1vw] text-zinc-200">
              BUSINESS BOOTCAMP ALUMINI
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsGrid;
