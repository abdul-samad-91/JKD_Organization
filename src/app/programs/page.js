'use client'
import Footer from '@/component/Footer';
import Header from '@/component/Header';
import { useGlobal } from '@/context/GlobleContext';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import program1 from "../../../public/progaram-1.png";
import program2 from "../../../public/progaram-2.png";
import program3 from "../../../public/progaram-3.png";
import program4 from "../../../public/progaram-4.png";
import program5 from "../../../public/progaram-5.png";
import program6 from "../../../public/progaram-6.png";
import program7 from "../../../public/progaram-7.png";
import program8 from "../../../public/progaram-8.png";
import program9 from "../../../public/progaram-9.png";
import Image from 'next/image';
import getInvolve from "../../../public/involve.png"
// details page data
import tvet from '../../../public/tvet-details-pic.png'
import tvetIcon1 from '../../../public/tvet-details-icon-1.png'
import tvetIcon2 from '../../../public/tvet-details-icon-2.png'
import tvetIcon3 from '../../../public/tvet-details-icon-3.png'
import IT from '../../../public/it-detail-pic.png'
import ITIcon1 from '../../../public/it-detail-icon1.png'
import ITIcon2 from '../../../public/it-detail-icon2.png'
import sport from '../../../public/sport-detail-pic.jpg'
import sportIcon1 from '../../../public/sport-detail-icon1.png'
import sportIcon2 from '../../../public/sport-detail-icon2.png'

export const allprograms = [
  {
    _id:"12",
    title: "TVET ",
    description: "As a key component of JKD PAKISTAN, TVETA -Technical and Vocational Education and Training",
    fullDescription : "As a key component of JKD PAKISTAN, TVETA -Technical and Vocational Education and Training Academy is a premier institution provides customized training programs, consultancy services, skills development courses, professional certifications and Capacity building to empower individuals and organizations, fostering growth and development. JKD TVETA also offers flexible and convenient trainings and consultancy services, delivered right to your home, office and organization.",
    pIcon: program1,
    detialPic: tvet,
    icon1: tvetIcon1,
    icon2: tvetIcon2,
    icon3: tvetIcon3,
    trade1: [
      "Mason",
      "Carpenter",
      "Welder",
      "Plumber",
      "Steel Fixer",
      "Shuttering Carpenter",
      "Tiles Fitter",
      "Plaster Finisher",
      "Marble Fixer",
      "Safety Supervisor",
      "Land Surveyor",
      "Civil Draftsman",
      "Building Painter",
      "Interior Designer",
      "Scaffolder",
      "Construction Labors"
    ],
    trade2: [
      "Electrician",
      "Auto-mechanic",
      "Cable Technician",
      "HVAC Technician",
      "CCTV Technician",
      "Lift Operator",
      "Loader",
      "Auto-electrician",
      "Refrigerator Technician",
      "Fiber Technician",
      "Machine Operator",
      "Solar System Technician",
      "Bike Mechanic",
      "Bike Riders"
    ],
    trade3: [
      "Housekeepers",
      "Janitors/Cleaners",
      "Super Store Workers/Helpers",
      "HTV Drivers",
      "LTV Drivers",
      "Tyreman",
      "Gardeners",
      "Factory Workers",
      "General Farming",
      "Dairy Farming",
      "Poultry Farming",
      "Aquaculture",
      "Fruit Picker",
      "Fruit Packaging",
      "Construction Workers"
    ],
    tradeName:['Building & Construction Trades' , 'Electrical & Mechanical Trades' , 'Supportive Staff& Agriculture Trades']
  },
  {
    _id:"34",
    title: "Sports and Fitness",
    description: "As a flagship initiative and an inclusive Sports Centre of the JKD PAKISTAN, dedicated to igniting",
    fullDescription: "As a flagship initiative and an inclusive Sports Centre of the JKD PAKISTAN, dedicated to igniting a passion for sports in everyone. Our mission is to provide a welcoming and accessible environment where people of all abilities can come together to play, learn, and grow. Fields of play, organizing sports events and trainings in JKD Sports Arena & JKD Sports Academy are available both outdoors and indoors.",
    pIcon:program2 ,
    detialPic: sport,
    icon1: sportIcon1,
    icon2: sportIcon2,
    trade1: [
      "Indoor Cricket Grounds",
      "Indoor Futsal Grounds",
      "Badminton Courts",
      "Karate - Boxing - Yoga Space",
      "Snooker & Billiard Hall",
      "Table Tennis Playing Space",
      "Gym & Fitness Club"
    ],
    trade2: [
      "Cricket Academy",
      "Futsal Academy",
      "Badminton Academy",
      "Karate - Boxing & Yoga Academy",
      "Snooker & Billiard Academy",
      "Table Tennis Academy",
      "Certified Weight Loss Trainers"
    ],
    tradeName: ["Sports-Arena", "Sports-Academy"]
  },
  {
    _id:"56",
    title: "IT and Digital Skills",
    description: "Tech Park is a leading technology training hub of JKD Pakistan offering comprehensive computer",
    fullDescription:"Tech Park is a leading technology training hub of JKD Pakistan offering comprehensive computer short courses and trainings. Our expert instructors and state-of-the-art facilities ensure students gain practical skills to succeed in today's digital landscape. JKD Tech Park is a vibrant ecosystem for entrepreneurs, enterprises, and innovators offering flexible desk arrangements, high-speed internet, meeting rooms, event spaces and networking opportunities.",
    pIcon:program9,
    detialPic: IT,
    icon1: ITIcon1,
    icon2: ITIcon2,
    trade1: [
      "Graphic Designing",
      "Styling-coloring-treatment",
      "Web Development",
      "Software Development",
      "Digital Marketing",
      "Professional Photography",
      "Documentary Ad Making 3D",
      "Animation VR Diploma in DIT",
      "Technical Drawing",
      "AutoCAD Civil 3D"
    ],
    trade2: [
      "eCommerce",
      "Artificial Intelligence",
      "Search Engine Optimization (SEO)",
      "Cyber Security",
      "AI for Banking",
      "Investing/Trading in Stock/Forex Markets",
      "AI for Financial Institutes",
      "Anti-Money Laundering",
      "Diploma in Financial Market",
      "3D CAD Interior Design"
    ],
    tradeName : ["Computer Education & Training" , "Computer Education & Training"]
  },
  {
    _id:"78",
    title: " Tourism",
    description:"As a core initiative of the JKD PAKISTAN, Green Tourism is a pioneering travel & tours",
    fullDescription:"As a core initiative of the JKD PAKISTAN, Green Tourism is a pioneering travel & tours consultancy and training organization dedicated to crafting extraordinary, eco-friendly, and responsible travel experiences. Our mission is to promote sustainable tourism practices, support local communities, and preserve Pakistan's natural beauty for future generations. Experience the beauty of the world with our eco-friendly tourism solutions:",
    pIcon:'',
    trade1: [
      "Eco-Friendly Lodges Booking",
      "Sustainable Air Travel Reservation",
      "Green Transportation Facility",
      "Eco-Friendly Events",
      "Environmental Tour Guides",
      "Eco-Focus Photography",
      "Eco-Fresh Meals Experience",
      "Sustainable Tourism Certifications",
      "Tourism Management Courses",
      "Airline Operations – Cargo and Logistics Courses",
      "IATA Certified - Air Ticketing Courses"
    ],
    trade2: [
      "Religious Tourism",
      "Cultural Tourism - Sports Tourism",
      "Adventure Tourism",
      "Educational Tourism",
      "Health Tourism - Culinary Tourism",
      "Trade Tourism",
      "Industrial Tourism",
      "Corporate/Business Tourism",
      "Backpackers Tourism",
      "Eco-Tourism - Agriculture Tourism",
      "Rural Tourism - Urban Tourism"
    ],
    tradeName: ["Consultancy & Training" , "Tourism Categories"]
  },
  {
    _id:"910",
    title: " Hospitlaity",
    description:"",
    fullDescription:"",
    pIcon:'',
  },
  {
    _id:"1112",
    title: "Uplift Events",
    description: "As a vital part of the JKD PAKISTAN, Uplift-Events is a dynamic and innovative event management",
    fullDescription:"program dedicated to creating unforgettable experiences that inspire, educate, and uplift individuals and communities. Our team of passionate and experienced professionals is committed to delivering exceptional events that exceed expectations and leave a lasting impact.",
    pIcon: program6 ,
    trade1: [
      "SCHOOL / COLLEGE SPORTS EVENTS",
      "CORPORATE / NGOs SPORTS EVENTS",
      "SPORTS & CULTURAL FESTIVALS",
      "SPORTS CHAMPIONSHIPS",
      "ARTS & LITERATURE FESTIVALS",
      "FAMILY / FRIENDLY SPORTS MATCHES"
    ],
    trade2 : [
      "SPORTS TOURISM & TOURISM EXPOS",
      "SUSTAINABLE FOOD FESTIVALS",
      "TRADE / EDUCATION EXHIBITIONS SPACE",
      "JOB RECRUITMENT FAIRS SPACE",
      "MEETINGS & SEMINARS SPACE",
      "TRAININGS & WORKSHOPS SPACE"
    ],
    tradeName: ["Events & Festivals" , "Events & Festivals"]
  },  
  {
    _id:"1213",
    title: "Overseas Recruitment",
    description: "JKD Pakistan is proud to launch its comprehensive weight loss and physical fitness program.",
    fullDescription: "JKD Pakistan is proud to launch its comprehensive weight loss and physical fitness program through Expert trainers and weight loss specialists, tailored specifically for the people of Peshawar and surrounding areas. Our holistic approach combines cutting-edge techniques with expert guidance to empower individuals in achieving their wellness goals." ,
    pIcon:  '',
    trade1:[
      "Bodyweight Exercises",
      "High-Intensity Interval Training",
      "Spiritual & Meditative Practicе",
      "Yoga or Pilates",
      "Exercise through Sports",
      "Walking or Jogging",
      "Outdoor Activities"
    ],
    trade2: [
      "Meal Planning & Mindful Eating",
      "Sustainable weight loss",
      "Increased energy and confidence",
      "Enhanced mental well-being",
      "Certified trainers and weightloss specialists", 
      "Personalized coaching and support",
      "Customized fitness and training plans"
    ],
    tradeName:["EMPOWERING WELLNESS, TRANSFORMING LIVES" , "EMPOWERING WELLNESS, TRANSFORMING LIVES"]
  },
  {
    _id:"1314",
    title: "Travels and Tours",
    description: "As a core initiative of the JKD PAKISTAN, Green Tourism is a pioneering travel & tours",
    fullDescription:" As a core initiative of the JKD PAKISTAN, Green Tourism is a pioneering travel & tours consultancy and training organization dedicated to crafting extraordinary, eco-friendly, and responsible travel experiences. Our mission is to promote sustainable tourism practices, support local communities, and preserve Pakistan's natural beauty for future generations. Experience the beauty of the world with our eco-friendly tourism solutions.",
    pIcon: program3,
  },
  {
    _id:"1516",
    title: "Parlour",
    description: "At JKD Beauty Parlour & Skincare Clinic, we offer expert beauty and skincare solutions tailored to",
    fullDescription:"At JKD Beauty Parlour & Skincare Clinic, we offer expert beauty and skincare solutions tailored to your unique needs. Our state-of-the-art facility provides a relaxing atmosphere, cutting-edge technology, customized training programs and personalized services.",
    pIcon: program4 ,
    trade1: [
      "Skin care",
      "Styling coloring treatment",
      "Beauty treatment",
      "Facial manicures pedicures",
      "Waxing",
      "Nail care nail art",
      "Nail shaping gel extensions",
      "Wedding makeup"
    ],
    trade2: [
      "Beauty therapy certifications",
      "Makeup artistry courses",
      "Skincare and product knowledge",
      "Nail technology courses",
      "Hair cutting and styling courses",
      "Bridal makeup",
      "Hair styling workshops",
      "Empowering Parlour professionals"
    ],
    tradeName: ["Customer Services", "Customized Trainings"]

  },  
  {
    _id:"1718",
    title: "Boutique",
    description: "JKD Pakistan proudly presents JKD Boutique, a haven for fashion enthusiasts, offering an",
    fullDescription:"JKD Pakistan proudly presents JKD Boutique, a haven for fashion enthusiasts, offering an exclusive range of clothing, dress making, and fashion designs that seamlessly merge traditional craftsmanship with modern aesthetics, epitomizing Pakistani elegance, sophistication and cultural heritage.",
    pIcon: program5,
    trade1: [
      "Dress making",
      "Tailoring & Fitting",
      "Alterations",
      "Fashion design",
      "Bridal wears",
      "Personalized styling",
      "Wardrobe management",
      "Fabric selection"
    ],
    trade2: [
      "Boutique certifications",
      "Fashion design courses",
      "Garment making training",
      "Fashion illustrations",
      "Fashion business",
      "Alteration workshops",
      "Bridal wear designing",
      "Entrepreneurship training"
    ],
    tradeName: ["Customer Services", "Customized Trainings"]

  },
  // {
  //   title: "FOODIUM",
  //   description: "As a cornerstone of JKD PAKISTAN, Foodium Café, not just a café - serving customers for Pakistani",
  //   fullDescription:"As a cornerstone of JKD PAKISTAN, Foodium Café, not just a café - serving customers for Pakistani traditional foods and fast foods, we're a hub for hospitality training and hotel management. Our café serves as a live classroom, where students can learn and practice the skills needed to succeed in the fast-paced hospitality and hotel industry. Our expert trainers and mentors guide students through hands-on training, workshops, and mentorship programs, focusing on:",
  //   pIcon: program7 ,
  // }
];

const Programs = () => {
    const router = useRouter();
    const {theme} = useGlobal();

    const [expanded, setExpanded] = useState(
      Array(allprograms.length).fill(false)
    );

    const toggleExpand = (index) => {
      setExpanded((prev) => {
        const newState = [...prev];
        newState[index] = !newState[index]; // toggle only that card
        return newState;
      });
    };


    return (
    < div className={` h-screen w-full  flex flex-col justify-between `}>
      <Header />
      <div className={`${theme === 'light' ? 'bg-white text-black':'bg-black text-white'} flex flex-col items-center mt-20`}>
        <div className=' w-full lg:w-[1200px] px-4'> 
            <h1 className={`${theme === 'light' ? 'text-[#00874F]': 'text-[#177faa]'} text-start w-full text-[30px] md:text-[35px] lg:text-[39px] font-extrabold   `}>Programs</h1>
            <div className='text-sm'>
                <span className={`${theme === 'light' ? 'text-gray': 'text-white'}} cursor-pointer`} onClick={()=> router.push('/')}>Home - </span>
                <span className={`${theme === 'light' ? 'text-[#00874F]': 'text-[#177faa] '} cursor-pointer`} >Programs</span>
            </div>
        </div>
        {/* program page content */}
        <section
          className={`${theme === "light" ? "bg-[#eefbff]" : "bg-black"} 
                      w-full flex flex-col items-center my-10 py-10`}
        >
          <div
            className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4"
          >
            {allprograms?.map((program, index) => (
              <div
                key={index}
                className={`p-4 ${
                  theme === "dark" ? "bg-[#177eaa94]" : "bg-[#00874f85]"
                } overflow-hidden flex flex-col justify-between relative rounded`}
              >
                <div>
                  <Image
                    src={program.pIcon}
                    className="relative top-0 left-[-20px] w-[150px] sm:w-[180px] lg:w-[200px] object-cover h-[80px] sm:h-[100px]"
                    alt="icon"
                  />
                  <div className="w-full">
                    <h3 className="text-xl sm:text-2xl lg:text-[30px] font-semibold w-full">
                      {program.title}
                    </h3>
                    <p
                      className={`${
                        theme === "dark" ? "text-white" : "text-black"
                      } text-sm`}
                    >
                      {expanded[index]
                        ? program.fullDescription
                        : program.description}
                      <span
                        className="font-bold hover:underline cursor-pointer ml-1"
                        onClick={() => toggleExpand(index)}
                      >
                        {expanded[index] ? "View Less" : "View More"}
                      </span>
                    </p>
                  </div>
                </div>
                <button 
                onClick={()=> router.push(`/programs/details/${program._id}`) }
                  className={`mt-5 w-full sm:w-[120px] px-4 py-2 rounded ${
                    theme === "light"
                      ? "bg-[#00874F] hover:text-white hover:bg-black"
                      : "hover:text-black hover:bg-white bg-[#177faa]"
                  } transition cursor-pointer text-white text-sm md:text-[14px] lg:text-base`}
                >
                  Explore
                </button>
              </div>
            ))}
          </div>
        </section>
        {/* get involve */}
        <section className={`${theme === "light" ? "bg-[#eefbff]" : "bg-black"} w-full flex flex-col items-center my-10 pb-10`}>
          <div className='flex justify-between  '>
            <div className='pt-10 px-5 lg:pl-20'>
              <h2 className='text-[35px] font-semibold'>Get Involved</h2>
              <p className={` text-justify ${theme === 'light' ? ' text-gray-700 ':'text-white'} pt-2 md:pt-4`}>JAll stakeholders are requested to join us in making a meaningful difference. By partnering with us, you&apos;ll not only be supporting a noble cause, but also fostering a mutually beneficial relationship that yields lasting and valuable connections. As a Partner, your contribution will have a direct impact on the lives of countless individuals across Pakistan, bringing about positive change and transformation.</p>
              <h2 className=' text-[30px]  font-semibold pt-4'>CSR - <span className={` ${theme === 'dark' ? 'text-[#177faa]' : 'text-[#00874F]'}`}>CORPORATE SOCIAL RESPONSIBILITY </span></h2>
              <p className={` text-justify ${theme === 'light' ? ' text-gray-700 ':'text-white'} pt-2 md:pt-4`} >JKD Pakistan promoting volunteerism, humanitarianism, philanthropic efforts, environmental and sustainability initiatives through Corporate Social Responsibility (CSR) programs. Our organization aims to give structure to the efforts of Corporate, Governmental and Non-Governmental Sectors by giving back to the community.</p>
            </div>
            <Image src={getInvolve} className='relative w-full h-[400px] object-contain' alt='getinvlone' />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Programs