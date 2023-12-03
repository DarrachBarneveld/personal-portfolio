"use client";

import { FunctionComponent, useState } from "react";
import SectionHeading from "./ui/SectionHeading";
import { skillsData, stackData } from "@/lib/data";
import { useSectionInView } from "@/hooks/hooks";
import { AnimatePresence, motion } from "framer-motion";
import { staggeredFadeUp } from "@/animations/variants";
import { LuArrowBigLeft, LuArrowBigRight } from "react-icons/lu";

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
            initial={{ x: "-100vw", scale: 0.9, opacity: 0 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ bounce: 0.1 }}
            exit={{
              x: "-100vw",
              scale: 0.7,
              opacity: 0,
              transition: { duration: 0.15 },
            }}
          >
            <div className="relative">
              <SectionHeading>My Skills</SectionHeading>
              <button
                className="absolute right-0 top-0 inline-flex transform rounded-full bg-green-300 p-2 text-2xl capitalize text-green-900 transition-colors duration-200 hover:text-white"
                onClick={() => setStackView(true)}
              >
                <span className="text-base">Stacks</span>
                <LuArrowBigRight />
              </button>
            </div>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
              {skillsData.map((skill, index) => (
                <motion.li
                  className="rounded-xl border border-black/20 bg-white px-5 py-3 dark:bg-white/10 dark:text-white/80"
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
            initial={{ x: "100vw", scale: 0.9, opacity: 0 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ bounce: 0.1 }}
            exit={{
              x: "100vw",
              scale: 0.7,
              opacity: 0,
              transition: { duration: 0.15 },
            }}
          >
            <div className="relative ">
              <SectionHeading>My Preferred Stacks</SectionHeading>
              <button
                className="absolute left-0 top-0 inline-flex transform rounded-full bg-blue-300 p-2 text-2xl capitalize text-blue-900 transition-colors duration-200 hover:text-white"
                onClick={() => setStackView(false)}
              >
                <span className="text-base">Skills</span>
                <LuArrowBigLeft />
              </button>
            </div>
            <ul className="text-l2 [&>*:nth-child(2)]:border-red-green flex flex-wrap gap-4 [&>*:nth-child(1)>p]:bg-blue-700 [&>*:nth-child(1)]:border-blue-400 [&>*:nth-child(1)]:bg-blue-100 [&>*:nth-child(2)>p]:bg-green-700 [&>*:nth-child(2)]:border-green-400 [&>*:nth-child(2)]:bg-green-100 [&>*:nth-child(3)>p]:bg-red-700 [&>*:nth-child(3)]:border-red-400  [&>*:nth-child(3)]:bg-red-100">
              {stackData.map((stack, index) => {
                return (
                  <div
                    key={index}
                    className="mx-auto min-w-[16rem] rounded-lg border-2"
                  >
                    <p className="m-3 rounded-xl border border-black/20 px-5 py-3 font-extrabold text-white">
                      {stack.title.toUpperCase()}
                    </p>
                    {stack.tech.map((skill, index) => (
                      <motion.li
                        className="m-3 rounded-xl border border-black/20 bg-white px-5 py-3 dark:bg-white/10 dark:text-white/80"
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
                  </div>
                );
              })}
            </ul>
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
};

export default Skills;
