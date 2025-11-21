'use client';
import logo from "../../public/jkd-icon.png"
import text from "../../public/logo-text.png"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiSettings } from "react-icons/fi";
import { MdDashboard, MdOutlineContactMail, MdLogout } from "react-icons/md"
import { FaPlus, FaUser,} from "react-icons/fa";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
import Image from "next/image";
import { useGlobal } from "@/context/GlobleContext";
import dark from '../../public/dark.png'
import light from '../../public/light.png'
import axiosInstance from "@/lib/axios";
// import { useAuth } from "@/context/AuthContext";

const AdminLeftSidebar = () => {
  const theme = 'light';
  const router = useRouter();
  const pathname = usePathname();
//   const {setUser} = useAuth();
  const {state, dispatch} = useGlobal();
  const menu = [
    { path: "/admin", label: "Profile", icon: <MdDashboard /> },
    // { path: "/transfers", label: "Transfers", icon: <FaExchangeAlt /> },
    { path: "/admin/apply", label: "Apply", icon: <FaPlus /> },
    { path: "/admin/booking", label: "Booking", icon: <FaUser /> },
    // { path: "/profile", label: "Profile", icon: <FaUserAlt /> },
    // { path: "/analytics", label: "Analytics", icon: <FaChartBar /> },
    // { path: "/savings", label: "Savings", icon: <FaPiggyBank /> },
    // { path: "/records", label: "Records", icon: <FaRegFileAlt /> },
    // { path: "/history", label: "History", icon: <FaHistory /> },
  ];

const logout = async () => {
  try {
    const response = await axiosInstance.post("/api/auth/logout");
    console.log(response)

    if (response.status != 200) {
      toast.error(response.data.message || "Please Try Again");
      return;
    }
    dispatch({ type: "LOGOUT" });
    router.push("/");
    toast.success(response.data.message || "Logout Successfully");
    // setUser(null);
  } catch (error) {
    console.error("Logout error:", error);
    toast.error("Something went wrong with logout");
  }
};


  const linkClasses = (path) =>
    `flex items-center gap-2 p-2 rounded-md transition-all ${
      pathname === path
        ? theme === "light"
            ? "bg-[#00874F] hover:text-white hover:bg-black"
            : "hover:text-black hover:bg-white bg-[#177faa]"
        : " "
    }`;

  const themeChange = ()=>{
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
// bg-[#177eaa94] bg-[#00874f85]
  return (
    <div className={`w-[20%] h-full ${theme === "dark" ? " bg-black text-white " : "bg-[#eefbff] text-black"} flex flex-col justify-between`}>
      <div>
        <div className="flex justify-between">
        {/* Logo Section */}
        <div className="flex items-center h-[100px]   group">
            {/* TEXT (medium and large screen) */}
              {/* LOGO */}
            <div className="relative h-full lg:h-[80px] lg:w-[70px] z-10">            
            <Image 
                src={logo} 
                alt="LOGO" 
                fill
            />        
            </div>            
            <div className=" hidden md:block relative  h-[70px] w-[150px]">
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
          {/* Toggle Button */}
          {/* <label className="relative inline-flex items-center cursor-pointer pr-2">
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
          </label> */}
        </div>

        <nav className="flex flex-col space-y-2 px-4">
          {menu.map((item) => (
            <Link href={item.path} key={item.path} 
                className={`
                flex items-center gap-2 p-2 rounded-md transition-all ${
                    pathname === item.path
                        ? theme === "light"
                          ? "bg-[#177faa] text-white"
                          : "bg-[#00874F] "
                        : " "
                    } ${theme === "light" ?"hover:text-white hover:bg-black":"hover:text-black hover:bg-white "}
                `}
            >
              <li className={`flex items-center gap-2 `}>
                {item.icon}
                {item.label}
              </li>
            </Link>
          ))}
        </nav>
      </div>

      <div className="px-4 pb-6 flex flex-col space-y-2">
        <button
          className="flex gap-3 items-center p-2 cursor-pointer "
          onClick={logout}   
        >
          <MdLogout />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminLeftSidebar;
