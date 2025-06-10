// import Header from "@/components/Header";
// import Preloader from "@/components/Preloader";
import About from "@/components/About";
import ContactForm from "@/components/ContacForm";
import LandingPage from "@/components/LandingPage";
import Project from "@/components/Project";
// import { useState } from "react";

export default function Home() {
  return (
    <main className="bg-[#fefbf8] h-[100vh]">
      <LandingPage />

      <About />

      <Project />

      <ContactForm />
    </main>
  );
}
