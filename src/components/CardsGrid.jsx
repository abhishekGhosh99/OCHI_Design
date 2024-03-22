import React from "react";

const CardsGrid = () => {
  return (
    <div className="w-full h-screen font-[NeueMontreal] bg-zinc-100">
      <div className="w-full flex px-10 py-20 gap-5">
        <div className="relative left w-[48vw] bg-[#004C42] rounded-2xl py-[15vw]">
          <div className="card_container">
            <img
              className="absolute w-[12vw] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt=""
            />
            <p className="absolute left-[13%] bottom-[5%] translate-x-[-50%] translate-y-[-50%] border-[1px] px-3 py-1 rounded-3xl text-sm text-[#CDEA68]">
              ©2019-2022
            </p>
          </div>
        </div>

        <div className="right w-[48vw] gap-5 flex">
          <div className="right_left relative w-1/2 bg-[#212121] rounded-2xl">
            <img
              className="absolute w-[11vw] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt=""
            />
            <h1 className="absolute bottom-[1vw] mx-7 mb-4 border-[1px] border-zinc-200 rounded-2xl px-3 py-1 text-[1vw] text-zinc-200">
              RATING 5.0 ON CLUTCH
            </h1>
          </div>
          <div className="right_right relative w-1/2 bg-[#212121] rounded-2xl">
            <img
              className="absolute w-[9vw] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt=""
            />
            <h1 className="absolute bottom-[1vw] mx-7 mb-4 border-[1px] border-zinc-200 rounded-2xl px-3 py-1 text-[1vw] text-zinc-200">
              BUSINESS BOOTCAMP ALUMINI
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsGrid;
