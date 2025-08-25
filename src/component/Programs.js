"use client";
import React, { useRef } from "react";
import programImage1 from "../../public/program-image1.jpeg";
import programImage2 from "../../public/program-image2.jpg";
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

const programs = [
  {
    title: "JKD TVETA",
    image: programImage1,
    description:
      "Providing quality education that nurtures creativity, leadership, and knowledge for the future.",
    pIcon: program2,
  },
  {
    title: "JKD Tech-Park",
    image: programImage2,
    description: "A hub for innovation, startups, and digital entrepreneurship",
    pIcon: program3,
  },
  {
    title: "JKD Sports-Spark",
    image: programImage3,
    description:
      "Inspiring youth to excel in sports, teamwork, and healthy lifestyles.",
    pIcon: program4,
  },
  {
    title: "JKD Fitness-Zone",
    image: programImage4,
    description:
      "Promoting wellness through modern fitness facilities and health programs.",
    pIcon: program5,
  },
  {
    title: "JKD Green-Tourism",
    image: programImage5,
    description:
      "Encouraging eco-friendly tourism and preserving the natural beauty of our region.",
    pIcon: program6,
  },
  {
    title: "JKD Parlour",
    image: programImage6,
    description:
      "Providing grooming and beauty services while empowering women entrepreneurs.",
    pIcon: program7,
  },
  {
    title: "JKD Boutique",
    image: programImage8,
    description:
      "Showcasing fashion and culture through unique designs and creative clothing.",
    pIcon: program8,
  },
  {
    title: "JKD Uplift-Events",
    image: programImage9,
    description:
      "Celebrating food culture with a variety of delicious and innovative cuisines.",
    pIcon: program9,
  },
];

const Programs = () => {
  const { theme } = useGlobal();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      console.log(scrollRef.current)
      const scrollAmount = clientWidth * 0.8; // scroll by ~80% width
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className={`mt-10 flex flex-col items-center pt-15 pb-5 ${
        theme === "light" ? "bg-[#dee9ee]" : "bg-black"
      }`}
    >
      <h1
        className={`text-[39px] font-semibold w-[1200px] ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        Programs
      </h1>

      <div className="relative w-[1351px] pt-10 pb-15">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute z-50 left-1 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md  hover:scale-110 transition"
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-10 overflow-x-hidden scroll-smooth scrollbar-hide px-14"
        >
          {programs?.map((program, index) => (
            <div
              key={index}
              className="relative px-4 program-card overflow-hidden bg-white shadow-lg rounded text-center min-w-[280px] "
            >
              <div className="w-full relative z-10">
                <Image
                  src={program.image}
                  className="relative rounded-b h-[200px] w-full object-cover mx-auto"
                  alt={program.title}
                />
              </div>
              <div
                className={`absolute z-50 w-[50px] rounded-full overflow-hidden top-5 right-5 ${
                  theme === "light" ? "bg-white" : "bg-white"
                }`}
              >
                <Image
                  src={program.pIcon}
                  className="object-contain"
                  width={100}
                  height={100}
                  alt={program.title}
                />
              </div>
              <h3 className="mt-4 text-lg font-bold">{program.title}</h3>
              <p className="text-gray-600 text-sm">{program.description}</p>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-50 hover:scale-110 transition"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Programs;
