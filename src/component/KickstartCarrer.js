import React from 'react'
import logoPart1 from "../../public/logo-part1.png"
import logoPart2 from "../../public/logo-part2.png"
import Image from 'next/image';

const KickstartCarrer = () => {
  const data = [
      {
          borderColor: '#e98b28',
          title: 'Community ',
          titlePart:'Empowerment',
          // subTitle1:'Statement',
          // subTitle2:'Why it matters',
          text1:'At JKD Pakistan, we’re more than just service providers — we’re community builders. Our mission goes beyond delivering training and education; we strive to uplift underserved communities through multidimensional support. By empowering individuals with skills, knowledge, and opportunity, we help create a stronger, self-reliant society where everyone has the chance to grow and succeed.',
          // text2:'You focus not only on services but also on uplifting entire underserved communities through multi dimensional support.',
      },
      {
          borderColor: '#00874F',
          title:'Sustainable',
          titlePart:'Services',
          // subTitle1:'Statement',
          // subTitle2:'Why it matters',
          text1:'At JKD Pakistan, we offer a diverse range of programs — from technology training to green tourism and event management — each designed to meet the evolving needs of our communities. Our commitment to sustainability and innovation reflects our adaptability and vision for long-term impact. Through every service we provide, we aim to build a balanced future where education, environment, and enterprise grow together.',
          // text2:'Your variety ranging from vocational courses to event hosting to eco-tourism—demonstrates adaptability and breadth.',
      },
      {
          borderColor: '#177faa',
          title:'Future Driven ',
          titlePart:'Growth',
          // subTitle1:'Statement',
          // subTitle2:'Why it matters',
          text1:'At JKD Pakistan, we build with the future in mind — promoting sustainable development across all our initiatives. From Green Tourism to vocational training, every program is designed to create long-term value for individuals, communities, and the environment. Our future-focused approach ensures that progress today leads to lasting, positive change for generations to come.',
          // text2:'Emphasizing how programs like Green-Tourism and vocational training are rooted in sustainability resonates with value-driven audiences.',
      }
  ];
  const theme = 'light';

  return (
    <section className='bg-[#005f88] w-full flex flex-col items-center my-10 py-20 text-white'>
        <h2 className='text-[35px] font-normal'>Ready to Kickstart your<span className={` font-bold text-[#e98b28]`}>Career?</span></h2>
        <h3 className='text-[23px] pt-2 '>Insterted in Innovation and Design</h3>
        <div className='my-3 py-5 flex items-center overflow-visible relative '>
          <Image src={logoPart1} alt='logo' className='h-[200px] absolute top-[-40px] left-[-200px] w-[200px] object-contain overflow-auto' />
          <span className='text-[45px] font-semibold  border-2  rounded border-[#e98b28] px-16 py-3 '>JOIN US!</span>
          <Image src={logoPart2} alt='logo' className='h-[200px] absolute top-[-15px] right-[-200px] w-[200px] object-contain overflow-auto' />
        </div>
        <p className='text-center w-[1200px] pt-2'>Are you ready to embark on a journey of personal and professional growth? Look no further! Our comprehensive three-tier training program is designed to equip you with the skills, knowledge, and confidence you need to succeed in today’s competitive landscape. Whether you’re a budding professional, an aspiring entrepreneur, or a seasoned industry expert, our program has something for everyone.</p>
        <div  className='max-w-[1200px] px-4 pt-10 '>
          <div>
              <h2 className='text-[35px] font-semibold text-center '>Why JKD?</h2>
          </div>
          <div className='md:flex  gap-5 rounded justify-center items-center md:pt-5'>
                {data?.map((card , index)=>
                  <div key={index} className={` mt-5 md:mt-0 relative flex flex-col justify-start p-5 md:w-[33%] lg:h-[390px]  border-5 rounded bg-white`} 
                  >
                    <h3 className='text-[30px] font-semibold w-[62%]  text-black'>{card.title} <span className={` ${theme === 'dark' ? 'text-[#177faa]' : 'text-[#00874F]'}`}>{card.titlePart}</span></h3>
                    {/* <span className='absolute top-3 right-6 text-[60px] text-gray-400  font-bold'>0{index+1}</span> */}
                    {/* <h4 className='text-[20px] font-semibold pt-6 text-black'>{card.subTitle1}</h4> */}
                    <p className={` text-justify  ${theme === 'dark' ? 'text-white' : 'text-gray-700'} `}>{card.text1}</p>
                    {/* <h4 className={`text-[20px] font-semibold ${index+1 === 1?'pt-8':'pt-2'} text-black `}>{card.subTitle2}</h4>
                    <p className={`text-justify ${theme === 'dark' ? 'text-white' : 'text-gray-700'} `}>{card.text2}</p> */}
                  </div>
                )}
          </div>
        </div>
    </section>
  )
}

export default KickstartCarrer