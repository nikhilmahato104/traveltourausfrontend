// src/components/Heading.jsx
import React from "react";

const Heading = () => {
  return (
    <div style={{ textAlign: "center", margin: "20px 0S"}}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Book Your Tour</h1>
      <p style={{ fontSize: "1.2rem", color: "#555" }}>
        Explore our featured tour packages and book your next adventure.
      </p>
    </div>
  );
};

export default Heading;
