"use client"
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import { useGlobal } from '@/context/GlobleContext'
import React from 'react'
import institute from '../../../public/jkd-front-photo.jpg'
import Image from 'next/image'

const HowWeWork = () => {
    const {theme}  = useGlobal();
    const data =[{
        title:'01. Orientation & Understanding Needs',
        text:'We begin by meeting with new participants to understand their interests, goals, and strengths. Whether someone wants to play sports, build fitness, explore tourism, or join technical courses, we first identify what suits them best. This helps us guide them in the right direction from the very start.',
        image:institute
    },{
        title:'02. Personalized Planning',
        text:'Every individual is unique, so we design a personalized roadmap for their journey at JDK. Sports players get customized training plans, fitness members receive tailored workout programs, and students get the right course structure according to their level and goals.',
        image:institute
    },{
        title:'03. Training & Learning',
        text:'Our programs are designed to provide both knowledge and practice. Through professional coaching, expert-led classes, workshops, and interactive sessions, participants gain the skills they need. The focus is always on practical learning, not just theory.',
        image:institute
    },{
        title:'04. Practical Exposure',
        text:'We believe growth comes from real experiences. That’s why we organize sports tournaments, fitness challenges, tourism trips, food festivals, and technical projects. These activities give participants a chance to apply their learning in real-world scenarios.',
        image:institute
    },{
        title:'05. Guidance & Mentorship',
        text:'Our coaches, trainers, and instructors continuously mentor participants throughout their journey. This ensures they stay motivated, overcome challenges, and achieve personal as well as professional growth. We believe mentorship is the key to long-term success.',
        image:institute
    },{
        title:'06. Growth & Future Opportunities',
        text:'At JDK, we don’t stop at training — we help participants take the next step in life. From career opportunities in IT and technical fields, to sports recognition, to tourism exposure, to overall personal development, we prepare our community for a brighter future.',
        image:institute
    }]
  return (
        <div className={` h-screen w-full  flex flex-col justify-between `}>
            <Header />
            <div className={`${theme === 'light' ? 'bg-white text-black':'bg-black text-white'} flex flex-col items-center mt-20`}>
                <div className=' max-w-[1200px] w-full px-4'> 
                    <h1 className={`${theme === 'light' ? 'text-[#00874F]': 'text-[#177faa]'} text-start w-full text-[30px] md:text-[35px] lg:text-[39px] font-extrabold   `}>How We Work?</h1>
                    <div className='text-sm'>
                        <span className={`${theme === 'light' ? 'text-gray': 'text-white'}} cursor-pointer`} onClick={()=> router.push('/')}>Home - </span>
                        <span className={`${theme === 'light' ? 'text-[#00874F]': 'text-[#177faa] '} cursor-pointer`} >How We Work?</span>
                    </div>
                </div>
                {/* program page content */}
                <section
                className={`${theme === "light" ? "bg-[#eefbff]" : "bg-black"} w-full flex flex-col items-center my-10 py-10`}>
                
                <div className="relative  max-w-[1200px] px-4 lg:px-0 flex gap-10 justify-between">
                    <div className='hidden sm:block'>
                        <ul className='list-disc pl-5 lg:pl-0  flex flex-col gap-10 '>
                        {
                            data?.map((element , index) =>
                            <li key={index} className='cursor-pointer pl-5 lg:pl-10 text-[20px] hover:underline text-gray-400 font-bold z-40'  
                            onClick={() => {
                                document.getElementById(`index${index}`)?.scrollIntoView({ 
                                behavior: "smooth", 
                                block: "start" 
                                }); 
                            }}
                            >{element.title}</li>
                            ) 
                        }
                        </ul>
                        <div className='absolute left-[18px] lg:left-[-18px] top-0 w-[2px] h-[620px] lg:h-[380px] bg-gray-300 z-10'></div>
                    </div>
                    
                    <div className='lg:w-[70%] flex flex-col gap-5 lg:gap-10'>
                        {
                            data?.map((element , index) =>
                            <div id={`index${index}`} key={index}>
                                <Image className='w-full h-[250px] sm:h-[400px] rounded-2xl' src={element.image} alt="image" />
                                <h3  className="text-xl sm:text-2xl lg:text-[30px] font-semibold w-full pt-2">{element.title}</h3>
                                <p className='pt-4 text-sm sm:text-base'>{element.text}</p>
                            </div>
                            )
                        }
                    </div>
                </div>

                {/* <div>
                    <h2>Donation</h2>
                    <p> At JDK, we are committed to building a brighter future for youth and communities. Donations help us organize sports tournaments, provide scholarships for IT courses, fund gym and fitness programs, and sponsor tourism activities for cultural awareness.</p>
                </div> */}

                </section>
            </div>
            <Footer />
        </div>
  )
}

export default HowWeWork