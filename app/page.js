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
import ScrollVelocity from '@/components/ScrollVelocity';

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

          {/* landing page */}
          <section id='home' className="flex flex-col mb-30 mt-64 mx-4 xl:mx-40 lg:mx-16 md:mx-8 md:flex-row justify-center">
            <div className="flex flex-col flex-3">
              <FadeInWhenVisible>
                <p className="text-wrap font-light text-start text-5xl mb-8 lg:text-6xl xl:text-7xl">
                  Craft experience to connect <br /><span className="text-[#C68F6B]">insight with inspiration.</span>
                </p>
                {/* Divider */}
                <div className="h-px w-full bg-neutral-700"></div>
              </FadeInWhenVisible>
              <FadeInWhenVisible>
                <p className='text-start text-pretty font-extralight text-neutral-300 mt-8 text-sm md:text-base'>
                  I combine design thinking with cutting-edge technology to craft digital experiences that are not only visually engaging and user-friendly, but also thoughtfully designed to leverage data insights, drive meaningful interactions, and deliver measurable impact for users and businesses alike.
                </p>
              </FadeInWhenVisible>

              {/* Group of Links */}
              <div className="flex flex-row justify-start items-start mt-8">
                <FadeInWhenVisible>
                  <a href="https://www.linkedin.com/in/defa-danuarta/" target='_blank' className="uppercase decoration-1 font-thin me-3 opacity-60 hover:underline hover:opacity-100 underline-offset-2 transition-all text-sm md:text-base md:me-4">LinkedIn</a>
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                  <a href="https://github.com/DefaDanuarta" target='_blank' className="uppercase decoration-1 font-thin me-3 opacity-60 hover:underline hover:opacity-100 underline-offset-2 transition-all text-sm md:text-base md:me-4">Github</a>
                </FadeInWhenVisible>
                <FadeInWhenVisible>
                  <a href="mailto:defa.danuarta@email.com?subject=Let's%20Collaborate!&body=Hi%20Defa,%0D%0A%0D%0AI’m%20interested%20in%20working%20with%20you%20on%20a%20project.%0D%0A%0D%0ARegards,%0D%0A[Your%20Name]" className="uppercase decoration-1 font-thin opacity-60 hover:underline hover:opacity-100 underline-offset-2 transition-all text-sm md:text-base md:me-4">Email</a>
                </FadeInWhenVisible>
              </div>
            </div>
          </section>

          {/* sliding text */}
          <FadeInWhenVisible>
            <div className='relative overflow-hidden w-full py-4'>
              <ScrollVelocity
                texts={['DATA   •   DESIGNS   •   DATA STORYTELLING   •   VISUALIZATION   •   UI/UX   •   ']}
                className="custom-scroll-text text-neutral-700"
                velocity={80}
              />
              {/* Fade effect kiri */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-neutral-900">

              </div>

              {/* Fade effect kanan */}
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-neutral-900"></div>
            </div>
          </FadeInWhenVisible>

          {/* Short About me Section  */}
          <section className='flex flex-col my-32 mx-4 justify-center text-start xl:mx-40 lg:mx-16 md:mx-8 md:text-center'>
            {/* about me title with tool tip*/}
            <FadeInWhenVisible>
              <div className=''>
                <Tooltip>
                  <TooltipTrigger>
                    <a href="/about" className="font-light justify-center text-center text-5xl opacity-100 hover:underline hover:opacity-60 underline-offset-2 decoration-1 transition-all">
                      About Me
                    </a>
                  </TooltipTrigger>
                  <TooltipPanel>
                    <p>Get To Know Me :D</p>
                  </TooltipPanel>
                </Tooltip>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              {/* about me content */}
              <p className='flex mt-6 font-extralight opacity-70 text-sm md:text-xl md:px-12 lg:px-16'>
                Hi, I’m Defa Danuarta, an undergraduate student at Bina Nusantara University with a passion for Data Science, Analytics, and Database Architecture. I enjoy turning complex data into clear, actionable insights using R, Python, and SQL, while also crafting intuitive and engaging interfaces and visualizations. Strong collaboration and communication skills help me bridge the gap between technical solutions and user-centered design, delivering impactful and visually compelling experiences.
              </p>
            </FadeInWhenVisible>
          </section>

          {/* Featured Project  */}
          <section id='project' className='flex flex-col h-auto mt-24 mb-8 mx-4 xl:mx-40 lg:mx-16 md:mx-8'>
            <div className=''>
              <FadeInWhenVisible>
                {/* headline */}
                <Tooltip>
                  <TooltipTrigger>
                    <a href="https://github.com/DefaDanuarta" className="font-light text-3xl hover:underline hover:opacity-60 underline-offset-2 decoration-1 transition-all sm:text-5xl">
                      Featured Projects
                    </a>
                  </TooltipTrigger>
                  <TooltipPanel>
                    <p>See More in Github</p>
                  </TooltipPanel>
                </Tooltip>
                {/* subtitle */}
                <p className='flex mt-2 font-thin opacity-70'>
                  Projects that reflect my passion and growth in the field.
                </p>
              </FadeInWhenVisible>
            </div>

            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
              <FadeInWhenVisible delay={0.2}>
                <ProjectCardInfo
                  title="Application of Fuzzy Logic Mamdani to Optimize Traffic Light Timing at Intersections "
                  year="2025"
                  category="Publications"
                  description="Website portfolio pribadi yang menampilkan project, eksperimen, dan hasil eksplorasi desain berbasis Next.js & Tailwind CSS."
                  tools={["Python", "Fuzzy", "SUMO"]}
                  links=''
                  image="/assets/img/research/Presenter-Certificate.png"
                />
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.4}>
                <ProjectCardInfo
                  title="Survey for Canteen Satisfaction Analysis"
                  year="2025"
                  category="Group Based Project"
                  description="Website portfolio pribadi yang menampilkan project, eksperimen, dan hasil eksplorasi desain berbasis Next.js & Tailwind CSS."
                  tools={["R", "Python", "Ms. Form"]}
                  links=''
                  image="/assets/img/canteen-satis/Code-Preview.png"
                />
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.6}>
                <ProjectCardInfo
                  title="Indonesia HDI 2024: Data Mining and Visualization"
                  year="2025"
                  category="Group Based Project"
                  description="Website portfolio pribadi yang menampilkan project, eksperimen, dan hasil eksplorasi desain berbasis Next.js & Tailwind CSS."
                  tools={["R", "Figma", "InfoGraph Design"]}
                  links=''
                  image="/assets/img/hdi/code_preview.png"
                />
              </FadeInWhenVisible>
            </section>

            {/* button */}
            <div className='flex flex-col justify-center items-center text-center mt-4'>
              <FadeInWhenVisible>
                <p className='font-light text-sm text-neutral-500 py-4'>If you want to see more of my projects, my GitHub is open to public. <br /> Feel free to check it out</p>
              </FadeInWhenVisible>
              <FadeInWhenVisible>
                {/* incase i want to showcase some of my design project in UI/UX */}
                <div className='flex flex-row gap-4'>
                  <a href="https://github.com/DefaDanuarta" target='_blank'>
                    <button className='px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-all text-sm font-extralight'>
                      Code Projects <i className="ms-2 fa-brands fa-github"></i>
                    </button>
                  </a>
                  {/* <a href="https://github.com/DefaDanuarta">
                  <button className='px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-all text-sm font-extralight'>
                    Design Projects <i className="ms-2 fa-brands fa-dribbble"></i>
                  </button>
                </a> */}
                </div>
              </FadeInWhenVisible>
            </div>
          </section>

          {/* collab */}
          <section id='contact-me'>
            <FadeInWhenVisible>
              <ContactCard></ContactCard>
            </FadeInWhenVisible>
          </section>
          {/* collab */}
          <Footer></Footer>
        </motion.div>
      </main>
    </>
  );
}