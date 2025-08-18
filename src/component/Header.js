"use client"
import Image from "next/image"
import logo from "../../public/jkd-icon.png"
import text from "../../public/logo-text.png"
import { useState } from "react"

// // Blue: #0068B5
// // Green: #00874F

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const  pages = [{path:'#' , name:'Home'},{path:'#' , name:'About'},{path:'#' , name:'Programs'},{path:'#' , name:'Achievements'},{path:'#' , name:'Get Involved'},{path:'#' , name:'Donations'},{path:'#' , name:'How we work?'}]

  return (
    <header className="w-full bg-black">
      <div className="  flex items-center justify-between h-[70px] sm:h-[80px] px-4 md:px-6 lg:px-0 lg:max-w-[1200px] mx-auto">
        {/* Logo Section */}
      <div className="flex items-center h-full lg:ml-[-30px]">
        <div className="relative  h-[100px]   w-[80px]"> 
          <Image 
            src={logo} 
            alt="LOGO" 
            fill
            className="object-fill"
          />        
        </div>
        <div className="relative md:hidden lg-block h-[80px]   w-[150px] ml-[-30px] ">         
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
          <ul className="flex gap-6 items-center text-white text-sm md:text-[14px] lg:text-base">
            {pages.map((page, index) => (
              <li key={index} className="hover:text-[#00d17a] cursor-pointer">
                {page.name}
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button (desktop only) */}
        <button className="hidden md:block px-4 py-2 rounded bg-[#00874F] text-white text-sm md:text-[14px] lg:text-base">
          Contact Us
        </button>

        {/* Hamburger (mobile only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#00d17a] text-2xl"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-center gap-4 py-6">
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
