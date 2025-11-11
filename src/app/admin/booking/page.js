"use client"
import AdminLeftSidebar from '@/component/AdminLeftSidebar';
import Footer from '@/component/Footer';
import GenericTable from '@/component/genericTable';
import Header from '@/component/Header';
import { useGlobal } from '@/context/GlobleContext';
import axiosInstance from '@/lib/axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';



const Booking = () => {
  const {state} = useGlobal();;
  const {email , role} = state;
  const theme = 'light';  
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [data , setData] = useState([]);

//   const [bookingForm , setBookingForm] = useState({
//     fullName:'',
//     contactNumber:'',
//     emailAddress: '',
//     bookingDate: '',
//     timeSlot: '', 
//     selectService: '', 
//     persons: '',
//   })

//   const handleChange = (event) => {
//     const {value , name } = event.target;
//     setBookingForm((preValue) => {
//         return {
//             ...preValue,
//             [name] : value
//         }
//     })
//   }


//   const handleSubmit = async (e) => {
//     e.preventDefault()
//   //   const {firstName,lastName,email,dateOfBirth,phoneNumber,address,CNIC,parentCNIC,age,gender,program,subProgram} = applyForm;
  
//   //   if (!email || !password) {
//   //     toast.error("Email and password are required.");
//   //     return;
//   //   }
  
//       setLoading(true);
  
//     try {
//       const response = await axiosInstance.post("/api/booking", applyForm);
//       console.log(response);
//       const data = response.data;
  
//       toast.success(data.message || "Login successful");
  
//       router.push("/admin"  );
//     } catch (err) {
//       const errorMessage = err.response?.data?.error || "Something went wrong. Please try again.";
//       toast.error(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };
  async function applyApiCall () {
    try {
      const response = await axiosInstance.get('api/booking');
      console.log(response.data);
      setLoading(false);
      setData(response.data);
    }catch (error) {
      console.log(error);
      if(error.status === 401){
      router.push('/login');
      toast.error('Unauthorized login again');
      }
    }
  }


  useEffect(() => {
    applyApiCall();
  }, []);
  if(loading) {
    return <div>Loading</div>;
  }
  return(
    // <div className={`${theme === 'light' ? 'bg-[#eefbff]':'bg-[#080808]'} flex  h-screen  w-full `}>
    //   <AdminLeftSidebar className="w-[20%]" />
    //     {/* program page content */}
    //     <form onSubmit={handleSubmit} className={` w-[80%] flex flex-col items-center overflow-y-scroll px-10 `}>
    //         <h1 className={`${theme === 'light' ? 'text-[#00874F]': 'text-[#177faa]'} text-start w-full pt-[18px] lg:text-[39px] lg:font-extrabold font-bold  `}>Booking</h1>
    //         {/* Name / Contact Number */}
    //         <div className='flex w-full gap-5 pt-8'>
    //             <div className='flex flex-col gap-3  w-[50%]'>
    //                 <label className='font-semibold'>Full Name</label>
    //                 <input type='text' name="fullName" value={bookingForm.fullName} onChange={handleChange} placeholder='full name' className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded  outline-none`} />
    //             </div>
    //             <div className='flex flex-col gap-3 ] w-[50%]'>
    //                 <label className='font-semibold'>Contact Number</label>
    //                 <input type='number' name="contactNumber" value={bookingForm.contactNumber} onChange={handleChange} placeholder='phone Number' className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded  outline-none`} />
    //             </div>
    //         </div>
    //         {/* Email / Booking Data */}
    //         <div className='flex w-full gap-5 pt-5'>
    //             <div className='flex flex-col gap-3  w-[50%]'>
    //                 <label className='font-semibold'>Email Address</label>
    //                 <input type='text' name="emailAddress" value={bookingForm.emailAddress} onChange={handleChange} placeholder='email' className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded  outline-none`} />
    //             </div>
    //             <div className='flex flex-col gap-3  w-[50%]'>
    //                 <label className='font-semibold'>Booking Date</label>
    //                 <input type='date' name="bookingDate" value={bookingForm.bookingDate} onChange={handleChange} className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded  outline-none`} />
    //             </div>
    //         </div>
    //         {/* time / service */}
    //         <div className='flex w-full gap-5 pt-5'>
    //             <div className='flex flex-col gap-3  w-[50%]'>
    //                 <label className='font-semibold'>Time Slot</label>
    //                 <input type='time' name="timeSlot" value={bookingForm.timeSlot} onChange={handleChange} className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded  outline-none`} />
    //             </div>
    //             <div className='flex flex-col gap-3  w-[50%]'>
    //                 <label className='font-semibold'>Select Service / Package</label>
    //                 <select name="selectService" value={bookingForm.selectService} onChange={handleChange} className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded  outline-none`}>
    //                     <option value="">Select Service / Package</option>
    //                     <option value="basic">Basic Package</option>
    //                     <option value="premium">Premium Package</option>
    //                     <option value="vip">VIP Package</option>
    //                 </select>                    
    //             </div>

    //         </div>
    //         {/* Persons / payment method */}
    //         <div className='flex w-full gap-5 pt-5'>
    //             <div className='flex flex-col gap-3  w-[50%]'>                
    //                 <label className='font-semibold'>Persons</label>
    //                 <input name="persons" value={bookingForm.persons} onChange={handleChange} type='number' min={1}  className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded  outline-none`} />
    //             </div>
    //             <div >
    //                 <p className="font-medium">Payment Method:</p>
    //                 <div className=" flex mt-5 gap-5 ">
    //                     <label className="flex  gap-2">
    //                         <input type="radio" name="paymentMethod" value="cash" />
    //                         Cash
    //                     </label>
    //                     <label className="flex  gap-2">
    //                         <input type="radio" name="paymentMethod" value="bank"  />
    //                         Bank Transfer
    //                     </label>
    //                     <label className="flex  gap-2">
    //                         <input type="radio"  name="paymentMethod"  value="online" />
    //                         Online Payment
    //                     </label>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className='self-start pt-5'>
    //             <button type='submit' className={`hidden md:block px-4 py-2 rounded ${theme === 'light' ? 'bg-[#00874F] hover:text-white hover:bg-black': 'hover:text-black hover:bg-white bg-[#177faa]'} transition cursor-pointer text-white text-sm md:text-[14px] lg:text-base`}>
    //                 Submit
    //             </button>
    //         </div>
    //     </form>
    // </div>
        <div className='flex   w-full h-screen'>
          <AdminLeftSidebar className="w-[20%]" />
          <div className={`w-[80%] ${theme === 'light' ? 'bg-gray-50':'bg-[#080808]'} `}>        
            <div className=' flex justify-between items-center px-10 h-[100px] ' >
                <h1 className="text-4xl font-extrabold text-gray-800">Booking Forms</h1>
            </div>
            <div className='overflow-auto h-[500px] mx-5 '>
                <div className=' p-5 bg-white rounded w-full'>
                <h2 className="text-xl font-semibold text-gray-800 pb-5">All Booking Requests</h2>
                <GenericTable data={data} headers={["#", "Full Name (Signature)",	"Contact & Email",	"Date & Time",	"Location (Organization)",	"Fee (Method)",	"Status",	"Actions & Documents"]} />
                </div>
            </div>
          </div>



          {/* <div className={`w-[80%] ${theme === 'light' ? 'bg-white':'bg-[#080808]'} `}>        
            <div className=' flex justify-between items-center px-10 pt-[18px]' >
              <h1 className={`${theme === 'light' ? 'text-[#00874F]': 'text-[#177faa]'} text-start   lg:text-[39px] lg:font-extrabold font-bold  `}>Students Forms</h1>
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
            <div className='overflow-auto h-[500px] mt-10 mx-5 '>
                <GenericTable data={data} headers={[ "fullName", "email","phoneNumber", "emergencyContact", "province", "district", "tehsil", "organization", "prefferedDate", "prefferedTime", "medical", "idImageUrl", "signatureName" , "eventFee","paymentMethod", "paymentScreenshotUrl"]} />
                {/* "paymentReferenceNumber" , 
            </div>
          </div> */}
        </div>
  )
}

export default Booking
