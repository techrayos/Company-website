import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ServiceSection({ title, content, buttonText }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-28 px-6 md:px-20 transition-colors duration-500 
      bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
      dark:from-gray-900 dark:via-gray-950 dark:to-black
      animate-gradient"
    >
      {/* Moving Gradient Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
        dark:from-gray-900 dark:via-gray-950 dark:to-black animate-gradient"
      ></motion.div>

      {/* Radial Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent)] pointer-events-none"></div>

      {/* Content Card */}
      <div className="relative max-w-5xl mx-auto rounded-3xl backdrop-blur-xl bg-white/10 dark:bg-black/20 shadow-2xl border border-white/10 px-6 md:px-14 py-16 text-center text-white dark:text-gray-100">
        
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-6 leading-snug"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.3 }}
          className="text-lg leading-relaxed md:text-xl text-gray-100/90 dark:text-gray-300 text-justify space-y-4"
        >
          {content}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="mt-10 px-10 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-xl 
            hover:shadow-blue-500/50 hover:bg-blue-600 hover:text-white transition-all duration-300
            dark:bg-gray-800 dark:text-white dark:hover:bg-blue-500 dark:hover:text-white cursor-pointer"
        >
          {buttonText}
        </motion.button>
      </div>
    </section>
  );
}
