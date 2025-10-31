import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function TrustedBy() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 2500 }),
  ]);

  const light_logos = [
    { src: "images/trustedby/light/logo_1.png", alt: "Resto Labs" },
    { src: "images/trustedby/light/logo_2.png", alt: "Smart H2R" },
    { src: "images/trustedby/light/logo_3.png", alt: "ProZenTech" },
    { src: "images/trustedby/light/logo_4.png", alt: "Idearx" },
    { src: "images/trustedby/light/logo_5.png", alt: "Examly" },
    { src: "images/trustedby/light/logo_6.png", alt: "Propelld" },
    { src: "images/trustedby/light/logo_7.png", alt: "GoBumpr" },
    { src: "images/trustedby/light/logo_8.png", alt: "Kiss Flow" },
  ];

  const dark_logos = [
    { src: "images/trustedby/dark/logo_1.png", alt: "Resto Labs" },
    { src: "images/trustedby/dark/logo_2.png", alt: "Smart H2R" },
    { src: "images/trustedby/dark/logo_3.png", alt: "ProZenTech" },
    { src: "images/trustedby/dark/logo_4.png", alt: "Idearx" },
    { src: "images/trustedby/dark/logo_5.png", alt: "Examly" },
    { src: "images/trustedby/dark/logo_6.png", alt: "Propelld" },
    { src: "images/trustedby/dark/logo_7.png", alt: "GoBumpr" },
    { src: "images/trustedby/dark/logo_8.png", alt: "Kiss Flow" },
  ];

  // 🌙 System theme detection
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleThemeChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleThemeChange);

    return () => mediaQuery.removeEventListener("change", handleThemeChange);
  }, []);

  const logos = isDarkMode ? dark_logos : light_logos;

  return (
    <section className="py-16 bg-white dark:bg-black rounded-2xl shadow-2xl h-[250px] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-gray-800 dark:text-white mb-4"
        >
          Trusted by innovative startups
        </motion.h2>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-12 text-gray-900 dark:text-white">
            {logos.map((logo, idx) => (
              <motion.div
                key={idx}
                className="flex-shrink-0 flex justify-center items-center cursor-pointer relative group overflow-hidden"
                style={{ minWidth: "120px" }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-32 h-32 object-contain transition-all duration-300"
                />
                <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-50 dark:bg-black text-gray-800 dark:text-white text-xs px-2 py-1 rounded-lg shadow-md">
                  {logo.alt}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
