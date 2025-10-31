import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function Industries() {
  const [industries, setIndustries] = useState([]);
  const [loading, setLoading] = useState(true);

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
      className="py-16 sm:py-24 bg-gray-100 dark:bg-gradient-to-br from-blue-600 to-blue-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            A Seamless Vision that Adapts to Every{" "}
            <br className="hidden sm:block" /> Industry's Demands
          </h2>
          <p className="text-lg text-gray-700 dark:text-blue-100 max-w-2xl mx-auto">
            We deliver tailored solutions across diverse sectors
          </p>
        </div>

        <div className="flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="w-full h-[250px] sm:h-72 lg:h-80 rounded-2xl overflow-hidden hover:bg-white/20 transition-all group relative cursor-pointer"
            >
              <img
                src={industry.image_url}
                alt={industry.name}
                className="w-full h-full object-cover transition-all duration-500 ease-in-out md:group-hover:blur-md md:group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 md:group-hover:bg-black/60 transition-all duration-500 ease-in-out">
                <h3 className="text-lg font-bold text-white mb-2 md:group-hover:-translate-y-6 transition">
                  {industry.name}
                </h3>
                <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 text-center px-4 mb-4">
                  <p className="text-sm text-blue-100 mb-3">
                    {industry.description}
                  </p>
                  <ul className="space-y-1">
                    {(industry.features || [])
                      .slice(0, 3)
                      .map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-2 text-xs text-blue-50"
                        >
                          <Check className="w-3 h-3 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                  </ul>
                </div>
                <Link
                  to={`/${industry.name
                    .toLowerCase()
                    .trim()
                    .replace(/\s+/g, "-")}`}
                    className="inline-flex items-center rounded-2xl border border-neutral-300/70 px-5 py-4 text-sm font-medium text-neutral-300 hover:text-neutral-900 backdrop-blur-md transition hover:border-neutral-400 hover:bg-white/70 dark:border-white/10 dark:text-neutral-200 dark:hover:bg-white/10"
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
