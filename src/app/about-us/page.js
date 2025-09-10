"use client";
import React from 'react';
import Footer from '@/component/Footer';
import Header from '@/component/Header';
import { useGlobal } from '@/context/GlobleContext';
import { useRouter } from 'next/navigation';
import JKD from './JKD';
import CEO from './CEO';
import WhoWeAre from './WhatWeValue';
import WhyChooseUs from './WhyChooseUs';
import Carrer from './Carrer';

const AboutUs = () => {
    const {theme} = useGlobal();
    const router = useRouter();

    return (
    < div className={` h-screen w-full  flex flex-col justify-between `}>
      <Header />
      <div className={`${theme === 'light' ? 'bg-white text-black':'bg-black text-white'} flex flex-col items-center mt-20`}>
        <div className=' w-full lg:max-w-[1200px] px-4'> 
            <h1 className={`${theme === 'light' ? 'text-[#00874F]': 'text-[#177faa]'} text-start w-full text-[30px] md:text-[35px] lg:text-[39px] font-extrabold   `}>About Us</h1>
            <div className='text-sm'>
                <span className={`${theme === 'light' ? 'text-gray': 'text-white'}} cursor-pointer`} onClick={()=> router.push('/')}>Home - </span>
                <span className={`${theme === 'light' ? 'text-[#00874F]': 'text-[#177faa] '} cursor-pointer`} >About Us</span>
            </div>
        </div>
        <div className='w-full'>
          <JKD />
          <CEO />
          <div className={`${theme === 'light' ? 'bg-[#eefbff]':'bg-black'} w-full flex flex-col items-center my-10 py-10`}>
            <div className='max-w-[1200px] px-4'>
              <h2 className='text-[35px] font-semibold '>Who We <span className={` ${theme === 'dark' ? 'text-[#177faa]' : 'text-[#00874F]'}`}>Are?</span></h2>
              <p className={` text-justify  ${theme === 'dark' ? 'text-white' : 'text-gray-700'} pt-4`} >JKD Pakistan is a dynamic organization dedicated to empowering marginalized & under served communities through sustainable economic opportunities and social development. Through its diverse and innovative programs and services, JKD Pakistan bridges the gap for vulnerable generations, ensuring equal access to opportunities and cultivating resilient communities for a brighter future.</p>
            </div>
          </div>
          <WhoWeAre />
          <WhyChooseUs />
          <div className={`${theme === 'light' ? 'bg-[#eefbff]':'bg-black'} w-full flex flex-col items-center my-10 py-10`}>
            <div className='max-w-[1200px] mx-4'> 
              <h2 className='text-[35px] font-semibold '>Meet our <span className={` ${theme === 'dark' ? 'text-[#177faa]' : 'text-[#00874F]'}`}>Team</span></h2>
              <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-700'} text-justify pt-4`} >At JKD Pakistan, we are proud to have some of the best trainers and instructors who are not only experts in their fields but also passionate about teaching. They focus on guiding students with care, making learning engaging and practical. With their mentorship, students don’t just gain knowledge they develop the skills and confidence needed to succeed in real life.</p>
            </div>
          </div>
        </div>
        <Carrer /> 
      </div>  
      <Footer />
    </div>
  )
}

export default AboutUs