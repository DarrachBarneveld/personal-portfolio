"use client";

import { useSearchContext } from "@/context/SearchContext";
import clsx from "clsx";
import { FunctionComponent } from "react";

export const colorTagVariants = {
  react: ["bg-[#45cff2]", "text-black"],
  typescript: ["bg-[#3c76c6]", "text-white"],
  github: ["bg-[#000000]", "text-white"],
  "next.js": ["bg-[#313131]", "text-white"],
  tailwind: ["bg-[#3d92b1]", "text-white"],
  prisma: ["bg-[#123249]", "text-white"],
  mongodb: ["bg-[#4ca53f]", "text-white"],
  redux: ["bg-[#7648bc]", "text-white"],
  sql: ["bg-[#d47131]", "text-black"],
  framer: ["bg-[#7315f1]", "text-white"],
  javascript: ["bg-[#efd81d]", "text-black"],
  phaserjs: ["bg-[#8e6b53]", "text-white"],
  kaboomjs: ["bg-[#e42a01]", "text-white"],
  firebase: ["bg-[#f7c426]", "text-black"],
  tiled: ["bg-[#575dc2]", "text-white"],
  "socket.io": ["bg-[#010101]", "text-white"],
  express: ["bg-[#646e78]", "text-white"],
  "node.js": ["bg-[#87bf00]", "text-black"],
  html: ["bg-[#e35527]", "text-white"],
  css: ["bg-[#3b4add]", "text-white"],
  bootstrap: ["bg-[#8012f5]", "text-white"],
  django: ["bg-[#103c2d]", "text-white"],
  python: ["bg-[#2e6693]", "text-white"],
  "react native": ["bg-[#48a5d2]", "text-white"],
  expo: ["bg-[#02001f]", "text-white"],
  aws: ["bg-[#f0921c]", "text-black"],
  stripe: ["bg-[#6058f7]", "text-white"],
  ["spotify api"]: ["bg-[#22cf5d]", "text-white"],
  ["django rest"]: ["bg-[#a30000]", "text-white"],
  ["google api"]: ["bg-[#2b9b4b]", "text-white"],
  openai: ["bg-[#109e7b]", "text-white"],
};

interface TagsProps {
  tags: string[];
  xl?: boolean;
}

const Tags: FunctionComponent<TagsProps> = ({ tags, xl }) => {
  const { setFilterTags } = useSearchContext();
  return (
    <ul className="mt-4 flex flex-wrap gap-1 md:mt-auto">
      {tags.map((tag, index) => {
        const colorVariants =
          colorTagVariants[tag as keyof typeof colorTagVariants];

        return (
          <li key={index}>
            <button
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                setFilterTags((prev) => {
                  return prev.includes(tag)
                    ? prev.filter((t) => t !== tag)
                    : [...prev, tag];
                });
              }}
              className={clsx(
                `${colorVariants[0]} rounded-full px-2 py-1 ${
                  xl
                    ? "text-[0.8rem] lg:text-[.9rem] "
                    : "text-[0.6rem] lg:text-[0.7rem]"
                } uppercase tracking-wider lg:text-[0.7rem] ${
                  colorVariants[1]
                } transition-colors duration-200 hover:bg-gray-800 hover:text-white hover:ring-indigo-500 focus:bg-gray-900 focus:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 focus:ring-offset-gray-100`,
              )}
            >
              {tag} {xl && "x"}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Tags;
