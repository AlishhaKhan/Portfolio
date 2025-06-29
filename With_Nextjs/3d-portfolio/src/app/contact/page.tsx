"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaYoutube, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !email || !subject || !message) {
      setError("Please fill in all fields.");
      setSuccess("");
      return;
    }

    // Simulate sending message
    setSuccess("Your message has been sent successfully!");
    setError("");

    // Reset fields
    setFullName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <main className="min-h-screen w-full bg-darkBg flex flex-col items-center justify-start px-6 pt-28 pb-12">
      
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-neonPink text-4xl md:text-5xl font-orbitron mb-6 text-center"
      >
        Let’s Connect
      </motion.h1>

      {/* Intro Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-whiteText max-w-2xl text-center mb-12"
      >
        I’m based in Karachi, Pakistan. Open to remote or on-site collaborations. Let’s create something remarkable together!
      </motion.p>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="w-full max-w-xl bg-darkBg/50 backdrop-blur-sm p-8 rounded-lg border border-neonPink shadow-[0_0_20px_#FF005C] space-y-6"
      >
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full p-3 rounded border border-neonPink bg-transparent text-whiteText placeholder-whiteText/70 focus:outline-none focus:ring-2 focus:ring-neonPink transition"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded border border-neonPink bg-transparent text-whiteText placeholder-whiteText/70 focus:outline-none focus:ring-2 focus:ring-neonPink transition"
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full p-3 rounded border border-neonPink bg-transparent text-whiteText placeholder-whiteText/70 focus:outline-none focus:ring-2 focus:ring-neonPink transition"
        />
        <textarea
          rows={5}
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 rounded border border-neonPink bg-transparent text-whiteText placeholder-whiteText/70 focus:outline-none focus:ring-2 focus:ring-neonPink transition"
        ></textarea>

        {error && (
          <p className="text-red-400 text-sm font-medium">{error}</p>
        )}
        {success && (
          <p className="text-green-400 text-sm font-medium">{success}</p>
        )}

        <button
          type="submit"
          className="w-full bg-neonPink text-darkBg font-bold py-3 rounded hover:scale-105 transition duration-300"
        >
          Send Message
        </button>
      </motion.form>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-12 text-whiteText text-center space-y-2"
      >
        <p><FaEnvelope className="inline text-neonPink mr-2" /> alishakhan.dev@gmail.com</p>
        <p><FaMapMarkerAlt className="inline text-neonPink mr-2" /> Karachi, Pakistan</p>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="flex gap-8 mt-10"
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

      {/* Back Button */}
      <Link
        href="/"
        className="fixed bottom-6 right-6 z-50 bg-neonPink text-darkBg p-3 rounded-full shadow-lg hover:scale-110 transition duration-300"
      >
        <FaArrowLeft className="text-2xl" />
      </Link>

      {/* Footer */}
      <footer className="w-full mt-16 border-t border-neonPink pt-6 text-center text-sm text-whiteText">
        © {new Date().getFullYear()} Alisha Khan. All rights reserved.
      </footer>
    </main>
  );
}
