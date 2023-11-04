import { links, experiencesData } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type Experience = (typeof experiencesData)[number];
