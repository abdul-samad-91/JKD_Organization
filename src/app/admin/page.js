"use client"
import AdminLeftSidebar from '@/component/AdminLeftSidebar';
import { useGlobal } from '@/context/GlobleContext'
import axiosInstance from '@/lib/axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const Adimn = () => {
    const {theme} = useGlobal();
    const router = useRouter();
    const [ view , setView ] = useState(false);

    async function apiCall(){
      try {
        const response = await axiosInstance.get('/api/me');
        response.status === 200 && setView(true);
      } catch (error) {
        if(error.status === 401){
          router.push('/');
          toast.error('Unauthorized login again');
        }
      }

    }
    useEffect(()=>{
      apiCall();
    },[]);

    if(!view) return null; 

  return (
    <div className='flex h-screen  w-full'>
      <AdminLeftSidebar className="w-[20%]" />
      <div className={`w-[80%] ${theme === 'light' ? 'bg-white':'bg-[#080808]'} `}>
        <h1 className={`${theme === 'light' ? 'text-[#00874F]': 'text-[#177faa]'} text-start w-full px-10 pt-[18px] lg:text-[39px] lg:font-extrabold font-bold  `}>Profile</h1>
      </div>
    </div>
  )
}

export default Adimn