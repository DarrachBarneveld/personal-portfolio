"use client";

import React, { FunctionComponent } from "react";
import SectionHeading from "./ui/SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/hooks";
import { collabData, hackathonBadges } from "@/lib/data";
import { staggeredFadeUp } from "@/animations/variants";
import Image from "next/image";

const Collab: FunctionComponent = () => {
  const { ref } = useSectionInView("Collab");

  return (
    <motion.section
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="collab"
      ref={ref}
    >
      <SectionHeading>Open Source / Collabs</SectionHeading>
      <div className="mb-3">
        <p>
          In my recent exploration of <strong>collaborative work</strong>,
          I&apos;ve immersed myself in diverse projects, learning from seasoned
          developers, honing my Git version control skills, and delving into{" "}
          <strong>industry-level codebases</strong> to elevate my proficiency as
          a developer.
        </p>
        <ul className="flex list-none">
          {collabData.map((collab, index) => (
            <motion.li
              className="m-3 mx-auto h-24 w-36 overflow-hidden"
              variants={staggeredFadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <a key={index} href={collab.link}>
                <Image
                  className="h-full w-full overflow-hidden rounded-xl object-cover transition-all duration-300 hover:scale-95 focus:scale-95"
                  src={collab.imageUrl}
                  alt={`Image of ${collab.title}`}
                  quality={95}
                />
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
      <p className="">
        Participating in hackathons has been a fantastic journey, where
        I&apos;ve cultivated skills in delivering a
        <strong> minimal viable product</strong> within tight timeframes,
        collaborated with individuals of <em>diverse skills and backgrounds</em>
        , and honed the art of presenting technology solutions persuasively
        before a panel of judges.
      </p>
      <div className="mx-auto my-3 flex flex-wrap">
        {hackathonBadges.map((hack, index) => (
          <motion.a
            key={index}
            variants={staggeredFadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className="mx-auto"
            href={hack}
          >
            <img
              width={140}
              height={140}
              src={`${hack}/image`}
              className="transition-all duration-300 hover:scale-95 focus:scale-95"
            />
          </motion.a>
        ))}
        <Image
          src="https://holopin.me/darrachbarneveld"
          alt="Darrach Barneveld Holopin"
          className="mx-auto rounded-lg"
          width={500}
          height={300}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          quality={95}
        />
      </div>
    </motion.section>
  );
};

export default Collab;
