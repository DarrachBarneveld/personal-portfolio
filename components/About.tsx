"use client";

import React, { FunctionComponent } from "react";
import SectionHeading from "./ui/SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/hooks";

const About: FunctionComponent = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in <strong>Science</strong>, I decided to
        travel the world and found myself working in digital marketing for
        years. However during the pandameic I discovered a passion for
        programming and in late 2022 decided to take things more serious.{" "}
      </p>
      <p className="mb-3">
        I enrolled in a coding bootcamp and learned{" "}
        <strong>full-stack web development</strong>.{" "}
        <em>My favourite part of programming</em> is the problem-solving aspect.
        I <span className="underline">love</span> the feeling of finally
        figuring out a solution to a problem. My core stack is{" "}
        <strong>React, Next.js, Node.js, and MongoDB</strong> though I also love{" "}
        <strong>Django and Django rest framework</strong>. I am always looking
        to for new projects to build to enhance my skills. I am currently
        looking for a <strong>full-time position</strong> as a software
        developer.
      </p>
      <p>
        <em>When I&apos;m not coding</em>, I enjoy playing chess, watching
        movies, going for long walks in nature. I also enjoy learning about{" "}
        <strong>history and philosophy</strong>. Sometimes I believe myself to
        be musically challanged but with the right{" "}
        <strong>minimal techno</strong> I can code for days 🎧
      </p>
    </motion.section>
  );
};

export default About;
