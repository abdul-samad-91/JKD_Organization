import { useGlobal } from '@/context/GlobleContext';
import React from 'react'


const Carrer = () => {
   const data = [
    {title:'TVETA Courses' , text:'Our TVETA programs equip students with hands-on vocational and technical skills, preparing them for real-world opportunities and sustainable careers.'},
    {title:'IT Courses' , text:'From basic computer skills to advanced digital training, our IT courses empower learners to thrive in today’s technology-driven world.'},
    {title:'Project Management' , text:'Designed for aspiring leaders, our project management training builds essential planning, organizing, and execution skills for professional success.'}
  ];
  const {theme} = useGlobal();
  return (
    <section className={`${theme === 'light' ? 'bg-[#eefbff]':'bg-black'} w-full flex flex-col items-center my-10 py-10`}>
        <div className='max-w-[1200px] px-4'>
            <h2 className='text-[35px] font-semibold '>Carrer At <span className={` ${theme === 'dark' ? 'text-[#177faa]' : 'text-[#00874F]'}`}>JKD</span></h2>
            <div className='md:flex  gap-5 rounded w-full justify-center items-center md:pt-5'>
              {data?.map((card , index)=>
                <div key={index} className={`mt-5 md:mt-0 flex flex-col justify-center px-5 h-[200px] rounded  ${theme === 'dark' ? 'bg-[#177eaa94]' : 'bg-[#00874f85]'}`}>
                  <h3 className='text-[30px] font-semibold '>{card.title}</h3>
                  <p className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-justify pt-4`}>{card.text}</p>
                </div>
              )}
            </div>
        </div>
    </section>
  )
}

export default Carrer