import React from "react";
import IndustriesLayout from "../../layout/IndustriesLayout";
import { FaRoute, FaMapMarkedAlt, FaTruckMoving } from "react-icons/fa";
import ScrollProgressBar from "../../components/ScrollProgressBar";

export default function Transportation() {
  return (
    <>
      <ScrollProgressBar />
      <IndustriesLayout
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Industries", to: "/industries" },
          { label: "Transportation" },
        ]}
        heading="Transportation"
        title="Logistics and fleet management"
        description="Power your logistics and mobility operations with intelligent transportation technology. Our solutions provide real-time tracking, route optimization, and automated fleet management — designed to increase efficiency, reduce costs, and improve customer experiences across the entire supply chain."
        heroBackground="https://images.pexels.com/photos/1212600/pexels-photo-1212600.jpeg?auto=compress&cs=tinysrgb&w=1600"
        features={[
          {
            icon: <FaRoute />,
            title: "Route Optimization",
            description:
              "Our advanced routing algorithms minimize travel time, cut fuel costs, and improve delivery accuracy. By analyzing traffic patterns, delivery windows, and vehicle capacity in real time, we ensure your fleet runs at maximum efficiency. Drivers receive dynamic updates to avoid delays and meet SLAs on time.",
            media:
              "https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
          {
            icon: <FaMapMarkedAlt />,
            title: "Tracking",
            description:
              "With GPS-powered live tracking, businesses get end-to-end visibility of their shipments. Our platform allows dispatchers and customers to monitor routes, ETAs, and delivery statuses in real time. This improves transparency, enhances accountability, and builds trust with your customers.",
            media:
              "https://images.pexels.com/photos/2569839/pexels-photo-2569839.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
          {
            icon: <FaTruckMoving />,
            title: "Fleet Management",
            description:
              "Our intelligent fleet management system automates maintenance schedules, driver assignments, compliance reporting, and operational insights. With predictive analytics, businesses can reduce downtime, extend vehicle life, and operate their fleets more profitably.",
            media:
              "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
        ]}
        stats={[
          { label: "Avg. Time-to-Launch", value: "5–8 weeks" },
          { label: "Fleet Uptime", value: "99.95%" },
          { label: "Global Coverage", value: "60+ countries" },
        ]}
        faqs={[
          {
            q: "Can I track my entire fleet in real time?",
            a: "Yes, our platform provides live GPS tracking and operational dashboards for complete visibility of your vehicles and shipments.",
          },
          {
            q: "Does this support multi-region logistics?",
            a: "Absolutely. Our system is built to handle multi-region routing, cross-border logistics, and real-time compliance updates.",
          },
          {
            q: "Can I integrate with my existing TMS or ERP?",
            a: "Yes, we offer API integrations with most major TMS, WMS, and ERP platforms for seamless operations.",
          },
        ]}
        ctaText="Request a Transportation Demo"
      />
    </>
  );
}
