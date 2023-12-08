"use client";

import { FunctionComponent, useState } from "react";
import SectionHeading from "./ui/SectionHeading";
import { skillsData, stackData } from "@/lib/data";
import { useSectionInView } from "@/hooks/hooks";
import { AnimatePresence, motion } from "framer-motion";
import { staggeredFadeUp, zoomOut } from "@/animations/variants";
import { GiStack } from "react-icons/gi";
import { FaCode } from "react-icons/fa6";

import StackCard from "./ui/StackCard";

const Skills: FunctionComponent = () => {
  const { ref } = useSectionInView("Skills");
  const [stackView, setStackView] = useState(false);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      {!stackView ? (
        <AnimatePresence mode="wait">
          <motion.div
            key="skillDiv"
            variants={zoomOut}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="relative">
              <SectionHeading>My Skills</SectionHeading>
              <button
                className="absolute right-0 top-0 inline-flex transform rounded-full bg-green-300 p-2 text-2xl capitalize text-green-900 transition-colors duration-200 hover:text-white"
                onClick={() => setStackView(true)}
              >
                <span className="hidden text-base md:block">Stacks</span>
                <GiStack />
              </button>
            </div>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
              {skillsData.map((skill, index) => (
                <motion.li
                  className="rounded-xl border border-black/20 bg-white px-5 py-3"
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
          </motion.div>
        </AnimatePresence>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            className="w-100"
            key="stackDiv"
            variants={zoomOut}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="relative ">
              <SectionHeading>My Stacks</SectionHeading>
              <button
                className="absolute right-0 top-0 inline-flex transform rounded-full bg-blue-300 p-2 text-2xl capitalize text-blue-900 transition-colors duration-200 hover:text-white"
                onClick={() => setStackView(false)}
              >
                <span className="hidden text-base lg:block">Skills</span>
                <FaCode />
              </button>
            </div>
            <ul className="container grid grid-cols-2 gap-1 text-xl md:grid-cols-4 [&>*:nth-child(1)>header]:bg-blue-300 [&>*:nth-child(1)]:border-blue-400 [&>*:nth-child(2)>header>h2]:text-slate-50 [&>*:nth-child(2)>header]:bg-slate-800 [&>*:nth-child(2)]:border-slate-900 [&>*:nth-child(3)>header]:bg-green-300 [&>*:nth-child(3)]:border-green-400 [&>*:nth-child(4)>header]:bg-red-300 [&>*:nth-child(4)]:border-red-400">
              {stackData.map((stack, index) => (
                <StackCard {...stack} key={index} />
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
};

export default Skills;
