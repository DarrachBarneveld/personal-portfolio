"use client";

import Image from "next/image";
import { FunctionComponent } from "react";
import { hackathonProjectData } from "@/lib/data";

type ProjectProps = (typeof hackathonProjectData)[number];

const Project: FunctionComponent<ProjectProps> = ({
  title,
  description,
  tags,
  imageUrl,
}) => {
  return (
    <section className="relative max-w-[42rem] overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition hover:bg-gray-200 group-even:pl-8 sm:h-[20rem] sm:pr-8">
      <div className="flex h-full flex-col px-5 pb-7 pt-4 group-even:ml-[18rem] sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="mt-auto flex flex-wrap gap-2">
          {tags.map((tag, index) => {
            const backgroundVariants = {
              react: "bg-[#45cff2]",
              typescript: "bg-[#3c76c6]",
              github: "bg-[#000000]",
              "next.js": "bg-[#313131]",
              tailwind: "bg-[#3d92b1]",
              prisma: "bg-[#123249]",
              mongodb: "bg-[#4ca53f]",
              redux: "bg-[#7648bc]",
              sql: "bg-[#d47131]",
              framer: "bg-[#7315f1]",
            };

            return (
              <li
                className={`${backgroundVariants[tag]} rounded-full px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white`}
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
        className="absolute -right-40 top-8 w-[28.25rem] rounded-t-lg shadow-2xl transition group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04]
      group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"
      />
    </section>
  );
};

export default Project;
