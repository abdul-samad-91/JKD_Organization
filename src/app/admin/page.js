"use client"
import AdminLeftSidebar from '@/component/AdminLeftSidebar';
import { useGlobal } from '@/context/GlobleContext'
import { apiCall } from '@/helper/authenticateApiCall';
import axiosInstance from '@/lib/axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const Adimn = () => {
    const {state , dispatch} = useGlobal();
    const {theme , email , role} = state;
    const router = useRouter();
    const [ view , setView ] = useState(false);

    useEffect(()=>{
      apiCall(axiosInstance, dispatch,router,toast , setView)
    },[]);

    if(!view) return <div>loading... </div>; 
    console.log(document.cookie.token)
  return (
    <div className='flex h-screen  w-full'>
      <AdminLeftSidebar className="w-[20%]" />
      <div className={`w-[80%] ${theme === 'light' ? 'bg-white':'bg-[#080808]'} `}>
        <div className=' flex justify-between items-center px-10 pt-[18px]' >
          <h1 className={`${theme === 'light' ? 'text-[#00874F]': 'text-[#177faa]'} text-start   lg:text-[39px] lg:font-extrabold font-bold  `}>Profile</h1>
          <div className='text-sm'>
            <p className='flex gap-1 items-center'>
              <span className=' font-semibold'>Email - </span>
              <span>{email}</span>
            </p>
            <p className='flex gap-1 items-center'>
              <span className='font-semibold'>Role -</span>
              <span>{role}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Adimn