import React from 'react'
import ceoPic from '../../../public/cardPic5.jpg'
import Image from 'next/image'
import { useGlobal } from '@/context/GlobleContext'

const CEO = () => {
    const {theme} = useGlobal()
  return (
    <section className={`${theme === 'light' ? 'bg-[#eefbff] text-black':'bg-black text-white'}  w-full flex flex-col items-center my-10 py-10`}>
        <div className='w-[1200px]'>
            <div className='flex items-center gap-5 '>
                <div className='w-[40%]'>
                    <h2 className='text-[35px] font-semibold '>CEO <span className={` ${theme === 'dark' ? 'text-[#177faa]' : 'text-[#00874F]'}`}>Profile</span></h2>
                    <p className={` text-justify ${theme === 'dark' ? 'text-white' : 'text-gray-700'}  pt-4`}>The Founder & CEO of JKD Pakistan is Jehanzeb Khan Dhakki, a well-known development Specialist, educationist, entrepreneur, Traveler, researcher & motivational speaker. Jehanzeb Khan Dhakki was born in village Dhakki, Tehsil Tangi, District Charsadda Khyber Pakhtunkhwa Pakistan. He did his Matriculation from Government Higher Secondary School Dhakki with outstanding performance by securing 1st position in the entire province.</p>
                    <p className={`text-justify   ${theme === 'dark' ? 'text-white' : 'text-gray-700'} pt-4`}>He has done Intermediate (FSc) from Edwards College Peshawar and has been graduated (BSc) from Islamia College Peshawar. He has also done MS in development studies from IM Sciences Peshawar.</p>
                </div>
                <div className='w-[60%] h-[340px]'>
                    <Image src={ceoPic} alt='jkd' className=' rounded-2xl h-full w-full relative object-cover' />
                </div>
            </div>
            <p className={`text-justify ${theme === 'dark' ? 'text-white' : 'text-gray-700'} pt-4`}>He started his career as a teacher. He started a Primary School from one room in Peshawar, which further rose to JKD Pakistan. At the very young age, he started the mission to provide skill training, technical and vocational education, health & physical education, hospitality management, hotel management, sports for development, sustainable tourism and organizing uplift events.</p>
        </div>
    </section>
  )
}

export default CEO