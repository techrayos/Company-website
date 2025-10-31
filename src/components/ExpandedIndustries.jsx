import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Check, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function ExpandedIndustries() {
  const [industries, setIndustries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  useEffect(() => {
    async function fetchIndustries() {
      const { data, error } = await supabase
        .from("industries")
        .select("*")
        .order("order_index", { ascending: true });

      if (!error && data) setIndustries(data);
      setLoading(false);
    }
    fetchIndustries();
  }, []);

  if (loading) {
    return (
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 text-center text-gray-400">
          Loading...
        </div>
      </section>
    );
  }

  return (
    <section
      id="industries"
      className="py-20 sm:py-28 bg-gray-100 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
            Powering Innovation Across Industries
          </h2>
          <p className="text-lg text-blue-500 max-w-2xl mx-auto">
            We build tailored digital solutions that solve real-world problems
            and help businesses thrive across sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="relative h-[340px] rounded-2xl overflow-hidden group bg-black/20"
            >
              {/* Background Image */}
              <img
                src={industry.image_url}
                alt={industry.name}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:blur-sm"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-all duration-500"></div>

              {/* Card Content */}
              <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white transition-all duration-500 group-hover:translate-y-[-10px]">
                <h3 className="text-2xl font-bold mb-3">{industry.name}</h3>
                <p className="text-sm text-blue-100 mb-4 line-clamp-3">
                  {industry.description}
                </p>
                <Link
                  to={`/${industry.name
                    .toLowerCase()
                    .trim()
                    .replace(/\s+/g, "-")}`}
                    className="inline-flex items-center rounded-2xl border border-neutral-300/70 px-5 py-4 text-sm font-medium text-neutral-300 hover:text-gray-50 backdrop-blur-md transition hover:border-neutral-400 hover:bg-white/30 dark:border-white/10 dark:hover:text-neutral-200 dark:hover:bg-white/10"
                >
                  View details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
