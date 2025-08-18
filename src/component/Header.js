"use client"
import Image from "next/image"
import logo from "../../public/jkd-icon.png"
import text from "../../public/logo-text.png"
// Blue: #0068B5
// Green: #00874F
const Header = () => {
  const  pages = [{path:'#' , name:'Home'},{path:'#' , name:'About'},{path:'#' , name:'Programs'},{path:'#' , name:'Achievements'},{path:'#' , name:'Get Involved'},{path:'#' , name:'Donations'},{path:'#' , name:'How we work?'}]
  return (
    <header className="h-[100px] w-full lg:w-[1200px] flex items-center justify-between">
      {/* logo */}
      <div className="flex items-center h-full ml-[-30px]">
        <div className="relative  h-[100px]   w-[80px]"> 
          <Image 
            src={logo} 
            alt="LOGO" 
            fill
            className="object-fill"
          />        
        </div>
        <div className="relative  h-[80px]   w-[150px] ml-[-30px] ">         
          <Image 
            src={text} 
            alt="TEXT" 
            fill
            className="object-fill"
          />
        </div>     
      </div>
       {/* LINKS  */} 
      <nav className=" ">
        <ul className="flex gap-3 items-center ">
          {pages?.map((page , index)=>
          <li key={index}>{page.name}</li>
          )}
        </ul>
      </nav>
      {/* Conctact us button */}
      <button className="px-4 py-2 rounded bg-[#00874F] text-white">Contact Us</button>
    </header>
  )
}

export default Header