"use client";

import { motion } from "framer-motion";
import { FaRobot, FaPython, FaReact, FaLaptopCode, FaShoppingCart } from "react-icons/fa";
import BackButton from "@/components/BackButton";


export default function ProjectsPage() {
  const projects = [
    {
      icon: <FaRobot className="text-4xl text-neonPink" />,
      title: "AI Chatbots & Agentic Systems",
      desc: "Built intelligent AI chatbots and agent-based systems leveraging LangChain, Chainlit, and CrewAI, capable of dynamic conversations, semantic search, and task automation. (2025)",
    },
    {
      icon: <FaPython className="text-4xl text-neonPink" />,
      title: "Python & Streamlit Apps",
      desc: "Developed diverse Python-based apps including Personal Library Manager, Unit Converter, Password Strength Meter, and Secure Data Encryption system, focusing on interactivity and clean UI. (2024-2025)",
    },
    {
      icon: <FaReact className="text-4xl text-neonPink" />,
      title: "Next.js & Tailwind CSS Projects",
      desc: "Created impressive web interfaces using Next.js and Tailwind CSS. Projects include a Resume Builder app, an e-commerce website themed around home crockery and furniture, and over 100+ practice projects demonstrating innovative UI concepts. (2024-2025)",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-darkBg flex flex-col items-center justify-start px-6 pt-28 pb-12">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-neonPink text-4xl md:text-5xl font-orbitron mb-16"
      >
        My Projects Timeline
      </motion.h1>

      <div className="relative w-full max-w-4xl flex flex-col items-center">
        {/* Neon Vertical Line */}
        <div className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-neonPink/70 via-neonPink to-neonPink/70 animate-pulse"></div>

        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`relative w-full md:w-1/2 p-6 my-10 rounded-lg border border-neonPink bg-gradient-to-br from-darkBg via-darkBg/60 to-darkBg/40 backdrop-blur-sm shadow-[0_0_20px_#FF005C] hover:scale-105 transition duration-300 ${
              idx % 2 === 0 ? "md:self-start" : "md:self-end"
            }`}
          >
            {/* Dot marker on timeline */}
            <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-neonPink shadow-[0_0_10px_#FF005C]"></span>
            
            <div className="flex items-center gap-4 mb-4">
              {proj.icon}
              <h3 className="text-neonPink text-xl font-orbitron">
                {proj.title}
              </h3>
            </div>
            <p className="text-whiteText text-sm">{proj.desc}</p>
          </motion.div>
        ))}
      </div>

      <BackButton />

      {/* FOOTER */}
      <footer
        id="contact"
        className="w-full flex flex-col items-center justify-center p-6 bg-darkBg/50 pointer-events-auto border-t border-neonPink mt-20"
      >
        <p className="text-sm text-whiteText text-center">
          © {new Date().getFullYear()} Alisha Khan. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
