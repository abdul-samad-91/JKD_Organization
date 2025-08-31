"use client"
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import { useGlobal } from '@/context/GlobleContext'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

  const SubProgram = {
    TVET : ["Mason – Carpenter","Welder – Plumber", "Steel Fixer – Shuttering Carpenter"," Tiles Fitter – Plaster Finisher"," Marble Fixer – Safety Supervisor"," Land Surveyor – Civil Draftsman","Building Painter – Interior Designer", "Scaffolder – Construction Labors","Electrician - Auto-mechanic","Cable Technician - HVAC Technician","CCTV Technician - Lift Operator","Loader - Auto-electrician","Refrigerator Technician","Fiber Technician - Machine Operator","Solar System Technician","Bike Mechanic - Bike Riders" ,"Housekeepers - Janitors/Cleaners","Super Store Workers/Helpers","HTV Drivers - LTV Drivers - Tyreman","Gardeners - Factory Workers", "General Farming - Dairy Farming","Poultry Farming - Aquaculture","Fruit Picker - Fruit Packaging","Construction     Workers"],
    IT_and_Digital_Skills:["Graphic Designing","Web Development", "Software Development", "Digital Marketing", "Professional Photography","Documentary Ad Making 3D", "Animation VR Diploma in DIT", "Technical Drawing", "AutoCAD Civil 3D","eCommerce", "Artificial Intelligence", "Search Engine Optimization (SEO)","Cyber Security"," AI for Banking", "Investing/Trading in Stock/Forex Markets", "AI for Financial Institutes", "Anti-Money Laundering"," Diploma in Financial Market"," 3D CAD Interior Design"],
    Sports_and_Fitness:[ "Indoor Futsal","Indoor Cricket","Karate","Badminton","Yoga", "Table Tennis"," Volley Ball"," Gym & Fitness","Boxing"],
    Overseas_Recruitment:["Bodyweight Exercises","High-Intensity Interval Training","Spiritual & Meditative Practice","Yoga or Pilates","Exercise through Sports","Walking or Jogging","Outdoor Activities","Meal Planning & Mindful Eating","Sustainable weight loss","Increased energy and confidence","Enhanced mental well-being","Certified trainers and weightloss specialist","Personalized coaching and support","Customized fitness and training plans"],
    Travels_and_Tours:["Eco-Friendly Lodges Booking","Sustainable Air Travel Reservation","Green Transportation Facility","Eco-Friendly Events","Environmental Tour Guides","Eco-Focus Photography","Eco-Fresh Meals Experience","Sustainable Tourism Certifications","Tourism Management Courses","Airline Operations – Cargo and Logistics Courses","IATA Certified – Air Ticketing Courses","Religious Tourism","Cultural Tourism – Sports Tourism","Adventure Tourism","Educational Tourism","Health Tourism – Culinary Tourism","Trade Tourism","Industrial Tourism","Corporate/Business Tourism","Backpackers Tourism","Eco-Tourism – Agriculture Tourism","Rural Tourism – Urban Tourism"],
    Parlou:["Skin care","styling coloring treatment","beauty treatment","facial manicures pedicures","waxing","nail care nail art","nail shaping gel extensions","wedding makeup","Beauty therapy certifications","makeup artistry courses","skincare and product knowledge","nail technology courses","hair cutting and styling courses","bridal makeup","hair styling workshops","empowering Parlour professionals"],
    Boutique:["Dress making","Tailoring & Fitting","Alterations","Fashion design","Bridal wears","Personalized styling","Wardrobe management","Fabric selection","Boutique certifications","Fashion design courses","Garment making training","Fashion illustrations","Fashion business","Alteration workshops","Bridal wear designing","Entrepreneurship training"],
    Uplift_Events:["Sports Tourism & Exposures","Family/Friendly Sports Matches","Corporate/NGOs Sports Events","Sports & Cultural Festivals","Sports Championships","Arts & Literature Festivals","Meetings & Trainings","Hunar Rozgar Mela","Environmental workshops and seminars","Corporate / Business / NGOs Events","Trade Fair Exhibitions","Sustainable Food Festivals","Tourism Expos","Environmental fairs and expos","Workshops & Seminars","Job Recruitment Fair"],
    Foudium:["Brunch & Breakfast","Lunch & Dinner","Pakistani Cuisine","Tandoori Chicken or Fish","Biryani – Karahi","Fast Food & Chinese Food","Burgers – Pizza – Pasta","Chai (Tea) & Coffee","Sandwiches – French Toast – Omelets","Fresh Juices & Soft Drinks","Milkshakes & Ice creams","Mineral Water – Fresh Lemonade","Certified Hospitality Management","Hospitality Accounting","Hotel Management Courses","Resort Management","Event Management","Front Desk Operations","Reception Management","Waiter/Waitress Training","Certified Chef Course (CCC)","Catering Management","Laundry Operations","Menu Planning & Kitchen Management"],

  };

const Apply = () => {
  const {theme} = useGlobal();
  const [progm , setProgm] = useState(null);
  const router = useRouter()
  return (
    <div className={` h-screen w-full  flex flex-col justify-between `}>
      <Header />
      <div className={`${theme === 'light' ? 'bg-white text-black':'bg-black text-white'} flex flex-col items-center mt-20`}>
        <div className=' w-full lg:w-[1200px]'> 
            <h1 className={`${theme === 'light' ? 'text-[#00874F]': 'text-[#177faa]'} text-start w-full lg:text-[39px] lg:font-extrabold font-bold  `}>Apply</h1>
            <div className='text-sm'>
                <span className={`${theme === 'light' ? 'text-gray': 'text-white'}} cursor-pointer`} onClick={()=> router.push('/')}>Home - </span>
                <span className={`${theme === 'light' ? 'text-[#00874F]': 'text-[#177faa] '} cursor-pointer`} >Apply</span>
            </div>
        </div>
        {/* program page content */}
        <form className={`${theme === 'light' ? 'bg-[#eefbff]':'bg-black'} w-full flex flex-col items-center my-10 py-10`}>
            {/* first and last name */}
            <div className='flex w-[1200px] gap-5'>
                <div className='flex flex-col gap-3  w-[50%]'>
                    <label className='font-semibold'>First Name</label>
                    <input type='text' placeholder='first name' className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded  outline-none`} />
                </div>
                <div className='flex flex-col gap-3 ] w-[50%]'>
                    <label className='font-semibold'>Last Name</label>
                    <input type='text' placeholder='last name' className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded  outline-none`} />
                </div>
            </div>
            {/* email and DOB */}
            <div className='flex w-[1200px] gap-5 pt-5'>
                <div className='flex flex-col gap-3  w-[50%]'>
                    <label className='font-semibold'>Email</label>
                    <input type='text' placeholder='email' className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded  outline-none`} />
                </div>
                <div className='flex flex-col gap-3  w-[50%]'>
                    <label className='font-semibold'>Date of Birth</label>
                    <input type='date' className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded  outline-none`} />
                </div>
            </div>
            {/* Phone and Address */}
            <div className='flex gap-3  w-[1200px]  pt-5'>
                <div className='flex flex-col gap-3  w-[50%]'>
                    <label className='font-semibold'>Phone Number</label>
                    <input type='text' placeholder='number' className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded  outline-none`} />
                </div>
                <div className='flex flex-col gap-3  w-[50%]'>
                    <label className='font-semibold'>Address</label>
                    <input type='text' placeholder='address' className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded  outline-none`} />
                </div>
            </div>
            {/* CNIC and Father CNIC */}
            <div className='flex w-[1200px] gap-5 pt-5'>
                <div className='flex flex-col gap-3  w-[50%]'>
                    <label className='font-semibold'>CNIC</label>
                    <input type='number' placeholder='without dashes' className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded  outline-none`} />
                </div>
                <div className='flex flex-col gap-3  w-[50%]'>
                    <label className='font-semibold'>Father / Mother CNIC</label>
                    <input type='number' placeholder='without dashes' className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded  outline-none`} />
                </div>
            </div>
            {/* age and gender */}
            <div className='flex w-[1200px] gap-5 pt-5'>
                <div className='flex flex-col gap-3  w-[50%]'>
                    <label className='font-semibold'>Age</label>
                    <input type='number' min={9} className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded  outline-none`} />
                </div>
                <div className='flex flex-col gap-3  w-[50%]'>
                    <label className='font-semibold'>Gender</label>
                    <select className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded  outline-none`}>
                        <option>Choose Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>                    
                </div>
            </div>
            {/* Program and sub Program */}
            <div className='flex w-[1200px] gap-5 pt-5'>
                <div className='flex flex-col gap-3  w-[50%]'>
                    <label className='font-semibold'>Program</label>
                    <select onChange={(e)=>setProgm(e.target.value)} className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded  outline-none`}>
                        <option>Choose Program</option>
                        <option value={'TVET'}>TVET</option>
                        <option value={'IT_and_Digital_Skills'}>IT and Digital Skills</option>
                        <option value={'Sports_and_Fitness'}>Sports and Fitness</option>
                        {/* <option value={'Overseas_Recruitment'}>Overseas Recruitment</option> */}
                        {/* <option value={'Travels_and_Tours'}>Travels and Tours</option> */}
                        <option value={'Parlour'}>Parlour</option>
                        <option value={'Boutique'}>Boutique</option>
                        {/* <option value={'Uplift_Events'}>Uplift Events</option> */}
                        {/* <option value={'Foudium'}>Foudium</option> */}
                    </select>                    
                </div>
                <div className='flex flex-col gap-3  w-[50%]'>
                    <label className='font-semibold'>SubProgram</label>
                    <select className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded  outline-none`}>
                        <option>Choose Subprogram</option>
                        {
                            SubProgram[progm]?.map((Sprogram , index)=>
                                <option key={index} value={Sprogram}>{Sprogram}</option>
                            )
                        }
                    </select>                     
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

export default Apply