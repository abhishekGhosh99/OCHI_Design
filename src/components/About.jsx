import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const About = () => {
  return (
    <div
      data-scroll
      // data-scroll-section
      data-scroll-speed="-.14"
      className="w-full py-16 text-[#202021] bg-[#CCEA69] font-[NeueMontreal] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl"
    >
      <div className="heading py-10 pb-20 border-b-[1px] border-zinc-700 ">
        <h1 className="text-[4vw] px-[60px] leading-[1.2]">
          Ochi is a strategic partner for fast-grow­ing tech businesses that
          need to{" "}
          <span className="underline decoration-[2.5px] underline-offset-[10px]">
            raise funds{" "}
          </span>
          ,{" "}
          <span className="underline decoration-[2.5px] underline-offset-[10px]">
            sell prod­ucts
          </span>
          ,{" "}
          <span className="underline decoration-[2.5px] underline-offset-[10px]">
            ex­plain com­plex ideas
          </span>
          , and{" "}
          <span className="underline decoration-[2.5px] underline-offset-[10px]">
            hire great peo­ple
          </span>
          .
        </h1>
      </div>
      <div className="about_links w-full flex justify-between items-start py-5 px-10 pb-[8vw] border-b-[1px] border-zinc-700">
        <div className="about_links_left w-[50vw] text-[17px]">
          What you can expect:
        </div>
        <div className="about_links_right w-[50vw] flex flex-row">
          <div className="about_links-upper w-[50%] gap-20 text-[17px]">
            <p className="pb-[30px]">
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </p>
            <p>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <div className="about_links-lower w-[50%] relative">
            <div className="about_links-lower_second absolute top-[90px] left-[100px] font-medium leading-normal">
              <ul>
                <li className="pb-[20px]">S:</li>
                <li className="underline  underline-offset-[4px]">Instagram</li>
                <li className="underline  underline-offset-[4px]">Behance</li>
                <li className="underline  underline-offset-[4px]">Facebook</li>
                <li className="underline  underline-offset-[4px]">Linkedin</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="approach w-full flex flex-row justify-between px-14 py-10">
        <div className="approach_right">
          <div className="approach_right-text text-[4vw] font-medium">
            Our approach:
          </div>
          <div className="approach_right-button bg-[#212020] text-zinc-100 w-[55%] px-3 py-[10px] my-3 rounded-full flex flex-row justify-between">
            <h1 className="flex justify-center items-center px-2 uppercase text-sm">
              Read More
            </h1>
            <span className="rotate-45 bg-white text-black p-[10px] rounded-full">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
        <div className="approach_left">
          <img
            className="w-[600px] rounded-2xl"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
