"use client";
import { motion } from "framer-motion";

export default function Marquee() {
  const text = "DATA   •   DESIGNS   •   DATA STORYTELLING   •   VISUALIZATION   •   UI/UX   •   ";

  return (
    <div className="relative overflow-hidden w-full py-4">
      {/* Marquee text */}
      <motion.div
        className="inline-block whitespace-nowrap text-neutral-600 text-3xl font-medium"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 300,
          ease: "linear",
        }}
      >
        {text.repeat(10)}
      </motion.div>

      {/* Fade effect kiri */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-neutral-900"></div>

      {/* Fade effect kanan */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-neutral-900"></div>
    </div>
  );
}
