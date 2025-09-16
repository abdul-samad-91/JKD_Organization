"use client"
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import { useGlobal } from '@/context/GlobleContext'
import React, { useState } from 'react'

import icon1 from '../../../public/contact-icon1.png';
import icon2 from '../../../public/contact-icon2.png';
import icon3 from '../../../public/contact-icon3.png';
// import Details from '../programs/details/[id]/page';
// import Image from 'next/image'

const info = [
    {   
        color:"#00874F",
        name: "Address Main Campus",
        icon:icon3,
        details: ["16-B, Old Jamrud Road University Town Peshawa"]
    },
    {
        color:"#177faa",
        name: "Contact info",
        icon:icon2,
        details: [
            "Days: Monday - Saturday",
            "Time: 09:00 am - 05:00 pm"
        ]    
    },
    {
        color:"#e98b28",
        name: "Work timer",
        icon:icon1,
        details: ["Monday - Saturday: 09:00 am - 05:00 pm"]
    }
];

const ContactUs = () => {

    const {theme} = useGlobal();
    const [contactForm , setContactForm] = useState({
        userName:'',
        email:'',
        phoneNumber:'',
        subject:'',
        message:''
    });
    const [loading , setLoading] = useState(false)

    const handleChange = (event)=>{
        const { value , name } = event.target;
        setContactForm((preValue)=>{
            return {
                ...preValue,
                [name]:value,
            }
        })
    }

const handleSubmit = async (e) => {
  e.preventDefault()

    setLoading(true);

  try {
    const response = await axiosInstance.post("/api/contact", applyForm);
    console.log(response);
    const data = response.data;

    toast.success(data.message || "Email Send Successfully");

    router.push("/admin"  );
  } catch (err) {
    const errorMessage = err.response?.data?.error || "Something went wrong. Please try again.";
    toast.error(errorMessage);
  } finally {
    setLoading(false);
  }
};

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
            <section className={`${theme === "light" ? "bg-[#eefbff]" : "bg-[#080808]"} w-full flex flex-col items-center my-10 py-10`}>    
            
                <div className='flex flex-col md:flex-row justify-between gap-5 w-full lg:max-w-[1200px] px-4'>
                    {
                        info?.map((details , index) =>
                        <div  key={index} className={` py-10 rounded md:w-[33%] border  ${theme === 'dark' ? 'bg-black border-[#177eaa94]' : 'bg-white border-[#00874f85]'} flex flex-col justify-center items-center`}>
                            <div src={details.icon} alt={index}  className="w-[150px] h-[80px] object-contain self-center " style={{
                                WebkitMaskImage: `url(${details.icon.src})`,
                                WebkitMaskRepeat: "no-repeat",
                                WebkitMaskPosition: "center",
                                WebkitMaskSize: "contain",
                                maskImage: `url(${details.icon.src})`,
                                maskRepeat: "no-repeat",
                                maskPosition: "center",
                                maskSize: "contain",
                                backgroundColor: details.color, 
                                }} 
                            />
                            {/* <h3 className={`text-xl sm:text-2xl lg:text-[30px] pt-3 pb-4 font-semibold w-full text-center px-5`}>{details.name}</h3> */}
                            <h3 className=" text-[17px] md:text-[21px] lg:text-[25px] font-semibold pb-3 ">{details.name}</h3>

                            {
                                details?.details?.map((text , index)=>
                                    <p key={index} className={`text-gray-700 text-sm  md:text-base px-2  text-center w-full ${theme === 'light' ? ' black ':'text-white'}`}>{text}</p>
                                )
                            }
                        </div>
                        )
                    }
                </div>
            </section>

            <section className={`${theme === "light" ?  "bg-[#eefbff]" : "bg-[#080808]"} w-full flex flex-col items-center mb-10 py-10`}>    
            
                <h3 className={`text-[17px] md:text-[21px] lg:text-[25px] font-semibold pb-3 w-full md:w-[600px] text-center px-5`}>Reach out to us by filling out the form below, and we’ll be in touch soon.</h3>
                <form onSubmit={handleSubmit} className='w-full px-4 pt-3 md:pt-5 md:w-[600px]'>
                    {/* UserName */}
                    <div className='flex flex-col gap-3  w-full'>
                        <label htmlFor='usrName' className=" text-sm font-semibold md:text-base">User Name</label>
                        <input name='userName' value={contactForm.value} onChange={handleChange} type='text' id='usrName' placeholder='user name' className={`text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'}  p-2 rounded  outline-none`} />
                    </div>
                    {/* Email */}
                    <div className='flex flex-col gap-3  w-full pt-5'>
                        <label htmlFor='email' className=" text-sm font-semibold md:text-base" >Emails</label>
                        <input name='email' value={contactForm.email} onChange={handleChange} type='email' id='email' placeholder='email' className={`text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`} />
                    </div>
                    {/* PhoneNumber */}
                    <div className='flex flex-col gap-3  w-full pt-5'>
                        <label htmlFor='number' className=" text-sm font-semibold md:text-base" >Phone Number</label>
                        <input name='number' value={contactForm.nunber} onChange={handleChange} type='number' id='number' placeholder='phone number' className={`text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`} />
                    </div>
                    {/* subject */}
                    <div className='flex flex-col gap-3  w-full pt-5'>
                        <label htmlFor='subject' className=" text-sm font-semibold md:text-base">Subject</label>
                        <input name='subject' value={contactForm.subject} onChange={handleChange} type='text' id='subject' placeholder='subject' className={`text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`} />
                    </div>
                    {/* textarea */}
                    <div className='flex flex-col gap-3 w-full pt-5'>
                        <label htmlFor='message' className=" text-sm font-semibold md:text-base">Message</label>
                        <textarea name='message' value={contactForm.message} onChange={handleChange} rows={5} id='message'  className={`text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`} />
                    </div>
                    {/* buttton */}
                    <div className='  pt-5'>
                        <button type='submit' className={`px-4 py-2 rounded ${theme === 'light' ? 'bg-[#00874F] hover:text-white hover:bg-black': 'hover:text-black hover:bg-white bg-[#177faa]'} transition cursor-pointer text-white text-sm md:text-[14px] lg:text-base`}>
                            {loading ? 'sending ...' : 'send'}
                        </button>
                    </div>
                </form>
            </section>
            
        </div>
        <Footer />
    </div>
  )
}

export default ContactUs