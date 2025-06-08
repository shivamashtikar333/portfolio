"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import gsap from "gsap";

export default function Header() {
  const navlinks = ["home", "projects", "about", "contact"];

  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1, delay: 2.5, ease: "power2.out" }
    );
  }, []);

  const handleMouseMove = (e) => {
    const link = e.currentTarget;
    const rect = link.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(link, {
      x: x * 0.5,
      y: y * 0.5,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <header ref={headerRef} className="bg-[#fefbf8] text-[#171717] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold flex items-center">
          &lt;Shivam /&gt; <span className="text-orange-600 text-2xl">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 font-medium">
          {navlinks.map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className="hover:text-orange-600 transition-all "
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
          <Link
            href={"#"}
            target="_blank"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <Button
              className={"hover:bg-orange-600 cursor-pointer hover:text-black"}
            >
              Blogs
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#fefbf8] px-4 pb-4 space-y-2">
          {["home", "projects", "about", "contact"].map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className="block"
              onClick={() => setIsOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
