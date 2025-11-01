// import { ArrowRight } from "lucide-react";
// import OurProducts from "./../components/OurProducts";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useTransform,
// } from "framer-motion";
// import Industries from "../components/Industries";
// import Contact from "../components/Contact";
// import Technology from "../components/Technology";
// import { Link, NavLink } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import TrustedBy from "../components/TrustedBy";

// export default function Home() {
//   const [loading, setLoading] = useState(true);
//   const { scrollY } = useScroll();
//   const opacityValue = useTransform(scrollY, [0, 800], [0.6, 0.3]);

//   useEffect(() => {
//     return setLoading(false);
//   }, []);

//   if (loading) {
//     return (
//       <section className="py-16 sm:py-24 bg-white dark:bg-black">
//         <div className="container mx-auto px-4 text-center text-gray-400 dark:text-gray-200">
//           Loading...
//         </div>
//       </section>
//     );
//   }

//   return (
//     <>
//       <section
//         id="home"
//         className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gray-50 dark:bg-gray-800 overflow-hidden"
//       >
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="max-w-7xl mx-auto relative mb-10 sm:mb-16 lg:mb-24 overflow-hidden">
//             {/* Background Image */}
//             <AnimatePresence mode="wait">
//               <motion.img
//                 src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=650&dpr=2"
//                 alt=""
//                 initial={{ opacity: 0, scale: 1.05 }}
//                 animate={{
//                   opacity: 1,
//                   scale: 1,
//                   transition: { duration: 0.8, ease: "easeOut" },
//                 }}
//                 exit={{
//                   opacity: 0,
//                   scale: 1.05,
//                   transition: { duration: 0.5, ease: "easeIn" },
//                 }}
//                 className="w-full h-[320px] md:h-[650px] object-cover overflow-hidden mx-auto rounded-xl"
//               />
//             </AnimatePresence>

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 rounded-lg"></div>

//             {/* Main Content */}
//             <motion.div
//               initial={{ opacity: 0, y: 100 }}
//               animate={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
//               exit={{ opacity: 0, y: -100, transition: { duration: 1.8 } }}
//               className="absolute inset-0 top-5 md:-top-5 max-w-lg md:max-w-4xl mx-auto text-center h-[220px] md:h-[400px] md:mt-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg"
//             >
//               <h1 className="relative text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-50 dark:text-gray-50 mb-2 md:mb-6 leading-tight">
//                 Inspiring the Next <br />
//                 <span className="inline-block px-3 py-1 text-blue-600 dark:text-blue-400">
//                   Powered By Our Thoughts and Actions
//                 </span>
//               </h1>

//               <p className="text-md sm:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
//                 We transform ideas into powerful digital solutions. From web
//                 development to cloud infrastructure, we deliver excellence in
//                 every project.
//               </p>
//             </motion.div>

//             {/* Call to Action Button */}
//             <motion.div
//               initial={{ opacity: 0, y: 100 }}
//               animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
//               exit={{ opacity: 0, y: -100, transition: { duration: 0.6 } }}
//               className="absolute h-full inset-0 -top-5 lg:bottom-10 md:left-1/2 flex justify-center items-end md:-translate-x-1/2 md:pb-16"
//             >
//               <Link
//                 to="/portfolio"
//                 className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 md:px-8 py-1.5 md:py-4 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl text-lg font-medium"
//               >
//                 <span>How We Work</span>
//                 <ArrowRight className="w-5 h-5" />
//               </Link>
//             </motion.div>
//           </div>

//           {/* Trusted company Section */}
//           <TrustedBy />
//         </div>
//       </section>

//       {/* Products Section */}
//       <section className="pt-10 md:pt-24 px-5 sm:pt-32 pb-16 sm:pb-24 text-gray-50 dark:bg-gray-900">
//         <div>
//           <div className="md:flex justify-evenly items-center">
//             <div className="max-w-sm md:max-w-xl mx-auto">
//               <h2 className="text-2xl sm:text-4xl font-bold text-blue-700 mb-1">
//                 Inspiring the Next Powered By
//               </h2>
//               <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 dark:text-gray-300 mb-4">
//                 Our Thoughts and Actions
//               </h2>
//             </div>
//             <div className="max-w-sm md:max-w-xl mx-auto flex justify-end md:justify-center items-start space-x-2 md:space-x-6">
//               <NavLink
//                 to="/all-products"
//                 className="inline-flex items-center space-x-2 border border-blue-600 text-gray-900 dark:text-white px-3 md:px-6 py-1 md:py-2 rounded-full hover:bg-blue-600 hover:text-gray-50 transition-all shadow-lg hover:shadow-xl text-lg font-medium"
//               >
//                 View all
//               </NavLink>
//             </div>
//           </div>

//           <OurProducts />
//           <Technology />
//           <Industries />
//           <Contact />
//         </div>
//       </section>
//     </>
//   );
// }

import { ArrowRight } from "lucide-react";
import React, { useEffect, useState, Suspense, lazy, useMemo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Link, NavLink } from "react-router-dom";

// Lazy-load heavy sections
const OurProducts = lazy(() => import("./../components/OurProducts"));
const Industries = lazy(() => import("../components/Industries"));
const Contact = lazy(() => import("../components/Contact"));
const Technology = lazy(() => import("../components/Technology"));
const TrustedBy = lazy(() => import("../components/TrustedBy"));

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Simulate minimal loading
  useEffect(() => setLoading(false), []);

  // Hero image (JPEG only, avoids 404)
  const heroImage = useMemo(
    () => ({
      src: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=1",
      lqip:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&blur=30",
      alt: "Hero background",
    }),
    []
  );

  // 🎢 Parallax effect with responsive speed
  const { scrollY } = useScroll();
  const isMobile = window.innerWidth < 768;
  const parallaxRange = isMobile ? [0, 300] : [0, 600];
  const parallaxOffset = isMobile ? [0, 60] : [0, 120];
  const yParallax = useSpring(
    useTransform(scrollY, parallaxRange, parallaxOffset),
    { stiffness: 100, damping: 20 }
  );

  // Fade-up reusable animation
  const fadeUp = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

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
    <>
      {/* -------------------- HERO SECTION -------------------- */}
      <section
        id="home"
        className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gray-50 dark:bg-gray-800 overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto relative mb-10 sm:mb-16 lg:mb-24 overflow-hidden rounded-xl">

            {/* 🌄 Hero Background with LQIP + Parallax */}
            <div className="relative w-full h-[320px] md:h-[650px] overflow-hidden rounded-xl will-change-transform">
              {/* LQIP blurred placeholder */}
              <motion.img
                src={heroImage.lqip}
                alt={heroImage.alt}
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover scale-105 blur-2xl opacity-20"
                style={{ y: yParallax }}
              />

              {/* Main image with fade-in */}
              <motion.img
                src={heroImage.src}
                alt={heroImage.alt}
                loading="lazy"
                decoding="async"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                style={{ y: yParallax }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 pointer-events-none" />
            </div>

            {/* ✨ Hero Text + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-10"
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-50 leading-tight drop-shadow-lg">
                Inspiring the Next <br />
                <span className="inline-block px-3 py-1 text-blue-500">
                  Powered By Our Thoughts and Actions
                </span>
              </h1>

              <p className="mt-4 md:mt-6 text-base sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                We transform ideas into powerful digital solutions. From web
                development to cloud infrastructure, we deliver excellence in
                every project.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                className="mt-8 md:mt-12"
              >
                <Link
                  to="/portfolio"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 md:px-8 py-2 md:py-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl text-lg font-medium"
                >
                  <span>How We Work</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Trusted companies */}
          <Suspense fallback={<div className="text-center py-8">Loading trusted companies…</div>}>
            <TrustedBy />
          </Suspense>
        </div>
      </section>

      {/* -------------------- PRODUCTS SECTION -------------------- */}
      <motion.section
        className="pt-10 md:pt-24 px-5 sm:pt-32 pb-16 sm:pb-24 text-gray-50 dark:bg-gray-900"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div>
          <div className="md:flex justify-evenly items-center">
            <div className="max-w-sm md:max-w-xl mx-auto">
              <h2 className="text-2xl sm:text-4xl font-bold text-blue-700 mb-1">
                Inspiring the Next Powered By
              </h2>
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 dark:text-gray-300 mb-4">
                Our Thoughts and Actions
              </h2>
            </div>
            <div className="max-w-sm md:max-w-xl mx-auto flex justify-end md:justify-center items-start space-x-2 md:space-x-6">
              <NavLink
                to="/all-products"
                className="inline-flex items-center space-x-2 border border-blue-600 text-gray-900 dark:text-white px-3 md:px-6 py-1 md:py-2 rounded-full hover:bg-blue-600 hover:text-gray-50 transition-all shadow-lg hover:shadow-xl text-lg font-medium"
              >
                View all
              </NavLink>
            </div>
          </div>

          {/* Section-by-section reveal animations */}
          <Suspense fallback={<div className="py-8 text-center">Loading products…</div>}>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <OurProducts />
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Technology />
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Industries />
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Contact />
            </motion.div>
          </Suspense>
        </div>
      </motion.section>
    </>
  );
}
