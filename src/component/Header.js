"use client"
import Image from "next/image"
import logo from "../../public/jkd-icon.png"
import text from "../../public/logo-text.png"
import { useEffect, useState } from "react"
import { useGlobal } from "@/context/GlobleContext"
// // Blue: #177faa
// // Green: #00874F

export default function Header() {
  const  pages = [{path:'#' , name:'Home'},{path:'#' , name:'About'},{path:'#' , name:'Programs'},{path:'#' , name:'How we work?'},{path:'#' , name:'Get Involved'},{path:'#' , name:'Donations'}]
  const {theme , setTheme} = useGlobal();

  const themeChange = ()=>{
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY)
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed z-50 w-full 
        ${theme === 'dark'
          ?'text-white'
          :'text-black'
        } 
        ${scrolled 
          ? theme === 'light'
            ? 'bg-white  shadow-md shadow-gray-200' 
            : 'bg-black  shadow-md shadow-gray-900'
          : 'bg-transparent'
        }`
      }
    >
      <div className= {` overflow-hidden flex items-center justify-between h-[70px] sm:h-[80px] px-4 md:px-6 lg:px-0 lg:max-w-[1200px] mx-auto`}>
        {/* Logo Section */}
        <div className="flex items-center h-full md:ml-[-175px] lg:ml-[-165px] group">
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

        {/* Toggle Button */}
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={theme === "dark"}   
            onChange={themeChange}
          />
          
          {/* Track */}
          <div
            className={`w-11 h-6 rounded-full transition-colors duration-300 ${
              theme === "dark" ? "bg-gray-300" : "bg-black"
            }`}
          ></div>

          {/* Knob */}
          <div
            className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-all duration-300 peer-checked:translate-x-5 ${
              theme === "light" ? "bg-white" : "bg-black"
            }`}
          ></div>
        </label>


        {/* Desktop Nav */}
        <nav className="hidden md:block ">
          <ul className="flex gap-6 items-center text-sm md:text-[14px] lg:text-base">
            {pages.map((page, index) => (
              <li key={index} className="hover:text-[#00d17a] cursor-pointer font-semibold">
                {page.name}
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button (desktop only) */}
        <button className={`hidden md:block px-4 py-2 rounded ${theme === 'light' ? 'bg-[#00874F] hover:text-white hover:bg-black': 'hover:text-black hover:bg-white bg-[#177faa]'} transition cursor-pointer text-white text-sm md:text-[14px] lg:text-base`}>
          Contact Us
        </button>

        {/* Hamburger (mobile only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#00d17a] text-2xl cursor-pointer"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
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
          <button className="px-4 py-2 rounded bg-[#00874F] text-white">
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}
