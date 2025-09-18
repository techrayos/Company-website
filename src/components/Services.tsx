import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Building, 
  Code,
  Bot,
  Palette, 
  TrendingUp, 
  Cloud, 
  Headphones, 
  Database,
  Shield,
  Lightbulb,
  GraduationCap,
  Zap
} from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      icon: Building,
      title: 'Brand Development',
      description: 'Creating, shaping, and growing a unique identity for lasting impact.',
      color: 'amber',
      features: ['Website', 'Mobile App', 'Ad Shoots', 'Marketing' , 'Real Growth']
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions built with cutting-edge technologies and best practices.',
      color: 'blue',
      features: ['Custom Applications', 'API Development', 'System Integration', 'Mobile Apps']
    },
    {
      icon: Bot,
      title: 'Business Process Automation',
      description: 'Streamline repetitive business tasks using AI-powered automation tools for better productivity and reduced manual errors.',
      color: 'blue',
      features: ['Workflow Automation', 'Chatbot Integration', 'Email Scheduling', 'Data Processing']
    },
    {
      icon: Palette,
      title: 'Website Design & Development',
      description: 'Stunning, responsive websites that convert visitors into customers.',
      color: 'purple',
      features: ['Responsive Design', 'E-commerce', 'CMS Development', 'SEO Optimization']
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your online presence.',
      color: 'emerald',
      features: ['Social Media', 'Content Marketing', 'PPC Campaigns', 'Analytics']
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and streamlined development processes.',
      color: 'blue',
      features: ['AWS/Azure/GCP', 'CI/CD Pipelines', 'Containerization', 'Monitoring']
    },
    {
      icon: Headphones,
      title: 'IT Support',
      description: '24/7 technical support and maintenance for your technology infrastructure.',
      color: 'purple',
      features: ['Help Desk', 'System Maintenance', 'Network Support', 'Security Updates']
    },
    {
      icon: Database,
      title: 'Data Services',
      description: 'Data analytics, visualization, and business intelligence solutions.',
      color: 'emerald',
      features: ['Data Analytics', 'Business Intelligence', 'Data Migration', 'Reporting']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      color: 'red',
      features: ['Security Audits', 'Threat Detection', 'Compliance', 'Training']
    },
    {
      icon: Lightbulb,
      title: 'Product Development',
      description: 'End-to-end product development from concept to market launch.',
      color: 'orange',
      features: ['MVP Development', 'Product Strategy', 'User Research', 'Launch Support']
    },
    {
      icon: GraduationCap,
      title: 'Training & Consulting',
      description: 'Expert training and consulting services for technology adoption.',
      color: 'indigo',
      features: ['Technical Training', 'Strategy Consulting', 'Workshops', 'Mentoring']
    },
    {
      icon: Zap,
      title: 'Specialized Tech Solutions',
      description: 'Custom technology solutions for unique business requirements.',
      color: 'pink',
      features: ['AI/ML Solutions', 'IoT Development', 'Blockchain', 'AR/VR Applications']
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string; gradient: string } } = {
      amber: {bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200', gradient: 'from-amber-600 to-amber-400'},
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', gradient: 'from-blue-600 to-blue-400' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', gradient: 'from-purple-600 to-purple-400' },
      emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', gradient: 'from-emerald-600 to-emerald-400' },
      red: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200', gradient: 'from-red-600 to-red-400' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', gradient: 'from-orange-600 to-orange-400' },
      indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200', gradient: 'from-indigo-600 to-indigo-400' },
      pink: { bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-200', gradient: 'from-pink-600 to-pink-400' },
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive growth in the digital age.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-8 h-8 ${colors.text}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.gradient}`} />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>


              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;