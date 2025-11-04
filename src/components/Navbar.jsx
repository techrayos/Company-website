import { Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
  { name: "Our Works", path: "/our-works" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Internship", path: "/internship" }
];


  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/80 shadow-md backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto px-4 sm:px-6 lg:px-32 shadow-2xl">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center space-x-3 cursor-pointer">
            <img src="/logo.png" alt="Techrayos" className="h-10 w-auto" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              Techrayos
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6 text-gray-800 dark:text-gray-200 font-medium">
            {
              navItems.map((item, index) => (
            <NavLink key={index} to={item.path} className={({ isActive }) =>
                `nav-link ${
                  isActive ? "active" : ""
                } text-gray-800 dark:text-gray-200 hover:text-blue-600`
              }>
              {item.name}
            </NavLink>
        ))}
            <NavLink
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
            >
              Get in Touch
            </NavLink>
          </div>

          <button
            className="md:hidden text-gray-800 dark:text-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="relative md:hidden flex flex-col space-y-3 px-4 py-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg border-t dark:border-gray-700">
            {["our-works", "services", "industries", "about","internship"].map((k) => (
              <Link
                key={k}
                to={`/${k}`}
                className="text-left py-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 cursor-pointer"
              >
                {k[0].toUpperCase() + k.slice(1)}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-blue-700 absolute -bottom-3 left-4 text-white px-6 py-2 rounded-full max-w-1/2 mx-auto my-5 cursor-pointer"
            >
              Get in Touch
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

