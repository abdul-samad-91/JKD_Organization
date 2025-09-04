"use client"
import React from 'react'
import { allprograms } from '../../page'
import { usePathname, useRouter } from 'next/navigation'
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import { useGlobal } from '@/context/GlobleContext'
import Image from 'next/image'

const Details = () => {
    const  router = useRouter();
    const {theme} = useGlobal();
    const pathname = usePathname();
    const id =pathname.split("/")[3];
    const [details] = allprograms?.filter(program => program._id === id);
    const conditionalRenderValue1 = Math.ceil(details?.trade1?.length/2)
    const conditionalRenderValue2 = Math.ceil(details?.trade2?.length/2)
    const conditionalRenderValue3 = Math.ceil(details?.trade3?.length/2)
    console.log(details)
  return (
    < div className={` h-screen w-full  flex flex-col justify-between `}>
        <Header />
        <div className={`${theme === 'light' ? 'bg-white text-black':'bg-black text-white'} flex flex-col items-center mt-20`}>
            <div className=' w-full lg:w-[1200px] px-4'> 
                <h1 className={`${theme === 'light' ? 'text-[#00874F]': 'text-[#177faa]'} text-start w-full text-[30px] md:text-[35px] lg:text-[39px] font-extrabold   `}>{details.title}</h1>
                <div className='text-sm'>
                    <span className={`${theme === 'light' ? 'text-gray': 'text-white'}} cursor-pointer`} onClick={()=> router.push('/')}>Home - </span>
                    <span className={`${theme === 'light' ? 'text-gray': 'text-white'}} cursor-pointer`} onClick={()=> router.push('/programs')}>Programs - </span>
                    <span className={`${theme === 'light' ? 'text-[#00874F]': 'text-[#177faa] '} cursor-pointer`}  >{details.title}</span>
                </div>
            </div>
            {/* program page content */}
            <section className={`${theme === "light" ? "bg-[#eefbff]" : "bg-black"} w-full flex flex-col items-center my-10 py-10`}>
                <div className='w-[1200px]'>
                    <Image src={details.detialPic} className=' w-full h-[500px] object-cover  rounded'   alt="detailImgae" />
                </div>
                <div className='max-w-[1200px] pt-4'>
                    <h2 className='  text-start text-[35px] font-semibold'>{details.title} </h2>
                    <p className={` pt-2 ] ${theme === 'light' ? ' text-gray-700 ':'text-white'}`}>{details.fullDescription}</p>
                </div>
                <div>
                </div> 
            </section>
            {/* trade 1 */}
            {details.trade1 &&
            <section className={`${theme === "light" ? "bg-[#eefbff]" : "bg-black"}   w-full flex flex-col items-center  py-10`}>
                <div className='w-[1200px] flex  items-center '>
                    <div className={`p-4  px-10 w-[45%]   rounded ${ theme === "dark" ? "bg-[#177eaa94]" : "bg-[#00874f85]" }`}>
                        <h3 className=' text-[30px]  font-semibold pt-4'>{details.tradeName[0]}</h3>
                        <div className='flex pt-2'>
                            <ul className='list-disc list-inside ml-2'>
                                {details?.trade1?.map((trade , index)=>
                                index <conditionalRenderValue1 &&  <li key={index}>{trade}</li>
                                )}
                            </ul>
                            <ul className='list-disc list-inside ml-2'>
                                {details?.trade1?.map((trade , index)=>
                                index >conditionalRenderValue1 &&  <li key={index}>{trade}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <Image src={details.icon1} className='w-[55%] h-[400px] object-contain'  alt='icon1'/>
                </div>
            </section>}
            {/* trade 2 */}
            {details.trade2 &&
            <section className={`${theme === "light" ? "bg-[#eefbff]" : "bg-black"}   w-full flex flex-col items-center my-10 py-10`}>
                <div className='w-[1200px] flex  items-center '>
                    <Image src={details.icon2} className='w-[55%] h-[400px] object-contain'  alt='icon2'/>
                    <div className={`p-4  px-10 w-[45%]   rounded ${ theme === "dark" ? "bg-[#177eaa94]" : "bg-[#00874f85]" }`}>
                        <h3 className=' text-[30px]  font-semibold pt-4'>{details.tradeName[1]}</h3>
                        <div className='flex pt-2'>
                            <ul className='list-disc list-inside ml-2'>
                                {details?.trade2?.map((trade , index)=>
                                index <conditionalRenderValue2 &&  <li key={index}>{trade}</li>
                                )}
                            </ul>
                            <ul className='list-disc list-inside ml-2'>
                                {details?.trade2?.map((trade , index)=>
                                index >conditionalRenderValue2 &&  <li key={index}>{trade}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>}
            {/* trade 3 */}
            {details.trade3 &&
            <section className={`${theme === "light" ? "bg-[#eefbff]" : "bg-black"}   w-full flex flex-col items-center  py-10`}>
                <div className='w-[1200px] flex  items-center '>
                    <div className={`p-4  px-10 w-[45%]   rounded ${ theme === "dark" ? "bg-[#177eaa94]" : "bg-[#00874f85]" }`}>
                        <h3 className=' text-[30px]  font-semibold pt-4'>{details.tradeName[2]}</h3>
                        <div className='flex pt-2'>
                            <ul className='list-disc list-inside ml-2'>
                                {details?.trade3?.map((trade , index)=>
                                index <conditionalRenderValue3 &&  <li key={index}>{trade}</li>
                                )}
                            </ul>
                            <ul className='list-disc list-inside ml-2'>
                                {details?.trade3?.map((trade , index)=>
                                index >conditionalRenderValue3 &&  <li key={index}>{trade}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <Image src={details.icon3} className='w-[55%] h-[400px] object-contain'  alt='icon3'/>
                </div>
            </section>}
       </div>
       <Footer />
    </div>
  )
}

export default Details