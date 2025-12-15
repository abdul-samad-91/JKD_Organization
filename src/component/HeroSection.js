// import React, { useEffect, useState } from 'react'
// import jkdPhoto from "../../public/jkd-front-photo.jpg"
// import { useGlobal } from '@/context/GlobleContext';
// import cardPic1 from "../../public/cardPic1.jpg"
// import cardPic2 from "../../public/cardPic2.jpg"
// import cardPic3 from "../../public/cardPic3.jpg"
// import cardPic4 from "../../public/cardPic4.jpg"
// import cardPic5 from "../../public/cardPic5.jpg"
// import Image from 'next/image';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// const HeroSection = () => {
//       const [translate , setTranslate] = useState(0);
//       console.log("translate",translate)
//       const [currentIndex, setCurrentIndex] = useState(0);
//       const {theme} = useGlobal();
//       const [pics  , setPics] = useState([ cardPic1  ,  cardPic2]);

//       useEffect(() => {
//         const interval = setInterval(() => {
//           setCurrentIndex((prevIndex) => (prevIndex + 1) % pics.length);
//         }, 3000);
      
//         return () => clearInterval(interval);
//       }, [pics.length]);

//       const goToSlide = (index) => {
//         setCurrentIndex(index);
//       };


//   return (
//     <section 
//     className={`relative h-[400px] md:h-[460px] lg:h-[600px] flex  w-full  overflow-x-hidden bg-[#eefbff] `}>
//       {/* <div className='relative '> */}
//         {/* Left Button */}
//       <div className="relative flex justify-center w-full">
//           {/* Left Button */}
//           <button
//             onClick={() => setTranslate((prev) => prev - 1150)}
//             className={`absolute left-6 top-1/2 -translate-y-1/2 z-50 
//               ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"} 
//               p-3 py-10 rounded shadow-md hover:scale-110 transition`}
//           >
//             <FaChevronLeft size={24} />
//           </button>

//           {/* Image Container */}
//           <div className="flex w-full  overflow-hidden min-w-[275px] min-h-[275px] mt-16 rounded max-h-[500px] lg:w-[1150px]">
//             {pics.map((pic, index) => (
//             <Image
//               key={index}
//               src={pic}
//               alt={pic.src}
//               className={`w-[1150px] h-[500px] translate-x-[${translate}px] flex-shrink-0 object-cover transition-all duration-500 ease-in-out`}
//               // priority
//               // sizes="(max-width: 768px) 100vw, 1150px" 
//             />
//             ))}
//           </div>

//           {/* Right Button */}
//           <button
//             onClick={() => setTranslate((prev) => prev + 1150)}
//             className={`absolute right-6 top-1/2 -translate-y-1/2 z-50 
//               ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"} 
//               p-3 py-10 rounded shadow-md hover:scale-110 transition`}
//           >
//             <FaChevronRight size={24} />
//           </button>

//         </div>

//       {/* </div> */}
//     {/* Indicators */}
//     {/* <div className="absolute z-40 bottom-16 left-1/2 -translate-x-1/2 flex gap-2 pt-7">
//       {pics.map((_, index) => (
//         <button
//           key={index}
//           onClick={() => goToSlide(index)}
//           className={`h-4 w-4 rounded-full   ${index === currentIndex ?'bg-[#00874F] ring-2 ring-[#00874F] ' : 'bg-gray-400 '} `}
//           aria-label={`Go to testimonial ${index + 1}`}
//         ></button>
//       ))}
//     </div> */}

//     </section>

//   )
// }     

// export default HeroSection


import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useGlobal } from "@/context/GlobleContext";

import cardPic1 from "../../public/cardPic1.jpg";
import cardPic2 from "../../public/cardPic2.jpg";

const SLIDE_WIDTH = 1150;

const HeroSection = () => {
  const { theme } = useGlobal();
  const pics = [cardPic1, cardPic2];

  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % pics.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [pics.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? pics.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      (prev + 1) % pics.length
    );
  };

  return (
    <section className="relative h-[400px] md:h-[460px] lg:h-[600px] w-full overflow-hidden bg-[#eefbff]">

      <div className="relative flex justify-center w-full">

        {/* Left Button */}
        <button
          onClick={handlePrev}
          className={`absolute left-6 top-1/2 -translate-y-1/2 z-50
            ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"}
            p-3 py-10 rounded shadow-md hover:scale-110 transition`}
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Slider */}
        <div className="overflow-hidden mt-16 lg:w-[1150px] w-full max-h-[500px]">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * SLIDE_WIDTH}px)`,
            }}
          >
            {pics.map((pic, index) => (
              <Image
                key={index}
                src={pic}
                alt="slider image"
                className="w-[1150px] h-[500px] object-cover flex-shrink-0"
                priority={index === 0}
              />
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className={`absolute right-6 top-1/2 -translate-y-1/2 z-50
            ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"}
            p-3 py-10 rounded shadow-md hover:scale-110 transition`}
        >
          <FaChevronRight size={24} />
        </button>

      </div>
    </section>
  );
};

export default HeroSection;
