"use client";

import React, { FunctionComponent } from "react";
import SectionHeading from "./ui/SectionHeading";
import { motion } from "framer-motion";

const About: FunctionComponent = () => {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <strong>UCD Science</strong> graduate
        <br />
        Seasoned <strong>Digital marketing</strong> and <strong>sales </strong>
        professional with over 7 years of experience. <br />
        Specialised in landing page UI/UX design, A/B testing and statistical
        analysis.
        <br />
        <strong>JavaScript</strong> efficiendo
      </p>
      <p className="mb-3">
        My primary tech stack includes{" "}
        <strong>React, Next.js, Node.js, and MongoDB/Firebase</strong> , but
        gravitating towards Pythonic development utilizing{" "}
        <strong>Django and the Django Rest Framework </strong> for larger-scale
        and more <em>industry-secure</em> projects.
      </p>
      <p>
        <em>Blissful</em> <strong>coding </strong> to ambient music🎧
      </p>
    </motion.section>
  );
};

export default About;
