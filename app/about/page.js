"use client";
import React from 'react';
import LogoMarquee from '@/components/LogoMarquee';
import Navbar from '@/components/NavBar';
import { motion } from "framer-motion";
import FadeInWhenVisible from '@/components/FadeInWhenVisible';
import ProjectCardInfo from '@/components/ProjectCardInfo';
import ContactCard from '@/components/ContactCard';
import {
  Tooltip,
  TooltipTrigger,
  TooltipPanel,
} from '@/components/animate-ui/components/base/tooltip';
import Footer from '@/components/Footer';
import ExperienceSection from '@/components/Experience';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main>
        {/* navbar */}
        <Navbar />
        <motion.div
          className='relative flex w-full flex-col justify-center'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* hero */}
          <section className="flex flex-col my-28 mx-4 xl:mx-40 lg:mx-16 md:mx-8 md:flex-row justify-center gap-8">
            {/* hero image */}
            <div className="flex-1/9 w-full md:w-2xs lg:w-2xs">
              <Image
                src="/assets/img/new-hero2.jpg"
                alt="Logo"
                width={2757}
                height={4007}
                unoptimized
                className="rounded-full w-full overflow-hidden object-contain"
              />
              {/* <img src="" alt="" className="rounded-full w-full overflow-hidden" /> */}
            </div>

            {/* headline */}
            <div className="flex flex-col flex-3 justify-start text-start my-auto">
              <p className="text-wrap font-light text-start mb-8 text-5xl lg:text-6xl xl:text-7xl">
                Inspire action and clarity with <span className="text-[#C68F6B] font-light">insight-driven reports.</span>
              </p>
              <p className="text-start text-pretty font-extralight text-neutral-300 mb-8 text-sm lg:text-base">
                As an undergraduate student at Bina Nusantara University, I actively collaborate with teams across divisions and regions, ensuring seamless communication, clear alignment, and smooth execution throughout each project.
              </p>
              <div className="flex flex-col items-start gap-2 w-full md:gap-4 md:items-center md:flex-row">
                {/* Button CV */}
                <div>
                  <a href="">
                    <button className="px-6 py-2 border border-[#C68F6B] text-[#C68F6B] font-light rounded-full hover:bg-[#C68F6B] hover:text-black hover:underline underline-offset-2 transition-all duration-400">
                      My Resume
                    </button>
                  </a>
                </div>

                {/* Divider line */}
                <div className="flex-1 h-px bg-neutral-700"></div>

                {/* Social links */}
                <div className="flex flex-row gap-3">
                  <FadeInWhenVisible>
                    <a
                      href="https://www.linkedin.com/in/defa-danuarta/"
                      target="_blank"
                      className="uppercase decoration-1 font-thin opacity-60 hover:underline hover:opacity-100 underline-offset-2 transition-all text-sm md:text-base"
                    >
                      LinkedIn
                    </a>
                  </FadeInWhenVisible>
                  <FadeInWhenVisible>
                    <a
                      href="https://github.com/DefaDanuarta"
                      target="_blank"
                      className="uppercase decoration-1 font-thin opacity-60 hover:underline hover:opacity-100 underline-offset-2 transition-all text-sm md:text-base"
                    >
                      Github
                    </a>
                  </FadeInWhenVisible>
                  <FadeInWhenVisible>
                    <a
                      href="mailto:defa.danuarta@email.com?subject=Let's%20Collaborate!&body=Hi%20Defa,%0D%0A%0D%0AI’m%20interested%20in%20working%20with%20you%20on%20a%20project.%0D%0A%0D%0ARegards,%0D%0A[Your%20Name]"
                      className="uppercase decoration-1 font-thin opacity-60 hover:underline hover:opacity-100 underline-offset-2 transition-all text-sm md:text-base"
                    >
                      Email
                    </a>
                  </FadeInWhenVisible>
                </div>
              </div>
            </div>
          </section>

          {/* logo marquee */}
          <FadeInWhenVisible>
            <section className='border-t border-b border-neutral-800'>
              <LogoMarquee />
            </section>
          </FadeInWhenVisible>
          {/* Experience */}
          <section className='flex flex-col h-auto mt-24 mb-8 mx-4 xl:mx-40 lg:mx-16 md:mx-8'>
            <div className='flex flex-col lg:items-center lg:flex-row mb-16'>
              <div className='flex flex-2 text-start py-2'>
                <FadeInWhenVisible>
                  {/* headline */}
                  <Tooltip>
                    <TooltipTrigger>
                      <a href="https://github.com/DefaDanuarta" className="font-light text-4xl md:text-5xl  hover:underline hover:opacity-60 underline-offset-2 decoration-1 transition-all">
                        Experiences
                      </a>
                    </TooltipTrigger>
                    <TooltipPanel>
                      <p>See More in Github</p>
                    </TooltipPanel>
                  </Tooltip>
                </FadeInWhenVisible>
              </div>
              <div className='flex flex-2 text-start lg:text-end'>
                <FadeInWhenVisible>
                  {/* subtitle */}
                  <p className='font-thin opacity-70'>
                    During my time as an active student at Bina Nusantara University, I honed my soft skills by participating in several organizational activities.
                  </p>
                </FadeInWhenVisible>
              </div>
            </div>
            {/* experience */}
            <FadeInWhenVisible>
              <ExperienceSection
                experiences={[
                  {
                    job_title: "Website Administrator & Content Writter",
                    date: "Feb 2024 - Jan 2025",
                    organization: "Keluarga Mahasiswa Hindu (KMH)",
                    location: "Bina Nusantara - West Jakarta, Jakarta",
                    description:
                      "Coordinated a creative team across multiple campuses to design spiritual learning materials.",
                    skills: [
                      "Team Work",
                      "Leadership",
                      "Deadline Management",
                      "Canva",
                    ],
                  },
                  {
                    job_title: "Creative Team Coordinator",
                    date: "Feb 2024 - Jan 2025",
                    organization: "Keluarga Mahasiswa Hindu (KMH)",
                    location: "Bina Nusantara - Malang, East Java",
                    description:
                      "Coordinated a creative team across multiple campuses to design spiritual learning materials.Coordinated a creative team across multiple campuses to design spiritual learning materials.Coordinated a creative team across multiple campuses to design spiritual learning materials.",
                    skills: [
                      "Team Work",
                      "Leadership",
                      "Deadline Management",
                      "Canva",
                    ],
                  },
                  {
                    job_title: "Freshman Leader & Partner",
                    date: "Aug 2024 - Jul 2025",
                    organization: "BINUS First Year Program 2028",
                    location: "Bina Nusantara - Malang, East Java",
                    description:
                      "Led and mentored over 50+ new students to adapt to university life. Assisted in planning, guiding, and presenting academic orientation programs.",
                    skills: [
                      "Team Work",
                      "To-do List",
                      "Problem Solving",
                      "Critical Thinking",
                      "Public Speaking",
                      "Deadline Management",
                    ],
                  },
                  {
                    job_title: "Intern Trainee",
                    date: "Jan 2022 - Aug 2022",
                    organization: "Studio Kami Mandiri",
                    location: "Denpasar, Bali",
                    description:
                      "Led and mentored over 50+ new students to adapt to university life. Assisted in planning, guiding, and presenting academic orientation programs.",
                    skills: [
                      "Team Work",
                      "To-do List",
                      "Problem Solving",
                      "Critical Thinking",
                      "Public Speaking",
                      "Deadline Management",
                    ],
                  }
                ]}
              />
            </FadeInWhenVisible>
          </section>
          <ContactCard>

          </ContactCard>
          <Footer>

          </Footer>
        </motion.div>
      </main>
    </>
  );
}
