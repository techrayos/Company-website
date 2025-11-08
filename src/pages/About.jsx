import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Users,
  Target,
  Award,
  Rocket,
  Heart,
  Zap,
  Globe,
  Code,
  Cpu,
} from "lucide-react";
import {Helmet} from 'react-helmet-async'

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollY } = useScroll();
  const opacityValue = useTransform(scrollY, [0, 800], [0.6, 0.3]);

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description:
        "We turn ideas into breakthrough digital solutions using modern technologies, pushing the boundaries of what's possible.",
      color: "bg-blue-500",
      light: "bg-blue-50 text-blue-600",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We build long-term partnerships, working closely with clients to bring their vision to life.",
      color: "bg-purple-500",
      light: "bg-purple-50 text-purple-600",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Our team ensures top-notch quality and precision in every line of code and every client interaction.",
      color: "bg-emerald-500",
      light: "bg-emerald-50 text-emerald-600",
    },
    {
      icon: Rocket,
      title: "Scalable Growth",
      description:
        "We help businesses scale fast with secure, reliable and future-ready technology solutions.",
      color: "bg-orange-500",
      light: "bg-orange-50 text-orange-600",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "We love building products that create real impact — and our passion shows in everything we deliver.",
      color: "bg-red-500",
      light: "bg-red-50 text-red-600",
    },
    {
      icon: Zap,
      title: "Agility",
      description:
        "Our agile teams adapt quickly, delivering rapid solutions without compromising on quality.",
      color: "bg-indigo-500",
      light: "bg-indigo-50 text-indigo-600",
    },
  ];

  const extraFeatures = [
    {
      icon: Globe,
      title: "Global Reach",
      desc: "We collaborate with startups and enterprises worldwide, delivering world-class digital experiences.",
    },
    {
      icon: Code,
      title: "Tech Expertise",
      desc: "Our team specializes in full-stack development, cloud architecture, and AI-driven solutions.",
    },
    {
      icon: Cpu,
      title: "Future-Ready",
      desc: "We build with tomorrow in mind — from scalable cloud systems to cutting-edge AI integrations.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Techrayos</title>
        <meta
          name="description"
          content="Techrayos is a technology-driven company helping organizations scale with smart, scalable digital products and business automation."
        />
        <meta
          property="og:image"
          content="https://www.techrayos.com/logo.png"
        />
        <meta property="og:url" content="https://www.techrayos.com/about" />
      </Helmet>
      <section
        id="about"
        className="relative overflow-hidden py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      >
        <div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          ref={ref}
        >
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
              Empowering Businesses With{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Next-Gen Technology
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are an IT solutions company focused on building fast, scalable,
              and intelligent digital products that transform businesses.
            </p>
          </motion.div>

          {/* Company Story */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-10 md:p-14 shadow-xl mb-20 transition-colors"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Our Story
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Founded with a mission to revolutionize how businesses use
                  technology, our company started with a small, passionate team
                  of engineers.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Today, we deliver world-class digital products, cloud-based
                  platforms, and AI-powered solutions to clients globally. Our
                  agile process ensures faster delivery, greater innovation, and
                  measurable results.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  we continue to push the boundaries of technology every day.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Our Team"
                  className="rounded-2xl shadow-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div
                    className={`w-16 h-16 ${value.light} dark:${value.color} rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors`}
                  >
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Extra Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {extraFeatures.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-6 shadow-lg text-center"
              >
                <f.icon className="w-10 h-10 mx-auto mb-3" />
                <h4 className="text-xl font-semibold mb-2">{f.title}</h4>
                <p className="text-sm opacity-90 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
