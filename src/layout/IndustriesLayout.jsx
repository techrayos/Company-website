import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronDown } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0 },
};
const slideInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 },
};

export default function IndustriesLayout({
  breadcrumb = [],
  heading,
  title,
  description,
  heroBackground,
  features = [],
  stats = [],
  faqs = [],
  ctaText,
}) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const [openFAQ, setOpenFAQ] = useState(null);

  // Helper for blur-up effect
  const BlurImage = ({ src, alt, className }) => (
    <motion.img
      src={src}
      alt={alt}
      loading="lazy"
      className={`${className} transition duration-700 ease-in-out hover:blur-0`}
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
    />
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* 🧠 SEO Meta */}
      <Helmet>
        <title>{heading} | Techrayos</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${heading} | Techrayos`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={heroBackground} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* 🧭 Breadcrumb */}
      <nav className="z-20 sticky top-1 pt-20 px-4 sm:px-6 lg:px-12 mb-6 text-sm md:text-xl lg:text-2xl">
        {breadcrumb.map((crumb, i) => (
          <span key={i}>
            {crumb.to ? (
              <Link to={crumb.to} className="text-indigo-500 hover:underline">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-gray-500">{crumb.label}</span>
            )}
            {i < breadcrumb.length - 1 && (
              <span className="mx-2 text-gray-400">›</span>
            )}
          </span>
        ))}
      </nav>

      {/* 🏞 Hero Section */}
      <section className="relative w-full h-[400px] md:h-[550px] overflow-hidden mb-20 rounded-xl md:rounded-4xl">
        <motion.img
          src={heroBackground}
          alt={heading}
          style={{ y }}
          className="absolute inset-0 w-full h-full object-cover transition duration-700 ease-in-out hover:blur-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
        >
          <div className="backdrop-blur-xl bg-white/10 dark:bg-gray-800/20 border border-white/20 dark:border-gray-700/30 rounded-3xl p-6 md:p-10 max-w-2xl shadow-xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
              {heading}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-3">{title}</p>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              {description}
            </p>
          </div>
        </motion.div>
      </section>

      {/* 🧩 Features */}
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        {features.map((feature, index) => {
          const [expanded, setExpanded] = useState(false);
          const isEven = index % 2 === 0;
          const maxWords = 20;
          const textWords = feature.description.split(" ");
          const isLong = textWords.length > maxWords;
          const displayedText = expanded
            ? feature.description
            : isLong
            ? textWords.slice(0, maxWords).join(" ") + "..."
            : feature.description;

          return (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                !isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {feature.media && (
                <motion.div
                  variants={isEven ? slideInLeft : slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="md:w-1/2 w-full"
                >
                  <BlurImage
                    src={feature.media}
                    alt={feature.title}
                    className="rounded-2xl object-cover w-full h-[300px] md:h-[400px] shadow-xl"
                  />
                </motion.div>
              )}
              <motion.div
                variants={isEven ? slideInRight : slideInLeft}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className={`w-full ${feature.media ? "md:w-1/2" : "md:w-full"}`}
              >
                <div className="flex items-center gap-3 mb-4 text-indigo-500 text-2xl">
                  {feature.icon}
                  <h3 className="font-bold text-2xl">{feature.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  {displayedText}
                </p>
                {isLong && (
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-2 text-indigo-500 hover:underline text-sm font-semibold"
                  >
                    {expanded ? "Read Less" : "Read More"}
                  </button>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* 📊 Stats */}
      {stats.length > 0 && (
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-6 mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        >
          {stats.map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800">
              <p className="text-3xl font-bold text-indigo-500">{stat.value}</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      )}

      {/* ❓ FAQ Accordion */}
      {faqs.length > 0 && (
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-6 mt-20 space-y-4"
        >
          <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-gray-300 dark:border-gray-700 pb-3 cursor-pointer"
              onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-semibold">{faq.q}</h3>
                <motion.div
                  animate={{ rotate: openFAQ === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-indigo-500" />
                </motion.div>
              </div>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openFAQ === i ? "auto" : 0,
                  opacity: openFAQ === i ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-2"
              >
                <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      )}

      {/* CTA */}
      {ctaText && (
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pb-20 flex justify-center"
        >
          <Link
            to="/contact"
            className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-rose-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            {ctaText}
          </Link>
        </motion.div>
      )}
    </div>
  );
}
