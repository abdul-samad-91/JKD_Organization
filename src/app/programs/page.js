'use client'
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import { useGlobal } from '@/context/GlobleContext'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import program1 from "../../../public/progaram-1.png";
import program2 from "../../../public/progaram-2.png";
import program3 from "../../../public/progaram-3.png";
import program4 from "../../../public/progaram-4.png";
import program5 from "../../../public/progaram-5.png";
import program6 from "../../../public/progaram-6.png";
import program7 from "../../../public/progaram-7.png";
import program8 from "../../../public/progaram-8.png";
import program9 from "../../../public/progaram-9.png";
import Image from 'next/image'


const allprograms = [
  {
    title: "IT and Digital Skills",
    description: "As a key component of JKD PAKISTAN, TVETA -Technical and Vocational Education and Training",
    fullDescription : "As a key component of JKD PAKISTAN, TVETA -Technical and Vocational Education and Training Academy is a premier institution provides customized training programs, consultancy services, skills development courses, professional certifications and Capacity building to empower individuals and organizations, fostering growth and development. JKD TVETA also offers flexible and convenient trainings and consultancy services, delivered right to your home, office and organization.",
    pIcon: program1,
  },
  {
    title: "Tech-Park",
    description: "Tech Park is a leading technology training hub of JKD Pakistan offering comprehensive computer",
    fullDescription:"Tech Park is a leading technology training hub of JKD Pakistan offering comprehensive computer short courses and trainings. Our expert instructors and state-of-the-art facilities ensure students gain practical skills to succeed in today's digital landscape. JKD Tech Park is a vibrant ecosystem for entrepreneurs, enterprises, and innovators offering flexible desk arrangements, high-speed internet, meeting rooms, event spaces and networking opportunities.",
    pIcon:program9,
  },
  {
    title: "Sports and Fitness",
    description: "As a flagship initiative and an inclusive Sports Centre of the JKD PAKISTAN, dedicated to igniting",
    fullDescription: "As a flagship initiative and an inclusive Sports Centre of the JKD PAKISTAN, dedicated to igniting a passion for sports in everyone. Our mission is to provide a welcoming and accessible environment where people of all abilities can come together to play, learn, and grow. Fields of play, organizing sports events and trainings in JKD Sports Arena & JKD Sports Academy are available both outdoors and indoors.",
    pIcon:program2 ,
  },
  {
    title: "Overseas Recruitment",
    description: "JKD Pakistan is proud to launch its comprehensive weight loss and physical fitness program.",
    fullDescription: "JKD Pakistan is proud to launch its comprehensive weight loss and physical fitness program through Expert trainers and weight loss specialists, tailored specifically for the people of Peshawar and surrounding areas. Our holistic approach combines cutting-edge techniques with expert guidance to empower individuals in achieving their wellness goals." ,
    pIcon:  program8,
  },
  {
    title: "Travels and Tours",
    description: "As a core initiative of the JKD PAKISTAN, Green Tourism is a pioneering travel & tours",
    fullDescription:" As a core initiative of the JKD PAKISTAN, Green Tourism is a pioneering travel & tours consultancy and training organization dedicated to crafting extraordinary, eco-friendly, and responsible travel experiences. Our mission is to promote sustainable tourism practices, support local communities, and preserve Pakistan's natural beauty for future generations. Experience the beauty of the world with our eco-friendly tourism solutions.",
    pIcon: program3,
  },
  {
    title: "Parlour",
    description: "At JKD Beauty Parlour & Skincare Clinic, we offer expert beauty and skincare solutions tailored to",
    fullDescription:"At JKD Beauty Parlour & Skincare Clinic, we offer expert beauty and skincare solutions tailored to your unique needs. Our state-of-the-art facility provides a relaxing atmosphere, cutting-edge technology, customized training programs and personalized services.",
    pIcon: program4 ,
  },  
  {
    title: "Boutique",
    description: "JKD Pakistan proudly presents JKD Boutique, a haven for fashion enthusiasts, offering an",
    fullDescription:"JKD Pakistan proudly presents JKD Boutique, a haven for fashion enthusiasts, offering an exclusive range of clothing, dress making, and fashion designs that seamlessly merge traditional craftsmanship with modern aesthetics, epitomizing Pakistani elegance, sophistication and cultural heritage.",
    pIcon: program5,
  },
  {
    title: "Uplift Events",
    description: "As a vital part of the JKD PAKISTAN, Uplift-Events is a dynamic and innovative event management",
    fullDescription:"program dedicated to creating unforgettable experiences that inspire, educate, and uplift individuals and communities. Our team of passionate and experienced professionals is committed to delivering exceptional events that exceed expectations and leave a lasting impact.",
    pIcon: program6 ,
  },  {
    title: "FOODIUM",
    description: "As a cornerstone of JKD PAKISTAN, Foodium Café, not just a café - serving customers for Pakistani",
    fullDescription:"As a cornerstone of JKD PAKISTAN, Foodium Café, not just a café - serving customers for Pakistani traditional foods and fast foods, we're a hub for hospitality training and hotel management. Our café serves as a live classroom, where students can learn and practice the skills needed to succeed in the fast-paced hospitality and hotel industry. Our expert trainers and mentors guide students through hands-on training, workshops, and mentorship programs, focusing on:",
    pIcon: program7 ,
  }
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
        <div className=' w-full lg:w-[1200px]'> 
            <h1 className={`${theme === 'light' ? 'text-[#00874F]': 'text-[#177faa]'} text-start w-full lg:text-[39px] lg:font-extrabold font-bold  `}>Programs</h1>
            <div className='text-sm'>
                <span className={`${theme === 'light' ? 'text-gray': 'text-white'}} cursor-pointer`} onClick={()=> router.push('/')}>Home - </span>
                <span className={`${theme === 'light' ? 'text-[#00874F]': 'text-[#177faa] '} cursor-pointer`} >Programs</span>
            </div>
        </div>
        {/* program page content */}
        <section className={`${theme === 'light' ? 'bg-[#eefbff]':'bg-black'} w-full flex flex-col items-center my-10 py-10`}>
          <div className='w-[1200px] flex gap-5 flex-wrap justify-start'>
          {
            allprograms?.map((program , index)=>
              <div key={index} className={`p-4 ${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} overflow-hidden flex flex-col justify-between relative  w-[32%] rounded`}>
                <div>
                  <Image src={program.pIcon} className={`relative top-0 left-[-50px] w-[200px] object-cover h-[100px]  `} alt='icon' />
                  <div className='  w-full '>
                    <h3 className='text-[30px] font-semibold w-full'>{program.title}</h3>
                    <p className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-sm`}>
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
                <button className={` mt-5 w-[100px] px-4 py-1 rounded ${theme === 'light' ? 'bg-[#00874F] hover:text-white hover:bg-black': 'hover:text-black hover:bg-white bg-[#177faa]'} transition cursor-pointer text-white text-sm md:text-[14px] lg:text-base`}>
                  Explore
                </button>
              </div>
            )
          }
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Programs