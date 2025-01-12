import React from "react";

import { Dock, DockIcon } from "../components/ui/dock";
import { FaGithub, FaLinkedin, FaHome, FaPen } from "react-icons/fa";
import { MdEmail, MdWork  } from "react-icons/md";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <div id="home" className="w-full md:w-1/2 mx-auto fixed bottom-[1px] scale-75 md:scale-100 md:sticky md:top-10">
      <div className="rounded-full">
        <Dock direction="middle" className="rounded-full">
          <DockIcon>
           <a href="#home"><FaHome className="size-6" /></a>
          </DockIcon>
          <DockIcon>
          <a href="#experiences"><MdWork className="size-6" /></a>
          </DockIcon>
          <DockIcon>
          <a href="https://github.com/seemayadav09" target="_blank" rel="noopener noreferrer"><FaGithub className="size-6" /></a>
          </DockIcon>
          <DockIcon>
          <a href="https://www.linkedin.com/in/seemayadav09/" target="blank"><FaLinkedin className="size-6" /></a>
          </DockIcon>
          <DockIcon>
            <a href="#contactForm"><MdEmail className="size-6" /></a>
          </DockIcon>
          <DockIcon>
            <FaPen className="size-5" />
          </DockIcon>
          <ModeToggle/>
        </Dock>
        <div></div>
      </div>
    </div>
  );
}
