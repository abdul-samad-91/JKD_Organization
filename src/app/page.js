"use client"
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Image from "next/image";
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
import { FaHandshake, FaRegSmile, FaAward, FaUserFriends } from 'react-icons/fa';
import WorkDetailItem from "@/component/WorkDetailItem";
const programs = [
  {
    title:'JKD School',
    description:'Providing quality education that nurtures creativity, leadership, and knowledge for the future.',
    image:program1
  },
    {
    title:'JKD TVETA',
    description:'Providing quality education that nurtures creativity, leadership, and knowledge for the future.',
    image:program2
  },
    {
    title:'JKD Tech-Park',
    description:'A hub for innovation, startups, and digital entrepreneurship',
    image:program3
  },
    {
    title:'JKD Sports-Spark',
    description:'Inspiring youth to excel in sports, teamwork, and healthy lifestyles.',
    image:program4
  },  {
    title:'JKD Fitness-Zone',
    description:'Promoting wellness through modern fitness facilities and health programs.',
    image:program5
  },  {
    title:'JKD Green-Tourism',
    description:'Encouraging eco-friendly tourism and preserving the natural beauty of our region.',
    image:program6
  },  {
    title:'JKD Parlour',
    description:'Providing grooming and beauty services while empowering women entrepreneurs.',
    image:program7
  },  {
    title:'JKD Boutique',
    description:'Showcasing fashion and culture through unique designs and creative clothing.',
    image:program8
  },  {
    title:'JKD Uplift-Events',
    description:'Celebrating food culture with a variety of delicious and innovative cuisines.',
    image:program9
  },
    {
    title:'JKD School',
    description:'Providing quality education that nurtures creativity, leadership, and knowledge for the future.',
    image:program1
  },
    {
    title:'JKD TVETA',
    description:'Providing quality education that nurtures creativity, leadership, and knowledge for the future.',
    image:program2
  },
    {
    title:'JKD Tech-Park',
    description:'A hub for innovation, startups, and digital entrepreneurship',
    image:program3
  },
    {
    title:'JKD Sports-Spark',
    description:'Inspiring youth to excel in sports, teamwork, and healthy lifestyles.',
    image:program4
  },  {
    title:'JKD Fitness-Zone',
    description:'Promoting wellness through modern fitness facilities and health programs.',
    image:program5
  },  {
    title:'JKD Green-Tourism',
    description:'Encouraging eco-friendly tourism and preserving the natural beauty of our region.',
    image:program6
  },  {
    title:'JKD Parlour',
    description:'Providing grooming and beauty services while empowering women entrepreneurs.',
    image:program7
  },  {
    title:'JKD Boutique',
    description:'Showcasing fashion and culture through unique designs and creative clothing.',
    image:program8
  },  {
    title:'JKD Uplift-Events',
    description:'Celebrating food culture with a variety of delicious and innovative cuisines.',
    image:program9
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

        {/* about jkd */}
        <section className={`mt-[80px] w-full flex justify-center py-15 ${theme === 'light' ? 'text-gray-700 bg-[#effff8]' : 'text-white bg-black'}`}>
          <div className="w-[1200px]">
            <div className="flex gap-10  ">
              <div className="w-[50%]">
                <h1 className={`text-[39px] font-semibold  ${theme === 'light' ? 'text-black' : 'text-white'}`}>JKD Pakistan: Together for a Brighter Future</h1>
                <p className="text-justify p-2 leading-7">JKD Pakistan is a social development and welfare organization dedicated to uplifting communities through education, healthcare, youth empowerment, and community development.</p>
                <h2 className={`text-[32px] pt-5 font-semibold  ${theme === 'light' ? 'text-black' : 'text-white'}`} >Who We Are</h2>
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
              <div className="relative w-[50%] h-[90%] ">
                <Image src={jkdPhoto2} className="objext-fill h-[50%] rounded" alt="jkdPhoto2"   />
              </div>
            </div>
          </div>
        </section>

        {/* programs  */}
        <section className=" flex flex-col items-center pt-10 pb-5">
          <h1 className={`text-[39px] font-semibold w-[1200px]   ${theme === 'light' ? 'text-black' : 'text-white'}`}>Programs</h1>
          <div className=" overflow-x-hidden w-[1351px] pt-10 pb-10 ">
            <div className="flex animate-scroll gap-10">
              {programs?.map((program, index) => (
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
              ))}
              {programs?.map((program, index) => (
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
              ))}
            </div>
          </div>
        </section>
        
        {/* Partners  */}
        <section className=" flex flex-col items-center py-10 bg-[#effff8]">
          <h1 className={`text-[39px] font-semibold w-[1200px]   ${theme === 'light' ? 'text-black ' : 'text-white'}`}>Partners</h1>
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
        <section className="py-10 flex justify-center">
          <div className="flex gap-10 justify-between text-center w-[1200px]">
            {workDetails?.map((detail, index) => 
            <WorkDetailItem key={index} detail={detail} />
            )}
          </div>
        </section>

      </div>  
      <Footer />
    </div>
  );
}
