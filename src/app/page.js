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
import KickstartCarrer from "@/component/KickstartCarrer";

export default function Home() {
  const {theme} = useGlobal();
  
  return (
    < div className={` h-screen w-full  flex flex-col justify-between `}>
      <Header />
      <div className={`${theme === 'light' ? 'bg-white text-black':'bg-black text-white'} flex flex-col items-center mt-10 w-full`}>
        <HeroSection />
        <WorkHistory />
        {/* <JkdPIcs /> */}
        {/* <About /> */}
        <div className={`${theme === 'light' ? 'bg-white':'bg-[#0b0b0b]'} w-full flex flex-col items-center mt-10 py-10`}>
          <div className='max-w-[950px] px-4'>
            <h2 className='text-[35px] text-center font-semibold '>Welcome To <span className={` ${theme === 'dark' ? 'text-[#177faa]' : 'text-[#00874F]'}`}>JKD Pakistan</span></h2>
            <p className={` text-center  ${theme === 'dark' ? '' : 'text-gray-700'} pt-4`} >JKD Pakistan is a social development and welfare organization working for a brighter and prosperous future of our nation. Our mission is to bring positive change through education, healthcare, youth empowerment, and community development. We strive to create equal opportunities for every individual — whether it’s access to quality education, better healthcare facilities, or employment opportunities. JKD Pakistan is committed to building a stronger, progressive, and united society.</p>
          </div>
        </div>
        <JKD />
        <div className={`${theme === 'light' ? 'bg-white':'bg-[#0b0b0b]'} w-full flex flex-col items-center mb-10 py-10`}>
          <div className='max-w-[950px] px-4'>
            <h2 className='text-[35px] text-center font-semibold '>Who We <span className={` ${theme === 'dark' ? 'text-[#177faa]' : 'text-[#00874F]'}`}>Are?</span></h2>
            <p className={` text-center  ${theme === 'dark' ? '' : 'text-gray-700'} pt-4`} >JKD Pakistan is a dynamic organization dedicated to empowering marginalized & under served communities through sustainable economic opportunities and social development. Through its diverse and innovative programs and services, JKD Pakistan bridges the gap for vulnerable generations, ensuring equal access to opportunities and cultivating resilient communities for a brighter future.</p>
          </div>
        </div>
        <KickstartCarrer />
        <Programs />
        <Partners />
        <Testimonel />
      </div>  
      <Footer />
    </div>
  );
}
