"use client";

import { FunctionComponent } from "react";
import SectionHeading from "./ui/SectionHeading";
import Project from "./Project";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/hooks/hooks";

interface ProjectsProps {}

const Projects: FunctionComponent<ProjectsProps> = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="mb-28 scroll-mt-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
