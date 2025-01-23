import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import "./Stats.css"; // Updated CSS with 3D effects

const Stats = () => {
  const statsData = [
    { label: "Website Visitors", count: 2054, color: "orange" },
    { label: "This Month's Visitors", count: 179, color: "purple" },
    { label: "Bookings This Month", count: 56, color: "green" },
  ];

  const [scroll, setScroll] = useState(false);
  const statsRef = useRef(null);

  const handleScroll = () => {
    if (statsRef.current) {
      const rect = statsRef.current.getBoundingClientRect();
      // Check if the stats component is visible in the viewport
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setScroll(true);
      }
    }
  };

  const handleClick = () => {
    console.log("User clicked!");
  };

  useEffect(() => {
    // Event listeners for scroll and click
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClick);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={statsRef} className="stats-container">
      {statsData.map((stat, index) => (
        <div key={index} className={`stats-circle ${stat.color}`}>
          <div className="stats-content">
            <h2 className="stats-number">
              {scroll && (
                <>
                  <CountUp
                    start={stat.count * 0.9} // Start from 90% of the target value
                    end={stat.count}
                    duration={10}
                  />
                  <span>+</span>
                </>
              )}
            </h2>
            <p className="stats-label">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
