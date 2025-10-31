import React from "react";
import IndustriesLayout from "../../layout/IndustriesLayout";
import { FaPlayCircle, FaServer, FaUsers } from "react-icons/fa";
import ScrollProgressBar from "../../components/ScrollProgressBar";

export default function Entertainment() {
  return (
    <>
      <ScrollProgressBar />
      <IndustriesLayout
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Industries", to: "/industries" },
          { label: "Entertainment" },
        ]}
        heading="Entertainment"
        title="Media and content delivery platforms"
        description="Deliver high-performance media streaming, content management, and immersive engagement experiences at scale. Our entertainment technology solutions are designed to optimize content delivery, ensure smooth playback, protect digital rights, and maximize user engagement — empowering media companies to grow with reliability and speed."
        heroBackground="https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1600"
        features={[
          {
            icon: <FaPlayCircle />,
            title: "Streaming",
            description:
              "We build secure, scalable streaming platforms with adaptive bitrate streaming, CDN integration, and global delivery capabilities. Whether it’s live or on-demand content, we ensure ultra-low latency, HD playback, and a seamless viewer experience on every device.",
            media:
              "https://images.pexels.com/photos/5082564/pexels-photo-5082564.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
          {
            icon: <FaServer />,
            title: "Content Management",
            description:
              "Our advanced content management systems give creators and publishers complete control over their media libraries. With AI-powered tagging, version control, DRM integration, and scheduled releases, we streamline production-to-distribution workflows for maximum efficiency.",
            media:
              "https://images.pexels.com/photos/2736135/pexels-photo-2736135.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
          {
            icon: <FaUsers />,
            title: "User Engagement",
            description:
              "Boost audience retention with interactive features such as personalized recommendations, gamified experiences, in-app chat, and social integrations. Our engagement tools are designed to increase session duration and drive user loyalty.",
            media:
              "https://images.pexels.com/photos/5082575/pexels-photo-5082575.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
        ]}
        stats={[
          { label: "Avg. Time-to-Launch", value: "6–9 weeks" },
          { label: "Global Reach", value: "180+ countries" },
          { label: "Streaming Uptime", value: "99.95%" },
        ]}
        faqs={[
          {
            q: "Can your platform handle live streaming?",
            a: "Yes. Our infrastructure supports live and on-demand streaming with adaptive bitrate technology and CDN integration for global scale.",
          },
          {
            q: "Do you support DRM and content protection?",
            a: "Absolutely. We integrate robust DRM solutions to secure your content and prevent unauthorized access.",
          },
          {
            q: "Is the platform customizable?",
            a: "Yes, we offer modular architecture, allowing you to tailor the platform’s UI, features, and integrations to your specific needs.",
          },
        ]}
        ctaText="Request a Demo"
      />
    </>
  );
}
