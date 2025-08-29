'use client'
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import { useGlobal } from '@/context/GlobleContext'
import { useRouter } from 'next/navigation'
import React from 'react'
import program1 from "../../../public/progaram-1.png";
import program2 from "../../../public/progaram-2.png";
import program3 from "../../../public/progaram-3.png";
import program4 from "../../../public/progaram-4.png";
import program5 from "../../../public/progaram-5.png";
import program6 from "../../../public/progaram-6.png";
import program7 from "../../../public/progaram-7.png";
import program8 from "../../../public/progaram-8.png";
import program9 from "../../../public/progaram-9.png";
import Image from 'next/image'


const allprograms = [
  {
    title: "JKD TVETA",
    description:
      "Providing quality education that nurtures creativity, leadership, and knowledge for the future.",
    pIcon: program2,
  },
  {
    title: "JKD Tech-Park",
    description: "A hub for innovation, startups, and digital entrepreneurship",
    pIcon: program3,
  },
  {
    title: "JKD Sports-Spark",
    description:
      "Inspiring youth to excel in sports, teamwork, and healthy lifestyles.",
    pIcon: program4,
  },
  {
    title: "JKD Fitness-Zone",
    description:
      "Promoting wellness through modern fitness facilities and health programs.",
    pIcon: program5,
  },
  {
    title: "JKD Green-Tourism",
    description:
      "Encouraging eco-friendly tourism and preserving the natural beauty of our region.",
    pIcon: program6,
  },
  {
    title: "JKD Parlour",
    description:
      "Providing grooming and beauty services while empowering women entrepreneurs.",
    pIcon: program7,
  },
  {
    title: "JKD Boutique",
    description:
      "Showcasing fashion and culture through unique designs and creative clothing.",
    pIcon: program8,
  },
  {
    title: "JKD Uplift-Events",
    description:
      "Celebrating food culture with a variety of delicious and innovative cuisines.",
    pIcon: program9,
  },
];

const Programs = () => {
    const router = useRouter();
    const {theme} = useGlobal();
  return (
    < div className={` h-screen w-full  flex flex-col justify-between `}>
      <Header />
      <div className={`${theme === 'light' ? 'bg-white text-black':'bg-black text-white'} flex flex-col items-center mt-20`}>
        <div className=' w-full lg:w-[1200px]'> 
            <h1 className={`${theme === 'light' ? 'text-[#00874F]': 'text-[#177faa]'} text-start w-full lg:text-[39px] lg:font-extrabold font-bold  `}>Programs</h1>
            <div className='text-sm'>
                <span className={`${theme === 'light' ? 'text-gray-800': 'text-white'}} cursor-pointer`} onClick={()=> router.push('/')}>Home - </span>
                <span className={`${theme === 'light' ? 'text-[#00874F]': 'text-[#177faa] '} cursor-pointer`} >Programs</span>
            </div>
        </div>
        {/* program page content */}
        <section className={`${theme === 'light' ? 'bg-[#eefbff]':'bg-black'} w-full flex flex-col items-center my-10 py-10`}>
          <div className='w-[1200px] flex gap-5 flex-wrap justify-start'>
          {
            allprograms?.map((program , index)=>
              <div key={index} className={`p-4 ${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} flex flex-col justify-between  h-[300px] relative  w-[32%] rounded`}>
                <div>
                  <Image src={program.pIcon} className='relative top-0 w-[200px] object-cover h-[100px]' alt='icon' />
                  <div className='  w-full '>
                    <h3 className='text-[30px] font-semibold w-full'>{program.title}</h3>
                    <p>{program.description}</p>
                  </div>
                </div>
                <button className={` w-[100px] px-4 py-2 rounded ${theme === 'light' ? 'bg-[#00874F] hover:text-white hover:bg-black': 'hover:text-black hover:bg-white bg-[#177faa]'} transition cursor-pointer text-white text-sm md:text-[14px] lg:text-base`}>
                  Explore
                </button>
              </div>
            )
          }
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Programs