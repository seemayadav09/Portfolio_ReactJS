import React from "react";
import { H2 } from "./ui/Typography";
import ProjectCard from "./ProjectCard";
import projects from "@/lib/projects";

const Projects = () => {
  return (
    <div className="w-full md:w-1/2  mx-auto">
      <div className="text-center p-5">
        <H2 text={"Projects"} />
      </div>

      <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 gap-3 justify-center md:justify-between items-center flex-wrap">
        {projects.map((project) => {
          return <ProjectCard project={project}/>;
        })}
      </div>
    </div>
  );
};

export default Projects;
