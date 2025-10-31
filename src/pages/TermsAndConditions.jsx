import React from "react";
import { motion } from "framer-motion";
import { FileText, Briefcase, Shield, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function TermsAndConditions() {
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
          Terms & Conditions
        </motion.h1>

        <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
          Last Updated: <span className="font-semibold">October 2025</span>
        </p>

        <div className="space-y-10">
          <motion.div variants={fadeIn}>
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FileText className="text-blue-500 dark:text-blue-400" /> Agreement Overview
            </h2>
            <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
              By accessing or using <strong>Techrayos</strong>’ website or services, you agree
              to comply with these Terms and Conditions. Please read them carefully before engaging with us.
            </p>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <Briefcase className="text-blue-500 dark:text-blue-400" /> Service Terms
            </h2>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Projects are executed based on agreed proposals and timelines.</li>
              <li>Clients are responsible for providing required materials promptly.</li>
              <li>Payments are subject to agreed milestones and are non-refundable once work begins.</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <Shield className="text-blue-500 dark:text-blue-400" /> Intellectual Property
            </h2>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              All content, designs, and code produced by Techrayos remain our intellectual property
              until full payment and project completion. Unauthorized use or duplication is prohibited.
            </p>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <AlertTriangle className="text-blue-500 dark:text-blue-400" /> Limitation of Liability
            </h2>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              Techrayos is not liable for any indirect or consequential damages arising from
              the use of our website or services. We ensure all deliverables meet professional
              standards but cannot guarantee uninterrupted availability.
            </p>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <CheckCircle2 className="text-blue-500 dark:text-blue-400" /> Acceptance of Terms
            </h2>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              By using our website or services, you acknowledge that you have read, understood,
              and agreed to these Terms and Conditions.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
