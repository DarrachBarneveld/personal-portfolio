"use client";

import Image from "next/image";
import { FunctionComponent } from "react";

import { projectsData } from "@/lib/data";
import Link from "next/link";
import { backgroundTagVariants } from "@/lib/color";

type ProjectProps = (typeof projectsData)[number];

const Project: FunctionComponent<ProjectProps> = ({
  title,
  description,
  tags,
  imageUrl,
  id,
}) => {
  return (
    <Link href={`/project/${id}`}>
      <section className="relative max-w-[35rem] overflow-hidden rounded-lg border border-black/5 bg-white transition hover:cursor-pointer hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:h-[20rem] sm:pr-8 sm:group-even:pl-8">
        <div className="flex h-full max-w-[50%] flex-col p-7 sm:pr-2 sm:group-even:ml-[14rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => {
              // Ensure tag is a valid key
              const backgroundVariant =
                backgroundTagVariants[
                  tag as keyof typeof backgroundTagVariants
                ];

              return (
                <li
                  className={`${backgroundVariant} rounded-full px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white`}
                  key={index}
                >
                  {tag}
                </li>
              );
            })}
          </ul>
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

export default Project;
