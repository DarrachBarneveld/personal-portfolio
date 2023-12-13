"use client";

import { FunctionComponent } from "react";

export const backgroundTagVariants = {
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
  javascript: "bg-[#efd81d]",
  phaserjs: "bg-[#8e6b53]",
  kaboomjs: "bg-[#e42a01]",
  firebase: "bg-[#f7c426]",
  tiled: "bg-[#575dc2]",
  "socket.io": "bg-[#010101]",
  express: "bg-[#646e78]",
  "node.js": "bg-[#87bf00]",
  html: "bg-[#e35527]",
  css: "bg-[#3b4add]",
  bootstrap: "bg-[#8012f5]",
  django: "bg-[#103c2d]",
  python: "bg-[#2e6693]",
  "react native": "bg-[#48a5d2]",
  expo: "bg-[#02001f]",
  aws: "bg-[#f0921c]",
  stripe: "bg-[#6058f7]",
  ["spotify api"]: "bg-[#22cf5d]",
  ["django rest"]: "bg-[#a30000]",
};

interface TagsProps {
  tags: string[];
}

const Tags: FunctionComponent<TagsProps> = ({ tags }) => {
  return (
    <ul className="mt-4 flex flex-wrap gap-2 md:mt-auto">
      {tags.map((tag, index) => {
        const backgroundVariant =
          backgroundTagVariants[tag as keyof typeof backgroundTagVariants];

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
  );
};

export default Tags;
