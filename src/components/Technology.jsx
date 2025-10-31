import React from "react";
import TechSection from "../pages/TechSection.jsx";

export default function Technology() {
  return (
    <section
      id="services"
      className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800 transition"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Mastering Every Technology To Build{" "}
            <br className="hidden sm:block" /> Your Perfect Solution
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We work with cutting-edge technologies to deliver exceptional
            results
          </p>
        </div>
        <TechSection />
      </div>
    </section>
  );
}
