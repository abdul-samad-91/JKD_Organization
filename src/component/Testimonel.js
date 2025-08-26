import Image from 'next/image'
import React from 'react'
import shaheen from '../../public/shaheenShahAfrid.png'
import { useGlobal } from '@/context/GlobleContext'

const Testimonel = () => {
  const {theme} = useGlobal()
  return (
    // {/* Testimonels */}
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
  )
}

export default Testimonel