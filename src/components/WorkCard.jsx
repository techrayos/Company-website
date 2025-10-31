import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';

export default function WorkCard({ process, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  const { scrollY } = useScroll();

  // 🧠 Responsive state
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // 🎯 Scroll animations
  const imgY = useTransform(scrollY, [0, 500], [50, -50]);
  const smImgY = useTransform(scrollY, [0, 500], [50, -50]);

  const imageVariants = {
    initial: { opacity: 1, x: index % 2 === 0 ? -150 : 150 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  };

  const contentVariants = {
    initial: { opacity: 1, x: index % 2 === 0 ? 150 : -150 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
    },
  };

  return (
    <div
      ref={ref}
      className={`flex flex-col ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      } gap-6 sm:gap-8 items-center`}
    >
      {/* 🖼 Image */}
      <motion.div
        variants={imageVariants}
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        style={{ y: isMobile ? smImgY : imgY }}
        className="w-full md:w-1/2"
      >
        <img
          src={process.image_url}
          alt={process.title}
          className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow mt-8 md:mb-0"
        />
      </motion.div>

      {/* 📝 Content */}
      <motion.div
        variants={contentVariants}
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        style={{ y: isMobile ? smImgY : imgY }}
        className="w-full md:w-1/2 mb-20 md:mb-0"
      >
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-black dark:text-white font-bold text-sm">
            {index + 1}
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            {process.title}
          </h3>
        </div>
        <p className="text-gray-800 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
          {process.description}
        </p>
      </motion.div>
    </div>
  );
}
