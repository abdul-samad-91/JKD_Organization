"use client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";
import course from '@/data/course.json'
import { set } from "mongoose";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import {faClockFour ,  faArrowUp  ,  faBookOpen} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Courses = () => {
  const {id} = useParams();
  const [currCourse , setCurrCourse] = useState('')
  useEffect(()=>{
    const currCourse = course.find(c => c.id === id);
    setCurrCourse(currCourse);
    console.log(currCourse);
  },[id])
  return (    
    <div className={` h-screen w-full flex flex-col  justify-between `}>
      <Header />
      {/* lift side */}
      <div className=" bg-[#eefbff] relative mt-20 flex flex-col items-center pb-10">

        {/* title dexcription */}
        <div className="bg-[#177faa] text-white w-full flex flex-col py-10 items-center ">
          <div className="w-[1200px] flex">
            <div>
              <h1 className={`w-[1200px] text-[30px] md:text-[35px] pb-2 lg:text-[39px] font-semibold   sm:w-[600px] md:w-[900px]  lg:w-[1200px]`}>{currCourse?.title}</h1>
              {
                currCourse?.description?.map((el ,index)=>
                <p key={index} className={` text-start    w-[60%]`} >{el}</p>
                )
              }
            </div>

            {/* feture rihgt side */}
            <div className="bg-white w-[30%] fixed  top-28 right-20 mt-5 py-5 flex flex-col items-center border border-gray-200 rounded">
              <button className="cursor-pointer rounded tex-semibold w-[90%] py-2 text-white   text-center bg-[#e98b28] ">Apply Now</button>
              <h4  className='w-full pl-5 text-[20px] font-semibold pt-5 pb-3 text-black'>FEATURES</h4>
              <div className="text-black w-full pl-5 pt-3"><FontAwesomeIcon icon={faBookOpen} /> <span>{currCourse?.lectures}</span></div>
              <div className="text-black w-full pl-5 pt-3"><FontAwesomeIcon icon={faClockFour} /> <span>Duration  {currCourse?.hours} hours</span></div>
              <div className="text-black w-full pl-5 pt-3"> < FontAwesomeIcon icon={faArrowUp} /> <span>Skill level All levels</span></div>
            </div>
          </div>
        </div>
      
        {/* overiew */}
        <div className="w-[1200px]">
          <h3 className='text-[30px] font-semibold pt-10'>OVERIEW</h3>
          
          {/* course description */}
          <h4 className='text-[20px] font-semibold pt-5 pb-3 text-black'>COURSE DESCRIPTION</h4>
          {currCourse?.courseOverview?.map((course , index)=>
            <p key={index} className="text-gray-700  w-[60%]">
              {course}
              <br/><br/>
            </p>
          )}

        {/* certification */}
          <h4 className='text-[20px] font-semibold pb-3  text-black'>CERTIFICATION</h4>
          {currCourse?.certification?.map((course , index)=>
            <p key={index} className="text-gray-700  w-[60%]">
              {course}
              <br/>
            </p>
          )}

          {/* leraning outcomes */}
          <br/>
          <h4 className='text-[20px] font-semibold pb-3  text-black'>LEARNING OUTCOMES</h4>
          <ul className="w-[60%] list-disc ml-4">
            {currCourse?.learningOutcomes?.map((course , index)=>
              <li key={index} className="text-gray-700  ">
                {course}
                <br/>
              </li>
            )}
          </ul>

          <br/>
          <h4 className='text-[20px] font-semibold pb-3  text-black'>{currCourse?.carrer &&"CARRIER"}</h4>
          <p  className="text-gray-700  w-[60%]">
            {currCourse?.carrer}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Courses