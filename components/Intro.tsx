"use client";

import Image from "next/image";
import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import { CgArrowRight } from "react-icons/cg";
import { LuDownload } from "react-icons/lu";
import { useSectionInView } from "@/hooks/hooks";

const Intro: FunctionComponent = () => {
  const waveAnimation = {
    initial: { rotate: 0 },
    animate: { rotate: [0, 10, 0, -10, 0] },
    transition: {
      duration: 1,
      repeat: 3,
    },
  };

  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/images/profile.jpg"
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <strong>Hey I am Darrach. </strong> I&apos;m a{" "}
        <strong>full-stack developer</strong> with{" "}
        <strong className="font-bold">2 years</strong> of experience. I enjoy
        building <em>sites &#38; apps</em>. My focus is{" "}
        <u className="underline">React (Next.js)</u>.
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          href="mailto:darrachb1991@gmail.com"
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
        >
          Contact me here{" "}
          <CgArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </a>

        <a
          className="borderBlack group flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <LuDownload className="opacity-60 transition group-hover:translate-y-1" />
        </a>

        <a
          className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 "
          href="https://www.linkedin.com/in/darrach-barneveld-2b493511b/"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>

        <a
          className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-[1.35rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105"
          href="https://github.com/DarrachBarneveld"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
