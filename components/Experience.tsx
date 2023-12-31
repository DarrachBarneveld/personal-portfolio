"use client";

import React, { FunctionComponent } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import { useSectionInView } from "@/hooks/hooks";
import CustomTimeLineComponent from "./CustomTimeLineComponent";

const Experience: FunctionComponent = () => {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <CustomTimeLineComponent item={item} key={index} />
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
