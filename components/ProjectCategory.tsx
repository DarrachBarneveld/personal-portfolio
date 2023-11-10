"use client";

import Image from "next/image";
import { FunctionComponent, useState } from "react";
import ScrollViewWrapper from "./ui/ScrollViewWrapper";
import { projectCategoriesData } from "@/lib/data";
import { motion } from "framer-motion";
import Project from "./Project";
import { LuArrowBigLeft } from "react-icons/lu";

type ProjectCategoryProps = (typeof projectCategoriesData)[number];

const ProjectCategory: FunctionComponent<ProjectCategoryProps> = ({
  title,
  description,
  imageUrl,
  icon,
  projects,
}) => {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <>
      {!showProjects ? (
        <ScrollViewWrapper>
          <div className="max-w-[42rem] rounded-lg bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg">
            <div className="bg-red z-10 flex overflow-hidden lg:w-1/2 lg:scale-110 lg:rounded-lg">
              <Image
                src={imageUrl}
                alt="Project I worked on"
                quality={95}
                className="w-100 h-100 object-cover"
              />
            </div>
            <div className="relative rounded-t-none border px-6 py-12 lg:w-1/2 lg:max-w-5xl lg:rounded-lg lg:px-12">
              <div className="absolute -top-1  left-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-red-600 shadow-lg shadow-red-800/40">
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
        <div className="text-center">
          <div className="relative flex items-center justify-center">
            <button onClick={() => setShowProjects(false)}>
              <LuArrowBigLeft />
            </button>
            <h2 className="my-3 text-3xl font-bold text-indigo-600">{title}</h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {projects.map((project, index) => (
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 * index }}
                className="group mb-3 last:mb-0 sm:mb-8"
                key={index}
              >
                <Project {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCategory;
