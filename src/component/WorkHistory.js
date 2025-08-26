import React from 'react'
import { FaHandshake, FaRegSmile, FaAward, FaUserFriends } from 'react-icons/fa';
import WorkDetailItem from ".//WorkDetailItem";
import { useGlobal } from '@/context/GlobleContext';

const WorkHistory = () => {
    const {theme} = useGlobal();
    const workDetails=[
    {
        icon:FaHandshake , 
        numbers: 24,
        titel: 'Projects Done'
    },
    {
        icon:FaRegSmile , 
        numbers: 25000,
        titel: 'Customer Happy'
    },
    {
        icon:FaAward , 
        numbers: 10,
        titel: 'Guarantee Services'
    },
    {
        icon:FaUserFriends , 
        numbers: 21,
        titel: 'Team Experts'
    },
    ];
  return (
    <section className={`py-15 flex justify-center ${theme === 'light' ? 'bg-[#eefbff]' : 'bg-black'}  w-full`}>
        <div className="flex gap-10 justify-between text-center w-[1200px]">
        {workDetails?.map((detail, index) => (
            <React.Fragment key={index}>
            <WorkDetailItem detail={detail} />
            {workDetails.length - 1 !== index && (
                <div className={`${theme === 'light' ? 'bg-[#00874F]' :'bg-[#177faa]'} rounded-full h-full w-[7px]`}></div>
            )}
            </React.Fragment>
        ))}
        </div>
    </section>
  )
}

export default WorkHistory