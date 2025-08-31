import React from 'react'
import jkdPhoto from "../../public/jkd-front-photo.jpg"
import { useGlobal } from '@/context/GlobleContext';

const HeroSection = () => {
      const {theme} = useGlobal();

  return (
    <section 
    className={`relative h-[400px] md:h-[460px] lg:h-screen bg-cover bg-center`}
    >
    <div 
        className="absolute inset-0 bg-cover z-20 sm:bg-[position:220px_40px] md:bg-[position:300px_0px] lg:bg-[position:350px_0px]" 
        style={
          { 
            backgroundImage: `url(${jkdPhoto.src})` ,  
            // backgroundPosition: "350px 0px" 
          }
      } 
    />
    <div className={`sm:[clip-path:polygon(0_0,70%_0,50%_100%,0%_100%)] md:[clip-path:polygon(0_0,75%_0,45%_100%,0%_100%)] lg:[clip-path:polygon(0_0,70%_0,30%_100%,0%_100%)] relative z-30 w-full h-full text-start flex ${theme === 'light' ? 'text-black  sm:bg-[#eefbff] ' : ' text-white bg-black/50'} overflow-visible  flex-col  justify-center px-6 lg:pl-20 `}>
        <h1 className="text-[30px] overflow-visible md:text-[34px] lg:text-[50px] lg:font-extrabold font-bold sm:w-[70%] md:w-[65%] lg-w-full " >Welcome To JKD Pakistan</h1>
        <p className=" text-[16px] md:text-[17px] lg:text-[25px] lg:font-semibold sm:w-[60%] md:w-[55%] lg:w-[46%] mt-5  " >JKD Pakistan is a social development and welfare organization dedicated to uplifting communities through education, healthcare, youth empowerment, and community development.</p>
        <button className={`text-sm md:text-[16px] lg:text-[19px] ${theme === 'light' ? 'bg-[#00874F]': 'bg-[#177faa]'} text-white w-[59%] sm:w-[30%] md:w-[25%] lg:w-[15%] mt-2 rounded p-2 lg:p-2 lg:px-6 sm:px-2 `}>Let&apos;s Discuss</button>
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