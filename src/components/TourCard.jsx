// import React, { useState } from "react";
// import BookingForm from "./BookingForm"; // Import the BookingForm component
// import "./TourCard.css";

// const TourCard = ({ name, description, image, location, price, startPoint, endPoint }) => {
//   const [isFormOpen, setIsFormOpen] = useState(false); // State to manage form visibility
//   const [isLoading, setIsLoading] = useState(false); // State for loader
//   const [isCardBlue, setIsCardBlue] = useState(false); // State to change the card color

//   const handleBookNowClick = () => {
//     setIsLoading(true); // Start loader
//     setIsCardBlue(true); // Change card color
//     setTimeout(() => {
//       setIsLoading(false); // Hide loader
//       setIsFormOpen(true); // Open the booking form after 1 second
//     }, 1000); // 1 second delay for loading
//   };

//   const handleCloseForm = () => {
//     setIsFormOpen(false); // Close the form
//     setIsCardBlue(false); // Reset card color
//   };

//   return (
//     <div>
//       {/* Tour card with dynamic classes for blur and color */}
//       <div className={`tour-card ${isCardBlue ? "blue" : ""}`}>
//         <img src={image} alt={name} className="tour-image" />
//         <div className="tour-details">
//           <h3 className="tour-name">{name}</h3>
//           <p className="tour-description">{description}</p>
//           <div className="tour-footer">
//             <p className="tour-price">
//               <span>Price :</span> ${price}
//             </p>
//             <button className="book-now-btn" onClick={handleBookNowClick}>
//               {isLoading ? (
//                 <div className="loader"></div> // Show loader when isLoading is true
//               ) : (
//                 "Book Now"
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Conditionally render the BookingForm component as a popup */}
//       {isFormOpen && <BookingForm onClose={handleCloseForm} tourName={name} />}
//     </div>
//   );
// };

// export default TourCard;
// import React, { useState } from "react";
// import BookingForm from "./BookingForm"; // Import the BookingForm component
// import "./TourCard.css";

// const TourCard = ({ name, description, image, location, price, startPoint, endPoint }) => {
//   const [isFormOpen, setIsFormOpen] = useState(false); // State to manage form visibility
//   const [isLoading, setIsLoading] = useState(false); // State for loader
//   const [isCardBlue, setIsCardBlue] = useState(false); // State to change the card color

//   // Map URL for Google Maps
//   const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(startPoint)}+to+${encodeURIComponent(endPoint)}&output=embed`;

//   const handleBookNowClick = () => {
//     setIsLoading(true); // Start loader
//     setIsCardBlue(true); // Change card color
//     setTimeout(() => {
//       setIsLoading(false); // Hide loader
//       setIsFormOpen(true); // Open the booking form after 1 second
//     }, 1000); // 1 second delay for loading
//   };

//   const handleCloseForm = () => {
//     setIsFormOpen(false); // Close the form
//     setIsCardBlue(false); // Reset card color
//   };

//   return (
//     <div>
//       {/* Tour card with dynamic classes for blur and color */}
//       <div className={`tour-card ${isCardBlue ? "blue" : ""}`}>
//         <img src={image} alt={name} className="tour-image" loading="lazy" />
//         <div className="tour-details">
//           <h3 className="tour-name">{name}</h3>
//           <p className="tour-description">{description}</p>

//           {/* Google Map Section */}
//           <div className="map-container">
//             <iframe
//               title={`Map of ${name}`}
//               src={mapUrl}
//               allowFullScreen
//               loading="lazy"
//             ></iframe>
//           </div>

//           <div className="tour-footer">
//             <p className="tour-price">
//               <span>Price :</span> ${price}
//             </p>
//             <button className="book-now-btn" onClick={handleBookNowClick}>
//               {isLoading ? (
//                 <div className="loader"></div> // Show loader when isLoading is true
//               ) : (
//                 "Book Now"
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Conditionally render the BookingForm component as a popup */}
//       {isFormOpen && <BookingForm onClose={handleCloseForm} tourName={name} />}
//     </div>
//   );
// };

// export default TourCard;
import React, { useState, useEffect } from "react";
import BookingForm from "./BookingForm"; // Import the BookingForm component
import "./TourCard.css";

const TourCard = ({ name, description, image, location, price, startPoint, endPoint }) => {
  const [isFormOpen, setIsFormOpen] = useState(false); // State to manage form visibility
  const [isLoading, setIsLoading] = useState(true); // Set loading to true initially
  const [isCardBlue, setIsCardBlue] = useState(false); // State to change the card color

  // Map URL for Google Maps
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(startPoint)}+to+${encodeURIComponent(endPoint)}&output=embed`;

  // Handle the loading state
  useEffect(() => {
    // Simulate a loading delay for skeleton effect
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide loader after 1-2 seconds
    }, 1500); // 1.5 seconds delay for loading

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  const handleBookNowClick = () => {
    setIsLoading(true); // Start loader
    setIsCardBlue(true); // Change card color
    setTimeout(() => {
      setIsLoading(false); // Hide loader
      setIsFormOpen(true); // Open the booking form after 1 second
    }, 1000); // 1 second delay for loading
  };

  const handleCloseForm = () => {
    setIsFormOpen(false); // Close the form
    setIsCardBlue(false); // Reset card color
  };

  return (
    <div>
      {/* Tour card with dynamic classes for blur and color */}
      <div className={`tour-card ${isCardBlue ? "blue" : ""}`}>
        {isLoading ? (
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
                  <div className="loader"></div> // Show loader when isLoading is true
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
