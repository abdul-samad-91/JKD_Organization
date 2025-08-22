// src/components/WorkDetailItem.js
"use client";

import { useCounter } from "@/helper/useCounter";
import { useInView } from "react-intersection-observer";

const WorkDetailItem = ({ detail }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const count = useCounter(detail.numbers, inView);
  const Icon = detail.icon;

  return (
    <div key={detail.titel} ref={ref} className="flex gap-3 flex-col items-center">
      <Icon className="text-5xl text-green-600 mb-2" />
      <h2 className="text-4xl font-bold">{count} <span className="text-3xl text-green-600 relative top-[-10px]">+</span></h2>
      <h4 className="text-gray-600">{detail.titel}</h4>
    </div>
  );
};

export default WorkDetailItem;