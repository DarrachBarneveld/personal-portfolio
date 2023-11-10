import { motion, useScroll, useTransform } from "framer-motion";
import { FunctionComponent, ReactNode, useRef } from "react";

interface ScrollViewWrapperProps {
  children: ReactNode;
}

const ScrollViewWrapper: FunctionComponent<ScrollViewWrapperProps> = ({
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgess, opacity: opacityProgess }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      {children}
    </motion.div>
  );
};

export default ScrollViewWrapper;
