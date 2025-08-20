"use client"
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Image from "next/image";
import jkdPhoto from '../../public/jkd-front-photo.jpg'
import { useGlobal } from "@/context/GlobleContext";


export default function Home() {
  const {theme} = useGlobal();
  return (
    < div className="h-screen w-full  flex flex-col justify-between">
      <Header />
      <div className="flex flex-col items-center ">
        {/* <section className="h-[560px] lg:w-[1200px] flex ">
          <div className="w-[50%] h-full text-start flex flex-col justify-center">
            <h1 className="text-[39px] font-bold  w-[80%]">Together for a Brighter Future</h1>
            <p className="text-[22px] w-[80%] mt-4">JKD Pakistan is a social development and welfare organization dedicated to uplifting communities through education, healthcare, youth empowerment, and community development.</p>
            <button className="text-[19px] bg-[#00874F] w-[40%] mt-2 rounded p-2 px-2 text-white">Be a part of the change!</button>
          </div>
          <div className="relative w-[50%] h-[full] ">
            <Image src={jkdPhoto} alt="JKD PHOTO"  className="object-cover rounded" fill/>
          </div>
        </section> */}
        <section style={{ backgroundImage: `url(${jkdPhoto.src})` }} className={` h-[560px]  bg-cover bg-center ${theme === 'light' ? 'text-black': 'text-white'}`}>
          <div className={`w-full h-full text-start flex ${theme === 'light' ? '' : 'bg-black/10'}  flex-col  justify-center pl-20 `}>
            <h1 className="text-[39px] font-bold  " style={{ textShadow: `2px 2px 4px rgba(${theme === 'light'?'255,255,255':'0,0,0'},0.7)` }}>Together for a Brighter Future</h1>
            <p className="text-[22px] w-[46%] mt-4  " style={{ textShadow: `2px 2px 4px rgba(${theme === 'light'?'255,255,255':'0,0,0'},0.9)` }}>JKD Pakistan is a social development and welfare organization dedicated to uplifting communities through education, healthcare, youth empowerment, and community development.</p>
            <button className={`text-[19px] ${theme === 'light' ? 'bg-[#00874F]': 'bg-[#177faa]'} text-white  w-[20%] mt-2 rounded p-2 px-2 `}>Be a part of the change!</button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
