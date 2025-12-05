"use client"
import Header from "@/component/Header"
import Footer from "@/component/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown ,faArrowCircleUp} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react"
import WhatWeValue from "./WhatWeValue"
import LoadingScreen from "@/component/LoadingScreen"


const technicalCards = ["Masons – Skilled in block work, plastering, tiling, and finishing jobs.Our masons are experienced in handling both residential and commercial projects with precision and quality workmanship.",
"Carpenters – Shuttering, furniture, finishing, and formwork carpenters.Trained to meet diverse project needs, our carpenters are capable of producing high-quality results with speed and efficiency.",
"Electricians – Industrial, residential, and maintenance electricians.From wiring and installation to troubleshooting and maintenance, our electricians ensure reliable electrical systems under all safety standards","Plumbers – Sanitary, pipeline, and maintenance plumbing experts.Our plumbers are trained in modern plumbing systems, ensuring proper fittings, leak-proof installations, and long-lasting solutions.","Welders, Fabricators & Steel Fixers – Specialized in MIG, TIG, ARC, and gas welding, along with structural and mechanical fabrication works.","General Laborers, Helpers & Technicians – Reliable manpower for construction, logistics, and support services.","HVAC & Mechanical Technicians – Skilled in installation, repair, and maintenance of air-conditioning and mechanical systems.","Housekeeping Staff, Cleaners & Drivers – Professional and well-trained workforce for hospitality, facility management, and residential services."];

const whatWeDo = [
    {
    title:'Sports & Recreational Tournaments',
    firstDesc:'We regularly organize sports tournaments and recreational events to encourage teamwork, discipline, and healthy competition.From friendly matches to large-scale tournaments, our goal is to bring people together in a positive and energetic environment.',
    lists:['Football & Cricket Tournaments','Volleyball & Badminton Matches','Annual J.K.D. Sports League','Team-Building and Fun Activity Days'],
    lastDesc:'These events help participants stay physically active, build confidence, and create a strong sense of community bonding.'
    },
    {
    title:'Community Development Programs',
    firstDesc:'J.K.D. is deeply committed to community welfare and social responsibility.We conduct a variety of awareness and uplift programs that focus on education, skill enhancement, and personal well-being.',
    lists:['Career guidance and motivational seminars','Skill development and job-readiness workshops','Health check-up camps and awareness drives','Social welfare initiatives and charity events'],
    lastDesc:'Through these programs, we aim to uplift communities by providing them with the knowledge, motivation, and support they need to grow and succeed.'
    },
    {
    title:'Youth Empowerment & Motivation',
    firstDesc:'Our Uplift Events serve as a platform to empower the younger generation by helping them discover their potential and pursue their goals confidently.We collaborate with professionals, trainers, and motivational speakers to conduct sessions that focus on:',
    lists:['Leadership development','Personal growth and mindset building','Overcoming challenges and achieving goals','Promoting positivity and teamwork'],
    lastDesc:'These interactive events inspire participants to believe in themselves and create a better future for their families and communities.'
    },
    {
    title:'Employee Engagement & Cultural Programs',
    firstDesc:'We also arrange employee engagement events, appreciation ceremonies, and cultural celebrations to keep morale high and strengthen organizational relationships.',
    lists:['Annual gatherings and award functions','Festival celebrations and cultural performances','Appreciation events for outstanding employees','Workshops for personal and professional enrichment'],
    lastDesc:'Such events create a balanced environment where both work and well-being go hand in hand.'
    },
]


const Apply = () => {
        const theme = "dark";
        const [toggle , setToggle] = useState({
            vision:false,
            mission:false,
            value:false,

            clientNeeds:false,
            sourcScreen:false,
            selection:false,
            process:false,
            orientation:false,
            support:false,
        })
    
        const handleToggle = (key)=>{
            setToggle((preVal)=>{
                return {
                    ...preVal,
                    [key] : !toggle[key],
                }
            })
        }

          const [screenLoading, setScreenLoading] = useState(true);
        
          useEffect(() => {
            const timer = setTimeout(() => {
              setScreenLoading(false);
            }, 500);
        
            return () => clearTimeout(timer);
          }, []);
        
          if (screenLoading) return <LoadingScreen />;
  return (
      <div className={` h-screen w-full flex flex-col  justify-between `}>
        <Header />
        <div className="w-full relative mt-20 flex flex-col   self-center">
            {/* Overseas Recruitment  */}
            <div className="bg-[#177faa] text-white w-full flex flex-col py-10 items-center ">
                <h1 className={` max-w-[1200px] text-center text-[30px] md:text-[35px] pb-2 lg:text-[39px] font-semibold w-full`}>Overseas Recruitment </h1>
                <p  className={` text-center max-w-[1200px]`} >At JKD, we take pride in being one of the most trusted names in Overseas Manpower Recruitment. With years of experience and a commitment to excellence, we connect skilled and semi-skilled professionals with reputable companies across the Middle East, Asia, and beyond.Our goal is to provide a complete recruitment solution — from sourcing the right candidates to ensuring their smooth deployment — while maintaining full transparency, legality, and professionalism at every step.</p>    
            </div>

            <div className=" w-full flex flex-col py-10 items-center ">
                <h3 className='text-[30px] font-semibold'>Our Expertise in Skilled Trades</h3>
                <p  className={`  max-w-[800px] text-center`} >We supply highly trained and experienced manpower across a wide range of technical and construction fields. Each candidate is carefully selected, tested, and verified to meet the international standards and job requirements of our overseas clients.</p>    
            </div>
            
            <div className=" w-full flex flex-col py-10 items-center bg-[#eefbff] ">
                <h3 className='text-[30px] font-semibold'>Construction & Technical Trades</h3>
                <div className="flex gap-5 justify-center flex-wrap max-w-[1200px] pt-5">
                    {
                        technicalCards?.map((element , index) => 
                            <div className="w-[23%] flex items-center bg-[white]  rounded p-2 px-5" key={index}>
                                <p>{element}</p>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className=" w-full flex flex-col py-10 items-center bg-[] ">
                <h3 className='text-[30px] font-semibold'>Our Recruitment Process</h3>
                <p  className={`  max-w-[800px] text-center`} >Our recruitment process is transparent, systematic, and client-focused, designed to ensure that both the employer and the employee have a smooth and successful experience.</p>
                <div className="flex gap-5 justify-center flex-wrap max-w-[1200px] pt-5 text-white">
                {/* <div className='w-[50%] flex flex-col gap-5'> */}

                    <div className='w-[30%] self-start p-5 bg-[#00874F]  rounded'>
                        <button onClick={() => handleToggle("clientNeeds")} className="cursor-pointer"><FontAwesomeIcon className='text-[20px] transition-transform duration-500' icon={toggle.clientNeeds ? faArrowCircleUp : faArrowCircleDown} />
                        <span className='ml-5 font-semibold text-[18px]'>Understanding Client Needs</span>
                        </button>
                            <div 
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${toggle.clientNeeds ? 'max-h-96' : 'max-h-0'}`}
                            // aria-hidden={!toggle.vision}
                            >
                            {/* <h3 className=' text-[30px]  font-semibold '>Mssion</h3> */}
                            <p className={` pt-2 md:pt-4 text- `}>We begin by conducting a detailed consultation with our overseas clients to identify specific job roles, required skills, number of workers, and project timelines. This helps us create a targeted recruitment plan tailored to each client’s business goals.</p>
                        </div>
                        
                    </div>

                    <div className='bg-[#005f88] p-5 w-[30%]  self-start rounded'>
                        <button className="cursor-pointer w-full text-left" onClick={() => handleToggle("sourcScreen")} aria-expanded={toggle.sourcScreen}>
                            <FontAwesomeIcon className='text-[20px] transition-transform duration-500' icon={toggle.sourcScreen ? faArrowCircleUp : faArrowCircleDown} />
                            <span className='ml-5 font-semibold text-[18px]'>Sourcing & Screening</span>
                        </button>
                        <div 
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${toggle.sourcScreen ? 'max-h-96' : 'max-h-0'}`}
                            // aria-hidden={!toggle.vision}
                        >
                            <p className={`pt-4`}>Our in-house recruitment team and field agents source candidates from our extensive manpower database, local advertisements, and partner networks.</p> 
                            <p className={`pt-4`}>Each applicant goes through a rigorous selection process, which includes:</p>
                            <ul className="list-disc ml-5">
                                <li>Document verification and background check</li>
                                <li>Trade testing and practical skill evaluation</li>
                                <li>Preliminary interviews and shortlisting</li>
                            </ul>
                            <p className={` pt-4`}>Only qualified and verified candidates move forward for the final selection by the employer.</p>
                        </div>
                    </div>

                    <div className='p-5 bg-[#e98b28] w-[30%]  self-start rounded'>
                        <button onClick={() => handleToggle("selection")} className="cursor-pointer"><FontAwesomeIcon className='text-[20px]' icon={toggle.selection ? faArrowCircleUp : faArrowCircleDown} /><span className='ml-5 font-semibold text-[18px]'>Interviews & Final Selection</span>
                        </button>
                        <div 
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${toggle.selection ? 'max-h-96' : 'max-h-0'}`}
                            >
                            <p className={` pt-2 md:pt-4 text- `}>We coordinate and host interviews (virtual or in-person) between candidates and employers. Clients can conduct trade tests or practical demonstrations to assess the worker’s capability. Once approved, we move forward with documentation.</p>
                        </div>
                    </div>
                
                    <div className='bg-[#005f88] p-5 w-[30%]  self-start rounded'>
                        <button className="cursor-pointer w-full text-left" onClick={() => handleToggle("process")} aria-expanded={toggle.process}>
                            <FontAwesomeIcon className='text-[20px] transition-transform duration-500' icon={toggle.process ? faArrowCircleUp : faArrowCircleDown} />
                            <span className='ml-5 font-semibold text-[18px]'>Documentation & Visa Process</span>
                        </button>
                        <div 
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${toggle.process ? 'max-h-96' : 'max-h-0'}`}
                            // aria-hidden={!toggle.vision}
                        >
                            <p className={`pt-4`}>J.K.D. manages all legal formalities with precision and compliance. Our documentation team ensures that every process follows government regulations and international labor laws.</p> 
                            <p className={`pt-4`}>We handle:</p>
                            <ul className="list-disc ml-5">
                                <li>Employment contracts and offer letters</li>
                                <li>Visa processing and work permits</li>
                                <li>Medical examinations and police clearance</li>
                                <li>Document attestation and authentication from relevant authorities</li>
                            </ul>
                        </div>
                    </div>

                    <div className='bg-[#e98b28] p-5 w-[30%]  self-start rounded'>
                        <button className="cursor-pointer w-full text-left" onClick={() => handleToggle("orientation")} aria-expanded={toggle.orientation}>
                            <FontAwesomeIcon className='text-[20px] transition-transform duration-500' icon={toggle.orientation ? faArrowCircleUp : faArrowCircleDown} />
                            <span className='ml-5 font-semibold text-[18px]'>Pre-Departure Orientation</span>
                        </button>
                        <div 
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${toggle.orientation ? 'max-h-96' : 'max-h-0'}`}
                            // aria-hidden={!toggle.vision}
                        >
                            <p className={`pt-4`}>Before traveling, all selected candidates attend a Pre-Departure Orientation Program (PDOP) organized by J.K.D.</p> 
                            <p className={`pt-4`}>This session includes:</p>
                            <ul className="list-disc ml-5">
                                <li>Cultural and workplace orientation</li>
                                <li>Safety and labor law awareness</li>
                                <li>Travel and settlement guidance</li>
                                <li>Ethical conduct and communication training</li>
                            </ul>
                            <p className={`pt-4`}>This ensures candidates are mentally and professionally prepared for their overseas assignment.</p>
                        </div>
                    </div>

                    <div className='bg-[#00874F] p-5 w-[30%]  self-start rounded'>
                        <button className="cursor-pointer w-full text-left" onClick={() => handleToggle("support")} aria-expanded={toggle.support}>
                            <FontAwesomeIcon className='text-[20px] transition-transform duration-500' icon={toggle.support ? faArrowCircleUp : faArrowCircleDown} />
                            <span className='ml-5 font-semibold text-[18px]'>Deployment & Post Support</span>
                        </button>
                        <div 
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${toggle.support ? 'max-h-96' : 'max-h-0'}`}
                            // aria-hidden={!toggle.vision}
                        >
                            <p className={`pt-4`}>Once all formalities are completed, we arrange flight bookings, airport assistance, and coordination with overseas employers for smooth onboarding.</p> 
                            <p className={`pt-4`}>Even after deployment, we maintain regular communication to ensure worker welfare and client satisfaction.</p>
                            <p className="pt-4">Industries We Serve</p>
                            <p className={`pt-4`}>We provide manpower to a wide range of industries, including:</p>
                            <ul className="list-disc ml-5">
                                <li>Construction & Civil Engineering</li>
                                <li>Oil & Gas</li>
                                <li>Manufacturing & Industrial Projects</li>
                                <li>Hospitality & Facility Management</li>
                                <li>Electrical & Mechanical Services</li>
                                <li>Healthcare & Maintenance</li>
                                <li>Logistics, Transport & Support Services</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <div className=" w-full flex flex-col py-10 items-center ">
                <h3 className='w-[1200px] text-[30px] font-semibold'>Why Choose JKD ?</h3>
                <ul className="w-[1200px] ml-5 list-disc">
                    <li>Government-licensed and internationally recognized recruitment agency</li>
                    <li>Large database of skilled and verified workers</li>
                    <li>100% compliance with international labor standards</li>
                    <li>Transparent and ethical recruitment process</li>
                    <li>Dedicated support team for both clients and candidates</li>
                    <li>Proven track record of successful overseas placements</li>
                </ul>
                <p  className={`  w-[1200px] pt-4  pr-140`} >At J.K.D., we believe that every successful project begins with the right people.Our commitment to quality, compliance, and care makes us a trusted partner for companies seeking skilled manpower and for individuals aspiring to build a secure career abroad.</p>
            </div>

            {/*Uplift Events */}
            {/* <div className="bg-[#177faa] text-white w-full flex flex-col py-10 items-center ">
                <h1 className={` max-w-[1200px] text-center text-[30px] md:text-[35px] pb-2 lg:text-[39px] font-semibold w-full`}>Uplift Events</h1>
                <p  className={` text-center max-w-[1150px]`} >At JKD, we believe that growth isn’t limited to professional success it’s also about community development, teamwork, and personal upliftment.</p>    
                <p  className={` text-center max-w-[1150px]`} >Through our Uplift Events, we aim to inspire, engage, and empower individuals by organizing impactful programs, tournaments, and community gatherings that bring people together with a spirit of unity and motivation.</p>    
                <p  className={` text-center max-w-[1150px]`} >We take pride in organizing events that not only entertain but also promote physical wellness, teamwork, and social awareness among youth and working professionals.</p>    
            </div> */}

            {/* <div className=" w-full flex flex-col py-10 items-center bg-[#eefbff] ">
                <h3 className='text-[30px] font-semibold'>What We Do?</h3>
                <div className="flex gap-5 justify-center flex-wrap max-w-[1200px] pt-5">
                    {
                        whatWeDo?.map((element , index) => 
                            <div className="w-[48%]  bg-[white]  rounded p-2 px-5" key={index}>
                                <h4 className='text-[20px] font-semibold   '>{element.title}</h4>
                                <p className="py-2">{element.firstDesc}</p>
                                <ul className="list-disc ml-5">
                                    {
                                        element?.lists?.map((list , index)=>
                                        <li key={index}>{list}</li>
                                        )
                                    }
                                </ul>
                                <p className="pt-2">{element.lastDesc}</p>

                            </div>
                        )
                    }
                </div>
            </div>

            <div className=" w-full flex flex-col py-10 items-center ">
                <h3 className='w-[1200px] text-[30px] font-semibold'>Why Choose J.K.D. for Event Management?</h3>
                <ul className="w-[1200px] ml-5 list-disc">
                    <li>Experienced team for planning and execution</li>
                    <li>End-to-end management (venue, logistics, publicity & coordination)</li>
                    <li>Customized event planning as per client or community needs</li>
                    <li>Focus on impact, engagement, and excellence</li>
                    <li>A proven record of successful tournaments and community programs</li>
                </ul>
                <p  className={`  w-[1200px] pt-4  pr-140`} >At J.K.D., we don’t just organize events we create moments that motivate, connect, and inspire.Our Uplift Events are all about celebrating talent, promoting unity, and making a meaningful difference in people’s lives.</p>
            </div> */}

        </div> 
        <Footer />
      </div>
  )
}

export default Apply