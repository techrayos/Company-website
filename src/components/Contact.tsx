import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send,  MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Create mailto link
    const subject = encodeURIComponent(`New inquiry from ${formData.name} - ${formData.service}`);
const body = `
Hello TECHYORA! 👋

My Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Interested In: ${formData.service}

Message:
${formData.message}
    `;
    const whatsappURL = `https://wa.me/919092079755?text=${encodeURIComponent(body)}`;
    window.open(whatsappURL, "_blank");

    window.location.href = `mailto:techrayo.co.in@gmail.com?subject=${subject}&body=${body}`;
    
    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@techrayos.com',
      link: 'mailto:info@techrayos.com',
      color: 'blue'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9092079755 ',
      link: 'tel:+91 9092079755 ',
      color: 'purple'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'India , Remote',
      link: '#',
      color: 'emerald'
    }

  ];

  const services = [
    'Software Development',
    'Website Design & Development',
    'Digital Marketing',
    'Cloud & DevOps',
    'IT Support',
    'Data Services',
    'Cybersecurity',
    'Product Development',
    'Training & Consulting',
    'Specialized Tech Solutions'
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; gradient: string } } = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', gradient: 'from-blue-600 to-blue-400' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', gradient: 'from-purple-600 to-purple-400' },
      emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', gradient: 'from-emerald-600 to-emerald-400' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-600', gradient: 'from-orange-600 to-orange-400' },
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? Let's discuss your project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => {
                const colors = getColorClasses(info.color);
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center`}>
                      <info.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      {info.link.startsWith('#') ? (
                        <p className="text-gray-600">{info.value}</p>
                      ) : (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
            >
              <h4 className="text-xl font-bold mb-4">Why Choose TECHRAYOS ?</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>2+ years of proven experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>50+ successful projects delivered</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>24/7 support and maintenance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>Cutting-edge technology solutions</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
              <MessageSquare className="w-6 h-6 text-blue-600" />
              <span>Send us a Message</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;















































// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

// const Contact: React.FC = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1
//   });

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     service: '',
//     message: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const text = `
// Hello TECHYORA! 👋

// My Name: ${formData.name}
// Email: ${formData.email}
// Phone: ${formData.phone}
// Company: ${formData.company}
// Interested In: ${formData.service}

// Message:
// ${formData.message}
//     `;

//     const whatsappURL = `https://wa.me/919092079755?text=${encodeURIComponent(text)}`;
//     window.open(whatsappURL, "_blank");

//     setIsSubmitting(false);
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       company: '',
//       service: '',
//       message: ''
//     });
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       title: 'Email',
//       value: 'techyora.co.in@gmail.com',
//       link: 'mailto:techyora.co.in@gmail.com',
//       color: 'blue'
//     },
//     {
//       icon: Phone,
//       title: 'Phone',
//       value: '+91 9092079755',
//       link: 'tel:+919092079755',
//       color: 'purple'
//     },
//     {
//       icon: MapPin,
//       title: 'Location',
//       value: 'India',
//       link: '#',
//       color: 'emerald'
//     }
//   ];

//   const services = [
//     'Software Development',
//     'Website Design & Development',
//     'Digital Marketing',
//     'Cloud & DevOps',
//     'IT Support',
//     'Data Services',
//     'Cybersecurity',
//     'Product Development',
//     'Training & Consulting',
//     'Specialized Tech Solutions'
//   ];

//   const getColorClasses = (color: string) => {
//     const colorMap: { [key: string]: { bg: string; text: string; gradient: string } } = {
//       blue: { bg: 'bg-blue-50', text: 'text-blue-600', gradient: 'from-blue-600 to-blue-400' },
//       purple: { bg: 'bg-purple-50', text: 'text-purple-600', gradient: 'from-purple-600 to-purple-400' },
//       emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', gradient: 'from-emerald-600 to-emerald-400' },
//       orange: { bg: 'bg-orange-50', text: 'text-orange-600', gradient: 'from-orange-600 to-orange-400' },
//     };
//     return colorMap[color] || colorMap.blue;
//   };

//   return (
//     <section id="contact" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Ready to transform your business with cutting-edge technology? Let's discuss your project and create something amazing together.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
//             <div className="space-y-6 mb-12">
//               {contactInfo.map((info, index) => {
//                 const colors = getColorClasses(info.color);
//                 return (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={inView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
//                     className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
//                   >
//                     <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center`}>
//                       <info.icon className={`w-6 h-6 ${colors.text}`} />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900">{info.title}</h4>
//                       {info.link.startsWith('#') ? (
//                         <p className="text-gray-600">{info.value}</p>
//                       ) : (
//                         <a href={info.link} className="text-gray-600 hover:text-blue-600 transition-colors">
//                           {info.value}
//                         </a>
//                       )}
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>

//             {/* Why Choose Us */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
//             >
//               <h4 className="text-xl font-bold mb-4">Why Choose TECHYORA ?</h4>
//               <ul className="space-y-3">
//                 <li className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-white rounded-full" />
//                   <span>2+ years of proven experience</span>
//                 </li>
//                 <li className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-white rounded-full" />
//                   <span>10+ successful projects delivered</span>
//                 </li>
//                 <li className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-white rounded-full" />
//                   <span>24/7 support and maintenance</span>
//                 </li>
//                 <li className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-white rounded-full" />
//                   <span>Cutting-edge technology solutions</span>
//                 </li>
//               </ul>
//             </motion.div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="bg-white rounded-2xl p-8 shadow-lg"
//           >
//             <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
//               <MessageSquare className="w-6 h-6 text-blue-600" />
//               <span>Send us a Message</span>
//             </h3>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Form fields (unchanged) */}
//               {/* ... */}
//               {/* Same as your original code */}
//               {/* Will keep your existing fields, inputs and styles exactly the same */}
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
