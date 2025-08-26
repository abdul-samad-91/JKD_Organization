import Image from 'next/image';
import React from 'react'
import cardPic1 from "../../public/cardPic1.jpg"
import cardPic2 from "../../public/cardPic2.jpg"
import cardPic3 from "../../public/cardPic3.jpg"
import cardPic4 from "../../public/cardPic4.jpg"
import cardPic5 from "../../public/cardPic5.jpg"
import { useGlobal } from '@/context/GlobleContext';

const JkdPIcs = () => {
    const {theme} = useGlobal();
    const pics = [ cardPic3, cardPic1, cardPic2, cardPic4, cardPic5];

    return (        
    <section className={`flex justify-center ${theme === 'light' ? 'bg-[#eefbff]':'bg-black'} w-full my-10`}>
    <div className="flex items-center gap-4 h-[300px]  w-[1200px] relative">
        {pics.map((src, index) => {
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
  )
}

export default JkdPIcs