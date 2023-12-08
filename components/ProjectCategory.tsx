"use client";

import Image from "next/image";
import { FunctionComponent, useState } from "react";
import ScrollViewWrapper from "./ui/ScrollViewWrapper";
import { projectCategoriesData, projectsDataExcerpt } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { IoIosCloseCircle } from "react-icons/io";
import { zoomOut } from "@/animations/variants";

function categoryColor(id: number) {
  let iconColor = "";
  let border = "";
  let background = "";
  switch (id) {
    case 1:
      iconColor = "bg-yellow-400 shadow-lg shadow-yellow-600/40";
      border = "border border-yellow-600";
      background = "bg-yellow-100";
      break;
    case 2:
      iconColor = "bg-red-600 shadow-lg shadow-red-800/40";
      border = "border border-red-600";
      background = "bg-red-100";
      break;
    case 3:
      iconColor = "bg-green-600 shadow-lg shadow-green-800/40";
      border = "border border-green-600";
      background = "bg-green-100";
      break;
    default:
      iconColor = "bg-red-600 shadow-lg shadow-red-800/40";
      border = "border border-red-600";
      background = "bg-red-100";
      break;
  }

  return { iconColor, background, border };
}

export type ProjectCategoryProps = (typeof projectCategoriesData)[number];

const ProjectCategory: FunctionComponent<ProjectCategoryProps> = ({
  id,
  title,
  description,
  imageUrl,
  icon,
  projects,
}) => {
  const [showProjects, setShowProjects] = useState(false);

  const filteredProjects = projectsDataExcerpt.filter((project) =>
    projects.some((id: string) => id === project.id),
  );

  const { iconColor, border, background } = categoryColor(id);

  return (
    <AnimatePresence mode="wait">
      {!showProjects ? (
        <ScrollViewWrapper>
          <div className="max-w-[42rem] rounded-lg bg-white group-even:flex-row-reverse lg:mx-8  lg:flex lg:max-w-5xl lg:shadow-lg">
            <div className="bg-red z-10 flex overflow-hidden border border-black/50 lg:w-1/2 lg:scale-110 lg:rounded-lg">
              <Image
                src={imageUrl}
                alt="Project I worked on"
                quality={95}
                className="w-100 h-100 object-cover"
              />
            </div>
            <div className="relative rounded-t-none border px-6 py-12 lg:w-1/2 lg:max-w-5xl lg:rounded-lg lg:px-12">
              <div
                className={`absolute -top-1  left-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border border-black/40 ${iconColor}`}
              >
                <span className="text-5xl text-white">{icon}</span>
              </div>
              <h2 className="text-3xl font-bold text-indigo-600">{title}</h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                {description}
              </p>
              <div className="mt-8">
                <button
                  onClick={() => setShowProjects(true)}
                  className="rounded bg-gray-900 px-5 py-3 font-semibold text-gray-100"
                >
                  View Projects
                </button>
              </div>
            </div>
          </div>
        </ScrollViewWrapper>
      ) : (
        <motion.div
          key="containerDiv"
          variants={zoomOut}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`container relative inline-block `}
        >
          <button
            className="absolute top-3 text-4xl capitalize text-indigo-600 transition-colors duration-200 hover:text-indigo-900 hover:underline"
            onClick={() => setShowProjects(false)}
          >
            <IoIosCloseCircle />
          </button>
          <h2 className="mx-auto my-3 w-fit border-b border-indigo-600 border-opacity-30 text-3xl font-bold text-indigo-600 md:block">
            {title}
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {filteredProjects.map((project, index) => (
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 * index }}
                className="group"
                key={index}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectCategory;
