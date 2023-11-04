"use client";

import { FunctionComponent } from "react";
import SectionHeading from "./ui/SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/hooks/hooks";
import { motion } from "framer-motion";
import { staggeredFadeUp } from "@/animations/variants";

const Skills: FunctionComponent = () => {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="borderBlack rounded-xl bg-white px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={staggeredFadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
