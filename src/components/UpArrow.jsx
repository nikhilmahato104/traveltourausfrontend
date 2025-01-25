import React, { useState, useEffect } from "react";
import "./UpArrow.css";

const UpArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button className="up-arrow-btn fade-in" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
};

export default UpArrow;
