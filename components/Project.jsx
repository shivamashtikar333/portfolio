"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const projectRef = useRef(null);

  return (
    <div
      ref={projectRef}
      className="h-[100vh] rounded-t-3xl flex items-center justify-center text-black text-4xl font-bold z-10"
    >
      Project
    </div>
  );
};

export default Project;
