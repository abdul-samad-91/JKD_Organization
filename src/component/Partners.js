import Image from 'next/image'
import React from 'react'
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
import { useGlobal } from '@/context/GlobleContext';

const Partners = () => {
    const {theme} = useGlobal()
    const partners = [partner1 ,partner2 ,partner3 ,partner4 ,partner5 ,partner6 ,partner7 ,partner8 ,partner9 ,partner10 ,partner11 ,partner12];

  return (        
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
  )
}

export default Partners