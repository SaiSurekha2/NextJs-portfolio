"use client";
import React from 'react'
import Image from "next/image";
import {TypeAnimation} from 'react-type-animation';
import {motion} from "framer-motion";
const HeroSection = () => {
  return (
     <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
    <h1 className="text-white mb-4 text-4xl sm:text-5l lg:text-6xl font-extrabold">
       <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600"> Hello I'm{" "} </span><br/>
    <TypeAnimation
      sequence={[
        'Surekha',
        1000, 
        'Student',
        1000,
        'Web Developer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
</h1>
    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
    I'm someone who values self-improvement and personal growth. I'm open-minded and curious,
     always seeking to learn new things and expand your understanding of the world.
    </p>
    <div>
        <button className="px-6 py-3  w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black">Hire me</button>
        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white mt-3">Download cv</button>
    </div>
    </div>
    <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px]">
            <Image
                src="/images/hero-image (1).png"
                alt="hero image"
                className="absolute transform -translate-x-1/6 -translate-y-1/6 top-1/6"
                width={300}
                height={300}
                />
            </div>
        </div>
    </div>
  </section>
    );

  
};

export default HeroSection