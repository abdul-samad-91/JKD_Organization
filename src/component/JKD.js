import React from 'react'
import Image from 'next/image'
import { useGlobal } from '@/context/GlobleContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faLeaf, faUsers, faBalanceScale, faFlask, faHandshake, faLandmark } from '@fortawesome/free-solid-svg-icons'







const JKD = () => {
    const {theme} = useGlobal()
  return (
    <section className={`${theme === 'light' ? 'bg-[#eefbff] text-black':'bg-[#0b0b0b] text-white'}  w-full flex flex-col items-center my-10 py-10`}>
        <div className='w-[1200px] px-4'>
            <div className='flex  w-full  gap-5 pt-5 md:pt-0'>
                {/* <div className='w-full '> */}
                    {/* <h2 className='text-[35px] font-semibold'>JKD </h2>
                    <p className={` text-justify ${theme === 'light' ? ' text-gray-700 ':'text-white'} pt-2 md:pt-4`}>JKD Pakistan is a dynamic organization dedicated to empowering marginalized & under-served communities through sustainable economic opportunities and social development. Through its diverse and innovative programs and services, JKD Pakistan bridges the gap for vulnerable generations, ensuring equal access to opportunities and cultivating resilient communities for a brighter future.</p> */}
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
                {/* </div> */}
                {/* show image for medium and large screen */}
                {/* <div className='hidden md:block w-[60%] h-[full]'>
                    <Image src={jkd} alt='jkd' className=' rounded-2xl h-full w-full relative object-cover' />
                </div> */}
            </div>

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