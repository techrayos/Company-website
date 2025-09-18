import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Target, Award, Rocket, Heart, Zap } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to solve complex problems.',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners to achieve exceptional results.',
      color: 'purple'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code to customer service.',
      color: 'emerald'
    },
    {
      icon: Rocket,
      title: 'Growth',
      description: 'We help businesses scale and evolve with technology-driven solutions.',
      color: 'orange'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do and it shows in the quality of our work and client relationships.',
      color: 'red'
    },
    {
      icon: Zap,
      title: 'Agility',
      description: 'We adapt quickly to changing requirements and market demands.',
      color: 'indigo'
    }
  ];




  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; gradient: string } } = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', gradient: 'from-blue-600 to-blue-400' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', gradient: 'from-purple-600 to-purple-400' },
      emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', gradient: 'from-emerald-600 to-emerald-400' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-600', gradient: 'from-orange-600 to-orange-400' },
      red: { bg: 'bg-red-50', text: 'text-red-600', gradient: 'from-red-600 to-red-400' },
      indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', gradient: 'from-indigo-600 to-indigo-400' },
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">TECHRAYOS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a technology-first company dedicated to transforming businesses through innovative digital solutions and exceptional service.
          </p>
        </motion.div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to bridge the gap between technology and business success, TECHRAYOS has grown from a small team of passionate developers to a comprehensive digital solutions provider.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We believe that every business deserves access to cutting-edge technology solutions that drive growth, improve efficiency, and create competitive advantages. Our team of experts combines technical excellence with business acumen to deliver solutions that truly make a difference.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to have helped over 50+ businesses transform their operations and achieve their digital goals through our comprehensive suite of services.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team collaboration"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">2+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const colors = getColorClasses(value.color);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <value.icon className={`w-8 h-8 ${colors.text}`} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;