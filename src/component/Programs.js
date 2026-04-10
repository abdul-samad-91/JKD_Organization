"use client";
import React, { useRef, useState } from "react";
import programImage1 from "../../public/program-image1.jpeg";
import programImage2 from "../../public/program-image2.webp";
import programImage3 from "../../public/program-image3.jpeg";
import programImage4 from "../../public/program-image4.jpeg";
import programImage5 from "../../public/program-image5.webp";
import programImage6 from "../../public/program-image6.jpg";
import programImage7 from "../../public/program-image7.jpg";
import programImage8 from "../../public/program-image8.jpeg";
import programImage9 from "../../public/program-image9.jpg";
import program1 from "../../public/progaram-1.png";
import program2 from "../../public/progaram-2.png";
import program3 from "../../public/progaram-3.png";
import program4 from "../../public/progaram-4.png";
import program5 from "../../public/progaram-5.png";
import program6 from "../../public/progaram-6.png";
import program7 from "../../public/progaram-7.png";
import program8 from "../../public/progaram-8.png";
import program9 from "../../public/progaram-9.png";
import { useGlobal } from "@/context/GlobleContext";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import rightArrow from "../../public/rightArrow.svg";

const allprograms = [
  {
    title: "TVET",
    image: programImage1,
    description:
      "Providing quality education that nurtures creativity, leadership, and knowledge for the future.",
    pIcon: program2,
  },
  {
    title: "Sport and Fitness",
    image: programImage3,
    description:
      "Inspiring youth to excel in sports, teamwork, and healthy lifestyles.",
    pIcon: program4,
  },
  {
    title: "IT and Digital Skills",
    image: programImage2,
    description: "A hub for innovation, startups, and digital entrepreneurship",
    pIcon: program3,
  },

  {
    title: "Tourism",
    image: programImage5,
    description:
      "Encouraging eco-friendly tourism and preserving the natural beauty of our region.",
    pIcon: program6,
  },
  // hospitality
  {
    title: "Uplift-Events",
    image: programImage9,
    description:
      "Celebrating food culture with a variety of delicious and innovative cuisines.",
    pIcon: program9,
  },
  {
    title: "Overseas Recruitment",
    image: programImage4,
    description:
      "Promoting wellness through modern fitness facilities and health programs.",
    pIcon: program5,
  },
  {
    title: "Parlour",
    image: programImage6,
    description:
      "Providing grooming and beauty services while empowering women entrepreneurs.",
    pIcon: program7,
  },
  {
    title: "Boutique",
    image: programImage8,
    description:
      "Showcasing fashion and culture through unique designs and creative clothing.",
    pIcon: program8,
  },
];

const Programs = () => {
  const { theme } = useGlobal();
  const scrollRef = useRef(null);
  const [ programs , setPrograms] = useState(allprograms)

  // const scroll = (direction) => {
  //   if (scrollRef.current) {
  //     const { scrollLeft, clientWidth } = scrollRef.current;
  //     console.log(scrollRef.current)
  //     const scrollAmount = clientWidth * 0.8; // scroll by ~80% width
  //     scrollRef.current.scrollTo({
  //       left:
  //         direction === "left"
  //           ? scrollLeft - scrollAmount
  //           : scrollLeft + scrollAmount,
  //       behavior: "smooth",
  //     });
  //   }
  // };

      const handlePicChange =(type) => {
        if (type === 'left') {
            let program = programs.shift();
            setPrograms((pre) => [...pre , program])
        } else {
            let program = programs.pop();
            setPrograms((pre) => [program , ...pre ])
        }
    }

  return (
    <section
      className={`  mb-10 flex flex-col items-center pt-10  w-full `}
    >
      <h1
        className={`text-center text-[40px] md:text-[35px] lg:text-[39px] font-bold  w-[250px] sm:w-[600px] md:w-[900px]  lg:w-[1200px] text-[#275D84]`}
      >
        Our Programs
      </h1>
      <p className={`text-center text-[28px] mt-2 w-[250px] sm:w-[600px] md:w-[900px] lg:w-[1200px] text-gray-900`}>
        Comprehensive initiatives for community empowerment
      </p>

      <div className="relative w-[275px] sm:w-[600px] md:w-[900px]   lg:w-[1200px] pt-10 ">
        {/* Left Button */}
        <button
          onClick={() => handlePicChange("left")}
          className={`absolute z-50 left-[-50px] top-1/2 -translate-y-1/2  text-gray-800 p-3 rounded-full  hover:scale-110  transition`}
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-8 w-full overflow-x-hidden scroll-smooth scrollbar-hide "
        >
          {programs?.map((program, index) => (
            <div
              key={index}
              className={`relative p-4 mb-10 border border-gray pt-4 program-card overflow-visible    text-center min-w-[275px] sm:min-w-[290px]  lg:min-w-[370px] flex flex-col items-left justify-between`}
            >
              <div>
                <div className="w-full relative z-10">
                <Image
                  src={program.image}
                  className="relative rounded h-[250px] w-full object-cover mx-auto"
                  alt={program.title}
                />
                </div>
                <h3 className={`mt-4 text-[28px] font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{program.title}</h3>
                <p className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-[22px] `}>{program.description}</p>
              </div>

              <div className="flex justify-start">
                <button className={`mt-4 px-6 py-2 rounded-lg text-sm bg-[#D08348] text-white hover:bg-opacity-90 transition`}>
                  Learn More  <Image src={rightArrow} alt="right arrow" className="inline-block ml-3" />
              </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => handlePicChange("right")}
          className={`absolute z-50 right-[-20px] top-1/2 -translate-y-1/2  text-gray-800 p-3 hover:scale-110 transition`}
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Programs;
