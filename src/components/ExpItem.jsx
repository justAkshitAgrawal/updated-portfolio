import React from "react";
import { DiCode } from "react-icons/di";

function ExpItem({ role, company, time, info }) {
  return (
    <div className="z-10 flex flex-col items-start p-5 transition-all cursor-pointer bg-white/10 rounded-xl hover:scale-110 hover:bg-white/20">
      <DiCode className="w-10 h-10 -ml-1 " />
      <h1 className="mt-1 text-xl ">{role}</h1>
      <div className="flex items-center space-x-1 ">
        <h1 className=" text-[#9d9d9c] ">{company} |</h1>
        <h1 className=" text-[#9d9d9c] ">{time}</h1>
      </div>
      <h1 className="mt-3  text-white/70 max-w-[20vw] whitespace-pre-wrap">
        {info}
      </h1>
    </div>
  );
}

export default ExpItem;
