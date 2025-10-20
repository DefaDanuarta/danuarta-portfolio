// "use client";
// // import { ReactLogo} from "lucide-react";

// export default function TechLoop() {
//   const tools = [
//     { name: "R Studio", logo: "assets/logo/r.svg" },
//     { name: "Python", logo: "assets/logo/python.svg" },
//     { name: "PostgreSQL", logo: "assets/logo/postgresql.svg" },
//     { name: "MySQL", logo: "assets/logo/mysql.svg" },
//     { name: "Notion", logo: "assets/logo/notion.svg" },
//   ];

//   return (
//     <div className="overflow-hidden relative w-full py-8">
//       <div className="flex animate-scroll whitespace-nowrap">
//         {[...Array(2)].map((_, i) => (
//           <ul key={i} className="flex items-center space-x-6 ps-6">
//             {tools.map((tool, idx) => (
//               <li
//                 key={idx}
//                 className="flex items-center space-x-2 bg-neutral-800-800 px-4 py-2 rounded-full text-white border border-neutral-600"
//               >
//                 <img
//                   src={tool.logo}
//                   alt={tool.name}
//                   className="w-5 h-5 object-contain"
//                 />
//                 <span className="text-sm font-medium">{tool.name}</span>
//               </li>
//             ))}
//           </ul>
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client";

// export default function SkillMarquee() {
//   const skills = [
//     "HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", 
//     "Angular", "Redux", "Node.js", "Express.js", "MySQL", "MongoDB",
//     "PostgreSQL", "Cypress", "Docker", "Firebase", "AWS", "GSAP",
//     "Framer Motion", "Figma", "Tailwind CSS", "GIT"
//   ];

//   return (
//     <div className="relative overflow-hidden py-4 border-y border-gray-700">
//       {/* Marquee track */}
//       <div className="flex animate-marquee whitespace-nowrap">
//         {[...skills, ...skills].map((skill, idx) => (
//           <div
//             key={idx}
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 text-white border border-gray-600 flex-shrink-0 mr-4"
//           >
//             <img
//               src={`/skills/${skill.replace(/\s+/g, "")}.svg`}
//               alt={skill}
//               className="w-5 h-5 object-contain"
//             />
//             <span className="text-sm font-medium">{skill}</span>
//           </div>
//         ))}
//       </div>

//       {/* Fade effect di ujung */}
//       <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-900"></div>
//       <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-900"></div>

//       {/* Tailwind keyframe animation */}
//       <style jsx>{`
//         .animate-marquee {
//           animation: marquee 20s linear infinite;
//         }

//         @keyframes marquee {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";

export default function SkillMarquee() {
  const skills = [
    { name: "R Studio", logo: "assets/logo/r.svg" },
    { name: "Python", logo: "assets/logo/python.svg" },
    { name: "PostgreSQL", logo: "assets/logo/postgresql.svg" },
    { name: "MySQL", logo: "assets/logo/mysql.svg" },
    { name: "Notion", logo: "assets/logo/notion.svg" },
    { name: "GitHub", logo: "assets/logo/github.svg" },
    { name: "Jupyter", logo: "assets/logo/jupyter.svg" },
    { name: "Anaconda", logo: "assets/logo/anaconda.svg" },
    { name: "Looker", logo: "assets/logo/looker.svg" },
  ];

  return (
    <div className="relative overflow-hidden py-4">
      {/* Marquee track */}
      <div className="flex animate-marquee whitespace-nowrap">
        {[...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills].map((skill, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 text-white border border-neutral-700 flex-shrink-0 mr-4"
          >
            {/* Logo */}
            <img src={skill.logo} alt={skill.name} className="w-5 h-5 object-contain" />
            {/* Nama skill */}
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Fade effect di ujung */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-neutral-900"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-neutral-900"></div>

      {/* Tailwind keyframe animation */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}



