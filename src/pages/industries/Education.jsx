import React from "react";
import IndustriesLayout from "../../layout/IndustriesLayout";
import { FaChalkboardTeacher, FaVideo, FaClipboardList } from "react-icons/fa";
import ScrollProgressBar from "../../components/ScrollProgressBar";

export default function Education() {
  return (
    <>
      <ScrollProgressBar />
      <IndustriesLayout
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Industries", to: "/industries" },
          { label: "Education" },
        ]}
        heading="Education"
        title="Interactive learning platforms"
        description="Empower institutions and learners with innovative, interactive education technology. From LMS to live classes, our solutions enhance learning experiences."
        heroBackground="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1600"
        features={[
          {
            icon: <FaChalkboardTeacher />,
            title: "LMS",
            description:
             "Our LMS solutions enable interactive course delivery, progress tracking, multimedia integration, and student engagement tools. Built for schools, universities, and corporate learning environments.",
            media:
              "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
          {
            icon: <FaVideo />,
            title: "Video Conferencing",
            description:
            "We provide secure, high-quality video conferencing with breakout rooms, real-time whiteboards, attendance tracking, and AI transcription to create connected learning spaces.",
            media:
              "https://images.pexels.com/photos/4145192/pexels-photo-4145192.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
          {
            icon: <FaClipboardList />,
            title: "Assessment Tools",
            description:
             "Create and evaluate assessments with auto-grading, instant feedback, analytics dashboards, and adaptive testing for personalized learning journeys.",
            media:
              "https://images.pexels.com/photos/4144099/pexels-photo-4144099.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
        ]}
        stats={[
          { label: "Avg. Time-to-Launch", value: "4–8 weeks" },
          { label: "Uptime SLA", value: "99.8%" },
          { label: "Institutions Served", value: "250+" },
        ]}
        faqs={[
          {
            q: "Can it integrate with existing LMS?",
            a: "Yes, our system is modular and integrates with most LMS platforms and tools.",
          },
          {
            q: "Is it mobile friendly?",
            a: "Yes, our platform is fully responsive and optimized for all screen sizes.",
          },
          {
            q: "Do you offer real-time analytics?",
            a: "Yes, educators can access dashboards and reports for better decision-making.",
          },
        ]}
        ctaText="Request an Education Demo"
      />
    </>
  );
}
