import { FunctionComponent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { child, container } from "@/animations/nav";
import { links } from "@/lib/data";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <nav>
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
              className="flex w-full items-center justify-center px-3 py-3 transition hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300"
              href={link.hash}
            >
              {link.name}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default Navbar;
