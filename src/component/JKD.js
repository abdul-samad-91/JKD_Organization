import React, { useState } from 'react'
import Image from 'next/image'
import { useGlobal } from '@/context/GlobleContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faLeaf, faUsers, faBalanceScale, faFlask, faHandshake, faLandmark, faArrowCircleDown ,faArrowCircleUp ,faArrowDown , faArrowUp } from '@fortawesome/free-solid-svg-icons'







const JKD = () => {
    // const {theme} = useGlobal()
    const theme = "dark";
    const [toggle , setToggle] = useState({
        vision:true,
        mission:false,
        value:false,
    })

    const handleToggle = (key)=>{
        setToggle((preVal)=>{
            return {
                ...preVal,
                [key] : !toggle[key],
            }
        })
    }

  return (
    <section className={`${theme === 'light' ? 'bg-[#eefbff] text-black':'bg-[#eefbff] text-white'}  w-full flex flex-col items-center my-10 py-20`}>
        <div className='w-[1200px] px-4'>
            <div className='flex items-start gap-5'>
                {/* left side */}
                <div className='flex flex-col gap-2 w-[50%]'>
                    <h3 className='text-[30px] font-semibold   text-black'>WORLD CLASS <span className={`text-[#177faa]`}>FACILITIES </span></h3>
                    <p className={` text-start text-black  pt-2 `} >JKD Pakistan is dedicated to excellence in training, education, and development creating skilled professionals who can lead with confidence and make a difference across the globe.</p>
                    <ul className='text-black list-disc  ml-6 py-4'>
                        <li>International Standard Training Our programs are designed according to global benchmarks, ensuring every learner gains practical, real-world expertise.</li>
                        <li>Modern Learning Environment Equipped with advanced tools, labs, and digital resources to support effective hands-on training.</li>
                        <li>Professional Instructors Learn under the guidance of certified and experienced trainers committed to your success.</li>
                    </ul>
                    <p className={` text-start text-black  `} >At JKD Pakistan, we don’t just teach skills we build futures.</p>
                </div>
                {/* right side */}
                <div className='w-[50%] flex flex-col gap-5'>
                    <div className='w-full  p-5 bg-[#00874F]  rounded'>
                        <button onClick={() => handleToggle("mission")} className="cursor-pointer"><FontAwesomeIcon className='text-[20px] transition-transform duration-500' icon={toggle.mission ? faArrowCircleUp : faArrowCircleDown} />
                        <span className='ml-5 font-semibold text-[18px]'>Our Mission</span>
                        </button>
                            <div 
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${toggle.mission ? 'max-h-96' : 'max-h-0'}`}
                            aria-hidden={!toggle.vision}
                            >
                            {/* <h3 className=' text-[30px]  font-semibold '>Mssion</h3> */}
                            <p className={` pt-2 md:pt-4 `}>Empowering the under-served communities by creating sustainable economic opportunities</p>
                        </div>
                        
                    </div>
                    <div className='bg-[#005f88] p-5 w-full rounded'>
                        <button className="cursor-pointer w-full text-left" onClick={() => handleToggle("vision")} aria-expanded={toggle.vision}>
                            <FontAwesomeIcon className='text-[20px] transition-transform duration-500' icon={toggle.vision ? faArrowCircleUp : faArrowCircleDown} />
                            <span className='ml-5 font-semibold text-[18px]'>Our Vision</span>
                        </button>
                        <div 
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${toggle.vision ? 'max-h-96' : 'max-h-0'}`}
                            aria-hidden={!toggle.vision}
                        >
                            <p className={`${theme === 'light' ? ' text-gray-700 ':'text-white'}  text-justify pt-4`}>To uplift and empower under-served communities through innovative and sustainable initiatives in vocational training, skill development, sustainable tourism, sports for development, health-care, and organizing events that promote social causes, community cohesion, and cultural exchange</p> 
                        </div>
                    </div>
                    <div className='p-5 bg-[#e98b28] rounded'>
                            <button onClick={() => handleToggle("value")} className="cursor-pointer"><FontAwesomeIcon className='text-[20px]' icon={toggle.vision ? faArrowCircleUp : faArrowCircleDown} /><span className='ml-5 font-semibold text-[18px]'>Our Values</span>
                            </button>
                            <ul className={` transition-all duration-500 ease-in-out overflow-hidden ${toggle.value ? 'max-h-96' : 'max-h-0'}`}
                                aria-hidden={!toggle.vision}>
                                <li className="pt-4 flex items-center gap-3 mb-[10px] ">
                                    {/* <FontAwesomeIcon icon={faLightbulb} className="text-yellow-500 text-xl " /> */}
                                    <p>
                                    <span className={`font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Empowerment:</span> Unlocking potential through skills and resources.
                                    </p>
                                </li>

                                <li className="flex items-center gap-3 mb-[10px] ">
                                    {/* <FontAwesomeIcon icon={faLeaf} className="text-green-600 text-xl " /> */}
                                    <p>
                                    <span className={`font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Sustainability:</span> Fostering growth that benefits present and future generations.
                                    </p>
                                </li>

                                <li className="flex items-center gap-3 mb-[10px] ">
                                    {/* <FontAwesomeIcon icon={faUsers} className="text-blue-500 text-xl " /> */}
                                    <p>
                                    <span className={`font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Inclusive:</span> Promoting equality and accessibility for all.
                                    </p>
                                </li>

                                <li className="flex items-center gap-3 mb-[11px] ">
                                    {/* <FontAwesomeIcon icon={faBalanceScale} className="text-gray-600 text-xl " /> */}
                                    <p>
                                    <span className={`font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Integrity:</span> Upholding transparency, accountability, and ethical conduct.
                                    </p>
                                </li>

                                <li className="flex items-center gap-3 mb-[11px] ">
                                    {/* <FontAwesomeIcon icon={faFlask} className="text-purple-500 text-xl " /> */}
                                    <p>
                                    <span className={`font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Innovation:</span> Embracing creative solutions to social challenges.
                                    </p>
                                </li>

                                <li className="flex items-center gap-3 mb-[11px] ">
                                    {/* <FontAwesomeIcon icon={faHandshake} className="text-orange-500 text-xl " /> */}
                                    <p>
                                    <span className={`font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Collaboration:</span> Partnering for collective impact.
                                    </p>
                                </li>
                                

                                <li className="flex items-center gap-3 mb-[11px] ">
                                    {/* <FontAwesomeIcon icon={faLandmark} className="text-red-500 text-xl " /> */}
                                    <p>
                                    <span className={`font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Respect for Culture:</span> Honoring and preserving cultural heritage.
                                    </p>
                                </li>
                        </ul>
                            {/* </div> */}
                    </div>
                </div>
            </div>


            {/* <div className='flex  w-full  gap-5 pt-5 md:pt-0'>
                    <div className='w-[50%] flex flex-col gap-5'>
                        <div className={`w-full p-4 rounded self-start border-2 ${theme === 'dark' ? 'bg-black' : 'bg-white'} border-[#00874F] `}>
                            <h3 className=' text-[30px]  font-semibold '>Mssion</h3>
                            <p className={` pt-2 md:pt-4 ${theme === 'light' ? ' text-gray-700 ':'text-white'}`}>Empowering the under-served communities by creating sustainable economic opportunities</p>
                    </div>
                    <div className={`w-full p-4 rounded self-center border-2 ${theme === 'dark' ? 'bg-black' : 'bg-white'} border-[#177faa] `}>                
                            <h3 className='text-[30px] font-semibold'>Vision</h3>
                            <p className={`${theme === 'light' ? ' text-gray-700 ':'text-white'}  text-justify pt-2 md:pt-4`}>To uplift and empower under-served communities through innovative and sustainable initiatives in vocational training, skill development, sustainable tourism, sports for development, health-care, and organizing events that promote social causes, community cohesion, and cultural exchange</p> 
                        </div>
                    </div>
                    <div className={`w-[50%] p-4 rounded   border-2 ${theme === 'dark' ? 'bg-black' : 'bg-white'} border-[#e98b28] `}>                
                    <h3 className='text-[30px] font-semibold pt-4 md:pt-0  '>Values</h3>
                    <ul className={`${theme === 'light' ? 'text-gray-700' : 'text-white'} space-y-4 px-2 pt-2 md:pt-4`}>
                    <li className="flex items-center gap-3 mb-1 ">
                        <FontAwesomeIcon icon={faLightbulb} className="text-yellow-500 text-xl " />
                        <p>
                        <span className={`font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Empowerment:</span> Unlocking potential through skills and resources.
                        </p>
                    </li>

                    <li className="flex items-center gap-3 mb-1 ">
                        <FontAwesomeIcon icon={faLeaf} className="text-green-600 text-xl " />
                        <p>
                        <span className={`font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Sustainability:</span> Fostering growth that benefits present and future generations.
                        </p>
                    </li>

                    <li className="flex items-center gap-3 mb-1 ">
                        <FontAwesomeIcon icon={faUsers} className="text-blue-500 text-xl " />
                        <p>
                        <span className={`font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Inclusive:</span> Promoting equality and accessibility for all.
                        </p>
                    </li>

                    <li className="flex items-center gap-3 mb-1 ">
                        <FontAwesomeIcon icon={faBalanceScale} className="text-gray-600 text-xl " />
                        <p>
                        <span className={`font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Integrity:</span> Upholding transparency, accountability, and ethical conduct.
                        </p>
                    </li>

                    <li className="flex items-center gap-3 mb-1 ">
                        <FontAwesomeIcon icon={faFlask} className="text-purple-500 text-xl " />
                        <p>
                        <span className={`font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Innovation:</span> Embracing creative solutions to social challenges.
                        </p>
                    </li>

                    <li className="flex items-center gap-3 mb-1 ">
                        <FontAwesomeIcon icon={faHandshake} className="text-orange-500 text-xl " />
                        <p>
                        <span className={`font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Collaboration:</span> Partnering for collective impact.
                        </p>
                    </li>
                    

                    <li className="flex items-center gap-3 mb-1 ">
                        <FontAwesomeIcon icon={faLandmark} className="text-red-500 text-xl " />
                        <p>
                        <span className={`font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Respect for Culture:</span> Honoring and preserving cultural heritage.
                        </p>
                    </li>
                    </ul>

                    </div>

            </div> */}

        </div>
    </section>
  )
}

export default JKD
















            {/* show image for extra small and small screen */}
            // <div className='block md:hidden w-full md:w-[60%] h-[350px]'>
            //     <Image src={jkd} alt='jkd' className=' rounded-2xl h-full w-full relative object-cover' />
            // </div>
            // <div className='flex flex-col md:flex-row items-center gap-5 pt-5 md:pt-0'>
            //     <div className='w-full md:w-[40%]'>
            //         <h2 className='text-[35px] font-semibold'>JKD </h2>
            //         <p className={` text-justify ${theme === 'light' ? ' text-gray-700 ':'text-white'} pt-2 md:pt-4`}>JKD Pakistan is a dynamic organization dedicated to empowering marginalized & under-served communities through sustainable economic opportunities and social development. Through its diverse and innovative programs and services, JKD Pakistan bridges the gap for vulnerable generations, ensuring equal access to opportunities and cultivating resilient communities for a brighter future.</p>
            //         <h3 className=' text-[30px]  font-semibold pt-4'>Mssion</h3>
            //         <p className={` pt-2 md:pt-4 ${theme === 'light' ? ' text-gray-700 ':'text-white'}`}>Empowering the under-served communities by creating sustainable economic opportunities</p>
            //     </div>
            //     {/* show image for medium and large screen */}
            //     <div className='hidden md:block w-[60%] h-[350px]'>
            //         <Image src={jkd} alt='jkd' className=' rounded-2xl h-full w-full relative object-cover' />
            //     </div>
            // </div>
            // <div className=' md:flex gap-5 pt-4 md:pt-5'>
            //         {/* <div className='w-[60%] h-full'>
            //             <Image src={jkd2} alt='jkd' className=' rounded-2xl h-[500px] w-full relative object-cover' />
            //         </div> */}
            //         <div className='w-full md:w-[40%]'>                
            //             <h3 className='text-[30px] font-semibold'>Vision</h3>
            //             <p className={`${theme === 'light' ? ' text-gray-700 ':'text-white'}  text-justify pt-2 md:pt-4`}>To uplift and empower under-served communities through innovative and sustainable initiatives in vocational training, skill development, sustainable tourism, sports for development, health-care, and organizing events that promote social causes, community cohesion, and cultural exchange</p> 
            //         </div>
            //         <div className='w-full md:w-[60%] h-full '>
            //             <h3 className='text-[30px] font-semibold pt-4 md:pt-0  '>Values</h3>
            //             <ul className={`${theme === 'light' ? ' text-gray-700 ':'text-white'} pt-2 md:pt-4 `}>
            //                 <li><span className={`font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Empowerment: </span>    Unlocking potential through skills and resources.</li>
            //                 <li><span className={`font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Sustainability: </span>    Fostering growth that benefits present and future generations.</li>
            //                 <li><span className={`font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Inclusive: </span>    Promoting equality and accessibility for all.</li>
            //                 <li><span className={`font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Integrity: </span>    Upholding transparency, accountability, and ethical conduct.</li>
            //                 <li><span className={`font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Innovation: </span>    Embracing creative solutions to social challenges.</li>
            //                 {/* <li><span className='font-semibold text-black'>Collaboration:</span> Partnering for collective impact.</li>
            //                 <li><span className='font-semibold text-black'>Respect for Culture:</span> Honoring and preserving cultural heritage.</li> */}
            //             </ul>
            //         </div>
            // </div>