"use client"
import { useGlobal } from "@/context/GlobleContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingScreen from "@/component/LoadingScreen";
import StudentLeftSidebar from "@/component/studentLeftSidebar";

const Apply = () => {
    const {state , dispatch} = useGlobal();
    const {theme , user} = state;
    const router = useRouter();
    const [ view , setView ] = useState(false);
    const [appliedCourses, setAppliedCourses] = useState([]);
    const [booking , setBooking] = useState(null);
    console.log(user)
    useEffect(() => {
        // if (!user) return;

        if (!user && user?.role !== "student") {
            router.push("/unauthorized");
        } else {
            setView(true);
        }
    }, [user]);

    if(!view) return <LoadingScreen />; 
    return (
      <div className='flex h-screen  w-full'>
       <StudentLeftSidebar className="w-[20%]" />
        <div className="min-h-screen bg-white w-full  px-10 overflow-auto">
            <div className=' flex justify-between items-center  h-[100px] ' >
                <h1 className="text-4xl font-extrabold text-gray-800">Student Profile</h1>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4 border-gray-200 border-b pb-2">Personal Details</h3>
                <div id="general-info" className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 ">
                    <p className="">Student Name: <span className="font-normal text-gray-600 "> {user?.name}</span></p>
                    <p className="">Email: <span className="font-normal text-gray-600 "> {user?.email}</span></p>
                    <p className="">Student ID: <span className="font-normal text-gray-600 "> {user?.studentId}</span></p>
                    <p className="">Enrollment Date : <span className="font-normal text-gray-600 "> {user?.createdAt}</span></p>
                </div>
            </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* <!-- Course Applications Card --> */}
            <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4 border-gray-200 border-b pb-2">Course Applications</h3>
                <div id="course-applications">
                    {
                        appliedCourses.length === 0 ? (
                            <div className="text-center py-10">
                                <h3 className="text-2xl font-semibold">Not applied for any courses yet</h3>
                                <p className="text-gray-600">Explore the &quot;Courses&quot; section to apply for a program.</p>
                            </div>
                        ) : (
                            <div>hello</div>
                        )
                    }
                </div>
            </div>

            {/* <!-- Booking Applications Card --> */}
            <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold text-indigo-600 mb-4 border-gray-200 border-b pb-2">Booking Applications</h3>
                <div id="booking-applications">
                    {
                        appliedCourses.length === 0 ? (
                            <div className="text-center py-10">
                                <h3 className="text-2xl font-semibold">Not applied for any bookings yet.</h3>
                                <p className="text-gray-600">Visit the &quot;Bookings&quot; section to reserve a resource.</p>
                            </div>
                        ) : (
                            <div>hello</div>
                        )
                    }
                </div>
            </div>
        </div>
        </div>
      </div>
    );
};

export default Apply;