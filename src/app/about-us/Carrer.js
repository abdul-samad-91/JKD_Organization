import React from 'react'


const Carrer = () => {
   const data = [
    {title:'TVETA Courses' , text:'Our TVETA programs equip students with hands-on vocational and technical skills, preparing them for real-world opportunities and sustainable careers.'},
    {title:'IT Courses' , text:'From basic computer skills to advanced digital training, our IT courses empower learners to thrive in today’s technology-driven world.'},
    {title:'Project Management' , text:'Designed for aspiring leaders, our project management training builds essential planning, organizing, and execution skills for professional success.'}
  ]
  return (
    <section className='bg-[#eefbff] w-full flex flex-col items-center  py-10'>
        <div className='w-[1200px]'>
            <h2 className='text-[35px] font-semibold '>Carrer At <span className={`text-[#00874F]`}>JKD</span></h2>
            <div className='flex  gap-5 rounded w-full justify-center items-center pt-5'>
              {data?.map((card , index)=>
                <div key={index} className=' flex flex-col justify-center px-5 h-[200px] bg-white'>
                  <h3 className='text-[30px] font-semibold '>{card.title}</h3>
                  <p className='text-justify  text-gray-700 pt-4'>{card.text}</p>
                </div>
              )}
            </div>
        </div>
    </section>
  )
}

export default Carrer