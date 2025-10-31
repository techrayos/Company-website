/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 👈 Important
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "from-blue-500",
    "to-teal-400",
    "from-pink-500",
    "to-purple-500",
    "from-amber-400",
    "to-orange-500",
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shimmer: {
      '0%': { transform: 'translateX(-120%)' },
      '100%': { transform: 'translateX(120%)' },
    },
      },
      animation: {
        gradient: "gradient 6s ease infinite",
        shimmer: "shimmer 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
