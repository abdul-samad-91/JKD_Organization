import Footer from "@/component/Footer";
import Header from "@/component/Header";



export default function EventsPage() {
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

  return (
    <div className="flex flex-col w-full  h-screen">
        <Header />
        <div className="pt-16"></div>
        {/* <h1 className="text-3xl font-bold">Events Page Coming Soon!</h1> */}
        <div className="bg-[#177faa] text-white w-full flex flex-col py-10 items-center ">
            <h1 className={` max-w-[1200px] text-center text-[30px] md:text-[35px] pb-2 lg:text-[39px] font-semibold w-full`}>Uplift Events</h1>
            <p  className={` text-center max-w-[1150px]`} >At JKD, we believe that growth isn’t limited to professional success it’s also about community development, teamwork, and personal upliftment.</p>    
            <p  className={` text-center max-w-[1150px]`} >Through our Uplift Events, we aim to inspire, engage, and empower individuals by organizing impactful programs, tournaments, and community gatherings that bring people together with a spirit of unity and motivation.</p>    
            <p  className={` text-center max-w-[1150px]`} >We take pride in organizing events that not only entertain but also promote physical wellness, teamwork, and social awareness among youth and working professionals.</p>    
         </div>

                     <div className=" w-full flex flex-col py-10 items-center bg-[#eefbff] ">
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
            </div>
         <Footer />
    </div>
  );
}