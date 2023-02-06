import React from "react";
import { motion } from "framer-motion";
import SkillItem from "../SkillItem";
import { FaCss3Alt, FaHtml5, FaJava, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { RiGhostSmileLine } from "react-icons/ri";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

function Skills({ setSkillModal, setExperienceModal }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 1,
      }}
    >
      <div className="flex flex-col items-center justify-center lg:items-start">
        <div className="flex items-center mt-1 space-x-2 text-xl lg:mt-8 lg:text-3xl">
          <h1 className="font-semibold ">
            Finally, a List of Skills That Prove I'm Not Just Wasting Time on
            the Internet
          </h1>
          <BiLeftArrow
            onClick={() => {
              setSkillModal(false);
              setExperienceModal(false);
            }}
            className="fixed z-20 text-white right-[11.5vw] bottom-[13vh] h-6 w-6 cursor-pointer hover:scale-110 transition-all "
          />
          <BiRightArrow
            onClick={() => {
              setSkillModal(false);
              setExperienceModal(true);
            }}
            className="fixed z-20 text-white right-[10vw] bottom-[13vh] h-6 w-6 cursor-pointer hover:scale-110 transition-all "
          />
        </div>
        <div className="grid grid-cols-5 gap-10 mt-14">
          <SkillItem
            name="React"
            icon={<FaReact className="w-16 h-16 text-[#61dafb]" />}
            tagline="Crafting seamless React experiences, one component at a time."
            level="Advance"
          />
          <SkillItem
            name="JavaScript"
            icon={<FaJs className="w-16 h-16 text-[#f7df1d] " />}
            tagline="Bringing dynamic functionality to life with JavaScript magic."
            level="Advance"
          />
          <SkillItem
            name="Tailwind"
            icon={<SiTailwindcss className="w-16 h-16 text-[#38bdf8] " />}
            level="Advance"
            tagline="Designing visually stunning websites with Tailwind CSS flair."
          />
          <SkillItem
            name="Java"
            icon={<FaJava className="w-16 h-16 text-[#f89820] " />}
            level="Intermediate"
            tagline="Engineering efficient solutions with Java mastery."
          />
          <SkillItem
            name="HTML"
            icon={<FaHtml5 className="w-16 h-16 text-[#e96228] " />}
            level="Advance"
            tagline="Bringing ideas to life with HTML precision and creativity."
          />
          <SkillItem
            name="CSS"
            icon={<FaCss3Alt className="w-16 h-16 text-[#2862e9] " />}
            level="Intermediate"
            tagline="Styling websites to perfection with CSS mastery."
          />
          <SkillItem
            name="Dark Jokes"
            icon={<RiGhostSmileLine className="w-16 h-16 text-[#f1976d] " />}
            level="Pro"
            tagline="Making people uncomfortable since 2001."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
