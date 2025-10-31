import React from "react";
import ProductPageLayout from "../../layout/ProductPageLayout";
import { Clock, Package, ShieldCheck, Leaf } from "lucide-react";

export default function DroneDeliveryPage() {
  return (
    <ProductPageLayout
      title="Seamless Drone Delivery Experience in Expo City, Dubai"
      description="Step into the future of dining with Drone Delivery — a next-generation food ordering platform designed exclusively for Expo City Dubai. We blend cutting-edge drone technology with gourmet experiences for fast, eco-friendly deliveries."
      image="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=650&dpr=2"
      gradientFrom="blue-500"
      gradientTo="teal-400"
      ctaText="Order Now"
      features={[
        {
          title: "Ultra-Fast Delivery",
          text: "Experience a revolutionary delivery system designed to bring your favorite meals straight to your location in record time. Our cutting-edge drone technology eliminates traditional delays, bypasses traffic, and reduces operational bottlenecks. Whether it's lunch at the office or dinner at home, your order arrives fresh, hot, and right on schedule.",
        },
        {
          title: "Real-Time Tracking",
          text: "Stay informed every second with precise, real-time tracking of your drone delivery. From the moment your order is dispatched to the moment it lands, you can follow its entire journey on an interactive map. This advanced visibility not only builds trust but also enhances the overall delivery experience.",
        },
        {
          title: "Secure & Contactless",
          text: "Safety and hygiene are top priorities. Our drone delivery system ensures fully contactless drop-offs, minimizing human interaction while maintaining strict security protocols. Every delivery is encrypted, authenticated, and monitored, giving customers the confidence that their order will arrive safely and without unnecessary exposure or risk.",
        },
        {
          title: "Eco-Friendly",
          text: "We’re committed to sustainability. By using electric drones that operate with minimal carbon emissions, we reduce the environmental impact of traditional delivery methods. This green approach helps keep the air cleaner, supports smart city goals, and contributes to a more sustainable future for urban logistics.",
        },
      ]}
      icons={[<Clock />, <Package />, <ShieldCheck />, <Leaf />]}
    />
  );
}
