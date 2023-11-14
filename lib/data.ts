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
import lepreTrackV2 from "@/public/images/lepretrackv2.png";
import coolcoders from "@/public/images/coolcoders.png";
import bmeditation from "@/public/images/bmeditaiton.png";

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
    title: "Media Manager",
    location: "Melbourne Australia",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
    icon: React.createElement(FaReact),
    date: "2017 - 2021",
  },
  {
    title: "Digital Media FreeLance",
    location: "Dublin, Ire",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Code Institute",
    location: "Dublin, Ire",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - Present",
  },
] as const;

export const projectsDataExcerpt = [
  {
    id: "1",
    title: "Neon Defence",
    excerpt:
      "Neon Defence, a hackathon gem, merges tower defense with a Tron-like aesthetic.",
    tags: ["javascript", "phaserjs", "firebase", "tiled", "css"],
    imageUrl: neonDefence,
  },
  {
    id: "2",
    title: "Retro Mashup Mayhem",
    excerpt:
      "Retro Mashup Mayhem, born from a nostalgic retro hackathon, pays homage to the golden era of 80s/90s video games.",
    tags: ["javascript", "kaboomjs", "tiled"],
    imageUrl: retroMashup,
  },
  {
    id: "3",
    title: "LepreTrack",
    excerpt:
      "LepreTrack is a platform empowering users to monitor and enhance their 'green score,' tracking eco-friendly habits and promoting sustainable living practices.",
    tags: ["javascript", "html", "css", "firebase", "bootstrap"],
    imageUrl: lepreTrack,
  },
  {
    id: "4",
    title: "Lord of the Rings Pokemon",
    excerpt:
      "A multiplayer card game merging Lord of the Rings and Pokémon, where players strategically duel in the iconic Middle-earth setting.",
    tags: ["react", "socket.io", "node.js", "express", "typescript"],
    imageUrl: lotrPokemon,
  },
  {
    id: "5",
    title: "Cool Coders",
    excerpt:
      "Cool Coders: A hub for tech enthusiasts to share insights and knowledge through engaging articles, fostering a collaborative learning community.",
    tags: ["python", "django", "bootstrap"],
    imageUrl: coolcoders,
  },
  {
    id: "6",
    title: "LepreTrack V2",
    excerpt:
      "LepreTrack v2 builds upon its predecessor, LepreTrack v1, but incorporates the latest front-end technologies for an enhanced and seamless user experience.",
    tags: ["react", "typescript", "bootstrap", "firebase"],
    imageUrl: lepreTrackV2,
  },
  {
    id: "7",
    title: "B-Meditation",
    excerpt:
      "Embrace mindfulness with BMeditation, featuring quotes from history's great teachers. Journal and meditate on these wisdom nuggets for a transformative experience.",
    tags: ["react native", "javascript", "expo"],
    imageUrl: bmeditation,
  },
];

export const projectsData = [
  {
    id: "1",
    title: "Neon Defence",
    excerpt:
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
    excerpt:
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
    excerpt:
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
    excerpt:
      "A multiplayer card game merging Lord of the Rings and Pokémon, where players strategically duel in the iconic Middle-earth setting.",
    tags: ["react", "socket.io", "node.js", "express", "typescript"],
    imageUrl: lotrPokemon,
    link: "https://lotr-pokemon.netlify.app",
    collaborators: [],
  },

  {
    id: "5",
    title: "Cool Coders",
    excerpt:
      "Cool Coders: A hub for tech enthusiasts to share insights and knowledge through engaging articles, fostering a collaborative learning community.",
    tags: ["python", "django", "bootstrap"],
    imageUrl: coolcoders,
    link: "https://coolcoders-b69260c4617a.herokuapp.com/",
    collaborators: [],
  },
  {
    id: "6",
    title: "LepreTrack V2",
    excerpt:
      "LepreTrack v2 builds upon its predecessor, LepreTrack v1, but incorporates the latest front-end technologies for an enhanced and seamless user experience.",
    tags: ["react", "typescript", "bootstrap", "firebase"],
    imageUrl: lepreTrackV2,
    link: "https://lepretrackv2.netlify.app/",
    collaborators: [],
  },
  {
    id: "7",
    title: "B-Meditation",
    excerpt:
      "Embrace mindfulness with BMeditation, featuring quotes from history's great teachers. Journal and meditate on these wisdom nuggets for a transformative experience.",
    tags: ["react native", "javascript", "expo"],
    imageUrl: bmeditation,
    link: "https://bmeditation-api-website.vercel.app/",
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
    projects: ["5", "6", "7"],
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
