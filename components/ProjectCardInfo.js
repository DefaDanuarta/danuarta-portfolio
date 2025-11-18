"use client";
import Image from "next/image";

export default function ProjectCardInfo({
  title = "Project Title",
  year = "2025",
  category = "Development",
  description = "Deskripsi singkat tentang proyek ini yang menjelaskan apa yang dikerjakan, tujuannya, dan hasil yang diperoleh.",
  tools = ["React", "Tailwind", "Next.js"],
  links = "#",
  image = "/projects/default.png",
}) {
  return (
    <div className="group bg-neutral-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-neutral-700 p-6 max-w-3xl">
      {/* Image */}
      <div className="rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={900}
          height={600}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Header: title + year */}
      <div className="flex justify-between items-start mt-2">
        <h2 className="text-xl font-normal text-white leading-relaxed break-words line-clamp-2">{title}</h2>
        <span className="text-xs text-white mt-2 px-2 border rounded-full">{year}</span>
      </div>

      {/* Category */}
      <p className="text-sm text-[#C68F6B] font-light mb-3">{category}</p>

      {/* Description */}
      <p className="text-neutral-300 mb-5 leading-relaxed break-words line-clamp-3 text-sm font-light">{description}</p>

      {/* Links */}
      <a href={links} target="_blank">
        <button className="rounded-full px-3 py-1 mb-5 text-sm font-extralight text-[#C68F6B] border border-[#C68F6B] hover:bg-[#C68F6B] hover:text-black hover:underline transition-colors">
          Public Drive/Repo
        </button>
      </a>

      {/* Tools */}
      <div className="flex flex-wrap gap-2">
        {tools.map((tool, index) => (
          <span
            key={index}
            className="bg-neutral-500 text-neutral-100 px-3 py-1 rounded-full text-xs font-light"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
