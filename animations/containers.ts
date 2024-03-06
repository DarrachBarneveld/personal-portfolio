export const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.05, delayChildren: 0.5 } },
};

export const opacityScaleChild = {
  initial: { opacity: 0, x: -10, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.5, type: "spring", bounce: 0.5 },
  },
};

export const cardFadeEnterExit = {
  initial: { scale: 0.85, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.85, opacity: 0, transition: { duration: 0.15 } },
  transition: {
    duration: 0.2,
    ease: "easeInOut",
  },
};
