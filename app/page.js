import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Preloader from "@/components/Preloader";
// import { useState } from "react";

export default function Home() {
  return (
    <main className="relative bg-[#fefbf8]">
      <Preloader />
      <Header />
      <Image
        src={"/gradient.png"}
        alt="Gradient Background"
        className="absolute top-10 right-10 opacity-60 -z-10"
        width={500}
        height={500}
      />

      <div className="h-0 w-[40rem] absolute top-[20%] right-[-6%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10 overflow-x-hidden max-w-full"></div>
      <Hero />
    </main>
  );
}
