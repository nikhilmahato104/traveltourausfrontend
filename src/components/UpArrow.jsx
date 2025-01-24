import React, { useState, useEffect } from "react";
import "./UpArrow.css"; // We'll style the button here

const UpArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detect when user scrolls
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true); // Show button if scrolled past 100vh
      } else {
        setIsVisible(false); // Hide button if back at top
      }
    };

    // Add event listener on scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <div>
      {isVisible && (
        <button className="up-arrow-btn" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
};

export default UpArrow;
