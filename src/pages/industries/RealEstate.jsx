import React from "react";
import IndustriesLayout from "../../layout/IndustriesLayout";
import { FaHome, FaCamera, FaUsers } from "react-icons/fa";
import ScrollProgressBar from "../../components/ScrollProgressBar";

export default function RealEstate() {
  return (
    <>
      <ScrollProgressBar />
      <IndustriesLayout
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Industries", to: "/industries" },
          { label: "Real Estate" },
        ]}
        heading="Real Estate"
        title="Property management and listing systems"
        description="Revolutionize real estate with technology that brings transparency, trust, and speed to property management, listings, and sales."
        heroBackground="https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1600"
        features={[
          {
            icon: <FaHome />,
            title: "Property Listings",
            description:
              "We build modern, searchable property listing platforms with advanced filtering, geolocation, and instant booking capabilities.",
            media:
              "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
          {
            icon: <FaCamera />,
            title: "Virtual Tours",
            description:
              "Immersive 3D virtual tours let buyers explore properties from anywhere. Integrated AR/VR features enhance the decision-making process.",
            media:
              "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
          {
            icon: <FaUsers />,
            title: "CRM",
            description:
              "Our real estate CRM automates lead tracking, follow-ups, and pipeline management to boost agent productivity.",
            media:
              "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
        ]}
        stats={[
          { label: "Avg. Time-to-Launch", value: "5–8 weeks" },
          { label: "Uptime SLA", value: "99.9%" },
          { label: "Properties Managed", value: "10K+" },
        ]}
        faqs={[
          {
            q: "Can we host virtual property tours?",
            a: "Yes, our platform fully supports 360° tours, AR, and VR integrations.",
          },
          {
            q: "Is CRM integration available?",
            a: "Yes, we offer built-in CRM as well as third-party integrations.",
          },
        ]}
        ctaText="Book a Real Estate Demo"
      />
    </>
  );
}
