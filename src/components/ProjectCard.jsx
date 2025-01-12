import React from "react";
// import projects from "@/lib/projects.js";
import { FaGlobeAmericas,FaGithub  } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

const ProjectCard = ({project}) => {
  return (
    <div>
      <div className="w-96">
        <Card>
          <CardHeader>
            <div className="overflow-hidden rounded-md mb-3 hover:cursor-pointer">
              <a href={project.LiveURL} target="blank"><img src={project.imgUrl} alt="" className="w-full h-full" /></a>
            </div>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row justify-start gap-3 items-center flex-wrap">
              {project.techStack.map((tech) => {
                return (
                  <div className="bg-gray-50 py-1 px-3 rounded-full text-[12px] dark:text-black">
                    {tech}
                  </div>
                );
              })}
            </div>
          </CardContent>
          <CardFooter>
            <div>
              <a href={project.LiveURL} target="blank"><Button>
                <FaGlobeAmericas />
                Live
              </Button>
              </a>
              <a href={project.githubURL} target="blank"><Button variant="outline" className="mx-3">
                <FaGithub />
                Code
              </Button>
              </a>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ProjectCard;
