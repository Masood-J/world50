import Image from "next/image";
import { Lock } from "lucide-react";
import { IoArrowForwardOutline } from "react-icons/io5";
import Link from "next/link";
import LogoAnimate from "@/components/ui/LogoAnimate";
import { ArrowRight } from "lucide-react";
import CursorGlow from "@/components/ui/CursorGlow";
import TextReveal from "@/components/ui/TextReveal";
export default function Home() {
  return (
    <div
      className={`flex flex-col min-h-screen bg-[url('/BG.png')] bg-cover bg-center lg:bg-[position:100%_center] overflow-hidden`}
    >
      <div className={`hidden md:block`}>
        <CursorGlow></CursorGlow>
      </div>
      <header className={`z-3`}>
        <div
          className={`flex flex-row gap-5 items-center justify-between mx-4 md:mx-14 mt-15`}
        >
          <Image
            src={`Logo-Full.svg`}
            width={100}
            height={150}
            alt={`Its the top 50.`}
          ></Image>
          <div
            className={`cursor-pointer group relative z-3 rounded-full border-[#109eda] border-1 pl-[14px] pr-[10px] py-[7px] flex flex-row items-center gap-5 text-inter font-normal mt-4 mr-4`}
          >
            <button className={`text-[#109eda] cursor-pointer text-[15.5px]`}>Members</button>
            <Lock
              className={`text-[#109eda] w-3.5 h-3.5 z-2 group-hover:text-black animation-colors duration-400 ease-in-out`}
            ></Lock>
            <div
              className={`absolute right-0.5 rounded-full group-hover:bg-[#109eda] group-hover:w-8.5 w-0 h-8.5 z-1 group-hover:transition-all group-hover:duration-200 delay-100 ease-initial`}
            ></div>
          </div>
        </div>
      </header>
      <main
        className={`flex-1 grid grid-rows-[1fr_230px_60px] grid-cols-1 h-full lg:mx-0 lg:grid-rows-[1fr_60px] lg:grid-cols-[175px_1fr_1fr_1fr_1fr] z-3`}
      >
        <div
          className={` lg:mx-0 lg:col-start-2 lg:col-span-2  lg:row-start-1 self-center mb-9`}
        >
          <div className={`flex flex-col gap-8 mt-5 lg:ml-0`}>
            <h2
              className={`font-oswald font-light text-[42px] md:text-[64px] text-white leading-[77px] md:w-98`}
            >
              Invitation-only for CEOs, Boards, & Executives
            </h2>
            <div
              className={`group relative z-3 text-[#109eda] flex flex-row justify-center gap-2.5 -mt-1 md:ml-4 border-1 rounded-full p-1 py-[7.2px] pl-[15px] pr-[1.5px] font-inter font-normal w-fit cursor-pointer text-[15px]`}
            >
              <h4>Inquire About Eligibility</h4>
              <div
                className={`z-1 absolute right-[1px] top-[1.5px] bottom-0 group-hover:w-[34.5px] h-[34.5px] rounded-full w-[1px] group-hover:bg-[#109eda] group-hover:transition-all group-hover:duration-200 delay-100 ease-initial`}
              ></div>
              <button className={`z-2 mr-1`}>
                <ArrowRight
                  className={`w-6 h-5 group-hover:text-black group-hover:animation-colors duration-400 ease-in-out`}
                ></ArrowRight>
              </button>
            </div>
          </div>
        </div>
        <div
          className={` lg:mr-20 lg:col-start-4 lg:-col-end-1 lg:row-start-1 ml-0 mr-5 self-start md:self-center mb-13`}
        >
          <TextReveal></TextReveal>
        </div>
        <div
          className={`lg:col-start-1 lg:-col-end-1 lg:row-start-2 self-start -mt-1.5`}
        >
          <LogoAnimate></LogoAnimate>
        </div>
      </main>
      <footer
        className={`grid grid-cols-1 grid-rows-3 mt-5 -mb-5 lg:grid-cols-3 items-center font-inter font-light my-0 ml-5 md:mx-14
        z-3`}
      >
        <div className={`flex flex-row gap-1 text-[13px] font-normal text-[#fff]`}>
          <h3>NEW YORK |</h3>
          <h3>LONDON |</h3>
          <h3>SINGAPORE |</h3>
          <h3>ATLANTA</h3>
        </div>
        <div
          className={` lg:col-start-2 lg:-col-end-1 lg:place-content-end flex flex-col md:flex-row gap-2 text-gray-400 text-[13px]`}
        >
          <div className={`flex flex-row gap-6 text-[#8c8b88] `}>
            <h4>Privacy</h4>
            <h4>Terms of use</h4>
            <h4>Cookies Policy</h4>
          </div>
          <div className={`text-[#8c8c8c] row-start-3`}>
            <h3>@ 2025 All rights reserved</h3>
          </div>
        </div>
      </footer>
    </div>
  );
}
