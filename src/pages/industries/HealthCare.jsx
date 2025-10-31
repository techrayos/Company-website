import React from "react";
import IndustriesLayout from "../../layout/IndustriesLayout";
import { FaUserMd, FaClinicMedical, FaNotesMedical } from "react-icons/fa";
import ScrollProgressBar from "../../components/ScrollProgressBar";

export default function Healthcare() {
  return (
    <>
      <ScrollProgressBar />
      <IndustriesLayout
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Industries", to: "/industries" },
          { label: "Healthcare" },
        ]}
        heading="Healthcare"
        title="Digital solutions for modern healthcare"
        description="Deliver efficient, patient-focused healthcare services with secure, smart digital solutions. Our platforms support telemedicine, patient management, and digital health records with regulatory compliance."
        heroBackground="https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1600"
        features={[
          {
            icon: <FaUserMd />,
            title: "Telemedicine",
            description:
              "Our telemedicine solutions enable remote consultations through secure, high-definition video calls. Features like e-prescriptions, patient records, and real-time availability make healthcare more accessible and efficient.",
            media:
              "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
          {
            icon: <FaClinicMedical />,
            title: "Patient Management",
            description:
              "Centralize appointments, profiles, and care plans with our patient management systems. Automations and smart scheduling reduce administrative work and improve patient engagement.",
            media:
              "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
          {
            icon: <FaNotesMedical />,
            title: "Health Records",
            description:
              "Secure and encrypted digital health records allow doctors and patients to access accurate medical histories instantly. Built for compliance with HIPAA and GDPR standards.",
            media:
              "https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
        ]}
        stats={[
          { label: "Avg. Time-to-Launch", value: "6–10 weeks" },
          { label: "Uptime SLA", value: "99.9%" },
          { label: "Compliance", value: "HIPAA/GDPR" },
        ]}
        faqs={[
          {
            q: "Is your platform HIPAA compliant?",
            a: "Yes. Our solutions meet HIPAA and GDPR regulations to ensure patient data protection and security.",
          },
          {
            q: "Can it integrate with existing hospital systems?",
            a: "Yes, we offer full interoperability with EMR/HIS systems through secure APIs.",
          },
          {
            q: "Is telemedicine scalable?",
            a: "Absolutely. Our platform is designed to support thousands of concurrent users with minimal latency.",
          },
        ]}
        ctaText="Request a Healthcare Demo"
      />
    </>
  );
}
