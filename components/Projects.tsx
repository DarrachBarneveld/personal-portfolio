"use client";

import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/hooks/hooks";

import ProjectCard from "./ProjectCard";
import SearchBar from "./ui/SearchBar";
import { useSearchContext } from "@/context/SearchContext";

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
    <section
      ref={ref}
      id="projects"
      className="mb-28 w-full max-w-[108rem] scroll-mt-28"
    >
      <SectionHeading>My projects</SectionHeading>

      <SearchBar />
      <div className="grid grid-cols-1 justify-center gap-4 md:grid-cols-[repeat(auto-fill,35rem)]">
        {filteredProjects.map((project, index) => {
          return (
            <motion.div
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              initial={{ scale: 0.7, opacity: 0 }}
              transition={{ delay: 0.1 * index }}
              key={index}
              className="group"
            >
              <ProjectCard {...project} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
