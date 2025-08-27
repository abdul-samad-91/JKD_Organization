"use client"
import React from 'react'
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import { useGlobal } from '@/context/GlobleContext'
import { useRouter } from 'next/navigation'
import JKD from './JKD'


const AboutUs = () => {
    const {theme} = useGlobal();
    const router = useRouter();

    return (
    < div className={` h-screen w-full  flex flex-col justify-between `}>
      <Header />
      <div className={`${theme === 'light' ? 'bg-white text-black':'bg-black text-white'} flex flex-col items-center mt-20`}>
        <div className=' w-full lg:w-[1200px]'> 
            <h1 className={`${theme === 'light' ? 'text-[#00874F]': 'text-[#177faa]'} text-start w-full lg:text-[39px] lg:font-extrabold font-bold  `}>About Us</h1>
            <div className='text-sm'>
                <span className={`${theme === 'light' ? 'text-gray-800': 'text-white'}} cursor-pointer`} onClick={()=> router.push('/')}>Home - </span>
                <span className={`${theme === 'light' ? 'text-[#00874F]': 'text-[#177faa] '} cursor-pointer`} >About Us</span>
            </div>
        </div>
        <div className='w-full'>
          <JKD />
        </div>
      </div>  
      <Footer />
    </div>
  )
}

export default AboutUs