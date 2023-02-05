import React from "react";
import { TypeAnimation } from "react-type-animation";
import Socials from "./Socials";
import { BsArrowRightShort } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  const about = [
    `I'm a frontend developer with a passion for creating websites so beautiful, they'll make you forget about all the horrors of the internet.\nMy superpower? Making things look good, even when they're not.\nIn my free time, I enjoy fighting with CSS and staring at lines of code until they turn into beautiful, functional websites.\nRumor has it that I've been coding since I was born and that I can solve any frontend problem in less than 10 seconds (or, you know, an hour or two).\nLet's just say, I'm basically a superhero without the cape.`,
    `I'm a Frontend Developer, master of HTML, CSS, and JavaScript.\nI can turn a designer's wildest dreams into code and make it look good on any device.\nWhen I'm not solving cross-browser compatibility issues, you can find me admiring my perfectly indented code or making sarcastic comments about how easy the latest project was.\nDon't be fooled by my jokes, I take my job seriously.\nOr at least, that's what I tell my boss.`,
    `I'm a Frontend Developer who spends most of my days translating designer's wildest dreams into code,\nand some days pretending to understand what UX means.\nWhen I'm not solving browser compatibility issues, I'm busy convincing the world that JavaScript is not a virus.\nI have a love-hate relationship with CSS, but hey, at least it gives me a chance to play with colors.\nIf you're looking for a developer who can make websites look good, and occasionally make sarcastic jokes, I'm your guy.`,
    `I'm a frontend developer with a love-hate relationship with CSS.\nWhen I'm not fixing cross-browser compatibility issues, you can find me trying to convince my cat to try a new design concept.\nMy superpower?\nMaking websites look good on any device, even flip phones.\nAnd no, I don't do back-end... that's just cruel.`,
    `I'm a frontend developer who's mastered the art of turning caffeine into code.\nMy HTML is semantic, my CSS is stylish, and my JavaScript is...well, let's just say it's better than it used to be.\nWhen I'm not writing code, I'm either pretending to understand design or trying to explain the difference between the two to others.\nIf you need a website that looks good and functions even better, I'm your guy.`,
    `I'm a frontend developer who can code circles around a designer's sketches.\nI turn pixels into websites and turn coffee into code.\nI'm not saying I'm the best, but the websites I create are definitely more attractive than my personality.\nI'm like a magician, but instead of pulling rabbits out of hats,\nI pull responsive, user-friendly websites out of thin air.`,
  ];

  const randomElement = about[Math.floor(Math.random() * about.length)];

  return (
    <div className="flex flex-col items-center lg:items-start justify-between h-[65vh] lg:h-[55vh] text-white lg:ml-[22vw] z-20">
      <div className="h-[0.2vw] w-[60vh] bg-white hidden lg:fixed lg:block bottom-[10vh] right-[10vw] "></div>
      <div className="fixed hidden top-[23vh] left-[7.8vw] lg:flex flex-col items-center space-y-8 ">
        <div className="w-[0.2vw] h-[20vh] bg-white "></div>
        <a
          href="https://github.com/justAkshitAgrawal"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="w-8 h-8 cursor-pointer " />
        </a>
        <a
          href="https://www.linkedin.com/in/akshitagrwl/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <FaLinkedin className="w-8 h-8 cursor-pointer " />
        </a>
        <div className="w-[0.2vw] h-[30vh] mt-[15vh] bg-white "></div>
      </div>
      <div className="flex flex-col items-center justify-center lg:items-start">
        <h1 className="text-xl lg:text-5xl ">Bonjour,</h1>
        <div className="flex items-center mt-1 space-x-2 text-xl font-semibold lg:mt-8 lg:text-5xl">
          <h1 className="font-normal ">I am</h1>
          <TypeAnimation
            speed={20}
            wrapper="h1"
            className="font-bold "
            sequence={["Akshit Agrawal"]}
          ></TypeAnimation>
        </div>
        <Socials />
        <h1 className="px-10 mt-5 lg:mt-10 text-center text-[#9d9d9c] lg:text-white/70 text-sm whitespace-pre-wrap lg:text-xl lg:text-left lg:p-0 lg:leading-relaxed lg:max-w-[60vw] ">
          {randomElement}
        </h1>
      </div>
      <button
        className="p-2 mt-2 flex items-center text-sm border-2 space-x-1 lg:space-x-3 hover:bg-white hover:text-[#1f1f1f] transition-all hover:border-[#1f1f1f] lg:text-xl lg:p-3 "
        onClick={() => {
          window.open(
            "https://drive.google.com/file/d/1OoLLOUQtxmtVL78OgL3XbboieFlw9FQb/view?usp=sharing"
          );
        }}
      >
        <h1>Download Resume</h1>
        <BsArrowRightShort className="w-5 h-5 " />
      </button>
    </div>
  );
}

export default About;