"use client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";
import course from '@/data/course.json'
import { set } from "mongoose";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import {faClockFour ,  faArrowUp  ,  faBookOpen} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import LoadingScreen from "@/component/LoadingScreen";

const Courses = () => {
  const {id} = useParams();
  const [currCourse , setCurrCourse] = useState('')
  useEffect(()=>{
    const currCourse = course.find(c => c.id === id);
    setCurrCourse(currCourse);
    console.log(currCourse);
  },[id])

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
      <div className="bg-[#eefbff] relative mt-16 sm:mt-20 flex flex-col items-center pb-6 sm:pb-8 md:pb-10">

        {/* title dexcription */}
        <div className="bg-[#177faa] text-white w-full flex flex-col py-6 sm:py-8 md:py-10 items-center px-4 sm:px-6 md:px-8">
          <div className="w-full max-w-[1200px] flex flex-col md:flex-row md:justify-between">
            <div className="w-full md:w-[65%]">
              <h1 className={`text-2xl sm:text-[30px] md:text-[35px] lg:text-[39px] font-semibold pb-2 sm:pb-3`}>{currCourse?.title}</h1>
              {
                currCourse?.description?.map((el ,index)=>
                <p key={index} className={`text-start text-sm sm:text-base w-full md:w-[90%]`}>{el}</p>
                )
              }
            </div>

            {/* feture rihgt side */}
            <div className="bg-white w-full md:w-[30%] mt-5 md:mt-0 md:fixed md:top-28 md:right-[5%] xl:right-[3%] py-4 sm:py-5 flex flex-col items-center border border-gray-200 rounded shadow-lg">
              <Link href={'/apply/course'} className="cursor-pointer rounded font-semibold w-[90%] py-2 sm:py-2.5 text-white text-sm sm:text-base text-center bg-[#e98b28] hover:bg-[#d97d1f] transition-colors">Apply Now</Link>
              <h4 className='w-full pl-4 sm:pl-5 text-lg sm:text-[20px] font-semibold pt-4 sm:pt-5 pb-2 sm:pb-3 text-black'>FEATURES</h4>
              <div className="text-black text-sm sm:text-base w-full pl-4 sm:pl-5 pt-2 sm:pt-3"><FontAwesomeIcon icon={faBookOpen} /> <span>{currCourse?.lectures}</span></div>
              <div className="text-black text-sm sm:text-base w-full pl-4 sm:pl-5 pt-2 sm:pt-3"><FontAwesomeIcon icon={faClockFour} /> <span>Duration {currCourse?.hours} hours</span></div>
              <div className="text-black text-sm sm:text-base w-full pl-4 sm:pl-5 pt-2 sm:pt-3"><FontAwesomeIcon icon={faArrowUp} /> <span>Skill level All levels</span></div>
            </div>
          </div>
        </div>
      
        {/* overiew */}
        <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8">
          <h3 className='text-2xl sm:text-[26px] md:text-[30px] font-semibold pt-6 sm:pt-8 md:pt-10'>OVERIEW</h3>
          
          {/* course description */}
          <h4 className='text-lg sm:text-[18px] md:text-[20px] font-semibold pt-4 sm:pt-5 pb-2 sm:pb-3 text-black'>COURSE DESCRIPTION</h4>
          {currCourse?.courseOverview?.map((course , index)=>
            <p key={index} className="text-gray-700 text-sm sm:text-base w-full md:w-[65%]">
              {course}
              <br/><br/>
            </p>
          )}

        {/* certification */}
          {currCourse?.certification && <h4 className='text-lg sm:text-[18px] md:text-[20px] font-semibold pb-2 sm:pb-3 text-black'>CERTIFICATION</h4>}
          {currCourse?.certification?.map((course, index) => {
              const isListItem = course.includes("<b>");
              if (isListItem) {
                return (
                  <li
                    key={index}
                    className="list-disc ml-4 sm:ml-6 text-sm sm:text-base"
                    dangerouslySetInnerHTML={{ __html: course }}
                  ></li>
                );
              } else {
                return (
                  <p
                    className="text-gray-700 text-sm sm:text-base w-full md:w-[65%]"
                    key={index}
                    dangerouslySetInnerHTML={{ __html: course }}
                  ></p>
                );
              }
            })}

          {/* leraning outcomes */}
          <br/>
          <h4 className='text-lg sm:text-[18px] md:text-[20px] font-semibold pb-2 sm:pb-3 text-black'>LEARNING OUTCOMES</h4>
          <p className="text-gray-700 text-sm sm:text-base w-full md:w-[65%]">By the end of this course, students will be able to:</p>
          <ul className="w-full md:w-[65%] list-disc ml-6 sm:ml-8 md:ml-10 pt-2 sm:pt-3">
            {currCourse?.learningOutcomes?.map((course , index)=>
              <li key={index} className="text-gray-700 text-sm sm:text-base">
                {course}
                <br/>
              </li>
            )}
          </ul>

          {/* carrier */}
          {
            currCourse?.carrer && 
            <>
              <br/>
              <h4 className='text-lg sm:text-[18px] md:text-[20px] font-semibold pb-2 sm:pb-3 text-black'>{currCourse?.carrer &&"CARRIER"}</h4>
              <p className="text-gray-700 text-sm sm:text-base w-full md:w-[65%]">
                {currCourse?.carrer}
              </p>
            </>
          }

          {/* Program Benefits */}
          {
            currCourse?.programBinits && 
            <>
              <br/>
              <h4 className='text-lg sm:text-[18px] md:text-[20px] font-semibold pb-2 sm:pb-3 text-black'>Program Benefits</h4>
              <ul className="w-full md:w-[65%] list-disc ml-4 sm:ml-6 pt-2 sm:pt-3">
                {currCourse?.learningOutcomes?.map((course , index)=>
                  <li key={index} className="text-gray-700 text-sm sm:text-base">
                    {course}
                    <br/>
                  </li>
                )}
              </ul>
            </>
          }

          {/* why Choose JKD */}
          {
            currCourse?.whyChooseJKD  && 
            <>
              <br/>
              <h4 className='text-lg sm:text-[18px] md:text-[20px] font-semibold pb-2 sm:pb-3 text-black'>Why Choose JKD</h4>
              {/* <ul className="w-[60%] list-disc ml-6 pt-3"> */}
              {currCourse?.whyChooseJKD?.map((course , index)=>
                <p key={index} className="text-gray-700 text-sm sm:text-base w-full md:w-[65%]">
                  {course}
                  <br/>
                </p>
              )}
              {/* </ul> */}
            </>
          }

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Courses