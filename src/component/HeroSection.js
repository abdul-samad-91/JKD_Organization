import React, { useEffect, useState } from 'react'
import jkdPhoto from "../../public/jkd-front-photo.jpg"
import { useGlobal } from '@/context/GlobleContext';
import cardPic1 from "../../public/cardPic1.jpg"
import cardPic2 from "../../public/cardPic2.jpg"
import cardPic3 from "../../public/cardPic3.jpg"
import cardPic4 from "../../public/cardPic4.jpg"
import cardPic5 from "../../public/cardPic5.jpg"
import Image from 'next/image';

const HeroSection = () => {
      const [currentIndex, setCurrentIndex] = useState(0);
      const {theme} = useGlobal();
      const [pics  , setPics] = useState([ cardPic1, cardPic2, cardPic4, cardPic5,cardPic2]);

      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % pics.length);
        }, 3000);
      
        return () => clearInterval(interval);
      }, [pics.length]);

      const goToSlide = (index) => {
        setCurrentIndex(index);
      };


  return (
    <section 
    className={`relative h-[400px] md:h-[460px] lg:h-[600px] flex  w-full  overflow-x-hidden `}>
    {
      pics.map((pic , index)=>
        <Image 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }} key={index}  src={pic} alt={pic.src} className='transition-all duration-500 ease-in-out  overflow-hidden min-w-[275px] min-h-[275px] lg:min-w-[1351px]  object-cover' />
      )
    } 

  
    {/* Indicators */}
    <div className="absolute z-40 bottom-5 left-1/2 -translate-x-1/2 flex gap-2 pt-7">
      {pics.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`h-4 w-4 rounded-full   ${index === currentIndex ?'bg-[#00874F] ring-2 ring-[#00874F] ' : 'bg-gray-400 '} `}
          aria-label={`Go to testimonial ${index + 1}`}
        ></button>
      ))}
    </div>

    </section>

  )
}     

export default HeroSection