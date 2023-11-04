import { FunctionComponent, useContext } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";
import { child, container } from "@/animations/nav";
import { links } from "@/lib/data";
import { ActiveSectionContext } from "@/context/ActiveSectionContext";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  const { activeSection, setActiveSection } = useContext(ActiveSectionContext);

  return (
    <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
      <motion.ul
        className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5"
        variants={container}
        initial="initial"
        animate="animate"
      >
        {links.map((link) => (
          <motion.li
            className="relative flex h-3/4 items-center justify-center"
            key={link.hash}
            variants={child}
          >
            <Link
              className={clsx(
                "flex w-full items-center justify-center px-3 py-3 transition hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300",
                {
                  "text-gray-950": activeSection === link.name,
                },
              )}
              href={link.hash}
              onClick={() => setActiveSection(link.name)}
            >
              {link.name}
              {link.name === activeSection && (
                <motion.span
                  className="absolute inset-0 -z-10 rounded-full bg-violet-100"
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                ></motion.span>
              )}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default Navbar;
