"use client";

import Image from "next/image";
import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import { CgArrowRight } from "react-icons/cg";
import { LuDownload } from "react-icons/lu";
import { SiUpwork } from "react-icons/si";
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
        building <em>web &#38; mobile apps</em>. My focus is Javascript with{" "}
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
          Contact me here
          <CgArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </a>

        <a
          className="borderBlack group flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105"
          href="/CV.pdf"
          download
        >
          Download CV
          <LuDownload className="opacity-60 transition group-hover:translate-y-1" />
        </a>
        <div className="flex items-center justify-center gap-2 px-4 text-lg font-medium">
          <a
            className="flex cursor-pointer items-center gap-2 rounded-full border border-black/30 bg-white p-4 text-[1.35rem] text-gray-700 transition hover:scale-[1.10] hover:border-black/50 hover:bg-[#0174b0] hover:text-white focus:scale-[1.10] focus:border-black/50 focus:bg-[#0174b0] active:scale-105"
            href="https://www.linkedin.com/in/darrach-barneveld-2b493511b/"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>

          <a
            className="flex cursor-pointer items-center gap-2 rounded-full border border-black/30 bg-white p-4 text-[1.35rem] text-gray-700 transition hover:scale-[1.10] hover:border-black/50 hover:bg-[#24292E] hover:text-white focus:scale-[1.10] focus:border-black/50 focus:bg-[#24292E] active:scale-105"
            href="https://github.com/DarrachBarneveld"
            target="_blank"
          >
            <FaGithubSquare />
          </a>

          <a
            className="flex cursor-pointer items-center gap-2 rounded-full border border-black/30 bg-white p-4 text-[1.35rem] text-gray-700 transition hover:scale-[1.10] hover:border-black/50 hover:bg-[#13a807] hover:text-white focus:scale-[1.10] focus:border-black/50 focus:bg-[#13a807] active:scale-105"
            href="https://www.upwork.com/freelancers/~018620769111853cfe"
            target="_blank"
          >
            <SiUpwork />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
