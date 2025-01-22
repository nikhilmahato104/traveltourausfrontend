import React, { useState, useEffect } from "react";
import BookingForm from "./BookingForm"; // Import the BookingForm component
import "./TourCard.css";

const TourCard = ({ name, description, image, location, price, startPoint, endPoint }) => {
  const [isFormOpen, setIsFormOpen] = useState(false); // State to manage form visibility
  const [isLoading, setIsLoading] = useState(false); // Start as false, will be true during the loader state
  const [isCardBlue, setIsCardBlue] = useState(false); // State to change the card color
  const [showSkeleton, setShowSkeleton] = useState(true); // New state to control skeleton loader visibility

  // Map URL for Google Maps
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(startPoint)}+to+${encodeURIComponent(endPoint)}&output=embed`;

  // Handle the loading state
  useEffect(() => {
    // Simulate initial loading delay for skeleton effect
    const timer = setTimeout(() => {
      setShowSkeleton(false); // Hide skeleton after 1.5 seconds
    }, 1500); // Initial skeleton loader duration

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  const handleBookNowClick = () => {
    setShowSkeleton(false); // Immediately hide the skeleton loader when the button is clicked
    setIsLoading(true); // Show the circular loader

    setTimeout(() => {
      setIsLoading(false); // Hide loader after 2 seconds
      setIsFormOpen(true); // Open the booking form
      setIsCardBlue(true); // Change card color to blue
    }, 1000); // 2 seconds delay for loader only
  };

  const handleCloseForm = () => {
    setIsFormOpen(false); // Close the form
    setIsCardBlue(false); // Reset card color
  };

  return (
    <div>
      {/* Tour card with dynamic classes for blur and color */}
      <div className={`tour-card ${isCardBlue ? "blue" : ""}`}>
        {showSkeleton ? (
          <div className="skeleton">
            {/* Skeleton card */}
            <div className="skeleton-card">
              <div className="skeleton-image"></div>
              <div className="skeleton-text" style={{ width: '80%' }}></div>
              <div className="skeleton-text" style={{ width: '60%' }}></div>
              <div className="skeleton-text" style={{ width: '40%' }}></div>
            </div>
          </div>
        ) : (
          <div className="tour-details">
            <img src={image} alt={name} className="tour-image" loading="lazy" />
            <h3 className="tour-name">{name}</h3>
            <p className="tour-description">{description}</p>

            {/* Google Map Section */}
            <div className="map-container">
              <iframe
                title={`Map of ${name}`}
                src={mapUrl}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            <div className="tour-footer">
              <p className="tour-price">
                <span>Price :</span> ${price}
              </p>
              <button className="book-now-btn" onClick={handleBookNowClick}>
                {isLoading ? (
                  <div className="loader"></div> // Show circular loader
                ) : (
                  "Book Now"
                )}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Conditionally render the BookingForm component as a popup */}
      {isFormOpen && <BookingForm onClose={handleCloseForm} tourName={name} />}
    </div>
  );
};

export default TourCard;
