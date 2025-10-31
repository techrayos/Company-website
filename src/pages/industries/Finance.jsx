import React from "react";
import IndustriesLayout from "../../layout/IndustriesLayout";
import { FaUniversity, FaCreditCard, FaChartLine } from "react-icons/fa";
import ScrollProgressBar from "../../components/ScrollProgressBar";

export default function Finance() {
  return (
    <>
      <ScrollProgressBar />
      <IndustriesLayout
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Industries", to: "/industries" },
          { label: "Finance" },
        ]}
        heading="Finance"
        title="Secure financial technology solutions"
        description="Empower your financial operations with scalable, secure, and future-ready fintech solutions. We design platforms that combine speed, trust, and compliance — driving growth for modern financial institutions."
        heroBackground="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1600"
        features={[
          {
            icon: <FaUniversity />,
            title: "Banking Apps",
            description:
              "Our robust banking app solutions offer seamless digital experiences for customers. With real-time transaction tracking, secure authentication, and personalized dashboards, we build platforms that foster trust and engagement while meeting strict financial regulations.",
            media:
              "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
          {
            icon: <FaCreditCard />,
            title: "Payment Processing",
            description:
              "We provide secure, high-performance payment processing solutions supporting global currencies and multiple gateways. With PCI-DSS compliance, fraud detection, and lightning-fast transactions, we ensure every payment is safe and frictionless.",
            media:
              "https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
          {
            icon: <FaChartLine />,
            title: "Analytics",
            description:
              "Gain deep insights with advanced financial analytics. Our AI-powered dashboards and real-time reports empower institutions to identify trends, detect anomalies, and make smarter investment and risk decisions.",
            media:
              "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
        ]}
        stats={[
          { label: "Avg. Time-to-Launch", value: "6–10 weeks" },
          { label: "Uptime SLA", value: "99.95%" },
          { label: "Compliance", value: "PCI-DSS, GDPR" },
        ]}
        faqs={[
          {
            q: "Is your platform secure?",
            a: "Yes. We follow industry best practices, including encryption, tokenization, and continuous monitoring for complete security.",
          },
          {
            q: "Can you integrate with existing banking systems?",
            a: "Absolutely. Our team specializes in building APIs and adapters to connect with core banking and fintech platforms.",
          },
          {
            q: "Do you offer custom features?",
            a: "Yes, we tailor features to your specific business needs and compliance requirements.",
          },
        ]}
        ctaText="Get a Finance Demo"
      />
    </>
  );
}
