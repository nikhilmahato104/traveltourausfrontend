import React, { useState, useEffect } from "react";
import Skeleton from "./Skeleton";

const Heading = () => {
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Detect and update system-level dark mode preference
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(darkModeMediaQuery.matches); // Set initial dark mode state

    const handleDarkModeChange = (e) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener("change", handleDarkModeChange);

    return () => darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
  }, []);

  // Dynamic styles
  const dynamicStyles = {
    container: {
      textAlign: "center",
      margin: "0rem 0",
      color: isDarkMode ? "#ffffff" : "#000000", // Adjust text color based on mode
      fontFamily: "'Poppins', sans-serif", // Modern font
      
    },
    heading: {
      fontSize: "3rem",
      fontWeight: "700",
      textShadow: isDarkMode
        ? "0px 4px 6px rgba(0, 0, 0, 0.8)" // Subtle shadow for dark mode
        : "0px 4px 6px rgba(255, 255, 255, 0.6)", // Subtle shadow for light mode
      transition: "color 0.3s ease, text-shadow 0.3s ease", // Smooth transition
    },
    paragraph: {
      fontSize: "1.5rem",
      color: isDarkMode ? "#d3d3d3" : "#555555", // Subtle secondary color
      textShadow: isDarkMode
        ? "0px 2px 4px rgba(0, 0, 0, 0.8)" // Shadow for dark mode
        : "0px 2px 4px rgba(255, 255, 255, 0.6)", // Shadow for light mode
      lineHeight: "1.8",
      transition: "color 0.3s ease, text-shadow 0.3s ease", // Smooth transition
    },
  };

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <div style={dynamicStyles.container}>
          <h1 style={dynamicStyles.heading}>Book Your Tour</h1>
          <p style={dynamicStyles.paragraph}>
            Explore our featured tour packages and book your next adventure.
          </p>
        </div>
      )}
    </>
  );
};

export default Heading;
