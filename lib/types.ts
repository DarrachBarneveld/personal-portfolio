import { links, experiencesData, projectsData } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type Experience = (typeof experiencesData)[number];

export type Project = (typeof projectsData)[number];
