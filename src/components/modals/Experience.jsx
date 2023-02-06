import React from "react";
import { motion } from "framer-motion";
import ExpItem from "../ExpItem";
import { BiLeftArrow } from "react-icons/bi";

function Experience({ setSkillModal, setExperienceModal }) {
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
            Years of Experience Pretending to Work While Surfing the Web
          </h1>
        </div>
        <BiLeftArrow
          onClick={() => {
            setSkillModal(true);
            setExperienceModal(false);
          }}
          className="fixed z-20 text-white right-[10.3vw] bottom-[13vh] h-6 w-6 cursor-pointer hover:scale-110 transition-all "
        />
        <div className="grid grid-cols-2 gap-10 mt-14">
          <ExpItem
            role="Front-end Intern"
            company="Scrollify"
            time="Jan 2023 - Feb 2023"
            info={`• Implemented a user-friendly portfolio builder using React for creative professionals.\n• Debugged and fixed front-end technical issues to improve user experience.\n• Integrated the portfolio builder with back-end systems to ensure seamless data flow and functionality.\n• Worked closely with the founder and CTO to enhance my skills and knowledge.`}
          />
          <ExpItem
            role="Lead Front-end Intern"
            company="Jobs Territory"
            time="June 2022 - August 2022"
            info={`• Worked on the company's Applicant Tracking System (ATS) platform to enhance the user experience.\n• Built the company's official website from scratch, ensuring that it is user-friendly and visually appealing using React.\n• Ensured the responsive design and compatibility of the website and ATS platform across multiple devices and browsers.\n• Led a team of 5 interns,resolved conflicts and ensured smooth progress of work.`}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
