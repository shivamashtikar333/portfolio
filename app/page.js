// import Header from "@/components/Header";
// import Preloader from "@/components/Preloader";
import About from "@/components/About";
import LandingPage from "@/components/LandingPage";
import Project from "@/components/Project";
// import { useState } from "react";

export default function Home() {
  return (
    <main className="bg-[#fefbf8]">
      <section className="">
        <LandingPage />
      </section>
      <section>
        <About />
      </section>
      <section
        className=" bg-black rounded-t-[30%] z-10 min-h-screen"
        id="project"
      >
        <Project />
      </section>
    </main>
  );
}
