"use client"
import AdminLeftSidebar from '@/component/AdminLeftSidebar';
import { useGlobal } from '@/context/GlobleContext'
import React from 'react'

const Adimn = () => {
    const {theme} = useGlobal();
  return (
    <div className='flex h-screen  w-full'>
      <AdminLeftSidebar className="w-[20%]" />
      <div className={`w-[80%] ${theme === 'light' ? 'bg-[#eefbff]':'bg-[#080808]'} `}>
        <h1 className={`${theme === 'light' ? 'text-[#00874F]': 'text-[#177faa]'} text-start w-full px-10 pt-[18px] lg:text-[39px] lg:font-extrabold font-bold  `}>Profile</h1>
      </div>
    </div>
  )
}

export default Adimn