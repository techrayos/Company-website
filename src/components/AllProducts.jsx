import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const allProducts = [
  {
    id: 1,
    name: "Drone Delivery",
    description: "Food delivery platform for Expo City Dubai.",
    features: ["Real-time tracking", "Multiple vendors", "Fast delivery"],
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=650&dpr=2",
  },
  {
    id: 2,
    name: "AI Solutions",
    description: "Automation and AI tools to optimize operations.",
    features: ["AI workflow", "Predictive analytics", "Smart insights"],
    image:
      "https://images.pexels.com/photos/5473951/pexels-photo-5473951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=650&dpr=2",
  },
  {
    id: 3,
    name: "Ecommerce",
    description: "Modern and scalable online shopping solution.",
    features: ["Custom storefront", "Secure checkout", "Analytics"],
    image:
      "https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=650&dpr=2",
  },
  {
    id: 4,
    name: "On Demand",
    description: "Real-time dispatch and logistics platform.",
    features: ["Fleet management", "Live tracking", "Fast response"],
    image:
      "https://images.pexels.com/photos/7709062/pexels-photo-7709062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=650&dpr=2",
  },
  {
    id: 5,
    name: "RealEstate",
    description: "Digital solutions for property management.",
    features: ["Property listings", "Virtual tours", "Lead management"],
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=650&dpr=2",
  },
  {
    id: 6,
    name: "Fintech",
    description: "Secure digital payment and finance platform.",
    features: ["Wallet", "Payment gateway", "Data security"],
    image:
      "https://images.pexels.com/photos/4968634/pexels-photo-4968634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=650&dpr=2",
  },
  {
    id: 7,
    name: "Gaming",
    description: "Immersive gaming platform with stunning visuals.",
    features: ["Multiplayer", "3D graphics", "Live chat"],
    image:
      "https://images.pexels.com/photos/7915435/pexels-photo-7915435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=650&dpr=2",
  },
  {
    id: 8,
    name: "Blockchain",
    description: "Decentralized blockchain solutions.",
    features: ["Smart contracts", "Secure", "Scalable"],
    image:
      "https://images.pexels.com/photos/6772025/pexels-photo-6772025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=650&dpr=2",
  },
];

export default function AllProducts() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-20">
      <div className="md:flex justify-evenly items-center">
        <div className="max-w-sm md:max-w-2xl mx-auto my-10">
          <h2 className="text-2xl sm:text-5xl font-bold text-blue-600 mb-2">
            Inspiring the Next Powered By
          </h2>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 dark:text-gray-300 mb-4">
            Our Thoughts and Actions
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {allProducts.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg group transition-all duration-500"
          >
            {/* Image with hover zoom */}
            <div className="relative h-64 overflow-hidden">
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"></div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2 dark:text-white">
                {product.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                {product.description}
              </p>
              <ul className="mb-4 space-y-1 text-gray-500 dark:text-gray-400 text-sm">
                {product.features.map((f, idx) => (
                  <li key={idx}>✅ {f}</li>
                ))}
              </ul>
              <div className="flex justify-center">
                <Link
                  to={`/${product.name
                    .toLowerCase()
                    .trim()
                    .replace(/\s+/g, "-")}`}
                  className="inline-flex items-center rounded-2xl border border-neutral-300/70 px-5 py-2 text-sm font-medium text-neutral-700 backdrop-blur-md transition hover:border-neutral-400 hover:bg-blue-600/85 hover:text-white dark:border-white/10 dark:text-neutral-200 dark:hover:bg-white/10"
                >
                  View full details
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
