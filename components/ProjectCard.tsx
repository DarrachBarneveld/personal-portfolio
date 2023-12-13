"use client";

import Image from "next/image";
import { FunctionComponent } from "react";

import { projectsData } from "@/lib/data";
import Link from "next/link";
import Tags from "./ui/Tags";
import { CgWebsite } from "react-icons/cg";

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
    <Link href={`/project/${id}`}>
      <section className="relative h-[22rem] max-w-[35rem] flex-1 overflow-hidden rounded-lg border border-black/20 bg-white transition hover:cursor-pointer hover:bg-gray-200">
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="h-[8rem] object-cover object-top md:hidden"
        />
        <div className="flex h-full flex-col p-5 md:max-w-[50%] md:pl-10 md:pr-2 md:group-even:ml-[16rem]">
          <h3 className="text-lg font-semibold md:text-2xl">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-700 md:text-base">
            {excerpt}
          </p>
          <Tags tags={tags} />
          <div className="mt-2 flex gap-1">
            <a
              target="_blank"
              className="my-2 flex items-center justify-center gap-2  rounded bg-gray-900 px-2 py-1 font-semibold text-gray-100 hover:bg-green-600 focus:bg-green-600"
              href={link}
            >
              <CgWebsite /> Live Demo
            </a>
          </div>
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
                  group-even:group-hover:rotate-2 md:block"
        />
      </section>
    </Link>
  );
};

export default ProjectCard;

{
  /* <Link
className="rounded bg-gray-900 px-5 py- font-semibold text-gray-100"
target="_blank"
href={`/project/${id}`}
>
Read More
</Link> */
}
