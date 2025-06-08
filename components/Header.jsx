"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#fefbf8] text-[#171717] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold flex items-center">
          &lt;Shivam /&gt; <span className="text-orange-600 text-2xl">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 font-medium">
          <Link href="#home" className="hover:text-orange-600">
            Home
          </Link>
          <Link href="#projects" className="hover:text-orange-600">
            Projects
          </Link>
          <Link href="#about" className="hover:text-orange-600">
            About
          </Link>
          <Link href="#contact" className="hover:text-orange-600">
            Contact
          </Link>
          <Link href={"#"} target="_blank">
            <Button className={"hover:text-orange-600 cursor-pointer"}>
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
          <Link href="#home" className="block" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link
            href="#projects"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#about"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#contact"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
