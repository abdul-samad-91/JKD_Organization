import Image from 'next/image'
import React, { useState } from 'react'
import shaheen from '../../public/shaheenShahAfrid.png'
import kabir from '../../public/kabir.jpg'
import tahir from '../../public/tahir.jpg'
import { useGlobal } from '@/context/GlobleContext'

const Testimonel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name : 'Tahir Khan',
      review : "I am thoroughly impressed by JKD Pakistan's event management expertise.",
      image: tahir,
      profession : "Founder and CEO of TKR Restaurants"
    },    
    {
      name : 'Kabir Afridi',
      review : "JKD Pakistan delivered an outstanding event experience.",
      image: kabir,
      profession : "Social Media Influencer"
    },
    {
      name : 'Shaheen Shah Afridi',
      review : "JKD Pakistan&apos;s event planning and execution surpassed expectations. Jehanzeb Khan Dhakki and his team are simply the best in the business.",
      image: shaheen,
      profession : "Pakistn National T20I Team Captiain"
    }
  ]
  const {theme} = useGlobal()
 
    const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
        <section className={`w-full my-10 relative overflow-hidden ${theme === 'light' ? 'text-black bg-[#eefbff]' : 'text-white bg-black'} `}>
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {testimonials?.map((testimonial, index) => (
          <div
            key={index}
            className="h-[500px] w-full flex flex-col justify-center items-center flex-shrink-0 p-4" // Added p-4 for padding on smaller screens
          >
            <Image
              src={testimonial.image}
              className="rounded-full object-cover w-[150px] h-[150px] mb-4" // Added mb-4 for margin-bottom
              alt={testimonial.name}
            />
            <p
              className="relative w-full px-8 md:w-[50%] text-center py-5 text-lg
                before:content-['“'] before:absolute before:-left-1 md:before:-left-5 before:top-2 before:text-4xl before:text-gray-400
                after:content-['”'] after:absolute after:-right-1 md:after:-right-5 after:bottom-2 after:text-4xl after:text-gray-400"
            >
              {testimonial.review}
            </p>
            <h3 className={`text-[22px] font-semibold ${theme === 'light'?'text-[#00874F]':'text-[#177faa]'} mt-4`}> {/* Added mt-4 */}
              {testimonial.name}
            </h3>
            <h4 className={`pt-1 text-[14px] ${theme==='light'?'text-gray-800': 'text-gray-500'}`}>{testimonial.profession}</h4>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute  bottom-5 left-1/2 -translate-x-1/2 flex gap-2 pt-7">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-4 w-4 rounded-full   ${index === currentIndex ? theme === 'light'?'bg-[#00874F]  ring-2 ring-[#00874F] ' : 'bg-[#177faa]  ring-2 ring-[#177faa] ' :'bg-gray-400 '} `}
            aria-label={`Go to testimonial ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 z-10" // Added z-10 to ensure visibility
        aria-label="Previous testimonial"
      >
        &#8249; Left arrow
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 z-10" // Added z-10
        aria-label="Next testimonial"
      >
        &#8250; Right arrow
      </button> */}
    </section>
    // <section className={`w-full my-10 ${theme === 'light' ? 'text-black bg-[#eefbff]' : 'text-white bg-black'} `}>
    //   <div className="flex shrink-0 w-full">
    //     {testimonels?.map((testimonel, index) => (
    //       <div
    //         key={index}
    //         className="h-[500px] w-full flex flex-col justify-center items-center"
    //       >
    //         <Image
    //           src={testimonel.image}
    //           className="rounded-full object-cover relative w-[150px] h-[150px]"
    //           alt={testimonel.name}
    //         />
    //         <p
    //           className="relative w-[50%] text-center py-5
    //             before:content-['“'] before:absolute before:-left-5 before:top-2 before:text-4xl before:text-gray-400 
    //             after:content-['”'] after:absolute after:-right-5 after:bottom-2 after:text-4xl after:text-gray-400"
    //         >
    //           {testimonel.review}
    //         </p>
    //         <h3 className="text-[22px] font-semibold text-[#00874F]">
    //           {testimonel.name}
    //         </h3>
    //         <h4 className="pt-1 text-[14px] text-gray-800">{testimonel.profession}</h4>

    //         {/* Indicators */}
    //         <div className="pt-7 flex gap-2">
    //           <div className="h-5 w-5 rounded-full border-2 bg-[#00874F]"></div>
    //           <div className="h-5 w-5 rounded-full border-2"></div>
    //           <div className="h-5 w-5 rounded-full border-2"></div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </section>  
  )
}

export default Testimonel