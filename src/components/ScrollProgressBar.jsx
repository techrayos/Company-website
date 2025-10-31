import { motion, useScroll, useSpring } from "framer-motion";
import React from "react";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-gradient-to-r from-indigo-500 to-rose-500 z-50 origin-left"
      style={{ scaleX }}
    />
  );
}
