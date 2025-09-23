"use client"
import Image from "next/image"
import logo from "../../public/jkd-icon.png"
import text from "../../public/logo-text.png"
import { useEffect, useState } from "react"
import { useGlobal } from "@/context/GlobleContext"
import { useRouter  , usePathname } from "next/navigation"
import dark from '../../public/dark.png'
import light from '../../public/light.png'


export default function Header() {
  const  pages = [
    {path:'/' , name:'Home'},
    // {path:'/about-us' , name:'About'},
    {path:'/programs' , name:'Vocational'},
    {path:'#' , name:'IT Courses'}, 
    // {path:'/how-we-work' , name:'How we work?'},
    {path:'#' , name:'Services'},
    {path:'/contact-us', name:'Contact us'}
  ]
  const {theme , setTheme} = useGlobal();
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname)

  const themeChange = ()=>{
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [view , setView] = useState(false);

  const handleClick = ()=>{
    setView(!view)
  }

  const routChange = (path) =>{
    router.push(path)
  }

  return (
    <header 
      className={`fixed z-50 w-full 
        ${theme === 'dark'
          ?'text-white bg-black '
          :'text-black bg-white '
        }
        `
      }
    >
      <div className= {`  overflow-x-hidden flex items-center justify-between h-[70px] sm:h-[80px] px-4 md:px-6  mx-auto`}>
        {/* Logo Section */}
        <div onClick={()=> router.push('/')} className="flex items-center h-full md:ml-[-175px] lg:ml-[-165px] group curesor-pointer">
          {/* TEXT (medium and large screen) */}
          <div className=" hidden md:block relative transform transition-transform duration-700 lg:group-hover:translate-x-[150px] h-[70px] w-[150px]">
            <Image 
              src={text} 
              alt="TEXT" 
              fill
              className="object-fill"
            />
          </div>    

          {/* LOGO */}
          <div className="relative h-full transform transition-all duration-700 lg:group-hover:translate-x-[100px] lg:group-hover:translate-y-[-50px] lg:group-hover:opacity-0 w-[70px] lg:h-[80px] lg:w-[70px] z-10">            
            <Image 
              src={logo} 
              alt="LOGO" 
              fill
            />        
          </div>

          {/* TEXT (mobile screen) */}
          <div className=" md:hidden relative transform transition-transform duration-700 lg:group-hover:translate-x-[150px] h-[70px] w-[150px] ml-[-20px]">
            <Image 
              src={text} 
              alt="TEXT" 
              fill
              className="object-fill"
            />
          </div>    
        </div>


        {/* Desktop Nav */}
        <nav className="hidden md:block ">
          <ul className="flex gap-6 items-center text-sm md:text-[14px] lg:text-base">
            {pages.map((page, index) => (
              <li key={index} onClick={()=> routChange(page.path)} className={`${theme === 'light' ? 'hover:text-[#00d17a]  ' : 'hover:text-[#177faa] '} ${ page.path === pathname ? theme === 'light' ? 'text-[#00d17a] font-bold' : 'text-[#177faa] font-bold' : ''} cursor-pointer `}>
                {page.name}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-5">  
          {/* Toggle Button */}
          <label className="relative inline-flex items-center cursor-pointer">
            <div className="w-[50px] h-[25px] md:h-[30px] lg:h-[35px]  self-center " style={{
                WebkitMaskImage: `url(${theme === "dark" ? light.src : dark.src})`,
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                WebkitMaskSize: "contain",
                maskImage: `url(${theme === "dark" ? light.src : dark.src})`,
                maskRepeat: "no-repeat",
                maskPosition: "center",
                maskSize: "contain",
                backgroundColor: theme === "dark" ? "white" : "black", 
                }} 
            ></div>

            <input
              type="checkbox"
              className="sr-only peer"
              checked={theme === "dark"}   
              onChange={themeChange}
            />
            
          </label>



          {/* Contact Button (desktop only) */}
          <button onClick={handleClick} className={`hidden md:block px-4 py-2 rounded ${theme === 'light' ? 'bg-[#00874F] hover:text-white hover:bg-black': 'hover:text-black hover:bg-white bg-[#177faa]'} transition cursor-pointer text-white text-sm md:text-[14px] lg:text-base`}>
            {/* Apply Now */}
            Register
          </button>

          {
            view && 
            <div className={`hidden md:flex absolute ${theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'} flex-col p-4 gap-5 top-16 right-20 rounded z-50`}>
              {/* <button onClick={()=> {router.push('/apply'); handleClick()}} className={` text-start cursor-pointer py-1 px-2 rounded ${theme === 'light' ? 'hover:bg-[#00874F]  ': 'hover:text-white hover:bg-[#177faa]'}`}>Join the Program</button>
              <button onClick={()=> {router.push('/booking'); handleClick()}} className={`text-start  cursor-pointer py-1 px-2 rounded ${theme === 'light' ? 'hover:bg-[#00874F]  ': 'hover:text-white hover:bg-[#177faa]'}`}>Book Events</button> */}
              <button onClick={()=> {router.push('/login'); handleClick()}} className={` text-start cursor-pointer py-1 px-2 rounded ${theme === 'light' ? 'hover:bg-[#00874F]  ': 'hover:text-white hover:bg-[#177faa]'}`}>Login</button>
              <button onClick={()=> {router.push('/signup'); handleClick()}} className={`text-start  cursor-pointer py-1 px-2 rounded ${theme === 'light' ? 'hover:bg-[#00874F]  ': 'hover:text-white hover:bg-[#177faa]'}`}>SignUp</button>
            </div>
          }

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#00d17a] text-2xl cursor-pointer"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[] flex flex-col items-center gap-4 py-6">
          {pages.map((page, index) => (
            <a
              key={index}
              href={page.href}
              className="hover:text-[#00d17a]"
              onClick={() => setMenuOpen(false)}
            >
              {page.name}
            </a>
          ))}
          <button onClick={()=> {router.push('/login'); handleClick()}} className={` text-start cursor-pointer py-1 px-2 rounded ${theme === 'light' ? 'hover:bg-[#00874F]  ': 'hover:text-white hover:bg-[#177faa]'}`}>Login</button>
          <button onClick={()=> {router.push('/signup'); handleClick()}} className={`text-start  cursor-pointer py-1 px-2 rounded ${theme === 'light' ? 'hover:bg-[#00874F]  ': 'hover:text-white hover:bg-[#177faa]'}`}>SignUp</button>
        </div>
      )}
    </header>
  );
}
