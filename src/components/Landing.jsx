import React from "react";
import TypingAnimation from "./ui/typing-animation";
import { H1, P } from "./ui/Typography";
import profileImg from '../assets/profileImg.png'
import { RainbowButton } from "./ui/rainbow-button";

const Landing = () => {
  return (
    <div className=" w-full md:w-1/2 mx-auto my-8 h-screen/2 flex flex-col justify-center items-center" id="">
      <div className="text-center flex flex-col items-center p-4">

        <div className="w-40 h-40 overflow-hidden rounded-full"> 
            <img src={profileImg} alt="" />
        </div>
    
        <div>
        <TypingAnimation as="span" startOnView={true}>Hi, I am Seema Yadav</TypingAnimation>
        <p className="px-10 text-gray-400 font-semibold">I’m a Full Stack Web Developer with <span className="text-violet-600 font-bold">1+ YOE</span> of experience building web applications from scratch. I love solving real-world problems, learning new things, and creating tools that make life easier. Thanks for stopping by my profile!</p>
        </div>

        <div className="flex flex-col space-y-8 md:block">
        <RainbowButton className={"mt-12 mx-4 mb-20 dark:text-black"}>Download Resume</RainbowButton>
        </div>

      </div>
    </div>
  );
};

export default Landing;
