import React from "react";
import experiences from "@/lib/experience";
import ExpCard from "./ExpCard";
import { H2 } from "./ui/Typography";

const Experience = () => {
  return (
    <div id="experiences" className="w-full md:w-1/2  mx-auto p-4 mt-15">
      <div className="text-center p-5">
        <H2 text={"Experiences"} />
      </div>
      <div className="flex flex-col space-y-1 gap-3 justify-between items-center flex-wrap w-full">
        {experiences.map((experience) => {
          return <ExpCard experience={experience}/>;
        })}
      </div>
    </div>
  );
};

export default Experience;
