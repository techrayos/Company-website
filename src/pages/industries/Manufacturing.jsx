import React from "react";
import IndustriesLayout from "../../layout/IndustriesLayout";
import { FaIndustry, FaTruck, FaClipboardCheck } from "react-icons/fa";
import ScrollProgressBar from "../../components/ScrollProgressBar";

export default function Manufacturing() {
  return (
    <>
      <ScrollProgressBar />
      <IndustriesLayout
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Industries", to: "/industries" },
          { label: "Manufacturing" },
        ]}
        heading="Manufacturing"
        title="Industry 4.0 and automation solutions"
        description="Empower manufacturing with real-time automation, IoT integration, and smart quality control — built for efficiency and scalability."
        heroBackground="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1600"
        features={[
          {
            icon: <FaIndustry />,
            title: "IoT Integration",
            description:
              "Connect machines, systems, and people with real-time IoT integrations. Our solutions enable predictive maintenance and smart factory operations.",
            media:
              "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
          {
            icon: <FaTruck />,
            title: "Supply Chain",
            description:
              "We streamline your supply chain with live tracking, automated workflows, and intelligent reporting for maximum efficiency.",
            media:
              "https://images.pexels.com/photos/4481532/pexels-photo-4481532.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
          {
            icon: <FaClipboardCheck />,
            title: "Quality Control",
            description:
              "Leverage automation and real-time data insights to improve production quality and reduce error rates across facilities.",
            media:
              "https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
        ]}
        ctaText="Explore Manufacturing Solutions"
      />
    </>
  );
}
