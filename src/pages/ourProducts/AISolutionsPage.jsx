import React from "react";
import { Cpu, BarChart3, Sparkles, Lock } from "lucide-react";
import ProductPageLayout from "../../layout/ProductPageLayout";

export default function AISolutionsPage() {
  return (
    <ProductPageLayout
      title="Smart AI Solutions to Power Your Business"
      description="Welcome to AI Solutions — a platform designed to optimize operations through automation, predictive analytics, and intelligent decision-making. Empower your business with next-gen AI."
      image="https://images.pexels.com/photos/5473951/pexels-photo-5473951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=650&dpr=2"
      gradientFrom="blue-500"
      gradientTo="teal-400"
      ctaText="Get Started"
      features={[
        {
          title: "AI Workflow Automation",
          text: "Our AI workflow engine is built to streamline and automate complex business processes. It intelligently analyzes patterns, identifies repetitive tasks, and executes them with unmatched accuracy and speed. This eliminates human errors, saves valuable time, and allows your team to focus on strategic decision-making instead of routine operations.",
        },
        {
          title: "Predictive Analytics",
          text: "Unlock the power of foresight with predictive analytics. Our AI models process large volumes of real-time and historical data to forecast trends, customer behavior, and potential risks. With these accurate predictions, businesses can make smarter decisions, optimize operations, and gain a competitive advantage in fast-moving markets.",
        },
        {
          title: "Smart Insights",
          text: "Transform raw data into actionable intelligence. Our AI platform extracts meaningful insights from complex datasets, helping you understand patterns that might otherwise go unnoticed. Interactive dashboards, detailed reports, and automated alerts give you the clarity and confidence to make decisions that drive real business growth.",
        },
      ]}
      icons={[<Cpu />, <BarChart3 />, <Sparkles />, <Lock />]}
    />
  );
}
