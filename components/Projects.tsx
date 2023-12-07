"use client";

import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { projectCategoriesData, projectProgressData } from "@/lib/data";
import { useSectionInView } from "@/hooks/hooks";
import ProjectCategory from "./ProjectCategory";
import ProjectProgress from "./ProjectProgress";

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
      <h2 className="mb-3 mt-8 text-center text-3xl font-medium capitalize">
        Pipeline
      </h2>
      <div className="flex flex-wrap justify-center gap-2">
        {projectProgressData.map((project, index) => (
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 * index }}
            className="group"
            key={index}
          >
            <ProjectProgress {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
