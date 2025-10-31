import React from "react";
import IndustriesLayout from "../../layout/IndustriesLayout";
import { FaShoppingCart, FaCreditCard, FaWarehouse } from "react-icons/fa";
import ScrollProgressBar from "../../components/ScrollProgressBar";

export default function ECommerce() {
  return (
    <>
      {/* 🧭 Scroll Progress Bar */}
      <ScrollProgressBar />

      <IndustriesLayout
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Industries", to: "/industries" },
          { label: "E-Commerce" },
        ]}
        heading="E-Commerce"
        title="Scalable online retail platforms"
        description="Accelerate your online business with cutting-edge e-commerce solutions engineered for growth, security, and performance. From personalized shopping experiences to secure payments and intelligent inventory control, we create platforms designed to convert visitors into loyal customers."
        heroBackground="https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=1600"
        features={[
          {
            icon: <FaShoppingCart />,
            title: "Shopping Cart",
            description:
              "Our intelligent shopping cart solutions deliver seamless, conversion-optimized checkout experiences. Dynamic pricing, discount codes, abandoned cart recovery, and multi-step checkout reduce friction and maximize sales. Real-time inventory syncing and responsive UI ensure customers never face errors or stock issues during peak traffic.",
            media:
              "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
          {
            icon: <FaCreditCard />,
            title: "Payment Integration",
            description:
              "We enable secure, fast, and frictionless transactions through multi-gateway payment integrations. Our solution supports global and local currencies, wallet payments, fraud detection, and PCI-DSS compliance. Customers enjoy a smooth checkout while businesses gain reliability, trust, and conversion-boosting payment speed.",
            media:
              "https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
          {
            icon: <FaWarehouse />,
            title: "Inventory Management",
            description:
              "We provide advanced inventory management with real-time stock updates, smart restock alerts, and warehouse integration. Automated stock allocation, low-inventory notifications, and intuitive dashboards ensure you stay in control even during high-demand campaigns and large-scale operations.",
            media:
              "https://images.pexels.com/photos/4481258/pexels-photo-4481258.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
        ]}
        stats={[
          { label: "Avg. Time-to-Launch", value: "5–8 weeks" },
          { label: "Uptime SLA", value: "99.9%" },
          { label: "Transactions Secured", value: "1M+" },
        ]}
        faqs={[
          {
            q: "Do you support multiple currencies?",
            a: "Yes, we offer full multi-currency support with real-time currency conversion, ensuring smooth international sales without extra integration steps.",
          },
          {
            q: "Is your payment solution PCI compliant?",
            a: "Absolutely. We strictly adhere to PCI DSS standards, use tokenization, and apply advanced fraud prevention tools to keep transactions secure.",
          },
          {
            q: "Can you integrate with Shopify / WooCommerce?",
            a: "Yes, we support major e-commerce platforms and can also build custom headless commerce experiences for maximum flexibility and performance.",
          },
        ]}
        ctaText="Request a Demo"
      />
    </>
  );
}
