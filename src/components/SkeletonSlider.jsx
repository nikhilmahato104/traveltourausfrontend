// src/components/SkeletonSlider.jsx
import React from "react";
import "./SkeletonSlider.css"; // Optional for any additional styles

const SkeletonSlider = () => {
  return (
    <div className="skeleton-carousel">
      <div className="skeleton-carousel-images">
        <div className="skeleton-carousel-item skeleton-image"></div>
        <div className="skeleton-carousel-item skeleton-image"></div>
        <div className="skeleton-carousel-item skeleton-image"></div>
        <div className="skeleton-carousel-item skeleton-image"></div>
        <div className="skeleton-carousel-item skeleton-image"></div>
      </div>
    </div>
  );
};

export default SkeletonSlider;
