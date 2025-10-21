"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({ title, description, image, link, tags, date }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-white/10"
    >
      {/* Gambar */}
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        {date && (
          <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
            {date}
          </div>
        )}
      </div>

      {/* Konten */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-gray-300 text-sm line-clamp-3">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-200 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        <a
          href={link}
          target="_blank"
          className="mt-4 inline-block text-sm text-blue-400 hover:text-blue-300 font-medium"
        >
          🔗 View Project
        </a>
      </div>
    </motion.div>
  );
}
