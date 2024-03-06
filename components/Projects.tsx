"use client";

import { FunctionComponent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/hooks/hooks";

import ProjectCard from "./ProjectCard";
import SearchBar from "./ui/SearchBar";
import { useSearchContext } from "@/context/SearchContext";
import { BiLoader } from "react-icons/bi";
import FilterBar from "./ui/FilterBar";

interface ProjectsProps {}

const Projects: FunctionComponent<ProjectsProps> = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  const { search, setSearch, filterTags } = useSearchContext();
  const [displayCount, setDisplayCount] = useState(6);

  useEffect(() => {
    setDisplayCount(6);
  }, [search, filterTags]);

  const filteredProjects = projectsData
    .filter((project) => {
      if (filterTags.length > 0) {
        if (
          !filterTags.every((tag) => project.tags.includes(tag.toLowerCase()))
        ) {
          return false;
        }
      }
      return (
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase()),
        )
      );
    })
    .sort((a, b) => b.rating - a.rating);

  const slicedProjects = filteredProjects.slice(0, displayCount);
  return (
    <section
      ref={ref}
      id="projects"
      className="mb-28 w-full max-w-[108rem] scroll-mt-28"
    >
      <SectionHeading>My projects</SectionHeading>
      <SearchBar value={search} setValue={setSearch} />
      <FilterBar />
      <div className="grid grid-cols-1 justify-center gap-4 md:grid-cols-[repeat(auto-fill,35rem)]">
        <AnimatePresence>
          {slicedProjects.map((project, index) => {
            return (
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.1 * index,
                  duration: 0.2,
                  ease: "easeInOut",
                }}
                key={project.id + index + project.link}
                exit={{
                  scale: 0.85,
                  opacity: 0,
                  transition: { duration: 0.15 },
                }}
              >
                <ProjectCard {...project} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {filteredProjects.length > displayCount && (
        <button
          className="group mx-auto my-3 flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-105 hover:bg-gray-950 focus:scale-105 active:scale-105"
          onClick={() => setDisplayCount((prev) => prev + 6)}
        >
          Load More
          <BiLoader className="opacity-70 transition group-hover:animate-spin" />
        </button>
      )}
    </section>
  );
};

export default Projects;
