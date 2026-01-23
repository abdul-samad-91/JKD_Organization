"use client"
import Header from "@/component/Header"
import Footer from "@/component/Footer"
import Image from "next/image"
import image1 from '../../../../public/image1.jpg'
import image2 from '../../../../public/image2.jpg'
import image3 from '../../../../public/image3.jpg'
import Link from "next/link"
import { useEffect, useState } from "react"
import LoadingScreen from "@/component/LoadingScreen"




const Apply = () => {
    const cards = [
    {
        name:"English Teacher",
        image:image2,
        path:"/apply/job/english-teacher"
    },
    {
        name:"IT Mentor",
        image:image3,
        path:"/apply/job/it-mentor"
    },
    {
        name:"Video Editor",
        image:image1,
        path:"/apply/job/video-editor"
    },
];

const [screenLoading, setScreenLoading] = useState(true);

useEffect(() => {
const timer = setTimeout(() => {
    setScreenLoading(false);
}, 500);

return () => clearTimeout(timer);
}, []);

  if (screenLoading) return <LoadingScreen />;
  return (
      <div className={`min-h-screen w-full flex flex-col justify-between`}>
        <Header />
        {/* lift side */}
        <div className="relative mt-16 sm:mt-20 flex flex-wrap justify-center items-center pb-6 sm:pb-8 md:pb-10 max-w-[1200px] self-center py-6 sm:py-8 md:py-10 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8">
            {
                cards.map((card,index) => {
                    return (
                        <div key={index} className="w-full sm:w-[70%] md:w-[45%] lg:w-[30%] flex flex-col justify-center items-center hover:shadow-[0px_0px_10px_rgba(0,0,0,0.25)] transition-shadow duration-300 p-3 sm:p-4 rounded">
                            <Image src={card.image} className="object-cover w-full h-[250px] sm:h-[280px] md:h-[300px] rounded" alt="image" />
                            <h4 className="text-center font-bold py-2 sm:py-3 text-base sm:text-lg">{card.name}</h4>
                            <Link href={card.path} className="w-full text-center py-2 sm:py-2.5 bg-[#00874F] text-white text-sm sm:text-base rounded hover:bg-[#006d3f] transition-colors">Apply Now</Link>
                        </div>
                    )
                })    
            }
        </div>
        <Footer />
      </div>
  )
}

export default Apply