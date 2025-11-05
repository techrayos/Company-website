import React from "react";
import { motion } from "framer-motion";
import { FiHome, FiArrowLeft, FiSearch } from "react-icons/fi";


export default function NotFound404() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const item = {
    hidden: { y: 16, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 20 } }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 text-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 px-6">
      {/* Soft animated background blob */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(99,102,241,0.35), transparent)"
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-10 bottom-10 h-64 w-64 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(34,197,94,0.35), transparent)"
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.main
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-3xl text-center"
      >
        {/* Heading */}
        <motion.p variants={item} className="text-sm font-medium tracking-wider text-neutral-500 dark:text-neutral-400">
          OOPS!
        </motion.p>
        <motion.h1
          variants={item}
          className="mt-2 text-6xl font-extrabold leading-none sm:text-7xl"
        >
          4<span className="text-indigo-500">0</span>4
        </motion.h1>
        <motion.p
          variants={item}
          className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-neutral-600 dark:text-neutral-300"
        >
          The page you are looking for doesn\'t exist or may have been moved.
        </motion.p>

        {/* Cute line illustration */}
        <motion.svg
          variants={item}
          role="img"
          aria-label="Lost in space illustration"
          viewBox="0 0 400 120"
          className="mx-auto mt-8 w-full max-w-xl"
        >
          <motion.circle cx="60" cy="60" r="40" className="fill-indigo-500/10 dark:fill-indigo-400/10" />
          <motion.circle cx="340" cy="60" r="30" className="fill-emerald-500/10 dark:fill-emerald-400/10" />
          <motion.path
            d="M10,90 C80,10 320,10 390,90"
            fill="none"
            className="stroke-current"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
          <motion.circle
            cx="200"
            cy="60"
            r="6"
            className="fill-current"
            animate={{ cx: [200, 380, 20, 200] }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          />
        </motion.svg>

        {/* Actions */}
        <motion.div variants={item} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-4 py-2 text-white shadow-lg shadow-indigo-600/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <FiHome className="text-lg" />
            <span>Go Home</span>
          </a>
          <button
            type="button"
            onClick={() => (window.history.length > 1 ? window.history.back() : (window.location.href = "/"))}
            className="inline-flex items-center gap-2 rounded-2xl border border-neutral-300 px-4 py-2 text-neutral-700 transition hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:ring-neutral-700"
          >
            <FiArrowLeft className="text-lg" />
            <span>Go Back</span>
          </button>
        </motion.div>

        {/* Tiny footer */}
        <motion.p variants={item} className="mt-10 text-xs text-neutral-500 dark:text-neutral-400">
          If you think this is a mistake, contact support or try the search above.
        </motion.p>
      </motion.main>
    </div>
  );
}
