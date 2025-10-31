import React from "react";
import ProductPageLayout from "../../layout/ProductPageLayout";
import { Gamepad2, Cpu, MessageSquare } from "lucide-react";

export default function GamingPage() {
  return (
    <ProductPageLayout
      title="Immersive Gaming Platform"
      description="A next-gen gaming experience built for speed, stunning visuals, and real-time social interaction — for both casual and pro gamers."
      image="https://images.pexels.com/photos/7915435/pexels-photo-7915435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=650&dpr=2"
      gradientFrom="blue-500"
      gradientTo="teal-400"
      ctaText="Play Now"
      features={[
        {
          title: "Multiplayer Mode",
          text: "Our platform delivers a highly responsive and lag-free multiplayer experience that connects players worldwide. Designed for performance and speed, it supports real-time battles, cooperative missions, and competitive tournaments. A powerful backend ensures stable connections and immersive gameplay for both casual players and professional gamers.",
        },
        {
          title: "3D Graphics",
          text: "Enjoy next-generation visuals with high-quality 3D rendering optimized for all devices. Our graphics engine brings characters, environments, and effects to life with stunning detail. Whether on mobile, console, or desktop, users experience a smooth, visually rich world designed to maximize engagement and excitement.",
        },
        {
          title: "Live Chat",
          text: "Stay connected and build communities with integrated live chat functionality. Players can communicate during gameplay, form teams, and strategize effectively in real time. This feature boosts engagement, fosters friendships, and makes every gaming session more interactive, enjoyable, and social for everyone involved.",
        },
      ]}
      icons={[<Gamepad2 />, <Cpu />, <MessageSquare />]}
    />
  );
}
