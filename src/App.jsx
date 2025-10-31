import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import { Routes, Route, useLocation } from "react-router-dom";
import Contact from "./components/Contact";
import ExpandedIndustries from "./components/ExpandedIndustries";
import Technology from "./components/Technology";
import AllProducts from "./components/AllProducts";
import AdminPanel from "./components/AdminPanel";
import WebDevelopment from "./pages/content/WebDevelopment";
import MobileDevelopment from "./pages/content/MobileDevelopment";
import UxDesign from "./pages/content/UxDesign";
import CloudSolution from "./pages/content/CloudSolution";
import BackendAPI from "./pages/content/BackendAPI";
import EcommerceSolution from "./pages/content/EcommerceSolution";
import BrandAndDevelopmentHero from "./pages/content/BrandDevelopment";
import BrandCaseStudies from "./pages/content/caseStuides/BrandCaseStudies";
import WebCaseStudies from "./pages/content/caseStuides/WebcaseStudies";
import AiAutomation from "./pages/content/AiAutomation";
import AiAutomationCaseStudies from "./pages/content/caseStuides/AiAutomationCaseStudies";
import MobileCaseStudies from "./pages/content/caseStuides/MobileCaseStudies";
import CloudCaseStudies from "./pages/content/caseStuides/CloudCase";
import UxCase from "./pages/content/caseStuides/UxCase";
import BackendCase from "./pages/content/caseStuides/BackendCase";
import EcommerceCase from "./pages/content/caseStuides/EcommerceCase";
import DroneDeliveryPage from "./pages/ourProducts/DroneDeliveryPage";
import AISolutionsPage from "./pages/ourProducts/AISolutionsPage";
import { ScrollToTop } from "./components/ScrollToTop";
import EcommercePage from "./pages/ourProducts/EcommercePage";
import OnDemandPage from "./pages/ourProducts/OnDemandPage";
import RealEstatePage from "./pages/ourProducts/RealEstatePage";
import FintechPage from "./pages/ourProducts/FintechPage";
import GamingPage from "./pages/ourProducts/GamingPage";
import BlockchainPage from "./pages/ourProducts/BlockchainPage";
import HealthCare from "./pages/industries/HealthCare";
import Ecommerce from "./pages/industries/Ecommerce";
import Finance from "./pages/industries/Finance";
import Education from "./pages/industries/Education";
import RealEstate from "./pages/industries/RealEstate";
import Manufacturing from "./pages/industries/Manufacturing";
import Entertainment from "./pages/industries/Entertainment";
import Hospitality from "./pages/industries/Hospitality";
import Transportation from "./pages/industries/Transportation";
import Agriculture from "./pages/industries/Agriculture";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Internship from "./pages/Internship";

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
        >
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/services" element={<Services />} />
              <Route path="/Internship" element={<Internship />} />
              <Route path="/industries" element={<ExpandedIndustries />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/all-products" element={<AllProducts />} />
              {/* Admin */}
              <Route path="/admin" element={<AdminPanel />} />

              {/* Services */}
              <Route path="/web-development" element={<WebDevelopment />} />
              <Route path="/web-case-studies" element={<WebCaseStudies />} />
              <Route
                path="/mobile-development"
                element={<MobileDevelopment />}
              />
              <Route
                path="/mobile-case-studies"
                element={<MobileCaseStudies />}
              />
              <Route path="/uiux-design" element={<UxDesign />} />
              <Route path="/design-case-studies" element={<UxCase />} />
              <Route path="/cloud-solutions" element={<CloudSolution />} />
              <Route
                path="/cloud-case-studies"
                element={<CloudCaseStudies />}
              />
              <Route path="/backend--api" element={<BackendAPI />} />
              <Route path="/backend-case-studies" element={<BackendCase />} />
              <Route
                path="/e-commerce-solutions"
                element={<EcommerceSolution />}
              />
              <Route
                path="/ecommerce-case-studies"
                element={<EcommerceCase />}
              />
              <Route
                path="/brand--development"
                element={<BrandAndDevelopmentHero />}
              />
              <Route
                path="/brand-case-studies"
                element={<BrandCaseStudies />}
              />
              <Route path="/ai--automation" element={<AiAutomation />} />
              <Route
                path="/ai-automation-case-studies"
                element={<AiAutomationCaseStudies />}
              />

              {/* Separate Product */}
              <Route path="/drone-delivery" element={<DroneDeliveryPage />} />
              <Route path="/ai-solutions" element={<AISolutionsPage />} />
              <Route path="/ecommerce" element={<EcommercePage />} />
              <Route path="/on-demand" element={<OnDemandPage />} />
              <Route path="/realestate" element={<RealEstatePage />} />
              <Route path="/fintech" element={<FintechPage />} />
              <Route path="/gaming" element={<GamingPage />} />
              <Route path="/blockchain" element={<BlockchainPage />} />

              {/* Industries */}
              <Route path="/healthcare" element={<HealthCare />} />
              <Route path="/e-commerce" element={<Ecommerce />} />
              <Route path="/finance" element={<Finance />} />
              <Route path="/education" element={<Education />} />
              <Route path="/real-estate" element={<RealEstate />} />
              <Route path="/manufacturing" element={<Manufacturing />} />
              <Route path="/entertainment" element={<Entertainment />} />
              <Route path="/hospitality" element={<Hospitality />} />
              <Route path="/transportation" element={<Transportation />} />
              <Route path="/agriculture" element={<Agriculture />} />

              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route
                path="/terms-and-conditions"
                element={<TermsAndConditions />}
              />
            </Routes>
          </main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
