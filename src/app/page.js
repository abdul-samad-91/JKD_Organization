"use client"
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Image from "next/image";
import jkdPhoto from "../../public/jkd-front-photo.jpg"
import jkdPhoto2 from '../../public/jkd-front2-photo.jpg';
import { useGlobal } from "@/context/GlobleContext";
import program1 from '../../public/progaram-1.png';
import program2 from '../../public/progaram-2.png';
import program3 from '../../public/progaram-3.png';
import program4 from '../../public/progaram-4.png';
import program5 from '../../public/progaram-5.png';
import program6 from '../../public/progaram-6.png';
import program7 from '../../public/progaram-7.png';
import program8 from '../../public/progaram-8.png';
import program9 from '../../public/progaram-9.png';
import partner1 from '../../public/partner-1.png';
import partner2 from '../../public/partner-2.png';
import partner3 from '../../public/partner-3.png';
import partner4 from '../../public/partner-4.png';
import partner5 from '../../public/partner-5.png';
import partner6 from '../../public/partner-6.png';
import partner7 from '../../public/partner-7.png';
import partner8 from '../../public/partner-8.png';
import partner9 from '../../public/partner-9.png';
import partner10 from '../../public/partner-10.png';
import partner11 from '../../public/partner-11.png';
import partner12 from '../../public/partner-12.png';
import programImage1 from '../../public/program-image1.jpeg';
import programImage2 from '../../public/program-image2.jpg';
import programImage3 from '../../public/program-image3.jpeg';
import programImage4 from '../../public/program-image4.jpeg';
import programImage5 from '../../public/program-image5.webp';
import programImage6 from '../../public/program-image6.jpg';
import programImage7 from '../../public/program-image7.jpg';
import programImage8 from '../../public/program-image8.jpeg';
import programImage9 from '../../public/program-image9.jpg';
import shaheen from '../../public/shaheenShahAfrid.png'
import { FaHandshake, FaRegSmile, FaAward, FaUserFriends } from 'react-icons/fa';
import WorkDetailItem from "@/component/WorkDetailItem";
import React from "react";

const programs = [
  {
    title:'JKD School',
    image:programImage7,
    description:'Providing quality education that nurtures creativity, leadership, and knowledge for the future.',
    pIcon:program1
  },
    {
    title:'JKD TVETA',
    image:programImage1,
    description:'Providing quality education that nurtures creativity, leadership, and knowledge for the future.',
    pIcon:program2
  },
    {
    title:'JKD Tech-Park',
    image:programImage2,
    description:'A hub for innovation, startups, and digital entrepreneurship',
    pIcon:program3
  },
    {
    title:'JKD Sports-Spark',
    image:programImage3,
    description:'Inspiring youth to excel in sports, teamwork, and healthy lifestyles.',
    pIcon:program4
  },  {
    title:'JKD Fitness-Zone',
    image:programImage4,
    description:'Promoting wellness through modern fitness facilities and health programs.',
    pIcon:program5
  },  {
    title:'JKD Green-Tourism',
    image:programImage5,
    description:'Encouraging eco-friendly tourism and preserving the natural beauty of our region.',
    pIcon:program6
  },  {
    title:'JKD Parlour',
    image:programImage6,
    description:'Providing grooming and beauty services while empowering women entrepreneurs.',
    pIcon:program7
  },  {
    title:'JKD Boutique',
    image:programImage8,
    description:'Showcasing fashion and culture through unique designs and creative clothing.',
    pIcon:program8
  },  {
    title:'JKD Uplift-Events',
    image:programImage9,
    description:'Celebrating food culture with a variety of delicious and innovative cuisines.',
    pIcon:program9
  }
];
const partners = [partner1 ,partner2 ,partner3 ,partner4 ,partner5 ,partner6 ,partner7 ,partner8 ,partner9 ,partner10 ,partner11 ,partner12];
const workDetails=[
  {
    icon:FaHandshake , 
    numbers: 24,
    titel: 'Projects Done'
  },
  {
    icon:FaRegSmile , 
    numbers: 25000,
    titel: 'Customer Happy'
  },
  {
    icon:FaAward , 
    numbers: 10,
    titel: 'Guarantee Services'
  },
  {
    icon:FaUserFriends , 
    numbers: 21,
    titel: 'Team Experts'
  },
 ]


export default function Home() {
  const {theme} = useGlobal();
  
  return (
    < div className={`h-screen w-full  flex flex-col justify-between `}>
      <Header />
      <div className="flex flex-col items-center ">
        
        {/* hero section */}
        <section 
          className={`relative h-[400px] md:h-[460px] lg:h-screen bg-cover bg-center`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center " 
            style={{ backgroundImage: `url(${jkdPhoto.src})` }} 
          />
          <div className={`relative z-10 w-full h-full text-start flex ${theme === 'light' ? 'text-black bg-white/5 ' : ' text-white bg-black/50'}  flex-col  justify-center px-6 lg:pl-20 `}>
            <h1 className="text-[30px] md:text-[34px] lg:text-[50px] lg:font-extrabold font-bold sm:w-[70%] md:w-[65%] lg-w-full " >Together for a Brighter Future</h1>
            <p className="text-justify text-[16px] md:text-[17px] lg:text-[25px] lg:font-semibold sm:w-[60%] md:w-[55%] lg:w-[46%] mt-5  " >JKD Pakistan is a social development and welfare organization dedicated to uplifting communities through education, healthcare, youth empowerment, and community development.</p>
            <button className={`text-sm md:text-[16px] lg:text-[19px] ${theme === 'light' ? 'bg-[#00874F]': 'bg-[#177faa]'} text-white w-[59%] sm:w-[30%] md:w-[25%] lg:w-[25%] mt-2 rounded p-2 lg:p-4 lg:px-7 sm:px-2 `}>Be a part of the change!</button>
          </div>
        </section>

        {/* programs  */}
        <section className={` flex flex-col items-center pt-15 pb-5 ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
          <h1 className={`text-[39px] font-semibold w-[1200px]   ${theme === 'light' ? 'text-black' : 'text-white'} `}>Programs</h1>
          <div className=" overflow-x-hidden w-[1351px] pt-10 pb-15 ">
            <div className="flex animate-scroll gap-10">
              {programs?.map((program, index) => (
                <div
                  key={index}
                  className="relative px-4 program-card overflow-hidden bg-[#e3f7ff]  shadow-lg rounded  text-center min-w-[280px] transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
                >
                  <div className="w-full relative z-10" >                  
                    <Image
                      src={program.image}
                      className="relative rounded-b h-[200px] w-full object-cover mx-auto"
                      alt={program.title}
                      
                    />
                  </div>                  
                  <div className={`absolute z-50 w-[50px] rounded-full overflow-hidden top-5 right-5 ${theme === 'light' ? 'bg-white' : 'bg-white'}`} >                  
                    <Image
                      src={program.pIcon}
                      className="object-contain  "
                      width={100}   
                      height={100}
                      alt={program.title}
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{program.title}</h3>
                  <p className="text-gray-600 text-sm">{program.description}</p>
                </div>
              ))}
              {/* {programs?.map((program, index) => (
                <div
                  key={index}
                  className="program-card bg-[#effff8] shadow-lg rounded-2xl p-6 text-center min-w-[250px] transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
                >
                  <Image
                    src={program.image}
                    className="h-[100px] w-auto object-contain mx-auto"
                    alt={program.title}
                    width={120}
                    height={100}
                  />
                  <h3 className="mt-4 text-lg font-bold">{program.title}</h3>
                  <p className="text-gray-600 text-sm">{program.description}</p>
                </div>
              ))} */}
            </div>
          </div>
        </section>

        {/* about jkd */}
        <section className={` w-full flex justify-center py-15 ${theme === 'light' ? 'text-gray-700 bg-[#e3f7ff] ' : 'text-white bg-black'}`}>
          <div className="w-[1200px]">
            <div className="flex gap-10  ">
              <div className="w-[50%]">
                {/* <h1 className={`text-[39px] font-semibold  ${theme === 'light' ? 'text-black' : 'text-white'}`}>JKD Pakistan: Together for a Brighter Future</h1> */}
                {/* <p className="text-justify p-2 leading-7">JKD Pakistan is a social development and welfare organization dedicated to uplifting communities through education, healthcare, youth empowerment, and community development.</p> */}
                <h2 className={`text-[32px]  font-semibold  ${theme === 'light' ? 'text-black' : 'text-white'}`} >JKD Pakistan</h2>
                <p className={`text-justify p-2 leading-7 `}>JKD Pakistan is a social development and welfare organization working for a brighter and prosperous future of our nation. Our mission is to bring positive change through education, healthcare, youth empowerment, and community development.
                We strive to create equal opportunities for every individual — whether it’s access to quality education, better healthcare facilities, or employment opportunities. JKD Pakistan is committed to building a stronger, progressive, and united society.</p>
                <h2 className={`text-[32px] font-semibold pt-5  ${theme === 'light' ? 'text-black' : 'text-white'}`}>What We Do</h2>
                <ul className="list-disc p-2 list-inside">
                  <li className="leading-7">Promote education and support students</li>
                  <li className="leading-7">Organize health and awareness programs</li>
                  <li className="leading-7">Provide skills and training for youth</li>
                  <li className="leading-7">Work on community welfare and development projects</li>
                </ul>
                <button className={`mt-5 p-2 px-2 ${theme === 'light' ? 'bg-[#00874F] hover:text-white hover:bg-black': 'hover:text-black hover:bg-white bg-[#177faa]'} transition cursor-pointer text-white rounded`} >Learn more</button>
              </div>
              <div className="relative w-[50%]  ">
                <Image src={jkdPhoto2} className="objext-fill h-[50%] rounded" fill alt="jkdPhoto2"   />
              </div>
            </div>
          </div>
        </section>

        {/* Partners  */}
        <section className={` flex flex-col items-center py-15  ${theme === 'light' ? 'text-black bg-white ' : 'text-white bg-black'} `}>
          <h1 className={`text-[39px] font-semibold w-[1200px]   `}>Partners</h1>
          <div className=" overflow-x-hidden w-[1351px] ">
            <div className="flex animate-reverse-scroll gap-10">
              {partners?.map((partner, index) => (
                <div
                  key={index}
                  className="program-card rounded-2xl text-center  min-w-[150px] "
                >
                  <Image
                    src={partner}
                    className="h-full w-auto object-contain mx-auto"
                    alt={`partner${index}`}
                  />
                </div>
              ))}
              {partners?.map((partner, index) => (
                <div
                  key={index}
                  className="program-card rounded-2xl text-center  min-w-[150px] "
                >
                  <Image
                    src={partner}
                    className="h-full w-auto object-contain mx-auto"
                    alt={`partner${index}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work History */}
        <section className="py-15 flex justify-center bg-[#177faa] w-full">
          <div className="flex gap-10 justify-between text-center w-[1200px]">
            {workDetails?.map((detail, index) => (
              <React.Fragment key={index}>
                <WorkDetailItem detail={detail} />
                {workDetails.length - 1 !== index && (
                  <div className={`${theme === 'light' ? 'bg-white' :'bg-black'} rounded-full h-full w-[7px]`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>
          
        {/* Testimonels */}
        <section>
          <div className=" h-[500px] flex flex-col justify-center items-center ">
            <Image src={shaheen} className="rounded-full object-contian relative w-[150px] h-[150px]" alt="shaheen" />
            <p className="relative w-[50%] text-center  py-5
              before:content-['“'] before:absolute before:-left-5 before:top-2 before:text-4xl before:text-gray-400 
              after:content-['”'] after:absolute after:-right-5 after:bottom-2 after:text-4xl after:text-gray-400">
              JKD Pakistan&apos;s event planning and execution surpassed expectations. Jehanzeb Khan Dhakki and his team are simply the best in the business.
            </p>
            <h3 className="text-[22px] font-semibold text-[#00874F]">Shaheen Shah Afridi</h3>
            <h4 className="pt-1 text-[14px] text-gray-800">Pakistn National T20I Team Captiain</h4>
            <div className="pt-7 flex gap-2">
              <div className="h-5 w-5 rounded-full   border-2 bg-[#00874F]"></div >
              <div className="h-5 w-5 rounded-full  border-2 "> </div>
              <div className="h-5 w-5 rounded-full  border-2 "> </div>
            </div>
          </div>
        </section>
      </div>  
      <Footer />
    </div>
  );
}
