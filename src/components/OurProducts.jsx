import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function OurProducts() {
  const menuItems = [
    {
      name: "Drone Delivery",
      description:
        "A food delivery app tailored specifically for Expo City in Dubai, offering convenient and efficient food ordering and delivery services within the expo city grounds.",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=650&dpr=2",
    },
    {
      name: "AI Solutions",
      description:
        "AI solutions designed to revolutionize industries with smart automation and data-driven insights.",
      image:
        "https://images.pexels.com/photos/5473951/pexels-photo-5473951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=650&dpr=2",
    },
    {
      name: "On Demand",
      description:
        "Custom on-demand delivery and logistics solutions tailored for speed and efficiency.",
      image:
        "https://images.pexels.com/photos/7709062/pexels-photo-7709062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=650&dpr=2",
    },
    {
      name: "ERP",
      description:
        "Powerful ERP systems that help manage business processes with efficiency and precision.",
      image:
        "https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=650&dpr=2",
    },
    {
      name: "Real Estate",
      description:
        "Transforming real estate with advanced digital solutions for property management and sales.",
      image:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=650&dpr=2",
    },
    {
      name: "E-commerce",
      description:
        "Modern e-commerce solutions built for scale, performance, and seamless shopping experiences.",
      image:
        "https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=650&dpr=2",
    },
    {
      name: "Gaming",
      description:
        "Immersive gaming platforms with real-time performance and stunning graphics.",
      image:
        "https://images.pexels.com/photos/7915435/pexels-photo-7915435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=650&dpr=2",
    },
    {
      name: "Fintech",
      description:
        "Secure, smart, and scalable fintech platforms for modern businesses and consumers.",
      image:
        "https://images.pexels.com/photos/4968634/pexels-photo-4968634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=650&dpr=2",
    },
    {
      name: "Blockchain",
      description:
        "Cutting-edge blockchain technology enabling secure, decentralized solutions.",
      image:
        "https://images.pexels.com/photos/6772025/pexels-photo-6772025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=650&dpr=2",
    },
  ];

  const [activeMenu, setActiveMenu] = useState(menuItems[0]);

  const imageVariants = {
    initial: { opacity: 0, scale: 1.05 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  };

  return (
    <div className="max-w-full md:max-w-4xl lg:max-w-7xl mx-auto px-4 mt-20">
      <nav className="w-full flex flex-wrap md:justify-center gap-4 md:gap-10 py-3 text-lg text-blue-600 dark:text-gray-300">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveMenu(item)}
            className={`relative group transition-colors ${
              activeMenu.name === item.name
                ? "text-blue-700 dark:text-white"
                : "text-gray-500 hover:text-gray-400"
            }`}
          >
            {item.name}
            <span
              className={`absolute left-1/2 -bottom-1 h-[2px] bg-blue-500 dark:bg-white rounded-full 
                        transition-all duration-300 ease-out transform -translate-x-1/2 origin-center 
                        ${
                          activeMenu.name === item.name
                            ? "w-full scale-x-100"
                            : "w-0 group-hover:w-full"
                        }`}
            ></span>
          </button>
        ))}
      </nav>

      <div className="relative max-w-sm md:max-w-4xl lg:max-w-6xl h-[400px] md:h-[600px] rounded-3xl overflow-hidden mx-auto my-5">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeMenu.image}
            src={activeMenu.image}
            alt={activeMenu.name}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f4a]/90 via-[#0b1f4a]/60 to-transparent rounded-3xl"></div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeMenu.name}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 max-w-xl text-white"
          >
            <h3 className="text-3xl font-bold mb-4">{activeMenu.name}</h3>
            <p className="text-lg mb-6 leading-relaxed">
              {activeMenu.description}
            </p>
            <Link
              to="/contact"
              className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-[#0b1f4a] transition-all duration-300"
            >
              Let’s Build Yours
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
