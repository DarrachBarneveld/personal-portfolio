import { FunctionComponent, useEffect, useState } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { Experience } from "@/lib/types";
import { useInView } from "react-intersection-observer";

type CustomTimeLineComponentProps = {
  item: Experience;
};

function componentStyling(item: string) {}

const CustomTimeLineComponent: FunctionComponent<
  CustomTimeLineComponentProps
> = ({ item }) => {
  const { ref, inView } = useInView({ threshold: 0.9 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) return;
    inView && setVisible(true);
  }, [inView]);

  return (
    <VerticalTimelineElement
      visible={visible}
      contentStyle={{
        background: "#f3f4f6",
        boxShadow: "none",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        textAlign: "left",
        padding: "1.3rem 2rem",
        position: "relative",
      }}
      contentArrowStyle={{
        borderRight: "0.4rem solid #9ca3af",
      }}
      date={item.date}
      icon={item.icon}
      iconStyle={{
        fontSize: "1.5rem",
      }}
    >
      <h3 className="font-semibold capitalize">{item.title}</h3>
      <p className="!mt-0 font-normal">{item.location}</p>
      <p className="!mt-1 !font-normal text-gray-700 ">{item.description}</p>
      <div className="absolute bottom-0 h-2 w-2" ref={ref}></div>
    </VerticalTimelineElement>
  );
};

export default CustomTimeLineComponent;
