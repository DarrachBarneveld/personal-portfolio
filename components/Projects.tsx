"use client";

import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { projectCategoriesData, projectProgressData } from "@/lib/data";
import { useSectionInView } from "@/hooks/hooks";
import ProjectCategory from "./ProjectCategory";
import PipeLine from "./PipeLine";

interface ProjectsProps {}

const Projects: FunctionComponent<ProjectsProps> = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="mb-28 scroll-mt-28">
      <SectionHeading>My projects</SectionHeading>
      <div className="flex flex-col items-center gap-3 lg:gap-[5rem]">
        {projectCategoriesData.map((category, index) => (
          <ProjectCategory {...category} key={index} />
        ))}
      </div>
      <PipeLine />
    </section>
  );
};

export default Projects;
