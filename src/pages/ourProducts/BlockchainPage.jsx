import React from "react";
import ProductPageLayout from "../../layout/ProductPageLayout";
import { Blocks, Shield, Layers } from "lucide-react";

export default function BlockchainPage() {
  return (
    <ProductPageLayout
      title="Decentralized Blockchain Solutions"
      description="A secure and scalable blockchain framework built for next-generation decentralized applications and smart contract infrastructure."
      image="https://images.pexels.com/photos/6772025/pexels-photo-6772025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=650&dpr=2"
      gradientFrom="blue-500"
      gradientTo="teal-400"
      ctaText="Explore Blockchain"
      features={[
        {
          title: "Smart Contracts",
          text: "Automate agreements and business processes with reliable, tamper-proof smart contracts. Our platform ensures transparency and security, allowing transactions to execute automatically when predefined conditions are met. This reduces operational costs, eliminates intermediaries, and improves trust between parties in any decentralized ecosystem.",
        },
        {
          title: "High Security",
          text: "Security is at the heart of our blockchain infrastructure. All transactions are immutable, traceable, and fully encrypted to protect against fraud and tampering. Decentralization ensures no single point of failure, making your applications more resilient, transparent, and trustworthy for all users and stakeholders.",
        },
        {
          title: "Scalable Framework",
          text: "Our blockchain framework is built for performance and growth. It supports high transaction volumes, quick validation times, and easy integration with existing systems. Whether you're launching decentralized apps or enterprise solutions, our infrastructure ensures speed, stability, and flexibility for future expansion.",
        },
      ]}
      icons={[<Blocks />, <Shield />, <Layers />]}
    />
  );
}
