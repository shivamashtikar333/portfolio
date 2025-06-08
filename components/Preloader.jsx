"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Preloader = () => {
  const arcRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(arcRef.current, {
        height: "100vh", // use viewport units for responsiveness
        duration: 1.5,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.to(".preloader", {
            opacity: 0,
            duration: 0.5,
            onComplete: () => setIsVisible(false),
          });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  if (!isVisible) return null;

  return (
    <div className="preloader fixed inset-0 z-[100] bg-black overflow-hidden flex items-end">
      <div
        ref={arcRef}
        className="w-full h-0 bg-[#f5f5dc] rounded-t-[100%] transition-all"
      ></div>
    </div>
  );
};

export default Preloader;
