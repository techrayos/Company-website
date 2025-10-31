import React, { useState } from "react";
import { technologies } from "../data/technologies";
import { ArrowRight } from "lucide-react";

export default function TechSection() {
  const [active, setActive] = useState("Frontend");

  const activeTech = technologies.find((t) => t.category === active);

  return (
    <section className="max-w-7xl mx-auto px-5 py-16 flex flex-col md:flex-row gap-10 bg-gray-50 dark:bg-gray-800">
      {/* LEFT SIDE - CATEGORY LIST */}
      <div className="w-full md:w-1/3 text-xl md:text-2xl">
        <div className="border border-blue-500 rounded-xl p-1 md:p-4 space-y-1 md:space-y-4">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              onClick={() => setActive(tech.category)}
              className={`flex justify-between items-center cursor-pointer p-3 py-3 md:py-5 rounded-lg transition text-gray-500 dark:text-gray-300 ${
                active === tech.category
                  ? "!text-blue-700 bg-blue-300"
                  : "text-gray-500 opacity-80 hover:text-blue-600 hover:bg-blue-100 hover:opacity-100"
              }`}
            >
              <span className="font-medium">{tech.category}</span>
              <ArrowRight
                className={`w-5 h-5 ${
                  active === tech.category ? "text-blue-600" : "text-gray-600 dark:text-gray-400"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE - TECH ICONS */}
      <div className="w-full md:w-2/3 text-xl md:text-2xl bg-gray-200 dark:bg-gray-700 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-50">{active} Stack</h2>
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 gap-6">
          {activeTech.techStack.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center gap-2 p-2 hover:scale-105 transition"
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-10 md:w-20 h-10 md:h-20 object-contain"
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
