"use client";
import React from 'react';
import Marquee from '@/components/Marquee';
import LogoMarquee from '@/components/LogoMarquee';
import Navbar from '@/components/NavBar';
import { motion } from "framer-motion";
import FadeInWhenVisible from '@/components/FadeInWhenVisible';
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer";
import {
  Tooltip,
  TooltipTrigger,
  TooltipPanel,
} from '@/components/animate-ui/components/base/tooltip';
// import CurvedLoop from '@/components/CurvedLoop';

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
          <FadeInWhenVisible>
            <section className="flex flex-col mb-30 mt-48 mx-4 xl:mx-40 lg:mx-16 md:mx-8 md:flex-row justify-center">
              <div className="flex flex-col flex-3">
                <p className="text-wrap font-light text-start text-5xl mb-8 md:text-start lg:text-6xl xl:text-7xl">
                  Craft experience to connect <br /><span className="text-green-300">insight with inspiration.</span>
                </p>

                {/* Divider */}
                <div className="h-px w-full bg-neutral-700"></div>

                <p className='text-start text-pretty font-extralight text-neutral-300 mt-8 text-sm md:text-base'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, eum numquam iure enim necessitatibus molestias. Doloremque pariatur at esse repellat reiciendis veritatis commodi, sapiente quibusdam neque excepturi atque vero dolorum.
                </p>

                {/* Group of Links */}
                <div className="flex flex-row justify-start items-start mt-8">
                  <a href="#" className="uppercase decoration-1 font-thin me-3 opacity-60 hover:underline hover:opacity-100 underline-offset-2 transition-all text-sm md:text-base md:me-4">LinkedIn</a>
                  <a href="#" className="uppercase decoration-1 font-thin me-3 opacity-60 hover:underline hover:opacity-100 underline-offset-2 transition-all text-sm md:text-base md:me-4">Github</a>
                  <a href="#" className="uppercase decoration-1 font-thin opacity-60 hover:underline hover:opacity-100 underline-offset-2 transition-all text-sm md:text-base md:me-4">Email</a>
                </div>
              </div>
            </section>
          </FadeInWhenVisible>

          {/* sliding text */}
          <FadeInWhenVisible delay={0.5}>
            <section className='border-t border-b border-neutral-800'>
              <Marquee />
            </section>
          </FadeInWhenVisible>


          {/* Short About me Section  */}
          <FadeInWhenVisible delay={0.5}>
            <section className='flex flex-col my-32 mx-4 justify-center text-start xl:mx-40 lg:mx-16 md:mx-8 md:text-center'>
              {/* about me title with tool tip*/}
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
              {/* about me content */}
              <p className='flex mt-6 font-extralight opacity-70 text-sm md:text-xl md:px-12 lg:px-16'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, dolores nulla. Laboriosam fugiat magni nemo sapiente alias, delectus excepturi molestias error nam maxime? Voluptatum asperiores, nesciunt accusamus repudiandae magni eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis reprehenderit at nesciunt accusamus sunt dolores excepturi ducimus eaque dignissimos pariatur. Nemo ex perspiciatis, tenetur dolor beatae similique quod nobis eligendi!
              </p>
            </section>
          </FadeInWhenVisible>

          {/* Featured Project  */}
          <FadeInWhenVisible delay={0.5}>
            <section className='flex flex-col my-32 mx-4 xl:mx-40 lg:mx-16 md:mx-8 justify-center'>
              <div className=''>
                {/* headline */}
                <Tooltip>
                  <TooltipTrigger>
                    <a href="/about" className="font-light justify-center text-center text-5xl opacity-100 hover:underline hover:opacity-60 underline-offset-2 decoration-1 transition-all">
                      Glimpse Into My Journey
                    </a>
                  </TooltipTrigger>
                  <TooltipPanel>
                    <p>Take a Look</p>
                  </TooltipPanel>
                </Tooltip>

                {/* subtitle */}
                <p className=''>
                  Projects that reflect my passion and growth in the field. 
                </p>
              </div>
            </section>
          </FadeInWhenVisible>

        </motion.div>
      </main>
    </>
  );
}