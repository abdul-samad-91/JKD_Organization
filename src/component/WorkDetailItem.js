// src/components/WorkDetailItem.js
"use client";

import { useGlobal } from "@/context/GlobleContext";
import { useCounter } from "@/helper/useCounter";
import { useInView } from "react-intersection-observer";

const WorkDetailItem = ({ detail }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  
  const count = useCounter(detail.numbers, inView);
  const Icon = detail.icon;
  const {theme} = useGlobal();

  return (
    <div key={detail.titel} ref={ref} className={`${theme === 'light' ? 'text-[#00874F]' :'text-[#177faa] '} w-[150px] sm:w-auto flex gap-3 flex-col items-center`}>
      <Icon className="text-5xl  mb-2" />
      <h2 className="text-4xl font-bold">{count} <span className=" text-3xl relative top-[-10px]">+</span></h2>
      <h4 className="font-semibold">{detail.titel}</h4>
    </div>
  );
};

export default WorkDetailItem;