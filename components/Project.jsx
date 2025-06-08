"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const projectRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        projectRef.current,
        {
          y: 100,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          duration: 1.2,
          scrollTrigger: {
            trigger: projectRef.current,
            start: "top 90%", // triggers when it barely enters
            end: "top 60%", // ends quickly for a tight effect
            scrub: true,
          },
        }
      );
    }, projectRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={projectRef}
      className="min-h-screen bg-black rounded-t-[30%] flex items-center justify-center text-white text-4xl font-bold"
    >
      Project
    </div>
  );
};

export default Project;
