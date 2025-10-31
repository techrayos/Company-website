import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const gradientMap = {
  "indigo-500": "from-indigo-500",
  "rose-500": "to-rose-500",
};

export default function ProductPageLayout({
  title,
  description,
  image,
  gradientFrom = "indigo-500",
  gradientTo = "rose-500",
  features = [],
  icons = [],
  ctaText = "Get Started",
}) {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 80]);
  const [isReady, setIsReady] = useState(false);
  const navigate = useNavigate();

  const [parallaxX, setParallaxX] = useState(0);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateTheme = () => {
      if (darkModeMediaQuery.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };
    updateTheme();
    darkModeMediaQuery.addEventListener("change", updateTheme);
    return () => darkModeMediaQuery.removeEventListener("change", updateTheme);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setIsReady(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  // 🌀 Parallax movement
  useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setParallaxX(x);
      setParallaxY(y);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const fromClass = gradientMap[gradientFrom] || "from-indigo-500";
  const toClass = gradientMap[gradientTo] || "to-rose-500";

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="relative min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col z-[2] mt-20"
    >
      {/* Loader Overlay */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isReady ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-950 pointer-events-none"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.8 }}
          className={`text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r ${fromClass} ${toClass}`}
        >
          Techrayos
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={`h-[3px] rounded-full bg-gradient-to-r ${fromClass} ${toClass}`}
        />
      </motion.div>

      {/* Back Button */}
      <motion.button
        onClick={() => navigate(-1)}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="mt-20 z-10 fixed left-3 top-5 lg:left-10 lg:top-12 text-lg bg-blue-400/90 backdrop-blur-sm dark:bg-white/40 hover:bg-blue-400/85 dark:hover:bg-white/50 hover:border dark:hover:border hover:border-white/75 dark:hover:border-white/75 dark:backdrop-blur-sm px-1 md:px-2 py-1 md:py-2 rounded-sm md:rounded-lg flex items-center gap-2 text-gray-800 dark:text-rose-700 hover:text-gray-950 dark:hover:text-rose-900 cursor-pointer"
      >
        <ArrowLeft className="h-5 w-5" /> Back
      </motion.button>

      {/* Hero Section */}
      <div className="relative w-full h-96 md:h-[550px] overflow-hidden rounded-b-[40px] shadow-xl z-[2]">
        <motion.img
          src={image}
          alt={title}
          style={{ y }}
          className="w-full h-full object-cover brightness-75"
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative max-w-3xl mx-auto backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl mt-10 md:mt-0"
          >
            <div className="absolute inset-0 -z-10 blur-3xl opacity-50 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-3xl scale-110" />

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="relative text-3xl md:text-5xl font-extrabold text-white mb-4"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-gray-200 text-base md:text-lg leading-relaxed"
            >
              {description}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-[2] max-w-7xl mx-auto px-6 py-14 flex flex-col gap-10">
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {features?.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800/60 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-lg transition border border-gray-200/10 dark:border-gray-700/20"
            >
              {icons[index] && (
                <span className="text-indigo-500 dark:text-rose-400 w-8 h-8">
                  {icons[index]}
                </span>
              )}
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-gray-100">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {feature.text}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className={`relative px-10 py-4 overflow-hidden bg-gradient-to-r ${fromClass} ${toClass} text-white rounded-full text-lg font-semibold shadow-xl transition-all duration-500`}
          >
            <Link to="/contact" className="relative z-10 cursor-pointer">
              {ctaText}
            </Link>
            <motion.div
              aria-hidden
              initial={{ x: "-120%" }}
              animate={{ x: "120%" }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
            />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
