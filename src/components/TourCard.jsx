import React, { useState, useEffect } from "react";
import BookingForm from "./BookingForm"; // Import the BookingForm component
import "./TourCard.css";

const TourCard = ({ name, description, image, price, rating = 5 }) => {
  const [isFormOpen, setIsFormOpen] = useState(false); // State to manage form visibility
  const [isLoading, setIsLoading] = useState(false); // State for button loading
  const [isCardBlue, setIsCardBlue] = useState(false); // State to change the card color
  const [showSkeleton, setShowSkeleton] = useState(true); // State for skeleton loader visibility

  // Simulate initial loading delay for skeleton effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false); // Hide skeleton after 1.5 seconds
    }, 2000);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  const handleBookNowClick = () => {
    setShowSkeleton(false); // Hide skeleton loader
    setIsLoading(true); // Show the circular loader

    setTimeout(() => {
      setIsLoading(false); // Hide loader after 1 second
      setIsFormOpen(true); // Open the booking form
      setIsCardBlue(true); // Change card color to blue
      document.querySelector(".booking-form-container")?.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to form
    }, 1000);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false); // Close the form
    setIsCardBlue(false); // Reset card color
  };

  const renderStars = (rating) => {
    const maxStars = 5;
    const filledStars = Math.round(rating); // Round to the nearest whole number
    const emptyStars = maxStars - filledStars;

    return (
      <div className="star-rating">
        {Array(filledStars)
          .fill("★")
          .map((star, index) => (
            <span key={index} className="filled-star">
              {star}
            </span>
          ))}
        {Array(emptyStars)
          .fill("☆")
          .map((star, index) => (
            <span key={index} className="empty-star">
              {star}
            </span>
          ))}
      </div>
    );
  };

  return (
    <div className="big-tour-div">
      {/* Tour card with dynamic classes for color change */}
      <div className={`tour-card ${isCardBlue ? "blue" : ""}`}>
        {showSkeleton ? (
          <div className="skeleton">
            {/* Skeleton card */}
            <div className="skeleton-card">
              <div className="skeleton-image"></div>
              <div className="skeleton-text" style={{ width: "80%" }}></div>
              <div className="skeleton-text" style={{ width: "60%" }}></div>
              <div className="skeleton-text" style={{ width: "40%" }}></div>
            </div>
          </div>
        ) : (
          <div className="tour-details">
            <img src={image} alt={name} className="tour-image" loading="lazy" />
            <h2 className="tour-name">{name}</h2>
            <p className="tour-description">{description}</p>

            {/* Render Star Rating */}
            {renderStars(rating)}

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
