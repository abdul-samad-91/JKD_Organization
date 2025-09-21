"use client"
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import { useGlobal } from "@/context/GlobleContext";
import React from "react";
import HeroSection from "@/component/HeroSection";
import Programs from "@/component/Programs";
import About from "@/component/About";
import JkdPIcs from "@/component/JkdPIcs";
import Partners from "@/component/Partners";
import WorkHistory from "@/component/WorkHistory";
import Testimonel from "@/component/Testimonel";
import JKD from "../component/JKD";

export default function Home() {
  const {theme} = useGlobal();
  
  return (
    < div className={` h-screen w-full  flex flex-col justify-between `}>
      <Header />
      <div className={`${theme === 'light' ? 'bg-white text-black':'bg-black text-white'} flex flex-col items-center mt-10`}>
        <HeroSection />
        {/* <JkdPIcs /> */}
        {/* <About /> */}
        <div className={`${theme === 'light' ? 'bg-[#eefbff]':'bg-[#0b0b0b]'} w-full flex flex-col items-center mt-10 py-10`}>
          <div className='max-w-[1200px] px-4'>
            <h2 className='text-[35px] font-semibold '>Who We <span className={` ${theme === 'dark' ? 'text-[#177faa]' : 'text-[#00874F]'}`}>Are?</span></h2>
            <p className={` text-justify  ${theme === 'dark' ? '' : 'text-gray-700'} pt-4`} >JKD Pakistan is a dynamic organization dedicated to empowering marginalized & under served communities through sustainable economic opportunities and social development. Through its diverse and innovative programs and services, JKD Pakistan bridges the gap for vulnerable generations, ensuring equal access to opportunities and cultivating resilient communities for a brighter future.</p>
          </div>
        </div>
        <JKD />
        <Programs />
        <Partners />
        <WorkHistory />
        <Testimonel />
      </div>  
      <Footer />
    </div>
  );
}
