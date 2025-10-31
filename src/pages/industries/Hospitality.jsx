import React from "react";
import IndustriesLayout from "../../layout/IndustriesLayout";
import { FaConciergeBell, FaHotel, FaStar } from "react-icons/fa";
import ScrollProgressBar from "../../components/ScrollProgressBar";

export default function Hospitality() {
  return (
    <>
      <ScrollProgressBar />
      <IndustriesLayout
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Industries", to: "/industries" },
          { label: "Hospitality" },
        ]}
        heading="Hospitality"
        title="Guest management and booking systems"
        description="Elevate your hospitality business with smart digital booking, guest experience, and feedback solutions designed for seamless operations. Our hospitality platforms empower hotels, resorts, and service providers to offer personalized experiences, simplify reservations, and boost brand loyalty through modern, secure, and scalable technology."
        heroBackground="https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1600"
        features={[
          {
            icon: <FaHotel />,
            title: "Reservations",
            description:
              "Our smart reservation systems allow guests to book rooms and services in real time with secure payments and instant confirmation. Integrated calendar management, dynamic pricing, and automated availability updates reduce manual effort and boost occupancy rates across all channels.",
            media:
              "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
          {
            icon: <FaConciergeBell />,
            title: "Guest Services",
            description:
              "Enhance guest satisfaction with personalized digital concierge experiences. From room service to special requests, our platforms streamline communication between staff and guests, ensuring fast response times and premium service delivery.",
            media:
              "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
          {
            icon: <FaStar />,
            title: "Reviews",
            description:
              "Capture guest feedback through automated review prompts, satisfaction surveys, and rating systems. Our smart analytics tools help you track sentiment, identify improvement areas, and showcase positive testimonials to attract more customers.",
            media:
              "https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600",
          },
        ]}
        stats={[
          { label: "Avg. Time-to-Launch", value: "6–10 weeks" },
          { label: "Booking Uptime", value: "99.9%" },
          { label: "Global Properties", value: "5000+" },
        ]}
        faqs={[
          {
            q: "Can this system integrate with OTA platforms?",
            a: "Yes. We integrate seamlessly with popular OTAs and booking engines, ensuring real-time synchronization of availability and pricing.",
          },
          {
            q: "Can guest services be customized?",
            a: "Absolutely. Our platform allows property owners to personalize every guest interaction through custom workflows and service modules.",
          },
          {
            q: "Do you support multi-property management?",
            a: "Yes, the platform supports centralized management for multiple properties, enabling real-time monitoring and reporting.",
          },
        ]}
        ctaText="Request a Hospitality Demo"
      />
    </>
  );
}
