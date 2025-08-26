"use client"
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Image from "next/image";
import { useGlobal } from "@/context/GlobleContext";
import shaheen from '../../public/shaheenShahAfrid.png'
import { FaHandshake, FaRegSmile, FaAward, FaUserFriends } from 'react-icons/fa';
import WorkDetailItem from "@/component/WorkDetailItem";
import React from "react";
import HeroSection from "@/component/HeroSection";
import Programs from "@/component/Programs";
import About from "@/component/About";
import JkdPIcs from "@/component/JkdPIcs";
import Partners from "@/component/Partners";

const workDetails=[
  {
    icon:FaHandshake , 
    numbers: 24,
    titel: 'Projects Done'
  },
  {
    icon:FaRegSmile , 
    numbers: 25000,
    titel: 'Customer Happy'
  },
  {
    icon:FaAward , 
    numbers: 10,
    titel: 'Guarantee Services'
  },
  {
    icon:FaUserFriends , 
    numbers: 21,
    titel: 'Team Experts'
  },
 ];
export default function Home() {
  const {theme} = useGlobal();
  
  return (
    < div className={`h-screen w-full  flex flex-col justify-between `}>
      <Header />
      <div className="flex flex-col items-center ">
        <HeroSection />
        <JkdPIcs />
        <About />
        <Programs />
        <Partners />

        {/* Work History */}
        <section className="py-15 flex justify-center bg-[#eefbff] w-full">
          <div className="flex gap-10 justify-between text-center w-[1200px]">
            {workDetails?.map((detail, index) => (
              <React.Fragment key={index}>
                <WorkDetailItem detail={detail} />
                {workDetails.length - 1 !== index && (
                  <div className={`${theme === 'light' ? 'bg-[#00874F]' :'bg-white'} rounded-full h-full w-[7px]`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>
          
        {/* Testimonels */}
        <section className={`w-full my-10 ${theme === 'light' ? 'text-black bg-[#eefbff]' : 'text-white bg-black'} `}>
          <div className=" h-[500px] flex flex-col justify-center items-center ">
            <Image src={shaheen} className="rounded-full object-contian relative w-[150px] h-[150px]" alt="shaheen" />
            <p className="relative w-[50%] text-center  py-5
              before:content-['“'] before:absolute before:-left-5 before:top-2 before:text-4xl before:text-gray-400 
              after:content-['”'] after:absolute after:-right-5 after:bottom-2 after:text-4xl after:text-gray-400">
              JKD Pakistan&apos;s event planning and execution surpassed expectations. Jehanzeb Khan Dhakki and his team are simply the best in the business.
            </p>
            <h3 className="text-[22px] font-semibold text-[#00874F]">Shaheen Shah Afridi</h3>
            <h4 className="pt-1 text-[14px] text-gray-800">Pakistn National T20I Team Captiain</h4>
            <div className="pt-7 flex gap-2">
              <div className="h-5 w-5 rounded-full   border-2 bg-[#00874F]"></div >
              <div className="h-5 w-5 rounded-full  border-2 "> </div>
              <div className="h-5 w-5 rounded-full  border-2 "> </div>
            </div>
          </div>
        </section>
      </div>  
      <Footer />
    </div>
  );
}
