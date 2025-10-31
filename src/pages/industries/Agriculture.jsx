import React from "react";
import IndustriesLayout from "../../layout/IndustriesLayout";
import { FaSeedling, FaCloudSun, FaStore } from "react-icons/fa";
import ScrollProgressBar from "../../components/ScrollProgressBar";

export default function Agriculture() {
  return (
    <>
      <ScrollProgressBar />
      <IndustriesLayout
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Industries", to: "/industries" },
          { label: "Agriculture" },
        ]}
        heading="Agriculture"
        title="Smart farming and agritech solutions"
        description="Empower modern agriculture with precision farming, intelligent crop monitoring, and data-driven decision-making. Our agritech solutions help farmers and businesses optimize yield, reduce operational costs, and build sustainable, future-ready ecosystems. From field to market, we enable a smarter, more connected agricultural value chain."
        heroBackground="https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1600"
        features={[
          {
            icon: <FaSeedling />,
            title: "Crop Monitoring",
            description:
              "Leverage advanced IoT sensors, satellite imagery, and AI-driven analytics to monitor crop health in real time. Our platform helps farmers detect stress early, optimize irrigation, and make data-backed decisions that improve yield and reduce resource wastage. Precision farming has never been this easy.",
            media:
              "https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
          {
            icon: <FaCloudSun />,
            title: "Weather Data",
            description:
              "Access hyperlocal weather forecasts, soil moisture data, and seasonal patterns directly through our platform. By combining AI and meteorological data, farmers can plan planting schedules, manage risks, and protect their crops from unpredictable climate conditions — boosting productivity and resilience.",
            media:
              "https://images.pexels.com/photos/15223/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600",
          },
          {
            icon: <FaStore />,
            title: "Marketplace",
            description:
              "Our integrated digital marketplace connects farmers with buyers, suppliers, and partners directly. With transparent pricing, logistics support, and secure payments, we eliminate middlemen, increase profitability, and create opportunities for fair trade and faster market access.",
            media:
              "https://images.pexels.com/photos/296230/pexels-photo-296230.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
        ]}
        stats={[
          { label: "Avg. Time-to-Launch", value: "6–8 weeks" },
          { label: "Smart Farms Enabled", value: "2000+" },
          { label: "Forecast Accuracy", value: "95%" },
        ]}
        faqs={[
          {
            q: "How does crop monitoring work?",
            a: "We use a combination of IoT sensors, satellite imagery, and AI algorithms to track crop health in real time and provide actionable insights.",
          },
          {
            q: "Can farmers access data from mobile devices?",
            a: "Yes, our platform is fully mobile-responsive and works seamlessly across smartphones, tablets, and desktops.",
          },
          {
            q: "Is the marketplace limited to certain crops?",
            a: "No. Our marketplace supports a wide range of crops and agricultural products, and can be customized based on your region and supply chain.",
          },
        ]}
        ctaText="Request an Agritech Demo"
      />
    </>
  );
}
