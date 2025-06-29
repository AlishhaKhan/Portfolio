"use client";

import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      onClick={handleBack}
      className="fixed bottom-6 left-6 z-50 bg-neonPink text-darkBg p-3 rounded-full shadow-lg hover:scale-110 transition duration-300 pointer-events-auto"
    >
      <IoIosArrowBack className="text-2xl" />
    </motion.button>
  );
}
