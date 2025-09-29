import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: 'Dheera Technologies',
      url: 'https://dheeratechnologies.com/',
      description: 'Corporate website showcasing innovative technology solutions and services.',
      category: 'Corporate Website',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: ['Responsive Design', 'CMS Integration', 'SEO Optimized'],
      rating: 5
    },
    {
      title: 'We Believe Logistics',
      url: 'https://webelievelogistics.org/',
      description: 'Comprehensive logistics management system with tracking and optimization.',
      category: 'Logistics Platform',
      image: 'https://images.pexels.com/photos/4246258/pexels-photo-4246258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: ['Order Tracking', 'Route Optimization', 'Fleet Management'],
      rating: 5
    },

    {
      title: 'Zenith Engineering Solutions',
      url: 'https://zenithenggsolutions.com/',
      description: 'Engineering consultancy platform with project management capabilities.',
      category: 'Engineering Services',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: ['Project Management', 'Resource Planning', 'Client Portal'],
      rating: 5
    },


  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our successful projects and the innovative solutions we've delivered for our clients.
          </p>
        </motion.div>

        {/* Featured Project Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="relative h-96 md:h-[500px]"
              >
                <img
                  src={projects[currentSlide].image}
                  alt={projects[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
                  <div className="max-w-2xl mx-auto px-6 text-white">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-sm font-medium mb-4">
                        {projects[currentSlide].category}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        {projects[currentSlide].title}
                      </h3>
                      <p className="text-lg mb-6 opacity-90">
                        {projects[currentSlide].description}
                      </p>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="flex items-center space-x-1">
                          {[...Array(projects[currentSlide].rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-sm opacity-75">Client Rating</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {projects[currentSlide].features.map((feature, index) => (
                          <span key={index} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <motion.a
                        href={projects[currentSlide].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>View Project</span>
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default Portfolio;
