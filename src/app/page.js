"use client"
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Image from "next/image";
import { useGlobal } from "@/context/GlobleContext";
import partner1 from '../../public/partner-1.png';
import partner2 from '../../public/partner-2.png';
import partner3 from '../../public/partner-3.png';
import partner4 from '../../public/partner-4.png';
import partner5 from '../../public/partner-5.png';
import partner6 from '../../public/partner-6.png';
import partner7 from '../../public/partner-7.png';
import partner8 from '../../public/partner-8.png';
import partner9 from '../../public/partner-9.png';
import partner10 from '../../public/partner-10.png';
import partner11 from '../../public/partner-11.png';
import partner12 from '../../public/partner-12.png';
import shaheen from '../../public/shaheenShahAfrid.png'
import { FaHandshake, FaRegSmile, FaAward, FaUserFriends } from 'react-icons/fa';
import WorkDetailItem from "@/component/WorkDetailItem";
import React from "react";
import HeroSection from "@/component/HeroSection";
import Programs from "@/component/Programs";
import About from "@/component/About";
import cardPic1 from "../../public/cardPic1.jpg"
import cardPic2 from "../../public/cardPic2.jpg"
import cardPic3 from "../../public/cardPic3.jpg"
import cardPic4 from "../../public/cardPic4.jpg"
import cardPic5 from "../../public/cardPic5.jpg"

const partners = [partner1 ,partner2 ,partner3 ,partner4 ,partner5 ,partner6 ,partner7 ,partner8 ,partner9 ,partner10 ,partner11 ,partner12];
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

        {/* hero section */}
        <HeroSection />
        <section className={`flex justify-center ${theme === 'light' ? 'bg-[#eefbff]':'bg-black'} w-full my-10`}>
          <div className="flex items-center gap-4 h-[300px]  w-[1200px] relative">
            {[ cardPic3, cardPic1, cardPic2, cardPic4, cardPic5].map((src, index) => {
              const left = `-${index * 205}px`; 
              // const top = index === 2 ? "0px" : index % 2 === 0 ? "32px" : "16px"; // middle card taller
              const height = index === 2 ? "230px" : index % 2 === 0 ? "170px" : "200px";
              const width = "390px";
              const zIndex = index === 2 ? 30 : index % 2 === 0 ? 10 : 20;

              return (
                <div
                  key={index}
                  className={`relative flex-shrink-0 rounded-xl overflow-hidden shadow-md`}
                  style={{
                    left,
                    // top,
                    width,
                    height,
                    zIndex,
                  }}
                >
                  <Image
                    src={src}
                    alt={`cardpic-${index}`}
                    fill
                    className="object-cover"
                  />
                </div>
              );
            })}
          </div>
        </section>

        {/* about jkd */}
        <About />

        {/* programs  */}
        <Programs />

        {/* Partners  */}
        <section className={`my-10 flex w-full flex-col items-center py-15  ${theme === 'light' ? 'text-black bg-[#eefbff] ' : 'text-white bg-black'} `}>
          {/* <h1 className={`text-[39px] font-semibold w-[1200px]   `}>Partners</h1> */}
          <div className=" overflow-x-hidden w-[1351px] ">
            <div className="flex animate-reverse-scroll gap-10">
              {partners?.map((partner, index) => (
                <div
                  key={index}
                  className="program-card rounded-2xl text-center  min-w-[150px] "
                >
                  <Image
                    src={partner}
                    className="h-full w-auto object-contain mx-auto"
                    alt={`partner${index}`}
                  />
                </div>
              ))}
              {partners?.map((partner, index) => (
                <div
                  key={index}
                  className="program-card rounded-2xl text-center  min-w-[150px] "
                >
                  <Image
                    src={partner}
                    className="h-full w-auto object-contain mx-auto"
                    alt={`partner${index}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

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
