'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaLock, FaEnvelope , FaUnlock ,FaUser } from 'react-icons/fa';
import { useGlobal } from '@/context/GlobleContext';
import Header from '@/component/Header';
import Footer from '@/component/Footer';
import axiosInstance from '@/lib/axios';
// import Loginimage from '../../../public/Image123.jpg';
import { toast } from 'react-toastify';

const Login = () => {
  const {theme} = useGlobal();
  const router = useRouter();
  const [form, setForm] = useState({userName:"", email: "", password: "" , confirmPassword:""});
  const [loading, setLoading] = useState(false);
  const [view , setView] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const { userName, email, password  , confirmPassword} = form;

  if (!email || !password) {
    toast.error("Email and password are required.");
    return;
  }

  setLoading(true);

  try {
    const response = await axiosInstance.post("/api/users/signup", {
      userName,
      email,
      password,
      confirmPassword,
    });
    console.log(response)
    const data = response.data;
    if (response.status !== 201) {
      toast.error(data.error || "Login failed");
      return;
    }

    toast.success(data.message || "Login successful");
    router.push("/login");
  } catch (err) {
    console.error(err);
    toast.error("Something went wrong. Please try again later.");
  } finally {
    setLoading(false);
  }
};

  return (
    <>
    <Header />
    <div className={`w-full min-h-[600px] flex items-center justify-center px-4 ${theme === "light" ? "bg-[#eefbff]" : "bg-black"}  mt-20`}>
    {/* Right - LOGIN FORM */}
        <form onSubmit={handleSubmit}  className=" rounded gap-5 bg-white p-6 sm:p-8 lg:p-10  backdrop-blur-md flex flex-col items-center justify-center ">
        <h2 className='text-[35px] font-semibold'>SIGN UP </h2>

        <div className='flex gap-5'>
        <div className="w-full  ">
            <label className='font-semibold'>Username</label>
            <div className='relative'>
                <FaUser className="absolute top-1/2 right-3 transform -translate-y-1/2 text-black text-lg" />
                <input
                type="text"
                name="userName"
                value={form.userName}
                onChange={handleChange}
                placeholder="username"  
                autoComplete="off"
                className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded w-full outline-none pr-9`}              
                required
                />                
            </div>
        </div>
        
        <div className="w-full  ">
            <label className='font-semibold'>Email</label>
            <div className='relative'>
                <FaEnvelope className="absolute top-1/2 right-3 transform -translate-y-1/2 text-black text-lg" />
                <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="off" 
                placeholder="Email"
                className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded w-full outline-none pr-9`}              
                required
                />
            </div>
        </div>
        </div>

        <div className='flex gap-5'>
        <div className="w-full  ">
            <label className='font-semibold'>Password</label>
            <div className='relative'>
                {view ? 
                (<FaUnlock className="cursor-pointer absolute top-1/2 right-3 transform -translate-y-1/2 text-black text-lg " onClick={() =>setView(false)} />)
                :               
                (<FaLock className="cursor-pointer absolute top-1/2 right-3 transform -translate-y-1/2 text-black text-lg " onClick={() =>setView(true)} />)
                }
                <input
                type={view ? "text" : "password"}
                // type='password'
                name="password"
                value={form.password}
                onChange={handleChange}
                autoComplete="new-password"
                placeholder="Password"
                className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded w-full outline-none pr-9`}              
                required
                />
            </div>
        </div>

        <div className="w-full  ">
            <label className='font-semibold'>Confirm Password</label>
            <div className='relative'>
                {view ? 
                (<FaUnlock className="cursor-pointer absolute top-1/2 right-3 transform -translate-y-1/2 text-black text-lg " onClick={() =>setView(false)} />)
                :               
                (<FaLock className="cursor-pointer absolute top-1/2 right-3 transform -translate-y-1/2 text-black text-lg " onClick={() =>setView(true)} />)
                }
                <input
                type={view ? "text" : "password"}
                // type='password'
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                autoComplete="new-password"
                placeholder="confirm password"
                className={`${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'} p-2 rounded w-full outline-none pr-9`}              
                required
                />
            </div>
        </div>
        </div>

        <button
            type="submit"
            disabled={loading}
            className={`hidden md:block px-4 py-2 w-[40%] self-start rounded ${theme === 'light' ? 'bg-[#00874F] hover:text-white hover:bg-black': 'hover:text-black hover:bg-white bg-[#177faa]'} transition cursor-pointer text-white text-sm md:text-[14px] lg:text-base`}
        >
            {loading ? "Logging in..." : "Login"}
        </button>

        <ul className="w-full flex flex-col sm:flex-row  justify-start gap-5 items-center  text-sm sm:text-base text-[#070E2A] sm:gap-0">
            <li  className="cursor-pointer hover:underline text-sm ">Create an account</li>
            <li  className="cursor-pointer hover:underlinev text-sm md:pl-5">Forgot password?</li>
        </ul>
        </form>
      </div>
      <Footer />
      </>
  );
};

export default Login;
