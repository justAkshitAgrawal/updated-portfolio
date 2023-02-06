import React from "react";

function SkillItem({ name, icon, tagline, level }) {
  return (
    <div className="z-10 flex flex-col items-center p-5 space-y-2 transition-all cursor-pointer bg-white/10 rounded-xl hover:scale-110 hover:bg-white/20">
      {icon}
      <h1>{name}</h1>
      <h1 className="text-sm text-[#9d9d9c]">Level: {level}</h1>
      <h1 className="text-xs text-center text-[#9d9d9c] max-w-[8vw]">
        {tagline}
      </h1>
    </div>
  );
}

export default SkillItem;
