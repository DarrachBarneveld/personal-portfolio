import React from "react";
import { CgTrophy, CgWorkAlt } from "react-icons/cg";
import { FaGamepad, FaReact } from "react-icons/fa";
import { LuGraduationCap, LuLaptop } from "react-icons/lu";
import showcase from "@/public/images/showcase.png";
import hackathon from "@/public/images/hackathon.jpg";
import gameDev from "@/public/images/gamedev.webp";
import neonDefence from "@/public/images/neondefence.png";
import retroMashup from "@/public/images/retromashup.png";
import lotrPokemon from "@/public/images/lotr-pokemon.png";
import lepreTrack from "@/public/images/lepretrack.png";
import coolcoders from "@/public/images/coolcoders.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    id: "1",
    title: "Neon Defence",
    description:
      "Neon Defence, a hackathon gem, merges tower defense with a Tron-like aesthetic.",
    tags: ["javascript", "phaserjs", "firebase", "tiled", "css"],
    imageUrl: neonDefence,
    link: "https://neon-defence.netlify.app/",
    collaborators: [
      { name: "Tanguy", github: "https://github.com/tlalexandre" },
      { name: "Devan", github: "https://github.com/devancadman" },
    ],
  },
  {
    id: "2",
    title: "Retro Mashup Mayhem",
    description:
      "Retro Mashup Mayhem, born from a nostalgic retro hackathon, pays homage to the golden era of 80s/90s video games.",
    tags: ["javascript", "kaboomjs", "tiled"],
    imageUrl: retroMashup,
    link: "https://retro-mashup-mayhem.netlify.app/",
    collaborators: [
      { name: "Dan", github: "https://github.com/DanMorriss" },
      { name: "Sandra", github: "https://github.com/SandraBergstrom" },
      { name: "Debbie", github: "https://github.com/DebbieBergstrom" },
      { name: "Shida", github: "https://github.com/Shida18719" },
      { name: "Yash", github: "https://github.com/ysgurjar" },
    ],
  },
  {
    id: "3",
    title: "LepreTrack",
    description:
      "LepreTrack is a platform empowering users to monitor and enhance their 'green score,' tracking eco-friendly habits and promoting sustainable living practices.",
    tags: ["javascript", "html", "css", "firebase", "bootstrap"],
    imageUrl: lepreTrack,
    link: "https://lepretrack.netlify.app/",
    collaborators: [
      { name: "Shane", github: "https://github.com/Shane-Donlon" },
      { name: "Adam", github: "https://github.com/adammkeane" },
      { name: "Mark", github: "https://github.com/Markpm-code" },
      { name: "Amanda", github: "https://github.com/apita1423" },
      { name: "Aurelien", github: "https://github.com/AMJL-16" },
    ],
  },
  {
    id: "4",
    title: "Lord of the Rings Pokemon",
    description:
      "A multiplayer card game merging Lord of the Rings and Pokémon, where players strategically duel in the iconic Middle-earth setting.",
    tags: ["react", "socket.io", "node.js", "express", "typescript"],
    imageUrl: lotrPokemon,
    link: "https://lotr-pokemon.netlify.app",
    collaborators: [],
  },
  {
    id: "5",
    title: "Cool Coders",
    description:
      "Cool Coders: A hub for tech enthusiasts to share insights and knowledge through engaging articles, fostering a collaborative learning community.",
    tags: ["python", "django", "bootstrap"],
    imageUrl: coolcoders,
    link: "https://coolcoders-b69260c4617a.herokuapp.com/",
    collaborators: [],
  },
];

export const projectCategoriesData = [
  {
    id: 1,
    title: "Showcase",
    description:
      "My favorite projects over the years! These highlight my proficiency in various languages and frameworks across front/backend development, highlighting my skills in crafting comprehensive full-stack applications.",
    imageUrl: showcase,
    icon: React.createElement(CgTrophy),
    projects: ["5"],
  },
  {
    id: 2,
    title: "Hackathons",
    description:
      "Im addicted to hackathons! The ability to gain hands-on experience in teamwork, meeting challenging deadlines, and mastering the intricacies of Git version control—all while having a blast an making friends!",
    imageUrl: hackathon,
    icon: React.createElement(LuLaptop),
    projects: ["1", "2", "3"],
  },
  {
    id: 3,
    title: "Game Dev",
    description:
      "My love for games sparked a journey into game development which greatly enhanced my skills, knowledge, and passion for programming as I ventured into creating my own gaming experiences.",
    imageUrl: gameDev,
    icon: React.createElement(FaGamepad),
    projects: ["1", "2", "4"],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
