import React from "react";
import ProductPageLayout from "../../layout/ProductPageLayout";
import { Truck, MapPin, Zap } from "lucide-react";

export default function OnDemandPage() {
  return (
    <ProductPageLayout
      title="On-Demand Dispatch and Logistics Platform"
      description="A next-generation platform for real-time dispatch and logistics management with seamless tracking and quick response capabilities."
      image="https://images.pexels.com/photos/7709062/pexels-photo-7709062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=650&dpr=2"
      gradientFrom="blue-600"
      gradientTo="teal-400"
      ctaText="Try OnDemand"
      features={[
        {
          title: "Fleet Management",
          text: "Our platform provides a centralized solution for managing your entire fleet efficiently. From vehicle status tracking to route optimization and maintenance alerts, everything is automated to improve delivery speed and reliability. Real-time insights help businesses reduce downtime, improve scheduling, and deliver exceptional service to their customers.",
        },
        {
          title: "Live Tracking",
          text: "Empower your customers and team with accurate live tracking capabilities. Every vehicle and delivery can be monitored on a real-time map, ensuring transparency and trust. This feature allows for faster decision-making, better communication, and quick response to route changes or delivery updates, enhancing customer satisfaction significantly.",
        },
        {
          title: "Fast Response",
          text: "Our on-demand dispatch system is built for speed and accuracy. With intelligent routing, automated task allocation, and instant notifications, your team can respond faster to service requests. This ensures timely pickups, optimized delivery schedules, and higher efficiency, giving your business a competitive edge in fast-moving industries.",
        },
      ]}
      icons={[<Truck />, <MapPin />, <Zap />]}
    />
  );
}
