// src/components/Heading.jsx
import React, { useState, useEffect } from "react";
import Skeleton from "./Skeleton";

const Heading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Book Your Tour</h1>
          <p style={{ fontSize: "1.2rem", color: "#555" }}>
            Explore our featured tour packages and book your next adventure.
          </p>
        </div>
      )}
    </>
  );
};

export default Heading;
