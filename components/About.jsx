"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaJs, FaPython, FaDocker, FaGitAlt, FaAws } from "react-icons/fa";
import {
  SiTypescript,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiFigma,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Project from "./Project";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sliderRef = useRef(null);
  const aboutRef = useRef(null);
  // const wrapperRef = useRef(null);

  useEffect(() => {
    gsap.to(sliderRef.current, {
      x: "-50%",
      ease: "none",
      duration: 15,
      repeat: -1,
      yoyo: true,
    });

    const ctx = gsap.context(() => {
      gsap.to(aboutRef.current, {
        opacity: 0.6,
        scale: 0.8,
        ease: "none",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top -30%",
          end: "bottom-=5% top",
          scrub: true,
          // markers: true, // for debugging, remove later
        },
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={aboutRef}
        id="about"
        className="min-h screen bg-black px-4 sm:px-6 lg:px-12 xl:px-20 py-16 flex flex-col lg:flex-row gap-12 justify-between items-center max-w-7xl mx-auto "
      >
        {/* Left section */}
        <div className="flex-1 space-y-4">
          <p className="text-orange-500 font-mono text-lg hidden md:block">{`<about>`}</p>

          <h1 className="text-4xl lg:text-6xl font-bold leading-snug max-sm:text-center text-gray-200">
            About Me
          </h1>
          <p className="text-orange-500 font-mono text-lg md:hidden">{`</Techstack>`}</p>
          {/* Desktop Tech Stack & Slider (hidden on mobile) */}
          <div className="hidden sm:block">
            <div className="bg-[#121212] rounded-md overflow-hidden p-6 shadow-lg w-full max-w-xl">
              <pre className="font-mono text-sm overflow-x-auto whitespace-pre">
                <code>
                  <span className="text-lg text-orange-400">{`// My tech stack\n`}</span>
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-blue-400">skills</span>{" "}
                  <span className="text-white">= &#123;</span>
                  {"\n"}
                  &nbsp;&nbsp;<span className="text-green-400">languages</span>:
                  [<span className="text-yellow-300">'JavaScript'</span>,{" "}
                  <span className="text-blue-300">'TypeScript'</span>,{" "}
                  <span className="text-purple-300">'Python'</span>],{"\n"}
                  &nbsp;&nbsp;<span className="text-green-400">frontend</span>:
                  [<span className="text-cyan-300">'React'</span>,{" "}
                  <span className="text-indigo-300">'Vue'</span>,{" "}
                  <span className="text-gray-300">'Next.js'</span>,{" "}
                  <span className="text-blue-400">'Tailwind'</span>],{"\n"}
                  &nbsp;&nbsp;<span className="text-green-400">backend</span>: [
                  <span className="text-lime-300">'Node.js'</span>,{" "}
                  <span className="text-teal-300">'Express'</span>,{" "}
                  <span className="text-pink-300">'GraphQL'</span>],{"\n"}
                  &nbsp;&nbsp;<span className="text-green-400">databases</span>:
                  [<span className="text-emerald-300">'MongoDB'</span>,{" "}
                  <span className="text-blue-300">'PostgreSQL'</span>,{" "}
                  <span className="text-orange-300">'Firebase'</span>],{"\n"}
                  &nbsp;&nbsp;<span className="text-green-400">tools</span>: [
                  <span className="text-red-300">'Git'</span>,{" "}
                  <span className="text-blue-500">'Docker'</span>,{" "}
                  <span className="text-pink-300">'Figma'</span>,{" "}
                  <span className="text-yellow-400">'AWS'</span>]{"\n"}
                  <span className="text-white">&#125;;</span>
                </code>
              </pre>
            </div>

            {/* GSAP Infinite Logo Slider */}
            <div className="overflow-hidden w-full max-w-xl mt-6 relative">
              <div className="flex gap-10 w-max" ref={sliderRef}>
                {[
                  FaJs,
                  SiTypescript,
                  FaPython,
                  SiReact,
                  SiNextdotjs,
                  SiTailwindcss,
                  SiNodedotjs,
                  SiExpress,
                  SiMongodb,
                  SiPostgresql,
                  SiFirebase,
                  FaGitAlt,
                  FaDocker,
                  SiFigma,
                  FaAws,
                ].map((Icon, index) => (
                  <Icon
                    key={index}
                    className="text-4xl text-gray-600 hover:text-black transition-all duration-300"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Tech Stack Badge Grid */}
          <div className="sm:hidden grid grid-cols-3 gap-3 text-center mt-4">
            {[
              "JavaScript",
              "TypeScript",
              "Python",
              "React",
              "Vue",
              "Next.js",
              "Tailwind",
              "Node.js",
              "Express",
              "GraphQL",
              "MongoDB",
              "PostgreSQL",
              "Firebase",
              "Git",
              "Docker",
              "Figma",
              "AWS",
            ].map((tech, index) => (
              <span
                key={index}
                className="text-xs bg-orange-100 text-orange-800 font-medium py-1 px-2 rounded-md shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-orange-500 font-mono text-lg md:hidden">{`</Techstack>`}</p>
          <p className="text-orange-500 font-mono text-lg hidden md:block">{`</about>`}</p>
        </div>

        {/* Right section */}
        <div className="flex-1 space-y-12 max-w-xl">
          <div>
            <h2 className="text-2xl font-bold mb-2 text-orange-500">
              My Development Focus
            </h2>
            <p className="text-gray-500">
              I am a dedicated developer focused on building impactful web and
              mobile applications. My entry into this field was driven by a keen
              interest in crafting functional and engaging digital experiences.
              I've immersed myself in learning and applying modern development
              practices across both front-end and back-end technologies. My
              objective is to contribute to projects that address real-world
              needs and deliver exceptional value through well-engineered
              solutions.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-orange-500">
              My Approach
            </h2>
            <p className="text-gray-500 mb-6">
              My approach to development prioritizes both technical excellence
              and user needs. Every line of code aims to create value, whether
              through improved performance, enhanced accessibility, or more
              intuitive interfaces. I am committed to continuous skill
              enhancement, embracing new technologies and methodologies to
              refine my craft and deliver robust, scalable, and maintainable
              software.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                [
                  "Problem Solver",
                  "I enjoy tackling complex challenges and finding elegant solutions through code.",
                ],
                [
                  "Continuous Learner",
                  "I stay current with emerging technologies and best practices in the field.",
                ],
                [
                  "Detail Oriented",
                  "I pay attention to the small details that make great user experiences.",
                ],
                [
                  "Team Player",
                  "I thrive in collaborative environments and value diverse perspectives.",
                ],
              ].map(([title, desc], idx) => (
                <div key={idx} className="bg-[#fff4eb] p-4 rounded-md">
                  <h3 className="font-bold">{title}</h3>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <section
        className="min-h-screen bg-[#fff4eb] relative z-10 flex items-center justify-center"
        id="project"
      >
        <Project />
      </section> */}
    </>
  );
};

export default About;
