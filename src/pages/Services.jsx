import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Cloud,
  Palette,
  PenTool,
  Server,
  ShoppingBag,
  Brain,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const services = [
  {
    icon: <PenTool size={40} />,
    title: "Brand & Development",
    desc: "Helping brands stand out with strategic planning, creative direction, and modern visual identity.",
  },
  {
    icon: <Code size={40} />,
    title: "Web Development",
    desc: "High-performance, SEO-friendly websites built with the latest technologies for scalability and speed.",
  },
  {
    icon: <Smartphone size={40} />,
    title: "Mobile Development",
    desc: "Cross-platform mobile apps for iOS and Android with smooth UI, fast performance, and modern design.",
  },
  {
    icon: <Palette size={40} />,
    title: "UI/UX Design",
    desc: "Creating intuitive interfaces and delightful experiences that turn users into loyal customers.",
  },
  {
    icon: <Cloud size={40} />,
    title: "Cloud Solutions",
    desc: "Secure, scalable cloud deployments with CI/CD pipelines, DevOps, and serverless architecture.",
  },
  {
    icon: <Server size={40} />,
    title: "Backend & API",
    desc: "Robust, well-structured backend services and APIs optimized for performance and security.",
  },
  {
    icon: <ShoppingBag size={40} />,
    title: "E-Commerce Solutions",
    desc: "Custom online stores with payment integration, analytics, product management, and order tracking.",
  },
  {
    icon: <Brain size={40} />,
    title: "AI & Automation",
    desc: "Smart solutions powered by AI and automation to optimize workflows and enhance user engagement.",
  },
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services | Techrayos</title>
        <meta
          name="description"
          content="Explore Techrayos services — Web Development, Mobile Apps, Cloud Solutions, and AI-driven Business Transformation."
        />
        <meta property="og:url" content="https://www.techrayos.com/services" />
      </Helmet>
      <section className="max-w-7xl mx-auto px-5 py-25">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-6 dark:text-white"
        >
          Our Services
        </motion.h1>
        <p className="max-w-2xl mx-auto text-center text-gray-600 dark:text-gray-300 mb-14">
          We provide end-to-end digital solutions to build, launch, and scale
          your business with the latest technologies and a customer-first
          mindset.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              className="relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group transition-all"
            >
              {/* gradient hover border */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

              <Link
                className="relative z-10"
                to={`/${s.title
                  .toLowerCase()
                  .trim()
                  .replace(/\s+/g, "-")
                  .replace(/[^a-z0-9-]/g, "")}
                  `}
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:text-white transition-colors duration-300">
                  {s.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white group-hover:text-white transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                  {s.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
