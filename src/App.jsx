
import React from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Layouts/Navbar";
import Footer from "./components/Layouts/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
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
