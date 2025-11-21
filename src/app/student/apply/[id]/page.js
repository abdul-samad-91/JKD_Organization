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
import StudentLeftSidebar from '@/component/studentLeftSidebar'


const SubProgram = {
TVET : ["Mason – Carpenter","Welder – Plumber", "Steel Fixer – Shuttering Carpenter"," Tiles Fitter – Plaster Finisher"," Marble Fixer – Safety Supervisor"," Land Surveyor – Civil Draftsman","Building Painter – Interior Designer", "Scaffolder – Construction Labors","Electrician - Auto-mechanic","Cable Technician - HVAC Technician","CCTV Technician - Lift Operator","Loader - Auto-electrician","Refrigerator Technician","Fiber Technician - Machine Operator","Solar System Technician","Bike Mechanic - Bike Riders" ,"Housekeepers - Janitors/Cleaners","Super Store Workers/Helpers","HTV Drivers - LTV Drivers - Tyreman","Gardeners - Factory Workers", "General Farming - Dairy Farming","Poultry Farming - Aquaculture","Fruit Picker - Fruit Packaging","Construction     Workers"],
IT_and_Digital_Skills:["Graphic Designing","Web Development", "Software Development", "Digital Marketing", "Professional Photography","Documentary Ad Making 3D", "Animation VR Diploma in DIT", "Technical Drawing", "AutoCAD Civil 3D","eCommerce", "Artificial Intelligence", "Search Engine Optimization (SEO)","Cyber Security"," AI for Banking", "Investing/Trading in Stock/Forex Markets", "AI for Financial Institutes", "Anti-Money Laundering"," Diploma in Financial Market"," 3D CAD Interior Design"],
Sports_and_Fitness:[ "Indoor Futsal","Indoor Cricket","Karate","Badminton","Yoga", "Table Tennis"," Volley Ball"," Gym & Fitness","Boxing"],
Overseas_Recruitment:["Bodyweight Exercises","High-Intensity Interval Training","Spiritual & Meditative Practice","Yoga or Pilates","Exercise through Sports","Walking or Jogging","Outdoor Activities","Meal Planning & Mindful Eating","Sustainable weight loss","Increased energy and confidence","Enhanced mental well-being","Certified trainers and weightloss specialist","Personalized coaching and support","Customized fitness and training plans"],
Travels_and_Tours:["Eco-Friendly Lodges Booking","Sustainable Air Travel Reservation","Green Transportation Facility","Eco-Friendly Events","Environmental Tour Guides","Eco-Focus Photography","Eco-Fresh Meals Experience","Sustainable Tourism Certifications","Tourism Management Courses","Airline Operations – Cargo and Logistics Courses","IATA Certified – Air Ticketing Courses","Religious Tourism","Cultural Tourism – Sports Tourism","Adventure Tourism","Educational Tourism","Health Tourism – Culinary Tourism","Trade Tourism","Industrial Tourism","Corporate/Business Tourism","Backpackers Tourism","Eco-Tourism – Agriculture Tourism","Rural Tourism – Urban Tourism"],
Parlour:["Skin care","styling coloring treatment","beauty treatment","facial manicures pedicures","waxing","nail care nail art","nail shaping gel extensions","wedding makeup","Beauty therapy certifications","makeup artistry courses","skincare and product knowledge","nail technology courses","hair cutting and styling courses","bridal makeup","hair styling workshops","empowering Parlour professionals"],
Boutique:["Dress making","Tailoring & Fitting","Alterations","Fashion design","Bridal wears","Personalized styling","Wardrobe management","Fabric selection","Boutique certifications","Fashion design courses","Garment making training","Fashion illustrations","Fashion business","Alteration workshops","Bridal wear designing","Entrepreneurship training"],
Uplift_Events:["Sports Tourism & Exposures","Family/Friendly Sports Matches","Corporate/NGOs Sports Events","Sports & Cultural Festivals","Sports Championships","Arts & Literature Festivals","Meetings & Trainings","Hunar Rozgar Mela","Environmental workshops and seminars","Corporate / Business / NGOs Events","Trade Fair Exhibitions","Sustainable Food Festivals","Tourism Expos","Environmental fairs and expos","Workshops & Seminars","Job Recruitment Fair"],
Foudium:["Brunch & Breakfast","Lunch & Dinner","Pakistani Cuisine","Tandoori Chicken or Fish","Biryani – Karahi","Fast Food & Chinese Food","Burgers – Pizza – Pasta","Chai (Tea) & Coffee","Sandwiches – French Toast – Omelets","Fresh Juices & Soft Drinks","Milkshakes & Ice creams","Mineral Water – Fresh Lemonade","Certified Hospitality Management","Hospitality Accounting","Hotel Management Courses","Resort Management","Event Management","Front Desk Operations","Reception Management","Waiter/Waitress Training","Certified Chef Course (CCC)","Catering Management","Laundry Operations","Menu Planning & Kitchen Management"],

};

const itProgram=["MERN Stack","MEAN Stack" ,"Flutter ","React Native","UI/UX Design","Graphic Design",];
const tevet=["Plumber & Pipe Fabricator Course","Tile Fixer","Plasterer","Steel Fixer","Carpenter","Building Electrician","Industrial Electrician","Fiber Optics Technician","Solar System Technician","CCTV Technician","Front Office Manager","Professional Cook","Fast Food Expert","Housekeeing","Tour Operator","Domestic Skilled Worker","Welder","HVACR Technician","Lift Operator",,"Arena Football","Football","Badminton","Table Tennis","Fitness Club","Cricket"]

const Apply = () => {
  const {id} = useParams();
//   const {theme} = useGlobal();
  const theme = 'light';
  const [progm , setProgm] = useState(null);
  const router = useRouter();
  const {user} = useGlobal();
  const [applyForm , setApplyForm] = useState({
    userId: user?.id || '',
    name:'',
    fatherName:'',
    gender:'',
    email:'',   
    dateOfBirth:'',
    whatsappNumber:'',
    phoneNumber:'',
    CNIC:'',
    parentsCNIC:'',
    // Candidate Address
    province:'',
    district:'',
    tehsil:'',
    // choose course
    chooseCourse:'',
    // priorCertificate:'',
    // Documents
    CNICPicture:'',
    qualification:'',
    passportSizePic:'',
    passport:'',


    // program:'',
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
    const response = await axiosInstance.post("/api/apply", formData , {
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
    <div className={`${theme === 'light' ? 'bg-[#white] text-black':'bg-[#080808] text-white'} h-screen  flex w-full `}>
        <StudentLeftSidebar className="w-[20%] " />
        {/* <Header /> */}
        {/* <AdminLeftSidebar className="w-[20%]" /> */}
        <form onSubmit={handleSubmit} className={` w-full  flex flex-col items-center px-10  overflow-auto  pb-10 `}>
            {/* <h1 className={`${theme === 'light' ? 'text-[#00874F]': 'text-[#177faa]'} text-start w-full  lg:text-[39px] lg:font-extrabold font-bold  `}>Regester</h1> */}
            <h3 className=' text-[17px] md:text-[21px] lg:text-[25px] font-semibold w-full pt-[30px]  '>
               Perosnal Details
            </h3>
            {/* name and fatername */}
            <div className='flex w-full gap-5 pt-8'>
                <div  className='flex flex-col gap-3  w-[50%]'>
                    <label htmlFor="name" className='font-semibold text-sm md:text-base '>Name</label>
                    <input id='name' type='text' name='name' onChange={handleChange} value={applyForm.name} placeholder='first name' className={`text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`}  required/>
                </div>
                <div className='flex flex-col gap-3 ] w-[50%]'>
                    <label htmlFor='fName' className='text-sm md:text-base font-semibold'>Father Name</label>
                    <input id='fName' type='text' name='fatherName' onChange={handleChange} value={applyForm.fatherName} placeholder='last name' className={`text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`} required />
                </div>
            </div>
            {/* gender */}
            <div className='flex flex-col gap-3  w-full pt-5'>
                <label className='text-sm md:text-base font-semibold'>Gender</label>
                <select name='gender' onChange={handleChange} value={applyForm.gender} className={`text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`} required >
                    <option value="">Choose Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>                    
            </div>
            {/* email and DOB */}
            <div className='flex w-full gap-5 pt-5'>
                <div className='flex flex-col gap-3  w-[50%]'>
                    <label className='text-sm md:text-base font-semibold'>Email</label>
                    <input type='text' name='email' onChange={handleChange} value={applyForm.email}  placeholder='email' className={`text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`} required />
                </div>
                <div className='flex flex-col gap-3  w-[50%]'>
                    <label className='text-sm md:text-base font-semibold'>Date of Birth</label>
                    <input type='date' name='dateOfBirth' onChange={handleChange} value={applyForm.dateOfBirth} className={`text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`} required />
                </div>
            </div>
            {/* whatsapp and Phone  number*/}
            <div className='flex w-full gap-3 pt-5'>
                <div className='flex flex-col gap-3  w-[50%]'>
                    <label className='text-sm md:text-base font-semibold'>Whatsapp Number</label>
                    <input type='text' name='whatsappNumber' onChange={handleChange} value={applyForm.whatsappNumber} placeholder='number' className={`text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`} required />
                </div>
                <div className='flex flex-col gap-3  w-[50%]'>
                    <label className='text-sm md:text-base font-semibold'>Phone Number</label>
                    <input type='number' name='phoneNumber' onChange={handleChange} value={applyForm.phoneNumber} placeholder='address' className={`text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`} required />
                </div>
            </div>
            {/* CNIC and father/mother CNIC */}
            <div className='flex w-full gap-5 pt-5'>
                <div className='flex flex-col gap-3  w-[50%]'>
                    <label className='text-sm md:text-base font-semibold'>CNIC</label>
                    <input type='number' name='CNIC' onChange={handleChange} value={applyForm.CNIC} placeholder='without dashes' className={`$text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`} required />
                </div>
                <div className='flex flex-col gap-3  w-[50%]'>
                    <label className='text-sm md:text-base font-semibold'>Father / Mother CNIC</label>
                    <input type='number' name='parentsCNIC' onChange={handleChange} value={applyForm.parentsCNIC} placeholder='without dashes' className={`text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`} required />
                </div>
            </div>
            {/* Applicant Address */}
            <h3 className=' text-[17px] md:text-[21px] lg:text-[25px] font-semibold w-full  pt-10'>
                Applicant Address
            </h3>
            {/* provience / district / tehsil */}
            <div className='flex w-full gap-5 pt-5'>
                <div className='flex flex-col gap-3  w-[33%]'>
                    <label className='text-sm md:text-base font-semibold'>Province</label>
                    <select name='province' onChange={handleChange} value={applyForm.province} className={`text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`} required >
                        <option value="">Province</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Sindh">Sindh</option>
                        <option value="Balochistan">Balochistan</option>
                        <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
                    </select>                    
                </div>                
                <div className='flex flex-col gap-3  w-[33%]'>
                    <label className='text-sm md:text-base font-semibold'>District</label>
                    <select name='district' onChange={handleChange} value={applyForm.district} className={`text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`} required >
                        <option value="">District</option>
                        {
                            applyForm?.province === "Punjab" ?
                            <option value="Lahore">Lahore</option>
                            :
                            applyForm?.province === "Sindh" ?
                            <option value="Karachi">Karachi</option>
                            :
                            applyForm?.province === "Balochistan" ?
                            <option value="Quetta">Quetta</option>
                            :
                            applyForm?.province === "Khyber Pakhtunkhwa" ?
                            <option value="Peshawar">Peshawar</option>
                            :
                            null
                        }
                    </select>                    
                </div>
                <div className='flex flex-col gap-3  w-[33%]'>
                    <label className='text-sm md:text-base font-semibold'>Tehsil</label>
                    <select name='tehsil' onChange={handleChange} value={applyForm.tehsil} className={`text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`} required >
                        <option value="">Tehsil</option>
                        {
                            applyForm?.province === "Punjab" && applyForm?.district === "Lahore" ?
                            <option value="Lahore">Lahore</option>
                            :
                            applyForm?.province === "Sindh" && applyForm?.district === "Karachi" ?
                            <option value="Karachi">Karachi</option>
                            :
                            applyForm?.province === "Balochistan" && applyForm?.district === "Quetta" ?
                            <option value="Quetta">Quetta</option>
                            :
                            applyForm?.province === "Khyber Pakhtunkhwa" && applyForm?.district === "Peshawar" ?
                            <option value="Peshawar">Peshawar</option>
                            :
                            null 
                        }
                    </select>                    
                </div>
            </div>
            {/* Preffered Course*/}
            <h3 className=' text-[17px] md:text-[21px] lg:text-[25px] font-semibold w-full  pt-10'>
                Preffered Course
            </h3>
            {/* sector / course */}
            <div className='flex flex-col w-full gap-5 pt-5'>
                <label className='text-sm md:text-base font-semibold'>Choose Sector</label>
                <select name='chooseCourse' onChange={handleChange} value={applyForm.chooseCourse} className={`text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`} required >
                    <option value="">-Select-</option>
                    {
                    id === 'it-program'?
                    itProgram.map((program , index)=>
                        <option key={index} value={program}>{program}</option>
                    )
                    :id === 'tevet'?
                    tevet.map((program , index)=>
                        <option key={index} value={program}>{program}</option>
                    ):
                    null
                    }
                </select> 
            </div> 

            {/* Documents */}
            <h3 className=' text-[17px] md:text-[21px] lg:text-[25px] font-semibold w-full  pt-10'>
                Documents
            </h3>
            <p className=' text-sm md:text-base w-full  '>
                Please upload the following documents
            </p>
            {/* CNIC and qualification pic */}
            <div className='flex w-full gap-5 pt-8'>
                <div className='flex flex-col gap-3  w-[50%]'>
                    <label className='text-sm md:text-base font-semibold'>CNIC Picture (Front & Back)</label>
                    <input type='file' name='CNICPicture' onChange={handleChange} className={`w-[95px] text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`}  required/>
                </div>
                <div className='flex flex-col gap-3 ] w-[50%]'>
                    <label className='text-sm md:text-base font-semibold'>Latest Qualification Picture</label>
                    <input type='file' name='qualification' onChange={handleChange}  className={`w-[95px]  text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`}  />
                </div>
            </div>

            {/* CNIC and qualification pic */}
            <div className='flex w-full gap-5 pt-8'>
                <div className='flex flex-col gap-3  w-[50%]'>
                    <label className='text-sm md:text-base font-semibold'>Passport Size Photograph</label>
                    <input type='file' name='passportSizePic' onChange={handleChange}placeholder='first name' className={`w-[95px] text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`}  required/>
                </div>
                <div className='flex flex-col gap-3 ] w-[50%]'>
                    <label className='text-sm md:text-base font-semibold'>Passport (optional)</label>
                    <input type='file' name='passport' onChange={handleChange}  className={`w-[95px]  text-sm  md:text-base border ${theme === 'dark' ? 'border-[#177eaa94] bg-black' : 'bg-white border-[#00874f85]'} p-2 rounded  outline-none`} required />
                </div>
            </div>    

            {/* Program and sub Program */}
            {/* <div className='flex w-full gap-5 pt-5'>
                <div className='flex flex-col gap-3  w-[50%]'>
                    <label className='font-semibold'>Program</label>
                    <select name='program' onChange={handleChange} value={applyForm.program} className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded  outline-none`} required>
                        <option value='' >Choose Program</option>
                        <option value={'TVET'}>TVET</option>
                        <option value={'IT_and_Digital_Skills'}>IT and Digital Skills</option>
                        <option value={'Sports_and_Fitness'}>Sports and Fitness</option>
                        <option value={'Parlour'}>Parlour</option>
                        <option value={'Boutique'}>Boutique</option>
                    </select>                    
                </div>
                <div className='flex flex-col gap-3  w-[50%]'>
                    <label className='font-semibold'>SubProgram</label>
                    <select name='subProgram' onChange={handleChange} value={applyForm.subProgram} className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded  outline-none` } required>
                        <option value=''>Choose Subprogram</option>
                        { 
                            SubProgram[applyForm?.program]?.map((Sprogram , index)=>
                                <option key={index} value={Sprogram}>{Sprogram}</option>
                            )
                        }
                    </select>                     
                </div>
            </div> */}


            <div className='self-start  pt-5'>
                <button type='submit' className={`hidden md:block  px-4 py-2 rounded ${theme === 'light' ? 'bg-[#00874F] hover:text-white hover:bg-black': 'hover:text-black hover:bg-white bg-[#177faa]'} transition cursor-pointer text-white text-sm md:text-[14px] lg:text-base`}>
                    {loading ? "Submiting..." : "Submit"}
                </button>
            </div>
        </form>
        {/* <Footer /> */}
    </div>
  )
}

export default Apply