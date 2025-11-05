import React, { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function EcommerceSolution() {
  const shouldReduceMotion = useReducedMotion();
  const navigate = useNavigate();

  // 🌓 Auto detect system theme and set dark/light mode
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
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

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stagger = {
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  return (
    <section className="relative isolate overflow-hidden w-full max-w-full">
      {/* Background layer */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -inset-[20%] opacity-80 blur-3xl [mask-image:radial-gradient(60%_60%_at_50%_40%,#000_20%,transparent_70%)]">
          <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_20%_10%,rgba(99,102,241,.25),transparent_50%),radial-gradient(80%_80%_at_80%_20%,rgba(236,72,153,.25),transparent_55%),radial-gradient(80%_80%_at_50%_80%,rgba(20,184,166,.2),transparent_55%)]" />
        </div>
        <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 dark:to-white/5" />
      </div>

      {/* Content container */}
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 md:py-28 lg:px-8 lg:py-32">
        {/* Back Button */}
        <motion.button
          onClick={() => navigate(-1)}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 mt-6 flex items-center gap-2 text-sky-600 dark:text-white hover:text-sky-800 dark:hover:text-sky-400"
        >
          <ArrowLeft className="h-5 w-5" /> Back
        </motion.button>
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
          whileInView={
            shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }
          }
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/40 p-6 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5 sm:p-10 md:p-12"
        >
          {/* Premium Shine effect */}
          <motion.div
            aria-hidden
            initial={{ x: "-120%" }}
            animate={shouldReduceMotion ? undefined : { x: "120%" }}
            transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
            className="pointer-events-none absolute -inset-y-8 -left-1/3 right-1/3 rotate-12 
                       bg-gradient-to-r from-transparent 
                       via-[#f5e6c8aa] dark:via-[#f5e6c855]
                       to-transparent 
                       backdrop-blur-[2px]"
          />

          {/* Sparkles */}
          <div className="pointer-events-none absolute inset-0">
            <FloatingSparkle className="left-4 top-4" delay={0} />
            <FloatingSparkle className="right-8 top-8" delay={0.8} />
            <FloatingSparkle className="left-1/3 bottom-8" delay={1.4} />
          </div>

          {/* Text content */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={stagger}
            className="relative z-10 text-center sm:text-left"
          >
            <motion.div
              variants={fadeUp}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium tracking-wide text-neutral-700 backdrop-blur-md dark:border-white/10 dark:bg-white/10 dark:text-neutral-200"
            >
              <Sparkles className="h-3.5 w-3.5" />
              E-commerce solutions
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-balance text-3xl font-semibold tracking-tight text-neutral-900 drop-shadow-sm dark:text-neutral-50 sm:text-4xl md:text-5xl lg:text-6xl"
            >
              <span className="bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-400 bg-clip-text text-transparent dark:from-white dark:via-neutral-200 dark:to-neutral-400">
                Transforming Online Stores into Powerful Experiences
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-pretty text-sm leading-7 text-neutral-700 dark:text-neutral-300 sm:text-base md:text-lg mx-auto sm:mx-0"
            >
              Build fast, secure, and conversion-driven e-commerce platforms
              that scale with your business.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap justify-center sm:justify-start gap-3"
            >
              <Link to="/contact" className="group relative overflow-hidden rounded-2xl bg-black px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] dark:bg-white dark:text-black">
                <span className="relative z-10 flex items-center">
                  Start Your Brand{" "}
                  <ArrowRight className="ml-2 inline h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 scale-0 bg-gradient-to-r from-white/30 to-transparent opacity-30 transition-all duration-500 group-hover:scale-150" />
              </Link>
              <Link
                to="/ecommerce-case-studies"
                className="inline-flex items-center rounded-2xl border border-neutral-300/70 px-5 py-4 text-sm font-medium text-neutral-700 backdrop-blur-md transition hover:border-neutral-400 hover:bg-white/70 dark:border-white/10 dark:text-neutral-200 dark:hover:bg-white/10"
              >
                View Case Studies
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Sub-footer features */}
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {[
            "🛒 Custom Store Development",
            "🚀 High-Performance Checkout",
            "📊 Real-Time Analytics",
            "📱 Mobile-First Experience",
          ].map((label) => (
            <motion.li
              key={label}
              variants={fadeUp}
              className="rounded-2xl border border-white/15 bg-white/40 px-4 py-3 text-center text-sm font-medium text-neutral-800 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-neutral-200"
            >
              {label}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

function FloatingSparkle({ className = "", delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.span
      aria-hidden
      initial={{ opacity: 0, scale: 0.6 }}
      animate={
        shouldReduceMotion
          ? { opacity: 0.35, scale: 1 }
          : {
              opacity: [0.1, 0.55, 0.1],
              scale: [0.9, 1.05, 0.9],
              y: [0, -6, 0],
            }
      }
      transition={{ duration: 3.2, delay, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute h-2 w-2 rounded-full bg-white shadow-[0_0_20px_2px_rgba(255,255,255,0.35)] ${className}`}
    />
  );
}
