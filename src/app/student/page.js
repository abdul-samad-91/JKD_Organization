"use client"
import { useGlobal } from "@/context/GlobleContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingScreen from "@/component/LoadingScreen";
import StudentLeftSidebar from "@/component/studentLeftSidebar";
import axiosInstance from "@/lib/axios";
import { toast } from "react-toastify";

const Apply = () => {
    const {state , dispatch} = useGlobal();
    const [loading, setLoading] = useState(false);
    const {theme , user} = state;
    // const [challanLoading, setChallanLoading] = useState(false);
    // console.log("user" ,user);
    const router = useRouter();
    const [ view , setView ] = useState(false);
    const [appliedCourses, setAppliedCourses] = useState([]);
    const [booking , setBooking] = useState(null);
    const formatDate = (date) => {
        return new Date(date).toISOString().split("T")[0];
    };
    const getstudentApplications = async () => {
    try {
        // if (!user?._id) {
        // console.log("User not loaded yet");
        // return;
        // }
        setLoading(true);
        const [res, res1] = await Promise.all([
            axiosInstance.get("/api/apply"),
            axiosInstance.get("/api/booking"),
        ]);
        console.log("All applications fetched:", res.data, res1.data);

        const filteredCourses = res.data.filter(
        (application) => application?.userId?._id === user?.id
        );

        const filteredBookings = res1.data.filter(
        (booking) => booking?.userId?._id === user?.id
        );

        setAppliedCourses(filteredCourses);
        setBooking(filteredBookings);
        // setLoading(true);

        // Debug after state is updated
        console.log("Filtered Courses:", filteredCourses);
        console.log("Filtered Bookings:", filteredBookings);

    } catch (error) {
        console.error("Error fetching student applications:", error);
    }
    finally {
    setLoading(false);
  }};


    useEffect(() => {
        getstudentApplications();
    }, []);

    useEffect(() => {
        if (!user && user?.role !== "student") {
            router.push("/login");
        } else {
            setView(true);
        }
    }, [user]);

    const viewChallan = async (applicationId) => {
        router.push(`/student/Challan/${applicationId}`);
        // try{
        //     setChallanLoading(true);
        //     const {data} = await axiosInstance.post("/api/challan/generate", { applicationId });
        //     console.log("Challan generated:", data);
        //     router.push(`/student/Challan/${data.challan._id}`);
        //     toast.success( data.message ||"Challan generated successfully");
        // }
        // catch(err){
        //     console.log(err);
        // }finally{
        //     setChallanLoading(false);
        // }
    }

    if(!view) return <LoadingScreen />; 
    return (
      <div className='flex h-screen  w-full'>
       <StudentLeftSidebar className="w-[20%]" />
        <div className="min-h-screen bg-white w-full  px-10 overflow-auto">
            <div className=' flex justify-between items-center  h-[100px] ' >
                <h1 className="text-4xl font-extrabold text-gray-800">Student Profile</h1>
            </div>

            <div className="bg-[#207845] p-6 rounded-xl mb-8">
                <h3 className="text-2xl font-semibold text-white mb-4 border-gray-200 border-b pb-2">Personal Details</h3>
                <div id="general-info" className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white ">
                    <p className="font-semibold">Student Name: <span className="font-light  "> {user?.name}</span></p>
                    <p className="font-semibold">Email: <span className="font-light "> {user?.email}</span></p>
                    <p className="font-semibold">Student ID: <span className="font-light "> {user?.studentId}</span></p>
                    <p className="font-semibold">Enrollment Date : <span className="font-light"> {user?.createdAt}</span></p>
                </div>
            </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* <!-- Course Applications Card --> */}
            <div className="bg-white p-6 rounded-xl border border-gray-400 ">
                <h3 className="text-2xl font-semibold  mb-4 border-gray-300 border-b pb-2">Course Applications</h3>
                <div id="">
                    {
                        loading?
                        <div>loading...</div>:
                        appliedCourses.length < 1 ? (
                            <div className="text-center py-10 border-dashed border-2 bg-gray-50 border-gray-300 rounded-lg">
                                <h3 className="text-lg text-gray-700 font-semibold">Not applied for any courses yet</h3>
                                <p className="text-gray-600 text-sm">Explore the &quot;Courses&quot; section to apply for a program.</p>
                            </div>
                        ) : (
                            appliedCourses.map((application, index) => (
                                <ul className="space-y-4" key={index}>
                                    <li className="p-4 border border-gray-100 rounded-lg flex justify-between items-center transition duration-200 hover:bg-gray-50">
                                        <div>
                                            <p className="text-base font-medium text-gray-800">{application.chooseCourse}</p>
                                            <p className="text-xs text-gray-500">Application ID: {application.applicationId}</p>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <span className={`px-2 rounded-full ${application.status === 'Pending'?'bg-orange-100  text-orange-500' :application.status === 'Rejected' ? 'bg-red-100 text-red-500' : 'bg-green-100 text-green-500'}`}>{application.status}</span>
                                            {application.status === 'Pending' &&
                                            <div className="flex flex-col gap-2">
                                                <button className=" cursor-pointer text-sm text-white px-1 rounded bg-[#177faa]">Upload Challan</button>
                                                {/* {
                                                challanLoading ?
                                                <button disabled className=" cursor-pointer text-sm text-white px-1 rounded bg-gray-400">Generating...</button>
                                                : */}
                                                <button onClick={()=> viewChallan(application._id)} className="cursor-pointer text-sm text-white px-1 rounded bg-[#177faa]">View Challan</button>
                                                {/* } */}
                                            </div>                                            
                                            }
                                        </div>
                                    </li>
                                </ul>
                                )
                            )
                        )
                    }
                </div>
            </div>

            {/* <!-- Booking Applications Card --> */}
            <div className="bg-white p-6 rounded-xl border border-gray-400 ">
                <h3 className="text-2xl font-semibold text-grey-700 mb-4 border-gray-300 border-b pb-2">Booking Applications</h3>
                <div id="booking-applications">
                    {
                        loading?
                        <div>loading...</div>:
                        appliedCourses.length === 0 ? (
                            <div className="text-center py-10 border-dashed border-2 bg-gray-50 border-gray-300 rounded-lg">
                                <h3 className="text-lg text-gray-700 font-semibold">Not applied for any bookings yet.</h3>
                                <p className="text-gray-600 text-sm">Visit the &quot;Bookings&quot; section to reserve a resource.</p>
                            </div>
                        ) : (
                            booking.map((reservation, index) => (
                                <ul className="space-y-4" key={index}>
                                    <li className="p-4 border border-gray-100 rounded-lg flex justify-between items-center transition duration-200 hover:bg-gray-50">
                                        <div>
                                            <p className="text-base font-medium text-gray-800">{reservation.eventFee.split(" ")[0,1]}</p>
                                            <p className="text-xs text-gray-500">Date: {formatDate(reservation.createdAt)} | ID: ${reservation.id}</p>
                                        </div>
                                        <span className={`px-2 rounded-full ${reservation.status === 'Pending'?'bg-orange-100  text-orange-500' :reservation.status === 'Rejected' ? 'bg-red-100 text-red-500' : 'bg-green-100 text-green-500'}`}>{reservation.status}</span>
                                    </li>
                                </ul>
                                )
                            )
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