"use client"
import Footer from '@/component/Footer';
import Header from '@/component/Header';
import { useGlobal } from '@/context/GlobleContext';
import { useRouter } from 'next/navigation';
import React from 'react'

const Booking = () => {
  const {theme} = useGlobal();
  const router = useRouter()
  return (
    <div className={` h-screen w-full  flex flex-col justify-between `}>
      <Header />
      <div className={`${theme === 'light' ? 'bg-white text-black':'bg-black text-white'} flex flex-col items-center mt-20`}>
        <div className=' w-full lg:w-[1200px]'> 
            <h1 className={`${theme === 'light' ? 'text-[#00874F]': 'text-[#177faa]'} text-start w-full lg:text-[39px] lg:font-extrabold font-bold  `}>Booking</h1>
            <div className='text-sm'>
                <span className={`${theme === 'light' ? 'text-gray': 'text-white'}} cursor-pointer`} onClick={()=> router.push('/')}>Home - </span>
                <span className={`${theme === 'light' ? 'text-[#00874F]': 'text-[#177faa] '} cursor-pointer`} >Booking</span>
            </div>
        </div>
        {/* program page content */}
        <form className={`${theme === 'light' ? 'bg-[#eefbff]':'bg-black'} w-full flex flex-col items-center my-10 py-10`}>
            <div className='flex w-[1200px] gap-5'>
                <div className='flex flex-col gap-3  w-[33%]'>
                    <label className='font-semibold'>Full Name</label>
                    <input type='text' placeholder='full name' className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded  outline-none`} />
                </div>
                <div className='flex flex-col gap-3 ] w-[33%]'>
                    <label className='font-semibold'>Contact Number</label>
                    <input type='number' placeholder='phone Number' className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded  outline-none`} />
                </div>
                <div className='flex flex-col gap-3  w-[33%]'>
                    <label className='font-semibold'>Email Address</label>
                    <input type='text' placeholder='email' className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded  outline-none`} />
                </div>
            </div>
            <div className='flex w-[1200px] gap-5 pt-5'>
                <div className='flex flex-col gap-3  w-[50%]'>
                    <label className='font-semibold'>Booking Date</label>
                    <input type='date' className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded  outline-none`} />
                </div>
                <div className='flex flex-col gap-3  w-[50%]'>
                    <label className='font-semibold'>Time Slot</label>
                    <input type='time'  className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded  outline-none`} />
                </div>
            </div>
            <div className='flex w-[1200px] gap-5 pt-5'>
                <div className='flex flex-col gap-3  w-[33%]'>
                    <label className='font-semibold'>Select Service / Package</label>
                    <select className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded  outline-none`}>
                        <option value="">Select Service / Package</option>
                        <option value="basic">Basic Package</option>
                        <option value="premium">Premium Package</option>
                        <option value="vip">VIP Package</option>
                    </select>                    
                </div>
                <div className='flex flex-col gap-3  w-[33%]'>                
                    <label className='font-semibold'>Persons</label>
                    <input type='number' min={1}  className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded  outline-none`} />
                </div>
                <div >
                    <p className="font-medium">Payment Method:</p>
                    <div className=" flex mt-5 gap-5 ">
                        <label className="flex  gap-2">
                            <input type="radio" name="paymentMethod" value="cash" />
                            Cash
                        </label>
                        <label className="flex  gap-2">
                            <input type="radio" name="paymentMethod" value="bank"  />
                            Bank Transfer
                        </label>
                        <label className="flex  gap-2">
                            <input type="radio"  name="paymentMethod"  value="online" />
                            Online Payment
                        </label>
                    </div>
                </div>
            </div>
            <div className='w-[1200px]  pt-5'>
                <button className={`hidden md:block px-4 py-2 rounded ${theme === 'light' ? 'bg-[#00874F] hover:text-white hover:bg-black': 'hover:text-black hover:bg-white bg-[#177faa]'} transition cursor-pointer text-white text-sm md:text-[14px] lg:text-base`}>
                    Submit
                </button>
            </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Booking