
import React from "react";
import Banner from "./components/Banner.jsx";
import Navbar from "./components/Layouts/Navbar.jsx";
import Footer from "./components/Layouts/Footer.jsx";
import Home from './Pages/file.jsx'; 



import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contact from "./pages/Contact.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div>
      <Banner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
