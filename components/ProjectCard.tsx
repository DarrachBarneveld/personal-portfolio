"use client";

import Image from "next/image";
import { FunctionComponent } from "react";

import { projectsDataExcerpt } from "@/lib/data";
import Link from "next/link";
import Tags from "./ui/Tags";

type ProjectProps = (typeof projectsDataExcerpt)[number];

const ProjectCard: FunctionComponent<ProjectProps> = ({
  title,
  excerpt,
  tags,
  imageUrl,
  id,
}) => {
  return (
    <Link href={`/project/${id}`}>
      <section className="relative max-w-[35rem] overflow-hidden rounded-lg border border-black/20 bg-white transition hover:cursor-pointer hover:bg-gray-200  sm:h-[20rem]">
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="h-[8rem] object-cover object-top md:hidden"
        />
        <div className="flex h-full flex-col p-5 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:group-even:ml-[16rem]">
          <h3 className="text-lg font-semibold md:text-2xl">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-700 md:text-base">
            {excerpt}
          </p>
          <Tags tags={tags} />
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute -right-40 top-8 hidden w-[25rem] rounded-t-lg shadow-2xl transition
                  group-even:-left-40 
                  group-even:right-[initial]
                  group-hover:-translate-x-3
                  group-hover:translate-y-3
                  group-hover:-rotate-2
                  group-hover:scale-[1.04]
                  group-even:group-hover:translate-x-3
                  group-even:group-hover:translate-y-3
                  group-even:group-hover:rotate-2 sm:block"
        />
      </section>
    </Link>
  );
};

export default ProjectCard;
