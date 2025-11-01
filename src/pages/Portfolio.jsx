import React, { useEffect, useState } from "react";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";
import WorkFlow from "../components/WorkFlow";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A modern, high-performance e-commerce platform with product search, real-time inventory, cart, and payment gateway integrations.",
    image:
      "/images/portfolio/image_1.jpeg",
    tags: ["React", "Node.js", "MongoDB"],
    category: "Web",
    link: "#",
    caseStudy: "#",
  },
  {
    id: 2,
    title: "Food Delivery App",
    description:
      "An intuitive mobile platform for customers to order food with live order tracking, delivery partner modules, and instant notifications.",
    image:
      "/images/portfolio/image_2.jpeg",
    tags: ["React Native", "Express", "Stripe"],
    category: "Mobile",
    link: "#",
    caseStudy: "#",
  },
  {
    id: 3,
    title: "Business Dashboard",
    description:
      "A customizable analytics dashboard with interactive charts, reporting features, and real-time business insights.",
    image:
      "/images/portfolio/image_3.jpeg",
    tags: ["Next.js", "Tailwind", "Firebase"],
    category: "Dashboard",
    link: "#",
    caseStudy: "#",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A sleek and responsive personal portfolio site with animations, project showcases, and contact integrations.",
    image:
      "/images/portfolio/image_4.jpeg",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web",
    link: "#",
    caseStudy: "#",
  },
  {
    id: 5,
    title: "AI Chat Assistant",
    description:
      "An AI-powered chatbot with contextual understanding, natural language processing, and real-time conversation handling.",
    image:
      "/images/portfolio/image_5.jpeg",
    tags: ["Python", "Flask", "OpenAI API"],
    category: "AI",
    link: "#",
    caseStudy: "#",
  },
  {
    id: 6,
    title: "SaaS Analytics Platform",
    description:
      "Cloud-based SaaS solution with subscription management, powerful dashboards, and data visualization.",
    image:
      "/images/portfolio/image_6.jpeg",
    tags: ["React", "Supabase", "Vercel"],
    category: "Dashboard",
    link: "#",
    caseStudy: "#",
  },
];

const categories = ["All", "Web", "Mobile", "Dashboard", "AI"];

export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 800); // small delay for smooth fade-in
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) {
      return (
        <section className="py-16 sm:py-24 bg-white dark:bg-black">
          <div className="container mx-auto px-4 text-center text-gray-400 dark:text-gray-200">
            Loading...
          </div>
        </section>
      );
    }

  return (
    <PageTransition>
      <section className="w-full mx-auto px-5 py-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <WorkFlow />

          {/* Section Heading */}
          {/* <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-4 dark:text-white"
          >
            Our Portfolio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-12"
          >
            Explore our featured projects that highlight our expertise in
            delivering impactful and scalable digital solutions across web,
            mobile, and AI platforms.
          </motion.p> */}

          {/* Filter Tabs */}
          {/* <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div> */}

          {/* Project Grid */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <div className="relative h-56 group overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700"
                    >
                      View Project
                    </a>
                  </div>
                </div>

                {/* <div className="relative h-56 group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex flex-col gap-3 items-center justify-center transition">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.caseStudy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-50 transition"
                    >
                      <BookOpen size={16} />
                      Case Study
                    </a>
                  </div>
                </div> 
                <div className="p-5">
                  <h2 className="text-xl font-semibold mb-2 dark:text-white">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div> */}
        </div>
      </section>
    </PageTransition>
  );
}
