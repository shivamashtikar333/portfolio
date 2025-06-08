import { Gem, SquareArrowOutUpRight, Download } from "lucide-react";
import React from "react";
import Link from "next/link";
import SplineScene from "./SplineScene";

const LandingPage = () => {
  return (
    <main
      id="hero"
      className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-14 h-[95vh] w-full px-6 lg:px-12 "
    >
      {/* LEFT SECTION: TEXT */}
      <div className="w-full mt-16 sm:mt-24 md:mt-28 lg:mt-0 px-4 sm:px-6 md:px-10 z-10">
        <div>
          <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold tracking-wider mb-2 text-black">
            Hello
            <span className="text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold tracking-wider text-orange-500">
              {" "}
              I'm Shivam
            </span>
          </h1>

          <p className="text-2xl sm:text-xl md:text-2xl lg:text-5xl font-medium tracking-wider text-gray-400 mb-6">
            Software Developer
          </p>

          <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] rounded-full shadow-[0_0_15px_rgba(255,255,255,0.4)] mb-4 tracking-wider">
            <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-2 text-white">
              <Gem /> Think. Build. Learn.
            </div>
          </div>

          <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
            I love turning ideas into code — always learning, experimenting, and
            building real-world solutions.
          </p>

          <div className="flex flex-wrap gap-4 mt-12">
            <Link
              href={"#"}
              className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-4 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white flex gap-2 items-center"
            >
              Resume <Download />
            </Link>
            <Link
              href={"#"}
              className="border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-orange-600 text-black hover:text-orange-600
            flex gap-2 items-center"
            >
              Get Started <SquareArrowOutUpRight />
            </Link>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION: 3D MODEL */}
      <div className="w-full   mb-10 lg:mb-0 flex justify-center items-center">
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <SplineScene />
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
