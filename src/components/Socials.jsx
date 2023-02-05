import React from "react";
import SocialItem from "./SocialItem";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Socials() {
  return (
    <div className="flex items-center mt-5 space-x-4 lg:hidden">
      <SocialItem
        icon={<FaGithub className="w-6 h-6 " />}
        url="https://github.com/justAkshitAgrawal"
      />
      <SocialItem
        icon={<FaLinkedin className="w-6 h-6 " />}
        url="https://www.linkedin.com/in/akshitagrwl/"
      />
    </div>
  );
}

export default Socials;
