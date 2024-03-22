"use client";

import { FunctionComponent, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const Header: FunctionComponent = () => {
  const [isMobileVisible, setIsMobileVisible] = useState(false);
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobileVisible(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setIsMobileVisible(
      typeof window !== "undefined" ? window.innerWidth >= 768 : false,
    );
  }, []);

  return (
    <header className="relative z-[999]">
      {isMobileVisible ? (
        <>
          <motion.div
            className="fixed left-1/2 top-0 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[34rem] sm:rounded-full"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
          />
          <Navbar />
        </>
      ) : (
        <>
          {!navBarHidden && (
            <motion.div
              className="fixed left-1/2 top-0 h-12 w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]"
              initial={{ y: -100, x: "-50%", opacity: 0 }}
              animate={{ y: 0, x: "-50%", opacity: 1 }}
            >
              <MobileNav
                initialAnimation={initialAnimation}
                userNotInteractedScroll={userNotInteractedScroll}
              />
            </motion.div>
          )}
        </>
      )}
    </header>
  );
};

export default Header;
