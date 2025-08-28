import React from 'react'
import jkd from '../../../public/jkd-front3-photo.jpg'
import jkd2 from '../../../public/jkd-front2-photo.jpg'
import Image from 'next/image'

const JKD = () => {
  return (
    <section className='bg-[#eefbff] w-full flex flex-col items-center my-10 py-10'>
        <div className='w-[1200px]'>
            <div className='flex items-center gap-5 '>
                <div className='w-[40%]'>
                    <h2 className='text-[35px] font-semibold'>JKD </h2>
                    <p className=' text-justify  text-gray-700 pt-4'>JKD Pakistan is a dynamic organization dedicated to empowering marginalized & under-served communities through sustainable economic opportunities and social development. Through its diverse and innovative programs and services, JKD Pakistan bridges the gap for vulnerable generations, ensuring equal access to opportunities and cultivating resilient communities for a brighter future.</p>
                    <h3 className=' text-[30px]  font-semibold pt-4'>Mssion</h3>
                    <p className=' pt-4 text-gray-700'>Empowering the under-served communities by creating sustainable economic opportunities</p>
                </div>
                <div className='w-[60%] h-[350px]'>
                    <Image src={jkd} alt='jkd' className=' rounded-2xl h-full w-full relative object-cover' />
                </div>
            </div>
            <div className=' flex gap-5 pt-5'>
                    {/* <div className='w-[60%] h-full'>
                        <Image src={jkd2} alt='jkd' className=' rounded-2xl h-[500px] w-full relative object-cover' />
                    </div> */}
                    <div className='w-[40%]'>                
                        <h3 className='text-[30px] font-semibold'>Vision</h3>
                        <p className='text-gray-700 text-justify pt-4'>To uplift and empower under-served communities through innovative and sustainable initiatives in vocational training, skill development, sustainable tourism, sports for development, health-care, and organizing events that promote social causes, community cohesion, and cultural exchange</p> 
                    </div>
                    <div className='w-[60%] h-full '>
                        <h3 className='text-[30px] font-semibold  '>Values</h3>
                        <ul className='text-gray-700 pt-4 '>
                            <li><span className='font-semibold text-black'>Empowerment: </span>    Unlocking potential through skills and resources.</li>
                            <li><span className='font-semibold text-black'>Sustainability: </span>    Fostering growth that benefits present and future generations.</li>
                            <li><span className='font-semibold text-black'>Inclusive: </span>    Promoting equality and accessibility for all.</li>
                            <li><span className='font-semibold text-black'>Integrity: </span>    Upholding transparency, accountability, and ethical conduct.</li>
                            <li><span className='font-semibold text-black'>Innovation: </span>    Embracing creative solutions to social challenges.</li>
                            {/* <li><span className='font-semibold text-black'>Collaboration:</span> Partnering for collective impact.</li>
                            <li><span className='font-semibold text-black'>Respect for Culture:</span> Honoring and preserving cultural heritage.</li> */}
                        </ul>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default JKD