"use client";

import { motion } from "framer-motion";

export default function FadeInWhenVisible({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5}} 
      // once = true artinya animasi hanya terjadi sekali
      // amount = 0.2 artinya elemen mulai animasi saat 20% terlihat
    >
      {children}
    </motion.div>
  );
}