import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "@/lib/types";
import { ActiveSectionContext } from "@/context/ActiveSectionContext";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection } = useContext(ActiveSectionContext);

  useEffect(() => {}, [inView, setActiveSection, sectionName]);

  return {
    ref,
  };
}
