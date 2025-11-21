"use client"
import Image from "next/image"
import logo from "../../public/jkd-icon.png"
import text from "../../public/logo-text.png"
import { useEffect, useState } from "react"
import { useRouter  , usePathname } from "next/navigation"
import Link from "next/link"
import upArrow from "../../public/arrowUp.png"
import downArrow from "../../public/arrowDown.png"
import { useGlobal } from "@/context/GlobleContext"

export default function Header() {
  const [dropDown,setDropDown] = useState({
    itCourses:false,
    tevet:false,
  })
  const  pages = [
    {path:'/' , name:'Home'},
    {path:'/about-us' , name:'About us'},
    {path:'#' , name:'Trainings' , hover:'trainings'},
    {path:'#' , name:'IT Courses' , hover:'itCourses'}, 
    {path:'/services' , name:'Services'},
    {path:'/contact-us', name:'Contact us'}
  ]
  // const {theme , setTheme} = useGlobal();
  const theme = "dark";
  const {user} = useGlobal().state;
  const router = useRouter();
  const pathname = usePathname();
  // console.log(pathname)

  // const themeChange = ()=>{
  //   theme === 'light' ? setTheme('dark') : setTheme('light')
  // }


  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // const [view , setView] = useState(false);

  // const handleClick = ()=>{
  //   setView(!view)
  // }

  const routChange = (path) =>{
    router.push(path)
  }

  return (
  <>
    <header 
      className={`fixed  z-50 w-full 
        bg-white
        `
      }
      // onMouseLeave={()=>setDropDown({itCourses:false})}
    >
      <div className= {`  overflow-x-hidden flex items-center justify-between h-[70px] sm:h-[80px] px-4 md:px-6  mx-auto`}>
        {/* Logo Section */}
        <div onClick={()=> router.push('/')} className="flex items-center h-full  ml-[-20px] group cursor-pointer">
          {/* TEXT (medium and large screen) */}
          {/* <div className=" hidden md:block relative transform transition-transform duration-700 lg:group-hover:translate-x-[150px] h-[70px] w-[150px]">
            <Image 
              src={text} 
              alt="TEXT" 
              fill
              className="object-fill"
            />
          </div>     */}

          {/* LOGO */}
          {/* <div className="relative h-full transform transition-all duration-700 lg:group-hover:translate-x-[100px] lg:group-hover:translate-y-[-50px] lg:group-hover:opacity-0 w-[70px] lg:h-[80px] lg:w-[70px] z-10">            
            <Image 
              src={logo} 
              alt="LOGO" 
              fill
            />        
          </div> */}
  
          <div className="relative h-full  lg:h-[80px] lg:w-[70px] z-10">            
            <Image 
              src={logo} 
              alt="LOGO" 
              fill
            />        
          </div>

          <div className=" hidden md:block relative transform ml-[-20px]  h-[70px] w-[150px]">
            <Image 
              src={text} 
              alt="TEXT" 
              fill
              className="object-fill"
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
              <li key={index} onClick={()=> routChange(page.path)} onMouseEnter={()=>setDropDown({ [page.hover]:true})}  className={`flex gap-2 items-center ${theme === 'light' ? 'hover:text-[#00d17a]  ' : 'hover:text-[#177faa] '} ${ page.path === pathname ? theme === 'light' ? 'text-[#00d17a] font-bold' : 'text-[#177faa] font-bold' : ''} cursor-pointer `}>
                {page.name}
                {
                  
                  page.hover === 'itCourses' || page.hover === "trainings" ? dropDown[page.hover] ?
                  <Image src={upArrow} className="w-[10px] h-[10px]" alt="icon" />
                  :
                  <Image src={downArrow} className="w-[10px] h-[10px]" alt="icon" />:null
                }
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-5">  
          {/* Contact Button (desktop only) */}
          {/* <Link href={'/apply/course'}  className={`hidden md:block px-4 py-2 rounded ${theme === 'light' ? 'bg-[#00874F] hover:text-white hover:bg-black': 'hover:text-black hover:bg-white bg-[#177faa]'} transition cursor-pointer text-white text-sm md:text-[14px] lg:text-base`}>
            Apply Now
            {/* Register 
          </Link> */}
          {
            user?.id ? (
              <button onClick={()=> {
                user?.role === 'student' ? router.push('/student')
                : user?.role === 'admin' ? router.push('/admin')
                : router.push('/')
              }} className={` hidden md:block px-4 py-2 rounded ${theme === 'light' ? 'bg-[#00874F] hover:text-white hover:bg-black': 'hover:text-black hover:bg-white bg-[#177faa]'} transition cursor-pointer text-white text-sm md:text-[14px] lg:text-base`}>
                Profile
              </button>
            ) : (
              <>
                <Link href={'/signup'}  className={`hidden md:block px-4 py-2 rounded ${theme === 'light' ? 'bg-[#00874F] hover:text-white hover:bg-black': 'hover:text-black hover:bg-white bg-[#177faa]'} transition cursor-pointer text-white text-sm md:text-[14px] lg:text-base`}>
                  Sign Up
                  {/* Register */}
                </Link>          
                <Link href={'/login'}  className={`hidden md:block px-4 py-2 rounded ${theme === 'light' ? 'bg-[#00874F] hover:text-white hover:bg-black': 'hover:text-black hover:bg-white bg-[#177faa]'} transition cursor-pointer text-white text-sm md:text-[14px] lg:text-base`}>
                  Login
                  {/* Register */}
                </Link>
              </>
            )
          }
          {/* {
            view && 
            <div className={`hidden md:flex absolute bg-black text-white flex-col p-4 gap-5 top-16 right-20 rounded z-50`}>
              {/* <button onClick={()=> {router.push('/apply'); handleClick()}} className={` text-start cursor-pointer py-1 px-2 rounded ${theme === 'light' ? 'hover:bg-[#00874F]  ': 'hover:text-white hover:bg-[#177faa]'}`}>Join the Program</button>
              <button onClick={()=> {router.push('/booking'); handleClick()}} className={`text-start  cursor-pointer py-1 px-2 rounded ${theme === 'light' ? 'hover:bg-[#00874F]  ': 'hover:text-white hover:bg-[#177faa]'}`}>Book Events</button> */}
              {/* <button onClick={()=> {router.push('/login'); handleClick()}} className={` text-start cursor-pointer py-1 px-2 rounded ${theme === 'light' ? 'hover:bg-[#00874F]  ': 'hover:text-white hover:bg-[#177faa]'}`}>Login</button>
              <button onClick={()=> {router.push('/signup'); handleClick()}} className={`text-start  cursor-pointer py-1 px-2 rounded ${theme === 'light' ? 'hover:bg-[#00874F]  ': 'hover:text-white hover:bg-[#177faa]'}`}>SignUp</button>
            </div>
          } */}

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

            {/* dropdown */}
      {
        dropDown.itCourses ?
        (      
        <div className=" flex justify-center gap-10 bg-[#00874F]  py-8 text-white z-50"
        onMouseEnter={() => setDropDown({ itCourses: true })}
        onMouseLeave={() => setDropDown({ itCourses: false })}>
          
          <div className="w-[30%]" onClick={() => setDropDown({ itCourses: false })}>
            <h5 className="text-black font-semibold">Full Stack Development</h5>
            <hr className="my-4"/>
            <Link href="/course/mern-stack">MERN Stack</Link>
            <hr className="my-2"/>
            <Link href="/course/mean-stack">MEAN Stack</Link>
            <hr className="my-2"/>
          </div>
          <div className="w-[30%]" onClick={() => setDropDown({ itCourses: false })}>
            <h5 className="text-black font-semibold">Mobile App Development</h5>
            <hr className="my-4"/>
            <Link href="/course/flutter">Flutter</Link>
            <hr className="my-2"/>
            <Link href="/course/react-native">React Native</Link>
            <hr className="my-2"/>
          </div>
          <div className="w-[30%]" onClick={() => setDropDown({ itCourses: false })}>
            <h5 className="text-black font-semibold">Designing</h5>
            <hr className="my-4"/>
            <Link href="/course/grapic-design"> Graphic </Link>
            <hr className="my-2"/>
            <Link href="/course/uiux-design"> UI/UX </Link>
            <hr className="my-2"/>
          </div>
        </div>
        ): dropDown.tevet && (
        <div className=" flex justify-center gap-10 bg-[#00874F]  py-8 text-white z-50 px-5"
        onMouseEnter={() => setDropDown({ tevet: true })}
        onMouseLeave={() => setDropDown({ tevet: false })}>
          
          <div className="w-[30%]" onClick={() => setDropDown({ itCourses: false })}>
            <h5 className="text-black font-semibold">Civil Technology</h5>
            <hr className="my-4"/>
            <Link href="/course/plumber-and-pipe-fabricator">Plumber & Pipe Fabricator Course</Link>
            <hr className="my-2"/>
            <Link href="#">Tile Fixer</Link>
            <hr className="my-2"/>
            <Link href="#">Plasterer</Link>
            <hr className="my-2"/>
            <Link href="/course/steel-fixer">Steel Fixer</Link>
            <hr className="my-2"/>
            <Link href="/course/mason ">Mason </Link>
            <hr className="my-2"/>
            <Link href="/course/carpenter">Carpenter</Link>
            <hr className="my-2"/>
          </div>
          <div className="w-[30%]" onClick={() => setDropDown({ itCourses: false })}>
            <h5 className="text-black font-semibold">Electrical Technology</h5>
            <hr className="my-4"/>
            <Link href="/course/electrician">
            {/* Building Electrician */}
            Electrician
            </Link>
            {/* <hr className="my-2"/>
            <Link href="/course/react-native">Industrial Electrician</Link> */}
            <hr className="my-2"/>
            <Link href="/course/fiber-optics-technician">Fiber Optics Technician</Link>
            <hr className="my-2"/>
            <Link href="#">Solar System Technician</Link>
            <hr className="my-2"/>
            <Link href="/course/cctv-technician">CCTV Technician</Link>
            <hr className="my-2"/>
          </div>
          <div className="w-[30%]" onClick={() => setDropDown({ itCourses: false })}>
            <h5 className="text-black font-semibold">Hospitality Management</h5>
            <hr className="my-4"/>
            <Link href="/course/front-office-manager"> Front Office Manager </Link>
            <hr className="my-2"/>
            <Link href="/course/professional-cook-course"> Professional Cook </Link>
            <hr className="my-2"/>
            <Link href="/course/fast-food"> Fast Food Expert </Link>
            <hr className="my-2"/>
            <Link href="/course/house-keeping"> House keeping </Link>
            <hr className="my-2"/>
            <Link href="/course/tour-operator"> Tour Operator </Link>
            <hr className="my-2"/>
            <Link href="#"> Domestic Skilled Worker </Link>
            <hr className="my-2"/>
          </div>
          <div className="w-[30%]" onClick={() => setDropDown({ itCourses: false })}>
            <h5 className="text-black font-semibold">Mechanical</h5>
            <hr className="my-4"/>
            <Link href="/course/welder"> Welder</Link>
            <hr className="my-2"/>
            <Link href="/course/hvacr-technician"> HVACR Technician  </Link>
            <hr className="my-2"/>
            <Link href="/course/lift-operator"> Lift Operator  </Link>
            <hr className="my-2"/>
          </div>
          <div className="w-[30%]" onClick={() => setDropDown({ itCourses: false })}>
            <h5 className="text-black font-semibold">Sport And Fitness</h5>
            <hr className="my-2"/>
            <Link href="/course/futsal"> Futsal </Link>
            <hr className="my-2"/>
            <Link href="/course/badminton-indoor"> Indoor Badminton </Link>
            <hr className="my-2"/>
            <Link href="/course/badminton-outdoor"> Outdoor Badminton </Link>
            <hr className="my-2"/>
            <Link href="/course/table-tennis"> Table Tennis </Link>
            <hr className="my-2"/>
            <Link href="/course/fitness-club"> Fitness Club </Link>
            <hr className="my-2"/>
            <Link href="/course/cricket"> Cricket </Link>
            <hr className="my-2"/>
          </div>
        </div>
        )
      }
    </header>
  </> 
  );
}

