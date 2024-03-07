"use client";

import Image from "next/image";
import { FunctionComponent } from "react";

import { projectsData } from "@/lib/data";
import Link from "next/link";
import Tags from "./ui/Tags";
import { CgArrowRight } from "react-icons/cg";

type ProjectProps = (typeof projectsData)[number];

const ProjectCard: FunctionComponent<ProjectProps> = ({
  title,
  excerpt,
  tags,
  imageUrl,
  id,
  link,
}) => {
  return (
    <>
      <Link
        href={`/project/${id}`}
        className="group/more absolute -top-5 right-2 z-20 mt-2 flex w-fit items-center gap-2 rounded-full bg-gray-900 px-4 py-1 text-white outline-none transition hover:bg-gray-700"
      >
        <span className="text-xs md:text-sm lg:text-base">More Info</span>
        <CgArrowRight className="opacity-70 transition group-hover/more:translate-x-1" />
      </Link>
      <a
        href={link}
        className="bg group outline-none"
        target="_blank"
        rel="noopener noreferrer"
      >
        <article className="relative h-full max-w-[35rem] flex-1 overflow-hidden rounded-lg border-2 border-black/20 bg-white transition hover:cursor-pointer hover:border-indigo-500 hover:bg-gray-200 group-focus-within:ring-indigo-500 group-focus:bg-gray-200 group-focus:outline-none group-focus:ring-2 group-focus:ring-indigo-500">
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="h-[8rem] object-cover object-top md:hidden"
          />
          <div className="flex h-full flex-col p-5 md:max-w-[50%] md:pl-5 md:pr-2 md:group-even:ml-[16rem]">
            <h3 className="text-lg font-semibold text-indigo-950 md:text-2xl">
              {title}
            </h3>
            <p className="mb-3 mt-2 text-sm leading-relaxed text-gray-700 md:text-base">
              {excerpt}
            </p>
            <Tags tags={tags} className="border-b pb-1" />
          </div>
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute -right-28 top-8 hidden  aspect-square w-[22rem] rounded-t-lg object-cover shadow-2xl transition
                  group-even:-left-28 
                  group-even:right-[initial]
                  group-even:group-focus-within:translate-x-3
                  group-even:group-focus-within:translate-y-3
                  group-even:group-focus-within:rotate-2
                  group-hover:-translate-x-3
                  group-hover:translate-y-3
                  group-hover:-rotate-2
                  group-hover:scale-[1.04]
                  group-even:group-hover:translate-x-3
                  group-even:group-hover:translate-y-3
                  group-even:group-hover:rotate-2
                  group-focus:-translate-x-3
                  group-focus:translate-y-3
                  group-focus:-rotate-2
                  group-focus:scale-[1.04]
                  md:block"
          />
        </article>
      </a>
    </>
  );
};

export default ProjectCard;
