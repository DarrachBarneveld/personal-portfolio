"use client";

import { FunctionComponent, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Header: FunctionComponent = () => {
  const [navBarHidden, setNavBarHidden] = useState(false);
  const scrollYRef = useRef(0);
  const userNotInteractedScroll = useRef(true);
  const initialAnimation = useRef(false);

  function handleScroll() {
    if (userNotInteractedScroll.current == false) return;
    if (window.scrollY > scrollYRef.current) {
      console.log("Scrolling down");
      setNavBarHidden(true);
    } else {
      setNavBarHidden(false);
    }
    scrollYRef.current = window.scrollY;
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="relative z-[999]">
      {!navBarHidden && (
        <>
          <motion.div
            className="fixed left-1/2 top-0 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[34rem] sm:rounded-full"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
          />
          <Navbar
            initialAnimation={initialAnimation}
            userNotInteractedScroll={userNotInteractedScroll}
          />
        </>
      )}
    </header>
  );
};

export default Header;
