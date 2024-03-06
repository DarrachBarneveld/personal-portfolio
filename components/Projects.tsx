"use client";

import { FunctionComponent, use } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/hooks/hooks";

import ProjectCard from "./ProjectCard";
import SearchBar from "./ui/SearchBar";
import { SearchProvider, useSearchContext } from "@/context/SearchContext";

interface ProjectsProps {}

const Projects: FunctionComponent<ProjectsProps> = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  const { search } = useSearchContext();

  const filteredProjects = projectsData.filter(
    (project) =>
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(search.toLowerCase()),
      ),
  );

  return (
    <section ref={ref} id="projects" className="mb-28 scroll-mt-28">
      <SectionHeading>My projects</SectionHeading>

      <SearchBar />
      <div className="bg-red flex flex-wrap items-center justify-center gap-2">
        {filteredProjects.map((project, index) => {
          console.log(project);
          return (
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              key={index}
            >
              <ProjectCard {...project} />
            </motion.div>
          );
        })}
      </div>
      {/* <PipeLine /> */}
    </section>
  );
};

export default Projects;
