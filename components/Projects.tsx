"use client";

import { FunctionComponent, useState } from "react";
import SectionHeading from "./ui/SectionHeading";
import Project from "./Project";
import { projectCategoriesData } from "@/lib/data";
import { useSectionInView } from "@/hooks/hooks";
import ProjectCategory from "./ProjectCategory";

interface ProjectsProps {}

const Projects: FunctionComponent<ProjectsProps> = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="mb-28 scroll-mt-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectCategoriesData.map((category, index) => (
          <ProjectCategory {...category} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
