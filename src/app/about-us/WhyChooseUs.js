import React from 'react'

const WhyChooseUs = () => {
    const data = [
        {
            borderColor: '#e98b28',
            title: 'Community ',
            titlePart:'Empowerment',
            subTitle1:'Statement',
            subTitle2:'Why it matters',
            text1:'“We’re more than just service providers we’re community builders.”',
            text2:'You focus not only on services but also on uplifting entire underserved communities through multi dimensional support.',
        },
        {
            borderColor: '#00874F',
            title:'Sustainable',
            titlePart:'Services',
            subTitle1:'Statement',
            subTitle2:'Why it matters',
            text1:'“From tech training to green tourism and events, our wide ranging programs cater to diverse needs.”',
            text2:'Your variety ranging from vocational courses to event hosting to eco-tourism—demonstrates adaptability and breadth.',
        },
        {
            borderColor: '#177faa',
            title:'FutureDriven ',
            titlePart:'Growth',
            subTitle1:'Statement',
            subTitle2:'Why it matters',
            text1:'“We build with the future in mind promoting sustainable development across all our initiatives.”',
            text2:'Emphasizing how programs like Green-Tourism and vocational training are rooted in sustainability resonates with value-driven audiences.',
        }
    ];
  return (
    <section className='bg-[#eefbff] w-full flex flex-col items-center my-10 py-10'>
        <div className='w-[1200px]'>
            <h2 className='text-[35px] font-semibold '>Why Choose <span className={`text-[#00874F]`}>Us?</span></h2>
        </div>
        <div className='flex  gap-5 rounded w-full justify-center items-center pt-5'>
              {data?.map((card , index)=>
                <div key={index} className={`relative flex flex-col justify-start p-5 w-[390px] h-[390px] border-[${card.borderColor}] border-5 rounded bg-white`} style={{borderColor:card.borderColor}}>
                  <h3 className='text-[30px] font-semibold w-[60%] '>{card.title} <span className="text-[#00874F]">{card.titlePart}</span></h3>
                  <span className='absolute top-3 right-6 text-[60px] text-gray-400  font-bold'>0{index+1}</span>
                  <h4 className='text-[20px] font-semibold pt-6'>{card.subTitle1}</h4>
                  <p className='text-justify  text-gray-700 '>{card.text1}</p>
                  <h4 className={`text-[20px] font-semibold ${index+1 === 1?'pt-8':'pt-2'} `}>{card.subTitle2}</h4>
                  <p className='text-justify  text-gray-700'>{card.text2}</p>
                </div>
              )}
        </div>
    </section>
  )
}

export default WhyChooseUs