import React from "react";
import ProductPageLayout from "../../layout/ProductPageLayout";
import { Building2, Camera, Users } from "lucide-react";

export default function RealEstatePage() {
  return (
    <ProductPageLayout
      title="Digital Real Estate Solutions"
      description="A complete digital solution for property management — making buying, selling, and exploring properties smarter and faster."
      image="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=650&dpr=2"
      gradientFrom="blue-600"
      gradientTo="teal-400"
      ctaText="View Properties"
      features={[
        {
          title: "Property Listings",
          text: "Easily list and manage properties with a clean, user-friendly interface designed for speed and accuracy. Each listing can include high-quality images, descriptions, and pricing details, ensuring maximum visibility and engagement. The structured layout helps potential buyers explore properties effortlessly and make informed decisions faster.",
        },
        {
          title: "Virtual Tours",
          text: "Bring properties to life with immersive virtual tours that give buyers a real feel of spaces without physical visits. This interactive feature saves time, increases reach, and builds trust. With 360° views, realistic walkthroughs, and smooth navigation, you create a professional experience that drives genuine leads.",
        },
        {
          title: "Lead Management",
          text: "Manage inquiries and buyer data efficiently through an integrated lead management system. It organizes and prioritizes leads, ensuring your sales team focuses on high-potential clients. Automated follow-ups, reminders, and analytics help streamline the sales funnel and convert interest into actual deals faster and smarter.",
        },
      ]}
      icons={[<Building2 />, <Camera />, <Users />]}
    />
  );
}
