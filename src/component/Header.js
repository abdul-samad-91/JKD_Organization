"use client"
import Image from "next/image"
import logo from "../../public/jkd-icon.png"
import jkdLogo from "../../public/jkd_logo.png"
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
    // traingings:false
    trainings:false
  });
  const  pages = [
    {path:'/' , name:'Home'},
    // {path:'/about-us' , name:'About us'},
    {path:'#' , name:'Trainings' , hover:'trainings'},
    {path:'#' , name:'IT Courses' , hover:'itCourses'}, 
    {path:'/services' , name:'Our Services'},
    {path:'/events' , name:'Events'},
    {path:'/apply/job' , name:'Jobs'},
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
  const [nestedDropdown, setNestedDropdown] = useState({
    fullStack: false,
    mobileApp: false,
    designing: false,
    civil: false,
    electrical: false,
    hospitality: false,
    mechanical: false,
    sport: false
  });
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
      className={`z-50 w-full bg-[#4A709F33]`}
      // onMouseLeave={()=>setDropDown({itCourses:false})}
    >
      <div className= {`  overflow-x-hidden flex items-center justify-between h-[70px] sm:h-[80px] px-4 md:px-6  mx-auto`}>
        {/* Logo Section */}
        <div onClick={()=> router.push('/')} className="flex items-center h-full  ml-[-20px] group cursor-pointer">
          {/* <div className="relative w-[90%] h-[90%]  md:h-[80px] md:w-[70px] z-10">            
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
          </div> */}

          <div className="relative w-[90%] h-[90%]  md:h-[80px] md:w-[250px] z-10">   
            <Image 
              src={jkdLogo} 
              alt="jkd_logo" 
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
        <nav className="hidden lg:block ">
          <ul className="flex gap-6 items-center text-sm md:text-[14px] lg:text-base">
            {pages.map((page, index) => (
              <li key={index} onClick={()=> routChange(page.path)} onMouseEnter={()=>setDropDown({ [page.hover]:true})}  className={`flex gap-2 items-center  ${theme === 'light' ? 'hover:text-[#00d17a]  ' : 'hover:text-[#177faa] '} ${ page.path === pathname && 'text-[#177faa] font-bold'} cursor-pointer  `}>
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
              }} className={` hidden lg:block px-6 py-2 rounded-2xl ${theme === 'light' ? 'bg-[#00874F] hover:text-white hover:bg-black': 'hover:text-black hover:bg-white bg-[#177faa]'} transition cursor-pointer text-white text-sm md:text-[14px] lg:text-base`}>
                Profile
              </button>
            ) : (
              <>
                <Link href={'/signup'}  className={`hidden lg:block px-6 py-2 rounded-2xl ${theme === 'light' ? 'bg-[#00874F] hover:text-white hover:bg-black': 'hover:text-black hover:bg-white bg-[#177faa]'} transition cursor-pointer text-white text-sm md:text-[14px] lg:text-base`}>
                  Sign Up
                  {/* Register */}
                </Link>          
                <Link href={'/login'}  className={`hidden lg:block px-8 py-2 rounded-2xl ${theme === 'light' ? 'bg-[#00874F] hover:text-white hover:bg-black': 'hover:text-black hover:bg-white bg-[#177faa]'} transition cursor-pointer text-white text-sm md:text-[14px] lg:text-base`}>
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

          {/* Hamburger (mobile and tablet) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-[#00d17a] text-2xl cursor-pointer"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-lg flex flex-col items-center gap-4 py-6 px-4 border-t border-gray-200 max-h-[calc(100vh-80px)] overflow-y-auto">
          {pages.map((page, index) => (
            <div key={index} className="w-full">
              <button
                onClick={() => {
                  if (page.path !== '#') {
                    router.push(page.path);
                    setMenuOpen(false);
                  } else {
                    setDropDown(prev => ({ ...prev, [page.hover]: !prev[page.hover] }));
                  }
                }}
                className={`w-full text-center py-2 px-4 rounded transition flex items-center justify-center gap-2 ${theme === 'light' ? 'hover:text-[#00d17a] hover:bg-gray-100' : 'hover:text-[#177faa] hover:bg-gray-100'} ${page.path === pathname ? theme === 'light' ? 'text-[#00d17a] font-bold' : 'text-[#177faa] font-bold' : 'text-gray-700'}`}
              >
                {page.name}
                {(page.hover === 'itCourses' || page.hover === 'trainings') && (
                  <span className="text-xs">{dropDown[page.hover] ? 
                    <Image src={upArrow} className="w-[10px] h-[10px]" alt="icon" /> : 
                    <Image src={downArrow} className="w-[10px] h-[10px]" alt="icon" />
                    }</span>
                )}
              </button>
              
              {/* IT Courses Dropdown in Mobile Menu */}
              {page.hover === 'itCourses' && dropDown.itCourses && (
                <div className="w-full mt-2 bg-[#00874F] rounded p-3 space-y-2">
                  <div className="border-b border-white/30 pb-2">
                    <button 
                      onClick={() => setNestedDropdown(prev => ({ ...prev, fullStack: !prev.fullStack }))}
                      className="w-full flex justify-between md:justify-center md:gap-3 lg:justify-between lg:gap-0 items-center font-semibold text-xs text-black py-2 hover:text-white"
                    >
                      <span>Full Stack Development</span>
                      <span className="text-xs">{nestedDropdown.fullStack ? <Image src={upArrow} className="w-[10px] h-[10px]" alt="icon" /> : <Image src={downArrow} className="w-[10px] h-[10px]" alt="icon" />}</span>
                    </button>
                    {nestedDropdown.fullStack && (
                      <div className="mt-2 pl-2 space-y-1">
                        <Link href="/course/mern-stack" onClick={() => setMenuOpen(false)} className="block text-xs text-white hover:underline py-1">MERN Stack</Link>
                        <Link href="/course/mean-stack" onClick={() => setMenuOpen(false)} className="block text-xs text-white hover:underline py-1">MEAN Stack</Link>
                      </div>
                    )}
                  </div>
                  <div className="border-b border-white/30 pb-2">
                    <button 
                      onClick={() => setNestedDropdown(prev => ({ ...prev, mobileApp: !prev.mobileApp }))}
                      className="w-full flex justify-between md:justify-center md:gap-3 lg:justify-between lg:gap-0 items-center font-semibold text-xs text-black py-2 hover:text-white"
                    >
                      <span>Mobile App Development</span>
                      <span className="text-xs">{nestedDropdown.mobileApp ? <Image src={upArrow} className="w-[10px] h-[10px]" alt="icon" /> : <Image src={downArrow} className="w-[10px] h-[10px]" alt="icon" />}</span>
                    </button>
                    {nestedDropdown.mobileApp && (
                      <div className="mt-2 pl-2 space-y-1">
                        <Link href="/course/flutter" onClick={() => setMenuOpen(false)} className="block text-xs text-white hover:underline py-1">Flutter</Link>
                        <Link href="/course/react-native" onClick={() => setMenuOpen(false)} className="block text-xs text-white hover:underline py-1">React Native</Link>
                      </div>
                    )}
                  </div>
                  <div className="pb-2">
                    <button 
                      onClick={() => setNestedDropdown(prev => ({ ...prev, designing: !prev.designing }))}
                      className="w-full flex justify-between md:justify-center md:gap-3 lg:justify-between lg:gap-0 items-center font-semibold text-xs text-black py-2 hover:text-white"
                    >
                      <span>Designing</span>
                      <span className="text-xs">{nestedDropdown.designing ? <Image src={upArrow} className="w-[10px] h-[10px]" alt="icon" /> : <Image src={downArrow} className="w-[10px] h-[10px]" alt="icon" />}</span>
                    </button>
                    {nestedDropdown.designing && (
                      <div className="mt-2 pl-2 space-y-1">
                        <Link href="/course/grapic-design" onClick={() => setMenuOpen(false)} className="block text-xs text-white hover:underline py-1">Graphic</Link>
                        <Link href="/course/uiux-design" onClick={() => setMenuOpen(false)} className="block text-xs text-white hover:underline py-1">UI/UX</Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              {/* Trainings Dropdown in Mobile Menu */}
              {page.hover === 'trainings' && dropDown.trainings && (
                <div className="w-full mt-2 bg-[#00874F] rounded p-3 space-y-2 max-h-96 overflow-y-auto">
                  <div className="border-b border-white/30 pb-2">
                    <button 
                      onClick={() => setNestedDropdown(prev => ({ ...prev, civil: !prev.civil }))}
                      className="w-full flex justify-between md:justify-center md:gap-3 lg:justify-between lg:gap-0 items-center font-semibold text-xs text-black py-2 hover:text-white"
                    >
                      <span>Civil Technology</span>
                      <span className="text-xs">{nestedDropdown.civil ? <Image src={upArrow} className="w-[10px] h-[10px]" alt="icon" /> : <Image src={downArrow} className="w-[10px] h-[10px]" alt="icon" />}</span>
                    </button>
                    {nestedDropdown.civil && (
                      <div className="mt-2 pl-2 space-y-1">
                        <Link href="/course/plumber-and-pipe-fabricator" onClick={() => setMenuOpen(false)} className="block text-xs text-white hover:underline py-1">Plumber & Pipe Fabricator</Link>
                        <Link href="#" onClick={() => setMenuOpen(false)} className="block text-xs text-white hover:underline py-1">Tile Fixer</Link>
                        <Link href="#" onClick={() => setMenuOpen(false)} className="block text-xs text-white hover:underline py-1">Plasterer</Link>
                        <Link href="/course/steel-fixer" onClick={() => setMenuOpen(false)} className="block text-xs text-white hover:underline py-1">Steel Fixer</Link>
                        <Link href="/course/mason" onClick={() => setMenuOpen(false)} className="block text-xs text-white hover:underline py-1">Mason</Link>
                        <Link href="/course/carpenter" onClick={() => setMenuOpen(false)} className="block text-xs text-white hover:underline py-1">Carpenter</Link>
                      </div>
                    )}
                  </div>
                  <div className="border-b border-white/30 pb-2">
                    <button 
                      onClick={() => setNestedDropdown(prev => ({ ...prev, electrical: !prev.electrical }))}
                      className="w-full flex justify-between md:justify-center md:gap-3 lg:justify-between lg:gap-0 items-center font-semibold text-xs text-black py-2 hover:text-white"
                    >
                      <span>Electrical Technology</span>
                      <span className="text-xs">{nestedDropdown.electrical ? <Image src={upArrow} className="w-[10px] h-[10px]" alt="icon" /> : <Image src={downArrow} className="w-[10px] h-[10px]" alt="icon" />}</span>
                    </button>
                    {nestedDropdown.electrical && (
                      <div className="mt-2 pl-2 space-y-1">
                        <Link href="/course/electrician" onClick={() => setMenuOpen(false)} className="block text-xs text-white hover:underline py-1">Electrician</Link>
                        <Link href="/course/fiber-optics-technician" onClick={() => setMenuOpen(false)} className="block text-xs text-white hover:underline py-1">Fiber Optics Technician</Link>
                        <Link href="#" onClick={() => setMenuOpen(false)} className="block text-xs text-white hover:underline py-1">Solar System Technician</Link>
                        <Link href="/course/cctv-technician" onClick={() => setMenuOpen(false)} className="block text-xs text-white hover:underline py-1">CCTV Technician</Link>
                      </div>
                    )}
                  </div>
                  <div className="border-b border-white/30 pb-2">
                    <button 
                      onClick={() => setNestedDropdown(prev => ({ ...prev, hospitality: !prev.hospitality }))}
                      className="w-full flex justify-between md:justify-center md:gap-3 lg:justify-between lg:gap-0 items-center font-semibold text-xs text-black py-2 hover:text-white"
                    >
                      <span>Hospitality Management</span>
                      <span className="text-xs">{nestedDropdown.hospitality ? <Image src={upArrow} className="w-[10px] h-[10px]" alt="icon" /> : <Image src={downArrow} className="w-[10px] h-[10px]" alt="icon" />}</span>
                    </button>
                    {nestedDropdown.hospitality && (
                      <div className="mt-2 pl-2 space-y-1">
                        <Link href="/course/front-office-manager" onClick={() => setMenuOpen(false)} className="block text-xs text-white hover:underline py-1">Front Office Manager</Link>
                        <Link href="/course/professional-cook-course" onClick={() => setMenuOpen(false)} className="block text-xs text-white hover:underline py-1">Professional Cook</Link>
                        <Link href="/course/fast-food" onClick={() => setMenuOpen(false)} className="block text-xs text-white hover:underline py-1">Fast Food Expert</Link>
                        <Link href="/course/house-keeping" onClick={() => setMenuOpen(false)} className="block text-xs text-white hover:underline py-1">House keeping</Link>
                        <Link href="/course/tour-operator" onClick={() => setMenuOpen(false)} className="block text-xs text-white hover:underline py-1">Tour Operator</Link>
                        <Link href="#" onClick={() => setMenuOpen(false)} className="block text-xs text-white hover:underline py-1">Domestic Skilled Worker</Link>
                      </div>
                    )}
                  </div>
                  <div className="border-b border-white/30 pb-2">
                    <button 
                      onClick={() => setNestedDropdown(prev => ({ ...prev, mechanical: !prev.mechanical }))}
                      className="w-full flex justify-between md:justify-center md:gap-3 lg:justify-between lg:gap-0 items-center font-semibold text-xs text-black py-2 hover:text-white"
                    >
                      <span>Mechanical</span>
                      <span className="text-xs">{nestedDropdown.mechanical ? <Image src={upArrow} className="w-[10px] h-[10px]" alt="icon" /> : <Image src={downArrow} className="w-[10px] h-[10px]" alt="icon" />  }</span>
                    </button>
                    {nestedDropdown.mechanical && (
                      <div className="mt-2 pl-2 space-y-1">
                        <Link href="/course/welder" onClick={() => setMenuOpen(false)} className="block text-xs text-white hover:underline py-1">Welder</Link>
                        <Link href="/course/hvacr-technician" onClick={() => setMenuOpen(false)} className="block text-xs text-white hover:underline py-1">HVACR Technician</Link>
                        <Link href="/course/lift-operator" onClick={() => setMenuOpen(false)} className="block text-xs text-white hover:underline py-1">Lift Operator</Link>
                      </div>
                    )}
                  </div>
                  <div className="pb-2">
                    <button 
                      onClick={() => setNestedDropdown(prev => ({ ...prev, sport: !prev.sport }))}
                      className="w-full flex justify-between md:justify-center md:gap-3 lg:justify-between lg:gap-0 items-center font-semibold text-xs text-black py-2 hover:text-white"
                    >
                      <span>Sport And Fitness</span>
                      <span className="text-xs">{nestedDropdown.sport ? <Image src={upArrow} className="w-[10px] h-[10px]" alt="icon" /> : <Image src={downArrow} className="w-[10px] h-[10px]" alt="icon" />  }</span>
                    </button>
                    {nestedDropdown.sport && (
                      <div className="mt-2 pl-2 space-y-1">
                        <Link href="/course/futsal" onClick={() => setMenuOpen(false)} className="block text-xs text-white hover:underline py-1">Futsal</Link>
                        <Link href="/course/badminton-indoor" onClick={() => setMenuOpen(false)} className="block text-xs text-white hover:underline py-1">Indoor Badminton</Link>
                        <Link href="/course/badminton-outdoor" onClick={() => setMenuOpen(false)} className="block text-xs text-white hover:underline py-1">Outdoor Badminton</Link>
                        <Link href="/course/table-tennis" onClick={() => setMenuOpen(false)} className="block text-xs text-white hover:underline py-1">Table Tennis</Link>
                        <Link href="/course/fitness-club" onClick={() => setMenuOpen(false)} className="block text-xs text-white hover:underline py-1">Fitness Club</Link>
                        <Link href="/course/cricket" onClick={() => setMenuOpen(false)} className="block text-xs text-white hover:underline py-1">Cricket</Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="w-full flex flex-col sm:flex-row gap-3 mt-4">
            {user?.id ? (
              <button 
                onClick={() => {
                  user?.role === 'student' ? router.push('/student')
                  : user?.role === 'admin' ? router.push('/admin')
                  : router.push('/');
                  setMenuOpen(false);
                }} 
                className={`w-full py-2 px-4 rounded ${theme === 'light' ? 'bg-[#00874F] hover:bg-black' : 'bg-[#177faa] hover:bg-gray-800'} transition cursor-pointer text-white text-sm`}
              >
                Profile
              </button>
            ) : (
              <>
                <button 
                  onClick={() => { router.push('/login'); setMenuOpen(false); }} 
                  className={`w-full py-2 px-4 rounded ${theme === 'light' ? 'bg-[#00874F] hover:bg-black' : 'bg-[#177faa] hover:bg-gray-800'} transition cursor-pointer text-white text-sm`}
                >
                  Login
                </button>
                <button 
                  onClick={() => { router.push('/signup'); setMenuOpen(false); }} 
                  className={`w-full py-2 px-4 rounded ${theme === 'light' ? 'bg-[#00874F] hover:bg-black' : 'bg-[#177faa] hover:bg-gray-800'} transition cursor-pointer text-white text-sm`}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* dropdown */}
      {/* IT Courses Dropdown - Desktop/Laptop */}
      {
        dropDown.itCourses && !menuOpen ?
        (      
        <div className="hidden lg:flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-6 lg:gap-10 bg-[#00874F] py-4 md:py-6 lg:py-8 px-4 md:px-6 lg:px-8 text-white z-50"
        onMouseEnter={() => setDropDown({ itCourses: true })}
        onMouseLeave={() => setDropDown({ itCourses: false })}>
          
          <div className="w-full md:w-[30%] lg:w-[28%]" onClick={() => setDropDown({ itCourses: false })}>
            <h5 className="text-black font-semibold text-sm md:text-base">Full Stack Development</h5>
            <hr className="my-2 md:my-4"/>
            <Link href="/course/mern-stack" className="text-sm md:text-base hover:underline block">MERN Stack</Link>
            <hr className="my-2"/>
            <Link href="/course/mean-stack" className="text-sm md:text-base hover:underline block">MEAN Stack</Link>
            <hr className="my-2"/>
          </div>
          <div className="w-full md:w-[30%] lg:w-[28%]" onClick={() => setDropDown({ itCourses: false })}>
            <h5 className="text-black font-semibold text-sm md:text-base">Mobile App Development</h5>
            <hr className="my-2 md:my-4"/>
            <Link href="/course/flutter" className="text-sm md:text-base hover:underline block">Flutter</Link>
            <hr className="my-2"/>
            <Link href="/course/react-native" className="text-sm md:text-base hover:underline block">React Native</Link>
            <hr className="my-2"/>
          </div>
          <div className="w-full md:w-[30%] lg:w-[28%]" onClick={() => setDropDown({ itCourses: false })}>
            <h5 className="text-black font-semibold text-sm md:text-base">Designing</h5>
            <hr className="my-2 md:my-4"/>
            <Link href="/course/grapic-design" className="text-sm md:text-base hover:underline block"> Graphic </Link>
            <hr className="my-2"/>
            <Link href="/course/uiux-design" className="text-sm md:text-base hover:underline block"> UI/UX </Link>
            <hr className="my-2"/>
          </div>
        </div>
        ): dropDown.trainings && !menuOpen && (
        <div className="hidden lg:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8 bg-[#00874F] py-4 md:py-6 lg:py-8 px-4 md:px-6 lg:px-8 text-white z-50 max-h-[70vh] overflow-y-auto"
        onMouseEnter={() => setDropDown({ trainings: true })}
        onMouseLeave={() => setDropDown({ trainings: false })}>
          
          <div className="w-full" onClick={() => setDropDown({ trainings: false })}>
            <h5 className="text-black font-semibold text-sm md:text-base">Civil Technology</h5>
            <hr className="my-2 md:my-4"/>
            <Link href="/course/plumber-and-pipe-fabricator" className="text-xs md:text-sm hover:underline block">Plumber & Pipe Fabricator Course</Link>
            <hr className="my-2"/>
            <Link href="#" className="text-xs md:text-sm hover:underline block">Tile Fixer</Link>
            <hr className="my-2"/>
            <Link href="#" className="text-xs md:text-sm hover:underline block">Plasterer</Link>
            <hr className="my-2"/>
            <Link href="/course/steel-fixer" className="text-xs md:text-sm hover:underline block">Steel Fixer</Link>
            <hr className="my-2"/>
            <Link href="/course/mason" className="text-xs md:text-sm hover:underline block">Mason</Link>
            <hr className="my-2"/>
            <Link href="/course/carpenter" className="text-xs md:text-sm hover:underline block">Carpenter</Link>
            <hr className="my-2"/>
          </div>
          <div className="w-full" onClick={() => setDropDown({ trainings: false })}>
            <h5 className="text-black font-semibold text-sm md:text-base">Electrical Technology</h5>
            <hr className="my-2 md:my-4"/>
            <Link href="/course/electrician" className="text-xs md:text-sm hover:underline block">
            Electrician
            </Link>
            <hr className="my-2"/>
            <Link href="/course/fiber-optics-technician" className="text-xs md:text-sm hover:underline block">Fiber Optics Technician</Link>
            <hr className="my-2"/>
            <Link href="#" className="text-xs md:text-sm hover:underline block">Solar System Technician</Link>
            <hr className="my-2"/>
            <Link href="/course/cctv-technician" className="text-xs md:text-sm hover:underline block">CCTV Technician</Link>
            <hr className="my-2"/>
          </div>
          <div className="w-full" onClick={() => setDropDown({ trainings: false })}>
            <h5 className="text-black font-semibold text-sm md:text-base">Hospitality Management</h5>
            <hr className="my-2 md:my-4"/>
            <Link href="/course/front-office-manager" className="text-xs md:text-sm hover:underline block"> Front Office Manager </Link>
            <hr className="my-2"/>
            <Link href="/course/professional-cook-course" className="text-xs md:text-sm hover:underline block"> Professional Cook </Link>
            <hr className="my-2"/>
            <Link href="/course/fast-food" className="text-xs md:text-sm hover:underline block"> Fast Food Expert </Link>
            <hr className="my-2"/>
            <Link href="/course/house-keeping" className="text-xs md:text-sm hover:underline block"> House keeping </Link>
            <hr className="my-2"/>
            <Link href="/course/tour-operator" className="text-xs md:text-sm hover:underline block"> Tour Operator </Link>
            <hr className="my-2"/>
            <Link href="#" className="text-xs md:text-sm hover:underline block"> Domestic Skilled Worker </Link>
            <hr className="my-2"/>
          </div>
          <div className="w-full" onClick={() => setDropDown({ trainings: false })}>
            <h5 className="text-black font-semibold text-sm md:text-base">Mechanical</h5>
            <hr className="my-2 md:my-4"/>
            <Link href="/course/welder" className="text-xs md:text-sm hover:underline block"> Welder</Link>
            <hr className="my-2"/>
            <Link href="/course/hvacr-technician" className="text-xs md:text-sm hover:underline block"> HVACR Technician  </Link>
            <hr className="my-2"/>
            <Link href="/course/lift-operator" className="text-xs md:text-sm hover:underline block"> Lift Operator  </Link>
            <hr className="my-2"/>
          </div>
          <div className="w-full" onClick={() => setDropDown({ trainings: false })}>
            <h5 className="text-black font-semibold text-sm md:text-base">Sport And Fitness</h5>
            <hr className="my-2"/>
            <Link href="/course/futsal" className="text-xs md:text-sm hover:underline block"> Futsal </Link>
            <hr className="my-2"/>
            <Link href="/course/badminton-indoor" className="text-xs md:text-sm hover:underline block"> Indoor Badminton </Link>
            <hr className="my-2"/>
            <Link href="/course/badminton-outdoor" className="text-xs md:text-sm hover:underline block"> Outdoor Badminton </Link>
            <hr className="my-2"/>
            <Link href="/course/table-tennis" className="text-xs md:text-sm hover:underline block"> Table Tennis </Link>
            <hr className="my-2"/>
            <Link href="/course/fitness-club" className="text-xs md:text-sm hover:underline block"> Fitness Club </Link>
            <hr className="my-2"/>
            <Link href="/course/cricket" className="text-xs md:text-sm hover:underline block"> Cricket </Link>
            <hr className="my-2"/>
          </div>
        </div>
        )
      }
    </header>
  </> 
  );
}

