import { Download, Gem, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
// import Spline from "@splinetool/react-spline/next";
import SplineScene from "./SplineScene";

const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
      <div className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider mb-2 text-black">
          Hello
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider text-orange-500">
            {" "}
            I'm Shivam
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-wider text-gray-400 mb-6">
          Software Developer
        </p>
        <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] rounded-full shadow-[0_0_15px_rgba(255,255,255,0.4)]">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-2 text-white">
            <Gem /> Think. Build. Learn.
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8"></h1>
        <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
          I love turning ideas into code — always learning, experimenting, and
          building real-world solutions.
        </p>
        <div className="flex  gap-4 mt-12 ">
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
      {/* <Spline
        className="absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full"
        scene="https://prod.spline.design/MQe9GVjC7GwhNZnw/scene.splinecode"
      /> */}
      <SplineScene />
    </main>
  );
};

export default Hero;
