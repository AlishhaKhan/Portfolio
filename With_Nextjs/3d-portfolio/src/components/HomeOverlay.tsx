"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { FaRobot, FaPython, FaCube } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function HomeOverlay() {
  const [scrollStep, setScrollStep] = useState(0);

  const handleScroll = () => {
    if (scrollStep === 0) {
      // step 0 → scroll to top of expertise section
      document.getElementById("expertise")?.scrollIntoView({ behavior: "smooth" });
      setScrollStep(1);
    } else if (scrollStep === 1) {
      // step 1 → scroll all the way down to footer
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      setScrollStep(2);
    } else {
      // step 2 → scroll back to home section
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
      setScrollStep(0);
    }
  };

  return (
    <div className="relative w-full flex flex-col overflow-x-hidden bg-darkBg">
      {/* Navbar */}
      <div className="w-full flex justify-between items-center p-6 backdrop-blur-sm bg-darkBg/40 fixed top-0 left-0 z-50 pointer-events-auto">
        <div className="text-neonPink text-2xl font-orbitron tracking-wider">
          Alisha Khan
        </div>
        <nav className="flex gap-8 text-whiteText font-medium">
          <a href="#home" className="hover:text-neonPink transition duration-300">
            Home
          </a>
          <a href="/about" className="hover:text-neonPink transition duration-300">
            About
          </a>
          <a href="/projects" className="hover:text-neonPink transition duration-300">
            Projects
          </a>
          <a href="/contact" className="hover:text-neonPink transition duration-300">
            Contact
          </a>
        </nav>
      </div>

      {/* HERO Section */}
      <section
        id="home"
        className="w-full flex flex-col justify-center items-center gap-6 px-4 pt-40 pb-20"
      >
        {/* Naam */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-neonPink text-3xl md:text-5xl font-orbitron tracking-widest"
        >
          Alisha Khan
        </motion.h1>

        {/* Creative Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-whiteText font-sans text-center"
        >
          Creative Web Developer & Designer
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex gap-8 mt-6 pointer-events-auto"
        >
          <a
            href="https://www.youtube.com/@alisha_codecorner"
            target="_blank"
            rel="noopener noreferrer"
            className="text-whiteText hover:text-neonPink transition duration-300 text-3xl"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.linkedin.com/in/alisha-khan-7353ab35a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-whiteText hover:text-neonPink transition duration-300 text-3xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/AlishhaKhan.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-whiteText hover:text-neonPink transition duration-300 text-3xl"
          >
            <FaGithub />
          </a>
        </motion.div>

        {/* Scroll Down Button under social icons */}
        <motion.a
          href="#expertise"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 animate-bounce text-neonPink text-4xl pointer-events-auto"
        >
          <IoIosArrowDown />
        </motion.a>
      </section>

      {/* EXPERTISE SECTION */}
      <section
        id="expertise"
        className="w-full flex flex-col items-center mt-40 pt-20 pb-16 px-6 gap-12 pointer-events-auto"
      >
        <h2 className="text-3xl md:text-4xl text-neonPink font-orbitron text-center">
          My Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl">
          {/* Card 1 - Next.js */}
          <div className="bg-darkBg/50 backdrop-blur-sm p-8 rounded-lg border border-neonPink shadow-[0_0_15px_#FF005C] hover:scale-105 hover:shadow-[0_0_25px_#FF005C] transition duration-300 w-full min-h-[200px] flex flex-col items-center justify-center">
            <SiNextdotjs className="text-neonPink text-4xl mb-4" />
            <h3 className="text-neonPink text-xl mb-4 font-orbitron">
              Next.js & Frontend
            </h3>
            <ul className="text-whiteText space-y-2 text-sm text-center">
              <li>Next.js 15</li>
              <li>React 19</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
              <li>Responsive UI</li>
            </ul>
          </div>

          {/* Card 2 - AI */}
          <div className="bg-darkBg/50 backdrop-blur-sm p-8 rounded-lg border border-neonPink shadow-[0_0_15px_#FF005C] hover:scale-105 hover:shadow-[0_0_25px_#FF005C] transition duration-300 w-full min-h-[200px] flex flex-col items-center justify-center">
            <FaRobot className="text-neonPink text-4xl mb-4" />
            <h3 className="text-neonPink text-xl mb-4 font-orbitron">
              AI & Agentic Systems
            </h3>
            <ul className="text-whiteText space-y-2 text-sm text-center">
              <li>Python</li>
              <li>LangChain</li>
              <li>Chainlit</li>
              <li>LangGraph</li>
              <li>CrewAI</li>
            </ul>
          </div>

          {/* Card 3 - Python */}
          <div className="bg-darkBg/50 backdrop-blur-sm p-8 rounded-lg border border-neonPink shadow-[0_0_15px_#FF005C] hover:scale-105 hover:shadow-[0_0_25px_#FF005C] transition duration-300 w-full min-h-[200px] flex flex-col items-center justify-center">
            <FaPython className="text-neonPink text-4xl mb-4" />
            <h3 className="text-neonPink text-xl mb-4 font-orbitron">
              Python & Data
            </h3>
            <ul className="text-whiteText space-y-2 text-sm text-center">
              <li>Streamlit</li>
              <li>Pandas</li>
              <li>NumPy</li>
              <li>Matplotlib</li>
              <li>FastAPI</li>
            </ul>
          </div>

          {/* Card 4 - 3D */}
          <div className="bg-darkBg/50 backdrop-blur-sm p-8 rounded-lg border border-neonPink shadow-[0_0_15px_#FF005C] hover:scale-105 hover:shadow-[0_0_25px_#FF005C] transition duration-300 w-full min-h-[200px] flex flex-col items-center justify-center">
            <FaCube className="text-neonPink text-4xl mb-4" />
            <h3 className="text-neonPink text-xl mb-4 font-orbitron">
              3D & Graphics
            </h3>
            <ul className="text-whiteText space-y-2 text-sm text-center">
              <li>Three.js</li>
              <li>React Three Fiber</li>
              <li>GSAP Animations</li>
              <li>3D UI/UX</li>
              <li>Custom 3D Models</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Floating Scroll Button */}
      <button
        onClick={handleScroll}
        className="fixed bottom-6 right-6 z-50 bg-neonPink text-darkBg p-3 rounded-full shadow-lg hover:scale-110 transition duration-300 pointer-events-auto"
      >
        {scrollStep === 2 ? (
          <IoIosArrowUp className="text-2xl" />
        ) : (
          <IoIosArrowDown className="text-2xl" />
        )}
      </button>

      {/* FOOTER */}
      <footer
        id="contact"
        className="w-full flex flex-col items-center justify-center p-6 bg-darkBg/50 pointer-events-auto border-t border-neonPink mt-20"
      >
        <p className="text-sm text-whiteText text-center">
          © {new Date().getFullYear()} Alisha Khan. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
