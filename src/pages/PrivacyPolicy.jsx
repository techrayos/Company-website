import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Database, UserCheck, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-25 px-6 md:px-20 transition-colors duration-500">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <motion.h1
          className="text-4xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Privacy Policy
        </motion.h1>

        <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
          Last Updated: <span className="font-semibold">October 2025</span>
        </p>

        <div className="space-y-10">
          <motion.div variants={fadeIn}>
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <ShieldCheck className="text-blue-500 dark:text-blue-400" /> Overview
            </h2>
            <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
              At <strong>Techrayos</strong>, we value your privacy. This Privacy Policy
              outlines how we collect, use, and safeguard your personal information when you visit our
              website or use our IT consultancy and digital services.
            </p>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <UserCheck className="text-blue-500 dark:text-blue-400" /> Information We Collect
            </h2>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Personal details like name, email address, and phone number.</li>
              <li>Project or inquiry details submitted through our contact forms.</li>
              <li>Usage data such as IP address, browser type, and pages visited.</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <Database className="text-blue-500 dark:text-blue-400" /> How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700 dark:text-gray-300">
              <li>To respond to inquiries and deliver requested services.</li>
              <li>To enhance website performance and user experience.</li>
              <li>To send project updates, newsletters, or service notifications.</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <Lock className="text-blue-500 dark:text-blue-400" /> Data Protection & Security
            </h2>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              We use advanced encryption and secure servers to protect your information.
              Access to your data is limited to authorized personnel only.
            </p>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <Mail className="text-blue-500 dark:text-blue-400" /> Contact Us
            </h2>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              If you have questions about this Privacy Policy, reach us at{" "}
              <a
                href="mailto:info.techrayos@gmail.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                info.techrayos@gmail.com
              </a>
              .
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
