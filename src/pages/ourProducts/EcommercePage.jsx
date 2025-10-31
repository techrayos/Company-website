import React from "react";
import ProductPageLayout from "../../layout/ProductPageLayout";
import { Store, ShieldCheck, BarChart3 } from "lucide-react";

export default function EcommercePage() {
  return (
    <ProductPageLayout
      title="Modern and Scalable E-Commerce Platform"
      description="A fully responsive and secure e-commerce platform designed to deliver seamless online shopping experiences, robust payment processing, and insightful analytics."
      image="https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=650&dpr=2"
      gradientFrom="blue-500"
      gradientTo="teal-400"
      ctaText="Explore Store"
      features={[
        {
          title: "Custom Storefront",
          text: "Our customizable storefront solution allows businesses to design unique and visually stunning online shops without compromising on performance. With responsive layouts, dynamic product displays, and an intuitive interface, your brand gets the perfect digital presence. Every element is optimized for conversions, ensuring customers enjoy a smooth and memorable shopping experience.",
        },
        {
          title: "Secure Checkout",
          text: "We provide an end-to-end secure checkout system that supports multiple payment options. It ensures each transaction is encrypted, authenticated, and protected against fraud. The streamlined process reduces cart abandonment, boosts buyer confidence, and guarantees a fast, reliable, and safe experience from product selection to final payment confirmation.",
        },
        {
          title: "Powerful Analytics",
          text: "Our built-in analytics dashboard offers real-time insights into customer behavior, product performance, and sales trends. With clear data visualization and detailed reports, you can make informed decisions that drive growth. This allows you to identify opportunities, track campaigns, and improve your business strategies effectively and efficiently.",
        },
      ]}
      icons={[<Store />, <ShieldCheck />, <BarChart3 />]}
    />
  );
}
