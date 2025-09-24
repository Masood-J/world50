import Image from "next/image";
import { Lock } from "lucide-react";
import { IoArrowForwardOutline } from "react-icons/io5";
import Link from "next/link";
import HeroText from "@/components/ui/HeroText";
import LogoAnimate from "@/components/ui/LogoAnimate";
import { ArrowRight } from "lucide-react";
import CursorGlow from "@/components/ui/CursorGlow";
import TextReveal from "@/components/ui/TextReveal";
export default function Home() {
  return (
    <div
      className={`flex flex-col min-h-screen bg-[url('/BG.png')] bg-cover bg-center `}
    >
      {/*<CursorGlow></CursorGlow>*/}
      <header className={``}>
        <div
          className={`flex flex-row gap-5 items-center justify-between mx-15 mt-15`}
        >
          <Image
            src={`Logo-Full.svg`}
            width={100}
            height={100}
            alt={`Its the top 50.`}
          ></Image>
          <div
            className={`group relative z-3 rounded-full border-[#109eda] border-1 px-3 pl-4 py-1.5 flex flex-row items-center gap-5 text-inter font-normal`}
          >
            <button className={`text-[#109eda]`}>Members</button>
            <Lock
              className={`text-[#109eda] w-3.5 h-3.5 z-2 group-hover:text-black animation-colors duration-400 ease-in-out`}
            ></Lock>
            <div
              className={`absolute right-0 rounded-full group-hover:bg-[#109eda] group-hover:w-9.5 w-0 h-full z-1 group-hover:transition-all group-hover:duration-200 delay-100 ease-initial`}
            ></div>
          </div>
        </div>
      </header>
      <main
        className={`flex-1 grid grid-cols-1 h-full lg:mx-0 lg:grid-rows-[1fr_60px] lg:grid-cols-[200px_1fr_1fr_1fr_1fr] `}
      >
        <div
          className={` lg:mx-0 lg:col-start-2 lg:col-span-2  lg:row-start-1 self-center`}
        >
          <div className={`flex flex-col gap-5 min-w-58 ml-14 lg:ml-0`}>
            <h2 className={`font-oswald font-light text-6xl w-97 leading-18`}>
              Invitation-only for CEOs, Boards, & Executives
            </h2>
            <div
              className={`group relative z-3 text-[#109eda] flex flex-row justify-center gap-3 border-1 rounded-full p-1.5 font-inter font-normal w-fit pl-2.5`}
            >
              <h4>Inquire About Eligibility</h4>
              <div
                className={`z-1 absolute right-0 top-0 bottom-0 group-hover:w-9 rounded-full w-0 bg-[#109eda] group-hover:transition-all group-hover:duration-200 delay-200 ease-initial`}
              ></div>
              <button className={`z-2`}>
                <ArrowRight
                  className={`w-6 h-5 group-hover:text-black group-hover:animation-colors duration-400 ease-in-out`}
                ></ArrowRight>
              </button>
            </div>
          </div>
        </div>
        <div
          className={` lg:mr-20 lg:col-start-4 lg:-col-end-1 lg:row-start-1 ml-14 self-center`}
        >
<TextReveal></TextReveal>
        </div>
        <div
          className={`lg:col-start-1 lg:-col-end-1 lg:row-start-2 self-end mb-0`}
        >
          <LogoAnimate></LogoAnimate>
        </div>
      </main>
      <footer
        className={`grid grid-cols-1 lg:grid-cols-3 font-inter font-light my-5 mx-14`}
      >
        <div className={`flex flex-row gap-2 text-xs font-normal`}>
          <h3>NEW YORK |</h3>
          <h3>LONDON |</h3>
          <h3>SINGAPORE |</h3>
          <h3>ATLANTA</h3>
        </div>
        <div
          className={`lg:col-start-2 lg:-col-end-1 lg:place-content-end flex flex-row gap-2 text-gray-400 text-xs`}
        >
          <div className={`flex flex-row gap-6 text-[#8c8b88] `}>
            <h4>Privacy</h4>
            <h4>Terms of use</h4>
            <h4>Cookies Policy</h4>
          </div>
          <div className={`text-[#8c8c8c]`}>
            <h3>@ 2025 All rights reserved</h3>
          </div>
        </div>
      </footer>
    </div>
  );
}
