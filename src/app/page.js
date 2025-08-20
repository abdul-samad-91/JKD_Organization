"use client"
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Image from "next/image";
import jkdPhoto from '../../public/jkd-front-photo.jpg'
import jkdPhoto2 from '../../public/jkd-front2-photo.jpg'
import { useGlobal } from "@/context/GlobleContext";


export default function Home() {
  const {theme} = useGlobal();
  return (
    < div className={`h-screen w-full  flex flex-col justify-between `}>
      <Header />
      <div className="flex flex-col items-center ">
        {/* hero section */}
        <section 
          className={`relative h-[400px] md:h-[460px] lg:h-[560px] bg-cover bg-center`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center blur-[1px]" 
            style={{ backgroundImage: `url(${jkdPhoto.src})` }} 
          />
          <div className={`relative z-10 w-full h-full text-start flex ${theme === 'light' ? 'text-black bg-white/5' : ' text-white bg-black/10'}  flex-col  justify-center px-6 lg:pl-20 `}>
            <h1 className="text-[30px] md:text-[34px] lg:text-[39px] font-bold sm:w-[70%] md:w-[65%] lg-w-full " style={{ textShadow: `2px 2px 4px rgba(${theme === 'light'?'255,255,255':'0,0,0'},0.7)` }}>Together for a Brighter Future</h1>
            <p className="text-justify text-[16px] md:text-[17px] lg:text-[22px] sm:w-[60%] md:w-[55%] lg:w-[46%] mt-5  " style={{ textShadow: `2px 2px 4px rgba(${theme === 'light'?'255,255,255':'0,0,0'},0.9)` }}>JKD Pakistan is a social development and welfare organization dedicated to uplifting communities through education, healthcare, youth empowerment, and community development.</p>
            <button className={`text-sm md:text-[16px] lg:text-[19px] ${theme === 'light' ? 'bg-[#00874F] hover:text-white hover:bg-black': 'hover:text-black hover:bg-white bg-[#177faa]'} transition cursor-pointer text-white w-[59%] sm:w-[30%] md:w-[25%] lg:w-[20%] mt-2 rounded p-2 sm:px-2 `}>Be a part of the change!</button>
          </div>
        </section>
        {/* about jkd */}
        <section className={`py-10 w-full flex justify-center ${theme === 'light' ? 'text-black bg-white' : 'text-white bg-black'}`}>
          <div className="w-[1200px]">
            <h1 className="text-[30px] md:text-[34px] lg:text-[39px] font-bold sm:w-[70%] md:w-[65%]  ">About JKD Pakistan</h1>
            <div className="flex pt-5 gap-10  ">
              <div className="w-[50%]">            
                <h2 className="text-[34px] pt-10 font-semibold" >Who We Are</h2>
                <p className="text-justify leading-7">JKD Pakistan is a social development and welfare organization working for a brighter and prosperous future of our nation. Our mission is to bring positive change through education, healthcare, youth empowerment, and community development.
                We strive to create equal opportunities for every individual — whether it’s access to quality education, better healthcare facilities, or employment opportunities. JKD Pakistan is committed to building a stronger, progressive, and united society.</p>
                <h2 className="text-[34px] font-semibold pt-5">What We Do</h2>
                <ul className="list-disc list-inside">
                  <li className="leading-7">Promote education and support students</li>
                  <li className="leading-7">Organize health and awareness programs</li>
                  <li className="leading-7">Provide skills and training for youth</li>
                  <li className="leading-7">Work on community welfare and development projects</li>
                </ul>
                <button className={`mt-5 p-2 px-2 ${theme === 'light' ? 'bg-[#00874F] hover:text-white hover:bg-black': 'hover:text-black hover:bg-white bg-[#177faa]'} transition cursor-pointer text-white rounded`} >Learn more</button>
              </div>
              <div className="relative w-[50%] h-[530px] ">
                <Image src={jkdPhoto2} className="objext-fill h-full rounded" alt="jkdPhoto2"   />
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
