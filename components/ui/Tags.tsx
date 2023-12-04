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
  javascript: "bg-[#d5bd03]",
  phaserjs: "bg-[#8e6b53]",
  kaboomjs: "bg-[#e42a01]",
  firebase: "bg-[#ea7e0d]",
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
};

interface TagsProps {
  tags: string[];
}

const Tags: FunctionComponent<TagsProps> = ({ tags }) => {
  return (
    <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
      {tags.map((tag, index) => {
        // Ensure tag is a valid key
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