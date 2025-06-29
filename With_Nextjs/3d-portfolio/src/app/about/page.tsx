"use client";

import BackButton from "@/components/BackButton";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGraduationCap, FaCertificate, FaBriefcase, FaUser, FaStar, FaCode } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-darkBg flex flex-col items-center justify-start px-6 pt-28 pb-12">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-neonPink text-4xl md:text-5xl font-orbitron mb-10"
      >
        About Me
      </motion.h1>

      {/* DP + Intro */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-16"
      >
        {/* DP */}
        <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-neonPink shadow-lg hover:scale-105 transition duration-300">
          <Image
            src="/dp.png"        // expects your image file in /public/dp.png
            alt="Alisha Khan DP"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Intro Text */}
        <div className="max-w-xl text-whiteText text-center md:text-left">
          <h2 className="text-2xl font-orbitron mb-4">Alisha Khan</h2>
          <p className="text-lg">
            Passionate full-stack web developer with expertise in Next.js, 3D UI, and AI agentic systems. Dedicated to building innovative, high-performance, and visually stunning web experiences.
          </p>
        </div>
      </motion.div>

      {/* About Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        <AboutCard
          icon={<FaGraduationCap className="text-3xl text-neonPink" />}
          title="Education"
          items={[
            "Cloud Native Computing & Gen-AI – GIAIC",
            "A.D.P - Economics – University of Karachi",
            "Intermediate – Govt. Degree Girls College Block -M",
          ]}
        />

        <AboutCard
          icon={<FaCertificate className="text-3xl text-neonPink" />}
          title="Certifications"
          items={[
            "Human Resource Management – UniAthena",
            "Project Management – Coventry University MBA Program",
            "Innovation Management – Erasmus University Rotterdam",
          ]}
        />

        <AboutCard
          icon={<FaStar className="text-3xl text-neonPink" />}
          title="Diplomas"
          items={[
            "Diploma in Psychology – Alison",
            "Business Management – King’s College London",
          ]}
        />

        <AboutCard
          icon={<FaBriefcase className="text-3xl text-neonPink" />}
          title="Work Experience"
          items={[
            "Web Developer – Intern at Redline Intelligence (2025 - Present)",
            "Working on AI Chatbots and Agentic Systems - GIAIC (2024 - Present)",
            "Started journey with projects like Resume Builder and E-commerce Website during Hackathons. Built 100+ practice projects across various technologies - GIAIC (2023 - 2024)",
            "Workshop Attendee – State Bank of Pakistan (2022)",
          ]}
        />

        <AboutCard
          icon={<FaCode className="text-3xl text-neonPink" />}
          title="Tech Skills"
          items={[
            "Next.js",
            "JavaScript",
            "TypeScript",
            "Python",
            "AI Agentic Systems",
          ]}
        />

        <AboutCard
          icon={<FaUser className="text-3xl text-neonPink" />}
          title="Soft Skills"
          items={[
            "Communication",
            "Problem Solving",
            "Creativity",
            "Teamwork",
            "Adaptability",
          ]}
        />
      </div>

      <BackButton />

      {/* Footer */}
      <footer className="w-full flex flex-col items-center justify-center p-6 bg-darkBg/50 pointer-events-auto border-t border-neonPink mt-20">
        <p className="text-sm text-whiteText text-center">
          © {new Date().getFullYear()} Alisha Khan. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

type AboutCardProps = {
  icon: React.ReactNode;
  title: string;
  items: string[];
};

function AboutCard({ icon, title, items }: AboutCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -10, scale: 1.05 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="bg-darkBg/50 backdrop-blur-sm p-6 rounded-lg border border-neonPink shadow-lg cursor-pointer"
    >
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-neonPink text-xl font-orbitron">{title}</h3>
      </div>
      <ul className="text-whiteText text-sm space-y-2">
        {items.map((item, idx) => (
          <li key={idx}>• {item}</li>
        ))}
      </ul>
    </motion.div>
  );
}
