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
        After graduating from <strong>UCD</strong> with <strong>Science</strong>{" "}
        degree and <em>7 years </em>immersed in the realms of{" "}
        <strong>digital marketing</strong> and <strong>sales</strong>, I took a
        decisive step to transition fully into the <strong>tech</strong>{" "}
        industry. The foundational knowledge of <strong>HTML</strong>,{" "}
        <strong>CSS</strong>, and <strong>JavaScript </strong>
        acquired in digital marketing served as a catalyst, propelling me into a
        more <em>profound</em> exploration of{" "}
        <strong>full-stack development.</strong>
      </p>
      <p className="mb-3">
        My primary tech stack includes{" "}
        <strong>React, Next.js, Node.js, and MongoDB/Firebase</strong> , but
        I&apos;ve increasingly gravitated towards Pythonic development,
        particularly utilizing{" "}
        <strong>Django and the Django Rest Framework </strong> for larger-scale
        and more
        <em>industry-secure</em> projects.
      </p>
      <p>
        My <em>blissful retreat</em> involves spending evenings immersed in{" "}
        <strong>coding</strong>
        personal projects while listening to ambient music—my ultimate happy
        place. 🎧
      </p>
    </motion.section>
  );
};

export default About;
