"use client";
import React from 'react';
import Marquee from '@/components/Marquee';
import LogoMarquee from '@/components/LogoMarquee';
import Navbar from '@/components/NavBar';
import { motion } from "framer-motion";
import FadeInWhenVisible from '@/components/FadeInWhenVisible';
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer";

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
          <section className="flex flex-col my-32 mx-4 xl:mx-40 lg:mx-16 md:mx-8 md:flex-row justify-center">

            {/* hero image */}
            <div className="flex-2 w-full md:w-2xs lg:w-2xs">
              <img src="/assets/img/hero-no-shape.svg" alt="" className="rounded-full w-full overflow-auto h-full" />
            </div>

            {/* headline */}
            <div className="flex flex-col flex-3 justify-start text-start my-12 xl:mx-12 lg:mx-8 md:my-auto md:mx-4">
              <p className="text-wrap font-thin text-3xl lg:text-4xl xl:text-5xl">Crafting <span className="text-green-300 font-light">insight-driven reports</span> that inspire action and clarity.</p>
              <p className="text-wrap font-extralight mt-4 sm:text-sm md:text-base opacity-80">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quod fugit recusandae dolore mollitia dicta labore possimus quibusdam placeat nulla. Architecto reprehenderit accusamus, provident repellat at nisi ad aperiam adipisci?</p>

              {/* button to my cv */}
              <a href="">
                <button className="mt-4 px-6 py-2 border border-green-300 text-green-300 font-light rounded-full hover:bg-green-300 hover:text-black hover:underline underline-offset-2 transition-all duration-400">My Resume</button>
              </a>
            </div>
          </section>

          {/* about */}
          <section className="flex flex-col mx-4 xl:mx-40 lg:mx-16 md:mx-8 md:flex-row">
          </section>
        </motion.div>
      </main>
    </>
  );
}
