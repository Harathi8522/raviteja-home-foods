import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import StorySection from "./components/StorySection";
import ProductSection from "./components/ProductSection";
import FeaturedProducts from "./components/FeaturedProduct";
import AvailableOn from "./components/AvailableOn";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import BannerSection from "./components/BannerSection";
import CategoriesSection from "./components/CategoriesSection";

import CategoryPage from "./components/CategoryPage"; 
import CartPage from "./components/CartPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import ShippingPolicy from "./components/ShippingPolicy";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsPage from "./components/TermsPage";
import WelcomePopup from "./components/WelcomePopup";

function Home() {
  return (
    <>
      <WelcomePopup />
      <HeroSlider />
      <StorySection />
      <BannerSection />
      <CategoriesSection />
      <ProductSection />
      <FeaturedProducts />
    </>
  );
}

function App() {
  return (
    <Router>
      <TopBar />
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:type" element={<CategoryPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<AboutPage />} />

<Route path="/contact" element={<ContactPage />} />

<Route path="/shipping-policy" element={<ShippingPolicy />} />

<Route path="/privacy-policy" element={<PrivacyPolicy />} />

<Route path="/terms" element={<TermsPage />} />
      </Routes>

      <ChatBot />
      <AvailableOn />
      <Footer />
    </Router>
  );
}

export default App;