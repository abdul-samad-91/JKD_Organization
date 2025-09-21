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
    className={`relative h-[400px] md:h-[460px] lg:h-screen flex overflow-x-hidden`}
    >
      {/* {
        pics.map((pic , index) =>
        <div
          key={index} 
          className="
            absolute inset-0 
            bg-no-repeat bg-cover bg-center 
            z-50
            sm:bg-[position:220px_40px] md:bg-[position:300px_0px] lg:bg-[position:350px_0px]
          "
          style={
            { 
              backgroundImage: `url(${pic.src})` ,  
            }
          } 
        />)
      } */}
    <div className={`z-30 sm:[clip-path:polygon(0_0,70%_0,50%_100%,0%_100%)] md:[clip-path:polygon(0_0,75%_0,45%_100%,0%_100%)] lg:[clip-path:polygon(0_0,70%_0,30%_100%,0%_100%)] relative  w-full h-full text-start flex ${theme === 'light' ? 'text-black  sm:bg-[#eefbff] ' : ' text-white bg-[#0b0b0b]'} overflow-visible  flex-col  justify-center px-6 lg:pl-20 `}>
        <h1 className="text-[30px] overflow-visible md:text-[34px] lg:text-[50px] lg:font-extrabold font-bold sm:w-[70%] md:w-[65%] lg-w-full " >Welcome To <span className={` ${theme === 'dark' ? 'text-[#177faa]' : 'text-[#00874F]'}`}>JKD Pakistan</span></h1>
        <p className=" text-[16px] md:text-[17px] lg:text-[20px] lg:font-semibold sm:w-[60%] md:w-[50%] lg:w-[40%] mt-5  " >JKD Pakistan is a social development and welfare organization working for a brighter and prosperous future of our nation. Our mission is to bring positive change through education, healthcare, youth empowerment, and community development. We strive to create equal opportunities for every individual — whether it’s access to quality education, better healthcare facilities, or employment opportunities. JKD Pakistan is committed to building a stronger, progressive, and united society.</p>
        {/* <button className={`text-sm md:text-[16px] lg:text-[19px] ${theme === 'light' ? 'bg-[#00874F]': 'bg-[#177faa]'} text-white w-[59%] sm:w-[30%] md:w-[25%] lg:w-[15%] mt-2 rounded p-2 lg:p-2 lg:px-6 sm:px-2 `}>Let&apos;s Discuss</button> */}
    </div>
    <div className='absolute left-100 flex w-[4775px] n transition-all duration-500 ease-in-out'
     style={{ transform: `translateX(-${currentIndex * 20}%)` }}>
    {
      pics.map((pic , index)=>
      <div key={index} className=' w-[955px]  h-[400px] md:h-[460px]  lg:h-screen '>
        <Image  src={pic} alt={pic.src} className='w-full h-full object-cover object-center' />
    </div>
      )
    }
    </div>
  
    {/* Indicators */}
    <div className="absolute z-40 bottom-5 left-1/2 -translate-x-1/2 flex gap-2 pt-7">
      {pics.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`h-4 w-4 rounded-full   ${index === currentIndex ? theme === 'light'?'bg-white  ring-2 ring-white ' : 'bg-black  ring-2 ring-black ' :'bg-gray-400 '} `}
          aria-label={`Go to testimonial ${index + 1}`}
        ></button>
      ))}
    </div>

    </section>

//     <section className="relative h-[400px] md:h-[460px] lg:h-screen bg-cover bg-center">
//   {/* Background Image */}
//   <div
//     className="absolute inset-0 bg-cover bg-center z-10"
//     style={{
//       backgroundImage: `url(${jkdPhoto.src})`,
//       backgroundPosition: "center", // auto-center on all screens
//     }}
//   />

//   {/* Clip Path Container */}
//   <div
//     className={`relative z-20 w-full h-full flex flex-col justify-center px-6 md:px-10 lg:pl-20 text-start
//       ${theme === "light" ? "text-black bg-[#eefbff]" : "text-white bg-black/50"}
//       [clip-path:polygon(0_0,100%_0,70%_100%,0%_100%)]
//       sm:[clip-path:polygon(0_0,80%_0,60%_100%,0%_100%)]
//       md:[clip-path:polygon(0_0,75%_0,45%_100%,0%_100%)]
//       lg:[clip-path:polygon(0_0,70%_0,30%_100%,0%_100%)]
//     `}
//   >
//     {/* Title */}
//     <h1 className="text-[26px] sm:text-[30px] md:text-[34px] lg:text-[50px] font-bold lg:font-extrabold sm:w-[80%] md:w-[65%] lg:w-full leading-snug">
//       Welcome To JKD Pakistan
//     </h1>

//     {/* Subtitle */}
//     <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[25px] lg:font-semibold sm:w-[80%] md:w-[55%] lg:w-[46%] mt-4">
//       JKD Pakistan is a social development and welfare organization dedicated to
//       uplifting communities through education, healthcare, youth empowerment,
//       and community development.
//     </p>

//     {/* Button */}
//     <button
//       className={`mt-5 rounded p-2 md:p-3 lg:px-6 text-white font-medium
//         text-[14px] sm:text-[15px] md:text-[16px] lg:text-[19px]
//         w-[70%] sm:w-[50%] md:w-[35%] lg:w-[20%]
//         ${theme === "light" ? "bg-[#00874F]" : "bg-[#177faa]"}
//       `}
//     >
//       Let&apos;s Discuss
//     </button>
//   </div>
// </section>

  )
}

export default HeroSection