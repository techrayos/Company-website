import React from "react";
import ProductPageLayout from "../../layout/ProductPageLayout";
import { Wallet, CreditCard, Lock } from "lucide-react";

export default function FintechPage() {
  return (
    <ProductPageLayout
      title="Secure Digital Payment and Finance Platform"
      description="Empowering businesses with a secure, scalable, and flexible fintech solution that streamlines payment processes and protects user data."
      image="https://images.pexels.com/photos/4968634/pexels-photo-4968634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=650&dpr=2"
      gradientFrom="gray-200"
      gradientTo="teal-400"
      ctaText="Try Fintech"
      features={[
        {
          title: "Digital Wallet",
          text: "Our advanced digital wallet is designed to make every transaction smooth, fast, and secure. With a user-friendly interface, instant balance updates, and support for multiple currencies, users can store, send, and receive funds effortlessly. Enhanced with two-factor authentication, it ensures complete control and safety of your digital assets.",
        },
        {
          title: "Payment Gateway",
          text: "We provide a powerful and flexible payment gateway that integrates seamlessly with your platform. It supports multiple payment methods including cards, UPI, and net banking, ensuring smooth checkout experiences. Built-in fraud detection, instant transaction confirmations, and advanced encryption create a secure and reliable environment for both businesses and customers.",
        },
        {
          title: "Data Security",
          text: "Security is the foundation of our fintech infrastructure. Every transaction is protected with end-to-end encryption and advanced monitoring to prevent unauthorized access or fraud. We follow international compliance standards and real-time threat detection to safeguard sensitive information, giving users confidence that their financial data is always protected.",
        },
      ]}
      icons={[<Wallet />, <CreditCard />, <Lock />]}
    />
  );
}
