import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const handleSearchClick = () => {
    const searchValue = document.querySelector(".nav-right input").value;
    console.log("Searching for:", searchValue);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Services</Link>
        <Link to="/">Portfolio</Link>
        <Link to="/">Contact Us</Link>
        
      </div>
      <div className="nav-right">
        <input type="text" placeholder="Search..." />
        <button onClick={handleSearchClick}><FaSearch /></button>
      </div>
    </nav>
  );
}