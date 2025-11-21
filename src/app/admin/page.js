// "use client"
// import AdminLeftSidebar from '@/component/AdminLeftSidebar';
// import { useGlobal } from '@/context/GlobleContext'
// import { apiCall } from '@/helper/authenticateApiCall';
// import axiosInstance from '@/lib/axios';
// import { useRouter } from 'next/navigation';
// import React, { useEffect, useState } from 'react'
// import { toast } from 'react-toastify';

// const Adimn = () => {
//     const {state , dispatch} = useGlobal();
//     const {theme , email , role} = state;
//     const router = useRouter();
//     const [ view , setView ] = useState(false);

//     useEffect(()=>{
//       apiCall(axiosInstance, dispatch,router,toast , setView)
//     },[]);

//     if(!view) return <div>loading... </div>; 
//     console.log(document.cookie.token)
//   return (
//     <div className='flex h-screen  w-full'>
//       <AdminLeftSidebar className="w-[20%]" />
//       <div className={`w-[80%] ${theme === 'light' ? 'bg-white':'bg-[#080808]'} `}>
//         <div className=' flex justify-between items-center px-10 pt-[18px]' >
//           <h1 className={`${theme === 'light' ? 'text-[#00874F]': 'text-[#177faa]'} text-start   lg:text-[39px] lg:font-extrabold font-bold  `}>{role==="admin" ? "Admin " : "User "}Dashboard</h1>
//           <div className='text-sm'>
//             <p className='flex gap-1 items-center mb-1'>
//               <span className=' font-semibold'>Email - </span>
//               <span>{email}</span>
//             </p>
//             {/* <p className='flex gap-1 items-center'>
//               <span className='font-semibold'>Role -</span>
//               <span>{role}</span>
//             </p> */}
//             <span className="text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded-full font-semibold">System Administrator</span>

//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Adimn


"use client"

import AdminLeftSidebar from "@/component/AdminLeftSidebar";
import { useGlobal } from "@/context/GlobleContext";
import { apiCall } from "@/helper/authenticateApiCall";
import axiosInstance from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import LoadingScreen from "@/component/LoadingScreen";


// Sample data for demonstration purposes
const recentApplications = [
    { id: 1, name: 'Ahmad Khan', course: 'Electrical Technician', date: '2024-10-25', status: 'Approved' },
    { id: 2, name: 'Sana Batool', course: 'Welding Certification', date: '2024-10-28', status: 'Pending' },
    { id: 3, name: 'Zeeshan Malik', course: 'Advanced Plumbing', date: '2024-10-29', status: 'Rejected' },
    { id: 4, name: 'Maria Iqbal', course: 'Mobile Repair Course', date: '2024-11-01', status: 'Pending' },
    { id: 5, name: 'Fahad Riaz', course: 'HVAC Installation', date: '2024-11-02', status: 'Approved' },
];

const recentBookings = [
    { id: 101, user: 'Usman Ali', service: 'Site Consultation', date: '2024-11-03' },
    { id: 102, user: 'Ayesha Bibi', service: 'Lab Rental (Welding)', date: '2024-11-01' },
    { id: 103, user: 'Farooq Hassan', service: 'Certification Exam', date: '2024-10-30' },
    { id: 104, user: 'Noor Fatima', service: 'Site Consultation', date: '2024-10-27' },
    { id: 105, user: 'Bilal Khan', service: 'Lab Rental (Plumbing)', date: '2024-10-26' },
];

// Helper component for KPI Cards
const KPICard = ({ title, value, icon, bgColor, iconColor }) => (
  <div className={`bg-white p-6 rounded-xl shadow-lg `}>
    <div className="flex items-center space-x-4">
      <div className={`p-3 rounded-full bg-opacity-10 ${bgColor} ${iconColor}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
      </div>
    </div>
  </div>
);

// Helper function for status colors
const getStatusClasses = (status) => {
    switch (status) {
        case 'Approved':
            return 'bg-green-100 text-green-800';
        case 'Pending':
            return 'bg-yellow-100 text-yellow-800';
        case 'Rejected':
            return 'bg-red-100 text-red-800';
        default:
            return 'bg-gray-100 text-gray-800';
    }
};

// Main Admin Dashboard Component
const App = () => {
    // Icons (using inline SVG for cross-browser compatibility and simplicity)
    const UserIcon = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>;
    const FileIcon = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-3-3v6m-4-10H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V9.5M10 4.5l-2-2m0 0l-2 2"></path></svg>;
    const CalendarIcon = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>;
    const MailIcon = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26c.71.47 1.69.47 2.4 0L21 8m-1 12H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2z"></path></svg>;

    // Quick Action Icons
    const CourseIcon = <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.5v11m-4-4h8"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 19l9-5 9 5-9 5z"></path></svg>;
    const NewsletterIcon = <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.5 4.5M19 14.5l-4.5 4.5m-5.4-8.4a3 3 0 11-4.243-4.243 3 3 0 014.243 4.243zM10.757 14.243a3 3 0 11-4.243-4.243 3 3 0 014.243 4.243z"></path></svg>;
    const ManageIcon = <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.945 3.31.879 2.458 2.458a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.945 1.543-.879 3.31-2.458 2.458a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.945-3.31-.879-2.458-2.458a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.945-1.543.879-3.31 2.458-2.458a1.724 1.724 0 002.573-1.066z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>;

    // const colorMap = {
    //   'bg-blue-600': '#2563eb',
    //   'bg-green-600': '#16a34a',
    //   'bg-yellow-600': '#ca8a04',
    //   'bg-red-600': '#dc2626',
    // };
    
    const {state , dispatch} = useGlobal();
    const {theme , email , role} = state;
    const router = useRouter();
    const [ view , setView ] = useState(false);


    useEffect(()=>{
      apiCall(axiosInstance, dispatch,router,toast , setView)
    },[]);


    // if(!view) return <div>loading... </div>;
    if(!view) return <LoadingScreen />; 
    return (
      <div className='flex h-screen  w-full'>
       <AdminLeftSidebar className="w-[20%]" />
        <div className="min-h-screen bg-gray-50 p-4 md:p-8 overflow-auto">
            {/* Header */}
            {/* <header className="mb-8">
                <h1 className="text-4xl font-extrabold text-gray-800">Admin Dashboard</h1>
                <p className="text-gray-500 mt-1">Welcome back, Administrator. Here is an overview of the JKD Organization's activity.</p>
            </header> */}
            <div className=' flex justify-between items-center px-10  ' >
                <div>
                    <h1 className="text-4xl font-extrabold text-gray-800">Admin Dashboard</h1>
                    <p className="text-gray-500 mt-1">Welcome back, Administrator. Here is an overview of the JKD Organization&apos;s activity.</p>
                </div>
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
               
                
            {/* --- 1. Key Metrics Overview --- */}
            <div className="pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <KPICard
                    title="Total Users"
                    value="4,281"
                    icon={UserIcon}
                    bgColor="bg-blue-100"
                    iconColor="text-blue-600"
                />
                <KPICard
                    title="New Applications (Month)"
                    value="104"
                    icon={FileIcon}
                    bgColor="bg-green-100"
                    iconColor="text-green-600"
                />
                <KPICard
                    title="New Bookings (Month)"
                    value="45"
                    icon={CalendarIcon}
                    bgColor="bg-yellow-100"
                    iconColor="text-yellow-600"
                />
                <KPICard
                    title="Messages (Unread)"
                    value="18"
                    icon={MailIcon}
                    bgColor="bg-red-100"
                    iconColor="text-red-600"
                />
            </div>

            {/* --- 2. Main Content: Applications, Bookings, and Actions --- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left Column (2/3 width on large screens) */}
                <div className="lg:col-span-2 space-y-6">
                    
                    {/* Recent Applications Table */}
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold text-gray-800">Recent Applications</h2>
                            <button className="text-sm font-medium text-blue-600 hover:text-blue-800 transition duration-150">
                                View All &rarr;
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applicant Name</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Name</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Application Date</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {recentApplications.map((app) => (
                                        <tr key={app.id}>
                                            <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{app.name}</td>
                                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">{app.course}</td>
                                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{app.date}</td>
                                            <td className="px-4 py-4 whitespace-nowrap">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClasses(app.status)}`}>
                                                    {app.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Recent Bookings List */}
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold text-gray-800">Recent Bookings</h2>
                            <button className="text-sm font-medium text-blue-600 hover:text-blue-800 transition duration-150">
                                View All &rarr;
                            </button>
                        </div>
                        <div className="space-y-3">
                            {recentBookings.map((booking) => (
                                <div key={booking.id} className="flex justify-between items-center p-3 border-b last:border-b-0">
                                    <div className="flex flex-col">
                                        <p className="text-sm font-medium text-gray-900">{booking.service}</p>
                                        <p className="text-xs text-gray-500">Booked by: {booking.user}</p>
                                    </div>
                                    <p className="text-sm text-gray-500">{booking.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div> {/* End Left Column */}

                {/* Right Column (1/3 width on large screens) */}
                <div className="lg:col-span-1">
                    {/* Quick Actions */}
                    <div className="bg-white p-6 rounded-xl shadow-lg sticky top-8">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
                        <div className="space-y-4">
                            <button className="w-full flex items-center justify-center py-3 px-4 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition duration-150 shadow-md">
                                {CourseIcon}
                                Create New Course
                            </button>
                            <button className="w-full flex items-center justify-center py-3 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-150 shadow-md">
                                {NewsletterIcon}
                                Send Newsletter
                            </button>
                            <button className="w-full flex items-center justify-center py-3 px-4 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition duration-150 shadow-md">
                                {ManageIcon}
                                Manage Users
                            </button>
                        </div>
                    </div>
                </div> {/* End Right Column */}

            </div>
        </div>
      </div>
    );
};

export default App;