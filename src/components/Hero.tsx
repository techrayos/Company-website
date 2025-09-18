import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Cpu, Layers } from 'lucide-react';

const Hero: React.FC = () => {
  const floatingElements = [
    { icon: Cpu, x: '10%', y: '20%', delay: 0 },
    { icon: Layers, x: '80%', y: '30%', delay: 0.5 },
    { icon: Sparkles, x: '15%', y: '70%', delay: 1 },
    { icon: Cpu, x: '85%', y: '80%', delay: 1.5 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%236366f1%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>

      {/* Floating 3D Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block"
          style={{ left: element.x, top: element.y }}
          initial={{ y: 0, rotateY: 0, scale: 0 }}
          animate={{ 
            y: [-20, 20, -20], 
            rotateY: 360,
            scale: 1
          }}
          transition={{
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: element.delay },
            rotateY: { duration: 8, repeat: Infinity, ease: "linear", delay: element.delay },
            scale: { duration: 0.5, delay: element.delay }
          }}
        >
          <div className="p-4 bg-white/20 backdrop-blur-lg rounded-xl shadow-lg border border-white/30">
            <element.icon className="w-8 h-8 text-blue-600" />
          </div>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block mt-[10vh] pb-[1vh] sm:mt-0 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent ">
              Technology
            </span>
            <br />
            <span className="text-gray-800 ">First Solutions</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Comprehensive digital solutions that transform businesses through innovative 
            software development, cutting-edge design, and strategic technology consulting.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow flex items-center space-x-2 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/80 backdrop-blur-lg text-gray-800 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { number: '50+', label: 'Projects Delivered', color: 'blue' },
              { number: '50+', label: 'Happy Clients', color: 'purple' },
              { number: '2+', label: 'Years Experience', color: 'emerald' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className={`text-4xl font-bold bg-gradient-to-r from-${stat.color}-600 to-${stat.color}-400 bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;