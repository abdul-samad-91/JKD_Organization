"use client"
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import { useGlobal } from '@/context/GlobleContext'
import React from 'react'

const ContactUs = () => {
    const {theme} = useGlobal();
  return (
    <div className={` h-screen w-full  flex flex-col justify-between `}>
        <Header />
        <div className={`${theme === 'light' ? 'bg-white text-black':'bg-black text-white'} flex flex-col items-center mt-20`}>
            <div className=' max-w-[1200px] w-full px-4'> 
                <h1 className={`${theme === 'light' ? 'text-[#00874F]': 'text-[#177faa]'} text-start w-full text-[30px] md:text-[35px] lg:text-[39px] font-extrabold   `}>Contact Us</h1>
                <div className='text-sm'>
                    <span className={`${theme === 'light' ? 'text-gray': 'text-white'}} cursor-pointer`} onClick={()=> router.push('/')}>Home - </span>
                    <span className={`${theme === 'light' ? 'text-[#00874F]': 'text-[#177faa] '} cursor-pointer`} >Contact Us</span>
                </div>
            </div>
            {/* program page content */}
            <section className={`${theme === "light" ? "bg-[#eefbff]" : "bg-black"} w-full flex flex-col items-center my-10 py-10`}>    
                <div className="relative  max-w-[1200px] px-4 lg:px-0 flex gap-10 justify-between items-center ">
                    {/* form */}
                    <form className='w-[60%]'>
                        {/* UserName */}
                        <div className='flex flex-col gap-3  w-full'>
                            <label className='font-semibold'>User Name</label>
                            <input type='text' placeholder='user name' className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded  outline-none`} />
                        </div>
                        {/* Email and PhoneNumber */}
                        <div className='flex gap-3  pt-5'>
                            <div className='flex flex-col gap-3  w-[50%]'>
                                <label className='font-semibold'>Emails</label>
                                <input type='email' placeholder='email' className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded  outline-none`} />
                            </div>
                            <div className='flex flex-col gap-3  w-[50%]'>
                                <label className='font-semibold'>Phone Number</label>
                                <input type='number' placeholder='phone number' className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded  outline-none`} />
                            </div>
                        </div>
                        {/* textarea */}
                        <div className='flex flex-col gap-3  w-full pt-5'>
                            <label className='font-semibold'>Message</label>
                            <textarea rows={5}   className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded  outline-none`} />
                        </div>
                        {/* buttton */}
                        <div className='  pt-5'>
                            <button type='submit' className={`hidden md:block px-4 py-2 rounded ${theme === 'light' ? 'bg-[#00874F] hover:text-white hover:bg-black': 'hover:text-black hover:bg-white bg-[#177faa]'} transition cursor-pointer text-white text-sm md:text-[14px] lg:text-base`}>
                                Send
                            </button>
                        </div>
                    </form>
                    {/* content */}
                    <div className='w-[40%] flex flex-col justify-center'>
                        <h2 className='text-[35px] font-semibold '>HAVE A PROJECT?</h2>
                        <h2 className='text-[35px] font-semibold leading-8 '>GET IN TOUCH.</h2>
                        <h3 className={`text-xl sm:text-2xl lg:text-[30px] pt-3 pb-4 font-semibold w-full ${theme === 'light' ? 'text-[#00874F]': 'text-[#177faa]'} `}>THINK WE DO NEXT.</h3>
                        <ul className='list-disc disc-inside text-[18px] ml-5 '>
                            <li>Our team contacts you within one business day</li>
                            <li>We engage in an initial discussion to understand your requirements</li>
                            <li>Our team of analysts and developers assess the scope and propose a way forward with mutual consultation</li>
                            <li>All information exchange is protected via a mutual NDA</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
        <Footer />
    </div>
  )
}

export default ContactUs