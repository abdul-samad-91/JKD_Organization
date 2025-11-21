"use client"

import AdminLeftSidebar from '@/component/AdminLeftSidebar'
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import { useGlobal } from '@/context/GlobleContext'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axiosInstance from '@/lib/axios'
import LoadingScreen from '@/component/LoadingScreen'

const itProgram=["MERN Stack","MEAN Stack" ,"Flutter ","React Native","UI/UX Design","Graphic Design",];
const tevet=["Plumber & Pipe Fabricator Course","Tile Fixer","Plasterer","Steel Fixer","Carpenter","Building Electrician","Industrial Electrician","Fiber Optics Technician","Solar System Technician","CCTV Technician","Front Office Manager","Professional Cook","Fast Food Expert","Housekeeing","Tour Operator","Domestic Skilled Worker","Welder","HVACR Technician","Lift Operator",,"Arena Football","Football","Badminton","Table Tennis","Fitness Club","Cricket"]

const Apply = () => {
  const {id} = useParams();
//   const {theme} = useGlobal();
  const theme = 'light';
  const [progm , setProgm] = useState(null);
  const router = useRouter();
  const [applyForm , setApplyForm] = useState({
    fullName:'',
    email:'',
    contactNumber:'',
    location:'',

    // Professional Details
    currentJobTitle:'',
    totalExperience:'',
    // skills:'',
    resume:'',

    // Education
    // highestEducation:'',
    // university:'',

    // Job Preferences
    expectedSalary:'',
    availability:'',
    preferredWorkType:'',

    // Optional but Useful
    linkedinProfile:'',
    portfolio:'',
    coverLetter:''
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    event.preventDefault()
    const {value , name  , files } = event.target;
    if(files){
        return setApplyForm((preValue) => {
            return {
                ...preValue,
                [name] : files[0]
            }
        })
    } 
    
    setApplyForm((preValue) => {
        return {
            ...preValue,
            [name] : value
        }
    })

  }


  
const handleSubmit = async (e) => {
  e.preventDefault()
  let formData = new FormData();
  for(let field in applyForm){
    formData.append(field , applyForm[field]);
  }
  console.log(applyForm)
//   const {firstName,lastName,email,dateOfBirth,phoneNumber,address,CNIC,parentCNIC,age,gender,program,subProgram} = applyForm;
  
  setLoading(true);
  try {
    const response = await axiosInstance.post("/api/apply/job", formData , {
      headers: { "Content-Type": "multipart/form-data" }
    });
    console.log(response);
    const data = response.data;

    toast.success(data.message || "Login successful");

    // router.push("/admin"  );
  } catch (err) {
    console.log("catch block", err)
    const errorMessage = err.response?.data?.error || "Something went wrong. Please try again.";
    toast.error(errorMessage);
  } finally {
    setLoading(false);
  }
};

  const [screenLoading, setScreenLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScreenLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (screenLoading) return <LoadingScreen />;
  return (
    <div className={`${theme === 'light' ? 'bg-[#eefbff] text-black':'bg-[#080808] text-white'} flex  flex-col   w-full `}>
        <Header />
        {/* <AdminLeftSidebar className="w-[20%]" /> */}
        <form onSubmit={handleSubmit} className={` w-full  flex flex-col items-center p-10 mt-20 `}>
            {/* <h1 className={`${theme === 'light' ? 'text-[#00874F]': 'text-[#177faa]'} text-start w-full  lg:text-[39px] lg:font-extrabold font-bold  `}>Regester</h1> */}
            <h3 className=' text-[17px] md:text-[21px] lg:text-[25px] font-semibold w-full  '>
               Basic Information
            </h3>
            {/* full name and email */}
            <div className='flex w-full gap-5 pt-8'>
                <div  className='flex flex-col gap-3  w-[50%]'>
                    <label htmlFor="name" className='font-semibold text-sm md:text-base '>Full Name</label>
                    <input id='name' type='text' name='fullName' onChange={handleChange} value={applyForm.fullName} placeholder='name' className={`text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`}  required/>
                </div>
                <div className='flex flex-col gap-3 ] w-[50%]'>
                    <label htmlFor='fName' className='text-sm md:text-base font-semibold'>Email</label>
                    <input id='fName' type='email' name='email' onChange={handleChange} value={applyForm.email} placeholder='email' className={`text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`} required />
                </div>
            </div>
            {/* contac number and location */}
            <div className='flex w-full gap-5 pt-5'>
                <div className='flex flex-col gap-3  w-[50%]'>
                    <label className='text-sm md:text-base font-semibold'>Contact Number</label>
                    <input type='number' name='contactNumber' onChange={handleChange} value={applyForm.contactNumber}  placeholder='contact number' className={`text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`} required />
                </div>
                <div className='flex flex-col gap-3  w-[50%]'> 
                    <label className='text-sm md:text-base font-semibold'>Location</label>
                    <input type='text' name='location' onChange={handleChange} value={applyForm.location} placeholder='location' className={`text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`} required />
                </div>
            </div>

            
            {/* Professional Details */}
            <h3 className=' text-[17px] md:text-[21px] lg:text-[25px] font-semibold w-full  pt-10'>
                Professional Details
            </h3>
            {/* current job and total experience */}
            <div className='flex w-full gap-3 pt-5'>
                <div className='flex flex-col gap-3  w-[50%]'>
                    <label className='text-sm md:text-base font-semibold'>Current Job Title</label>
                    <input type='text' name='currentJobTitle' onChange={handleChange} value={applyForm.currentJobTitle} placeholder='job ' className={`text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`} required />
                </div>
                <div className='flex flex-col gap-3  w-[50%]'>
                    <label className='text-sm md:text-base font-semibold'>Total Ecpericence</label>
                    <input type='number' name='totalExperience' onChange={handleChange} value={applyForm.totalExperience} placeholder='experience' className={`text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`} required />
                </div>
            </div>
            {/* Resume */}
            <div className='flex flex-col gap-3  w-full pt-5'>
                <label htmlFor='resume' className='text-sm md:text-base font-semibold'>Resume</label>
                <input id='resume' type='file' name='resume ' onChange={handleChange} value={applyForm.resume} className={`text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`} required />                   
            </div> 

            
            {/* Education
            <h3 className=' text-[17px] md:text-[21px] lg:text-[25px] font-semibold w-full  pt-10'>
                Education
            </h3>
             heighest Education / institute name / field of Study  
            <div className='flex w-full gap-5 pt-5'>
                <div className='flex flex-col gap-3  w-[50%]'>
                    <label className='text-sm md:text-base font-semibold'>Highest Education</label>
                    <input type='number' name='CNIC' onChange={handleChange} value={applyForm.CNIC} placeholder='without dashes' className={`$text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`} required />
                </div>
                <div className='flex flex-col gap-3  w-[50%]'>
                    <label className='text-sm md:text-base font-semibold'>Father / Mother CNIC</label>
                    <input type='number' name='parentsCNIC' onChange={handleChange} value={applyForm.parentsCNIC} placeholder='without dashes' className={`text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`} required />
                </div>
            </div> */}


            {/* Job Preferences */}
            <h3 className=' text-[17px] md:text-[21px] lg:text-[25px] font-semibold w-full  pt-10'>
                Job Preferences
            </h3>
            {/* experience /  availability / preferred work type */}
            <div className='flex w-full gap-5 pt-5'>
                <div className='flex flex-col gap-3  w-[33%]'>
                    <label className='text-sm md:text-base font-semibold'>Expected Salary (pkr)</label>
                    <input type='number' name='expectedSalary' onChange={handleChange} value={applyForm.expectedSalary} placeholder='salary' className={`$text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`} required />
                </div>                
                <div className='flex flex-col gap-3  w-[33%]'>
                    <label className='text-sm md:text-base font-semibold'>Availability</label>
                    <select name='availability' onChange={handleChange} value={applyForm.availability} className={`text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`}  required>
                        <option value="">choose</option>
                        <option value="Immediately">Immediately</option>
                        <option value="weak">1-2 weeks</option>
                        <option value="month">a month</option>
                    </select>                    
                </div>
                <div className='flex flex-col gap-3  w-[33%]'>
                    <label className='text-sm md:text-base font-semibold'>Preferred Work Type</label>
                    <select name='preferredWorkType' onChange={handleChange} value={applyForm.preferredWorkType} className={`text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`}  required>
                        <option value="">choose</option>
                        <option value="Remote">Remote</option>
                        <option value="Onsite">Onsite</option>
                        <option value="Hybrid">Hybrid</option>
                    </select>                    
                </div>
            </div>


           {/* optional */}
            <h3 className=' text-[17px] md:text-[21px] lg:text-[25px] font-semibold w-full  pt-10'>
                Optional
            </h3>
            {/* current job and total experience */}
            <div className='flex w-full gap-3 pt-5'>
                <div className='flex flex-col gap-3  w-[50%]'>
                    <label className='text-sm md:text-base font-semibold'>Linkedin Profile</label>
                    <input type='url' name='linkedinProfile' onChange={handleChange} value={applyForm.linkedinProfile} placeholder='linkedin profile url ' className={`text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`}  />
                </div>
                <div className='flex flex-col gap-3  w-[50%]'>
                    <label className='text-sm md:text-base font-semibold'>Portfolio</label>
                    <input type='url' name='portfolio' onChange={handleChange} value={applyForm.portfolio} placeholder='portfolio url' className={`text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`}  />
                </div>
            </div>
            {/* Resume */}
            <div className='flex flex-col gap-3  w-full pt-5'>
                <label htmlFor='cLetter' className='text-sm md:text-base font-semibold'>Cover Letter</label>
                <textarea id='cLetter' name='coverLetter' value={applyForm.coverLetter} onChange={handleChange} className={`text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`} placeholder='text...' >
                </textarea>                   
            </div> 


            <div className='self-start  pt-5'>
                <button type='submit' className={`hidden md:block  px-4 py-2 rounded ${theme === 'light' ? 'bg-[#00874F] hover:text-white hover:bg-black': 'hover:text-black hover:bg-white bg-[#177faa]'} transition cursor-pointer text-white text-sm md:text-[14px] lg:text-base`}>
                    {loading ? "Submiting..." : "Submit"}
                </button>
            </div>
        </form>
        <Footer />
    </div>
  )
}

export default Apply