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


export default function Home() {
  const {theme} = useGlobal();
  
  return (
    < div className={` h-screen w-full  flex flex-col justify-between `}>
      <Header />
      <div className={`${theme === 'light' ? 'bg-white':'bg-black'} flex flex-col items-center mt-10`}>
        <HeroSection />
        <JkdPIcs />
        <About />
        <Programs />
        <Partners />
        <WorkHistory />
        <Testimonel />
      </div>  
      <Footer />
    </div>
  );
}
