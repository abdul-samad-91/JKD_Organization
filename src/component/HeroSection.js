import React from 'react'
import jkdPhoto from "../../public/jkd-front-photo.jpg"
import { useGlobal } from '@/context/GlobleContext';

const HeroSection = () => {
      const {theme} = useGlobal();

  return (
    <section 
    className={`relative h-[400px] md:h-[460px] lg:h-screen bg-cover bg-center`}
    >
    <div 
        className="absolute inset-0 bg-cover bg-center " 
        style={{ backgroundImage: `url(${jkdPhoto.src})` ,  backgroundPosition: "280px 50px" }} 
    />
    <div className={`relative z-10 w-full h-full text-start flex ${theme === 'light' ? 'text-black bg-white/5 ' : ' text-white bg-black/50'}  flex-col  justify-center px-6 lg:pl-20 `}>
        <h1 className="text-[30px] md:text-[34px] lg:text-[50px] lg:font-extrabold font-bold sm:w-[70%] md:w-[65%] lg-w-full " >Welcome To JKD Pakistan</h1>
        <p className=" text-[16px] md:text-[17px] lg:text-[25px] lg:font-semibold sm:w-[60%] md:w-[55%] lg:w-[46%] mt-5  " >JKD Pakistan is a social development and welfare organization dedicated to uplifting communities through education, healthcare, youth empowerment, and community development.</p>
        <button className={`text-sm md:text-[16px] lg:text-[19px] ${theme === 'light' ? 'bg-[#00874F]': 'bg-[#177faa]'} text-white w-[59%] sm:w-[30%] md:w-[25%] lg:w-[15%] mt-2 rounded p-2 lg:p-4 lg:px-7 sm:px-2 `}>Let&apos;s Discuss</button>
    </div>
    </section>
  )
}

export default HeroSection