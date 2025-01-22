import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Set default to light mode (false)

  // Apply dark mode to body on initial load
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  // Toggle menu visibility on hamburger click
  const handleHamburgerClick = () => {
    setMenuActive(!menuActive);
  };

  // Close the menu when close button is clicked
  const handleCloseMenu = () => {
    setMenuActive(false);
  };

  // Toggle dark mode
  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className={`navbar ${isDarkMode ? "dark" : ""}`}>
      <div className="logo">Travel Tours</div>

      {/* Dark Mode Button with Sun/Moon Emojis */}
      <button className="dark-mode-btn" onClick={handleDarkModeToggle}>
        {isDarkMode ? "🌙" : "🌞"} {/* Switch between sun and moon emojis */}
      </button>

      {/* Hamburger Icon */}
      <div className={`hamburger ${menuActive ? "active" : ""}`} onClick={handleHamburgerClick}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuActive ? "active" : ""}`}>
        <button className="close-btn" onClick={handleCloseMenu}>x</button>
        <li><a href="/">Home</a></li>
        <li><a href="/tour">Tour</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/admin">Admin Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
