import React from "react";
import { SiInstagram, SiX, SiFacebook, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Footer() {
  const iconClasses =
    "w-6 h-6 transition transform duration-300 hover:scale-110 hover:text-blue-600 dark:hover:text-blue-400";

  return (
    <footer className="relative bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-300 pt-20 pb-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex gap-3 items-center mb-4">
            <img src="/logo.png" alt="Techrayos" className="h-10 w-auto" />
            <h2 className="font-bold text-black dark:text-white text-lg">
              Techrayos
            </h2>
          </div>
          <p className="text-sm mb-4">
            Crafting modern digital solutions with innovation and impact.
          </p>
          <div className="relative grid grid-cols-5 md:grid-cols-5 gap-5 w-full">
            <Link to="https://www.facebook.com/TechrayosOfficial">
              <SiFacebook className="w-full h-8 md:w-6 md:h-6 transition transform duration-300 hover:scale-110 hover:text-blue-600 dark:hover:text-blue-400 text-pink-500" />
            </Link>
            <Link to="https://www.instagram.com/techrayos_official/">
              <SiInstagram className="w-full h-8 md:w-6 md:h-6 transition transform duration-300 hover:scale-110 hover:text-blue-600 dark:hover:text-blue-400 text-pink-500" />
            </Link>
            <Link to="https://x.com/Techrayos">
              <SiX className="w-full h-8 md:w-6 md:h-6 transition transform duration-300 hover:scale-110 hover:text-blue-600 dark:hover:text-blue-400 text-pink-500" />
            </Link>
            <Link to="https://www.linkedin.com/company/109456123/admin/dashboard/">
              <SiLinkedin className="w-full h-8 md:w-6 md:h-6 transition transform duration-300 hover:scale-110 hover:text-blue-600 dark:hover:text-blue-400 text-pink-500" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-black dark:text-white">
            Company
          </h3>
          <ul className="space-y-2 text-sm">
            {["About", "Services", "Portfolio", "Technology", "Contact"].map(
              (item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="hover:text-blue-400"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-black dark:text-white">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              {" "}
              <Link
                className="hover:text-blue-600 dark:hover:text-blue-400"
                to="/brand--development"
              >
                Brand & Development
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                className="hover:text-blue-600 dark:hover:text-blue-400"
                to="/web-development"
              >
                Web Development
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                className="hover:text-blue-600 dark:hover:text-blue-400"
                to="/mobile-development"
              >
                Mobile Apps
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                className="hover:text-blue-600 dark:hover:text-blue-400"
                to="/uiux-design"
              >
                UI/UX Design
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                className="hover:text-blue-600 dark:hover:text-blue-400"
                to="/cloud-solutions"
              >
                Cloud Solutions
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                className="hover:text-blue-600 dark:hover:text-blue-400"
                to="/backend--api"
              >
                Backend & API
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                className="hover:text-blue-600 dark:hover:text-blue-400"
                to="/e-commerce-solutions"
              >
                E-commerce solutions
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                className="hover:text-blue-600 dark:hover:text-blue-400"
                to="/ai--automation"
              >
                AI & Automation
              </Link>{" "}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-black dark:text-white">
            Industries
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              {" "}
              <Link
                className="hover:text-blue-600 dark:hover:text-blue-400"
                to="/healthcare"
              >
                Healthcare
              </Link>
            </li>
            <li>
              {" "}
              <Link
                className="hover:text-blue-600 dark:hover:text-blue-400"
                to="/e-commerce"
              >
                E-commerce
              </Link>
            </li>
            <li>
              {" "}
              <Link
                className="hover:text-blue-600 dark:hover:text-blue-400"
                to="/finance"
              >
                Finance
              </Link>
            </li>
            <li>
              {" "}
              <Link
                className="hover:text-blue-600 dark:hover:text-blue-400"
                to="/real-estate"
              >
                Real Estate
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                className="hover:text-blue-600 dark:hover:text-blue-400"
                to="/manufacturing"
              >
                Manufacturing
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                className="hover:text-blue-600 dark:hover:text-blue-400"
                to="/education"
              >
                Education
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                className="hover:text-blue-600 dark:hover:text-blue-400"
                to="/entertainment"
              >
                Entertainment
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                className="hover:text-blue-600 dark:hover:text-blue-400"
                to="/hospitality"
              >
                Hospitality
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                className="hover:text-blue-600 dark:hover:text-blue-400"
                to="/transportation"
              >
                Transportation
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                className="hover:text-blue-600 dark:hover:text-blue-400"
                to="/agriculture"
              >
                Agriculture
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 text-center text-gray-800 dark:text-gray-100 text-sm mt-10 border-t border-gray-800 pt-4 py-10 md:py-0 md:pt-5 md:px-20 flex flex-col md:flex-row justify-between items-center">
        <div></div>
        © 2025 Techrayos. All rights reserved.
        <div className="flex gap-5">
          <Link to="/privacy-policy" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</Link>
          <Link to="/terms-and-conditions" className="hover:text-blue-600 dark:hover:text-blue-400">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
