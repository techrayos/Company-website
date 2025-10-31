import React, { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function UxCase() {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

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
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 md:py-28 lg:px-8 lg:py-32">
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
            <motion.h1
              variants={fadeUp}
              className="text-balance text-3xl font-semibold tracking-tight text-neutral-900 drop-shadow-sm dark:text-neutral-50 sm:text-4xl md:text-5xl lg:text-6xl"
            >
              <span className="bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-400 bg-clip-text text-transparent dark:from-white dark:via-neutral-200 dark:to-neutral-400">
                UI/UX Design
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-pretty text-sm leading-7 text-neutral-700 dark:text-neutral-300 sm:text-base md:text-lg mx-auto sm:mx-0"
            >
              🎨 Human-Centered Design <br />
              Every interaction is crafted to prioritize clarity, usability, and
              user delight.
              <br />
              <br />
              ⚡ Intuitive Interfaces
              <br />
              Clean, responsive layouts designed to enhance engagement and
              reduce friction.
              <br />
              <br />
              📱 Responsive & Adaptive
              <br />
              Designs that look and feel great across all devices and screen
              sizes.
              <br />
              <br />
              🧠 User Research & Strategy
              <br />
              Data-driven insights that shape designs aligned with real user
              needs.
              <br />
              <br />
              🚀 Interactive Prototyping
              <br />
              High-fidelity prototypes that bring ideas to life before
              development begins.
              <br />
              <br />
              🔁 Continuous Improvement
              <br />
              Regular testing and optimization to keep user experiences smooth
              and impactful.
            </motion.p>
          </motion.div>
        </motion.div>
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
